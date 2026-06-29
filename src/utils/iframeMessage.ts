// iframeMessage.ts - COSMO-SIM 与外部 iframe 页面通信工具（ESM + TS 版）
// 基于 postMessage 封装的发布/订阅通信工具，无框架依赖。
// 业务事件协议详见《COSMO-SIM与外部iframe页面通信API.md》。

// 事件前缀常量定义：统一消息类型前缀，避免与其他事件冲突
const EventPrefixes = {
  // iframe 相关前缀：业务消息统一添加该前缀，确保父子通信隔离
  IFRAME_PUBLISH: 'Cosmo_',
  IFRAME_SUBSCRIBE: 'Cosmo_',

  // 内部系统事件：用于连接协商，不带前缀
  SYSTEM_EVENTS: {
    CONNECT: 'connect', // 子 iframe 发起连接请求
    CONNECT_ACK: 'connect_ack', // 父页面确认连接成功
    DISCONNECT: 'disconnect', // 子 iframe 发起断开请求
    READY_REQUEST: 'ready_request', // 子 iframe 询问父页面是否就绪
    READY_RESPONSE: 'ready_response' // 父页面告知已就绪
  }
} as const

/** 连接状态 */
export type ConnectionStatus =
  | 'connecting'
  | 'connected'
  | 'disconnected'
  | 'error'
  | 'retrying'

/** 标准消息结构 */
export interface IframeMessage<T = any> {
  type: string
  data: T
  timestamp?: string
  messageId?: string
}

/** 消息回调 */
export type MessageCallback = (message: IframeMessage) => void

/** 创建实例的配置项 */
export interface CreateMessengerOptions {
  /** 实例名称（父页面识别子 iframe 用），默认 'cosmo-iframe' */
  name?: string
  /** 连接超时时间（ms），默认 5000 */
  connectTimeout?: number
  /** 连接失败最大重试次数，默认 5 */
  maxRetries?: number
  /** 重试间隔时间（ms），默认 3000 */
  retryInterval?: number
}

/** 通信实例对外暴露的 API */
export interface IframeMessenger {
  /** 是否已连接父页面 */
  readonly isConnected: boolean
  /** 当前连接状态 */
  readonly connectionStatus: ConnectionStatus
  /** 连接错误信息（null 表示无错误） */
  readonly connectionError: string | null
  /** 消息历史记录（副本） */
  readonly messageHistory: IframeMessage[]
  /** 当前重试次数 */
  readonly retryCount: number
  /** 初始化通信：添加监听 + 发起连接 */
  init: () => void
  /** 销毁通信：移除监听 + 断开 + 清空订阅 */
  destroy: () => void
  /** 发布业务消息到父页面 */
  publish: (type: string, data?: any) => boolean
  /** 订阅父页面消息，返回取消订阅函数 */
  subscribe: (type: string, callback: MessageCallback) => () => void
  /** 取消订阅（不传 callback 则清空该类型所有回调） */
  unsubscribe: (type: string, callback?: MessageCallback) => void
  /** 手动发起连接 */
  connect: () => void
  /** 手动断开连接 */
  disconnect: () => void
}

/**
 * 纯 JS iframe 消息通信工具（无任何框架依赖）
 * 用法：
 * 1. 创建实例：const messenger = createIframeMessenger({ name: 'my-iframe' })
 * 2. 初始化连接：messenger.init()
 * 3. 订阅/发布消息：messenger.subscribe('Cosmo_xxx', cb); messenger.publish('xxx', data)
 * 4. 销毁清理：页面卸载前调用 messenger.destroy()
 */
