import type { ProxyOptions } from 'vite'

export function proxy(): Record<string, ProxyOptions> {
  // 长安永洪数据平台网关：后端已放行跨域，前端直连（地址由 .env 配置），无需代理。
  // 车间任务系统接口（/api/tasks*）：开发环境代理到服务器上的任务后端 8082。
  // 仅代理 tasks 路径，不影响 dashboard.ts 其它 /api/* 调用。
  // 注：vite 代理是 Node 服务端转发，不受浏览器 CORS 限制（直连 8082 会被后端 CORS 拦）。
  return {
    '/api/tasks': {
      target: 'http://118.196.18.102:8082',
      changeOrigin: true,
    },
  }
}