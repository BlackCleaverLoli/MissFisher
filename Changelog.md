# 更新日志
---
# MissFisher 1.6.0(Snapshot 24w35f)　2024-08-31
> 概要：新增阶段参数；追加断杆日志适配；优化海钓。  
## 功能更新
### 7.0 版本  
- 适配“收杆”的日志行事件。
### 新增
**阶段参数**
- 可使空天姬在满足当前给定的目标数量时切换到指定的预设。
- 指定计数目标参数后，在所有手法参数与鱼识参数之间插入 `》阶段` 作为参数前缀标识，然后紧接想要在满足给定的目标数量后切换的预设，再使用 `《` 作为结束符。
  - 必须已给出目标计数参数，如“=1鱼；”
  - 阶段参数中接受完整的整条预设
  - 可以嵌套多个阶段参数
  - 鱼识参数将在所有阶段中生效
  - 切换到给定的阶段预设时，将使用最后提供的鱼识参数
  - 同时给出阶段参数、窗口期参数与鱼识参数时，将不会执行预触手法的自动预备，而将等待
    -因此想要使空天姬执行预触手法的自动预备时，请将窗口期参数置于内层的阶段参数中
- 更多预设例子请见仓库 Wiki。
## BUG 修复及品质级改动
### 品质级改动
**停止命令**
- 现在可以省略默语前缀了。
  
**自动钓鱼**
- 现在模式为“平钓”且存在以小钓大参数时也允许以小钓大了。
- 修正“套娃”手法下的渔技使用。
- 优化了一些技能使用时的采集力判断。
- 改变了“断杆”的实现以优化效率。
  
**自动海钓**
- 下调专一相关的采集力需求阈值，现在将更大概率使用专一连招。
  - 可用采集力阈值：大专三 1066 &gt;&gt; 999；专三 1018 &gt;&gt; 924；专双 718 &gt;&gt; 624
- 优化在幻海流对目标杆多重提钩的逻辑。
  - 幻海流剩余 63% 且采集力足以双大专三时将允许双重提钩。
  - 幻海流剩余 37% 时即使不满足上面的条件也允许双重提钩。
  - 幻海流剩余时间不多时清空采集力的条件保持不变。
- 收窄了幻海流清空采集力的剩余时间段：20 秒 &gt;&gt; 18 秒。
- 启动时的断杆现在只会在未咬饵时时执行。
- 移除：在幻海流带有大鱼且采集力将满时不再提钩防止溢出。
- 现在海钓结束时的最后一杆将尝试多提清空采集力。
  
**自动冲分**
- 幻海流清空采集力不足 400 时也将使用大鱼。
  
**主界面**
- 减少触发并打开两个主界面的概率。
- 赞助名单将可随预设更新。
  
**内置预设**
- 注释中即使缺少某符号也会告警低效预设了。
  
**程序变更**
- 重写了提钩组件以减少错误并提升可维护性。
- 删除了动作部分的一些 command 回调，将只使用 normalcommand 执行动作。

**其他改动**
- 增加了一些调试信息文本。
- 改动了部分文本。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】即使上一杆没钓到鱼也会错误检查之前钓到的鱼。
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】大鱼模式的专一垂钓的使用条件判断错误。
---
# MissFisher 1.5.13　2024-08-20
> 该正式版历经 2 个快照迭代  
> 概要：新增套娃手法参数，适配新的断杆技能，新增强制撒饵；修复一些问题。  
## 功能更新
### 强制撒饵
- 新增：使用“/e ktjchum”或“/e 空天姬撒饵”来强制使空天姬在下一次使用技能时尝试使用一次撒饵。
### 断杆
- 测试：在不满足提钩条件时将使用 7.0 新增的断杆技能来断杆。
### 手法参数
- 新增：在目标参数写入“套娃”，可使空天姬在耐心系技能及渔技剩余时间少于 54 秒时使用其一。
  - 防止因效果结束而被迫结束套娃。
## BUG 修复及品质级改动
### 品质级改动
  
**自动钓鱼**
- 为效果技能的使用条件增加简单的等级限制。
- 现在指定技巧提钩为“精准”或“强力”时将对非鱼王杆使用默认的技巧提钩。
- 测试：现在以小钓大将识别上一条鱼。
- 优化了以小钓大 II 的使用逻辑。
- 修正了对拍水目标杆提钩的采集力判断。
- 给定鱼识参数与窗口期时不再重复播报进入窗口。
- 为 2 个模式技能增加采集力判断，现在会在采集力不足以使用它们时跳过了。
  
**自动海钓**
- 预备启动不再反复自动前进。
  
**自动冲分**
- 扩大清空采集力的幻海倒时阈值：18 秒 &gt;&gt; 20 秒。
  
**自动蓝鱼**
- 索蒂斯的前置钓饵更改为“磷虾”。
  
**预设参数播报**
- 修复并增强信息可视化。
  
**窗口播报**
- 在窗口期内切换鱼识参数时不再反复播报进入窗口。
  
**换饵错误**
- 现在将在饵系万能拟饵时额外提示。
  
**用户配置**
- 现在可对确定操作的键码输入框留空来不使用确定操作相关功能。
  
**使用说明**
- 增加“使用问答”板块。
  
**系统音**
- 现在只有在与记录到的系统音音量不同时才会变更。

**其他改动**
- 改动了部分文本。
- 整理了用户使用部分的触发器布局。
- 增添一些相关链接触发器。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】一些技能常因为采集力管理的错误改动而不能正常使用。
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】指定窗口并在超出后再次启动会被留存的结束动作打断。
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】同竿型且未拍水时会意外使用非拍水参数。
- 修复了一个 BUG，该 BUG 曾导致：【自动海钓】有时会并发双重与单提。
- 修复了一个 BUG，该 BUG 曾导致：【脱钩播报】脱钩后不提钩时会错误地播报脱钩信息。
---
# MissFisher 1.5.12　2024-08-14
> 概要：现在可使用命令来更新预设；修复了一些问题。  
## 功能更新
### 空天姬预设
- 新增：现在可使用命令“/e ktj sync”“/e 空天姬同步”“/ktjsync”来同步内置预设。
## BUG 修复及品质级改动
### 品质级改动
  
