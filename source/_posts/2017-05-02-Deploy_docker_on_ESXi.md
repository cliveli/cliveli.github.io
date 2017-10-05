---
layout:     post
title:      "通过docker-machine直接在esxi上部署和管理docker"
subtitle:   ""
date:       2017-05-02
author:     "Clive Li"
categories:  Tech
tags:
    - Docker 
    - ESXi
---

简单介绍下怎么通过docker-machine以及它的[vsphere driver](https://docs.docker.com/machine/drivers/vsphere/)来直接在esxi上创建／管理／部署docker环境

## 为什么要这样做？
1. 通过docker-machine可以很方便的部署和管理在esxi上的docker containers
2. 不想另外在esxi上再创建一个Linux instance来跑docker
3. Mac上没有esxi的客户端

<!-- more -->

## 原理
说白了其实很简单，docker-machine会通过vsphere驱动和esxi的API通讯（需要用到[govc](https://github.com/vmware/govmomi/tree/master/govc)），在esxi上直接创建一个虚拟机并且运行boot2docker的镜像。接下来就和Mac上的docker-machine是一码事了，只是Mac上的boot2docker是跑在virtual box里。这儿我们是把它运行在另外一台esxi上。


## 步骤
这儿跳过怎么安装esxi，docker-machine的步骤了，请自行查找。

### 安装go和govc
具体请查看 <https://github.com/vmware/govmomi/tree/master/govc>


### 创建machine
这儿需要esxi的ip，用户名，密码
~~~ bat
docker-machine create -d vmwarevsphere --vmwarevsphere-username=<<vSphere USER>> \
--vmwarevsphere-password=<<vSphere PASSWORD>> \
 --vmwarevsphere-vcenter=<<ESXi management IP>> \
 --vmwarevsphere-datacenter=ha-datacenter \
  --vmwarevsphere-datastore=datastore1 \
  --vmwarevsphere-boot2docker-url=https://releases.rancher.com/os/latest/rancheros.iso \
   --vmwarevsphere-network="VM NETWORK" esxi
~~~

### 使用
创建好machine后，通过docker-machine env，切换到esxi这个machine下，就和普通的machine没有任何区别了

![](/media/dockeresxi.jpg)

![](/media/dockerimages.jpg)

![](/media/dockerps.jpg)
