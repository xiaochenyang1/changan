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
                      referrerpolicy="no-referrer"
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
                      referrerpolicy="no-referrer"
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
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng75c727503552e3b6098e487849f75da58f9e85cd51f518fff7cfe09bd846bd65.png"
                  />
                  <div class="text-wrapper_3 flex-col">
                    <img
                      class="text_6"
                      referrerpolicy="no-referrer"
                      src="./assets/img/anquanhuanbao.png"
                    />
                  </div>
                </div>
                <div class="section_7 flex-col justify-end">
                  <div class="section_23 flex-row">
                    <img
                      class="label_3"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPng45c624f7a1bde855713cf1052cf2d27b9a10b12b3317a02ab831aa72c941a1de.png"
                    />
                    <div class="text-wrapper_44 flex-col justify-between">
                      <span class="text_7">FTR</span>
                      <span class="text_8">{{ ftrText }}</span>
                    </div>
                    <img
                      class="label_4"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPng50bb9157044a5584bfd2e5163ebfc1f67fbca0135a71b37478f38cee9dc62bd8.png"
                    />
                    <div class="text-wrapper_45 flex-col justify-between">
                      <span class="text_9">C/1000</span>
                      <span class="text_10">{{ c1000Text }}</span>
                    </div>
                  </div>
                  <div class="section_24 flex-row">
                    <div class="image-text_27 flex-row justify-between">
                      <img
                        class="image-wrapper_3 flex-col"
                        referrerpolicy="no-referrer"
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
                        referrerpolicy="no-referrer"
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
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng75c727503552e3b6098e487849f75da58f9e85cd51f518fff7cfe09bd846bd65.png"
                  />
                </div>
                <div class="box_7 flex-col justify-end">
                  <div class="box_29 flex-row">
                    <img
                      class="image-wrapper_6 flex-col"
                      referrerpolicy="no-referrer"
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
                        referrerpolicy="no-referrer"
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
                      referrerpolicy="no-referrer"
                      src="./assets/img/jph.png"
                      alt=""
                    />
                    <div class="text-group_34 flex-col justify-between">
                      <span class="text_120">JPH</span>
                      <span class="text_121">58</span>
                    </div>
                    <span class="text_122">台/小时</span>
                    <div class="image-text_30 flex-row justify-between">
                      <img
                        class="image-wrapper_13 flex-col"
                        referrerpolicy="no-referrer"
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
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng75c727503552e3b6098e487849f75da58f9e85cd51f518fff7cfe09bd846bd65.png"
                  />
                </div>
                <div class="group_13 flex-col justify-end">
                  <div class="image-text_31 flex-row justify-between">
                    <img
                      class="label_10"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPnge908affcf7e4b4c5b5a697854b5105deac06a3c9b1d51abcde666c973a28cd0b.png"
                    />
                    <div class="text-group_36 flex-col justify-between">
                      <span class="text_59">出勤率</span>
                      <span class="text_60">98%</span>
                    </div>
                  </div>
                  <img
                    class="image_9"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng75c727503552e3b6098e487849f75da58f9e85cd51f518fff7cfe09bd846bd65.png"
                  />
                  <div class="text-wrapper_15 flex-col">
                    <img
                      class="text_61"
                      referrerpolicy="no-referrer"
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
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPngd1ec49f1f01e7c4c427be1cf161d5cc1b1cc4d7d5b36bb1bc0399272e5b06ce6.png"
                      />
                      <span class="text_126">FTR趋势图</span>
                      <img
                        class="thumbnail_12"
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPng8fc60584944abddb2055cfc737393b63209feba3abb8eeb086c255938d455cc8.png"
                      />
                    </div>
                  </div>
                  <div class="section_26 flex-row">
                    <div ref="outputTrendRef" class="output-trend-chart"></div>
                    <div class="text-wrapper_50 flex-col">
                      <span class="text_136">100%</span>
                      <span class="text_137">50%</span>
                      <span class="text_138">0%</span>
                    </div>
                    <div class="block_21 flex-col justify-between">
                      <div class="section_27 flex-col">
                        <div class="image-wrapper_15 flex-col">
                          <img
                            class="image_22"
                            referrerpolicy="no-referrer"
                            src="./assets/img/SketchPng8bca9da9e112422c5bd86e4cb1ac921bbfe3543e5b13bbc3807b2eba7be87758.png"
                          />
                        </div>
                      </div>
                      <div class="text-wrapper_51 flex-row">
                        <span class="text_139">4/1</span>
                        <span class="text_140">4/2</span>
                        <span class="text_141">4/3</span>
                        <span class="text_142">4/4</span>
                        <span class="text_143">4/5</span>
                        <span class="text_144">4/6</span>
                      </div>
                    </div>
                  </div>
                  <img
                    class="image_13"
                    referrerpolicy="no-referrer"
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
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPng60f8b964a14c74767f59003c35dde1c72ef34d45bc8cb961397ee4d56ed480ed.png"
                      />
                    </div>
                    <div class="section_10 flex-col">
                      <span class="text_19">86.0%</span>
                      <span class="text_20">设备开动率</span>
                      <img
                        class="thumbnail_2"
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPng60f8b964a14c74767f59003c35dde1c72ef34d45bc8cb961397ee4d56ed480ed.png"
                      />
                    </div>
                  </div>
                  <div class="group_41 flex-row justify-between">
                    <div class="box_4 flex-col">
                      <span class="text_25">10</span>
                      <span class="text_26">设备千台停机率</span>
                      <img
                        class="thumbnail_5"
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPng60f8b964a14c74767f59003c35dde1c72ef34d45bc8cb961397ee4d56ed480ed.png"
                      />
                    </div>
                    <div class="group_6 flex-col">
                      <span class="text_23">10</span>
                      <span class="text_24">设备千台停线率</span>
                      <img
                        class="thumbnail_4"
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPng60f8b964a14c74767f59003c35dde1c72ef34d45bc8cb961397ee4d56ed480ed.png"
                      />
                    </div>
                  </div>
                  <img
                    class="image_3"
                    referrerpolicy="no-referrer"
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
                            referrerpolicy="no-referrer"
                            src="./assets/img/SketchPng87f2d7a4f2ac144e07a68aa6c96441ce715aebc1fe96679ca40a4eee780a1395.png"
                          />
                        </div>
                        <img
                          class="image_24"
                          referrerpolicy="no-referrer"
                          src="./assets/img/SketchPnga9a5afd4fe33823dc548ccc9df82589d8624da732aa8c860d35a5d9c099de033.png"
                        />
                        <div class="section_30 flex-col justify-between">
                          <span class="text_152">5,000</span>
                          <img
                            class="image_25"
                            referrerpolicy="no-referrer"
                            src="./assets/img/SketchPng87f2d7a4f2ac144e07a68aa6c96441ce715aebc1fe96679ca40a4eee780a1395.png"
                          />
                        </div>
                        <div class="section_31 flex-col justify-between">
                          <span class="text_153">6,100</span>
                          <img
                            class="image_26"
                            referrerpolicy="no-referrer"
                            src="./assets/img/SketchPng540ed9c11b49003f783e8f3ba8580087c3ab18f0b7b61d0e1c6d0ca49c595bed.png"
                          />
                        </div>
                        <img
                          class="image_27"
                          referrerpolicy="no-referrer"
                          src="./assets/img/SketchPnga9a5afd4fe33823dc548ccc9df82589d8624da732aa8c860d35a5d9c099de033.png"
                        />
                        <div class="section_32 flex-col justify-between">
                          <span class="text_154">8,000</span>
                          <img
                            class="image_28"
                            referrerpolicy="no-referrer"
                            src="./assets/img/SketchPngbb6d53adfca02bd79e4f135db9d6c67dce359b08ca4ce6fea53a50a962de1aff.png"
                          />
                        </div>
                        <div class="section_33 flex-col justify-between">
                          <span class="text_155">5,000</span>
                          <img
                            class="image_29"
                            referrerpolicy="no-referrer"
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
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng75c727503552e3b6098e487849f75da58f9e85cd51f518fff7cfe09bd846bd65.png"
                  />
                  <div class="text-wrapper_29 flex-col">
                    <img
                      class="text_117"
                      referrerpolicy="no-referrer"
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
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng75c727503552e3b6098e487849f75da58f9e85cd51f518fff7cfe09bd846bd65.png"
                  />
                </div>
              </div>
            </div>
            <div class="text-wrapper_9 flex-col">
              <img class="text_38" referrerpolicy="no-referrer" src="./assets/img/jiaofu.png" />
            </div>
            <div class="text-wrapper_25 flex-col">
              <img
                class="text_113"
                referrerpolicy="no-referrer"
                src="./assets/img/shebeinengxiao.png"
              />
              <!-- 创建维修任务入口按钮 -->
              <button class="mt-entry-btn" @click="modalVisible = true">+ 任务下发</button>
            </div>
            <div class="text-wrapper_26 flex-col">
              <img
                class="text_114"
                referrerpolicy="no-referrer"
                src="./assets/img/yijizhibiaoxiangqing.png"
              />
            </div>
            <div class="text-wrapper_27 flex-col">
              <img
                class="text_115"
                referrerpolicy="no-referrer"
                src="./assets/img/guanjianqushi.png"
              />
            </div>
            <div class="text-wrapper_28 flex-col">
              <img class="text_116" referrerpolicy="no-referrer" src="./assets/img/zhiliang.png" />
            </div>
          </div>
          <div class="section_17 flex-row">
            <img
              class="text_118"
              referrerpolicy="no-referrer"
              src="./assets/img/dianchichejian.png"
            />
            <div class="section_34 flex-col justify-between">
              <span class="text_119">2026-06-22&nbsp;09:20:30</span>
              <div class="image-wrapper_10 flex-col">
                <img
                  class="image_19"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng6ef634c36496a5452031e9b8b9cf706c4561f8ce50f45461012f2e808ac925d2.png"
                />
              </div>
            </div>
            <div class="image-wrapper_11 flex-col align-center">
              <img
                class="image_20"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng23afe756a718a100a7df5994f3ff3e053d228fbc3cd08ab7c996677b6ed9954c.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 创建维修任务弹框 -->
    <MaintenanceTaskModal v-model:visible="modalVisible" />
  </div>