**窗口**
- 不再在进入窗口时尝试确认收藏品。
  
**耐久告警**
- 当处在自动时将在耐久低于 10% 时告警。
  
**字典初始化**
- 现在将不会覆盖现有的内置预设。

**其他改动**
- 改动了部分文本。
- 整理了用户使用部分的触发器布局。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【预设启动】含有错误的饵鱼标识时仍然接受了参数并启动。
- 修复了一个 BUG，该 BUG 曾导致：【手动停止】没有正确地完全销毁所有自动参数。
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】指定了收藏品手法时不会使用撒饵。
- 修复了一个 BUG，该 BUG 曾导致：【自动海钓】预设给定拍竿型的情况下会导致并发两种提钩。
- 修复了一个 BUG，该 BUG 曾导致：【预备饵鱼】给定钓饵时没有进行准备动作。
- 修复了一个 BUG，该 BUG 曾导致：【预拍水动作】没有在收杆时禁用。
- 修复了一个 BUG，该 BUG 曾导致：【错误告警】没有正确地在耐久度 0 时告警并停止自动功能。
- 修复了一个 BUG，该 BUG 曾导致：【跨区初始化】没有在更换区域时正确地完全销毁所有自动参数。
---
# MissFisher 1.5.11　2024-08-13
> 概要：现在支持在线更新预设；提升体验，修复了一些 BUG。  
## 功能更新
### 空天姬预设
- 新增：现在可手动在线同步最新的内置预设（需要有能正常连接 GitHub 的网络）。
## BUG 修复及品质级改动
### 品质级改动
  
**空天姬预设**
- 更新了本体附带的预设。
- 现在特定的预设将被提醒是“低效”或“未审核”的。
- 将在试图启动未支持的预设时发生内置预设的说明。
  
**窗口期前的自动准备**
- 现在仅给定天气时也将进行自动准备。
  
**自动蓝鱼**
- 修正了索蒂斯的预设。
  
**使用说明**
- 删改了文本。
  
**键码动作**
- 精简了动作。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【航线预报】在除东 8 区时区外的时区会错报时间。
- 修复了一个 BUG，该 BUG 曾导致：【窗口期前的自动准备】给定钓饵参数时启动了两次。
- 修复了一个 BUG，该 BUG 曾导致：【竿时控制】没有在拍最大竿时大于给定目标竿时时应用前者。
- 修复了一个 BUG，该 BUG 曾导致：【计数目标】丢失了可使用“^”代表鱼名起始的特性。
---
# MissFisher 1.5.10　2024-08-08
> 概要：修复了一些问题。  
## BUG 修复及品质级改动
### 品质级改动
  
**强心剂**
- 解除了强心剂键码的客户端语言限制（实际上在上个正式版就已经改动）。
  
**自动成就**
- 修正了鳐不可及的预设。
---
# MissFisher 1.5.9　2024-08-08
> 概要：修复了一些问题。  
## BUG 修复及品质级改动
### 品质级改动
  
**自动蓝鱼**
- 修正了索蒂斯的预设。
  
**换饵转发**
- 解除了换饵指令调用的客户端语言限制。
---
# MissFisher 1.5.8　2024-08-07
> 概要：优化体验；修复了一些 BUG。  
## BUG 修复及品质级改动
### 品质级改动
  
**换饵转发**
- 临时解除了换饵指令调用的客户端语言限制。
  
**换饵错误**
- 修改了文本。
  
**用户配置**
- 修改了多语言选项的文本。
  
**主界面**
- 修改了部分提示文本。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【自动蓝鱼】内置的索蒂斯的预设写法错误而无法启动空天姬。
---
# MissFisher 1.5.7　2024-08-07
> 概要：新增预备饵鱼特性；优化体验；修复了一些 BUG。  
## 功能更新
### 预备饵鱼
- 现在将自动在给出窗口期且为进入时尝试钓到给出的阶段目标，然后暂停抛竿。
  - 如“平钓拍某鱼 ！饵鱼》！！”将不会尝试预拍水“某鱼”而是尝试钓到“饵鱼”后暂停。
## BUG 修复及品质级改动
### 品质级改动
  
**程序变更**
- 拆分了一个处理数据用的触发器“咬钩计数器”以提升易维护性。

**其他改动**
- 更改了部分信息文本。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【竿时悬浮窗】在一个极罕见的情况下不会停止计时。
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】包含平钓与收藏参数时撒饵动作的判断可能出现错误。
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】预设含有钓饵参数时预拍水没有正常启动。
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】预设没有包含最终目标时钓上鱼时不会继续抛竿。
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】不能识别日文中的分割符“・”。
- 修复了一个 BUG，该 BUG 曾导致：【自动蓝鱼】在幻海结束时钓上蓝鱼没有播报。
---
# MissFisher 1.5.6　2024-08-04
> 自上个正式版起 1 个快照的累积更新内容  
> 概要：优化体验；修复了一些 BUG。  
## 功能更新
### 断杆
- 修改：存在拍水参数且未拍水、最大拍水竿时大于最大 1 阶竿时且非窗口期内，会应用最大拍竿时断杆。
## BUG 修复及品质级改动
### 品质级改动
  
**自动海钓**
- 进入海钓区域时将提示可提前启动。
  
**自动蓝鱼**
- 调整了索蒂斯的预设。
- 修正了珊瑚蝠鲼的预设。
- 修正了梅泉宝龟的预设。
  
**自动钓鱼**
- 增加包含了计数参数时的提示语。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】专一和拍水会在断杆时错误地尝试使用。
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】不符合指定鱼名时也会进行以小钓大。
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】计数功能不正常。
- 修复了一个 BUG，该 BUG 曾导致：【天气报错】在切换在不包含天气参数的预设时报错。
---
# MissFisher 1.5.5　2024-08-03
> 该正式版历经 2 个快照迭代 自上个正式版起 3 个快照的累积更新内容  
> 概要：优化体验；修复了一些 BUG。  
## 功能更新
### 预设
- 新增：【预设预览】输入“/e 空天姬预设 查看 鱼名全称”来预览预设（或/e ktjys show 鱼名全称）。
## BUG 修复及品质级改动
### 品质级改动
  
