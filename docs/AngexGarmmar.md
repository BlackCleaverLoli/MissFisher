# Angex 语法规范（钓法表达式）

本文档以 `AngexParser` 的实际实现为准，是 Angex 的权威语法规范，面向高级用户与开发者。
本文明确不包含正则解析器的语法。

下文描述的是当前解析器能够接受的语法。如需扩展语法，请先修改此规范，再修改解析器。

## 记号说明
- 采用 EBNF 风格。
- `WS` 表示可选空白；解析器在多数位置会跳过空白。
- 终结符用字面量表示，如 `"平钓"` 或 `">"`。
- 某些规则由解析器自定义逻辑实现，以下以文字说明。

## 词法 / 符号

### 空白
- 空白可出现在大多数标记之间，解析器会跳过它们。
- 括号内容中的空白会保留，并在列表项级别进行 `Trim`。

### 等价符号
- 阶段分隔符：`>` 与 `》`
- 游动饵标记：`<` 与 `《`
- 段分隔符：`;` 与 `；`
- 咬饵标记：`!` 与 `！`
- 括号对：`[]`、`【】`、`()`, `（ ）`
- 天气括号仅允许 `()` 或 `（ ）`

### 列表分隔符
- 目标/天气列表分隔符：`、` 或 `||`
- 修饰词列表分隔符：`、`、`||`
- 注意：单个 `|` 保留给 `name|id` 的 `IdOrName` 语法。

### 排除前缀
- 仅支持全角 `？`。

### 备注
- `//` 开始备注，直到文本结尾。

## 关键字

### 模式
`平钓 | 大鱼 | 耐心 | nm | bf | pt`

### 咬饵类型
`全部 | all | ! | !! | !!!`（`!` 数量为 1-3）

### 提钩类型
`强力 | 精准 | 双重 | 双提 | 三重 | 三提 | 华丽 | pw | pc | dh | th | sh`

### 阶段 1 的内联特殊
`拍水 | 拍 | ss | 专一 | 专 | ic`

### 嵌套关键字
`阶段 | stg | stage | 鱼识 | int | 拍水后 | pss | 拍水 | 拍 | ss | 专一 | 专 | ic`

### 修饰词（全局参数）
`不撒饵/nochum, 收藏品/coll, 不收集/nocoll, 钓组/snag, 大尺寸/large, 攒鱼计/aa,
套娃/mooch-loop, 等待专一/waitic, 大鱼知识/bfg, 引诱/lure, 雄心/a-lure, 谦逊/m-lure,
重随/re-roll, 鱼影/shadow, 多提/mh, 回收/recy, 鱼眼/fe, 鱼篓/sh, 鱼篓专一/sh-ic,
跳阶段/skipstg, 银星/silver, 无强心剂/nocord`

## 语法（EBNF）

