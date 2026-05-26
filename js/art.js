// ═══════════════════════════════════════════════════════════
// SVG ART — Stylized Norse mythology illustrations
// In the style of woodcut / medieval manuscript
// All inline SVG — no external dependencies
// ═══════════════════════════════════════════════════════════

const ART = {};

// ─── ГОЛОВНИЙ МОЛОТ (hero) ───────────────────────────────
ART.heroMjolnir = `
<svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <defs>
    <pattern id="knotwork1" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
      <path d="M0 7 Q3.5 0 7 7 Q10.5 14 14 7" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.5"/>
    </pattern>
  </defs>
  <!-- Hammer head -->
  <path d="M30 35 L170 35 Q178 35 178 43 L178 90 Q178 98 170 98 L30 98 Q22 98 22 90 L22 43 Q22 35 30 35Z"
    stroke="currentColor" stroke-width="1.5" fill="url(#knotwork1)"/>
  <!-- Outer frame lines -->
  <line x1="22" y1="50" x2="178" y2="50" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
  <line x1="22" y1="83" x2="178" y2="83" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
  <!-- Center knot ornament -->
  <circle cx="100" cy="66" r="14" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <circle cx="100" cy="66" r="9" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6"/>
  <path d="M100 52 Q108 60 100 68 Q92 60 100 52Z M100 64 Q108 72 100 80 Q92 72 100 64Z"
    stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.7"/>
  <!-- Side ornaments -->
  <path d="M50 60 Q56 66 50 72 Q44 66 50 60Z" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6"/>
  <path d="M150 60 Q156 66 150 72 Q144 66 150 72Z" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6"/>
  <!-- Crossbar -->
  <rect x="80" y="98" width="40" height="10" rx="1" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <!-- Handle -->
  <rect x="90" y="108" width="20" height="90" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/>
  <!-- Handle ornament rings -->
  <line x1="86" y1="130" x2="114" y2="130" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>
  <line x1="86" y1="160" x2="114" y2="160" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>
  <line x1="86" y1="180" x2="114" y2="180" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>
  <!-- Bottom decoration -->
  <circle cx="100" cy="200" r="3" stroke="currentColor" stroke-width="1" fill="none"/>
</svg>`;

// ─── ІҐҐДРАСІЛЬ (worlds) ─────────────────────────────────
ART.yggdrasil = `
<svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <!-- Trunk -->
  <path d="M100 200 Q98 150 100 100 Q102 60 100 30" stroke="currentColor" stroke-width="3" fill="none"/>
  <!-- Bark texture -->
  <path d="M95 180 Q92 150 95 120 M105 180 Q108 150 105 120" stroke="currentColor" stroke-width="0.6" fill="none" opacity="0.5"/>
  <!-- Crown branches -->
  <path d="M100 35 Q80 30 60 38 Q70 25 90 28" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <path d="M100 35 Q120 30 140 38 Q130 25 110 28" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <path d="M100 45 Q70 42 45 55" stroke="currentColor" stroke-width="1" fill="none"/>
  <path d="M100 45 Q130 42 155 55" stroke="currentColor" stroke-width="1" fill="none"/>
  <path d="M100 60 Q75 58 55 70" stroke="currentColor" stroke-width="1" fill="none"/>
  <path d="M100 60 Q125 58 145 70" stroke="currentColor" stroke-width="1" fill="none"/>
  <!-- Leaves clusters -->
  <circle cx="55" cy="60" r="4" stroke="currentColor" stroke-width="0.8" fill="none"/>
  <circle cx="145" cy="60" r="4" stroke="currentColor" stroke-width="0.8" fill="none"/>
  <circle cx="40" cy="48" r="3" stroke="currentColor" stroke-width="0.8" fill="none"/>
  <circle cx="160" cy="48" r="3" stroke="currentColor" stroke-width="0.8" fill="none"/>
  <circle cx="100" cy="20" r="5" stroke="currentColor" stroke-width="1" fill="none"/>
  <!-- Roots -->
  <path d="M100 200 Q85 205 70 215 Q60 218 50 215" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <path d="M100 200 Q115 205 130 215 Q140 218 150 215" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <path d="M100 200 Q95 215 90 215" stroke="currentColor" stroke-width="1" fill="none"/>
  <path d="M100 200 Q105 215 110 215" stroke="currentColor" stroke-width="1" fill="none"/>
  <!-- Animals: eagle on top -->
  <ellipse cx="100" cy="15" rx="6" ry="3" stroke="currentColor" stroke-width="0.8" fill="none"/>
  <path d="M94 14 L92 12 M106 14 L108 12" stroke="currentColor" stroke-width="0.8" fill="none"/>
  <!-- Squirrel Ratatosk -->
  <circle cx="103" cy="100" r="3" stroke="currentColor" stroke-width="0.7" fill="none"/>
  <path d="M105 100 Q107 96 106 92" stroke="currentColor" stroke-width="0.7" fill="none"/>
</svg>`;

