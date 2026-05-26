// ═══════════════════════════════════════════════════════════
// GENEALOGY — Norse style with carved card nodes
// Each "node" is a rune-stone style card with name + role
// Click → info panel below shows description + link to full
// ═══════════════════════════════════════════════════════════

const GEN_NODES = [
  // Tier 0 — Primordial (top)
  { id:'ginnungagap', label:'ҐІННУНҐАҐАП',sub:'Порожнеча',    x:380, y:50,  tier:0, type:'primordial' },
  { id:'ymir',        label:'ІМІР',       sub:'Першовелет',   x:180, y:140, tier:1, type:'giant' },
  { id:'audhumla',    label:'АУДУМБЛА',   sub:'Перша корова', x:380, y:140, tier:1, type:'creature' },
  { id:'buri',        label:'БУРІ',       sub:'Першобог',     x:580, y:140, tier:1, type:'god' },

  // Tier 1
  { id:'borr',        label:'БОР',        sub:'Ас',           x:490, y:240, tier:2, type:'god' },
  { id:'bestla',      label:'БЕСТЛА',     sub:'Велетка',      x:620, y:240, tier:2, type:'giant' },

  // Tier 2 — Creators
  { id:'odin',        label:'ОДІН',       sub:'Всебатько',    x:380, y:340, tier:3, type:'aesir_main' },
  { id:'ve',          label:'ВЕ',         sub:'Ас',           x:510, y:340, tier:3, type:'aesir' },
  { id:'vili',        label:'ВІЛІ',       sub:'Ас',           x:620, y:340, tier:3, type:'aesir' },

  // Tier 3 — Odin's children
  { id:'thor',        label:'ТОР',        sub:'Грім',         x:80,  y:450, tier:4, type:'aesir_main' },
  { id:'baldr',       label:'БАЛЬДР',     sub:'Світло',       x:200, y:450, tier:4, type:'aesir_main' },
  { id:'hodr',        label:'ХЬОД',       sub:'Темрява',      x:300, y:450, tier:4, type:'aesir' },
  { id:'tyr',         label:'ТЮР',        sub:'Правосуддя',   x:395, y:450, tier:4, type:'aesir_main' },
  { id:'vali',        label:'ВАЛІ',       sub:'Помста',       x:495, y:450, tier:4, type:'aesir' },
  { id:'vidar',       label:'ВІДАР',      sub:'Мовчання',     x:595, y:450, tier:4, type:'aesir' },

  // Tier 4
  { id:'magni',       label:'МАҐНІ',      sub:'Сила',         x:30,  y:560, tier:5, type:'aesir' },
  { id:'modi',        label:'МОДІ',       sub:'Відвага',      x:130, y:560, tier:5, type:'aesir' },
  { id:'forseti',     label:'ФОРСЕТІ',    sub:'Суд',          x:225, y:560, tier:5, type:'aesir' },

  // Vanir (right side)
  { id:'njord',       label:'НЬОРД',      sub:'Море',         x:770, y:340, tier:3, type:'vanir' },
  { id:'freyr',       label:'ФРЕЙР',      sub:'Родючість',    x:710, y:450, tier:4, type:'vanir' },
  { id:'freyja',      label:'ФРЕЙЯ',      sub:'Кохання',      x:830, y:450, tier:4, type:'vanir' },

  // Loki branch (far left)
  { id:'loki',        label:'ЛОКІ',       sub:'Трікстер',     x:100, y:240, tier:2, type:'trickster' },
  { id:'sleipnir',    label:'СЛЕЙПНІР',   sub:'Кінь Одіна',   x:240, y:340, tier:3, type:'creature' },
  { id:'fenrir',      label:'ФЕНРІР',     sub:'Вовк',         x:-30, y:340, tier:3, type:'monster' },
  { id:'jormungandr', label:'ЙОРМУНҐАНД', sub:'Змій',         x:80,  y:340, tier:3, type:'monster' },
  { id:'hel',         label:'ГЕЛЬ',       sub:'Смерть',       x:0,   y:450, tier:4, type:'deity' },
];