**自动钓鱼**
- 缩短了超时跳到下一个动作的延时（实际上在上个正式版就已经改动）。
- 略微减少动作时未成功使用强心剂的概率。
- 略微增加攒鱼计模式再次使用耐心的概率。
  
**自动蓝鱼**
- 调整了索蒂斯的预设。
  
**主界面**
- 在本次运行中职业是捕鱼人会自动打开。

**其他改动**
- 更改了部分标识文本。
- 更改了部分调试信息。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】预设存在天气参数时没有正常在给定的 ET 启动。
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】没有获得过鱼计时无法判断某些动作的使用条件。
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】某些技能在使用时错误判断了当前 GP。
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】在罕见的情况下专一的判断会出现错误。
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】没有正确进入预拍水模式。
- 修复了一个 BUG，该 BUG 曾导致：【自动钓鱼】极罕见情况下会错误判断拍水和专一的条件。
- 修复了一个 BUG，该 BUG 曾导致：【自动海钓】自动功能在海域 3 时提前停止了。
- 修复了一个 BUG，该 BUG 曾导致：【自动海钓】强心剂补充使用只执行了一轮。
- 修复了一个 BUG，该 BUG 曾导致：【自动成就】成就“鳐摆”的一个幻海流预设的钓饵是错误的。
---
# MissFisher 1.5.4　2024-08-01
> 该正式版历经 2 个快照迭代  
> 概要：增加自动海钓预备启动功能；修复一些问题。  
## 功能更新
### 自动海钓
- 新增：【预备启动】当海域未转移完成时启动自动海钓，将进入预备启动状态。
## BUG 修复及品质级改动
### 品质级改动
  
**自动钓鱼**
- 移除了预设输入的冷却。
  
**自动海钓**
- 启动时将提钩以帮助临时切换模式。
- 因出入幻海流而切换预设时不再以小钓大。
- 强心剂补充使用的检测将覆盖更多时段。
- 强心剂的补充使用将在第 3 个海域的可抛竿时间结束后被限制。
- 当处在某些在策略上不应提鱼王杆以减少触幻概率的海域，预设输入时将提示当前策略。
- 海钓结束时将检查并结算本轮垂钓统计。
  
**自动冲分**
- 调整了几个幻海流预设。
  
**航线预报**
- 调整了一些冲分/保分标识。
  
**触幻钓法**
- 在自动海钓时将不播报不发送钓法的原因。
  
**调试信息**
- 增添并调整了一些调试信息。
  
**采集力更新预备**
- 将更加频繁。

**其他改动**
- 调整了一些指引性文本。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【初始化】没有在英文或日文文本的客户端生效。
- 修复了一个 BUG，该 BUG 曾导致：【钓场获取】没有在英文或日文文本的客户端生效。
- 修复了一个 BUG，该 BUG 曾导致：【错误告警】会意外打断收杆时的处理动作。
- 修复了一个 BUG，该 BUG 曾导致：【自动海钓】在携带大鱼且采集力即将满额时没有提起非目标杆。
- 修复了一个 BUG，该 BUG 曾导致：【自动海钓】幻海结束时有时没有正常切换预设或提钩。
- 修复了一个 BUG，该 BUG 曾导致：【自动海钓】海钓结束后仍尝试更换钓饵。
- 修复了一个 BUG，该 BUG 曾导致：【自动蓝鱼】因预设输入进入冷却而没有成功切换预设。
---
# MissFisher 1.5.3　2024-07-29
> 该正式版历经 8 个快照迭代  
> 概要：新增了预设功能和一些特性；优化功能与体验；修复了一些 BUG。  
## 功能更新
### 多语言
  
**多语言**
- 重新支持英文端与日文端。
### 自动功能
- 新增：【预设】使用“/ktjys”或“/e ktjys”或“/e 空天姬预设”加鱼类全称以启动预设。
  - 如：“/ktjys 猛犸章鱼”
- 新增：【预设】支持所有 2.0 版本钓场之王（皇）的预设（预设的鱼名暂仅适配国服）。
- 新增：命令“/ktjdbg”来启动自动功能调试。
- 移除：旧的预设功能被移除了。
### 鱼类名称匹配
- 新增：现在支持三种语言及相关的符号，但不能使用空格（最终目标与专一目标除外）。
- 新增：现在接受以“（鱼名甲、鱼名乙）”的格式输入鱼名，效果等同于正则表达式“鱼名甲|鱼名乙”。
- 新增：【拍击水面】现在接受如“（^(?!spectral|幻光)[^幻]）”的格式，效果等同于正则的否定前瞻。
### 相关窗口
  
**主界面**
- 新增了文本框以使用预设功能。
  
**主界面**
- 将在使用侧栏按钮时检查游戏进程。
  
**配置界面**
- 新增了语言端设置。
### 调试信息
  
**调试信息**
- 现在将默认开启。
## BUG 修复及品质级改动
### 品质级改动
  
**自动钓鱼**
- 使用强心剂的动作将略微延后以减少错误判断采集力的概率。
- 将计算当前可用的所有采集力来更多地撒饵与拍水。
  
**自动海钓**
- 增加专大三的等待阈值到最多 66 秒（原 45 秒）。
- 调整了成就专三和蓝鱼专双的连招使用阈值。
- 未触发幻海时的普海将不再以小钓大。
- 在非垂钓状态时当强心剂冷却完成且采集力缺口大时将尝试使用它。
- 修正了相当一部分海域的预设。
  
**自动冲分**
- 现在将不再“摸蓝鱼”。
- 将因幻海流预期渔分过低而采取不触幻预设的适应海域增加到 4 个。
  
