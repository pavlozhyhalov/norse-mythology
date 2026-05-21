/* ============================================================
   NORSE MYTHOLOGY — MAIN STYLESHEET
   Aesthetic: Dark runic / illuminated manuscript
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

/* ─── CSS VARIABLES ─── */
:root {
  --bg-dark:       #0d0d0f;
  --bg-card:       #131318;
  --bg-card2:      #191920;
  --bg-hover:      #1f1f28;
  --border:        #2a2a38;
  --border-glow:   #4a3a20;

  --gold:          #c9a84c;
  --gold-light:    #e8c96a;
  --gold-dim:      #8a6a2a;
  --ice:           #7db8d4;
  --ice-dim:       #3a6a88;
  --fire:          #c44b1a;
  --fire-glow:     #e05520;
  --forest:        #4a7c59;
  --rune-green:    #5aad6e;

  --text-primary:  #e8dcc8;
  --text-secondary:#a89878;
  --text-muted:    #6a5a48;
  --text-bright:   #f0e8d0;

  --font-display:  'Cinzel Decorative', serif;
  --font-heading:  'Cinzel', serif;
  --font-body:     'EB Garamond', Georgia, serif;

  --radius:        4px;
  --radius-lg:     8px;
  --shadow:        0 4px 24px rgba(0,0,0,0.6);
  --shadow-gold:   0 0 20px rgba(201,168,76,0.15);
  --transition:    0.25s ease;
}

/* ─── RESET & BASE ─── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; font-size: 16px; }

body {
  background-color: var(--bg-dark);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 1.05rem;
  line-height: 1.7;
  min-height: 100vh;
  background-image:
    radial-gradient(ellipse at 20% 10%, rgba(201,168,76,0.04) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 90%, rgba(125,184,212,0.04) 0%, transparent 50%);
}

/* ─── SCROLLBAR ─── */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--bg-dark); }
::-webkit-scrollbar-thumb { background: var(--border-glow); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--gold-dim); }

/* ─── TYPOGRAPHY ─── */
h1, h2, h3, h4 { font-family: var(--font-heading); font-weight: 600; line-height: 1.3; color: var(--text-bright); }
h1 { font-family: var(--font-display); font-size: clamp(1.8rem, 5vw, 3rem); }
h2 { font-size: clamp(1.3rem, 3vw, 1.9rem); color: var(--gold); }
h3 { font-size: 1.2rem; color: var(--gold-light); }
h4 { font-size: 1rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.08em; }
p { margin-bottom: 0.9em; }
a { color: var(--ice); text-decoration: none; transition: color var(--transition); }
a:hover { color: var(--ice-dim); }
em { font-style: italic; color: var(--text-secondary); }
strong { color: var(--gold-light); font-weight: 600; }

.oldnorse {
  font-family: var(--font-heading);
  color: var(--text-secondary);
  font-style: italic;
  font-size: 0.9em;
}

/* ─── SITE HEADER ─── */
#site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(13,13,15,0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  padding: 0 2rem;
}

.header-inner {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 64px;
}

.site-logo {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--gold);
  text-decoration: none;
  white-space: nowrap;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.site-logo .rune-icon { font-size: 1.4rem; }

/* ─── NAVIGATION ─── */
#main-nav {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: none;
}
#main-nav::-webkit-scrollbar { display: none; }

.nav-item {
  position: relative;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.45rem 0.8rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-family: var(--font-heading);
  font-size: 0.82rem;
  letter-spacing: 0.05em;
  cursor: pointer;
  border-radius: var(--radius);
  white-space: nowrap;
  transition: color var(--transition), background var(--transition);
}
.nav-btn:hover { color: var(--gold-light); background: rgba(201,168,76,0.08); }
.nav-btn.active { color: var(--gold); background: rgba(201,168,76,0.12); }
.nav-btn .arrow { font-size: 0.6rem; opacity: 0.6; }

/* Dropdown */
.nav-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 220px;
  background: var(--bg-card2);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 0.4rem;
  box-shadow: var(--shadow);
  z-index: 200;
}
.nav-item:hover .nav-dropdown { display: block; }

.dropdown-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.8rem;
  color: var(--text-secondary);
  font-family: var(--font-heading);
  font-size: 0.82rem;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all var(--transition);
  text-decoration: none;
}
.dropdown-link:hover { color: var(--gold-light); background: rgba(201,168,76,0.1); }
.dropdown-link .icon { font-size: 1rem; width: 20px; text-align: center; }

/* Search */
#search-wrapper {
  margin-left: auto;
  position: relative;
}

