---
layout:     post
title:      "How to change Javafx WebEngine HTML Select Dropdown Styling"
subtitle:   ""
date:       2016-06-27
author:     "Clive Li"
categories:  Tech
tags:
    - JavaFx
---

The HTML select dropdown list is rendered by web browser itself. There are other javascript/css implementations like select2, jquery chosen to have customized style dropdown list.
<!-- more -->
If you are running javafx webview and want to change dropdown list styling (E.g. Background color, text color), you should change your javafx application CSS for the menu:

~~~ css

		.context-menu {
			-fx-background-color: #0a374d;
			-fx-text-fill: white;
		}

		.menu-item {
			-fx-border-width: 2 10 2 10;
			-fx-border-color: transparent;
			-fx-text-fill: white;
		}

		.menu-item .label {
			-fx-text-fill: white;
		}
		.menu-item:focused {
			-fx-background-color: #466c89;
			-fx-text-fill: white;
		}
		
~~~
