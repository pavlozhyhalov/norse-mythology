// ============================================================
// NORSE MYTHOLOGY — main.js
// Navigation, rendering all sections, search, detail panel
// ============================================================

// ─── CURRENT STATE ───────────────────────────────────────────
let currentPage = 'home';
let currentAett  = 'all';
let detailData   = null;

// ─── DOM REFS ─────────────────────────────────────────────────
const mainContent   = document.getElementById('main-content');
const detailOverlay = document.getElementById('detail-overlay');
const detailPanel   = document.getElementById('detail-panel');
const searchInput   = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// ─── ROUTER ──────────────────────────────────────────────────
function navigate(page, pushState = true) {
  currentPage = page;
  document.querySelectorAll('.page-view').forEach(v => v.classList.remove('active'));
  const view = document.getElementById('page-' + page);
  if (view) view.classList.add('active');

  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.page === page);
  });

  if (pushState) history.pushState({ page }, '', '#' + page);
  window.scrollTo(0, 0);
  renderPage(page);
}

window.addEventListener('popstate', e => {
  navigate((e.state && e.state.page) || 'home', false);
});

function renderPage(page) {
  switch (page) {
    case 'worlds':    renderWorlds();    break;
    case 'gods':      renderGods();      break;
    case 'creatures': renderCreatures(); break;
    case 'runes':     renderRunes();     break;
    case 'artifacts': renderArtifacts(); break;
    case 'events':    renderEvents();    break;
    case 'ragnarok':  renderRagnarok();  break;
    case 'genealogy': renderGenealogy(); break;
  }
}

// ─── HELPERS ─────────────────────────────────────────────────
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function badge(text, type) {
  return `<span class="card-badge ${type}">${text}</span>`;
}

function domainTags(arr) {
  if (!arr || !arr.length) return '';
  return `<div class="card-domains">${arr.map(d => `<span class="domain-tag">${d}</span>`).join('')}</div>`;
}

// ─── HOME ─────────────────────────────────────────────────────
function renderHome() {
  const sections = [
    { id:'worlds',    icon:'🌍', title:'Дев`ять Світів',    desc:'Іґґдрасіль і всесвіт' },
    { id:'gods',      icon:'⚡', title:'Боги',               desc:'Аси, вани і богині' },
    { id:'creatures', icon:'🐉', title:'Створіння',          desc:'Монстри і містичні істоти' },
    { id:'runes',     icon:'ᚱ',  title:'24 Руни',            desc:'Старший Футарк' },
    { id:'artifacts', icon:'🔨', title:'Артефакти',           desc:'Священні предмети богів' },
    { id:'events',    icon:'📜', title:'Події',               desc:'Ключові міти і легенди' },
    { id:'ragnarok',  icon:'🔥', title:'Раґнарьок',           desc:'Кінець і початок' },
    { id:'genealogy', icon:'🌳', title:'Генеалогія',          desc:'Дерево богів' },
  ];

  document.getElementById('home-nav-grid').innerHTML = sections.map(s =>
    `<div class="home-nav-card" onclick="navigate('${s.id}')">
      <span class="hn-icon">${s.icon}</span>
      <div class="hn-title">${s.title}</div>
      <div class="hn-desc">${s.desc}</div>
    </div>`
  ).join('');
}

// ─── WORLDS ──────────────────────────────────────────────────
function renderWorlds() {
  const grid = document.getElementById('worlds-grid');
  if (grid.dataset.rendered) return;

  grid.innerHTML = WORLDS_DATA.map(w => `
    <div class="world-card" onclick="openWorldDetail('${w.id}')">
      <div class="world-card-top">
        <span class="world-symbol">${w.symbol}</span>
        <div>
          <div class="world-card-name">${w.name}</div>
          <div class="world-card-oldnorse">${w.oldnorse} — «${w.translation}»</div>
          <div class="world-card-inhabitants">${w.inhabitants}</div>
        </div>
      </div>
      <div class="world-card-body">${w.description.substring(0, 160)}…</div>
      <div class="world-card-footer">
        <span style="font-size:0.75rem;color:var(--text-muted)">${w.source.split('(')[0]}</span>
        <span class="ragnarok-note" title="${w.ragnarok_fate}">🔥 Раґнарьок</span>
      </div>
    </div>
  `).join('');

  // Yggdrasil inhabitants
  const inh = document.getElementById('ygd-inhabitants');
  if (inh) {
    inh.innerHTML = YGGDRASIL_DATA.inhabitants.map(i =>
      `<div class="step-item"><div class="step-title">${i.name}</div><div class="step-text">${i.description}</div></div>`
    ).join('');
  }

  grid.dataset.rendered = '1';
}

