<template>
  <Teleport to="body">
    <div v-if="visible" class="zhouqi-mask" @click.self="emit('close')">
      <div class="box_2 flex-col">
        <div class="section_3 flex-row justify-between">
          <span class="text_3">制造周期</span>
          <div class="image-wrapper_2 flex-col dialog-close" @click="emit('close')">
            <img
              class="thumbnail_1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngb96053a9b80ccb0b02b09888929a9680c971b70362f9f140710993ca1502e41b.png"
            />
          </div>
        </div>
        <div class="section_4 flex-col">
          <div class="box_3 flex-row">
            <img
              class="thumbnail_2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng8fc60584944abddb2055cfc737393b63209feba3abb8eeb086c255938d455cc8.png"
            />
            <span class="paragraph_1">
              各区域制造周期
              <br />
            </span>
            <div class="box_4 flex-col"></div>
            <span class="text_4">目标</span>
            <div class="box_5 flex-col"></div>
            <span class="text_5">昨日</span>
            <div class="box_6 flex-col"></div>
            <span class="text_6">月均</span>
          </div>
          <div class="box_7 flex-row justify-between">
            <div class="text-wrapper_1 flex-col">
              <span class="text_7">100</span>
              <span class="text_8">75</span>
              <span class="text_9">50</span>
              <span class="text_10">25</span>
              <span class="text_11">0</span>
            </div>
            <div class="section_5 flex-col">
              <div class="text-wrapper_2 flex-row">
                <span class="text_12">92</span>
                <span class="text_13">100</span>
                <span class="text_14">93</span>
                <span class="text_15">92</span>
                <span class="text_16">90</span>
                <span class="text_17">92</span>
              </div>
              <div class="block_2 flex-row">
                <div class="block_3 flex-col justify-between">
                  <span class="text_18">60</span>
                  <img
                    class="image_3"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng38365765c3d2ec331a0ce9c403c8d1e89c4a529d4fcce44b25d90e467433f526.png"
                  />
                </div>
                <div class="block_4 flex-col justify-between">
                  <span class="text_19">60</span>
                  <img
                    class="image_4"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng183059b92f786a226033f8a863bd032e897b10c0252a47a1b4a51f8c3288174c.png"
                  />
                </div>
                <img
                  class="image_5"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPngd2c761d260caf852cbe848d611b7c6c7acbb38e165cd315eb6629ec1e7615004.png"
                />
                <div class="block_5 flex-col justify-between">
                  <span class="text_20">80</span>
                  <img
                    class="image_6"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng14873bd78b9342790e5fd06db84366d0524bb39b44dd0bc3f7253d417d8e0ca1.png"
                  />
                </div>
                <div class="block_6 flex-col justify-between">
                  <span class="text_21">60</span>
                  <img
                    class="image_7"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPngce6acdb9c0e68a4dae2359de6a6f5c065165dcbe0c1f31c71a8ca67319ef03af.png"
                  />
                </div>
                <img
                  class="image_8"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPngab3856bc7f3bd210ae3fd389d89c437c62974cfe31efa68544a4e5929febf67b.png"
                />
                <img
                  class="image_9"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPngf7951a7a4edda210031dae284e754a1ebd6aa6823ee1e121e2ce20f7e8724000.png"
                />
                <div class="block_7 flex-col justify-between">
                  <span class="text_22">60</span>
                  <img
                    class="image_10"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng72e39508f2e4056cceda016d97aa62e5913ff567f15e5cf0fac7cf116c314c2f.png"
                  />
                </div>
                <img
                  class="image_11"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPngb1f4e7e22c54f1ed2362d55964dc51a90255384534e2b5c010e85da3a50f8afa.png"
                />
                <div class="block_8 flex-col justify-between">
                  <span class="text_23">70</span>
                  <img
                    class="image_12"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng4dafaa37960b6ad422f8c2cfe95a8b30ed5029d8d5c1beb0f446921593337e23.png"
                  />
                </div>
                <div class="block_9 flex-col justify-between">
                  <span class="text_24">60</span>
                  <img
                    class="image_13"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPngce6acdb9c0e68a4dae2359de6a6f5c065165dcbe0c1f31c71a8ca67319ef03af.png"
                  />
                </div>
                <div class="block_10 flex-col justify-between">
                  <span class="text_25">80</span>
                  <img
                    class="image_14"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng60133de625595f56643db51f738ae576126b233a2eec8e45dc65f33a61946d68.png"
                  />
                </div>
                <img
                  class="image_15"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng213ecccb56539aea4e7d9bdf5ef44906076f2ef84c56ce26d6e3824f4293199c.png"
                />
                <div class="block_11 flex-col justify-between">
                  <span class="text_26">60</span>
                  <img
                    class="image_16"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPngce6acdb9c0e68a4dae2359de6a6f5c065165dcbe0c1f31c71a8ca67319ef03af.png"
                  />
                </div>
                <img
                  class="image_17"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng2e6b7d7eed9a92c6ea9fc7f8b700852d9c8623e4699584ed5a3dfde71210b3f5.png"
                />
              </div>
              <div class="text-wrapper_3 flex-row justify-between">
                <span class="text_27">冲压车间</span>
                <span class="text_28">焊接车间</span>
                <span class="text_29">涂装车间</span>
                <span class="text_30">总装车间</span>
                <span class="text_31">工厂整体</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section_6 flex-row justify-between">
          <div class="box_8 flex-col">
            <div class="text-wrapper_4 flex-row">
              <span class="paragraph_2">
                DTD超时车辆
                <br />
              </span>
            </div>
            <div class="dtd-table">
              <div class="dtd-table__header">
                <div class="dtd-table__cell dtd-table__cell--header">物料种类</div>
                <div class="dtd-table__cell dtd-table__cell--header">数量</div>
                <div class="dtd-table__cell dtd-table__cell--header">平均超时时长</div>
              </div>
              <div v-for="(row, i) in dtdData" :key="i" class="dtd-table__row">
                <div class="dtd-table__cell">{{ row.name }}</div>
                <div class="dtd-table__cell dtd-table__cell--center">{{ row.count }}</div>
                <div class="dtd-table__cell dtd-table__cell--center">{{ row.avgTime }}</div>
              </div>
            </div>
          </div>
          <div class="box_9 flex-col">
            <span class="paragraph_3">
              各区域在线车
              <br />
            </span>
            <div class="dtd-table">
              <div class="dtd-table__header">
                <div class="dtd-table__cell dtd-table__cell--header">区域</div>
                <div class="dtd-table__cell dtd-table__cell--header">在线车数量</div>
              </div>
              <div v-for="(row, i) in zoneData" :key="i" class="dtd-table__row">
                <div class="dtd-table__cell">{{ row.name }}</div>
                <div class="dtd-table__cell dtd-table__cell--center">{{ row.count }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
// 制造周期弹框组件。由父级看板通过 visible 控制显示，关闭时 emit('close')。
defineProps<{ visible: boolean }>()
const emit = defineEmits<{ (e: 'close'): void }>()

// DTD 超时车辆表格数据。后续接真实接口时替换为请求返回值。
const dtdData = [
  { name: '焊接车间', count: 5, avgTime: 9.5 },
  { name: '立库焊后', count: 603, avgTime: 0.5 },
  { name: '涂装车间', count: 102, avgTime: 4.7 },
  { name: '立库涂后', count: 92, avgTime: 4.4 },
  { name: '总装车间', count: 120, avgTime: 0.1 },
  { name: '后端交付', count: 429, avgTime: 3.9 },
]

// 各区域在线车表格数据。后续接真实接口时替换为请求返回值。
const zoneData = [
  { name: '焊接车间', count: 133 },
  { name: '白车身立库', count: 23 },
  { name: '涂装车间', count: 524 },
  { name: '彩车身立库', count: 17 },
  { name: '总装车间', count: 338 },
  { name: '总装下线-入库', count: 277 },
]
</script>


<style scoped lang="css" src="./assets/index.css" />