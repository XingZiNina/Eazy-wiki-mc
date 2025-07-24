# 项目文档站点 ✨

> ⭐ **喜欢这个项目吗？** 点击右上角的 Star 按钮支持我们！
[![Star History Chart](https://api.star-history.com/svg?repos=XingZiNina/Eazy-wiki-mc&type=Date)](https://www.star-history.com/#XingZiNina/Eazy-wiki-mc&Date)

## 🚀 快速开始

### 先决条件
在开始之前，请确保已安装并且配好环境变量：
- [Node.js](https://nodejs.org/) 

### 安装步骤

1. **克隆项目仓库**
   ```bash
   git clone https://github.com/XingZiNina/Eazy-wiki-mc.git
   cd your-repo
   ```

2. **安装项目依赖**
   ```bash
   npm install -g pnpm
   pnpm add -D vitepress -w
   pnpm add vue -w
   pnpm add -D canvas-confetti -w
   pnpm add -D vite -w
   pnpm add -D busuanzi.pure.js -w
   pnpm add -D unocss -w
   pnpm add -D @iconify-json/mdi -w
   pnpm add -D @unocss/preset-icons -w
   pnpm install
   ```

## 🛠️ 本地开发与构建

### 构建生产版本
```bash
pnpm run docs:build
```

### 预览生产构建
```bash
pnpm run docs:preview
```
访问 `http://localhost:4173` 预览生产环境效果

# 恭喜你成功开启了分站
[官方文档参考](https://vitepress.dev/zh/guide/deploy)
[相关文档参考](https://doc.theojs.cn/notes/vitepress/aapanel-deployment)
