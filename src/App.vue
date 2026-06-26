<template>
  <el-config-provider :locale="zhCn">
    <div class="app-container">
      <router-view />
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
// 全局注入 element-plus 中文语言包（el-date-picker 等组件面板默认英文）
import zhCn from 'element-plus/es/locale/lang/zh-cn'
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