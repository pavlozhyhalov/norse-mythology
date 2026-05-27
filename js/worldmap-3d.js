// ═══════════════════════════════════════════════════════════
// YGGDRASIL 3D MAP — Final version
// 9 worlds + tree, hover highlight, click info, mobile ready
// ═══════════════════════════════════════════════════════════

const WORLDS_CONFIG = {
  asgard:      { file:'asgard.glb',      n:'Асґард',        no:'Ásgarðr',       s:'Обитель Асів',          inh:'Боги-аси',              emissive:0xffcc44, pos:[0, 4.2, 0],      scale:0.55, desc:'Небесна фортеця богів-асів на вершині Іґґдрасіля. З\'єднана з Мідґардом веселковим мостом Біфрост. Тут Одін спостерігає всі дев\'ять світів зі срібного трону Ґлідскьяльф.', det:['Вальгалла — зала 540 дверей, кожна для 800 воїнів','Ґлідскьяльф — трон з якого видно всі дев\'ять світів','Стіни зведені велетом-будівельником і конем Свадільфарі','Після Раґнарьоку вижившi боги оселяться на Ідавьоллі'] },
  alfheim:     { file:'niflheim.glb',    n:'Альфгейм',      no:'Álfheimr',      s:'Домівка Ельфів',        inh:'Світлі ельфи',          emissive:0xaaccff, pos:[-3.2, 3.0, -1], scale:0.45, desc:'Світ світлих ельфів — істот прекрасніших за сонце. Подарований Фрейру як зубний подарунок. Ельфи пов\'язані зі світлом і родючістю.', det:['Ljósálfar — прекрасніші за сонце','Dökkálfar живуть під землею','Ельфи могли насилати кошмари людям'] },
  vanaheim:    { file:'vanaheim.glb',    n:'Ванагейм',      no:'Vanaheimr',     s:'Домівка Ванів',         inh:'Боги-вани',             emissive:0x44cc44, pos:[3.2, 3.0, -1],  scale:0.45, desc:'Прадавній світ богів-ванів, пов\'язаних з морем, родючістю і магією. Фрейр, Фрейя і Ньорд перейшли до Асґарда після мирної угоди.', det:['Вани — найстаріший пантеон','Принесли асам магію сейд через Фрейю','Ньорд, Фрейр і Фрейя — заложники в Асґарді'] },
  midgard:     { file:'midgard.glb',     n:'Мідґард',       no:'Miðgarðr',      s:'Світ Людей',            inh:'Люди',                  emissive:0x33aa33, pos:[0, 0.2, 0],      scale:0.6,  desc:'Світ людей у центрі Всесвіту, створений з тіла першовелета Іміра. Оточений океаном де живе Йормунґанд.', det:['Земля = плоть Іміра, море = кров, гори = кості','Перші люди Аскр і Ембля — на морському березі','Йормунґанд оточує весь світ кусаючи хвіст','З\'єднаний з Асґардом мостом Біфрост'] },
  jotunheim:   { file:'jotunheim.glb',   n:'Йотунгейм',     no:'Jötunheimr',    s:'Домівка Велетів',       inh:'Йотуни',                emissive:0x4488cc, pos:[3.5, 0.8, 1],   scale:0.45, desc:'Царство йотунів — первісних сил природи. Столиця Утґард. Боги попри ворожнечу беруть у велетів дружин і мудрість.', det:['Утґард-Локі — король що обдурив Тора','Мімірсбрунн — криниця мудрості Одіна','Гірські, льодові та вогняні велети'] },
  muspelheim:  { file:'muspelheim.glb',  n:'Муспельгейм',   no:'Múspellsheimr', s:'Світ Вогню',            inh:'Сурт і сини Муспелля',  emissive:0xff4400, pos:[-3.5, 0.8, 1],  scale:0.45, desc:'Первозданний світ вогню. Охороняється Суртом з мечем яскравішим за сонце. У Раґнарьок спалить весь всесвіт.', det:['Іскри стали зірками при створенні','Сурт вб\'є Фрейра і спалить землю','Сини Муспелля зламають міст Біфрост'] },
  svartalfheim:{ file:'svartalfheim.glb',n:'Свартальфгейм',no:'Svartálfaheimr', s:'Домівка Гномів',        inh:'Дверги-ковалі',         emissive:0xcc6622, pos:[-3.0,-3.2, 0.5],scale:0.45, desc:'Підземний світ гномів-двергів — найкращих ковалів всіх дев\'яти світів. Тут виковані всі священні артефакти богів.', det:['Мйольнір, Ґунґнір, Скідбладнір — звідси','Брісінґамен Фрейї — робота чотирьох гномів','4 дверги тримають небосхил по сторонах'] },
  helheim:     { file:'helheim.glb',     n:'Гельгейм',      no:'Helheimr',      s:'Царство Мертвих',       inh:'Мертві, Гель',          emissive:0x7722cc, pos:[0, -4.0, 0],     scale:0.5,  desc:'Царство для тих хто помер не в бою. Правителька Гель — донька Локі. Вхід охороняє пес Ґармр.', det:['Гель — наполовину жива, наполовину мертва','Бальдр потрапив сюди після загибелі','У Раґнарьок мертві відпливуть на Нагльфарі'] },
  niflheim:    { file:'asgard.glb',      n:'Ніфльгейм',     no:'Niflheimr',     s:'Світ Туману',           inh:'Нідгоґр, змії',         emissive:0x2255aa, pos:[3.0,-3.2, 0.5],  scale:0.45, desc:'Найстаріший зі світів — первозданний світ льоду і темряви. В центрі Хвергельмір — джерело 11 первісних рік.', det:['Хвергельмір — джерело всіх рік всесвіту','Нідгоґр гризе корінь Іґґдрасіля','Після Раґнарьоку дракон виживе'] },
};

