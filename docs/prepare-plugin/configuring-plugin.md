# 配置插件

插件配置是一项重要的任务, 接着就让我们来一起学习如何配置插件

我们先来看配置文件部分的

## 打开配置文件
一般来说, 插件的配置文件一般会在服务器根目录下的 `plugins/插件名` 下, 通常会有以下文件:

- `config.yml`: 通用的配置文件
- `custom.yml`: 自定义配置文件
- `lang.yml / messages.yml / language.yml`: 语言(消息)配置文件
- `lang/`: 语言文件目录
- `*.db`: 本地数据库文件 (SQLite / H2)
- `data.yml`: 数据文件

:::warning 警告
不要轻易删除与 `db` 和 `data` 有关的文件, 这些一般是插件的数据!
:::


根据你的需求打开配置文件 (一般会先打开 `config.yml`)

## 理解配置文件
相信有很多人看到配置文件里一堆英文就一头雾水, 所以我们来了解一下如何正确理解一个配置文件

下面是一个示例的配置文件 (有缩减):

```yaml
# ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
# ┃       HuskHomes Config       ┃
# ┃    Developed by William278   ┃
# ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
# ┣╸ Information: https://william278.net/project/huskhomes/
# ┣╸ Config Help: https://william278.net/docs/huskhomes/config-files/
# ┗╸ Documentation: https://william278.net/docs/huskhomes/

# Locale of the default language file to use. Docs: https://william278.net/docs/huskhomes/translations
language: zh-cn
# Whether to automatically check for plugin updates on startup
check_for_updates: true
# General settings
general:
  # The maximum homes a user can create. Override with the huskhomes.max_homes.<number> permission.
  max_homes: 10
  # The maximum public homes a user can create. Override with the huskhomes.max_public_homes.<number> permission.
  max_public_homes: 10
  # Whether permission limits (i.e. huskhomes.max_homes.<number>) should stack if the user inherits multiple nodes.
  stack_permission_limits: false
  # Whether users require a permission (huskhomes.command.warp.<warp_name>) to use warps
  permission_restrict_warps: false
  # How long a player has to stand still and not take damage for when teleporting (in seconds) 
  teleport_warmup_time: 1
  # Whether the teleport warmup timer should be cancelled if the player takes damage
  teleport_warmup_cancel_on_damage: true
  # Whether the teleport warmup timer should be cancelled if the player moves
  teleport_warmup_cancel_on_move: true
```
理解配置文件一般从以下几种途径 (优先级从高到低):
- 插件文档 (关键词: doc, docs, document, documentation, wiki): 如在这里配置文件的前几行注释给出了文档链接: https://william278.net/docs/huskhomes/, 也提供了配置文件帮助链接: https://william278.net/docs/huskhomes/config-files/, 可以从这里看看有没有中文文档 (没有的话就翻译)
- 注释 (以 `#` 或 `//` 开头): 如 `general.teleport_warmup_time` 给出了注释 `How long a player has to stand still and not take damage for when teleporting (in seconds)`, 翻译一下可得是 传送时玩家必须在多少秒内站在一个地方静止不动并且不受攻击
- 配置项: 如 `general.teleport_warmup_time`, 将 `_` 替换成 ` ` (即 `teleport warmup time`) 并翻译即可得意为 传送预热时间

每个配置项都进行如上操作后, 你就可以大概理解了, 接着就按照你的需求修改即可

## 寻找插件 Wiki / 文档

接着我们回到你刚刚下载插件的主页, 搜索(寻找)这些关键词: doc, docs, document, documentation, wiki, 找到后点开对应的链接, 大概率就是插件的文档了, 接着你就可以根据插件的文档来进行进一步的配置了