const GEN_EDGES = [
  { from:'audhumla',    to:'buri',        type:'created' },
  { from:'buri',        to:'borr',        type:'parent' },
  { from:'borr',        to:'odin',        type:'parent' },
  { from:'borr',        to:'ve',          type:'parent' },
  { from:'borr',        to:'vili',        type:'parent' },
  { from:'odin',        to:'thor',        type:'parent' },
  { from:'odin',        to:'baldr',       type:'parent' },
  { from:'odin',        to:'hodr',        type:'parent' },
  { from:'odin',        to:'tyr',         type:'parent' },
  { from:'odin',        to:'vali',        type:'parent' },
  { from:'odin',        to:'vidar',       type:'parent' },
  { from:'thor',        to:'magni',       type:'parent' },
  { from:'thor',        to:'modi',        type:'parent' },
  { from:'baldr',       to:'forseti',     type:'parent' },
  { from:'njord',       to:'freyr',       type:'parent' },
  { from:'njord',       to:'freyja',      type:'parent' },
  { from:'loki',        to:'fenrir',      type:'parent' },
  { from:'loki',        to:'jormungandr', type:'parent' },
  { from:'loki',        to:'sleipnir',    type:'parent' },
  { from:'loki',        to:'hel',         type:'parent' },
];

const GEN_COLORS = {
  primordial: '#6b8264',
  god:        '#b8956a',
  aesir_main: '#d4a868',
  aesir:      '#9a805a',
  vanir:      '#6a9060',
  giant:      '#607890',
  trickster:  '#c4502a',
  monster:    '#8a3018',
  creature:   '#806890',
  deity:      '#906880',
};

const CARD_W = 110;
const CARD_H = 48;

