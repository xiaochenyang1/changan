import axios from 'axios'

/**
 * 长安永洪数据平台 —— 7 个指标接口
 * 走 vite 代理 /gw -> http://118.196.18.102:8080/api （绕开浏览器 CORS）
 * 每次请求自动带 X-AppKey / X-Timestamp(毫秒,5分钟有效) / X-Sign
 */

const APPKEY = 'ak_changan'
const SIGN = 'p0-dev' // 开发态固定签名，生产环境需替换为真实签名

// 独立 axios 实例，避免影响现有 http(baseURL=/api) 的逻辑
const gw = axios.create({
  baseURL: '/gw',
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
})

// 请求拦截：注入网关鉴权头
gw.interceptors.request.use((config) => {
  config.headers.set('X-AppKey', APPKEY)
  config.headers.set('X-Timestamp', String(Date.now()))
  config.headers.set('X-Sign', SIGN)
  return config
})

// 响应拦截：拆掉 {code,message,data} 信封，code!==0 抛错
gw.interceptors.response.use((resp) => {
  const body = resp.data
  if (body && body.code !== 0) {
    return Promise.reject(new Error(body.message || `网关请求失败(code=${body.code})`))
  }
  return body.data
})

// ---------- 类型 ----------
export interface DateRange {
  stat_date: string
  end_date: string
}

export interface C1000Item { c1000: number }
export interface OutputItem { total_output: number }
export interface FtrItem { ftt: number }
export interface DowntimeItem { belong_date: string; total_duration?: number }
export interface OutputTrendItem { OPERATION_DT: string; total_output: number }
export interface FtrTrendItem { OPERATION_DT: string; ftt?: number }
export interface JphItem { total_jph: number }

// JPH 接口入参与其他接口不同：按单日查询（p_jph_date），psize/offset 可选
export interface JphParams { p_jph_date: string; psize?: number; offset?: number }

// 默认查询区间（按需在调用处覆盖）
const defaultRange: DateRange = { stat_date: '2026-01-01', end_date: '2026-06-30' }

function call<T>(name: string, range: DateRange = defaultRange): Promise<T> {
  // 响应拦截已返回 data，故第二个泛型即最终返回类型
  return gw.post<any, T>(`/v1/gateway/${name}`, range)
}

// ---------- 7 个接口 ----------
/** C1000 缺陷率 */
export const getC1000 = (r?: DateRange) => call<C1000Item[]>('changan_c1000', r)
/** 产量汇总 */
export const getOutput = (r?: DateRange) => call<OutputItem[]>('changan_output', r)
/** FTR 一次性通过率 */
export const getFtr = (r?: DateRange) => call<FtrItem[]>('changan_ftr', r)
/** 停机统计（按天） */
export const getDowntime = (r?: DateRange) => call<DowntimeItem[]>('changan_downtime', r)
/** 产量趋势（按天） */
export const getOutputTrend = (r?: DateRange) => call<OutputTrendItem[]>('changan_output_trend', r)
/** FTR 趋势 */
export const getFtrTrend = (r?: DateRange) => call<FtrTrendItem[]>('changan_ftr_trend', r)
/** JPH 加工节拍 —— 注意：入参为单日 p_jph_date，与其他接口的 DateRange 不同 */
export const getJph = (p: JphParams) => gw.post<any, JphItem[]>('/v1/gateway/API_506252', p)