</template>

<script setup lang="ts">
// 电池车间大屏页面
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
import MaintenanceTaskModal from './components/MaintenanceTaskModal.vue'
import { getFtr, getOutput, getC1000, getOutputTrend, getDowntime } from '@/api/modules/changan'
import type { OutputTrendItem } from '@/api/modules/changan'

// 创建维修任务弹框开关
const modalVisible = ref(false)

// 长安指标数据
const ftrText = ref('--') // FTR 一次性通过率（changan_ftr，ftt×100%）
const outputText = ref('--') // 产量汇总（changan_output，total_output）
const c1000Text = ref('--') // C1000 缺陷率（changan_c1000，每千台缺陷数，非百分比）
const downtimeText = ref('--') // 停线时长合计（changan_downtime，各天 total_duration 求和，单位 min）

// 产量趋势图（changan_output_trend）
const outputTrendRef = ref<HTMLElement | null>(null)
let outputTrendChart: ReturnType<typeof echarts.init> | null = null

function renderOutputTrend(data: OutputTrendItem[]) {
  if (!outputTrendRef.value) return
  outputTrendChart = echarts.init(outputTrendRef.value)
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
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(5,239,255,0.35)' },
            { offset: 1, color: 'rgba(5,239,255,0.02)' },
          ]),
        },
      },
    ],
  })
}

