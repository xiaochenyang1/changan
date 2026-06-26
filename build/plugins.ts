import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { PluginOption } from 'vite'

export function plugins(): PluginOption[] {
  return [
    vue(),
    Components({
      // ElementPlusResolver：按需自动引入 el-* 组件及其样式（仅用到的部分，tree-shaken）
      resolvers: [ElementPlusResolver()],
    }),
  ]
}