**自动蓝鱼**
- 哈弗古法的预设现在将拍水喷射蝠鲼并且不再多提，且鱼识时将提轻杆拍奇虾。
- 索蒂斯的预设现在将反复拍水 2 条前置鱼。
  
**自动成就**
- 修改了“小淘气”航线 3 幻中的目标竿时，现在将会专一珊瑚海龙。
- 修改了“横路不通”航线 2 幻，现在将对 5.1 以上三提，且拍 5.1 以下海胆。
  
**天气模式**
- 增加了一个报错以提示用户开启相应 API。
- 增加了一个提示以说明功能特性。
  
**换饵动作**
- 将在更换成功时发送一条消息。
  
**换饵错误**
- 优化了重置方法，现在将不再需要重启 ACT 或是手动执行触发器。
  
**航线预报**
- 添加了 1 个保分标识。
  
**触幻钓法播报**
- 随机的延迟时间将更加平滑。
  
**错误告警**
- 将在发生错误时发送一条消息。
  
**调试信息**
- 幻海触发时将使用 TTS 播报。
- 切换鱼识预设的提示将被调试信息设置限制。
- 增添了一些调试信息。

**其他改动**
- 更新并调整了一些指引性文本。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【天气模式】在超出 ET 时没有停止。
- 修复了一个 BUG，该 BUG 曾导致：【预触模式】在窗口期内会错误地使空天姬停止抛竿。
- 修复了一个 BUG，该 BUG 曾导致：【自动海钓】在采集力低时错误使用专一。
- 修复了一个 BUG，该 BUG 曾导致：【自动海钓】在幻海与海域同时结束时尝试换饵并且失败报错。
- 修复了一个 BUG，该 BUG 曾导致：【自动蓝鱼】在幻海与鱼识同时结束时不继续抛竿。
- 修复了一个 BUG，该 BUG 曾导致：【自动蓝鱼】在幻海结束时没有切换预设。
- 修复了一个 BUG，该 BUG 曾导致：【竿时信息】没携带撒饵状态时没有清除对应的前置。
- 修复了一个 BUG，该 BUG 曾导致：【竿时信息】有时会因空值在日志报错。
---
# MissFisher 1.5.2　2024-07-21
> 概要：新增了可指定天气的自定义参数；优化用户体验；修复了一些 BUG。  
## 功能更新
### 自动功能
- 新增：【天气参数】可使空天姬在符合指定的天气时才抛竿。
  - 详细的参数写法请参阅说明文档。
- 新增：【最终目标参数】写入“空岛”时，将在每个 ET 都检查天气，而不仅是在天气转换时才检查。
## BUG 修复及品质级改动
### 品质级改动
  
**自动蓝鱼**
- 索蒂斯的预设现在将拍水海神印，并且专一天堂之钥。
  
**航线预报**
- 添加了几个冲分 / 保分标识。
  
**启动播报**
- 增加了对天气参数的播报。

**其他改动**
- 改动了一些提示性文本。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【最终目标参数】即使写入“不撒饵”也依旧会使用撒饵。
- 修复了一个 BUG，该 BUG 曾导致：【自动冲分】没有在三提后使用恩宠将采集力回复到 700 以上。
- 修复了一个 BUG，该 BUG 曾导致：【自动蓝鱼】大鱼模式时会使用耐心II。
- 修复了一个 BUG，该 BUG 曾导致：【自动蓝鱼】鱼识时即使不是拍水目标杆也会提起。
- 修复了一个 BUG，该 BUG 曾导致：【自动蓝鱼】幻海时在本该多提时意外地并发了单提。
- 修复了一个 BUG，该 BUG 曾导致：【自动蓝鱼】幻海将结束时处在特定海域时没有清空采集力。
- 修复了一个 BUG，该 BUG 曾导致：【自动成就】在幻海结束后如剩余时间在 3:10 前会意外使用耐心II。
- 修复了一个 BUG，该 BUG 曾导致：【竿时信息】有时会因空值在日志报错。
---
# MissFisher 1.5.1　2024-07-18
> 概要：明确原先就存在的目标计数关键词特性；优化用户体验；修复了一些 BUG。  
## 功能更新
### 自动功能
  
**目标计数**
- 关键词现在将可以使用正则表达式的起始符“^”（实际上这个特性在旧版本就存在）。
  - 如“^矛齿鲸”将只计入名字以“矛齿鲸”起始的鱼。
## BUG 修复及品质级改动
### 品质级改动
  
**海钓模式**
- 幻海触发时的断杆将随机延迟一小段时间。

**其他改动**
- 调整了一些指引性文本。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【自动成就】一个航线的普海预设没有正常应用（因幻海预设错误）。
- 修复了一个 BUG，该 BUG 曾导致：【自动蓝鱼】即使携带熟练渔技也会使用大鱼。
- 修复了一个 BUG，该 BUG 曾导致：【航线预报】不能用“/ktjhx”查询。
- 修复了一个 BUG，该 BUG 曾导致：【目标计数】悬浮窗在显示牧宝时没有正确排除“^”符号。
- 修复了一个 BUG，该 BUG 曾导致：【版本检测】没有适配官库的迭代版本号而错误报错。
- 修复了一个 BUG，该 BUG 曾导致：海域映射码不存在的报错没有正常启用。
---
# MissFisher 1.5.0　2024-07-17
> 该正式版经历了 16 个快照版迭代  
> 概要：更新自动蓝鱼与自动数量海钓成就模式；增加了数个用户界面窗口；优化大量功能；修复了一些 BUG  
## 功能更新
### 多语言
  
**多语言**
- 不再支持英文端或者日文端，即使它们拥有中文端本地化补丁，现在将只支持中文端。
  - 除非有用户愿意协助我进行国际服测试。
### 自动功能
  
**海钓蓝鱼**
- 现在可在海钓区域使用“/e 蓝鱼确定”启动自动蓝鱼。
  
**海钓成就**
- 现在可在海钓区域使用“/e 成就确定”启动自动数量成就。
  - 同时，使用“/e 成就1启动”和“/e 成就2启动”来选择航线中不同顺位标识的成就目标。
  
