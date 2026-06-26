import type { ProxyOptions } from 'vite'

// 长安永洪数据平台网关地址（6 个指标接口走这里）
const CHANGAN_GATEWAY = 'http://118.196.18.102:8080'

export function proxy(): Record<string, ProxyOptions> {
  return {
    '/api': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/api/, ''),
    },
    // 长安指标网关：/gw/xxx -> http://118.196.18.102:8080/api/xxx
    // 用代理是为了绕开浏览器 CORS（网关未放行 localhost 跨域）
    '/gw': {
      target: CHANGAN_GATEWAY,
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/gw/, '/api'),
    },
  }
}