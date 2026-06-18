# 維也納行程互動 App

這是一個可直接用瀏覽器開啟、也可部署到 GitHub Pages 的靜態 PWA。內容包含維也納五日行程、每日票價小計、地圖釘選、行程完成勾選，以及存在瀏覽器 `localStorage` 的新增與編輯功能。

## 本機預覽

雙擊 `start-app.bat` 可在電腦上開啟：

```text
http://127.0.0.1:8765/index.html
```

若要用手機同 Wi-Fi 預覽，雙擊 `start-mobile-app.bat`，照視窗內顯示的網址開啟。

## 部署到 GitHub Pages

1. 建立一個 GitHub repository。
2. 將 `interactive-vienna-app` 資料夾內的所有檔案放到 repository 根目錄。
3. 到 `Settings` -> `Pages`。
4. Source 選 `Deploy from a branch`。
5. Branch 選 `main`，資料夾選 `/root`，按 `Save`。
6. Pages 產生 HTTPS 網址後，用手機瀏覽器開啟即可安裝到主畫面。

## 使用備註

- 編輯與新增資料只會存在目前瀏覽器，不會覆蓋原始檔案。
- Leaflet 地圖與 icon CDN 無法載入時，App 會自動改用本地示意地圖。
- iPhone 安裝：Safari -> 分享 -> 加到主畫面。
- Android 安裝：Chrome -> 選單 -> 安裝應用程式或加到主畫面。
