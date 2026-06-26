<template>
  <Teleport to="body">
    <el-config-provider :locale="zhCn">
      <div v-if="visible" class="mt-mask" @click.self="close">
      <div class="mt-panel flex-col">
        <!-- 头部 -->
        <div class="mt-header flex-row">
          <span class="mt-header__icon">▤</span>
          <span class="mt-header__title">创建维修任务</span>
          <span class="mt-close" @click="close">✕</span>
        </div>

        <div class="mt-body flex-col">
          <!-- 任务类型 -->
          <div class="mt-field flex-col">
            <label class="mt-label">🏷 任务类型</label>
            <el-select v-model="form.type" class="mt-field-ctrl" popper-class="mt-popper">
              <el-option v-for="t in TYPE_OPTIONS" :key="t" :label="t" :value="t" />
            </el-select>
          </div>

          <!-- 任务描述 -->
          <div class="mt-field flex-col">
            <label class="mt-label">✎ 任务描述</label>
            <el-input
              v-model="form.description"
              class="mt-field-ctrl"
              :class="{ 'mt-input--error': descError }"
              type="textarea"
              :rows="3"
              resize="none"
              placeholder="请详细描述任务内容..."
              @input="descError = false"
            />
          </div>

          <!-- 指派给 -->
          <div class="mt-field flex-col">
            <label class="mt-label">👤 指派给</label>
            <el-select
              v-model="form.assignee"
              class="mt-field-ctrl"
              popper-class="mt-popper"
              placeholder="请选择指派人员"
            >
              <el-option v-for="a in ASSIGNEE_OPTIONS" :key="a" :label="a" :value="a" />
            </el-select>
          </div>

          <!-- 优先级 -->
          <div class="mt-field flex-col">
            <label class="mt-label">⚑ 优先级</label>
            <el-select v-model="form.priority" class="mt-field-ctrl" popper-class="mt-popper">
              <el-option v-for="p in PRIORITY_OPTIONS" :key="p" :label="p" :value="p" />
            </el-select>
          </div>

          <!-- 期望完成时间 -->
          <div class="mt-field flex-col">
            <label class="mt-label">📅 期望完成时间</label>
            <el-date-picker
              v-model="form.expectedTime"
              class="mt-field-ctrl mt-date-picker"
              type="datetime"
              popper-class="mt-popper mt-date-popper"
              placeholder="请选择期望完成时间"
              format="YYYY-MM-DD HH:mm"
              value-format="YYYY-MM-DD HH:mm:ss"
            />
          </div>

          <!-- 底部按钮 -->
          <div class="mt-actions flex-row">
            <el-button class="mt-btn mt-btn--primary" @click="submit">● 确认创建</el-button>
            <el-button class="mt-btn mt-btn--ghost" @click="close">✕ 取消</el-button>
          </div>

          <!-- 脚注 -->
          <div class="mt-footnote">ⓘ 任务将自动分配给相应部门并跟踪处理进度</div>
        </div>
      </div>
      </div>
    </el-config-provider>
  </Teleport>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 对外仅暴露 v-model:visible（开/关）
defineProps<{ visible: boolean }>()
const emit = defineEmits<{ (e: 'update:visible', value: boolean): void }>()

// 下拉选项
const TYPE_OPTIONS = ['设备维修', '设备保养', '设备检查', '参数调整', '部件更换']
const ASSIGNEE_OPTIONS = [
  '王工-设备维修组',
  '李工-电器维修组',
  '张工-机械维修组',
  '赵工-PLC调试组',
  '陈工-设备保养组',
]
const PRIORITY_OPTIONS = ['低优先级', '中优先级', '高优先级', '紧急']

// 表单默认值
function createForm() {
  return {
    type: '设备维修',
    description: '',
    assignee: '',
    priority: '中优先级',
    expectedTime: '',
  }
}

const form = reactive(createForm())
const descError = ref(false)

function close() {
  emit('update:visible', false)
}

function reset() {
  Object.assign(form, createForm())
  descError.value = false
}

function submit() {
  // 仅校验任务描述非空
  if (!form.description.trim()) {
    descError.value = true
    return
  }
  // TODO: 接入创建任务接口
  console.log('创建维修任务：', { ...form })
  close()
  reset()
}
</script>

<style scoped lang="scss">
.mt-mask {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.55);
}

