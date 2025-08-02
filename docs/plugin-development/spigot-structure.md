# Spigot 插件结构

## 目录结构

一个基本的 Spigot 插件的目录结构如下:

```text
|- build.gradle (Gradle/Groovy DSL)
|- build.gradle.kts (Gradle/Kotlin DSL)
|- pom.xml (Maven)
|- src
|  |- main
|  |  |- java
|  |  |  |- top
|  |  |  |  |- alazeprt
|  |  |  |  |  |- myplugin
|  |  |  |  |  |  |- MyPlugin.java
|  |  |- resources
|  |  |  |- plugin.yml
|- settings.gradle (Gradle/Groovy DSL)
|- settings.gradle.kts (Gradle/Kotlin DSL)
```

- `plugin.yml`: 插件的基本信息配置, 包括插件名, 主类所在位置, 插件版本等
- `MyPlugin.java`: 插件的主类

## 引入依赖

:::info 信息
引入依赖的教程来自 [Spigot Maven](https://www.spigotmc.org/wiki/spigot-maven/) 和 [Spigot Gradle](https://www.spigotmc.org/wiki/spigot-gradle/)
:::

:::code-group


```xml [pom.xml]
<!-- 将这段内容添加到 <repositories> 标签中 -->
<repository>
    <id>spigot-repo</id>
    <url>https://hub.spigotmc.org/nexus/content/repositories/snapshots/</url>
</repository>

<!-- 将这段内容添加到 <dependencies> 标签中 -->
<dependency>
    <groupId>org.spigotmc</groupId>
    <artifactId>spigot-api</artifactId>
    <version>1.16.5-R0.1-SNAPSHOT</version> <!-- 可以根据自己需求修改版本 -->
    <scope>provided</scope>
</dependency>
```

```groovy [build.gradle]
repositories {
    // 将下面的内容添加到 repositories 代码块中
    maven { url 'https://hub.spigotmc.org/nexus/content/repositories/snapshots/' }
}

dependencies {
    // 将下面的内容添加到 dependencies 代码块中
    compileOnly('org.spigotmc:spigot-api:1.16.5-R0.1-SNAPSHOT') // 可以根据自己需求修改版本
}


```

```kotlin [build.gradle.kts]
repositories {
    // 将下面的内容添加到 repositories 代码块中
    maven("https://hub.spigotmc.org/nexus/content/repositories/snapshots/")
}

dependecies {
    // 将下面的内容添加到 dependencies 代码块中
    compileOnly("org.spigotmc:spigot-api:1.16.5-R0.1-SNAPSHOT") // 可以根据自己需求修改版本
}
```

:::

## 插件信息配置

Spigot 插件的基本信息配置在 `plugin.yml` 中, 它包含以下信息:

```yaml
name: MyPlugin   # 插件名, 必填
main: top.alazeprt.myplugin.MyPlugin   # 插件主类, 必填
version: 1.0.0   # 插件版本, 必填
api-version: 1.13   # Spigot API 版本, 选填, 推荐填 1.13 (可以填 1.13 以上的值)
description: A test plugin written by alazeprt   # 插件描述, 选填
load: POSTWORLD   # 插件加载时机, 选填, 可选 STARTUP (启动时) 或 POSTWORLD (世界加载后)
author: alazeprt   # 插件作者, 选填
authors: [alazeprt, johndoe]   # 插件作者列表, 可以填多个, 选填
website: server.alazeprt.top   # 插件的网站, 选填
depend: [Vault]   # 插件必需依赖, 选填, 填写插件名 (大小写敏感)
softdepend: [PlaceholderAPI]   # 插件可选依赖, 选填, 填写插件名 (大小写敏感)
prefix: MyPlugin   # 插件在后台加载时的前缀, 选填
loadbefore: [Vault]   # 插件在哪些插件之前加载, 选填, 填写插件名 (大小写敏感)
libraries:   # 插件依赖的库, 选填, 与 Gradle 的依赖配置格式相同 (填写后就不需要将依赖编译到 JAR 包内)
  - com.squareup.okhttp3:okhttp:4.9.0
commands:   # 插件命令, 若有注册则必填
  mycommand:   # 具体的命令
    description: My test command   # 命令描述, 必填
    aliases: [mycmd, myc]   # 命令别名, 选填 (填写的项如 /mycmd 等价于 /mycommand)
    permission: myplugin.mycommand   # 命令权限, 选填 (若不填写则默认没有权限限制)
    usage: /mycommand <arg1> <arg2>   # 命令用法, 选填
    permission-message: 你没有权限使用该命令!   # 无权限时的提示信息, 选填
permissions:   # 插件注册的权限, 选填
  myplugin.mycommand:   # 权限的具体名称
    default: op   # 默认是否有权限, 选填: true (默认赋予), false (默认不赋予), op (仅管理员)
    description: Allows the user to use the /mycommand command.   # 权限描述, 选填
  myplugin.admin:
    default: op
    children:   # 拥有该权限后自动拥有的子权限 
      myplugin.mycommand: true
```

## 插件主类

插件主类需要继承 `JavaPlugin` 类才能被 Spigot 识别, 以下是一个常见的插件主类:

```java
package top.alazeprt.myplugin;

import org.bukkit.plugin.java.JavaPlugin;

public class MyPlugin extends JavaPlugin {
    @Override // 一个注解, 代表覆盖(重写) JavaPlugin 这一抽象类实现的接口 Plugin 的方法 onEnable()
    public void onEnable() {
        // 插件启用时执行的代码 (一般把代码放在这里而不是 onLoad() 方法中)
    }
    
    @Override // 与上述同理
    public void onDisable() {
        // 插件禁用时执行的代码
    }
    
    @Override
    public void onLoad() {
        // 插件加载时执行的代码
    }
}
```

插件主类继承了 `JavaPlugin` 类, 你同时也可以调用 `JavaPlugin` 这一类内的一些方法, 如:
- `getLogger()`: 获取日志对象, 可以用它来输出日志
- `getCommand(String)`: 获取在 `plugin.yml` 中注册的命令对象, 可以用于注册命令执行器
- `getDataFolder()`: 获取插件数据文件夹的路径, 一般会在这里释放配置文件, 返回一个 `File` 对象
- `getResource(String)`: 获取插件的资源文件 (`resources` 目录下的文件), 返回一个 `InputStream` 对象
- `getServer()`: 获取插件的服务器对象, 也可以使用 `Bukkit.getServer()` 方法获取

更多的方法请见 https://jd.papermc.io/paper/org/bukkit/plugin/java/JavaPlugin.html

## 命令注册

首先, 你需要在 `plugin.yml` 定义你的命令:

```yaml
commands:
  mycommand:
    description: My test command
```

然后, 需要编写一个实现命令执行器 (`CommandExecutor`) 的类, 并在 `onEnable()` 方法中注册命令:

以下是一个简单的命令执行器类:

```java
package top.alazeprt.myplugin.command;

import org.bukkit.command.CommandExecutor;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;

public class MyCommandExecutor implements CommandExecutor {
    @Override // 重写 CommandExecutor 的 onCommand() 方法
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        // 参数解释: sender: 命令发送者, command: 触发的命令对象, label: 命令的别名, args: 命令参数
        sender.sendMessage("Hello, world!"); // 调用 sendMessage() 方法向命令发送者发送消息
        return true; // 返回 false 表示命令不合法, 返回 true 表示命令合法 (没什么太大的区别)
    }
}
```

最后, 在 `onEnable()` 方法中注册命令:

```java
package top.alazeprt.myplugin;

import org.bukkit.plugin.java.JavaPlugin;

public class MyPlugin extends JavaPlugin {
    @Override
    public void onEnable() {
        // 注册命令
        getCommand("mycommand").setExecutor(new MyCommandExecutor());
    }
}
```

## 监听事件

监听事件并不需要注册, 所以, 你只需要先编写一个实现监听器接口 (`Listener`) 的类:

```java
package top.alazeprt.myplugin.listener;

import org.bukkit.event.Listener;
import org.bukkit.event.EventHandler;

public class MyListener implements Listener {
    // 监听器代码
    // 示例: 监听玩家加入的事件
    @EventHandler   // 一个注解, 代表这个方法需要监听某种事件, 否则方法不会被服务器调用
    public void onPlayerJoin(PlayerJoinEvent event) { // 事件类型为 PlayerJoinEvent, 可以在 Paper API 找到更多的事件
        event.getPlayer().sendMessage("Welcome!"); // 从事件中获取玩家对象后调用发送消息的方法
    }
}
```

然后, 在 `onEnable()` 方法中注册监听器:

```java
package top.alazeprt.myplugin;

import org.bukkit.plugin.java.JavaPlugin;

public class MyPlugin extends JavaPlugin {
    @Override
    public void onEnable() {
        // 注册监听器
        getServer().getPluginManager().registerEvents(new MyListener(), this);  // 第一个参数是一个实例化的监听器类, 第二个参数是插件实例
    }
}
```

:::tip 提示
更多监听的事件请见 https://jd.papermc.io/paper/1.21.8/org/bukkit/event/package-summary.html
:::

## 配置文件

首先, 你需要在 `src/main/resources` 文件夹内放入你的配置文件 (假设文件名为 `config.yml`)

接着, 在加载插件时, 释放配置文件到插件的文件夹:

```java
package top.alazeprt.myplugin;

import org.bukkit.plugin.java.JavaPlugin;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.configuration.file.YamlConfiguration;

import java.io.File;

public class MyPlugin extends JavaPlugin {
    private File configFile;
    private FileConfiguration config;
    
    @Override
    public void onEnable() {
        configFile = new File(getDataFolder(), "config.yml"); // 新建一个文件 (File) 对象, 指向插件数据文件夹下的 config.yml
        if (!configFile.exists()) { // 如果配置文件不存在
            saveResource("config.yml", false); // 调用 saveResource() 方法释放配置文件到插件文件夹
        }
        config = YamlConfiguration.loadConfiguration(configFile); // 加载释放后的配置文件并存储到 config 变量中 (此处仅支持 YAML 配置文件)
    }
    
    // 获取配置文件的配置对象
    public FileConfiguration getConfig() {
        return config;
    }
}
```

## 任务调度

Bukkit 内置一个 `BukkitScheduler` 任务调度器, 可以用来执行许多类型的任务:

```java
package top.alazeprt.myplugin;

import org.bukkit.plugin.java.JavaPlugin;
import org.bukkit.Bukkit;
import org.bukkit.scheduler.BukkitScheduler;

public class MyPlugin extends JavaPlugin {
    
    @Override
    public void onEnable() {
        BukkitScheduler scheduler = Bukkit.getScheduler(); // 获取任务调度器对象
        
        // 第一个参数为插件实例, 第二个参数是一个 Runnable 对象, 代表一个任务
        scheduler.runTask(this, () -> { // 这是一个 lambda 表达式, 代表一个 Runnable 对象
            // 任务代码
        }); // 运行一个同步任务
        
        // 第一个参数为插件实例, 第二个参数是一个 Runnable 对象, 代表一个任务
        scheduler.runTaskAsynchronously(this, () -> {
            // 任务代码 
        }); // 运行一个异步任务, 不会影响接下来的代码执行, 不过不支持一些世界修改类的 API
        
        // 第一个参数为插件实例, 第二个参数是一个 Runnable 对象, 代表一个任务, 第三个参数为延迟时长 (单位: ticks)
        scheduler.runTaskLater(this, () -> {
            // 任务代码
        }, 20L); // 运行一个延迟 20 ticks (即 1 秒) 后执行的同步任务
        
        // 第一个参数为插件实例, 第二个参数是一个 Runnable 对象, 代表一个任务, 第三个参数为延迟时长 (单位: ticks)
        scheduler.runTaskLaterAsynchronously(this, () -> {
            // 任务代码
        }, 20L); // 运行一个延迟 20 ticks (即 1 秒) 后执行的异步任务
        
        // 第一个参数为插件实例, 第二个参数是一个 Runnable 对象, 代表一个任务, 第三个参数为延迟时长 (单位: ticks), 第四个参数为周期时长 (单位: ticks)
        scheduler.runTaskTimer(this, () -> {
            // 任务代码
        }, 0L, 20L); // 运行一个周期性同步任务, 即每 20 ticks (即 1 秒) 执行一次
        
        // 第一个参数为插件实例, 第二个参数是一个 Runnable 对象, 代表一个任务, 第三个参数为延迟时长 (单位: ticks), 第四个参数为周期时长 (单位: ticks)
        scheduler.runTaskTimerAsynchronously(this, () -> {
            // 任务代码
        }, 10L, 20L); // 在 10 ticks 后运行一个周期性异步任务, 即每 20 ticks (即 1 秒) 执行一次 
        
    }
}
```
