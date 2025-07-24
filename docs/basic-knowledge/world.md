# Java版 world/存档/世界 相关内容讲解

## 命名空间

用来指明和识别游戏中特定对象而又能避免潜在的歧义和冲突的一种方式(如两个模组都有物品a, 则A模组的物品为A:a, B模组的物品为B:a, 其中A与B均为命名空间, 这样就避免冲突了)
**[MCwiki的命名空间](https://zh.minecraft.wiki/w/命名空间ID?variant=zh-cn#命名空间)**

## NBT

Minecraft存储世界数据的结构, 一种由众多的标签所组成的树状数据结构
**[MCwiki的NBT](https://zh.minecraft.wiki/w/NBT格式?variant=zh-cn)**

## 日志
顾名思义, 日志就是记录服务器运行过程中的各种信息的文件, 包括错误, 警告和基本的一些信息, 对分析插件的错误起到了较大的作用(一般都在Logs文件夹里)

## 世界
指的是 Minecraft 服务器的地图地形, 实体数据的统称

Minecraft 插件服务端一般分为 `world` (主世界), `world_nether` (下界), `world_the_end` (末地) 三个世界

每个世界都按 水平坐标(X,Z) 16x16 的方块大小分为多个区块 (游戏内按下F3＋G可查看区块边界), 最后将一块 32x32 个区块的范围存储为一个区域文件 (region)

## UUID

UUID (Universally Unique Identifier) 可以理解为唯一标识符, 在 Minecraft 中每个玩家都有独一无二的 UUID, 用于在游戏中更好的识别玩家身份避免冲突, 它的格式一般为: xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxx (8-4-4-12), x代表的是一个十六进制数 (0~9, a~f中一个)

Minecraft 的正版账户 UUID 与 离线账户 UUID 的生成方式有所不同, 所以一个名称对应的正版 UUID 与 离线 UUID 可能不同, 目前离线账户的 UUID 已经有了一套业内常用的生成标准 (但与正版的 UUID 生成标准并**不相同**)

当你的服务器在正版和离线之间转换时, 数据丢失有可能就是因为 UUID 不匹配造成的, 所以在转换中要记得转换 UUID

uuid有时间限制，通常来看似乎是以玩家最后在线时间+一个月为止，到期后uuid会失效，服务器自动清除，玩家连入会重新分配uuid（大概
也就是说如果删除了存储uuid与id的对应的文件或者uuid过期，玩家数据会丢失

uuid对应文件以usercache.json为名，存储在服务器根目录下。
因为整个文件都是一个json中的值，所以以[开头，以]结尾，每个值之间由英文逗号,隔开。
以下是一个合法值的示例
```json
{"name":"Test_test","uuid":"78a610e7-9107-4653-94b6-0a366ea5b950","expiresOn":"2025-07-27 00:11:19 +0800"}
```
这个值表示，id为、Test_test的玩家的uuid为78a610e7-9107-4653-94b6-0a366ea5b950，该uuid将于2025-07-27 00:11:19 +0800（UTC+8 2025年7月27日0时11分19秒）时过期

## 修改playerdata文件夹

以下为两名玩家的数据文件。现在我们需要把第一名玩家的数据迁移给第二名
```txt
78a610e7-9107-4653-94b6-0a366ea5b950.dat 640KB
8a610e7-9107-4653-94b6-0a366ea5b950.dat_old 640KB
0b881575-595b-4869-b555-4263433925a0.dat 120KB
0b881575-595b-4869-b555-4263433925a0.dat_old 120KB
```
操作方法：
- 复制第二名玩家的数据文件名并删除数据文件
- 将第一名玩家的数据文件名替换为第二名玩家的
成功操作后，数据文件如下：

```txt
0b881575-595b-4869-b555-4263433925a0.dat 640KB
0b881575-595b-4869-b555-4263433925a0.dat_old 640KB
```
此时，第二名玩家再次连入游戏，他的玩家数据将使用原本第一名玩家的数据

## 文件结构

以下展示的是插件服务端的基本文件结构:
> 有些文件可能并不会生成, 为正常现象

```text
|- assets/  # Minecraft 本身的一些资源文件
|- cache/  # Minecraft 服务端的缓存文件
|- config/  # 一些插件服务端的配置文件
|  |- gale-global.yml  # Gale 服务端的全局配置文件
|  |- gale-world-defaults.yml # Gale 服务端的世界配置文件
|  |- leaf-global.yml  # Leaf 服务端的全局配置文件
|  |- paper-global.yml  # Paper 服务端的全局配置文件
|  |- paper-world-defaults.yml # Paper 服务端的世界配置文件
|- libraries/  # 插件的依赖下载位置
|- logs/  # 服务端日志文件
|  |- latest.log  # 最新日志文件
|  |- yyyy-mm-dd-n.log.gz  # 某天的第n份日志文件压缩包
|- plugins/  # 插件及其配置目录
|- versions/  # 原版服务端的文件所在目录
|- world/  # 主世界目录
|  |- advancements  # 成就数据
|  |  |- uuid.json  # 对应 UUID 玩家的成就数据
|  |- data # 世界的一些基本数据 (如计分板)
|  |- datapacks # 数据包目录
|  |  |- bukkit  # 类 Bukkit 服务端的基本数据包
|  |- entities  # 实体数据
|  |  |- r.n.m.mca  # 第 (n, m) 个 region 的实体数据文件
|  |- playerdata  # 玩家数据
|  |  |- uuid.dat  # 某个玩家的数据文件
|  |- poi  # 兴趣点数据 (如村民的工作方块, 玩家的床)
|  |  |- r.n.m.mca  # 第 (n, m) 个 region 的兴趣点数据文件
|  |- region  # 区块数据目录
|  |  |- r.n.m.mca  # 第 (n, m) 个 region 的区块数据文件
|  |- stats  # 玩家统计数据 (如走了多少方块)
|  |  |- uuid.json  # 对应 UUID 玩家的统计数据
|  |- level.dat  # 世界的全局基本信息数据文件
|  |- level.dat_old  # 世界的全局基本信息数据文件备份
|  |- paper-world.yml  # Paper 服务端的世界配置文件 (只会在该世界生效)
|  |- session.lock  # 世界的锁文件 (服务器开启时会生成, 防止多个进程同时占用一个世界)
|  |- uid.dat  # 世界的唯一 ID 数据文件
|- world_nether/  # 下界目录 （主世界所对应的文件都在这里面, 如唯一 ID 数据文件)
|  |- DIM-1  # 下界的基本信息数据文件 (主世界所对应的文件夹都在这里面, 如区块数据)
|- world_the_end/  # 末地目录 （主世界所对应的文件都在这里面, 如唯一 ID 数据文件)
|  |- DIM1  # 末地的基本信息数据文件 (主世界所对应的文件夹都在这里面, 如区块数据)
|- .console_history  # 后台命令执行记录文件
|- banned-ip.json  # 被封 IP 列表
|- banned-players.json  # 被封玩家列表
|- bukkit.yml  # Bukkit 服务端的配置文件
|- commands.yml  # 服务端与 Minecraft 原版命令优先级处理的文件
|- eula.txt  # 服务端的 EULA (使用条款) 文件
|- help.yml  # 一些插件的帮助信息
|- ops.json  # 服务器管理员列表
|- permissions.yml  # 权限节点包的相关配置文件
|- purpur.yml  # Purpur 服务端的配置文件
|- server.properties  # 服务端的基本信息配置文件
|- spigot.yml  # Spigot 服务端的配置文件
|- usercache.yml  # 玩家信息缓存文件
|- version_history.yml  # 服务端的版本信息历史
|- wepif.yml  # 权限相关配置文件
|- whitelist.json  # Minecraft 原版的白名单列表
```

:::info 信息
实际上比较常用的, 你需要了解的配置文件 (**不包括文件夹**) 只有在下文中的 配置文件 板块的文件
:::