function renderGenealogy() {
  const container = document.getElementById('gen-container');
  if (!container || container.dataset.rendered) return;

  // Compute bounding box
  const allX = GEN_NODES.map(n => n.x);
  const allY = GEN_NODES.map(n => n.y);
  const minX = Math.min(...allX) - CARD_W/2 - 30;
  const minY = Math.min(...allY) - CARD_H/2 - 30;
  const maxX = Math.max(...allX) + CARD_W/2 + 30;
  const maxY = Math.max(...allY) + CARD_H/2 + 30;
  const VW = maxX - minX;
  const VH = maxY - minY;

  // Edges (connecting lines with Celtic curves)
  let edgesHTML = '';
  GEN_EDGES.forEach(e => {
    const fn = GEN_NODES.find(n => n.id === e.from);
    const tn = GEN_NODES.find(n => n.id === e.to);
    if (!fn || !tn) return;
    const color = e.type === 'created' ? '#5878a0' : '#7a6342';
    const dash = e.type === 'created' ? '4 3' : 'none';
    const fromY = fn.y + CARD_H/2;
    const toY   = tn.y - CARD_H/2;
    const midY  = (fromY + toY) / 2;
    edgesHTML += `<path class="gen-edge"
      d="M${fn.x},${fromY} C${fn.x},${midY} ${tn.x},${midY} ${tn.x},${toY}"
      stroke="${color}" stroke-dasharray="${dash}"/>`;
  });

  // Nodes (rune-stone cards)
  let nodesHTML = '';
  GEN_NODES.forEach(n => {
    const c = GEN_COLORS[n.type] || '#888';
    const x = n.x - CARD_W/2;
    const y = n.y - CARD_H/2;

    nodesHTML += `
      <g class="gen-node-card" data-id="${n.id}" onclick="genSelectNode('${n.id}')">
        <!-- Outer carved-stone effect -->
        <rect class="gen-card-bg"
          x="${x}" y="${y}" width="${CARD_W}" height="${CARD_H}" rx="2"
          fill="${c}" fill-opacity="0.18"/>
        <rect class="gen-card-border"
          x="${x}" y="${y}" width="${CARD_W}" height="${CARD_H}" rx="2"
          stroke="${c}"/>

        <!-- Inner subtle frame -->
        <rect x="${x+3}" y="${y+3}" width="${CARD_W-6}" height="${CARD_H-6}" rx="1"
          fill="none" stroke="${c}" stroke-width="0.5" opacity="0.5"/>

        <!-- Corner ornaments (knotwork hint) -->
        <path d="M${x+5} ${y+2} L${x+10} ${y+2} M${x+2} ${y+5} L${x+2} ${y+10}"
          stroke="${c}" stroke-width="0.7" opacity="0.7"/>
        <path d="M${x+CARD_W-5} ${y+CARD_H-2} L${x+CARD_W-10} ${y+CARD_H-2} M${x+CARD_W-2} ${y+CARD_H-5} L${x+CARD_W-2} ${y+CARD_H-10}"
          stroke="${c}" stroke-width="0.7" opacity="0.7"/>

        <!-- Name -->
        <text class="gen-card-label" x="${n.x}" y="${n.y - 2}"
          fill="${c}" font-size="10">${n.label}</text>
        <!-- Sub-role -->
        <text class="gen-card-sub" x="${n.x}" y="${n.y + 11}"
          fill="${c}" font-size="9" opacity="0.8">${n.sub}</text>
      </g>`;
  });

  // Tier labels (left side)
  const tierLabels = [
    { y: 50,  text: 'ПЕРШОПОЧАТОК' },
    { y: 140, text: 'ПЕРШОІСТОТИ' },
    { y: 240, text: 'РАННІЙ ПАНТЕОН' },
    { y: 340, text: 'ТВОРЦІ СВІТУ' },
    { y: 450, text: 'ДРУГЕ ПОКОЛІННЯ' },
    { y: 560, text: 'НАЩАДКИ' },
  ];

  let tiersHTML = '';
  tierLabels.forEach(t => {
    tiersHTML += `<text class="gen-tier-label" x="${minX + 8}" y="${t.y + 3}">${t.text}</text>`;
    tiersHTML += `<line x1="${minX + 5}" y1="${t.y + 12}" x2="${minX + 80}" y2="${t.y + 12}" stroke="${'#5a5550'}" stroke-width="0.5" opacity="0.3"/>`;
  });

  const svg = document.getElementById('gen-svg');
  if (svg) {
    svg.setAttribute('viewBox', `${minX} ${minY} ${VW} ${VH}`);
    svg.setAttribute('height', VH);
    svg.innerHTML = `
      <defs>
        <!-- Subtle vertical fade for cards -->
      </defs>
      <g class="gen-tiers">${tiersHTML}</g>
      <g class="gen-edges">${edgesHTML}</g>
      <g class="gen-nodes">${nodesHTML}</g>`;
  }

  // Legend
  const legend = document.getElementById('gen-legend');
  if (legend && !legend.dataset.rendered) {
    const items = [
      ['#d4a868','Аси (головні)'], ['#9a805a','Аси'], ['#6a9060','Вани'],
      ['#607890','Велети'], ['#c4502a','Трікстер'], ['#8a3018','Монстри'],
      ['#6b8264','Першоістоти'], ['#806890','Створіння'],
    ];
    legend.innerHTML = items.map(([c,l]) =>
      `<div class="gen-legend-item"><div class="gen-legend-swatch" style="background:${c}"></div>${l}</div>`
    ).join('');
    legend.dataset.rendered = '1';
  }

  container.dataset.rendered = '1';
}

let selectedGenNodeId = null;

function genSelectNode(id) {
  // Reset previous border-width
  document.querySelectorAll('.gen-card-border').forEach(el => el.setAttribute('stroke-width', '1.2'));

  // Highlight current
  const allNodes = document.querySelectorAll('.gen-node-card');
  allNodes.forEach(g => {
    if (g.dataset.id === id) {
      g.querySelector('.gen-card-border').setAttribute('stroke-width', '2.5');
    }
  });

  selectedGenNodeId = id;
  showGenInfo(id);
}

