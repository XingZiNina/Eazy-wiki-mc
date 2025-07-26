# 类 Paper 服务端配置文件

:::info 信息
这些配置文件实际上在开服初始配置时并不常用, 除非你有特殊需求或想了解更多, 否则你可以跳过这一节
:::

## Paper

Paper 的配置文件一般存放在 `config` 文件夹内, 分为 `paper-global.yml` (全局配置) 与 `paper-world-defaults.yml` (世界默认配置) 两个文件

接着先来介绍一下 `paper-global.yml` 的常用配置项:

### chunk-loading-basic
类型: `object`

默认值: `(代码块)`

Paper 的区块加载基本配置, 推荐将其中的 `player-max-chunk-generate-rate` 设置为 `40` 以减少玩家生成区块速率过快造成的服务器卡顿

### messages
类型: `object`

默认值: `(代码块)`

Paper 服务器消息的基本配置 (如没有权限执行命令的错误提示)

### packet-limiter.all-packets.max-packet-rate
类型: `double`

默认值: `500.0`

Paper 服务器的包速率限制, 生电服务器推荐将其设置为 `-1` 以提升对生电模组的支持

### proxies
类型: `object`

默认值: `(代码块)`

用于设置群组服 (包括 BungeeCord, Velocity)

### unsupported-settings
类型: `object`

默认值: `(代码块)`

用于设置不受支持的配置, 生电服需要将几个以 `allow-` 为开头的设为 `true` 以提升生电体验 (如破基岩, 刷铁轨)

---

然后来介绍一下 `paper-world-defaults.yml` 的常用配置项:

### anticheat.anti-xray
类型: `object`

默认值: `(代码块)`

用于配置 Paper 自带的反矿透功能, 推荐设置 `engine-mode` 为 `1` 并搭配 `raytraceantixray` 插件使用

### chunks.delay-chunk-unloads-by
类型: `string`

默认值: `10s`

用于配置某个区块没人后多久卸载, 若初期服务器玩家跑图建议调小

### collisions.max-entity-collisions
类型: `integer`

默认值: `8`

设置处理实体碰撞的最大数量

### entities.spawning.despawn-ranges
类型: `object`

默认值: `(代码块)`

设置每种生物的消失范围, 建议调小以减少实体过多对服务器的影响

### entities.spawning.spawn-limits
类型: `object`

默认值: `(代码块)`

与 Bukkit 的类似, 设置每种生物在一个区块内的最大生成数量, 这里的配置会覆盖 Bukkit 的配置, 建议调小以减少实体过多对服务器的影响

### environment.optimize-explosions
类型: `boolean`

默认值: `false`

是否使用 Paper 自带的算法优化爆炸, 若对生电相对不敏感建议开启以防止爆炸对服务器造成的性能影响

### environment.treasure-maps.enabled
类型: `boolean`

默认值: `true`

是否启用藏宝图, 藏宝图对服务器性能影响较大 (堵塞主线程), 建议关闭

### hopper.disable-move-event
类型: `boolean`

默认值: `false`

是否禁用插件监听漏斗的物品移动事件, 建议关闭以减小开销, 但该配置项可能会对监听该事件的插件造成影响

### tick-rates
类型: `object`

默认值: `(代码块)`

设置服务器每多少tick运行一次指定任务

## Purpur

Purpur 的配置文件一般是服务器根目录下的 `purpur.yml`, 以下是一些常用配置项:

### settings.messages
类型: `object`

默认值: `(代码块)`

设置 Purpur 服务器的消息配置

### username-valid-characters
类型: `string`

默认值: `^[a-zA-Z0-9_.]*$`

设置玩家进入时的用户名的要求, 是一条 regex 正则表达式

### world-settings.default.mobs
类型: `object`

默认值: `(代码块)`

用于配置各个生物的一些基本信息 (很全面)

## Leaf

Leaf 的配置文件一般存放在 `config` 文件夹内, 目前只有 `leaf-global.yml` (全局配置) 一个文件

接着来介绍一下 `leaf-global.yml` 的常用配置项:

### async
类型: `object`

默认值: `(代码块)`

各种异步任务的配置, 建议按需开启, **这正是 Leaf 服务端的亮点之一**

### performance.throttle-hopper-when-full.enabled
类型: `boolean`

默认值: `false`

是否在目标容器已满时阻塞漏斗, 建议开启以减少漏斗造成的卡顿

### network.protocol-support
类型: `object`

默认值: `(代码块)`

一些模组网络协议的支持, 开启后可以使玩家更好的使用对应的模组 (*Leaves* 服务端也有类似配置)