function isMobile() { // force mobile for all devices temporarily
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 900;
}

function initWorldMap3D() {
  const container = document.getElementById('worldmap-container');
  if (!container) return;
  container.innerHTML = '';
  injectStyles();
  container.innerHTML = buildHTML();
  if (isMobile()) {
    initMobileMap();
  } else {
    load3DScripts();
  }
}

function injectStyles() {
  if (document.getElementById('wm-styles')) return;
  const s = document.createElement('style');
  s.id = 'wm-styles';
  s.textContent = `
    #wm-root{position:relative;width:100%;height:600px;background:radial-gradient(ellipse at 50% 30%,#0d0a1a 0%,#040208 100%);overflow:hidden;border:1px solid #2a1a3a;cursor:grab}
    #wm-root:active{cursor:grabbing}
    #wm-canvas{display:block;width:100%!important;height:100%!important}
    #wm-loading{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:radial-gradient(ellipse at 50% 30%,#0d0a1a,#040208);z-index:20}
    #wm-loading-title{font-family:Cinzel,serif;font-size:.7rem;letter-spacing:.3em;color:#c89030;text-transform:uppercase;margin-bottom:20px}
    #wm-loading-sub{font-family:Cinzel,serif;font-size:.5rem;letter-spacing:.2em;color:#5a4020;text-transform:uppercase;margin-bottom:16px}
    #wm-bar{width:220px;height:1px;background:#1a1208;margin-bottom:8px}
    #wm-bar-fill{height:100%;background:linear-gradient(90deg,#c89030,#ffcc44);width:0%;transition:width .4s ease}
    #wm-bar-pct{font-family:Cinzel,serif;font-size:.5rem;color:#5a4020;letter-spacing:.1em}
    #wm-hint{position:absolute;bottom:14px;left:50%;transform:translateX(-50%);font-family:Cinzel,serif;font-size:.5rem;letter-spacing:.2em;color:#3a2a0a;text-transform:uppercase;white-space:nowrap;pointer-events:none;transition:opacity .3s}
    #wm-tip{position:absolute;display:none;background:rgba(4,2,10,.95);border:1px solid rgba(200,160,60,.6);padding:6px 16px;font-family:Cinzel,serif;font-size:.6rem;letter-spacing:.12em;color:#e8c060;text-transform:uppercase;white-space:nowrap;pointer-events:none;transform:translate(-50%,-140%);box-shadow:0 0 20px rgba(200,160,60,.2)}
    #wm-panel{background:linear-gradient(180deg,rgba(8,4,16,.98) 0%,rgba(4,2,10,.99) 100%);border-top:1px solid rgba(180,130,40,.2);padding:16px 20px 20px;display:none;position:relative}
    .wp-eye{font-family:Cinzel,serif;font-size:.5rem;letter-spacing:.28em;color:#5a4018;text-transform:uppercase;margin-bottom:6px}
    .wp-row{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:10px;flex-wrap:wrap}
    .wp-name{font-family:Cinzel,serif;font-size:1.3rem;letter-spacing:.07em;color:#e8c060;font-weight:600;line-height:1.2}
    .wp-sub{font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-size:.88rem;color:#6a5020;margin-top:3px}
    .wp-btns{display:flex;gap:6px;flex-shrink:0;margin-top:3px}
    .wpb{background:none;border:1px solid rgba(180,140,40,.25);color:#7a5a20;font-family:Cinzel,serif;font-size:.5rem;letter-spacing:.14em;text-transform:uppercase;padding:6px 14px;cursor:pointer;transition:all .2s;white-space:nowrap}
    .wpb:hover,.wpb:active{border-color:rgba(200,160,60,.7);color:#e8c060;background:rgba(200,160,60,.05)}
    .wp-desc{font-family:'Cormorant Garamond',Georgia,serif;font-size:.95rem;color:#8a7040;line-height:1.72;margin-bottom:8px}
    .wp-more{display:none;border-top:1px solid rgba(180,130,40,.1);padding-top:10px;margin-top:6px}
    .wp-more.on{display:block}
    .wp-more ul{list-style:none;padding:0}
    .wp-more li{font-family:'Cormorant Garamond',Georgia,serif;font-size:.9rem;color:#6a5530;line-height:1.65;padding:3px 0 3px 18px;position:relative}
    .wp-more li::before{content:'ᚱ';position:absolute;left:0;color:#3a2a10;font-size:.65rem;top:4px}
    #wm-mobile{width:100%;background:#0a0612;overflow:hidden}
    #wm-mobile svg{width:100%;display:block}
    .wz{cursor:pointer}
    .wz-bg{opacity:.85;transition:opacity .15s}
    .wz:active .wz-bg{opacity:1}
  `;
  document.head.appendChild(s);
}