function showGenInfo(id) {
  const infoPanel = document.getElementById('gen-info-panel');
  if (!infoPanel) return;

  const node = GEN_NODES.find(n => n.id === id);
  if (!node) return;

  const allEntities = [
    ...AESIR_DATA, ...AESIR_GODDESSES, ...VANIR_DATA, ...CREATURES_DATA
  ];
  const entity = allEntities.find(e => e.id === id);

  if (!entity) {
    // Basic info for primordial nodes
    const basicInfo = {
      ginnungagap: 'Первісна порожнеча між вогняним Муспельгеймом і крижаним Ніфльгеймом. З їхнього зіткнення народилось перше живе створіння — велет Імір.',
      ymir: 'Першовелет, що народився з крапель, коли жар Муспельгейму розтопив льоди Ніфльгейму. Праотець усіх йотунів. З його тіла боги Одін, Ве і Вілі створили весь фізичний світ.',
      audhumla: 'Первісна корова, що годувала Іміра чотирма ріками молока. Сама лизала солоні крижані брили і поступово вилизала з льоду першобога Бурі.',
      buri: '«Народжений» — перший бог, вилизаний Аудумблою з крижаних брил. Батько Бора, дід Одіна, Ве і Вілі.',
      borr: 'Син Бурі. Одружився з Бестлою, дочкою велета Бьольторна. Батько трьох братів-творців: Одіна, Ве і Вілі.',
      bestla: 'Велетка, дочка Бьольторна. Мати Одіна, Ве і Вілі. З велетської крові трьох братів частково походить їхня магічна могутність.',
      ve: 'Один з трьох братів-творців. Разом з Одіном і Вілі вбив Іміра і створив світ. Дав першим людям зовнішній вигляд і мову.',
      vili: 'Один з трьох братів-творців. Разом з Одіном і Ве вбив Іміра і створив світ. Дав першим людям тепло, колір шкіри і розум.',
      sleipnir: 'Восьминогий сірий кінь Одіна, найшвидший у всіх дев\'яти світах. Народжений від Локі (у формі кобили) і жеребця Свадільфарі. Може скакати по воді, повітрю і між світами.',
    };

    infoPanel.innerHTML = `
      <div class="gen-info-eyebrow">${node.sub}</div>
      <div class="gen-info-header">
        <div>
          <div class="gen-info-name">${node.label}</div>
        </div>
      </div>
      <p class="gen-info-text">${basicInfo[id] || 'Інформація відсутня.'}</p>`;
    infoPanel.style.display = 'block';
    setTimeout(() => infoPanel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    return;
  }

  const isVanir = VANIR_DATA.find(e => e.id === id);
  const isCreature = CREATURES_DATA.find(e => e.id === id);
  const detailType = isVanir ? 'vanir' : (isCreature ? 'creature' : 'aesir');
  const typeLabel = isVanir ? 'Ван' : (isCreature ? 'Створіння' : (entity.type && entity.type.startsWith('Богиня') ? 'Богиня' : 'Ас'));

  const detailFn = isCreature ? `openCreatureDetail('${id}')` : `openGodDetail('${id}','${detailType}')`;

  infoPanel.innerHTML = `
    <div class="gen-info-eyebrow">${typeLabel} · ${node.sub}</div>
    <div class="gen-info-header">
      <div>
        <div class="gen-info-name">${entity.name}</div>
        <div class="gen-info-oldnorse">${entity.oldnorse || ''}</div>
      </div>
      <button class="gen-info-cta" onclick="${detailFn}">Детально →</button>
    </div>
    ${(entity.domain && entity.domain.length) ? `
      <div class="gen-info-domains">
        ${entity.domain.slice(0,5).map(d => `<span class="gen-info-domain">${d}</span>`).join('')}
      </div>` : ''}
    <p class="gen-info-text">${(entity.description || '').substring(0, 320)}…</p>`;

  infoPanel.style.display = 'block';
  setTimeout(() => infoPanel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
}