#search-input {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 0.9rem;
  padding: 0.4rem 1rem 0.4rem 2.2rem;
  border-radius: 20px;
  width: 220px;
  transition: border-color var(--transition), width var(--transition);
  outline: none;
}
#search-input:focus { border-color: var(--gold-dim); width: 280px; }
#search-input::placeholder { color: var(--text-muted); }

.search-icon {
  position: absolute;
  left: 0.7rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  font-size: 0.9rem;
  pointer-events: none;
}

#search-results {
  display: none;
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 340px;
  background: var(--bg-card2);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  max-height: 400px;
  overflow-y: auto;
  z-index: 300;
}
#search-results.visible { display: block; }

.search-result-item {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  padding: 0.7rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid var(--border);
  transition: background var(--transition);
}
.search-result-item:hover { background: var(--bg-hover); }
.search-result-item:last-child { border-bottom: none; }
.search-result-type { font-size: 0.7rem; color: var(--gold-dim); font-family: var(--font-heading); text-transform: uppercase; letter-spacing: 0.1em; }
.search-result-name { font-family: var(--font-heading); color: var(--text-bright); font-size: 0.95rem; }
.search-result-desc { font-size: 0.82rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

/* ─── MAIN LAYOUT ─── */
#main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 64px);
}

/* ─── PAGE VIEWS ─── */
.page-view { display: none; }
.page-view.active { display: block; animation: fadeIn 0.3s ease; }

@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

/* ─── PAGE HEADER ─── */
.page-header {
  text-align: center;
  padding: 3rem 1rem 2rem;
  position: relative;
  margin-bottom: 2.5rem;
}
.page-header::after {
  content: '';
  display: block;
  width: 120px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  margin: 1.2rem auto 0;
}
.page-header .page-icon { font-size: 3rem; display: block; margin-bottom: 0.5rem; }
.page-header h1 { color: var(--gold); margin-bottom: 0.5rem; }
.page-header .subtitle { color: var(--text-secondary); font-style: italic; font-size: 1rem; }
.page-header .source-note { font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem; }

/* ─── CARDS GRID ─── */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.cards-grid-lg {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 1.5rem;
}

/* ─── ENTITY CARD ─── */
.entity-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  cursor: pointer;
  transition: all var(--transition);
  position: relative;
  overflow: hidden;
}
.entity-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 3px;
  height: 100%;
  background: var(--card-accent, var(--gold-dim));
  opacity: 0;
  transition: opacity var(--transition);
}
.entity-card:hover { border-color: var(--border-glow); background: var(--bg-hover); box-shadow: var(--shadow-gold); }
.entity-card:hover::before { opacity: 1; }

.card-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.8rem; }
.card-name { font-family: var(--font-heading); font-size: 1.2rem; color: var(--text-bright); font-weight: 600; }
.card-oldnorse { font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem; }
.card-badge { font-size: 0.7rem; font-family: var(--font-heading); padding: 0.2rem 0.6rem; border-radius: 20px; white-space: nowrap; border: 1px solid; }
.card-badge.aesir    { color: var(--gold);    border-color: var(--gold-dim);    background: rgba(201,168,76,0.08); }
.card-badge.vanir    { color: var(--forest);  border-color: var(--forest);      background: rgba(74,124,89,0.12); }
.card-badge.jotun    { color: var(--ice);     border-color: var(--ice-dim);     background: rgba(125,184,212,0.08); }
.card-badge.monster  { color: var(--fire);    border-color: var(--fire);        background: rgba(196,75,26,0.12); }
.card-badge.creature { color: #a088c0;        border-color: #6a4a90;            background: rgba(100,60,150,0.12); }

.card-desc { font-size: 0.9rem; color: var(--text-secondary); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 0.8rem; }
.card-domains { display: flex; flex-wrap: wrap; gap: 0.3rem; }
.domain-tag { font-size: 0.72rem; font-family: var(--font-heading); padding: 0.15rem 0.5rem; border-radius: 3px; background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.2); color: var(--text-muted); }
.card-footer { margin-top: 0.8rem; padding-top: 0.8rem; border-top: 1px solid var(--border); font-size: 0.8rem; color: var(--text-muted); }

/* ─── DETAIL PANEL ─── */
#detail-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  z-index: 500;
  backdrop-filter: blur(4px);
}
#detail-overlay.open { display: flex; align-items: flex-start; justify-content: flex-end; }

