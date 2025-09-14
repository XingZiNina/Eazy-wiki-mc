# JVM 优化

大家从前面的教程都知道了服务器的基本启动参数, 本篇会更加详细地介绍

## Java 发行版专用参数

:::warning 注意
以下参数均为 JVM 参数, 需要在 ```
java```
 和 ```
-jar```
 参数中间添加
这些参数均摘自笨蛋文档与阿呆皮革厂
:::

:::warning 注意
通常情况下 各发行版JVM参数可混用但无效果 且参数并不是越多越好
添加过多参数 在一些情况下导致性能下降
~~10x slower(doge)~~
:::

## 自定义参数配置

### JVM 内存管理优化

```txt
-XX:NewRatio=3                #调整新老生代GC比例减小老生代GC压力，一般不用
-XX:SurvivorRatio=4           #调整生命周期，Eden区:Survivor区
-XX:LargePageSizeInBytes=2m   #使用2MB大页内存（减少内存碎片，需系统支持）
```

### 垃圾回收（GC）优化

```txt
-XX:+UseG1GC                            # 使用G1垃圾收集器
-XX:G1HeapRegionSize=32m                # 每个Region大小32MB（根据堆大小调整，1-32m）
-XX:MaxGCPauseMillis=50                 # 目标最大GC停顿时间50ms（减少卡顿）
-XX:G1NewSizePercent=20                 # 新生代最小占比20%
-XX:G1MaxNewSizePercent=40              # 新生代最大占比40%
-XX:G1RSetUpdatingPauseTimePercent=5    # 更新RSet的停顿时间占比
-XX:G1ReservePercent=15                 # 预留15%内存防止OOM
```

### 性能与卡顿优化

```txt
-XX:-UseBiasedLocking                  #禁用偏向锁（减少同步开销）
-XX:+AggressiveOpts                    # 启用激进优化（Java 8及以下有效）
-XX:+UseAESIntrinsics                  # 启用AES硬件加速
-XX:+UseFastAccessorMethods            # 优化原始类型访问
-Djava.awt.headless=true               # 强制无头模式（无GUI，节省资源）
```

### 模组 / 插件兼容优化

```txt
-Dfml.ignoreInvalidMinecraftCertificates=true      # 忽略无效的Minecraft证书（模组加载用）
-Dfml.ignorePatchDiscrepancies=true                # 忽略模组补丁差异（避免启动失败）
```

## GraalVM EE

### G1GC 参数:

```txt
`-XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=28 -XX:G1MaxNewSizePercent=50 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=15 -XX:G1MixedGCCountTarget=3 -XX:InitiatingHeapOccupancyPercent=20 -XX:G1MixedGCLiveThresholdPercent=90 -XX:SurvivorRatio=32 -XX:G1HeapWastePercent=5 -XX:MaxTenuringThreshold=1 -XX:+PerfDisableSharedMem -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:+UseNUMA -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:NmethodSweepActivity=1 -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:AllocatePrefetchStyle=3 -XX:+AlwaysActAsServerClassMachine -XX:+EagerJVMCI -XX:+UseStringDeduplication -XX:+UseAES -XX:+UseAESIntrinsics -XX:+UseFMA -XX:+UseLoopPredicate -XX:+RangeCheckElimination -XX:+OptimizeStringConcat -XX:+UseThreadPriorities -XX:+OmitStackTraceInFastThrow -XX:+RewriteBytecodes -XX:+RewriteFrequentPairs -XX:+UseFPUForSpilling -XX:+UseFastStosb -XX:+UseNewLongLShift -XX:+UseVectorCmov -XX:+UseXMMForArrayCopy -XX:+UseXmmI2D -XX:+UseXmmI2F -XX:+UseXmmLoadAndClearUpper -XX:+UseXmmRegToRegMoveAll -XX:+EliminateLocks -XX:+DoEscapeAnalysis -XX:+AlignVector -XX:+OptimizeFill -XX:+EnableVectorSupport -XX:+UseCharacterCompareIntrinsics -XX:+UseCopySignIntrinsic -XX:+UseVectorStubs -XX:UseAVX=2 -XX:UseSSE=4 -XX:+UseFastJNIAccessors -XX:+UseInlineCaches -XX:+SegmentedCodeCache -Djdk.nio.maxCachedBufferSize=262144 -Dgraal.UsePriorityInlining=true -Dgraal.Vectorization=true -Dgraal.OptDuplication=true -Dgraal.DetectInvertedLoopsAsCounted=true  -Dgraal.LoopInversion=true -Dgraal.VectorizeHashes=true -Dgraal.EnterprisePartialUnroll=true -Dgraal.VectorizeSIMD=true -Dgraal.StripMineNonCountedLoops=true  -Dgraal.SpeculativeGuardMovement=true -Dgraal.TuneInlinerExploration=1 -Dgraal.LoopRotation=true -Dgraal.OptWriteMotion=true -Dgraal.WriteableCodeCache=true -Dgraal.CompilerConfiguration=enterprise`
```

