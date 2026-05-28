// WORLDMAP v2 - SVG illustrated map
var WM_WORLDS = {
  asgard:      { n:'Асґард',        no:'Ásgarðr',       s:'Обитель Асів',          inh:'Боги-аси',             desc:'Небесна фортеця богів-асів на вершині Іґґдрасіля. З\'єднана з Мідґардом веселковим мостом Біфрост.', det:['Вальгалла — зала 540 дверей','Ґлідскьяльф — трон Одіна','Після Раґнарьоку боги оселяться на Ідавьоллі'] },
  alfheim:     { n:'Альфгейм',      no:'Álfheimr',      s:'Домівка Ельфів',        inh:'Світлі ельфи',         desc:'Світ світлих ельфів — прекрасніших за сонце. Подарований Фрейру як зубний подарунок.', det:['Ljósálfar — прекрасніші за сонце','Dökkálfar живуть під землею'] },
  vanaheim:    { n:'Ванагейм',      no:'Vanaheimr',     s:'Домівка Ванів',         inh:'Боги-вани',            desc:'Прадавній світ богів-ванів, пов\'язаних з морем, родючістю і магією.', det:['Вани — найстаріший пантеон','Принесли асам магію сейд'] },
  midgard:     { n:'Мідґард',       no:'Miðgarðr',      s:'Світ Людей',            inh:'Люди',                 desc:'Світ людей у центрі Всесвіту, створений з тіла першовелета Іміра.', det:['Земля = плоть Іміра','Перші люди Аскр і Ембля','Йормунґанд оточує весь світ'] },
  jotunheim:   { n:'Йотунгейм',     no:'Jötunheimr',    s:'Домівка Велетів',       inh:'Йотуни',               desc:'Царство йотунів — первісних сил природи. Столиця Утґард.', det:['Утґард-Локі обдурив Тора','Мімірсбрунн — криниця мудрості'] },
  muspelheim:  { n:'Муспельгейм',   no:'Múspellsheimr', s:'Світ Вогню',            inh:'Сурт і сини Муспелля', desc:'Первозданний світ вогню. Охороняється Суртом з мечем яскравішим за сонце.', det:['Іскри стали зірками','Сурт спалить весь світ у Раґнарьок'] },
  svartalfheim:{ n:'Свартальфгейм', no:'Svartálfaheimr', s:'Домівка Гномів',       inh:'Дверги-ковалі',        desc:'Підземний світ гномів-двергів — найкращих ковалів всіх дев\'яти світів.', det:['Мйольнір, Ґунґнір виковані тут','Брісінґамен Фрейї'] },
  helheim:     { n:'Гельгейм',      no:'Helheimr',      s:'Царство Мертвих',       inh:'Мертві, Гель',         desc:'Царство для тих хто помер не в бою. Правителька Гель — донька Локі.', det:['Гель — наполовину жива','Бальдр потрапив сюди після загибелі'] },
  niflheim:    { n:'Ніфльгейм',     no:'Niflheimr',     s:'Світ Туману',           inh:'Нідгоґр, змії',        desc:'Найстаріший зі світів — первозданний світ льоду і темряви.', det:['Хвергельмір — джерело всіх рік','Нідгоґр гризе корінь Іґґдрасіля'] },
};

