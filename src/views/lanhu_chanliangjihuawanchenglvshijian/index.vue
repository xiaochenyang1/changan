<template>
  <Teleport to="body">
    <div v-if="visible" class="chanliang-shijian-mask" @click.self="emit('close')">
      <div class="group_1 flex-col">
        <div class="section_1 flex-row justify-between">
          <span class="text_3">产量计划完成率-时间</span>
          <img
            class="thumbnail_1 dialog-close"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngb96053a9b80ccb0b02b09888929a9680c971b70362f9f140710993ca1502e41b.png"
            @click="emit('close')"
          />
        </div>
        <div class="section_2 flex-col">
          <div class="text-wrapper_1 flex-row"><span class="text_4">准时入库率</span></div>
          <div class="dtd-table">
            <div class="dtd-table__header">
              <div class="dtd-table__cell dtd-table__cell--header"></div>
              <div
                v-for="(stage, i) in stages"
                :key="i"
                class="dtd-table__cell dtd-table__cell--header"
              >
                {{ stage }}
              </div>
            </div>
            <div v-for="(row, i) in tableData" :key="i" class="dtd-table__row">
              <div class="dtd-table__cell">{{ row.name }}</div>
              <div
                v-for="(value, j) in row.values"
                :key="j"
                class="dtd-table__cell dtd-table__cell--center"
              >
                {{ value }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
// 产量计划完成率-时间弹框组件。由父级看板通过 visible 控制显示，关闭时 emit('close')。
defineProps<{ visible: boolean }>()
const emit = defineEmits<{ (e: 'close'): void }>()

// 表头各过线节点。后续接真实接口时替换为请求返回值。
const stages = [
  '总装下线-返修下线',
  '检测上线-下线',
  '检测下线-封测下线',
  '封测下线-淋雨下线',
  '淋雨下线-外观检测上线',
  '外观检测上线-下线',
  '外观检测下线-入库',
  '检测上线-外观检测下线',
  '总装下线-外观检测下线',
  '2小时入库',
  '4小时入库',
]

// 各指标行数据，values 与 stages 一一对应。后续接真实接口时替换为请求返回值。
const tableData = [
  { name: '标准时长', values: [108, 108, 380, 108, 108, 108, 108, 108, 108, 108, 108] },
  { name: '实际通过车辆数', values: [130, 130, 430, 130, 130, 130, 130, 130, 130, 130, 130] },
  { name: '准时通过车辆数', values: [102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102] },
  { name: '非准时通过车辆数', values: [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] },
  { name: '平均过线时长', values: [1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] },
]
</script>


<style scoped lang="css" src="./assets/index.css" />