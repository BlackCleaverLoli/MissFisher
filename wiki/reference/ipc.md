---
title: IPC API
description: MissFisher 对外提供的 Dalamud IPC 状态接口。
---

## IPC API

| Name                                                  | Type   | Meaning                           |  
  |-------------------------------------------------------|--------|-----------------------------------|  
| `MissFisher.Manager.IsRunning`                        | bool   | 自动行为运行中                           |  
| `MissFisher.Manager.IsWindowActive`                   | bool   | 当前处在钓法参数的窗口期内                     |  
| `MissFisher.Manager.AngleWindowState.IsPaused`        | bool   | 暂停中                               |  
| `MissFisher.Manager.AngleWindowState.IsWaiting`       | bool   | 等待中                               |  
| `MissFisher.Manager.AngleWindowState.IsAutoPreparing` | bool   | 自动准备中                             |  
| `MissFisher.Manager.AngleWindowState.IsInWindow`      | bool   | 窗口中                               |  
| `MissFisher.Manager.SecondsUntilNextWindow`           | double | 距离下一个窗口期开始时刻的秒数<br>（基于当前钓法的窗口期参数） |  
