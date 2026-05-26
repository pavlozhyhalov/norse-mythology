// ═══════════════════════════════════════════════════════════
// SCANDIA MYTHOS v4 — main.js
// ═══════════════════════════════════════════════════════════

let currentPage = 'home';
let currentAett = 'all';
let eventsTab   = 'events';
let searchIndex = null;

const detailOverlay = document.getElementById('detail-overlay');
const detailPanel   = document.getElementById('detail-panel');
const searchInput   = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const backBar       = document.getElementById('back-bar');
const searchBar     = document.getElementById('search-bar');

// ── ROUTER ──────────────────────────────────────────────
function navigate(page, pushState = true) {
  currentPage = page;
  document.querySelectorAll('.page-view').forEach(v => v.classList.remove('active'));
  const view = document.getElementById('page-' + page);
  if (view) view.classList.add('active');

  // Back bar visibility (only when not on home)
  if (backBar) {
    backBar.classList.toggle('visible', page !== 'home');
  }
  if (searchBar) {
    searchBar.classList.toggle('shifted', page !== 'home');
  }

  if (pushState) history.pushState({ page }, '', '#' + page);
  window.scrollTo(0, 0);
  closeDetail();
  renderPage(page);
  triggerScrollReveal();
}

window.addEventListener('popstate', e => {
  navigate((e.state && e.state.page) || 'home', false);
});

function renderPage(page) {
  switch (page) {
    case 'home':      renderHome();      break;
    case 'worlds':    renderWorldsPage(); break;
    case 'gods':      renderGods();      break;
    case 'creatures': renderCreatures(); break;
    case 'runes':     renderRunes();     break;
    case 'artifacts': renderArtifacts(); break;
    case 'events':    renderEvents();    break;
    case 'genealogy': if (typeof renderGenealogy === 'function') renderGenealogy(); break;
    case 'sources':   renderSources();   break;
  }
}

// ── SCROLL REVEAL ───────────────────────────────────────
function triggerScrollReveal() {
  requestAnimationFrame(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 50);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.home-card:not(.visible), .entity-card:not(.visible), .rune-card:not(.visible), .event-card:not(.visible), .source-entry:not(.visible)').forEach(el => obs.observe(el));
  });
}

// ── HOME ────────────────────────────────────────────────
function renderHome() {
  const grid = document.getElementById('home-sections');
  if (!grid || grid.dataset.rendered) return;

  const sections = [
    { id:'worlds',    art:'yggdrasil',    title:'Дев\'ять Світів',  desc:'Іґґдрасіль і всесвіт' },
    { id:'gods',      art:'aegishjalmur', title:'Пантеон',           desc:'Аси, вани і богині' },
    { id:'creatures', art:'serpent',      title:'Створіння',         desc:'Монстри і містичні істоти' },
    { id:'runes',     art:'runestone',    title:'24 Руни',           desc:'Старший Футарк' },
    { id:'artifacts', art:'artifact',     title:'Артефакти',         desc:'Священні предмети богів' },
    { id:'events',    art:'scroll',       title:'Хронологія',        desc:'Ключові міти і Раґнарьок' },
    { id:'genealogy', art:'tree',         title:'Родовід',           desc:'Дерево богів' },
    { id:'sources',   art:'book',         title:'Першоджерела',      desc:'Едди і давні тексти' },
  ];

  grid.innerHTML = sections.map((s, i) => `
    <button class="home-card" onclick="navigate('${s.id}')">
      <div class="hc-num">0${i+1}</div>
      <div class="hc-art">${ART[s.art] || ''}</div>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </button>`).join('');

  grid.dataset.rendered = '1';

  // Insert hero art
  const heroArt = document.getElementById('hero-art');
  if (heroArt) heroArt.innerHTML = ART.heroMjolnir;

  // Footer art
  const footerArt = document.getElementById('footer-art');
  if (footerArt) footerArt.innerHTML = ART.aegishjalmur;
}

