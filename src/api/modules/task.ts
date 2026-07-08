import http from '../index'

/**
 * 车间任务系统接口（移植自 workshop-task-web）
 * 复用大屏公共 http 实例（baseURL=/api），开发环境经 vite 代理转发到任务后端。
 * 写法与 dashboard.ts 保持一致：export const + 箭头函数 + http.xxx()。
 * 注意：公共 http 响应拦截只解到后端信封 { code, message, data }（不判 code），
 * 故各方法返回 ApiResult<T>，调用处需自行判断 code === 0（见 CreateTaskModal.submit）。
 */

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
  return http.post<ApiResult<Task>>('/tasks', data)
}
