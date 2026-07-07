<template>
  <div class="dashboard-header">
    <img class="dashboard-header__title" :src="titleImg" referrerpolicy="no-referrer" />
    <img class="dashboard-header__glow" src="./assets/glow.png" referrerpolicy="no-referrer" />
    <div class="dashboard-header__date-block">
      <span class="dashboard-header__date-text">{{ now }}</span>
      <div class="dashboard-header__underline-wrapper">
        <img
          class="dashboard-header__underline-line"
          src="./assets/underline-line.png"
          referrerpolicy="no-referrer"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps<{
  titleImg: string
}>()

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function formatNow() {
  const d = new Date()
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

const now = ref(formatNow())
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    now.value = formatNow()
  }, 1000)
})

onBeforeUnmount(() => {
  if (timer !== undefined) clearInterval(timer)
})
</script>

<style scoped>
.dashboard-header {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 9.444vh;
  background: url(./assets/bg-bar.png) 0px 0px no-repeat;
  background-size: 100vw 9.444vh;
}

.dashboard-header__title {
  position: absolute;
  left: 50%;
  top: 1.481vh;
  height: 4.352vh;
  width: auto;
  transform: translateX(-50%);
}

.dashboard-header__glow {
  position: absolute;
  left: 37.396vw;
  top: 4.537vh;
  width: 24.688vw;
  height: 4.815vh;
  pointer-events: none;
}

.dashboard-header__date-block {
  position: absolute;
  top: 2.593vh;
  right: 2.292vw;
  width: 29.948vw;
  height: 3.796vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.dashboard-header__date-text {
  width: 100%;
  overflow-wrap: break-word;
  color: rgba(127, 223, 255, 1);
  font-size: 0.729vw;
  font-family: SourceHanSansSC-Regular;
  text-align: right;
  white-space: nowrap;
  line-height: 1.944vh;
}

.dashboard-header__underline-wrapper {
  height: 1.667vh;
  background: url(./assets/underline-glow.png) 0px -2px no-repeat;
  background-size: 28.75vw 2.037vh;
  margin-top: 0.833vh;
  width: 28.75vw;
}

.dashboard-header__underline-line {
  width: 28.698vw;
  height: 1.667vh;
  margin-left: 0.052vw;
}
</style>
