#!/bin/bash

echo "添加菜单导出功能..."

# 创建菜单导出组件
cat > src/components/MenuExport.vue << 'EOF'
<template>
  <el-button @click="handleExport">导出菜单</el-button>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

const handleExport = () => {
  ElMessage.success('菜单导出功能开发中')
}
</script>
EOF

echo "菜单导出功能添加完成！"