import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import { watch } from 'vue'

import Layout from './Layout.vue'
import DataPanel from './components/DataPanel.vue'
import RainbowAnimationSwitcher from './components/RainbowAnimationSwitcher.vue' // 移除了 Confetti 导入

import 'uno.css'
import './overrides.css'
import './rainbow.css'
import './vars.css'

import busuanzi from 'busuanzi.pure.js'

let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    // 注册组件 (移除了 Confetti 的注册)
    app.component('DataPanel', DataPanel)
    app.component('RainbowAnimationSwitcher', RainbowAnimationSwitcher)

    if (!inBrowser) return

    // 刷新 busuanzi
    router.onAfterRouteChanged = () => {
      busuanzi.fetch()
    }

    // 首页彩虹动画样式
    watch(
      () => router.route.data.relativePath,
      () => updateHomePageStyle(location.pathname === '/'),
      { immediate: true },
    )
  },
}

// 浏览器检测，用于添加类名
if (typeof window !== 'undefined') {
  const browser = navigator.userAgent.toLowerCase()
  if (browser.includes('chrome')) {
    document.documentElement.classList.add('browser-chrome')
  } else if (browser.includes('firefox')) {
    document.documentElement.classList.add('browser-firefox')
  } else if (browser.includes('safari')) {
    document.documentElement.classList.add('browser-safari')
  }
}

// 首页动画样式动态添加和移除
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return
    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return
    homePageStyle.remove()
    homePageStyle = undefined
  }
}