function buildHTML() {
  return `
    <div id="wm-root">
      <canvas id="wm-canvas"></canvas>
      <div id="wm-loading">
        <div id="wm-loading-title">Іґґдрасіль</div>
        <div id="wm-loading-sub">Відкриваємо дев'ять світів…</div>
        <div id="wm-bar"><div id="wm-bar-fill"></div></div>
        <div id="wm-bar-pct">0%</div>
      </div>
      <div id="wm-tip"></div>
      <div id="wm-hint">Тягни · Скролл · Клікай на світи</div>
    </div>
    <div id="wm-panel">
      <div class="wp-eye" id="wp-eye"></div>
      <div class="wp-row">
        <div><div class="wp-name" id="wp-name"></div><div class="wp-sub" id="wp-sub"></div></div>
        <div class="wp-btns">
          <button class="wpb" id="wpb-det" onclick="wmToggleDet()">Детально →</button>
          <button class="wpb" onclick="wmClose()">✕</button>
        </div>
      </div>
      <p class="wp-desc" id="wp-desc"></p>
      <div class="wp-more" id="wp-more"><ul id="wp-list"></ul></div>
    </div>`;
}

function setProgress(p, label) {
  const f = document.getElementById('wm-bar-fill');
  const t = document.getElementById('wm-bar-pct');
  const s = document.getElementById('wm-loading-sub');
  if (f) f.style.width = p + '%';
  if (t) t.textContent = Math.round(p) + '%';
  if (s && label) s.textContent = label;
}

// ═══════════════ 3D DESKTOP ═══════════════
function load3DScripts() {
  const cdn = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/';
  const jcd = 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/';
  loadScript(cdn + 'three.min.js', () => {
    loadScript(jcd + 'controls/OrbitControls.js', () => {
      loadScript(jcd + 'loaders/DRACOLoader.js', () => {
        loadScript(jcd + 'loaders/GLTFLoader.js', () => {
          init3D();
        });
      });
    });
  });
}

