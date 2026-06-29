// messenger.ts - 全局唯一的 COSMO-SIM iframe 通信实例（单例）
// 「切换看板」通知需要在所有页面生效（切到工厂页后还要能切回电池页），
// 故用单例：App.vue 负责 init/destroy 与订阅切换，各业务页 import 同一实例做 publish，
// 避免多实例重复握手、重复绑定 message 监听。
import { createIframeMessenger } from '@/utils/iframeMessage'

export const messenger = createIframeMessenger({ name: 'changan-dashboard' })
