// ═══════════════════════════════════════════════════════════
// SVG ART + Real Historical Images
// Gods: 19th century Romantic paintings (public domain, Wikimedia Commons)
// Images load via Special:FilePath (no fragile hash URLs)
// Fallback: stylized woodcut / medieval manuscript SVGs
// ═══════════════════════════════════════════════════════════

const ART = {};

// Helper: Wikimedia Commons image by exact file name (auto-resolves path)
function _wmURL(name, width) {
  return 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(name) + '?width=' + (width || 640);
}

// Helper: historical painting overlay + SVG fallback
// If image loads → photo shown; if fails → removed, SVG visible
function _artImg(url, svg) {
  return '<img src="' + url + '" class="art-photo" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.remove()">' + svg;
}

// ─── ГОЛОВНИЙ ГЕРОЙ (hero section) — SVG fallback ───────
ART.heroMjolnir = `
<svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <defs>
    <pattern id="knotwork1" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
      <path d="M0 7 Q3.5 0 7 7 Q10.5 14 14 7" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.5"/>
    </pattern>
  </defs>
  <path d="M30 35 L170 35 Q178 35 178 43 L178 90 Q178 98 170 98 L30 98 Q22 98 22 90 L22 43 Q22 35 30 35Z"
    stroke="currentColor" stroke-width="1.5" fill="url(#knotwork1)"/>
  <line x1="22" y1="50" x2="178" y2="50" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
  <line x1="22" y1="83" x2="178" y2="83" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
  <circle cx="100" cy="66" r="14" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <circle cx="100" cy="66" r="9" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6"/>
  <path d="M100 52 Q108 60 100 68 Q92 60 100 52Z M100 64 Q108 72 100 80 Q92 72 100 64Z"
    stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.7"/>
  <circle cx="50" cy="66" r="4" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6"/>
  <circle cx="150" cy="66" r="4" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6"/>
  <rect x="80" y="98" width="40" height="10" rx="1" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <rect x="90" y="108" width="20" height="90" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/>
  <line x1="86" y1="130" x2="114" y2="130" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>
  <line x1="86" y1="160" x2="114" y2="160" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>
  <line x1="86" y1="180" x2="114" y2="180" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>
  <circle cx="100" cy="200" r="3" stroke="currentColor" stroke-width="1" fill="none"/>
</svg>`;

// ─── ІҐҐДРАСІЛЬ (worlds section icon) ───────────────────
ART.yggdrasil = `
<svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <path d="M100 200 Q98 150 100 100 Q102 60 100 30" stroke="currentColor" stroke-width="3" fill="none"/>
  <path d="M95 180 Q92 150 95 120 M105 180 Q108 150 105 120" stroke="currentColor" stroke-width="0.6" fill="none" opacity="0.5"/>
  <path d="M100 35 Q80 30 60 38 Q70 25 90 28" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <path d="M100 35 Q120 30 140 38 Q130 25 110 28" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <path d="M100 45 Q70 42 45 55" stroke="currentColor" stroke-width="1" fill="none"/>
  <path d="M100 45 Q130 42 155 55" stroke="currentColor" stroke-width="1" fill="none"/>
  <path d="M100 60 Q75 58 55 70" stroke="currentColor" stroke-width="1" fill="none"/>
  <path d="M100 60 Q125 58 145 70" stroke="currentColor" stroke-width="1" fill="none"/>
  <circle cx="55" cy="60" r="4" stroke="currentColor" stroke-width="0.8" fill="none"/>
  <circle cx="145" cy="60" r="4" stroke="currentColor" stroke-width="0.8" fill="none"/>
  <circle cx="40" cy="48" r="3" stroke="currentColor" stroke-width="0.8" fill="none"/>
  <circle cx="160" cy="48" r="3" stroke="currentColor" stroke-width="0.8" fill="none"/>
  <circle cx="100" cy="20" r="5" stroke="currentColor" stroke-width="1" fill="none"/>
  <path d="M100 200 Q85 205 70 215 Q60 218 50 215" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <path d="M100 200 Q115 205 130 215 Q140 218 150 215" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <ellipse cx="100" cy="15" rx="6" ry="3" stroke="currentColor" stroke-width="0.8" fill="none"/>
  <path d="M94 14 L92 12 M106 14 L108 12" stroke="currentColor" stroke-width="0.8" fill="none"/>
  <circle cx="103" cy="100" r="3" stroke="currentColor" stroke-width="0.7" fill="none"/>
</svg>`;

// ─── ЕЙГІСГЬЯЛЬМУР (gods section icon) ──────────────────
ART.aegishjalmur = `
<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <circle cx="100" cy="100" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
  <circle cx="100" cy="100" r="3" fill="currentColor"/>
  <g stroke="currentColor" stroke-width="2" fill="none">
    <line x1="100" y1="92" x2="100" y2="30"/>
    <line x1="100" y1="42" x2="90" y2="32"/><line x1="100" y1="42" x2="110" y2="32"/>
    <circle cx="100" cy="38" r="2"/>
    <line x1="100" y1="30" x2="94" y2="22"/><line x1="100" y1="30" x2="106" y2="22"/>
    <line x1="100" y1="108" x2="100" y2="170"/>
    <line x1="100" y1="158" x2="90" y2="168"/><line x1="100" y1="158" x2="110" y2="168"/>
    <circle cx="100" cy="162" r="2"/>
    <line x1="100" y1="170" x2="94" y2="178"/><line x1="100" y1="170" x2="106" y2="178"/>
    <line x1="108" y1="100" x2="170" y2="100"/>
    <line x1="158" y1="100" x2="168" y2="90"/><line x1="158" y1="100" x2="168" y2="110"/>
    <circle cx="162" cy="100" r="2"/>
    <line x1="170" y1="100" x2="178" y2="94"/><line x1="170" y1="100" x2="178" y2="106"/>
    <line x1="92" y1="100" x2="30" y2="100"/>
    <line x1="42" y1="100" x2="32" y2="90"/><line x1="42" y1="100" x2="32" y2="110"/>
    <circle cx="38" cy="100" r="2"/>
    <line x1="30" y1="100" x2="22" y2="94"/><line x1="30" y1="100" x2="22" y2="106"/>
    <line x1="106" y1="94" x2="148" y2="52"/>
    <line x1="140" y1="60" x2="146" y2="46"/><line x1="140" y1="60" x2="154" y2="54"/>
    <line x1="94" y1="94" x2="52" y2="52"/>
    <line x1="60" y1="60" x2="54" y2="46"/><line x1="60" y1="60" x2="46" y2="54"/>
    <line x1="106" y1="106" x2="148" y2="148"/>
    <line x1="140" y1="140" x2="146" y2="154"/><line x1="140" y1="140" x2="154" y2="146"/>
    <line x1="94" y1="106" x2="52" y2="148"/>
    <line x1="60" y1="140" x2="54" y2="154"/><line x1="60" y1="140" x2="46" y2="146"/>
  </g>
</svg>`;

// ─── ЗМІЙ ЙОРМУНҐАНД (creatures section icon) ───────────
ART.serpent = `
<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <circle cx="100" cy="100" r="78" stroke="currentColor" stroke-width="3" fill="none"/>
  <circle cx="100" cy="100" r="72" stroke="currentColor" stroke-width="0.6" fill="none" opacity="0.5"/>
  <g stroke="currentColor" stroke-width="0.7" fill="none" opacity="0.6">
    <path d="M28 100 Q22 95 28 90 M28 110 Q22 105 28 100 M30 80 Q24 75 30 70"/>
    <path d="M172 100 Q178 95 172 90 M172 110 Q178 105 172 100 M170 80 Q176 75 170 70"/>
    <path d="M100 28 Q95 22 90 28 M110 28 Q105 22 100 28 M80 30 Q75 24 70 30"/>
    <path d="M100 172 Q95 178 90 172 M110 172 Q105 178 100 172"/>
  </g>
  <path d="M155 80 Q175 65 178 80 Q175 95 160 90 Q150 88 155 80Z"
    stroke="currentColor" stroke-width="2" fill="none"/>
  <circle cx="170" cy="78" r="2.5" fill="currentColor"/>
  <path d="M178 84 Q183 86 180 90 Q177 92 178 88Z" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <line x1="175" y1="85" x2="173" y2="90" stroke="currentColor" stroke-width="1"/>
  <path d="M148 82 Q140 88 145 95" stroke="currentColor" stroke-width="1.5" fill="none"/>
  <g stroke="currentColor" stroke-width="1" fill="none" opacity="0.7">
    <path d="M100 50 Q70 70 60 100 Q70 130 100 150 Q130 130 140 100 Q130 70 100 50"/>
    <path d="M100 70 Q85 85 80 100 Q85 115 100 130 Q115 115 120 100 Q115 85 100 70"/>
  </g>
  <circle cx="100" cy="100" r="5" stroke="currentColor" stroke-width="1.2" fill="none"/>
</svg>`;