**拍击水面**
- 将在鱼识绝命杆结束时自动解除状态效果。
- 目标关键词现在将可以使用正则表达式的起始符“^”。
  - 如“拍^[^幻]”将不会对“幻”开头的鱼使用拍水。
  
**光标换饵**
- 现在被移除了。
### 相关窗口
  
**主界面**
- 窗口包含常用功能，使用“/e ktj”或“/e 空天姬”来打开它。
  
**用户配置界面**
- 包含所有用户配置，通过“/e ktjcfg”或主界面窗口的按钮来打开它。
  - 主分组下的设置现在被移入配置界面。
- 详细的窗口更新日志请打开【主界面】分组查看。
### 指令
- 部分功能将响应不使用默语时的游戏系统报错日志。
  - 支持的有：界面指令、自动海钓指令、停止指令。
  - 例如直接输入“/ktj”时，也会响应并打开主界面。
## BUG 修复及品质级改动
### 品质级改动
  
**自动动作**
- 适配相关卫月插件的用户宏队列功能。
  
**自动模式**
- 现在将在启动时检查鲶鱼精。
  
**海钓模式**
- 需要多提时更加灵敏地判断是否可使用大鱼。
- 开始时将不再尝试通过动作移除“收藏品采集”状态效果。
- 启动时将播读“（模式）启动”。
- 启动时将检查输入的海钓模式是否可用。
  
**冲分模式**
- 不再对部分相对高概率的高价值幻海鱼使用专一。
- 海域处在第 3 时段时将不使用耐心 II。
  
**鱼计模式】和【计数模式**
- 的纯计数，现在将在完成时完全停止自动动作。
  
**换饵动作**
- 减少某些情况下未能成功换饵的概率。
- 如超时将报错。
- 无法“bait”换饵时将报错。
  
**采集力悬浮窗**
- 将在转换到非采集职业时停用。
  
**航线预报**
- 现在将报告航班情况，例如未开放登记时将给出等待的所需时间。
  
**钓饵播报**
- 随机延迟调整 2~5 &gt;&gt; 3~5 秒，同时在幻海无成就或蓝鱼目标且未启动自动时会翻 3 倍。
  
**系统音**
- 禁用自动时关闭系统音时，系统音也不会被空天姬恢复了。
  
**空天姬指北**
- 更新了一些相关链接。
  
**配置界面**
- 未配置强心剂键码时将在空天姬触发时自动弹出。

**其他改动**
- 减少初始化失败的概率。
- 优化获取鱼计层数的效率。
- 更新并调整了一些指引性文本。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【拍击水面】有时会错误判断鱼名。
- 修复了一个 BUG，该 BUG 曾导致：【捕鱼人之计】相关的技能有时即使满足条件也没有使用。
- 修复了一个 BUG，该 BUG 曾导致：【海钓模式】在超出窗口后仍尝试动作。
- 修复了一个 BUG，该 BUG 曾导致：【幻海悬浮窗】有时会在退出海钓时因变量缺失而报错。
- 修复了一个 BUG，该 BUG 曾导致：【航线预报】中的一个钓饵名是错误的。
- 修复了一个 BUG，该 BUG 曾导致：【航线预报】在接近偶数整点时播报的航线会错误。
---
# MissFisher 1.4.32　2024-06-25
> 概要：提供另一个换饵方案；优化用户体验。  
## 功能更新
### 自动功能
  
**换饵动作**
- 现在可使用卫月 SimpleTweaksPlugin 插件的 Bait 功能进行换饵（需鲶鱼精 1.3.3.0）
### 命令生成器
- 更新至 0.6 beta 2（相关更新内容请打开其分组查看）。
## BUG 修复及品质级改动
### 品质级改动
  
**采集力悬浮窗**
- 修改触发逻辑以减少性能问题。
  
**咬饵时间**
- 现在将固定显示 1 位小数（即使小数的第 1 项是 0）。
---
# MissFisher 1.4.31　2024-06-24
> 概要：增加悬浮窗字号配置，为部分功能增加英文命令；优化用户体验，修复了一些 BUG。  
## 功能更新
### 工具功能
- 新增：【悬浮窗字号】配置，可以自动选择，或改变悬浮窗显示的字号，有 4 种预设的大小。
  
**航线预报**
- 现可使用“/e ktjhx”来查询。
### 自动功能
  
**命令生成器**
- 现可使用“/e ktj”来打开。
**停止命令**
- 现可使用“/e kend”来停止。
## BUG 修复及品质级改动
### 品质级改动
- 调整了一些指引性文本。
  
**自动海钓**
- 放宽“专大三”连招的最大等待时间 22 秒 → 41 秒（约算）。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【命令生成器】触发器被强制执行时报错。
- 修复了一个 BUG，该 BUG 曾导致：【竿时悬浮窗】会在转移海域时被关闭且没被自动开启。
---
# MissFisher 1.4.30　2024-06-24
> 概要：窗口现要求高级触发器至少 1.2.0.115；优化用户体验、修复了一些 BUG。  
## 功能更新
### 工具功能
- 修改：【钓饵播报】将随机延迟 2-5 秒。
### 自动功能
  
**命令生成器**
- 现要求高级触发器 1.2.0.115；相关更新日志请打开其分组查看。
## BUG 修复及品质级改动
### 品质级改动
  
**鱼王命令文档**
- 现在可以直接执行以前往文档。
  
**自动冲分**
- 微调了某个幻海的参数。

**其他改动**
- 调整了一些指引性文本。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【竿时&amp;幻海悬浮窗】配置调整后在相应动作触发时没有正确应用。
---
# MissFisher 1.4.29　2024-06-22
> 概要：合并命令生成器到空天姬中，修复了一些 BUG。  
## 功能更新
### 自动功能
- 新增：【命令生成器】现整合到空天姬本体中，相关更新日志请打开相应触发器分组查看其中的触发器。
- 新增：钓到鱼后再输入拍水或专一参数也能判断刚才钓到的鱼了，同样适用【鱼识参数】切换时。
## BUG 修复及品质级改动
### 品质级改动
  
