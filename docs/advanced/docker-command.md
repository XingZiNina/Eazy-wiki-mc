# 常用指令

Docker 一般使用命令进行操作, 接下来会介绍一些常用的 Docker 命令

## pull

从 Docker Hub 拉取镜像

:::info 信息
国内~~疑似~~屏蔽了 Docker Hub, 所以你可能无法拉取成功, 可以看看 https://github.com/DaoCloud/public-image-mirror
:::

```shell
docker pull openjdk:21   # 拉取 openjdk:21 镜像 (一般来说冒号前面是镜像的名字, 后面是版本号)
docker pull docker.m.daocloud.io/library/busybox   # 拉取 daocloud 上的 busybox 镜像
```

## images

查看已经拉取下来的所有镜像

```shell
docker images   # 查看拉取下来的所有镜像
```

## search

在 Docker Hub 搜索镜像

```shell
docker search openjdk   # 搜索 openjdk 镜像
```

## run

创建并运行一个容器

```shell
docker run --name my-container -p 10000:25565 -v /home/alazeprt/data:/data openjdk:21
```

参数解释:
- `--name my-container`: 设置容器的名称为 my-container
- `-p 10000:25565`: 将容器的 25565 端口映射到主机的 10000 端口
- `-v /home/alazeprt/data:/data`: 将主机的 /home/alazeprt/data 目录挂载到容器的 /data 目录
- `openjdk:21`: 运行的镜像为 openjdk:21

其它常用参数:
- `-d`: 后台运行容器
- `-it`: 交互式运行容器
- `--rm`: 容器退出后自动删除
- `-e`: 设置环境变量
- `--restart`: 设置重启策略 (no, on-failure, always, unless-stopped)

## start

启动一个已有容器

```shell
docker start my-container   # 启动名为 my-container 的容器
```

## stop

停止一个运行中的容器

```shell
docker stop my-container   # 停止名为 my-container 的容器
docker stop -t 30 my-container   # 等待 30 秒后停止 my-container 容器
```

## restart

重启一个运行中的容器

```shell
docker restart my-container   # 重启名为 my-container 的容器
docker restart -t 30 my-container   # 等待 30 秒后重启 my-container 容器
```

## kill

杀死一个运行中的容器

```shell
docker kill my-container   # 杀死名为 my-container 的容器
docker kill -s SIGTERM my-container   # 发送 SIGTERM 信号给 my-container 容器
```

## create

创建一个新的容器但不启动

```shell
docker create --name my-container -p 10000:25565 -v /home/alazeprt/data:/data openjdk:21
```

参数解释:
- `--name my-container`: 设置容器的名称为 my-container
- `-p 10000:25565`: 将容器的 25565 端口映射到主机的 10000 端口
- `-v /home/alazeprt/data:/data`: 将主机的 /home/alazeprt/data 目录挂载到容器的 /data 目录
- `openjdk:21`: 运行的镜像为 openjdk:21

其它常用参数:
- `-d`: 后台运行容器
- `-it`: 交互式运行容器
- `--rm`: 容器退出后自动删除
- `-e`: 设置环境变量
- `--restart`: 设置重启策略 (no, on-failure, always, unless-stopped)

## pause

暂停一个运行中的容器的所有进程

```shell
docker pause my-container   # 暂停名为 my-container 的容器
```

## unpause

恢复一个暂停的容器的所有进程

```shell
docker unpause my-container   # 恢复名为 my-container 的容器
```

## rm

删除一个或多个容器

```shell
docker rm my-container   # 删除名为 my-container 的容器
docker rm $(docker ps -a -q)   # 删除所有容器
```

## exec

在一个运行中的容器内执行命令

```shell
docker exec -it my-container java -version  # 在名为 my-container 的容器内使用交互模式运行 java -version 命令
```

参数解释:
- `-it`: 交互式运行容器

其它常用参数:
- `-d`: 在后台运行命令
- `-e`: 设置环境变量
- `-w`: 设置工作目录

## rename

重命名一个容器

```shell
docker rename my-container my-new-container   # 重命名名为 my-container 的容器为 my-new-container
docker rename 114514 my-new-container   # 重命名 id 为 114514 的容器为 my-new-container
```

## ps

查看所有容器

```shell
docker ps   # 查看所有容器
docker ps -a   # 查看所有容器 (包括停止的容器)
```

## inspect

查看容器的详细信息

```shell
docker inspect my-container   # 查看名为 my-container 的容器的详细信息
docker inspect 114514   # 查看 id 为 114514 的容器的详细信息
```

## logs

查看容器的日志

```shell
docker logs my-container   # 查看名为 my-container 的容器的日志
docker logs -f my-container   # 跟踪名为 my-container 的容器的日志
docker logs -t my-container   # 显示时间戳
```

## stats

查看容器的资源占用情况

```shell
docker stats   # 查看所有运行中的容器的资源占用情况
docker stats my-container   # 查看名为 my-container 的容器的资源占用情况
docker stats -a   # 查看所有容器的资源占用情况 (包括停止的容器)
```

## top

查看容器内运行的进程

```shell
docker top my-container   # 查看名为 my-container 的容器内运行的进程
```

