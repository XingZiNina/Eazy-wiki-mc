# Linux 常用命令

## cd

切换目录命令, 用于切换当前所在目录

```shell
cd /home/alazeprt/server   # 切换到 /home/alazeprt/server 目录
```

## ls

列出目录下的文件和目录命令, 用于查看当前目录下的文件和目录

```shell
ls   # 列出当前目录下所有文件和目录
ls -l   # 列出详细信息, 包含文件权限, 所有者, 大小等
ls -a   # 列出所有文件和目录, 包括隐藏文件
ls -la   # 列出所有文件和目录 (包括隐藏文件) 的详细信息
ls -lh   # 列出文件和目录的详细信息, 并格式化文件大小 (以 KB, MB, GB 等为单位)
ls -l /home/alazeprt   # 列出 /home/alazeprt 目录下的所有文件和目录的详细信息
```

## mkdir

创建目录指令

```shell
mkdir /home/alazeprt/server/test   # 创建 /home/alazeprt/server/test 目录 (前提是 /home/alazeprt/server 目录存在)
mkdir -p /home/alazeprt/server/test   # 创建 /home/alazeprt/server/test 目录 (若某一层目录不存在会自动创建)
```

## touch

创建文件指令

```shell
touch /home/alazeprt/server/test.txt   # 创建 /home/alazeprt/server/test.txt 文件 (前提是 /home/alazeprt/server 目录存在)
```

## rm

删除文件或目录指令

```shell
rm /home/alazeprt/server/test.txt   # 删除 /home/alazeprt/server/test.txt 文件
rm -r /home/alazeprt/server/test   # 删除 /home/alazeprt/server/test 目录及其内容
rm -rf /home/alazeprt/server/test   # 强制删除 /home/alazeprt/server/test 目录及其内容
```

## mv

移动或重命名文件或目录指令

```shell
mv a.txt ./d/b.txt   # 将当前目录下的 a.txt 文件移动到 d 目录下并重命名为 b.txt 文件
mv ./test ./e/test2   # 将当前目录下的 test 文件移动到 e 目录下并重命名为 test2
mv a.txt ../   # 将当前目录下的 a.txt 文件移动到上一级目录
```

## cp

复制文件或目录指令

```shell
cp a.txt ./d/b.txt   # 将当前目录下的 a.txt 文件复制到 d 目录下并重命名为 b.txt 文件
cp -r ./test ./e/test2   # 将当前目录下的 test 文件复制到 e 目录下并重命名为 test2
cp a.txt ../   # 将当前目录下的 a.txt 文件复制到上一级目录
```

## cat

输出文件内容指令

```shell
cat ./server.properties   # 输出当前目录下的 server.properties 文件内容
```

## top

查看当前系统占用

```shell
top   # 查看当前系统的进程信息
q   # 退出 top 命令
```

## grep
搜索文件内容指令

```shell
grep "hello" ./server.properties   # 在当前目录下的 server.properties 文件中搜索 hello 关键字
```

## ps

查看进程信息指令

```shell
ps -ef   # 查看所有进程信息
ps -ef | grep java   # 查看所有提到 java 关键词的进程信息
```

## kill

杀死进程指令

```shell
kill 1234   # 关闭进程号为 1234 的进程
kill -9 1234   # 杀死进程号为 1234 的进程
kill -15 1234   # 强制杀死进程号为 1234 的进程
```

## chmod

修改文件或目录权限命令

```shell
chmod +x run.sh   # 给 run.sh 文件添加执行权限
chmod 777 test.txt   # 给 test.txt 文件添加所有权限
```

:::tip 提示
`777` 是什么意思?

**数字部分**:
- `1`: 执行权限 (`x`)
- `2`: 写权限 (`w`)
- `4`: 读权限 (`r`)

通过将多个数字相加, 代表有多个权限, 如 3 = 1 + 2 即 执行和写权限, 6 = 4 + 2 即代表有 读写 权限

**符号部分**:

第一位: 拥有者 (所有者)

第二位: 所属组

第三位: 其他人
:::

## chown

修改文件或目录所有者命令

```shell
chown alazeprt:server test.txt   # 将 test.txt 文件的所有者修改为 alazeprt, 所属组修改为 server
chown -R alazeprt:server test   # 递归修改 test 目录及其所有文件的所有者和所属组为 alazeprt
```

## nano

编辑文件命令

```shell
nano test.txt   # 打开 test.txt 文件进行编辑
```

在打开编辑页面后, 下面会显示各个操作的快捷键 (如 ^O 保存文件 (Ctrl + O))

## df

查看磁盘占用

```shell
df -h   # 查看磁盘使用情况, 以可读方式显示 (格式化单位为 GB, MB, KB 等)
```

## du

查看目录占用

```shell
du   # 查看当前目录下所有文件和目录的大小
du -h   # 查看当前目录下所有文件和目录的大小, 以可读方式显示 (格式化单位为 GB, MB, KB 等)
du -h -d 1   # 查看当前目录下 1 级子目录的大小, 以可读方式显示 (格式化单位为 GB, MB, KB 等)
```

## free

查看内存占用

```shell
free -h   # 查看内存使用情况, 以可读方式显示 (格式化单位为 GB, MB, KB 等)
```

## ip

查看 IP 地址信息

```shell
ip -a   # 查看所有网络接口的 IP 地址信息
```

## shutdown

关机或重启命令

```shell
shutdown -h now   # 立即关机
shutdown -r now   # 立即重启
shutdown -h +5   # 5 分钟后关机
```

## passwd

修改当前用户密码

```shell
passwd   # 修改当前用户密码
```

在输入后, 你需要先输入当前密码 (如果你不是 root 用户) 再输入新的密码两次

## wget

下载文件命令

```shell
wget https://www.example.com/file.zip   # 下载 https://www.example.com/file.zip 文件到当前目录
wget -O file.zip https://www.example.com/test.zip   # 下载 https://www.example.com/test.zip 文件到当前目录并重命名为 file.zip
```