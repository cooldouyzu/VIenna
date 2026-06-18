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
    short: "Belvedere",
    title: "中央車站、美景宮與卡爾教堂",
    status: "抵達日，景點小計 €32.50",
    accent: "#d86b2a",
    center: [48.195, 16.378],
    zoom: 14,
    note:
      "13:18 抵達 Wien Hauptbahnhof，先到 Austria Trend Hotel Savoyen Vienna 放行李，再走美景宮與卡爾教堂。19:00 有報告，18:15 前回飯店比較穩。",
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
        "第一晚飯店基地。放完行李後直接往 Salm Bräu 午餐，下午路線集中在美景宮、卡爾教堂一帶。",
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
        "抵達日午餐安排在飯店與美景宮之間，動線順，不必硬切進老城。",
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
        "18:00-18:15",
        "回飯店準備 19:00 報告",
        "Return to Austria Trend Hotel Savoyen",
        HOTEL_SAVOYEN,
        "Karlsplatz / Rennweg 一帶回飯店，可電車、步行加電車或計程車",
        "約 10-15 分鐘",
        "—",
        "18:15 前回房間，留下整理、充電、換衣服與開會設備檢查時間。",
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
    short: "KHM & Prater",
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
];

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
        <strong>${escapeHtml(day.label)}<em>${escapeHtml(day.short)}</em></strong>
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
  els.dayStatus.textContent = day.status;
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
