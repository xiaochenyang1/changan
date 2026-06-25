import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

// 环境配置
const envConfig = {
  development: {
    VITE_APP_BASE_API: '/api',
  },
  production: {
    VITE_APP_BASE_API: '/api',
  },
}

const getBaseApi = (): string => {
  const env = envConfig[import.meta.env.MODE as keyof typeof envConfig] || envConfig.development
  return env.VITE_APP_BASE_API
}

class HttpRequest {
  private instance: AxiosInstance

  constructor(baseURL: string = getBaseApi()) {
    this.instance = axios.create({
      baseURL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })

    this.setupInterceptors()
  }

  private setupInterceptors() {
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        NProgress.start()
        const token = localStorage.getItem('token')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => {
        NProgress.done()
        return Promise.reject(error)
      }
    )

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        NProgress.done()
        const { data, status } = response

        if (status === 200) {
          return data
        } else {
          ElMessage.error(data.message || '请求失败')
          return Promise.reject(data)
        }
      },
      (error) => {
        NProgress.done()
        const { response } = error

        if (response) {
          ElMessage.error(response.data.message || '网络错误')
        } else {
          ElMessage.error('网络连接失败')
        }

        return Promise.reject(error)
      }
    )
  }

  public request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.instance.request(config)
  }

  public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET', url })
  }

  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST', url, data })
  }

  public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PUT', url, data })
  }

  public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE', url })
  }
}

export const http = new HttpRequest()
export default http