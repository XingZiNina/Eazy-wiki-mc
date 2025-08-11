import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "从入门到入土的教程",
  description: "Easywiki",
  
  head: [
    ['link', { rel: 'icon', href: '/moon.ico' }],
    ['meta', { name: 'theme-color', content: '#42b983' }]
  ],

  themeConfig: {
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📚 文档', link: '/welcome' }
    ],

    sidebar: [
      {
        text: '📚 基本概念',
        items: [
          { text: '🌳 环境变量', link: '/basic-knowledge/environment-variables' },
          { text: '💰 选择服务器', link: '/basic-knowledge/server' },
          { text: '🌐 IP知识', link: '/basic-knowledge/ip' },
          { text: '🌏 关于世界', link: '/basic-knowledge/world' },
          { text: '🪄 其它(推荐观看)', link: '/basic-knowledge/others' }
        ]
      },
      {
        text: '🍀 服务器核心',
        items: [
          { text: '🍋 Paper系为主', link: '/core/bukkit' },
          { text: '🍇 Folia系为主', link: '/core/folia' },
          { text: '🍍 Mod与插件为主', link: '/core/mod-plugin' },
          { text: '🍉 代理服务端为主', link: '/core/dl' },
          { text: '🍅 基岩版本为主', link: '/core/be' }
        ]
      },
      {
        text: '🍰 Java参数与优化',
        items: [
          { text: '☕ Java', link: '/basic-knowledge/java' },
          { text: '🍟 JVM 优化', link: '/server-maintenance/jvm-optimization' },
          { text: '🫓 Java 内存机制', link: '/advanced/java-gc' },
          { text: '👀 JavaDoc', link: '/plugin-development/javadoc' }
        ]
      },
      {
        text: '🧩 插件准备',
        items: [
          { text: '🔍 常用插件与安装', link: '/prepare-plugin/common-plugin' },
          { 
            text: '🔐 权限管理',
            items: [
              { text: '📖 基本概念', link: '/prepare-plugin/permission-management/basic-knowledge'},
              { text: '💻 常用命令', link: '/prepare-plugin/permission-management/common-command' }
            ]
          },
          {
            text: '📱 基岩支持',
            items: [
              { text: '📥 安装插件', link: '/prepare-plugin/bedrock-support/installing-plugin' },
              { text: '⚙️ 配置插件', link: '/prepare-plugin/bedrock-support/configuring-plugin' }
            ]
          }
        ]
      },
      {
        text: '📝 配置格式',
        items: [
          { text: '🔢 数据类型', link: '/config-format/data-type' },
          { text: '📄 YAML', link: '/config-format/yaml' },
          { text: '😇 JSON', link: '/config-format/json' }
        ]
      },
      {
        text: '⚙️ 配置文件',
        items: [
          { text: '⚙️ 配置插件', link: '/prepare-plugin/configuring-plugin' },
          { text: '📜 server.properties', link: '/config-file/server.properties'},
          { text: '🧱 Bukkit & Spigot', link: '/config-file/bukkit-and-spigot' },
          { text: '📜 类 Paper 服务端', link: '/config-file/paper-and-subcore' },
          { text: '🌉 BungeeCord & Waterfall', link: '/config-file/bungeecord' },
          { text: '⚡ Velocity', link: '/config-file/velocity' }
        ]
      },
      {
        text: '🚀 启动服务器',
        items: [
          { text: '🔄 启动服务器', link: '/launch-server/launching-server'},
          { text: '⚙️ 配置服务器', link: '/launch-server/configuring-server'},
          { text: '🔗 连接到服务器', link: '/launch-server/connecting-to-server' }
        ]
      },
      {
        text: '服务器维护',
        items: [
          { text: '🎍报错分析', link: '/server-maintenance/error-analysis' },
          { text: '🫓性能分析', link: '/server-maintenance/performance-analysis' },
          { text: '🏡面板搭建', link: '/server-maintenance/panel-building' },
          { text: '🛡️反作弊', link: '/server-maintenance/anticheat' },
          { text: '🧑‍💼安全防御', link: '/server-maintenance/security-defense' }
        ]
      },
      {
        text: '🚀 进阶内容',
        items: [
          { text: 'Linux',
            items: [
              { text: '基本介绍', link: '/advanced/linux' },
              { text: '常用命令', link: '/advanced/linux-command' }
            ]
          },
          { text: '数据库',
            items: [
              { text: '基本介绍', link: '/advanced/database' },
              { text: '数据类型', link: '/advanced/database-datatype' },
              { text: '常用命令', link: '/advanced/database-command' },
              { text: 'MySQL', link: '/advanced/mysql' },
              { text: 'PostgreSQL', link: '/advanced/postgresql' },
              { text: 'Redis', link: '/advanced/redis' }
            ]
          },
          {
            text: 'Docker',
            items: [
              { text: '基本概念', link: '/advanced/containerization' },
              { text: '安装', link: '/advanced/docker' },
              { text: '常用指令', link: '/advanced/docker-command' },
              { text: '网络', link: '/advanced/docker-network' },
            ]
          },
          { text: 'QQ 机器人', link: '/advanced/qq-bot'},
          { text: 'Minecraft 网络通信', link: '/advanced/minecraft-network'}
        ]
      },
      {
        text: '💻 插件开发',
        items: [
          { text: '基本知识', link: '/plugin-development/basic-knowledge' },
          { text: '构建系统', link: '/plugin-development/building-system' },
          { text: 'Spigot 插件结构', link: '/plugin-development/spigot-structure'},
          { text: 'Paper 插件结构', link: '/plugin-development/paper-structure' }
        ]
      }
    ]
  }, 
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true
  }
})