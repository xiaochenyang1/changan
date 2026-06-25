#!/bin/bash

set -e

echo "开始构建..."

# 安装依赖
npm install

# 构建
npm run build

echo "构建完成！"