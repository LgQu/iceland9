const mapStops = [
  { day: "D1", name: "Keflavik Airport", zh: "凯夫拉维克机场", coords: [63.9850, -22.6056] },
  { day: "D1", name: "Reykjavik", zh: "雷克雅未克", coords: [64.1466, -21.9426] },
  { day: "D1", name: "Sky Lagoon", zh: "天空温泉", coords: [64.1029, -21.8790] },
  { day: "D2", name: "Thingvellir", zh: "辛格维利尔国家公园", coords: [64.2559, -21.1295] },
  { day: "D2", name: "Geysir", zh: "盖歇尔地热区", coords: [64.3137, -20.3009] },
  { day: "D2", name: "Gullfoss", zh: "黄金瀑布", coords: [64.3271, -20.1199] },
  { day: "D2", name: "Kerid", zh: "凯瑞火山口", coords: [64.0413, -20.8851] },
  { day: "D2", name: "Hella", zh: "海拉", coords: [63.8358, -20.4007] },
  { day: "D3", name: "Seljalandsfoss", zh: "塞里雅兰瀑布", coords: [63.6156, -19.9886] },
  { day: "D3", name: "Skogafoss", zh: "斯科加瀑布", coords: [63.5321, -19.5114] },
  { day: "D3", name: "Reynisfjara", zh: "雷尼斯黑沙滩", coords: [63.4044, -19.0444] },
  { day: "D3", name: "Vik Church", zh: "维克教堂", coords: [63.4193, -19.0064] },
  { day: "D3", name: "Fjadrargljufur", zh: "羽毛峡谷", coords: [63.7712, -18.1719] },
  { day: "D3", name: "Jokulsarlon", zh: "杰古沙龙冰川湖", coords: [64.0481, -16.1794] },
  { day: "D3", name: "Diamond Beach", zh: "钻石沙滩", coords: [64.0435, -16.1774] },
  { day: "D3", name: "Hofn", zh: "赫本", coords: [64.2497, -15.2020] },
  { day: "D4", name: "Stokksnes", zh: "斯托克斯内斯 / 蝙蝠山", coords: [64.2443, -14.9726] },
  { day: "D4", name: "Djupivogur", zh: "迪尤皮沃格尔", coords: [64.6575, -14.2906] },
  { day: "D4", name: "Seydisfjordur", zh: "塞济斯菲厄泽", coords: [65.2609, -14.0104] },
  { day: "D4", name: "Egilsstadir", zh: "埃伊尔斯塔济", coords: [65.2669, -14.3948] },
  { day: "D5", name: "Dettifoss", zh: "黛提瀑布", coords: [65.8147, -16.3846] },
  { day: "D5", name: "Hverir", zh: "惠利尔地热区", coords: [65.6414, -16.8083] },
  { day: "D5", name: "Myvatn", zh: "米湖", coords: [65.6039, -16.9961] },
  { day: "D5", name: "Godafoss", zh: "众神瀑布", coords: [65.6828, -17.5502] },
  { day: "D5", name: "Husavik", zh: "胡萨维克", coords: [66.0449, -17.3389] },
  { day: "D6", name: "Akureyri", zh: "阿克雷里", coords: [65.6885, -18.1262] },
  { day: "D6", name: "Glaumbaer", zh: "格劳姆拜尔草皮屋", coords: [65.5990, -19.5071] },
  { day: "D6", name: "Hvitserkur", zh: "犀牛石", coords: [65.6067, -20.6350] },
  { day: "D6", name: "Kolugljufur", zh: "科卢峡谷", coords: [65.3338, -20.5682] },
  { day: "D6", name: "Hvammstangi", zh: "华姆斯唐吉", coords: [65.3971, -20.9426] },
  { day: "D7", name: "Borgarnes", zh: "博尔加内斯", coords: [64.5383, -21.9206] },
  { day: "D7", name: "Ytri Tunga", zh: "伊特里通加海豹海滩", coords: [64.8035, -23.0800] },
  { day: "D7", name: "Budakirkja", zh: "布迪尔黑教堂", coords: [64.8216, -23.3846] },
  { day: "D7", name: "Arnarstapi", zh: "阿尔纳斯塔皮海岸", coords: [64.7669, -23.6278] },
  { day: "D7", name: "Kirkjufell", zh: "草帽山", coords: [64.9417, -23.3069] },
  { day: "D7", name: "Grundarfjordur", zh: "格伦达菲厄泽", coords: [64.9243, -23.2631] },
  { day: "D8", name: "Djupalonssandur", zh: "迪尤帕隆黑卵石滩", coords: [64.7520, -23.9005] },
  { day: "D8", name: "Londrangar", zh: "隆德兰加尔海蚀柱", coords: [64.7355, -23.7737] },
  { day: "D8", name: "Stykkisholmur", zh: "斯蒂基斯霍尔米", coords: [65.0757, -22.7297] },
  { day: "D9", name: "Blue Lagoon", zh: "蓝湖", coords: [63.8804, -22.4495] },
  { day: "D9", name: "Gunnuhver", zh: "古努惠尔地热区", coords: [63.8181, -22.6870] }
];

