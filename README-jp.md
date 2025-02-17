# MissFisher

> [!TIP]  
> 
> **[← 返回中文](https://github.com/BlackCleaverLoli/MissFisher/blob/main/README.md)**
> 
>
> **Language support: English**  
> [View this page in English.](https://github.com/BlackCleaverLoli/MissFisher/blob/main/README-en.md)
> 

> [!CAUTION]
> 本文はAIによる翻訳です。実際の用語と異なる場合があります。  
> 問題点はGitHub Issuesで報告してください。

**[インストールガイド](#インストールガイド) | [よくある質問](#よくある質問) | [2分クイックスタート](#クイックスタート) | [コマンド一覧](#コマンド) | [MissFisherプリセットの作成方法](https://github.com/BlackCleaverLoli/MissFisher/wiki/Learn-Presets) | [金曦の遺輝スキルサポート](https://github.com/BlackCleaverLoli/MissFisher/wiki#金曦の遺輝スキルサポート)**  

## 概要  
*MissFisher* はFFXIV釣りを自動化するTriggernometryトリガーセットです。  
- **対応:** CN/EN/JP クライアント  
- **対応レベル:** Lv.1 - Lv.100  

## 主な特徴  
- **最適化された戦略**  
リソース管理と釣り手法を内蔵。即時使用可能。  
- **ユーザーインターフェース**  
Winformベースの直感的なUI。  
- **即時停止**  
竿を収めるだけで停止（特殊ケース除く）。  
- **カスタムプリセット**  
独自式で柔軟な設定。複数モード対応。  

## 主要機能  
### 自動化  
* **自動釣り**  
エコーチャンネルに送信したMissFisherプリセットで自動実行。  

* **遠洋釣り**  
3モード対応: スコアラッシュ・伝説魚・実績達成。  

### 補助機能  
* **HUD表示**  
キャストタイマー・バイトタイプ・幻海流持続時間・GP回復時間を表示。  

* **通知機能**  
バイトタイプをTTS通知/釣り統計をエコー送信。  

## プレビュー  
**機能**|**インターフェース**  
-|-  
![幻海流](https://github.com/user-attachments/assets/87a3db26-4a0c-45d6-8863-eb54523b5fdb)<br>![例](https://github.com/user-attachments/assets/d638b5d4-8647-452c-8adc-1ad5d61b2424)|![メイン画面](https://github.com/user-attachments/assets/b49985bb-65c9-4454-aa8c-1b6d70de4430)|  

## 重要事項  
> [!WARNING]
> - **悪用を禁止します。**  
> - **無料配布です。転売・改変を禁止。**  

> [!CAUTION]
> - 餌切れで自動停止します。十分な餌を携帯してください。  
> - 「トリプルフック」「ペーシェンスII」未所持時はエラーが発生します。  
> - 天候変更プラグインは機能に影響します。  

## クレジット  
**[@MnFeN](https://github.com/MnFeN/) [@Nyy](#クレジット) [@Fragile](https://github.com/zfxsquare) [@ONIB棒棒](https://github.com/ONBBss/) に感謝します。**  

## フィードバック  
* **[GitHub Issues](https://github.com/BlackCleaverLoli/MissFisher/issues)**  

## 寄付  
[<img width="300" src="https://storage.ko-fi.com/cdn/generated/zfskfgqnf/rest-2de132d9df0956fa702dd7c90fe98362-60e8xkth.jpg" style="border-radius: 14px;" alt="ko-fi">](https://ko-fi.com/blackcleaverloli)   
***  
# インストールガイド

## ゲーム内設定
- **クラス:** `漁師`
- **チャット設定:** `システムメッセージ` `エラーメッセージ` `エコー` `自分の採集情報`（釣り情報）を有効化

  - フォントパッチを推奨（エコーチャンネルの簡体字表示問題に対応）

> [!TIP]
> チャンネル有効化方法:
> 1. チャットウィンドウの設定（歯車アイコン）を開く
> 2. `メッセージフィルター` → `通知`タブを選択
> 3. 該当チャンネルにチェックを入れる
> 4. `適用`をクリック

## ACT及びプラグイン
> [!CAUTION]
> 国際版ユーザーは一部手順が異なります

* **Advanced Combat Tracker**  
  [DieMoe整合版](https://act.diemoe.net/ACT.Setup.exe)（国際版は[公式ACT](https://overlayplugin.github.io/docs/setup/)）
* **Triggernometry** [MnFeN版](https://github.com/MnFeN/Triggernometry) `v1.2.0.720+`
* **PostNamazu** [v1.3.6.0+](https://github.com/Natsukage/PostNamazu/releases)
* **FFXIV解析プラグイン & OverlayPlugin**  
  整合版に既に含まれています

> [!IMPORTANT]
> **DieMoe整合版にはTriggernometry/PostNamazuが含まれていません**
> 1. [MnFeNのリポジトリ](https://github.com/MnFeN/Triggernometry)からインストーラーを取得
> 2. 指示に従いインストール
> 3. 「Triggernometry初心者ガイド」PDFで設定確認

> [!NOTE]
> **餌自動交換はDalamud不要になりました**  
> 便利機能プラグインDaily Routinesに興味がある場合 → [Dalamud設定](#dalamud設定)

## バージョン
- **安定版**  
  一般ユーザー向け 重大な更新時のみ変更
- **スナップショット版**  
  テスター向け 新機能を早期体験可能

## インストール方法
### 方法1: リモートトリガー（自動更新）
1. Triggernometryで`リモートトリガー` → `追加` → リポジトリURLを入力:
   - 安定版:  
     `https://raw.githubusercontent.com/BlackCleaverLoli/MissFisher/main/MissFisher.xml`
   - スナップショット版:  
     `https://raw.githubusercontent.com/BlackCleaverLoli/MissFisher/main/MissFisher%20Snapshot.xml`
2. `コード実行を許可` `ファイル操作を許可` にチェック
3. リポジトリを追加 → 設定を完了

### 方法2: ローカルインポート
1. XMLファイルをダウンロード:
   - 安定版: [GitHub](https://github.com/BlackCleaverLoli/MissFisher/blob/main/MissFisher.xml)
2. Triggernometryで`ローカルトリガー` → インポート

## 設定
### ACT設定
1. プラグイン優先順位を厳守:
```
(0) CafeStore
(1) FFXIV_ACT_Plugin
(2) OverlayPlugin
(3) Triggernometry
(4) CactbotOverlay
(5) PostNamazu
```
2. ACT再起動 → ゲーム内で`/e mf`を実行

### Dalamud設定
1. `/xlsettings` → ベータ版設定 → リポジトリを追加:
- `https://gh.atmoomen.top/DalamudPlugins/main/pluginmaster-cn.json`
- `https://raw.githubusercontent.com/AtmoOmen/DalamudPlugins/main/pluginmaster.json`
2. `Dont Ban My Plugin`と`Daily Routines`をインストール
3. `/pdr` → `マクロキュー`を有効化

## 動作検証
1. `万能擬餌`を所持
2. 釣り場で`/e mfdbg`を実行 → 自動動作を確認

## 重要ログテスト
1. `/e mflogtest`を実行
2. レベル80ダンジョン「終末の影 アマウロート」に参加 → NPC台詞でログ検知を確認

## 更新/アンインストール
- リモートトリガー: リポジトリを右クリックで操作
- ローカルトリガー: トリガーグループを削除
---  
## よくある質問  
> [!TIP]  
> 最初にTriggernometryの`リモートトリガー`下にある**セルフチェックツールキット**を使用してください。  
> 説明に従って環境問題を解決します。  
> 
> **解決しない場合:**  
> MissFisherリポジトリを再追加してコンポーネントをリセットしてください。  

### 「拡張機能未登録」エラー:
> [!TIP]  
> 誤警報の場合があります。機能が正常なら無視可。  

* **プラグイン衝突の確認:**  
  Daily Routinesの「リアルキュー表示」とACTの`AccurateWorldTravelQueue.dll`が両方有効な場合は、後者を無効化→削除→ゲーム再起動。  

* **コード実行権限の付与:**  
  リポジトリを右クリック→`編集`→`コード実行を許可`を有効化→保存→更新。  

* **ACTプラグイン優先順位の確認:**  
  [ACT設定](#act設定)に従い調整。  

* **PostNamazu.dll重複の確認:**  
  ACTフォルダ内で重複ファイルを検索→`Plugins`外のファイルを削除（ACT完全終了後）。  

* **CafeACTユーザー:**  
  **DieMoe ACT**への移行を検討。 [移行ガイド](#咖啡转呆萌指北) 参照。  

### 「メインウィンドウ起動失敗」エラー:
> [!TIP]  
> 誤警報の場合があります。機能が正常なら無視可。  

* **コード実行権限の付与:**  
  上記と同じ手順。  
* **ACTプラグイン優先順位の確認:**  
  [ACT設定](#act設定)に従い調整。  

### 「アクションタイムアウト」エラー:
* **ACTプラグイン優先順位の確認:**  
  [ACT設定](#act設定)に従い調整。  
* **マクロ言語設定の確認:**  
  `ユーザー設定`→`マクロ言語`:  
  - 中国版: `中国語`  
  - 国際版: クライアント言語に合わせて`英語`/`日本語`  
  - 中国語マクロパッチ適用時: `中国語`  
  保存後`/e mfdbg`でテスト。他言語も試す。  

### 「餌交換失敗」エラー:
* **PostNamazuバージョンの確認:**  
  [ACTプラグイン](#act-and-plugins)の指示に従い適切版をインストール。  
* **ACTプラグイン優先順位の調整:**  
  [ACT設定](#act設定)に従い実施。  
* **コード実行権限の付与:**  
  前述の手順通り。  

### 遠洋釣りが起動しない:
* **PostNamazuバージョンの確認:**  
  [ACTプラグイン](#act-and-plugins)の要件を満たす。  
* **ACTプラグイン優先順位の調整:**  
  [ACT設定](#act設定)を参照。  
* **ゲーム内チャンネル設定の確認:**  
  `システムメッセージ` `エラーメッセージ` `エコー` `採集情報`を有効化。  
* **重要ログのテスト:**  
  [ログテスト](#テスト关键日志行)を実施。  

### 「プリセット同期失敗」エラー:
* **ファイル操作権限の付与:**  
  リポジトリ編集→`ファイル操作を許可`を有効化→保存→更新。  

### 起動時にゲームがクラッシュ:
* **環境のアップデート:**  
  Triggernometry/ACTを最新版に更新→リポジトリ再同期→ACT再起動。  
* **ACT再インストール:**  
  1. `Config`フォルダをバックアップ。  
  2. ACTをアンインストール→再インストール。  
  3. 必要に応じて設定ファイルを復元。  

---  
## 関連ガイド  
### 手動プラグイン管理  
> [!IMPORTANT]
> **プラグインが`Plugins`フォルダ外にある場合:**  
> - ACT起動が遅延  
> - セキュリティ警告が発生  
> 
> **正しいパス例:** `D:\ACT.DieMoe\Plugins\PluginName.dll`  

#### 不正な場所にある場合:
1. ACTでプラグインを無効化→アンインストール。  
2. ACTを完全終了。  
3. ファイルを`Plugins`フォルダに移動。  
4. 再インストール後、優先順位を調整。  

#### 正しい場所での更新:
1. ACT終了。  
2. 新旧ファイルを置き換え（同名必須）。  

#### 新規インストール:
1. ファイルを`Plugins`に配置。  
2. ACTでインポート→優先順位調整。  
---  
# クイックスタート  
> [!IMPORTANT]
> **MissFisherと環境設定が完了していることを確認してください。未設定の場合は[インストールガイド](#インストールガイド)を参照。**

## メインインターフェース  
MissFisherの主要機能が集約されたUIです。  
> [!TIP]
> 開き方:  
> - コマンド`/e mf`  
> - `空天姫メイン画面`トリガーを右クリック → `実行（強制/条件）`

### UI構成  
![メイン画面](https://github.com/user-attachments/assets/ce49c874-52f4-4326-be17-8ef6ca23a2b0)

① **告知欄:** クレジットとスポンサー表示  
② **同期ボタン:** プリセットをオンライン同期  
③ **設定ボタン:** コンフィグ画面を開く  
④ **航路予報:** 遠洋釣りスケジュール確認  
⑤ **モード選択:** `スコアリング` `伝説魚` `アチーブ`から選択  
⑥ **起動ボタン:** 選択モードをアクティブ化  
⑦ **入力欄:** 対象魚名を入力して自動釣り開始  
⑧ **ヒント欄:** ヒントと詩句を表示  

## 自動釣り機能  
エコーチャンネルにプリセットを送信して起動。  
- 推奨: GP960以上 & `強心剤`/`ハイ強心剤`を充分に準備  
  - GP不足で効率低下の可能性あり  

### 通常釣り  
#### 方法1: 内蔵プリセット  
1. [FF14魚図鑑](https://fish.ffmomola.com/#/)で魚名をコピー  
2. 釣り場に移動し餌/インベントリを準備  
3. 魚名を入力欄に入力 → プリセット存在時は欄が濃色化  
4. ダブルクリックまたは`Enter`で起動  

> [!TIP]
> - `/e 空天姫プリセット 表示 <魚名>`で詳細確認  
> - 時間制限魚: ウィンドウ終了50分前に起動  
> - 「漁師の直感」必要魚: 釣り場で他魚を釣る前に起動  

#### 方法2: カスタムプリセット  
1. [プリセット文法](https://github.com/BlackCleaverLoli/MissFisher/wiki/Learn-Presets)を参照して作成  
2. エコーチャンネルに送信  

### 遠洋釣り  
**手順:**  
1. `航路予報`または[FF14遠洋釣り](https://next.ffmomola.com/oceanFishing)で航路確認  
2. リムサ・ロミンサ (X:3.0 Y:12.7) でNPCドリスティータと会話→乗船登録  
3. 準備物:  
   - インベントリ空き40スロット以上  
   - ファットワーム/クリル/イワイソメ各99個（伝説魚用追加餌が必要な場合あり）  
4. モード選択 → 乗船後`起動`ボタンをクリック  
5. NPCが航路情報を通知すると自動仕掛け開始  

> [!TIP]
> `航路予報`では最大36便分の情報と伝説魚用餌を確認可能  

> [!NOTE]
> - **モード説明:**  
>   - `スコアリング`: 釣りポイント最大化  
>   - `伝説魚`: 青レアリティの伝説魚を狙う  
>   - `アチーブ`: 実績用魚の数量を優先  
> - **実績位置:**  
>   航路情報の左から右の順番。例:  
>   `バルーンキャッチャー¹/エイエイオー²/スコアリング*`の場合、  
>   `アチーブ2`は`エイエイオー²`を指す  
---
# コマンド
- **エコーチャンネルにコマンドを送信して機能を利用**

> [!TIP]
> **コマンドプレフィックスは複数対応:**  
> 例: `/e mf <サブコマンド>` は `/e ktj <サブコマンド>` と同等  
> 
> **一部コマンドは`/e`省略可能:**  
> 例: `/e mf` → `/mf`（チャット設定で「エラーメッセージ」を有効化必須）

## ウィンドウ操作
| コマンド | 説明 |
|-|-|
| `/e mf` | メイン画面を開く |
| `/e mfcfg` | ユーザー設定を開く |
| `/e mfhx` | 航路予報を表示 |

## 自動釣り
| コマンド | 説明 | 備考 |
|-|-|-|
| `/e <プリセット式>` | カスタムパラメータで自動釣り | [文法ガイド](https://github.com/BlackCleaverLoli/MissFisher/wiki/Learn-Presets) (中国語のみ) |
| `/e mfscore`<br>`/e mfscoring`<br>`/e mfbluefish`<br>`/e mfbf`<br>`/e mfachiev1`<br>`/e mfachiev2`<br>`/e mfleveling`<br>`/e mfxp` | 遠洋釣りモード | - ファットワーム/クリル/イワイソメ各99+<br>- 伝説魚用追加餌必要<br>- インベントリ空き40+<br>- 「アチーブ2」は2番目の実績魚を指す（例:「エイエイオー²」） |
| `/e mfpreset <魚名> <タイマー>`<br>`/e ktjys <魚名> <タイマー>` | 内蔵プリセット使用 | [プリセット一覧](#サポートされているプリセット) (中国語名のみ) |
| `/e mfpreset show <魚名>`<br>`/e ktjys show <魚名>` | プリセット内容確認 | 中国語魚名必須 |
| `/e mfdbg` | 自動機能デバッグ | |
| `/e mfchum` | 強制撒き餌 | GP条件を無視 |
| `/e mfpause`<br>`/e kpause` | 一時停止/再開 | 一部機能は影響なし |
| `/e mfend`<br>`/e kend` | 完全停止 | |
| `/e mfsync` | プリセット同期 | |

## ツール
| コマンド | 説明 | 備考 |
|-|-|-|
| `/e mflogtest` | 重要ログテスト | 「終末幻想 アーモロート」のアクセス権必要 |
| `/e mfovl` | HUD表示切替 | |
| `/e mfovl <HUDタイプ> <水平位置> <垂直位置>` | HUD位置調整 | タイプ: `time`/`gp`<br>負数可 値が大きいほど右下 |

## サポートされているプリセット
> [!TIP]
> **同期ボタン** または「その他」グループの `オンライン同期` トリガーで更新  
> - **[使用方法](#方法-1-内蔵プリセット使用)**

**2.0～6.0の全魚種プリセットをサポート**（ペット含む）。  
プリセットは [MissFisherプリセット表](https://docs.qq.com/sheet/DVlNaQ012amF4SW1G?tab=BB08J2) から提供。  

不具合は [GitHub Issues](https://github.com/BlackCleaverLoli/MissFisher/issues) へ報告。  