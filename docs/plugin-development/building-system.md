# 构建系统

构建系统, 顾名思义, 是用来编译软件的, 它标准化了编译, 测试, 打包和依赖管理的流程, 提高了开发效率, 通过简洁的配置声明项目结构和任务, 轻松管理项目第三方依赖, 确保构建的顺利进行

接着, 将会讲解 JVM 语言的两大构建系统: Maven 和 Gradle, 以及它们的一些常用命令

## Maven

Maven 是 Java 开发中一个成熟稳定的构建系统, 它的标准化程度较强, 明确定义了项目结构, 依赖关系和构建的过程 (生命周期), 它以 `pom.xml` 作为构建系统的配置文件

## Gradle

Gradle 是另一个基于 Groovy / Kotlin 的构建系统, 相比 Maven 更加灵活, 可以配置更复杂的构建流程, 速度相比 Maven 也更快 它以 `build.gradle` (Groovy DSL) / `build.gradle.kts` (Kotlin DSL) 作为构建系统的配置文件, `gradle.properties` 作为属性配置文件, `settings.gradle` (Groovy DSL) / `settings.gradle.kts` (Kotlin DSL) 作为项目的一些设置的配置文件

:::info 信息
Groovy DSL 和 Kotlin DSL 是 Gradle 两种不同的 DSL 语言, 它们的语法和语义不同, 但它们的目标是相同的, 都是为了简化构建脚本的编写

如今来说, 推荐使用 Kotlin DSL, 因为它更加简洁, 功能更强大
:::

## 常见的构建系统文件结构

:::code-group

```xml [pom.xml]
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <!-- 项目信息 -->
    <groupId>top.alazeprt.aqqbot</groupId> <!-- 项目包名 -->
    <artifactId>aqqbot</artifactId> <!-- 项目名 -->
    <version>1.0-SNAPSHOT</version> <!-- 项目版本 -->
    <packaging>jar</packaging>

    <!-- 项目属性 -->
    <properties>
        <java.version>21</java.version> <!-- 项目使用的 Java 版本 -->
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
    
    <!-- 项目依赖的仓库 -->
    <repositories>
        <repository>
            <id>jitpack</id> <!-- 仓库 ID, 随便填 -->
            <url>https://jitpack.io</url> <!-- 仓库地址, 此处为 JitPack 仓库 -->
        </repository>
    </repositories>
    
    <!-- 项目依赖 -->
    <dependencies>
        <dependency>
            <groupId>top.alazeprt.aonebot</groupId> <!-- 依赖的项目包名 -->
            <artifactId>AOneBot</artifactId> <!-- 依赖的项目名 -->
            <version>1.0-SNAPSHOT</version> <!-- 依赖的项目版本 -->
            <scope>compile</scope> <!-- 依赖的范围, 默认为 compile -->
        </dependency>
    </dependencies>

    <!-- 构建流程 -->
    <build>
        <!-- 默认构建目标(命令) -->
        <defaultGoal>clean package</defaultGoal>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId> <!-- 用于编译的插件 -->
                <version>3.13.0</version>
                <configuration>
                    <source>${java.version}</source> <!-- 项目属性中的 java.version 的值 -->
                    <target>${java.version}</target>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-shade-plugin</artifactId> <!-- 用于将依赖打包到 jar 包中的插件 -->
                <version>3.5.3</version>
                <executions>
                    <execution>
                        <phase>package</phase>
                        <goals>
                            <goal>shade</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
        <resources> <!-- 资源文件配置 -->
            <resource>
                <directory>src/main/resources</directory>
                <filtering>true</filtering>
            </resource>
        </resources>
    </build>
</project>
```

```groovy [build.gradle]
plugins { // 使用的插件
    id 'java' // 默认插件 (支持 java)
    id 'com.gradleup.shadow' version '8.3.5' // 用于将依赖打包到 jar 包的插件
}

group = 'top.alazeprt.aqqbot' // 项目包名
version = '1.0-SNAPSHOT' // 项目版本

repositories { // 项目依赖的仓库
    mavenCentral() // 官方默认仓库
    maven { url 'https://jitpack.io' } // JitPack 仓库 
    mavenLocal() // 本地仓库
}

dependencies { // 项目依赖
    compileOnly('top.alazeprt.aonebot:AOneBot:1.0-SNAPSHOT') // 依赖的项目 (包名:项目名:版本)
}
```

```kotlin [build.gradle.kts]
plugins { // 使用的插件
    id("java") // 默认插件 (支持 java)
    id("com.gradleup.shadow") version "8.3.5" // 用于将依赖打包到 jar 包的插件
}

group = "top.alazeprt.aqqbot" // 项目包名
version = "1.0-SNAPSHOT" // 项目版本

repositories { // 项目依赖的仓库
    mavenCentral() // 官方默认仓库
    maven("https://jitpack.io") // JitPack 仓库
    mavenLocal() // 本地仓库
}

dependencies { // 项目依赖
    implementation("top.alazeprt.aonebot:AOneBot:1.0-SNAPSHOT") // 依赖的项目 (包名:项目名:版本)
}
```

