# 项目文档站点 ✨

> ⭐ **喜欢这个项目吗？** 点击右上角的 Star 按钮支持我们！
## Star History

## 🚀 快速开始
[![Star History Chart](https://api.star-history.com/svg?repos=XingZiNina/Eazy-wiki-mc&type=Date)](https://www.star-history.com/#XingZiNina/Eazy-wiki-mc&Date)
### 先决条件
在开始之前，请确保已安装并且配好环境变量：
- [Node.js](https://nodejs.org/) 

### 安装步骤

1. **克隆项目仓库**
   ```bash
   git clone https://github.com/XingZiNina/Eazy-wiki-mc.git
   cd /Eazy-wiki-mc
   ```
   > cd /Eazy-wiki-mc 这一步 我相信只要是人都知道怎么做 就没有细写

2. **安装项目依赖**
   ```bash
   npm install -g pnpm
   pnpm add -D vitepress canvas-confetti vite busuanzi.pure.js unocss @iconify-json/mdi @unocss/preset-icons -w && pnpm add vue -w
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

[宝塔部署相关文档参考](https://doc.theojs.cn/notes/vitepress/aapanel-deployment)
