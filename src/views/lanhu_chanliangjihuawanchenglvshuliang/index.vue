<template>
  <Teleport to="body">
    <div v-if="visible" class="chanliang-shuliang-mask" @click.self="emit('close')">
      <div class="group_4 flex-col">
        <div class="group_5 flex-row justify-between">
          <span class="text_3">产量计划完成率-数量</span>
          <img
            class="thumbnail_1 dialog-close"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngb96053a9b80ccb0b02b09888929a9680c971b70362f9f140710993ca1502e41b.png"
            @click="emit('close')"
          />
        </div>
        <div class="group_6 flex-row justify-between">
          <div class="box_1 flex-col">
            <span class="paragraph_1">
              交付累计完成
              <br />
            </span>
            <div class="block_2 flex-row justify-between">
              <div class="image-text_1 flex-row justify-between">
                <div class="block_3 flex-col"></div>
                <span class="text-group_1">计划</span>
              </div>
              <div class="image-text_2 flex-row justify-between">
                <div class="section_1 flex-col"></div>
                <span class="text-group_2">实际</span>
              </div>
            </div>
            <div class="block_4 flex-row justify-between">
              <div class="text-wrapper_1 flex-col">
                <span class="text_4">100</span>
                <span class="text_5">75</span>
                <span class="text_6">50</span>
                <span class="text_7">25</span>
                <span class="text_8">0</span>
              </div>
              <div class="box_2 flex-col">
                <div class="text-wrapper_2 flex-row">
                  <span class="text_9">92</span>
                  <span class="text_10">100</span>
                  <span class="text_11">92</span>
                  <span class="text_12">92</span>
                </div>
                <div class="box_3 flex-row">
                  <div class="image-text_3 flex-row justify-between">
                    <div class="group_7 flex-col justify-between">
                      <span class="text-group_3">60</span>
                      <img
                        class="image_3"
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPng183059b92f786a226033f8a863bd032e897b10c0252a47a1b4a51f8c3288174c.png"
                      />
                    </div>
                    <img
                      class="image_4"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPngd2c761d260caf852cbe848d611b7c6c7acbb38e165cd315eb6629ec1e7615004.png"
                    />
                  </div>
                  <div class="image-text_4 flex-row justify-between">
                    <div class="box_4 flex-col justify-between">
                      <span class="text-group_4">60</span>
                      <img
                        class="image_5"
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPngce6acdb9c0e68a4dae2359de6a6f5c065165dcbe0c1f31c71a8ca67319ef03af.png"
                      />
                    </div>
                    <img
                      class="image_6"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPngab3856bc7f3bd210ae3fd389d89c437c62974cfe31efa68544a4e5929febf67b.png"
                    />
                  </div>
                  <div class="image-text_5 flex-row justify-between">
                    <div class="group_8 flex-col justify-between">
                      <span class="text-group_5">80</span>
                      <img
                        class="image_7"
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPng72e39508f2e4056cceda016d97aa62e5913ff567f15e5cf0fac7cf116c314c2f.png"
                      />
                    </div>
                    <img
                      class="image_8"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPngb1f4e7e22c54f1ed2362d55964dc51a90255384534e2b5c010e85da3a50f8afa.png"
                    />
                  </div>
                  <div class="image-text_6 flex-row justify-between">
                    <div class="box_5 flex-col justify-between">
                      <span class="text-group_6">60</span>
                      <img
                        class="image_9"
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPng39b1ab2f046cc10715a6e13a60e2a93895fe4e425ec3dd038ed2f8e10c0c967b.png"
                      />
                    </div>
                    <img
                      class="image_10"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPnga262c12900ae806cdb287ac4752fe4571007efcaa6a6ac62f2cc78161b8ba557.png"
                    />
                  </div>
                </div>
                <div class="text-wrapper_3 flex-row">
                  <span class="text_13">月度下线</span>
                  <span class="text_14">月度入库</span>
                  <span class="text_15">周度下线</span>
                  <span class="text_16">周度入库</span>
                </div>
              </div>
            </div>
          </div>
          <div class="box_6 flex-col">
            <div class="group_9 flex-row">
              <span class="paragraph_2">
                各车间日生产计划完成情况
                <br />
              </span>
              <div class="image-text_7 flex-row justify-between">
                <div class="block_5 flex-col"></div>
                <span class="text-group_7">计划</span>
              </div>
              <div class="image-text_8 flex-row justify-between">
                <div class="box_7 flex-col"></div>
                <span class="text-group_8">实际</span>
              </div>
            </div>
            <div class="group_10 flex-row justify-between">
              <div class="text-wrapper_4 flex-col">
                <span class="text_17">100</span>
                <span class="text_18">75</span>
                <span class="text_19">50</span>
                <span class="text_20">25</span>
                <span class="text_21">0</span>
              </div>
              <div class="group_11 flex-col">
                <div class="text-wrapper_5 flex-row">
                  <span class="text_22">92</span>
                  <span class="text_23">100</span>
                  <span class="text_24">100</span>
                  <span class="text_25">92</span>
                  <span class="text_26">92</span>
                </div>
                <div class="box_8 flex-row">
                  <div class="image-text_9 flex-row justify-between">
                    <div class="box_9 flex-col justify-between">
                      <span class="text-group_9">60</span>
                      <img
                        class="image_11"
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPng183059b92f786a226033f8a863bd032e897b10c0252a47a1b4a51f8c3288174c.png"
                      />
                    </div>
                    <img
                      class="image_12"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPngd2c761d260caf852cbe848d611b7c6c7acbb38e165cd315eb6629ec1e7615004.png"
                    />
                  </div>
                  <div class="image-text_10 flex-row justify-between">
                    <div class="box_10 flex-col justify-between">
                      <span class="text-group_10">60</span>
                      <img
                        class="image_13"
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPngce6acdb9c0e68a4dae2359de6a6f5c065165dcbe0c1f31c71a8ca67319ef03af.png"
                      />
                    </div>
                    <img
                      class="image_14"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPngab3856bc7f3bd210ae3fd389d89c437c62974cfe31efa68544a4e5929febf67b.png"
                    />
                  </div>
                  <div class="image-text_11 flex-row justify-between">
                    <div class="block_6 flex-col justify-between">
                      <span class="text-group_11">60</span>
                      <img
                        class="image_15"
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPngce6acdb9c0e68a4dae2359de6a6f5c065165dcbe0c1f31c71a8ca67319ef03af.png"
                      />
                    </div>
                    <img
                      class="image_16"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPngab3856bc7f3bd210ae3fd389d89c437c62974cfe31efa68544a4e5929febf67b.png"
                    />
                  </div>
                  <div class="image-text_12 flex-row justify-between">
                    <div class="box_11 flex-col justify-between">
                      <span class="text-group_12">80</span>
                      <img
                        class="image_17"
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPng72e39508f2e4056cceda016d97aa62e5913ff567f15e5cf0fac7cf116c314c2f.png"
                      />
                    </div>
                    <img
                      class="image_18"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPngb1f4e7e22c54f1ed2362d55964dc51a90255384534e2b5c010e85da3a50f8afa.png"
                    />
                  </div>
                  <div class="image-text_13 flex-row justify-between">
                    <div class="box_12 flex-col justify-between">
                      <span class="text-group_13">60</span>
                      <img
                        class="image_19"
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPng39b1ab2f046cc10715a6e13a60e2a93895fe4e425ec3dd038ed2f8e10c0c967b.png"
                      />
                    </div>
                    <img
                      class="image_20"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPnga262c12900ae806cdb287ac4752fe4571007efcaa6a6ac62f2cc78161b8ba557.png"
                    />
                  </div>
                </div>
                <div class="text-wrapper_6 flex-row">
                  <span class="text_27">冲压车间</span>
                  <span class="text_28">焊接车间</span>
                  <span class="text_29">涂装车间</span>
                  <span class="text_30">总装车间</span>
                  <span class="text_31">电池车间</span>
                </div>
              </div>
            </div>
            <div class="image-wrapper_2 flex-col">
              <img
                class="thumbnail_2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngd1ec49f1f01e7c4c427be1cf161d5cc1b1cc4d7d5b36bb1bc0399272e5b06ce6.png"
              />
              <img
                class="thumbnail_3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng8fc60584944abddb2055cfc737393b63209feba3abb8eeb086c255938d455cc8.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
// 产量计划完成率-数量弹框组件。由父级看板通过 visible 控制显示，关闭时 emit('close')。
defineProps<{ visible: boolean }>()
const emit = defineEmits<{ (e: 'close'): void }>()
</script>


<style scoped lang="css" src="./assets/index.css" />