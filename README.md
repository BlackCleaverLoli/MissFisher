# 空天姬 MissFisher
空天姬是一个可使 FFXIV 钓鱼玩法自动化的 Triggernometry 触发器。
- 支持：国服、英文端、日文端。
* **Support CN, EN, JP Servers. Chinese community feedback only.**
# 文档目录
- [简介](#空天姬-MissFisher)
- [安装指南](#安装指南)
- [默语命令](#默语命令)
- [编写预设指南](#学习编写空天姬预设)
## 主要特性
* 高可读性的自定义参数预设，面向目标钓法设计的参数结构，易于直接编写，无需通过其他工具导出。
* 使用消息窗口输入默语命令，无需在 ACT 界面操作触发器，更可方便地保存在用户宏中。
* 拥有直观且便捷的用户界面，低门槛地使用功能或修改配置。
* 自动功能内置多种钓法模式，手法优秀无需调教，包括但不限于：ET 或天气启停、收藏品手法等。
* 易于启停，启动后收杆即停，无器灵夺舍烦恼。
## 主要功能
### 自动功能
* 自动钓鱼：输入自定义参数预设命令后，按提供的参数进行自动钓鱼。
* 自动海钓：进入出海垂钓后，使用命令来启动全自动海钓，支持三种海钓模式（冲分、蓝鱼、成就）。
### 辅助功能
* 悬浮窗：图形化的辅助信息悬浮窗，如抛竿计时、杆震类型、幻海时长、采集力自然回复的所需时间等。
* 信息播报：TTS 播报咬饵竿型、文字形式的单周期的垂钓信息统计、海钓触幻钓法、海钓数量成就统计等。
## 注意
**请勿利用本触发器进行对他人不利的行为。**
**本触发器系免费的，请勿倒卖本触发器，请勿修改作者署名。**
## 致谢
**感谢 [@MnFeN](https://github.com/MnFeN/) [@Fragile](https://github.com/zfxsquare) [@欧尼棒棒](https://github.com/ONBBss/) 在空天姬开发时给予的大力支持与帮助！**
## 反馈
**请至 QQ 群：[959153665](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=63jvtAHAPHWQ-OPTaoaX5RtOqk4MEVOn&authKey=G45B9uDTIztCX66qbP0B1pRSGU6pabIYMFYoYlDtYAQ42guIYY86q6HTJnjF%2BG3J&noverify=0&group_code=959153665)**
# 安装指南
写于游戏版本：国服 `6.58` 国际服 `7.05`
## 依赖
### 游戏内：
* 拥有已经完成 `Lv90` 职业任务的 `捕鱼人` 职业。
* 消息窗口可正常显示这些频道的消息：`系统消息`、`默语` 以及 `自己的采集信息`（钓鱼信息）。
### ACT 插件：
* 高级触发器 Triggernometry `v1.2.0.115+`（[MnFeN‘s fork of Triggernometry](https://github.com/MnFeN/Triggernometry)）  
（MnFeN‘s fork of Triggernometry 中更新器提供的鲶鱼精邮差 PostNamazu 版本可能不适用于空天姬）
* 鲶鱼精邮差 PostNamazu `v1.3.3.0+`（[PostNamazu](https://github.com/Natsukage/PostNamazu/releases)）（国服请使用 [Cmd 分离的中间版本](https://github.com/Natsukage/PostNamazu/actions/runs/9699117182/artifacts/1645188741)、或从 [123 云盘](https://www.123pan.com/s/YJHhTd-gph13) 获取）
* OverlayPlugin
* 可选的：抹茶 Matcha（仅国服）
### Dalamud 插件：
* SimpleTweaksPlugin（国服）或 DailyRoutines（国际服）。
## 安装
可通过以下方法安装：“添加为远程触发器” 或 “导入到本地触发器”。建议使用前者，可使在触发器启用相应的仓库设置时自动更新。
### 方法 1：添加为远程触发器
1. 在 Triggernometry 中选中触发器分组 `远程触发器` - 点击 `添加` - `仓库`。
2. 填写任意名称作为 `仓库名称` - 从下面的文件链接中选其一填入 `仓库地址` 一项：  
  
**正式版：**  
```
https://raw.githubusercontent.com/BlackCleaverLoli/MissFisher/main/MissFisher.xml
```
* 可相对稳定地使用的版本。  
  
**快照版：**  
```
https://raw.githubusercontent.com/BlackCleaverLoli/MissFisher/main/MissFisher%20Snapshot.xml
```
* 频繁更新以测试新功能的版本。
3. 勾选 `允许触发器执行代码` - 然后点击 `是` 来确定勾选（用作运行空天姬用户界面窗口）。
4. 勾选 `允许触发器启动进程` - 然后点击 `是` 来确定勾选（启动进程仅会被用作手动执行触发器时打开相关网页，可不勾选）。
5. 点击 `添加` 以完成仓库创建 - 等待仓库更新 - 确认仓库更新成功。
### 方法 2：导入为本地触发器
**通过文件导入**
1. 从下方任一链接中下载原始文件，正确的文件格式应为 `xml`：  
  
**正式版：**  
```
https://github.com/BlackCleaverLoli/MissFisher/blob/main/MissFisher.xml
```
* 可相对稳定地使用的版本。  
  
**快照版：**  
```
https://github.com/BlackCleaverLoli/MissFisher/blob/main/MissFisher%20Snapshot.xml
```
* 频繁更新以测试新功能的版本。
2. 在 Triggernometry 中选中触发器分组 `本地触发器` - 点击 `导入` - `从文件或 URI 加载` - 在选择文件窗口找到刚刚下载的 `xml` 文件 - 选中并打开它。
3. 点击 `下一个` - 确认要导入的触发器无误 - `导入`。  

**通过剪贴板导入**  
1. 打开上文的任一链接 - 复制代码文本框中原始文件的所有内容。
2. 在 Triggernometry 中选中触发器分组 `本地触发器` - 点击 `导入` - 将复制到的 `xml` 代码完整粘贴到 `文本框` 中。
3. 点击 `下一个` - 确认要导入的触发器无误 - `导入`。
## 进行配置
### ACT 相关配置：
1. 在 ACT 界面中切换到 `插件列表` 分页（CafeACT 则是 `插件商店` - `高级管理`）- 按下方给出的顺序调整 ACT 插件顺位：
```
（0）CafeStore（如有）（1）FFXIV_ACT_Plugin（2）OverlayPlugin（3）Triggernometry（4）CactbotOverlay（5）PostNamazu（6）Matcha（如有）（其他无关紧要的插件）
```
2. 重启 ACT 并等待 ACT 完成启动。
3. 在游戏中消息窗口的 `聊天输入栏` 输入命令 `/e ktj` - 按下 `回车键` 以打开空天姬主界面（或在 Triggernometry 中双击展开触发器分组 `主界面窗口` - 右键触发器 `打开主界面窗口` - 点击 `执行（强制）` 或 `执行（条件）` 以打开空天姬主界面）。
4. 在空天姬主界面中点击 `配置` 按钮 - 点击 `录制` 来录制 `强心剂键码` - 根据自己的情况与喜好设置剩余的配置 - 点击 `保存` 以保存空天姬配置。
5. 可选的：在 ACT 界面中切换到 `抹茶 Matcha` 分页（如有）- 找到 `日志及数据共享` 部分 - 勾选 `兼容模式` 以略微提高空天姬在咬饵时的响应速度。
#### 授予脚本代码 API 权限（此 API 仅供空天姬读取游戏内存以获取天气信息）：
1. 在 Triggernometry 中点击 `选项` - `编辑配置` 来打开 Triggernometry 配置。
2. 切换到 `安全` 分页 - 点击 `编辑需解锁此安全设置` - `是 `来解锁安全设置。
3. 勾选 `Triggernometry.Utilities` 在 3 种情况下的 API 权限 - 点击 `确定` 以保存配置。
### Dalamud 相关配置：
**启用更换钓饵命令功能：**  
* 国服：启用 SimpleTweaksPlugin 的 `鱼饵指令`（Bait Command）功能，不要改动其主命令。
* 国际服：启用 DailyRoutines 的 `钓饵切换指令` 功能。  
  
**可选的：启用用户宏队列功能：**  
* 启用某些 Dalamud 插件的用户宏队列及道具队列功能，以提高空天姬使用技能与强心剂的流畅性（如：DailyRoutines）。
## 验证自动功能
#### 验证步骤如下：
1. 确认角色拥有钓饵 `万能拟饵`（如没有，请购买 1 个）。
2. 找到任意钓场，操控角色靠近并面朝钓场直到 `抛竿` 技能亮起。
3. 在游戏中消息窗口的 `聊天输入栏` 输入 `/e ktjdbg`，然后按下 `回车键`。
#### 自动功能正常的表现：
1. 输入命令后，TTS 播报：“程序启动。”
2. 消息窗口出现“正在更换钓饵”的提示。
3. 成功更换钓饵后，角色自动使用技能 `撒饵`，然后 `抛竿`，同时游戏画面中央出现包含抛竿时长的动态计时悬浮窗（如启用了 `竿时悬浮窗`），且消息窗口出现一系列由文字与符号组成的当前预设参数信息。
4. 有鱼咬饵时，悬浮窗的计时停止，并显示当前咬饵鱼类的杆震类型，同时角色自动使用技能 `提钩`。
5. 在鱼成功上钩后，TTS 会播报：“Completed.”，同时消息窗口出现刚刚上钩的鱼类的杆震类型、咬饵竿时等信息。
6. 最后，通过按下 `移动键` 或手动使用技能 `中断` 使角色收起钓竿时，悬浮窗消失，消息窗口出现本次垂钓的统计信息。
## 常见问题
### 提示主界面窗口打开失败：
* **授予仓库允许触发器执行代码权限：**  
右键 `仓库` - 点击 `编辑` - 勾选 `允许触发器执行代码` - 点击 `是` - `保存更改`。  
  
* **正确对 ACT 插件进行排序：**  
按条目 [ACT 相关配置](#act-相关配置) 中提供的方法对 ACT 插件进行排序。  
   
### 提示动作超时： 
* **正确对 ACT 插件进行排序：**  
按条目 [ACT 相关配置](#act-相关配置) 中提供的方法对 ACT 插件进行排序。  
   
* **检查空天姬 MissFisher 的用户配置：**  
打开空天姬 MissFisher 的 `用户配置` 窗口 - 检查其中的 `客户端` 设置项：  
游戏客户端是国服，则选择 `国服`；  
游戏客户端是国际服且选用语言是英语，则选择 `国际服-英文`；  
游戏客户端是国际服且选用语言是日语，则选择 `国际服-日语`；  
游戏客户端是国际服且安装了可使用中文宏的覆盖汉化补丁，则选择 `国服`；  
然后 `保存` - 使用 `/e ktjdbg` 进行调试。  
如果尝试了一个选项仍失败，请尝试另外两个选项，并进行调试。  
### 提示换饵失败：
* **更新鲶鱼精邮差 PostNamazu 到合适的版本：**  
按条目 [ACT 插件](#act-插件) 的说明，安装合适版本的鲶鱼精邮差 PostNamazu。  
MnFeN‘s fork of Triggernometry 中的高级触发器更新器提供的鲶鱼精邮差 PostNamazu 版本可能不适用于空天姬。 

* **正确对 ACT 插件进行排序：**  
按条目 [ACT 相关配置](#act-相关配置) 中提供的方法对 ACT 插件进行排序。  
   
* **启用游戏中消息窗口的相关频道：**  
启用步骤：在游戏中找到消息窗口 - 点击 `消息窗口设置`（齿轮样式的按钮）- 找到 `消息过滤设置` 部分 - 点击任一 `消息栏` - 切换到 `通知` 分页 - 勾选频道 `系统消息`、`默语` 以及 `自己的采集信息` - 点击 `应用`。  
   
* **启用提供更换钓饵的命令的 Dalamud 插件：**  
找到条目 [启用更换命令换饵功能](#dalamud-相关配置) 中提到的任一 Dalamud 插件 - 启用其提供的更换钓饵命令功能。 
   
* **配置 Dalamud 插件 Chat2 的相关功能：**  
可能的解决方案：取消勾选 Chat2 的 `隐藏原版聊天窗口` - 使用 `回车键` 唤出一次原生消息窗口。如果仍然需要前文提到的功能可再次启用它。如果仍提示更换钓饵失败，请重启游戏。
   
* **配置其他会修改聊天窗口样式的 Dalamud 插件：**  
可能的解决方案：关闭所有修改 `消息窗口时间戳样式` 的 Dalamud 插件的相关功能，如果换饵仍然失败，尝试重启游戏。更进一步的：关闭所有修改了 `消息窗口样式` 的 Dalamud 插件，然后重启游戏。
# 默语命令
> 可通过在游戏中消息窗口的 `输入栏` 输入默语命令，或通过空天姬的用户界面窗口来使用空天姬功能。  
  
* 写于 MissFisher `v1.5.8`  
## 打开窗口：
命令|功能
-|-
`/e ktj`<br>`/e 空天姬`|打开主界面
`/e ktjcfg`<br>`/e 空天姬配置`|打开用户配置界面
`/e ktjcmd`<br>`/e 空天姬生成器`|打开预设生成器界面
## 自动钓鱼：
命令|功能|备注
-|-|-
`/e <空天姬预设>`|启动自动钓鱼|自定义参数的预设<br>[点击学习编写预设](https://github.com/BlackCleaverLoli/MissFisher/wiki/Learn-Presets)
`/e 冲分确定`<br>`/e 蓝鱼确定`<br>`/e 成就1确定`<br>`/e 成就2确定`|启动自动海钓|携带 3 种海钓钓饵各至少 50 个<br>另携带至少 1 个万能拟饵<br>同时留出至少 40 格背包空间
`/e 空天姬预设 <鱼类全称>`<br>`/e ktjys <鱼类全称>`|启动对应的内置预设|见条目 [支持的预设](#现在支持的内置预设)
`/e 空天姬预设 查看 <鱼类全称>`<br>`/e ktjys show <鱼类全称>`|查看对应的内置预设|以方便修改或作钓鱼准备
`/e ktjdbg`|启动自动功能调试|
## 工具功能：
命令|描述|备注
-|-|-
`/e ktjsync`<br>`/e 空天姬同步`|在线同步内置预设|
`/e 计数 <参考数量><鱼名关键词>；`|启动计数悬浮窗|最多以如 `2鱼；3虾；` 的格式写入最多 3 组<br>鱼名关键词支持部分正则表达式
`/e ktjhx`<br>`/e 航线`|从游戏中的消息窗口<br>获得出海垂钓的航线预报|
## 别名：
> 该功能需要游戏中消息窗口可见系统错误信息（红色字体），你需要勾选相应消息频道才能使用别名启动功能  
  
部分空天姬功能的命令在输入时可省略默语频道标识  
  
以下是支持别名命令的功能的部分命令：
命令|功能
:-|:-|
`/ktj`|空天姬主界面|
`/ktjcfg`|用户配置界面|
`/ktjcmd`|预设生成器|
`/ktjys <子命令>`|空天姬预设|
`/ktjdbg`|调试自动功能|
`/ktjsync`|在线同步内置预设|
`/ktjhx`|查询航线预报|
  
## 现在支持的内置预设
空天姬触发器内置了一部分鱼王自动钓鱼预设，可在空天姬主界面的输入框内输入鱼名全称并按提示操作，或使用 `/e 空天姬预设 <鱼类全称>` 来以启动相应的预设。  
  
* **预设的鱼名以及某些需要识别鱼名采取的钓法暂时仅支持国服（或本地化汉化文本的英文及日文端）**  
  
版本|鱼王|三语支持|备注
:-:|:-:|:-:|:-
2.0|全部支持|未支持|所有的鱼王和鱼皇，以及宠物巧儿陆行鸟
3.0|未支持|未支持
4.0|未支持|未支持
5.0|未支持|未支持
6.0|未支持|未支持  
  
您也可一同来协助建设内置预设：[预设文档](https://docs.qq.com/sheet/DVlNaQ012amF4SW1G?tab=BB08J2)
# 学习编写空天姬预设
> 写于 MissFisher `v1.5.10`
## 什么是空天姬预设？
> 空天姬预设是一组由数字、符号与鱼类名称关键词组成的特殊文本，它告诉空天姬应该如何执行自动钓鱼功能。  
  
空天姬预设的本质是对目标鱼类钓法描述的高度简化。
  
将一条空天姬预设输入到游戏中的默语频道后，它将被空天姬解析为自动钓鱼所需的参数，然后，空天姬会遵循预设中给出的参数和内置的钓鱼手法开始自动钓鱼。   
  
要编写空天姬预设，我们必须已经基本了解游戏中的钓鱼玩法，并且懂得使用一些工具网站来获得目标鱼类的信息。
   
举例来说：假如我们想钓到 “红茶川水系下游” 的鱼王 [酿血鱼](https://fish.ffmomola.com/#/wiki?spotId=91&fishId=7696)……   
  
![QQ截图20240808225250](https://github.com/user-attachments/assets/00f2c813-533c-41c5-a53a-65085109b76d)  
  
> 鱼王酿血鱼的钓法：用蝲蛄丸子平钓，提鱼王杆。  
   
得到钓法后，我们就可以写一条与其钓法同样简短的空天姬预设：  
```
平钓（蝲蛄丸子） ！！！=酿血鱼
```
> `平钓` 模式，使用钓饵 `蝲蛄丸子`，在出现 `！！！` 竿型（也就是俗称的鱼王杆）时提钩，钓到 `酿血鱼` 后停止。

## 术语
### 断杆
某些鱼类在抛竿后只会在一定的时间区间内咬饵，为了减少不必要的等待而使用提钩来提前结束抛竿状态，这一钓法被简体中文玩家社区称为 “断杆”。
### 饵鱼  
指被或可被用来以小钓大的鱼类。
### 套娃
某些饵鱼在以小钓大后有可能会钓上与饵鱼相同的鱼类，这一现象或钓法被简体中文玩家社区称为 “套娃”。

# 目录
- [1. 基本格式](#1-基本格式)  
  - [1.1 模式](#11-模式)  
    - [1.1.1 平钓](#111-平钓)  
    - [1.1.2 大鱼](#112-大鱼)  
    - [1.1.3 耐心](#113-耐心)  
  - [1.2 竿型](#12-竿型)  
    - [1.2.1 多种竿型](#121-多种竿型)  
    - [1.2.2 全提竿型](#122-全提竿型)  
  - [1.3 竿时区间](#13-竿时区间)  
    - [1.3.1 最短或最长竿时](#131-最短或最长竿时)  
  - [1.4 技巧提钩](#14-技巧提钩)  
    - [1.4.1 多重提钩](#141-多重提钩)  
  - [1.5 以小钓大](#15-以小钓大)  
    - [1.5.1 以小钓大竿时](#151-以小钓大竿时)  
    - [1.5.2 指定饵鱼](#152-指定饵鱼)  
    - [1.5.3 套娃](#153-套娃)  
- [2. 拍击水面](#2-拍击水面)  
  - [2.1 拍击水面竿型](#21-拍击水面竿型)  
  - [2.2 拍击水面竿时](#22-拍击水面竿时)  
    - [2.2.1 拍击水面最大竿时](#221-拍击水面最大竿时)  
- [3. 专一垂钓](#3-专一垂钓)  
  - [3.1 专一多重提钩](#31-专一多重提钩)  
- [4. 鱼类名称匹配](#4-鱼类名称匹配)  
  - [4.1 基本匹配](#41-基本匹配)  
  - [4.2 多单元匹配](#42-多单元匹配)  
  - [4.3 正则匹配](#43-正则匹配)  
- [5. 目标](#5-目标)  
  - [5.1 全局手法](#51-全局手法)  
    - [5.1.1 不撒饵](#511-不撒饵)  
    - [5.1.2 收藏品](#512-收藏品)  
    - [5.1.3 攒鱼计](#513-攒鱼计)  
  - [5.2 目标计数](#52-目标计数)  
    - [5.2.1 多组计数目标](#521-多组计数目标)  
- [6. 窗口期](#6-窗口期)  
  - [6.1 艾欧泽亚时间](#61-艾欧泽亚时间)  
  - [6.2 天气](#62-天气)  
    - [6.2.1 空岛](#621-空岛)  
- [7. 钓饵](#7-钓饵)  
- [8. 鱼识](#8-鱼识)  
- [9. 自动准备](#9-自动准备)  
- [10. 注释](#10-注释)  
- [结语](#结语)

## 1. 基本格式
空天姬预设由数字、半角或全角符号还有鱼类的名称组成，不应包含空格。预设中包含的符号并不代表它们通常的含义，而有特殊的意义。  
  
空天姬预设的基本结构：
```
<模式> （<钓饵>）<钓法参数>  
```   
> 关于空格：某些地方如模式参数与鱼识参数后可紧接着输入一个空格可提升可读性且不影响功能。如果在其他参数间插入空格？作者也不清楚会发生什么。
<details>
<summary>完整参数格式</summary>  
<模式> （<钓饵>）拍<拍水目标撒饵最短竿时>+<拍水目标非撒饵最短竿时>~<拍水目标撒饵最长竿时>+<拍水目标非撒饵最长竿时><拍水目标竿型><拍水目标技巧提钩类型><拍水目标关键词><目标1撒饵最短竿时>+<目标1非撒饵最短竿时>~<目标1撒饵最长竿时>+<目标1非撒饵最长竿时><目标1竿型><目标1技巧提钩类型>《<目标1>》<目标2最短竿时>~<目标2最长竿时><目标2竿型><目标2技巧提钩类型>《<目标2>》<目标3最短竿时>~<目标3最长竿时><目标3竿型><目标3技巧提钩类型>《<目标3>》<目标4最短竿时>~<目标4最长竿时><目标4竿型><目标4技巧提钩类型><最小窗口期>-<最大窗口期>（<天气参数>）=<计数数量><计数目标>；<目标>=专一<专一目标>=<专一多提>》鱼识 <鱼识参数>//<注释>
</details>  
  
> 被展开后的参数格式吓到了吗？别担心，一步一步来，编写一条空天姬预设要比你想得更简单。  
  
## 1.1 模式
空天姬内置了 3 种基本的钓鱼手法模式。任何情况下，模式参数都应该被写在预设的开头。
  
它们的含义正如字面上的一样，代表着社区中流传的不同的钓鱼方法：
模式参数|描述
:-:|-
`平钓`|不使用耐心系技能或熟练渔技
`大鱼`|使用大鱼猎手与熟练渔技，不使用耐心系技能与恩宠，并积攒鱼计以供熟练渔技
`耐心`|使用耐心II与熟练渔技，不使用大鱼猎手与恩宠，并积攒鱼计以供熟练渔技
  
- 其他技能将不受影响，并且将保留一部分采集力以随时补充大鱼猎手或耐心II的效果。
### 1.1.1 平钓
`平钓` 模式一般用来钓那些钓法中不包含以小钓大的鱼类。  

例如本文开头展示的鱼王 “酿血鱼” 的预设，在这里只举出必要的参数：
- 这样写，将使空天姬使用 `平钓` 模式。
<pre>
<a href="#111-平钓"><strong>平钓</strong></a> ！！！
</pre>
> 其中的 `！！！` 表示 [竿型](#12-竿型)。
### 1.1.2 大鱼
`大鱼` 模式一般用来钓那些钓法中包含以小钓大、且 [饵鱼](#饵鱼) 干扰杆少但竿时长的鱼类。  

例如使用 “潮虫” 时钓鱼王 [猛犸章鱼](https://fish.ffmomola.com/#/wiki?spotId=35&fishId=7707)，同样只举出必要的参数：
- 这样写，将使空天姬使用 `大鱼` 模式。
<pre>
<a href="#112-大鱼"><strong>大鱼</strong></a> ！！》！！！
</pre>
> 其中的 `》` 代表 [以小钓大](#15-以小钓大)。
### 1.1.3 耐心
`耐心` 模式一般用来钓那些钓法中包含以小钓大、且 [饵鱼](#饵鱼) 干扰杆多的鱼类。  

例如同样的鱼王 “猛犸章鱼”，我们在使用 “沙蚕” 时也可以用耐心模式来钓它。
- 这样写，将使空天姬使用 `耐心` 模式。
<pre>
<a href="#113-耐心"><strong>耐心</strong></a> ！》！！！
</pre>
## 1.2 竿型
在空天姬预设中，目标鱼类咬饵时出现的杆震类型用单个或连续的 `！` 号来表示。  
  
> 也可记忆为对应鱼咬饵时角色头顶出现的 “！” 号图形。
  
竿型符号如下：
字符|描述
-|-
`！`|轻杆
`！！`|中杆
`！！！`|鱼王杆，或者叫重杆
  
当给定的竿型出现时，空天姬将使用提钩。
- 这样写，会使空天姬提轻杆：
<pre>
平钓 <a href="#12-竿型"><strong>！</strong></a>
</pre>
### 1.2.1 多种竿型
当需要提起多种竿型时，使用 `+` 号来连接多种竿型。
- 这样写，使空天姬提起轻杆和鱼王杆。
<pre>
平钓 <a href="#121-多种竿型"><strong>！+！！！</strong></a>
</pre>
- 此处最多支持 9 个字符，也就是：
<pre>
平钓 <a href="#121-多种竿型"><strong>！+！！+！！！</strong></a>
</pre>
### 1.2.2 全提竿型
用 `all`（不限大小写）或 `全部` 来表示提所有竿型，它们等效于 `！+！！+！！！`。
- 这样写，可以使空天姬提起所有杆。
<pre>
平钓 <a href="#122-全提竿型"><strong>all</strong></a>
</pre>
## 1.3 竿时区间
使用至多 2 位数加上 1 位小数来表示目标鱼类的咬饵竿时区间的两个端点。同时使用连接符来连接最短与最长竿时和撒饵与非撒饵竿时。
  
连接符如下：
连接符|描述
:-:|-
`~`|连接最小与最大竿时
`-`|同上
`+`|在最小或最大竿时组中，连接撒饵竿时与非撒饵竿时
  
完整竿时参数格式：
```
<撒饵最短竿时>+<非撒饵最短竿时>~<撒饵最长竿时>+<非撒饵最长竿时>
```

举例，鱼皇 [镜中蝶](https://fish.ffmomola.com/#/wiki?fishId=33242) 在网站 [FF14 鱼糕](https://fish.ffmomola.com/#/) 的统计数据中，它的咬饵竿时区间为：
撒饵情况|最短|最长
:-:|:-:|:-:
不撒饵|12.3|12.9
撒饵时|6.5|7.3
  
遵照给出的竿时参数格式，我们应该这样写：
- 这样写，会使空天姬在抛竿后的不撒饵时 `12.3` 秒、撒饵时 `6.5` 秒后才提鱼王杆，并且在这 2 个时间主动 [断杆](#断杆)：不撒饵时的 `12.9` 秒、撒饵时的 `7.3` 秒。  
<pre>
平钓 <a href="#13-竿时区间"><strong>6.5+12.3~7.3+12.9</strong></a>！！！
</pre>
  
也可以写成近似值以省略小数：
- 需要注意应往区间外的方向进行近似。这会损失一些 “精确性” ，不过可以降低竿时数据上的误差。
<pre>
平钓 <a href="#13-竿时区间"><strong>6+12~8+13</strong></a>！！！
</pre>
### 1.3.1 最短或最长竿时
> 通常来说，在编写预设时，我们可以情况省略掉最短或最长竿时参数，来减少预设的长度并提升可读性。  
  
在空天姬预设中，可仅写出最短或最长竿时，但需要保留竿时参数组的连接符 `~` 或 `-` 以指示这是最短还是最长竿时。

省略的竿时格式如下：
竿时格式|描述
:-:|-
`撒饵最短竿时+非撒饵最短竿时~`|省略最长竿时
`~撒饵最长竿时+非撒饵最长竿时`|省略最短竿时

以上面鱼皇 “镜中蝶” 在 [身镜湖](https://fish.ffmomola.com/#/wiki?spotId=219) 的受干扰情况来说，我们可以省略最短竿时限制的同时保留最长竿时以维持在窗口期内抛出的有效期望杆数：
- 这样写，可以使空天姬在给定的最大竿时 “断杆”。
<pre>
平钓 <a href="#131-最短或最长竿时"><strong>~7.3+12.9</strong></a>！！！
</pre>
## 1.4 技巧提钩
在表示鱼王杆的 `！！！` 后写 `精准`，可以让空天姬在角色携带耐心系技能附加的负面效果时对鱼王杆使用 “精准提钩”。
  
不给出任何技巧提钩参数时，空天姬会在角色携带耐心系技能附加的负面效果时，默认对鱼王杆使用强力提钩。而在不携带前面提到的负面效果时，空天姬将使用普通的提钩。
  
例如，在设定中是小体型鱼的鱼王 “银镜鱼” 咬饵时，需要使用精准提钩才能无视耐心系技能附加的提钩成功率降低负面效果：
- 这样写，可以使空天姬对鱼王杆使用 “精准提钩”。
<pre>
耐心 ！》！！！<a href="#14-技巧提钩"><strong>精准</strong></a>
</pre>
  
- 在当前版本中，在提供技巧提钩参数 `精准`时，将使空天姬在角色携带耐心系技能附加的负面效果时对所有给定的目标杆使用精准提钩。
  - 这个特性也许会在未来的版本中被 “修复”。
### 1.4.1 多重提钩
我们可以像使用技巧提钩参数一样，在代表竿型的 `！` 号后写入多重提钩参数，来让空天姬对目标杆使用多重提钩系技能。接受的多重提钩参数是中文提钩系技能名的 “前缀”。  
  
在采集力不足以使用三重提钩时，空天姬不会转而使用双重提钩，而会使用普通提钩。
  
多重提钩参数如下：
参数|描述
:-:|-
`双重`|对目标杆使用双重提钩，在携带耐心系技能效果时无效
`三重`|对目标杆使用三重提钩，在携带耐心系技能效果时无效

- 例如这样写，将使空天姬对中杆使用三重提钩：
<pre>
平钓 ！！<a href="#14-技巧提钩"><strong>三重</strong></a>
</pre>

## 1.5 以小钓大
使用 `》` 或 `>` 来连接不同阶段的目标杆参数，使空天姬在钓到饵鱼时自动以小钓大，以应对需要以小钓大才能钓到的目标鱼类。

例如鱼王 “猛犸章鱼”：
- 这样写将会使空天姬在钓上可以小钓大的中杆饵鱼时以小钓大。
<pre>
大鱼 ~8+12！！<a href="#15-以小钓大"><strong>》</strong></a>！！！
</pre>
### 1.5.1 以小钓大竿时
在 `》` 号与竿型参数之间插入竿时区间参数，可指定以小钓大竿时。接受省略最短/最长的写法。
  
以小钓大竿时结构：
```
<最短竿时>~<最长竿时>
```
- 这样写以指定以小钓大竿时：
<pre>
耐心 ！！》<a href="#151-以小钓大竿时"><strong>19~</strong></a>！！！
</pre>
### 1.5.2 指定饵鱼
在目标杆参数与 `》` 号之间插入饵鱼鱼名，可使空天姬只用符合该鱼名的鱼类来以小钓大。
  
例如鱼王 “猛犸章鱼” ，假如使用 “万能拟饵” 在 “利姆萨·罗敏萨下层甲板” 抛竿，将可能钓到同样是轻杆的 “梅尔托尔虾虎” 和 “海云水母”，而只有用 “梅尔托尔虾虎” 以小钓大才能钓起鱼王 “猛犸章鱼”。
- 这样写将使空天姬只利用 `梅尔托尔虾虎` 进行以小钓大：
<pre>
耐心 ！<a href="#152-指定饵鱼">梅尔托尔虾虎<strong></strong></a>》！！！
</pre>
### 1.5.3 套娃
当面对需要 [套娃](#套娃) 才能钓到的鱼类时，有特殊的竿型写法。

我们需要写下在以小钓大转至下一个阶段时，需要让空天姬提起哪些竿型，并用竿型连接符 `+` 号连接它们。

例如鱼王 [忍斗鱼](https://fish.ffmomola.com/#/wiki?spotId=24&fishId=8761)：
  
![QQ截图20240809223200](https://github.com/user-attachments/assets/2c8f7039-9102-4ef3-96ef-b459eb9ad4a5)
> 在鱼糕的钓法展示中，可套娃的饵鱼（在这里是从左到右的第二条鱼也就是 “暗斗鱼”）的图标下方会有一个 “回转的箭头” 标志。  
> 鱼王 “忍斗鱼” 的饵鱼是 “暗斗鱼”，在使用它作为钓饵以小钓大时，可能会碰上中杆，当提起这条中杆鱼后我们会发现钓上了另一条 “暗斗鱼”。  
  
在鱼王 “忍斗鱼” 的钓法中，钓到 “暗斗鱼” 并用它来以小钓大后，我们预想可能会遇到对应 “暗斗鱼” 的中杆或对应鱼王 “忍斗鱼” 的鱼王杆。
  
- 我们可以这样写包含套娃写法的鱼王 “忍斗鱼” 的预设，使空天姬碰见中杆套娃时继续进行套娃：
<pre>
耐心 ！》！！》<a href="#153-套娃"><strong>！！+！！！</strong></a>
</pre>
## 2. 拍击水面
在预设中的模式参数后写下标识 `拍` 字，然后紧接鱼类的名称，可以使空天姬对符合该鱼名的鱼类使用拍击水面。  
  
例如鱼王 [鳞脚螺](https://fish.ffmomola.com/#/wiki?spotId=59&fishId=7687)。
- 这样写将使空天姬对 `大比目鱼` 使用拍击水面：
<pre>
平钓 <a href="#2-拍击水面"><strong>拍大比目鱼</strong></a>！！！
</pre>
## 2.1 拍击水面竿型
在标识符 `拍` 与拍水目标的鱼名之间插入竿型参数，可使空天姬额外的提起需要拍水目标的竿型。接受的竿型参数同通常情况下的竿型参数一致。
  
- 在携带拍击水面效果时空天姬不会提起给定的拍水竿型。
  
例如，在编写鱼王 “酿血鱼” 的预设时，注意到在 “红茶川水系下游” 的统计数据中，轻杆的 “潜沙鱼” 咬饵较多。
  
为了让空天姬钓到 “潜沙鱼” 并对其使用拍击水面，我们可以这样写：
- 这样写会使空天姬在没有携带拍水时额外提起轻杆。
<pre>
平钓 拍<a href="#21-拍击水面竿型"><strong>！</strong></a>潜沙鱼！！！
</pre>
## 2.2 拍击水面竿时
在标识符 `拍` 与拍水目标竿型参数之间插入拍水目标的竿时区间，可使空天姬更高效地提起拍水目标。拍水目标的竿时参数的写法与通常的竿时参数一致。 
  
在携带拍击水面效果时空天姬不会提起给定的拍水竿型。仅给出拍水最大竿时，空天姬也不会 “断杆”。
  
例如，钓鱼王 [大泷太郎](https://fish.ffmomola.com/#/wiki?spotId=17&fishId=8774)。
- 这样写可以使空天姬只提起给定的拍击水面最大竿时以下的中杆：
<pre>
平钓 拍<a href="#22-拍击水面竿时"><strong>~12+22</strong></a>！！争斗琵琶鱼！！！
</pre>

高阶预设写法：指定鱼名为该钓场不存在的字词时，由于永远不会获得拍击水面效果，合理使用拍水竿时参数可以使空天姬对不同的竿时及竿型使用提钩。  
- 这样写将使空天姬在不断杆的同时，提所有轻杆，和咬饵竿时在撒饵 7 秒、不撒饵 13 秒以下的中杆：  
<pre>
平钓 拍<a href="#22-拍击水面竿时"><strong>~7+13</strong></a>！！拍！
</pre>
> 作者常用 `拍` 作为这种写法的拍水鱼名占位符。

### 2.2.1 拍击水面最大竿时
如给定的拍水最大竿时大于给定的目标最大竿时，空天姬的断杆时间将变为给定的拍水最大竿时，直到拍水成功。

如鱼皇 “镜中蝶”，杂鱼的竿时区间要大于它：
- 这样写，将使空天姬在未获得拍水效果时使用给定的拍击水面最大竿时作为断杆时间。
<pre>
平钓 拍<a href="#221-拍击水面最大竿时"><strong>~11+20</strong></a>！青蓝鳅~7.5+14！！！
</pre>
## 3. 专一垂钓
在目标杆参数后写标识 `=专一` 并紧接鱼类名称，可使空天姬对符合该鱼名的鱼类使用专一垂钓。
- 例如这样写，使空天姬对 “近东虾” 使用 “专一垂钓”：
<pre>
平钓 ！<a href="#3-专一垂钓"><strong>=专一近东虾</strong></a>
</pre>
## 3.1 专一多重提钩
在专一参数与专一鱼名后写标识符 `=` 然后紧跟多重提钩参数，可使空天姬在使用专一后对再次咬钩的鱼使用多重提钩。
  
接受的多重提钩参数与通常时使用的 [多重提钩](#141-多重提钩) 参数一致。
- 专一多重提钩参数在角色携带耐心系技能效果时将无效。  
- 在采集力不足以使用三重提钩时，空天姬不会转而使用双重提钩，而会使用普通提钩。
  
- 这样写将使空天姬在专一后使用 “三重提钩”。
<pre>
平钓 ！=专一近东虾<a href="#31-专一多重提钩"><strong>=三重</strong></a>
</pre>

## 4. 鱼类名称匹配
空天姬会将预设中的鱼名参数当做正则表达式与钓到鱼时系统发出的消息中的鱼名进行对比，若匹配成功则执行对应的动作。  
- 鱼名参数不支持空格，也不支持以下划线作为空格分割单词，因此在输入英文鱼名时只能输入单个单词作为鱼名参数。

鱼名除完全支持中文外，也支持英文与日文，同时还支持这些符号：
符号|描述
:-:|-
`·`|半角间隔号，在英文鱼名中出现
`・`|全角间隔号，在日文鱼名中出现
`'`|半角单引号，在英文鱼名中出现
  
将介绍 3 类常用的鱼名参数写法，了解鱼名匹配方式可以帮助我们更好地写出简短高效且能广泛适用的空天姬预设。
## 4.1 基本匹配
在写拍水鱼名或专一鱼名时，可省略绝大部分字词而仅留下对应钓场中该特定鱼类独有的字词。这样的简写可以帮助我们将预设写得更加简洁。
  
如 “深海鳗”：
语言|全称|简写
:-:|-|-
中文|`深海鳗`|`深海`|
英文|`deep-sea eel`|`deep`|
日文|`ディープシーイール`|`ディープ`|

## 4.2 多单元匹配
以 `（）` 号作为标识符包围多个使用 `、` 号或 `，` 号分隔的鱼名，可以同时在一个参数位置输入并使空天姬在这里使用多个鱼名来匹配。
如鱼王 [无赖王](https://fish.ffmomola.com/#/wiki?spotId=39&fishId=7679)，它所在的钓场中有 2 条杂鱼的干扰概率较高且相近，它们的名字是 “蝲蛄” 和 “鲢鱼”。

我们可以在鱼名参数中使用多单元匹配格式，使空天姬在它们其一出现时都使用拍击水面：
- 这样写将使空天姬对 `蝲蛄`、`鲢鱼` 使用拍击水面。
<pre>
平钓 拍！<a href="#42-多单元匹配"><strong>（蝲蛄、鲢鱼）</strong></a>！！！
</pre>
同时，多单元匹配也可以用来给一条预设适配多语言：
- 这样写将使空天姬对 `蝲蛄`、`Crayfish`、`ザリガニ`、`鲢鱼`、`Chub`、`チャブ` 使用拍击水面。
<pre>
平钓 拍！<a href="#42-多单元匹配"><strong>（蝲蛄、Crayfish、ザリガニ、鲢鱼、Chub、チャブ）</strong></a>！！！
</pre>
## 4.3 正则匹配
> 空天姬会将预设中的鱼名参数当做正则表达式与钓到鱼时系统发出的消息中的鱼名进行对比……
  
正如在 [鱼类名称匹配](#4-鱼类名称匹配) 中说明的，由于这一特性，我们可以使用正则来编写鱼名参数。由于在鱼名参数中可用的正则表达式并没有完全明确，在这里仅举出部分常用的正则表达式写法。

仅拍水鱼名参数中可用的：
鱼名参数|描述
:-:|-
`[蝲鲢]`|匹配包含括号中的单字的鱼名，类似空天姬中的多单元匹配写法 `（蝲蛄、鲢鱼）`
`^蝲蛄`|匹配以 `蝲蛄` 开头的鱼名
`^[蝲鲢]`|匹配以括号中的单字开头的鱼名
`^[^蝲鲢]`|匹配不以括号中的单字开头的鱼名
`（^(蝲蛄、鲢鱼)）`|匹配以括号中的词开头的鱼名
`（^(?!蝲蛄、鲢鱼)）`|匹配不以括号中的词开头的鱼名
  
在所有鱼名参数都可用的：
鱼名参数|描述
:-:|-
`、`|等同于正则表达式 `\|` 匹配空或空，即等效任何鱼名
`^蝲蛄`|匹配以 `蝲蛄` 开头的鱼名
`（^(蝲蛄、鲢鱼)）`|匹配以括号中的词开头的鱼名
  
> 鱼名参数都可以用 `（）` 包围以提升可读性。
## 5. 目标
在目标杆参数与专一参数之间插入 `=` 号作为标识，然后紧接鱼名参数，可使空天姬在钓到符合给定鱼名的鱼类时不再继续抛竿，并播报 “Completed”。
  
例如鱼王 “大泷太郎”：
- 这样写将使空天姬在钓到 `大泷太郎` 时停止抛竿。
<pre>
平钓 拍~12+22！！争斗琵琶鱼！！！<a href="#5-目标"><strong>=大泷太郎</strong></a>
</pre>
## 5.1 全局手法
在目标参数中的 `=` 号后写全局手法参数，可使空天姬采用不同的手法来进行自动钓鱼。

全局手法参数如下：
参数|描述
:-:|-
`不撒饵`|在任何时候都不使用撒饵
`收藏品`|尽可能钓到大尺寸的鱼
`攒鱼计`|在鱼计到达 10 层时不再抛竿
  
可同时使用多个全局手法参数：`不撒饵收藏品`，并且可以与目标参数共存：`猛犸章鱼不撒饵`，但这样写将使目标参数失效，包含鱼名参数时正确的写法如：
- 这样写将使空天姬不撒饵，同时在钓到鱼王 “猛犸章鱼” 时播报。
<pre>
大鱼 ~8+12！！》！！！=<a href="#51-全局手法"><strong>（猛犸章鱼、不撒饵）</strong></a>
</pre>
### 5.1.1 不撒饵
在目标参数的 `=` 号后写 `不撒饵`，将使空天姬不使用撒饵，一般在没有窗口期限制或预设中有其他更需要采集力的技能时使用。
  
- 如钓作为有价值的制作用素材的 “近东虾”：
<pre>
平钓 ！=<a href="#511-不撒饵"><strong>不撒饵</strong></a>=专一近东虾=三重
</pre>
### 5.1.2 收藏品
在目标参数的 `=` 号后写 `收藏品` 或 `收藏`，可使空天姬采用尽可能钓到大尺寸鱼的手法。同时将自动开启收藏品采集，在配置了确定键键码的情况下，还会尝试在鱼咬饵后自动确认收藏。

此时，不同模式下的钓鱼手法将有如下转变：
模式|收藏品手法参数下
:-:|-
`平钓`|将尽量维持大鱼猎手的效果
`大鱼`|同 `平钓` 一致
`耐心`|不再使用以小钓大II以及熟练渔技，并且将开始消耗恩宠
  
- 如常用的票据收藏品鱼 “灵岩之剑”：
<pre>
耐心 拍魇鱼6.5+11.6~！+！！》8.6~！！=<a href="#512-收藏品"><strong>收藏品</strong></a>
</pre>
### 5.1.3 攒鱼计
在目标参数的 `=` 号后写 `攒鱼计`，将使空天姬在鱼计到达 10 层时不再抛竿，并播报 “鱼计上限”。

一般用以搭配固定的钓法预设，而且加上 `不撒饵` 以维持采集力：

- 全提攒鱼计。
<pre>
耐心 all=<a href="#513-攒鱼计"><strong>攒鱼计不撒饵</strong></a>
</pre>
- 攒鱼计且避开鱼皇 “星鲸” 的鱼识触发计数鱼。
<pre>
耐心 拍~7+13！！拍！=<a href="#513-攒鱼计"><strong>攒鱼计不撒饵</strong></a>
</pre>
> 这里的拍水鱼名 `拍` 系特殊写法，见 [拍击水面竿时](#22-拍击水面竿时)。
## 5.2 目标计数
在目标参数的 `=` 号和目标参数之间插入整数并紧跟鱼名参数，然后使用 `；` 号分隔，可使空天姬对符合给定鱼名的鱼类进行计数，并显示计数悬浮窗。在计数到达给定的数量时，空天姬将播报完成。
- 计数目标的统计将在重新输入另一个带有目标计数参数的预设、或跨越区域时重置。
  
例如完成莫雯卓越工具所需的收藏品 “白金海马”：
- 这样写，会使空天姬在钓到 30 条 `白金海马` 时停止抛竿。
<pre>
平钓 ~7.5！=<a href="#52-目标计数"><strong>30白金海马；</strong></a>收藏不撒饵
</pre>
### 5.2.1 多组计数目标
可最多插入 3 组计数目标。
  
例如钓鱼皇 “星鲸” 的 2 个前置，不包含 “法拉伊那”：
- 这样写会使空天姬在钓到 3 条鱼名含有 `额` 的鱼类与 2 条鱼名含有 `未` 的鱼类时停止抛竿。
<pre>
耐心 拍三叉！！》！！=<a href="#521-多组计数目标"><strong>3额；2未；</strong></a>
</pre>
## 6. 窗口期
在预设中写入艾欧泽亚时间或天气来指定窗口期以控制抛竿。
  
窗口期格式如下：
参数|描述
:-:|-
`0001-1200`|艾欧泽亚时间，也可以使用 `~` 来连接最小与最大时间
`（碧空）`<br>`（碧空、晴朗）`|艾欧泽亚天气
`0001-1200（碧空、晴朗）`|时间与天气连用
## 6.1 艾欧泽亚时间
在目标竿参数后与目标参数的 `=` 号之间插入艾欧泽亚时间区间，可使空天姬等待到窗口期才抛竿，并在窗口期结束时停止抛竿。  
  
例如鱼王 “猛犸章鱼”，只有使用合适的饵鱼在艾欧泽亚时间 9 至 17 时抛竿才能钓到它：
- 这样写，会使空天姬在艾欧泽亚时间 9 至 17 点才抛竿。
<pre>
大鱼 ~8+12！！》！！！<a href="#61-艾欧泽亚时间"><strong>0901-1700</strong></a>=猛犸章鱼
</pre>
> 之所以不写为正点 0900，因社区经验得出时间限制的鱼类，有效竿区间为最小时间 + 1ETmin、最大时间 - 1ETmin。  
> 而空天姬会在到达最大时间那一刻停止抛竿，所以写为 0901-1700。
## 6.2 天气
> 必须配置环境才能使用这一功能：[授予 API 权限](https://github.com/BlackCleaverLoli/MissFisher/wiki/Installation-Guide#%E6%8E%88%E4%BA%88%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81-api-%E6%9D%83%E9%99%90%E6%AD%A4-api-%E4%BB%85%E4%BE%9B%E7%A9%BA%E5%A4%A9%E5%A7%AC%E8%AF%BB%E5%8F%96%E6%B8%B8%E6%88%8F%E5%86%85%E5%AD%98%E4%BB%A5%E8%8E%B7%E5%8F%96%E5%A4%A9%E6%B0%94%E4%BF%A1%E6%81%AF)
  
在目标竿参数与目标参数的 `=` 号之间插入被 `（）` 号包围并用 `、` 号或 `，` 号分割的艾欧泽亚天气，可使空天姬等待到当前区域的天气符合给定的天气时才抛竿，并在天气不符合给定天气时停止抛竿。
- 空天姬仅能检测当前天气，而不能记忆或在启动前获取前置天气，所以此处只能写后置天气。
  - 因此在天气连续符合给定天气时，如没有写入艾欧泽亚时间参数，将不会提示窗口期结束。  
  
例如前文中提到的鱼王 “银镜鱼”，只有使用合适的饵鱼在天气为碧空或晴朗，同时艾欧泽亚时间在 9 至 16 时抛竿才才能钓到它。
- 这样写，会使空天姬在艾欧泽亚天气为碧空或晴朗、时间在 9 至 16 点才抛竿：
<pre>
耐心 ！》！！！精准<a href="#62-天气"><strong>0901-1600（碧空、晴朗）</strong></a>=银镜鱼
</pre>
### 6.2.1 空岛
在目标参数中写 `空岛` 作为全局手法参数，将使空天姬增加检查天气的频率。
## 7. 钓饵
> 必须配置环境才能使用这一功能：[启用 Dalamud 插件的更换钓饵命令功能](https://github.com/BlackCleaverLoli/MissFisher/wiki/Installation-Guide#dalamud-%E7%9B%B8%E5%85%B3%E9%85%8D%E7%BD%AE)
  
在模式参数后使用 `（）` 号包围钓饵，可使空天姬自动将指定的钓饵挂到钓钩上。
- 这样写，会使空天姬自动换上 “万能拟饵”：
<pre>
平钓 <a href="#7-钓饵"><strong>（万能拟饵）</strong></a>all=、
</pre>
## 8. 鱼识
在前置鱼的钓法参数后写 `》鱼识` 作为鱼识参数的标识，然后紧接获得捕鱼人之识后想要切换的预设。
  
- 在鱼识效果结束或鱼识内抛出的有效杆回归到自由态时，将切换回原来的预设。
  
例如鱼王 “科内利亚”，它需要携带对应的捕鱼人之识效果才能钓到：
- 这样写，使空天姬在获得捕鱼人之识时使用 `》鱼识` 后的参数作为新的预设应用。
<pre>
平钓 （火萤）~22.5！！=不撒饵=专一争<a href="#8-鱼识"><strong>》鱼识 平钓（彩虹勺形鱼饵）~13+24.5！！骨！！！=科内利亚</strong></a>
</pre>
## 9. 自动准备
当预设中含有窗口期参数和特定的参数，且启动后当前不符合窗口期条件时，空天姬将进行窗口期前的自动准备。  

自动准备的手法如下：  
手法|必要参数|描述
-|-|-
预拍水|拍水参数|使用大鱼猎手，尝试钓到并拍水给定的鱼类
预饵鱼|饵鱼鱼名|使用给定的钓法，尝试钓到大尺寸的给定的鱼类
预触|计数目标参数与鱼识参数|使用给定的钓法，尝试钓到数量为计数总数 - 1 的给定的鱼类
## 10. 注释
在所有参数后写 `//` 或 `\\` 紧接文本作为参数注释。注释在目前版本不会影响任何空天姬功能。
## 结语
现在我们已经了解空天姬预设所有参数的写法。 
  
> 哎呀，我找到了什么？原来是一条简短的高可读性的空天姬预设（笑）：  
```
耐心 （盗蟹丸）~6+11！》！！（引螈、Eryops、エリオプス）》！！！》！！！1001-1200=（隆卡的大水蛇、Serpent、大水蛇）
``` 
- 感谢你的耐心阅读。
- 反馈请至 QQ 群：959153665  
- 你也可以帮助完善空天姬的内置预设，详情请加群。