function openWorldDetail(id) {
  const w = WORLDS_DATA.find(x => x.id === id);
  if (!w) return;

  let html = `
    <div class="detail-close"><button class="close-btn" onclick="closeDetail()">✕ Закрити</button></div>
    <div style="font-size:3rem;text-align:center;margin-bottom:0.5rem">${w.symbol}</div>
    <div class="detail-name">${w.name}</div>
    <span class="detail-oldnorse">${w.oldnorse} — «${w.translation}»</span>

    <div class="detail-section">
      <h3>Опис</h3>
      <p>${w.description}</p>
    </div>

    <div class="detail-section">
      <div class="info-grid">
        <div class="info-item"><div class="info-label">Мешканці</div><div class="info-value">${w.inhabitants}</div></div>
        <div class="info-item"><div class="info-label">Розташування</div><div class="info-value">${w.location}</div></div>
      </div>
    </div>`;

  if (w.details && w.details.length) {
    html += `<div class="detail-section"><h3>Деталі</h3>
      ${w.details.map(d => `<p style="margin-bottom:0.5rem;font-size:0.9rem;color:var(--text-secondary)">• ${d}</p>`).join('')}
    </div>`;
  }

  if (w.halls && w.halls.length) {
    html += `<div class="detail-section"><h3>Чертоги і зали</h3>
      ${w.halls.map(h => `<div class="myth-block"><div class="myth-title">${h.name} <span style="color:var(--text-muted);font-size:0.8rem">(${h.owner})</span></div><div class="myth-text">${h.description}</div></div>`).join('')}
    </div>`;
  }

  html += `
    <div class="detail-section">
      <div class="info-item" style="background:rgba(196,75,26,0.08);border-color:rgba(196,75,26,0.3)">
        <div class="info-label" style="color:var(--fire)">🔥 Доля в Раґнарьок</div>
        <div class="info-value">${w.ragnarok_fate}</div>
      </div>
    </div>
    <div class="sources-block"><strong>Джерела</strong>${w.source}</div>`;

  detailPanel.innerHTML = html;
  detailOverlay.classList.add('open');
}

// ─── GODS ────────────────────────────────────────────────────
function renderGods() {
  renderValkyriesNorns();
  const aesirGrid   = document.getElementById('aesir-grid');
  const goddessGrid = document.getElementById('goddess-grid');
  const vanirGrid   = document.getElementById('vanir-grid');

  if (aesirGrid && !aesirGrid.dataset.rendered) {
    aesirGrid.innerHTML = AESIR_DATA.map(g => renderGodCard(g, 'aesir')).join('');
    aesirGrid.dataset.rendered = '1';
  }
  if (goddessGrid && !goddessGrid.dataset.rendered) {
    goddessGrid.innerHTML = AESIR_GODDESSES.map(g => renderGodCard(g, 'aesir')).join('');
    goddessGrid.dataset.rendered = '1';
  }
  if (vanirGrid && !vanirGrid.dataset.rendered) {
    vanirGrid.innerHTML = VANIR_DATA.map(g => renderGodCard(g, 'vanir')).join('');
    vanirGrid.dataset.rendered = '1';
  }
}

function renderGodCard(g, type) {
  const domains = (g.domain || []).slice(0, 4);
  return `
    <div class="entity-card" style="--card-accent:${type === 'vanir' ? 'var(--forest)' : 'var(--gold)'}"
         onclick="openGodDetail('${g.id}', '${type}')">
      <div class="card-header">
        <div>
          <div class="card-name">${g.name}</div>
          <div class="card-oldnorse">${g.oldnorse || ''}</div>
        </div>
        ${badge(g.type || type, type)}
      </div>
      <div class="card-desc">${(g.description || '').substring(0, 130)}…</div>
      ${domainTags(domains)}
    </div>`;
}

