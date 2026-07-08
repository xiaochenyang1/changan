<template>
  <Teleport to="body">
    <el-config-provider :locale="zhCn">
      <div v-if="visible" class="ct-mask" @click.self="close">
        <div class="ct-panel flex-col">
          <!-- 头部 -->
          <div class="ct-header flex-row">
            <span class="ct-header__icon">＋</span>
            <span class="ct-header__title">新增任务</span>
            <span class="ct-close" @click="close">✕</span>
          </div>

          <div class="ct-body flex-col">
            <!-- 任务标题 -->
            <div class="ct-field flex-col">
              <label class="ct-label"><span class="ct-req">*</span> 任务标题</label>
              <el-input
                v-model="form.title"
                class="ct-field-ctrl"
                :class="{ 'ct-ctrl--error': errors.title }"
                maxlength="200"
                show-word-limit
                placeholder="请输入任务标题"
                @input="errors.title = false"
              />
            </div>

            <!-- 任务描述 -->
            <div class="ct-field flex-col">
              <label class="ct-label">任务描述</label>
              <el-input
                v-model="form.description"
                class="ct-field-ctrl"
                type="textarea"
                :rows="3"
                resize="none"
                maxlength="2000"
                show-word-limit
                placeholder="请详细描述任务内容..."
              />
            </div>

            <!-- 车间 -->
            <div class="ct-field flex-col">
              <label class="ct-label"><span class="ct-req">*</span> 车间</label>
              <el-select
                v-model="form.workshop"
                class="ct-field-ctrl"
                :class="{ 'ct-ctrl--error': errors.workshop }"
                popper-class="ct-popper"
                placeholder="请选择车间"
                @change="errors.workshop = false"
              >
                <el-option v-for="w in workshops" :key="w.code" :label="w.name" :value="w.code" />
              </el-select>
            </div>

            <!-- 室组 -->
            <div class="ct-field flex-col">
              <label class="ct-label"><span class="ct-req">*</span> 室组</label>
              <el-select
                v-model="form.groupName"
                class="ct-field-ctrl"
                :class="{ 'ct-ctrl--error': errors.groupName }"
                popper-class="ct-popper"
                placeholder="请选择室组"
                @change="errors.groupName = false"
              >
                <el-option v-for="g in groups" :key="g.code" :label="g.name" :value="g.code" />
              </el-select>
            </div>

            <!-- 优先级 -->
            <div class="ct-field flex-col">
              <label class="ct-label">优先级</label>
              <el-radio-group v-model="form.priority" class="ct-radio-group">
                <el-radio v-for="p in priorities" :key="p.code" :value="p.code">{{ p.name }}</el-radio>
              </el-radio-group>
            </div>

            <!-- 负责人 -->
            <div class="ct-field flex-col">
              <label class="ct-label">负责人</label>
              <el-input
                v-model="form.assignee"
                class="ct-field-ctrl"
                maxlength="50"
                placeholder="请输入负责人"
              />
            </div>

            <!-- 截止日期 -->
            <div class="ct-field flex-col">
              <label class="ct-label">截止日期</label>
              <el-date-picker
                v-model="form.deadline"
                class="ct-field-ctrl ct-date-picker"
                type="datetime"
                popper-class="ct-popper ct-date-popper"
                placeholder="请选择截止日期"
                format="YYYY-MM-DD HH:mm"
                value-format="YYYY-MM-DDTHH:mm:ss"
              />
            </div>

            <!-- 底部按钮 -->
            <div class="ct-actions flex-row">
              <el-button class="ct-btn ct-btn--primary" :loading="submitting" @click="submit">
                ● 创建任务
              </el-button>
              <el-button class="ct-btn ct-btn--ghost" @click="close">✕ 取消</el-button>
            </div>

            <!-- 脚注 -->
            <div class="ct-footnote">ⓘ 任务将同步至车间任务系统并进入待处理</div>
          </div>
        </div>
      </div>
    </el-config-provider>
  </Teleport>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { createTask } from '@/api/modules/task'

// 对外仅暴露 v-model:visible（开/关）
defineProps<{ visible: boolean }>()
const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
  (e: 'created'): void
}>()

// 下拉选项：value 为入库 code（英文），label 为中文显示名。
// abbr 为任务编号缩写（车间/室组各自的两字码），供后端/编号生成参考。
interface OptionItem {
  code: string
  name: string
  abbr?: string
}