#detail-panel {
  background: var(--bg-card);
  border-left: 1px solid var(--border-glow);
  width: min(680px, 95vw);
  height: 100vh;
  overflow-y: auto;
  padding: 2rem;
  animation: slideIn 0.3s ease;
}
@keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }

#detail-panel .detail-close {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
  background: var(--bg-card);
  padding: 0.5rem 0;
  z-index: 10;
}
.close-btn {
  background: var(--bg-card2);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 0.4rem 1rem;
  border-radius: var(--radius);
  cursor: pointer;
  font-family: var(--font-heading);
  font-size: 0.82rem;
  transition: all var(--transition);
}
.close-btn:hover { color: var(--gold); border-color: var(--gold-dim); }

.detail-name { font-family: var(--font-display); font-size: 1.8rem; color: var(--gold); margin-bottom: 0.3rem; }
.detail-oldnorse { font-style: italic; color: var(--text-muted); margin-bottom: 1.5rem; display: block; }

.detail-section { margin-bottom: 1.8rem; }
.detail-section h3 { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--gold-dim); border-bottom: 1px solid var(--border); padding-bottom: 0.4rem; margin-bottom: 0.8rem; }
.detail-section p { font-size: 0.95rem; color: var(--text-primary); }

.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.info-item { background: var(--bg-dark); border: 1px solid var(--border); border-radius: var(--radius); padding: 0.7rem; }
.info-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); font-family: var(--font-heading); margin-bottom: 0.3rem; }
.info-value { font-size: 0.9rem; color: var(--text-primary); }

.myth-block { background: var(--bg-dark); border: 1px solid var(--border); border-left: 3px solid var(--gold-dim); border-radius: var(--radius); padding: 1rem; margin-bottom: 0.8rem; }
.myth-title { font-family: var(--font-heading); color: var(--gold-light); font-size: 0.95rem; margin-bottom: 0.5rem; }
.myth-text { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7; }

.artifact-list { list-style: none; }
.artifact-list li { padding: 0.6rem 0; border-bottom: 1px solid var(--border); font-size: 0.9rem; }
.artifact-list li:last-child { border-bottom: none; }
.artifact-list li strong { color: var(--gold-light); display: block; font-size: 0.82rem; font-family: var(--font-heading); }

.tags-row { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.tag { font-size: 0.78rem; font-family: var(--font-heading); padding: 0.25rem 0.6rem; border-radius: 3px; background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.2); color: var(--gold-dim); }

/* ─── WORLDS PAGE ─── */
.worlds-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
}

.world-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition);
}
.world-card:hover { border-color: var(--border-glow); transform: translateY(-2px); box-shadow: var(--shadow-gold); }

.world-card-top {
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--bg-card2), var(--bg-card));
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}
.world-symbol { font-size: 2.5rem; flex-shrink: 0; }
.world-card-name { font-family: var(--font-display); font-size: 1.2rem; color: var(--gold); margin-bottom: 0.2rem; }
.world-card-oldnorse { font-size: 0.8rem; color: var(--text-muted); font-style: italic; }
.world-card-inhabitants { font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.3rem; font-family: var(--font-heading); }

.world-card-body { padding: 1.2rem 1.5rem; font-size: 0.9rem; color: var(--text-secondary); }

.world-card-footer { padding: 0.8rem 1.5rem; background: rgba(0,0,0,0.2); display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; }
.ragnarok-note { color: var(--fire); font-family: var(--font-heading); }

/* Yggdrasil diagram */
#yggdrasil-section {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  margin-bottom: 2rem;
}
#yggdrasil-section h2 { text-align: center; margin-bottom: 1.5rem; }

.yggdrasil-diagram {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
}
.ygd-top, .ygd-mid, .ygd-bot { display: flex; flex-direction: column; gap: 0.8rem; }
.ygd-center { display: flex; flex-direction: column; gap: 0.5rem; align-items: center; }

