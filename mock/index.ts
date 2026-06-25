import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/qianting',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          workshops: [
            { name: '冲压车间', value: 92 },
            { name: '焊接车间', value: 60 },
            { name: '涂装车间', value: 92 },
            { name: '总装车间', value: 92 },
            { name: '电池车间', value: 80 },
          ],
          category: [
            { name: '设备', value: 70 },
            { name: '物流', value: 60 },
          ],
        },
        message: 'success',
      }
    },
  },
  {
    url: '/api/chanliang/shuliang',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          rate: 108,
          target: 100,
        },
        message: 'success',
      }
    },
  },
  {
    url: '/api/chanliang/shijian',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          rate: 90,
          target: 100,
        },
        message: 'success',
      }
    },
  },
  {
    url: '/api/zhizao/zhouqi',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          value: 1.14,
        },
        message: 'success',
      }
    },
  },
] as MockMethod[]