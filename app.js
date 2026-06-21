function renderList(items) {
  if (!items || items.length === 0) return "";
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function formatTextWithAttractionNames(text) {
  return Object.entries(globalThis.attractionNames || {})
    .sort(([a], [b]) => b.length - a.length)
    .reduce((result, [rawName, displayName]) => result.replaceAll(rawName, displayName), text);
}

function renderBlock(title, items, className = "", formatNames = false) {
  if (!items || items.length === 0) return "";
  const renderedItems = formatNames ? items.map(formatTextWithAttractionNames) : items;
  return `
    <div class="detail-block ${className}">
      <h4>${title}</h4>
      ${renderList(renderedItems)}
    </div>
  `;
}

function bookingItems(day) {
  return (day.attractions || []).filter((attraction) => attraction.booking);
}

function renderBookingBadge(booking) {
  if (!booking) return "";
  return `<span class="booking-badge">${booking.label || "需预约"}</span>`;
}

function renderDayBookingAlert(day) {
  const items = bookingItems(day);
  if (items.length === 0) return "";
  return `
    <div class="booking-alert">
      <h4>本日需要提前预约</h4>
      <ul>
        ${items.map((item) => `<li><strong>${displayAttractionName(item.name)}</strong>：${item.booking.text}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderLinks(links) {
  if (!links || links.length === 0) return "";
  return `
    <div class="links">
      ${links.map((link) => `
        <a class="button ${link.variant || ""}" href="${link.url}" target="_blank">${link.label}</a>
      `).join("")}
    </div>
  `;
}

function imageKind(label) {
  const text = String(label || "").toLowerCase();
  if (/fuel|加油|n1|orkan|atlantsol/.test(text)) return "town";
  if (/grocery|supermarket|bonus|bónus|netto|nettó|kronan|krónan|hagkaup|kjorbudin|kjörbúðin|超市|采购/.test(text)) return "town";
  if (/foss|瀑布|gullfoss|skogafoss|seljalandsfoss|godafoss|dettifoss/.test(text)) return "waterfall";
  if (/jokulsarlon|diamond|glacier|冰川|蓝湖|lagoon/.test(text)) return "glacier";
  if (/reynis|beach|sand|海滩|黑沙|djupalon/.test(text)) return "beach";
  if (/hotel|guesthouse|apartment|酒店|宾馆|旅馆|公寓|church|kirkja|教堂|harpa|reykjavik|akureyri|stykkisholmur|港/.test(text)) return "town";
  if (/hverir|geysir|kerid|viti|gunnuhver|地热|火山/.test(text)) return "geothermal";
  if (/kirkjufell|vestrahorn|arnarstapi|londrangar|峡湾|山/.test(text)) return "mountain";
  return "landscape";
}

const remoteImages = {
  "雷克雅未克城市景观": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Reykjavik_Hallgrimskirkja_Interior_01.jpg/1280px-Reykjavik_Hallgrimskirkja_Interior_01.jpg",
  "Hallgrimskirkja": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Reykjavik_Hallgrimskirkja_Interior_01.jpg/1280px-Reykjavik_Hallgrimskirkja_Interior_01.jpg",
  "Harpa 与旧港": "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Harpa_Concert_Hall%2C_Reykjavik.jpg/330px-Harpa_Concert_Hall%2C_Reykjavik.jpg",
  "Sky Lagoon": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Warm_Skies_Over_Glacier_Lagoon_-_Iceland.jpg/1280px-Warm_Skies_Over_Glacier_Lagoon_-_Iceland.jpg",
  "Gullfoss 瀑布": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Gullfoss%2C_Iceland%2C_20230501_1002_3834.jpg/1280px-Gullfoss%2C_Iceland%2C_20230501_1002_3834.jpg",
  "Gullfoss": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Gullfoss%2C_Iceland%2C_20230501_1002_3834.jpg/1280px-Gullfoss%2C_Iceland%2C_20230501_1002_3834.jpg",
  "Thingvellir 国家公园": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/L%C3%B6gberg%2C_%C3%9Eingvellir_National_Park%2C_Iceland%2C_20230502_0928_4122.jpg/1280px-L%C3%B6gberg%2C_%C3%9Eingvellir_National_Park%2C_Iceland%2C_20230502_0928_4122.jpg",
  "Geysir 地热区": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Strokkur%2C_%C3%81rea_geot%C3%A9rmica_de_Geysir%2C_Su%C3%B0urland%2C_Islandia%2C_2014-08-16%2C_DD_085.JPG/1280px-Strokkur%2C_%C3%81rea_geot%C3%A9rmica_de_Geysir%2C_Su%C3%B0urland%2C_Islandia%2C_2014-08-16%2C_DD_085.JPG",
  "Kerid 火山口": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Crater_volc%C3%A1nico_Keri%C3%B0%2C_Su%C3%B0urland%2C_Islandia%2C_2014-08-16%2C_DD_144-146_HDR.JPG/1280px-Crater_volc%C3%A1nico_Keri%C3%B0%2C_Su%C3%B0urland%2C_Islandia%2C_2014-08-16%2C_DD_144-146_HDR.JPG",
  "Jokulsarlon 冰川湖": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/J%C3%B6kuls%C3%A1rl%C3%B3n_glacier_lagoon%2C_Iceland%2C_20240719_1141_2541.jpg/1280px-J%C3%B6kuls%C3%A1rl%C3%B3n_glacier_lagoon%2C_Iceland%2C_20240719_1141_2541.jpg",
  "Seljalandsfoss": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Seljalandsfoss_Waterfall%2C_Iceland%2C_20240720_1501_3097.jpg/1280px-Seljalandsfoss_Waterfall%2C_Iceland%2C_20240720_1501_3097.jpg",
  "Skogafoss": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sk%C3%B3gafoss_Waterfall%2C_Iceland%2C_20240720_1411_3075.jpg/1280px-Sk%C3%B3gafoss_Waterfall%2C_Iceland%2C_20240720_1411_3075.jpg",
  "Reynisfjara 黑沙滩": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Reynisfjara%2C_seen_from_Dyrh%C3%B3laey%2C_Iceland%2C_20240720_1024_2889.jpg/1280px-Reynisfjara%2C_seen_from_Dyrh%C3%B3laey%2C_Iceland%2C_20240720_1024_2889.jpg",
  "Vik Church": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Vikurkirkja_Church%2C_Vik%2C_Iceland.jpg/1280px-Vikurkirkja_Church%2C_Vik%2C_Iceland.jpg",
  "Fjadrargljufur": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Fjadr%C3%A1rglj%C3%BAfur-pjt.jpg/1280px-Fjadr%C3%A1rglj%C3%BAfur-pjt.jpg",
  "Diamond Beach": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Diamond_Beach%2C_Iceland_-_Flickr_-_RickybanPhotography.jpg/1280px-Diamond_Beach%2C_Iceland_-_Flickr_-_RickybanPhotography.jpg",
  "Vestrahorn 与 Stokksnes": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Klifatindur_Vestrahorn_Island_B%C3%B6hringer.jpg/1280px-Klifatindur_Vestrahorn_Island_B%C3%B6hringer.jpg",
  "Stokksnes / Vestrahorn": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Klifatindur_Vestrahorn_Island_B%C3%B6hringer.jpg/1280px-Klifatindur_Vestrahorn_Island_B%C3%B6hringer.jpg",
  "东峡湾海岸公路": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Coastline_Looking_South_-_Eastfjords.jpg/1280px-Coastline_Looking_South_-_Eastfjords.jpg",
  "Seydisfjordur": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Sey%C3%B0isfj%C3%B6r%C3%B0ur%2C_Iceland%2C_20240717_1453_1755.jpg/1280px-Sey%C3%B0isfj%C3%B6r%C3%B0ur%2C_Iceland%2C_20240717_1453_1755.jpg",
  "Dettifoss 瀑布": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Dettifoss_Waterfall%2C_Iceland%2C_20240716_1514_1603.jpg/1280px-Dettifoss_Waterfall%2C_Iceland%2C_20240716_1514_1603.jpg",
  "Dettifoss": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Dettifoss_Waterfall%2C_Iceland%2C_20240716_1514_1603.jpg/1280px-Dettifoss_Waterfall%2C_Iceland%2C_20240716_1514_1603.jpg",
  "Hverir / Namafjall": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/View_of_Hverar%C3%B6nd_geothermal_area%2C_Iceland%2C_20240716_1116_1321.jpg/1280px-View_of_Hverar%C3%B6nd_geothermal_area%2C_Iceland%2C_20240716_1116_1321.jpg",
  "Myvatn 湖区": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/M%C3%BDvatn_Dimmuborgir_Panorama_01.jpg/1280px-M%C3%BDvatn_Dimmuborgir_Panorama_01.jpg",
  "Godafoss": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Go%C3%B0afoss_Waterfall%2C_Iceland%2C_20240716_0856_1151.jpg/1280px-Go%C3%B0afoss_Waterfall%2C_Iceland%2C_20240716_0856_1151.jpg",
  "Husavik": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/2014-05-02_10-51-33_Iceland_-_H%C3%BAsav%C3%ADk_Nor%C3%B0ur%C3%BEing_10h_144%C2%B0.JPG/1280px-2014-05-02_10-51-33_Iceland_-_H%C3%BAsav%C3%ADk_Nor%C3%B0ur%C3%BEing_10h_144%C2%B0.JPG",
  "Akureyri 城市与峡湾": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/03613_ISL_Akureyri_cruise_vessel_vapors_V_P.jpg/1280px-03613_ISL_Akureyri_cruise_vessel_vapors_V_P.jpg",
  "Akureyri": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/03613_ISL_Akureyri_cruise_vessel_vapors_V_P.jpg/1280px-03613_ISL_Akureyri_cruise_vessel_vapors_V_P.jpg",
  "Glaumbaer 草皮屋": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Turf_wall.jpg/1280px-Turf_wall.jpg",
  "Hvitserkur": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Hv%C3%ADtserkur_Sea_Stack%2C_Northwestern_Region%2C_Iceland%2C_20240715_1125_0839.jpg/1280px-Hv%C3%ADtserkur_Sea_Stack%2C_Northwestern_Region%2C_Iceland%2C_20240715_1125_0839.jpg",
  "Kolugljufur": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Kolugljufur_Canyon_-_Iceland_-_panoramio.jpg/1280px-Kolugljufur_Canyon_-_Iceland_-_panoramio.jpg",
  "Kirkjufell 山与瀑布": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Kirkjufell%2C_Iceland%2C_20240714_1630_0702.jpg/1280px-Kirkjufell%2C_Iceland%2C_20240714_1630_0702.jpg",
  "Kirkjufell / Kirkjufellsfoss": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Kirkjufell%2C_Iceland%2C_20240714_1630_0702.jpg/1280px-Kirkjufell%2C_Iceland%2C_20240714_1630_0702.jpg",
  "Ytri Tunga": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Harbor_seals%2C_Ytri_Tunga_Beach%2C_Iceland%2C_20240714_1219_1033.jpg/1280px-Harbor_seals%2C_Ytri_Tunga_Beach%2C_Iceland%2C_20240714_1219_1033.jpg",
  "Budakirkja 黑教堂": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/B%C3%BA%C3%B0akirkja_with_Iceland_flag.jpg/1280px-B%C3%BA%C3%B0akirkja_with_Iceland_flag.jpg",
  "斯奈山半岛 Budakirkja 黑教堂": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/B%C3%BA%C3%B0akirkja_with_Iceland_flag.jpg/1280px-B%C3%BA%C3%B0akirkja_with_Iceland_flag.jpg",
  "Arnarstapi 海岸": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Natural_Arch_at_Arnarstapi.jpg/1280px-Natural_Arch_at_Arnarstapi.jpg",
  "Djupalonssandur": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Djpalonssandur_snaefellsnes_peninsula-6.jpg/250px-Djpalonssandur_snaefellsnes_peninsula-6.jpg",
  "Londrangar": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Londrangar_hiticeland_sn%C3%A6fellsnes.jpg/250px-Londrangar_hiticeland_sn%C3%A6fellsnes.jpg",
  "Stykkisholmur": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/1_aerial_pano_stykkish%C3%B3lmur_2017.jpg/250px-1_aerial_pano_stykkish%C3%B3lmur_2017.jpg",
  "Blue Lagoon 蓝湖": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Iceland_Blue_Lagoon.jpg/1280px-Iceland_Blue_Lagoon.jpg",
  "Blue Lagoon": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Iceland_Blue_Lagoon.jpg/1280px-Iceland_Blue_Lagoon.jpg",
  "Gunnuhver 与 Bridge Between Continents": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Gunnuhver_geothermal_area.jpg/1280px-Gunnuhver_geothermal_area.jpg"
};

const attractionNames = {
  "Keflavik 机场": "Keflavik Airport（凯夫拉维克机场）",
  "Reykjavik": "Reykjavik（雷克雅未克）",
  "Selfoss/Hella": "Selfoss / Hella（塞尔福斯 / 海拉）",
  "Hella": "Hella（海拉）",
  "Vik": "Vik（维克）",
  "Hofn": "Hofn（赫本）",
  "Egilsstadir": "Egilsstadir（埃伊尔斯塔济）",
  "Myvatn/Husavik": "Myvatn / Husavik（米湖 / 胡萨维克）",
  "Hvammstangi/Blonduos": "Hvammstangi / Blonduos（华姆斯唐吉 / 布伦迪欧斯）",
  "Grundarfjordur": "Grundarfjordur（格伦达菲厄泽）",
  "Reykjavik/Keflavik": "Reykjavik / Keflavik（雷克雅未克 / 凯夫拉维克）",
  "Hallgrimskirkja": "Hallgrimskirkja（哈尔格林姆教堂）",
  "Harpa 与旧港": "Harpa & Old Harbour（哈帕音乐厅与旧港）",
  "Sky Lagoon": "Sky Lagoon（天空温泉）",
  "Thingvellir 国家公园": "Thingvellir National Park（辛格维利尔国家公园）",
  "Geysir 地热区": "Geysir Geothermal Area（盖歇尔地热区）",
  "Gullfoss": "Gullfoss（黄金瀑布）",
  "Kerid 火山口": "Kerid Crater（凯瑞火山口）",
  "Seljalandsfoss": "Seljalandsfoss（塞里雅兰瀑布）",
  "Skogafoss": "Skogafoss（斯科加瀑布）",
  "Reynisfjara 黑沙滩": "Reynisfjara Black Sand Beach（雷尼斯黑沙滩）",
  "Vik Church": "Vik Church / Vikurkirkja（维克教堂）",
  "Fjadrargljufur": "Fjadrargljufur Canyon（羽毛峡谷）",
  "Jokulsarlon 冰川湖": "Jokulsarlon Glacier Lagoon（杰古沙龙冰川湖）",
  "Diamond Beach": "Diamond Beach（钻石沙滩）",
  "Stokksnes / Vestrahorn": "Stokksnes / Vestrahorn（斯托克斯内斯 / 蝙蝠山）",
  "东峡湾海岸公路": "Eastfjords Coast Road（东峡湾海岸公路）",
  "Seydisfjordur": "Seydisfjordur（塞济斯菲厄泽）",
  "Dettifoss": "Dettifoss（黛提瀑布）",
  "Hverir / Namafjall": "Hverir / Namafjall（惠利尔地热区 / 纳马山）",
  "Myvatn 湖区": "Lake Myvatn Area（米湖湖区）",
  "Godafoss": "Godafoss（众神瀑布）",
  "Husavik": "Husavik（胡萨维克）",
  "Akureyri": "Akureyri（阿克雷里）",
  "Glaumbaer 草皮屋": "Glaumbaer Turf Houses（格劳姆拜尔草皮屋）",
  "Hvitserkur": "Hvitserkur（犀牛石）",
  "Kolugljufur": "Kolugljufur Canyon（科卢峡谷）",
  "Ytri Tunga": "Ytri Tunga（伊特里通加海豹海滩）",
  "Budakirkja 黑教堂": "Budakirkja Black Church（布迪尔黑教堂）",
  "Arnarstapi 海岸": "Arnarstapi Coast（阿尔纳斯塔皮海岸）",
  "Kirkjufell / Kirkjufellsfoss": "Kirkjufell / Kirkjufellsfoss（草帽山 / 草帽山瀑布）",
  "Djupalonssandur": "Djupalonssandur（迪尤帕隆黑卵石滩）",
  "Londrangar": "Londrangar（隆德兰加尔海蚀柱）",
  "Stykkisholmur": "Stykkisholmur（斯蒂基斯霍尔米）",
  "Blue Lagoon": "Blue Lagoon（蓝湖）",
  "Gunnuhver 与 Bridge Between Continents": "Gunnuhver & Bridge Between Continents（古努惠尔地热区与大陆桥）",
  "Hotel Leifur Eiriksson": "Hotel Leifur Eiriksson（雷弗艾瑞克森酒店）",
  "Hotel Eyjafjallajokull": "Hotel Eyjafjallajokull（埃亚菲亚德拉库尔酒店）",
  "Guesthouse Hvammur": "Guesthouse Hvammur（哈莫宾馆）",
  "Hildibrand Apartment Hotel": "Hildibrand Apartment Hotel（希尔迪布兰德公寓酒店）",
  "Skulagardur Country Hotel & Restaurant": "Skulagardur Country Hotel & Restaurant（乡村酒店和餐厅）",
  "Hotel Hvitserkur": "Hotel Hvitserkur（华姆斯唐吉酒店）",
  "Guesthouse Hof": "Guesthouse Hof（霍夫旅馆）",
  "Grindavik Guesthouse": "Grindavik Guesthouse（格林达维克旅馆）",
  "Hagkaup Skeifan": "Hagkaup Skeifan（雷克雅未克大型超市）",
  "Kronan Hvolsvollur": "Kronan Hvolsvollur（霍尔斯沃德吕尔超市）",
  "Netto Hofn": "Netto Hofn（赫本超市）",
  "Netto Egilsstadir": "Netto Egilsstadir（埃伊尔斯塔济超市）",
  "Bonus Egilsstadir": "Bonus Egilsstadir（埃伊尔斯塔济超市）",
  "Netto Husavik": "Netto Husavik（胡萨维克超市）",
  "Bonus Husavik": "Bonus Husavik（胡萨维克超市）",
  "Kjorbudin Blonduos": "Kjorbudin Blonduos（布伦迪欧斯超市）",
  "Bonus Borgarnes": "Bonus Borgarnes（博尔加内斯超市）",
  "Bonus Reykjanesbaer": "Bonus Reykjanesbaer（雷克雅内斯拜尔超市）",
  "N1 Reykjavik": "N1 Reykjavik（雷克雅未克加油站）",
  "N1 Keflavik": "N1 Keflavik（凯夫拉维克加油站）",
  "N1 Selfoss": "N1 Selfoss（塞尔福斯加油站）",
  "N1 Hvolsvollur": "N1 Hvolsvollur（霍尔斯沃德吕尔加油站）",
  "N1 Vik": "N1 Vik（维克加油站）",
  "N1 Kirkjubaejarklaustur": "N1 Kirkjubaejarklaustur（教堂城加油站）",
  "N1 Hofn": "N1 Hofn（赫本加油站）",
  "N1 Egilsstadir": "N1 Egilsstadir（埃伊尔斯塔济加油站）",
  "N1 Reykjahlid / Myvatn": "N1 Reykjahlid / Myvatn（雷克雅利兹 / 米湖加油站）",
  "N1 Husavik": "N1 Husavik（胡萨维克加油站）",
  "N1 Akureyri": "N1 Akureyri（阿克雷里加油站）",
  "N1 Blonduos": "N1 Blonduos（布伦迪欧斯加油站）",
  "N1 Borgarnes": "N1 Borgarnes（博尔加内斯加油站）",
  "N1 Grundarfjordur": "N1 Grundarfjordur（格伦达菲厄泽加油站）",
  "Orkan Stykkisholmur": "Orkan Stykkisholmur（斯蒂基斯霍尔米加油站）",
  "Orkan Grindavik": "Orkan Grindavik（格林达维克加油站）"
};

globalThis.attractionNames = attractionNames;

const driveLegs = {
  1: ["约 5-10 分钟车程 / 15 分钟步行", "约 15 分钟车程", "约 10-15 分钟车程"],
  2: ["约 50 分钟车程", "约 10 分钟车程", "约 55-65 分钟车程", "约 60-75 分钟车程"],
  3: ["约 30 分钟车程", "约 35 分钟车程", "约 10-15 分钟车程", "约 70-80 分钟车程", "约 2 小时车程", "约 5 分钟车程"],
  4: ["约 2.5-3 小时车程，沿东峡湾边走边停", "约 1-1.5 小时车程", "约 60-90 分钟车程"],
  5: ["约 55-75 分钟车程，取决于 Dettifoss 道路选择", "约 10 分钟车程", "约 35-45 分钟车程", "约 45-60 分钟车程", "约 45-60 分钟车程"],
  6: ["约 55-75 分钟车程", "约 75-90 分钟车程", "约 60-75 分钟车程", "约 20-30 分钟车程"],
  7: ["约 10-15 分钟车程", "约 25-35 分钟车程", "约 20-30 分钟车程", "约 45-60 分钟车程", "约 30-45 分钟车程"],
  8: ["约 10-15 分钟车程", "约 20-30 分钟车程", "约 2.5-3 小时车程"],
  9: ["约 25-35 分钟车程", "约 25-35 分钟车程"]
};

function displayAttractionName(name) {
  return attractionNames[name] || `${name}（${name}）`;
}

function googleImagesUrl(name) {
  return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(`${name} Iceland`)}`;
}

function googleMapsRouteUrl(from, to) {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(mapQueryWithIceland(from))}&destination=${encodeURIComponent(mapQueryWithIceland(to))}&travelmode=driving`;
}

function googleMapsSearchUrl(name) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} Iceland`)}`;
}