function handleResize() {
  outputTrendChart?.resize()
}

onMounted(async () => {
  // FTR 一次性通过率
  try {
    const res = await getFtr()
    const ftt = res[0]?.ftt
    if (ftt != null) ftrText.value = (ftt * 100).toFixed(2) + '%'
  } catch (e) {
    console.error('FTR 加载失败', e)
  }
  // 产量汇总
  try {
    const res = await getOutput()
    const out = res[0]?.total_output
    if (out != null) outputText.value = String(out)
  } catch (e) {
    console.error('产量加载失败', e)
  }
  // C1000 缺陷率
  try {
    const res = await getC1000()
    const v = res[0]?.c1000
    if (v != null) c1000Text.value = v.toFixed(2)
  } catch (e) {
    console.error('C1000 加载失败', e)
  }
  // 停线时长（各天 total_duration 求和）
  try {
    const res = await getDowntime()
    const sum = res.reduce((acc, d) => acc + (d.total_duration ?? 0), 0)
    downtimeText.value = String(Math.round(sum))
  } catch (e) {
    console.error('停机统计加载失败', e)
  }
  // 产量趋势图
  try {
    const trend = await getOutputTrend()
    renderOutputTrend(trend)
  } catch (e) {
    console.error('产量趋势加载失败', e)
  }
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  outputTrendChart?.dispose()
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
