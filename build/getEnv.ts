interface EnvConfig {
  VITE_APP_TITLE: string
  VITE_APP_BASE_API: string
  VITE_APP_PORT: number
}

export function getEnv(mode: string): EnvConfig {
  const envMap: Record<string, EnvConfig> = {
    development: {
      VITE_APP_TITLE: '开发环境',
      VITE_APP_BASE_API: '/api',
      VITE_APP_PORT: 3000,
    },
    production: {
      VITE_APP_TITLE: '生产环境',
      VITE_APP_BASE_API: '/api',
      VITE_APP_PORT: 80,
    },
  }

  return envMap[mode] || envMap.development
}