// 车间：冲压CY / 焊接HJ / 喷涂PT / 装配ZP / 电池DC
const workshops: OptionItem[] = [
  { code: 'STAMPING', name: '冲压车间', abbr: 'CY' },
  { code: 'WELDING', name: '焊接车间', abbr: 'HJ' },
  { code: 'PAINTING', name: '喷涂车间', abbr: 'PT' },
  { code: 'ASSEMBLY', name: '装配车间', abbr: 'ZP' },
  { code: 'BATTERY', name: '电池车间', abbr: 'DC' },
]

// 室组：工艺GY / 质量ZL / 设备SB / 制造ZZ
const groups: OptionItem[] = [
  { code: 'PROCESS', name: '工艺室组', abbr: 'GY' },
  { code: 'QUALITY', name: '质量室组', abbr: 'ZL' },
  { code: 'EQUIPMENT', name: '设备室组', abbr: 'SB' },
  { code: 'MANUFACTURING', name: '制造室组', abbr: 'ZZ' },
]

// 优先级：高HIGH / 中MEDIUM / 低LOW
const priorities: OptionItem[] = [
  { code: 'HIGH', name: '高' },
  { code: 'MEDIUM', name: '中' },
  { code: 'LOW', name: '低' },
]

const submitting = ref(false)

function createForm() {
  return {
    title: '',
    description: '',
    workshop: '', // 车间不预填，与任务列表新建保持一致
    groupName: '',
    priority: 'MEDIUM',
    assignee: '',
    deadline: '',
  }
}

const form = reactive(createForm())
// 必填项错误态（红色描边，与另一弹框风格一致）
const errors = reactive({ title: false, workshop: false, groupName: false })

function close() {
  emit('update:visible', false)
}

function reset() {
  Object.assign(form, createForm())
  errors.title = false
  errors.workshop = false
  errors.groupName = false
}

function validate() {
  errors.title = !form.title.trim()
  errors.workshop = !form.workshop
  errors.groupName = !form.groupName
  return !errors.title && !errors.workshop && !errors.groupName
}

