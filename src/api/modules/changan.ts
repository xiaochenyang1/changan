import axios from 'axios'

/**
 * 长安永洪数据平台 —— 7 个指标接口
 * 后端已放行跨域，前端直连网关（地址/鉴权由 .env 配置）
 * 每次请求自动带 X-AppKey / X-Timestamp(毫秒,5分钟有效) / X-Sign
 */

const APPKEY = import.meta.env.VITE_APP_GATEWAY_APPKEY
const SIGN = import.meta.env.VITE_APP_GATEWAY_SIGN

// 独立 axios 实例，避免影响现有 http(baseURL=/api) 的逻辑
const gw = axios.create({
  baseURL: import.meta.env.VITE_APP_GATEWAY_URL,
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
// 千台机停线时间（API_237009，DateRange 入参）。字段名按停机类接口惯例取 total_duration，如后端字段不同需同步调整
export interface KtjTxsjItem { total_duration?: number }

// JPH 接口入参与其他接口不同：按单日查询（p_jph_date），psize/offset 可选
export interface JphParams { p_jph_date: string; psize?: number; offset?: number }

// 日期助手：返回相对今天 offsetDays 天的 'YYYY-MM-DD'（0=今天，-1=昨天）
export function dateStr(offsetDays = 0): string {
  const d = new Date()
  d.setDate(d.getDate() + offsetDays)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

// 默认查询区间：开始=结束=今天（按需在调用处覆盖）
const defaultRange: DateRange = { stat_date: dateStr(0), end_date: dateStr(0) }

function call<T>(name: string, range: DateRange = defaultRange): Promise<T> {
  // 响应拦截已返回 data，故第二个泛型即最终返回类型
  return gw.post<any, T>(`/api/v1/gateway/${name}`, range)
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
export const getJph = (p: JphParams) => gw.post<any, JphItem[]>('/api/v1/gateway/API_506252', p)

/** 千台机停线时间（min）—— DateRange 入参 */
export const getKtjTxsj = (r: DateRange = defaultRange) =>
  gw.post<any, KtjTxsjItem[]>('/api/v1/gateway/API_237009', r)