// ── GODS ────────────────────────────────────────────────
function renderGods() {
  const sections = [
    { gridId:'aesir-grid',   countId:'aesir-count',   data: AESIR_DATA,      type:'aesir' },
    { gridId:'goddess-grid', countId:'goddess-count', data: AESIR_GODDESSES, type:'aesir' },
    { gridId:'vanir-grid',   countId:'vanir-count',   data: VANIR_DATA,      type:'vanir' },
  ];

  sections.forEach(({ gridId, countId, data, type }) => {
    const grid = document.getElementById(gridId);
    const count = document.getElementById(countId);
    if (count) count.textContent = data.length;
    if (!grid || grid.dataset.rendered) return;
    grid.innerHTML = data.map((g, i) => renderEntityCard(g, type, i + 1, getGodArt(g.id))).join('');
    grid.dataset.rendered = '1';
  });

  // Valkyries
  const vt = document.getElementById('valkyries-tags');
  if (vt && !vt.dataset.rendered && typeof VALKYRIES_DATA !== 'undefined') {
    vt.innerHTML = VALKYRIES_DATA.names.map(v =>
      `<span style="font-family:var(--f-display);font-size:0.7rem;letter-spacing:0.12em;
       border:1px solid var(--border-md);padding:0.2rem 0.55rem;color:var(--text-dim);
       cursor:default" title="${v.note||''}">${v.name}</span>`
    ).join(' ');
    vt.dataset.rendered = '1';
  }

  // Norns
  const ni = document.getElementById('norns-grid');
  if (ni && !ni.dataset.rendered && typeof NORNS_DATA !== 'undefined') {
    ni.innerHTML = NORNS_DATA.norns.map(n => `
      <div style="background:var(--bg-card);border:1px solid var(--border);padding:0.9rem">
        <div style="font-family:var(--f-display);font-size:0.72rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--silver);margin-bottom:0.3rem">${n.name}</div>
        <div style="font-style:italic;color:var(--text-dim);font-size:0.95rem;line-height:1.5">${n.meaning}</div>
        <div style="font-size:0.85rem;color:var(--text-muted);margin-top:0.4rem">${n.role||''}</div>
      </div>`).join('');
    ni.dataset.rendered = '1';
  }
}

function getGodArt(id) {
  return ART.cards[id] || ART.cards.godGeneric;
}

function renderEntityCard(g, type, idx, artSvg) {
  const typeBadge = type === 'vanir' ? 'Ван' : (g.type && g.type.startsWith('Богиня') ? 'Богиня' : 'Ас');
  const domain = (g.domain || []).slice(0,3).join(' · ') || '—';

  return `
    <button class="entity-card" onclick="openGodDetail('${g.id}','${type}')">
      <div class="ec-art">${artSvg || ART.cards.godGeneric}</div>
      <div class="ec-type-badge">${typeBadge}</div>
      <div class="ec-body">
        <div class="ec-num">№ ${String(idx).padStart(2,'0')}</div>
        <div class="ec-name">${g.name}</div>
        <div class="ec-oldnorse">${g.oldnorse || ''}</div>
        <div class="ec-domain">${domain}</div>
      </div>
    </button>`;
}

function openGodDetail(id, type) {
  const list = type === 'vanir' ? VANIR_DATA : [...AESIR_DATA, ...AESIR_GODDESSES];
  const g = list.find(x => x.id === id);
  if (!g) return;

  const typeBadge = type === 'vanir' ? 'Ван' : (g.type && g.type.startsWith('Богиня') ? 'Богиня' : 'Ас');
  const artSvg = getGodArt(g.id);

  let html = `
    <div class="detail-close-bar"><button class="close-btn" onclick="closeDetail()">Закрити ×</button></div>
    <div class="dp-art">${artSvg}</div>
    <div class="detail-body">
      <div class="dp-eyebrow">Пантеон · ${typeBadge}</div>
      <h1 class="dp-name">${g.name}</h1>
      <span class="dp-oldnorse">${g.oldnorse || ''}${g.aliases && g.aliases.length ? ' · ' + g.aliases.slice(0,2).join(' · ') : ''}</span>

      <div class="dp-section"><h3>Опис</h3><p>${g.description || ''}</p></div>`;

  const infoItems = [
    ['Тип', g.type],
    ['Батьки', g.parents],
    ['Дружина/Чоловік', Array.isArray(g.consorts) ? g.consorts.join(' · ') : g.consorts],
    ['Діти', Array.isArray(g.children) ? g.children.slice(0,4).join(' · ') : g.children],
    ['Домівка', g.home],
    ['День тижня', g.weekday],
    ['Рим. відповідник', g.roman_equivalent],
  ].filter(([,v]) => v);

  if (infoItems.length) {
    html += `<div class="dp-section"><h3>Атрибути</h3>
      <div class="dp-info-grid">
        ${infoItems.map(([l,v]) => `<div class="dp-info-item"><div class="dp-info-label">${l}</div><div class="dp-info-value">${v}</div></div>`).join('')}
      </div>
    </div>`;
  }

  if (g.companions && g.companions.length) {
    html += `<div class="dp-section"><h3>Супутники</h3>
      ${g.companions.map(c => `<div class="dp-myth"><div class="dp-myth-title">${c.name}</div><div class="dp-myth-text">${c.description}</div></div>`).join('')}
    </div>`;
  }

  if (g.myths && g.myths.length) {
    html += `<div class="dp-section"><h3>Міти</h3>
      ${g.myths.map(m => `<div class="dp-myth"><div class="dp-myth-title">${m.title}</div><div class="dp-myth-text">${m.text}</div></div>`).join('')}
    </div>`;
  }

  const artList = (Array.isArray(g.artifacts) ? g.artifacts : []).filter(a => a);
  if (artList.length) {
    const isObj = typeof artList[0] === 'object';
    html += `<div class="dp-section"><h3>Артефакти</h3><ul class="dp-list">
      ${artList.map(a => isObj ? `<li><strong>${a.name}.</strong> ${a.description}</li>` : `<li>${a}</li>`).join('')}
    </ul></div>`;
  }

  if (g.ragnarok_fate) {
    html += `<div class="dp-ragnarok"><div class="dp-ragnarok-label">Доля в Раґнарьок</div><div class="dp-ragnarok-text">${g.ragnarok_fate}</div></div>`;
  }

  html += `<div class="dp-sources"><span class="dp-sources-label">Джерела</span>${g.source || ''}</div>
    </div>`;

  detailPanel.innerHTML = html;
  detailOverlay.classList.add('open');
}