// ─── ЕЙГІСГЬЯЛЬМУР (gods - Шолом жаху) ─────────────────
ART.aegishjalmur = `
<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <!-- Central hub -->
  <circle cx="100" cy="100" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
  <circle cx="100" cy="100" r="3" fill="currentColor"/>
  <!-- 8 arms with trident endings -->
  <g stroke="currentColor" stroke-width="2" fill="none">
    <!-- N -->
    <line x1="100" y1="92" x2="100" y2="30"/>
    <line x1="100" y1="42" x2="90" y2="32"/>
    <line x1="100" y1="42" x2="110" y2="32"/>
    <circle cx="100" cy="38" r="2"/>
    <line x1="100" y1="30" x2="94" y2="22"/>
    <line x1="100" y1="30" x2="106" y2="22"/>
    <!-- S -->
    <line x1="100" y1="108" x2="100" y2="170"/>
    <line x1="100" y1="158" x2="90" y2="168"/>
    <line x1="100" y1="158" x2="110" y2="168"/>
    <circle cx="100" cy="162" r="2"/>
    <line x1="100" y1="170" x2="94" y2="178"/>
    <line x1="100" y1="170" x2="106" y2="178"/>
    <!-- E -->
    <line x1="108" y1="100" x2="170" y2="100"/>
    <line x1="158" y1="100" x2="168" y2="90"/>
    <line x1="158" y1="100" x2="168" y2="110"/>
    <circle cx="162" cy="100" r="2"/>
    <line x1="170" y1="100" x2="178" y2="94"/>
    <line x1="170" y1="100" x2="178" y2="106"/>
    <!-- W -->
    <line x1="92" y1="100" x2="30" y2="100"/>
    <line x1="42" y1="100" x2="32" y2="90"/>
    <line x1="42" y1="100" x2="32" y2="110"/>
    <circle cx="38" cy="100" r="2"/>
    <line x1="30" y1="100" x2="22" y2="94"/>
    <line x1="30" y1="100" x2="22" y2="106"/>
    <!-- NE -->
    <line x1="106" y1="94" x2="148" y2="52"/>
    <line x1="140" y1="60" x2="146" y2="46"/>
    <line x1="140" y1="60" x2="154" y2="54"/>
    <!-- NW -->
    <line x1="94" y1="94" x2="52" y2="52"/>
    <line x1="60" y1="60" x2="54" y2="46"/>
    <line x1="60" y1="60" x2="46" y2="54"/>
    <!-- SE -->
    <line x1="106" y1="106" x2="148" y2="148"/>
    <line x1="140" y1="140" x2="146" y2="154"/>
    <line x1="140" y1="140" x2="154" y2="146"/>
    <!-- SW -->
    <line x1="94" y1="106" x2="52" y2="148"/>
    <line x1="60" y1="140" x2="54" y2="154"/>
    <line x1="60" y1="140" x2="46" y2="146"/>
  </g>
</svg>`;

// ─── ЗМІЙ ЙОРМУНҐАНД (creatures) ────────────────────────
ART.serpent = `
<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <!-- Outer serpent ring (ouroboros) -->
  <circle cx="100" cy="100" r="78" stroke="currentColor" stroke-width="3" fill="none"/>
  <circle cx="100" cy="100" r="72" stroke="currentColor" stroke-width="0.6" fill="none" opacity="0.5"/>
  <!-- Scales pattern around -->
  <g stroke="currentColor" stroke-width="0.7" fill="none" opacity="0.6">
    <path d="M28 100 Q22 95 28 90 M28 110 Q22 105 28 100 M30 80 Q24 75 30 70"/>
    <path d="M172 100 Q178 95 172 90 M172 110 Q178 105 172 100 M170 80 Q176 75 170 70"/>
    <path d="M100 28 Q95 22 90 28 M110 28 Q105 22 100 28 M80 30 Q75 24 70 30"/>
    <path d="M100 172 Q95 178 90 172 M110 172 Q105 178 100 172"/>
  </g>
  <!-- Head -->
  <path d="M155 80 Q175 65 178 80 Q175 95 160 90 Q150 88 155 80Z"
    stroke="currentColor" stroke-width="2" fill="none"/>
  <!-- Eye -->
  <circle cx="170" cy="78" r="2.5" fill="currentColor"/>
  <!-- Tongue / fangs -->
  <path d="M178 84 Q183 86 180 90 Q177 92 178 88Z" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <line x1="175" y1="85" x2="173" y2="90" stroke="currentColor" stroke-width="1"/>
  <!-- Tail meeting head (ouroboros bite) -->
  <path d="M148 82 Q140 88 145 95" stroke="currentColor" stroke-width="1.5" fill="none"/>
  <!-- Inner knotwork -->
  <g stroke="currentColor" stroke-width="1" fill="none" opacity="0.7">
    <path d="M100 50 Q70 70 60 100 Q70 130 100 150 Q130 130 140 100 Q130 70 100 50"/>
    <path d="M100 70 Q85 85 80 100 Q85 115 100 130 Q115 115 120 100 Q115 85 100 70"/>
  </g>
  <circle cx="100" cy="100" r="5" stroke="currentColor" stroke-width="1.2" fill="none"/>
</svg>`;

// ─── РУНІЧНИЙ КАМІНЬ (runes) ────────────────────────────
ART.runestone = `
<svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <!-- Stone shape (irregular) -->
  <path d="M40 200 Q30 200 28 180 L25 80 Q25 50 40 30 L60 15 L140 15 L160 30 Q175 50 175 80 L172 180 Q170 200 160 200 Z"
    stroke="currentColor" stroke-width="1.8" fill="none"/>
  <!-- Inner texture lines (cracks) -->
  <g stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.4">
    <path d="M45 50 Q55 70 50 100"/>
    <path d="M155 60 Q150 90 158 130"/>
    <path d="M80 180 Q75 170 78 150"/>
  </g>
  <!-- Outer interlace border -->
  <g stroke="currentColor" stroke-width="0.7" fill="none" opacity="0.5">
    <path d="M40 30 Q50 25 60 30 Q70 35 60 40 Q50 35 40 40"/>
    <path d="M140 30 Q150 25 160 30 Q170 35 160 40 Q150 35 140 40"/>
  </g>
  <!-- Carved runes in center column -->
  <g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round">
    <!-- Ansuz -->
    <line x1="80" y1="60" x2="80" y2="100"/>
    <line x1="80" y1="68" x2="105" y2="63"/>
    <line x1="80" y1="78" x2="105" y2="73"/>
    <!-- Raidho -->
    <line x1="80" y1="115" x2="80" y2="155"/>
    <line x1="80" y1="115" x2="105" y2="125"/>
    <line x1="80" y1="135" x2="105" y2="115"/>
    <line x1="80" y1="135" x2="105" y2="155"/>
  </g>
  <!-- Bottom curve detail (ground) -->
  <path d="M30 200 Q100 195 170 200" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5"/>
</svg>`;

