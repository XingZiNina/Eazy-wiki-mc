import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import { watch } from 'vue'

import Layout from './Layout.vue'
import DataPanel from './components/DataPanel.vue'
import RainbowAnimationSwitcher from './components/RainbowAnimationSwitcher.vue'
import Confetti from './components/Confetti.vue'

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
    app.component('DataPanel', DataPanel)
    app.component('RainbowAnimationSwitcher', RainbowAnimationSwitcher)
    app.component('Confetti', Confetti)

    if (!inBrowser) return

    router.onAfterRouteChanged = () => {
      busuanzi.fetch()
    }

    watch(
      () => router.route.data.relativePath,
      () => updateHomePageStyle(location.pathname === '/'),
      { immediate: true },
    )
  },
}

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