// ── CREATURES ───────────────────────────────────────────
function renderCreatures() {
  const grid = document.getElementById('creatures-grid');
  if (!grid || grid.dataset.rendered) return;

  grid.innerHTML = CREATURES_DATA.map((c, i) => {
    const art = ART.cards[c.id] || ART.cards.creatureGeneric;
    return `
      <button class="entity-card" onclick="openCreatureDetail('${c.id}')">
        <div class="ec-art">${art}</div>
        <div class="ec-type-badge">${(c.category || '').split('/')[0].trim().substring(0,12)}</div>
        <div class="ec-body">
          <div class="ec-num">№ ${String(i+1).padStart(2,'0')}</div>
          <div class="ec-name">${c.name}</div>
          <div class="ec-oldnorse">${c.oldnorse || ''}</div>
          <div class="ec-domain">${(c.category || '—').toUpperCase()}</div>
        </div>
      </button>`;
  }).join('');
  grid.dataset.rendered = '1';
}

function openCreatureDetail(id) {
  const c = CREATURES_DATA.find(x => x.id === id);
  if (!c) return;

  const art = ART.cards[c.id] || ART.cards.creatureGeneric;

  let html = `
    <div class="detail-close-bar"><button class="close-btn" onclick="closeDetail()">Закрити ×</button></div>
    <div class="dp-art">${art}</div>
    <div class="detail-body">
      <div class="dp-eyebrow">Створіння · ${c.category || ''}</div>
      <h1 class="dp-name">${c.name}</h1>
      <span class="dp-oldnorse">${c.oldnorse || ''}${c.aliases ? ' · ' + (Array.isArray(c.aliases) ? c.aliases.join(' · ') : c.aliases) : ''}</span>
      <div class="dp-section"><h3>Опис</h3><p>${c.description || ''}</p></div>`;

  const info = [['Батьки', c.parents], ['Брати/Сестри', Array.isArray(c.siblings) ? c.siblings.join(' · ') : c.siblings], ['Власник', c.owner]].filter(([,v]) => v);
  if (info.length) {
    html += `<div class="dp-section"><h3>Атрибути</h3>
      <div class="dp-info-grid">${info.map(([l,v]) => `<div class="dp-info-item"><div class="dp-info-label">${l}</div><div class="dp-info-value">${v}</div></div>`).join('')}</div>
    </div>`;
  }

  if (c.details && c.details.length) {
    html += `<div class="dp-section"><h3>Деталі</h3><ul class="dp-list">${c.details.map(d => `<li>${d}</li>`).join('')}</ul></div>`;
  }

  if (c.myths && c.myths.length) {
    html += `<div class="dp-section"><h3>Міти</h3>${c.myths.map(m => `<div class="dp-myth"><div class="dp-myth-title">${m.title}</div><div class="dp-myth-text">${m.text}</div></div>`).join('')}</div>`;
  }

  if (c.ragnarok_role) {
    html += `<div class="dp-ragnarok"><div class="dp-ragnarok-label">Роль у Раґнарьок</div><div class="dp-ragnarok-text">${c.ragnarok_role}</div></div>`;
  }

  html += `<div class="dp-sources"><span class="dp-sources-label">Джерела</span>${c.source || ''}</div></div>`;

  detailPanel.innerHTML = html;
  detailOverlay.classList.add('open');
}

