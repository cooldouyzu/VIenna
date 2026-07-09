const STORAGE_KEYS = {
  completed: "vienna-completed",
  edits: "vienna-edits",
  customItems: "vienna-custom-items",
};

const HOTEL_SAVOYEN = [48.196, 16.3835];
const HOTEL_CANETTI = [48.1857, 16.3776];

const tripDays = [
  {
    id: "day1",
    label: "第 1 天",
    short: "Arrival",
    title: "中央車站、金色大廳取票、卡爾教堂與研討會",
    status: "抵達日；美景宮改第 5 天早上",
    accent: "#d86b2a",
    center: [48.195, 16.378],
    zoom: 14,
    note:
      "13:18 抵達 Wien Hauptbahnhof，先到 Austria Trend Hotel Savoyen Vienna 放行李。美景宮改到第 5 天早上退房前，第一天優先處理金色大廳取票、卡爾教堂與 19:30 飯店內 Mancini Ballroom 研討會。",
    items: [
      makeItem(
        "d1-01",
        "13:18",
        "抵達 Wien Hauptbahnhof",
        "Vienna Central Station",
        [48.186667, 16.38],
        "抵達站；轉電車 D、S-Bahn 加步行，或短程計程車",
        "到飯店約 8-15 分鐘車程；步行約 18-22 分鐘",
        "交通另計",
        "先抓月台、出口、買票與行李移動時間，不要把 13:18 當成已經站在飯店門口。",
        ["transport", "warning"],
      ),
      makeItem(
        "d1-02",
        "13:30-14:00",
        "Austria Trend Hotel Savoyen Vienna 放行李",
        "Austria Trend Hotel Savoyen Vienna",
        HOTEL_SAVOYEN,
        "中央車站到 Rennweg 一帶；可用電車 D、S-Bahn 或計程車",
        "約 8-15 分鐘",
        "交通另計",
        "第一晚飯店基地。放完行李後直接往 Salm Bräu 午餐，再進老城處理金色大廳取票。",
        ["transport"],
      ),
      makeItem(
        "d1-03",
        "14:00-15:00",
        "午餐：Salm Bräu",
        "Salm Bräu",
        [48.1981, 16.38],
        "從 Savoyen 步行或短程電車",
        "步行約 8-12 分鐘",
        "餐費另計",
        "抵達日午餐安排在飯店附近，吃完再前往 Kärntner Straße 51 換音樂會編號座位票。",
        ["transport"],
      ),
      makeItem(
        "d1-04",
        "15:15-16:30",
        "上美景宮",
        "Upper Belvedere",
        [48.19417, 16.38028],
        "從 Salm Bräu 步行進入 Belvedere 園區",
        "約 8-12 分鐘",
        "成人票 €23",
        "重點看 Upper Belvedere。若排隊或寄物拖到時間，保留卡爾教堂只看外觀的彈性。",
        ["booking", "transport"],
      ),
      makeItem(
        "d1-05",
        "16:30-17:00",
        "美景宮花園散步",
        "Belvedere Gardens",
        [48.1933, 16.38],
        "園區內步行",
        "約 30 分鐘",
        "€0",
        "不用買票也能走花園。拍照後往 Karlsplatz 方向移動。",
        ["transport"],
      ),
      makeItem(
        "d1-06",
        "17:10-17:50",
        "卡爾教堂，視體力入內",
        "Karlskirche",
        [48.1982806, 16.3719],
        "美景宮到 Karlskirche：步行、電車或短程計程車",
        "約 12-20 分鐘",
        "成人參觀票 €9.50",
        "票含教堂模型、露台、寶庫、管風琴區與語音導覽；若累了，只看外觀比較不會壓縮報告前緩衝。",
        ["booking", "transport", "warning"],
      ),
      makeItem(
        "d1-07",
        "18:00-19:30",
        "回飯店準備 19:30 研討會",
        "Mancini Ballroom seminar at hotel",
        HOTEL_SAVOYEN,
        "Karlsplatz / Rennweg 一帶回飯店，可電車、步行加電車或計程車",
        "約 10-15 分鐘",
        "19:30｜Mancini Ballroom（飯店內）",
        "18:15 前回房間，留下整理、充電、換衣服與開會設備檢查時間；19:30 到飯店內 Mancini Ballroom 參加研討會。",
        ["transport", "warning"],
      ),
    ],
  },
  {
    id: "day2",
    label: "第 2 天",
    short: "Hallstatt",
    title: "哈修塔特一日旅行團",
    status: "長途移動日，票價依旅行團",
    accent: "#3a8e5a",
    center: [47.92, 14.6],
    zoom: 7,
    note:
      "這天不建議再加市區景點，因為哈修塔特一日團通常移動時間長。這不是旅行，是優雅版長途通勤；晚上保留體力比較明智。",
    items: [
      makeItem(
        "d2-01",
        "出發前",
        "從飯店或集合點出發",
        "Hotel / tour meeting point",
        HOTEL_SAVOYEN,
        "依旅行團通知；前晚把集合地址與時間更新到這張卡",
        "建議集合前 10-15 分鐘到",
        "依旅行團報價",
        "若集合點不是飯店，前晚先查好第一段交通與叫車備案。",
        ["booking", "transport", "warning"],
      ),
      makeItem(
        "d2-02",
        "全天",
        "哈修塔特旅行團",
        "Hallstatt day tour",
        [47.562, 13.649],
        "旅行團遊覽車長途往返",
        "整天行程，維也納往返車程長",
        "依旅行團報價",
        "把這天視為主活動。景點、午餐與停留時間以旅行團實際安排為準。",
        ["booking", "transport", "warning"],
      ),
      makeItem(
        "d2-03",
        "晚上",
        "回維也納後簡單晚餐、休息",
        "Light dinner and rest in Vienna",
        HOTEL_SAVOYEN,
        "依旅行團下車點回飯店",
        "依下車點而定",
        "餐費另計",
        "不要排硬景點。回來後吃近一點、洗澡、睡覺，就是這天最漂亮的收尾。",
        ["transport", "warning"],
      ),
    ],
  },
  {
    id: "day3",
    label: "第 3 天",
    short: "Old City",
    title: "霍夫堡冬宮區、老城核心與金色大廳",
    status: "景點小計 €32；加金色大廳最低約 €101",
    accent: "#6c5ce7",
    center: [48.206, 16.369],
    zoom: 14,
    note:
      "上午走霍夫堡與西西公主博物館，11:40 接國家圖書館 State Hall。下午留給 Stephansdom 與 Manner，晚上 Ribs of Vienna 與 Musikverein 莫札特音樂會。",
    items: [
      makeItem(
        "d3-01",
        "上午",
        "霍夫堡／西西公主博物館",
        "Hofburg / Sisi Museum",
        [48.20639, 16.36528],
        "從 Savoyen：Rennweg 搭 S-Bahn 到 Wien Mitte，轉 U3 到 Herrengasse；或路面電車加步行",
        "約 20-30 分鐘",
        "Sisi Museum 成人票 €20",
        "先走冬宮區主體，避免中午前後人流變厚。注意 11:40 State Hall 時間。",
        ["booking", "transport", "warning"],
      ),
      makeItem(
        "d3-02",
        "11:40-12:30",
        "奧地利國家圖書館 State Hall",
        "Austrian National Library State Hall",
        [48.20611, 16.36639],
        "霍夫堡區內步行",
        "約 3-8 分鐘",
        "成人票 €12",
        "State Hall 時間固定，從 Sisi Museum 走過來很近，但還是保留寄物與入口排隊時間。",
        ["booking", "transport", "warning"],
      ),
      makeItem(
        "d3-03",
        "中午",
        "Figlmüller Wollzeile 午餐",
        "Figlmüller Wollzeile",
        [48.2086, 16.3754],
        "從 State Hall 步行穿過老城",
        "約 12-18 分鐘",
        "餐費另計",
        "若有訂位，把訂位資訊補進這張卡；沒有訂位就準備備案或錯峰。",
        ["transport", "warning"],
      ),
      makeItem(
        "d3-04",
        "下午",
        "聖斯德望主教座堂基本參觀",
        "Stephansdom / St. Stephen's Cathedral",
        [48.2085, 16.373],
        "從 Figlmüller 步行",
        "約 4-8 分鐘",
        "基本參觀 €0；All-inclusive ticket €29",
        "基本區域可視為免費；若買 All-inclusive，含語音導覽、南北塔、地下墓穴導覽與教堂博物館。",
        ["booking", "transport"],
      ),
      makeItem(
        "d3-05",
        "下午",
        "Manner 本店買伴手禮",
        "Manner Shop Stephansplatz",
        [48.20835, 16.37235],
        "Stephansdom 周邊步行",
        "約 2-4 分鐘",
        "購物另計",
        "伴手禮放這裡買最順，買完不要把餅乾一路揹去太遠的地方。",
        ["transport"],
      ),
      makeItem(
        "d3-06",
        "晚餐",
        "Ribs of Vienna",
        "Ribs of Vienna",
        [48.2065, 16.3745],
        "老城核心步行",
        "約 5-10 分鐘",
        "餐費另計",
        "晚餐後到 Musikverein 可步行或搭短程大眾運輸；抓音樂會入場緩衝。",
        ["transport", "warning"],
      ),
      makeItem(
        "d3-07",
        "晚上",
        "金色大廳莫札特音樂會",
        "Musikverein / Vienna Mozart Orchestra",
        [48.20056, 16.37222],
        "從 Ribs of Vienna 步行或搭 U1 到 Karlsplatz",
        "約 12-20 分鐘",
        "Category C €69、B €89、A €109、Superior €139",
        "若以最低 C 區估算，第三天景點加音樂會最低約 €101；入場前留時間拍照與找座位。",
        ["booking", "transport", "warning"],
      ),
    ],
  },
  {
    id: "day4",
    label: "第 4 天",
    short: "Schönbrunn",
    title: "美泉宮、納許市場與 Plachutta",
    status: "景點小計 €44",
    accent: "#0f8b8d",
    center: [48.191, 16.337],
    zoom: 12,
    note:
      "這天建議買 Schönbrunn Classic Pass €44，包含 Palace Ticket、Privy Garden、Maze、Orangery Garden 和 Gloriette 觀景露台，比單買 Palace Ticket 加 Exclusive Gardens 划算。",
    items: [
      makeItem(
        "d4-01",
        "上午",
        "美泉宮 Schönbrunn Classic Pass",
        "Schönbrunn Palace Classic Pass",
        [48.184516, 16.311865],
        "從 Savoyen：Rennweg / Karlsplatz 轉 U4 到 Schönbrunn，或直接計程車",
        "大眾運輸約 35-45 分鐘",
        "Classic Pass €44",
        "Classic Pass 含 Palace Ticket、Privy Garden、Maze、Orangery Garden、Gloriette。若只買 Palace Ticket €38，再加 gardens €16 會到 €54。",
        ["booking", "transport", "warning"],
      ),
      makeItem(
        "d4-02",
        "中午",
        "納許市場午餐",
        "Naschmarkt",
        [48.19805, 16.36375],
        "Schönbrunn 搭 U4 到 Kettenbrückengasse 或 Karlsplatz",
        "約 20-30 分鐘",
        "市場免費，餐費另計",
        "午餐彈性大，適合依當天胃口決定。若美泉宮走太久，可把市場縮短。",
        ["transport"],
      ),
      makeItem(
        "d4-03",
        "下午",
        "回市區自由散步／咖啡／休息",
        "Free walk / cafe / rest",
        [48.204, 16.369],
        "Naschmarkt 到老城或飯店，依體力調整",
        "約 10-25 分鐘",
        "依選擇",
        "這段是彈性緩衝：咖啡、散步、回飯店休息都合理。",
        ["transport"],
      ),
      makeItem(
        "d4-04",
        "晚餐",
        "Plachutta Wollzeile",
        "Plachutta Wollzeile",
        [48.208, 16.376],
        "從老城核心步行，或 U3 Stubentor 周邊",
        "依前一站約 5-20 分鐘",
        "餐費另計",
        "若有訂位，把時間與訂位名補到這張卡。晚餐後可直接回飯店休息。",
        ["transport", "warning"],
      ),
    ],
  },
  {
    id: "day5",
    label: "第 5 天",
    short: "Belvedere+",
    title: "換飯店、藝術史博物館、百水公寓與普拉特",
    status: "景點小計 €22；現場買 KHM 為 €24",
    accent: "#b84545",
    center: [48.203, 16.378],
    zoom: 13,
    note:
      "上午先換飯店到 Canettistraße 6, 1100 Wien 寄放行李，再去 KHM。下午百水公寓外觀與 Hundertwasser Village，傍晚普拉特公園散步，不搭摩天輪。",
    items: [
      makeItem(
        "d5-01",
        "上午",
        "換飯店並寄放行李",
        "Move to hotel near Wien Hauptbahnhof",
        HOTEL_CANETTI,
        "Savoyen 到中央車站附近：電車 D、S-Bahn 或短程計程車",
        "約 15-25 分鐘",
        "交通另計",
        "新飯店地址：Canettistraße 6, 1100 Wien。先寄放行李，再去藝術史博物館。",
        ["transport", "warning"],
      ),
      makeItem(
        "d5-02",
        "10:30-13:00",
        "藝術史博物館",
        "Kunsthistorisches Museum Wien / KHM",
        [48.203881, 16.3616],
        "中央車站附近可搭 U1 到 Karlsplatz，再轉 U2 / 步行；或計程車",
        "約 20-30 分鐘",
        "線上 €22／現場 €24",
        "建議線上先買 €22。館內內容密度高，2.5 小時抓重點看比較舒服。",
        ["booking", "transport"],
      ),
      makeItem(
        "d5-03",
        "中午",
        "KHM 館內咖啡廳或附近午餐",
        "KHM cafe or nearby lunch",
        [48.203881, 16.3616],
        "館內或 Maria-Theresien-Platz 周邊步行",
        "0-10 分鐘",
        "餐費另計",
        "如果展廳看得順，館內咖啡廳是最省移動的選項。",
        ["transport"],
      ),
      makeItem(
        "d5-04",
        "下午",
        "百水公寓外觀＋Hundertwasser Village",
        "Hundertwasserhaus / Hundertwasser Village",
        [48.2076, 16.3942],
        "從 KHM 可搭 U-Bahn / 電車到 Landstraße 或 Radetzkyplatz 周邊再步行",
        "約 25-35 分鐘",
        "€0",
        "只看外觀與 Village，不需要門票。注意不要進入私人住宅區打擾住戶。",
        ["transport", "warning"],
      ),
      makeItem(
        "d5-05",
        "傍晚",
        "普拉特公園散步，不搭摩天輪",
        "Prater walk",
        [48.21611, 16.39556],
        "百水公寓到 Prater 可電車 / 步行加 U-Bahn",
        "約 15-25 分鐘",
        "€0",
        "你已決定不搭摩天輪，所以只安排散步，不列 Riesenrad 票價。",
        ["transport"],
      ),
      makeItem(
        "d5-06",
        "晚餐",
        "Schweizerhaus",
        "Schweizerhaus",
        [48.2168, 16.3972],
        "Prater 園區內步行",
        "約 5-10 分鐘",
        "餐費另計",
        "晚餐後回中央車站附近飯店，路線單純。",
        ["transport"],
      ),
    ],
  },
  {
    id: "day6",
    label: "第 6 天",
    short: "Extra Day",
    title: "班機延誤加玩：卡爾教堂、聖彼得教堂與南塔",
    status: "延誤加玩日；避開已吃過的甜點、豬排與肋排",
    accent: "#2f6f8f",
    center: [48.204, 16.372],
    zoom: 14,
    note:
      "CI0064 延誤一天後，7/10 改成市區輕量加玩日。主軸放卡爾教堂、聖彼得教堂與聖斯德望主教座堂南塔觀景；餐食避開已吃過的沙河蛋糕、豬肋排與維也納豬排，改用清燉牛肉、豬腳、香腸攤或咖啡館正餐當備案。",
    items: [
      makeItem(
        "d6-01",
        "09:00-09:20",
        "延誤後重新確認住宿與明日交通",
        "Reconfirm delayed flight plan and tomorrow transport",
        HOTEL_CANETTI,
        "飯店內整理，不需移動",
        "約 20 分鐘",
        "班機延誤後住宿與交通依航空／飯店安排",
        "先確認 7/11 退房時間、CI0064 新航班、IC 1249 車票或付款方式、護照與退稅文件。今天輕裝出門，明早要用的文件不要收進大行李深處。",
        ["booking", "warning"],
      ),
      makeItem(
        "d6-02",
        "09:20-09:45",
        "從飯店前往卡爾教堂",
        "Hotel to Karlskirche",
        [48.1982806, 16.3719],
        "從 Canettistraße / Wien Hbf 搭 U1 到 Karlsplatz，再徒步到 Karlskirche；或短程計程車",
        "大眾運輸約 15-25 分鐘",
        "交通另計",
        "今天第一站直接走卡爾廣場一帶。若下雨或體力不足，這段搭計程車也很短。",
        ["transport", "warning"],
      ),
      makeItem(
        "d6-03",
        "09:45-10:45",
        "卡爾教堂入內參觀",
        "Karlskirche visit",
        [48.1982806, 16.3719],
        "抵達 Karlsplatz 後徒步入場",
        "步行約 3-8 分鐘",
        "成人參觀票約 €9.50；官網標示週一至週六付費參觀 09:00-18:00",
        "看教堂模型、管風琴區、露台與寶庫；若只想保留體力，也可只看外觀與水池倒影。今天是延誤加玩日，不需要把行程塞滿。",
        ["booking", "transport", "warning"],
      ),
      makeItem(
        "d6-04",
        "10:45-11:15",
        "移動到聖彼得教堂",
        "Karlskirche to Peterskirche",
        [48.20918, 16.37089],
        "Karlsplatz 搭 U1 到 Stephansplatz，再沿 Graben 徒步到 Petersplatz",
        "約 15-25 分鐘",
        "交通另計",
        "先到聖彼得教堂，再往聖斯德望主教座堂南塔，老城動線很集中。",
        ["transport"],
      ),
      makeItem(
        "d6-05",
        "11:15-11:45",
        "聖彼得教堂",
        "Peterskirche",
        [48.20918, 16.37089],
        "從 Stephansplatz / Graben 徒步到 Petersplatz",
        "步行約 5-8 分鐘",
        "免費參觀",
        "聖彼得教堂官網列出週一至週五 08:00-19:00 開放。若遇彌撒或音樂活動，安靜靠邊參觀即可。",
        ["transport"],
      ),
      makeItem(
        "d6-06",
        "12:00-13:00",
        "午餐備案：不要再吃豬排的老城選項",
        "Lunch backups without schnitzel",
        [48.208, 16.376],
        "聖彼得教堂周邊徒步或短程 U-Bahn 到 Wollzeile / Fleischmarkt / Albertina 一帶",
        "步行約 5-20 分鐘",
        "餐費另計",
        "主選 Plachutta Wollzeile：清燉牛肉 Tafelspitz。備案 Griechenbeisl：Tafelspitz、豬腳 Stelze 或 Kaiserschmarrn；想快速簡單可吃 Bitzinger Würstelstand Albertina 的香腸攤。已吃過沙河蛋糕、豬肋排、維也納豬排，今天就避開重複款。",
        ["transport", "warning"],
      ),
      makeItem(
        "d6-07",
        "13:10-14:20",
        "聖斯德望主教座堂南塔觀景",
        "Stephansdom South Tower viewpoint",
        [48.2085, 16.373],
        "從午餐點徒步回 Stephansplatz，依 South Tower / Südturm 指標排隊上塔",
        "步行約 5-15 分鐘；上塔抓 45-60 分鐘",
        "南塔成人 €8；343 階；09:00-19:00，18:15 最後上塔",
        "南塔沒有電梯，需要爬 343 階。天氣好就上塔看維也納屋頂；如果腿很累，改成只看主教座堂外觀或北塔電梯也可以。",
        ["booking", "transport", "warning"],
      ),
      makeItem(
        "d6-08",
        "14:30-16:00",
        "老城自由散步／最後採買",
        "Old town free walk and last shopping",
        [48.20835, 16.37235],
        "Stephansplatz、Graben、Kärntner Straße 一帶徒步",
        "步行彈性",
        "購物另計",
        "這段留給最後採買、補水、BILLA Corso 或 Manner。明早要退稅的商品不要拆封亂放，收據與退稅單獨立收好。",
        ["transport", "warning"],
      ),
      makeItem(
        "d6-09",
        "16:00-17:30",
        "回飯店整理退稅與明早行李",
        "Return to hotel and prepare VAT refund documents",
        HOTEL_CANETTI,
        "從 Stephansplatz 搭 U1 回 Wien Hbf，再徒步回 Canettistraße 6",
        "約 15-25 分鐘",
        "交通另計",
        "把護照、登機資料、購物收據、退稅單、要給海關看的商品放在明早可快速拿出的地方；托運前可能需要出示商品。",
        ["transport", "warning"],
      ),
      makeItem(
        "d6-10",
        "18:00-20:00",
        "晚餐備案：Tafelspitz、豬腳或咖啡館正餐",
        "Dinner backups: Tafelspitz, Stelze, or cafe meal",
        [48.210739, 16.377256],
        "依選擇從 Wien Hbf 搭 U1 / U-Bahn 到老城，或在中央車站附近簡單吃完早睡",
        "約 15-30 分鐘",
        "餐費另計",
        "想吃經典但不重複：Plachutta 的 Tafelspitz；想要老店氛圍：Griechenbeisl 的 Tafelspitz 或 Stelze；想輕鬆不排隊：Café Diglas / Café Engländer 類咖啡館正餐；只想快點回飯店：中央車站附近簡單晚餐。",
        ["booking", "transport", "warning"],
      ),
    ],
  },
  {
    id: "day7",
    label: "第 7 天",
    short: "Airport",
    title: "維也納中央車站、機場退稅與 CI0064 返台",
    status: "07:08 IC 1249；10:30 登機；11:10 CI0064",
    accent: "#6d7f3f",
    center: [48.148, 16.474],
    zoom: 10,
    note:
      "7/11 從維也納富諾特飯店步行到 Wien Hauptbahnhof，搭 07:08 的 IC 1249 前往 Vienna Airport。抵達機場後先辦理退稅，再到第 1A 航廈辦理 CI0064 報到；10:30 登機，11:10 起飛返回台北。",
    items: [
      makeItem(
        "d7-01",
        "06:10-06:35",
        "退房並檢查退稅、護照與航班文件",
        "Checkout and document check",
        HOTEL_CANETTI,
        "在維也納富諾特飯店辦理退房，整理行李後準備徒步前往中央車站",
        "約 25 分鐘",
        "住宿依延誤後訂單",
        "確認護照、CI0064 新航班資訊、登機時間 10:30、IC 1249 車票或付款方式、退稅單、購物收據與商品都在可拿出的位置。",
        ["booking", "warning"],
      ),
      makeItem(
        "d7-02",
        "06:35-06:55",
        "從飯店前往維也納中央火車站",
        "Walk to Wien Hauptbahnhof",
        [48.186667, 16.38],
        "從維也納富諾特飯店徒步前往 Wien Hauptbahnhof；行李多或下雨可改短程計程車",
        "徒步約 10-15 分鐘；建議 06:55 前抵達",
        "步行 €0；計程車另計",
        "進站後立刻看電子看板，確認 IC 1249 的即時月台與車次。不要只靠舊截圖，月台仍可能臨時調整。",
        ["transport", "warning"],
      ),
      makeItem(
        "d7-03",
        "06:55-07:08",
        "前往 IC 1249 月台候車",
        "Board IC 1249 at Wien Hbf",
        [48.186667, 16.38],
        "在 Wien Hauptbahnhof 站內徒步前往即時看板顯示的 IC 1249 月台",
        "預留約 13 分鐘找月台與上車",
        "IC 1249｜07:08 發車",
        "依你更新的資訊，7/11 改搭 07:08 的 IC 1249。上車前再次核對電子看板上的車次、終點與即時月台。",
        ["booking", "transport", "warning"],
      ),
      makeItem(
        "d7-04",
        "07:08-07:22",
        "搭 IC 1249 前往維也納機場",
        "IC 1249 to Vienna Airport",
        [48.1103, 16.5697],
        "從 Wien Hauptbahnhof 搭乘 IC 1249 直達 Vienna Airport station",
        "車程約 14 分鐘；實際以 OBB / 車站看板為準",
        "07:08 發車｜預估約 07:22 抵達",
        "抵達後先不要急著進安檢。下車後跟著 Flughafen / Airport 與 Terminal 指標走，先辦理退稅。",
        ["booking", "transport", "warning"],
      ),
      makeItem(
        "d7-05",
        "07:25-08:20",
        "先辦理退稅",
        "VAT refund first",
        [48.1103, 16.5697],
        "在機場依 Tax Refund / Customs / Global Blue / Planet 等指標前往退稅或海關驗證櫃台",
        "抓 30-60 分鐘，視排隊而定",
        "退稅依購物單與服務商規定",
        "先辦退稅再處理托運。海關或退稅櫃台可能要求看商品、收據、退稅單與護照；要托運的退稅商品請在托運前先給海關確認。完成驗證後再依服務商流程領現金或退回信用卡。",
        ["booking", "transport", "warning"],
      ),
      makeItem(
        "d7-06",
        "08:20-10:30",
        "第 1A 航廈報到、托運、安檢與登機準備",
        "Terminal 1A check-in and boarding prep",
        [48.1103, 16.5697],
        "從退稅櫃台依 Terminal 1A / China Airlines 指標徒步前往 CI0064 報到區",
        "步行與排隊依現場人潮",
        "CI0064｜第 1A 航廈｜10:30 登機",
        "完成退稅後到第 1A 航廈辦理 CI0064 報到與托運，再過安檢與證照查驗。10:30 是登機時間，建議 10:10 前就接近登機門。",
        ["booking", "transport", "warning"],
      ),
      makeItem(
        "d7-07",
        "11:10",
        "搭乘 CI0064 返回台北",
        "China Airlines CI0064 to Taipei",
        [48.1103, 16.5697],
        "完成報到、安檢與證照查驗後，依機場看板徒步前往指定登機門",
        "10:30 登機；11:10 起飛",
        "11:10 起飛｜CI0064｜Vienna → Taipei",
        "第 1A 航廈出發。起飛時間、登機門與登機截止時間仍以華航 App、登機證及機場即時看板為準。",
        ["booking", "transport", "warning"],
      ),
    ],
  },
];