function loadScript(src, cb) {
  const s = document.createElement('script');
  s.src = src; s.onload = cb;
  s.onerror = () => { console.warn('Failed:', src); cb && cb(); };
  document.head.appendChild(s);
}

function init3D() {
  const root = document.getElementById('wm-root');
  const canvas = document.getElementById('wm-canvas');
  if (!root || !canvas) return;
  const W = root.clientWidth || 800, H = 600;
  canvas.width = W; canvas.height = H;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(W, H);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x040208, 1);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x04020a, 0.028);

  const cam = new THREE.PerspectiveCamera(45, W / H, 0.01, 150);
  cam.position.set(0, 1.5, 14);

  // Lighting
  scene.add(new THREE.AmbientLight(0xfff0e0, 1.8));
  const sun = new THREE.DirectionalLight(0xfff8e0, 2.0);
  sun.position.set(6, 12, 8);
  sun.castShadow = true;
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0xaabbff, 0.6);
  fill.position.set(-5, 3, -5);
  scene.add(fill);
  const under = new THREE.PointLight(0x4422aa, 1.2, 20);
  under.position.set(0, -5, 0);
  scene.add(under);
  const gold = new THREE.PointLight(0xffaa22, 1.5, 18);
  gold.position.set(0, 6, 2);
  scene.add(gold);

  // Stars
  const sv = [];
  for (let i = 0; i < 1500; i++) {
    const t = Math.random()*Math.PI*2, p = Math.acos(2*Math.random()-1), r = 50+Math.random()*30;
    sv.push(r*Math.sin(p)*Math.cos(t), r*Math.sin(p)*Math.sin(t), r*Math.cos(p));
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.Float32BufferAttribute(sv, 3));
  scene.add(new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xfff0cc, size: 0.15, transparent: true, opacity: 0.6 })));

  // Aurora rings
  [[14,0x001a2a,0.12],[17,0x1a0028,0.09],[20,0x001a0a,0.07]].forEach(([r,c,o],i) => {
    const g = new THREE.TorusGeometry(r, 0.06, 4, 80);
    const m = new THREE.MeshBasicMaterial({ color:c, transparent:true, opacity:o, side:THREE.DoubleSide });
    const mesh = new THREE.Mesh(g, m);
    mesh.rotation.x = Math.PI/2 + 0.3 + i*0.15;
    mesh.position.y = 8 + i*2;
    scene.add(mesh);
  });

  const controls = new THREE.OrbitControls(cam, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.minDistance = 4;
  controls.maxDistance = 28;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.3;
  controls.enablePan = false;

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const worldMeshes = [];
  const worldMap = new Map();
  let hoveredId = null;
  let loadedCount = 0;
  const totalModels = Object.keys(WORLDS_CONFIG).length + 1; // +tree

  const draco = new THREE.DRACOLoader();
  draco.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/libs/draco/');
  const loader = new THREE.GLTFLoader();
  loader.setDRACOLoader(draco);

  function onModelLoaded() {
    loadedCount++;
    const pct = 10 + (loadedCount / totalModels) * 85;
    setProgress(pct, `Завантажено ${loadedCount}/${totalModels}…`);
    if (loadedCount >= totalModels) {
      setProgress(100, 'Готово!');
      setTimeout(() => {
        const l = document.getElementById('wm-loading');
        if (l) { l.style.opacity = '0'; l.style.transition = 'opacity .5s'; setTimeout(() => { l.style.display = 'none'; }, 500); }
      }, 300);
    }
  }

  // Load tree
  setProgress(5, 'Завантажуємо Іґґдрасіль…');
  loader.load('models/tree.glb', (gltf) => {
    const m = gltf.scene;
    const box = new THREE.Box3().setFromObject(m);
    const size = box.getSize(new THREE.Vector3());
    const sc = 9.0 / Math.max(size.x, size.y, size.z);
    const center = box.getCenter(new THREE.Vector3());
    m.scale.setScalar(sc);
    m.position.sub(center.multiplyScalar(sc));
    m.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } });
    scene.add(m);
    onModelLoaded();
  }, null, (e) => { console.error('tree:', e); onModelLoaded(); });

  // Load worlds
  Object.entries(WORLDS_CONFIG).forEach(([id, cfg]) => {
    setProgress(5, `Завантажуємо ${cfg.n}…`);
    loader.load(`models/${cfg.file}`, (gltf) => {
      const m = gltf.scene;
      const box = new THREE.Box3().setFromObject(m);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const sc = (cfg.scale * 2.5) / maxDim;
      const center = box.getCenter(new THREE.Vector3());
      m.scale.setScalar(sc);
      m.position.set(...cfg.pos);
      m.position.sub(center.multiplyScalar(sc));
      m.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);

      const meshList = [];
      m.traverse(c => {
        if (c.isMesh) {
          c.castShadow = true;
          c.receiveShadow = true;
          c.material = c.material.clone();
          c.userData.worldId = id;
          c.userData.origEmissive = c.material.emissive ? c.material.emissive.clone() : new THREE.Color(0);
          c.userData.origEI = c.material.emissiveIntensity || 0;
          meshList.push(c);
          worldMeshes.push(c);
        }
      });
      worldMap.set(id, { group: m, meshes: meshList, cfg });
      scene.add(m);
      onModelLoaded();
    }, null, (e) => { console.error(id, e); onModelLoaded(); });
  });

  // Label sprites
  function makeLabel(text, color) {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 44;
    const ctx = c.getContext('2d');
    ctx.font = '600 13px serif';
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 128, 22);
    const tex = new THREE.CanvasTexture(c);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
    sp.scale.set(1.6, 0.28, 1);
    sp.renderOrder = 10;
    return sp;
  }

  Object.entries(WORLDS_CONFIG).forEach(([id, cfg]) => {
    const lbl = makeLabel(cfg.n, '#e8c060');
    lbl.position.set(cfg.pos[0], cfg.pos[1] + 1.4, cfg.pos[2]);
    scene.add(lbl);
  });

  // Interaction
  function highlight(id, on) {
    const w = worldMap.get(id);
    if (!w) return;
    w.meshes.forEach(m => {
      if (on) {
        m.material.emissive = new THREE.Color(w.cfg.emissive);
        m.material.emissiveIntensity = 0.35;
      } else {
        m.material.emissive.copy(m.userData.origEmissive);
        m.material.emissiveIntensity = m.userData.origEI;
      }
    });
  }

  function getHit(cx, cy) {
    const rect = root.getBoundingClientRect();
    mouse.x = ((cx - rect.left) / root.clientWidth) * 2 - 1;
    mouse.y = -((cy - rect.top) / H) * 2 + 1;
    raycaster.setFromCamera(mouse, cam);
    const hits = raycaster.intersectObjects(worldMeshes, false);
    return hits.length ? hits[0] : null;
  }

  let mouseDown = { x: 0, y: 0 };
  root.addEventListener('mousedown', e => { mouseDown = { x: e.clientX, y: e.clientY }; });
  root.addEventListener('mouseup', e => {
    if (Math.abs(e.clientX - mouseDown.x) > 5 || Math.abs(e.clientY - mouseDown.y) > 5) return;
    const hit = getHit(e.clientX, e.clientY);
    if (hit) { controls.autoRotate = false; wmOpen(hit.object.userData.worldId); }
  });

  root.addEventListener('mousemove', e => {
    const hit = getHit(e.clientX, e.clientY);
    const tip = document.getElementById('wm-tip');
    const id = hit ? hit.object.userData.worldId : null;
    if (id !== hoveredId) {
      if (hoveredId) highlight(hoveredId, false);
      if (id) highlight(id, true);
      hoveredId = id;
    }
    if (id) {
      const cfg = WORLDS_CONFIG[id];
      const rect = root.getBoundingClientRect();
      tip.textContent = cfg.n + ' · ' + cfg.no;
      tip.style.display = 'block';
      tip.style.left = (e.clientX - rect.left) + 'px';
      tip.style.top = (e.clientY - rect.top) + 'px';
      root.style.cursor = 'pointer';
    } else {
      tip.style.display = 'none';
      root.style.cursor = '';
    }
  });
  root.addEventListener('mouseleave', () => {
    document.getElementById('wm-tip').style.display = 'none';
    if (hoveredId) { highlight(hoveredId, false); hoveredId = null; }
  });
  root.addEventListener('wheel', () => { controls.autoRotate = false; });

  // Touch
  let touchStart = null;
  root.addEventListener('touchstart', e => {
    if (e.touches.length === 1) touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY, t: Date.now() };
  }, { passive: true });
  root.addEventListener('touchend', e => {
    if (!touchStart || e.changedTouches.length !== 1) return;
    const t = e.changedTouches[0];
    const dx = Math.abs(t.clientX - touchStart.x), dy = Math.abs(t.clientY - touchStart.y);
    if (dx < 12 && dy < 12 && Date.now() - touchStart.t < 300) {
      const hit = getHit(t.clientX, t.clientY);
      if (hit) { controls.autoRotate = false; wmOpen(hit.object.userData.worldId); }
    }
    touchStart = null;
  }, { passive: true });

  // Animate
  let tick = 0;
  function animate() {
    requestAnimationFrame(animate);
    tick += 0.016;
    gold.intensity = 1.3 + Math.sin(tick * 1.2) * 0.3;
    under.intensity = 1.0 + Math.sin(tick * 0.8) * 0.25;
    controls.update();
    renderer.render(scene, cam);
  }
  animate();

  window.addEventListener('resize', () => {
    const nW = root.clientWidth;
    renderer.setSize(nW, H);
    cam.aspect = nW / H;
    cam.updateProjectionMatrix();
  });
}