```ebnf
Expression     ::= WS* Mode WS* BaitOpt WS* WindowOpt WS* Arrow WS* Phase1
                   (WS* Arrow WS* Phase)* WS* GlobalParamsOpt WS* NestedExprsOpt WS* RemarkOpt WS* ;

Mode           ::= "平钓" | "大鱼" | "耐心" | "nm" | "bf" | "pt" ;
Arrow          ::= ">" | "》" ;

BaitOpt        ::= BracketedId | ε ;
BracketedId    ::= Brackets IdOrName ;
Brackets       ::= "[" "]" | "【" "】" | "(" ")" | "（" "）" ;

WindowOpt      ::= "@" WS* EtRangeOpt WS* WeatherOpt | ε ;
EtRangeOpt     ::= EtRange | ε ;
EtRange        ::= EtTime WS* ("-" | "~") WS* EtTime ;
EtTime         ::= Digit Digit Digit Digit ;
WeatherOpt     ::= WeatherBracket
                 | WeatherBracket WS* WindowArrow WS* WeatherBracket
                 | ε ;
WindowArrow    ::= "=" WS* Arrow ;
WeatherBracket ::= ("(" | "（") WeatherList (")" | "）") ;
WeatherList    ::= IdOrName (WS* ListSep WS* IdOrName)* ;

Phase1         ::= Phase InlineSpecialsOpt ;
Phase          ::= ExtraBiteOpt WS* BiteTimeOpt WS* BiteTypes WS* HooksetOpt
                   WS* SwimbaitOpt WS* TargetsOpt ;

ExtraBiteOpt   ::= ("(" | "（") Bang1to3 (")" | "）") | ε ;

BiteTimeOpt    ::= BiteTimeRange | ε ;
BiteTimeRange  ::= RangeStartMax | RangeMin (RangeMax)? ;
RangeStartMax  ::= ("-" | "~") Number ("+" Number)? ;
RangeMin       ::= Number ("+" Number)? ;
RangeMax       ::= ("-" | "~") Number ("+" Number)? ;
Number         ::= Digit+ ("." Digit+)? ;

BiteTypes      ::= AllBite | BangToken (WS* "+" WS* BangToken)* ;
AllBite        ::= "全部" | "all" ;
BangToken      ::= ("!" | "！"){1,3} ;
Bang1to3       ::= ("!" | "！"){1,3} ;

HooksetOpt     ::= Hookset Digit? | ε ;
Hookset        ::= "强力" | "精准" | "双重" | "双提" | "三重" | "三提" | "华丽"
                 | "pw" | "pc" | "dh" | "th" | "sh" ;

InlineSpecialsOpt ::= (WS* "@" WS* InlineSpecial)+ | ε ;
InlineSpecial     ::= InlineSlap | InlineExclusive ;
InlineSlap         ::= ("拍水" | "ss")? WS* InlineSlapBody ;
InlineExclusive    ::= ("专一" | "ic") WS* InlineExclusiveBody ;
InlineSlapBody     ::= BiteTimeOpt WS* BiteTypesOpt WS* HooksetOpt WS* InlineTarget ;
BiteTypesOpt       ::= BiteTypes | ε ;
InlineExclusiveBody ::= TargetSet WS* HooksetOpt ;
InlineTarget       ::= SwimbaitTarget | TargetSet ;

SwimbaitOpt     ::= SwimbaitTarget | SwimbaitPlaceholder | ε ;
SwimbaitTarget  ::= ("<" | "《") WS* TargetSet ;
SwimbaitPlaceholder ::= ("<" | "《") ;
TargetsOpt      ::= TargetSet | ε ;

TargetSet       ::= Brackets TargetList ;
TargetList      ::= TargetToken (WS* ListSep WS* TargetToken)* ;
ListSep         ::= "、" | "||" ;
TargetToken     ::= ExclusionPrefix? TargetAtom ;
ExclusionPrefix ::= "？" ;
TargetAtom      ::= "any" | "任何" | "占位" | "《" | IdOrName ;
IdOrName        ::= NAME ("|" UINT)? | UINT ;

GlobalParamsOpt ::= "=" WS* GlobalSeg (WS* SegmentSep WS* GlobalSeg)* (WS* SegmentSep)? | ε ;
SegmentSep      ::= ";" | "；" ;
GlobalSeg       ::= CounterOrTerm | ModifierList ;
CounterOrTerm   ::= UINT? WS* TargetSet ;
ModifierList    ::= ModifierToken (WS* ModifierSep WS* ModifierToken)* ;
ModifierSep     ::= "、" | "||" ;
ModifierToken   ::= <见上文修饰词列表> ;

NestedExprsOpt  ::= (WS* NestedExpr)* | ε ;
NestedExpr      ::= "@" WS* NestedKind WS* "=" WS* Arrow WS* Expression StageCloseOpt ;
NestedKind      ::= "阶段" | "stg" | "stage"
                  | "鱼识" | "int"
                  | "拍水后" | "pss"
                  | "拍水" | "ss"
                  | "专一" | "ic" ;
StageCloseOpt   ::= (WS* ("<" | "《") WS* "=") | ε ;

RemarkOpt       ::= "//" RemarkText | ε ;
RemarkText      ::= <任意字符直到结尾> ;

WS              ::= <空白> ;
Digit           ::= "0".."9" ;
UINT            ::= Digit+ ;
NAME            ::= <不包含列表分隔符的非空文本> ;
```

## 语义约束与解析说明

1) 窗口期 (`@`) 至少包含以下之一：
   - ET 时间段，或
   - 天气集合。
   否则报错“窗口期为空”。

2) ET 时间为 4 位数字（0000-2359），`2400` 被视为 `0000`。

3) 咬饵类型：
   - 每个阶段必须存在。
   - `全部/all` 不能与 `!` 混用。

4) 阶段目标：
   - 游动饵目标与普通目标不可同时存在。

5) 额外咬饵类型：
   - 仅支持 1-3 个 `!`。
   - 若无效，解析会回退并在后续以“缺少咬饵类型”等错误结束。

6) 提钩类型：
   - 如果给出多重提钩数量，则必须给出提钩类型。

7) 内联特殊（仅阶段 1）：
   - 内联拍水必须有目标（`<[...]` 或 `[...]`）。
   - 内联专一必须有目标（`[...]`）。
   - 若内联拍水未给咬饵类型，则使用阶段 1 的咬饵类型与咬饵时间。
   - 允许出现在阶段 1 目标之前或之后（用于兼容旧写法与序列化输出）。

8) 嵌套表达式：
   - 只能出现在全局参数之后。
   - `@阶段=》...` 必须闭合 `< =` 或 `《 =`。
   - 其他嵌套关键字会消费到下一个嵌套表达式起始或备注起始（允许连续书写多个嵌套表达式）。
   - 嵌套表达式前允许有分号，结尾也允许分号作为分隔。

9) 全局参数：
   - `=` 开始全局参数。
   - 以 `;` 或 `；` 分隔多个段。
   - 没有数量的目标段若位于第一个位置，则视为“终止目标”。
   - 计数器必须有数量。
   - 修饰词使用 `、` 或 `||` 连接，解析器允许仅修饰词而无目标段。

10) 目标项：
   - `any` / `任何` 表示“匹配任何”。
   - `占位` 表示“不匹配任何”。
   - `《` 作为目标项表示鱼篓标记。
   - `？` 前缀表示排除模式。

11) 天气项：
   - 仅支持 `IdOrName`，不支持排除或占位等特殊项。

12) 游动饵占位：
   - 单独出现的游动饵操作符（如 `《》` 中的 `《`）会被视为“鱼篓标志”，等价于游动饵目标包含 `《`。

## 最小示例

```angex
平钓》全部
nm > all

耐心【青花鱼块|36593】@1355-1600（晴朗|2）》6.1+10.3~！》！！！《【占位】
```
