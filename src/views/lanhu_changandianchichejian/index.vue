<template>
  <div class="page flex-col">
    <div class="section_1 flex-col">
      <div class="section_2 flex-col">
        <div class="block_1 flex-col">
          <div class="group_35 flex-col">
            <div class="block_19 flex-row justify-between">
              <div class="group_36 flex-col justify-between">
                <div class="section_5 flex-col justify-end">
                  <div class="section_21 flex-row">
                    <img
                      class="image-wrapper_1 flex-col"
                      src="./assets/img/anquanshigu.png"
                      alt=""
                    />
                    <div class="section_22 flex-col justify-between">
                      <span class="text_1">安全事故7个0</span>
                      <div class="text-wrapper_42 flex-row justify-between">
                        <span class="text_2">0</span>
                        <span class="text_3">起</span>
                      </div>
                    </div>
                    <img
                      class="image-wrapper_2 flex-col"
                      src="./assets/img/anquanhuanbaozhenggailv.png"
                      alt=""
                    />
                    <div class="text-wrapper_43 flex-col justify-between">
                      <span class="text_4">安全环保整改率</span>
                      <span class="text_5">96.2%</span>
                    </div>
                  </div>
                  <img
                    class="image_1"
                    src="./assets/img/SketchPng75c727503552e3b6098e487849f75da58f9e85cd51f518fff7cfe09bd846bd65.png"
                  />
                  <div class="text-wrapper_3 flex-col">
                    <img
                      class="text_6"
                      src="./assets/img/anquanhuanbao.png"
                    />
                  </div>
                </div>
                <div class="section_7 flex-col justify-end">
                  <div class="section_23 flex-row">
                    <div ref="ftrRingRef" class="ftr-ring"></div>
                    <div class="text-wrapper_44 flex-col justify-between">
                      <span class="text_7">FTR</span>
                      <span class="text_8">{{ ftrText }}</span>
                    </div>
                    <div ref="c1000RingRef" class="c1000-ring"></div>
                    <div class="text-wrapper_45 flex-col justify-between">
                      <span class="text_9">C/1000</span>
                      <span class="text_10">{{ c1000Text }}</span>
                    </div>
                  </div>
                  <div class="section_24 flex-row">
                    <div class="image-text_27 flex-row justify-between">
                      <img
                        class="image-wrapper_3 flex-col"
                        src="./assets/img/dianchiPPM.png"
                        alt=""
                      />
                      <div class="text-group_30 flex-col justify-between">
                        <span class="text_11">电池PPM</span>
                        <span class="text_12">1240</span>
                      </div>
                    </div>
                    <span class="text_13">PPM</span>
                    <div class="image-text_28 flex-row justify-between">
                      <img
                        class="image-wrapper_4 flex-col"
                        src="./assets/img/zhizaowentiPPM.png"
                        alt=""
                      />
                      <div class="text-group_31 flex-col justify-between">
                        <span class="text_14">制造问题PPM&nbsp;(12MIS)</span>
                        <div class="text-wrapper_46 flex-row justify-between">
                          <span class="text_15">1240</span>
                          <span class="text_16">PPM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    class="image_2"
                    src="./assets/img/SketchPng75c727503552e3b6098e487849f75da58f9e85cd51f518fff7cfe09bd846bd65.png"
                  />
                </div>
                <div class="box_7 flex-col justify-end">
                  <div class="box_29 flex-row">
                    <img
                      class="image-wrapper_6 flex-col"
                      src="./assets/img/chanliang.png"
                      alt=""
                    />
                    <div class="text-group_32 flex-col justify-between">
                      <span class="text_33">产量</span>
                      <span class="text_34">{{ outputText }}</span>
                    </div>
                    <span class="text_35">台</span>
                    <div class="image-text_29 flex-row justify-between">
                      <img
                        class="image-wrapper_7 flex-col"
                        src="./assets/img/tingxianshichangcion.png"
                        alt=""
                      />
                      <div class="text-group_33 flex-col justify-between">
                        <span class="text_36">停线时长（min）</span>
                        <span class="text_37">{{ downtimeText }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="box_30 flex-row">
                    <img
                      class="image-wrapper_12 flex-col"
                      src="./assets/img/jph.png"
                      alt=""
                    />
                    <div class="text-group_34 flex-col justify-between">
                      <span class="text_120">JPH</span>
                      <span class="text_121">{{ jphText }}</span>
                    </div>
                    <span class="text_122">台/小时</span>
                    <div class="image-text_30 flex-row justify-between">
                      <img
                        class="image-wrapper_13 flex-col"
                        src="./assets/img/jihuadachengzhunshilv.png"
                        alt=""
                      />
                      <div class="text-group_35 flex-col justify-between">
                        <span class="text_123">计划达成准时率</span>
                        <span class="text_124">96.2%</span>
                      </div>
                    </div>
                  </div>
                  <img
                    class="image_5"
                    src="./assets/img/SketchPng75c727503552e3b6098e487849f75da58f9e85cd51f518fff7cfe09bd846bd65.png"
                  />
                </div>
                <div class="group_13 flex-col justify-end">
                  <div class="image-text_31 flex-row justify-between">
                    <div ref="attendanceRingRef" class="attendance-ring"></div>
                    <div class="text-group_36 flex-col justify-between">
                      <span class="text_59">出勤率</span>
                      <span class="text_60">98%</span>
                    </div>
                  </div>
                  <img
                    class="image_9"
                    src="./assets/img/SketchPng75c727503552e3b6098e487849f75da58f9e85cd51f518fff7cfe09bd846bd65.png"
                  />
                  <div class="text-wrapper_15 flex-col">
                    <img
                      class="text_61"
                      src="./assets/img/renyuan.png"
                    />
                  </div>
                </div>
                <div class="group_14 flex-col justify-end">
                  <div class="section_25 flex-row justify-between">
                    <div class="text-wrapper_47 flex-col">
                      <span class="text_125">车间产量趋势图</span>
                    </div>
                    <div class="group_37 flex-row">
                      <img
                        class="thumbnail_11"
                        src="./assets/img/SketchPngd1ec49f1f01e7c4c427be1cf161d5cc1b1cc4d7d5b36bb1bc0399272e5b06ce6.png"
                      />
                      <span class="text_126">FTR趋势图</span>
                      <img
                        class="thumbnail_12"
                        src="./assets/img/SketchPng8fc60584944abddb2055cfc737393b63209feba3abb8eeb086c255938d455cc8.png"
                      />
                    </div>
                  </div>
                  <div class="section_26 flex-row">
                    <div ref="outputTrendRef" class="output-trend-chart"></div>
                    <div ref="ftrTrendRef" class="ftr-trend-chart"></div>
                  </div>
                  <img
                    class="image_13"
                    src="./assets/img/SketchPng75c727503552e3b6098e487849f75da58f9e85cd51f518fff7cfe09bd846bd65.png"
                  />
                </div>
              </div>
              <div class="group_39 flex-col">
                <div class="section_8 flex-col justify-end">
                  <div class="group_40 flex-row justify-between">
                    <div class="section_9 flex-col">
                      <span class="text_17">86.0%</span>
                      <span class="text_18">综合效率（&nbsp;OEE）</span>
                      <img
                        class="thumbnail_1"
                        src="./assets/img/SketchPng60f8b964a14c74767f59003c35dde1c72ef34d45bc8cb961397ee4d56ed480ed.png"
                      />
                    </div>
                    <div class="section_10 flex-col">
                      <span class="text_19">86.0%</span>
                      <span class="text_20">设备开动率</span>
                      <img
                        class="thumbnail_2"
                        src="./assets/img/SketchPng60f8b964a14c74767f59003c35dde1c72ef34d45bc8cb961397ee4d56ed480ed.png"
                      />
                    </div>
                  </div>
                  <div class="group_41 flex-row justify-between">
                    <div
                      class="box_4 flex-col"
                      style="cursor: pointer"
                      @click="handleDowntimeRateClick"
                    >
                      <span class="text_25">10</span>
                      <span class="text_26">设备千台停机率</span>
                      <img
                        class="thumbnail_5"
                        src="./assets/img/SketchPng60f8b964a14c74767f59003c35dde1c72ef34d45bc8cb961397ee4d56ed480ed.png"
                      />
                    </div>
                    <div class="group_6 flex-col">
                      <span class="text_23">10</span>
                      <span class="text_24">设备千台停线率</span>
                      <img
                        class="thumbnail_4"
                        src="./assets/img/SketchPng60f8b964a14c74767f59003c35dde1c72ef34d45bc8cb961397ee4d56ed480ed.png"
                      />
                    </div>
                  </div>
                  <img
                    class="image_3"
                    src="./assets/img/SketchPng75c727503552e3b6098e487849f75da58f9e85cd51f518fff7cfe09bd846bd65.png"
                  />
                </div>
                <div class="section_12 flex-col justify-end">
                  <div class="group_42 flex-row justify-between">
                    <div class="text-wrapper_52 flex-col justify-between">
                      <span class="text_145">9K</span>
                      <span class="text_146">6K</span>
                      <span class="text_147">3K</span>
                      <span class="text_148">0K</span>
                    </div>
                    <div class="section_28 flex-col justify-between">
                      <div class="text-wrapper_53 flex-row justify-between">
                        <span class="text_149">9,000</span>
                        <span class="text_150">9,000</span>
                      </div>
                      <div class="block_22 flex-row">
                        <div class="section_29 flex-col justify-between">
                          <span class="text_151">5,000</span>
                          <img
                            class="image_23"
                            src="./assets/img/SketchPng87f2d7a4f2ac144e07a68aa6c96441ce715aebc1fe96679ca40a4eee780a1395.png"
                          />
                        </div>
                        <img
                          class="image_24"
                          src="./assets/img/SketchPnga9a5afd4fe33823dc548ccc9df82589d8624da732aa8c860d35a5d9c099de033.png"
                        />
                        <div class="section_30 flex-col justify-between">
                          <span class="text_152">5,000</span>
                          <img
                            class="image_25"
                            src="./assets/img/SketchPng87f2d7a4f2ac144e07a68aa6c96441ce715aebc1fe96679ca40a4eee780a1395.png"
                          />
                        </div>
                        <div class="section_31 flex-col justify-between">
                          <span class="text_153">6,100</span>
                          <img
                            class="image_26"
                            src="./assets/img/SketchPng540ed9c11b49003f783e8f3ba8580087c3ab18f0b7b61d0e1c6d0ca49c595bed.png"
                          />
                        </div>
                        <img
                          class="image_27"
                          src="./assets/img/SketchPnga9a5afd4fe33823dc548ccc9df82589d8624da732aa8c860d35a5d9c099de033.png"
                        />
                        <div class="section_32 flex-col justify-between">
                          <span class="text_154">8,000</span>
                          <img
                            class="image_28"
                            src="./assets/img/SketchPngbb6d53adfca02bd79e4f135db9d6c67dce359b08ca4ce6fea53a50a962de1aff.png"
                          />
                        </div>
                        <div class="section_33 flex-col justify-between">
                          <span class="text_155">5,000</span>
                          <img
                            class="image_29"
                            src="./assets/img/SketchPng87f2d7a4f2ac144e07a68aa6c96441ce715aebc1fe96679ca40a4eee780a1395.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-wrapper_54 flex-row">
                    <span class="text_156">6/10</span>
                    <span class="text_157">6/11</span>
                    <span class="text_158">6/12</span>
                    <span class="text_159">6/13</span>
                    <span class="text_160">6/14</span>
                    <span class="text_161">6/15</span>
                    <span class="text_162">6/16</span>
                  </div>
                  <img
                    class="image_8"
                    src="./assets/img/SketchPng75c727503552e3b6098e487849f75da58f9e85cd51f518fff7cfe09bd846bd65.png"
                  />
                  <div class="text-wrapper_29 flex-col">
                    <img
                      class="text_117"
                      src="./assets/img/tingxianshichang.png"
                    />
                  </div>
                </div>
                <div class="block_8 flex-col justify-end">
                  <div class="metric-thead">
                    <span>指标名称</span>
                    <span>单位</span>
                    <span>达成状态</span>
                    <span>所属板块</span>
                    <span>模版简写</span>
                  </div>
                  <div
                    v-for="(row, i) in indicators"
                    :key="row.name"
                    class="metric-row"
                    :class="{ 'metric-row--dark': i % 2 === 1, 'metric-row--first': i === 0 }"
                  >
                    <span class="metric-cell">{{ row.name }}</span>
                    <span class="metric-cell">{{ row.unit }}</span>
                    <span class="metric-cell">
                      <span class="status-badge" :class="'status-badge--' + row.status">{{
                        row.statusText
                      }}</span>
                    </span>
                    <span class="metric-cell">{{ row.plate }}</span>
                    <span class="metric-cell">{{ row.abbr }}</span>
                  </div>
                  <img
                    class="image_18"
                    src="./assets/img/SketchPng75c727503552e3b6098e487849f75da58f9e85cd51f518fff7cfe09bd846bd65.png"
                  />
                </div>
              </div>
            </div>
            <div class="text-wrapper_9 flex-col">
              <img class="text_38" src="./assets/img/jiaofu.png" />
            </div>
            <div class="text-wrapper_25 flex-col">
              <img
                class="text_113"
                src="./assets/img/shebeinengxiao.png"
              />
              <!-- 创建维修任务入口按钮 -->
              <button class="mt-entry-btn" @click="modalVisible = true">+ 任务下发</button>
            </div>
            <div class="text-wrapper_26 flex-col">
              <img
                class="text_114"
                src="./assets/img/yijizhibiaoxiangqing.png"
              />
            </div>
            <div class="text-wrapper_27 flex-col">
              <img
                class="text_115"
                src="./assets/img/guanjianqushi.png"
              />
            </div>
            <div class="text-wrapper_28 flex-col">
              <img class="text_116" src="./assets/img/zhiliang.png" />
            </div>
          </div>
          <DashboardHeader :title-img="titleImg" />
        </div>
      </div>
    </div>
    <!-- 创建维修任务弹框 -->
    <MaintenanceTaskModal v-if="modalVisible" v-model:visible="modalVisible" />
  </div>
</template>

<script setup lang="ts">
// 电池车间大屏页面
import { defineAsyncComponent, ref, onMounted, onBeforeUnmount } from 'vue'
import { init, use, graphic, type EChartsType } from 'echarts/core'
import { LineChart, PieChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import DashboardHeader from '@/components/DashboardHeader'
import titleImg from './assets/img/dianchichejian.png'
import {
  getFtr,
  getOutput,
  getC1000,
  getOutputTrend,
  getDowntime,
  getFtrTrend,
  getJph,
} from '@/api/modules/changan'
import type { OutputTrendItem, FtrTrendItem } from '@/api/modules/changan'
import { messenger } from '@/composables/messenger'

use([LineChart, PieChart, GridComponent, TooltipComponent, CanvasRenderer])

type EChartsInstance = EChartsType

const MaintenanceTaskModal = defineAsyncComponent(
  () => import('./components/MaintenanceTaskModal.vue')
)

// 点击「设备千台停机率」→ 通知 3D 场景聚焦对应设备（二级蓝图使用 Cosmo_LowCode_trigger 固定 type）
function handleDowntimeRateClick() {
  messenger.publish('Cosmo_LowCode_trigger', {
    eventName: 'focus-device',
    eventData: '电芯拆垛上料',
  })
}

// 创建维修任务弹框开关
const modalVisible = ref(false)

// 长安指标数据
const ftrText = ref('--') // FTR 一次性通过率（changan_ftr，ftt×100%）
const outputText = ref('--') // 产量汇总（changan_output，total_output）
const c1000Text = ref('--') // C1000 缺陷率（changan_c1000，每千台缺陷数，非百分比）
const downtimeText = ref('--') // 停线时长合计（changan_downtime，各天 total_duration 求和，单位 min）
const jphText = ref('--') // JPH 加工节拍（API_506252，total_jph）

// 产量趋势图（changan_output_trend）
const outputTrendRef = ref<HTMLElement | null>(null)
let outputTrendChart: EChartsInstance | null = null
const ftrTrendRef = ref<HTMLElement | null>(null)
let ftrTrendChart: EChartsInstance | null = null

// FTR 环形进度图（替换原 label_3 静态切图，进度 = FTR%，环内不显示数字）
const ftrRingRef = ref<HTMLElement | null>(null)
let ftrRingChart: EChartsInstance | null = null

// C/1000 环形进度图（替换原 label_4 静态切图，风格与 FTR 一致，红色）
const c1000RingRef = ref<HTMLElement | null>(null)
let c1000RingChart: EChartsInstance | null = null

// 出勤率环形进度图（替换原 label_10 静态切图，风格与 FTR 一致，青蓝色）
const attendanceRingRef = ref<HTMLElement | null>(null)
let attendanceRingChart: EChartsInstance | null = null
let isUnmounted = false

type RingChartOptions = {
  el: HTMLElement | null
  chart: EChartsInstance | null
  name: string
  percent: number
  color: string
  tooltipValue: () => string
}

type SettledTask = {
  errorMessage: string
  run: () => Promise<void>
}

function getOrInitChart(el: HTMLElement | null, chart: EChartsInstance | null) {
  if (!el || isUnmounted) return null
  return chart ?? init(el)
}

function disposeChart(chart: EChartsInstance | null) {
  if (!chart) return
  chart.clear()
  chart.dispose()
}

async function runSettledTasks(tasks: SettledTask[]) {
  const results = await Promise.allSettled(tasks.map((task) => task.run()))
  results.forEach((result, index) => {
    if (result.status === 'rejected') {
      console.error(tasks[index].errorMessage, result.reason)
    }
  })
}

function renderRingChart(options: RingChartOptions) {
  const chart = getOrInitChart(options.el, options.chart)
  if (!chart) return null
  chart.setOption({
    // 鼠标浮到环上展示数值（默认样式 + marker 小圆点，与下方折线图一致）
    tooltip: {
      show: true,
      trigger: 'item',
      confine: false,
      // 固定弹在光标右侧：环贴着屏幕左边缘，默认往左弹会出界
      position: (pos: number[], _p: any, _dom: any, _rect: any, size: any) => {
        return [pos[0] + 14, pos[1] - size.contentSize[1] / 2]
      },
      formatter: (p: any) => `${p.marker}${options.name}&nbsp;&nbsp;${options.tooltipValue()}`,
    },
    series: [
      {
        type: 'pie',
        radius: ['68%', '92%'], // 圆环（百分比厚度，随容器缩放）
        center: ['50%', '50%'],
        startAngle: 90, // 从正上方开始
        clockwise: true, // 顺时针填充
        label: { show: false }, // 环内不显示数字
        labelLine: { show: false },
        emphasis: { scale: false }, // hover 时环不放大，保持稳定
        silent: false,
        data: [
          {
            value: options.percent,
            name: options.name,
            itemStyle: { color: options.color, borderRadius: 4 },
          },
          {
            value: 100 - options.percent, // 剩余轨道
            name: '',
            itemStyle: { color: 'rgba(120,200,255,0.18)' },
            tooltip: { show: false }, // 轨道不弹 tooltip
            emphasis: { disabled: true },
          },
        ],
      },
    ],
  })
  return chart
}

function renderFtrRing(percent: number) {
  ftrRingChart = renderRingChart({
    el: ftrRingRef.value,
    chart: ftrRingChart,
    name: 'FTR',
    percent,
    color: '#05ffc9',
    tooltipValue: () => ftrText.value,
  })
}

// C/1000 环形进度图（临时数值，待接定义后替换为真实占比）
function renderC1000Ring(percent: number) {
  c1000RingChart = renderRingChart({
    el: c1000RingRef.value,
    chart: c1000RingChart,
    name: 'C/1000',
    percent,
    color: '#f35454',
    tooltipValue: () => c1000Text.value,
  })
}

// 出勤率环形进度图（数值即百分比，进度有真实含义）
function renderAttendanceRing(percent: number) {
  attendanceRingChart = renderRingChart({
    el: attendanceRingRef.value,
    chart: attendanceRingChart,
    name: '出勤率',
    percent,
    color: '#05efff',
    tooltipValue: () => `${percent}%`,
  })
}

function renderOutputTrend(data: OutputTrendItem[]) {
  outputTrendChart = getOrInitChart(outputTrendRef.value, outputTrendChart)
  if (!outputTrendChart) return
  const dates = data.map((d) => {
    const p = d.OPERATION_DT.split('-')
    return `${Number(p[1])}/${Number(p[2])}`
  })
  const values = data.map((d) => d.total_output)
  outputTrendChart.setOption({
    grid: { left: 42, right: 28, top: 16, bottom: 22 },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: dates,
      boundaryGap: false,
      axisTick: { show: false },
      axisLine: { lineStyle: { color: 'rgba(120,200,255,0.4)' } },
      axisLabel: { color: '#9fd8ff', fontSize: 9 },
    },
    yAxis: {
      type: 'value',
      splitNumber: 3,
      axisLabel: { color: '#9fd8ff', fontSize: 9, margin: 6 },
      splitLine: { lineStyle: { color: 'rgba(120,200,255,0.12)' } },
    },
    series: [
      {
        type: 'line',
        smooth: true,
        data: values,
        symbol: 'circle',
        symbolSize: 4,
        lineStyle: { color: '#05efff', width: 2 },
        itemStyle: { color: '#05efff' },
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(5,239,255,0.35)' },
            { offset: 1, color: 'rgba(5,239,255,0.02)' },
          ]),
        },
      },
    ],
  })
}

