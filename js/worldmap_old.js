// ═══════════════════════════════════════════════════════════
// WORLD MAP — Illustrated medieval-style map
// Light parchment with stylized region drawings
// ═══════════════════════════════════════════════════════════

const WM_REGIONS = {
  // Top tier — celestial
  asgard: {
    cx: 400, cy: 110, w: 200, h: 120,
    label: 'АСҐАРД', sub: 'Обитель Асів',
    color: '#a86838', borderColor: '#7a4820',
    illustration: 'castle',
  },
  vanaheim: {
    cx: 130, cy: 130, w: 160, h: 100,
    label: 'ВАНАГЕЙМ', sub: 'Домівка Ванів',
    color: '#688040', borderColor: '#3a5018',
    illustration: 'forest',
  },
  alfheim: {
    cx: 670, cy: 130, w: 160, h: 100,
    label: 'АЛЬФГЕЙМ', sub: 'Домівка Ельфів',
    color: '#b09848', borderColor: '#8a7028',
    illustration: 'starfield',
  },

  // Middle tier — Midgard center
  midgard: {
    cx: 400, cy: 320, w: 280, h: 130,
    label: 'МІДҐАРД', sub: 'Світ Людей',
    color: '#5a8048', borderColor: '#3a5020',
    illustration: 'village',
  },
  jotunheim: {
    cx: 670, cy: 330, w: 180, h: 110,
    label: 'ЙОТУНГЕЙМ', sub: 'Домівка Велетів',
    color: '#6080a0', borderColor: '#385878',
    illustration: 'mountains',
  },
  svartalfheim: {
    cx: 130, cy: 330, w: 160, h: 110,
    label: 'СВАРТАЛЬФГЕЙМ', sub: 'Домівка Гномів',
    color: '#806848', borderColor: '#503820',
    illustration: 'caves',
  },

  // Bottom tier — underworld
  niflheim: {
    cx: 130, cy: 530, w: 160, h: 110,
    label: 'НІФЛЬГЕЙМ', sub: 'Світ Туману',
    color: '#5878a0', borderColor: '#385070',
    illustration: 'ice',
  },
  helheim: {
    cx: 400, cy: 540, w: 220, h: 110,
    label: 'ГЕЛЬГЕЙМ', sub: 'Царство Мертвих',
    color: '#705878', borderColor: '#483050',
    illustration: 'gates',
  },
  muspelheim: {
    cx: 670, cy: 530, w: 180, h: 110,
    label: 'МУСПЕЛЬГЕЙМ', sub: 'Світ Вогню',
    color: '#a83820', borderColor: '#781808',
    illustration: 'flames',
  },
};

