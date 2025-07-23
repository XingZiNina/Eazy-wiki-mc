# 性能分析

:::tip 提示
在进行性能分析之前, 请先确保你安装了 [spark](https://spark.lucko.me/download) 插件 (一般类 Paper 服务端内置)
:::

Minecraft 服务器的卡顿一般使用 `spark` 插件进行分析, 该插件可以查看服务器的性能指标, 查看服务器的 GC 回收情况, 列出服务器每个方法调用所消耗的时间 (占比), 可以从中分析出服务器瓶颈之处

## 基本性能分析

该栏目的性能分析主要针对的是 TPS 的瓶颈

以下是开始进行性能分析前的准备工作:
1. 在 **开始卡顿的时候** 执行 `/spark profiler stop` 指令, 该指令可以上传服务器的性能数据到 `spark` 插件的网站上, 方便进行分析
2. (若已自动重新开始记录数据, 可不执行) 紧接着执行 `/spark profiler start` 指令, 重新开始记录性能数据
3. 等待约 10 ~ 20 分钟后 (最好这一段时间服务器都卡顿), 再次执行 `/spark profiler stop` 指令, 将这一段时间的性能数据上传到 `spark` 插件的网站上
4. 打开聊天栏显示的网址, 开始进行分析

:::tip 提示
如果你愿意下载大体积的性能分析报告 (spark 插件国内下载较慢), 你可以在卡顿后 10 ~ 20 分钟只进行第一步 (会上传自上一次执行该指令 (若未执行则开服) 到目前的所有性能数据到远程服务器)
:::

接着就要开始分析了

~~文章里唯一有图片的地方, 后面会补充更多~~

### 看曲线

一般来说, `spark` 报告会有一份曲线图, 你可以只开启 `TPS`, `Entities` (实体) 或 `TPS`, `Chunk` (区块) 两条曲线搭配看, 观察他们是否有一定的关系规律 (如 TPS 下降时 Entities 上升), 若有则说明 TPS 受另一条曲线的影响

如下曲线:

![spark 曲线](/../assets/image/spark_graph.png "spark 曲线")

由图可知 TPS 的减少时 Entities 会增加, 说明 TPS 受 Entities (实体) 影响较大, 这时可以考虑优化 实体 相关的插件或配置

### 看调用树

最下面的 `All View` 就是服务器的调用树 (个人起名), 它展示了服务器调用了什么方法, 占用了服务器每tick的百分比 (也有具体的占用时间可以显示出来)

一般来说, 我们会沿着性能占比最大 (如果两个相近则都要) 的一路往下点, 直到每个节点 (每一个调用的方法/线程叫一个节点, 可以直接粗略理解为每一行) 的占比小到一定程度, 就不继续往下点

如下是点后的调用树 (Chunk 区块部分可能没截全):

![spark 调用树](/../assets/image/spark_tree.png "spark 调用树")

接着我们自上而下按照点开的顺序开始分析 (一般来说从 `net.minecraft.server.MinecraftServer.runServer()` 开始):

:::tip 提示
可以直接对类名和方法名进行翻译, 方便理解
对于上下层级占比差不多的方法 (<5%), 可以不看, 只看差别较大的
此处的分析会将 net.minecraft.server 简写为 nms, 方便阅读
:::

- `nms.MinecraftServer.runServer()`: 运行服务器的方法, 98.37%
- `nms.MinecraftServer.tickServer()`: 服务器 tick 的主循环方法, 90.38%
- `nms.MinecraftServer.tickChildren()`: 服务器 tick 子线程的方法, 90.16%
- `nms.level.ServerLevel.tick()`: 服务器世界的 tick 方法, 87.52%
  - `net.minecraft.world.level.entity.EntityTickList.forEach()`: 实体 tick 列表的遍历方法, 50.26%
    - `nms.level.ServerLevel$$Lambda.0x00007f02c7efa408.accept()`: 实体 tick 列表的遍历方法的 lambda 表达式, 49.90%
    - `nms.level.ServerLevel.lambda$tick$4()`: 实体 tick 方法的 lambda 表达式, 49.90%
    - `...` 其它占比差不多的相关方法, 不作展示, 一般也不会看这里
    - `nms.level.ServerLevel.tickNonPassenger()`: 实体的 tick 方法 (非乘客), 47.53%
      - `net.minecraft.world.entity.npc.Villager.tick()`: 村民的 tick 方法, 9.70%
      - `net.minecraft.world.entity.monster.Zombie.tick()`: 僵尸的 tick 方法, 8.79%
      - `net.minecraft.world.entity.npc.Villager.inactiveTick()`: 村民的非活跃 tick 方法, 8.07%
      - `...` 其它实体的 tick 方法
  - `nms.level.ServerChunkCache.tick()`: 区块缓存的 tick 方法, 24.20%
  - `nms.level.ServerChunkCache.tickChunks()`: 区块缓存的 tick 多个区块的方法, 18.98%
  - `nms.level.ServerChunkCache.tickChunks()`: 区块缓存的 tick 多个区块的方法 (再次调用), 17.56%
    - `net.minecraft.world.level.NaturalSpawner.spawnForChunk()`: 区块生物生成的方法, 12.86%
    - `nms.level.ServerLevel.tickChunk()`: 单个区块的 tick 方法, 2.04%

由此可见, 较多的实体 (尤其是村民和僵尸) 及实体的生成是导致服务器 TPS 较低的主要原因

### 看世界

我们可以点击上方的 `World` 选项卡, 查看世界的实体与区块的详细信息 (如图)

![spark 世界信息](/../assets/image/spark_world.png "spark 世界信息")

#### Summary

Summary 部分即整个服务器的世界信息汇总

从 Entities (total) 可知每个世界的实体数量及总数量

从 Chunks (total) 可知每个世界的区块数量及总数量

从 Entity Count 可知每种实体的数量, 由该图可知服务器的 strider (炽足兽), villager (村民), item (物品, 即掉落物) 较多, 可以针对这些方面展开优化

#### Region

这里展示了服务器最多实体的若干个区域 (region), 以及该区域内最多实体的区块 (chunk), 管理员可以到这些区块进行调查

### 看插件

可以点击**最上方**的 `Plugins` 选项卡, 查看每个插件占用的性能百分比 (也有调用树, 同理可以根据上面的方法进行分析)

如图展示了服务器的一部分插件占用信息

![spark 插件信息](/../assets/image/spark_plugins.png "spark 插件信息")

## 内存 / GC 分析

敬请期待