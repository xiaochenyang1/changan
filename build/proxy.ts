import type { ProxyOptions } from 'vite'

export function proxy(): Record<string, ProxyOptions> {
  // 后端已放行跨域，前端直连（网关地址由 .env 配置），无需 vite 代理
  return {}
}