function openGodDetail(id, type) {
  const list = type === 'vanir' ? VANIR_DATA : [...AESIR_DATA, ...AESIR_GODDESSES];
  const g = list.find(x => x.id === id);
  if (!g) return;

  let html = `
    <div class="detail-close"><button class="close-btn" onclick="closeDetail()">✕ Закрити</button></div>
    <div class="detail-name">${g.name}</div>
    <span class="detail-oldnorse">${g.oldnorse || ''}${g.aliases ? ' · ' + g.aliases.slice(0,2).join(', ') : ''}</span>
    <div class="tags-row" style="margin-bottom:1.2rem">${(g.domain||[]).map(d=>`<span class="tag">${d}</span>`).join('')}</div>

    <div class="detail-section"><h3>Опис</h3><p>${g.description || ''}</p></div>`;

  const infoItems = [
    ['Тип', g.type],
    ['Батьки', g.parents],
    ['Чоловік/Дружина', Array.isArray(g.consorts) ? g.consorts.join(', ') : g.consorts],
    ['Діти', Array.isArray(g.children) ? g.children.join(', ') : g.children],
    ['Домівка', g.home],
    ['День тижня', g.weekday],
    ['Рим. відповідник', g.roman_equivalent],
  ].filter(([,v]) => v);

  if (infoItems.length) {
    html += `<div class="detail-section"><h3>Дані</h3><div class="info-grid">
      ${infoItems.map(([l,v]) => `<div class="info-item"><div class="info-label">${l}</div><div class="info-value" style="font-size:0.85rem">${v}</div></div>`).join('')}
    </div></div>`;
  }

  if (g.companions && g.companions.length) {
    html += `<div class="detail-section"><h3>Супутники</h3>
      ${g.companions.map(c=>`<div class="myth-block"><div class="myth-title">${c.name}</div><div class="myth-text">${c.description}</div></div>`).join('')}
    </div>`;
  }

  if (g.myths && g.myths.length) {
    html += `<div class="detail-section"><h3>Міти</h3>
      ${g.myths.map(m=>`<div class="myth-block"><div class="myth-title">${m.title}</div><div class="myth-text">${m.text}</div></div>`).join('')}
    </div>`;
  }

  const artList = Array.isArray(g.artifacts) && g.artifacts.length
    ? g.artifacts.filter(a => a)
    : [];
  if (artList.length) {
    const isObj = typeof artList[0] === 'object';
    html += `<div class="detail-section"><h3>Артефакти</h3><ul class="artifact-list">
      ${artList.map(a => isObj
        ? `<li><strong>${a.name}</strong>${a.description}</li>`
        : `<li>${a}</li>`
      ).join('')}
    </ul></div>`;
  }

  if (g.ragnarok_fate) {
    html += `<div class="detail-section">
      <div class="info-item" style="background:rgba(196,75,26,0.08);border-color:rgba(196,75,26,0.3)">
        <div class="info-label" style="color:var(--fire)">🔥 Доля в Раґнарьок</div>
        <div class="info-value">${g.ragnarok_fate}</div>
      </div>
    </div>`;
  }

  html += `<div class="sources-block"><strong>Джерела</strong>${g.source || ''}</div>`;

  detailPanel.innerHTML = html;
  detailOverlay.classList.add('open');
}

// ─── CREATURES ───────────────────────────────────────────────
function renderCreatures() {
  const grid = document.getElementById('creatures-grid');
  if (grid.dataset.rendered) return;

  grid.innerHTML = CREATURES_DATA.map(c => `
    <div class="entity-card" style="--card-accent:var(--fire)" onclick="openCreatureDetail('${c.id}')">
      <div class="card-header">
        <div>
          <div class="card-name">${c.name}</div>
          <div class="card-oldnorse">${c.oldnorse || ''}</div>
        </div>
        ${badge(c.category, c.category.includes('Монстр') || c.category.includes('Дракон') ? 'monster' : 'creature')}
      </div>
      <div class="card-desc">${(c.description||'').substring(0,130)}…</div>
      ${c.ragnarok_role ? `<div class="card-footer">🔥 ${c.ragnarok_role.substring(0,80)}…</div>` : ''}
    </div>`
  ).join('');

  grid.dataset.rendered = '1';
}

