# Java

想必大多数人都听说过 Java 这一门编程语言, 但这一门编程语言下还有许多很基础的概念需要了解

## JRE & JDK

| 概念 | JRE                      | JDK                                      |
|----|--------------------------|------------------------------------------|
| 全名 | Java Runtime Environment | Java Development Kit                     |
| 译名 | Java 运行环境                | Java 开发工具包                               |
| 作用 | 仅能运行 Java 程序             | 包含 JRE, 有开发调试 Java 程序所需的工具, **推荐在服务器使用** |

## 发行版

相信大家都听过 Zulu, Oracle 等 Java 发行版, 那这些 Java 发行版有什么关系呢?

在 2006 年, OpenJDK 发布了, OpenJDK 相当于官方版 JDK, 只会更新基本的语法及bug修复, 而 Zulu, Oracle 这一类 JDK 发行版都基于 OpenJDK, 它们会对 OpenJDK 修改 (包括但不限于性能优化, 更好的工具包) 后再次打包发布, 就是我们所见到的各种发行版了

## 版本 (版本号)

Java 有许多版本, 如大家熟知的8, 17, 21, 这些版本都有自己对应的功能更新, 每个版本都有自己的维护周期, 高版本一般可以对低版本兼容

LTS (Long-Term Support) 版本即长期支持版本, 会有更长的维护周期, 一般企业级应用都会选择 LTS 版本的 Java, 常见的 LTS 版本包括 8, 11, 17, 21

## Java 版本的选择

Java 版本要根据你的服务端版本选择, 具体如下表: 

| 服务端版本           | 最低 Java 版本 | 推荐 Java 版本 |
|-----------------|------------|------------|
| 1.0 ~ 1.11.2    | 6          | 8          |
| 1.12 ~ 1.16.4   | 8          | 11         |
| 1.16.5          | 8          | 16         |
| 1.17 ~ 1.17.1   | 16         | 17         |
| 1.18 ~ 1.20.4   | 17         | 21         |
| 1.20.5 ~ latest | 21         | 21         |


:::warning 警告
当你使用 1.16.5 及以下版本的 Forge 服务端时, 请首先尝试使用 Java 8 启动
:::

## Java 发行版的比较

Minecraft Java版的服务器需要安装 Java 来运行, 相信大家面对眼花缭乱的众多的 Java 发行版感到困惑而不知道选哪个, 接着让我们比较一下各个发行版:

:::info 信息
以下比较的分数满分均为10分
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

