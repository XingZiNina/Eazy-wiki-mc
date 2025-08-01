# 传统Bukkit系列核心

服务端 (也称核心) 指的是运行服务器的软件

由于原版服务端扩展性及性能的不足, 社区便衍生出了多种服务端, 大致可分为以下几种:
- 原版服务端 (俗称香草服务端, Vanilla Server)
- 插件服务端
- 模组服务端
- Sponge服务端

本片**本教程重点介绍插件服务端**中的Bukkit系列核心

## Bukkit

Bukkit 是 Minecraft 插件服务端的开山鼻祖, 首次引入了插件概念

下载链接 (需要使用 BuildTools.jar 自动编译): https://hub.spigotmc.org/jenkins/job/BuildTools/

优点与缺点:
- 优点: 作为Java板块核心早期开山鼻祖 插件兼容性极高 多亏BukkitApi
- 缺点: 性能羸弱 不推荐使用
> 开山鼻祖 老人物了

## Spigot

Spigot 基于 Bukkit 开发, 对 Bukkit 进行了进一步的改进, 同时也引入了群组服这一概念 (BungeeCord)

下载链接 (需要使用 BuildTools.jar 自动编译): https://hub.spigotmc.org/jenkins/job/BuildTools/

优点与缺点:
- 优点: 对原版特性修改较少 同时可以加插件
- 缺点: 性能优化差 但使用群组服可以改善此问题
- 版本适配速度: 较快
> 同上 也是老人物一枚

## Paper

Paper 原名为 PaperSpigot, 原基于 Spigot 开发, 加入了许多性能优化的配置项, 并引入了新的插件 API

同时, 它的团队也研发出了注重性能的新款群组服 (Velocity)

下载链接: https://papermc.io/downloads/all

优点与缺点:
- 优点: 性能优化好 轻量稳定 高效的Api
- 缺点: 对生电不友好 删除了许多原版特性
- 版本适配速度: 快
> 企业级标准 稳定易用 社区插件多

## Purpur

Purpur 基于 Pufferfish (基于 Paper 开发的一个服务端) 开发, 再次加入了许多性能优化的选项

下载链接: https://purpurmc.org/download/purpur (旧版本需要通过调用 [API](https://api.purpurmc.org/) 下载)

优点与缺点:
- 优点: 在Paper的基础上打更多可自定义的配置项 性能补丁 且对生电有所改善
- 缺点: 虽然Purpur团队已经有所改善 但生电特性仍不全 
- 版本适配速度: 快
> ~~分支复分支 分支何其多~~ 稳定耐用

## Leaves

Leaves 基于 Paper 开发, 以生电为其功能亮点, 加入了许多对生电友好的配置项

下载链接: https://leavesmc.org/downloads/all

优点与缺点:
- 优点: 恢复Paper破坏的诸多特性 添加许多Mod协议支持
- 缺点: 生电和性能不可得兼 且只能进行轻度生电 具体效果仍不如Fabric＋地毯及其附属
- 版本适配速度: 较慢
> 轻生电Leaves
> 重生电Fabric(模组端)

## Leaf

Leaf 基于 Gale (基于 Paper 开发的一个小众服务端) 开发, 以性能优化为主, 针对异步性能优化加入了许多配置项

下载链接: https://www.leafmc.one/download

优点与缺点:
- 优点: 性能优化强悍 对一些功能进行异步处理
- 缺点: 生电特性不太友好
- 版本适配速度: 快
> 异步运算 需在配置文件开启
> 在开启部分异步的情况下**可能**导致**稳定性**下降

## Akarin

Akarin 是一款支持多线程的 Minecraft 服务端，来自 “新维度”，前身是 TorchSpigot 服务端。

下载链接: https://www.yuque.com/wangshanzha/rainbow/mkt26vl39i2veyrb 

优点与缺点:
- 优点: 性能优化强悍 特性恢复较好 适合老版本服务器
- 缺点: 目前已停更 配置文件上手复杂
> ~~还有人记得他吗?~~

## 服务端推荐

- 1.8: PandaSpigot (PvP), SportPaper (生存服)
- 1.12: Beast
- Paper系生电: Leaves > Paper > Purpur > Leaf
- Folia系生电：Lophine > Mint > Folia
- 服务器CPU核心多(12+): Canvas > Mint > LightingLuminol > Luminol > Lophine > Folia > Leaf > Purpur > leaves > Paper
- 优点: Leaf > Purpur > Paper 
- 性能+缺点: Purpur > Leaf > Paper
- Forge混合端: CatServer > ArcLight > Mohist
- Fabric混合端: Cardboard > Banner
- 群组服: Velocity > Waterfall > BungeeCord