.ygd-world {
  background: var(--bg-card2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.8rem 1rem;
  text-align: center;
  font-size: 0.85rem;
  transition: all var(--transition);
  cursor: pointer;
}
.ygd-world:hover { border-color: var(--gold-dim); background: var(--bg-hover); }
.ygd-world .w-icon { font-size: 1.4rem; display: block; margin-bottom: 0.3rem; }
.ygd-world .w-name { font-family: var(--font-heading); color: var(--gold-light); font-size: 0.82rem; }
.ygd-world .w-sub { color: var(--text-muted); font-size: 0.72rem; }

/* ─── RUNES PAGE ─── */
.runes-filter { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
.aett-btn {
  padding: 0.4rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-family: var(--font-heading);
  font-size: 0.8rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all var(--transition);
}
.aett-btn:hover, .aett-btn.active { color: var(--gold); border-color: var(--gold-dim); background: rgba(201,168,76,0.1); }

.runes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.rune-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.2rem;
  cursor: pointer;
  transition: all var(--transition);
  text-align: center;
  position: relative;
}
.rune-card:hover { border-color: var(--border-glow); background: var(--bg-hover); transform: translateY(-2px); }

.rune-symbol-display {
  font-size: 3.5rem;
  line-height: 1;
  margin-bottom: 0.8rem;
  color: var(--gold-light);
  text-shadow: 0 0 20px rgba(201,168,76,0.4);
}
.rune-name-display { font-family: var(--font-heading); color: var(--text-bright); font-size: 1rem; margin-bottom: 0.2rem; }
.rune-oldnorse-display { font-size: 0.8rem; color: var(--text-muted); font-style: italic; margin-bottom: 0.5rem; }
.rune-meaning-display { font-size: 0.85rem; color: var(--text-secondary); }
.rune-translit { position: absolute; top: 0.7rem; right: 0.7rem; font-family: var(--font-heading); font-size: 0.75rem; color: var(--gold-dim); background: rgba(201,168,76,0.08); padding: 0.15rem 0.4rem; border-radius: 3px; }
.rune-aett-badge { font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-heading); margin-top: 0.5rem; }

/* ─── EVENTS PAGE ─── */
.events-timeline {
  position: relative;
  padding-left: 2rem;
}
.events-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0; bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--gold-dim), var(--fire), var(--border));
}

.event-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  position: relative;
  transition: all var(--transition);
}
.event-card::before {
  content: '';
  position: absolute;
  left: -2.55rem;
  top: 1.8rem;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--gold);
  border: 2px solid var(--bg-dark);
  box-shadow: 0 0 8px var(--gold);
}
.event-card:hover { border-color: var(--border-glow); background: var(--bg-hover); }

.event-era { font-size: 0.72rem; font-family: var(--font-heading); color: var(--gold-dim); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.4rem; }
.event-title { font-family: var(--font-heading); font-size: 1.2rem; color: var(--gold-light); margin-bottom: 0.5rem; }
.event-desc { font-size: 0.9rem; color: var(--text-secondary); }

/* Ragnarok special styling */
.ragnarok-header {
  text-align: center;
  padding: 3rem 1rem;
  background: radial-gradient(ellipse at center, rgba(196,75,26,0.1) 0%, transparent 70%);
  border-bottom: 1px solid var(--border);
  margin-bottom: 2rem;
}
.ragnarok-header h1 { color: var(--fire-glow); font-size: clamp(2rem, 6vw, 4rem); }

.duel-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
.duel-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.2rem; }
.duel-card .vs { text-align: center; font-family: var(--font-display); color: var(--fire); font-size: 1.2rem; margin: 0.5rem 0; }
.duel-hero { font-family: var(--font-heading); color: var(--gold); font-size: 1rem; }
.duel-enemy { font-family: var(--font-heading); color: var(--fire); font-size: 1rem; }
.duel-outcome { font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.5; }

/* Sequence steps */
.step-list { counter-reset: step; }
.step-item { position: relative; padding: 1rem 1rem 1rem 3.5rem; background: var(--bg-dark); border: 1px solid var(--border); border-radius: var(--radius); margin-bottom: 0.7rem; }
.step-item::before {
  counter-increment: step;
  content: counter(step);
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: 26px; height: 26px;
  background: var(--gold-dim);
  color: var(--bg-dark);
  border-radius: 50%;
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.step-title { font-family: var(--font-heading); color: var(--gold-light); font-size: 0.95rem; margin-bottom: 0.3rem; }
.step-text { font-size: 0.9rem; color: var(--text-secondary); }

/* ─── GENEALOGY PAGE ─── */
#genealogy-container {
  overflow-x: auto;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  min-height: 600px;
}

#genealogy-svg { display: block; min-width: 1000px; }

.gen-node { cursor: pointer; }
.gen-node circle { transition: all var(--transition); }
.gen-node:hover circle { filter: brightness(1.3); }
.gen-text { font-family: var(--font-heading); font-size: 11px; fill: var(--text-bright); pointer-events: none; }
.gen-edge { fill: none; stroke: var(--border); stroke-width: 1.5; }
.gen-edge.parent { stroke: var(--gold-dim); }
.gen-edge.created { stroke: var(--ice-dim); stroke-dasharray: 4 3; }

