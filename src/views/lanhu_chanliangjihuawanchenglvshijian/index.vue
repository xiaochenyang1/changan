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
          <div class="box_2 flex-row justify-between">
            <img
              class="image_3"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng0418e479b888a50c6b127054ce1f896d06bab34adea023f1abff934538557608.png"
            />
            <div class="box_3 flex-col">
              <div class="box_4 flex-row">
                <span class="text_5">总装下线-返修下线</span>
                <span class="text_6">检测上线-下线</span>
                <span class="text_7">检测下线-封测下线</span>
                <span class="text_8">封测下线-淋雨下线</span>
                <span class="text_9">淋雨下线-外观检测上线</span>
                <span class="text_10">外观检测上线-下线</span>
                <span class="text_11">外观检测下线-入库</span>
                <span class="text_12">检测上线-外观检测下线</span>
                <span class="text_13">总装下线-外观检测下线</span>
                <span class="text_14">2小时入库</span>
                <span class="text_15">4小时入库</span>
                <img
                  class="image_4"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng0418e479b888a50c6b127054ce1f896d06bab34adea023f1abff934538557608.png"
                />
                <img
                  class="image_5"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng2dc0ccaf753719a0adf86f37aa29f405c818c892f40a89c2dd5dc326ebf17619.png"
                />
                <img
                  class="image_6"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng2dc0ccaf753719a0adf86f37aa29f405c818c892f40a89c2dd5dc326ebf17619.png"
                />
                <img
                  class="image_7"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng2dc0ccaf753719a0adf86f37aa29f405c818c892f40a89c2dd5dc326ebf17619.png"
                />
                <img
                  class="image_8"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng2dc0ccaf753719a0adf86f37aa29f405c818c892f40a89c2dd5dc326ebf17619.png"
                />
                <img
                  class="image_9"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng2dc0ccaf753719a0adf86f37aa29f405c818c892f40a89c2dd5dc326ebf17619.png"
                />
                <img
                  class="image_10"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng2dc0ccaf753719a0adf86f37aa29f405c818c892f40a89c2dd5dc326ebf17619.png"
                />
                <img
                  class="image_11"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng2dc0ccaf753719a0adf86f37aa29f405c818c892f40a89c2dd5dc326ebf17619.png"
                />
                <img
                  class="image_12"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng2dc0ccaf753719a0adf86f37aa29f405c818c892f40a89c2dd5dc326ebf17619.png"
                />
                <img
                  class="image_13"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng2dc0ccaf753719a0adf86f37aa29f405c818c892f40a89c2dd5dc326ebf17619.png"
                />
                <img
                  class="image_14"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng44a8132bf66e9706aaf0d14721329b6d658f2c6c3cc0aeaf4617bbd1acfe324b.png"
                />
              </div>
              <div class="text-wrapper_2 flex-row">
                <span class="text_16">标准时长</span>
                <span class="text_17">108</span>
                <span class="text_18">108</span>
                <span class="text_19">380</span>
                <span class="text_20">108</span>
                <span class="text_21">108</span>
                <span class="text_22">108</span>
                <span class="text_23">108</span>
                <span class="text_24">108</span>
                <span class="text_25">108</span>
                <span class="text_26">108</span>
                <span class="text_27">108</span>
              </div>
              <div class="text-wrapper_3 flex-row">
                <span class="text_28">实际通过车辆数</span>
                <span class="text_29">130</span>
                <span class="text_30">130</span>
                <span class="text_31">430</span>
                <span class="text_32">130</span>
                <span class="text_33">130</span>
                <span class="text_34">130</span>
                <span class="text_35">130</span>
                <span class="text_36">130</span>
                <span class="text_37">130</span>
                <span class="text_38">130</span>
                <span class="text_39">130</span>
              </div>
              <div class="text-wrapper_4 flex-row">
                <span class="text_40">准时通过车辆数</span>
                <span class="text_41">102</span>
                <span class="text_42">102</span>
                <span class="text_43">102</span>
                <span class="text_44">102</span>
                <span class="text_45">102</span>
                <span class="text_46">102</span>
                <span class="text_47">102</span>
                <span class="text_48">102</span>
                <span class="text_49">102</span>
                <span class="text_50">102</span>
                <span class="text_51">102</span>
              </div>
              <div class="text-wrapper_5 flex-row">
                <span class="text_52">非准时通过车辆数</span>
                <span class="text_53">0</span>
                <span class="text_54">2</span>
                <span class="text_55">2</span>
                <span class="text_56">2</span>
                <span class="text_57">2</span>
                <span class="text_58">2</span>
                <span class="text_59">2</span>
                <span class="text_60">2</span>
                <span class="text_61">2</span>
                <span class="text_62">2</span>
                <span class="text_63">2</span>
              </div>
              <div class="text-wrapper_6 flex-row">
                <span class="text_64">平均过线时长</span>
                <span class="text_65">1</span>
                <span class="text_66">20</span>
                <span class="text_67">20</span>
                <span class="text_68">20</span>
                <span class="text_69">20</span>
                <span class="text_70">20</span>
                <span class="text_71">20</span>
                <span class="text_72">20</span>
                <span class="text_73">20</span>
                <span class="text_74">20</span>
                <span class="text_75">20</span>
              </div>
            </div>
          </div>
          <img
            class="image_15"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng2dc0ccaf753719a0adf86f37aa29f405c818c892f40a89c2dd5dc326ebf17619.png"
          />
          <img
            class="image_16"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngf62a9d1188098c7999e446d28dc179e67f8c1362af9ee40fcf894b16ccdd57be.png"
          />
          <img
            class="image_17"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng2102f0e4b337c0ed9314462db935c247648f0d610d89081264a706fa14517329.png"
          />
          <img
            class="image_18"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng5eb27bce98b95fa61f1b77389061fbd3bb47330f8d620a3715ffc86e3160be5f.png"
          />
          <img
            class="image_19"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng5eb27bce98b95fa61f1b77389061fbd3bb47330f8d620a3715ffc86e3160be5f.png"
          />
          <img
            class="image_20"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng5eb27bce98b95fa61f1b77389061fbd3bb47330f8d620a3715ffc86e3160be5f.png"
          />
          <img
            class="image_21"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng5eb27bce98b95fa61f1b77389061fbd3bb47330f8d620a3715ffc86e3160be5f.png"
          />
          <img
            class="image_22"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng5eb27bce98b95fa61f1b77389061fbd3bb47330f8d620a3715ffc86e3160be5f.png"
          />
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
// 产量计划完成率-时间弹框组件。由父级看板通过 visible 控制显示，关闭时 emit('close')。
defineProps<{ visible: boolean }>()
const emit = defineEmits<{ (e: 'close'): void }>()
</script>


<style scoped lang="css" src="./assets/index.css" />