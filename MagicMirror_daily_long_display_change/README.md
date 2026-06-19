# MagicMirror Calendar Daily Long Display Change (2026-06-19)

這個資料夾包含了為了解決 MagicMirror `calendar` 模組中，遇到中文連續字串被強迫斷行、擠壓，以及時間被推擠到最右側的排版 Bug，所進行的核心 JS 竄改腳本。

## 為什麼需要這些腳本？
MagicMirror 的日曆模組預設使用 `table` (`tr` > `td`) 排版，並切分成三欄：`[圖示]` `[主旨]` `[時間]`。
因為瀏覽器表格渲染引擎的限制，無論外層 CSS 怎麼寫 `display: block`、`flex` 或 `grid`，只要字串長度與寬度衝突，就會被強制擠壓變形。

## 解決方案 (Core JS Surgery)
我們透過以下三支 Node.js 腳本，直接修改了 `C:/Users/magic/MagicMirror/defaultmodules/calendar/` 底下的核心檔案：

1. **`patch_time_wrapper.js`**
   - 將原本的 `timeWrapper` 從 `<td>` 標籤改為 `<div>`。
   - 阻止 `timeWrapper` 附加到外層的 `eventWrapper` (`tr`)，改為塞進 `titleWrapper` (主旨) 的肚子裡，強迫它在主旨的正下方換行。

2. **`patch_title_innerhtml.js`**
   - 攔截主旨文字被寫入螢幕的瞬間，在外面包上一層 `<div class='title-text' style='white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'>`，給予最高的 Inline Style 優先權，強制不准換行、超出顯示 `...`。

3. **`final_calendar_css.js`**
   - 覆寫 `calendar.css`，寫死 `table-layout: fixed; width: 450px;`，分配圖示寬度 35px，主旨與時間寬度 415px，完成絕對控制。

## 如何還原 / 重新套用
如果未來 MagicMirror 進行 `git pull` 更新導致排版再次跑掉，請將這些腳本傳送到 MagicMirror 主機並執行：
```bash
node patch_time_wrapper.js
node patch_title_innerhtml.js
node final_calendar_css.js
```
執行後重新啟動 MagicMirror 即可恢復完美的單行截斷與換行對齊。