function openCreatureDetail(id) {
  const c = CREATURES_DATA.find(x => x.id === id);
  if (!c) return;

  let html = `
    <div class="detail-close"><button class="close-btn" onclick="closeDetail()">✕ Закрити</button></div>
    <div class="detail-name">${c.name}</div>
    <span class="detail-oldnorse">${c.oldnorse || ''}${c.aliases ? ' · ' + (Array.isArray(c.aliases) ? c.aliases.join(', ') : c.aliases) : ''}</span>
    <div class="detail-section"><h3>Опис</h3><p>${c.description||''}</p></div>`;

  const infoItems = [
    ['Категорія', c.category],
    ['Батьки', c.parents],
    ['Брати/Сестри', Array.isArray(c.siblings) ? c.siblings.join(', ') : c.siblings],
    ['Власник', c.owner],
  ].filter(([,v]) => v);

  if (infoItems.length) {
    html += `<div class="detail-section"><h3>Дані</h3><div class="info-grid">
      ${infoItems.map(([l,v]) => `<div class="info-item"><div class="info-label">${l}</div><div class="info-value" style="font-size:0.85rem">${v}</div></div>`).join('')}
    </div></div>`;
  }

  if (c.details && c.details.length) {
    html += `<div class="detail-section"><h3>Деталі</h3>
      ${c.details.map(d=>`<p style="margin-bottom:0.5rem;font-size:0.9rem;color:var(--text-secondary)">• ${d}</p>`).join('')}
    </div>`;
  }

  if (c.myths && c.myths.length) {
    html += `<div class="detail-section"><h3>Міти</h3>
      ${c.myths.map(m=>`<div class="myth-block"><div class="myth-title">${m.title}</div><div class="myth-text">${m.text}</div></div>`).join('')}
    </div>`;
  }

  if (c.ragnarok_role) {
    html += `<div class="detail-section">
      <div class="info-item" style="background:rgba(196,75,26,0.08);border-color:rgba(196,75,26,0.3)">
        <div class="info-label" style="color:var(--fire)">🔥 Роль у Раґнарьок</div>
        <div class="info-value">${c.ragnarok_role}</div>
      </div>
    </div>`;
  }

  html += `<div class="sources-block"><strong>Джерела</strong>${c.source||''}</div>`;
  detailPanel.innerHTML = html;
  detailOverlay.classList.add('open');
}

// ─── RUNES ───────────────────────────────────────────────────
function renderRunes() {
  const grid = document.getElementById('runes-grid');
  if (grid.dataset.rendered && currentAett === grid.dataset.aett) return;

  const filtered = currentAett === 'all'
    ? RUNES_DATA
    : RUNES_DATA.filter(r => r.aett === currentAett);

  grid.innerHTML = filtered.map(r => `
    <div class="rune-card" onclick="openRuneDetail('${r.id}')">
      <span class="rune-translit">${r.transliteration}</span>
      <div class="rune-symbol-display">${r.symbol}</div>
      <div class="rune-name-display">${r.name}</div>
      <div class="rune-oldnorse-display">${r.oldnorse}</div>
      <div class="rune-meaning-display">${r.meaning}</div>
      <div class="rune-aett-badge">Етт: ${r.aett}</div>
    </div>`
  ).join('');

  grid.dataset.rendered = '1';
  grid.dataset.aett = currentAett;
}

function filterRunes(aett) {
  currentAett = aett;
  document.querySelectorAll('.aett-btn').forEach(b => b.classList.toggle('active', b.dataset.aett === aett));
  document.getElementById('runes-grid').dataset.rendered = '';
  renderRunes();
}

function openRuneDetail(id) {
  const r = RUNES_DATA.find(x => x.id === id);
  if (!r) return;

  let html = `
    <div class="detail-close"><button class="close-btn" onclick="closeDetail()">✕ Закрити</button></div>
    <div style="text-align:center;margin-bottom:1rem">
      <span style="font-size:6rem;color:var(--gold-light);text-shadow:0 0 30px rgba(201,168,76,0.5)">${r.symbol}</span>
    </div>
    <div class="detail-name">${r.name}</div>
    <span class="detail-oldnorse">${r.oldnorse} · Прото-герм.: ${r.proto_germanic}</span>

    <div class="detail-section">
      <div class="info-grid">
        <div class="info-item"><div class="info-label">Транслітерація</div><div class="info-value" style="font-size:1.5rem;font-family:var(--font-heading);color:var(--gold)">${r.transliteration}</div></div>
        <div class="info-item"><div class="info-label">Позиція в Футарку</div><div class="info-value">${r.position} / 24 · Етт: ${r.aett}</div></div>
      </div>
    </div>

    <div class="detail-section"><h3>Значення</h3><p style="font-size:1.05rem;color:var(--gold-light)">${r.meaning}</p></div>
    <div class="detail-section"><h3>Опис</h3><p>${r.description}</p></div>`;

  if (r.norwegian_poem) {
    html += `<div class="detail-section"><h3>Норвезька рунічна поема</h3>
      <div class="myth-block"><div class="myth-text" style="font-style:italic">${r.norwegian_poem}</div></div>
    </div>`;
  }
  if (r.icelandic_poem) {
    html += `<div class="detail-section"><h3>Ісландська рунічна поема</h3>
      <div class="myth-block"><div class="myth-text" style="font-style:italic">${r.icelandic_poem}</div></div>
    </div>`;
  }
  if (r.anglo_saxon_poem) {
    html += `<div class="detail-section"><h3>Англосакська рунічна поема</h3>
      <div class="myth-block"><div class="myth-text" style="font-style:italic">${r.anglo_saxon_poem}</div></div>
    </div>`;
  }
  if (r.god_connection) {
    html += `<div class="detail-section">
      <div class="info-item"><div class="info-label">Пов'язаний бог</div><div class="info-value">${r.god_connection}</div></div>
    </div>`;
  }

  detailPanel.innerHTML = html;
  detailOverlay.classList.add('open');
}