const day1 = tripDays.find((day) => day.id === "day1");
if (day1) {
  day1.title = "金色大廳取票、中央車站、卡爾教堂與研討會";
  day1.status = "抵達日；美景宮改第 5 天早上；景點小計 €9.50";
  day1.note =
    "13:18 抵達 Wien Hauptbahnhof，放完行李後需在 18:00 前到 Kärntner Straße 51 兌換金色大廳編號座位票。美景宮改到第 5 天早上退房前，第一天不再硬塞 Upper Belvedere。";
  day1.items.push(
    makeItem(
      "d1-08",
      "15:25-16:00",
      "兌換金色大廳音樂會編號座位票",
      "Exchange Musikverein numbered-seat ticket",
      [48.20255, 16.3703],
      "Salm Bräu 午餐後搭電車／U-Bahn 加徒步，或直接搭計程車到 Kärntner Straße 51",
      "約 15-25 分鐘",
      "固定取票；18:00 截止",
      "地址：Kärntner Straße 51, 1010 Wien。09:30-18:00 是可兌換時間窗，不是整段停留時間；抵達、放行李和午餐後優先前往，並預留核對訂單與領取編號座位票的時間。",
      ["booking", "transport", "warning"],
    ),
  );
  const karlskirche = day1.items.find((item) => item.id === "d1-06");
  if (karlskirche) {
    karlskirche.time = "16:20-17:00";
    karlskirche.transport = "Kärntner Straße 51 到 Karlsplatz 一帶，可 U-Bahn / 電車加步行，或短程計程車";
    karlskirche.moveTime = "約 10-18 分鐘";
    karlskirche.note =
      "美景宮移到第 5 天後，這裡可以視體力入內；若取票或交通延誤，就只拍外觀與水池倒影，保留回飯店緩衝。";
  }
  const seminar = day1.items.find((item) => item.id === "d1-07");
  if (seminar) {
    seminar.time = "17:10-19:30";
    seminar.transport = "Karlskirche / Karlsplatz 回 Savoyen，可搭電車、U-Bahn 加徒步或計程車";
    seminar.moveTime = "約 10-15 分鐘";
  }
  day1.items = ["d1-01", "d1-02", "d1-03", "d1-08", "d1-06", "d1-07"]
    .map((id) => day1.items.find((item) => item.id === id))
    .filter(Boolean);
}

