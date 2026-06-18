const mapStops = [
  { day: "D1", name: "Keflavik Airport", coords: [63.9850, -22.6056] },
  { day: "D1", name: "Reykjavik", coords: [64.1466, -21.9426] },
  { day: "D1", name: "Sky Lagoon", coords: [64.1029, -21.8790] },
  { day: "D2", name: "Thingvellir", coords: [64.2559, -21.1295] },
  { day: "D2", name: "Geysir", coords: [64.3137, -20.3009] },
  { day: "D2", name: "Gullfoss", coords: [64.3271, -20.1199] },
  { day: "D2", name: "Kerid", coords: [64.0413, -20.8851] },
  { day: "D2", name: "Hella", coords: [63.8358, -20.4007] },
  { day: "D3", name: "Seljalandsfoss", coords: [63.6156, -19.9886] },
  { day: "D3", name: "Skogafoss", coords: [63.5321, -19.5114] },
  { day: "D3", name: "Reynisfjara", coords: [63.4044, -19.0444] },
  { day: "D3", name: "Vik", coords: [63.4186, -19.0060] },
  { day: "D3", name: "Fjadrargljufur", coords: [63.7712, -18.1719] },
  { day: "D3", name: "Jokulsarlon", coords: [64.0481, -16.1794] },
  { day: "D3", name: "Diamond Beach", coords: [64.0435, -16.1774] },
  { day: "D3", name: "Hofn", coords: [64.2497, -15.2020] },
  { day: "D4", name: "Stokksnes", coords: [64.2443, -14.9726] },
  { day: "D4", name: "Djupivogur", coords: [64.6575, -14.2906] },
  { day: "D4", name: "Seydisfjordur", coords: [65.2609, -14.0104] },
  { day: "D4", name: "Egilsstadir", coords: [65.2669, -14.3948] },
  { day: "D5", name: "Dettifoss", coords: [65.8147, -16.3846] },
  { day: "D5", name: "Hverir", coords: [65.6414, -16.8083] },
  { day: "D5", name: "Myvatn", coords: [65.6039, -16.9961] },
  { day: "D5", name: "Godafoss", coords: [65.6828, -17.5502] },
  { day: "D5", name: "Husavik", coords: [66.0449, -17.3389] },
  { day: "D6", name: "Akureyri", coords: [65.6885, -18.1262] },
  { day: "D6", name: "Glaumbaer", coords: [65.5990, -19.5071] },
  { day: "D6", name: "Hvitserkur", coords: [65.6067, -20.6350] },
  { day: "D6", name: "Kolugljufur", coords: [65.3338, -20.5682] },
  { day: "D6", name: "Hvammstangi", coords: [65.3971, -20.9426] },
  { day: "D7", name: "Borgarnes", coords: [64.5383, -21.9206] },
  { day: "D7", name: "Ytri Tunga", coords: [64.8035, -23.0800] },
  { day: "D7", name: "Budakirkja", coords: [64.8216, -23.3846] },
  { day: "D7", name: "Arnarstapi", coords: [64.7669, -23.6278] },
  { day: "D7", name: "Kirkjufell", coords: [64.9417, -23.3069] },
  { day: "D7", name: "Grundarfjordur", coords: [64.9243, -23.2631] },
  { day: "D8", name: "Djupalonssandur", coords: [64.7520, -23.9005] },
  { day: "D8", name: "Londrangar", coords: [64.7355, -23.7737] },
  { day: "D8", name: "Stykkisholmur", coords: [65.0757, -22.7297] },
  { day: "D9", name: "Blue Lagoon", coords: [63.8804, -22.4495] },
  { day: "D9", name: "Gunnuhver", coords: [63.8181, -22.6870] }
];

const accommodationStops = [
  { day: "D1", name: "Hotel Leifur Eiriksson", coords: [64.1427683, -21.9276390] },
  { day: "D2", name: "Hotel Eyjafjallajokull", coords: [63.7244900, -20.0380500] },
  { day: "D3", name: "Guesthouse Hvammur", coords: [64.2499913, -15.2064772] },
  { day: "D4", name: "Hildibrand Apartment Hotel", coords: [65.1475551, -13.6908349] },
  { day: "D5", name: "Skulagardur Country Hotel & Restaurant", coords: [66.0773263, -16.7100720] },
  { day: "D6", name: "Hotel Hvitserkur", coords: [65.5226150, -20.6498141] },
  { day: "D7", name: "Guesthouse Hof", coords: [64.8076608, -23.1135418] },
  { day: "D8", name: "Hotel Leifur Eiriksson", coords: [64.1427683, -21.9276390] },
  { day: "D9", name: "Grindavik Guesthouse", coords: [63.8385330, -22.4358218] }
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
    marker.bindPopup(`<strong>${stop.day}</strong><br>${stop.name}`);
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
    marker.bindPopup(`<strong>${stop.day} accommodation</strong><br>${stop.name}`);
  });

  const legend = L.control({ position: "bottomleft" });
  legend.onAdd = () => {
    const container = L.DomUtil.create("div", "route-map-legend");
    container.innerHTML = `
      ${Object.entries(colors).map(([day, color]) => `
        <span><i style="background:${color}"></i>${day}</span>
      `).join("")}
      <span><b>H</b>住宿</span>
    `;
    return container;
  };
  legend.addTo(map);

  const allRoutePoints = routeSegments.flatMap((segment) => segment.points);
  map.fitBounds(L.latLngBounds(allRoutePoints), { padding: [24, 24] });
}

initMap();
