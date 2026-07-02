import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 懒加载视图组件
const LanhuQiantingshuju = () => import('@/views/lanhu_qiantingshuju/index.vue')
const LanhuZongzhuangxiaxianwaiguanxiaxian = () => import('@/views/lanhu_zongzhuangxiaxianwaiguanxiaxian/index.vue')
const LanhuChanliangjihuawanchenglvshuliang = () => import('@/views/lanhu_chanliangjihuawanchenglvshuliang/index.vue')
const LanhuChanliangjihuawanchenglvshijian = () => import('@/views/lanhu_chanliangjihuawanchenglvshijian/index.vue')
const LanhuZhizaozhouqi = () => import('@/views/lanhu_zhizaozhouqi/index.vue')
const LanhuChangandianchichejian = () => import('@/views/lanhu_changandianchichejian/index.vue')
const LanhuLongxinggongchangzaohuikanban = () => import('@/views/lanhu_longxinggongchangzaohuikanban/index.vue')
const LanhuChanxiankanban = () => import('@/views/lanhu_chanxiankanban/index.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    // 临时调试：默认展示电池车间页面，调试完请改回 /lanhu_longxinggongchangzaohuikanban
    redirect: '/lanhu_changandianchichejian',
  },
  {
    path: '/lanhu_qiantingshuju',
    name: 'lanhu_qiantingshuju',
    component: LanhuQiantingshuju,
    meta: { title: '千停数据' },
  },
  {
    path: '/lanhu_zongzhuangxiaxianwaiguanxiaxian',
    name: 'lanhu_zongzhuangxiaxianwaiguanxiaxian',
    component: LanhuZongzhuangxiaxianwaiguanxiaxian,
    meta: { title: '总装下线外观' },
  },
  {
    path: '/lanhu_chanliangjihuawanchenglvshuliang',
    name: 'lanhu_chanliangjihuawanchenglvshuliang',
    component: LanhuChanliangjihuawanchenglvshuliang,
    meta: { title: '产量计划完成率-数量' },
  },
  {
    path: '/lanhu_chanliangjihuawanchenglvshijian',
    name: 'lanhu_chanliangjihuawanchenglvshijian',
    component: LanhuChanliangjihuawanchenglvshijian,
    meta: { title: '产量计划完成率-时间' },
  },
  {
    path: '/lanhu_zhizaozhouqi',
    name: 'lanhu_zhizaozhouqi',
    component: LanhuZhizaozhouqi,
    meta: { title: '制造周期' },
  },
  {
    path: '/lanhu_changandianchichejian',
    name: 'lanhu_changandianchichejian',
    component: LanhuChangandianchichejian,
    meta: { title: '车间电池' },
  },
  {
    path: '/lanhu_longxinggongchangzaohuikanban',
    name: 'lanhu_longxinggongchangzaohuikanban',
    component: LanhuLongxinggongchangzaohuikanban,
    meta: { title: '龙兴工厂早会看板' },
  },
  {
    path: '/lanhu_chanxiankanban',
    name: 'lanhu_chanxiankanban',
    component: LanhuChanxiankanban,
    meta: { title: '产线看板' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// 路由守卫
router.beforeEach((to, _from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} - 长安孪生大屏`
  }
  next()
})

export default router