const ILLUSTRATIONS = {
  // Castle (Asgard) - towers with battlements
  castle: (cx, cy) => `
    <g class="wm-landmark">
      <!-- Main keep -->
      <rect x="${cx-25}" y="${cy-12}" width="50" height="30" stroke="#5a3818" stroke-width="1.2" fill="#a87848"/>
      <!-- Battlements -->
      <path d="M${cx-25} ${cy-12} L${cx-25} ${cy-18} L${cx-20} ${cy-18} L${cx-20} ${cy-15} L${cx-15} ${cy-15} L${cx-15} ${cy-18} L${cx-10} ${cy-18} L${cx-10} ${cy-15} L${cx-5} ${cy-15} L${cx-5} ${cy-18} L${cx} ${cy-18} L${cx} ${cy-15} L${cx+5} ${cy-15} L${cx+5} ${cy-18} L${cx+10} ${cy-18} L${cx+10} ${cy-15} L${cx+15} ${cy-15} L${cx+15} ${cy-18} L${cx+20} ${cy-18} L${cx+20} ${cy-15} L${cx+25} ${cy-15} L${cx+25} ${cy-12} Z"
        stroke="#5a3818" stroke-width="1" fill="#a87848"/>
      <!-- Left tower -->
      <rect x="${cx-35}" y="${cy-22}" width="12" height="40" stroke="#5a3818" stroke-width="1.2" fill="#b88858"/>
      <path d="M${cx-35} ${cy-22} L${cx-35} ${cy-28} L${cx-32} ${cy-28} L${cx-32} ${cy-25} L${cx-29} ${cy-25} L${cx-29} ${cy-28} L${cx-26} ${cy-28} L${cx-26} ${cy-25} L${cx-23} ${cy-25} L${cx-23} ${cy-22} Z" stroke="#5a3818" stroke-width="0.8" fill="#b88858"/>
      <!-- Right tower -->
      <rect x="${cx+23}" y="${cy-22}" width="12" height="40" stroke="#5a3818" stroke-width="1.2" fill="#b88858"/>
      <path d="M${cx+23} ${cy-22} L${cx+23} ${cy-28} L${cx+26} ${cy-28} L${cx+26} ${cy-25} L${cx+29} ${cy-25} L${cx+29} ${cy-28} L${cx+32} ${cy-28} L${cx+32} ${cy-25} L${cx+35} ${cy-25} L${cx+35} ${cy-22} Z" stroke="#5a3818" stroke-width="0.8" fill="#b88858"/>
      <!-- Gate -->
      <path d="M${cx-5} ${cy+18} L${cx-5} ${cy+5} Q${cx} ${cy} ${cx+5} ${cy+5} L${cx+5} ${cy+18} Z" stroke="#3a2008" stroke-width="1" fill="#3a2008"/>
      <!-- Flag -->
      <line x1="${cx}" y1="${cy-18}" x2="${cx}" y2="${cy-30}" stroke="#5a3818" stroke-width="1"/>
      <path d="M${cx} ${cy-30} L${cx+8} ${cy-27} L${cx} ${cy-24} Z" fill="#c44b1a" stroke="#5a3818" stroke-width="0.8"/>
      <!-- Windows -->
      <rect x="${cx-32}" y="${cy-15}" width="4" height="6" fill="#3a2008"/>
      <rect x="${cx+28}" y="${cy-15}" width="4" height="6" fill="#3a2008"/>
      <rect x="${cx-32}" y="${cy-5}" width="4" height="6" fill="#3a2008"/>
      <rect x="${cx+28}" y="${cy-5}" width="4" height="6" fill="#3a2008"/>
    </g>`,

  // Forest (Vanaheim) - trees
  forest: (cx, cy) => `
    <g class="wm-landmark">
      <!-- Tree 1 (left, large) -->
      <line x1="${cx-25}" y1="${cy+15}" x2="${cx-25}" y2="${cy+5}" stroke="#3a2008" stroke-width="2"/>
      <path d="M${cx-25} ${cy+5} L${cx-35} ${cy-5} L${cx-30} ${cy-5} L${cx-37} ${cy-15} L${cx-30} ${cy-15} L${cx-37} ${cy-25} L${cx-13} ${cy-25} L${cx-20} ${cy-15} L${cx-13} ${cy-15} L${cx-20} ${cy-5} L${cx-15} ${cy-5} Z" stroke="#1a3008" stroke-width="1" fill="#4a7028"/>
      <!-- Tree 2 (center, taller) -->
      <line x1="${cx}" y1="${cy+20}" x2="${cx}" y2="${cy-2}" stroke="#3a2008" stroke-width="2.5"/>
      <path d="M${cx} ${cy-2} L${cx-12} ${cy-10} L${cx-7} ${cy-10} L${cx-15} ${cy-22} L${cx-8} ${cy-22} L${cx-15} ${cy-32} L${cx+15} ${cy-32} L${cx+8} ${cy-22} L${cx+15} ${cy-22} L${cx+7} ${cy-10} L${cx+12} ${cy-10} Z" stroke="#1a3008" stroke-width="1" fill="#5a8038"/>
      <!-- Tree 3 (right) -->
      <line x1="${cx+25}" y1="${cy+15}" x2="${cx+25}" y2="${cy+5}" stroke="#3a2008" stroke-width="2"/>
      <path d="M${cx+25} ${cy+5} L${cx+15} ${cy-5} L${cx+20} ${cy-5} L${cx+13} ${cy-15} L${cx+20} ${cy-15} L${cx+13} ${cy-25} L${cx+37} ${cy-25} L${cx+30} ${cy-15} L${cx+37} ${cy-15} L${cx+30} ${cy-5} L${cx+35} ${cy-5} Z" stroke="#1a3008" stroke-width="1" fill="#4a7028"/>
      <!-- Ground -->
      <path d="M${cx-40} ${cy+20} Q${cx} ${cy+22} ${cx+40} ${cy+20}" stroke="#3a2008" stroke-width="0.6" fill="none" opacity="0.5"/>
    </g>`,

  // Stars (Alfheim) - elf realm
  starfield: (cx, cy) => `
    <g class="wm-landmark">
      <!-- Crescent moon -->
      <path d="M${cx} ${cy-8} Q${cx-15} ${cy-5} ${cx-12} ${cy+8} Q${cx-5} ${cy} ${cx} ${cy-8}Z"
        stroke="#7a5818" stroke-width="1.2" fill="#e8c890"/>
      <!-- Stars -->
      <g fill="#e8c890" stroke="#7a5818" stroke-width="0.4">
        <path d="M${cx-30} ${cy-15} l-2 -5 l-2 5 l-5 1 l5 2 l2 5 l2 -5 l5 -2 z"/>
        <path d="M${cx+15} ${cy-20} l-1.5 -4 l-1.5 4 l-4 1 l4 1.5 l1.5 4 l1.5 -4 l4 -1.5 z"/>
        <path d="M${cx+25} ${cy-5} l-1 -3 l-1 3 l-3 0.5 l3 1 l1 3 l1 -3 l3 -1 z"/>
        <path d="M${cx-15} ${cy+15} l-1 -3 l-1 3 l-3 0.5 l3 1 l1 3 l1 -3 l3 -1 z"/>
      </g>
      <!-- Sparkles -->
      <g fill="#e8c890" opacity="0.6">
        <circle cx="${cx+30}" cy="${cy+10}" r="0.8"/>
        <circle cx="${cx-25}" cy="${cy+5}" r="1"/>
        <circle cx="${cx+5}" cy="${cy+15}" r="0.6"/>
      </g>
    </g>`,

  // Village (Midgard) - houses with Yggdrasil
  village: (cx, cy) => `
    <g class="wm-landmark">
      <!-- Yggdrasil tree (center, large) -->
      <line x1="${cx}" y1="${cy+30}" x2="${cx}" y2="${cy-10}" stroke="#3a2008" stroke-width="3"/>
      <!-- Branches -->
      <path d="M${cx} ${cy-10} Q${cx-20} ${cy-15} ${cx-35} ${cy-5}" stroke="#3a2008" stroke-width="1.2" fill="none"/>
      <path d="M${cx} ${cy-10} Q${cx+20} ${cy-15} ${cx+35} ${cy-5}" stroke="#3a2008" stroke-width="1.2" fill="none"/>
      <path d="M${cx} ${cy-5} Q${cx-15} ${cy-3} ${cx-25} ${cy+5}" stroke="#3a2008" stroke-width="1" fill="none"/>
      <path d="M${cx} ${cy-5} Q${cx+15} ${cy-3} ${cx+25} ${cy+5}" stroke="#3a2008" stroke-width="1" fill="none"/>
      <!-- Crown of leaves -->
      <ellipse cx="${cx}" cy="${cy-25}" rx="30" ry="20" stroke="#1a3008" stroke-width="1" fill="#5a8038" opacity="0.85"/>
      <ellipse cx="${cx-15}" cy="${cy-20}" rx="12" ry="10" stroke="#1a3008" stroke-width="0.7" fill="#4a7028" opacity="0.85"/>
      <ellipse cx="${cx+15}" cy="${cy-20}" rx="12" ry="10" stroke="#1a3008" stroke-width="0.7" fill="#4a7028" opacity="0.85"/>

      <!-- House left -->
      <path d="M${cx-70} ${cy+25} L${cx-70} ${cy+10} L${cx-60} ${cy+5} L${cx-50} ${cy+10} L${cx-50} ${cy+25} Z"
        stroke="#3a2008" stroke-width="1.2" fill="#a87848"/>
      <path d="M${cx-72} ${cy+10} L${cx-60} ${cy+2} L${cx-48} ${cy+10}" stroke="#3a2008" stroke-width="1.2" fill="none"/>
      <rect x="${cx-63}" y="${cy+15}" width="6" height="10" fill="#3a2008"/>

      <!-- House right -->
      <path d="M${cx+50} ${cy+25} L${cx+50} ${cy+10} L${cx+60} ${cy+5} L${cx+70} ${cy+10} L${cx+70} ${cy+25} Z"
        stroke="#3a2008" stroke-width="1.2" fill="#a87848"/>
      <path d="M${cx+48} ${cy+10} L${cx+60} ${cy+2} L${cx+72} ${cy+10}" stroke="#3a2008" stroke-width="1.2" fill="none"/>
      <rect x="${cx+57}" y="${cy+15}" width="6" height="10" fill="#3a2008"/>

      <!-- Ground/path -->
      <path d="M${cx-90} ${cy+30} Q${cx} ${cy+33} ${cx+90} ${cy+30}" stroke="#3a2008" stroke-width="0.6" fill="none" opacity="0.5"/>
    </g>`,

  // Mountains (Jotunheim)
  mountains: (cx, cy) => `
    <g class="wm-landmark">
      <!-- Back mountains -->
      <path d="M${cx-50} ${cy+20} L${cx-30} ${cy-25} L${cx-10} ${cy} L${cx+10} ${cy-30} L${cx+35} ${cy} L${cx+50} ${cy+20} Z"
        stroke="#385878" stroke-width="1.5" fill="#6890b0"/>
      <!-- Snow caps -->
      <path d="M${cx-35} ${cy-15} L${cx-30} ${cy-25} L${cx-25} ${cy-15} Q${cx-30} ${cy-12} ${cx-35} ${cy-15}Z" fill="#e8e8e8" stroke="#385878" stroke-width="0.6"/>
      <path d="M${cx+5} ${cy-20} L${cx+10} ${cy-30} L${cx+15} ${cy-20} Q${cx+10} ${cy-17} ${cx+5} ${cy-20}Z" fill="#e8e8e8" stroke="#385878" stroke-width="0.6"/>
      <!-- Shadow lines on mountains -->
      <line x1="${cx-25}" y1="${cy-15}" x2="${cx-15}" y2="${cy+15}" stroke="#385878" stroke-width="0.6" opacity="0.6"/>
      <line x1="${cx+10}" y1="${cy-20}" x2="${cx+25}" y2="${cy+15}" stroke="#385878" stroke-width="0.6" opacity="0.6"/>
      <!-- Foreground rocks -->
      <path d="M${cx-50} ${cy+22} Q${cx-40} ${cy+18} ${cx-35} ${cy+22} Q${cx-30} ${cy+24} ${cx-25} ${cy+22}" stroke="#385878" stroke-width="0.7" fill="none"/>
    </g>`,

  // Caves (Svartalfheim) - underground forge
  caves: (cx, cy) => `
    <g class="wm-landmark">
      <!-- Cave arch -->
      <path d="M${cx-35} ${cy+25} L${cx-35} ${cy+5} Q${cx-30} ${cy-15} ${cx} ${cy-18} Q${cx+30} ${cy-15} ${cx+35} ${cy+5} L${cx+35} ${cy+25} Z"
        stroke="#3a2008" stroke-width="1.5" fill="#5a4828"/>
      <!-- Cave opening -->
      <path d="M${cx-22} ${cy+25} L${cx-22} ${cy+8} Q${cx-15} ${cy} ${cx} ${cy} Q${cx+15} ${cy} ${cx+22} ${cy+8} L${cx+22} ${cy+25} Z"
        fill="#1a1208" stroke="#3a2008" stroke-width="1"/>
      <!-- Hammer and anvil -->
      <rect x="${cx-8}" y="${cy+12}" width="16" height="4" stroke="#3a2008" stroke-width="0.8" fill="#3a2820"/>
      <rect x="${cx-4}" y="${cy+16}" width="8" height="6" stroke="#3a2008" stroke-width="0.8" fill="#3a2820"/>
      <!-- Sparks/fire glow -->
      <circle cx="${cx-10}" cy="${cy+8}" r="3" fill="#c44b1a" opacity="0.5"/>
      <circle cx="${cx+10}" cy="${cy+8}" r="3" fill="#c44b1a" opacity="0.5"/>
      <!-- Rocks above -->
      <path d="M${cx-30} ${cy-20} Q${cx-25} ${cy-25} ${cx-20} ${cy-20}" stroke="#3a2008" stroke-width="0.8" fill="none"/>
      <path d="M${cx+20} ${cy-20} Q${cx+25} ${cy-25} ${cx+30} ${cy-20}" stroke="#3a2008" stroke-width="0.8" fill="none"/>
    </g>`,

  // Ice (Niflheim) - frozen
  ice: (cx, cy) => `
    <g class="wm-landmark">
      <!-- Ice spikes -->
      <path d="M${cx-30} ${cy+25} L${cx-25} ${cy-15} L${cx-20} ${cy+10} L${cx-15} ${cy-25} L${cx-10} ${cy+5} L${cx-5} ${cy-20} L${cx} ${cy+8} L${cx+5} ${cy-25} L${cx+10} ${cy+5} L${cx+15} ${cy-20} L${cx+20} ${cy+10} L${cx+25} ${cy-15} L${cx+30} ${cy+25} Z"
        stroke="#385070" stroke-width="1.2" fill="#a0c0d8"/>
      <!-- Highlights on ice -->
      <line x1="${cx-15}" y1="${cy-20}" x2="${cx-12}" y2="${cy-5}" stroke="#e8f0f8" stroke-width="1" opacity="0.6"/>
      <line x1="${cx+5}" y1="${cy-22}" x2="${cx+8}" y2="${cy-8}" stroke="#e8f0f8" stroke-width="1" opacity="0.6"/>
      <!-- Snowflakes -->
      <g stroke="#385070" stroke-width="0.5" fill="none">
        <g transform="translate(${cx-35},${cy-10})">
          <line x1="-3" y1="0" x2="3" y2="0"/>
          <line x1="0" y1="-3" x2="0" y2="3"/>
          <line x1="-2" y1="-2" x2="2" y2="2"/>
          <line x1="2" y1="-2" x2="-2" y2="2"/>
        </g>
        <g transform="translate(${cx+35},${cy-5})">
          <line x1="-2" y1="0" x2="2" y2="0"/>
          <line x1="0" y1="-2" x2="0" y2="2"/>
          <line x1="-1.5" y1="-1.5" x2="1.5" y2="1.5"/>
          <line x1="1.5" y1="-1.5" x2="-1.5" y2="1.5"/>
        </g>
      </g>
    </g>`,

  // Gates (Helheim) - dark gates
  gates: (cx, cy) => `
    <g class="wm-landmark">
      <!-- Gate posts -->
      <rect x="${cx-30}" y="${cy-15}" width="10" height="40" stroke="#483050" stroke-width="1.5" fill="#5a4868"/>
      <rect x="${cx+20}" y="${cy-15}" width="10" height="40" stroke="#483050" stroke-width="1.5" fill="#5a4868"/>
      <!-- Gate top arch -->
      <path d="M${cx-25} ${cy-15} Q${cx} ${cy-30} ${cx+25} ${cy-15}" stroke="#483050" stroke-width="1.5" fill="none"/>
      <path d="M${cx-22} ${cy-15} Q${cx} ${cy-26} ${cx+22} ${cy-15}" stroke="#483050" stroke-width="0.8" fill="none" opacity="0.6"/>
      <!-- Gate door (open, dark) -->
      <path d="M${cx-20} ${cy-12} L${cx-20} ${cy+25} L${cx+20} ${cy+25} L${cx+20} ${cy-12} Q${cx} ${cy-25} ${cx-20} ${cy-12}Z"
        fill="#1a0a18" stroke="#483050" stroke-width="0.8"/>
      <!-- Skull on gate -->
      <ellipse cx="${cx}" cy="${cy-20}" rx="5" ry="6" stroke="#a8a0a8" stroke-width="0.8" fill="#d8d0d8"/>
      <circle cx="${cx-2}" cy="${cy-21}" r="0.8" fill="#1a0a18"/>
      <circle cx="${cx+2}" cy="${cy-21}" r="0.8" fill="#1a0a18"/>
      <!-- Mist -->
      <path d="M${cx-40} ${cy+25} Q${cx-20} ${cy+22} ${cx} ${cy+25} Q${cx+20} ${cy+28} ${cx+40} ${cy+25}" stroke="#806878" stroke-width="0.8" fill="none" opacity="0.5"/>
    </g>`,

  // Flames (Muspelheim) - Surt's domain
  flames: (cx, cy) => `
    <g class="wm-landmark">
      <!-- Main flame -->
      <path d="M${cx-20} ${cy+22} Q${cx-25} ${cy+10} ${cx-15} ${cy-5} Q${cx-10} ${cy+5} ${cx-5} ${cy-15} Q${cx} ${cy-25} ${cx+5} ${cy-12} Q${cx+10} ${cy-20} ${cx+15} ${cy-5} Q${cx+25} ${cy+10} ${cx+20} ${cy+22} Z"
        stroke="#781808" stroke-width="1.5" fill="#e85820"/>
      <!-- Inner flame -->
      <path d="M${cx-10} ${cy+18} Q${cx-12} ${cy+8} ${cx-5} ${cy-2} Q${cx} ${cy-15} ${cx+5} ${cy-2} Q${cx+12} ${cy+8} ${cx+10} ${cy+18} Z"
        fill="#f8a040" opacity="0.8"/>
      <!-- Core -->
      <ellipse cx="${cx}" cy="${cy+8}" rx="3" ry="8" fill="#fff080" opacity="0.6"/>
      <!-- Side flames -->
      <path d="M${cx-30} ${cy+22} Q${cx-30} ${cy+10} ${cx-25} ${cy+5} Q${cx-28} ${cy+15} ${cx-25} ${cy+22} Z" fill="#e85820" stroke="#781808" stroke-width="0.8"/>
      <path d="M${cx+30} ${cy+22} Q${cx+30} ${cy+10} ${cx+25} ${cy+5} Q${cx+28} ${cy+15} ${cx+25} ${cy+22} Z" fill="#e85820" stroke="#781808" stroke-width="0.8"/>
      <!-- Sparks -->
      <circle cx="${cx-20}" cy="${cy-15}" r="1" fill="#f8a040"/>
      <circle cx="${cx+20}" cy="${cy-18}" r="0.8" fill="#f8a040"/>
      <circle cx="${cx-5}" cy="${cy-30}" r="0.6" fill="#fff080"/>
    </g>`,
};

