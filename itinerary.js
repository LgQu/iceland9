const fuelStopCatalog = {
  "N1 Reykjavik": {
    zh: "雷克雅未克加油站",
    area: "首都圈出发或回城补给点",
    mapQuery: "N1 Reykjavik Iceland"
  },
  "N1 Keflavik": {
    zh: "凯夫拉维克加油站",
    area: "机场取还车前后补油",
    mapQuery: "N1 Keflavik Iceland"
  },
  "N1 Selfoss": {
    zh: "塞尔福斯加油站",
    area: "黄金圈后进入南岸前补给",
    mapQuery: "N1 Selfoss Iceland"
  },
  "N1 Hvolsvollur": {
    zh: "霍尔斯沃德吕尔加油站",
    area: "南岸瀑布前后补给",
    mapQuery: "N1 Hvolsvollur Iceland"
  },
  "N1 Vik": {
    zh: "维克加油站",
    area: "黑沙滩与南岸中段补给",
    mapQuery: "N1 Vik Iceland"
  },
  "N1 Kirkjubaejarklaustur": {
    zh: "教堂城加油站",
    area: "南岸长距离路段中继补给",
    mapQuery: "N1 Kirkjubaejarklaustur Iceland"
  },
  "N1 Hofn": {
    zh: "赫本加油站",
    area: "东南角和东峡湾前后补给",
    mapQuery: "N1 Hofn Iceland"
  },
  "N1 Egilsstadir": {
    zh: "埃伊尔斯塔济加油站",
    area: "东部进入北部荒原前补给",
    mapQuery: "N1 Egilsstadir Iceland"
  },
  "N1 Reykjahlid / Myvatn": {
    zh: "雷克雅利兹 / 米湖加油站",
    area: "米湖区域补给点",
    mapQuery: "N1 Reykjahlid Myvatn Iceland"
  },
  "N1 Husavik": {
    zh: "胡萨维克加油站",
    area: "北部海岸和观鲸小镇补给",
    mapQuery: "N1 Husavik Iceland"
  },
  "N1 Akureyri": {
    zh: "阿克雷里加油站",
    area: "北部中心城市补给",
    mapQuery: "N1 Akureyri Iceland"
  },
  "N1 Blonduos": {
    zh: "布伦迪欧斯加油站",
    area: "北部西行中继补给",
    mapQuery: "N1 Blonduos Iceland"
  },
  "N1 Borgarnes": {
    zh: "博尔加内斯加油站",
    area: "西部和斯奈山半岛进出补给",
    mapQuery: "N1 Borgarnes Iceland"
  },
  "N1 Grundarfjordur": {
    zh: "格伦达菲厄泽加油站",
    area: "斯奈山半岛北岸补给",
    mapQuery: "N1 Grundarfjordur Iceland"
  },
  "Orkan Stykkisholmur": {
    zh: "斯蒂基斯霍尔米加油站",
    area: "斯奈山半岛北岸补给",
    mapQuery: "Orkan Stykkisholmur Iceland"
  },
  "Orkan Grindavik": {
    zh: "格林达维克加油站",
    area: "Reykjanes 半岛补给",
    mapQuery: "Orkan Grindavik Iceland"
  }
};

