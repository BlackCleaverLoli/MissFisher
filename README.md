# 空天姬 MissFisher
**[安装指南](#安装指南) | [常见问题](#常见问题) | [2 分钟快速上手](#快速上手) | [所有命令](#命令) | [如何编写空天姬预设](https://github.com/BlackCleaverLoli/MissFisher/wiki/Learn-Presets) [\[ Gitee 镜像 \]](https://gitee.com/bcloli/MissFisher/wikis/Learn-Presets) | [金曦之遗辉的技能支持情况](https://github.com/BlackCleaverLoli/MissFisher/wiki#%E9%87%91%E6%9B%A6%E4%B9%8B%E9%81%97%E8%BE%89%E7%9A%84%E6%8A%80%E8%83%BD%E6%94%AF%E6%8C%81%E6%83%85%E5%86%B5) [\[ Gitee 镜像 \]](https://gitee.com/bcloli/MissFisher/wikis/Home#%E9%87%91%E6%9B%A6%E4%B9%8B%E9%81%97%E8%BE%89%E7%9A%84%E6%8A%80%E8%83%BD%E6%94%AF%E6%8C%81%E6%83%85%E5%86%B5)**  

## 简介
空天姬 MissFisher 是一个可使 FFXIV 钓鱼玩法自动化的 Triggernometry 触发器。
- **支持：** 国服、英文端、日文端  
**Support CN, EN, JP Servers.**
- **适配等级：Lv.1 - Lv.100**  
> **请勿利用 空天姬 MissFisher 进行对他人不利的行为。**  
> **空天姬 MissFisher 系免费的。请勿倒卖 空天姬 MissFisher。请勿修改作者署名。**

## 主要特性
- **优秀手法**  
内置优秀的资源管理与钓鱼手法，无需调教，即开即用。
- **用户界面**  
基于 Winform 的用户界面窗口，简洁美观，简单易用。
- **易于停止**  
除特例以外，收杆中断钓鱼即终止自动，免受抢夺困扰。
- **自定义预设**  
独创钓法语言，无需工具即可快速编写预设，浓缩钓法，清晰易懂。
## 主要功能
### 自动功能
* **自动钓鱼**  
发送空天姬预设到默语频道后，自动按提供的参数钓鱼。

* **自动海钓**  
进入出海垂钓并启动海钓模式后，自动按选择的模式手法进行海钓，  
支持三种模式：冲分、蓝鱼、成就。
### 辅助功能
* **悬浮窗**  
在钓鱼时显示图形化的辅助信息悬浮窗，
如抛竿计时、杆震类型、幻海时长、采集力自然回复的所需时间等。

* **信息播报：**    
咬饵时播报咬饵竿型；  
在默语频道发送信息，如结束钓鱼时单周期的垂钓信息统计、海钓触幻钓法、海钓数量成就统计等。
 
## 功能预览
**功能**|**主界面**|
-|-
![幻海](https://github.com/user-attachments/assets/87a3db26-4a0c-45d6-8863-eb54523b5fdb)<br>![QQ20241005-085342123123123](https://github.com/user-attachments/assets/832d7078-ae3a-429e-8f98-c03941b50183)|![主界面224](https://github.com/user-attachments/assets/99e9766f-0340-48a6-8c62-5fec5b2f8558)|






## 注意事项

- 钓饵不足时角色将停止收杆，此时 空天姬 MissFisher 不会发出任何提示，因此请确保携带了足够的钓饵！
- 当使用其他插件修改游戏内的本地天气时，将影响 空天姬 MissFisher 的天气相关功能。
- **敬请触发器开发者留意：如勾选抹茶【兼容模式】，当次运行的首次咬饵时会关闭解析插件的【记录网络数据】。**
## 致谢
**感谢 [@MnFeN](https://github.com/MnFeN/) [@Fragile](https://github.com/zfxsquare) [@欧尼棒棒](https://github.com/ONBBss/) 等大佬在 空天姬 MissFisher 开发时给予的大力支持与帮助！**
## 反馈
* **[QQ 群 959153665](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=63jvtAHAPHWQ-OPTaoaX5RtOqk4MEVOn&authKey=G45B9uDTIztCX66qbP0B1pRSGU6pabIYMFYoYlDtYAQ42guIYY86q6HTJnjF%2BG3J&noverify=0&group_code=959153665) | [GitHub Issues](https://github.com/BlackCleaverLoli/MissFisher/issues) | [Gitee Issues](https://gitee.com/bcloli/MissFisher/issues/new)**
## 无偿赞助

[<img width="200" src="https://pic1.afdiancdn.com/static/img/welcome/button-sponsorme.png" alt="afdian">](https://afdian.com/a/bcloli)
***
# 安装指南
## 依赖
### 游戏内：
* 职业 `捕鱼人` 。
* 消息窗口可正常显示这些频道的消息：`系统消息`、`默语` 、`非玩家角色通告` 以及 `自己的采集信息`（钓鱼信息）。
### ACT 插件：
* 高级触发器 [MnFeN‘s fork of Triggernometry](https://github.com/MnFeN/Triggernometry) `v1.2.0.704+`
* 鲶鱼精邮差 [PostNamazu](https://github.com/Natsukage/PostNamazu/releases) `v1.3.4.1+`（也可使用 修改版的鲶鱼精 `v2.0.0.10+` [~~等待适配~~] ）
* OverlayPlugin
* 可选的：抹茶 Matcha（仅国服）
### Dalamud 插件：
* DailyRoutines 或 SimpleTweaksPlugin。
  * 如使用了 修改版的鲶鱼精 `v2.0.0.10+` 则此项非必须。
## 安装
可通过以下方法安装：“添加为远程触发器” 或 “导入到本地触发器”。建议使用前者，可使在触发器启用相应的仓库设置时自动更新。
### 方法 1：添加为远程触发器
1. 在 Triggernometry 中选中触发器分组 `远程触发器` - 点击 `添加` - `仓库`。
2. 填写任意名称作为 `仓库名称` - 从下面的文件链接中选其一填入 `仓库地址` 一项：  
  
**正式版：**  
```
// Gitee 镜像
https://gitee.com/bcloli/MissFisher/raw/main/MissFisher.xml

// GitHub
https://raw.githubusercontent.com/BlackCleaverLoli/MissFisher/main/MissFisher.xml

// 可相对稳定地使用的版本
``` 
  
**快照版：**  
```
// Gitee 镜像
https://gitee.com/bcloli/MissFisher/raw/main/MissFisher%20Snapshot.xml

// GitHub
https://raw.githubusercontent.com/BlackCleaverLoli/MissFisher/main/MissFisher%20Snapshot.xml

// 频繁更新以测试新功能的版本
```
3. 勾选 `允许触发器执行代码` - 然后点击 `是` 来确定勾选（必选，用作运行 空天姬 MissFisher 的用户界面窗口）。
5. 可选：勾选 `允许触发器启动进程` - 然后点击 `是` 来确定勾选（启动进程仅会被用作手动执行触发器时打开相关网页）。
5. 勾选 `允许触发器操作文件` - 然后点击 `是` 来确定勾选（必选，仅用作更新 空天姬 MissFisher 的内置预设）。
6. 点击 `添加` 以完成仓库创建 - 等待仓库更新 - 确认仓库更新成功。
7. 按条目 [进行配置](#进行配置) 中提供的方法来配置环境。
### 方法 2：导入为本地触发器
**通过文件导入**
1. 从下方任一页面中下载原始文件，正确的文件格式应为 `xml`：

- **正式版：**  
可相对稳定地使用的版本。  
  [ [123 云盘](https://www.123pan.com/s/YJHhTd-0ah13) ] [ [Gitee 镜像](https://gitee.com/bcloli/MissFisher/blob/main/MissFisher.xml) ] [ [GitHub](https://github.com/BlackCleaverLoli/MissFisher/blob/main/MissFisher.xml) ]  

- **快照版：**  
~~[ 不提供本地触发器 ]~~  

2. 在 Triggernometry 中选中触发器分组 `本地触发器` - 点击 `导入` - `从文件或 URI 加载` - 在选择文件窗口找到刚刚下载的 `xml` 文件 - 选中并打开它。
3. 点击 `下一个` - 确认要导入的触发器无误 - `导入`。  
4. 按条目 [进行配置](#进行配置) 中提供的方法来配置环境。

**或通过剪贴板导入：**  
1. 打开上文提供的网页 - 复制代码文本框中原始文件的所有内容。
2. 在 Triggernometry 中选中触发器分组 `本地触发器` - 点击 `导入` - 将复制到的 `xml` 代码完整粘贴到 `输入框` 中。
3. 点击 `下一个` - 确认要导入的触发器无误 - `导入`。
4. 按条目 [进行配置](#进行配置) 中提供的方法来配置环境。
## 进行配置
### ACT 相关配置：
1. 在 ACT 界面中切换到 `插件列表` 分页（CafeACT 则是 `插件商店` - `高级管理`）- 按下方给出的顺序调整 ACT 插件优先级：
```
（0）CafeStore（如有，注意区分 Matcha）
（1）FFXIV_ACT_Plugin
（2）OverlayPlugin
（3）Triggernometry
（4）CactbotOverlay
（5）PostNamazu
（6）CafeMatcha（如有）
（其他无关紧要的插件）
```
2. 重启 ACT 并等待 ACT 完成启动。
3. 在游戏中消息窗口的 `聊天输入栏` 输入命令 `/e ktj` - 按下 `回车键` 来打开 空天姬 MissFisher 的主界面（或右键触发器 `空天姬主界面` - 点击 `执行（强制/条件）`）。
4. 在主界面中点击 `配置` 按钮 - 在打开的用户配置界面中点击 `录制` 来录制 `强心剂键码` - 根据自己的情况与喜好设置剩余的配置 - 点击 `保存` 以保存配置。
5. 可选的：在 ACT 界面中切换到 `抹茶 Matcha` 分页（如有）- 找到 `日志及数据共享` 部分 - 勾选 `兼容模式` 以略微提高咬饵时 空天姬 MissFisher 的响应速度。

> 敬请触发器开发者留意：如勾选抹茶【兼容模式】，当次运行的首次咬饵时会关闭解析插件的【记录网络数据】。

#### 授予脚本代码 API 权限：
> 此 API 仅供 空天姬 MissFisher 读取游戏内存以获取天气信息。
1. 在 Triggernometry 中点击 `选项` - `编辑配置` 来打开 Triggernometry 配置。
2. 切换到 `安全` 分页 - 点击 `编辑需解锁此安全设置` - `是 `来解锁安全设置。
3. 勾选 `Triggernometry.Utilities` 在 3 种情况下的 API 权限 - 点击 `确定` 以保存配置。
### Dalamud 相关配置：
**启用更换钓饵命令功能：**  
> 如使用了 修改版的鲶鱼精 `v2.0.0.10+` 则此项非必须。  

以下插件功能二选一即可：
- **SimpleTweaksPlugin**  
启用 `鱼饵指令`（Bait Command）功能，不要改动其主命令。

- **DailyRoutines**  
启用 `钓饵切换指令` 功能。
  
**可选的：启用某些 Dalamud 插件的用户宏队列功能：**  
* 启用某些 Dalamud 插件（如：DailyRoutines）的用户宏队列及道具队列功能，以提高 空天姬 MissFisher 在使用技能与强心剂时的流畅性。
## 验证自动功能
#### 验证步骤如下：
1. 确认角色拥有钓饵 `万能拟饵`（如没有，请购买 1 个）。
2. 找到任意钓场，操控角色靠近并面朝钓场直到 `抛竿` 技能亮起。
3. 在游戏中消息窗口的 `聊天输入栏` 输入 `/e ktjdbg`，然后按下 `回车键` 。
#### 自动功能正常的表现：
1. 输入命令后，TTS 播报：“程序启动。”
2. 消息窗口出现一系列由文字与符号组成的当前预设参数信息，且出现“正在更换钓饵”的提示。
3. 成功更换钓饵后，角色自动使用技能 `撒饵`，然后 `抛竿`，同时游戏画面中央出现包含抛竿时长的动态计时悬浮窗（如启用了 `竿时悬浮窗`）。
4. 有鱼咬饵时，悬浮窗的计时停止，并显示当前咬饵鱼类的杆震类型，同时角色自动使用技能 `提钩`。
5. 在鱼成功上钩后，TTS 会播报：“Completed. ”，同时消息窗口出现刚刚上钩的鱼类的杆震类型、咬饵竿时等信息。
6. 最后，通过按下 `移动键` 或手动使用技能 `中断` 使角色收起钓竿时，悬浮窗消失，消息窗口出现本次垂钓的统计信息。
## 更新与卸载
### 如何更新：
**远程触发器**  
> 在默认的仓库设置下，每次启动 ACT 时 Triggernometry 都会自动更新远程仓库下的触发器，但你也可以手动更新它。

- **手动更新远程仓库：** 在 Triggernometry 内 `右键` 空天姬 MissFisher 的远程仓库 - 点击 `更新` - 等待更新完成。

**本地触发器**  
1. 在 Triggernometry 内找到 空天姬 MissFisher 触发器的 `主分组` ，通常名为 `新能源钓竿 空天姬` 或 `MissFisher Snapshot`。
2. 右键该 `主分组` - 点击 `移除` - 在弹出的对话框中点击 `确认` 。
3. 参照条目 [方法 2：导入为本地触发器](#方法-2导入为本地触发器) 中的方法步骤进行安装。

### 如何卸载：
**远程触发器**  
- 在 Triggernometry 内 `右键` 空天姬 MissFisher 的远程仓库 - 点击 `移除` - 在弹出的对话框中点击 `确认` 。

**本地触发器**  
- 参照条目 [如何更新](#如何更新) 中 `本地触发器` 部分的步骤 1-2 来卸载 空天姬 MissFisher。

## 常见问题
### 提示主界面窗口打开失败：
* **授予仓库允许触发器执行代码权限：**  
右键 `仓库` - 点击 `编辑` - 勾选 `允许触发器执行代码` - 点击 `是` - `保存更改` - 右键 `仓库` - 点击 `更新` - 等待仓库更新完成。  
  
* **检查 ACT 插件优先级：**  
按条目 [ACT 相关配置](#act-相关配置) 中提供的方法调整 ACT 插件优先级。  
   
### 提示动作超时： 
* **检查 ACT 插件优先级：**  
按条目 [ACT 相关配置](#act-相关配置) 中提供的方法调整 ACT 插件优先级。  
   
* **检查 空天姬 MissFisher 的用户配置：**  
打开 空天姬 MissFisher 的 `用户配置` 窗口 - 检查其中的 `宏语言` 设置项：  
游戏客户端是国服，则选择 `中文`；  
游戏客户端是国际服且选用语言是英语，则选择 `英文`；  
游戏客户端是国际服且选用语言是日语，则选择 `日文`；  
游戏客户端是国际服且安装了可使用中文宏的覆盖汉化补丁，则选择 `中文`；  
然后 `保存` - 使用 `/e ktjdbg` 进行调试。  
如果尝试了一个选项仍失败，请尝试另外两个选项，并进行调试。  
### 提示换饵失败：
* **检查 鲶鱼精邮差 PostNamazu 版本：**  
按条目 [ACT 插件](#act-插件) 的说明，安装合适版本的 鲶鱼精邮差 PostNamazu。  

* **检查 ACT 插件优先级：**  
按条目 [ACT 相关配置](#act-相关配置) 中提供的方法调整 ACT 插件优先级。   
   
* **检查游戏中消息窗口的相关频道是否已开启：**  
启用步骤：在游戏中找到消息窗口 - 点击 `消息窗口设置`（齿轮样式的按钮）- 找到 `消息过滤设置` 部分 - 点击任一 `消息栏` - 切换到 `通知` 分页 - 勾选频道 `系统消息`、`默语` 、`非玩家角色通告` 以及 `自己的采集信息` - 点击 `应用`。  
   
* **检查是否已启用相关 Dalamud 插件的更换钓饵指令功能：**  
找到条目 [启用更换命令换饵功能](#dalamud-相关配置) 中提到的任一 Dalamud 插件 - 启用其提供的更换钓饵命令功能。 
   
* **配置 Dalamud 插件 Chat2 的相关功能：**  
可能的解决方案：取消勾选 Chat2 的 `隐藏原版聊天窗口` - 使用 `回车键` 唤出一次原生消息窗口。如果仍然需要前文提到的功能可再次启用它。如果仍提示更换钓饵失败，请重启游戏。
   
* **配置其他会修改聊天窗口样式的 Dalamud 插件：**  
可能的解决方案：关闭所有修改 `消息窗口时间戳样式` 的 Dalamud 插件的相关功能，如果换饵仍然失败，尝试重启游戏。更进一步的：关闭所有修改了 `消息窗口样式` 的 Dalamud 插件，然后重启游戏。

### 海钓启动后无反应或提示海域获取失败：
* **检查 鲶鱼精邮差 PostNamazu 版本：**  
按条目 [ACT 插件](#act-插件) 的说明，安装合适版本的 鲶鱼精邮差 PostNamazu。  

* **检查 ACT 插件优先级：**  
按条目 [ACT 相关配置](#act-相关配置) 中提供的方法调整 ACT 插件优先级。   
   
* **检查游戏中消息窗口的相关频道是否已开启：**  
启用步骤：在游戏中找到消息窗口 - 点击 `消息窗口设置`（齿轮样式的按钮）- 找到 `消息过滤设置` 部分 - 点击任一 `消息栏` - 切换到 `通知` 分页 - 勾选频道 `系统消息`、`默语` 、`非玩家角色通告` 以及 `自己的采集信息` - 点击 `应用`。

- **如果全都确认无误并且你是 Cafe ACT，请尝试使用 呆萌 ACT。**
### 同步内置预设功能无反应：
* **授予仓库允许触发器执行代码权限：**  
右键 `仓库` - 点击 `编辑` - 勾选 `允许触发器操作文件` - 点击 `是` - `保存更改` - 再次右键 `仓库` - 点击 `更新` - 等待仓库更新完成。  

---
# 快速上手

> **在开始前，你必须已安装并正确配置了 空天姬 MissFisher 及必须的环境内容，否则，请参考 [安装指南](#安装指南) 进行安装及配置。**

## 主界面
空天姬 MissFisher 拥有一个包含主要功能的用户界面。   

> 打开主界面：使用命令 `/e ktj` ；或右键触发器分组中的 `空天姬主界面` - 点击 `执行（强制/条件）` 来打开 空天姬 MissFisher 的主界面。 

### 界面概览 

![主界面](https://github.com/user-attachments/assets/ce49c874-52f4-4326-be17-8ef6ca23a2b0)

① **公告栏：** 位于界面顶部左侧，展示鸣谢以及赞助名单。

② **同步按钮：** 在线同步 空天姬 MissFisher 的内置预设。

③ **配置按钮：** 打开 空天姬 MissFisher 的配置界面。

④ **航线按钮：** 向游戏发送一条包含航线预报的默语消息。

⑤ **模式下拉菜单：** 选择 `冲分` 、`蓝鱼` 或 `成就` 作为自动海钓模式。

⑥ **启动按钮：** 启动已选择的自动海钓模式。

⑦ **输入框：** 位于下拉菜单下方，输入鱼王或其他鱼类全称，按提示启动自动钓鱼。

⑧ **提示栏：** 位于界面底部，显示提示和诗句。 

## 使用 空天姬 MissFisher 自动钓鱼
要启动自动钓鱼，需要将空天姬预设发送到游戏内的默语频道。

对于非出海垂钓的自动钓鱼，有 2 种方法获取空天姬预设并启动自动钓鱼：

### 方法 1：使用内置预设

1. 使用 [FF14 鱼糕](https://fish.ffmomola.com/#/) 等工具查看想钓的鱼 - 复制目标鱼类的全称。
2. 准备好一些背包空间与所需的钓饵 - 前往目标鱼类所处的钓场并使角色面向钓场。
3. 在主界面的 `输入框` 输入鱼类中文全称 - `输入框` 颜色变深即存在对应的预设。
4. `鼠标左键双击` `输入框` 或按下 `回车键` 以启动自动钓鱼。

> 要查看指定鱼类的内置预设，可在游戏内输入 `/e 空天姬预设 查看 <鱼名>` 。  
> 有窗口期限制的鱼类：可在窗口期到来前启动， 空天姬 MissFisher 将根据预设中包含的手法进行预备动作。  
> 建议的提前启动时间：50 分钟减去窗口期的持续时长，以避免钓点警惕。  
> 有捕鱼人之识条件的鱼类：请在没有钓起任何钓场内鱼类的情况下启动，否则可能导致提前触发鱼识。
  
### 方法 2：自行编写预设
1. 参考 [如何编写空天姬预设](https://github.com/BlackCleaverLoli/MissFisher/wiki/Learn-Presets) [ [Gitee 镜像](https://gitee.com/bcloli/MissFisher/wikis/Learn-Presets) ] 来写一条空天姬预设。
2. 将编写好的空天姬预设发送到默语频道。

## 使用 空天姬 MissFisher 自动海钓
 空天姬 MissFisher 内包含了大量内置的适用于海钓的预设，且拥有自动识别航线的能力，这使得 空天姬 MissFisher 可以全自动地进行出海垂钓。

按以下步骤操作使用 空天姬 MissFisher 的自动海钓功能。

1. 使用 `航线按钮` 或查看 [FF14 鱼糕](https://next.ffmomola.com/oceanFishing) 查看想去的航线。  
2. 前往 `利姆萨·罗敏萨` 的 `x3.0 y12.7` 与 NPC `德瑞斯库托塔` 对话 - 进行乘船登记。  
3. 准备好 40 格或更多背包空间以及所需的钓饵 - 点击主界面中的 `模式下拉菜单` 展开菜单 - 选择想要的模式。  
4. 进入任务后 - 点击 `启动按钮` 。
5. 当接收到含有海域信息的 NPC 喊话时，空天姬 MissFisher 将自动 “抛竿” 。

> 关于模式：`冲分` 表示将使用尽可能获得更多渔分的钓法、`蓝鱼` 表示将使用可钓起稀有度蓝色的鱼类的钓法、`成就` 表示将使用尽可能多得钓起对应顺位的数量成就鱼类的钓法。  
> 顺位：在【航线预报】或 [FF14 鱼糕 航线](https://next.ffmomola.com/oceanFishing) 中从左到右的顺位，假设航线标识是 `气鲀四海¹/只有我最鳐摆²/冲分*` ，那么 `成就 2` 指 `只有我最鳐摆²`。

***
# 命令
- 可通过向默语频道发送命令来使用 空天姬 MissFisher 的功能。

## 打开窗口：
命令|描述
-|-
`/e ktj`<br>`/e 空天姬`|打开主界面
`/e ktjcfg`<br>`/e 空天姬配置`|打开用户配置界面
`/e ktjcmd`<br>`/e 空天姬生成器`|打开预设生成器界面
## 自动钓鱼：
命令|描述|备注
-|-|-
`/e <空天姬预设>`|使用预设中的参数自动钓鱼|自定义参数的预设<br>[如何编写空天姬预设](https://github.com/BlackCleaverLoli/MissFisher/wiki/Learn-Presets)<br>[（点击前往 Gitee 镜像）](https://gitee.com/bcloli/MissFisher/wikis/Learn-Presets)
`/e 冲分确定`<br>`/e 蓝鱼确定`<br>`/e 成就确定`<br>`/e 成就1确定`<br>`/e 成就2确定`|以指定模式自动海钓|携带 3 种海钓钓饵各至少 50 个<br>另携带至少 1 个万能拟饵<br>同时留出至少 40 格背包空间
`/e 空天姬预设 <鱼类全称>`<br>`/e ktjys <鱼类全称>`|使用对应的内置预设自动钓鱼|见条目 [支持的预设](#现在支持的内置预设)
`/e 空天姬预设 查看 <鱼类全称>`<br>`/e ktjys show <鱼类全称>`|查看对应的内置预设|以方便修改或作钓鱼准备
`/e ktjdbg`|调试自动功能|
`/e 空天姬撒饵`<br>`/e ktjchum`|自动时强制撒饵一次|无视采集力或其他条件
`/e 停止`<br>`/e kend`|停止自动钓鱼|
## 工具功能：
命令|描述|备注
-|-|-
`/e ktjsync`<br>`/e 空天姬同步`|在线同步内置预设|
`/e 计数 <参考数量><鱼名关键词>；`|显示计数悬浮窗|最多以如 `2鱼；3虾；` 的格式写入最多 3 组<br>鱼名关键词支持部分正则表达式
`/e ktjhx`<br>`/e 航线`|向默语频道发送航线预报|
## 命令别名：
> 需要游戏中消息窗口可见系统错误信息（红色字体），你需要勾选相应消息频道才能输入别名来使用功能  
  
部分 空天姬 MissFisher 的命令在输入时可省略发送到默语频道的主命令  
  
以下是支持别名命令的功能的部分命令：
命令|功能
:-|:-|
`/ktj`|空天姬主界面|
`/ktjcfg`|用户配置界面|
`/ktjcmd`|预设生成器|
`/ktjys <子命令>`|空天姬预设|
`/ktjdbg`|调试自动功能|
`/kend`|停止自动功能|
`/ktjsync`|在线同步内置预设|
`/ktjhx`|查询航线预报|
  
## 现在支持的内置预设
空天姬 MissFisher 内置了一些自动钓鱼预设，使用方法见 [使用内置预设](#方法-1使用内置预设) 。

预设的已审核情况：  
版本|鱼王|三语支持|备注
:-:|:-:|:-:|:-
2.0|全部支持|未支持|所有的鱼王和鱼皇
3.0|未支持|未支持
4.0|未支持|未支持
5.0|未支持|未支持
6.0|未支持|未支持  

> 同时还有作者与部分用户参与建设的 [预设文档](https://docs.qq.com/sheet/DVlNaQ012amF4SW1G?tab=BB08J2) ，现在已填有大部分鱼王、鱼皇的预设。
> 
> 这些预设会被时不时被作者推送至代码仓库中的 [内置预设表](https://github.com/BlackCleaverLoli/MissFisher/blob/main/Preset.csv) [ [Gitee 镜像](https://gitee.com/bcloli/MissFisher/raw/main/Preset.csv) ] ，你可以使用主界面的【同步按钮】或右键执行触发器 `更多` 分组下的 `在线同步内置预设` 来把它们同步到触发器中以供 空天姬 MissFisher 调用。