function wmOpen(id) {
  var w = WM_WORLDS[id];
  if (!w) return;
  var p = document.getElementById('wm-panel');
  if (!p) return;
  p.style.display = 'block';
  p.innerHTML =
    '<div style="font-family:Cinzel,serif;font-size:.5rem;letter-spacing:.25em;color:#5a4a18;text-transform:uppercase;margin-bottom:5px">' + w.inh + ' · ' + w.no + '</div>' +
    '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:8px">' +
    '<div><div style="font-family:Cinzel,serif;font-size:1.1rem;color:#e0b850;font-weight:600">' + w.n + '</div>' +
    '<div style="font-family:Georgia,serif;font-style:italic;font-size:.82rem;color:#6a5020;margin-top:2px">' + w.s + '</div></div>' +
    '<button onclick="document.getElementById(\'wm-panel\').style.display=\'none\'" style="background:none;border:1px solid rgba(180,140,40,.3);color:#7a5a20;font-family:Cinzel,serif;font-size:.5rem;padding:5px 10px;cursor:pointer">✕</button>' +
    '</div>' +
    '<p style="font-family:Georgia,serif;font-size:.9rem;color:#8a7040;line-height:1.65;margin-bottom:6px">' + w.desc + '</p>' +
    '<ul style="list-style:none;padding:0;border-top:1px solid rgba(200,160,60,.1);padding-top:8px">' +
    w.det.map(function(d){ return '<li style="font-family:Georgia,serif;font-size:.85rem;color:#6a5530;line-height:1.6;padding:2px 0 2px 14px;position:relative"><span style="position:absolute;left:0;color:#3a2a10">ᚱ</span>' + d + '</li>'; }).join('') +
    '</ul>';
  p.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function renderWorldMap() {
  var container = document.getElementById('worldmap-container');
  if (!container) return;

  var s = document.createElement('style');
  s.textContent = '#wm-wrap{background:#08050f;border:1px solid #2a1a3a;width:100%;overflow:hidden}#wm-wrap svg{width:100%;display:block;cursor:default}.wmz{cursor:pointer}#wm-panel{display:none;background:rgba(5,3,10,.97);border-top:1px solid rgba(200,160,60,.2);padding:14px 16px 18px}';
  document.head.appendChild(s);

  var svg = '<svg viewBox="0 0 500 820" xmlns="http://www.w3.org/2000/svg">' +
  '<defs><radialGradient id="g1" cx="50%" cy="30%" r="70%"><stop offset="0%" stop-color="#0e0a1a"/><stop offset="100%" stop-color="#040208"/></radialGradient></defs>' +
  '<rect width="500" height="820" fill="url(#g1)"/>' +
  '<g fill="#fff8e0" opacity=".35"><circle cx="32" cy="22" r=".8"/><circle cx="80" cy="14" r="1"/><circle cx="135" cy="38" r=".7"/><circle cx="315" cy="28" r="1.1"/><circle cx="385" cy="11" r=".8"/><circle cx="445" cy="35" r=".9"/><circle cx="198" cy="16" r=".9"/><circle cx="472" cy="19" r=".7"/></g>' +
  '<ellipse cx="250" cy="180" rx="195" ry="135" fill="#060412" opacity=".95"/>' +
  '<ellipse cx="250" cy="155" rx="138" ry="98" fill="#0a0820"/>' +
  '<ellipse cx="250" cy="128" rx="102" ry="72" fill="#0c0a22"/>' +
  '<ellipse cx="250" cy="108" rx="68" ry="50" fill="#0e0c24"/>' +
  '<ellipse cx="100" cy="205" rx="38" ry="26" fill="#080416"/>' +
  '<ellipse cx="400" cy="205" rx="38" ry="26" fill="#080416"/>' +
  '<ellipse cx="200" cy="262" rx="28" ry="18" fill="#080416"/>' +
  '<ellipse cx="300" cy="262" rx="28" ry="18" fill="#080416"/>' +
  '<text x="250" y="148" font-family="Cinzel,serif" font-size="12" fill="#3a2860" text-anchor="middle" letter-spacing="4" opacity=".7">ІҐҐДРАСІЛЬ</text>' +
  '<path d="M226,282 C223,308 221,338 222,378 C224,418 226,458 228,508 C230,558 232,598 234,638 C236,678 238,708 240,728 L260,728 C262,708 264,678 266,638 C268,598 270,558 272,508 C274,458 276,418 278,378 C280,338 278,308 275,282Z" fill="#160e06" opacity=".9"/>' +
  '<path d="M228,308 C210,303 178,293 146,278 C118,266 96,256 80,256" stroke="#180e06" stroke-width="16" fill="none" stroke-linecap="round"/>' +
  '<path d="M272,308 C290,303 322,293 354,278 C382,266 404,256 420,256" stroke="#180e06" stroke-width="16" fill="none" stroke-linecap="round"/>' +
  '<ellipse cx="250" cy="428" rx="122" ry="20" fill="#141a0e"/>' +
  '<path d="M192,428 L208,400 L226,428Z" fill="#182010"/><path d="M258,428 L276,396 L295,428Z" fill="#1a2412"/>' +
  '<path d="M127,428 C116,413 112,392 122,377 C135,360 163,356 193,360 C228,364 263,370 293,368 C323,366 354,358 368,368 C387,380 388,404 378,420 C366,438 343,446 313,448 C283,450 252,446 222,444 C192,442 162,442 146,436" stroke="#1a3e10" stroke-width="5.5" fill="none" stroke-linecap="round"/>' +
  '<path d="M234,638 C225,658 204,683 183,698 C163,713 138,723 116,726" stroke="#100a04" stroke-width="18" fill="none" stroke-linecap="round"/>' +
  '<path d="M250,638 C250,663 247,688 244,713 C242,733 240,750 240,763" stroke="#100a04" stroke-width="16" fill="none" stroke-linecap="round"/>' +
  '<path d="M266,638 C276,658 296,683 316,698 C336,713 362,723 384,726" stroke="#100a04" stroke-width="18" fill="none" stroke-linecap="round"/>' +
  '<ellipse cx="145" cy="738" rx="62" ry="28" fill="#0c0818" opacity=".95"/>' +
  '<ellipse cx="355" cy="738" rx="62" ry="28" fill="#0c0818" opacity=".95"/>' +
  '<ellipse cx="250" cy="785" rx="85" ry="26" fill="#080610" opacity=".95"/>' +
  wz('asgard',   278,268,134,'АСҐАРД',        '#c89030','#e8c060') +
  wz('alfheim',  52, 250,120,'АЛЬФГЕЙМ',      '#9988cc','#ccbbff') +
  wz('vanaheim', 358,218,110,'ВАНАГЕЙМ',      '#448830','#66cc44') +
  wz('midgard',  168,376,118,'МІДҐАРД',       '#338830','#44cc44') +
  wz('jotunheim',322,358,124,'ЙОТУНГЕЙМ',     '#224488','#4488cc') +
  wz('muspelheim',28,376,120,'МУСПЕЛЬГЕЙМ',   '#882210','#cc4422') +
  wz('svartalfheim',28,716,122,'СВАРТАЛЬФГЕЙМ','#884422','#cc7733') +
  wz('helheim',  180,746,94, 'ГЕЛЬГЕЙМ',      '#552288','#8844cc') +
  wz('niflheim', 298,716,110,'НІФЛЬГЕЙМ',     '#224488','#4466aa') +
  '</svg>';

  container.innerHTML = '<div id="wm-wrap">' + svg + '</div><div id="wm-panel"></div>';
}

function wz(id,x,y,w,label,stroke,fill){
  var cx=x+w/2, fs=label.length>10?7.5:9;
  return '<g class="wmz" onclick="wmOpen(\''+id+'\')">' +
    '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="22" rx="2" fill="#04020a" opacity=".9"/>' +
    '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="22" rx="2" fill="none" stroke="'+stroke+'" stroke-width="1"/>' +
    '<text x="'+cx+'" y="'+(y+14)+'" font-family="Cinzel,serif" font-size="'+fs+'" font-weight="600" fill="'+fill+'" text-anchor="middle" letter-spacing=".8">'+label+'</text>' +
    '</g>';
}

// Also expose as initWorldMap3D for compatibility
var initWorldMap3D = renderWorldMap;