const accommodationStops = [
  { day: "D1", name: "Hotel Leifur Eiriksson", zh: "雷弗艾瑞克森酒店", coords: [64.1427683, -21.9276390] },
  { day: "D2", name: "Hotel Eyjafjallajokull", zh: "埃亚菲亚德拉库尔酒店", coords: [63.7244900, -20.0380500] },
  { day: "D3", name: "Guesthouse Hvammur", zh: "哈莫宾馆", coords: [64.2499913, -15.2064772] },
  { day: "D4", name: "Hildibrand Apartment Hotel", zh: "希尔迪布兰德公寓酒店", coords: [65.1475551, -13.6908349] },
  { day: "D5", name: "Skulagardur Country Hotel & Restaurant", zh: "乡村酒店和餐厅", coords: [66.0773263, -16.7100720] },
  { day: "D6", name: "Hotel Hvitserkur", zh: "华姆斯唐吉酒店", coords: [65.5226150, -20.6498141] },
  { day: "D7", name: "Guesthouse Hof", zh: "霍夫旅馆", coords: [64.8076608, -23.1135418] },
  { day: "D8", name: "Hotel Leifur Eiriksson", zh: "雷弗艾瑞克森酒店", coords: [64.1427683, -21.9276390] },
  { day: "D9", name: "Grindavik Guesthouse", zh: "格林达维克旅馆", coords: [63.8385330, -22.4358218] }
];

const fuelStops = [
  { days: "D1/D9", name: "N1 Reykjavik", zh: "雷克雅未克加油站", coords: [64.1179603, -21.8991652] },
  { days: "D1", name: "N1 Keflavik", zh: "凯夫拉维克加油站", coords: [63.9971113, -22.5829073] },
  { days: "D2", name: "N1 Selfoss", zh: "塞尔福斯加油站", coords: [63.9368551, -20.9874610] },
  { days: "D2/D3", name: "N1 Hvolsvollur", zh: "霍尔斯沃德吕尔加油站", coords: [63.7500317, -20.2344385] },
  { days: "D3", name: "N1 Vik", zh: "维克加油站", coords: [63.4177702, -19.0012693] },
  { days: "D3", name: "N1 Kirkjubaejarklaustur", zh: "教堂城加油站", coords: [63.7934321, -18.0398237] },
  { days: "D3/D4", name: "N1 Hofn", zh: "赫本加油站", coords: [64.2591244, -15.2063653] },
  { days: "D4/D5", name: "N1 Egilsstadir", zh: "埃伊尔斯塔济加油站", coords: [65.2603656, -14.4082439] },
  { days: "D5", name: "N1 Reykjahlid / Myvatn", zh: "雷克雅利兹 / 米湖加油站", coords: [65.6416958, -16.9111850] },
  { days: "D5", name: "N1 Husavik", zh: "胡萨维克加油站", coords: [66.0475265, -17.3434233] },
  { days: "D6", name: "N1 Akureyri", zh: "阿克雷里加油站", coords: [65.6896733, -18.0971230] },
  { days: "D6/D7", name: "N1 Blonduos", zh: "布伦迪欧斯加油站", coords: [65.6600897, -20.2748562] },
  { days: "D7/D8", name: "N1 Borgarnes", zh: "博尔加内斯加油站", coords: [64.5441020, -21.9102632] },
  { days: "D7", name: "N1 Grundarfjordur", zh: "格伦达菲厄泽加油站", coords: [64.9251667, -23.2605021] },
  { days: "D8", name: "Orkan Stykkisholmur", zh: "斯蒂基斯霍尔米加油站", coords: [65.0729532, -22.7329271] },
  { days: "D9", name: "Orkan Grindavik", zh: "格林达维克加油站", coords: [63.8413873, -22.4249950] }
];