const day2 = tripDays.find((day) => day.id === "day2");
if (day2) {
  day2.status = "預訂 GYGFWV6QA3A3；06:45-07:15 接送";
  day2.note =
    "哈修塔特一日團預訂編號 GYGFWV6QA3A3。接送時間為 06:45-07:15，整體活動與車程合計約 11 小時 45 分；回到維也納後不再安排市區景點。";
  day2.items = [
    makeItem(
      "d2-01",
      "06:45-07:15",
      "旅行團接送",
      "Hallstatt tour pickup",
      HOTEL_SAVOYEN,
      "依旅行團通知在指定接送點等候；若不是飯店門口，提早搭車前往",
      "至少提早 10-15 分鐘到接送點",
      "預訂編號 GYGFWV6QA3A3",
      "接送時間介於 06:45-07:15。前一晚再次核對接送地址、聯絡電話與車輛資訊；預訂編號：GYGFWV6QA3A3。",
      ["booking", "transport", "warning"],
    ),
    makeItem(
      "d2-02",
      "第 1 段｜105 分鐘",
      "搭旅行團車輛前往第一個休憩點",
      "Van transfer to first rest stop",
      null,
      "旅行團車輛（貨車）長途移動",
      "105 分鐘",
      "包含於旅行團",
      "上車後先完成第一段 105 分鐘移動。隨身帶水、暈車藥與薄外套。",
      ["transport", "warning"],
    ),
    makeItem(
      "d2-03",
      "第 2 段｜30 分鐘",
      "當地餐館休憩",
      "Local restaurant break",
      null,
      "下車後在旅行團指定餐館短暫休息",
      "停留 30 分鐘",
      "餐費依現場安排",
      "這一站主要用於用餐、補水與上洗手間，時間不長，留意集合時間。",
      ["transport", "warning"],
    ),
    makeItem(
      "d2-04",
      "第 3 段｜45＋30＋15 分鐘",
      "移動、短暫自由時間，再前往聖吉爾根",
      "Transfer, free time, then St. Gilgen",
      null,
      "搭旅行團車輛 45 分鐘，下車自由活動 30 分鐘，再搭車 15 分鐘",
      "共 90 分鐘",
      "包含於旅行團",
      "這段依序為：貨車 45 分鐘 → 自由時間 30 分鐘 → 貨車 15 分鐘。每次下車前先確認集合點。",
      ["transport", "warning"],
    ),
    makeItem(
      "d2-05",
      "第 4 段｜30 分鐘",
      "聖吉爾根自由時間",
      "St. Gilgen free time",
      [47.7666, 13.3644],
      "下車後在聖吉爾根步行自由活動",
      "停留 30 分鐘",
      "自由活動",
      "停留只有 30 分鐘，建議以湖畔與小鎮街景為主，不要走得離集合點太遠。",
      ["transport", "warning"],
    ),
    makeItem(
      "d2-06",
      "第 5 段｜40 分鐘",
      "前往哈爾施塔特",
      "Transfer to Hallstatt",
      [47.5622, 13.6493],
      "搭旅行團車輛（貨車）前往哈爾施塔特",
      "40 分鐘",
      "包含於旅行團",
      "抵達後先跟隨導覽，不要一到站就脫隊拍照。",
      ["transport"],
    ),
    makeItem(
      "d2-07",
      "第 6 段｜1 小時",
      "哈爾施塔特導覽遊",
      "Hallstatt guided tour",
      [47.5622, 13.6493],
      "在哈爾施塔特跟隨導遊徒步參觀",
      "導覽 1 小時",
      "預訂編號 GYGFWV6QA3A3",
      "跟團完成 1 小時導覽；預訂編號 GYGFWV6QA3A3。把想回頭拍照或購物的點記下來，下一段有 2.5 小時自由時間。",
      ["booking", "transport"],
    ),
    makeItem(
      "d2-08",
      "第 7 段｜2.5 小時",
      "哈爾施塔特自由時間",
      "Hallstatt free time",
      [47.5622, 13.6493],
      "小鎮內以徒步自由活動",
      "停留 2.5 小時",
      "餐飲與購物另計",
      "這是當天最長的自由活動時段。先確認返程集合點與時間，再安排拍照、午餐或咖啡。",
      ["transport", "warning"],
    ),
    makeItem(
      "d2-09",
      "返程｜105＋15＋80 分鐘",
      "返回維也納",
      "Return to Vienna",
      HOTEL_SAVOYEN,
      "搭旅行團車輛 105 分鐘，在當地咖啡館休憩 15 分鐘，再搭車 80 分鐘回維也納",
      "返程共 200 分鐘",
      "包含於旅行團；咖啡餐費另計",
      "返程依序為：貨車 105 分鐘 → 當地咖啡館休憩 15 分鐘 → 貨車 80 分鐘。依 06:45-07:15 接送推估，約 18:30-19:00 回到維也納，仍以路況及旅行團通知為準。",
      ["transport", "warning"],
    ),
    makeItem(
      "d2-10",
      "回程後",
      "簡單晚餐、回飯店休息",
      "Light dinner and rest in Vienna",
      HOTEL_SAVOYEN,
      "依旅行團下車點搭大眾運輸或計程車回飯店",
      "依實際下車點而定",
      "餐費與回程交通另計",
      "不再加市區景點。回程若遇塞車，直接在飯店附近找晚餐最省力。",
      ["transport", "warning"],
    ),
  ];
}

