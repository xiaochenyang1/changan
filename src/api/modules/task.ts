import axios from 'axios'

/**
 * 车间任务系统接口（移植自 workshop-task-web）
 * 直连任务后端（地址由 .env 的 VITE_APP_TASK_URL 配置），写法参照 changan.ts 的独立实例。
 * ⚠️ 直连是浏览器跨域请求，必须后端放行 CORS，否则会被浏览器拦截（当前预检 OPTIONS 返回 403）。
 * 响应拦截只解到后端信封 { code, message, data }（不判 code），调用处自行判断 code === 0。
 */

// 独立 axios 实例，避免影响公共 http(baseURL=/api) 与 dashboard.ts
const task = axios.create({
  baseURL: import.meta.env.VITE_APP_TASK_URL, // 如 http://118.196.18.102:8082/api
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
})

// 只解到后端信封，交给调用处判 code（与公共 http 行为保持一致）
task.interceptors.response.use((resp) => resp.data)

/** 后端统一响应结构 */
export interface ApiResult<T = unknown> {
  code: number
  message: string
  data: T
}

/** 任务实体（仅保留新建表单需要的字段） */
export interface Task {
  id?: number
  taskNo?: string
  title: string
  description?: string
  workshop: string
  groupName: string
  priority: string
  status?: string
  assignee?: string
  deadline?: string
  createdAt?: string
  updatedAt?: string
}

// 创建任务
export const createTask = (data: Partial<Task>) => {
  return task.post<any, ApiResult<Task>>('/tasks', data)
}