// ─── ARTIFACTS ───────────────────────────────────────────────
function renderArtifacts() {
  const grid = document.getElementById('artifacts-grid');
  if (grid.dataset.rendered) return;

  const icons = { mjolnir:'🔨', gungnir:'🗡️', draupnir:'💍', gleipnir:'🪢',
                  brisingamen:'📿', skidbladnir:'⛵', gullinbursti:'🐗',
                  bifrost:'🌈', hlidskjalf:'👑', gjallhorn:'📯', mead_of_poetry:'🍯' };

  grid.innerHTML = ARTIFACTS_DATA.map(a => `
    <div class="artifact-detail-card" style="cursor:pointer" onclick="openArtifactDetail('${a.id}')">
      <div class="artifact-header">
        <span class="artifact-icon-display">${icons[a.id]||'✦'}</span>
        <div class="artifact-header-info">
          <h3>${a.name}</h3>
          <div class="owner">Власник: ${a.owner || '—'} · ${a.type}</div>
          ${a.makers ? `<div style="font-size:0.78rem;color:var(--text-muted);margin-top:0.2rem">Виготовили: ${a.makers}</div>` : ''}
        </div>
      </div>
      <div class="artifact-body">
        <p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:0.8rem">${a.description}</p>
        ${a.properties ? `<ul class="artifact-props">${a.properties.map(p=>`<li>${p}</li>`).join('')}</ul>` : ''}
      </div>
    </div>`
  ).join('');

  grid.dataset.rendered = '1';
}

function openArtifactDetail(id) {
  const a = ARTIFACTS_DATA.find(x => x.id === id);
  if (!a) return;

  const icons = { mjolnir:'🔨', gungnir:'🗡️', draupnir:'💍', gleipnir:'🪢',
                  brisingamen:'📿', skidbladnir:'⛵', gullinbursti:'🐗',
                  bifrost:'🌈', hlidskjalf:'👑', gjallhorn:'📯', mead_of_poetry:'🍯' };

  let html = `
    <div class="detail-close"><button class="close-btn" onclick="closeDetail()">✕ Закрити</button></div>
    <div style="text-align:center;font-size:4rem;margin-bottom:0.5rem">${icons[a.id]||'✦'}</div>
    <div class="detail-name">${a.name}</div>
    <span class="detail-oldnorse">${a.oldnorse}${a.translation ? ' — «' + a.translation + '»' : ''}</span>

    <div class="detail-section"><div class="info-grid">
      ${a.owner ? `<div class="info-item"><div class="info-label">Власник</div><div class="info-value">${a.owner}</div></div>` : ''}
      <div class="info-item"><div class="info-label">Тип</div><div class="info-value">${a.type}</div></div>
      ${a.makers ? `<div class="info-item" style="grid-column:1/-1"><div class="info-label">Виготовили</div><div class="info-value">${a.makers}</div></div>` : ''}
    </div></div>

    <div class="detail-section"><h3>Опис</h3><p>${a.description}</p></div>`;

  if (a.properties && a.properties.length) {
    html += `<div class="detail-section"><h3>Властивості</h3>
      <ul class="artifact-props">${a.properties.map(p=>`<li>${p}</li>`).join('')}</ul>
    </div>`;
  }
  if (a.composition) {
    html += `<div class="detail-section"><h3>Склад (${a.name})</h3>
      <ul class="artifact-props">${a.composition.map(c=>`<li>${c}</li>`).join('')}</ul>
    </div>`;
  }
  if (a.vessels) {
    html += `<div class="detail-section"><h3>Три посудини</h3>
      ${a.vessels.map(v=>`<div class="myth-block"><div class="myth-title">${v.name}</div><div class="myth-text">${v.meaning}</div></div>`).join('')}
    </div>`;
  }
  if (a.myths && a.myths.length) {
    html += `<div class="detail-section"><h3>Міти</h3>
      ${a.myths.map(m=>`<div class="myth-block"><div class="myth-title">${m.title}</div><div class="myth-text">${m.text}</div></div>`).join('')}
    </div>`;
  }
  if (a.logic) {
    html += `<div class="detail-section"><h3>Пояснення</h3><p>${a.logic}</p></div>`;
  }
  if (a.flaw) {
    html += `<div class="detail-section">
      <div class="info-item" style="border-color:rgba(196,75,26,0.3)">
        <div class="info-label" style="color:var(--fire)">Вада</div>
        <div class="info-value">${a.flaw}</div>
      </div>
    </div>`;
  }
  if (a.cultural_significance) {
    html += `<div class="detail-section"><h3>Культурне значення</h3><p>${a.cultural_significance}</p></div>`;
  }

  html += `<div class="sources-block"><strong>Джерела</strong>${a.source||''}</div>`;
  detailPanel.innerHTML = html;
  detailOverlay.classList.add('open');
}