const day3 = tripDays.find((day) => day.id === "day3");
if (day3) {
  const day3Sisi = day3.items.find((item) => item.id === "d3-01");
  const day3Lunch = day3.items.find((item) => item.id === "d3-03");
  const day3Cathedral = day3.items.find((item) => item.id === "d3-04");
  const day3Manner = day3.items.find((item) => item.id === "d3-05");
  const day3Dinner = day3.items.find((item) => item.id === "d3-06");
  const day3Concert = day3.items.find((item) => item.id === "d3-07");
  if (day3Sisi) {
    day3Sisi.time = "09:30-09:45 入場｜參觀至 11:15";
    day3Sisi.transport =
      "從 Savoyen 前往霍夫堡：搭大眾運輸後步行至西西公主博物館入口";
    day3Sisi.moveTime = "搭車＋步行共約 21 分鐘；建議最晚 09:00 出發";
    day3Sisi.booking = "固定入場時段 09:30-09:45";
    day3Sisi.note =
      "7/7 西西公主博物館固定於 09:30-09:45 之間入場。從飯店搭車加步行約 21 分鐘，建議 09:00 前出發，預留找入口與驗票時間。";
  }
  if (day3Lunch) {
    day3Lunch.time = "12:50-13:30";
    day3Lunch.zh = "午餐：Buffet Trzesniewski Dorotheergasse";
    day3Lunch.en = "Buffet Trzesniewski Dorotheergasse";
    day3Lunch.coords = [48.20777, 16.3691];
    day3Lunch.transport = "從英雄廣場或 State Hall 徒步前往 Dorotheergasse 1";
    day3Lunch.moveTime = "約 5-10 分鐘";
    day3Lunch.booking = "餐費另計";
    day3Lunch.note =
      "地址：Dorotheergasse 1, 1010 Wien。直接把這家排為午餐主選；吃完可徒步到 Café Demel，把沙河蛋糕接成甜點。";
  }
  if (day3Cathedral) {
    day3Cathedral.time = "14:20-14:55";
    day3Cathedral.transport = "從 Café Demel 徒步穿過 Graben、Stephansplatz 前往主教座堂";
    day3Cathedral.moveTime = "約 8-12 分鐘";
  }
  if (day3Manner) day3Manner.time = "14:55-15:10";
  if (day3Dinner) day3Dinner.time = "17:15-18:30";
  if (day3Concert) {
    day3Concert.time = "19:15 開放｜19:45 入廳｜20:15 開演";
    day3Concert.transport = "從 Ribs of Vienna 步行，或搭 U1 到 Karlsplatz 後步行至 Musikvereinsplatz 1";
    day3Concert.moveTime = "約 12-20 分鐘；最晚建議 19:15 抵達";
    day3Concert.booking = "20:15 莫札特音樂會；編號座位票";
    day3Concert.note =
      "地址：Musikvereinsplatz 1, 1010 Wien。場地於開演前 60 分鐘（19:15）開放，音樂廳於開演前 30 分鐘（19:45）開放，20:15 正式開演；攜帶第一天兌換完成的編號座位票。";
  }
  day3.note =
    "09:30-09:45 入場西西公主博物館，從飯店搭車加步行約 21 分鐘。午餐主選 Trzesniewski、Five Guys 為備案，飯後可到 Demel 吃甜點；晚上 20:15 金色大廳音樂會。";

  day3.items.push(
    makeItem(
      "d3-08",
      "12:30-12:45",
      "英雄廣場",
      "Heldenplatz",
      [48.20695, 16.36368],
      "State Hall 出來後步行到霍夫堡前廣場",
      "約 5-8 分鐘",
      "€0",
      "位於霍夫堡皇宮前，是維也納最寬廣的廣場之一。適合看皇宮建築群、卡爾大公雕像，也可當作午餐前的免費加碼點。",
      ["transport"],
    ),
    makeItem(
      "d3-10",
      "12:50-13:30",
      "午餐備案：Five Guys 漢堡",
      "Five Guys Wien Graben",
      [48.2084341, 16.3708998],
      "從 Trzesniewski、State Hall 或 Graben 一帶徒步前往",
      "約 4-10 分鐘",
      "餐費另計",
      "地址：Graben 30, 1010 Wien。這是午餐替代方案，不是額外加一餐；若想吃漢堡，就用 Five Guys 取代 Trzesniewski，飯後同樣可順路到 Café Demel。",
      ["transport", "warning"],
    ),
    makeItem(
      "d3-09",
      "15:10-15:30",
      "聖彼得教堂",
      "Peterskirche",
      [48.20928, 16.36986],
      "Stephansdom、Manner 與 Graben 一帶步行可達",
      "約 5-8 分鐘",
      "€0",
      "位於格拉本大街旁，巴洛克內部裝潢精美且開放免費參觀。若當天老城時間充裕，這站很值得插入。",
      ["transport"],
    ),
    makeItem(
      "d3-11",
      "13:35-14:10",
      "Cafe Demel 吃沙河蛋糕",
      "Demel Wien",
      [48.2088, 16.3678],
      "從 Trzesniewski 或 Five Guys 徒步到 Kohlmarkt",
      "約 5-10 分鐘",
      "甜點餐費另計",
      "地址：Kohlmarkt 14, 1010 Wien。午餐後的甜點提醒：可把 Café Demel 接在 Trzesniewski 或 Five Guys 後面；若午餐吃太飽，可改成外帶或跳過。",
      ["transport", "warning"],
    ),
    makeItem(
      "d3-12",
      "15:40-15:45",
      "安可鐘路過看一眼",
      "Ankeruhr / Anker Clock",
      [48.21095, 16.37415],
      "從聖彼得教堂徒步穿過 Graben、Stephansplatz 往 Hoher Markt",
      "約 8-12 分鐘",
      "€0",
      "安可鐘在 Hoher Markt / Bauernmarkt 一帶。有看到就好，不安排停留；若剛好接近整點再看人物音樂鐘。",
      ["transport"],
    ),
    makeItem(
      "d3-13",
      "15:45-16:05",
      "BILLA Corso 補給／免費廁所",
      "BILLA Corso Hoher Markt",
      [48.21058, 16.3736],
      "看完安可鐘後沿 Hoher Markt 徒步前往 Hoher Markt 12",
      "步行約 1-3 分鐘",
      "自助餐依現場計價；廁所免費",
      "地址：Hoher Markt 12, 1010 Wien。店內有自助餐，也可使用免費廁所，適合在老城行程中補充飲水、簡單用餐或稍作休息；自助餐供應內容與時段以現場為準。",
      ["transport", "warning"],
    ),
  );
}

const revisedDay4 = {
  id: "day4",
  label: "第 4 天",
  short: "Free Ring",
  title: "皇室夏宮與環城大道免費深度遊",
  status: "美泉宮 €44；其餘主軸多為免費公共空間",
  accent: "#0f8b8d",
  center: [48.202, 16.36],
  zoom: 12,
  note:
    "08:10 從飯店出發，先到 Stranitzkygasse，再走 Gloriette 與美泉宮花園；09:30 排隊領中文語音導覽，09:45-10:00 入場。下午走環城大道，晚上記得買隔日 KHM 的 Klook QR 票。",
  items: [
    makeItem(
      "d4-13",
      "08:10-08:45",
      "搭車前往 Stranitzkygasse",
      "Transit to Stranitzkygasse",
      [48.1749703, 16.3174994],
      "從 Savoyen 搭大眾運輸前往 Stranitzkygasse, 1120 Wien",
      "約 35 分鐘",
      "交通另計",
      "先從美泉宮花園南側進場。建議 08:10 準時出發，後面才有時間拍 Gloriette、穿越花園並在 09:30 抵達宮殿入口。",
      ["transport", "warning"],
    ),
    makeItem(
      "d4-14",
      "08:45-08:55",
      "徒步前往 Gloriette 凱旋門",
      "Walk to the Gloriette",
      [48.1782674, 16.3087265],
      "從 Stranitzkygasse 徒步進入美泉宮花園南側並前往 Gloriette",
      "約 10 分鐘",
      "花園 €0",
      "你說的凱旋門以 Gloriette 安排。抵達後快速拍照，注意後面還要下坡穿過花園到美泉宮主建築。",
      ["transport"],
    ),
    makeItem(
      "d4-15",
      "08:55-09:25",
      "Gloriette 拍照＋穿越美泉宮花園",
      "Gloriette photos and garden walk",
      [48.1813, 16.3108],
      "由 Gloriette 徒步下坡，沿花園中軸往美泉宮主建築前進",
      "拍照約 10 分鐘＋花園步行約 20 分鐘",
      "€0",
      "拍完 Gloriette 後直接往宮殿方向走，沿途經過美泉宮花園；09:25 左右要抵達入口附近。",
      ["transport", "warning"],
    ),
    makeItem(
      "d4-16",
      "09:30-09:45",
      "排隊驗票並領中文語音導覽",
      "Queue and collect Chinese audio guide",
      [48.184516, 16.311865],
      "從花園中軸徒步至美泉宮入場處",
      "約 5 分鐘緩衝",
      "固定入場前準備",
      "09:30 到現場排隊，先完成驗票並領中文語音導覽；不要等到 09:45 才開始找入口。",
      ["booking", "transport", "warning"],
    ),
    makeItem(
      "d4-01",
      "09:45-10:00 入場｜參觀至 11:30",
      "美泉宮 Classic Pass",
      "Schönbrunn Palace Classic Pass",
      [48.184516, 16.311865],
      "領完中文語音導覽後，依現場指示進入美泉宮參觀動線",
      "09:45-10:00 之間入場",
      "Classic Pass €44；固定入場 09:45-10:00",
      "固定於 09:45-10:00 之間入場。Classic Pass 包含 Palace Ticket、Privy Garden、Maze、Orangery Garden 與 Gloriette 觀景露台；中文語音導覽已安排在 09:30 領取。",
      ["booking", "transport", "warning"],
    ),
    makeItem(
      "d4-02",
      "12:00-12:45",
      "午餐／逛市場：納許市場",
      "Naschmarkt",
      [48.19805, 16.36375],
      "Schönbrunn 搭 U4 到 Kettenbrückengasse 或 Karlsplatz 一帶",
      "約 20-30 分鐘",
      "市場免費，餐費另計",
      "維也納最古老、最熱鬧的傳統市場之一。單純穿梭攤位感受異國香料與在地氛圍也很有趣；正餐可吃市場攤位，或切換到 NENI am Naschmarkt 備案。",
      ["transport"],
    ),
    makeItem(
      "d4-10",
      "12:00-12:45",
      "用餐備案：NENI am Naschmarkt",
      "NENI am Naschmarkt",
      [48.19855, 16.3618],
      "在納許市場內徒步移動",
      "約 3-8 分鐘",
      "餐費另計",
      "納許市場用餐備案，不是額外加一餐。若市場攤位選擇太多懶得決定，或想坐下吃中東料理，就改吃這家。",
      ["transport", "warning"],
    ),
    makeItem(
      "d4-11",
      "12:55-13:20",
      "Alt Wien Kaffee",
      "Alt Wien Kaffee",
      [48.196, 16.3653],
      "從納許市場徒步到 Schleifmühlgasse",
      "約 5-8 分鐘",
      "咖啡餐費另計",
      "地址：Schleifmühlgasse 23, 1040 Wien。排在納許市場後最順，適合喝咖啡短休，不建議停太久以免壓縮下午國會大廈。",
      ["transport", "warning"],
    ),
    makeItem(
      "d4-12",
      "13:25-14:00",
      "Vollpension",
      "Vollpension Schleifmühlgasse",
      [48.1968, 16.3656],
      "從 Alt Wien Kaffee 沿 Schleifmühlgasse 徒步前往",
      "約 2-4 分鐘",
      "甜點／咖啡餐費另計",
      "地址：Schleifmühlgasse 16, 1040 Wien。Alt Wien 後若還想續咖啡或蛋糕可來這裡；若午餐吃太飽，這站可只路過或取消。",
      ["transport", "warning"],
    ),
    makeItem(
      "d4-03",
      "14:30-15:20",
      "奧地利國會大廈",
      "Austrian Parliament",
      [48.20847, 16.35862],
      "從 Schleifmühlgasse / Naschmarkt 一帶搭 U-Bahn 或環城電車到 Ring 周邊，再徒步到入口",
      "約 20-30 分鐘",
      "免費參觀；攜帶護照並通過安檢",
      "希臘復興式建築，門口有雅典娜女神雕像。內部多媒體互動設計質感很好，可了解奧地利歷史；頂樓有景觀餐廳與免費廁所。",
      ["booking", "transport", "warning"],
    ),
    makeItem(
      "d4-04",
      "15:30-16:00",
      "市政廳廣場",
      "Rathausplatz / Vienna City Hall",
      [48.21082, 16.35814],
      "從國會大廈沿 Ring 步行即可抵達",
      "約 5-10 分鐘",
      "€0",
      "維也納市政廳是壯麗的新哥德式建築，塔頂有著名鐵人雕像。廣場常有免費活動，如夏季音樂電影節或冬季聖誕市集。",
      ["transport"],
    ),
    makeItem(
      "d4-05",
      "16:10-16:45",
      "城市公園與金色小約翰・史特勞斯雕像",
      "Stadtpark / Johann Strauss Monument",
      [48.20465, 16.38037],
      "從 Rathausplatz 可搭 Ring 周邊電車到 Stadtpark 一帶，或視體力步行",
      "約 15-25 分鐘",
      "€0",
      "在城市公園尋找金色小約翰・史特勞斯雕像拍照。這段是下午免費散步的核心，也讓路線慢慢回到 Karlsplatz 方向。",
      ["transport"],
    ),
    makeItem(
      "d4-06",
      "17:00-18:00",
      "維也納博物館常設展",
      "Wien Museum",
      [48.19835, 16.37322],
      "Stadtpark 到 Karlsplatz 旁，步行或短程電車皆可",
      "約 10-15 分鐘",
      "常設展免費",
      "位於卡爾廣場旁，專門介紹維也納城市歷史。可透過文物與模型快速看懂維也納從羅馬時代至今的變遷。",
      ["booking", "transport"],
    ),
    makeItem(
      "d4-09",
      "18:05-18:45",
      "Hotel Sacher Wien 吃沙河蛋糕",
      "Café Sacher Wien / Hotel Sacher Wien",
      [48.20382, 16.36954],
      "從 Wien Museum / Karlsplatz 徒步往國家歌劇院旁",
      "約 8-12 分鐘",
      "甜點餐費另計",
      "地址：Philharmoniker Str. 4, 1010 Wien。排在 Karlskirche 夕景前後都順；若晚餐想吃 Plachutta 清燉牛肉，建議外帶或兩人分食。",
      ["transport", "warning"],
    ),
    makeItem(
      "d4-07",
      "19:00-19:20",
      "卡爾教堂拍照與噴泉倒影",
      "Karlskirche reflection photo stop",
      [48.1982806, 16.3719],
      "從 Hotel Sacher 徒步回 Karlsplatz，再到卡爾教堂前水池",
      "約 10-15 分鐘",
      "外觀拍照 €0",
      "日落時分看教堂外觀融合希臘與羅馬風格的建築。前方水池是拍攝倒影的最佳取景地之一。",
      ["transport"],
    ),
    makeItem(
      "d4-08",
      "19:45",
      "Plachutta Wollzeile 吃清燉牛肉",
      "Plachutta Wollzeile",
      [48.208, 16.376],
      "從 Karlskirche / Karlsplatz 前往 Wollzeile，可搭 U-Bahn 到 Stephansplatz 或 Stubentor 後徒步；體力不足可短程計程車",
      "約 15-25 分鐘",
      "餐費另計",
      "地址：Wollzeile 38, 1010 Wien。主攻 Tafelspitz 清燉牛肉，搭配蘋果泥與酸奶油，是很有代表性的維也納晚餐體驗。",
      ["transport", "warning"],
    ),
    makeItem(
      "d4-17",
      "21:30",
      "在 Klook 購買明日藝術史博物館門票",
      "Buy tomorrow's KHM ticket on Klook",
      null,
      "線上使用手機購票，不需移動",
      "約 5-10 分鐘",
      "Klook 電子票；價格依下單頁面",
      "購買 7/9 藝術史博物館門票後，確認電子票已出現 QR code 並存到手機；隔天進場直接刷 QR code。建議另外截圖，避免現場網路不穩。",
      ["booking", "warning"],
    ),
  ],
};