```txt
GraalVM EE专用的G1GC优化参数集，包含大量性能调优选项：
- 启用G1GC并设置200ms的最大停顿时间目标
- 解锁实验性和诊断性VM选项
- 禁用显式GC调用(System.gc())
- 启动时预触摸所有内存页以减少运行时缺页异常
- 精细调整G1GC的各项参数（区域大小、新生代比例、混合GC等）
- 启用NUMA感知内存分配
- 优化JIT编译策略（内联、向量化、循环优化等）
- 启用硬件特性加速（AES、FMA、AVX2、SSE4等）
- 配置代码缓存大小和分段策略
- 启用GraalVM企业版特有的编译器优化功能
```

### ZGC 参数: (建议用于 Java 24+ 版本)

```txt
`-XX:+UseZGC -XX:-ZProactive -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:+PerfDisableSharedMem -XX:+UseNUMA -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:NmethodSweepActivity=1 -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:AllocatePrefetchStyle=1 -XX:+AlwaysActAsServerClassMachine -XX:+EagerJVMCI -XX:+UseStringDeduplication -XX:+UseAES -XX:+UseAESIntrinsics -XX:+UseFMA -XX:+UseLoopPredicate -XX:+RangeCheckElimination -XX:+OptimizeStringConcat -XX:+UseThreadPriorities -XX:+OmitStackTraceInFastThrow -XX:+RewriteBytecodes -XX:+RewriteFrequentPairs -XX:+UseFPUForSpilling -XX:+UseFastStosb -XX:+UseNewLongLShift -XX:+UseVectorCmov -XX:+UseXMMForArrayCopy -XX:+UseXmmI2D -XX:+UseXmmI2F -XX:+UseXmmLoadAndClearUpper -XX:+UseXmmRegToRegMoveAll -XX:+EliminateLocks -XX:+DoEscapeAnalysis -XX:+AlignVector -XX:+OptimizeFill -XX:+EnableVectorSupport -XX:+UseCharacterCompareIntrinsics -XX:+UseCopySignIntrinsic -XX:+UseVectorStubs -XX:UseAVX=2 -XX:UseSSE=4 -XX:+UseFastJNIAccessors -XX:+UseInlineCaches -XX:+SegmentedCodeCache -Djdk.nio.maxCachedBufferSize=262144 -Dgraal.UsePriorityInlining=true -Dgraal.Vectorization=true -Dgraal.OptDuplication=true -Dgraal.DetectInvertedLoopsAsCounted=true -Dgraal.LoopInversion=true -Dgraal.VectorizeHashes=true -Dgraal.EnterprisePartialUnroll=true -Dgraal.VectorizeSIMD=true -Dgraal.StripMineNonCountedLoops=true -Dgraal.SpeculativeGuardMovement=true -Dgraal.TuneInlinerExploration=1 -Dgraal.LoopRotation=true -Dgraal.OptWriteMotion=true -Dgraal.CompilerConfiguration=enterprise`
```