const routeSegments = [
  { day: "D1", drive: "约 50 km | 45-60 分钟", points: [[63.9850, -22.6056], [64.1466, -21.9426], [64.1029, -21.8790], [64.1427683, -21.9276390]] },
  { day: "D2", drive: "约 260-330 km | 4-5 小时", points: [[64.1427683, -21.9276390], [64.2559, -21.1295], [64.3137, -20.3009], [64.3271, -20.1199], [64.0413, -20.8851], [63.7244900, -20.0380500]] },
  { day: "D3", drive: "约 430-490 km | 5.5-6.5 小时", points: [[63.7244900, -20.0380500], [63.6156, -19.9886], [63.5321, -19.5114], [63.4044, -19.0444], [63.4186, -19.0060], [63.7712, -18.1719], [64.0481, -16.1794], [64.0435, -16.1774], [64.2499913, -15.2064772]] },
  { day: "D4", drive: "约 290-360 km | 4.5-5.5 小时", points: [[64.2499913, -15.2064772], [64.2443, -14.9726], [64.6575, -14.2906], [65.2609, -14.0104], [65.2669, -14.3948], [65.1475551, -13.6908349]] },
  { day: "D5", drive: "约 300-380 km | 4.5-6 小时", points: [[65.1475551, -13.6908349], [65.2669, -14.3948], [65.8147, -16.3846], [65.6414, -16.8083], [65.6039, -16.9961], [65.6828, -17.5502], [66.0449, -17.3389], [66.0773263, -16.7100720]] },
  { day: "D6", drive: "约 280-390 km | 3.5-5.5 小时", points: [[66.0773263, -16.7100720], [65.6828, -17.5502], [65.6885, -18.1262], [65.5990, -19.5071], [65.6067, -20.6350], [65.3338, -20.5682], [65.5226150, -20.6498141]] },
  { day: "D7", drive: "约 330-430 km | 4.5-6 小时", points: [[65.5226150, -20.6498141], [64.5383, -21.9206], [64.8035, -23.0800], [64.8216, -23.3846], [64.7669, -23.6278], [64.9417, -23.3069], [64.8076608, -23.1135418]] },
  { day: "D8", drive: "约 260-360 km | 3.5-5 小时", points: [[64.8076608, -23.1135418], [64.7520, -23.9005], [64.7355, -23.7737], [64.7669, -23.6278], [64.5383, -21.9206], [64.1427683, -21.9276390]] },
  { day: "D9", drive: "约 25-90 km | 30-100 分钟", points: [[64.1427683, -21.9276390], [63.8804, -22.4495], [63.8181, -22.6870], [63.8385330, -22.4358218]] }
];

function middlePoint(points) {
  return points[Math.floor((points.length - 1) / 2)];
}

function googleMapsCoordinateUrl(coords) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(coords.join(","))}`;
}

function bilingualName(stop) {
  return stop.zh ? `${stop.name}<br><span class="popup-zh">${stop.zh}</span>` : stop.name;
}

function initMap() {
  const map = L.map("map", { scrollWheelZoom: false }).setView([64.7, -18.8], 6);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const colors = {
    D1: "#0f766e", D2: "#b45309", D3: "#b91c1c", D4: "#2563eb", D5: "#4d7c0f",
    D6: "#7c3aed", D7: "#be185d", D8: "#047857", D9: "#0891b2"
  };

  routeSegments.forEach((segment) => {
    const route = L.polyline(segment.points, {
      color: colors[segment.day] || "#174f57",
      weight: 4,
      opacity: .78
    }).addTo(map);
    route.bindPopup(`<strong>${segment.day} 路程</strong><br>${segment.drive}`);
    route.bindTooltip(`${segment.day} · ${segment.drive}`, { sticky: true });

    L.marker(middlePoint(segment.points), {
      icon: L.divIcon({
        className: "route-time-marker",
        html: `<span style="border-color:${colors[segment.day]}"><strong>${segment.day}</strong>${segment.drive}</span>`,
        iconSize: null
      }),
      interactive: false
    }).addTo(map);
  });

  mapStops.forEach((stop) => {
    const marker = L.circleMarker(stop.coords, {
      radius: 7,
      color: "#fff",
      weight: 2,
      fillColor: colors[stop.day] || "#174f57",
      fillOpacity: 1
    }).addTo(map);
    marker.bindPopup(`<strong>${stop.day}</strong><br>${bilingualName(stop)}`);
  });

  const hotelIcon = L.divIcon({
    className: "hotel-map-marker",
    html: "H",
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -12]
  });

  accommodationStops.forEach((stop) => {
    const marker = L.marker(stop.coords, { icon: hotelIcon }).addTo(map);
    marker.bindPopup(`<strong>${stop.day} 住宿</strong><br>${bilingualName(stop)}`);
  });

  const fuelIcon = L.divIcon({
    className: "fuel-map-marker",
    html: "F",
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -11]
  });

  map.createPane("fuelPane");
  map.getPane("fuelPane").style.zIndex = 350;

  fuelStops.forEach((stop) => {
    const marker = L.marker(stop.coords, { icon: fuelIcon, pane: "fuelPane" }).addTo(map);
    marker.bindPopup(`
      <strong>${stop.days} 加油 / 补给</strong><br>
      ${bilingualName(stop)}<br>
      <a href="${googleMapsCoordinateUrl(stop.coords)}" target="_blank">Google Maps</a>
    `);
  });

  const legend = L.control({ position: "bottomleft" });
  legend.onAdd = () => {
    const container = L.DomUtil.create("div", "route-map-legend");
    container.innerHTML = `
      ${Object.entries(colors).map(([day, color]) => `
        <span><i style="background:${color}"></i>${day}</span>
      `).join("")}
      <span><b>H</b>住宿</span>
      <span><b class="fuel-legend-icon">F</b>加油</span>
    `;
    return container;
  };
  legend.addTo(map);

  const allRoutePoints = routeSegments.flatMap((segment) => segment.points);
  map.fitBounds(L.latLngBounds(allRoutePoints), { padding: [24, 24] });
}

initMap();
