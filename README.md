# 长安孪生大屏

基于 Vue 3 + TypeScript + Vite 的数据可视化大屏项目。

## 技术栈

- Vue 3
- TypeScript
- Vite
- Element Plus
- Vue Router
- Axios

## 项目结构

```
CA-Admin
├── build/              # Vite 构建配置
├── src/
│   ├── api/           # API 接口
│   ├── assets/        # 静态资源
│   ├── components/   # 组件
│   ├── config/        # 配置
│   ├── router/        # 路由
│   └── views/         # 页面
├── test/              # 部署配置
└── mock/              # Mock 数据
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 页面列表

- 千停数据
- 总装下线外观
- 产量计划完成率(数量)
- 产量计划完成率(时间)
- 制造周期
- 车间电池
- 龙兴工厂早会看板
