// 全局配置
export const config = {
  // 应用名称
  appName: '长安孪生大屏',

  // API 基础路径
  apiBaseUrl: import.meta.env.VITE_APP_BASE_API || '/api',

  // 分页配置
  pageSize: 20,
  pageSizes: [10, 20, 50, 100],

  // 日期格式
  dateFormat: 'YYYY-MM-DD',
  dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',

  // 权限配置
  permission: {
    // 是否启用权限验证
    enabled: true,
    // 默认角色
    defaultRole: 'guest',
  },
}

export default config