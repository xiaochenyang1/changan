// 通用响应结构
export interface Response<T = any> {
  code: number
  data: T
  message: string
}

// 分页参数
export interface PageParams {
  page: number
  pageSize: number
}

// 分页响应
export interface PageResult<T = any> {
  list: T[]
  total: number
  page: number
  pageSize: number
}