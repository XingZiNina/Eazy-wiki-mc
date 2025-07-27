# 启动服务器

## 安装 Java

Minecraft Java版的服务器需要安装 Java 来运行, 相信大家面对眼花缭乱的众多的 Java 发行版感到困惑而不知道选哪个, 接着让我们比较一下各个发行版:

:::tip
以下比较的分数满分均为10分
你可以在 [Java](../basic-knowledge/java.md) 找到各个 Java 发行版, 按需选择即可
:::

| 发行版                                                                  | 兼容性 | 稳定性 | 性能  | 推荐指数 | 推荐版本 (越前面的越推荐) | 备注          |
|----------------------------------------------------------------------|-----|-----|-----|------|----------------|-------------|
| [OpenJDK](https://jdk.java.net/)                                     | 10  | 9   | 4   | 5    | 所有             |             |
| [Azul Zulu](https://www.azul.com/downloads/#zulu)                    | 9   | 8   | 7   | 7    | 8, 所有          |             |
| [Azul Zing](https://www.azul.com/downloads/#prime)                   | 3.5 | 6   | 9.5 | 6    | 21, 17         | 需要申请        |
| [GraalVM EE](https://www.graalvm.org/downloads/#)                    | 7   | 7   | 9   | 9    | 21, 17         |             |
| [OpenJ9](https://github.com/eclipse-openj9/openj9)                   | 4.5 | 6.5 | 8   | 6.5  | 21, 17         | 需要自行编译      |
| [Amazon Corretto](https://aws.amazon.com/cn/corretto/)               | 9   | 9   | 8   | 8.5  | 21, 17         |             |
| [Oracle JDK](https://www.oracle.com/cn/java/technologies/downloads/) | 9   | 9   | 7.5 | 6.5  | 21, 17         | 部分版本需要注册账号  |
| [Alibaba Dragonwell](https://dragonwell-jdk.io/#/index)              | 8   | 8   | 8   | 9    | 8              |             |

:::tip 提示
你可点击发行版进入下载页面, 选择适合自己操作系统和系统架构的版本下载
若是 Windows 用户, 推荐下载 `.msi` 安装包后点击安装 (记得在可选功能勾选 `Add to PATH`) 
若是使用 Debian 包管理 (apt) 的系统的用户, 若有推荐下载 `.deb` 安装包后使用指令 `sudo apt install ./filename.deb` 安装
若均不是, 请下载 `.zip` 或 `.tar.gz` 压缩包后手动安装
:::

Linux 用户可通过以下命令完成解压 `.zip` 压缩包的操作: 
```shell
# /path/to/java-xxx.zip 为 Java 压缩包的路径
cp /path/to/java-xxx.zip /opt
cd /opt
unzip java-xxx.zip
```

如果是 `.tar.gz` 压缩包, 则可以使用以下命令:
```shell
# /path/to/java-xxx.tar.gz 为 Java 压缩包的路径
cp /path/to/java-xxx.tar.gz /opt
cd /opt
tar -xzvf java-xxx.tar.gz
```

## 配置环境变量

可以参照 [环境变量配置](../basic-knowledge/environment-variables.md) 文档配置环境变量, 在配置完成后尝试以下命令:

```shell
java -version
```

若有 Java 版本信息输出, 则说明配置成功

## 下载服务端

可以参照服务器核心板块选择合适的服务端下载

在下载完成后, 建议新建个文件夹作为存放服务器的地方, Linux 用户可参照以下命令:

```shell
# /path/to/server.jar 为服务端的路径, ~/server 为存放服务器的目录
mkdir ~/server
cp /path/to/server.jar ~/server
```

## 编写启动脚本

编写启动脚本的目的是为了方便启动服务器, 你可以在 [点我编写启动脚本](https://paper.8aka.org/misc/tools/start-script-gen) 配置好服务端文件名 (Filename), 最大内存 (一般为你系统内存的 80%~90% ), 参数 (Flags, 非代理服务端推荐使用 Aikar's Flags) 后, 一键生成启动脚本, 你可以选择你所用的系统, 选择后复制生成的脚本

接着在服务端根目录新建一个文件 `run.sh` (Windows 用户请用 `run.bat`) 写入你复制的脚本内容, 保存文件即编写好了启动脚本

:::warning 警告
在类 Unix 系统中, 你还需要执行一条命令来赋予你执行文件的权限:
```shell
# ~/server 为存放服务器的目录
cd ~/server
chmod +x run.sh
```
:::

## 启动服务器

Windows 用户只需要双击 `run.bat` 即可启动服务器, Linux 用户则需要在命令行中输入以下命令:

```shell
# ~/server 为存放服务器的目录
cd ~/server
./run.sh
```

在初期启动插件服务端时, 你常常会看到以下消息:

```log
// ...
[12:52:48 WARN]: Failed to load eula.txt
[12:52:48 INFO]: You need to agree to the EULA in order to run the server. Go to eula.txt for more info.
```

这意味着你需要同意 EULA (Minecraft 的用户使用条款) 才能启动服务器, 此时, 你需要打开 `eula.txt` 文件, 找到 `eula=false` 一行将 `false` 改为 `true` 即可

在修改完成后, 重启服务器 (重新打开启动脚本), 等待服务器加载完成你就可以看到:

```log
[12:57:58 INFO]: Done (20.909s)! For help, type "help"
```

这就意味着服务器启动成功

## 常用服务器命令

以下是一些常用的服务器命令 (均仅能用于非代理服务端除特殊标注):

:::tip 提示
<>为必填参数, []为可选参数, 一般情况下插件都使用这一套标准来编写命令的文档
:::

- `/stop`: 关闭服务器 (可用于 Waterfall / Velocity 代理服务端)
- `/kick <玩家名> [理由]`: 踢出玩家
- `/ban <玩家名> [理由]`: 封禁玩家
- `/pardon <玩家名>`: 解封玩家
- `/ban-ip <IP>`: 封禁某个IP
- `/pardon-ip <IP>`: 解封某个IP
- `/list`: 查看玩家列表
- `/op <玩家名>`: 给予某玩家管理员权限
- `/deop <玩家名>`: 取消某玩家管理员权限
- `/plugins`: 查看服务器插件列表
- `/version`: 查看服务端版本信息
- `/tps`: 查看服务器的 TPS
- `/mspt`: 查看服务器的 MSPT
- `/tpsbar`: 通过 Boss 血条实时查看服务器 TPS (仅在 Purpur 和 Luminol 类服务端可用)
- `/paper mobcaps`: 查看服务器的实体数据 (仅在 Paper 类服务端可用)
- `/server <服务器名称>`: 切换到指定名称的子服 (仅在类 BungeeCord 服务端 / Velocity 服务端中可用)
- `/end`: 关闭服务器 (仅在类 BungeeCord 服务端中可用)
- `/glist`: 查看服务器玩家列表 (仅可在代理服务端可用)
