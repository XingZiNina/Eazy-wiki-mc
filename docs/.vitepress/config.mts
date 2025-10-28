import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "🌿 一站通式服主文档",
  description: "Easywiki - 清新明了的Minecraft服务器指南",
  
  head: [
    ['link', { rel: 'icon', href: '/moon.ico' }],
    ['meta', { name: 'theme-color', content: '#42b983' }]
  ],

  themeConfig: {
    nav: [
      { text: '🏠 首页', link: '/' }
    ],

    sidebar: [
      {
        text: '🍀 服务器核心',
        items: [
          { text: '🍋 Paper系列', link: '/core/bukkit' },
          { text: '🍇 Folia系列', link: '/core/folia' },
          { text: '🍍 模组与插件混合', link: '/core/mod-plugin' },
          { text: '🍉 代理服务端', link: '/core/dl' },
          { text: '🍅 BDS与Nukkit', link: '/core/be' }
        ]
      },
      {
        text: '📚 基础知识',
        items: [
          { text: '🌳 环境变量', link: '/basic-knowledge/environment-variables' },
          { text: '💰 服务器选择', link: '/basic-knowledge/server' },
          { text: '🔅 Linux系统', link: '/advanced/linux' },
          { text: '🌐 IP网络', link: '/basic-knowledge/ip' },
          { text: '🌏 世界管理', link: '/basic-knowledge/world' },
          { text: '🪄 其他概念', link: '/basic-knowledge/others' }
        ]
      },
      {
        text: '🔧 插件安装',
        items: [
          { text: '📦 常用插件推荐', link: '/prepare-plugin/common-plugin' },
          { text: '⚡ QQ机器人快速搭建', link: '/advanced/qq-bot'},
          { text: '📥 基岩插件推荐', link: '/prepare-plugin/bedrock-support/installing-plugin' },
          { text: '⚙️ 基岩配置插件', link: '/prepare-plugin/bedrock-support/configuring-plugin' }
        ]
      },
      {
        text: '🔐 权限管理',
        items: [
          { text: '📖 基本概念', link: '/prepare-plugin/permission-management/basic-knowledge'},
          { text: '💻 常用命令', link: '/prepare-plugin/permission-management/common-command' }
        ]
      },
      {
        text: '☕ Java优化',
        items: [
          { text: '🌱 Java发行版对比', link: '/basic-knowledge/java' },
          { text: '🚀 JVM参数优化', link: '/server-maintenance/jvm-optimization' },
          { text: '📚 Java文档', link: '/server-maintenance/javadoc' }
        ]
      },
      {
        text: '⚙️ 配置文件',
        items: [
          { text: '🔧 插件配置', link: '/prepare-plugin/configuring-plugin' },
          { text: '📜 server.properties', link: '/config-file/server.properties'},
          { text: '🧱 Bukkit & Spigot', link: '/config-file/bukkit-and-spigot' },
          { text: '📄 Paper系列', link: '/config-file/paper-and-subcore' },
          { text: '🌉 BungeeCord', link: '/config-file/bungeecord' },
          { text: '⚡ Velocity', link: '/config-file/velocity' }
        ]
      },
      {
        text: '🚀 启动服务器',
        items: [
          { text: '🎯 启动指南', link: '/launch-server/launching-server'},
          { text: '⚙️ 服务器配置', link: '/launch-server/configuring-server'},
          { text: '🔗 连接服务器', link: '/launch-server/connecting-to-server' }
        ]
      },
      {
        text: '🔧 服务器维护',
        items: [
          { text: '🐛 报错分析', link: '/server-maintenance/error-analysis' },
          { text: '📊 性能分析', link: '/server-maintenance/performance-analysis' },
          { text: '🖥️ 面板搭建', link: '/server-maintenance/panel-building' },
          { text: '🛡️ 反作弊', link: '/server-maintenance/anticheat' },
          { text: '🔒 安全防御', link: '/server-maintenance/security-defense' }
        ]
      }
    ]
  }, 
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true
  },
  themeConfig: {
    outline: [2, 3],
    outlineTitle: '目录',
    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    // 移动端 - 外观
    darkModeSwitchLabel: '外观',
    // 移动端 - 返回顶部
    returnToTopLabel: '回到顶部',
    // 移动端 - 菜单
    sidebarMenuLabel: '菜单'
  }
})
