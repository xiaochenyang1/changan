<template>
  <Teleport to="body">
    <div v-if="visible" class="zongzhuang-mask" @click.self="emit('close')">
      <div class="block_2 flex-col">
        <div class="section_1 flex-col">
          <div class="group_3 flex-row">
          <span class="text_3">总装下线-外观下线</span>
          <img
            class="thumbnail_1 dialog-close"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngb96053a9b80ccb0b02b09888929a9680c971b70362f9f140710993ca1502e41b.png"
            @click="emit('close')"
          />
        </div>
        <div class="group_4 flex-row justify-between">
          <div class="group_5 flex-col">
            <div class="box_1 flex-row">
              <img
                class="thumbnail_2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngd1ec49f1f01e7c4c427be1cf161d5cc1b1cc4d7d5b36bb1bc0399272e5b06ce6.png"
              />
              <span class="text_4">总装下线</span>
              <img
                class="thumbnail_3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng8fc60584944abddb2055cfc737393b63209feba3abb8eeb086c255938d455cc8.png"
              />
            </div>
            <div class="dtd-table">
              <div class="dtd-table__header">
                <div class="dtd-table__cell dtd-table__cell--header">车型</div>
                <div class="dtd-table__cell dtd-table__cell--header">昨日</div>
                <div class="dtd-table__cell dtd-table__cell--header">月累</div>
                <div class="dtd-table__cell dtd-table__cell--header">年累</div>
              </div>
              <div v-for="(row, i) in zongzhuangData" :key="i" class="dtd-table__row">
                <div class="dtd-table__cell">{{ row.name }}</div>
                <div class="dtd-table__cell dtd-table__cell--center">{{ row.yesterday }}</div>
                <div class="dtd-table__cell dtd-table__cell--center">{{ row.month }}</div>
                <div class="dtd-table__cell dtd-table__cell--center">{{ row.year }}</div>
              </div>
            </div>
          </div>
          <div class="group_7 flex-col">
            <div class="image-wrapper_2 flex-col">
              <img
                class="thumbnail_4"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngd1ec49f1f01e7c4c427be1cf161d5cc1b1cc4d7d5b36bb1bc0399272e5b06ce6.png"
              />
              <img
                class="thumbnail_5"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng8fc60584944abddb2055cfc737393b63209feba3abb8eeb086c255938d455cc8.png"
              />
            </div>
            <span class="paragraph_1">
              入库
              <br />
            </span>
            <div class="dtd-table">
              <div class="dtd-table__header">
                <div class="dtd-table__cell dtd-table__cell--header">车型</div>
                <div class="dtd-table__cell dtd-table__cell--header">昨日</div>
                <div class="dtd-table__cell dtd-table__cell--header">月累</div>
                <div class="dtd-table__cell dtd-table__cell--header">年累</div>
              </div>
              <div v-for="(row, i) in rukuData" :key="i" class="dtd-table__row">
                <div class="dtd-table__cell">{{ row.name }}</div>
                <div class="dtd-table__cell dtd-table__cell--center">{{ row.yesterday }}</div>
                <div class="dtd-table__cell dtd-table__cell--center">{{ row.month }}</div>
                <div class="dtd-table__cell dtd-table__cell--center">{{ row.year }}</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
// 总装下线-外观下线弹框组件。由父级看板通过 visible 控制显示，关闭时 emit('close')。
defineProps<{ visible: boolean }>()
const emit = defineEmits<{ (e: 'close'): void }>()

// 总装下线表格数据
const zongzhuangData = [
  { name: '阿维塔 07', yesterday: 108, month: 108, year: 380 },
  { name: '深蓝 L06', yesterday: 130, month: 130, year: 430 },
  { name: '深蓝 S05', yesterday: 102, month: 102, year: 102 },
  { name: '深蓝 S05（海外）', yesterday: 0, month: 2, year: 2 },
  { name: '启源 E07', yesterday: 1, month: 20, year: 20 },
  { name: '启源 E07（海外）', yesterday: 700, month: 2000, year: 2000 },
]

// 入库表格数据（与总装下线相同）
const rukuData = [
  { name: '阿维塔 07', yesterday: 108, month: 108, year: 380 },
  { name: '深蓝 L06', yesterday: 130, month: 130, year: 430 },
  { name: '深蓝 S05', yesterday: 102, month: 102, year: 102 },
  { name: '深蓝 S05（海外）', yesterday: 0, month: 2, year: 2 },
  { name: '启源 E07', yesterday: 1, month: 20, year: 20 },
  { name: '启源 E07（海外）', yesterday: 700, month: 2000, year: 2000 },
]
</script>


<style scoped lang="css" src="./assets/index.css" />