function renderFtrTrend(data: FtrTrendItem[]) {
  ftrTrendChart = getOrInitChart(ftrTrendRef.value, ftrTrendChart)
  if (!ftrTrendChart) return
  const valid = data.filter((d): d is { OPERATION_DT: string; ftt: number } => d.ftt != null)
  const dates = valid.map((d) => {
    const p = d.OPERATION_DT.split('-')
    return `${Number(p[1])}/${Number(p[2])}`
  })
  const values = valid.map((d) => +(d.ftt * 100).toFixed(2))
  ftrTrendChart.setOption({
    grid: { left: 42, right: 28, top: 16, bottom: 22 },
    tooltip: { trigger: 'axis', valueFormatter: (v: number) => `${v}%` },
    xAxis: {
      type: 'category',
      data: dates,
      boundaryGap: false,
      axisTick: { show: false },
      axisLine: { lineStyle: { color: 'rgba(120,200,255,0.4)' } },
      axisLabel: { color: '#9fd8ff', fontSize: 9 },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      splitNumber: 2,
      axisLabel: { color: '#9fd8ff', fontSize: 9, margin: 6, formatter: '{value}%' },
      splitLine: { lineStyle: { color: 'rgba(120,200,255,0.12)' } },
    },
    series: [
      {
        type: 'line',
        smooth: true,
        data: values,
        symbol: 'circle',
        symbolSize: 4,
        lineStyle: { color: '#37e0a0', width: 2 },
        itemStyle: { color: '#37e0a0' },
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(55,224,160,0.35)' },
            { offset: 1, color: 'rgba(55,224,160,0.02)' },
          ]),
        },
      },
    ],
  })
}