.mt-panel {
  width: 26vw;
  max-height: 92vh;
  overflow-y: auto;
  background-color: rgba(46, 61, 97, 1);
  border: 0.052vw solid rgba(64, 158, 255, 0.55);
  border-radius: 0.417vw;
  box-shadow: 0 0 1.5vw rgba(0, 132, 255, 0.45);

  // ===== element-plus 深色主题变量（自动级联到面板内所有 el-* 控件）=====
  --el-border-radius-base: 0.26vw;
  --el-fill-color-blank: rgba(30, 43, 74, 1);
  --el-border-color: rgba(74, 110, 170, 0.6);
  --el-border-color-hover: rgba(120, 160, 220, 0.9);
  --el-color-primary: rgba(64, 158, 255, 1);
  --el-text-color-regular: rgba(235, 244, 255, 1);
  --el-text-color-primary: rgba(235, 244, 255, 1);
  --el-text-color-placeholder: rgba(140, 165, 205, 0.8);
  // el-input / el-textarea 专用变量
  --el-input-bg-color: rgba(30, 43, 74, 1);
  --el-input-border-color: rgba(74, 110, 170, 0.6);
  --el-input-hover-border-color: rgba(120, 160, 220, 0.9);
  --el-input-focus-border-color: rgba(64, 158, 255, 1);
  --el-input-text-color: rgba(235, 244, 255, 1);
}

/* 头部 */
.mt-header {
  align-items: center;
  height: 6.296vh;
  padding: 0 1.25vw;
  border-bottom: 0.052vw solid rgba(64, 158, 255, 0.28);
  background: linear-gradient(180deg, rgba(36, 52, 88, 1) 0%, rgba(46, 61, 97, 1) 100%);

  &__icon {
    color: rgba(243, 84, 84, 1);
    font-size: 1.1vw;
    margin-right: 0.625vw;
  }

  &__title {
    flex: 1;
    color: rgba(255, 255, 255, 1);
    font-size: 1.146vw;
    font-weight: 700;
    letter-spacing: 0.104vw;
    white-space: nowrap;
  }
}

.mt-close {
  width: 1.875vh;
  height: 1.875vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(180, 205, 240, 1);
  font-size: 0.833vw;
  border: 0.052vw solid rgba(120, 160, 220, 0.6);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #fff;
    border-color: rgba(64, 158, 255, 1);
    box-shadow: 0 0 0.4vw rgba(64, 158, 255, 0.8);
  }
}

/* 主体 */
.mt-body {
  padding: 1.852vh 1.25vw 1.481vh;
}

.mt-field {
  margin-bottom: 1.296vh;
}

.mt-label {
  color: rgba(180, 205, 240, 1);
  font-size: 0.833vw;
  margin-bottom: 0.648vh;
  white-space: nowrap;
}

/* ===== el-* 控件尺寸贴合大屏 vw 体系（仅改尺寸，颜色/聚焦走变量）===== */
.mt-field-ctrl {
  width: 100%;
}

// el-date-picker 默认固定像素宽（--el-date-editor-width）。
// 不依赖 class 透传是否落到 .el-date-editor 根（el-date-picker 不一定转发 class），
// 改用 .mt-field 包裹层 :deep 直接命中编辑器根并撑满，与其它控件等宽。
.mt-field :deep(.el-date-editor.el-input) {
  --el-date-editor-width: 100%;
  width: 100%;
}

// 去掉日期框默认的时钟前缀图标，与其它输入框（无前缀）保持一致
.mt-field :deep(.el-date-editor .el-input__prefix) {
  display: none;
}

// el-select / el-date-picker 触发框：单行高度对齐
.mt-field-ctrl {
  :deep(.el-select__wrapper),
  :deep(.el-input__wrapper) {
    min-height: 4.259vh;
    padding: 0 0.729vw;
    font-size: 0.833vw;
  }

  :deep(.el-select__placeholder),
  :deep(.el-select__selected-item),
  :deep(.el-input__inner) {
    font-size: 0.833vw;
  }

  // 任务描述多行框
  :deep(.el-textarea__inner) {
    min-height: 9.259vh !important;
    padding: 0.741vh 0.729vw;
    font-size: 0.833vw;
    line-height: 1.6;
  }
}

// 日期框隐藏默认前缀图标后，单独补足左右留白；同时稳定清空图标占位，避免 hover 抖动
.mt-field :deep(.el-date-editor .el-input__wrapper) {
  padding-left: 0.938vw;
  padding-right: 0.625vw;
}

.mt-field :deep(.el-date-editor .el-input__suffix) {
  width: 1.25vw;
  justify-content: center;
}

.mt-field :deep(.el-date-editor .el-input__suffix-inner) {
  width: 100%;
}

.mt-field :deep(.el-date-editor .el-input__icon) {
  margin-left: 0;
}

// 任务描述未填写时的红色错误描边
.mt-input--error {
  :deep(.el-textarea__inner) {
    box-shadow: 0 0 0 0.052vw rgba(243, 84, 84, 1) inset !important;
  }
}

/* 底部按钮 */
.mt-actions {
  gap: 0.833vw;
  margin-top: 1.852vh;
}

