# 传统Bukkit系列核心

服务端 (也称核心) 指的是运行服务器的软件

由于原版服务端扩展性及性能的不足, 社区便衍生出了多种服务端, 大致可分为以下几种:
- 原版服务端 (俗称香草服务端, Vanilla Server)
- 插件服务端
- 模组服务端
- Sponge服务端

本片**本教程重点介绍插件服务端**中的Bukkit系列核心与Sponge服务端

## Bukkit

Bukkit 是 Minecraft 插件服务端的开山鼻祖, 首次引入了插件概念

下载链接 (需要使用 BuildTools.jar 自动编译): https://hub.spigotmc.org/jenkins/job/BuildTools/

评分:
- 性能: 2/10
- 稳定性: 5/10
- 生电支持: 6/10
> 开山鼻祖 老人物了

## Spigot

Spigot 基于 Bukkit 开发, 对 Bukkit 进行了进一步的改进, 同时也引入了群组服这一概念 (BungeeCord)

下载链接 (需要使用 BuildTools.jar 自动编译): https://hub.spigotmc.org/jenkins/job/BuildTools/

评分:
- 性能: 3/10
- 稳定性: 7.5/10
- 生电支持: 8/10
- 版本适配速度: 较快
> 同上 也是老人物一枚

## Paper

Paper 原名为 PaperSpigot, 原基于 Spigot 开发, 加入了许多性能优化的配置项, 并引入了新的插件 API

同时, 它的团队也研发出了注重性能的新款群组服 (Velocity)

下载链接: https://papermc.io/downloads/all

评分:
- 性能: 7/10
- 稳定性: 9/10
- 生电支持: 5.5/10
- 版本适配速度: 快
> 企业级标准 稳定易用 社区插件多

## Purpur

Purpur 基于 Pufferfish (基于 Paper 开发的一个小众服务端) 开发, 再次加入了许多性能优化的选项

下载链接: https://purpurmc.org/download/purpur (旧版本需要通过调用 [API](https://api.purpurmc.org/) 下载)

评分:
- 性能: 8/10
- 稳定性: 6.5/10
- 生电支持: 5/10
- 版本适配速度: 快
> ~~分支复分支 分支何其多~~ 稳定耐用

## Leaves

Leaves 基于 Paper 开发, 以生电为其功能亮点, 加入了许多对生电友好的配置项

下载链接: https://leavesmc.org/downloads/all

评分:
- 性能: 6/10
- 稳定性: 6/10
- 生电支持: 9/10
- 版本适配速度: 较慢
> 轻生电Leaves
> 重生电Fabric(模组端)

## Leaf

Leaf 基于 Gale (基于 Paper 开发的一个小众服务端) 开发, 以性能优化为主, 针对异步性能优化加入了许多配置项

下载链接: https://www.leafmc.one/download

评分:
- 性能: 9/10
- 稳定性: 6/10
- 生电支持: 4.5/10
- 版本适配速度: 快
> 异步运算 需在配置文件开启

## Canvas

Canvas 基于 Paper 开发, 针对异步多世界路线进行开发（只支持Java22＋）

下载链接: https://jenkins.canvasmc.io/job/Canvas/

评分:
- 性能: 11/10
- 稳定性: 4/10
- 生电支持: 5/10
- 版本适配速度: 快
> 极致的优化 Bug较多 未来可期

## Akarin

Akarin 是一款支持多线程的 Minecraft 服务端，来自 “新维度”，前身是 TorchSpigot 服务端。

下载链接: https://www.yuque.com/wangshanzha/rainbow/mkt26vl39i2veyrb 

评分:
- 性能: 8.5/10
- 稳定性: 6/10
- 生电支持: 5/10
- 版本适配速度: 已停更
> ~~还有人记得他吗?~~

## SpongeVanilla

SpongeVanilla 是另一个插件生态 (Sponge 插件, 与 Bukkit & Spigot & Paper 插件互不兼容) 的服务端, 性能一般

下载链接: https://spongepowered.org/downloads/spongevanilla

评分:
- 性能: 5/10
- 稳定性: 8/10
- 生电支持: 6.5/10
- 版本适配速度: 快


## 服务端推荐

- 1.8: PandaSpigot (PvP), SportPaper (生存服)
- 1.12: Beast
- Paper系生电: Leaves > Paper > Purpur > Leaf
- Folia系生电：Lophine > Mint > Folia
- 服务器CPU核心多(12+): Mint > LightingLuminol > Luminol > Lophine > Folia > Canvas > Leaf > Purpur > Paper
- 性能: Leaf > Purpur > Paper 
- 性能+稳定性: Purpur > Leaf > Paper
- Forge混合端: CatServer > ArcLight > Mohist
- Fabric混合端: Cardboard > Banner
- 群组服: Velocity > Waterfall > BungeeCord