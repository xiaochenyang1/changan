/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_BASE_API: string
  readonly VITE_APP_PORT: number
  readonly VITE_APP_GATEWAY_URL: string
  readonly VITE_APP_GATEWAY_APPKEY: string
  readonly VITE_APP_GATEWAY_SIGN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}