function decodedMapStop(stop) {
  return decodeURIComponent(stop.replace(/\+/g, " "));
}

function mapQueryWithIceland(query) {
  const cleanQuery = String(query || "").trim();
  if (!cleanQuery) return "Iceland";
  if (/iceland|ísland/i.test(cleanQuery)) return cleanQuery;
  return `${cleanQuery} Iceland`;
}

function googleMapsSearchQuery(url) {
  if (!url) return "";
  const queryMatch = url.match(/[?&]query=([^&]+)/);
  if (queryMatch) return decodedMapStop(queryMatch[1]);

  const pathMatch = url.match(/\/maps\/search\/(?:\?api=1&query=)?([^/?#]+)/);
  if (pathMatch) return decodedMapStop(pathMatch[1]);

  return "";
}

function attractionMapQuery(attraction) {
  return googleMapsSearchQuery(attraction.mapUrl) || `${attraction.name} Iceland`;
}

function localImageUrl(label) {
  return `assets/images/${imageKind(label)}.svg`;
}

function handleImageError(img) {
  if (img.dataset.fallbackApplied === "true") return;
  img.dataset.fallbackApplied = "true";
  img.src = "assets/images/landscape.svg";
}

function displayImageUrl(src, alt) {
  return remoteImages[alt] || localImageUrl(alt || src);
}

function imageSet(label, src) {
  const primary = displayImageUrl(src, label);
  const kind = imageKind(label);
  const themed = {
    waterfall: [
      remoteImages["Gullfoss"],
      remoteImages["Seljalandsfoss"],
      remoteImages["Skogafoss"],
      remoteImages["Godafoss"]
    ],
    glacier: [
      remoteImages["Jokulsarlon 冰川湖"],
      remoteImages["Diamond Beach"],
      remoteImages["Blue Lagoon"],
      localImageUrl("glacier")
    ],
    beach: [
      remoteImages["Reynisfjara 黑沙滩"],
      remoteImages["Diamond Beach"],
      remoteImages["Djupalonssandur"],
      remoteImages["Londrangar"]
    ],
    town: [
      remoteImages["Harpa 与旧港"],
      remoteImages["Akureyri"],
      remoteImages["Stykkisholmur"],
      remoteImages["Budakirkja 黑教堂"]
    ],
    geothermal: [
      remoteImages["Geysir 地热区"],
      remoteImages["Hverir / Namafjall"],
      remoteImages["Gunnuhver 与 Bridge Between Continents"],
      remoteImages["Kerid 火山口"]
    ],
    mountain: [
      remoteImages["Kirkjufell / Kirkjufellsfoss"],
      remoteImages["Stokksnes / Vestrahorn"],
      remoteImages["Arnarstapi 海岸"],
      remoteImages["Londrangar"]
    ],
    landscape: [
      remoteImages["Thingvellir 国家公园"],
      remoteImages["东峡湾海岸公路"],
      remoteImages["Fjadrargljufur"],
      remoteImages["Kolugljufur"]
    ]
  };
  return [primary, ...(themed[kind] || themed.landscape)]
    .filter(Boolean)
    .filter((url, index, urls) => urls.indexOf(url) === index)
    .slice(0, 4);
}

function renderImage(src, alt, className = "") {
  return `<img class="${className}" src="${displayImageUrl(src, alt)}" alt="${alt}" loading="lazy" referrerpolicy="no-referrer" onerror="handleImageError(this)">`;
}

function renderGallery(label, src) {
  const images = imageSet(label, src);
  return `
    <a class="photo-strip-link" href="${googleImagesUrl(label)}" target="_blank" aria-label="在 Google 图片查看${displayAttractionName(label)}更多照片">
      <div class="photo-strip" aria-label="${label}图片组">
      ${images.map((url, index) => `
        <img class="photo-strip-image ${index === 0 ? "is-primary" : ""}" src="${url}" alt="${label}图片 ${index + 1}" loading="lazy" referrerpolicy="no-referrer" onerror="handleImageError(this)">
      `).join("")}
      </div>
    </a>
  `;
}

function renderAttraction(attraction, dayNumber, index) {
  const id = `day-${dayNumber}-attraction-${index + 1}`;
  const googleMapUrl = attraction.mapUrl || googleMapsSearchUrl(attraction.name);
  const englishName = attractionMapQuery(attraction);
  const typeClass = attraction.type ? `is-${attraction.type}` : "";
  const bookingClass = attraction.booking ? "has-booking" : "";
  return `
    <article class="attraction ${typeClass} ${bookingClass}" id="${id}">
      <div class="attraction-summary" role="button" tabindex="0" aria-expanded="false" aria-controls="${id}-details">
        <span class="attraction-summary-content">
          <span class="attraction-heading">
            <span class="attraction-tag">${attraction.tag}</span>
            ${renderBookingBadge(attraction.booking)}
            <strong class="attraction-title-link" data-map-url="${googleMapUrl}">${displayAttractionName(attraction.name)}</strong>
            <button class="button secondary copy-name-button compact" type="button" data-copy-text="${englishName}">复制英文名</button>
          </span>
          <small>${attraction.stay}</small>
        </span>
        <span class="attraction-icon">+</span>
      </div>
      <div class="attraction-details" id="${id}-details">
        ${renderGallery(attraction.name, attraction.image)}
        <div class="attraction-copy">
          <p>${attraction.intro}</p>
          ${attraction.booking ? renderBlock("预约提示", [attraction.booking.text], "booking-detail") : ""}
          ${renderBlock("看点", attraction.highlights)}
          ${renderBlock("注意事项", attraction.tips)}
        </div>
      </div>
    </article>
  `;
}

function renderDriveLeg(day, attractions, index, legIndex = index) {
  const nextAttraction = attractions[index + 1];
  const leg = attractions[index].driveToAccommodation && nextAttraction?.tag === "住宿"
    ? attractions[index].driveToAccommodation
    : driveLegs[day.day]?.[legIndex];
  if (!leg || !nextAttraction) return "";
  const from = displayAttractionName(attractions[index].name);
  const to = displayAttractionName(nextAttraction.name);
  const fromQuery = attractionMapQuery(attractions[index]);
  const toQuery = attractionMapQuery(nextAttraction);
  const url = googleMapsRouteUrl(fromQuery, toQuery);
  return `
    <a class="drive-leg" href="${url}" target="_blank" aria-label="打开 Google Maps：${from} 到 ${to}">
      <span>车程</span>
      <strong>${leg}</strong>
      <small>${from} → ${to}</small>
    </a>
  `;
}

function renderAttractions(day) {
  const attractions = day.attractions || [];
  const fuelStops = day.fuelStops || [];
  const groceryStops = day.groceryStops || [];
  const accommodation = day.accommodation;
  if (attractions.length === 0 && fuelStops.length === 0 && groceryStops.length === 0 && !accommodation) return "";
  const lastBeforeAccommodation = groceryStops[groceryStops.length - 1] || attractions[attractions.length - 1];
  const finalLegIndex = attractions.length - 1;
  const finalLegItems = accommodation && lastBeforeAccommodation ? [lastBeforeAccommodation, accommodation] : [];
  return `
    <section class="attractions">
      <h4>景点与补给详情</h4>
      <div class="attraction-list">
        ${attractions.map((attraction, index) => `
          ${renderAttraction(attraction, day.day, index)}
          ${renderDriveLeg(day, attractions, index)}
        `).join("")}
        ${fuelStops.map((fuelStop, index) => renderAttraction(fuelStop, day.day, attractions.length + index)).join("")}
        ${groceryStops.map((groceryStop, index) => renderAttraction(groceryStop, day.day, attractions.length + fuelStops.length + index)).join("")}
        ${accommodation && finalLegItems.length > 0 ? renderDriveLeg(day, finalLegItems, 0, finalLegIndex) : ""}
        ${accommodation ? renderAttraction(accommodation, day.day, attractions.length + fuelStops.length + groceryStops.length) : ""}
      </div>
    </section>
  `;
}

function renderDay(day, index) {
  const isOpen = index === 0;
  return `
    <article class="day-card ${isOpen ? "is-open" : ""}">
      ${renderImage(day.image, day.imageAlt, "day-image")}
      <div class="day-body">
        <div class="day-summary">
          <div>
            <div class="date">Day ${day.day} | ${day.date}</div>
            <h3>${day.title}</h3>
            <div class="drive">${day.drive}</div>
            <p class="route">${formatTextWithAttractionNames(day.route)}</p>
          </div>
          <button class="day-toggle" type="button" aria-label="展开或收起 Day ${day.day}" aria-expanded="${isOpen}">${isOpen ? "-" : "+"}</button>
        </div>
        <div class="day-details">
          ${renderDayBookingAlert(day)}
          <div class="detail-grid">
            ${renderBlock("必看", day.mustSee, "", true)}
            ${renderBlock("可选", day.optional, "", true)}
            ${renderBlock("注意事项", day.notes, "full", true)}
            ${renderBlock("可删减", day.cut, "full", true)}
          </div>
          ${renderAttractions(day)}
          ${renderLinks(day.links)}
        </div>
      </div>
    </article>
  `;
}

function setCardOpen(card, open) {
  const toggle = card.querySelector(".day-toggle");
  card.classList.toggle("is-open", open);
  toggle.textContent = open ? "-" : "+";
  toggle.setAttribute("aria-expanded", String(open));
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch (error) {
      // Fall back for local file previews or browsers that block Clipboard API.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function showCopyResult(button, label) {
  const originalLabel = button.dataset.originalLabel || button.textContent;
  button.dataset.originalLabel = originalLabel;
  button.textContent = label;
  window.setTimeout(() => {
    button.textContent = originalLabel;
  }, 1400);
}

const daysContainer = document.querySelector("#days");
daysContainer.innerHTML = itinerary.map(renderDay).join("");

daysContainer.addEventListener("click", (event) => {
  const copyButton = event.target.closest(".copy-name-button");
  if (copyButton) {
    event.stopPropagation();
    copyText(copyButton.dataset.copyText)
      .then(() => showCopyResult(copyButton, "已复制"))
      .catch(() => showCopyResult(copyButton, "复制失败"));
    return;
  }

  const titleLink = event.target.closest(".attraction-title-link");
  if (titleLink) {
    event.stopPropagation();
    window.open(titleLink.dataset.mapUrl, "_blank", "noopener");
    return;
  }

  const attractionToggle = event.target.closest(".attraction-summary");
  if (attractionToggle) {
    const attraction = attractionToggle.closest(".attraction");
    const isOpen = attraction.classList.toggle("is-open");
    attractionToggle.setAttribute("aria-expanded", String(isOpen));
    attraction.querySelector(".attraction-icon").textContent = isOpen ? "-" : "+";
    return;
  }

  const toggle = event.target.closest(".day-toggle");
  if (!toggle) return;
  const card = toggle.closest(".day-card");
  setCardOpen(card, !card.classList.contains("is-open"));
});

daysContainer.addEventListener("keydown", (event) => {
  const attractionToggle = event.target.closest(".attraction-summary");
  if (attractionToggle && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    attractionToggle.click();
  }
});

document.querySelector("#expandAll").addEventListener("click", () => {
  document.querySelectorAll(".day-card").forEach((card) => setCardOpen(card, true));
});

document.querySelector("#collapseAll").addEventListener("click", () => {
  document.querySelectorAll(".day-card").forEach((card) => setCardOpen(card, false));
});