// ─── EVENTS ──────────────────────────────────────────────────
function renderEvents() {
  const timeline = document.getElementById('events-timeline');
  if (timeline.dataset.rendered) return;

  timeline.innerHTML = EVENTS_DATA.map(e => `
    <div class="event-card" onclick="openEventDetail('${e.id}')">
      <div class="event-era">${e.era}</div>
      <div class="event-title">${e.title} <span class="oldnorse">${e.oldnorse}</span></div>
      <div class="event-desc">${e.description}</div>
      <div style="margin-top:0.7rem;font-size:0.78rem;color:var(--text-muted)">${e.sources[0]}</div>
    </div>`
  ).join('');

  timeline.dataset.rendered = '1';
}

function openEventDetail(id) {
  const e = EVENTS_DATA.find(x => x.id === id);
  if (!e) return;

  let html = `
    <div class="detail-close"><button class="close-btn" onclick="closeDetail()">✕ Закрити</button></div>
    <div class="detail-name">${e.title}</div>
    <span class="detail-oldnorse">${e.oldnorse}</span>
    <div class="detail-section">
      <div class="info-item"><div class="info-label">Ера</div><div class="info-value">${e.era}</div></div>
    </div>
    <div class="detail-section"><h3>Опис</h3><p>${e.description}</p></div>
    <div class="detail-section"><h3>Послідовність подій</h3>
      <div class="step-list">
        ${e.sequence.map(s=>`<div class="step-item"><div class="step-title">${s.title}</div><div class="step-text">${s.text}</div></div>`).join('')}
      </div>
    </div>
    <div class="sources-block"><strong>Джерела</strong>${e.sources.join(', ')}</div>`;

  detailPanel.innerHTML = html;
  detailOverlay.classList.add('open');
}

// ─── RAGNAROK ─────────────────────────────────────────────────
function renderRagnarok() {
  const container = document.getElementById('ragnarok-content');
  if (container.dataset.rendered) return;

  const R = RAGNAROK_DATA;

  let html = `
    <div class="detail-section mb-2">
      <h2>Знаки Раґнарьоку</h2>
      ${R.signs.map(s=>`<div class="myth-block"><div class="myth-title">${s.title}</div><div class="myth-text">${s.description}</div></div>`).join('')}
    </div>

    <div class="detail-section mb-2">
      <h2>Послідовність</h2>
      <div class="step-list">
        ${R.sequence.map(s=>`<div class="step-item"><div class="step-title">${s.title}</div><div class="step-text">${s.description}</div></div>`).join('')}
      </div>
    </div>

    <div class="detail-section mb-2">
      <h2>П'ять поєдинків</h2>
      <div class="duel-grid">
        ${R.duels.map(d=>`
          <div class="duel-card">
            <div class="duel-hero">⚡ ${d.hero}</div>
            <div class="vs">⚔</div>
            <div class="duel-enemy">💀 ${d.enemy}</div>
            <div class="duel-outcome">${d.outcome}</div>
            ${d.avenger ? `<div style="margin-top:0.5rem;font-size:0.82rem;color:var(--rune-green)">↩ ${d.avenger}</div>` : ''}
          </div>`).join('')}
      </div>
    </div>

    <div class="detail-section mb-2">
      <h2>Новий світ</h2>
      <p>${R.aftermath.description}</p>
      <div style="margin-top:1rem;display:grid;grid-template-columns:1fr 1fr;gap:1rem">
        <div>
          <h4 style="margin-bottom:0.6rem">Боги, що вижили</h4>
          ${R.aftermath.survivors_gods.map(s=>`<div style="padding:0.4rem 0;border-bottom:1px solid var(--border);font-size:0.88rem"><strong style="color:var(--gold-light)">${s.name}</strong> — ${s.note}</div>`).join('')}
        </div>
        <div>
          <h4 style="margin-bottom:0.6rem">Люди, що вижили</h4>
          ${R.aftermath.survivors_humans.map(s=>`<div style="padding:0.4rem 0;border-bottom:1px solid var(--border);font-size:0.88rem"><strong style="color:var(--gold-light)">${s.name}</strong> (${s.meaning}) — ${s.note}</div>`).join('')}
        </div>
      </div>
      <p style="margin-top:1rem;font-size:0.9rem;color:var(--text-secondary)">${R.aftermath.new_world}</p>
    </div>

    <div class="sources-block"><strong>Джерела</strong>${R.sources.join(', ')}</div>`;

  container.innerHTML = html;
  container.dataset.rendered = '1';
}

