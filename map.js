const mapStops = [
  { day: "D1", name: "Keflavik Airport", coords: [63.9850, -22.6056] },
  { day: "D1", name: "Reykjavik", coords: [64.1466, -21.9426] },
  { day: "D2", name: "Thingvellir", coords: [64.2559, -21.1295] },
  { day: "D2", name: "Geysir", coords: [64.3137, -20.3009] },
  { day: "D2", name: "Gullfoss", coords: [64.3271, -20.1199] },
  { day: "D2", name: "Hella", coords: [63.8358, -20.4007] },
  { day: "D3", name: "Seljalandsfoss", coords: [63.6156, -19.9886] },
  { day: "D3", name: "Skogafoss", coords: [63.5321, -19.5114] },
  { day: "D3", name: "Reynisfjara", coords: [63.4044, -19.0444] },
  { day: "D3", name: "Vik", coords: [63.4186, -19.0060] },
  { day: "D3", name: "Fjadrargljufur", coords: [63.7712, -18.1719] },
  { day: "D3", name: "Jokulsarlon", coords: [64.0481, -16.1794] },
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
  { day: "D6", name: "Hvammstangi", coords: [65.3971, -20.9426] },
  { day: "D7", name: "Borgarnes", coords: [64.5383, -21.9206] },
  { day: "D7", name: "Ytri Tunga", coords: [64.8035, -23.0800] },
  { day: "D7", name: "Budakirkja", coords: [64.8216, -23.3846] },
  { day: "D7", name: "Arnarstapi", coords: [64.7669, -23.6278] },
  { day: "D7", name: "Kirkjufell", coords: [64.9417, -23.3069] },
  { day: "D7", name: "Grundarfjordur", coords: [64.9243, -23.2631] },
  { day: "D8", name: "Djupalonssandur", coords: [64.7520, -23.9005] },
  { day: "D8", name: "Stykkisholmur", coords: [65.0757, -22.7297] },
  { day: "D9", name: "Blue Lagoon", coords: [63.8804, -22.4495] }
];

const routePoints = [
  [63.9850, -22.6056], [64.1466, -21.9426], [64.2559, -21.1295], [64.3137, -20.3009],
  [64.3271, -20.1199], [63.8358, -20.4007], [63.6156, -19.9886], [63.5321, -19.5114],
  [63.4044, -19.0444], [63.4186, -19.0060], [63.7712, -18.1719], [64.0481, -16.1794],
  [64.2497, -15.2020], [64.2443, -14.9726], [64.6575, -14.2906], [65.2609, -14.0104],
  [65.2669, -14.3948], [65.8147, -16.3846], [65.6414, -16.8083], [65.6039, -16.9961],
  [65.6828, -17.5502], [66.0449, -17.3389], [65.6885, -18.1262], [65.5990, -19.5071],
  [65.6067, -20.6350], [65.3971, -20.9426], [64.5383, -21.9206], [64.8035, -23.0800],
  [64.8216, -23.3846], [64.7669, -23.6278], [64.9417, -23.3069], [64.9243, -23.2631],
  [64.7520, -23.9005], [65.0757, -22.7297], [64.1466, -21.9426], [63.8804, -22.4495],
  [63.9850, -22.6056]
];

function initMap() {
  const map = L.map("map", { scrollWheelZoom: false }).setView([64.7, -18.8], 6);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const colors = {
    D1: "#174f57", D2: "#b48535", D3: "#943d2b", D4: "#3d7191", D5: "#6e8066",
    D6: "#8b5f2f", D7: "#5e537b", D8: "#2d6a4f", D9: "#1f7a8c"
  };

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

  L.polyline(routePoints, { color: "#174f57", weight: 3, opacity: .72 }).addTo(map);
  map.fitBounds(L.latLngBounds(routePoints), { padding: [24, 24] });
}

initMap();
