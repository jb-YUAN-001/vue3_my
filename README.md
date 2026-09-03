# 🐰 个人小站 · 个人作品集与博客

一个基于 **Vue 3 + TypeScript + Vite** 构建的轻量级个人门户站点，包含首页、关于我、作品集、小站（博客）和联系共五个核心页面，所有页面均支持响应式与交互反馈。

![预览](https://via.placeholder.com/800x400?text=Site+Preview)

---

## ✨ 功能特性

- **首页**：欢迎语 + 个人简介，分类标签（插画 / 网页 / 生活）点击切换内容，展示不同创作领域。
- **关于我**：详细介绍设计师背景、擅长领域与个人理念，带头像与简介卡片。
- **作品集**：作品网格展示，支持按分类（全部 / 插画 / 网页 / 生活）动态筛选，每张卡片带标题、描述和分类标签。
- **小站（博客）**：随笔文章列表，点击文章标题可展开/收起完整内容，模拟阅读交互。
- **联系**：联系表单（姓名、邮箱、消息）提交后弹窗提示并重置表单；附社交账号信息（推特、Instagram、邮箱）。
- **导航栏**：顶部导航自动高亮当前路由，支持平滑切换与页面标题更新。
- **SPA 路由**：使用 Vue Router 的 history 模式，支持前端路由（需服务器配置 fallback）。

---

## 🛠 技术栈

| 技术         | 说明                         |
| ------------ | ---------------------------- |
| Vue 3        | 渐进式 JavaScript 框架       |
| TypeScript   | 类型安全的 JavaScript 超集   |
| Vite         | 新一代前端构建工具           |
| Vue Router 4 | 官方路由管理器（history 模式）|
| CSS3         | 原生样式 + Flex/Grid 布局    |

---

## 📁 项目结构

```bash
src/
├── App.vue # 根组件（含导航栏）
├── main.ts # 应用入口，挂载路由
├── router/
│ └── index.ts # 路由配置（五个页面）
├── views/
│ ├── Home.vue # 首页
│ ├── About.vue # 关于我
│ ├── Works.vue # 作品集
│ ├── Blog.vue # 小站（博客）
│ └── Contact.vue # 联系
├── components/
│ └── NavBar.vue # 导航组件
└── styles/
└── global.css # 全局样式
```

## 🚀 快速开始

### 1. 克隆或下载项目

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

## 安装依赖
```bash
npm install
# 或
yarn install
```

## 本地开发
```bash
npm run dev
# 或
yarn dev
```
#### 访问 http://localhost:5173 即可预览

## 🌐 部署指南
### 部署到 Nginx（宝塔面板）
1、上传构建产物：将 dist/ 目录上传到服务器（例如 /www/wwwroot/my-site/）。

2、配置 Nginx（支持 SPA history 模式）：
```bash
server {
    listen 80;
    server_name your-domain.com;
    root /www/wwwroot/my-site;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
3、重载 Nginx