// ─── GENEALOGY ───────────────────────────────────────────────
function renderGenealogy() {
  const svg = document.getElementById('genealogy-svg');
  if (svg.dataset.rendered) return;

  const nodes = FAMILY_TREE_NODES;
  const edges = FAMILY_TREE_EDGES;

  // offset so min coords are positive
  const minX = Math.min(...nodes.map(n => n.x)) - 60;
  const minY = Math.min(...nodes.map(n => n.y)) - 40;
  const maxX = Math.max(...nodes.map(n => n.x)) + 60;
  const maxY = Math.max(...nodes.map(n => n.y)) + 60;
  const W = maxX - minX;
  const H = maxY - minY;

  svg.setAttribute('viewBox', `${minX} ${minY} ${W} ${H}`);
  svg.setAttribute('height', Math.max(H, 500));

  const typeColors = {
    primordial: '#5aad6e', god: '#c9a84c', aesir_main: '#e8c96a',
    aesir: '#a89050', vanir_main: '#4a7c59', giant: '#5c7a8c',
    giantess: '#7a9aac', trickster: '#c44b1a', monster: '#8a2a10',
    creature: '#7a68b0', deity: '#9a5aad'
  };

  // Draw edges
  let edgeSVG = '';
  edges.forEach(edge => {
    const from = nodes.find(n => n.id === edge.from);
    const to   = nodes.find(n => n.id === edge.to);
    if (!from || !to) return;
    edgeSVG += `<path class="gen-edge ${edge.type}"
      d="M${from.x},${from.y + 18} C${from.x},${(from.y + to.y) / 2} ${to.x},${(from.y + to.y) / 2} ${to.x},${to.y - 18}"
      stroke="${edge.type === 'created' ? '#3a6a88' : '#4a3a20'}"
      stroke-dasharray="${edge.type === 'created' ? '4 3' : 'none'}"/>`;
  });

  // Draw nodes
  let nodeSVG = '';
  nodes.forEach(n => {
    const color = typeColors[n.type] || '#888';
    nodeSVG += `
      <g class="gen-node" onclick="showGenInfo('${n.id}')" transform="translate(${n.x},${n.y})">
        <circle r="18" fill="${color}22" stroke="${color}" stroke-width="1.5"/>
        <text class="gen-text" text-anchor="middle" dy="-24" font-size="10"
          fill="${color}" font-family="Cinzel, serif">${n.label}</text>
      </g>`;
  });

  svg.innerHTML = `<defs>
    <filter id="glow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <g id="edges">${edgeSVG}</g>
  <g id="nodes">${nodeSVG}</g>`;

  svg.dataset.rendered = '1';

  // Legend
  const legend = document.getElementById('gen-legend');
  if (legend) {
    const items = [
      ['#e8c96a','Аси (головні)'], ['#a89050','Аси'], ['#4a7c59','Вани'],
      ['#5c7a8c','Велети'], ['#c44b1a','Трікстер'], ['#8a2a10','Монстри'],
      ['#5aad6e','Першоістоти'], ['#9a5aad','Інші']
    ];
    legend.innerHTML = items.map(([c,l]) =>
      `<div class="gen-legend-item"><div class="gen-legend-dot" style="background:${c}"></div>${l}</div>`
    ).join('');
  }
}

