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

## Folia

下载链接: https://papermc.io/downloads/all?project=folia

评分:
- 性能: 7/10
- 稳定性: 3.5/10
- 生电支持: 1/10
- 版本适配速度: 快
> ~~传统 传统 还是他n的传统~~

## Mint
Mint 基于 Folia，致力于提供更好的整体性能和原版机制

下载链接: https://github.com/MenthaMC/Mint

评分:
- 性能: 9/10
- 稳定性: 7/10
- 生电支持: 7/10
- 版本适配速度: 快
> 明日新星 国人团队发力了

## LemonMint
LemonMint 基于 Mint，努力让更多的Bukkit插件能够运行

下载链接: https://github.com/MenthaMC/LemonMint/

评分:
- 性能: 8.5/10
- 稳定性: 6/10
- 生电支持: 8/10
- 版本适配速度: 快
> 唯一的好处是在Mint的基础上努力让更多的Bukkit插件能够运行，并且在原基础上修复被破坏的特性和改进性能、并添加独特的特性

## Lophine
Lophine是Luminol的下游分支，旨在 Folia 上实现更多生电的内容以及更多的功能

下载链接: https://github.com/LuminolMC/Lophine

评分:
- 性能: 8/10
- 稳定性: 6/10
- 生电支持: 8/10
- 版本适配速度: 快
> 明日新星 国人团队发力了

## Luminol

Luminol 基于 Folia 开发, 对于性能和生电均有优化

下载链接: https://github.com/LuminolMC/Luminol/releases

评分:
- 性能: 8/10
- 稳定性: 4/10
- 生电支持: 3/10
- 版本适配速度: 快

## LightingLuminol

LightingLuminol 基于 Luminol 开发, 对插件的兼容性进行了优化

下载链接: https://github.com/LuminolMC/LightingLuminol/releases

评分:
- 性能: 8/10
- 稳定性: 4.5/10
- 生电支持: 3/10
- 版本适配速度: 快

      在此借用某大佬B站的一句话
        要性能就选mint，要功能就选luminol，要生电就选lophine


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
