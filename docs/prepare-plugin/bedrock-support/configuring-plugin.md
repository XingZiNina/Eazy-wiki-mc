# 配置插件

接着让我们来配置一下基岩互通插件文件

一般来说, 你只需要配置 Geyser 插件的文件, Geyser 插件的配置文件一般在 `plugins/Geyser-*/config.yml`, 下面介绍一些插件的常用配置项

## bedrock.port

默认值: 19132
推荐值: `与Java版同步`
> 基岩版为Udp Java版为Tcp

基岩服务器的端口号

## bedrock.motd1

默认值: `Geyser`
推荐值: `与Java版同步`
> 若启用passthrough-motd 则不用管

基岩服务器的第一行描述

## bedrock.motd2

默认值: `Another Geyser server`
推荐值: `与Java版同步`
> 同上

基岩服务器的第二行描述（一般不可见）

## bedrock.server-name

默认值: `Geyser`
推荐值: `与Java版同步`

基岩服务器的名称

## remote.auth-type

默认值: `online`
推荐值: `Floodgate`

基岩玩家进入服务器的验证方式 (可填: `online` (正版), `offline` (离线), `floodgate` (floodgate 插件验证))

## passthrough-motd

默认值: `false`
推荐值: `true`

将 MOTD 从远程服务器中继到基岩玩家

## passthrough-player-counts

默认值: `false`
推荐值: `true`

将玩家数量和最大玩家数从远程服务器中继到基岩玩家

## legacy-ping-passthrough

默认值: `false`
推荐值: `true`

启用传统 ping 直通。除非您的 MOTD 或玩家计数未正确显示，否则无需启用此功能
> 开启后 可能会导致基岩版玩家掉线次数增加

## max-players

默认值: `100`
推荐值: `与Java版同步`

基岩服务器的最大玩家数 不限制玩家数量 修饰作用

## above-bedrock-nether-building

默认值: `false`
推荐值: `true`

是否允许基岩玩家在下界基岩上层建造

## 全部[Config.yml](https://www.bilibili.com/opus/814123588232675361)汉化文件
