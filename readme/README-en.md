# MissFisher
> [!TIP]  
> **[← 返回中文](https://github.com/BlackCleaverLoli/MissFisher/blob/main/README.md)**
> 
> **言語サポート：日本語**  
> [このページを日本語で表示。](https://github.com/BlackCleaverLoli/MissFisher/blob/main/readme/README-jp.md)


> [!CAUTION]
> This document is AI-translated from the original text. Terminology may differ from actual usage.  
> Please report unclear text via GitHub issues. Thank you.


**[Installation Guide](#installation-guide) | [FAQ](#Frequently-Asked-Questions) | [Quick Start (2 mins)](#quick-start) | [Commands](#commands) | [MissFisher Angling Expression Syntax](https://github.com/BlackCleaverLoli/MissFisher/wiki/Learn-Angex)**  

## Introduction  
*MissFisher* is a Triggernometry trigger set for automating FFXIV fishing mechanics.  
- **Supports:** CN/EN/JP Clients  
- **Level Range:** Lv.1 - Lv.100  

## Key Features  
- **Optimized Strategies**  
Built-in resource management and fishing techniques. Ready to use immediately.  
- **User Interface**  
Winform-based UI: Clean, intuitive, and easy to operate.  
- **Instant Termination**  
Automation stops upon retracting the rod (except special cases).  
- **Custom Presets**  
Unique fishing expressions for rapid scripting. Multiple modes supported.  

## Core Features  
### Automation  
* **Auto Fishing**  
Automatically fishes using parameters from MissFisher Presets sent to Echo channel.  

* **Ocean Fishing**  
Automates ocean fishing in three modes: Score Rush, Bluefish, Achievements.  

### Assistive Tools  
* **HUD Overlay**  
Displays real-time info: Cast timer, bite type, Spectral Current duration, GP regen time.  

* **Notifications**  
Reports bite types via TTS; Sends fishing stats to Echo channel.  

## Preview  
**Feature**|**Interface**  
-|-  
![Spectral](https://github.com/user-attachments/assets/87a3db26-4a0c-45d6-8863-eb54523b5fdb)<br>![Example](https://github.com/user-attachments/assets/d638b5d4-8647-452c-8adc-1ad5d61b2424)|![Main UI](https://github.com/user-attachments/assets/b49985bb-65c9-4454-aa8c-1b6d70de4430)|  

## Important Notes  
> [!WARNING]
> - **Do not use MissFisher for harmful purposes.**  
> - **MissFisher is free. Resale or modification of authorship is prohibited.**  

> [!CAUTION]
> - Automation stops silently if bait depletes. Always carry sufficient bait!  
> - Errors may occur without "Triple Hook" or "Patience II" skills.  
> - Weather-modifying plugins affect MissFisher's weather features.  

## Credits  
**Special thanks to [@MnFeN](https://github.com/MnFeN/) [@Nyy](#credits) [@Fragile](https://github.com/zfxsquare) [@ONIBss](https://github.com/ONBBss/) for their support!**  

## Feedback  
* **[GitHub Issues](https://github.com/BlackCleaverLoli/MissFisher/issues)**  

## Donations  
[<img width="300" src="https://storage.ko-fi.com/cdn/generated/zfskfgqnf/rest-2de132d9df0956fa702dd7c90fe98362-60e8xkth.jpg" style="border-radius: 14px;" alt="ko-fi">](https://ko-fi.com/blackcleaverloli)  
***  
# Installation Guide

## In-Game Configuration
- **Class:** `Fisher`
- **Chat Channels:** Enable `System Messages`, `Error Messages`, `Echo`, and `Gathering Log (Self)` (Fishing Info).
  
  - It is recommended to install a font patch; otherwise, some simplified Chinese characters in Echo messages may not display correctly (does not affect functionality).

> [!TIP]
> How to enable chat channels?
> 1. Find the chat window in-game and click the `Chat Settings` (gear icon).
> 2. Navigate to the `Message Filters` section and click any `Message Tab`.
> 3. Switch to the `Notifications` tab.
> 4. Check the following channels: `System Messages`, `Error Messages`, `Echo`, and `Gathering Log (Self)`.
> 5. Click `Apply`.

## ACT and Plugins
> [!CAUTION]
> Some methods here may not apply to global server players.

* **Advanced Combat Tracker**  [Original ACT](https://overlayplugin.github.io/docs/setup/) 
* **Triggernometry** [MnFeN's Fork](https://github.com/MnFeN/Triggernometry) `v1.2.0.720+`
* **PostNamazu** [v1.3.6.0+](https://github.com/Natsukage/PostNamazu/releases)
* **FFXIV ACT Plugin & OverlayPlugin**  


> [!NOTE]
> **Automatic bait switching no longer requires Dalamud.**  
> For those interested in Daily Routines (free plugin with QoL features) → [Daily Routines Setup](#dalamud-configuration).

## Versions
MissFisher has two distribution versions:

- **Stable**  
  Reliable for general users. Updated only for major features/critical fixes.

- **Snapshot**  
  Test builds with new features. Suitable for advanced users and testers.  
  May update frequently for iterative improvements.

> [!TIP]
> - Both versions are functionally identical. Choose based on preference.

## Installation Methods
### Method 1: Add as Remote Trigger (Auto-Update)
> [!TIP]
> **Remote triggers enable automatic updates when repository settings are enabled.**

1. In Triggernometry: Go to `Remote Triggers` → Click `Add` → `Repository`.
2. Name the repository → Use one of these URLs for `Repository Address`:

**Stable:**
```
https://raw.githubusercontent.com/BlackCleaverLoli/MissFisher/main/MissFisher.xml
```

**Snapshot:**
```
https://raw.githubusercontent.com/BlackCleaverLoli/MissFisher/main/MissFisher%20Snapshot.xml
```

3. **Required:** Check `Allow Code Execution` (for UI and game memory access).  
4. **Required:** Check `Allow File Operations` (to update presets).  
5. Optional: Check `Allow Process Launching` (for browser triggers).  
6. Click `Add` → Wait for repository sync → Proceed to [Configuration](#configuration).

### Method 2: Import as Local Trigger
**Via File Import**
1. Download the XML file:
   - **Stable:** [GitHub](https://github.com/BlackCleaverLoli/MissFisher/blob/main/MissFisher.xml)
   - **Snapshot:** Not recommended for local triggers.
2. In Triggernometry: `Local Triggers` → `Import` → `From File/URI` → Select downloaded XML → `Next` → `Import`.
3. Proceed to [Configuration](#configuration).

**Via Clipboard Import**
1. Copy the raw XML content from the GitHub links above.
2. In Triggernometry: `Local Triggers` → `Import` → Paste XML → `Next` → `Import`.

## Configuration
### ACT Configuration
1. Set plugin priority in ACT (strict order):
```
(0) CafeStore (if present; distinguish from Matcha)
(1) FFXIV_ACT_Plugin
(2) OverlayPlugin
(3) Triggernometry
(4) CactbotOverlay
(5) PostNamazu
(Other plugins)
```
2. Restart ACT.
3. In-game: Type `/e mf` in chat to open the UI (or manually execute the `MissFisher Main Interface` trigger).

> [!TIP]
> **For Matcha Plugin Users:**  
> Disable Matcha's `Bite Alert` and `Bite Strength` options under `Fishing Notifications`.

### Dalamud Configuration
> [!IMPORTANT]
> **Daily Routines is optional but improves macro fluidity.**

#### Install Daily Routines
> [!IMPORTANT]
> **Requires Dalamud and Unban for CN clients.**  
> CN users: Install [Dont Ban My Plugin](https://github.com/NiGuangOwO/DalamudPlugins) first.

1. In-game: `/xlsettings` → Switch to `Beta` tab → Add repository:
- CN加速: `https://gh.atmoomen.top/DalamudPlugins/main/pluginmaster-cn.json`
- Main: `https://raw.githubusercontent.com/AtmoOmen/DalamudPlugins/main/pluginmaster.json`
2. Add Unban repository: `https://raw.githubusercontent.com/NiGuangOwO/DalamudPlugins/main/pluginmaster.json`
3. Save settings → `/xlplugins` → Install `Dont Ban My Plugin` and `Daily Routines`.

#### Enable Macro Queue
1. In-game: `/pdr` → Search `Macro` → Enable `Macro Queue`.

#### Explore More Features
Visit [Daily Routines Discord](https://discord.gg/dailyroutines) for verification (free).

## Validate Automation
### Steps
1. Ensure you have a `Universal Lure` (buy one if missing).
2. Face a fishing spot → Type `/e mfdbg`.

### Expected Behavior
1. TTS: "Program started."
2. Echo shows preset parameters and "Changing bait" message.
3. Auto-Chum → Cast → HUD displays cast timer.
4. Auto-Hook on bite → HUD shows bite type.
5. TTS: "Target achieved." with catch details.
6. Stop fishing → Echo displays session stats.

## Critical Log Test
> [!IMPORTANT]
> Requires access to the level 80 dungeon "Amaurot (The Final Quest)."

### Steps
1. Type `/e mflogtest` → Switch to a level 80+ combat job.
2. Open Duty Finder → Enable "Unrestricted Party" → Queue for "Amaurot."

### Expected Result
"Log line detected" message appears when NPC dialogue banner displays.

## Update & Uninstall
### Update
- **Remote Triggers:** Right-click repository → `Update`.
- **Local Triggers:** Reinstall manually.

### Uninstall
- **Remote Triggers:** Remove repository.
- **Local Triggers:** Delete trigger group.
---
## Frequently Asked Questions
> [!TIP]  
> Before proceeding, use the **Self-Check Toolkit** under `Remote Triggers` in Triggernometry.  
> Follow its instructions to troubleshoot common environment issues.  
> 
> **If issues persist after troubleshooting:**  
> Try removing and re-adding MissFisher's remote repository to reset critical components.

### "MissFisher Extension Not Registered" Alert:
> [!TIP]  
> This may be a false positive. Ignore if automation works normally.
  
* **Check Plugin Conflicts:**  
  Disable ACT's `AccurateWorldTravelQueue.dll` if Daily Routines' *"Show Real Queue Order"* is enabled.  
  Remove the plugin → Restart the game.  
  
* **Grant Code Execution Permissions:**  
  Right-click the repository → `Edit` → Enable `Allow Code Execution` → Confirm → Save → Update the repository.  
  
* **Verify ACT Plugin Priority:**  
  Adjust priorities as described in [ACT Configuration](#act-configuration).  
  
* **Check for Duplicate PostNamazu.dll:**  
  Search for duplicate `PostNamazu.dll` files in the ACT folder.  
  Delete duplicates outside the `Plugins` folder (after closing ACT completely).  

* **CafeACT Users:**  
  Switch to **DieMoe ACT** if issues persist. See [Migration Guide](#coffee-to-diemoe-guide).

### "Main Window Failed to Open" Alert:
> [!TIP]  
> This may be a false positive. Ignore if automation works normally.
  
* **Grant Code Execution Permissions:**  
  Follow the same steps as above.  
* **Verify ACT Plugin Priority:**  
  Adjust priorities as described in [ACT Configuration](#act-configuration).  

### "Action Timeout" Alert:
* **Verify ACT Plugin Priority:**  
  Adjust priorities as described in [ACT Configuration](#act-configuration).  
* **Check Macro Language Settings:**  
  Open MissFisher's `User Configuration` → Set `Macro Language`:  
  - `Chinese` for CN clients.  
  - `English`/`Japanese` for global clients.  
  - `Chinese` for global clients with Chinese macro patches.  
  Save → Test with `/e mfdbg`. Try other languages if needed.  

### "Bait Switching Failed" Alert:
* **Verify PostNamazu Version:**  
  Install the correct PostNamazu version as per [ACT & Plugins](#act-and-plugins).  
* **Adjust ACT Plugin Priority:**  
  Follow [ACT Configuration](#act-configuration).  
* **Grant Code Execution Permissions:**  
  As described earlier.  

### Ocean Fishing Fails to Start:
* **Check PostNamazu Version:**  
  Ensure compliance with [ACT & Plugins](#act-and-plugins).  
* **Adjust ACT Plugin Priority:**  
  As described in [ACT Configuration](#act-configuration).  
* **Verify In-Game Chat Channels:**  
  Enable `System Messages`, `Error Messages`, `Echo`, and `Gathering Log (Self)` via chat settings.  
* **Test Critical Log Lines:**  
  Follow steps in [Critical Log Test](#critical-log-test).  

### "Preset Sync Failed" Alert:
* **Grant File Operation Permissions:**  
  Right-click repository → `Edit` → Enable `Allow File Operations` → Confirm → Save → Update repository.  

### Game Crashes on Startup:
* **Update Components:**  
  Check for Triggernometry/ACT updates → Update repositories → Restart ACT.  
* **Reinstall ACT:**  
  1. Backup `Config` folder in ACT's directory.  
  2. Uninstall ACT → Reinstall.  
  3. Restore `Config` files if needed.  

---
## Additional Guides  
### Manual Plugin Installation/Update  
> [!IMPORTANT]
> **Plugins outside ACT's `Plugins` folder may:**  
> - Slow down ACT startup.  
> - Trigger security prompts for downloaded files.  
> 
> **Always check plugin locations via ACT's plugin list (see `File Path`).**  
> **Correct path example:** `D:\ACT.DieMoe\Plugins\PluginName.dll`  

#### For Plugins in Incorrect Locations:
1. Disable and uninstall the plugin in ACT.  
2. Close ACT completely.  
3. Move the plugin file to `Plugins` folder.  
4. Reinstall via ACT's plugin list.  
5. Adjust priorities per [ACT Configuration](#act-configuration).  

#### Updating Plugins in Correct Locations:
1. Close ACT.  
2. Replace old plugin files with new versions (same filename).  

#### Installing New Plugins:
1. Copy plugin files to `Plugins` folder.  
2. Install via ACT's plugin list.  
3. Adjust priorities as needed.  
---
# Quick Start
> [!IMPORTANT]
> **Ensure MissFisher and its dependencies are properly installed and configured. Refer to [Installation Guide](#installation-guide) if not.**

## Main Interface
MissFisher provides a feature-rich user interface.  
> [!TIP]
> Open the UI via:  
> - Command `/e mf`  
> - Right-click the `MissFisher Main Interface` trigger → `Execute (Force/Condition)`.

### UI Overview
![Main Interface](https://github.com/user-attachments/assets/ce49c874-52f4-4326-be17-8ef6ca23a2b0)

① **Notice Board:** Top-left section showing credits and sponsors.  
② **Sync Button:** Synchronize presets online.  
③ **Config Button:** Open configuration window.  
④ **Route Forecast:** View ocean fishing schedules.  
⑤ **Mode Dropdown:** Select ocean fishing mode: `Scoring`, `Bluefish`, or `Achievement`.  
⑥ **Start Button:** Activate selected mode.  
⑦ **Preset Input:** Enter target fish name to auto-fish.  
⑧ **Tips Panel:** Bottom section displaying hints and poems.  

## Auto Fishing
Send a MissFisher Preset to the Echo channel to activate.  
- Recommended: Max GP `960+` and ample `Cordial`/`Hi-Cordial`.  
  - Lower GP may reduce efficiency.

### Non-Ocean Fishing
#### Method 1: Presets
1. Copy target fish name from [FF14 Fish Guide](https://fish.ffmomola.com/#/).  
2. Prepare bait and inventory space → Face fishing spot.  
3. Input fish name in `Preset Input` → Box darkens if preset exists.  
4. Double-click input box or press `Enter` to start.  

> [!TIP]
> - View presets via `/e MissFisher Preset show <Fish Name>`.  
> - For time-limited fish: Start 50 minutes before window closes.  
> - For "Fisher's Intuition" fish: Start before catching any fish in the spot.  

#### Method 2: Custom Presets
1. Write presets using [Preset Syntax Guide](https://github.com/BlackCleaverLoli/MissFisher/wiki/Learn-Presets).  
2. Send preset to Echo channel.  

### Ocean Fishing
**Steps:**  
1. Check routes via `Route Forecast` or [FF14 Ocean Fishing](https://next.ffmomola.com/oceanFishing).  
2. Register at Limsa Lominsa (X:3.0 Y:12.7) with NPC Drysthyta.  
3. Prepare:  
   - 40+ inventory slots.  
   - 99x Plump Worm/Krill/Ragworm (+extra bait for Bluefish).  
4. Select mode → Click `Start` after boarding.  
5. Auto-cast begins when NPC announces route info.  

> [!TIP]
> `Route Forecast` shows 36 upcoming routes and required Bluefish bait.  

> [!NOTE]
> - **Modes:**  
>   - `Scoring`: Maximizes fishing points.  
>   - `Bluefish`: Targets legendary blue-rarity fish.  
>   - `Achievement`: Focuses on quantity-based achievement fish.  
> - **Achievement Position:**  
>   Left-to-right order in route info. Example:  
>   For route `Balloon Catchers¹/Sticking it to the Manta²/Scoring*`,  
>   `Achievement 2` refers to `Sticking it to the Manta²`.  

### For Diadem Achievements:
MissFisher has modes to assist with related achievements.  
Click the `Mode Dropdown Menu` in the main interface to select a mode.

Target | Achievement Name | Required Bait
:-:|:-:|-
SkyBuiG2 | The Height of Angling | Diadem Hoverworm  
SkyBuiG3 | Fishers of a Feather | Diadem Crane Fly  
SkyBuiG4 | An Ode to Angling | Diadem Crane Fly, Diadem Balloon Bug  
SkywardPt | Skyward Rod | Diadem Crane Fly, Diadem Balloon Bug  
SBGreen | Dauntless Treader | Versatile Lure, Diadem Crane Fly, Diadem Balloon Bug, Diadem Red Balloon  

> [!TIP]  
> Activate any Diadem Mode upon entering the Diadem to obtain fishing spot intel.
>
> Suggested order of completion: SBGreen > SkyBuiG2&SkyBuiG3 > SkywardPt(SkyBuiG4)

---
# Commands
- **Use MissFisher features by sending commands to the Echo channel.**

> [!TIP]
> **Multiple command prefixes are supported:**  
> e.g., `/e mf <subcommand>` is equivalent to `/e ktj <subcommand>`.  
> 
> **Some commands can omit `/e` prefix:**  
> e.g., `/e mf` → `/mf` (Requires enabling `Error Messages` in chat filters).

## Open Windows
| Command | Description |
|-|-|
| `/e mf` | Open Main UI |
| `/e mfcfg` | Open User Config |
| `/e mfroute` | Open Route Forecast |

## Auto Fishing
| Command | Description | Notes |
|-|-|-|
| `/e <Preset Expression>` | Auto-fish with custom parameters | [Preset Syntax](https://github.com/BlackCleaverLoli/MissFisher/wiki/Learn-Presets) (Chinese-only) |
| `/e mfscore`<br>`/e mfscoring`<br>`/e mfbluefish`<br>`/e mfbf`<br>`/e mfachiev1`<br>`/e mfachiev2`<br>`/e mfleveling`<br>`/e mfxp` | Ocean Fishing modes | Bring 99+ Plump Worms/Krill/Ragworm. Bluefish mode requires other bait.<br>Reserve 40+ inventory slots.<br>· Achievement mode refers to achievements that require catching specific types of fish in<br>ocean fishing to obtain titles.<br>· If route IDs are [Balloon Catchers¹] [Sticking it to the Manta²],<br>'achiev2' refers to [Sticking it to the Manta²].
`/e mfSkyBuiG2`<br>`/e mfSkyBuiG3`<br>`/e mfSkyBuiG4`<br>`/e mfSkywardPt`<br>`/e mfSBGreen`|Start with specified Diadem's targets<br>(case-insensitive)|Upon entering the Diadem, activate any Diadem Mode to obtain fishing spot intel.<br>Corresponding Diadem's Targets &gt; Diadem's Achievement Name &gt; Required Bait<br>· SkyBuiG2 &gt; The Height of Angling &gt; Diadem Hoverworm<br>· SkyBuiG3 &gt; Fishers of a Feather &gt; Diadem Crane Fly<br>· SkyBuiG4 &gt; An Ode to Angling &gt; Diadem Crane Fly, Diadem Balloon Bug<br>· SkywardPt &gt; Skyward Rod &gt; Diadem Crane Fly, Diadem Balloon Bug<br>· SBGreen &gt; Dauntless Treader &gt; Versatile Lure, Diadem Crane Fly, Diadem Balloon Bug, Diadem Red Balloon<br>Suggested order of completion: SBGreen > SkyBuiG2&SkyBuiG3 > SkywardPt(SkyBuiG4)
| `/e mfpreset <Fish Name> <Timer>` | Use preset | [Preset List](https://docs.google.com/spreadsheets/d/1-1Xy7xlG_BRU2jJNkbjTL5Ijj8pGgNm6rHncHYiHguo/edit?usp=sharing)  |
| `/e mfpreset show <Fish Name>` | View preset | |
| `/e mfdbg` | Debug automation | |
| `/e mfchum` | Force Chum | Ignores GP checks |
| `/e mfpause`<br>`/e kpause` | Pause/Resume | Some features remain active |
| `/e mfend`<br>`/e kend` | Stop automation | Full termination |
| `/e mfsync` | Sync presets online | |

## Tools
| Command | Description | Notes |
|-|-|-|
| `/e mflogtest` | Test critical log lines | Requires access to "Amaurot" dungeon |
| `/e mfovl` | Toggle HUD Overlay | |
| `/e mfovl <HUD Type> <X Offset> <Y Offset>` | Adjust HUD position | Types: `time`/`gp`<br>Negative values allowed; higher values move右下 |

## Supported Presets
> [!TIP]
> Sync presets via the **Sync Button** or the `Online Sync` trigger under `More` group.  
> - **[How to Use](#method-1-use-presets)**

**All 2.0-6.0 fish presets are available**, including some pets.  
Presets are sourced from [MissFisher Preset Sheet](https://docs.google.com/spreadsheets/d/1-1Xy7xlG_BRU2jJNkbjTL5Ijj8pGgNm6rHncHYiHguo/edit?usp=sharing).  

Report missing/broken presets via [GitHub Issues](https://github.com/BlackCleaverLoli/MissFisher/issues).  