// ─── РУНІЧНИЙ КАМІНЬ (runes section icon) ────────────────
ART.runestone = `
<svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <path d="M40 200 Q30 200 28 180 L25 80 Q25 50 40 30 L60 15 L140 15 L160 30 Q175 50 175 80 L172 180 Q170 200 160 200 Z"
    stroke="currentColor" stroke-width="1.8" fill="none"/>
  <g stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.4">
    <path d="M45 50 Q55 70 50 100"/>
    <path d="M155 60 Q150 90 158 130"/>
  </g>
  <g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round">
    <line x1="80" y1="60" x2="80" y2="100"/>
    <line x1="80" y1="68" x2="105" y2="63"/>
    <line x1="80" y1="78" x2="105" y2="73"/>
    <line x1="80" y1="115" x2="80" y2="155"/>
    <line x1="80" y1="115" x2="105" y2="125"/>
    <line x1="80" y1="135" x2="105" y2="115"/>
    <line x1="80" y1="135" x2="105" y2="155"/>
  </g>
  <path d="M30 200 Q100 195 170 200" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5"/>
</svg>`;

// ─── СПИС ҐУНҐНІР (artifacts section icon) ───────────────
ART.artifact = `
<svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <line x1="100" y1="50" x2="100" y2="200" stroke="currentColor" stroke-width="2.5"/>
  <path d="M100 15 L88 50 L100 60 L112 50 Z" stroke="currentColor" stroke-width="2" fill="none"/>
  <line x1="100" y1="15" x2="100" y2="55" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>
  <line x1="92" y1="28" x2="92" y2="42" stroke="currentColor" stroke-width="0.7"/>
  <line x1="108" y1="28" x2="108" y2="42" stroke="currentColor" stroke-width="0.7"/>
  <ellipse cx="100" cy="65" rx="9" ry="2.5" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <ellipse cx="100" cy="73" rx="9" ry="2.5" stroke="currentColor" stroke-width="1" fill="none" opacity="0.7"/>
  <ellipse cx="100" cy="81" rx="9" ry="2.5" stroke="currentColor" stroke-width="1" fill="none" opacity="0.5"/>
  <line x1="90" y1="120" x2="110" y2="120" stroke="currentColor" stroke-width="1"/>
  <line x1="90" y1="160" x2="110" y2="160" stroke="currentColor" stroke-width="1"/>
  <circle cx="100" cy="205" r="4" stroke="currentColor" stroke-width="1.2" fill="none"/>
</svg>`;

// ─── СУВІЙ (events section icon) ────────────────────────
ART.scroll = `
<svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <path d="M50 40 L150 40 Q160 50 160 70 L160 160 Q160 180 150 190 L50 190 Q40 180 40 160 L40 70 Q40 50 50 40 Z"
    stroke="currentColor" stroke-width="1.8" fill="none"/>
  <ellipse cx="50" cy="40" rx="10" ry="6" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <ellipse cx="50" cy="190" rx="10" ry="6" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <line x1="40" y1="40" x2="40" y2="190" stroke="currentColor" stroke-width="0.8"/>
  <path d="M150 40 Q170 45 165 70 Q160 90 150 80" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <g stroke="currentColor" stroke-width="0.8" opacity="0.6">
    <line x1="65" y1="70" x2="145" y2="70"/>
    <line x1="65" y1="85" x2="140" y2="85"/>
    <line x1="65" y1="100" x2="145" y2="100"/>
    <line x1="65" y1="115" x2="135" y2="115"/>
    <line x1="65" y1="130" x2="140" y2="130"/>
    <line x1="65" y1="145" x2="130" y2="145"/>
    <line x1="65" y1="160" x2="138" y2="160"/>
  </g>
  <rect x="65" y="65" width="12" height="14" stroke="currentColor" stroke-width="1" fill="none"/>
  <circle cx="105" cy="180" r="5" stroke="currentColor" stroke-width="1" fill="none" opacity="0.7"/>
  <line x1="103" y1="178" x2="107" y2="182" stroke="currentColor" stroke-width="0.6"/>
  <line x1="107" y1="178" x2="103" y2="182" stroke="currentColor" stroke-width="0.6"/>
</svg>`;

// ─── РОДОВЕ ДЕРЕВО (genealogy section icon) ──────────────
ART.tree = `
<svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <line x1="100" y1="200" x2="100" y2="130" stroke="currentColor" stroke-width="3"/>
  <line x1="100" y1="130" x2="60" y2="90" stroke="currentColor" stroke-width="2"/>
  <line x1="100" y1="130" x2="140" y2="90" stroke="currentColor" stroke-width="2"/>
  <line x1="100" y1="110" x2="80" y2="70" stroke="currentColor" stroke-width="1.5"/>
  <line x1="100" y1="110" x2="120" y2="70" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="90" x2="30" y2="60" stroke="currentColor" stroke-width="1.2"/>
  <line x1="60" y1="90" x2="50" y2="50" stroke="currentColor" stroke-width="1.2"/>
  <line x1="140" y1="90" x2="170" y2="60" stroke="currentColor" stroke-width="1.2"/>
  <line x1="140" y1="90" x2="150" y2="50" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="100" cy="200" r="6" stroke="currentColor" stroke-width="1.5" fill="none"/>
  <circle cx="100" cy="200" r="2" fill="currentColor"/>
  <circle cx="60" cy="90" r="4" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <circle cx="140" cy="90" r="4" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <circle cx="80" cy="70" r="3" stroke="currentColor" stroke-width="1" fill="none"/>
  <circle cx="120" cy="70" r="3" stroke="currentColor" stroke-width="1" fill="none"/>
  <circle cx="30" cy="60" r="2.5" stroke="currentColor" stroke-width="1" fill="none"/>
  <circle cx="50" cy="50" r="2.5" stroke="currentColor" stroke-width="1" fill="none"/>
  <circle cx="170" cy="60" r="2.5" stroke="currentColor" stroke-width="1" fill="none"/>
  <circle cx="150" cy="50" r="2.5" stroke="currentColor" stroke-width="1" fill="none"/>
  <path d="M100 200 Q85 208 70 212" stroke="currentColor" stroke-width="1" fill="none"/>
  <path d="M100 200 Q115 208 130 212" stroke="currentColor" stroke-width="1" fill="none"/>
</svg>`;

// ─── СТАРА КНИГА (sources section icon) ──────────────────
ART.book = `
<svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <path d="M40 30 L160 30 Q165 30 165 35 L165 190 Q165 195 160 195 L40 195 Q35 195 35 190 L35 35 Q35 30 40 30 Z"
    stroke="currentColor" stroke-width="2" fill="none"/>
  <line x1="55" y1="30" x2="55" y2="195" stroke="currentColor" stroke-width="1.5"/>
  <rect x="65" y="50" width="90" height="125" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.7"/>
  <rect x="70" y="55" width="80" height="115" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.5"/>
  <g stroke="currentColor" stroke-width="1.2" fill="none">
    <rect x="92" y="90" width="36" height="18" rx="1"/>
    <rect x="105" y="108" width="10" height="30" rx="1"/>
    <rect x="100" y="106" width="20" height="4"/>
  </g>
  <g stroke="currentColor" stroke-width="0.7" opacity="0.6">
    <path d="M70 55 Q75 60 80 55"/>
    <path d="M140 55 Q145 60 150 55"/>
    <path d="M70 170 Q75 165 80 170"/>
    <path d="M140 170 Q145 165 150 170"/>
  </g>
  <rect x="155" y="105" width="10" height="15" stroke="currentColor" stroke-width="1" fill="none"/>
</svg>`;

// ─── ВОГОНЬ (ragnarok / events) ─────────────────────────
ART.flame = `
<svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <path d="M100 200 Q60 180 55 130 Q50 100 75 80 Q70 105 90 110 Q75 80 90 50 Q105 25 120 35 Q110 60 115 80 Q140 65 130 35 Q160 60 155 110 Q150 140 135 165 Q145 145 145 125 Q160 145 145 175 Q130 195 100 200 Z"
    stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M100 180 Q85 165 85 140 Q90 115 105 100 Q100 125 110 130 Q115 110 110 90 Q120 110 120 130 Q125 145 115 165 Z"
    stroke="currentColor" stroke-width="1" fill="none" opacity="0.7"/>
  <ellipse cx="105" cy="155" rx="8" ry="15" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5"/>
  <circle cx="50" cy="100" r="1.5" fill="currentColor" opacity="0.6"/>
  <circle cx="160" cy="80" r="1" fill="currentColor" opacity="0.5"/>
  <circle cx="40" cy="150" r="1" fill="currentColor" opacity="0.4"/>
  <circle cx="170" cy="140" r="1.2" fill="currentColor" opacity="0.5"/>
</svg>`;

// ─── ОРНАМЕНТАЛЬНІ РОЗДІЛЮВАЧІ ──────────────────────────
ART.dividerKnot = `
<svg viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:200px;height:20px">
  <line x1="0" y1="10" x2="60" y2="10" stroke="currentColor" stroke-width="0.6" opacity="0.4"/>
  <path d="M70 10 Q78 4 86 10 Q94 16 102 10 Q110 4 118 10 Q126 16 134 10" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5"/>
  <circle cx="102" cy="10" r="2.5" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5"/>
  <line x1="140" y1="10" x2="200" y2="10" stroke="currentColor" stroke-width="0.6" opacity="0.4"/>
</svg>`;

