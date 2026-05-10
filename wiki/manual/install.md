---
title: 安装说明
description: 如何安装 MissFisher。
---

# 安装指南

## Dalamud

Dalamud 是一个完全免费的 FF14 插件平台。  
你需要从 XIVLauncher 启动游戏才能使用 Dalamud。  

## XIVLauncher CN (Soil)
XIVLauncher 是一个第三方 FF14 启动器。XIVLauncher CN (Soil) 是 XIVLauncher CN 的分支版本。  

XIVLauncher CN (Soil) 通常被称为橙月，而原版通常被称为蓝月。  

<details>  
<summary>为什么更建议使用橙月而不是蓝月？</summary>  

橙月相比蓝月，重构并优化了启动器的逻辑、界面和交互，还能更好地支持顺畅的跨大区体验。  

并且，由于 Dalamud 在游戏版本迭代后通常需要重新适配。  
蓝月一般会等待 Dalamud 完全适配完毕并发布正式版内核后，才会拉取新内核。  

而橙月在一两天内就会拉取开发版内核，可以更快提供有限但不稳定的插件使用。  
当然，您也可以在游戏版本迭代后手动在启动器设置关闭 Dalamud，在观察到 Dalamud 稳定后再启用。  

另外，由于许多中国服社区的主流插件都优先基于橙月的 Dalamud 内核来开发，因此也许也能获得更多兼容性。  

</details>  

### 使用 XIVLauncher CN (Soil) 为游戏注入 Dalamud

1. [下载 XIVLauncher CN (Soil).zip](https://github.com/AtmoOmen/FFXIVQuickLauncher/releases/latest/download/XIVLauncherCN-win-Portable.zip)。  
2. 解压并打开 XIVLauncher CN (Soil)。  
3. 设置好游戏目录。  
4. 点击主界面的齿轮图标按钮来打开设置，选择 Dalamud 页签确认 Dalamud 已经启用。  
5. 从主界面登陆游戏，Dalamud 应会在游戏启动后自动注入游戏进程。  

## 在 Dalamud 安装 MissFisher
> 以下指引是基于 XIVLauncher CN (Soil) 的，可能与其他版本略有不同，请留意  
## 打开插件安装器

**已登陆角色时：**  

1. 在游戏中按键盘上的 `Esc` 直到出现系统选项菜单。  
2. 点击 Dalamud 插件。  

**在标题画面时：**  

1. 将鼠标移动到游戏标题画面左侧唤出侧栏。  
2. 点击 插件安装器。  

## 添加仓库链接并安装 MissFisher
1. 点击插件安装器下方的设置按钮  
2. 选择 插件 页签  
3. 在 插件页 选择 第三方插件 页签  
4. 在空的输入框中填入 MissFisher 的仓库链接：  
```  
https://raw.githubusercontent.com/BlackCleaverLoli/MissFisher/refs/heads/main/MissFisher.json  
```  
5. 点击 `＋` 以添加  
6. 点击 保存按钮（软盘图标）  
7. 在插件安装器，搜索 `MissFisher`  
8. 点击搜索结果中的 `MissFisher` 部分展开描述  
9. 点击安装按钮并等待完成  

最后，你需要[完成免费认证](./auth)才能使用 MissFisher。  