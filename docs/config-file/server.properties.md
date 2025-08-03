# server.properties

`server.properties`  位于服务器根目录下, 最先出现在原版服务端, 旨在配置基本的服务端

以下是 `server.properties` 的一些常用的配置项:

## allow-flight 允许飞行
类型: `boolean`

默认值: `false`

是否允许客户端飞行, 为原版自带的反作弊功能, 建议改为 `true` (误判较多)

## allow-nether 启用下界
类型: `boolean`

默认值: `true`

是否开启生成下界世界

## difficulty 游戏难度
类型: `string`

默认值: `easy`

服务器难度, 可选值: `peaceful` (和平), `easy` (简单), `normal` (普通), `hard` (困难)

## enable-command-block 启用命令方块
类型: `boolean`

默认值: `false`

是否开启命令方块

## enforce-secure-profile 强制安全配置文件
类型: `boolean`

默认值: `true`

是否要求玩家在 Minecraft 聊天时要上传信息到 Mojang 服务器, 离线服请设置为 `false`
> 开启此项时, 由于Mojang方面的问题, 您服务器的玩家可能会受到恶意的聊天举报从而被封禁多人游戏, 因此建议无论如何都不要开启这项配置

## gamemode 游戏模式
类型: `string`

默认值: `survival`

默认游戏模式, 可选值: `survival` (生存), `creative` (创造), `adventure` (冒险), `spectator` (旁观)

## hardcore 极限模式
类型: `boolean`

默认值: `false`

是否开启极限模式, 即玩家死亡后无法重新进入服务器 (被封禁)

## level-name 存档（世界）名称
类型: `string`

默认值: `world`

服务器默认世界名称, 下界与末地的默认世界会在次此名称后分别加 `_nether` 与 `_the_end` 后缀区分

## level-seed 生成世界所用的种子
类型: `string`

默认值: ``

服务器地图种子, 留空则随机生成

## max-players 最大玩家数量
类型: `integer`

默认值: `20`

服务器最大玩家数量

## motd 服务器在列表里显示的信息
类型: `string`

默认值: `A Minecraft Server`

服务器的描述 (在服务器列表中显示)

## online-mode 在线模式
类型: `boolean`

默认值: `true`

是否启用在线模式 (即正版服), 若你是离线服, 请设置为 `false`

## pvp 玩家互相攻击
类型: `boolean`

默认值: `true`

是否开启 PvP (即允许攻击其他玩家)

## server-ip 服务器绑定的IP
类型: `string`

默认值: ``

服务器绑定的 IP 地址, 留空则为0.0.0.0 (监听所有 IP)

## server-port 服务器绑定的端口号
类型: `integer`

默认值: `25565`

服务器绑定到的端口号 (0 ~ 65535)

## simulation-distance 模拟距离
类型: `integer`

默认值: `10`

服务器的模拟距离

## spawn-protection 重生半径
类型: `integer`

默认值: `16`

玩家出生点保护范围 (单位为方块)

## view-distance 视距
类型: `integer`

默认值: `10`

服务器的渲染距离 (单位为方块)
> 如果你服是生电服务器 请确保view-distance ≥ 8 否则您的玩家会~~Boom~~的