**空天姬指北**
- 更新了鱼王文档链接。
  
**自动命令**
- 现在即使命令后有注释也能被接受了。
- 现在即使“专一”与“专一鱼名”间有空格符也能被接受了。
  
**自动冲分**
- 当幻海即将结束时退出并重启自动，也能正常判断即将结束时段了。
  
**航线预报**
- 中为两个远洋航线添加&quot;保分&quot;标识。
  
**调试模式**
- 将在画面左上角显示当前命令。

**其他改动**
- 增添并调整了一些指引性文本。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【自动冲分】当幻海即将结束并专一时 GP 不足三重不会提竿。
- 修复了一个 BUG，该 BUG 曾导致：【停止命令】后仍会自动抛竿。
---
# MissFisher 1.4.28　2024-06-20
> 概要：修复了一些 BUG。  
## 功能更新
### 自动功能
- 新增：【动作超时报错】当推送的第一个动作超过一定时间没有被使用时将抛出超时错误。
- 修改：【停止命令】现在更好用了，将完全销毁自动参数并停止它的功能。
## BUG 修复及品质级改动
### 品质级改动
  
**航线预报**
- 现在将含有所需钓饵。
  
**触幻钓法播报**
- 现在因所处海域的幻海流分值过低而不播报触幻钓法时发送一条提示信息。
  
**自动海钓冲分**
- 调整了部分幻海的目标杆。
  
**自动参数**
- 减少输入参数的等号附近存在空格时不响应的概率。

**其他改动**
- 调整了一些指引性文本。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【自动海钓冲分】在某个幻海不会直接提起预期的目标杆。
- 修复了一个 BUG，该 BUG 曾导致：【海域预报】会在整点前报出错误的结果。
- 修复了一个 BUG，该 BUG 曾导致：【幻海时间】会在退出海钓时因变量缺失而报错。
- 修复了一个 BUG，该 BUG 曾导致：【自定义参数】缺失第 1 阶段竿型时仍启动。
- 修复了一个 BUG，该 BUG 曾导致：【停止命令】可能会导致获得的海钓数据错误。
---
# MissFisher 1.4.27　2024-06-17
> 概要：修复了一些 BUG。  
## BUG 修复及品质级改动
### 品质级改动
  
**调试模式**
- 中断杆日志文本“n 秒（估算）”→“n* 秒”。
  
**说明文档**
- 调整了一些文本。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【自动】时开启一个以上的游戏时键码会被错误发送到非预期的窗口。
- 修复了一个 BUG，该 BUG 曾导致：【自动】时使用互斥的技能时仍会尝试使用以小钓大。
- 修复了一个 BUG，该 BUG 曾导致：【海钓模式】当使用以小钓大跨越海域，钓饵不合适时，不会抛杆。
---
# MissFisher 1.4.26　2024-06-16
> 概要：修复了一些 BUG。  
## BUG 修复及品质级改动
### 品质级改动
- 对【调试模式】断杆的竿时减 1 使其更接近实际值。
- 修改了【调试模式】的部分日志文本。
- 修改了部分指引文本。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：会残留以小钓大的【竿时信息】。
- 修复了一个 BUG，该 BUG 曾导致：键码没有被正确发送给游戏，而错误发送到含有同名的窗口。
---
# MissFisher 1.4.25　2024-06-15
> 概要：新增【调试模式】，新增配置项；优化用户体验，修复 BUG。  
## 功能更新
### 工具功能
- 新增：【调试模式】配置启用后将输出空提、未提、及钓起的鱼的竿时等信息到默语频道。
- 移除：【导出配置】及【导入配置】被移除了。
### 自动功能
- 新增：【系统音恢复数值】配置，可以设置恢复到的系统音音量。
- 新增：【自动时防板凳键码】配置，可以设置防板凳使用的热键键码。
- 将【自动时丨关闭 FFXIV 操作音】合并到【用户配置】，项名为【自动时关闭游戏操作音】。
- 将【自动时丨告警错误】合并到【用户配置】，项名为【自动时告警错误】。
## BUG 修复及品质级改动
### 品质级改动
  
**收杆播报**
- 现在将报告在鱼识内抛出的以小钓大杆数。
- 为【航线预报】中的几个航线额外添加冲分标识。
- 当【用户配置】的部分项为空，保存时会填入一个默认值。
- 启动时将附带一条停止命令的提示。
- 为【用户配置】的项及【海钓模式】命令添补了一些指引。
- 新增【空天姬指北】自定义参数自动命令指北。
  