async function submit() {
  if (!validate()) return

  submitting.value = true
  try {
    // 公共 http 拦截不判 code，这里按后端信封自行判断（code === 0 才算成功）
    const res = await createTask({ ...form })
    if (res.code !== 0) {
      ElMessage.error(res.message || '任务创建失败')
      return
    }
    ElMessage.success('任务创建成功')
    emit('created')
    close()
    reset()
  } catch (e: unknown) {
    const err = e as { response?: { data?: { message?: string } }; message?: string }
    ElMessage.error(err?.response?.data?.message || err?.message || '任务创建失败')
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped lang="scss">
.ct-mask {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.55);
}

.ct-panel {
  width: 26vw;
  max-height: 92vh;
  overflow-y: auto;
  background-color: rgba(46, 61, 97, 1);
  border: 0.052vw solid rgba(64, 158, 255, 0.55);
  border-radius: 0.417vw;
  box-shadow: 0 0 1.5vw rgba(0, 132, 255, 0.45);

  // ===== element-plus 深色主题变量（级联到面板内所有 el-* 控件）=====
  --el-border-radius-base: 0.26vw;
  --el-fill-color-blank: rgba(30, 43, 74, 1);
  --el-border-color: rgba(74, 110, 170, 0.6);
  --el-border-color-hover: rgba(120, 160, 220, 0.9);
  --el-color-primary: rgba(64, 158, 255, 1);
  --el-text-color-regular: rgba(235, 244, 255, 1);
  --el-text-color-primary: rgba(235, 244, 255, 1);
  --el-text-color-placeholder: rgba(140, 165, 205, 0.8);
  --el-input-bg-color: rgba(30, 43, 74, 1);
  --el-input-border-color: rgba(74, 110, 170, 0.6);
  --el-input-hover-border-color: rgba(120, 160, 220, 0.9);
  --el-input-focus-border-color: rgba(64, 158, 255, 1);
  --el-input-text-color: rgba(235, 244, 255, 1);
}

/* 头部 */
.ct-header {
  align-items: center;
  height: 6.296vh;
  padding: 0 1.25vw;
  border-bottom: 0.052vw solid rgba(64, 158, 255, 0.28);
  background: linear-gradient(180deg, rgba(36, 52, 88, 1) 0%, rgba(46, 61, 97, 1) 100%);

  &__icon {
    color: rgba(64, 200, 255, 1);
    font-size: 1.25vw;
    font-weight: 700;
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

.ct-close {
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
.ct-body {
  padding: 1.852vh 1.25vw 1.481vh;
}

.ct-field {
  margin-bottom: 1.296vh;
}

.ct-label {
  color: rgba(180, 205, 240, 1);
  font-size: 0.833vw;
  margin-bottom: 0.648vh;
  white-space: nowrap;
}

.ct-req {
  color: rgba(243, 84, 84, 1);
  margin-right: 0.1vw;
}

/* ===== el-* 控件尺寸贴合大屏 vw 体系（颜色/聚焦走变量）===== */
.ct-field-ctrl {
  width: 100%;
}

// el-date-picker 默认固定像素宽，撑满与其它控件等宽
.ct-field :deep(.el-date-editor.el-input) {
  --el-date-editor-width: 100%;
  width: 100%;
}

// 去掉日期框默认的时钟前缀图标，与其它输入框保持一致
.ct-field :deep(.el-date-editor .el-input__prefix) {
  display: none;
}

// el-select / el-input / el-date-picker 触发框：单行高度对齐
.ct-field-ctrl {
  // 全局 common.css 的 `body * { flex-shrink: 0 }` 会让单行 el-input 的
  // 内部 input 不收缩、撑破 wrapper（占位文字溢出到框左侧）。这里恢复收缩。
  :deep(.el-input),
  :deep(.el-input__wrapper) {
    width: 100%;
  }

  :deep(.el-input__inner) {
    flex: 1 1 auto;
    flex-shrink: 1;
    min-width: 0;
    width: 100%;
  }

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
    min-height: 8.333vh !important;
    padding: 0.741vh 0.729vw;
    font-size: 0.833vw;
    line-height: 1.6;
  }

  // 字数统计
  :deep(.el-input__count),
  :deep(.el-input .el-input__count-inner) {
    background-color: transparent;
    color: rgba(140, 165, 205, 0.8);
    font-size: 0.677vw;
  }
}

// 日期框隐藏默认前缀图标后，单独补足左右留白
.ct-field :deep(.el-date-editor .el-input__wrapper) {
  padding-left: 0.938vw;
  padding-right: 0.625vw;
}

.ct-field :deep(.el-date-editor .el-input__suffix) {
  width: 1.25vw;
  justify-content: center;
}

.ct-field :deep(.el-date-editor .el-input__icon) {
  margin-left: 0;
}

/* 必填项未填写时的红色错误描边 */
.ct-ctrl--error {
  :deep(.el-input__wrapper),
  :deep(.el-select__wrapper),
  :deep(.el-textarea__inner) {
    box-shadow: 0 0 0 0.052vw rgba(243, 84, 84, 1) inset !important;
  }
}

/* 优先级单选 */
.ct-radio-group {
  display: flex;
  align-items: center;
  gap: 1.25vw;
  min-height: 4.259vh;

  :deep(.el-radio) {
    margin-right: 0;
    height: auto;
  }

  :deep(.el-radio__label) {
    color: rgba(220, 235, 255, 1);
    font-size: 0.833vw;
  }
}

/* 底部按钮 */
.ct-actions {
  gap: 0.833vw;
  margin-top: 1.852vh;
}

.ct-btn.el-button {
  flex: 1;
  height: 5.185vh;
  margin: 0;
  font-size: 0.938vw;
  letter-spacing: 0.104vw;
  border-radius: 0.26vw;
  transition: all 0.2s;

  &.ct-btn--primary {
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

  &.ct-btn--ghost {
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
.ct-footnote {
  margin-top: 1.481vh;
  text-align: center;
  color: rgba(150, 180, 220, 0.9);
  font-size: 0.729vw;
  white-space: nowrap;
}
</style>

<!-- 非 scoped：el-select 下拉、el-date-picker 面板 teleport 到 body，需全局覆盖为深色主题 -->
<style lang="scss">
.ct-popper.el-popper {
  --el-bg-color-overlay: rgba(46, 61, 97, 1);
  --el-fill-color-blank: rgba(30, 43, 74, 1);
  --el-fill-color-light: rgba(64, 158, 255, 0.18);
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

  .el-popper__arrow::before {
    background-color: rgba(46, 61, 97, 1) !important;
    border-color: rgba(64, 158, 255, 0.55) !important;
  }

  .el-select-dropdown__item.is-selected {
    color: rgba(64, 158, 255, 1);
  }
}

.ct-date-popper.el-picker__popper {
  .el-date-picker {
    box-sizing: border-box;
  }

  // 面板顶部「日期 / 时间」两个编辑框：全局 flex-shrink:0 会撑破，需恢复收缩
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
    flex-shrink: 1;
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

  .el-picker-panel__footer {
    background-color: rgba(40, 54, 88, 1);
    border-top-color: rgba(64, 158, 255, 0.2);
  }
}
</style>
