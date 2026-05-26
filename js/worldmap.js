// ═══════════════════════════════════════════════════════════
// WORLD MAP — Skyrim-like interactive 2.5D Yggdrasil map
// Pure HTML/CSS/JS, no external dependencies. Works on GitHub Pages.
// Drag = rotate, wheel/pinch = zoom, click realm = preview, Details = full lore below.
// ═══════════════════════════════════════════════════════════

const WM_REALMS = {
  asgard:      { label:'Асґард', old:'Ásgarðr', sub:'Обитель Асів',        tier:'Небесний світ', x:0,    y:-315, z:110,  hue:42,  icon:'ᚨ', kind:'citadel' },
  vanaheim:    { label:'Ванагейм', old:'Vanaheimr', sub:'Домівка Ванів',    tier:'Небесний світ', x:-255, y:-245, z:20,   hue:118, icon:'ᚠ', kind:'grove' },
  alfheim:     { label:'Альфгейм', old:'Álfheimr', sub:'Світ світлих ельфів',tier:'Небесний світ', x:255,  y:-245, z:25,   hue:55,  icon:'ᛉ', kind:'stars' },
  midgard:     { label:'Мідґард', old:'Miðgarðr', sub:'Світ людей',         tier:'Середній світ', x:0,    y:-45,  z:0,    hue:92,  icon:'ᛗ', kind:'village' },
  jotunheim:   { label:'Йотунгейм', old:'Jǫtunheimr', sub:'Край велетів',   tier:'Середній світ', x:270,  y:35,   z:-35,  hue:205, icon:'ᚦ', kind:'mountains' },
  svartalfheim:{ label:'Свартальфгейм', old:'Svartálfheimr', sub:'Кузні гномів',tier:'Середній світ', x:-275,y:45,z:-50, hue:28,  icon:'ᛒ', kind:'forge' },
  niflheim:    { label:'Ніфльгейм', old:'Niflheimr', sub:'Лід і туман',     tier:'Нижній світ',   x:-225, y:260,  z:-90,  hue:198, icon:'ᛁ', kind:'ice' },
  helheim:     { label:'Гельгейм', old:'Helheimr', sub:'Царство мертвих',   tier:'Нижній світ',   x:0,    y:305,  z:-105, hue:276, icon:'ᚺ', kind:'gate' },
  muspelheim:  { label:'Муспельгейм', old:'Múspellsheimr', sub:'Вогонь Сурта',tier:'Нижній світ', x:225,  y:260,  z:-80,  hue:12,  icon:'ᛋ', kind:'fire' },
};

let wmState = { rotX: 58, rotZ: -28, zoom: 1, active: null, dragging:false, sx:0, sy:0 };

function renderWorldMap() {
  const container = document.getElementById('worldmap-container');
  if (!container || container.dataset.rendered) return;

  container.innerHTML = `
    <section class="skyrim-map-shell" aria-label="Інтерактивна карта дев'яти світів">
      <div class="wm-hud wm-hud-top">
        <span>WORLD TREE ATLAS</span><b>ᚱ ᚢ ᚾ ᛖ</b><span>DRAG · ZOOM · SELECT</span>
      </div>

      <div class="wm-stage" id="wm-stage">
        <div class="wm-stars"></div>
        <div class="wm-aurora wm-aurora-a"></div>
        <div class="wm-aurora wm-aurora-b"></div>
        <div class="wm-vignette"></div>
        <div class="wm-scene" id="wm-scene">
          <div class="wm-depth-ring wm-ring-top"></div>
          <div class="wm-depth-ring wm-ring-mid"></div>
          <div class="wm-depth-ring wm-ring-low"></div>
          <div class="wm-trunk"></div>
          <div class="wm-crown"></div>
          <div class="wm-roots"></div>
          <div class="wm-bridge wm-bridge-asgard"></div>
          <div class="wm-bridge wm-bridge-hel"></div>
          <div class="wm-orbit wm-orbit-mid"></div>
          <div class="wm-orbit wm-orbit-low"></div>
          ${Object.entries(WM_REALMS).map(([id, r]) => renderRealmNode(id, r)).join('')}
        </div>
      </div>

      <aside class="wm-card" id="wm-card">
        <div class="wm-card-kicker">Оберіть світ</div>
        <h3>Дев'ять світів</h3>
        <p>Крути карту як артефакт у Skyrim. Натисни на будь-який світ — зʼявиться короткий опис і кнопка «Детально».</p>
      </aside>

      <div class="wm-controls">
        <button type="button" onclick="wmResetView()">Скинути вид</button>
        <button type="button" onclick="wmZoom(0.12)">+</button>
        <button type="button" onclick="wmZoom(-0.12)">−</button>
      </div>
    </section>
    <div id="worldmap-details" class="worldmap-details" hidden></div>`;

  bindWorldMapControls();
  wmApplyTransform();
  container.dataset.rendered = '1';
}

