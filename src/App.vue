<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { messenger } from '@/composables/messenger'

const router = useRouter()

// 后端「切换看板」通知 → 路由跳转；data 为看板名称字符串，映射到对应路由
const DASHBOARD_ROUTES: Record<string, string> = {
  龙兴工厂: '/lanhu_longxinggongchangzaohuikanban',
  电池中心: '/lanhu_changandianchichejian',
}

// 注意：SWITCH_DASHBOARD 不带 Cosmo_ 前缀，具名 subscribe 收不到，
// 必须用 '*' 通配订阅再按 type 过滤（详见 iframeMessage.ts）
let offSwitch: (() => void) | null = null

onMounted(() => {
  messenger.init()
  offSwitch = messenger.subscribe('*', (msg) => {
    if (msg.type !== 'SWITCH_DASHBOARD') return
    const target = DASHBOARD_ROUTES[String(msg.data)]
    if (target && router.currentRoute.value.path !== target) {
      router.push(target)
    }
  })
})

onBeforeUnmount(() => {
  offSwitch?.()
  messenger.destroy()
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.app-container {
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  overflow: auto;
}
</style>
