---
layout:     post
title:      "MacOS上安装R和Rstudio"
subtitle:   ""
date:       2017-07-15
author:     "Clive Li"
categories:  Tech
tags:
    - MacOS
    - R
---

## 安装

安装xquartzx11图形依赖，中间会要求输入密码

```shell
brew cask install xquartz
```

r是在science 这个repo里

```shell
brew tap homebrew/science
```
<!-- more -->
接下来安装r

```shell
brew install --with-x11 r
```

最后可以安装rstudio，默认安装到用户目录下的~/Applications

```shell
brew cask install rstudio
```

如果想安装到整个系统的/Applications下的话，使用—appdir参数

```shell
brew cask install --appdir=/Applications rstudio
```



## 启动

 直接到LaunchPad里找Rstudio，点击即可