const day4Index = tripDays.findIndex((day) => day.id === "day4");
if (day4Index !== -1) {
  tripDays[day4Index] = revisedDay4;
  tripDays[day4Index].status = "已完成美泉宮、KHM 與 Schnitzel One；未訪點移到第 5 天";
  tripDays[day4Index].note =
    "7/8 實際完成：早上美泉宮，下午藝術史博物館，並吃到 Schnitzel One 的維也納豬排。原先下午的環城大道、百水公寓、多瑙河岸與普拉特等未訪點，改到第 5 天依體力補走。";
  const khmReminder = tripDays[day4Index].items.find((item) => item.id === "d4-17");
  if (khmReminder) {
    khmReminder.time = "今日紀錄";
    khmReminder.zh = "已完成：藝術史博物館與 Schnitzel One";
    khmReminder.en = "Completed: KHM and Schnitzel One";
    khmReminder.transport = "今日已完成，不需移動";
    khmReminder.moveTime = "已完成";
    khmReminder.booking = "KHM 已參訪；不需再買 7/9 票";
    khmReminder.note =
      "7/8 下午已參觀藝術史博物館，也吃到 Schnitzel One 的維也納豬排。第 5 天下午不再排 KHM，改補還沒走到的外觀與散步點。";
    khmReminder.tags = ["warning"];
  }
}

const TRIP_DATES = {
  day1: "7/5",
  day2: "7/6",
  day3: "7/7",
  day4: "7/8",
  day5: "7/9",
  day6: "7/10",
  day7: "7/11",
};

tripDays.forEach((day) => {
  day.date = TRIP_DATES[day.id] || "";
});

const day5 = tripDays.find((day) => day.id === "day5");
if (day5) {
  day5.title = "美景宮上宮、退房換飯店與未訪點補走";
  day5.status = "09:00 Upper Belvedere；12:00 前退房；下午補未訪點";
  day5.note =
    "7/8 已完成藝術史博物館與 Schnitzel One，7/9 不再排 KHM。第 5 天早上仍保留美景宮上宮；參觀後回 Savoyen，12:00 前退房，再到 Canettistraße 6, 1100 Wien 寄放行李。下午改補還沒參訪的環城大道外觀、百水公寓、多瑙河岸與普拉特。";
  const hotelMove = day5.items.find((item) => item.id === "d5-01");
  if (hotelMove) {
    hotelMove.time = "10:55-12:00";
    hotelMove.zh = "回飯店退房，移動到新飯店寄放行李";
    hotelMove.en = "Check out and move to hotel near Wien Hauptbahnhof";
    hotelMove.transport =
      "從 Belvedere 花園步行回 Savoyen 取行李，完成退房後搭電車 D、S-Bahn 或短程計程車到 Canettistraße 6";
    hotelMove.moveTime = "回飯店步行約 8-12 分鐘；換飯店交通約 15-25 分鐘";
    hotelMove.note =
      "飯店只要 12:00 前退房即可。早上先把美景宮上宮補完，再回 Savoyen 取行李退房；若行李多或時間緊，從 Savoyen 到新飯店直接叫車最省心。";
  }
  const lunch = day5.items.find((item) => item.id === "d5-03");
  if (lunch) {
    lunch.time = "12:00-13:00";
    lunch.zh = "午餐／咖啡：中央車站附近或納許市場備案";
    lunch.en = "Lunch / coffee near Hbf or Naschmarkt backup";
    lunch.coords = [48.19805, 16.36375];
    lunch.transport = "新飯店寄放行李後，可在中央車站附近快速吃；若納許市場還沒去，可搭 U1 / U4 到 Kettenbrückengasse 一帶";
    lunch.moveTime = "中央車站附近步行約 5-10 分鐘；去納許市場約 15-25 分鐘";
    lunch.note =
      "你已經吃到 Schnitzel One 的維也納豬排，這餐就排彈性：想省時間就在新飯店／中央車站附近吃；若昨天沒走納許市場，可改去 Naschmarkt，順路補 Alt Wien Kaffee 或 Vollpension。";
  }
  const hundertwasser = day5.items.find((item) => item.id === "d5-04");
  if (hundertwasser) {
    hundertwasser.time = "16:10-16:50";
    hundertwasser.transport = "從 Stadtpark / Wien Mitte 一帶搭電車或 U-Bahn 到 Landstraße、Radetzkyplatz 周邊再步行";
    hundertwasser.moveTime = "約 15-25 分鐘";
    hundertwasser.note =
      "只看外觀與 Hundertwasser Village，不需要門票。若前面國會或市政廳停太久，這站仍然很適合保留，因為和多瑙河岸、普拉特同方向。";
  }
  const prater = day5.items.find((item) => item.id === "d5-05");
  if (prater) {
    prater.time = "18:05-18:45";
    prater.transport = "從 Donaukanal 或百水公寓一帶搭 U-Bahn / 電車到 Praterstern，再步行進公園";
    prater.moveTime = "約 15-25 分鐘";
  }
  const dinner = day5.items.find((item) => item.id === "d5-06");
  if (dinner) {
    dinner.time = "19:00 以後";
    dinner.transport = "Prater 園區內步行到 Schweizerhaus";
    dinner.note = "晚餐後回中央車站附近新飯店，路線單純；如果下午環城大道停留較久，可直接略過 Donaukanal，保留普拉特與晚餐。";
  }
  const upperBelvedere = makeItem(
    "d5-08",
    "09:00-10:25",
    "上美景宮",
    "Upper Belvedere",
    [48.19417, 16.38028],
    "從 Savoyen 步行進入 Belvedere 園區；行李先留在飯店，參觀後回飯店退房",
    "步行約 8-12 分鐘",
    "成人票 €23",
    "第一天來不及去的 Upper Belvedere 移到這裡。早上從飯店旁邊進園區最順，重點看 Klimt 與主展廳，結束後不要忘記回飯店退房。",
    ["booking", "transport", "warning"],
  );
  const belvedereGarden = makeItem(
    "d5-09",
    "10:25-10:50",
    "美景宮花園散步",
    "Belvedere Gardens",
    [48.1933, 16.38],
    "Upper Belvedere 出來後沿花園徒步，往 Savoyen 方向回飯店",
    "約 20-25 分鐘",
    "€0",
    "花園免費。這段當作參觀後回飯店退房前的順路散步，不另外增加跨區移動。",
    ["transport"],
  );
  const parliament = makeItem(
    "d5-10",
    "13:30-14:15",
    "奧地利國會大廈外觀／免費參觀備案",
    "Austrian Parliament",
    [48.20847, 16.35862],
    "從新飯店或納許市場一帶搭 U-Bahn／環城電車到 Ring 周邊，再徒步到國會大廈",
    "約 20-30 分鐘",
    "外觀 €0；免費參觀需護照與安檢",
    "昨天若沒走到環城大道，下午從國會大廈補起最順。時間有限就看外觀與雅典娜女神雕像；若現場免費參觀動線順、安檢不用等太久，再入內。",
    ["booking", "transport", "warning"],
  );
  const rathaus = makeItem(
    "d5-11",
    "14:25-14:50",
    "市政廳廣場",
    "Rathausplatz / Vienna City Hall",
    [48.21082, 16.35814],
    "從國會大廈沿 Ring 徒步前往",
    "約 5-10 分鐘",
    "€0",
    "補看維也納市政廳外觀與廣場。如果有免費活動就短暫停留；否則拍照後往城市公園方向移動。",
    ["transport"],
  );
  const stadtpark = makeItem(
    "d5-12",
    "15:15-15:45",
    "城市公園與金色小約翰・史特勞斯雕像",
    "Stadtpark / Johann Strauss Monument",
    [48.20465, 16.38037],
    "從 Rathausplatz 搭 Ring 周邊電車到 Stadtpark 一帶，或視體力步行",
    "約 15-25 分鐘",
    "€0",
    "把原本第 4 天沒走到的免費公園點移到這裡。這站拍照後，動線可往 Landstraße、百水公寓和普拉特延伸。",
    ["transport"],
  );
  const donaukanal = makeItem(
    "d5-07",
    "17:10-17:40（可取消）",
    "多瑙河岸散步",
    "Donaukanal street art walk",
    [48.2119, 16.3772],
    "從百水公寓或 Landstraße 一帶往 Donaukanal，可搭短程電車、U-Bahn 或計程車",
    "約 15-25 分鐘",
    "€0",
    "河岸有街頭塗鴉與輕鬆的在地氛圍，適合傍晚散步。若國會、市政廳或百水公寓停留較久，這站可視體力取消，保留 Prater 晚餐動線。",
    ["transport", "warning"],
  );
  day5.items = [
    upperBelvedere,
    belvedereGarden,
    hotelMove,
    lunch,
    parliament,
    rathaus,
    stadtpark,
    hundertwasser,
    donaukanal,
    prater,
    dinner,
  ].filter(Boolean);
}

