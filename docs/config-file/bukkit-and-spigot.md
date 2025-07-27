# Bukkit & Spigot 相关配置文件

:::info 信息
这些配置文件实际上在开服初始配置时并不常用, 除非你有特殊需求或想了解更多, 否则你可以跳过这一节
:::

## Bukkit

Bukkit 的配置文件为 `bukkit.yml`, 一般位于服务器根目录下

以下是 Bukkit 的配置文件的常用配置项:

### settings.allow-end
类型: `boolean`

默认值: `true`

是否允许生成末地世界

### settings.connection-throttle
类型: `int`

默认值: `4000`

控制每次客户端连接到服务器的最小间隔, 单位为毫秒, 建议调小以防止客户端因频繁连接无法进入服务器

### settings.shutdown-message
类型: `string`

默认值: `Server closed`

服务器关闭时显示的消息

### spawn-limits
类型: `object`

默认值: `(代码块)`

用于设置每个区块中每类生物可生成的最大值

### ticks-per
类型: `object`

默认值: `(代码块)`

用于设置服务器每多少 tick 运行一次指定任务

## Spigot

Spigot 的配置文件为 `spigot.yml`, 一般位于服务器根目录下

以下是 Spigot 的配置文件的常用配置项:

### settings.moved-too-quickly-multiplier
类型: `double`

默认值: `10.0`

设置玩家移动速度的最大值 (超过这个值就会像控制台输出警告), 建议调大以防止控制台刷屏无用信息

### settings.moved-wrongly-threshold
类型: `double`

默认值: `0.0625`

设置服务器检测到玩家移动存在问题时发送警告消息到阈值, 建议调大以防止控制台刷屏无用信息

### settings.timeout-time
类型: `int`

默认值: `60`

设置服务器在未响应多少秒后进行标准关闭流程 (单位为秒)

### world-settings.default.ticks-per
类型: `object`

默认值: `(代码块)`

设置每多少tick执行一次指定任务

### world-settings.default.entity-activation-range
类型: `object`

默认值: `(代码块)`

设置触发实体激活的范围

### messages
类型: `object`

默认值: `(代码块)`

Spigot 服务器消息的基本配置 (如服务器满人时踢出的消息)