.mt-btn.el-button {
  flex: 1;
  height: 5.185vh;
  margin: 0;
  font-size: 0.938vw;
  letter-spacing: 0.104vw;
  border-radius: 0.26vw;
  transition: all 0.2s;

  &.mt-btn--primary {
    color: #fff;
    border: 0.052vw solid rgba(64, 158, 255, 0.9);
    background: linear-gradient(180deg, rgba(48, 110, 200, 1) 0%, rgba(32, 74, 150, 1) 100%);

    &:hover,
    &:focus {
      color: #fff;
      border-color: rgba(64, 158, 255, 1);
      background: linear-gradient(180deg, rgba(58, 125, 220, 1) 0%, rgba(40, 88, 170, 1) 100%);
      box-shadow: 0 0 0.8vw rgba(64, 158, 255, 0.7);
    }
  }

  &.mt-btn--ghost {
    color: rgba(200, 220, 245, 1);
    border: 0.052vw solid rgba(90, 125, 180, 0.7);
    background-color: rgba(34, 48, 80, 0.6);

    &:hover,
    &:focus {
      color: #fff;
      border-color: rgba(140, 175, 225, 1);
      background-color: rgba(34, 48, 80, 0.6);
    }
  }
}

/* 脚注 */
.mt-footnote {
  margin-top: 1.481vh;
  text-align: center;
  color: rgba(150, 180, 220, 0.9);
  font-size: 0.729vw;
  white-space: nowrap;
}
</style>

<!-- 非 scoped：el-select 下拉、el-date-picker 面板都 teleport 到 body，scoped 样式无法命中，需全局覆盖为深色主题 -->
<style lang="scss">
// 共用：下拉框 / 日期面板的深色变量
.mt-popper.el-popper {
  --el-bg-color-overlay: rgba(46, 61, 97, 1);
  --el-fill-color-blank: rgba(30, 43, 74, 1);
  --el-fill-color-light: rgba(64, 158, 255, 0.18); // 选项 hover 底色
  --el-border-color-light: rgba(64, 158, 255, 0.28);
  --el-border-color: rgba(64, 158, 255, 0.4);
  --el-text-color-regular: rgba(220, 235, 255, 1);
  --el-text-color-primary: rgba(235, 244, 255, 1);
  --el-text-color-secondary: rgba(150, 180, 220, 1);
  --el-text-color-placeholder: rgba(140, 165, 205, 0.8);
  --el-color-primary: rgba(64, 158, 255, 1);
  --el-disabled-bg-color: rgba(30, 43, 74, 0.5);

  background-color: rgba(46, 61, 97, 1);
  border: 0.052vw solid rgba(64, 158, 255, 0.55);
  box-shadow: 0 0 1vw rgba(0, 132, 255, 0.4);

  // 弹层小三角随面板变深
  .el-popper__arrow::before {
    background-color: rgba(46, 61, 97, 1) !important;
    border-color: rgba(64, 158, 255, 0.55) !important;
  }

  // 选中项保持主题蓝
  .el-select-dropdown__item.is-selected {
    color: rgba(64, 158, 255, 1);
  }
}

// 日期面板特有部分
.mt-date-popper.el-picker__popper {
  .el-date-picker {
    box-sizing: border-box;
  }

  .el-date-picker__time-header {
    display: flex;
    align-items: center;
    gap: 0.417vw;
    width: 100%;
    padding: 0.741vh 0.521vw 0.463vh;
    box-sizing: border-box;
  }

  .el-date-picker__editor-wrap {
    display: block;
    flex: 1 1 0;
    min-width: 0;
    padding: 0;
  }

  .el-date-picker__editor-wrap .el-input {
    width: 100%;
    min-width: 0;
  }

  .el-date-picker__editor-wrap .el-input__wrapper {
    width: 100%;
    min-width: 0;
    padding: 0 0.521vw;
    box-sizing: border-box;
  }

  .el-date-picker__editor-wrap .el-input__inner {
    min-width: 0;
    font-size: 0.625vw;
  }

  .el-picker-panel__icon-btn,
  .el-date-picker__header-label {
    color: rgba(200, 220, 245, 1);
  }

  .el-date-table th {
    color: rgba(150, 180, 220, 1);
    border-bottom-color: rgba(64, 158, 255, 0.2);
  }

  .el-time-panel {
    background-color: rgba(46, 61, 97, 1);
    border-color: rgba(64, 158, 255, 0.4);
  }
  .el-time-spinner__item {
    color: rgba(220, 235, 255, 1);
  }

  // 底部「此刻 / 确定」按钮区
  .el-picker-panel__footer {
    background-color: rgba(40, 54, 88, 1);
    border-top-color: rgba(64, 158, 255, 0.2);
  }
}
</style>
