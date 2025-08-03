# 常用命令

以下介绍了一些 LuckPerms 权限插件的常用命令

## 通用命令

**`/lp editor`**

打开网页编辑器, 在网页编辑器, 你可以完成诸如创建权限组, 编辑权限等操作, 不需要编写那么多繁杂的命令

## 常用命令

- `/lp creategroup <组名>`: 创建权限组
- `/lp deletegroup <组名>`: 删除权限组
- `/lp user/group <名称> permission set <权限> true/false`: 设置某玩家/组别拥有(true)/禁止使用(false)某权限
- `/lp user/group <名称> permission unset <权限>`: 撤销在某玩家/组别设置的权限
- `/lp user/group <名称> permission check <权限>`: 查看某玩家/组别的某权限的状态
- `/lp user/group <名称> permission info`: 查看某玩家/组别所**设置**的权限列表
- `/lp user/group <名称> parent set <组别>`: 设置某玩家/组别继承某个权限组
- `/lp user/group <名称> parent add <组别>`: 给某玩家/组别添加继承的权限组
- `/lp user/group <名称> parent remove <组别>`: 移除某玩家/组别继承的某个权限组
- `/lp user/group <名称> parent info`: 查看某玩家/组别继承的权限组信息

## 其它命令

- `/lp verbose on [表达式]`: 打开 LuckPerms 详细日志记录, 将会显示其它插件操作权限的信息 (匹配表达式的权限)
- `/lp version on command <me/玩家名> <命令>`: 打开 LuckPerms 详细日志记录 (针对某玩家执行某命令)
- `/lp verbose off`: 关闭 LuckPerms 详细日志记录
- `/lp verbose record`: 记录 LuckPerms 详细日志到文件
- `/lp verbose paste`: 将 LuckPerms 详细日志发送到剪贴板