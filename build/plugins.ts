import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { PluginOption } from 'vite'

export function plugins(): PluginOption[] {
  return [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ]
}