function fuel(...names) {
  return names.map((name) => {
    const stop = fuelStopCatalog[name];
    return {
      name,
      type: "fuel",
      tag: "加油",
      image: "assets/images/town.svg",
      intro: `${stop.area}。作为沿途加油和简单补给参考，实际营业状态、油价和支付方式以现场或当天地图信息为准。`,
      stay: "10-20 分钟",
      highlights: [`${name} / ${stop.zh}。`, stop.area],
      tips: ["长距离路段不要等油量过低再找油站；部分自助油站可能需要芯片信用卡或 PIN。"],
      mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stop.mapQuery)}`
    };
  });
}

const itinerary = [
  {
    day: 1,
    date: "6月21日 周日 | 抵达日下午",
    title: "抵达与雷克雅未克适应",
    drive: "约 50 km | 45-60 分钟",
    route: "Keflavik 机场 → Reykjavik → Sky Lagoon / 市区晚餐",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Reykjavik%20from%20Hallgrimskirkja.jpg",
    imageAlt: "雷克雅未克城市景观",
    mustSee: ["Hallgrimskirkja", "Sun Voyager", "Harpa", "旧港"],
    optional: ["Sky Lagoon。若到达晚或疲劳，直接休息。"],
    notes: ["当天不要安排长途，第二天开始每天都比较满。"],
    cut: [],
    accommodation: {
      name: "Hotel Leifur Eiriksson",
      tag: "住宿",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Reykjavik%20from%20Hallgrimskirkja.jpg",
      intro: "Day 1 与 Day 8 的雷克雅未克住宿，位置靠近 Hallgrimskirkja，适合抵达日轻松入住，也方便步行逛市中心。",
      stay: "6月21日-6月22日",
      highlights: ["Hotel Leifur Eiriksson / 雷弗艾瑞克森酒店。", "靠近哈尔格林姆教堂和市中心步行区。"],
      tips: ["抵达日优先办理入住、停车和补给；市中心停车规则按酒店说明确认。"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Leifur+Eiriksson+Reykjavik"
    },
    fuelStops: fuel("N1 Keflavik", "N1 Reykjavik"),
    attractions: [
      {
        name: "Hallgrimskirkja",
        tag: "必看",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hallgr%C3%ADmskirkja%20in%20Reykjavik%2C%20Iceland.jpg",
        intro: "雷克雅未克最醒目的地标，外形灵感常被理解为冰岛玄武岩柱和火山地貌。登塔可以俯瞰彩色屋顶、海湾和远处山线，是抵达当天建立空间感的好地方。",
        stay: "30-60 分钟",
        highlights: ["登塔看城市全景。", "教堂前的 Leif Erikson 雕像和主街 Skolavordustigur 适合顺路散步。"],
        tips: ["若遇到关闭或排队，外观拍照加主街散步也足够。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hallgrimskirkja"
      },
      {
        name: "Harpa 与旧港",
        tag: "可选",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Harpa%20Concert%20Hall%20Reykjavik%20Iceland.jpg",
        intro: "Harpa 是雷克雅未克海边的音乐厅和会议中心，玻璃幕墙在阴天也很有层次。旧港附近餐厅、咖啡和海边步道集中，适合第一天轻松吃饭散步。",
        stay: "45-90 分钟",
        highlights: ["Harpa 室内外都适合拍照。", "Sun Voyager 距离不远，可沿海边步行串联。"],
        tips: ["第一天不要把市区塞太满，重点是调整时差和补给。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Harpa+Reykjavik"
      },
      {
        name: "Sky Lagoon",
        tag: "可选",
        booking: {
          label: "需预约",
          text: "热门傍晚时段建议提前预约；若航班晚点或到达后疲劳，直接删掉不要硬赶。"
        },
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sky%20Lagoon%20Iceland.jpg",
        intro: "首都圈的海景温泉，适合作为长途飞行后的恢复项目。它比蓝湖更靠近雷克雅未克市区，若你最后一天想把蓝湖留给机场前，这天选 Sky Lagoon 很顺。",
        stay: "2-3 小时",
        highlights: ["海边无边感温泉。", "适合抵达日放松，不消耗驾驶精力。"],
        tips: ["建议提前预约；泡完不要再安排长距离夜间驾驶。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sky+Lagoon+Iceland"
      }
    ],
    links: [
      { label: "打开导航", url: "https://www.google.com/maps/dir/Keflav%C3%ADk+International+Airport/Reykjav%C3%ADk/Sky+Lagoon" }
    ]
  },
  {
    day: 2,
    date: "6月22日 周一",
    title: "黄金圈，推进到南岸门户",
    drive: "约 260-330 km | 4-5 小时",
    route: "Reykjavik → Thingvellir → Geysir → Gullfoss → Kerid → Selfoss/Hella",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gullfoss%2C%20an%20iconic%20waterfall%20of%20Iceland.jpg",
    imageAlt: "Gullfoss 瀑布",
    mustSee: ["Thingvellir", "Geysir", "Gullfoss"],
    optional: ["Kerid 火山口，顺路且停留时间短。", "若精力足，可把 Seljalandsfoss 提前到今天傍晚看。"],
    notes: [],
    cut: ["Bruarfoss。环岛版时间紧，它好看但不应挤掉三大经典。"],
    accommodation: {
      name: "Hotel Eyjafjallajokull",
      tag: "住宿",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Eyjafjallaj%C3%B6kull%20from%20the%20sea.jpg",
      intro: "Day 2 住宿，作为黄金圈之后进入南岸的落脚点。住在南岸门户附近，第二天可以更早开始瀑布和黑沙滩行程。",
      stay: "6月22日-6月23日",
      highlights: ["Hotel Eyjafjallajokull / 埃亚菲亚德拉库尔酒店。", "适合作为黄金圈与南岸之间的过夜点。"],
      tips: ["从 Kerid 或 Selfoss 一带继续开到酒店，晚餐和加油建议提前规划。"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Eyjafjallajokull"
    },
    fuelStops: fuel("N1 Selfoss", "N1 Hvolsvollur"),
    attractions: [
      {
        name: "Thingvellir 国家公园",
        tag: "必看",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%9Eingvellir%20National%20Park%2C%20Iceland.jpg",
        intro: "冰岛最重要的历史与地质景点之一，既是古议会所在地，也是欧亚板块与北美板块张裂带的一部分。这里的美不是单点冲击，而是裂谷、湖泊、岩壁和历史感叠在一起。",
        stay: "1-1.5 小时",
        highlights: ["Almannagja 裂谷步道。", "Oxararfoss 小瀑布。", "Thingvallavatn 湖景。"],
        tips: ["停车场分散，先确认自己想走的步道；风大时体感会比雷克雅未克冷。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Thingvellir+National+Park"
      },
      {
        name: "Geysir 地热区",
        tag: "必看",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Strokkur%20eruption%20in%20Iceland.jpg",
        intro: "黄金圈的地热代表，真正活跃的是 Strokkur 间歇泉。它通常几分钟喷发一次，第一次看很有仪式感，也很适合短停。",
        stay: "35-60 分钟",
        highlights: ["Strokkur 喷发瞬间。", "周边热泉、蒸汽和硫磺色地貌。"],
        tips: ["站在上风侧少闻硫磺味；不要跨越围绳或触碰热泉水。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Geysir+Iceland"
      },
      {
        name: "Gullfoss",
        tag: "必看",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gullfoss%2C%20an%20iconic%20waterfall%20of%20Iceland.jpg",
        intro: "冰岛最经典的瀑布之一，瀑布分两级落入峡谷，水量和声势都很强。天气好时水雾里可能出现彩虹。",
        stay: "45-75 分钟",
        highlights: ["上观景台看整体峡谷。", "下步道近距离感受水雾和落差。"],
        tips: ["步道湿滑，防水外套比雨伞实用；强风时不要靠近边缘。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Gullfoss"
      },
      {
        name: "Kerid 火山口",
        tag: "可选",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kerid%20Crater%20Iceland.jpg",
        intro: "一个色彩很清晰的火山口湖，红褐色火山岩、绿色坡面和蓝色湖水对比明显。它停留时间短，适合作为黄金圈收尾。",
        stay: "25-45 分钟",
        highlights: ["绕火山口边缘一圈。", "下到湖边看颜色变化。"],
        tips: ["若当天出发晚或天气差，可直接删掉，把时间留给南岸推进。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kerid+Crater"
      }
    ],
    links: [
      { label: "打开导航", url: "https://www.google.com/maps/dir/Reykjav%C3%ADk/Thingvellir/Geysir/Gullfoss/Kerid+Crater/Hella" }
    ]
  },
  {
    day: 3,
    date: "6月23日 周二",
    title: "南岸一日高密度：瀑布、黑沙滩、冰川湖",
    drive: "约 430-490 km | 5.5-6.5 小时",
    route: "Hella → Seljalandsfoss → Skogafoss → Reynisfjara → Vik Church → Fjadrargljufur → Jokulsarlon → Diamond Beach → Hofn",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jokulsarlon%20Glacier%20Lagoon%20in%20Iceland.jpg",
    imageAlt: "Jokulsarlon 冰川湖",
    mustSee: ["Seljalandsfoss", "Skogafoss", "Reynisfjara", "Jokulsarlon", "Diamond Beach"],
    optional: ["Vik Church 维克教堂，顺路短停看小镇和黑沙滩方向。", "Dyrholaey 远眺黑沙滩，天气好再加。"],
    notes: ["这是全程最硬的一天之一。建议早出发，午餐简单解决，别安排冰川徒步。", "住宿尽量订 Hofn 或冰川湖附近，第二天环东峡湾更顺。", "黑沙滩安全优先，不要靠近水线。"],
    cut: ["Kvernufoss → Dyrholaey → Fjadrargljufur"],
    accommodation: {
      name: "Guesthouse Hvammur",
      tag: "住宿",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/H%C3%B6fn%20Iceland.jpg",
      intro: "Day 3 住宿，位于 Hofn 一带，适合结束南岸长距离推进后休整。第二天从这里继续进入东南角和东峡湾。",
      stay: "6月23日-6月24日",
      highlights: ["Guesthouse Hvammur / 哈莫宾馆。", "Hofn 区域住宿，便于衔接 Stokksnes 和东峡湾。"],
      tips: ["这天路程很长，建议抵达前确认晚餐时间；Hofn 餐厅热门时段可能需要预订。"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Guesthouse+Hvammur+Hofn"
    },
    fuelStops: fuel("N1 Hvolsvollur", "N1 Vik", "N1 Kirkjubaejarklaustur", "N1 Hofn"),
    attractions: [
      {
        name: "Seljalandsfoss",
        tag: "必看",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Seljalandsfoss%2C%20Iceland%20-%20panoramio.jpg",
        intro: "南岸最有辨识度的瀑布之一，特色是可以沿步道走到瀑布后方。它不只是看瀑布，而是可以体验从水帘背后看南岸平原。",
        stay: "35-60 分钟",
        highlights: ["瀑布后方步道。", "旁边的 Gljufrabui 峡谷瀑布可选加。"],
        tips: ["一定会湿，穿防水外套和防滑鞋；相机手机注意防水。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Seljalandsfoss"
      },
      {
        name: "Skogafoss",
        tag: "必看",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Skogafoss%20in%20Iceland.jpg",
        intro: "宽阔、垂直、非常有压迫感的瀑布，晴天水雾里常能看到彩虹。瀑布右侧楼梯能上到观景台，看到河流向内陆延伸。",
        stay: "40-75 分钟",
        highlights: ["瀑布正面广角。", "右侧楼梯上观景台。"],
        tips: ["正面水雾很大；如果当天要赶到 Hofn，上观景台量力而行。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Skogafoss"
      },
      {
        name: "Reynisfjara 黑沙滩",
        tag: "必看",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Reynisfjara%20Black%20Sand%20Beach%20Iceland.jpg",
        intro: "冰岛最著名的黑沙滩，玄武岩柱、Reynisdrangar 海蚀柱和强烈的北大西洋海浪构成了非常戏剧化的景观。它也是真正需要严肃对待安全的景点。",
        stay: "30-50 分钟",
        highlights: ["玄武岩柱。", "Reynisdrangar 海蚀柱。", "黑沙、白浪和峭壁的反差。"],
        tips: ["不要靠近水线，不要背对海浪；遵守现场警示灯和封闭区域。2026 年初该海滩曾出现明显侵蚀和安全风险，出发当天务必看现场标识。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Reynisfjara+Beach"
      },
      {
        name: "Vik Church",
        tag: "可选",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/V%C3%ADkurkirkja%20in%20V%C3%ADk%2C%20Iceland.jpg",
        intro: "Vik Church / Vikurkirkja 是维克小镇山坡上的白墙红顶教堂，位置很适合俯看小镇、黑沙滩和 Reynisdrangar 海蚀柱方向。它停留成本低，适合作为 Reynisfjara 之后的短暂停留。",
        stay: "15-30 分钟",
        highlights: ["白墙红顶教堂外观。", "维克小镇、海岸线和远处海蚀柱视野。"],
        tips: ["停车和拍照尽量不影响教堂活动；如果 Day 3 时间明显落后，直接略过。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Vikurkirkja+Iceland"
      },
      {
        name: "Fjadrargljufur",
        tag: "可选",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fja%C3%B0r%C3%A1rglj%C3%BAfur%20canyon%2C%20Iceland.jpg",
        intro: "曲线很漂亮的绿色峡谷，步道沿峡谷边缘前进，适合短徒步和俯瞰。它很美，但在环岛版里属于时间紧时可以删的点。",
        stay: "45-75 分钟",
        highlights: ["峡谷曲线和观景台。", "雨后绿色层次更明显。"],
        tips: ["只走开放步道，部分区域可能因植被保护关闭。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fjadrargljufur"
      },
      {
        name: "Jokulsarlon 冰川湖",
        tag: "必看",
        booking: {
          label: "船游需预约",
          text: "湖边自由参观不用预约；如果要坐两栖船或 Zodiac 船，提前订班次，并预留 40-60 分钟。"
        },
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jokulsarlon%20Glacier%20Lagoon%20in%20Iceland.jpg",
        intro: "冰川从 Vatnajokull 边缘退缩形成的冰河湖，蓝白冰山漂浮在湖面，是南岸最震撼的景点之一。即使只停 30 分钟，也值得作为这天的核心目标。",
        stay: "45-90 分钟；坐船另加 40-60 分钟",
        highlights: ["湖边看漂浮冰山。", "可能看到海豹。", "船游可更接近冰山。"],
        tips: ["不要爬冰山；船游要提前预约，并会压缩当天其他停留。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Jokulsarlon+Glacier+Lagoon"
      },
      {
        name: "Diamond Beach",
        tag: "必看",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Diamond%20Beach%20Iceland.jpg",
        intro: "冰川湖的冰块被冲到黑沙滩上，像散落的玻璃或钻石。它就在 Jokulsarlon 对面，停留成本很低，但景观非常独特。",
        stay: "25-45 分钟",
        highlights: ["黑沙上的透明冰块。", "日光穿过冰块时的蓝色和透明质感。"],
        tips: ["同样不要靠近浪线；冰块会滚动或碎裂，不要攀爬。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Diamond+Beach+Iceland"
      }
    ],
    links: [
      { label: "打开导航", url: "https://www.google.com/maps/dir/Hella/Seljalandsfoss/Sk%C3%B3gafoss/Reynisfjara+Beach/Vikurkirkja/Fja%C3%B0r%C3%A1rglj%C3%BAfur/J%C3%B6kuls%C3%A1rl%C3%B3n+Glacier+Lagoon/Diamond+Beach/H%C3%B6fn" }
    ]
  },
  {
    day: 4,
    date: "6月24日 周三",
    title: "东南角与东峡湾",
    drive: "约 290-360 km | 4.5-5.5 小时",
    route: "Hofn → Stokksnes/Vestrahorn → Djupivogur → Eastfjords → Seydisfjordur → Egilsstadir",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vestrahorn%20mountain%20and%20Stokksnes%20beach.jpg",
    imageAlt: "Vestrahorn 与 Stokksnes",
    mustSee: ["Stokksnes/Vestrahorn", "东峡湾海岸公路"],
    optional: ["Seydisfjordur 彩虹街和小镇港口。", "若天气好，可选择 Oxi Pass；若雨雾大，走一号公路主线更稳。"],
    notes: [],
    cut: ["Seydisfjordur。如果风雨大或山路云雾重，直接住 Egilsstadir。"],
    accommodation: {
      name: "Hildibrand Apartment Hotel",
      tag: "住宿",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Eastfjords%20Iceland.jpg",
      intro: "Day 4 住宿，位于东峡湾区域。它比 Egilsstadir 更深入峡湾地形，适合把东部小镇和海岸线体验延伸到晚上。",
      stay: "6月24日-6月25日",
      highlights: ["Hildibrand Apartment Hotel / 希尔迪布兰德公寓酒店。", "东峡湾住宿点，适合安排行程末段抵达。"],
      tips: ["若当天风雨、山路云雾或疲劳明显，务必按路况调整 Seydisfjordur 和支线停留。"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Hildibrand+Apartment+Hotel"
    },
    fuelStops: fuel("N1 Hofn", "N1 Egilsstadir"),
    attractions: [
      {
        name: "Stokksnes / Vestrahorn",
        tag: "必看",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vestrahorn%20mountain%20and%20Stokksnes%20beach.jpg",
        intro: "Vestrahorn 是东南角最上镜的山体之一，黑沙滩、草丘、水面倒影和尖锐山峰组合很强。清晨或低云天气尤其有气氛。",
        stay: "60-90 分钟",
        highlights: ["Vestrahorn 山形。", "黑沙滩倒影。", "Viking Village 外观可选。"],
        tips: ["通常需要付费进入；风大时沙子打脸，注意镜头和车门。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Stokksnes+Vestrahorn"
      },
      {
        name: "东峡湾海岸公路",
        tag: "必看",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Eastfjords%20Iceland.jpg",
        intro: "东峡湾不是一个单一景点，而是一段不断转弯、贴着峡湾与山坡行进的路。它的魅力在于慢慢展开的海湾、小镇、山体和海鸟。",
        stay: "沿途驾驶观景 2-3 小时",
        highlights: ["峡湾公路弯道和海景。", "Djupivogur 可作为午餐/咖啡短停。"],
        tips: ["不要为了拍照急刹，找正式停车点；雾大时减少支线。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Djupivogur+Iceland"
      },
      {
        name: "Seydisfjordur",
        tag: "可选",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sey%C3%B0isfj%C3%B6r%C3%B0ur%20Iceland.jpg",
        intro: "东部最有名的小镇之一，山谷、港口、彩虹街和蓝色教堂很有辨识度。它需要从 Egilsstadir 翻山往返，天气好时值得，雨雾大时不强求。",
        stay: "1-2 小时，不含往返山路",
        highlights: ["彩虹街和蓝教堂。", "港口与山谷景观。"],
        tips: ["山路遇雾、强风或疲劳时直接删掉；不要影响 Day 5 北部推进。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Seydisfjordur"
      }
    ],
    links: [
      { label: "打开导航", url: "https://www.google.com/maps/dir/H%C3%B6fn/Stokksnes/Dj%C3%BApivogur/Seydisfjordur/Egilssta%C3%B0ir" }
    ]
  },
  {
    day: 5,
    date: "6月25日 周四",
    title: "北部荒原、Dettifoss 与米湖",
    drive: "约 300-380 km | 4.5-6 小时",
    route: "Egilsstadir → Dettifoss → Hverir → Krafla/Viti → Myvatn → Godafoss → Husavik/Myvatn",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dettifoss%20-%20Iceland%20-%20panoramio.jpg",
    imageAlt: "Dettifoss 瀑布",
    mustSee: ["Dettifoss", "Hverir 地热区", "Myvatn 湖区", "Godafoss"],
    optional: ["Krafla/Viti 火山口", "Dimmuborgir 黑色熔岩城", "想观鲸可住 Husavik，但会让这天更满；想稳一点住 Myvatn。"],
    notes: ["Dettifoss 有东西两侧道路，按当天开放和路况选择；不要只看导航预计时间。"],
    cut: ["Krafla/Viti → Dimmuborgir → Husavik 观鲸。保留 Dettifoss、Hverir、Godafoss。"],
    accommodation: {
      name: "Skulagardur Country Hotel & Restaurant",
      tag: "住宿",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/H%C3%BAsav%C3%ADk%20Iceland.jpg",
      intro: "Day 5 住宿，位于北部乡村区域，适合结束 Dettifoss、米湖、Godafoss 或 Husavik 后休整。",
      stay: "6月25日-6月26日",
      highlights: ["Skulagardur Country Hotel & Restaurant / 乡村酒店和餐厅。", "北部住宿点，适合把当天节奏从景点切换到休息。"],
      tips: ["乡村区域餐饮选择有限，建议确认酒店餐厅营业时间或提前备好晚餐。"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Sk%C3%BAlagar%C3%B0ur+Country+Hotel+Restaurant"
    },
    fuelStops: fuel("N1 Egilsstadir", "N1 Reykjahlid / Myvatn", "N1 Husavik"),
    attractions: [
      {
        name: "Dettifoss",
        tag: "必看",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dettifoss%20-%20Iceland%20-%20panoramio.jpg",
        intro: "北部最震撼的瀑布，水量巨大，灰白色冰川河水落入峡谷，现场声浪非常强。它在 Vatnajokull 国家公园北部，是环岛北线的重量级景点。",
        stay: "60-90 分钟",
        highlights: ["瀑布水量和峡谷尺度。", "西岸 862 路通常更易抵达，东岸角度更野。"],
        tips: ["按当天 road.is/umferdin 路况选择 862 或 864；路边和观景处风很大，注意碎石和湿滑。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Dettifoss"
      },
      {
        name: "Hverir / Namafjall",
        tag: "必看",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hverir%20Iceland.jpg",
        intro: "米湖东侧的地热区，泥浆锅、蒸汽孔、黄色矿物和强烈硫磺味构成了非常“外星”的地貌。",
        stay: "30-50 分钟",
        highlights: ["沸腾泥浆锅。", "蒸汽喷口和矿物色彩。"],
        tips: ["只走标识路径，地表可能很薄且高温；硫磺味重，停留不必太久。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hverir+Iceland"
      },
      {
        name: "Myvatn 湖区",
        tag: "必看",
        booking: {
          label: "温泉需预约",
          text: "湖区本身不用预约；若要泡 Myvatn Nature Baths，建议提前订票，并从 Krafla/Viti 或 Husavik 中删减时间。"
        },
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20M%C3%BDvatn%2C%20Iceland.jpg",
        intro: "米湖不是单一观景台，而是一组火山、湖泊、熔岩和湿地景观。环岛时间紧，可以选 1-2 个点，不必全扫。",
        stay: "1-2 小时，按点位增减",
        highlights: ["Skutustadagigar 伪火山口。", "Dimmuborgir 熔岩迷宫。", "Myvatn Nature Baths 可替代蓝湖。"],
        tips: ["夏季小虫可能很多；如果要泡 Myvatn Nature Baths，需删减 Krafla 或 Husavik。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Lake+Myvatn"
      },
      {
        name: "Godafoss",
        tag: "必看",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Go%C3%B0afoss%20Iceland.jpg",
        intro: "“众神瀑布”形态优雅，水流呈马蹄形展开，比 Dettifoss 更轻盈。它靠近一号公路，是北部非常高性价比的停留。",
        stay: "35-60 分钟",
        highlights: ["东西两侧都可观景。", "傍晚光线柔和时很好拍。"],
        tips: ["若 Day 5 太赶，可放到 Day 6 早上补看。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Godafoss"
      },
      {
        name: "Husavik",
        tag: "可选",
        booking: {
          label: "观鲸需预约",
          text: "观鲸船班建议提前订；出发当天仍要按风浪、体力和晕船风险决定是否保留。"
        },
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/H%C3%BAsav%C3%ADk%20Iceland.jpg",
        intro: "北部观鲸名镇，也适合住一晚看港口和海湾。问题是它会增加路程和时间，适合你愿意牺牲米湖部分点位时加入。",
        stay: "观鲸约 3 小时；小镇短停 45-90 分钟",
        highlights: ["观鲸船。", "港口、教堂和海湾视野。"],
        tips: ["观鲸要提前订，也要看风浪；晕船者谨慎。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Husavik+Iceland"
      }
    ],
    links: [
      { label: "打开导航", url: "https://www.google.com/maps/dir/Egilssta%C3%B0ir/Dettifoss/Hverir/M%C3%BDvatn/Go%C3%B0afoss/H%C3%BAsav%C3%ADk" }
    ]
  },
  {
    day: 6,
    date: "6月26日 周五",
    title: "阿克雷里与北部西行",
    drive: "约 280-390 km | 3.5-5.5 小时",
    route: "Myvatn/Husavik → Godafoss 补看 → Akureyri → Glaumbaer → Kolugljufur/Hvitserkur → Hvammstangi/Blonduos",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Akureyri%2C%20Iceland%20%2840950677715%29.jpg",
    imageAlt: "Akureyri 城市与峡湾",
    mustSee: ["Godafoss", "Akureyri 市区短停"],
    optional: ["Glaumbaer 草皮屋，能补足人文景观。", "Hvitserkur 和 Kolugljufur 二选一即可，别两个都硬塞。"],
    notes: [],
    cut: ["Trollaskagi 半岛绕行。风景好，但会显著增加车程。"],
    accommodation: {
      name: "Hotel Hvitserkur",
      tag: "住宿",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hvitserkur%20Iceland.jpg",
      intro: "Day 6 住宿，位于西北部 Hvitserkur / Vatnsnes 一带，方便把北部西行和犀牛石区域衔接起来。",
      stay: "6月26日-6月27日",
      highlights: ["Hotel Hvitserkur / 华姆斯唐吉酒店。", "靠近西北部海岸与 Hvitserkur 区域。"],
      tips: ["如果当天已经看过 Hvitserkur，可直接入住；若到得早，也可以把犀牛石留到清晨补看。"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=H%C3%B3tel+Hv%C3%ADtserkur"
    },
    fuelStops: fuel("N1 Akureyri", "N1 Blonduos"),
    attractions: [
      {
        name: "Akureyri",
        tag: "必看",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Akureyri%2C%20Iceland%20%2840950677715%29.jpg",
        intro: "冰岛北部中心城市，坐落在 Eyjafjordur 峡湾边。它不是自然奇观型景点，但适合补给、午餐、咖啡和短暂城市散步。",
        stay: "1-2 小时",
        highlights: ["Akureyrarkirkja 教堂。", "市中心咖啡和餐厅。", "峡湾视野。"],
        tips: ["环岛中段容易疲劳，这里适合作为节奏恢复点，不建议排成长时间城市游。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Akureyri"
      },
      {
        name: "Glaumbaer 草皮屋",
        tag: "可选",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Glaumb%C3%A6r%20Turf%20Houses%20Iceland.jpg",
        intro: "保存较好的冰岛传统草皮屋建筑群，可以补上自然景观之外的人文体验。对第一次去冰岛的人来说，它能帮助理解过去农场生活如何适应寒冷与风。",
        stay: "45-75 分钟",
        highlights: ["草皮屋外观和室内陈设。", "了解传统农场结构。"],
        tips: ["若当天主要目标是赶到西北住宿，可只拍外观或直接删。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Glaumbaer+Iceland"
      },
      {
        name: "Hvitserkur",
        tag: "可选",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hvitserkur%20Iceland.jpg",
        intro: "北部海岸的玄武岩海蚀柱，形状像饮水的动物，是一个很有记忆点的小众景观。但它离一号公路有绕行成本。",
        stay: "45-75 分钟",
        highlights: ["海蚀柱远景。", "低潮时视角更丰富。"],
        tips: ["碎石路和天气会影响耗时；与 Kolugljufur 二选一即可。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hvitserkur"
      },
      {
        name: "Kolugljufur",
        tag: "可选",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Koluglj%C3%BAfur%20Iceland.jpg",
        intro: "峡谷和瀑布组合，停车后步行成本低，适合替代 Hvitserkur 作为西行路上的短暂停留。",
        stay: "25-45 分钟",
        highlights: ["峡谷俯瞰。", "瀑布和桥边视角。"],
        tips: ["风大时桥边注意站稳；时间紧时优先选它而不是 Hvitserkur。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kolugljufur"
      }
    ],
    links: [
      { label: "打开导航", url: "https://www.google.com/maps/dir/M%C3%BDvatn/Go%C3%B0afoss/Akureyri/Glaumb%C3%A6r/Hv%C3%ADtserkur/Hvammstangi" }
    ]
  },
  {
    day: 7,
    date: "6月27日 周六",
    title: "西北部赶路，进入斯奈山半岛",
    drive: "约 330-430 km | 4.5-6 小时",
    route: "Hvammstangi/Blonduos → Borgarnes → Ytri Tunga → Budakirkja → Arnarstapi → Kirkjufell → Grundarfjordur",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kirkjufell%20and%20Kirkjufellsfoss%2C%20Iceland.jpg",
    imageAlt: "Kirkjufell 山与瀑布",
    mustSee: ["Arnarstapi 海岸", "Kirkjufell/Kirkjufellsfoss"],
    optional: ["Ytri Tunga 海豹点", "Budakirkja 黑教堂", "如果北部出发太晚，直接去 Kirkjufell，把半岛南岸留给 Day 8 早上。"],
    notes: ["这天的重点是“到达斯奈山半岛并看草帽山”，不要被沿途小点拖慢。"],
    cut: ["Ytri Tunga → Budakirkja → Djupalonssandur。保留 Arnarstapi 和 Kirkjufell。"],
    accommodation: {
      name: "Guesthouse Hof",
      tag: "住宿",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kirkjufell%20and%20Kirkjufellsfoss%2C%20Iceland.jpg",
      intro: "Day 7 住宿，位于斯奈山半岛区域，适合在半岛南岸、Kirkjufell 和第二天补点之间做中转。",
      stay: "6月27日-6月28日",
      highlights: ["Guesthouse Hof / 霍夫旅馆。", "斯奈山半岛住宿点，便于第二天继续补完半岛景点。"],
      tips: ["半岛天气变化快，入住前后可按光线和风况调整 Kirkjufell 或南岸海岸点。"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Guesthouse+Hof+Iceland"
    },
    fuelStops: fuel("N1 Blonduos", "N1 Borgarnes", "N1 Grundarfjordur"),
    attractions: [
      {
        name: "Ytri Tunga",
        tag: "可选",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ytri%20Tunga%20Iceland%20seals.jpg",
        intro: "斯奈山半岛南岸的海豹观察点，和冰岛常见的瀑布、冰川景观很不同。能不能看到海豹取决于潮汐和运气。",
        stay: "25-45 分钟",
        highlights: ["海豹观察。", "南岸海滩和远处山景。"],
        tips: ["保持距离，不要追逐或靠近海豹；如果没有海豹，快速离开即可。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ytri+Tunga"
      },
      {
        name: "Budakirkja 黑教堂",
        tag: "可选",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/B%C3%BA%C3%B0akirkja%2C%20Sn%C3%A6fellsnes%2C%20Iceland.jpg",
        intro: "黑色木教堂立在开阔荒地上，背景是山与海，是斯奈山半岛最经典的摄影点之一。停留成本低，适合顺路短停。",
        stay: "20-40 分钟",
        highlights: ["黑教堂外观。", "荒地、山体和海岸线构图。"],
        tips: ["注意尊重教堂和周边私人/婚礼活动；不要踩踏围栏内区域。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Budakirkja"
      },
      {
        name: "Arnarstapi 海岸",
        tag: "必看",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Arnarstapi%20Iceland%20coast.jpg",
        intro: "斯奈山半岛南岸最值得停的海岸步道之一，海蚀拱、柱状岩、悬崖和海鸟构成了紧凑但层次丰富的景观。",
        stay: "60-90 分钟",
        highlights: ["Gatklettur 石拱。", "悬崖海岸步道。", "Arnarstapi 到 Hellnar 步道可选加长。"],
        tips: ["海边风大，悬崖边不要越线；如果 Day 7 到得晚，至少保留短线核心步道。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Arnarstapi"
      },
      {
        name: "Kirkjufell / Kirkjufellsfoss",
        tag: "必看",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kirkjufell%20and%20Kirkjufellsfoss%2C%20Iceland.jpg",
        intro: "斯奈山半岛最有代表性的山峰，常与前景的 Kirkjufellsfoss 小瀑布一起入镜。它是环岛后段的视觉高潮。",
        stay: "40-75 分钟",
        highlights: ["草帽山和瀑布经典机位。", "傍晚或清晨光线更柔和。"],
        tips: ["不建议自行攀登 Kirkjufell，山体陡且事故记录不少；经典照片在瀑布侧即可完成。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kirkjufell"
      }
    ],
    links: [
      { label: "打开导航", url: "https://www.google.com/maps/dir/Hvammstangi/Borgarnes/Ytri+Tunga/B%C3%BA%C3%B0akirkja/Arnarstapi/Kirkjufell/Grundarfj%C3%B6r%C3%B0ur" }
    ]
  },
  {
    day: 8,
    date: "6月28日 周日",
    title: "斯奈山半岛补完，回到首都圈",
    drive: "约 260-360 km | 3.5-5 小时",
    route: "Grundarfjordur → Djupalonssandur → Londrangar → Arnarstapi/Budakirkja 补看 → Borgarnes → Reykjavik/Keflavik",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/B%C3%BA%C3%B0akirkja%2C%20Sn%C3%A6fellsnes%2C%20Iceland.jpg",
    imageAlt: "斯奈山半岛 Budakirkja 黑教堂",
    mustSee: ["昨天没看完的斯奈山半岛核心点"],
    optional: ["Stykkisholmur 港口小镇，若你更想悠闲午餐可走北岸。", "晚上建议住 Keflavik 或 Reykjavik，不要住太远。"],
    notes: [],
    cut: ["Stykkisholmur 或 Djupalonssandur。若航班早，Day 8 晚直接住 Keflavik。"],
    accommodation: {
      name: "Hotel Leifur Eiriksson",
      tag: "住宿",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Reykjavik%20from%20Hallgrimskirkja.jpg",
      intro: "Day 8 回到雷克雅未克的住宿，和抵达日同一家酒店，方便整理行李、补给和第二天前往 Reykjanes 半岛。",
      stay: "6月28日-6月29日",
      highlights: ["Hotel Leifur Eiriksson / 雷弗艾瑞克森酒店。", "回到首都圈，便于第二天安排蓝湖或 Reykjanes 短线。"],
      tips: ["回城日容易疲劳，晚餐、停车和行李整理优先，不建议再安排太多市区活动。"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Leifur+Eiriksson+Reykjavik"
    },
    fuelStops: fuel("N1 Grundarfjordur", "Orkan Stykkisholmur", "N1 Borgarnes", "N1 Reykjavik"),
    attractions: [
      {
        name: "Djupalonssandur",
        tag: "可选",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dj%C3%BApal%C3%B3nssandur%20Iceland.jpg",
        intro: "斯奈山半岛西部的黑卵石海滩，海蚀岩、黑石和沉船遗迹让它比普通海滩更有故事感。它很值得，但要看 Day 7 是否已经消耗太多体力。",
        stay: "45-75 分钟",
        highlights: ["黑卵石海滩。", "海蚀岩和沉船碎片。", "传统举石。"],
        tips: ["不要带走石头；海浪危险，远离水线。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Djupalonssandur"
      },
      {
        name: "Londrangar",
        tag: "可选",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/L%C3%B3ndrangar%20Iceland.jpg",
        intro: "两根高耸的海蚀岩柱，是斯奈山半岛西部很有辨识度的海岸景观。它适合短停，和 Djupalonssandur、Arnarstapi 可以形成一组海岸线体验。",
        stay: "25-45 分钟",
        highlights: ["海蚀岩柱。", "海鸟和悬崖视野。"],
        tips: ["风大时别走太靠近崖边；若要赶回首都圈，可只远眺。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Londrangar"
      },
      {
        name: "Stykkisholmur",
        tag: "可选",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Stykkish%C3%B3lmur%20Iceland.jpg",
        intro: "斯奈山半岛北岸的港口小镇，节奏比南岸海岸点更安静。适合作为午餐、咖啡和轻松散步的替代路线。",
        stay: "1-2 小时",
        highlights: ["港口和小岛视野。", "小镇餐厅和咖啡。"],
        tips: ["如果你已经看完半岛南岸且想少走碎片景点，选北岸轻松版更舒服。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Stykkisholmur"
      }
    ],
    links: [
      { label: "打开导航", url: "https://www.google.com/maps/dir/Grundarfj%C3%B6r%C3%B0ur/Dj%C3%BApal%C3%B3nssandur/L%C3%B3ndrangar/Arnarstapi/Borgarnes/Reykjav%C3%ADk" },
      { label: "北岸轻松版", url: "https://www.google.com/maps/dir/Grundarfj%C3%B6r%C3%B0ur/Stykkish%C3%B3lmur/Borgarnes/Reykjav%C3%ADk", variant: "secondary" }
    ]
  },
  {
    day: 9,
    date: "6月29日 周一 | 半天",
    title: "蓝湖或 Reykjanes 半岛，返程",
    drive: "约 25-90 km | 30-100 分钟",
    route: "Reykjavik/Keflavik → Blue Lagoon 或 Reykjanes 短线 → Keflavik 机场",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Blue%20Lagoon%2C%20Iceland%20%282017%29.jpg",
    imageAlt: "Blue Lagoon 蓝湖",
    mustSee: [],
    optional: ["航班较晚：预约 Blue Lagoon，泡完去机场。", "航班较早：只做 Gunnuhver、Bridge Between Continents 等短停。"],
    notes: ["还车、加油、退税和行李整理至少留 2.5-3 小时。", "Reykjanes 近年火山活动频繁，蓝湖和道路开放情况请当天确认。"],
    cut: [],
    accommodation: {
      name: "Grindavik Guesthouse",
      tag: "住宿",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Blue%20Lagoon%2C%20Iceland%20%282017%29.jpg",
      intro: "Day 9 住宿，位于 Grindavik / Reykjanes 区域，适合把蓝湖或半岛短线安排在返程前后。",
      stay: "6月29日-6月30日",
      highlights: ["Grindavik Guesthouse / 格林达维克旅馆。", "靠近 Reykjanes 半岛与蓝湖区域。"],
      tips: ["Grindavik 周边受 Reykjanes 火山活动影响较多，入住前务必确认道路、警报和酒店运营状态。"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Grindavik+Guesthouse"
    },
    fuelStops: fuel("N1 Reykjavik", "Orkan Grindavik", "N1 Keflavik"),
    attractions: [
      {
        name: "Blue Lagoon",
        tag: "可选",
        booking: {
          label: "必须预约",
          text: "蓝湖按入场时段售票，必须提前预约；同时确认 Reykjanes 火山活动、道路和蓝湖开放状态。"
        },
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Blue%20Lagoon%2C%20Iceland%20%282017%29.jpg",
        intro: "冰岛最知名的地热温泉之一，靠近 Keflavik 机场，适合作为返程前的放松安排。它商业化程度高，但便利性确实很好。",
        stay: "2-3 小时",
        highlights: ["蓝白色地热水。", "机场前顺路。"],
        tips: ["必须提前预约；Reykjanes 火山活动可能影响开放和道路，出发当天确认。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Blue+Lagoon+Iceland"
      },
      {
        name: "Gunnuhver 与 Bridge Between Continents",
        tag: "可选",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gunnuhver%20Iceland.jpg",
        intro: "如果航班较早或不想泡温泉，Reykjanes 半岛可以做几个短停：Gunnuhver 看地热蒸汽，Bridge Between Continents 做一个象征性的板块分界打卡。",
        stay: "45-90 分钟",
        highlights: ["Gunnuhver 地热蒸汽。", "欧亚与北美板块之间的步桥。"],
        tips: ["地热区只走栈道；强风天蒸汽方向变化快。"],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Gunnuhver"
      }
    ],
    links: [
      { label: "打开导航", url: "https://www.google.com/maps/dir/Reykjav%C3%ADk/Blue+Lagoon/Keflav%C3%ADk+International+Airport" }
    ]
  }
];