function showGenInfo(id) {
  const allEntities = [...AESIR_DATA, ...AESIR_GODDESSES, ...VANIR_DATA, ...CREATURES_DATA];
  const found = allEntities.find(e => e.id === id);
  if (found) {
    const type = VANIR_DATA.find(e => e.id === id) ? 'vanir' : 'other';
    openGodDetail(id, type);
  }
}

// ─── SEARCH ──────────────────────────────────────────────────
function buildSearchIndex() {
  const index = [];

  AESIR_DATA.forEach(g => index.push({ type:'Ас', name:g.name, desc:g.description, action:()=>{ navigate('gods'); openGodDetail(g.id,'aesir'); } }));
  AESIR_GODDESSES.forEach(g => index.push({ type:'Богиня', name:g.name, desc:g.description, action:()=>{ navigate('gods'); openGodDetail(g.id,'aesir'); } }));
  VANIR_DATA.forEach(g => index.push({ type:'Ван', name:g.name, desc:g.description, action:()=>{ navigate('gods'); openGodDetail(g.id,'vanir'); } }));
  CREATURES_DATA.forEach(c => index.push({ type:'Створіння', name:c.name, desc:c.description, action:()=>{ navigate('creatures'); openCreatureDetail(c.id); } }));
  ARTIFACTS_DATA.forEach(a => index.push({ type:'Артефакт', name:a.name, desc:a.description, action:()=>{ navigate('artifacts'); openArtifactDetail(a.id); } }));
  RUNES_DATA.forEach(r => index.push({ type:'Руна', name:`${r.symbol} ${r.name}`, desc:r.meaning, action:()=>{ navigate('runes'); openRuneDetail(r.id); } }));
  WORLDS_DATA.forEach(w => index.push({ type:'Світ', name:w.name, desc:w.description, action:()=>{ navigate('worlds'); openWorldDetail(w.id); } }));
  EVENTS_DATA.forEach(e => index.push({ type:'Подія', name:e.title, desc:e.description, action:()=>{ navigate('events'); openEventDetail(e.id); } }));

  return index;
}

let searchIndex = null;

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q || q.length < 2) { searchResults.classList.remove('visible'); return; }

  if (!searchIndex) searchIndex = buildSearchIndex();

  const hits = searchIndex.filter(item =>
    item.name.toLowerCase().includes(q) ||
    (item.desc||'').toLowerCase().includes(q)
  ).slice(0, 8);

  if (!hits.length) { searchResults.classList.remove('visible'); return; }

  searchResults.innerHTML = hits.map((h, i) => `
    <div class="search-result-item" data-idx="${i}">
      <div>
        <div class="search-result-type">${h.type}</div>
        <div class="search-result-name">${h.name}</div>
        <div class="search-result-desc">${(h.desc||'').substring(0,80)}…</div>
      </div>
    </div>`).join('');

  searchResults.querySelectorAll('.search-result-item').forEach((el, i) => {
    el.addEventListener('click', () => {
      hits[i].action();
      searchInput.value = '';
      searchResults.classList.remove('visible');
    });
  });

  searchResults.classList.add('visible');
});

document.addEventListener('click', e => {
  if (!e.target.closest('#search-wrapper')) searchResults.classList.remove('visible');
});

// ─── DETAIL PANEL ────────────────────────────────────────────
function closeDetail() {
  detailOverlay.classList.remove('open');
}

detailOverlay.addEventListener('click', e => {
  if (e.target === detailOverlay) closeDetail();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDetail();
});

// ─── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  const hash = location.hash.replace('#', '') || 'home';
  navigate(hash, false);
});

// ─── VALKYRIES & NORNS (rendered inside renderGods) ────────────
function renderValkyriesNorns() {
  const vt = document.getElementById('valkyries-tags');
  if (vt && typeof VALKYRIES_DATA !== 'undefined') {
    vt.innerHTML = VALKYRIES_DATA.names.map(v =>
      `<span class="tag" title="${v.note||''}">${v.name}</span>`
    ).join(' ');
  }
  const ni = document.getElementById('norns-info');
  if (ni && typeof NORNS_DATA !== 'undefined') {
    ni.innerHTML = NORNS_DATA.norns.map(n =>
      `<div class="info-item"><div class="info-label">${n.name}</div><div class="info-value" style="font-size:0.85rem">${n.meaning}</div></div>`
    ).join('');
    ni.style.display = 'grid';
    ni.style.gridTemplateColumns = 'repeat(3,1fr)';
    ni.style.gap = '1rem';
    ni.style.marginBottom = '1rem';
  }
}