```txt
GraalVM EE专用的ZGC优化参数集，适用于低延迟场景：
- 启用ZGC垃圾收集器（适合超大堆内存和极低延迟需求）
- 禁用ZGC的主动GC周期（-ZProactive）
- 包含与G1GC版本相似的JIT编译优化配置
- 针对向量化、内联和循环优化进行了特殊调优
- 使用NUMA感知内存分配提高多socket系统性能
- 配置代码缓存和编译策略以适应长时间运行的服务器负载
- 启用硬件加速指令集（AVX2、SSE4等）提升性能
注意：ZGC需要较新版本的Java（推荐Java 24+）以获得最佳性能和稳定性
```

## OpenJ9

```txt
`-XX:+IdleTuningGcOnIdle -XX:+UseAggressiveHeapShrink -XX:-OmitStackTraceInFastThrow -XX:+UseFastAccessorMethods -XX:+OptimizeStringConcat -Xshareclasses:allowClasspaths -Xshareclasses:cacheDir=./cache -Xaot -XX:+UseCompressedOops -XX:ObjectAlignmentInBytes=256 -Xshareclasses -XX:SharedCacheHardLimit=800M -Xtune:virtualized -XX:+TieredCompilation -XX:InitialTenuringThreshold=5 -Dlog4j2.formatMsgNoLookups=true -XX:-DisableExplicitGC`
```

```txt
OpenJ9虚拟机特有的优化参数：
- IdleTuningGcOnIdle 在空闲时执行GC，减少运行时停顿
- UseAggressiveHeapShrink 更积极地收缩堆内存
- 共享类缓存（Xshareclasses）减少启动时间和内存占用
- AOT（Ahead-Of-Time）编译提升启动性能
- 使用压缩指针（UseCompressedOops）减少内存使用
- 设置对象对齐字节数优化内存布局
- 分层编译（TieredCompilation）平衡启动速度和运行性能
- 调整初始晋升阈值优化对象生命周期管理
- 禁用显式GC保持自动内存管理策略
```

## Dragonwell

### Java 8 版本参数:

```txt
`-XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+AlwaysActAsServerClassMachine -XX:+ParallelRefProcEnabled -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:+PerfDisableSharedMem -XX:+AggressiveOpts -XX:+UseFastAccessorMethods -XX:MaxInlineLevel=15 -XX:MaxVectorSize=32 -XX:+UseCompressedOops -XX:ThreadPriorityPolicy=1 -XX:+UseDynamicNumberOfGCThreads -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=350M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseFPUForSpilling -XX:+UseBigDecimalOpt`
```

```txt
Alibaba Dragonwell 8 特化优化参数：
- 解锁实验性和诊断选项以访问更多优化功能
- 启用服务器级机器优化策略
- 并行处理引用对象提高GC效率
- 预触摸内存页减少运行时缺页异常
- 使用动态GC线程数根据负载自动调整
- 设置代码缓存大小和编译限制优化JIT行为
- 启用FPU寄存器溢出提高浮点性能
- BigDecimal操作优化提升数值计算性能
- 向量大小和内联级别调整优化热点代码
```

### Java 11 版本参数:

```txt
`-XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:ThreadPriorityPolicy=1 -XX:AllocatePrefetchStyle=3 -XX:+UseVtableBasedCHA -Dcom.alibaba.enableFastSerialization=true -XX:+UseBigDecimalOpt -XX:+ReduceNMethodSize`
```

```txt
Alibaba Dragonwell 11 特化优化参数：
- 针对Java 11版本的深度优化参数集
- 更精细的代码缓存分区管理（NonNMethod/Profiled/NonProfiled）
- 使用基于vtable的类层次分析优化虚方法调用
- 启用快速序列化优化（Alibaba扩展特性）
- 向量CMOV指令使用提高条件移动操作性能
- 关键Java线程优先级设置确保关键服务响应
- 内存预取策略优化提升内存访问效率
- 方法大小减少优化降低代码缓存压力
- BigDecimal操作优化保持与JDK8版本的性能一致性
```