const MOVEMENT_MODE_BY_ID = {
  "d1-01": "大眾運輸／計程車",
  "d1-02": "大眾運輸／計程車",
  "d1-03": "徒步",
  "d1-04": "徒步",
  "d1-05": "徒步",
  "d1-06": "徒步／短程交通",
  "d1-07": "大眾運輸／徒步／計程車",
  "d1-08": "大眾運輸＋徒步／計程車",
  "d2-01": "依旅行團集合點，大眾運輸／計程車",
  "d2-02": "旅行團遊覽車",
  "d2-03": "徒步／休息",
  "d2-04": "旅行團車輛＋徒步",
  "d2-05": "徒步",
  "d2-06": "旅行團車輛",
  "d2-07": "徒步導覽",
  "d2-08": "徒步",
  "d2-09": "旅行團車輛",
  "d2-10": "大眾運輸／計程車",
  "d3-01": "大眾運輸＋徒步",
  "d3-02": "徒步",
  "d3-03": "徒步",
  "d3-04": "徒步",
  "d3-05": "徒步",
  "d3-06": "徒步",
  "d3-07": "徒步／U-Bahn",
  "d3-08": "徒步",
  "d3-09": "徒步",
  "d3-10": "徒步",
  "d3-11": "徒步",
  "d3-12": "徒步",
  "d3-13": "徒步",
  "d4-01": "徒步",
  "d4-02": "U-Bahn＋徒步",
  "d4-03": "電車／U-Bahn＋徒步",
  "d4-04": "徒步",
  "d4-05": "電車／徒步",
  "d4-06": "徒步／短程電車",
  "d4-07": "徒步",
  "d4-08": "U-Bahn＋徒步／計程車",
  "d4-09": "徒步",
  "d4-10": "徒步",
  "d4-11": "徒步",
  "d4-12": "徒步",
  "d4-13": "大眾運輸",
  "d4-14": "徒步",
  "d4-15": "徒步",
  "d4-16": "徒步",
  "d4-17": "線上操作",
  "d5-01": "徒步＋大眾運輸／計程車",
  "d5-02": "U-Bahn＋徒步／計程車",
  "d5-03": "徒步／U-Bahn",
  "d5-04": "U-Bahn／電車＋徒步",
  "d5-05": "徒步／U-Bahn",
  "d5-06": "徒步",
  "d5-07": "電車／U-Bahn＋徒步",
  "d5-08": "徒步",
  "d5-09": "徒步",
  "d5-10": "U-Bahn／環城電車＋徒步",
  "d5-11": "徒步",
  "d5-12": "環城電車／徒步",
  "d6-01": "飯店內",
  "d6-02": "U-Bahn＋徒步／計程車",
  "d6-03": "徒步",
  "d6-04": "U-Bahn＋徒步",
  "d6-05": "徒步",
  "d6-06": "徒步／U-Bahn",
  "d6-07": "徒步",
  "d6-08": "徒步",
  "d6-09": "U-Bahn＋徒步",
  "d6-10": "U-Bahn＋徒步／計程車",
  "d7-01": "飯店內",
  "d7-02": "徒步／計程車",
  "d7-03": "站內徒步",
  "d7-04": "火車",
  "d7-05": "機場內徒步",
  "d7-06": "機場內徒步",
  "d7-07": "徒步＋飛機",
};

tripDays.forEach((day) => {
  day.items.forEach((item) => {
    const mode = MOVEMENT_MODE_BY_ID[item.id];
    if (mode && !String(item.transport || "").startsWith("移動方式：")) {
      item.transport = `移動方式：${mode}｜${item.transport}`;
    }
  });
});

function makeItem(id, time, zh, en, coords, transport, moveTime, booking, note, tags) {
  return { id, time, zh, en, coords, transport, moveTime, booking, note, tags };
}

const state = {
  currentDay: tripDays[0].id,
  selectedId: tripDays[0].items[0].id,
  filter: "all",
  editMode: false,
  completed: readJson(STORAGE_KEYS.completed, {}),
  edits: readJson(STORAGE_KEYS.edits, {}),
  customItems: readJson(STORAGE_KEYS.customItems, {}),
};

let map;
let markerLayer;
let routeLayer;
let fallbackMap = false;
let fallbackMapReason = "";
const markers = new Map();

const els = {
  dayTabs: document.querySelector("#day-tabs"),
  dayStatus: document.querySelector("#day-status"),
  dayTitle: document.querySelector("#day-title"),
  dayNote: document.querySelector("#day-note"),
  timeline: document.querySelector("#timeline"),
  drawer: document.querySelector("#detail-drawer"),
  addSpot: document.querySelector("#add-spot"),
  editToggle: document.querySelector("#edit-toggle"),
  fitRoute: document.querySelector("#fit-route"),
  resetProgress: document.querySelector("#reset-progress"),
  metricDays: document.querySelector("#metric-days"),
  metricSpots: document.querySelector("#metric-spots"),
  metricStatus: document.querySelector("#metric-status"),
  spotModal: document.querySelector("#spot-modal"),
  spotForm: document.querySelector("#spot-form"),
  spotCancel: document.querySelector("#spot-cancel"),
  spotCancelX: document.querySelector("#spot-cancel-x"),
  spotDelete: document.querySelector("#spot-delete"),
  spotModalMode: document.querySelector("#spot-modal-mode"),
  spotModalTitle: document.querySelector("#spot-modal-title"),
  spotFormHint: document.querySelector("#spot-form-hint"),
  spotId: document.querySelector("#spot-id"),
  spotTime: document.querySelector("#spot-time"),
  spotZh: document.querySelector("#spot-zh"),
  spotEn: document.querySelector("#spot-en"),
  spotTransport: document.querySelector("#spot-transport"),
  spotMoveTime: document.querySelector("#spot-move-time"),
  spotBooking: document.querySelector("#spot-booking"),
  spotLat: document.querySelector("#spot-lat"),
  spotLon: document.querySelector("#spot-lon"),
  spotNote: document.querySelector("#spot-note"),
};

boot();

async function boot() {
  registerServiceWorker();
  loadOptionalStylesheet("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css");
  await Promise.all([
    loadOptionalScript("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", 2500, () => Boolean(window.L)),
    loadOptionalScript("https://unpkg.com/lucide@latest/dist/umd/lucide.min.js", 900, () => Boolean(window.lucide)),
  ]);
  init();
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

function loadOptionalScript(src, timeoutMs, isReady) {
  if (isReady()) return Promise.resolve(true);
  return new Promise((resolve) => {
    let done = false;
    const finish = (loaded) => {
      if (done) return;
      done = true;
      resolve(Boolean(loaded && isReady()));
    };
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.crossOrigin = "";
    script.onload = () => finish(true);
    script.onerror = () => finish(false);
    window.setTimeout(() => finish(false), timeoutMs);
    document.head.appendChild(script);
  });
}

function loadOptionalStylesheet(href) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.crossOrigin = "";
  document.head.appendChild(link);
}

function init() {
  hydrateIcons();
  initMap();
  wireEvents();
  render();
}

function hydrateIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function initMap() {
  if (!window.L) {
    useFallbackMap("線上地圖元件無法載入，已切換為離線示意圖。");
    return;
  }

  map = L.map("map", { zoomControl: false, scrollWheelZoom: true });
  L.control.zoom({ position: "bottomright" }).addTo(map);

  const tileLayer = L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
    maxZoom: 19,
  });
  tileLayer.on("tileerror", () => useFallbackMap("線上地圖暫時無法載入，已切換為離線示意圖。"));
  tileLayer.addTo(map);

  markerLayer = L.layerGroup().addTo(map);
  routeLayer = L.layerGroup().addTo(map);
}

function useFallbackMap(reason) {
  if (fallbackMap) return;
  fallbackMap = true;
  fallbackMapReason = reason;
  const mapEl = document.querySelector("#map");
  mapEl.classList.add("fallback-mode");
  if (map) {
    map.remove();
    map = null;
  }
  renderFallbackMap();
}

function wireEvents() {
  els.addSpot.addEventListener("click", () => openSpotForm("add"));
  els.editToggle.addEventListener("click", () => {
    state.editMode = !state.editMode;
    els.editToggle.setAttribute("aria-pressed", String(state.editMode));
    renderTimeline();
  });
  els.fitRoute.addEventListener("click", () => fitCurrentRoute(true));
  els.resetProgress.addEventListener("click", () => {
    const confirmed = window.confirm("要重設所有已完成勾選嗎？");
    if (!confirmed) return;
    state.completed = {};
    saveJson(STORAGE_KEYS.completed, state.completed);
    renderTimeline();
    renderMetrics();
  });

  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      document.querySelectorAll(".filter-chip").forEach((node) => {
        node.classList.toggle("is-active", node.dataset.filter === state.filter);
      });
      renderTimeline();
    });
  });

  els.spotForm.addEventListener("submit", saveSpotForm);
  els.spotCancel.addEventListener("click", closeSpotForm);
  els.spotCancelX.addEventListener("click", closeSpotForm);
  els.spotDelete.addEventListener("click", () => deleteCustomItem(els.spotId.value));
  els.spotModal.addEventListener("click", (event) => {
    if (event.target === els.spotModal) closeSpotForm();
  });
}

function render() {
  const day = getCurrentDay();
  document.body.style.setProperty("--accent", day.accent);
  const items = getDayItems(day);
  if (!items.some((item) => item.id === state.selectedId)) {
    state.selectedId = items[0]?.id || "";
  }
  renderDayTabs();
  renderDayHeader(day);
  renderTimeline();
  renderMap();
  renderDrawer(getSelectedItem());
  renderMetrics();
  hydrateIcons();
}

