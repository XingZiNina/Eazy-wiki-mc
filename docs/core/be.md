# 基岩版核心 & 服务端

      基岩版服务端核心以轻量化、跨平台为特色，主要分为官方核心与第三方优化分支两类

## 官方核心      

### BDS (Bedrock Dedicated Server)
- **特点**：官方原版服务端，仅支持行为包 材质包 scriptAPi
- **优点与缺点**：
  - 优点: 是官方推出的服务端 拥有基岩版所有原版特性
  - 缺点: 一些社区反馈的Bug不能及时修复 扩展性较差且性能较差
- **下载链接**：https://www.minecraft.net/zh-hans/download/server/bedrock

###  BDS & LLBDS & Endstone
| 项     | BDS   | LLBDS   | Endstone  |
|-------|------|------|------|
| 社区活跃性 | 差    | 高    | 高    |
| 更新速度 | 高    | 较高    | 较高    |
| 稳定性  | 较差   | 高   | 高   |
| 插件兼容性 |无 |高 | 高 |

- BDS下载链接：https://www.minecraft.net/zh-hans/download/server/bedrock
- LL＋BDS下载链接:https://github.com/LiteLDev/LeviLamina
- Endstone下载链接: https://github.com/EndstoneMC/endstone
> ##### 注意 以上均需要以BDS为基础 LL与Endstone均为插件加载器
> ##### 并且LLBDS在Linux环境下运行不佳 而Endstone无需考虑这个问题

## 第三方优化核心

### Nukkit
- **定位**​​：早期基岩版服务端代表，现生态趋于边缘化 核能级驱动
- **特点**：依靠Java编写 但性能优化堪称极致 基岩版的Paper~~确信~~
- **优点与缺点**：
  - 优点: 性能较高 作为老牌核心稳定性无问题 适合小游戏类服务端
  - 缺点: 现如今社区活跃度差  原版特性不全 逐渐跟不上潮流

#### 主流分支核心
| 核心名称       | 支持游戏版本 | 链接   |JAVA版本| 状态   |
|----------------|--------------|---------|---------|---------|
| NukkitX   |1.21.93 | https://www.minebbs.com/resources/nukkitx.32/|17＋| 活跃|
| Nukkit-MOT(需自己构建)|1.21.93|https://github.com/MemoriesOfTime/Nukkit-MOT |17＋|活跃| 
| PowerNukkitX|  1.21.93|https://github.com/PowerNukkitX/PowerNukkitX|17＋|活跃|
| PetterM1Edition|1.21.93 | https://github.com/PetteriM1/NukkitPetteriM1Edition/|17＋|活跃| 