:::

## 依赖的引入

一般来说, 你需要引入的依赖可能会直接提供现成的 `build.gradle.kts` 或 `pom.xml` 文件, 此时你可以直接复制它们到你的项目中

如果没有给具体的文件, 他们可能会提供如下的表格 (以下是一个示例):

> Repository
> | Name | URL |
> | --- | --- |
> | papermc | https://repo.papermc.io/repository/maven-public/ |
> 
> Dependency
> | Group ID | Artifact ID | Version |
> | -------- | ----------- | ------- |
> | com.velocitypowered | velocity-api | 3.4.0-SNAPSHOT |

此时, 你需要提取出所需要的仓库 (Repository 部分的 URL) 和 依赖 (Dependency 部分), 并根据上述的格式进行导入

:::code-group


```xml [pom.xml]
<!-- 将这段内容添加到 <repositories> 标签中 -->
<repository>
    <id>papermc</id>
    <url>https://repo.papermc.io/repository/maven-public/</url> <!-- 根据上面的 Repository 的 URL 填 -->
</repository>

<!-- 将这段内容添加到 <dependencies> 标签中 -->
<dependency>
    <groupId>com.velocitypowered</groupId>
    <artifactId>velocity-api</artifactId>
    <version>3.4.0-SNAPSHOT</version> <!-- 根据上面的 Dependency 的版本填 -->
    <scope>provided</scope> <!-- 依赖范围, 这里使用 provided (仅编译时需要使用) -->
</dependency>
```

```groovy [build.gradle]
repositories { // 项目依赖的仓库
    mavenCentral() // 官方默认仓库
    maven { url 'https://repo.papermc.io/repository/maven-public/' } // 仓库地址, 根据上面的 Repository 的 URL 填
}

dependencies { // 项目依赖
    compileOnly('com.velocitypowered:velocity-api:3.4.0-SNAPSHOT') // 依赖的项目 (包名:项目名:版本), 这里使用 compileOnly (仅编译时需要使用)
}


```

```kotlin [build.gradle.kts]
repositories { // 项目依赖的仓库
    mavenCentral() // 官方默认仓库
    maven("https://repo.papermc.io/repository/maven-public/") // 根据上面的 Repository 的 URL 填
}

dependecies { // 项目依赖
    compileOnly("com.velocitypowered:velocity-api:3.4.0-SNAPSHOT") // 根据上面的 Dependency 的信息填, 这里使用 compileOnly (仅编译时需要使用)
}
```

:::

:::tip 提示
Gradle 中引入依赖的 implementation, compileOnly 这些都是什么意思?

1. `implementation` (Maven 中的 `compile`): 在编译和运行的时候都需要使用 (如: gson 这一 json 库, 在服务器的运行环境没有, 编译的时候也需要用到)
2. `compileOnly` (Maven 中的 `provided`): 仅在编译的时候需要使用 (如: velocity-api 写 Velocity 插件, 服务器运行环境中已经有了 velocity-api, 就不需要在运行时添加)
3. `runtimeOnly` (Maven 中的 `runtime`): 在运行的时候需要使用
:::

## Wrapper

相信你在很多构建的场景都看到了 Gradle Wrapper, 那它是什么呢?

Wrapper 是一个小工具, 在构建时它会自动下载完整的特定版本的 Gradle 环境到本地, 并在后续的构建中使用, 这样可以避免不同环境, 版本之间的配置问题, 节省构建时间, 同时也不需要用户预先安装构建系统的环境

## 常用命令 (Maven)

| 命令                | 描述              |
|-------------------|-----------------|
| `mvn clean`       | 清除项目构建生成的所有内容   |
| `mvn compile`     | 编译项目            |
| `mvn test`        | 测试项目            |
| `mvn package`     | 打包项目 (`.jar`)   |
| `mvn install`     | 安装项目到本地仓库       |
| `mvn deploy`      | 发布项目到远程仓库       |
| `mvn shade:shade` | 在打包时同时将依赖打包到文件内 |

## 常用命令 (Gradle)

| 命令                           | 描述                |
|------------------------------|-------------------|
| `gradle clean`               | 清除项目构建生成的所有内容     |
| `gradle classes`             | 编译项目              |
| `gradle build`               | 编译并测试项目           |
| `gradle test`                | 测试项目              |
| `gradle jar`                 | 打包项目 (`.jar`)     |
| `gradle publishToMavenLocal` | 安装项目到本地仓库         |
| `gradle publish`             | 发布项目              |
| `gradle shadowJar`           | 在打包时同时将依赖打包到文件内   |
| `gradle init`                | 初始化一个 Gradle 项目   |
| `gradle wrapper`             | 生成 Gradle Wrapper |