// ── ARTIFACTS ───────────────────────────────────────────
function renderArtifacts() {
  const grid = document.getElementById('artifacts-grid');
  if (!grid || grid.dataset.rendered) return;

  grid.innerHTML = ARTIFACTS_DATA.map((a, i) => {
    const art = ART.cards[a.id] || ART.cards.artifactGeneric;
    return `
      <button class="entity-card" onclick="openArtifactDetail('${a.id}')">
        <div class="ec-art">${art}</div>
        <div class="ec-type-badge">${(a.type || '').substring(0,14)}</div>
        <div class="ec-body">
          <div class="ec-num">№ ${String(i+1).padStart(2,'0')}</div>
          <div class="ec-name">${a.name}</div>
          <div class="ec-oldnorse">${a.oldnorse || ''}${a.translation ? ' · «' + a.translation + '»' : ''}</div>
          <div class="ec-domain">${(a.owner || a.type || '—').toUpperCase()}</div>
        </div>
      </button>`;
  }).join('');
  grid.dataset.rendered = '1';
}

function openArtifactDetail(id) {
  const a = ARTIFACTS_DATA.find(x => x.id === id);
  if (!a) return;

  const art = ART.cards[a.id] || ART.cards.artifactGeneric;

  let html = `
    <div class="detail-close-bar"><button class="close-btn" onclick="closeDetail()">Закрити ×</button></div>
    <div class="dp-art">${art}</div>
    <div class="detail-body">
      <div class="dp-eyebrow">Артефакт · ${a.type}</div>
      <h1 class="dp-name">${a.name}</h1>
      <span class="dp-oldnorse">${a.oldnorse}${a.translation ? ' · «' + a.translation + '»' : ''}</span>
      <div class="dp-section"><h3>Опис</h3><p>${a.description}</p></div>`;

  const info = [['Власник', a.owner], ['Тип', a.type], ['Виготовили', a.makers]].filter(([,v]) => v);
  if (info.length) {
    html += `<div class="dp-section"><h3>Атрибути</h3>
      <div class="dp-info-grid">${info.map(([l,v]) => `<div class="dp-info-item"><div class="dp-info-label">${l}</div><div class="dp-info-value">${v}</div></div>`).join('')}</div>
    </div>`;
  }

  if (a.properties && a.properties.length) {
    html += `<div class="dp-section"><h3>Властивості</h3><ul class="dp-list">${a.properties.map(p => `<li>${p}</li>`).join('')}</ul></div>`;
  }

  if (a.composition) {
    html += `<div class="dp-section"><h3>Склад</h3><ul class="dp-list">${a.composition.map(c => `<li>${c}</li>`).join('')}</ul></div>`;
  }

  if (a.myths && a.myths.length) {
    html += `<div class="dp-section"><h3>Міти</h3>${a.myths.map(m => `<div class="dp-myth"><div class="dp-myth-title">${m.title}</div><div class="dp-myth-text">${m.text}</div></div>`).join('')}</div>`;
  }

  if (a.flaw) {
    html += `<div class="dp-section"><h3>Вада</h3><p style="font-style:italic">${a.flaw}</p></div>`;
  }

  if (a.cultural_significance) {
    html += `<div class="dp-section"><h3>Культурне значення</h3><p>${a.cultural_significance}</p></div>`;
  }

  html += `<div class="dp-sources"><span class="dp-sources-label">Джерела</span>${a.source || ''}</div></div>`;

  detailPanel.innerHTML = html;
  detailOverlay.classList.add('open');
}

// ── RUNES ───────────────────────────────────────────────
function renderRunes() {
  const grid = document.getElementById('runes-grid');
  if (!grid) return;
  if (grid.dataset.rendered && currentAett === grid.dataset.aett) return;

  const filtered = currentAett === 'all' ? RUNES_DATA : RUNES_DATA.filter(r => r.aett === currentAett);

  grid.innerHTML = filtered.map(r => `
    <button class="rune-card" onclick="openRuneDetail('${r.id}')">
      <span class="rune-pos">${String(r.position).padStart(2,'0')}</span>
      <span class="rune-tl">${r.transliteration}</span>
      <span class="rune-symbol">${r.symbol}</span>
      <div class="rune-name">${r.name}</div>
      <div class="rune-oldnorse">${r.oldnorse}</div>
      <div class="rune-meaning">${r.meaning}</div>
    </button>`).join('');

  grid.dataset.rendered = '1';
  grid.dataset.aett = currentAett;
}

