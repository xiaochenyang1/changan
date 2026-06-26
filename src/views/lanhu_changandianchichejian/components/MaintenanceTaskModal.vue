<template>
  <Teleport to="body">
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
            <div class="mt-select-wrap">
              <select v-model="form.type" class="mt-control">
                <option v-for="t in TYPE_OPTIONS" :key="t" :value="t">{{ t }}</option>
              </select>
            </div>
          </div>

          <!-- 任务描述 -->
          <div class="mt-field flex-col">
            <label class="mt-label">✎ 任务描述</label>
            <textarea
              v-model="form.description"
              class="mt-control mt-textarea"
              :class="{ 'mt-control--error': descError }"
              placeholder="请详细描述任务内容..."
              @input="descError = false"
            ></textarea>
          </div>

          <!-- 指派给 -->
          <div class="mt-field flex-col">
            <label class="mt-label">👤 指派给</label>
            <div class="mt-select-wrap">
              <select v-model="form.assignee" class="mt-control">
                <option value="" disabled>请选择指派人员</option>
                <option v-for="a in ASSIGNEE_OPTIONS" :key="a" :value="a">{{ a }}</option>
              </select>
            </div>
          </div>

          <!-- 优先级 -->
          <div class="mt-field flex-col">
            <label class="mt-label">⚑ 优先级</label>
            <div class="mt-select-wrap">
              <select v-model="form.priority" class="mt-control">
                <option v-for="p in PRIORITY_OPTIONS" :key="p" :value="p">{{ p }}</option>
              </select>
            </div>
          </div>

          <!-- 期望完成时间 -->
          <div class="mt-field flex-col">
            <label class="mt-label">📅 期望完成时间</label>
            <input v-model="form.expectedTime" type="datetime-local" class="mt-control" />
          </div>

          <!-- 底部按钮 -->
          <div class="mt-actions flex-row">
            <button class="mt-btn mt-btn--primary" @click="submit">● 确认创建</button>
            <button class="mt-btn mt-btn--ghost" @click="close">✕ 取消</button>
          </div>

          <!-- 脚注 -->
          <div class="mt-footnote">ⓘ 任务将自动分配给相应部门并跟踪处理进度</div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

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

/* 通用控件 */
.mt-control {
  width: 100%;
  height: 4.259vh;
  padding: 0 0.729vw;
  color: rgba(235, 244, 255, 1);
  font-size: 0.833vw;
  background-color: rgba(30, 43, 74, 1);
  border: 0.052vw solid rgba(74, 110, 170, 0.6);
  border-radius: 0.26vw;
  outline: none;
  box-sizing: border-box;
  transition: all 0.2s;

  &::placeholder {
    color: rgba(140, 165, 205, 0.8);
  }

  &:focus {
    border-color: rgba(64, 158, 255, 1);
    box-shadow: 0 0 0.5vw rgba(64, 158, 255, 0.6);
  }

  &--error {
    border-color: rgba(243, 84, 84, 1) !important;
    box-shadow: 0 0 0.5vw rgba(243, 84, 84, 0.6) !important;
  }
}

.mt-textarea {
  height: 9.259vh;
  padding: 0.741vh 0.729vw;
  resize: none;
  line-height: 1.6;
  font-family: inherit;
}

/* 下拉箭头：包裹层伪元素，兼容原生 select 去样式 */
.mt-select-wrap {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 0.833vw;
    top: 50%;
    width: 0.469vw;
    height: 0.469vw;
    border-right: 0.104vw solid rgba(150, 180, 220, 1);
    border-bottom: 0.104vw solid rgba(150, 180, 220, 1);
    transform: translateY(-70%) rotate(45deg);
    pointer-events: none;
  }

  .mt-control {
    appearance: none;
    -webkit-appearance: none;
    padding-right: 1.875vw;
    cursor: pointer;
  }

  option {
    background-color: rgba(30, 43, 74, 1);
    color: rgba(235, 244, 255, 1);
  }
}

/* 让原生日期控件图标在深色下可见 */
input[type='datetime-local'].mt-control {
  cursor: pointer;
  &::-webkit-calendar-picker-indicator {
    filter: invert(0.8);
    cursor: pointer;
  }
}

/* 底部按钮 */
.mt-actions {
  gap: 0.833vw;
  margin-top: 1.852vh;
}

.mt-btn {
  flex: 1;
  height: 5.185vh;
  font-size: 0.938vw;
  letter-spacing: 0.104vw;
  border-radius: 0.26vw;
  cursor: pointer;
  transition: all 0.2s;

  &--primary {
    color: #fff;
    border: 0.052vw solid rgba(64, 158, 255, 0.9);
    background: linear-gradient(180deg, rgba(48, 110, 200, 1) 0%, rgba(32, 74, 150, 1) 100%);

    &:hover {
      box-shadow: 0 0 0.8vw rgba(64, 158, 255, 0.7);
    }
  }

  &--ghost {
    color: rgba(200, 220, 245, 1);
    border: 0.052vw solid rgba(90, 125, 180, 0.7);
    background-color: rgba(34, 48, 80, 0.6);

    &:hover {
      border-color: rgba(140, 175, 225, 1);
      color: #fff;
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