function renderWorldMap() {
  const container = document.getElementById('worldmap-container');
  if (!container || container.dataset.rendered) return;

  const W = 800, H = 700;

  let regionsHTML = '';
  Object.entries(WM_REGIONS).forEach(([id, r]) => {
    const illustration = ILLUSTRATIONS[r.illustration] ? ILLUSTRATIONS[r.illustration](r.cx, r.cy - 15) : '';

    regionsHTML += `
      <g class="wm-region" data-id="${id}" onclick="selectWorld('${id}')">
        <!-- Region background -->
        <rect class="wm-region-bg"
          x="${r.cx - r.w/2}" y="${r.cy - r.h/2}"
          width="${r.w}" height="${r.h}"
          rx="3"
          fill="${r.color}"/>
        <!-- Region border -->
        <rect class="wm-region-border"
          x="${r.cx - r.w/2}" y="${r.cy - r.h/2}"
          width="${r.w}" height="${r.h}"
          rx="3"
          stroke="${r.borderColor}"/>
        <!-- Decorative corners -->
        <path d="M${r.cx-r.w/2+5} ${r.cy-r.h/2+2} L${r.cx-r.w/2+15} ${r.cy-r.h/2+2} M${r.cx-r.w/2+2} ${r.cy-r.h/2+5} L${r.cx-r.w/2+2} ${r.cy-r.h/2+15}"
          stroke="${r.borderColor}" stroke-width="1" opacity="0.7"/>
        <path d="M${r.cx+r.w/2-5} ${r.cy+r.h/2-2} L${r.cx+r.w/2-15} ${r.cy+r.h/2-2} M${r.cx+r.w/2-2} ${r.cy+r.h/2-5} L${r.cx+r.w/2-2} ${r.cy+r.h/2-15}"
          stroke="${r.borderColor}" stroke-width="1" opacity="0.7"/>

        <!-- Illustration -->
        ${illustration}

        <!-- Label -->
        <text class="wm-label" x="${r.cx}" y="${r.cy + r.h/2 - 18}" font-size="13">${r.label}</text>
        <text class="wm-sublabel" x="${r.cx}" y="${r.cy + r.h/2 - 6}" font-size="10">${r.sub}</text>
      </g>`;
  });

  // Yggdrasil branches connecting worlds (decorative dashed lines)
  const m = WM_REGIONS.midgard;
  const connections = `
    <g opacity="0.35" stroke="#5a4520" stroke-width="0.8" fill="none" stroke-dasharray="4 3">
      <path d="M${m.cx} ${m.cy} L${WM_REGIONS.asgard.cx} ${WM_REGIONS.asgard.cy}"/>
      <path d="M${m.cx} ${m.cy} L${WM_REGIONS.vanaheim.cx} ${WM_REGIONS.vanaheim.cy}"/>
      <path d="M${m.cx} ${m.cy} L${WM_REGIONS.alfheim.cx} ${WM_REGIONS.alfheim.cy}"/>
      <path d="M${m.cx} ${m.cy} L${WM_REGIONS.jotunheim.cx} ${WM_REGIONS.jotunheim.cy}"/>
      <path d="M${m.cx} ${m.cy} L${WM_REGIONS.svartalfheim.cx} ${WM_REGIONS.svartalfheim.cy}"/>
      <path d="M${m.cx} ${m.cy} L${WM_REGIONS.niflheim.cx} ${WM_REGIONS.niflheim.cy}"/>
      <path d="M${m.cx} ${m.cy} L${WM_REGIONS.helheim.cx} ${WM_REGIONS.helheim.cy}"/>
      <path d="M${m.cx} ${m.cy} L${WM_REGIONS.muspelheim.cx} ${WM_REGIONS.muspelheim.cy}"/>
    </g>`;

  // Compass rose
  const compass = `
    <g class="wm-compass" transform="translate(60, 50)">
      <circle r="22" stroke="#5a4520" stroke-width="0.8" fill="none" opacity="0.6"/>
      <circle r="16" stroke="#5a4520" stroke-width="0.5" fill="none" opacity="0.4"/>
      <g stroke="#5a4520" stroke-width="1" fill="#8a7858">
        <path d="M0 -20 L4 -4 L-4 -4 Z"/>
        <path d="M0 20 L4 4 L-4 4 Z" fill="none"/>
        <path d="M-20 0 L-4 -4 L-4 4 Z" fill="none"/>
        <path d="M20 0 L4 -4 L4 4 Z" fill="none"/>
      </g>
      <text x="0" y="-26" font-family="Cinzel" font-size="9" fill="#3a2a10" text-anchor="middle" font-weight="600">ᚾ</text>
      <text x="0" y="32" font-family="Cinzel" font-size="9" fill="#3a2a10" text-anchor="middle" font-weight="600">ᛋ</text>
      <text x="-28" y="3" font-family="Cinzel" font-size="9" fill="#3a2a10" text-anchor="middle" font-weight="600">ᚹ</text>
      <text x="28" y="3" font-family="Cinzel" font-size="9" fill="#3a2a10" text-anchor="middle" font-weight="600">ᛖ</text>
    </g>`;

  // Decorative border
  const decoBorder = `
    <rect class="wm-border-deco" x="15" y="15" width="${W-30}" height="${H-30}" rx="4"/>
    <rect class="wm-border-deco" x="22" y="22" width="${W-44}" height="${H-44}" rx="3" opacity="0.5"/>`;

  // Title at top
  const title = `
    <text x="${W/2}" y="40" font-family="Cinzel" font-size="13" font-weight="600"
      fill="#3a2a10" text-anchor="middle" letter-spacing="3">КАРТА ДЕВ'ЯТИ СВІТІВ</text>
    <text x="${W/2}" y="55" font-family="Cormorant Garamond" font-style="italic" font-size="10"
      fill="#5a4520" text-anchor="middle">Níu Heimar · Іґґдрасіль</text>`;

  // Decorative ornament between tiers
  const dividers = `
    <g stroke="#8a7858" stroke-width="0.6" opacity="0.5" fill="none">
      <line x1="40" y1="220" x2="${W-40}" y2="220"/>
      <line x1="40" y1="420" x2="${W-40}" y2="420"/>
      <circle cx="${W/2}" cy="220" r="3"/>
      <circle cx="${W/2}" cy="420" r="3"/>
    </g>`;

  container.innerHTML = `
    <svg class="worldmap-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      ${decoBorder}
      ${title}
      ${dividers}
      ${connections}
      ${regionsHTML}
      ${compass}
      <!-- Tier labels -->
      <text x="${W-40}" y="135" font-family="Cinzel" font-size="9" fill="#5a4520" text-anchor="end" letter-spacing="2" opacity="0.6">НЕБЕСНІ</text>
      <text x="${W-40}" y="335" font-family="Cinzel" font-size="9" fill="#5a4520" text-anchor="end" letter-spacing="2" opacity="0.6">СЕРЕДНІ</text>
      <text x="${W-40}" y="545" font-family="Cinzel" font-size="9" fill="#5a4520" text-anchor="end" letter-spacing="2" opacity="0.6">ПІДЗЕМНІ</text>
    </svg>`;

  container.dataset.rendered = '1';
}

function selectWorld(id) {
  if (typeof openWorldDetail === 'function') openWorldDetail(id);
}