// ─── СПИС ҐУНҐНІР (artifacts) ───────────────────────────
ART.artifact = `
<svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <!-- Spear shaft -->
  <line x1="100" y1="50" x2="100" y2="200" stroke="currentColor" stroke-width="2.5"/>
  <!-- Spearhead -->
  <path d="M100 15 L88 50 L100 60 L112 50 Z" stroke="currentColor" stroke-width="2" fill="none"/>
  <line x1="100" y1="15" x2="100" y2="55" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>
  <!-- Spearhead runes -->
  <line x1="94" y1="30" x2="94" y2="44" stroke="currentColor" stroke-width="0.7"/>
  <line x1="106" y1="30" x2="106" y2="44" stroke="currentColor" stroke-width="0.7"/>
  <!-- Binding wraps -->
  <ellipse cx="100" cy="65" rx="9" ry="2.5" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <ellipse cx="100" cy="73" rx="9" ry="2.5" stroke="currentColor" stroke-width="1" fill="none" opacity="0.7"/>
  <ellipse cx="100" cy="81" rx="9" ry="2.5" stroke="currentColor" stroke-width="1" fill="none" opacity="0.5"/>
  <!-- Decorative rings on shaft -->
  <line x1="90" y1="120" x2="110" y2="120" stroke="currentColor" stroke-width="1"/>
  <line x1="90" y1="160" x2="110" y2="160" stroke="currentColor" stroke-width="1"/>
  <!-- Bottom finial -->
  <circle cx="100" cy="205" r="4" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <!-- Surrounding rays (sacred power) -->
  <g stroke="currentColor" stroke-width="0.6" opacity="0.4">
    <line x1="60" y1="80" x2="80" y2="100"/>
    <line x1="140" y1="80" x2="120" y2="100"/>
    <line x1="55" y1="120" x2="80" y2="125"/>
    <line x1="145" y1="120" x2="120" y2="125"/>
  </g>
</svg>`;

// ─── СУВІЙ (events) ─────────────────────────────────────
ART.scroll = `
<svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <!-- Outer scroll body -->
  <path d="M50 40 L150 40 Q160 50 160 70 L160 160 Q160 180 150 190 L50 190 Q40 180 40 160 L40 70 Q40 50 50 40 Z"
    stroke="currentColor" stroke-width="1.8" fill="none"/>
  <!-- Left scroll roll -->
  <ellipse cx="50" cy="40" rx="10" ry="6" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <ellipse cx="50" cy="190" rx="10" ry="6" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <line x1="40" y1="40" x2="40" y2="190" stroke="currentColor" stroke-width="0.8"/>
  <!-- Right scroll edge curl -->
  <path d="M150 40 Q170 45 165 70 Q160 90 150 80" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <!-- Text lines -->
  <g stroke="currentColor" stroke-width="0.8" opacity="0.6">
    <line x1="65" y1="70" x2="145" y2="70"/>
    <line x1="65" y1="85" x2="140" y2="85"/>
    <line x1="65" y1="100" x2="145" y2="100"/>
    <line x1="65" y1="115" x2="135" y2="115"/>
    <line x1="65" y1="130" x2="140" y2="130"/>
    <line x1="65" y1="145" x2="130" y2="145"/>
    <line x1="65" y1="160" x2="138" y2="160"/>
  </g>
  <!-- Initial capital decoration -->
  <rect x="65" y="65" width="12" height="14" stroke="currentColor" stroke-width="1" fill="none"/>
  <path d="M68 68 Q72 70 75 68" stroke="currentColor" stroke-width="0.6" fill="none" opacity="0.7"/>
  <!-- Wax seal -->
  <circle cx="105" cy="180" r="5" stroke="currentColor" stroke-width="1" fill="none" opacity="0.7"/>
  <line x1="103" y1="178" x2="107" y2="182" stroke="currentColor" stroke-width="0.6"/>
  <line x1="107" y1="178" x2="103" y2="182" stroke="currentColor" stroke-width="0.6"/>
</svg>`;

// ─── РОДОВЕ ДЕРЕВО (genealogy) ──────────────────────────
ART.tree = `
<svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <!-- Main trunk -->
  <line x1="100" y1="200" x2="100" y2="130" stroke="currentColor" stroke-width="3"/>
  <!-- Major branches -->
  <line x1="100" y1="130" x2="60" y2="90" stroke="currentColor" stroke-width="2"/>
  <line x1="100" y1="130" x2="140" y2="90" stroke="currentColor" stroke-width="2"/>
  <line x1="100" y1="110" x2="80" y2="70" stroke="currentColor" stroke-width="1.5"/>
  <line x1="100" y1="110" x2="120" y2="70" stroke="currentColor" stroke-width="1.5"/>
  <!-- Sub branches -->
  <line x1="60" y1="90" x2="30" y2="60" stroke="currentColor" stroke-width="1.2"/>
  <line x1="60" y1="90" x2="50" y2="50" stroke="currentColor" stroke-width="1.2"/>
  <line x1="140" y1="90" x2="170" y2="60" stroke="currentColor" stroke-width="1.2"/>
  <line x1="140" y1="90" x2="150" y2="50" stroke="currentColor" stroke-width="1.2"/>
  <!-- Nodes (ancestors) -->
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
  <!-- Roots -->
  <path d="M100 200 Q85 208 70 212" stroke="currentColor" stroke-width="1" fill="none"/>
  <path d="M100 200 Q115 208 130 212" stroke="currentColor" stroke-width="1" fill="none"/>
  <path d="M100 200 Q95 212 90 215" stroke="currentColor" stroke-width="1" fill="none"/>
  <path d="M100 200 Q105 212 110 215" stroke="currentColor" stroke-width="1" fill="none"/>
</svg>`;

