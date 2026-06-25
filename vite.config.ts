import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { plugins } from './build/plugins'
import { proxy } from './build/proxy'
import { getEnv } from './build/getEnv'

export default defineConfig(({ mode }) => {
  const env = getEnv(mode)

  return {
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
      rollupOptions: {
        output: {
          manualChunks: {
            'element-plus': ['element-plus'],
            'vant': ['vant'],
          },
        },
      },
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