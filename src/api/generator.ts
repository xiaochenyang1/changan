import http from './index'

// 代码生成器 API
export const generator = {
  // 获取表列表
  getTableList: (params?: any) => http.get('/generator/tables', { params }),

  // 生成代码
  generate: (params: { tableName: string; moduleName: string }) =>
    http.post('/generator/code', params),

  // 预览代码
  preview: (tableName: string) => http.get(`/generator/preview/${tableName}`),

  // 下载代码
  download: (tableName: string) => http.get(`/generator/download/${tableName}`, { responseType: 'blob' }),
}