.gen-legend { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border); }
.gen-legend-item { display: flex; align-items: center; gap: 0.4rem; font-size: 0.8rem; font-family: var(--font-heading); color: var(--text-muted); }
.gen-legend-dot { width: 12px; height: 12px; border-radius: 50%; }

/* ─── ARTIFACTS PAGE ─── */
.artifact-detail-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.artifact-header {
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--bg-card2), var(--bg-card));
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 1.2rem;
}
.artifact-icon-display { font-size: 3rem; }
.artifact-header-info h3 { font-family: var(--font-display); font-size: 1.3rem; color: var(--gold); margin-bottom: 0.2rem; }
.artifact-header-info .owner { font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-heading); }

.artifact-body { padding: 1.5rem; }
.artifact-props { list-style: none; }
.artifact-props li { padding: 0.5rem 0 0.5rem 1.5rem; border-bottom: 1px solid var(--border); font-size: 0.9rem; color: var(--text-secondary); position: relative; }
.artifact-props li::before { content: '✦'; position: absolute; left: 0; color: var(--gold-dim); font-size: 0.7rem; top: 0.7rem; }
.artifact-props li:last-child { border-bottom: none; }

/* ─── HOME PAGE ─── */
.home-hero {
  text-align: center;
  padding: 5rem 2rem 4rem;
  position: relative;
}
.home-hero::before {
  content: 'ᚨ ᛋ ᚷ ᚨ ᚱ ᛞ';
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  color: rgba(201,168,76,0.1);
  letter-spacing: 0.5rem;
  white-space: nowrap;
}

.home-hero h1 { font-size: clamp(2.5rem, 8vw, 5rem); color: var(--gold); line-height: 1.1; margin-bottom: 1rem; }
.home-hero p { font-size: 1.1rem; color: var(--text-secondary); max-width: 600px; margin: 0 auto 2rem; }

.home-divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  color: var(--gold-dim);
  font-size: 1.2rem;
  letter-spacing: 0.5rem;
}
.home-divider::before, .home-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border));
}
.home-divider::after { background: linear-gradient(90deg, var(--border), transparent); }

.home-nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
}

.home-nav-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem 1rem;
  text-align: center;
  cursor: pointer;
  transition: all var(--transition);
}
.home-nav-card:hover { border-color: var(--gold-dim); background: var(--bg-hover); transform: translateY(-3px); box-shadow: var(--shadow-gold); }
.home-nav-card .hn-icon { font-size: 2.2rem; display: block; margin-bottom: 0.5rem; }
.home-nav-card .hn-title { font-family: var(--font-heading); color: var(--gold-light); font-size: 0.95rem; margin-bottom: 0.3rem; }
.home-nav-card .hn-desc { font-size: 0.78rem; color: var(--text-muted); }

/* Sources block */
.sources-block {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-left: 3px solid var(--gold-dim);
  border-radius: var(--radius-lg);
  padding: 1.2rem 1.5rem;
  margin-top: 2rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}
.sources-block strong { color: var(--gold-dim); display: block; margin-bottom: 0.4rem; font-family: var(--font-heading); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; }

/* ─── FOOTER ─── */
#site-footer {
  border-top: 1px solid var(--border);
  padding: 2rem;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.82rem;
}
#site-footer a { color: var(--gold-dim); }

/* ─── UTILITY ─── */
.section-title { font-family: var(--font-heading); font-size: 1.3rem; color: var(--gold); margin-bottom: 1.2rem; display: flex; align-items: center; gap: 0.7rem; }
.section-title::after { content: ''; flex: 1; height: 1px; background: var(--border); }
.text-center { text-align: center; }
.mb-2 { margin-bottom: 2rem; }
.mt-2 { margin-top: 2rem; }

/* ─── RESPONSIVE ─── */
@media (max-width: 768px) {
  #site-header { padding: 0 1rem; }
  .header-inner { gap: 0.5rem; }
  .site-logo span:not(.rune-icon) { display: none; }
  #search-input { width: 160px; }
  #search-input:focus { width: 200px; }
  #main-content { padding: 1rem; }
  .cards-grid { grid-template-columns: 1fr; }
  .cards-grid-lg { grid-template-columns: 1fr; }
  .info-grid { grid-template-columns: 1fr; }
  #detail-panel { width: 100vw; }
  .worlds-grid { grid-template-columns: 1fr; }
  .runes-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); }
  .home-nav-grid { grid-template-columns: repeat(2, 1fr); }
}
