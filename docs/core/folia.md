# 新兴Folia系列核心

服务端 (也称核心) 指的是运行服务器的软件

由于原版服务端扩展性及性能的不足, 社区便衍生出了多种服务端, 大致可分为以下几种:
- 原版服务端 (俗称香草服务端, Vanilla Server)
- 插件服务端
- 模组服务端
- Sponge服务端

本片**本教程重点介绍插件服务端**中的Folia系列核心

接下来介绍的是Folia类服务端, 这一类服务端均将区块放到多个线程, 有效提升了线程较多处理器的利用率
> 由于区块的线程不统一, 一部分核心对生电不友好，各别核心还原了特性，但插件生态仍不如Paper,所有Folia系只适合想开**类原版多人**/**极致性能优化**的服主

:::tip
由于破坏较多BukkitApi 一些原版指令没被恢复 且不支持绝大多数据包
:::

## Folia

下载链接: https://papermc.io/downloads/all?project=folia

优点与缺点:
- 优点: 多核端的开山鼻祖
- 缺点: 不够稳定 且不支持生电 只适合开类原版服
- 版本适配速度: 快

## Canvas

Canvas 基于 Folia 开发, 针对异步多世界路线进行开发（只支持Java22＋）

下载链接: https://jenkins.canvasmc.io/job/Canvas/

优点与缺点:
- 优点: 性能优化极其强悍 全新架构配置 更多的性能优化
- 缺点: 稳定性差 且内置的更新 国内无镜像代理 会自动爆红
- 版本适配速度: 较慢
> 极致的优化 Bug较多 未来可期

## Mint
Mint 基于 Folia，致力于提供更好的整体性能和原版机制

下载链接: https://github.com/MenthaMC/Mint

优点与缺点:
- 优点: 性能优化较好 恢复少量生电特性
- 版本适配速度: 快
> 明日新星 国人团队发力了

## Lophine
Lophine是Luminol的下游分支，旨在 Folia 上实现更多生电的内容以及更多的功能

下载链接: https://github.com/LuminolMC/Lophine

优点与缺点:
- 优点: 修复一些生电特性
- 版本适配速度: 快

## Luminol

Luminol 基于 Folia 开发, 对于性能和生电均有优化

下载链接: https://github.com/LuminolMC/Luminol/releases

优点与缺点:
- 优点: 性能优化好 稳定性较高 恢复少量生电特性
- 版本适配速度: 快

## LightingLuminol

LightingLuminol 基于 Luminol 开发, 对插件的兼容性进行了优化

下载链接: https://github.com/LuminolMC/LightingLuminol/releases

优点与缺点:
- 优点: 插件兼容性有所提升
- 缺点: 这类强兼服务端 稳定性差是通病
- 版本适配速度: 快

      在此借用某大佬B站的一句话
        要性能就选mint，要功能就选luminol，要生电就选lophine

## Traium
Traium 前身为MenthaMC项目体系的LemonMint，因某些原因退出MenthaMC，成为独立的项目

下载链接: https://github.com/TraiumMC/Traium/

- 版本适配速度: 快
> 该服务端目前是刚起步的状态，虽然有LemonMint的牢本，但是依旧是一穷二白（

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
