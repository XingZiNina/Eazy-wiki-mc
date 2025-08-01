# 网络

Docker 有三种网络, 分别是:
- `host`: 主机模式
- `bridge`: 桥接模式 (默认)
- `custom`: 自定义 (与 `bridge` 类似)

## 主机模式

主机模式, 顾名思义, 与主机共用一条IP地址, 容器上的服务的端口可以直接暴露在宿主机上, 无需端口映射, 可以直接使用 `127.0.0.1` 本地回环地址互相访问, 也减少了网络NAT的性能开销

不过, 这样可能会导致宿主机和容器之间的服务端口冲突, 同时没有网络的隔离, 宿主机的风险也会高一些

## 桥接模式

桥接模式, 相当于 Docker 模拟一个路由器, 给各个容器分发 IP 地址, 容器间可以使用自己所获得的 IP 地址访问, 访问宿主机时要使用宿主机的 IP 而不是 `127.0.0.1`

桥接模式对容器间的网络进行了隔离, 容器间的网络流量不会相互影响, 也不会出现端口冲突, 不过需要配置端口映射才能从宿主机访问到容器的服务, 并且NAT网络转换的性能稍显逊色

## 自定义网络

自定义网络, 即用户自己创建的桥接模式的网络 (`docker network create`), 类似于另一个路由器, 拥有和默认的桥接模式不同的网段 IP

和桥接模式类似, 不过, 自定义网络可以直接用容器名称 (如 `http://my-container:8080`) 访问容器的服务, 更加方便