function handleResize() {
  outputTrendChart?.resize()
  ftrTrendChart?.resize()
  ftrRingChart?.resize()
  c1000RingChart?.resize()
  attendanceRingChart?.resize()
}

async function loadMetrics() {
  const tasks = [
    {
      errorMessage: 'FTR 加载失败',
      run: async () => {
        // FTR 一次性通过率
        const res = await getFtr()
        if (isUnmounted) return
        const ftt = res[0]?.ftt
        if (ftt != null) {
          ftrText.value = (ftt * 100).toFixed(2) + '%'
          renderFtrRing(ftt * 100) // 环形进度与右侧数值保持一致
        }
      },
    },
    {
      errorMessage: '产量加载失败',
      run: async () => {
        // 产量汇总
        const res = await getOutput()
        if (isUnmounted) return
        const out = res[0]?.total_output
        if (out != null) outputText.value = String(out)
      },
    },
    {
      errorMessage: 'C1000 加载失败',
      run: async () => {
        // C1000 缺陷率
        const res = await getC1000()
        if (isUnmounted) return
        const v = res[0]?.c1000
        if (v != null) {
          c1000Text.value = v.toFixed(2)
          renderC1000Ring(75)
        }
      },
    },
    {
      errorMessage: '停机统计加载失败',
      run: async () => {
        // 停线时长（各天 total_duration 求和）
        const res = await getDowntime({ stat_date: '2026-05-01', end_date: '2026-06-30' })
        if (isUnmounted) return
        const sum = res.reduce((acc, d) => acc + (d.total_duration ?? 0), 0)
        downtimeText.value = String(Math.round(sum))
      },
    },
    {
      errorMessage: 'JPH 加载失败',
      run: async () => {
        // JPH 加工节拍（按单日查询，固定取 2026-06-12 —— 该日有数据）
        const res = await getJph({ p_jph_date: '2026-06-12' })
        if (isUnmounted) return
        const jph = res[0]?.total_jph
        if (jph != null) jphText.value = jph.toFixed(2)
      },
    },
  ]

  // C/1000 环形图：暂用临时进度值（接口未定义占比口径，待补充）
  renderC1000Ring(75)
  // 出勤率环形图：当前数值写死 98%
  renderAttendanceRing(98)

  await runSettledTasks(tasks)
}