function renderRealmNode(id, r) {
  const data = getWorldData(id);
  return `
    <button class="wm-realm wm-${r.kind}" data-world="${id}" style="--x:${r.x}px;--y:${r.y}px;--z:${r.z}px;--hue:${r.hue};" onclick="selectWorld('${id}')">
      <span class="wm-realm-glow"></span>
      <span class="wm-island"><i></i></span>
      <span class="wm-tower">${realmSilhouette(r.kind)}</span>
      <span class="wm-rune">${r.icon}</span>
      <span class="wm-name">${data?.name || r.label}</span>
      <span class="wm-sub">${r.sub}</span>
    </button>`;
}

function realmSilhouette(kind) {
  const shapes = {
    citadel:'▲▴▲', grove:'♣', stars:'✦', village:'⌂', mountains:'▲▲', forge:'⚒', ice:'❄', gate:'⌐⌐', fire:'♨'
  };
  return shapes[kind] || '◆';
}

function getWorldData(id) { return (window.WORLDS_DATA || []).find(x => x.id === id); }

function selectWorld(id) {
  wmState.active = id;
  document.querySelectorAll('.wm-realm').forEach(el => el.classList.toggle('active', el.dataset.world === id));
  renderWorldPreview(id);
}

function renderWorldPreview(id) {
  const r = WM_REALMS[id];
  const w = getWorldData(id);
  const card = document.getElementById('wm-card');
  if (!card || !r || !w) return;
  card.classList.add('visible');
  card.innerHTML = `
    <div class="wm-card-kicker">${r.tier} · ${w.oldnorse || r.old}</div>
    <h3>${w.name || r.label}</h3>
    <p>${trimText(w.description, 245)}</p>
    <div class="wm-meta"><span>${w.translation || r.sub}</span><span>${w.inhabitants || ''}</span></div>
    <button class="wm-detail-btn" type="button" onclick="showWorldDetails('${id}')">Детально</button>`;
}

function showWorldDetails(id) {
  const w = getWorldData(id);
  const panel = document.getElementById('worldmap-details');
  if (!w || !panel) return;
  panel.hidden = false;
  panel.innerHTML = `
    <div class="wmd-head">
      <div>
        <div class="wmd-kicker">${w.oldnorse || ''} · ${w.translation || ''}</div>
        <h2>${w.name}</h2>
      </div>
      <button type="button" onclick="document.getElementById('worldmap-details').hidden=true">Закрити ×</button>
    </div>
    <p class="wmd-lead">${w.description || ''}</p>
    <div class="wmd-grid">
      <div><b>Мешканці</b><span>${w.inhabitants || '—'}</span></div>
      <div><b>Розташування</b><span>${w.location || '—'}</span></div>
    </div>
    ${Array.isArray(w.details) ? `<h3>Деталі світу</h3><ul>${w.details.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}
    ${Array.isArray(w.halls) ? `<h3>Чертоги / місця</h3><div class="wmd-halls">${w.halls.map(h => `<article><b>${h.name}</b><em>${h.owner || ''}</em><p>${h.description || ''}</p></article>`).join('')}</div>` : ''}
    ${w.ragnarok_fate ? `<div class="wmd-ragnarok"><b>Доля в Раґнарьок</b><p>${w.ragnarok_fate}</p></div>` : ''}
    <div class="wmd-source">Джерела: ${w.source || '—'}</div>`;
  panel.scrollIntoView({ behavior:'smooth', block:'start' });
}

function bindWorldMapControls() {
  const stage = document.getElementById('wm-stage');
  if (!stage) return;
  const start = (x,y) => { wmState.dragging = true; wmState.sx = x; wmState.sy = y; stage.classList.add('dragging'); };
  const move = (x,y) => {
    if (!wmState.dragging) return;
    const dx = x - wmState.sx, dy = y - wmState.sy;
    wmState.sx = x; wmState.sy = y;
    wmState.rotZ += dx * 0.22;
    wmState.rotX = Math.max(38, Math.min(74, wmState.rotX - dy * 0.16));
    wmApplyTransform();
  };
  const end = () => { wmState.dragging = false; stage.classList.remove('dragging'); };
  stage.addEventListener('mousedown', e => start(e.clientX, e.clientY));
  window.addEventListener('mousemove', e => move(e.clientX, e.clientY));
  window.addEventListener('mouseup', end);
  stage.addEventListener('touchstart', e => { const t=e.touches[0]; start(t.clientX,t.clientY); }, {passive:true});
  window.addEventListener('touchmove', e => { if(e.touches[0]) move(e.touches[0].clientX,e.touches[0].clientY); }, {passive:true});
  window.addEventListener('touchend', end);
  stage.addEventListener('wheel', e => { e.preventDefault(); wmZoom(e.deltaY < 0 ? 0.08 : -0.08); }, {passive:false});
}

function wmApplyTransform() {
  const scene = document.getElementById('wm-scene');
  if (!scene) return;
  scene.style.transform = `translate(-50%, -50%) scale(${wmState.zoom}) rotateX(${wmState.rotX}deg) rotateZ(${wmState.rotZ}deg)`;
}
function wmZoom(delta) { wmState.zoom = Math.max(0.74, Math.min(1.42, wmState.zoom + delta)); wmApplyTransform(); }
function wmResetView() { wmState.rotX = 58; wmState.rotZ = -28; wmState.zoom = 1; wmApplyTransform(); }
function trimText(str, n) { str = str || ''; return str.length > n ? str.slice(0, n).trim() + '…' : str; }