function renderDayTabs() {
  els.dayTabs.innerHTML = tripDays
    .map(
      (day) => `<button class="day-tab ${day.id === state.currentDay ? "is-active" : ""}" type="button" style="--accent:${day.accent}" data-day="${day.id}" aria-pressed="${day.id === state.currentDay}">
        <strong>${escapeHtml(day.label)}<em>${escapeHtml(day.date)} · ${escapeHtml(day.short)}</em></strong>
        <span>${escapeHtml(day.status)}</span>
      </button>`,
    )
    .join("");

  els.dayTabs.querySelectorAll(".day-tab").forEach((button) => {
    button.addEventListener("click", () => {
      state.currentDay = button.dataset.day;
      state.selectedId = getDayItems(getCurrentDay())[0]?.id || "";
      render();
      fitCurrentRoute(false);
    });
  });
}

function renderDayHeader(day) {
  els.dayStatus.textContent = `${day.date}｜${day.status}`;
  els.dayTitle.textContent = day.title;
  els.dayNote.textContent = day.note;
}

function renderTimeline() {
  const day = getCurrentDay();
  const items = getDayItems(day).filter((item) => state.filter === "all" || safeTags(withEdits(item)).includes(state.filter));

  if (!items.length) {
    els.timeline.innerHTML = `<div class="empty-state">這個篩選沒有行程項目</div>`;
    return;
  }

  els.timeline.innerHTML = items
    .map((item) => {
      const data = withEdits(item);
      const completed = Boolean(state.completed[item.id]);
      const selected = item.id === state.selectedId;
      const custom = isCustomItem(item.id);
      return `<article class="timeline-card ${selected ? "is-selected" : ""} ${completed ? "is-complete" : ""} ${custom ? "is-custom" : ""}" data-id="${item.id}" style="--accent:${day.accent}">
        <input type="checkbox" aria-label="標記完成" ${completed ? "checked" : ""} />
        <div class="time-block">
          <strong class="editable" contenteditable="${state.editMode}" data-field="time">${escapeHtml(data.time)}</strong>
          <span>${custom ? "自訂" : day.label}</span>
        </div>
        <div class="timeline-body">
          <h3 class="spot-title editable" contenteditable="${state.editMode}" data-field="zh">${escapeHtml(data.zh)}</h3>
          <p class="spot-subtitle editable" contenteditable="${state.editMode}" data-field="en">${escapeHtml(data.en)}</p>
          <div class="meta-row">
            ${tagPill(data, "booking", data.booking)}
            ${tagPill(data, "transport", data.moveTime)}
            ${tagPill(data, "warning", safeTags(data).includes("warning") ? "注意" : "")}
            ${custom ? '<span class="pill custom">自訂</span>' : ""}
          </div>
          <p class="note editable" contenteditable="${state.editMode}" data-field="note">${escapeHtml(data.note)}</p>
        </div>
      </article>`;
    })
    .join("");

  els.timeline.querySelectorAll(".timeline-card").forEach((card) => {
    const id = card.dataset.id;
    card.addEventListener("click", (event) => {
      if (event.target.matches("input") || event.target.closest("[contenteditable='true']")) return;
      selectItem(id);
    });

    card.querySelector("input").addEventListener("change", (event) => {
      state.completed[id] = event.target.checked;
      if (!event.target.checked) delete state.completed[id];
      saveJson(STORAGE_KEYS.completed, state.completed);
      renderTimeline();
      renderMetrics();
    });

    card.querySelectorAll("[contenteditable='true']").forEach((node) => {
      node.addEventListener("blur", () => updateEdit(id, node.dataset.field, node.textContent.trim()));
      node.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault();
          node.blur();
        }
      });
    });
  });
}

function tagPill(data, tag, value) {
  if (!value && !safeTags(data).includes(tag)) return "";
  const className = safeTags(data).includes(tag) ? ` ${tag}` : "";
  return `<span class="pill${className}">${escapeHtml(value || tagLabel(tag))}</span>`;
}

function tagLabel(tag) {
  return { booking: "票券", transport: "交通", warning: "注意" }[tag] || tag;
}