async function loadCharts() {
  const tasks = [
    {
      errorMessage: '产量趋势加载失败',
      run: async () => {
        // 产量趋势图
        const trend = await getOutputTrend()
        if (isUnmounted) return
        renderOutputTrend(trend)
      },
    },
    {
      errorMessage: 'FTR趋势加载失败',
      run: async () => {
        // FTR 趋势图
        const trend = await getFtrTrend()
        if (isUnmounted) return
        renderFtrTrend(trend)
      },
    },
  ]

  await runSettledTasks(tasks)
}

async function loadDashboardData() {
  await loadMetrics()
  if (isUnmounted) return
  await loadCharts()
}

onMounted(() => {
  isUnmounted = false
  window.addEventListener('resize', handleResize)
  loadDashboardData()
})

onBeforeUnmount(() => {
  isUnmounted = true
  window.removeEventListener('resize', handleResize)
  disposeChart(outputTrendChart)
  disposeChart(ftrTrendChart)
  disposeChart(ftrRingChart)
  disposeChart(c1000RingChart)
  disposeChart(attendanceRingChart)
  outputTrendChart = null
  ftrTrendChart = null
  ftrRingChart = null
  c1000RingChart = null
  attendanceRingChart = null
})

// 一级指标详情表格数据
// status 决定徽章颜色：over=超标(红) pass=达标(绿) fault=故障(橙) normal=正常(蓝)
const indicators = [
  { name: '制造问题', unit: 'ppm', status: 'over', statusText: '超标', plate: 'Q质量', abbr: 'Q' },
  {
    name: '安全事故',
    unit: '起',
    status: 'pass',
    statusText: '达标',
    plate: 'S安全环保',
    abbr: 'SE',
  },
  {
    name: '安全环保',
    unit: '%',
    status: 'fault',
    statusText: '故障',
    plate: 'E安全环保',
    abbr: 'SE',
  },
  { name: '电池下线', unit: '%', status: 'normal', statusText: '正常', plate: 'Q质量', abbr: 'Q' },
  { name: 'FTT', unit: '元', status: 'normal', statusText: '正常', plate: 'C成本', abbr: 'Q' },
  { name: '单车制造', unit: '%', status: 'normal', statusText: '正常', plate: 'Q质量', abbr: 'Q' },
]
</script>

<style scoped lang="scss" src="./assets/index.scss"></style>