function filterRunes(aett) {
  currentAett = aett;
  document.querySelectorAll('.aett-btn').forEach(b => b.classList.toggle('active', b.dataset.aett === aett));
  const grid = document.getElementById('runes-grid');
  if (grid) grid.dataset.rendered = '';
  renderRunes();
  triggerScrollReveal();
}

function openRuneDetail(id) {
  const r = RUNES_DATA.find(x => x.id === id);
  if (!r) return;

  let html = `
    <div class="detail-close-bar"><button class="close-btn" onclick="closeDetail()">Закрити ×</button></div>
    <div class="dp-art" style="background:var(--bg-page2)">
      <span style="font-family:var(--f-display);font-size:8rem;color:var(--ink);line-height:1">${r.symbol}</span>
    </div>
    <div class="detail-body">
      <div class="dp-eyebrow">Старший Футарк · ${String(r.position).padStart(2,'0')}/24 · Етт ${r.aett}</div>
      <h1 class="dp-name" style="text-align:center">${r.name}</h1>
      <span class="dp-oldnorse" style="text-align:center;display:block">${r.oldnorse} · ${r.proto_germanic}</span>

      <div class="dp-section"><div class="dp-info-grid">
        <div class="dp-info-item"><div class="dp-info-label">Транслітерація</div><div class="dp-info-value" style="font-size:1.8rem;font-family:var(--f-display);color:var(--ink)">${r.transliteration}</div></div>
        <div class="dp-info-item"><div class="dp-info-label">Значення</div><div class="dp-info-value">${r.meaning}</div></div>
      </div></div>

      <div class="dp-section"><h3>Опис</h3><p>${r.description}</p></div>`;

  if (r.norwegian_poem) html += `<div class="dp-section"><h3>Норвезька поема</h3><div class="dp-myth"><div class="dp-myth-text">${r.norwegian_poem}</div></div></div>`;
  if (r.icelandic_poem) html += `<div class="dp-section"><h3>Ісландська поема</h3><div class="dp-myth"><div class="dp-myth-text">${r.icelandic_poem}</div></div></div>`;
  if (r.anglo_saxon_poem) html += `<div class="dp-section"><h3>Англосакська поема</h3><div class="dp-myth"><div class="dp-myth-text">${r.anglo_saxon_poem}</div></div></div>`;
  if (r.god_connection) html += `<div class="dp-section"><div class="dp-info-item"><div class="dp-info-label">Пов'язаний бог</div><div class="dp-info-value">${r.god_connection}</div></div></div>`;

  html += `</div>`;

  detailPanel.innerHTML = html;
  detailOverlay.classList.add('open');
}

// ── EVENTS (with Ragnarok tab) ──────────────────────────
function renderEvents() {
  renderEventsTimeline();
  renderRagnarokContent();
}