ART.dividerDot = `
<svg viewBox="0 0 100 14" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:80px;height:14px">
  <line x1="0" y1="7" x2="40" y2="7" stroke="currentColor" stroke-width="0.5" opacity="0.4"/>
  <circle cx="50" cy="7" r="2" stroke="currentColor" stroke-width="0.7" fill="none" opacity="0.5"/>
  <circle cx="50" cy="7" r="0.8" fill="currentColor" opacity="0.5"/>
  <line x1="60" y1="7" x2="100" y2="7" stroke="currentColor" stroke-width="0.5" opacity="0.4"/>
</svg>`;

// ─── CARD ILLUSTRATIONS (SVG fallbacks) ──────────────────
ART.cards = {

  odin: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="70" r="40" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="100" cy="70" r="30" stroke="currentColor" stroke-width="0.6" fill="none" opacity="0.4"/>
    <ellipse cx="100" cy="70" rx="8" ry="5" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="100" cy="70" r="2.5" fill="currentColor"/>
    <path d="M75 65 Q72 70 75 75" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <g transform="translate(40,60)">
      <ellipse cx="0" cy="0" rx="12" ry="6" stroke="currentColor" stroke-width="1.2" fill="none"/>
      <path d="M-10 -2 L-15 -8 M10 -2 L15 -8" stroke="currentColor" stroke-width="1"/>
      <circle cx="-8" cy="-1" r="1" fill="currentColor"/>
    </g>
    <g transform="translate(160,60)">
      <ellipse cx="0" cy="0" rx="12" ry="6" stroke="currentColor" stroke-width="1.2" fill="none"/>
      <path d="M-10 -2 L-15 -8 M10 -2 L15 -8" stroke="currentColor" stroke-width="1"/>
      <circle cx="8" cy="-1" r="1" fill="currentColor"/>
    </g>
    <line x1="100" y1="115" x2="100" y2="145" stroke="currentColor" stroke-width="1.5"/>
    <path d="M100 110 L96 120 L100 122 L104 120 Z" stroke="currentColor" stroke-width="1.2" fill="none"/>
    </svg>`,

  thor: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="35" width="80" height="35" rx="2" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <line x1="60" y1="45" x2="140" y2="45" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
    <line x1="60" y1="60" x2="140" y2="60" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
    <circle cx="100" cy="52" r="6" stroke="currentColor" stroke-width="1" fill="none" opacity="0.7"/>
    <rect x="85" y="70" width="30" height="6" rx="1" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <rect x="92" y="76" width="16" height="55" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M30 30 L25 50 L33 50 L28 75" stroke="currentColor" stroke-width="2" fill="none"/>
    <path d="M170 30 L175 50 L167 50 L172 75" stroke="currentColor" stroke-width="2" fill="none"/>
    <line x1="40" y1="140" x2="160" y2="140" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
    </svg>`,

  loki: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 130 Q50 110 80 110 Q110 110 120 90 Q130 70 150 70 Q170 70 175 50"
      stroke="currentColor" stroke-width="2" fill="none"/>
    <ellipse cx="40" cy="135" rx="8" ry="5" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="36" cy="133" r="1.5" fill="currentColor"/>
    <line x1="32" y1="138" x2="28" y2="142" stroke="currentColor" stroke-width="1"/>
    <line x1="32" y1="138" x2="30" y2="144" stroke="currentColor" stroke-width="1"/>
    <path d="M175 50 Q170 35 175 25 Q180 35 175 50 Q172 40 175 30 Q178 40 175 50"
      stroke="currentColor" stroke-width="1.2" fill="none"/>
    <g stroke="currentColor" stroke-width="0.6" opacity="0.5">
      <path d="M60 120 Q65 117 70 120"/>
      <path d="M90 100 Q95 97 100 100"/>
      <path d="M125 85 Q130 82 135 85"/>
    </g>
    </svg>`,

  freyja: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 50 Q100 90 150 50" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <g fill="none" stroke="currentColor" stroke-width="1">
      <circle cx="60" cy="56" r="3"/><circle cx="75" cy="65" r="3.5"/>
      <circle cx="90" cy="74" r="4"/><circle cx="100" cy="78" r="4.5"/>
      <circle cx="110" cy="74" r="4"/><circle cx="125" cy="65" r="3.5"/>
      <circle cx="140" cy="56" r="3"/>
    </g>
    <path d="M100 90 Q95 95 95 100 Q95 108 100 113 Q105 108 105 100 Q105 95 100 90Z"
      stroke="currentColor" stroke-width="1.2" fill="none"/>
    <g transform="translate(40,125)">
      <ellipse cx="0" cy="0" rx="14" ry="6" stroke="currentColor" stroke-width="1.2" fill="none"/>
      <path d="M-8 -5 L-10 -10 L-6 -8 Z" stroke="currentColor" stroke-width="1" fill="none"/>
      <path d="M8 -5 L10 -10 L6 -8 Z" stroke="currentColor" stroke-width="1" fill="none"/>
    </g>
    <g transform="translate(160,125)">
      <ellipse cx="0" cy="0" rx="14" ry="6" stroke="currentColor" stroke-width="1.2" fill="none"/>
      <path d="M-8 -5 L-10 -10 L-6 -8 Z" stroke="currentColor" stroke-width="1" fill="none"/>
      <path d="M8 -5 L10 -10 L6 -8 Z" stroke="currentColor" stroke-width="1" fill="none"/>
    </g>
    </svg>`,

  freyr: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(100,80)">
      <ellipse cx="0" cy="0" rx="35" ry="20" stroke="currentColor" stroke-width="1.5" fill="none"/>
      <ellipse cx="-30" cy="-5" rx="12" ry="10" stroke="currentColor" stroke-width="1.2" fill="none"/>
      <path d="M-40 0 L-46 4 M-40 -3 L-46 -7" stroke="currentColor" stroke-width="1.2" fill="none"/>
      <circle cx="-32" cy="-7" r="1" fill="currentColor"/>
      <path d="M-25 -12 L-28 -18 L-22 -16 Z" stroke="currentColor" stroke-width="1" fill="none"/>
      <g stroke="currentColor" stroke-width="0.8" opacity="0.7">
        <line x1="-10" y1="-18" x2="-12" y2="-23"/>
        <line x1="0" y1="-20" x2="-1" y2="-26"/>
        <line x1="10" y1="-18" x2="11" y2="-23"/>
      </g>
      <line x1="-15" y1="15" x2="-15" y2="28" stroke="currentColor" stroke-width="1.2"/>
      <line x1="0" y1="18" x2="0" y2="30" stroke="currentColor" stroke-width="1.2"/>
      <line x1="15" y1="18" x2="15" y2="30" stroke="currentColor" stroke-width="1.2"/>
      <line x1="25" y1="15" x2="25" y2="28" stroke="currentColor" stroke-width="1.2"/>
    </g>
    </svg>`,

  frigg: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="80" r="35" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="100" cy="80" r="28" stroke="currentColor" stroke-width="0.7" fill="none" opacity="0.5"/>
    <circle cx="100" cy="80" r="4" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="100" cy="80" r="1.5" fill="currentColor"/>
    <g stroke="currentColor" stroke-width="1">
      <line x1="100" y1="45" x2="100" y2="115"/>
      <line x1="65" y1="80" x2="135" y2="80"/>
      <line x1="75" y1="55" x2="125" y2="105"/>
      <line x1="125" y1="55" x2="75" y2="105"/>
    </g>
    <path d="M135 80 Q145 80 145 70 Q145 60 140 60 L140 130" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6"/>
    <line x1="140" y1="125" x2="140" y2="145" stroke="currentColor" stroke-width="1.5"/>
    <ellipse cx="140" cy="140" rx="4" ry="2" stroke="currentColor" stroke-width="1" fill="none"/>
    </svg>`,

  baldr: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="80" r="22" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <circle cx="100" cy="80" r="15" stroke="currentColor" stroke-width="0.7" fill="none" opacity="0.5"/>
    <g stroke="currentColor" stroke-width="1.5">
      <line x1="100" y1="30" x2="100" y2="50"/>
      <line x1="100" y1="110" x2="100" y2="130"/>
      <line x1="50" y1="80" x2="70" y2="80"/>
      <line x1="130" y1="80" x2="150" y2="80"/>
      <line x1="65" y1="45" x2="80" y2="60"/>
      <line x1="135" y1="45" x2="120" y2="60"/>
      <line x1="65" y1="115" x2="80" y2="100"/>
      <line x1="135" y1="115" x2="120" y2="100"/>
    </g>
    </svg>`,

  tyr: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M85 50 Q80 45 80 55 L80 80 Q80 90 75 90 Q70 90 70 85 L70 70 Q70 65 65 65 Q60 65 60 70 L60 90 Q60 105 75 105 L100 105 Q115 105 115 90 L115 60 Q115 50 110 50 Q105 50 105 55 L105 75"
      stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M115 70 L150 60 L155 70 L150 80 L115 75 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <g stroke="currentColor" stroke-width="0.8">
      <line x1="130" y1="65" x2="132" y2="70"/>
      <line x1="140" y1="63" x2="142" y2="68"/>
      <line x1="135" y1="78" x2="133" y2="73"/>
      <line x1="145" y1="76" x2="143" y2="71"/>
    </g>
    <circle cx="150" cy="65" r="1.5" fill="currentColor"/>
    <path d="M60 105 Q60 115 50 120 Q40 125 50 130 Q60 130 65 125" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <g transform="translate(85,80)" stroke="currentColor" stroke-width="1" fill="none">
      <line x1="0" y1="-8" x2="0" y2="10"/>
      <line x1="0" y1="-8" x2="-5" y2="-3"/>
      <line x1="0" y1="-8" x2="5" y2="-3"/>
    </g>
    </svg>`,

  heimdall: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 130 Q55 120 80 110 Q110 95 145 80 Q165 70 175 50"
      stroke="currentColor" stroke-width="2" fill="none"/>
    <path d="M40 130 Q55 145 80 135 Q110 120 145 105 Q165 95 175 75"
      stroke="currentColor" stroke-width="2" fill="none"/>
    <ellipse cx="175" cy="62" rx="6" ry="12" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="40" cy="130" r="4" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <g stroke="currentColor" stroke-width="0.8" fill="none">
      <ellipse cx="75" cy="123" rx="3" ry="7"/>
      <ellipse cx="105" cy="110" rx="3" ry="8"/>
      <ellipse cx="135" cy="95" rx="3" ry="9"/>
    </g>
    <g stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5">
      <path d="M180 45 Q188 50 188 60"/>
      <path d="M185 35 Q198 45 195 60"/>
    </g>
    </svg>`,

  idunn: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M55 90 L60 140 L140 140 L145 90 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <g stroke="currentColor" stroke-width="0.6" opacity="0.6">
      <line x1="60" y1="100" x2="140" y2="100"/>
      <line x1="62" y1="115" x2="138" y2="115"/>
      <line x1="63" y1="130" x2="137" y2="130"/>
    </g>
    <circle cx="80" cy="80" r="10" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="100" cy="75" r="11" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="120" cy="80" r="10" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <line x1="80" y1="70" x2="80" y2="64" stroke="currentColor" stroke-width="1"/>
    <line x1="100" y1="64" x2="100" y2="58" stroke="currentColor" stroke-width="1"/>
    <line x1="120" y1="70" x2="120" y2="64" stroke="currentColor" stroke-width="1"/>
    <path d="M100 60 Q105 56 108 60" stroke="currentColor" stroke-width="1" fill="none"/>
    <path d="M65 90 Q100 50 135 90" stroke="currentColor" stroke-width="1.2" fill="none"/>
    </svg>`,

  njord: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 130 Q35 120 50 130 Q65 140 80 130 Q95 120 110 130 Q125 140 140 130 Q155 120 170 130 Q185 140 200 130"
      stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M20 138 Q35 128 50 138 Q65 148 80 138 Q95 128 110 138 Q125 148 140 138 Q155 128 170 138"
      stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6"/>
    <path d="M50 110 Q50 100 60 100 L140 100 Q150 100 150 110 L145 125 Q100 130 55 125 Z"
      stroke="currentColor" stroke-width="1.8" fill="none"/>
    <line x1="100" y1="40" x2="100" y2="105" stroke="currentColor" stroke-width="1.5"/>
    <path d="M100 45 L70 50 L75 90 L100 90 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M100 45 L130 50 L125 90 L100 90 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <line x1="85" y1="60" x2="115" y2="60" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
    <line x1="85" y1="75" x2="115" y2="75" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
    <path d="M50 110 Q35 105 30 95 Q40 95 45 105" stroke="currentColor" stroke-width="1.5" fill="none"/>
    </svg>`,

  godGeneric: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 30 L60 45 L60 90 Q60 115 100 135 Q140 115 140 90 L140 45 Z"
      stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M100 40 L70 50 L70 88 Q70 108 100 124 Q130 108 130 88 L130 50 Z"
      stroke="currentColor" stroke-width="0.7" fill="none" opacity="0.5"/>
    <g stroke="currentColor" stroke-width="2" fill="none">
      <line x1="90" y1="65" x2="90" y2="105"/>
      <line x1="90" y1="72" x2="110" y2="68"/>
      <line x1="90" y1="82" x2="110" y2="78"/>
    </g>
    </svg>`,

  fenrir: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 90 L60 70 L75 60 L100 55 L125 60 L140 70 L150 90 L145 110 L130 120 L100 125 L70 120 L55 110 Z"
      stroke="currentColor" stroke-width="1.8" fill="none"/>
    <path d="M65 65 L60 45 L75 55 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M135 65 L140 45 L125 55 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <ellipse cx="80" cy="85" rx="4" ry="3" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <ellipse cx="120" cy="85" rx="4" ry="3" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="80" cy="85" r="1.5" fill="currentColor"/>
    <circle cx="120" cy="85" r="1.5" fill="currentColor"/>
    <path d="M90 95 L100 110 L110 95" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <g stroke="currentColor" stroke-width="1" fill="none">
      <path d="M92 110 L94 118 L96 110"/>
      <path d="M104 110 L106 118 L108 110"/>
    </g>
    <ellipse cx="100" cy="100" rx="3" ry="2" stroke="currentColor" stroke-width="1" fill="none"/>
    <g stroke="currentColor" stroke-width="1" fill="none" opacity="0.7">
      <ellipse cx="60" cy="140" rx="6" ry="3"/>
      <ellipse cx="80" cy="143" rx="6" ry="3"/>
      <ellipse cx="100" cy="140" rx="6" ry="3"/>
      <ellipse cx="120" cy="143" rx="6" ry="3"/>
      <ellipse cx="140" cy="140" rx="6" ry="3"/>
    </g>
    </svg>`,

  jormungandr: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 120 Q40 100 60 90 Q90 80 100 70 Q120 55 140 65 Q160 75 155 95 Q150 115 130 115 Q110 115 105 100 Q105 90 115 90 Q125 90 125 100"
      stroke="currentColor" stroke-width="2" fill="none"/>
    <path d="M130 100 L145 95 L150 105 L135 110 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="143" cy="100" r="1.5" fill="currentColor"/>
    <path d="M150 105 L156 108 L153 112 L156 115" stroke="currentColor" stroke-width="1" fill="none"/>
    <g stroke="currentColor" stroke-width="0.6" opacity="0.5">
      <path d="M60 105 Q65 102 70 105"/>
      <path d="M80 90 Q85 87 90 90"/>
      <path d="M105 80 Q110 77 115 80"/>
    </g>
    <path d="M20 140 Q40 135 60 140 Q80 145 100 140 Q120 135 140 140 Q160 145 180 140"
      stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5"/>
    </svg>`,

  creatureGeneric: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 110 Q50 80 80 75 Q95 70 100 60 Q110 50 130 55 Q150 60 155 75 Q160 90 145 100 Q150 110 145 120 Q135 130 120 125 Q100 130 85 120 Q60 130 40 110 Z"
      stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M100 70 Q90 40 110 35 Q125 35 130 55" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="135" cy="80" r="2" fill="currentColor"/>
    <path d="M40 110 Q25 115 20 125 Q25 130 35 125" stroke="currentColor" stroke-width="1.2" fill="none"/>
    </svg>`,

  mjolnir: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="55" y="30" width="90" height="35" rx="2" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <circle cx="100" cy="47" r="10" stroke="currentColor" stroke-width="1" fill="none"/>
    <path d="M93 41 Q100 48 107 41 Q100 34 93 41" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.7"/>
    <path d="M93 53 Q100 46 107 53 Q100 60 93 53" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.7"/>
    <circle cx="72" cy="47" r="4" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="128" cy="47" r="4" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6"/>
    <line x1="55" y1="40" x2="145" y2="40" stroke="currentColor" stroke-width="0.5" opacity="0.5"/>
    <line x1="55" y1="55" x2="145" y2="55" stroke="currentColor" stroke-width="0.5" opacity="0.5"/>
    <rect x="83" y="65" width="34" height="7" rx="1" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <rect x="92" y="72" width="16" height="65" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <line x1="88" y1="95" x2="112" y2="95" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
    <line x1="88" y1="115" x2="112" y2="115" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
    <circle cx="100" cy="142" r="3" stroke="currentColor" stroke-width="1.2" fill="none"/>
    </svg>`,

  gungnir: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="100" y1="40" x2="100" y2="145" stroke="currentColor" stroke-width="2.5"/>
    <path d="M100 15 L85 50 L100 60 L115 50 Z" stroke="currentColor" stroke-width="2" fill="none"/>
    <line x1="100" y1="15" x2="100" y2="55" stroke="currentColor" stroke-width="0.6" opacity="0.6"/>
    <line x1="92" y1="28" x2="92" y2="42" stroke="currentColor" stroke-width="0.6"/>
    <line x1="108" y1="28" x2="108" y2="42" stroke="currentColor" stroke-width="0.6"/>
    <ellipse cx="100" cy="65" rx="8" ry="2.5" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <ellipse cx="100" cy="73" rx="8" ry="2.5" stroke="currentColor" stroke-width="1" fill="none" opacity="0.7"/>
    <line x1="92" y1="95" x2="108" y2="95" stroke="currentColor" stroke-width="0.8"/>
    <line x1="92" y1="120" x2="108" y2="120" stroke="currentColor" stroke-width="0.8"/>
    </svg>`,

  artifactGeneric: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="80" r="35" stroke="currentColor" stroke-width="2" fill="none"/>
    <circle cx="100" cy="80" r="28" stroke="currentColor" stroke-width="0.6" fill="none" opacity="0.5"/>
    <path d="M100 55 L88 75 L100 90 L112 75 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M88 75 L100 65 L112 75" stroke="currentColor" stroke-width="0.8" opacity="0.6" fill="none"/>
    <g fill="currentColor" opacity="0.6">
      <circle cx="100" cy="45" r="1.5"/><circle cx="100" cy="115" r="1.5"/>
      <circle cx="65" cy="80" r="1.5"/><circle cx="135" cy="80" r="1.5"/>
    </g>
    </svg>`,

  // ── ARTIFACT-SPECIFIC SVGs ───────────────────────────────

  draupnir: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="75" r="38" stroke="currentColor" stroke-width="3" fill="none"/>
    <circle cx="100" cy="75" r="28" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.6"/>
    <circle cx="100" cy="75" r="18" stroke="currentColor" stroke-width="0.7" fill="none" opacity="0.35"/>
    <g stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.7">
      <circle cx="62" cy="118" r="12"/>
      <circle cx="78" cy="130" r="10"/>
      <circle cx="96" cy="135" r="9"/>
      <circle cx="115" cy="130" r="10"/>
      <circle cx="131" cy="118" r="12"/>
      <circle cx="148" cy="110" r="9"/>
      <circle cx="50" cy="110" r="9"/>
    </g>
    <path d="M100 37 Q108 45 100 52 Q92 45 100 37Z" stroke="currentColor" stroke-width="1" fill="none"/>
    </svg>`,

  gleipnir: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 80 Q60 55 100 80 Q140 105 170 80" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M30 90 Q60 65 100 90 Q140 115 170 90" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.5"/>
    <path d="M30 70 Q60 45 100 70 Q140 95 170 70" stroke="currentColor" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.3"/>
    <circle cx="30" cy="80" r="5" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="170" cy="80" r="5" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <g font-family="serif" fill="currentColor" opacity="0.5">
      <text x="50" y="45" font-size="9" text-anchor="middle">шум кішки</text>
      <text x="150" y="45" font-size="9" text-anchor="middle">борода жінки</text>
    </g>
    <path d="M50 135 Q100 120 150 135" stroke="currentColor" stroke-width="0.6" fill="none" opacity="0.3"/>
    </svg>`,

  brisingamen: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 55 Q100 100 150 55" stroke="currentColor" stroke-width="2" fill="none"/>
    <g stroke="currentColor" fill="none">
      <circle cx="50"  cy="55" r="8" stroke-width="1.5"/>
      <circle cx="67"  cy="68" r="9" stroke-width="1.5"/>
      <circle cx="84"  cy="80" r="10" stroke-width="1.5"/>
      <circle cx="100" cy="86" r="11" stroke-width="2"/>
      <circle cx="116" cy="80" r="10" stroke-width="1.5"/>
      <circle cx="133" cy="68" r="9" stroke-width="1.5"/>
      <circle cx="150" cy="55" r="8" stroke-width="1.5"/>
    </g>
    <g fill="currentColor" opacity="0.55">
      <circle cx="50" cy="55" r="3.5"/>
      <circle cx="67" cy="68" r="4"/>
      <circle cx="84" cy="80" r="4.5"/>
      <circle cx="100" cy="86" r="5"/>
      <circle cx="116" cy="80" r="4.5"/>
      <circle cx="133" cy="68" r="4"/>
      <circle cx="150" cy="55" r="3.5"/>
    </g>
    <path d="M50 55 Q40 50 35 45" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M150 55 Q160 50 165 45" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="35" cy="43" r="4" stroke="currentColor" stroke-width="1" fill="none"/>
    <circle cx="165" cy="43" r="4" stroke="currentColor" stroke-width="1" fill="none"/>
    </svg>`,

  skidbladnir: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 115 Q35 100 50 100 L150 100 Q165 100 170 115 L155 130 Q100 138 45 130 Z"
      stroke="currentColor" stroke-width="1.8" fill="none"/>
    <line x1="100" y1="35" x2="100" y2="102" stroke="currentColor" stroke-width="1.8"/>
    <path d="M100 38 L68 52 L72 95 L100 95 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M100 38 L132 52 L128 95 L100 95 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <line x1="82" y1="58" x2="118" y2="58" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
    <line x1="80" y1="73" x2="120" y2="73" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
    <g stroke="currentColor" stroke-width="0.8" opacity="0.5">
      <line x1="50" y1="102" x2="52" y2="130"/>
      <line x1="70" y1="101" x2="71" y2="132"/>
      <line x1="90" y1="100" x2="90" y2="133"/>
      <line x1="110" y1="100" x2="110" y2="133"/>
      <line x1="130" y1="101" x2="129" y2="132"/>
      <line x1="150" y1="102" x2="148" y2="130"/>
    </g>
    </svg>`,

  gullinbursti: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M55 100 L60 75 L80 65 L120 65 L140 75 L145 100 L130 115 L70 115 Z"
      stroke="currentColor" stroke-width="1.8" fill="none"/>
    <ellipse cx="75" cy="85" rx="5" ry="4" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <ellipse cx="125" cy="85" rx="5" ry="4" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="75" cy="85" r="2" fill="currentColor"/>
    <circle cx="125" cy="85" r="2" fill="currentColor"/>
    <path d="M145 100 L160 90 L165 100 L155 108" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <g stroke="currentColor" stroke-width="1" fill="none" opacity="0.7">
      <line x1="65" y1="135" x2="72" y2="115"/>
      <line x1="80" y1="138" x2="84" y2="115"/>
      <line x1="120" y1="138" x2="116" y2="115"/>
      <line x1="135" y1="135" x2="128" y2="115"/>
    </g>
    <g stroke="currentColor" stroke-width="0.7" opacity="0.65">
      <line x1="80" y1="65" x2="82" y2="42"/><line x1="88" y1="65" x2="88" y2="40"/>
      <line x1="96" y1="65" x2="94" y2="38"/><line x1="104" y1="65" x2="106" y2="38"/>
      <line x1="112" y1="65" x2="112" y2="40"/><line x1="120" y1="65" x2="118" y2="42"/>
    </g>
    <circle cx="100" cy="75" r="4" stroke="currentColor" stroke-width="1" fill="none" opacity="0.7"/>
    </svg>`,

  bifrost: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 140 Q60 60 180 80" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M22 147 Q62 67 182 87" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M18 133 Q58 53 178 73" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M16 126 Q56 46 176 66" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.35"/>
    <circle cx="20" cy="140" r="7" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.6"/>
    <circle cx="180" cy="80" r="9" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.6"/>
    <circle cx="180" cy="80" r="5" fill="currentColor" opacity="0.4"/>
    <path d="M175 60 L180 80 L165 72 Z" stroke="currentColor" stroke-width="1" fill="none"/>
    </svg>`,

  hlidskjalf: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 130 L60 60 Q60 48 70 45 L100 40 L130 45 Q140 48 140 60 L140 130"
      stroke="currentColor" stroke-width="1.8" fill="none"/>
    <path d="M55 130 L145 130" stroke="currentColor" stroke-width="2"/>
    <path d="M65 60 L135 60" stroke="currentColor" stroke-width="1.2" opacity="0.7"/>
    <path d="M65 80 Q100 73 135 80" stroke="currentColor" stroke-width="1" fill="none" opacity="0.5"/>
    <line x1="80" y1="130" x2="80" y2="60" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <line x1="120" y1="130" x2="120" y2="60" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <path d="M60 60 L40 70 L40 90 L60 90" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M140 60 L160 70 L160 90 L140 90" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="100" cy="52" r="6" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="100" cy="52" r="2" fill="currentColor" opacity="0.8"/>
    <path d="M92 42 Q100 36 108 42" stroke="currentColor" stroke-width="1.2" fill="none"/>
    </svg>`,

  gjallhorn: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 100 Q50 95 65 88 Q85 78 130 65 Q155 58 175 48"
      stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M40 108 Q50 103 65 96 Q85 86 130 73 Q155 66 175 56"
      stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M40 100 Q35 104 30 104 Q22 104 22 115 Q22 130 40 130 Q52 130 55 116 L55 92 Q52 88 40 100Z"
      stroke="currentColor" stroke-width="1.5" fill="none"/>
    <ellipse cx="175" cy="52" rx="8" ry="18" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <g stroke="currentColor" stroke-width="0.8" opacity="0.5">
      <path d="M185 48 Q196 50 196 62"/><path d="M187 40 Q200 44 198 58"/>
    </g>
    <g stroke="currentColor" stroke-width="0.7" opacity="0.6">
      <line x1="75" y1="84" x2="78" y2="79"/>
      <line x1="95" y1="77" x2="98" y2="72"/>
      <line x1="115" y1="70" x2="118" y2="65"/>
      <line x1="135" y1="63" x2="138" y2="58"/>
    </g>
    </svg>`,

  mead_of_poetry: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M65 45 L55 130 Q55 140 65 140 L135 140 Q145 140 145 130 L135 45 Z"
      stroke="currentColor" stroke-width="1.8" fill="none"/>
    <path d="M60 55 L140 55" stroke="currentColor" stroke-width="1"/>
    <ellipse cx="100" cy="45" rx="36" ry="8" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M75 75 Q100 65 125 75 Q110 110 100 115 Q90 110 75 75" stroke="currentColor" stroke-width="1" fill="none" opacity="0.5"/>
    <g stroke="currentColor" stroke-width="0.6" opacity="0.5">
      <path d="M68 80 Q100 72 132 80"/>
      <path d="M66 95 Q100 87 134 95"/>
      <path d="M65 110 Q100 102 135 110"/>
    </g>
    <circle cx="100" cy="45" r="3" fill="currentColor" opacity="0.6"/>
    <g stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.7">
      <line x1="88" y1="25" x2="88" y2="37"/>
      <line x1="100" y1="22" x2="100" y2="36"/>
      <line x1="112" y1="25" x2="112" y2="37"/>
    </g>
    </svg>`,

  // ── CREATURE-SPECIFIC SVGs ───────────────────────────────

  nidhogg: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 110 Q30 80 60 70 Q80 65 90 50 Q100 35 120 40 Q140 45 150 65 Q160 85 145 100 Q130 115 110 110 Q95 105 95 90 Q95 80 108 80"
      stroke="currentColor" stroke-width="2.5" fill="none"/>
    <path d="M105 75 L125 68 L130 80 L112 88 Z" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <circle cx="122" cy="72" r="2" fill="currentColor"/>
    <path d="M130 82 L138 87 L134 93 L138 98" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M90 55 L84 38 L92 35 L96 50" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M110 48 L108 30 L118 30 L116 46" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <g stroke="currentColor" stroke-width="0.7" fill="none" opacity="0.6">
      <path d="M50 90 Q55 87 60 90"/><path d="M70 78 Q75 75 80 78"/>
      <path d="M95 68 Q100 65 105 68"/>
    </g>
    <path d="M20 130 Q50 125 80 130 Q110 135 140 130 Q160 127 180 130"
      stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.4"/>
    </svg>`,

  garm: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 95 L55 70 L70 58 L100 54 L130 58 L145 70 L150 95 L140 115 L100 122 L60 115 Z"
      stroke="currentColor" stroke-width="1.8" fill="none"/>
    <path d="M62 65 L56 44 L72 54 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M138 65 L144 44 L128 54 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <ellipse cx="76" cy="85" rx="6" ry="4" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <ellipse cx="124" cy="85" rx="6" ry="4" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="76" cy="85" r="2.5" fill="currentColor"/>
    <circle cx="124" cy="85" r="2.5" fill="currentColor"/>
    <path d="M82 100 L100 118 L118 100" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M95 118 L93 128 L97 128"/><path d="M105 118 L103 128 L107 128"/>
    <g stroke="currentColor" stroke-width="1.2" opacity="0.7">
      <line x1="60" y1="122" x2="65" y2="142"/>
      <line x1="75" y1="126" x2="78" y2="145"/>
      <line x1="125" y1="126" x2="122" y2="145"/>
      <line x1="140" y1="122" x2="135" y2="142"/>
    </g>
    </svg>`,

  sleipnir: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 65 L80 52 L120 50 L148 62 L152 80 L140 95 L100 100 L60 92 L48 78 Z"
      stroke="currentColor" stroke-width="1.8" fill="none"/>
    <path d="M120 50 L132 38 L140 42 L130 54" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <ellipse cx="130" cy="60" rx="5" ry="4" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="130" cy="60" r="2" fill="currentColor"/>
    <path d="M48 78 L35 88 L30 98" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <g stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.9">
      <line x1="65" y1="92" x2="58" y2="118"/><line x1="65" y1="118" x2="58" y2="130"/>
      <line x1="78" y1="98" x2="74" y2="124"/><line x1="74" y1="124" x2="70" y2="136"/>
      <line x1="95" y1="100" x2="93" y2="126"/><line x1="93" y1="126" x2="90" y2="138"/>
      <line x1="112" y1="100" x2="112" y2="126"/><line x1="112" y1="126" x2="112" y2="138"/>
      <line x1="126" y1="97" x2="130" y2="123"/><line x1="130" y1="123" x2="132" y2="135"/>
      <line x1="138" y1="93" x2="144" y2="119"/><line x1="144" y1="119" x2="148" y2="131"/>
      <line x1="148" y1="86" x2="156" y2="112"/><line x1="156" y1="112" x2="160" y2="124"/>
      <line x1="152" y1="78" x2="162" y2="104"/><line x1="162" y1="104" x2="168" y2="116"/>
    </g>
    </svg>`,

  ratatoskr: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="85" rx="30" ry="22" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <circle cx="100" cy="58" r="14" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M88 50 L82 36 L90 40 Z" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M112 50 L118 36 L110 40 Z" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <ellipse cx="94" cy="55" rx="4" ry="3" stroke="currentColor" stroke-width="1" fill="none"/>
    <ellipse cx="106" cy="55" rx="4" ry="3" stroke="currentColor" stroke-width="1" fill="none"/>
    <circle cx="94" cy="55" r="1.5" fill="currentColor"/>
    <circle cx="106" cy="55" r="1.5" fill="currentColor"/>
    <path d="M96 64 L100 69 L104 64" stroke="currentColor" stroke-width="1" fill="none"/>
    <path d="M90 90 Q80 105 60 115 Q50 120 40 130 Q70 110 90 100"
      stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M90 90 Q78 112 55 125" stroke="currentColor" stroke-width="1" fill="none" opacity="0.4"/>
    <g stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.8">
      <line x1="75" y1="95" x2="65" y2="105"/>
      <line x1="82" y1="98" x2="74" y2="110"/>
      <line x1="88" y1="103" x2="82" y2="116"/>
    </g>
    </svg>`,

  hraesvelgr: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="75" rx="22" ry="18" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <path d="M78 68 Q40 45 20 30 Q50 42 75 60" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M78 68 Q45 35 15 15 Q40 30 72 55" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.5"/>
    <path d="M122 68 Q160 45 180 30 Q150 42 125 60" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M122 68 Q155 35 185 15 Q160 30 128 55" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.5"/>
    <path d="M90 60 L84 44 L95 50 Z" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M110 60 L116 44 L105 50 Z" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <ellipse cx="91" cy="72" rx="4" ry="3" stroke="currentColor" stroke-width="1" fill="none"/>
    <ellipse cx="109" cy="72" rx="4" ry="3" stroke="currentColor" stroke-width="1" fill="none"/>
    <circle cx="91" cy="72" r="1.5" fill="currentColor"/>
    <circle cx="109" cy="72" r="1.5" fill="currentColor"/>
    <path d="M92 90 L96 108 L104 108 L108 90" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M96 108 L94 125" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M104 108 L106 125" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <g stroke="currentColor" stroke-width="0.6" opacity="0.5">
      <path d="M25 35 Q30 38 28 45"/><path d="M42 28 Q46 32 43 40"/>
      <path d="M175 35 Q170 38 172 45"/><path d="M158 28 Q154 32 157 40"/>
    </g>
    </svg>`,

  surt: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M90 130 L88 95 L75 80 L80 65 L95 58 L100 45 L105 58 L120 65 L125 80 L112 95 L110 130 Z"
      stroke="currentColor" stroke-width="1.8" fill="none"/>
    <path d="M75 80 L55 88 L45 80 L50 68 L65 65" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M125 80 L145 88 L155 80 L150 68 L135 65" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M100 45 Q95 28 100 18 Q108 28 100 45 Q97 32 102 22 Q107 32 100 45"
      stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M92 52 Q86 38 90 28 Q96 36 92 52" stroke="currentColor" stroke-width="1" fill="none" opacity="0.7"/>
    <path d="M108 52 Q114 38 110 28 Q104 36 108 52" stroke="currentColor" stroke-width="1" fill="none" opacity="0.7"/>
    <ellipse cx="91" cy="78" rx="5" ry="4" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <ellipse cx="109" cy="78" rx="5" ry="4" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="91" cy="78" r="2" fill="currentColor"/>
    <circle cx="109" cy="78" r="2" fill="currentColor"/>
    <line x1="90" y1="130" x2="88" y2="148" stroke="currentColor" stroke-width="2"/>
    <line x1="110" y1="130" x2="112" y2="148" stroke="currentColor" stroke-width="2"/>
    </svg>`,

  naglfar: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 110 Q30 95 50 92 L155 92 Q175 95 178 110 L162 128 Q100 136 38 128 Z"
      stroke="currentColor" stroke-width="1.8" fill="none"/>
    <path d="M20 120 Q100 115 180 120" stroke="currentColor" stroke-width="0.6" fill="none" opacity="0.5"/>
    <line x1="100" y1="30" x2="100" y2="94" stroke="currentColor" stroke-width="1.8"/>
    <path d="M100 35 L68 48 L72 88 L100 88 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M100 35 L132 48 L128 88 L100 88 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <g fill="currentColor" opacity="0.45">
      <circle cx="55"  cy="100" r="2.5"/><circle cx="70"  cy="96" r="2"/>
      <circle cx="85"  cy="93" r="2.5"/><circle cx="100" cy="92" r="2"/>
      <circle cx="115" cy="93" r="2.5"/><circle cx="130" cy="96" r="2"/>
      <circle cx="145" cy="100" r="2.5"/><circle cx="160" cy="105" r="2"/>
      <circle cx="40"  cy="106" r="2"/>
    </g>
    <path d="M162 128 L168 122 L175 128 L165 134" stroke="currentColor" stroke-width="1.2" fill="none"/>
    </svg>`,

  audhumla: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="95" rx="55" ry="32" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <circle cx="145" cy="80" r="18" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M148 70 L155 55 L162 58 L155 73" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <ellipse cx="145" cy="82" rx="5" ry="4" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="145" cy="82" r="2" fill="currentColor"/>
    <g stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.8">
      <line x1="65"  cy="127" x1="65"  y1="127" x2="62"  y2="145"/>
      <line x1="82"  y1="127" x2="80"  y2="145"/>
      <line x1="100" y1="127" x2="100" y2="145"/>
      <line x1="118" y1="127" x2="120" y2="145"/>
      <line x1="135" y1="127" x2="138" y2="145"/>
    </g>
    <path d="M65 95 Q68 82 75 78 Q82 75 90 78" stroke="currentColor" stroke-width="1" fill="none" opacity="0.5"/>
    <g stroke="currentColor" stroke-width="0.8" opacity="0.5">
      <line x1="48" y1="95" x2="38" y2="105"/>
      <line x1="52" y1="106" x2="42" y2="116"/>
      <line x1="60" y1="112" x2="52" y2="122"/>
    </g>
    </svg>`,

  ymir: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M80 50 L72 35 L90 42 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M120 50 L128 35 L110 42 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="100" cy="65" r="22" stroke="currentColor" stroke-width="2" fill="none"/>
    <ellipse cx="92" cy="60" rx="5" ry="4" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <ellipse cx="108" cy="60" rx="5" ry="4" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="92" cy="60" r="2" fill="currentColor"/>
    <circle cx="108" cy="60" r="2" fill="currentColor"/>
    <path d="M88 72 Q100 80 112 72" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M78 88 L72 140" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M122 88 L128 140" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M78 88 L122 88" stroke="currentColor" stroke-width="2" fill="none"/>
    <path d="M82 88 L60 100" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M118 88 L140 100" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M60 100 L50 130" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <path d="M140 100 L150 130" stroke="currentColor" stroke-width="1.8" fill="none"/>
    </svg>`,

  heidrun: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="100" rx="42" ry="28" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <circle cx="140" cy="85" r="18" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M142 70 L150 52 L143 56 Q148 48 138 50 Q144 60 142 70" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M128 76 L118 60 L125 62 Q122 50 115 54 Q120 65 128 76" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <ellipse cx="142" cy="88" rx="5" ry="4" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="142" cy="88" r="2" fill="currentColor"/>
    <g stroke="currentColor" stroke-width="1.5" fill="none">
      <line x1="72"  y1="128" x2="68"  y2="148"/>
      <line x1="88"  y1="128" x2="86"  y2="148"/>
      <line x1="112" y1="128" x2="114" y2="148"/>
      <line x1="128" y1="128" x2="132" y2="148"/>
    </g>
    <path d="M60 100 L50 88 Q46 80 52 78 Q56 85 60 100" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M100 72 Q100 55 100 40 Q104 48 100 55 Q108 44 110 35"
      stroke="currentColor" stroke-width="1" fill="none" opacity="0.55"/>
    </svg>`,

  // ── MISSING GOD SVGs (for gods without specific art) ─────

  bragi: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M70 100 Q75 60 100 50 Q125 60 130 100" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="100" cy="45" r="16" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M86 38 Q100 28 114 38" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M82 52 Q80 62 78 70" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M118 52 Q120 62 122 70" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M78 70 L70 100 L68 120 L72 125 L80 120 L82 100 Q88 90 100 90 Q112 90 118 100 L120 120 L128 125 L132 120 L130 100 L122 70"
      stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M40 115 Q50 108 65 112 Q70 118 72 125" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M35 118 L38 130 Q40 138 50 140 L65 138 Q72 136 72 128"
      stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M35 120 Q25 122 22 132 Q22 140 30 142 L35 140" stroke="currentColor" stroke-width="1" fill="none" opacity="0.7"/>
    </svg>`,

  vidar: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 60 L70 45 L100 40 L130 45 L140 60 L140 100 Q140 115 100 120 Q60 115 60 100 Z"
      stroke="currentColor" stroke-width="1.8" fill="none"/>
    <ellipse cx="85" cy="72" rx="6" ry="5" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <ellipse cx="115" cy="72" rx="6" ry="5" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="85" cy="72" r="2.5" fill="currentColor"/>
    <circle cx="115" cy="72" r="2.5" fill="currentColor"/>
    <path d="M88 85 Q100 93 112 85" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M60 100 L50 120 L48 145 Q60 145 65 140 L68 120 L76 115"
      stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M140 100 L150 120 L152 145 Q140 145 135 140 L132 120 L124 115"
      stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M48 128 L45 148 L65 148 L62 128" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M155 128 L158 148 L138 148 L138 128" stroke="currentColor" stroke-width="1.5" fill="none"/>
    </svg>`,

  vali: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="55" r="20" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M80 52 Q85 45 90 48" stroke="currentColor" stroke-width="1" fill="none"/>
    <path d="M120 52 Q115 45 110 48" stroke="currentColor" stroke-width="1" fill="none"/>
    <path d="M80 75 L75 100 L72 140" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <path d="M120 75 L125 100 L128 140" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <path d="M80 75 L120 75" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M80 85 L55 95 L45 120" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M120 85 L145 95 L155 120" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M145 70 Q160 55 170 65 Q165 80 148 82" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M148 82 L145 90 L160 95" stroke="currentColor" stroke-width="1.2" fill="none"/>
    </svg>`,

  forseti: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="50" r="22" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M90 44 Q100 36 110 44" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M80 72 L60 130" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <path d="M120 72 L140 130" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <path d="M80 72 L120 72" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M80 90 L55 88" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M120 90 L145 88" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M55 88 L40 105 L55 118 L70 105 L55 88" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M145 88 L160 105 L145 118 L130 105 L145 88" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M70 135 Q100 145 130 135" stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.5"/>
    </svg>`,

  ullr: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 110 L100 30 L160 110" stroke="currentColor" stroke-width="2" fill="none"/>
    <path d="M45 115 L160 115" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="40" cy="113" r="4" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="160" cy="113" r="4" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M40 113 Q100 105 160 113" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M100 30 L100 120" stroke="currentColor" stroke-width="0.8" opacity="0.4" fill="none"/>
    <path d="M55 95 Q100 88 145 95" stroke="currentColor" stroke-width="0.7" fill="none" opacity="0.5"/>
    <line x1="100" y1="30" x2="96" y2="45" stroke="currentColor" stroke-width="1"/>
    <line x1="100" y1="30" x2="104" y2="45" stroke="currentColor" stroke-width="1"/>
    <path d="M140 55 L150 50 L145 60 L160 58 L148 65 L155 75 L142 70 L140 82 L134 73 L126 80 L128 68 L115 65 L128 60 L125 48 Z"
      stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.7"/>
    </svg>`,

  hödr: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="55" r="22" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <line x1="78" y1="52" x2="88" y2="52" stroke="currentColor" stroke-width="2" opacity="0.6"/>
    <line x1="112" y1="52" x2="122" y2="52" stroke="currentColor" stroke-width="2" opacity="0.6"/>
    <path d="M80 77 L75 115 L70 140" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <path d="M120 77 L125 115 L130 140" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <path d="M80 77 L120 77" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M80 88 L55 100" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M120 88 L145 100" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M55 100 L50 130" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M145 100 L150 130" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M128 42 L145 32 L148 38 L138 45 L155 40 L152 48 L138 50"
      stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.7"/>
    </svg>`,

  hermod: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="50" r="18" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M82 65 L78 95 L72 140" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <path d="M118 65 L122 95 L128 140" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <path d="M82 65 L118 65" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M82 78 L55 72 L45 88 L55 100 L75 92" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M118 78 L145 72 L155 88 L145 100 L125 92" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M100 68 L100 85 L85 95 Q75 108 78 120" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M100 90 L130 78" stroke="currentColor" stroke-width="1.2" opacity="0.6" fill="none"/>
    <path d="M155 88 L168 80 L172 90 L160 98 L175 100 L172 110" stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.7"/>
    </svg>`,

  mimir: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="65" r="28" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <circle cx="100" cy="65" r="20" stroke="currentColor" stroke-width="0.7" fill="none" opacity="0.4"/>
    <ellipse cx="90" cy="58" rx="6" ry="4.5" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <ellipse cx="110" cy="58" rx="6" ry="4.5" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="90" cy="58" r="2.5" fill="currentColor"/>
    <circle cx="110" cy="58" r="2.5" fill="currentColor" opacity="0.3"/>
    <line x1="95" y1="58" x2="91" y2="52" stroke="currentColor" stroke-width="1" opacity="0.5"/>
    <path d="M85 76 Q100 85 115 76" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M85 100 Q75 110 72 125 Q75 138 86 140 Q98 142 100 130 L100 94" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M115 100 Q125 110 128 125 Q125 138 114 140 Q102 142 100 130" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M65 70 Q55 75 52 85 Q55 95 65 93" stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.6"/>
    </svg>`,

  skadi: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="100" y1="15" x2="100" y2="130" stroke="currentColor" stroke-width="1.8"/>
    <path d="M100 20 L82 65 L100 80 L118 65 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <ellipse cx="100" cy="90" rx="8" ry="2.5" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <line x1="40" y1="118" x2="65" y2="108" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="65" y1="108" x2="135" y2="108" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="135" y1="108" x2="160" y2="118" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="40" y1="124" x2="65" y2="114" stroke="currentColor" stroke-width="1.5" opacity="0.5" stroke-linecap="round"/>
    <line x1="65" y1="114" x2="135" y2="114" stroke="currentColor" stroke-width="1.5" opacity="0.5" stroke-linecap="round"/>
    <line x1="135" y1="114" x2="160" y2="124" stroke="currentColor" stroke-width="1.5" opacity="0.5" stroke-linecap="round"/>
    <path d="M75 132 L82 148 L100 148 L118 148 L125 132"
      stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M68 130 L62 148 M132 130 L138 148" stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.6"/>
    </svg>`,

  nanna: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="50" r="22" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M88 44 Q100 36 112 44" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M85 72 L82 110 L80 140" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M115 72 L118 110 L120 140" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M85 72 L115 72" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M85 85 L65 90" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M115 85 L135 90" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M65 90 L60 120" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M135 90 L140 120" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="52" cy="48" r="10" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="52" cy="48" r="6" stroke="currentColor" stroke-width="0.7" fill="none" opacity="0.5"/>
    <path d="M46 38 Q52 30 58 38" stroke="currentColor" stroke-width="1" fill="none"/>
    </svg>`,

  sif: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="48" r="20" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M82 60 Q72 80 68 120 Q66 140 75 145 Q85 148 90 135 L95 120 Q98 130 100 145 Q102 130 105 120 L110 135 Q115 148 125 145 Q134 140 132 120 Q128 80 118 60"
      stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M80 68 Q72 85 70 108" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.4"/>
    <path d="M90 65 Q85 82 84 105" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.4"/>
    <path d="M100 64 Q100 82 100 105" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.4"/>
    <path d="M85 72 L55 85 L50 100" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M115 72 L145 85 L150 100" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M50 100 L45 125" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M150 100 L155 125" stroke="currentColor" stroke-width="1.5" fill="none"/>
    </svg>`,
};