// ═══════════════ MOBILE SVG ═══════════════
function initMobileMap() {
  const root = document.getElementById('wm-root');
  root.style.height = 'auto';
  root.innerHTML = `<div id="wm-mobile">` + buildSVGMap() + `</div>`;
  document.getElementById('wm-loading') && (document.getElementById('wm-loading').style.display = 'none');
}

function buildSVGMap() {
  return `<svg viewBox="0 0 500 820" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="gS" cx="50%" cy="30%" r="70%"><stop offset="0%" stop-color="#0e0a1a"/><stop offset="100%" stop-color="#040208"/></radialGradient>
  <radialGradient id="gU" cx="50%" cy="80%" r="60%"><stop offset="0%" stop-color="#06040e"/><stop offset="100%" stop-color="#020106"/></radialGradient>
</defs>
<rect width="500" height="820" fill="url(#gS)"/>
<rect y="580" width="500" height="240" fill="url(#gU)"/>
<g fill="#fff8e0" opacity=".45">
  <circle cx="32" cy="22" r=".8"/><circle cx="80" cy="14" r="1"/><circle cx="135" cy="38" r=".7"/>
  <circle cx="315" cy="28" r="1.1"/><circle cx="385" cy="11" r=".8"/><circle cx="445" cy="35" r=".9"/>
  <circle cx="198" cy="16" r=".9"/><circle cx="472" cy="19" r=".7"/><circle cx="20" cy="95" r=".6"/>
  <circle cx="58" cy="62" r=".5"/><circle cx="425" cy="58" r=".6"/><circle cx="160" cy="68" r=".5"/>
</g>
<ellipse cx="250" cy="180" rx="195" ry="135" fill="#060412" opacity=".95"/>
<ellipse cx="250" cy="174" rx="182" ry="122" fill="#08051a"/>
<ellipse cx="250" cy="150" rx="138" ry="98" fill="#0a0820"/>
<ellipse cx="250" cy="128" rx="102" ry="72" fill="#0c0a22"/>
<ellipse cx="250" cy="108" rx="68" ry="50" fill="#0e0c24"/>
<ellipse cx="100" cy="205" rx="38" ry="26" fill="#080416"/>
<ellipse cx="400" cy="205" rx="38" ry="26" fill="#080416"/>
<ellipse cx="200" cy="262" rx="28" ry="18" fill="#080416"/>
<ellipse cx="300" cy="262" rx="28" ry="18" fill="#080416"/>
<ellipse cx="210" cy="104" rx="26" ry="13" fill="#1a1040" opacity=".5"/>
<ellipse cx="290" cy="108" rx="22" ry="11" fill="#1a1040" opacity=".4"/>
<text x="250" y="148" font-family="Cinzel,serif" font-size="12" font-weight="600" fill="#3a2860" text-anchor="middle" letter-spacing="4" opacity=".7">ІҐҐДРАСІЛЬ</text>
<path d="M226,282 C223,308 221,338 222,378 C224,418 226,458 228,508 C230,558 232,598 234,638 C236,678 238,708 240,728 L260,728 C262,708 264,678 266,638 C268,598 270,558 272,508 C274,458 276,418 278,378 C280,338 278,308 275,282 Z" fill="#160e06" opacity=".9"/>
<path d="M232,295 C230,345 229,415 230,508" stroke="#221408" stroke-width="2" fill="none" opacity=".5"/>
<path d="M268,295 C270,345 271,415 270,508" stroke="#221408" stroke-width="2" fill="none" opacity=".5"/>
<path d="M228,308 C210,303 178,293 146,278 C118,266 96,256 80,256" stroke="#180e06" stroke-width="16" fill="none" stroke-linecap="round"/>
<path d="M228,308 C210,303 178,293 146,278 C118,266 96,256 80,256" stroke="#241408" stroke-width="8" fill="none" stroke-linecap="round"/>
<path d="M272,308 C290,303 322,293 354,278 C382,266 404,256 420,256" stroke="#180e06" stroke-width="16" fill="none" stroke-linecap="round"/>
<path d="M272,308 C290,303 322,293 354,278 C382,266 404,256 420,256" stroke="#241408" stroke-width="8" fill="none" stroke-linecap="round"/>
<path d="M376,256 C402,318 412,368 378,413" stroke="#224488" stroke-width="3.5" fill="none" opacity=".45" stroke-linecap="round"/>
<path d="M377,258 C403,320 413,370 379,414" stroke="#ffaa33" stroke-width="1.5" fill="none" opacity=".25" stroke-linecap="round"/>
<ellipse cx="250" cy="428" rx="122" ry="20" fill="#141a0e"/>
<ellipse cx="250" cy="428" rx="122" ry="20" fill="none" stroke="#243018" stroke-width="1"/>
<path d="M192,428 L208,400 L226,428 Z" fill="#182010"/><path d="M258,428 L276,396 L295,428 Z" fill="#1a2412"/>
<path d="M127,428 C116,413 112,392 122,377 C135,360 163,356 193,360 C228,364 263,370 293,368 C323,366 354,358 368,368 C387,380 388,404 378,420 C366,438 343,446 313,448 C283,450 252,446 222,444 C192,442 162,442 146,436" stroke="#1a3e10" stroke-width="5.5" fill="none" stroke-linecap="round"/>
<path d="M234,638 C225,658 204,683 183,698 C163,713 138,723 116,726" stroke="#100a04" stroke-width="18" fill="none" stroke-linecap="round"/>
<path d="M250,638 C250,663 247,688 244,713 C242,733 240,750 240,763" stroke="#100a04" stroke-width="16" fill="none" stroke-linecap="round"/>
<path d="M266,638 C276,658 296,683 316,698 C336,713 362,723 384,726" stroke="#100a04" stroke-width="18" fill="none" stroke-linecap="round"/>
<ellipse cx="145" cy="738" rx="62" ry="28" fill="#0c0818" opacity=".95"/>
<ellipse cx="355" cy="738" rx="62" ry="28" fill="#0c0818" opacity=".95"/>
<ellipse cx="250" cy="785" rx="85" ry="26" fill="#080610" opacity=".95"/>
<ellipse cx="360" cy="740" rx="28" ry="13" fill="#1a0806" opacity=".8"/>
<path d="M346,746 C349,736 353,728 356,720 C360,728 358,736 362,746 Z" fill="#5a1606" opacity=".65"/>
<ellipse cx="145" cy="752" rx="55" ry="12" fill="#08101a" opacity=".6"/>
${buildWorldZones()}
<text x="470" y="335" font-family="Cinzel,serif" font-size="7" fill="#2a2040" text-anchor="end" letter-spacing="2" opacity=".6">НЕБЕСНІ</text>
<text x="470" y="458" font-family="Cinzel,serif" font-size="7" fill="#1a2010" text-anchor="end" letter-spacing="2" opacity=".6">СЕРЕДНІ</text>
<text x="470" y="718" font-family="Cinzel,serif" font-size="7" fill="#181018" text-anchor="end" letter-spacing="2" opacity=".6">ПІДЗЕМНІ</text>
</svg>`;
}

