<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface TourStep {
  target: string | HTMLElement
  content: string
  title?: string
}

interface Props {
  steps: TourStep[]
  visible: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:visible', val: boolean): void
  (e: 'finish'): void
}>()

const currentStep = ref(0)
const tooltipStyle = ref<Record<string, string>>({})

const nextStep = () => {
  if (currentStep.value < props.steps.length - 1) {
    currentStep.value++
    updatePosition()
  } else {
    emit('finish')
    emit('update:visible', false)
  }
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
    updatePosition()
  }
}

const updatePosition = () => {
  const step = props.steps[currentStep.value]
  if (!step) return

  const target = typeof step.target === 'string'
    ? document.querySelector(step.target)
    : step.target

  if (target) {
    const rect = target.getBoundingClientRect()
    tooltipStyle.value = {
      top: `${rect.bottom + 10}px`,
      left: `${rect.left}px`,
    }
  }
}

onMounted(() => {
  if (props.visible) {
    updatePosition()
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="visible" class="tour-overlay">
        <div class="tour-mask"></div>
        <div class="tour-tooltip" :style="tooltipStyle">
          <div class="tour-header">
            <span class="tour-title">{{ steps[currentStep]?.title }}</span>
            <span class="tour-step">{{ currentStep + 1 }}/{{ steps.length }}</span>
          </div>
          <div class="tour-content">{{ steps[currentStep]?.content }}</div>
          <div class="tour-footer">
            <button v-if="currentStep > 0" class="tour-btn" @click="prevStep">上一步</button>
            <button class="tour-btn primary" @click="nextStep">
              {{ currentStep < steps.length - 1 ? '下一步' : '完成' }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.tour-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
}

.tour-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.tour-tooltip {
  position: absolute;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  min-width: 280px;
  max-width: 360px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.tour-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.tour-title {
  font-weight: bold;
  font-size: 16px;
  color: #303133;
}

.tour-step {
  font-size: 12px;
  color: #909399;
}

.tour-content {
  font-size: 14px;
  color: #606266;
  line-height: 1.6;
  margin-bottom: 16px;
}

.tour-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.tour-btn {
  padding: 8px 16px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.tour-btn:hover {
  border-color: #409eff;
  color: #409eff;
}

.tour-btn.primary {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
}

.tour-btn.primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>