// ═══════════════════════════════════════════════════════════
// REAL HISTORICAL IMAGES (Wikimedia Commons, public domain)
// Special:FilePath resolves the file by exact name — no hashes.
// On load failure the <img> removes itself and the SVG shows.
// ═══════════════════════════════════════════════════════════

// Section / hero / detail images
var _SECTION_IMG = {
  // Hero: Odin the Wanderer — Georg von Rosen, 1886
  heroMjolnir: 'Georg von Rosen - Oden som vandringsman, 1886 (Odin, the Wanderer).jpg',
  // Nine Worlds: The Ash Yggdrasil — Friedrich Wilhelm Heine, 1886
  yggdrasil:   'The Ash Yggdrasil.jpg',
  // Pantheon: Walhall — Emil Doepler, c. 1905
  aegishjalmur:'Walhall by Emil Doepler.jpg',
  // Creatures: Thor and the Midgard Serpent — Emil Doepler, 1905
  serpent:     'Thor und die Midgardsschlange.jpg',
  // Runes: Rök runestone, Sweden (photo)
  runestone:   'Rökstenen.jpg',
  // Artifacts: drawing of the Mjölnir amulet from Skåne
  artifact:    'Mjollnir.png',
  // Chronology / Ragnarök: Battle of the Doomed Gods — F. W. Heine, 1882
  scroll:      'Kampf der untergehenden Götter.jpg',
  // Genealogy: Yggdrasil from 17th c. Icelandic manuscript AM 738
  tree:        'Yggdrasil.jpg',
  // Sources: Snorri Sturluson — Christian Krohg, 1899
  book:        'Snorre Sturluson-Christian Krohg.jpg'
};

