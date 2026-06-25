import NProgress from 'nprogress'

// NProgress 配置
NProgress.configure({
  showSpinner: false, // 禁用加载动画
  trickleSpeed: 200, // 进度条增量速度
  minimum: 0.3, // 起始百分比
})

export default NProgress