function buildWorldZones() {
  const zones = [
    { id:'asgard',       x:278, y:268, w:134, label:'АСҐАРД',        stroke:'#c89030', fill:'#e8c060' },
    { id:'alfheim',      x:52,  y:250, w:120, label:'АЛЬФГЕЙМ',      stroke:'#9988cc', fill:'#ccbbff' },
    { id:'vanaheim',     x:358, y:218, w:110, label:'ВАНАГЕЙМ',      stroke:'#448830', fill:'#66cc44' },
    { id:'midgard',      x:168, y:376, w:118, label:'МІДҐАРД',       stroke:'#338830', fill:'#44cc44' },
    { id:'jotunheim',    x:322, y:358, w:124, label:'ЙОТУНГЕЙМ',     stroke:'#224488', fill:'#4488cc' },
    { id:'muspelheim',   x:28,  y:376, w:120, label:'МУСПЕЛЬГЕЙМ',   stroke:'#882210', fill:'#cc4422' },
    { id:'svartalfheim', x:28,  y:716, w:122, label:'СВАРТАЛЬФГЕЙМ', stroke:'#884422', fill:'#cc7733' },
    { id:'helheim',      x:180, y:746, w:94,  label:'ГЕЛЬГЕЙМ',      stroke:'#552288', fill:'#8844cc' },
    { id:'niflheim',     x:298, y:716, w:110, label:'НІФЛЬГЕЙМ',     stroke:'#224488', fill:'#4466aa' },
  ];
  return zones.map(z => {
    const cx = z.x + z.w/2;
    return `<g class="wz" onclick="wmOpen('${z.id}')">
      <rect x="${z.x}" y="${z.y}" width="${z.w}" height="22" rx="2" fill="#04020a" class="wz-bg" opacity=".9"/>
      <rect x="${z.x}" y="${z.y}" width="${z.w}" height="22" rx="2" fill="none" stroke="${z.stroke}" stroke-width="1"/>
      <text x="${cx}" y="${z.y+14}" font-family="Cinzel,serif" font-size="${z.label.length > 10 ? 7.5 : 9}" font-weight="600" fill="${z.fill}" text-anchor="middle" letter-spacing=".8">${z.label}</text>
    </g>`;
  }).join('');
}

// ═══════════════ PANEL ═══════════════
function wmOpen(id) {
  const cfg = WORLDS_CONFIG[id];
  if (!cfg) return;
  document.getElementById('wp-eye').textContent = cfg.inh + ' · ' + cfg.no;
  document.getElementById('wp-name').textContent = cfg.n;
  document.getElementById('wp-sub').textContent = cfg.s;
  document.getElementById('wp-desc').textContent = cfg.desc;
  document.getElementById('wp-list').innerHTML = (cfg.det||[]).map(d => `<li>${d}</li>`).join('');
  document.getElementById('wp-more').classList.remove('on');
  document.getElementById('wpb-det').textContent = 'Детально →';
  const panel = document.getElementById('wm-panel');
  panel.style.display = 'block';
  setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
}
function wmClose() { document.getElementById('wm-panel').style.display = 'none'; }
function wmToggleDet() {
  const m = document.getElementById('wp-more');
  m.classList.toggle('on');
  document.getElementById('wpb-det').textContent = m.classList.contains('on') ? 'Згорнути ↑' : 'Детально →';
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWorldMap3D);
} else {
  initWorldMap3D();
}