// Gods & creatures card images
var _CARD_IMG = {
  // Georg von Rosen — Odin the Wanderer (1886)
  odin:     'Georg von Rosen - Oden som vandringsman, 1886 (Odin, the Wanderer).jpg',
  // Mårten Eskil Winge — Thor's Fight with the Giants (1872)
  thor:     "Mårten Eskil Winge - Tor's Fight with the Giants - Google Art Project.jpg",
  // W. G. Collingwood — Loki Taunts Bragi (1908)
  loki:     'Loki taunts Bragi.jpg',
  // Johannes Gehrts — Freya (1901)
  freyja:   'Freyja (1901) by Johannes Gehrts.jpg',
  // Johannes Gehrts — Freyr (1901)
  freyr:    'Freyr by Johannes Gehrts.jpg',
  // John Charles Dollman — Frigga Spinning the Clouds (c. 1909)
  frigg:    'Frigga Spinning the Clouds.jpg',
  // Elmer Boyd Smith — Each arrow overshot his head (Baldr, 1902)
  baldr:    'Each arrow overshot his head (1902) by Elmer Boyd Smith.jpg',
  // John Bauer — Tyr and Fenrir (1911)
  tyr:      'Tyr and Fenrir-John Bauer.jpg',
  // Emil Doepler — Heimdall at the rainbow bridge (c. 1905)
  heimdall: 'Heimdall an der Himmelsbrücke.jpg',
  // J. Doyle Penrose — Idun and the Apples (1890)
  idunn:    'Idun and the Apples.jpg',
  // F. W. Heine — Njörðr and Skaði on the way to Nóatún (1882)
  njord:    'Njord and Skadi on the way to Noatun.jpg',
  // Emil Doepler — Odin and Fenris, Freyr and Surt (1905)
  fenrir:   'Odin und Fenriswolf Freyr und Surt.jpg',
  // Emil Doepler — Thor and the Midgard Serpent (1905)
  jormungandr: 'Thor und die Midgardsschlange.jpg',
  // Nils Blommér — Freyja Seeking her Husband (1852)
  freyja2:  'Nils Blommer - Freyjas Goldene Tranen.jpg',
  // W. G. Collingwood — The Ride to Hel (1908) — Sleipnir
  sleipnir: 'The Ride to Hel (1908) by W. G. Collingwood.jpg',
  // Nicolai Abildgaard — Audumla (1790)
  audhumla: 'Audumla (1790) by Nicolai Abildgaard.jpg',
  // Lorenz Frølich — Surt (1895)
  surt:     'Surtr (1895) by Lorenz Frølich.jpg',
  // Lorenz Frølich — Nidhogg (dragon on tree)
  nidhogg:  'Nidhoggr-Lorenz-Froelich.jpg',
  // W. G. Collingwood — Skadi (1908)
  skadi:    'Skade bids farewell to the gods (1908) by W. G. Collingwood.jpg',
  // Lorenz Frølich — Bragi (1895)
  bragi:    'Bragi (1895) by Lorenz Frølich.jpg',
  // Lorenz Frølich — Vidar (1895)
  vidar:    'Vidar kills Fenris Wolf (1895) by Lorenz Frølich.jpg',
  // F. W. Heine — Höðr (1882)
  hödr:     'Baldr dead - Christoffer Wilhelm Eckersberg.jpg',
  // Lorenz Frølich — Forseti (1895)
  forseti:  'Forseti (1895) by Lorenz Frølich.jpg',
};

Object.keys(_SECTION_IMG).forEach(function(k){
  if (ART[k] !== undefined) ART[k] = _artImg(_wmURL(_SECTION_IMG[k]), ART[k]);
});
Object.keys(_CARD_IMG).forEach(function(k){
  var svgFallback = ART.cards[k] || ART.cards.godGeneric;
  ART.cards[k] = _artImg(_wmURL(_CARD_IMG[k]), svgFallback);
});

if (typeof module !== 'undefined') module.exports = { ART };