**说明文档**
- 文本被整理并调整了格式。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：【播报频道】被默认为小队频道。
- 修复了一个 BUG，该 BUG 曾导致：自动时因【防板凳】组合键键码问题导致技能无效。
- 修复了一个 BUG，该 BUG 曾导致：自动时当持有大鱼猎手，有时会错误使用耐心系技能。
- 修复了一个 BUG，该 BUG 曾导致：自动时当持有耐心系 Buff，有时会错误使用大鱼猎手。
- 修复了一个 BUG，该 BUG 曾导致：自动时【海钓模式】当拥有大鱼并在采集力满额时会抢夺三提。
- 修复了一个 BUG，该 BUG 曾导致：自动时【海钓模式】在幻海以小钓大后海域更换，会钓饵报错。
- 修复了一个 BUG，该 BUG 曾导致：自动时当用以小钓大抛出第一杆，不会正确应用下一阶段参数。
---
# MissFisher 1.4.24　2024-06-12
> 概要：优化用户体验，修复了一些 BUG。  
## BUG 修复及品质级改动
### 品质级改动
- 现在使用强心剂时将更新一次【采集力悬浮窗】。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：自动时当以小钓大存在【套娃参数】不会正确应用下一阶段参数。
- 修复了一个 BUG，该 BUG 曾导致：自动时交换到无【钓饵参数】的【鱼识参数】时会执行【换饵动作】。
- 修复了一个 BUG，该 BUG 曾导致：没有正确应用【错误告警】的用户配置。
- 修复了一个 BUG，该 BUG 曾导致：处在【耐心与收藏模式】时有时会使用大鱼猎手。
---
# MissFisher 1.4.23　2024-06-10
> 概要：新增计数功能与鱼识的联动；自动时提高拍水和采集力资源的利用率。  
## 功能更新
### 工具功能
- 新增：获得鱼识时将清空计数，并且携带鱼识时将不会进行计数。
### 自动钓鱼
- 当未指定拍水竿时而拍水竿型咬饵时，将不再被第 1 阶段的竿时限制而是将其提起。
- 现在缺少采集力时将优先使用强心剂而不是恩宠。
## BUG 修复及品质级改动
### 品质级改动
- 自动时为【收杆播报】添加了代表本轮为自动的特殊符号黑框“A”。
- 自动时当手动抛竿并跨过【进入窗口】而鱼咬饵时，不再尝试执行动作。
- 现在未填写【自定义音效报杆】的文件路径时将自动取消勾选【自定义音效报杆】。
- 现在检测到抹茶提供的咬饵日志时，会关闭【记录网络数据】以减少可能的性能浪费。
- 整理了【用户配置】的文本并添加了一些指引。
- 将【更新日志】从【说明文档】中分离，并采取更加清晰的格式来编写。
### BUG 修复
- 修复了一个 BUG，该 BUG 曾导致：当次运行首次咬饵如开启了【抹茶兼容模式】，会显示错误的竿时。
- 修复了一个 BUG，该 BUG 曾导致：自动时会对以小钓大钓起的鱼使用拍击水面或专一垂钓。
---
# MissFisher 1.4.22　2024-06-02
### 功能功能
- 修复切换职业会清除计数的问题。
### 自动功能
- 现在进入窗口时会尝试确认收藏品。
- 修复使用单组计数特殊参数时错误接受为目标参数的问题。
- 修复切换鱼识参数时会播报启动的问题。
---
# MissFisher 1.4.21　2024-05-31
### 自动功能
- 修复有时会提起非目标杆的问题。
- 修复抹茶替代方案在不使用自动功能时不能自启的问题。
- 现在不带收藏品模式参数时将不会自动确认收藏。
---
# MissFisher 1.4.20　2024-05-28
### 自动功能
- 修复处在收藏品 Buff 时一直发送键码的问题。
- 修复当包含换饵参数时 ET 计时抛竿会失效的问题。
### 工具功能
- 修复输入参数时播报的 ET 没有换行的问题。
---
# MissFisher 1.4.19　2024-05-28
### 自动功能
- 修复强心剂 GP 记录以及耐心终杆的错误没有被初始化纠正的问题。
- 修复海钓模式耐心时仍使用大鱼猎手的问题。
### 工具功能
- 现在每次使用都会检查并自动按需开关抹茶替代方案。
- 增添了可以禁用采集力悬浮窗的配置项。
---
# MissFisher 1.4.18　2024-05-26
### 自动功能
- 修复冲分幻海时因参数全提而导致大恩连招反复触发而快速消耗鱼计的问题。
- 修复有时因鱼名日志出现得比耐心移除日志晚而不对目标鱼进行专大三的问题。
---
# MissFisher 1.4.17　2024-05-25
### 自动功能
- 修复在冲分模式幻海可专一时使用恩宠将鱼计全部清空的问题。
- 修复在强心剂可用且能将采集力抬升到阈值以上时仍会使用恩宠的问题。
- 修复因钓饵错误而中止海钓模式并报错的问题。
- 修复在上一个问题发生并更换海域后会执行幻海参数问题。
- 修缮海钓手法。
### 工具功能
- 修复预报航线时间不正确的问题。
---
# MissFisher 1.4.16　2024-05-24
### 自动功能
- 上调幻海将尽的三提阈值 15 》 18 秒。
- 当前职业非捕鱼人时也可使用自定义预设相关命令了。
- 优化幻海手法。
### 工具功能
- 现在支持输入命令来查询当前及下次出海垂钓的航线（以鱼糕推荐标签作为标识）。
---
# MissFisher 1.4.15　2024-05-23
### 自动功能
- 现在存在鱼识模式相关参数的鱼识消失时会判断是否是鱼识绝命杆并延后模式切换。
---
# MissFisher 1.4.14　2024-05-22
### 自动功能
- 修复当命令中存在计数参数时仍会启用预拍水的问题。
- 修复错判包含有饵鱼的以小钓大到的鱼为套娃的问题。
- 优化幻海手法。
---
# MissFisher 1.4.13　2024-05-20
### 自动功能
- 修复恩宠和大鱼联动时错判采集力的动作问题。
- 修复蓝龙幻海没有采用正确钓法的问题。
---
# MissFisher 1.4.12　2024-05-19
### 功能功能
- 现在将检查抹茶插件是否安装。
- 再次尝试修复计算急速海豚失败的问题。
- 切换区域将不再导致采集力计时消失了。
### 自动功能
- 现在在输入指令时将检测配置。
- 上调幻海将尽的三提阈值 10 》 15 秒。
- 幻海流时大鱼与恩宠的联动更灵敏了。
- 优化幻海手法。
---
# MissFisher 1.4.11　2024-05-19
### 自动功能
- 现在可三提时单提将不再抢夺。
- 修复计算急速海豚 Buff 失败的问题。
---
# MissFisher 1.4.10　2024-05-19
### 功能功能
- 修复了带有新属性的竿时进入时会报错并可能导致录入失败的问题。
### 自动功能
- 现在幻海冲分不再会无大鱼三提。
- 在持有急速海豚 Buff 时将正确计算 GPS。
- 修缮海钓手法。
---
# MissFisher 1.4.9　2024-05-19
### 功能功能
- 修复竿时不统计外海的问题，减少了同样属性的竿时没有覆盖的几率。
### 自动功能
- 海钓手法持续优化中。
---
# MissFisher 1.4.8　2024-05-18
### 自动功能
- 修复海钓时幻后不提的问题。
---
# MissFisher 1.4.7　2024-05-17
### 自动功能
- 修复了以小钓大阶段判断错误的问题。
---
# MissFisher 1.4.6　2024-05-17
### 工具功能
- 现在默认将自动统计海钓竿时，可选择关闭。
- 海钓手法持续优化中。
---
# MissFisher 1.4.5　2024-05-17
### 自动功能
- 现在脱钩播报含有多提。
- 删除部分海域的蓝鱼参数防止影响冲分。
- 海钓手法持续优化中。
---
# MissFisher 1.4.4　2024-05-16
### 自动功能
- Buff 监控现在匹配 ID 而不是 Name。
- 修复某些情况下不能正确获取航线的问题。
- 海钓手法持续优化中。
---
# MissFisher 1.4.3　2024-05-15
### 自动功能
- 支持钓饵参数，在安装插件的情况下自动换饵，否则使用键码发送。
- 增加了幻海播报频道设置。
- 解除了确定热键设置对于自动功能的限制。
- 修复了国际服不会使用强心剂的问题。
- 修复指定中括号中的拍水关键词时播报不会出现拍水参数的问题。
- 整理了停止逻辑。
- 使用数值而不是单纯的主命令来开关系统音。
- 现在国服必须使用抹茶，因为网络数据方案繁琐且低效。
- 海钓手法持续优化中。
---
# MissFisher 1.4.2　2024-05-14
### 工具功能
- 修复了多提时计数没有正常算入额外数量的错误。
---
# MissFisher 1.4.1　2024-05-14
### 自动功能
- 修复了目标参数只应用输入的首个字符的问题。
- 修复海钓模式切换相邻海域或在幻海触发鱼识时不会抛竿的问题。
- 修复启动海钓模式时没有鱼计不会开启耐心 I 的问题。
- 微调了海钓冲分手法，而且现在临近时限会尽量将剩余 GP 消耗完。
### 工具功能
- 现在支持安装了本地化汉化的英文端与日文端。
- 重构了配置部分，现在支持导出到剪贴板，过渡到新版本更方便了。
---
# MissFisher 1.4.0　2024-05-13
### 自动功能
- 实现了自动海钓冲分。
- 解除了某些参数限制，修复了一些 bug。
### 工具功能
- 现在支持报饵和幻海时间播报。
---
# MissFisher 1.3.1　2024-05-07
### 自动功能
- 现在支持多重提钩和鱼识参数。
- 支持在指定目标数量的情况下钓满数量减 1 时停止。
- 现在采集力计时在切换区域时不会消失了。
- 现在录入自定义时可以带有默语主命令。
- 现在可以将计数命令录入到自定义参数。
- 修复有时因动作时序导致无法执行动作的问题。
- 修复因断杆计时器在被赋予新的最大竿时之前就排入队列而导致无法触发的问题。
- 修复没有指定后续阶段竿型时也会进行以小钓大的问题。
- 修复在罕见的参数指定下第 1 阶段技巧提钩没有预想地应用的问题。
- 修复输入参数后的第一次抛竿为以小钓大时没有正确施用第 2 阶段的问题。
- 修复采集力监控消耗过多系统性能的问题。
- 修复参数播报没有正确处理第 1 阶段格式的问题。
- 强心剂阈值减少为强心剂 GP + 6 Tick 自然回复。
### 工具功能
- 现在支持计数功能。
- 全面适配了官译中文本地化文本的中英日客户端（由于抹茶无法在国际服使用搁置）。
---
# MissFisher 1.3.0　2024-05-01
### 自动功能
- 增加了自定义预设功能。
- 增加攒鱼计特殊模式。
- 现在可用耐心II模式进行平钓。
- 解除拍水 GP 限制当强心剂可用。
### 工具功能
- 完全重制计时样式、增加幻海与自然回复计时。
- 增加 15 秒技能机会的倒数进度条。
- 支持播放声音文件报杆。
- 修复不同分辨率时计时背景的差异。
---
# MissFisher 1.2.6　2024-04-25
- 删除了中与轻杆的蜂鸣音，现在默认开启鱼王蜂鸣音。
- 当强心剂可用时解除撒饵 GP 限制。
---
# MissFisher 1.2.5　2024-04-25
- 支持完整的以小钓大参数播报。
- 修复了套娃计数和专一垂钓存在的错误。
- 增加蜂鸣报杆。
- 增加自动功能对确认键键码的条件需要。
- 增加基础指令报错。
- 修复了一些 BUG。
- 补充了完整的使用手册与参数解释。
---
# MissFisher 1.2.4　2024-04-22
- 修复了以小钓大阶段错误以及竿时不生效问题，增加专一垂钓功能。
---
# MissFisher 1.2.3　2024-04-19
- 修复了发布时错误勾选区域导致功能完全不响应的问题。
- 修复了以小钓大的一些 BUG。
- 增加了 2 个预设。
---
# MissFisher 1.2.2　2024-04-18
- 修复了一些 BUG。
---
# MissFisher 1.2.1　2024-04-17
- 支持收藏品，悬浮窗字体自适应分辨率。
---
# MissFisher 1.2.0　2024-04-16
- 支持使用熟练渔技、耐心II与大鱼的以小钓大钓法。
- 更新更多播报信息。
- 重构了动作和计时部分，平钓时自动消耗鱼计回复 GP ，减少了使用强心剂的阈值。
---
# MissFisher 1.1.3　2024-04-04
- 现支持拍水功能。
---
# MissFisher 1.1.2　2024-04-03
- 现在可以输入非撒饵竿时参数，且只有结束钓鱼时才会触发播报。
---
# MissFisher 1.1.1　2024-04-02
- 增加悬浮窗的分辨率适配，优化播报，修复了大量 BUG，优化体验。
---
# MissFisher 1.1.0　2024-03-30
- 增加悬浮窗和 TTS 报杆，修复 BUG，增加了后台静默功能。
---
# MissFisher 1.0.0　2024-03-27
- 实现了基本功能。