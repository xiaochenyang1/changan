import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { plugins } from './build/plugins'
import { proxy } from './build/proxy'
import { getEnv } from './build/getEnv'

export default defineConfig(({ mode }) => {
  const env = getEnv(mode)
  // 读取 .env.[mode] 文件中的变量，用于构建期配置（如部署子路径）
  const fileEnv = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    // 部署子路径由 .env 的 VITE_APP_BASE_URL 控制，未配置则默认根路径 '/'
    // 生产若挂在 nginx 子路径下（如 /dt-ui/），在 .env.production 里填对应值即可
    base: fileEnv.VITE_APP_BASE_URL || '/',
    plugins: plugins(),
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 19000,
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
