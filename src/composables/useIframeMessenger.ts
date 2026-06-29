// useIframeMessenger.ts - 在 Vue 组件中使用 COSMO-SIM iframe 通信工具
// 自动在 onMounted 时 init()、onBeforeUnmount 时 destroy()，免去手动管理生命周期。

import { onBeforeUnmount, onMounted } from 'vue'
import {
  createIframeMessenger,
  type CreateMessengerOptions,
  type IframeMessenger
} from '@/utils/iframeMessage'

/**
 * 在组件内创建并自动托管一个 iframe 通信实例。
 *
 * @example
 * const messenger = useIframeMessenger()
 * // 订阅 3D 场景的模型点击事件
 * messenger.subscribe('Cosmo_ModelClick', (msg) => {
 *   console.log('被点击的模型:', msg.data)
 * })
 * // 让 3D 场景聚焦某台设备
 * messenger.publish('Cosmo_Preview_Action', {
 *   type: 'focus-actor',
 *   data: { iotCode: 'xxx' }
 * })
 *
 * @param options 通信配置（name / connectTimeout / maxRetries / retryInterval）
 * @returns 通信实例，可直接 publish / subscribe
 */
export function useIframeMessenger(options?: CreateMessengerOptions): IframeMessenger {
  const messenger = createIframeMessenger(options)

  onMounted(() => {
    messenger.init()
  })

  onBeforeUnmount(() => {
    messenger.destroy()
  })

  return messenger
}