// ─── СТАРА КНИГА (sources) ──────────────────────────────
ART.book = `
<svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <!-- Book cover -->
  <path d="M40 30 L160 30 Q165 30 165 35 L165 190 Q165 195 160 195 L40 195 Q35 195 35 190 L35 35 Q35 30 40 30 Z"
    stroke="currentColor" stroke-width="2" fill="none"/>
  <!-- Spine -->
  <line x1="55" y1="30" x2="55" y2="195" stroke="currentColor" stroke-width="1.5"/>
  <!-- Decorative frame on cover -->
  <rect x="65" y="50" width="90" height="125" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.7"/>
  <rect x="70" y="55" width="80" height="115" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.5"/>
  <!-- Central emblem (Mjolnir simplified) -->
  <g stroke="currentColor" stroke-width="1.2" fill="none">
    <rect x="92" y="90" width="36" height="18" rx="1"/>
    <rect x="105" y="108" width="10" height="30" rx="1"/>
    <rect x="100" y="106" width="20" height="4"/>
  </g>
  <!-- Decorative corners on cover -->
  <g stroke="currentColor" stroke-width="0.7" opacity="0.6">
    <path d="M70 55 Q75 60 80 55"/>
    <path d="M140 55 Q145 60 150 55"/>
    <path d="M70 170 Q75 165 80 170"/>
    <path d="M140 170 Q145 165 150 170"/>
  </g>
  <!-- Pages (visible from right side) -->
  <line x1="165" y1="40" x2="170" y2="40" stroke="currentColor" stroke-width="0.6"/>
  <line x1="165" y1="50" x2="170" y2="50" stroke="currentColor" stroke-width="0.6"/>
  <line x1="165" y1="60" x2="170" y2="60" stroke="currentColor" stroke-width="0.6"/>
  <line x1="165" y1="180" x2="170" y2="180" stroke="currentColor" stroke-width="0.6"/>
  <!-- Clasp -->
  <rect x="155" y="105" width="10" height="15" stroke="currentColor" stroke-width="1" fill="none"/>
</svg>`;

