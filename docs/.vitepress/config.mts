import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: "Alazeprt的开服教程",
    description: "由Alazeprt撰写的Minecraft Java版开服教程",
    lang: 'zh-CN',
    lastUpdated: true,
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: '首页', link: '/' },
        { text: '开服教程', link: '/markdown-examples' },
        { text: '插件开发教程', link: '/plugin-development' }
      ],

      sidebar: [
        { text: '开始', link: '/welcome' },
        {
          text: '基本概念',
          items: [
            { text: 'Java', link: '/basic-knowledge/java' },
            { text: '环境变量', link: '/basic-knowledge/environment-variables' },
            { text: '服务器', link: '/basic-knowledge/server' },
            { text: 'IP', link: '/basic-knowledge/ip' },
            { text: '核心 & 服务端', link: '/basic-knowledge/core'},
            { text: '其它', link: '/basic-knowledge/others' }
          ]
        },
        {
          text: '配置格式',
          items: [
            { text: '数据类型', link: '/config-format/data-type' },
            { text: 'YAML', link: '/config-format/yaml' },
            { text: 'JSON', link: '/config-format/json' }
          ]
        },
        {
          text: '配置文件',
          items: [
            { text: 'server.properties', link: '/config-file/server.properties'},
            { text: 'Bukkit & Spigot 相关', link: '/config-file/bukkit-and-spigot' },
            { text: '类 Paper 服务端相关', link: '/config-file/paper-and-subcore' },
            { text: 'BungeeCord & Waterfall 服务端相关', link: '/config-file/bungeecord' },
            { text: 'Velocity 服务端相关', link: '/config-file/velocity' }
          ]
        },
        {
          text: '启动服务器',
          items: [
            { text: '启动服务器', link: '/launch-server/launching-server'},
            { text: '配置服务器', link: '/launch-server/configuring-server'},
            { text: '连接到服务器', link: '/launch-server/connecting-to-server' }
          ]
        },
        {
          text: '插件准备',
          items: [
            { text: '寻找并安装插件', link: '/prepare-plugin/looking-for-plugin' },
            { text: '常用插件介绍', link: '/prepare-plugin/common-plugin' },
            { text: '配置插件', link: '/prepare-plugin/configuring-plugin' },
            { text: '权限管理',
              items: [
                { text: '基本概念', link: '/prepare-plugin/permission-management/basic-knowledge'},
                { text: '常用命令', link: '/prepare-plugin/permission-management/common-command' }
              ]
            },
            {
              text: '基岩支持',
              items: [
                { text: '安装插件', link: '/prepare-plugin/bedrock-support/installing-plugin' },
                { text: '配置插件', link: '/prepare-plugin/bedrock-support/configuring-plugin' }
              ]
            }
          ]
        },
        {
          text: '服务器维护',
          items: [
            { text: 'JVM 优化', link: '/server-maintenance/jvm-optimization' },
            { text: '报错分析', link: '/server-maintenance/error-analysis' },
            { text: '性能分析', link: '/server-maintenance/performance-analysis' },
            { text: '面板搭建', link: '/server-maintenance/panel-building' },
            { text: '反作弊', link: '/server-maintenance/anticheat' },
            { text: '安全防御', link: '/server-maintenance/security-defense' }
          ]
        },
        {
          text: '进阶内容', // 内网穿透
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
            { text: 'Minecraft 网络通信', link: '/advanced/minecraft-network'},
            { text: 'Java 内存机制', link: '/advanced/java-gc' },
            { text: '自建内网穿透', link: '/advanced/frp' }
          ]
        },
        {
          text: '插件开发',
          items: [
            { text: '基本知识', link: '/plugin-development/basic-knowledge' },
            { text: '构建系统', link: '/plugin-development/building-system' },
          ]
        }
      ],

      socialLinks: [
        { icon: 'github', link: 'https://github.com/alazeprt/mcserver-wiki' }
      ]
    },
    //markdown配置
    markdown: {
      // 组件插入h1标题下
      config: (md) => {
        md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
          let htmlResult = slf.renderToken(tokens, idx, options);
          if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
          return htmlResult;
        }
      }
    }
  })
)
