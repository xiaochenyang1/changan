import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { plugins } from './build/plugins'
import { proxy } from './build/proxy'
import { getEnv } from './build/getEnv'

export default defineConfig(({ mode }) => {
  const env = getEnv(mode)

  return {
    // 部署在 nginx 的 /dt-ui 子路径下，生产构建需带上该前缀；本地开发仍用根路径
    base: mode === 'production' ? '/dt-ui/' : '/',
    plugins: plugins(),
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      open: false,
      proxy: proxy(),
    },
    build: {
      outDir: 'dist',
      sourcemap: mode !== 'production',
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    define: {
      __ENV__: JSON.stringify(env),
    },
  }
})
