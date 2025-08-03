# 寻找插件

在把服务端配置完后, 就要开始扩展服务器的玩法了, 这个时候就需要使用到插件服务端中最伟大的创新——插件了

## 常见的插件下载网站

以下是一些常见的插件下载网站:

| 网站名称                                                                           | 资源数量 | 是否付费 | 介绍                                                     |
|--------------------------------------------------------------------------------|------|------|--------------------------------------------------------|
| [Bukkit](https://dev.bukkit.org/)                                              | 25k+ | 否    | Minecraft 服务器插件论坛的开山鼻祖, 许多远古的插件都可以在这里下载到               |
| [SpigotMC](https://www.spigotmc.org/resources/)                                | 80k+ | 部分   | Minecraft 最大的插件论坛, 最流行的插件论坛之一                          |
| [Hangar](https://hangar.papermc.io/)                                           | 2k+  | 否    | 由 PaperMC 团队维护的插件下载网站, 主要提供 Velocity 服务端的插件和一些流行插件     |
| [Modrinth](https://modrinth.com/plugins/)                                      | 5k+  | 否    | 一个新兴的 Minecraft 资源下载网站, 许多资源 (如模组, 资源包, 数据包) 都可以在这里下载到 |
| [CurseForge](https://www.curseforge.com/minecraft/search?class=bukkit-plugins) | 10k+ | 否    | 一个老牌 Minecraft 资源下载网站, 许多资源 (如模组, 资源包, 数据包) 都可以在这里下载到  |
| [BuiltByBit](https://builtbybit.com/resources/categories/minecraft-plugins.1)  | 4k+  | 是    | 一个 Minecraft 付费插件下载网站                                  |
| [Polymart](https://polymart.org/)                                              | 7k+  | 大部分  | 一个 Minecraft 付费插件下载网站                                  |
| [GitHub](https://github.com/)                                                  | ∞    | 否    | 世界上最大的开源社区, 里面也有许多 Minecraft 插件                        |
| [MineBBS](https://www.minebbs.com/resources/categories/70/)                    | 2k+  | 否    | 一个国内的 Minecraft 论坛, 有许多 Minecraft 的国创资源                |


## 如何搜索插件

在搜索插件的时候, 推荐使用必应搜索, 先打开[必应搜索主页](https://cn.bing.com/), 接着将你想要搜索的关键词 (如 更多经济插件 的关键词为 经济, 多个) 翻译为英文 (如 多个, 经济 翻译为 multi economy), 接着在搜索框输入:

```text
你的关键词 minecraft plugin
```

在此处为: `multi economy minecraft plugin`, 你就可以看到许多结果, 接着找到上述常用网站的点进去, 查看插件是否符合你的要求 (看不懂可以翻译), 若符合可以在页面上搜索 `Download` (即下载) 这一关键词的按钮, 点击这个按钮即可下载

## 安装插件

在下载好插件后, 你会发现一般插件是以 `.jar` 为后缀, 你需要将他们放入服务器根目录下的 `plugins` 文件夹中, 然后重启服务器, 即可启动插件

:::warning 警告
如果你是群组服, 需要检查插件 Wiki / 文档 查看要安装在哪里 (如有些在代理服务端 (proxy/proxies server) 和子服都要安装, 有些只需安装在代理服务端)

如果你找不到插件的 Wiki / 文档, 参见 [配置插件](./configuring-plugin.md) 部分
:::

## 检查插件是否安装成功

在服务器后台/管理员账号输入 `/plugins`, 看看你的插件是否出现在这里, 如果是绿色的说明加载成功, 如果是红色的说明加载失败, 如果没有出现通常是你未放入 `plugins` 文件夹或后缀不对, 也有可能是插件缺少必要的依赖或在早期就加载失败了