function switchEventsTab(tab) {
  eventsTab = tab;
  document.querySelectorAll('.events-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.events-panel').forEach(p => p.classList.toggle('active', p.id === 'panel-' + tab));
  triggerScrollReveal();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderEventsTimeline() {
  const tl = document.getElementById('events-timeline-list');
  if (!tl || tl.dataset.rendered) return;
  tl.innerHTML = EVENTS_DATA.map((e, i) => `
    <button class="event-card" onclick="openEventDetail('${e.id}')">
      <div class="ev-era">${String(i+1).padStart(2,'0')} · ${e.era}</div>
      <div class="ev-title">${e.title}</div>
      <div class="ev-desc">${e.description}</div>
      <div class="ev-source">${e.sources[0]}</div>
    </button>`).join('');
  tl.dataset.rendered = '1';
}

function openEventDetail(id) {
  const e = EVENTS_DATA.find(x => x.id === id);
  if (!e) return;

  let html = `
    <div class="detail-close-bar"><button class="close-btn" onclick="closeDetail()">Закрити ×</button></div>
    <div class="dp-art">${ART.scroll}</div>
    <div class="detail-body">
      <div class="dp-eyebrow">Подія · ${e.era}</div>
      <h1 class="dp-name">${e.title}</h1>
      <span class="dp-oldnorse">${e.oldnorse}</span>
      <div class="dp-section"><h3>Опис</h3><p>${e.description}</p></div>
      <div class="dp-section"><h3>Послідовність</h3>
        <div class="step-list">${e.sequence.map(s => `
          <div class="step-item" style="background:var(--bg-page2);border-left-color:var(--silver-dim)">
            <div class="step-title" style="color:var(--ink)">${s.title}</div>
            <div class="step-text" style="color:var(--ink-mid)">${s.text}</div>
          </div>`).join('')}
        </div>
      </div>
      <div class="dp-sources"><span class="dp-sources-label">Джерела</span>${e.sources.join(' · ')}</div>
    </div>`;

  detailPanel.innerHTML = html;
  detailOverlay.classList.add('open');
}

function renderRagnarokContent() {
  const container = document.getElementById('ragnarok-content');
  if (!container || container.dataset.rendered) return;
  const R = RAGNAROK_DATA;

  let html = `
    <div class="ragnarok-block">
      <div class="ragnarok-art">${ART.flame}</div>
      <h2>Доля Богів</h2>
      <p style="font-style:italic;color:var(--text-dim);max-width:540px;margin:0.7rem auto;font-size:1rem;line-height:1.7">
        «Сонце чорніє, тоне земля в океані, з небес падають зірки сяючі...»
      </p>
      <p style="font-family:var(--f-mono);font-size:0.7rem;color:var(--text-muted);letter-spacing:0.08em">
        VÖLUSPÁ · СТАРША ЕДДА
      </p>
    </div>

    <div style="margin-bottom:1.5rem">
      <div class="section-heading"><h2>Знаки Раґнарьоку</h2></div>
      <div class="events-timeline" style="padding-left:0">
      ${R.signs.map(s => `
        <div class="event-card visible" style="margin-bottom:0.8rem;padding-left:1.1rem">
          <div class="ev-era">${s.title}</div>
          <div class="ev-desc">${s.description}</div>
        </div>`).join('').replace(/class="event-card visible"/g, 'class="event-card visible" style="margin-bottom:0.8rem"')}
      </div>
    </div>

    <div style="margin-bottom:1.5rem">
      <div class="section-heading"><h2>Послідовність</h2></div>
      <div class="step-list">${R.sequence.map(s => `
        <div class="step-item">
          <div class="step-title">${s.title}</div>
          <div class="step-text">${s.description}</div>
        </div>`).join('')}
      </div>
    </div>

    <div style="margin-bottom:1.5rem">
      <div class="section-heading"><h2>П'ять Поєдинків</h2><span class="sh-count">V</span></div>
      <div class="duel-grid">${R.duels.map(d => `
        <div class="duel-card">
          <div class="duel-hero">${d.hero}</div>
          <span class="duel-vs">vs</span>
          <div class="duel-enemy">${d.enemy}</div>
          <div class="duel-outcome">${d.outcome}</div>
          ${d.avenger ? `<div class="duel-avenger">→ ${d.avenger}</div>` : ''}
        </div>`).join('')}
      </div>
    </div>

    <div style="margin-bottom:1.5rem">
      <div class="section-heading"><h2>Новий Світ</h2></div>
      <p style="color:var(--text-dim);line-height:1.75;margin-bottom:1rem">${R.aftermath.description}</p>
      <div class="survivors-grid">
        <div class="survivors-col">
          <h4>Боги</h4>
          ${R.aftermath.survivors_gods.map(s => `<div class="survivor-item"><strong>${s.name}</strong>${s.note}</div>`).join('')}
        </div>
        <div class="survivors-col">
          <h4>Люди</h4>
          ${R.aftermath.survivors_humans.map(s => `<div class="survivor-item"><strong>${s.name}</strong><em>${s.meaning}</em></div>`).join('')}
        </div>
      </div>
      <p style="margin-top:1.5rem;font-style:italic;color:var(--text-dim);line-height:1.75">${R.aftermath.new_world}</p>
    </div>

    <div style="background:var(--bg-card);border:1px solid var(--border);padding:1rem;margin-top:2rem">
      <div style="font-family:var(--f-display);font-size:0.62rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--silver-dim);margin-bottom:0.4rem">Джерела</div>
      <div style="font-family:var(--f-mono);font-size:0.78rem;color:var(--text-muted);line-height:1.6">${R.sources.join(' · ')}</div>
    </div>`;

  container.innerHTML = html;
  container.dataset.rendered = '1';
}

// ── SOURCES ─────────────────────────────────────────────
function renderSources() {
  const list = document.getElementById('sources-list');
  if (!list || list.dataset.rendered) return;

  const sources = [
    {
      title: 'Старша Едда (Poetic Edda)',
      date: 'Записана бл. 1270 р. · Codex Regius (AM 748 I 4to)',
      desc: 'Збірка давньоісландських поем — головне джерело нордичної міфології. Включає пророцтва, мудрість Одіна, героїчні пісні. Оригінальна мова — давньоісландська.',
      poems: ['Völuspá — Пророцтво Провидиці', 'Hávamál — Слова Високого', 'Grímnismál — Слова Ґрімніра', 'Vafþrúðnismál — Змагання мудрості', 'Skírnismál — Поїздка Скірніра', 'Lokasenna — Перебранка Локі', 'Þrymskviða — Пісня про Трюма'],
      url: 'https://www.gutenberg.org/ebooks/1220',
      urlLabel: 'Project Gutenberg',
    },
    {
      title: 'Молодша Едда (Prose Edda)',
      date: 'Сноррі Стурлусон · бл. 1220 р.',
      desc: 'Написана як посібник для скальдів. Містить детальний виклад нордичної космології, генеалогії богів і технік поетичного мистецтва.',
      poems: ['Gylfaginning — Омана Ґюльфі (космологія)', 'Skáldskaparmál — Мова поезії', 'Háttatal — Перелік розмірів'],
      url: 'https://www.gutenberg.org/ebooks/18947',
      urlLabel: 'Project Gutenberg',
    },
    {
      title: 'Ynglinga saga',
      date: 'Сноррі Стурлусон · бл. 1230 р. · Частина Heimskringla',
      desc: 'Євгемеристична версія нордичної mythології — трактує богів як обожнених давніх правителів Скандинавії.',
      poems: ['Частина циклу Heimskringla — «Коло Земне»'],
      url: 'https://www.gutenberg.org/ebooks/598',
      urlLabel: 'Project Gutenberg',
    },
    {
      title: 'Рунічні поеми',
      date: 'Норвезька (бл. 1100), Ісландська (бл. 1400), Англосакська (бл. 750–1000)',
      desc: 'Три незалежні поеми що описують значення рун. Основа для інтерпретації Старшого Футарку.',
      poems: ['Норвезька рунічна поема (Runaljod)', 'Ісландська рунічна поема', 'Англосакська рунічна поема (Rune Poem)'],
      url: 'https://www.sacred-texts.com/neu/norse/runes.htm',
      urlLabel: 'Sacred Texts',
    },
    {
      title: 'Українське видання',
      date: 'Старша Едда · переклад В. Кривоноса',
      desc: 'Сучасний український переклад Старшої Едди з коментарями. Видавництво «Астролябія», Львів.',
      poems: ['Усі ключові пісні Codex Regius', 'Розгорнутий науковий апарат', 'Українська транслітерація імен'],
      url: 'http://www.voluspa.org',
      urlLabel: 'Voluspa.org · оригінальні тексти',
    },
  ];

  list.innerHTML = sources.map(s => `
    <div class="source-entry">
      <div class="se-title">${s.title}</div>
      <div class="se-date">${s.date}</div>
      <p class="se-desc">${s.desc}</p>
      <ul class="se-poems">${s.poems.map(p => `<li>${p}</li>`).join('')}</ul>
      <a class="se-link" href="${s.url}" target="_blank">${s.urlLabel} →</a>
    </div>`).join('');
  list.dataset.rendered = '1';
}

// ── WORLDS PAGE ─────────────────────────────────────────
function renderWorldsPage() {
  // Render Yggdrasil intro roots
  const rootsEl = document.getElementById('ygd-roots');
  if (rootsEl && !rootsEl.dataset.rendered) {
    rootsEl.innerHTML = YGGDRASIL_DATA.roots.map(r => `
      <div style="padding:0.6rem 0;border-bottom:1px solid var(--border)">
        <div style="font-family:var(--f-display);font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--silver);margin-bottom:0.25rem">${r.world}</div>
        <div style="font-size:0.92rem;color:var(--text-dim);line-height:1.55">${r.description}</div>
      </div>`).join('');
    rootsEl.dataset.rendered = '1';
  }

  // Render world map
  if (typeof renderWorldMap === 'function') renderWorldMap();
}

function openWorldDetail(id) {
  const w = WORLDS_DATA.find(x => x.id === id);
  if (!w) return;

  let html = `
    <div class="detail-close-bar"><button class="close-btn" onclick="closeDetail()">Закрити ×</button></div>
    <div class="dp-art">${ART.yggdrasil}</div>
    <div class="detail-body">
      <div class="dp-eyebrow">Дев'ять Світів</div>
      <h1 class="dp-name">${w.name}</h1>
      <span class="dp-oldnorse">${w.oldnorse} · «${w.translation}»</span>
      <div class="dp-section"><h3>Опис</h3><p>${w.description}</p></div>
      <div class="dp-section"><h3>Атрибути</h3>
        <div class="dp-info-grid">
          <div class="dp-info-item"><div class="dp-info-label">Мешканці</div><div class="dp-info-value">${w.inhabitants}</div></div>
          <div class="dp-info-item"><div class="dp-info-label">Розташування</div><div class="dp-info-value">${w.location}</div></div>
        </div>
      </div>`;

  if (w.details && w.details.length) {
    html += `<div class="dp-section"><h3>Деталі</h3><ul class="dp-list">${w.details.map(d => `<li>${d}</li>`).join('')}</ul></div>`;
  }

  if (w.halls && w.halls.length) {
    html += `<div class="dp-section"><h3>Чертоги</h3>${w.halls.map(h => `<div class="dp-myth"><div class="dp-myth-title">${h.name} · ${h.owner}</div><div class="dp-myth-text">${h.description}</div></div>`).join('')}</div>`;
  }

  if (w.ragnarok_fate) {
    html += `<div class="dp-ragnarok"><div class="dp-ragnarok-label">Доля в Раґнарьок</div><div class="dp-ragnarok-text">${w.ragnarok_fate}</div></div>`;
  }

  html += `<div class="dp-sources"><span class="dp-sources-label">Джерела</span>${w.source || ''}</div></div>`;

  detailPanel.innerHTML = html;
  detailOverlay.classList.add('open');
}

// ── SEARCH ──────────────────────────────────────────────
function buildSearchIndex() {
  const idx = [];
  AESIR_DATA.forEach(g => idx.push({ type:'Ас', name:g.name, desc:g.description, action:()=>{ navigate('gods'); setTimeout(()=>openGodDetail(g.id,'aesir'),80); } }));
  AESIR_GODDESSES.forEach(g => idx.push({ type:'Богиня', name:g.name, desc:g.description, action:()=>{ navigate('gods'); setTimeout(()=>openGodDetail(g.id,'aesir'),80); } }));
  VANIR_DATA.forEach(g => idx.push({ type:'Ван', name:g.name, desc:g.description, action:()=>{ navigate('gods'); setTimeout(()=>openGodDetail(g.id,'vanir'),80); } }));
  CREATURES_DATA.forEach(c => idx.push({ type:'Створіння', name:c.name, desc:c.description, action:()=>{ navigate('creatures'); setTimeout(()=>openCreatureDetail(c.id),80); } }));
  ARTIFACTS_DATA.forEach(a => idx.push({ type:'Артефакт', name:a.name, desc:a.description, action:()=>{ navigate('artifacts'); setTimeout(()=>openArtifactDetail(a.id),80); } }));
  RUNES_DATA.forEach(r => idx.push({ type:'Руна', name:`${r.symbol} ${r.name}`, desc:r.meaning, action:()=>{ navigate('runes'); setTimeout(()=>openRuneDetail(r.id),80); } }));
  WORLDS_DATA.forEach(w => idx.push({ type:'Світ', name:w.name, desc:w.description, action:()=>{ navigate('worlds'); setTimeout(()=>openWorldDetail(w.id),200); } }));
  EVENTS_DATA.forEach(e => idx.push({ type:'Подія', name:e.title, desc:e.description, action:()=>{ navigate('events'); setTimeout(()=>openEventDetail(e.id),80); } }));
  return idx;
}

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q || q.length < 2) { searchResults.classList.remove('visible'); return; }
    if (!searchIndex) searchIndex = buildSearchIndex();
    const hits = searchIndex.filter(x => x.name.toLowerCase().includes(q) || (x.desc||'').toLowerCase().includes(q)).slice(0, 8);
    if (!hits.length) { searchResults.classList.remove('visible'); return; }
    searchResults.innerHTML = hits.map((h,i) => `
      <div class="search-result-item" data-idx="${i}">
        <div class="search-result-type">${h.type}</div>
        <div class="search-result-name">${h.name}</div>
        <div class="search-result-desc">${(h.desc||'').substring(0,90)}…</div>
      </div>`).join('');
    searchResults.querySelectorAll('.search-result-item').forEach((el,i) => {
      el.addEventListener('click', () => { hits[i].action(); searchInput.value=''; searchResults.classList.remove('visible'); });
    });
    searchResults.classList.add('visible');
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('#search-bar')) searchResults.classList.remove('visible');
  });
}

// ── DETAIL ──────────────────────────────────────────────
function closeDetail() {
  detailOverlay.classList.remove('open');
}
detailOverlay.addEventListener('click', e => { if (e.target === detailOverlay) closeDetail(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDetail(); });

// ── INIT ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  const hash = location.hash.replace('#','') || 'home';
  navigate(hash, false);
});