// ─── ВОГОНЬ (ragnarok / events) ─────────────────────────
ART.flame = `
<svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <!-- Main flame -->
  <path d="M100 200 Q60 180 55 130 Q50 100 75 80 Q70 105 90 110 Q75 80 90 50 Q105 25 120 35 Q110 60 115 80 Q140 65 130 35 Q160 60 155 110 Q150 140 135 165 Q145 145 145 125 Q160 145 145 175 Q130 195 100 200 Z"
    stroke="currentColor" stroke-width="2" fill="none"/>
  <!-- Inner flame -->
  <path d="M100 180 Q85 165 85 140 Q90 115 105 100 Q100 125 110 130 Q115 110 110 90 Q120 110 120 130 Q125 145 115 165 Z"
    stroke="currentColor" stroke-width="1" fill="none" opacity="0.7"/>
  <!-- Core -->
  <ellipse cx="105" cy="155" rx="8" ry="15" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5"/>
  <!-- Sparks -->
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

// ─── CARD ILLUSTRATIONS (for gods, creatures, etc.) ─────
// Each god/creature gets a unique symbolic illustration

ART.cards = {
  // GODS — different symbols
  odin: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Odin: ravens and one eye -->
    <circle cx="100" cy="70" r="40" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="100" cy="70" r="30" stroke="currentColor" stroke-width="0.6" fill="none" opacity="0.4"/>
    <!-- One eye -->
    <ellipse cx="100" cy="70" rx="8" ry="5" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="100" cy="70" r="2.5" fill="currentColor"/>
    <!-- Eye patch on side -->
    <path d="M75 65 Q72 70 75 75" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <!-- Two ravens flanking -->
    <g transform="translate(40,60)">
      <ellipse cx="0" cy="0" rx="12" ry="6" stroke="currentColor" stroke-width="1.2" fill="none"/>
      <path d="M-10 -2 L-15 -8 M10 -2 L15 -8" stroke="currentColor" stroke-width="1"/>
      <circle cx="-8" cy="-1" r="1" fill="currentColor"/>
      <path d="M-12 4 L-14 8 M12 4 L14 8" stroke="currentColor" stroke-width="0.8"/>
    </g>
    <g transform="translate(160,60)">
      <ellipse cx="0" cy="0" rx="12" ry="6" stroke="currentColor" stroke-width="1.2" fill="none"/>
      <path d="M-10 -2 L-15 -8 M10 -2 L15 -8" stroke="currentColor" stroke-width="1"/>
      <circle cx="8" cy="-1" r="1" fill="currentColor"/>
      <path d="M-12 4 L-14 8 M12 4 L14 8" stroke="currentColor" stroke-width="0.8"/>
    </g>
    <!-- Bottom: spear -->
    <line x1="100" y1="115" x2="100" y2="145" stroke="currentColor" stroke-width="1.5"/>
    <path d="M100 110 L96 120 L100 122 L104 120 Z" stroke="currentColor" stroke-width="1.2" fill="none"/>
  </svg>`,

  thor: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Thor: Mjolnir with lightning -->
    <rect x="60" y="35" width="80" height="35" rx="2" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <line x1="60" y1="45" x2="140" y2="45" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
    <line x1="60" y1="60" x2="140" y2="60" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
    <circle cx="100" cy="52" r="6" stroke="currentColor" stroke-width="1" fill="none" opacity="0.7"/>
    <rect x="85" y="70" width="30" height="6" rx="1" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <rect x="92" y="76" width="16" height="55" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <!-- Lightning bolts on sides -->
    <path d="M30 30 L25 50 L33 50 L28 75" stroke="currentColor" stroke-width="2" fill="none"/>
    <path d="M170 30 L175 50 L167 50 L172 75" stroke="currentColor" stroke-width="2" fill="none"/>
    <!-- Ground -->
    <line x1="40" y1="140" x2="160" y2="140" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
  </svg>`,

  loki: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Loki: snake/flame combo -->
    <path d="M40 130 Q50 110 80 110 Q110 110 120 90 Q130 70 150 70 Q170 70 175 50"
      stroke="currentColor" stroke-width="2" fill="none"/>
    <!-- Snake head -->
    <ellipse cx="40" cy="135" rx="8" ry="5" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="36" cy="133" r="1.5" fill="currentColor"/>
    <line x1="32" y1="138" x2="28" y2="142" stroke="currentColor" stroke-width="1"/>
    <line x1="32" y1="138" x2="30" y2="144" stroke="currentColor" stroke-width="1"/>
    <!-- Flame at top end -->
    <path d="M175 50 Q170 35 175 25 Q180 35 175 50 Q172 40 175 30 Q178 40 175 50"
      stroke="currentColor" stroke-width="1.2" fill="none"/>
    <!-- Scales -->
    <g stroke="currentColor" stroke-width="0.6" opacity="0.5">
      <path d="M60 120 Q65 117 70 120"/>
      <path d="M90 100 Q95 97 100 100"/>
      <path d="M125 85 Q130 82 135 85"/>
    </g>
  </svg>`,

  freyja: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Freyja: necklace (Brisingamen) -->
    <path d="M50 50 Q100 90 150 50" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <g fill="none" stroke="currentColor" stroke-width="1">
      <circle cx="60" cy="56" r="3"/>
      <circle cx="75" cy="65" r="3.5"/>
      <circle cx="90" cy="74" r="4"/>
      <circle cx="100" cy="78" r="4.5"/>
      <circle cx="110" cy="74" r="4"/>
      <circle cx="125" cy="65" r="3.5"/>
      <circle cx="140" cy="56" r="3"/>
    </g>
    <!-- Heart center pendant -->
    <path d="M100 90 Q95 95 95 100 Q95 108 100 113 Q105 108 105 100 Q105 95 100 90Z"
      stroke="currentColor" stroke-width="1.2" fill="none"/>
    <!-- Two cats -->
    <g transform="translate(40,125)">
      <ellipse cx="0" cy="0" rx="14" ry="6" stroke="currentColor" stroke-width="1.2" fill="none"/>
      <path d="M-8 -5 L-10 -10 L-6 -8 Z" stroke="currentColor" stroke-width="1" fill="none"/>
      <path d="M8 -5 L10 -10 L6 -8 Z" stroke="currentColor" stroke-width="1" fill="none"/>
      <circle cx="-6" cy="-2" r="0.8" fill="currentColor"/>
      <circle cx="6" cy="-2" r="0.8" fill="currentColor"/>
    </g>
    <g transform="translate(160,125)">
      <ellipse cx="0" cy="0" rx="14" ry="6" stroke="currentColor" stroke-width="1.2" fill="none"/>
      <path d="M-8 -5 L-10 -10 L-6 -8 Z" stroke="currentColor" stroke-width="1" fill="none"/>
      <path d="M8 -5 L10 -10 L6 -8 Z" stroke="currentColor" stroke-width="1" fill="none"/>
      <circle cx="-6" cy="-2" r="0.8" fill="currentColor"/>
      <circle cx="6" cy="-2" r="0.8" fill="currentColor"/>
    </g>
  </svg>`,

  freyr: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Freyr: golden boar and sword -->
    <g transform="translate(100,80)">
      <ellipse cx="0" cy="0" rx="35" ry="20" stroke="currentColor" stroke-width="1.5" fill="none"/>
      <!-- Boar head -->
      <ellipse cx="-30" cy="-5" rx="12" ry="10" stroke="currentColor" stroke-width="1.2" fill="none"/>
      <!-- Tusks -->
      <path d="M-40 0 L-46 4 M-40 -3 L-46 -7" stroke="currentColor" stroke-width="1.2" fill="none"/>
      <!-- Eye -->
      <circle cx="-32" cy="-7" r="1" fill="currentColor"/>
      <!-- Ears -->
      <path d="M-25 -12 L-28 -18 L-22 -16 Z" stroke="currentColor" stroke-width="1" fill="none"/>
      <!-- Bristles (golden) -->
      <g stroke="currentColor" stroke-width="0.8" opacity="0.7">
        <line x1="-10" y1="-18" x2="-12" y2="-23"/>
        <line x1="0" y1="-20" x2="-1" y2="-26"/>
        <line x1="10" y1="-18" x2="11" y2="-23"/>
        <line x1="20" y1="-15" x2="22" y2="-20"/>
      </g>
      <!-- Legs -->
      <line x1="-15" y1="15" x2="-15" y2="28" stroke="currentColor" stroke-width="1.2"/>
      <line x1="0" y1="18" x2="0" y2="30" stroke="currentColor" stroke-width="1.2"/>
      <line x1="15" y1="18" x2="15" y2="30" stroke="currentColor" stroke-width="1.2"/>
      <line x1="25" y1="15" x2="25" y2="28" stroke="currentColor" stroke-width="1.2"/>
      <!-- Tail -->
      <path d="M30 -5 Q40 -8 38 0" stroke="currentColor" stroke-width="1" fill="none"/>
    </g>
  </svg>`,

  frigg: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Frigg: spinning wheel / spindle -->
    <circle cx="100" cy="80" r="35" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="100" cy="80" r="28" stroke="currentColor" stroke-width="0.7" fill="none" opacity="0.5"/>
    <circle cx="100" cy="80" r="4" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="100" cy="80" r="1.5" fill="currentColor"/>
    <!-- Spokes -->
    <g stroke="currentColor" stroke-width="1">
      <line x1="100" y1="45" x2="100" y2="115"/>
      <line x1="65" y1="80" x2="135" y2="80"/>
      <line x1="75" y1="55" x2="125" y2="105"/>
      <line x1="125" y1="55" x2="75" y2="105"/>
    </g>
    <!-- Thread -->
    <path d="M135 80 Q145 80 145 70 Q145 60 140 60 L140 130" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6"/>
    <!-- Spindle -->
    <line x1="140" y1="125" x2="140" y2="145" stroke="currentColor" stroke-width="1.5"/>
    <ellipse cx="140" cy="140" rx="4" ry="2" stroke="currentColor" stroke-width="1" fill="none"/>
  </svg>`,

  baldr: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Baldr: sun radiant -->
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
    <g stroke="currentColor" stroke-width="0.8" opacity="0.6">
      <line x1="100" y1="20" x2="100" y2="28"/>
      <line x1="100" y1="132" x2="100" y2="140"/>
      <line x1="40" y1="80" x2="48" y2="80"/>
      <line x1="152" y1="80" x2="160" y2="80"/>
    </g>
    <!-- Mistletoe at bottom -->
    <g transform="translate(100,148)">
      <circle cx="-3" cy="0" r="2" stroke="currentColor" stroke-width="1" fill="none"/>
      <circle cx="3" cy="0" r="2" stroke="currentColor" stroke-width="1" fill="none"/>
      <line x1="0" y1="-3" x2="0" y2="3" stroke="currentColor" stroke-width="0.8"/>
    </g>
  </svg>`,

  tyr: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Tyr: hand with wolf chains -->
    <!-- Hand outline -->
    <path d="M85 50 Q80 45 80 55 L80 80 Q80 90 75 90 Q70 90 70 85 L70 70 Q70 65 65 65 Q60 65 60 70 L60 90 Q60 105 75 105 L100 105 Q115 105 115 90 L115 60 Q115 50 110 50 Q105 50 105 55 L105 75"
      stroke="currentColor" stroke-width="1.5" fill="none"/>
    <!-- Wolf jaw biting -->
    <path d="M115 70 L150 60 L155 70 L150 80 L115 75 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <!-- Teeth -->
    <g stroke="currentColor" stroke-width="0.8">
      <line x1="130" y1="65" x2="132" y2="70"/>
      <line x1="140" y1="63" x2="142" y2="68"/>
      <line x1="135" y1="78" x2="133" y2="73"/>
      <line x1="145" y1="76" x2="143" y2="71"/>
    </g>
    <!-- Wolf eye -->
    <circle cx="150" cy="65" r="1.5" fill="currentColor"/>
    <!-- Chain Gleipnir -->
    <path d="M60 105 Q60 115 50 120 Q40 125 50 130 Q60 130 65 125" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <!-- Tyr rune on hand -->
    <g transform="translate(85,80)" stroke="currentColor" stroke-width="1" fill="none">
      <line x1="0" y1="-8" x2="0" y2="10"/>
      <line x1="0" y1="-8" x2="-5" y2="-3"/>
      <line x1="0" y1="-8" x2="5" y2="-3"/>
    </g>
  </svg>`,

  heimdall: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Heimdall: Gjallarhorn -->
    <path d="M40 130 Q55 120 80 110 Q110 95 145 80 Q165 70 175 50"
      stroke="currentColor" stroke-width="2" fill="none"/>
    <path d="M40 130 Q55 145 80 135 Q110 120 145 105 Q165 95 175 75"
      stroke="currentColor" stroke-width="2" fill="none"/>
    <!-- Horn opening -->
    <ellipse cx="175" cy="62" rx="6" ry="12" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <!-- Horn mouthpiece -->
    <circle cx="40" cy="130" r="4" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <!-- Binding rings -->
    <g stroke="currentColor" stroke-width="0.8" fill="none">
      <ellipse cx="75" cy="123" rx="3" ry="7"/>
      <ellipse cx="105" cy="110" rx="3" ry="8"/>
      <ellipse cx="135" cy="95" rx="3" ry="9"/>
    </g>
    <!-- Sound waves -->
    <g stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5">
      <path d="M180 45 Q188 50 188 60"/>
      <path d="M185 35 Q198 45 195 60"/>
    </g>
  </svg>`,

  idunn: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Idunn: basket of apples -->
    <path d="M55 90 L60 140 L140 140 L145 90 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <!-- Basket weave -->
    <g stroke="currentColor" stroke-width="0.6" opacity="0.6">
      <line x1="60" y1="100" x2="140" y2="100"/>
      <line x1="62" y1="115" x2="138" y2="115"/>
      <line x1="63" y1="130" x2="137" y2="130"/>
      <line x1="75" y1="95" x2="77" y2="140"/>
      <line x1="100" y1="92" x2="100" y2="140"/>
      <line x1="125" y1="95" x2="123" y2="140"/>
    </g>
    <!-- Apples -->
    <circle cx="80" cy="80" r="10" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="100" cy="75" r="11" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="120" cy="80" r="10" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <!-- Stems and leaves -->
    <line x1="80" y1="70" x2="80" y2="64" stroke="currentColor" stroke-width="1"/>
    <line x1="100" y1="64" x2="100" y2="58" stroke="currentColor" stroke-width="1"/>
    <line x1="120" y1="70" x2="120" y2="64" stroke="currentColor" stroke-width="1"/>
    <path d="M100 60 Q105 56 108 60" stroke="currentColor" stroke-width="1" fill="none"/>
    <!-- Basket handle -->
    <path d="M65 90 Q100 50 135 90" stroke="currentColor" stroke-width="1.2" fill="none"/>
  </svg>`,

  njord: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Njord: ship on waves -->
    <!-- Waves -->
    <path d="M20 130 Q35 120 50 130 Q65 140 80 130 Q95 120 110 130 Q125 140 140 130 Q155 120 170 130 Q185 140 200 130"
      stroke="currentColor" stroke-width="1.2" fill="none"/>
    <path d="M20 138 Q35 128 50 138 Q65 148 80 138 Q95 128 110 138 Q125 148 140 138 Q155 128 170 138"
      stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6"/>
    <!-- Ship hull -->
    <path d="M50 110 Q50 100 60 100 L140 100 Q150 100 150 110 L145 125 Q100 130 55 125 Z"
      stroke="currentColor" stroke-width="1.8" fill="none"/>
    <!-- Mast -->
    <line x1="100" y1="40" x2="100" y2="105" stroke="currentColor" stroke-width="1.5"/>
    <!-- Sail -->
    <path d="M100 45 L70 50 L75 90 L100 90 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M100 45 L130 50 L125 90 L100 90 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <!-- Sail pattern -->
    <line x1="85" y1="60" x2="115" y2="60" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
    <line x1="85" y1="75" x2="115" y2="75" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
    <!-- Dragon head prow -->
    <path d="M50 110 Q35 105 30 95 Q40 95 45 105" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <!-- Shields on side -->
    <circle cx="70" cy="115" r="3" stroke="currentColor" stroke-width="0.8" fill="none"/>
    <circle cx="85" cy="115" r="3" stroke="currentColor" stroke-width="0.8" fill="none"/>
    <circle cx="100" cy="115" r="3" stroke="currentColor" stroke-width="0.8" fill="none"/>
    <circle cx="115" cy="115" r="3" stroke="currentColor" stroke-width="0.8" fill="none"/>
    <circle cx="130" cy="115" r="3" stroke="currentColor" stroke-width="0.8" fill="none"/>
  </svg>`,

  // GENERIC FALLBACK for gods without specific art
  godGeneric: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Generic: shield with rune -->
    <path d="M100 30 L60 45 L60 90 Q60 115 100 135 Q140 115 140 90 L140 45 Z"
      stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M100 40 L70 50 L70 88 Q70 108 100 124 Q130 108 130 88 L130 50 Z"
      stroke="currentColor" stroke-width="0.7" fill="none" opacity="0.5"/>
    <!-- Center rune (Ansuz - generic god) -->
    <g stroke="currentColor" stroke-width="2" fill="none">
      <line x1="90" y1="65" x2="90" y2="105"/>
      <line x1="90" y1="72" x2="110" y2="68"/>
      <line x1="90" y1="82" x2="110" y2="78"/>
    </g>
  </svg>`,

  // CREATURES
  fenrir: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Wolf head -->
    <path d="M50 90 L60 70 L75 60 L100 55 L125 60 L140 70 L150 90 L145 110 L130 120 L100 125 L70 120 L55 110 Z"
      stroke="currentColor" stroke-width="1.8" fill="none"/>
    <!-- Ears -->
    <path d="M65 65 L60 45 L75 55 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M135 65 L140 45 L125 55 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <!-- Eyes -->
    <ellipse cx="80" cy="85" rx="4" ry="3" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <ellipse cx="120" cy="85" rx="4" ry="3" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <circle cx="80" cy="85" r="1.5" fill="currentColor"/>
    <circle cx="120" cy="85" r="1.5" fill="currentColor"/>
    <!-- Snout -->
    <path d="M90 95 L100 110 L110 95" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <!-- Teeth -->
    <g stroke="currentColor" stroke-width="1" fill="none">
      <path d="M92 110 L94 118 L96 110"/>
      <path d="M104 110 L106 118 L108 110"/>
    </g>
    <!-- Nose -->
    <ellipse cx="100" cy="100" rx="3" ry="2" stroke="currentColor" stroke-width="1" fill="none"/>
    <!-- Chain Gleipnir -->
    <g stroke="currentColor" stroke-width="1" fill="none" opacity="0.7">
      <ellipse cx="60" cy="140" rx="6" ry="3"/>
      <ellipse cx="70" cy="145" rx="6" ry="3"/>
      <ellipse cx="100" cy="140" rx="6" ry="3"/>
      <ellipse cx="130" cy="145" rx="6" ry="3"/>
      <ellipse cx="140" cy="140" rx="6" ry="3"/>
    </g>
  </svg>`,

  jormungandr: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Coiled serpent -->
    <path d="M50 120 Q40 100 60 90 Q90 80 100 70 Q120 55 140 65 Q160 75 155 95 Q150 115 130 115 Q110 115 105 100 Q105 90 115 90 Q125 90 125 100"
      stroke="currentColor" stroke-width="2" fill="none"/>
    <!-- Head -->
    <path d="M130 100 L145 95 L150 105 L135 110 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="143" cy="100" r="1.5" fill="currentColor"/>
    <!-- Tongue -->
    <path d="M150 105 L156 108 L153 112 L156 115" stroke="currentColor" stroke-width="1" fill="none"/>
    <!-- Scales -->
    <g stroke="currentColor" stroke-width="0.6" opacity="0.5">
      <path d="M60 105 Q65 102 70 105"/>
      <path d="M80 90 Q85 87 90 90"/>
      <path d="M105 80 Q110 77 115 80"/>
      <path d="M130 75 Q135 72 140 75"/>
    </g>
    <!-- Water lines below -->
    <path d="M20 140 Q40 135 60 140 Q80 145 100 140 Q120 135 140 140 Q160 145 180 140"
      stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.5"/>
  </svg>`,

  creatureGeneric: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Dragon silhouette -->
    <path d="M40 110 Q50 80 80 75 Q95 70 100 60 Q110 50 130 55 Q150 60 155 75 Q160 90 145 100 Q150 110 145 120 Q135 130 120 125 Q100 130 85 120 Q60 130 40 110 Z"
      stroke="currentColor" stroke-width="1.5" fill="none"/>
    <!-- Wing -->
    <path d="M100 70 Q90 40 110 35 Q125 35 130 55" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <!-- Eye -->
    <circle cx="135" cy="80" r="2" fill="currentColor"/>
    <!-- Tail -->
    <path d="M40 110 Q25 115 20 125 Q25 130 35 125" stroke="currentColor" stroke-width="1.2" fill="none"/>
  </svg>`,

  // ARTIFACTS
  mjolnir: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Mjolnir hammer -->
    <rect x="55" y="30" width="90" height="35" rx="2" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <!-- Knotwork inside -->
    <circle cx="100" cy="47" r="10" stroke="currentColor" stroke-width="1" fill="none"/>
    <path d="M93 41 Q100 48 107 41 Q100 34 93 41" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.7"/>
    <path d="M93 53 Q100 46 107 53 Q100 60 93 53" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.7"/>
    <!-- Side decorations -->
    <circle cx="72" cy="47" r="4" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6"/>
    <circle cx="128" cy="47" r="4" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6"/>
    <!-- Lines -->
    <line x1="55" y1="40" x2="145" y2="40" stroke="currentColor" stroke-width="0.5" opacity="0.5"/>
    <line x1="55" y1="55" x2="145" y2="55" stroke="currentColor" stroke-width="0.5" opacity="0.5"/>
    <!-- Crossbar -->
    <rect x="83" y="65" width="34" height="7" rx="1" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <!-- Handle -->
    <rect x="92" y="72" width="16" height="65" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <!-- Wrap rings -->
    <line x1="88" y1="95" x2="112" y2="95" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
    <line x1="88" y1="115" x2="112" y2="115" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
    <!-- Loop at bottom -->
    <circle cx="100" cy="142" r="3" stroke="currentColor" stroke-width="1.2" fill="none"/>
  </svg>`,

  gungnir: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Spear -->
    <line x1="100" y1="40" x2="100" y2="145" stroke="currentColor" stroke-width="2.5"/>
    <!-- Spearhead -->
    <path d="M100 15 L85 50 L100 60 L115 50 Z" stroke="currentColor" stroke-width="2" fill="none"/>
    <line x1="100" y1="15" x2="100" y2="55" stroke="currentColor" stroke-width="0.6" opacity="0.6"/>
    <!-- Runes on head -->
    <line x1="92" y1="28" x2="92" y2="42" stroke="currentColor" stroke-width="0.6"/>
    <line x1="108" y1="28" x2="108" y2="42" stroke="currentColor" stroke-width="0.6"/>
    <!-- Binding -->
    <ellipse cx="100" cy="65" rx="8" ry="2.5" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <ellipse cx="100" cy="73" rx="8" ry="2.5" stroke="currentColor" stroke-width="1" fill="none" opacity="0.7"/>
    <!-- Shaft rings -->
    <line x1="92" y1="95" x2="108" y2="95" stroke="currentColor" stroke-width="0.8"/>
    <line x1="92" y1="120" x2="108" y2="120" stroke="currentColor" stroke-width="0.8"/>
  </svg>`,

  artifactGeneric: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Ring with stone -->
    <circle cx="100" cy="80" r="35" stroke="currentColor" stroke-width="2" fill="none"/>
    <circle cx="100" cy="80" r="28" stroke="currentColor" stroke-width="0.6" fill="none" opacity="0.5"/>
    <!-- Central stone -->
    <path d="M100 55 L88 75 L100 90 L112 75 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M88 75 L100 65 L112 75" stroke="currentColor" stroke-width="0.8" opacity="0.6" fill="none"/>
    <!-- Decorative dots -->
    <g fill="currentColor" opacity="0.6">
      <circle cx="100" cy="45" r="1.5"/>
      <circle cx="100" cy="115" r="1.5"/>
      <circle cx="65" cy="80" r="1.5"/>
      <circle cx="135" cy="80" r="1.5"/>
    </g>
    <!-- Knotwork around -->
    <g stroke="currentColor" stroke-width="0.7" fill="none" opacity="0.5">
      <path d="M80 50 Q100 40 120 50"/>
      <path d="M80 110 Q100 120 120 110"/>
    </g>
  </svg>`,
};

if (typeof module !== 'undefined') module.exports = { ART };
