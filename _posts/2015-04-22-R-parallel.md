---
layout: post
title: R语言 并行处理
description: "R Rstudio parallel foreach doparallel doMC dplyr "
category: [R]
tags : [ parallel ,foreach, doMC]
duoshuo: true
---



>具体的不懂，只记录实现

## parallel package

R自带的包，可以实现并行处理。

```r
library(parallel)
detectCores(logical = F) #获得实际核数
cl <- makeCluster(getOption("cl.cores", 4))  # 设置并行核数为4
clusterExport(cl=cl, varlist=c("text.var", "ntv", "gc.rate", "pos")) # 导入全局环境中的数据
clusterEvalQ(cl, require(lme4)) # 导入使用的包
# 开始计算
parSapply(cl, ...)
parLapply(cl, ...)
```

## foreach

Revolution R 提供的包，需要选择doParallel包(windows, Linux, Mac OSX 均可) 或者 doMC包(只适用于Linux，Mac OSX)作为后台

### doParallel

```r
library(foreach)
library(doParallel)
cl <- makeCluster(2)  # 设置并行核数
registerDoParallel(cl) # 注册并行
foreach(i=1:3) %dopar% sqrt(i) # 开始计算
```
> 不知何故，在Mac OSX 下采用doParallel速度特别慢， 比不用并行还慢，于是又尝试了doMC

### doMC

```r
library(foreach)
library(doMC)
registerDoMC(2) # 设置并行核数, 并注册并行
foreach(i=1:3) %dopar% sqrt(i) # 开始计算
```
可以通过下面命令，查看选择的后台包

```r
getDoParRegistered()
getDoParWorkers()
getDoParName()
```

## plyr中的并行
plyr中的并行程序采用foreach作为并行包， 所以在plyr中使用并行需完成上面提到的步骤。
以foreach，doMC包，ldply函数为例

```r
library(foreach)
library(doMC)
registerDoMC(2) # 设置并行核数, 并注册并行
ldply(.data, .fun = NULL, ..., .progress = "none", .inform = FALSE,
  .parallel = T, .paropts = list(.export = c('your_data'), .packages=c('your_package') ), .id = NA)
  # .parallel = T 开启并行
  # .paropts = list(.export, .packages) 这是一个list， 里面的.export(导入用到的数据)， .package(导入需要的包)都是foreach：：foreach（）中的参数，可以??foreach 查看具体细节
```