export function createIframeMessenger(options: CreateMessengerOptions = {}): IframeMessenger {
  // 1. 解析配置参数：默认值兜底，避免未传参导致的错误
  const {
    name = 'cosmo-iframe',
    connectTimeout = 5000,
    maxRetries = 5,
    retryInterval = 3000
  } = options

  // 2. 内部状态管理：仅通过 getter 暴露，避免外部直接修改
  let isConnected = false // 是否已连接父页面
  let connectionStatus: ConnectionStatus = 'disconnected' // 连接状态
  let connectionError: string | null = null // 连接错误信息（null 表示无错误）
  let retryCount = 0 // 当前重试次数
  let messageHistory: IframeMessage[] = [] // 消息历史记录
  let isListening = false // 是否已添加消息监听（避免重复绑定事件）

  // 3. 计时器管理：存储定时器 ID，销毁时清理避免内存泄漏
  let connectTimeoutId: number | null = null
  let retryTimeoutId: number | null = null

  // 4. 订阅回调映射：key=消息类型（带 Cosmo_ 前缀），value=该类型的所有回调集合
  const subscriptions = new Map<string, Set<MessageCallback>>()

  // 是否处于 iframe 环境：非 iframe 时 window.parent === window
  const inIframe = window.parent != null && window.parent !== window

  /** 生成唯一消息 ID：确保每条消息可追溯 */
  const generateMessageId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
  }

  /**
   * 基础消息发送方法：底层实现，处理前缀拼接和环境校验
   * @param type 消息类型（系统事件/业务类型）
   * @param data 消息内容（支持任意可序列化类型）
   * @param addPrefix 是否添加 IFRAME_PUBLISH 前缀（业务消息需加）
   */
  const sendMessage = (type: string, data: any = {}, addPrefix = false): boolean => {
    // 非 iframe 环境拦截：避免在普通页面调用报错
    if (!inIframe) {
      console.error('无法发送消息：当前环境不是 iframe')
      return false
    }

    // 处理消息前缀：业务消息自动加 Cosmo_，系统事件不加
    const eventType = addPrefix ? `${EventPrefixes.IFRAME_PUBLISH}${type}` : type
    // 构造标准消息结构：包含类型、数据、时间戳、唯一 ID
    const message: IframeMessage = {
      type: eventType,
      data: data,
      timestamp: new Date().toISOString(),
      messageId: generateMessageId()
    }

    console.log('发送消息:', message)

    try {
      // 发送消息到父页面：生产环境建议将 '*' 改为父页面具体域名（如 'https://parent.com'）
      window.parent.postMessage(message, '*')
      // 记录消息历史：便于后续排查问题
      messageHistory.push(message)
      return true
    } catch (error) {
      const errorMsg = `发送消息失败: ${error instanceof Error ? error.message : String(error)}`
      console.error(errorMsg)
      connectionError = errorMsg
      return false
    }
  }

  /** 业务消息发布：向父页面发送业务数据 */
  const publish = (type: string, data: any = {}): boolean => {
    return sendMessage(type, data, false)
  }

  /**
   * 业务消息订阅：监听父页面发送的指定类型消息
   * @param type 消息类型（传 '*' 订阅所有消息）
   * @param callback 消息回调
   * @returns 取消订阅函数
   */
  const subscribe = (type: string, callback: MessageCallback): (() => void) => {
    const eventType = type === '*' ? '*' : `${type}`

    // 初始化该类型的回调集合（若不存在）
    if (!subscriptions.has(eventType)) {
      subscriptions.set(eventType, new Set())
    }
    subscriptions.get(eventType)!.add(callback)

    // 闭包返回取消订阅函数：确保能精准移除当前回调
    return () => {
      unsubscribe(type, callback)
    }
  }

  /**
   * 取消消息订阅：移除指定类型的回调（支持清空单个/所有）
   * @param type 消息类型
   * @param callback 要移除的回调（不传则清空该类型所有回调）
   */
  const unsubscribe = (type: string, callback?: MessageCallback): void => {
    const eventType = type === '*' ? '*' : `${type}`
    if (!subscriptions.has(eventType)) return

    const callbacks = subscriptions.get(eventType)!
    if (callback) {
      callbacks.delete(callback)
    } else {
      callbacks.clear()
    }

    // 回调集合为空时删除 key：释放内存
    if (callbacks.size === 0) {
      subscriptions.delete(eventType)
    }
  }

  /** 父页面消息处理：过滤无效消息，触发订阅回调，处理系统事件 */
  const handleParentMessage = (event: MessageEvent): void => {
    console.log('iframe 收到消息:', event)

    // 过滤非父页面消息：避免其他 iframe 或窗口的干扰
    if (event.source !== window.parent) return

    // 验证消息格式：必须是对象且包含 type 字段
    if (!event.data || typeof event.data !== 'object' || !('type' in event.data)) {
      console.warn('收到无效格式的消息', event.data)
      return
    }

    // 记录消息历史
    const message = event.data as IframeMessage
    messageHistory.push(message)

    // 1. 处理父页面就绪响应：未连接时触发重新连接
    if (message.type === EventPrefixes.SYSTEM_EVENTS.READY_RESPONSE && !isConnected) {
      connect()
      return
    }

    // 2. 处理连接确认：更新连接状态，清理计时器
    if (message.type === EventPrefixes.SYSTEM_EVENTS.CONNECT_ACK) {
      if (connectTimeoutId) {
        clearTimeout(connectTimeoutId)
        connectTimeoutId = null
      }
      if (retryTimeoutId) {
        clearTimeout(retryTimeoutId)
        retryTimeoutId = null
      }

      isConnected = true
      connectionStatus = 'connected'
      connectionError = null
      retryCount = 0
      console.log('已成功连接到 Cosmo 事件中心')
      return
    }

    // 3. 触发业务消息订阅回调：仅处理带 Cosmo_ 前缀的消息
    if (
      message.type.startsWith(EventPrefixes.IFRAME_SUBSCRIBE) &&
      subscriptions.has(message.type)
    ) {
      subscriptions.get(message.type)!.forEach((cb) => {
        try {
          cb(message)
        } catch (error) {
          console.error(`处理 ${message.type} 消息回调出错:`, error)
        }
      })
    }

    // 4. 触发通配符订阅：* 匹配所有消息
    if (subscriptions.has('*')) {
      subscriptions.get('*')!.forEach((cb) => {
        try {
          cb(message)
        } catch (error) {
          console.error('处理通配符消息回调出错:', error)
        }
      })
    }
  }

  /** 连接重试逻辑：失败后延迟重试，达到最大次数则停止 */
  const retryConnect = (): void => {
    if (retryTimeoutId) {
      clearTimeout(retryTimeoutId)
      retryTimeoutId = null
    }

    // 达到最大重试次数：标记为错误状态
    if (retryCount >= maxRetries) {
      connectionStatus = 'error'
      connectionError = `已达最大重试次数(${maxRetries})，连接失败`
      isConnected = false
      return
    }

    // 延迟重试：更新状态和重试次数
    retryCount++
    connectionStatus = 'retrying'
    connectionError = `连接失败，${retryInterval / 1000}秒后第${retryCount}次重试...`

    retryTimeoutId = window.setTimeout(() => {
      connect()
    }, retryInterval)
  }

  /** 发起连接：与父页面协商连接，处理超时重试 */
  const connect = (): void => {
    if (connectTimeoutId) {
      clearTimeout(connectTimeoutId)
      connectTimeoutId = null
    }

    connectionStatus = 'connecting'
    connectionError = null

    console.log('发起连接...', connectionStatus)

    // 1. 询问父页面是否就绪
    sendMessage(
      EventPrefixes.SYSTEM_EVENTS.READY_REQUEST,
      { name: name, timestamp: new Date().toISOString() },
      false
    )

    // 2. 发送连接请求
    sendMessage(
      EventPrefixes.SYSTEM_EVENTS.CONNECT,
      { name: name, timestamp: new Date().toISOString() },
      false
    )

    // 3. 设置连接超时：超时未响应则触发重试
    connectTimeoutId = window.setTimeout(() => {
      console.warn(`连接超时(${connectTimeout}ms)，准备重试`)
      connectionError = `连接超时(${connectTimeout}ms)`
      retryConnect()
    }, connectTimeout)
  }

  /** 断开连接：主动与父页面断开，清理资源 */
  const disconnect = (): void => {
    sendMessage(EventPrefixes.SYSTEM_EVENTS.DISCONNECT, { message: '主动断开连接' }, false)

    if (connectTimeoutId) {
      clearTimeout(connectTimeoutId)
      connectTimeoutId = null
    }
    if (retryTimeoutId) {
      clearTimeout(retryTimeoutId)
      retryTimeoutId = null
    }

    isConnected = false
    connectionStatus = 'disconnected'
  }

  const resetState = (): void => {
    isConnected = false
    connectionStatus = 'connecting'
    connectionError = null
    retryCount = 0
    messageHistory = []
    if (connectTimeoutId) clearTimeout(connectTimeoutId)
    if (retryTimeoutId) clearTimeout(retryTimeoutId)
    connectTimeoutId = null
    retryTimeoutId = null
  }

  /** 初始化通信：添加消息监听，发起连接（必须手动调用） */
  const init = (): void => {
    resetState()
    console.log('初始化通信...', window.parent)
    if (!isListening) {
      window.addEventListener('message', handleParentMessage)
      isListening = true
    }

    // 仅在非已连接状态发起连接：避免重复连接
    if (connectionStatus !== 'connected') {
      connect()
    }
  }

  /** 销毁通信：移除监听，清理资源（必须手动调用） */
  const destroy = (): void => {
    if (isListening) {
      window.removeEventListener('message', handleParentMessage)
      isListening = false
    }

    disconnect()

    subscriptions.clear()
    messageHistory = []
  }

  // 暴露外部 API：状态通过 getter 只读访问，方法直接暴露
  return {
    get isConnected() {
      return isConnected
    },
    get connectionStatus() {
      return connectionStatus
    },
    get connectionError() {
      return connectionError
    },
    get messageHistory() {
      return [...messageHistory]
    },
    get retryCount() {
      return retryCount
    },
    init,
    destroy,
    publish,
    subscribe,
    unsubscribe,
    connect,
    disconnect
  }
}
