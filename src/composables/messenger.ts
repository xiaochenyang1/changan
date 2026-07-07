// messenger.ts - 全局唯一的 COSMO-SIM iframe 通信实例（单例）
// 「切换看板」通知需要在所有页面生效（切到工厂页后还要能切回电池页），
// 故用单例：App.vue 负责 init/destroy 与订阅切换，各业务页 import 同一实例做 publish，
// 避免多实例重复握手、重复绑定 message 监听。
import { createIframeMessenger } from '@/utils/iframeMessage'

export const messenger = createIframeMessenger({ name: 'changan-dashboard' })

/**
 * 触发 SIM3D 二级蓝图事件。
 * 蓝图统一监听固定 type「Cosmo_LowCode_trigger」，再按 data.eventName 分发到具体动作，
 * 这里把易错的固定 type 与 { eventName, eventData } 结构收口，业务侧只给语义参数即可。
 *
 * @param eventName 蓝图事件名，如 'FOCUS_ASSET'（聚焦产线）、'focus-device'（聚焦设备）
 * @param eventData 事件载荷，如产线/设备名称「产线1」「电芯拆垛上料」
 * @example triggerLowCode('FOCUS_ASSET', '产线1')
 */
export function triggerLowCode(eventName: string, eventData: string) {
  return messenger.publish('Cosmo_LowCode_trigger', { eventName, eventData })
}