function renderMap() {
  if (fallbackMap) {
    renderFallbackMap();
    return;
  }
  if (!map || !markerLayer || !routeLayer) return;

  const day = getCurrentDay();
  const items = getDayItems(day);
  markers.clear();
  markerLayer.clearLayers();
  routeLayer.clearLayers();

  const routePoints = items.map((item) => withEdits(item).coords).filter(isValidCoords);
  if (routePoints.length > 1) {
    L.polyline(routePoints, { color: "#ffffff", weight: 8, opacity: 0.86 }).addTo(routeLayer);
    L.polyline(routePoints, { color: day.accent, weight: 4, opacity: 0.95 }).addTo(routeLayer);
  }

  items.forEach((item, index) => {
    const data = withEdits(item);
    if (!isValidCoords(data.coords)) return;
    const marker = L.marker(data.coords, {
      icon: L.divIcon({
        className: "",
        html: `<div class="marker-pin ${item.id === state.selectedId ? "is-selected" : ""}" style="--accent:${day.accent}">${index + 1}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      }),
    }).addTo(markerLayer);
    marker.on("click", () => selectItem(item.id));
    marker.bindTooltip(`${escapeHtml(data.zh)}<br>${escapeHtml(data.en)}`, { direction: "top", offset: [0, -12] });
    markers.set(item.id, marker);
  });

  fitCurrentRoute(false);
}

function fitCurrentRoute(animate = true) {
  if (fallbackMap) {
    renderFallbackMap();
    return;
  }
  if (!map) return;

  const day = getCurrentDay();
  const points = getDayItems(day).map((item) => withEdits(item).coords).filter(isValidCoords);
  if (points.length > 1) {
    map.fitBounds(L.latLngBounds(points), { padding: [56, 56], animate });
  } else if (points.length === 1) {
    map.setView(points[0], Math.max(day.zoom, 14), { animate });
  } else {
    map.setView(day.center, day.zoom, { animate });
  }
}

function selectItem(id) {
  state.selectedId = id;
  const item = getSelectedItem();
  renderTimeline();
  renderMapSelection();
  renderDrawer(item);
  hydrateIcons();

  if (fallbackMap) {
    renderFallbackMapSelection();
    return;
  }
  if (map && item) {
    const data = withEdits(item);
    if (isValidCoords(data.coords)) {
      map.flyTo(data.coords, Math.max(map.getZoom(), 15), { duration: 0.45 });
    }
  }
}

function renderMapSelection() {
  if (fallbackMap) {
    renderFallbackMapSelection();
    return;
  }
  if (!map) return;

  const day = getCurrentDay();
  const items = getDayItems(day);
  markers.forEach((marker, id) => {
    marker.setIcon(
      L.divIcon({
        className: "",
        html: `<div class="marker-pin ${id === state.selectedId ? "is-selected" : ""}" style="--accent:${day.accent}">${items.findIndex((item) => item.id === id) + 1}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      }),
    );
  });
}

function renderFallbackMap() {
  const day = getCurrentDay();
  const mapEl = document.querySelector("#map");
  const items = getDayItems(day);
  const projectedItems = projectFallbackItems(items);
  const route = projectedItems.map((item) => `${item.x},${item.y}`).join(" ");
  mapEl.innerHTML = `<div class="offline-map" style="--accent:${day.accent}">
    <div class="offline-map-status">${escapeHtml(fallbackMapReason || "離線示意圖")}</div>
    <svg class="offline-map-svg" viewBox="0 0 1000 620" role="img" aria-label="${escapeHtml(day.label)} 示意地圖">
      <defs>
        <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d8cfc2" stroke-width="1" opacity="0.55" />
        </pattern>
      </defs>
      <rect width="1000" height="620" fill="#f8f2e7" />
      <rect width="1000" height="620" fill="url(#smallGrid)" />
      ${fallbackBaseLabels(day.id)}
      ${route ? `<polyline points="${route}" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" opacity="0.9" />
      <polyline points="${route}" fill="none" stroke="${day.accent}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />` : ""}
    </svg>
    ${projectedItems
      .map((item, index) => {
        const data = withEdits(item.source);
        const isSelected = item.source.id === state.selectedId ? " is-selected" : "";
        return `<button class="offline-pin${isSelected}" type="button" data-id="${item.source.id}" style="left:${item.x / 10}%; top:${item.y / 6.2}%;" title="${escapeHtml(data.zh)}">
          ${index + 1}
        </button>
        <button class="offline-label${isSelected}" type="button" data-id="${item.source.id}" style="left:${Math.min(item.x / 10 + 2, 82)}%; top:${Math.max(item.y / 6.2 - 2, 5)}%;">
          <strong>${escapeHtml(data.zh)}</strong><span>${escapeHtml(data.en)}</span>
        </button>`;
      })
      .join("")}
    <div class="offline-map-note">離線模式仍可查看順序與編輯行程；精準導航請用手機地圖 App。</div>
  </div>`;

  mapEl.querySelectorAll("[data-id]").forEach((node) => {
    node.addEventListener("click", () => selectItem(node.dataset.id));
  });
}

function renderFallbackMapSelection() {
  document.querySelectorAll(".offline-pin, .offline-label").forEach((node) => {
    node.classList.toggle("is-selected", node.dataset.id === state.selectedId);
  });
}

function projectFallbackItems(items) {
  const usableItems = items.filter((item) => isValidCoords(withEdits(item).coords));
  const lats = usableItems.map((item) => Number(withEdits(item).coords[0]));
  const lons = usableItems.map((item) => Number(withEdits(item).coords[1]));
  let minLat = Math.min(...lats);
  let maxLat = Math.max(...lats);
  let minLon = Math.min(...lons);
  let maxLon = Math.max(...lons);

  if (!Number.isFinite(minLat) || !Number.isFinite(minLon)) return [];
  if (maxLat - minLat < 0.015) {
    minLat -= 0.0075;
    maxLat += 0.0075;
  }
  if (maxLon - minLon < 0.015) {
    minLon -= 0.0075;
    maxLon += 0.0075;
  }

  const padX = 120;
  const padY = 82;
  return usableItems.map((item) => {
    const [lat, lon] = withEdits(item).coords.map(Number);
    return {
      source: item,
      x: padX + ((lon - minLon) / (maxLon - minLon)) * (1000 - padX * 2),
      y: padY + ((maxLat - lat) / (maxLat - minLat)) * (620 - padY * 2),
    };
  });
}

function fallbackBaseLabels(dayId) {
  if (dayId === "day2") {
    return `
      <text x="120" y="128" class="offline-region">Vienna</text>
      <text x="650" y="500" class="offline-region">Hallstatt</text>
      <path d="M184 145 C360 212 520 330 686 478" fill="none" stroke="#e8d6bf" stroke-width="34" stroke-linecap="round" opacity="0.75" />`;
  }
  if (dayId === "day4") {
    return `
      <text x="120" y="150" class="offline-region">Schönbrunn</text>
      <text x="558" y="190" class="offline-region">Naschmarkt</text>
      <text x="640" y="420" class="offline-region">Old City</text>
      <path d="M112 360 C300 325 500 270 862 300" fill="none" stroke="#a9d7e8" stroke-width="32" opacity="0.7" />`;
  }
  return `
    <text x="122" y="112" class="offline-region">Hauptbahnhof</text>
    <text x="536" y="134" class="offline-region">Innere Stadt</text>
    <text x="590" y="448" class="offline-region">Prater / Landstraße</text>
    <text x="130" y="420" class="offline-region">Belvedere</text>
    <path d="M468 40 C430 146 532 216 470 330 C420 428 470 512 428 602" fill="none" stroke="#a9d7e8" stroke-width="42" opacity="0.7" />`;
}

function renderDrawer(item) {
  if (!item) {
    els.drawer.innerHTML = "";
    return;
  }
  const data = withEdits(item);
  const custom = isCustomItem(item.id);
  const hasEdits = Boolean(state.edits[item.id] && Object.keys(state.edits[item.id]).length);
  els.drawer.innerHTML = `<h3>${escapeHtml(data.zh)}</h3>
    <p>${escapeHtml(data.en)}</p>
    <div class="detail-grid">
      <span>時間</span><span>${escapeHtml(data.time)}</span>
      <span>交通</span><span>${escapeHtml(data.transport)}</span>
      <span>移動</span><span>${escapeHtml(data.moveTime)}</span>
      <span>票價</span><span>${escapeHtml(data.booking)}</span>
      <span>備註</span><span>${escapeHtml(data.note)}</span>
      <span>座標</span><span>${escapeHtml(formatCoords(data.coords))}</span>
    </div>
    <div class="drawer-actions">
      <button class="primary-button compact" type="button" data-action="edit-selected">編輯這站</button>
      ${custom ? `<button class="danger-button compact" type="button" data-action="delete-selected">刪除自訂</button>` : ""}
      ${hasEdits ? `<button class="secondary-button compact" type="button" data-action="reset-selected">還原這站</button>` : ""}
    </div>`;

  els.drawer.querySelector('[data-action="edit-selected"]').addEventListener("click", () => openSpotForm("edit", item));
  els.drawer.querySelector('[data-action="delete-selected"]')?.addEventListener("click", () => deleteCustomItem(item.id));
  els.drawer.querySelector('[data-action="reset-selected"]')?.addEventListener("click", () => {
    delete state.edits[item.id];
    saveJson(STORAGE_KEYS.edits, state.edits);
    render();
  });
}

function renderMetrics() {
  const allItems = tripDays.flatMap((day) => getDayItems(day));
  const validIds = new Set(allItems.map((item) => item.id));
  const done = Object.keys(state.completed).filter((id) => validIds.has(id)).length;
  els.metricDays.textContent = `${tripDays.length} 天`;
  els.metricSpots.textContent = `${allItems.length} 個行程點`;
  els.metricStatus.textContent = `${done} 個已完成`;
}

function openSpotForm(mode, item = null) {
  const day = getCurrentDay();
  const selected = getSelectedItem();
  const selectedData = selected ? withEdits(selected) : null;
  const fallbackCoords = selectedData?.coords || day.center;
  const data =
    item && mode === "edit"
      ? withEdits(item)
      : {
          id: "",
          time: "",
          zh: "",
          en: "",
          coords: fallbackCoords,
          transport: "步行",
          moveTime: "",
          booking: "",
          note: "",
          tags: ["transport"],
        };

  els.spotModal.dataset.mode = mode;
  els.spotModalMode.textContent = mode === "edit" ? "編輯景點" : "新增景點";
  els.spotModalTitle.textContent = mode === "edit" ? data.zh : `${day.label} 新增景點`;
  els.spotFormHint.textContent =
    mode === "edit" && item && !isCustomItem(item.id)
      ? "原始行程會保留，修改會存在這台裝置的瀏覽器裡。"
      : "自訂景點會存在這台裝置的瀏覽器裡。";

  els.spotId.value = item?.id || "";
  els.spotTime.value = data.time || "";
  els.spotZh.value = data.zh || "";
  els.spotEn.value = data.en || "";
  els.spotTransport.value = data.transport || "";
  els.spotMoveTime.value = data.moveTime || "";
  els.spotBooking.value = data.booking || "";
  els.spotLat.value = isValidCoords(data.coords) ? String(data.coords[0]) : "";
  els.spotLon.value = isValidCoords(data.coords) ? String(data.coords[1]) : "";
  els.spotNote.value = data.note || "";
  setTagChecks(data.tags || []);

  const canDelete = mode === "edit" && item && isCustomItem(item.id);
  els.spotDelete.hidden = !canDelete;
  els.spotDelete.disabled = !canDelete;
  els.spotModal.hidden = false;
  document.body.classList.add("modal-open");
  window.setTimeout(() => els.spotTime.focus(), 50);
}

function closeSpotForm() {
  els.spotModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function saveSpotForm(event) {
  event.preventDefault();
  const mode = els.spotModal.dataset.mode;
  const existingId = els.spotId.value;
  const payload = collectSpotPayload(existingId);

  if (mode === "add") {
    const day = getCurrentDay();
    const nextItem = { ...payload, id: `custom-${Date.now()}`, custom: true };
    state.customItems[day.id] = [...getCustomItems(day.id), nextItem];
    saveCustomItems();
    state.selectedId = nextItem.id;
  } else if (existingId && isCustomItem(existingId)) {
    const itemDay = findItemDay(existingId) || getCurrentDay();
    state.customItems[itemDay.id] = getCustomItems(itemDay.id).map((item) =>
      item.id === existingId ? { ...payload, id: existingId, custom: true } : item,
    );
    delete state.edits[existingId];
    saveCustomItems();
    saveJson(STORAGE_KEYS.edits, state.edits);
    state.currentDay = itemDay.id;
    state.selectedId = existingId;
  } else if (existingId) {
    const original = findRawItem(existingId);
    if (original) {
      const diff = diffFromOriginal(original, payload);
      if (Object.keys(diff).length) state.edits[existingId] = diff;
      else delete state.edits[existingId];
      saveJson(STORAGE_KEYS.edits, state.edits);
      state.selectedId = existingId;
    }
  }

  closeSpotForm();
  render();
  fitCurrentRoute(false);
}

function collectSpotPayload(existingId) {
  const original = existingId ? withEdits(findRawItem(existingId)) : null;
  const selected = getSelectedItem();
  const fallbackCoords = original?.coords || (selected ? withEdits(selected).coords : getCurrentDay().center);
  const lat = Number.parseFloat(els.spotLat.value);
  const lon = Number.parseFloat(els.spotLon.value);
  const coords = Number.isFinite(lat) && Number.isFinite(lon) ? [lat, lon] : fallbackCoords;
  const tags = Array.from(els.spotForm.querySelectorAll('input[name="tag"]:checked')).map((input) => input.value);

  return {
    id: existingId,
    time: els.spotTime.value.trim() || "未定",
    zh: els.spotZh.value.trim() || "新的行程點",
    en: els.spotEn.value.trim(),
    coords,
    transport: els.spotTransport.value.trim() || "未定",
    moveTime: els.spotMoveTime.value.trim() || "未定",
    booking: els.spotBooking.value.trim() || "—",
    note: els.spotNote.value.trim(),
    tags,
  };
}

function deleteCustomItem(id) {
  if (!id || !isCustomItem(id)) return;
  const itemDay = findItemDay(id) || getCurrentDay();
  const data = withEdits(findRawItem(id));
  const confirmed = window.confirm(`刪除「${data.zh}」嗎？`);
  if (!confirmed) return;

  state.customItems[itemDay.id] = getCustomItems(itemDay.id).filter((item) => item.id !== id);
  delete state.completed[id];
  delete state.edits[id];
  saveCustomItems();
  saveJson(STORAGE_KEYS.completed, state.completed);
  saveJson(STORAGE_KEYS.edits, state.edits);

  state.currentDay = itemDay.id;
  state.selectedId = getDayItems(itemDay)[0]?.id || "";
  closeSpotForm();
  render();
}

function updateEdit(id, field, value) {
  const original = findRawItem(id);
  if (!original || !field) return;

  if (isCustomItem(id)) {
    original[field] = value;
    saveCustomItems();
    renderDrawer(getSelectedItem());
    return;
  }

  if (!state.edits[id]) state.edits[id] = {};
  if (value === original[field] || value === "") {
    delete state.edits[id][field];
  } else {
    state.edits[id][field] = value;
  }
  if (Object.keys(state.edits[id]).length === 0) delete state.edits[id];
  saveJson(STORAGE_KEYS.edits, state.edits);
  renderDrawer(getSelectedItem());
}

function diffFromOriginal(original, payload) {
  const fields = ["time", "zh", "en", "transport", "moveTime", "booking", "note"];
  const diff = {};
  fields.forEach((field) => {
    if ((payload[field] || "") !== (original[field] || "")) diff[field] = payload[field];
  });
  if (!sameCoords(payload.coords, original.coords)) diff.coords = payload.coords;
  if (!sameStringArray(payload.tags, original.tags)) diff.tags = payload.tags;
  return diff;
}

function setTagChecks(tags) {
  const tagSet = new Set(tags || []);
  els.spotForm.querySelectorAll('input[name="tag"]').forEach((input) => {
    input.checked = tagSet.has(input.value);
  });
}

function getCurrentDay() {
  return tripDays.find((day) => day.id === state.currentDay) || tripDays[0];
}

function getDayItems(day = getCurrentDay()) {
  return [...day.items, ...getCustomItems(day.id)].sort((a, b) => timeRank(a) - timeRank(b) || a.id.localeCompare(b.id));
}

function getCustomItems(dayId) {
  return Array.isArray(state.customItems[dayId]) ? state.customItems[dayId] : [];
}

function getSelectedItem() {
  const items = getDayItems();
  return items.find((item) => item.id === state.selectedId) || items[0];
}

function findRawItem(id) {
  const base = tripDays.flatMap((day) => day.items).find((item) => item.id === id);
  if (base) return base;
  return Object.values(state.customItems)
    .flat()
    .find((item) => item.id === id);
}

function findItemDay(id) {
  return tripDays.find((day) => day.items.some((item) => item.id === id) || getCustomItems(day.id).some((item) => item.id === id));
}

function isCustomItem(id) {
  return Boolean(
    Object.values(state.customItems)
      .flat()
      .find((item) => item.id === id),
  );
}

function withEdits(item) {
  if (!item) return null;
  const edited = { ...item, ...(state.edits[item.id] || {}) };
  edited.tags = safeTags(edited);
  return edited;
}

function safeTags(item) {
  return Array.isArray(item?.tags) ? item.tags : [];
}

function saveCustomItems() {
  saveJson(STORAGE_KEYS.customItems, state.customItems);
}

function timeRank(item) {
  const time = withEdits(item)?.time || "";
  const match = String(time).match(/(\d{1,2})\s*[:：]\s*(\d{2})/);
  if (match) return Number(match[1]) * 60 + Number(match[2]);
  if (time.includes("出發前")) return 420;
  if (time.includes("全天")) return 480;
  if (time.includes("上午")) return 540;
  if (time.includes("中午")) return 720;
  if (time.includes("下午")) return 840;
  if (time.includes("傍晚")) return 1020;
  if (time.includes("晚餐")) return 1080;
  if (time.includes("晚上")) return 1140;
  return 9999;
}

function isValidCoords(coords) {
  return (
    Array.isArray(coords) &&
    coords.length === 2 &&
    Number.isFinite(Number(coords[0])) &&
    Number.isFinite(Number(coords[1]))
  );
}

function sameCoords(a, b) {
  if (!isValidCoords(a) || !isValidCoords(b)) return false;
  return Math.abs(Number(a[0]) - Number(b[0])) < 0.000001 && Math.abs(Number(a[1]) - Number(b[1])) < 0.000001;
}

function sameStringArray(a, b) {
  const left = [...(a || [])].sort();
  const right = [...(b || [])].sort();
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

function formatCoords(coords) {
  if (!isValidCoords(coords)) return "未設定";
  return `${Number(coords[0]).toFixed(5)}, ${Number(coords[1]).toFixed(5)}`;
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
