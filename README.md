# 網頁切版直播班 A-5 巷弄派對專題 使用手冊

## 環境建立
- 請參考 [元件手冊](http://localhost:5173/A-5-PROJECT/pages/guildline.html)

## 更新說明
- 可以自建dev-ooxx,確定正常後,於github發PR給負責人整合
- 有問題可以於github中建立issue,提出問題供大家檢查,亦可於discord中提出
- 更新vite.config.js內 base: '/a-5-project/' (9/12 Hugh)

## 指令列表
- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入 `http://localhost:5173/A-5-PROJECT/pages/index.html`
- `npm run deploy` - 自動化部署

## 資料夾結構
  - assets # 靜態資源放置處
    - images # 圖片放置處
    - scss # SCSS 的樣式放置處

  - layout # ejs 模板放置處
  - pages # 頁面放置處

- JavaScript 程式碼可寫在 main.js 檔案
