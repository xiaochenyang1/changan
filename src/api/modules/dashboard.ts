import http from '../index'

// 获取千停数据
export const getQianTingData = () => {
  return http.get('/qianting')
}

// 获取产量计划完成率-数量
export const getChanLiangShuLiang = () => {
  return http.get('/chanliang/shuliang')
}

// 获取产量计划完成率-时间
export const getChanLiangShiJian = () => {
  return http.get('/chanliang/shijian')
}

// 获取制造周期
export const getZhizaoZhouqi = () => {
  return http.get('/zhizao/zhouqi')
}

// 获取车间电池数据
export const getCheJianDianChi = () => {
  return http.get('/chejian/dianchi')
}

// 获取总装下线外观
export const getZongzhuangWaiguan = () => {
  return http.get('/zongzhuang/waiguan')
}

// 获取龙兴工厂早会看板
export const getZaohuiKanban = () => {
  return http.get('/zaohui/kanban')
}