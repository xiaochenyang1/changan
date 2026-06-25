import type { ProxyOptions } from 'vite'

export function proxy(): Record<string, ProxyOptions> {
  return {
    '/api': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/api/, ''),
    },
  }
}