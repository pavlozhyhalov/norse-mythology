// ═══════════════════════════════════════════════════════════
// WORLDMAP 3D — Yggdrasil GLB viewer
// Uses Three.js r128 (stable CDN with OrbitControls + GLTFLoader)
// ═══════════════════════════════════════════════════════════

const WORLDS_3D = {
  asgard:      { n:"Асґард",        no:"Ásgarðr",        s:"Обитель Асів",              inh:"Боги-аси",               col:0xd4a035, pos:[0, 2.5, 0],    desc:"Небесна фортеця богів-асів на вершині Іґґдрасіля. З'єднана з Мідґардом веселковим мостом Біфрост. Тут Одін спостерігає всі дев'ять світів зі срібного трону Ґлідскьяльф.", det:["Вальгалла — зала 540 дверей, кожна для 800 воїнів","Ґлідскьяльф — трон з якого видно всі дев'ять світів","Стіни зведені велетом-будівельником і конем Свадільфарі","Після Раґнарьоку вижившi боги оселяться на Ідавьоллі"] },
  vanaheim:    { n:"Ванагейм",      no:"Vanaheimr",      s:"Домівка Ванів",             inh:"Боги-вани",              col:0x3a8828, pos:[-2.2, 1.8, -1], desc:"Прадавній світ богів-ванів, пов'язаних з морем, родючістю і магією. Фрейр, Фрейя і Ньорд перейшли до Асґарда після мирної угоди.", det:["Вани — найстаріший пантеон, старший за асів","Принесли асам магію сейд через Фрейю","Ньорд, Фрейр і Фрейя — заложники в Асґарді"] },
  alfheim:     { n:"Альфгейм",      no:"Álfheimr",       s:"Домівка Ельфів",            inh:"Світлі ельфи",           col:0xe8cc40, pos:[2.2, 1.8, -1],  desc:"Світ світлих ельфів — істот прекрасніших за сонце. Подарований Фрейру як зубний подарунок. Ельфи пов'язані зі світлом і родючістю.", det:["Ljósálfar — прекрасніші за сонце","Dökkálfar живуть під землею","Ельфи могли насилати кошмари людям"] },
  midgard:     { n:"Мідґард",       no:"Miðgarðr",       s:"Світ Людей",                inh:"Люди",                   col:0x28a030, pos:[0, 0, 0],       desc:"Світ людей у центрі Всесвіту, створений з тіла першовелета Іміра. Оточений океаном де живе Йормунґанд.", det:["Земля = плоть Іміра, море = кров, гори = кості","Перші люди Аскр і Ембля — на морському березі","Йормунґанд оточує весь світ кусаючи хвіст","З'єднаний з Асґардом мостом Біфрост"] },
  jotunheim:   { n:"Йотунгейм",     no:"Jötunheimr",     s:"Домівка Велетів",           inh:"Йотуни",                 col:0x2860a8, pos:[2.5, 0.2, 1.5], desc:"Царство йотунів — первісних сил природи. Столиця Утґард. Боги попри ворожнечу беруть у велетів дружин і мудрість.", det:["Утґард-Локі — король що обдурив Тора","Мімірсбрунн — криниця мудрості Одіна","Гірські, льодові та вогняні велети"] },
  svartalfheim:{ n:"Свартальфгейм", no:"Svartálfaheimr",  s:"Домівка Гномів",            inh:"Дверги-ковалі",          col:0xa05820, pos:[-2.5, 0.2, 1.5],desc:"Підземний світ гномів-двергів — найкращих ковалів всіх дев'яти світів. Тут виковані всі священні артефакти богів.", det:["Мйольнір, Ґунґнір, Скідбладнір — звідси","Брісінґамен Фрейї — робота чотирьох гномів","4 дверги тримають небосхил по сторонах"] },
  niflheim:    { n:"Ніфльгейм",     no:"Niflheimr",      s:"Світ Туману",               inh:"Нідгоґр, змії",          col:0x204880, pos:[-1.8,-2.2, 0.5],desc:"Найстаріший зі світів — первозданний світ льоду і темряви. В центрі Хвергельмір — джерело 11 первісних рік.", det:["Хвергельмір — джерело всіх рік всесвіту","Нідгоґр гризе корінь Іґґдрасіля","Після Раґнарьоку дракон виживе"] },
  helheim:     { n:"Гельгейм",      no:"Helheimr",       s:"Царство Мертвих",           inh:"Мертві, Гель",           col:0x502870, pos:[0, -2.5, 0],    desc:"Царство для тих хто помер не в бою. Правителька Гель — донька Локі. Вхід охороняє пес Ґармр.", det:["Гель — наполовину жива, наполовину мертва","Бальдр потрапив сюди після загибелі","У Раґнарьок мертві відпливуть на Нагльфарі"] },
  muspelheim:  { n:"Муспельгейм",   no:"Múspellsheimr",  s:"Світ Вогню",                inh:"Сурт і сини Муспелля",   col:0xc02810, pos:[1.8,-2.2, 0.5], desc:"Первозданний світ вогню. Охороняється Суртом з мечем яскравішим за сонце. У Раґнарьок спалить весь всесвіт.", det:["Іскри стали зірками при створенні","Сурт вб'є Фрейра і спалить землю","Сини Муспелля зламають міст Біфрост"] },
};

function initWorldMap3D() {
  const container = document.getElementById('worldmap-container');
  if (!container) return;
  container.innerHTML = '';

  const style = document.createElement('style');
  style.textContent = `
    #wm3d-root{position:relative;width:100%;height:600px;background:#06040e;overflow:hidden;border:1px solid #2a2010;cursor:grab}
    #wm3d-root:active{cursor:grabbing}
    #wm3d-canvas{display:block;width:100%!important;height:100%!important}
    #wm3d-loading{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#06040e;z-index:10}
    #wm3d-loading p{font-family:Cinzel,serif;font-size:.65rem;letter-spacing:.25em;color:#c89030;text-transform:uppercase;margin-bottom:16px}
    #wm3d-bar{width:200px;height:2px;background:#1a1208}
    #wm3d-bar-fill{height:100%;background:#c89030;width:0%;transition:width .3s}
    #wm3d-hint{position:absolute;bottom:14px;left:50%;transform:translateX(-50%);font-family:Cinzel,serif;font-size:.52rem;letter-spacing:.2em;color:#4a3612;text-transform:uppercase;white-space:nowrap;pointer-events:none}
    #wm3d-tip{position:absolute;display:none;background:rgba(4,2,10,.92);border:1px solid rgba(200,160,60,.5);padding:5px 12px;font-family:Cinzel,serif;font-size:.58rem;letter-spacing:.12em;color:#e8c060;text-transform:uppercase;white-space:nowrap;pointer-events:none;transform:translate(-50%,-130%)}
    #wm3d-panel{background:rgba(4,2,10,.97);border-top:1px solid rgba(200,160,60,.2);padding:14px 20px 18px;display:none;position:relative}
    .w3p-eye{font-family:Cinzel,serif;font-size:.52rem;letter-spacing:.25em;color:#5a4a18;text-transform:uppercase;margin-bottom:5px}
    .w3p-row{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:8px}
    .w3p-name{font-family:Cinzel,serif;font-size:1.2rem;letter-spacing:.07em;color:#e0b850;font-weight:600}
    .w3p-sub{font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-size:.85rem;color:#6a5020;margin-top:2px}
    .w3p-btns{display:flex;gap:6px;flex-shrink:0;margin-top:2px}
    .w3b{background:none;border:1px solid rgba(180,140,40,.3);color:#7a5a20;font-family:Cinzel,serif;font-size:.52rem;letter-spacing:.14em;text-transform:uppercase;padding:5px 13px;cursor:pointer;transition:all .18s;white-space:nowrap}
    .w3b:hover{border-color:rgba(180,140,40,.8);color:#e0b850}
    .w3p-desc{font-family:'Cormorant Garamond',Georgia,serif;font-size:.95rem;color:#7a6535;line-height:1.7;margin-bottom:6px}
    .w3p-more{display:none;border-top:1px solid rgba(200,160,60,.1);padding-top:8px;margin-top:4px}
    .w3p-more.on{display:block}
    .w3p-more ul{list-style:none;padding:0}
    .w3p-more li{font-family:'Cormorant Garamond',Georgia,serif;font-size:.88rem;color:#5a4a28;line-height:1.65;padding:2px 0 2px 16px;position:relative}
    .w3p-more li::before{content:'ᚱ';position:absolute;left:0;color:#3a2a10;font-size:.65rem;top:3px}
  `;
  document.head.appendChild(style);

  container.innerHTML = `
    <div id="wm3d-root">
      <canvas id="wm3d-canvas"></canvas>
      <div id="wm3d-loading">
        <p>Відкриваємо ворота між світами…</p>
        <div id="wm3d-bar"><div id="wm3d-bar-fill"></div></div>
      </div>
      <div id="wm3d-tip"></div>
      <div id="wm3d-hint">Тягни · Скролл для масштабу · Клікай на світи</div>
    </div>
    <div id="wm3d-panel">
      <div class="w3p-eye" id="w3p-eye"></div>
      <div class="w3p-row">
        <div><div class="w3p-name" id="w3p-name"></div><div class="w3p-sub" id="w3p-sub"></div></div>
        <div class="w3p-btns">
          <button class="w3b" id="w3b-det" onclick="wm3dToggleDet()">Детально →</button>
          <button class="w3b" onclick="wm3dClose()">✕</button>
        </div>
      </div>
      <p class="w3p-desc" id="w3p-desc"></p>
      <div class="w3p-more" id="w3p-more"><ul id="w3p-list"></ul></div>
    </div>`;

  function setProgress(p) {
    const el = document.getElementById('wm3d-bar-fill');
    if (el) el.style.width = p + '%';
  }

  function loadScript(src, cb) {
    const s = document.createElement('script');
    s.src = src;
    s.onload = cb;
    s.onerror = () => console.error('Failed to load:', src);
    document.head.appendChild(s);
  }

  // r128 — stable, all extras available at this path
  const BASE = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/';

  loadScript(BASE + 'three.min.js', () => {
    loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js', () => {
      loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/DRACOLoader.js', () => {
        loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js', () => {
          startScene();
        });
      });
    });
  });

  function startScene() {
    const root = document.getElementById('wm3d-root');
    const canvas = document.getElementById('wm3d-canvas');
    if (!root || !canvas) return;

    const W = root.clientWidth || 680, H = 600;
    canvas.width = W; canvas.height = H;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x06040e, 1);
    renderer.shadowMap.enabled = true;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06040e, 0.035);

    const cam = new THREE.PerspectiveCamera(45, W / H, 0.01, 200);
    cam.position.set(0, 2, 9);

    // Lights
    scene.add(new THREE.AmbientLight(0xfff0d0, 0.7));
    const sun = new THREE.DirectionalLight(0xfff8e0, 1.4);
    sun.position.set(5, 10, 5);
    sun.castShadow = true;
    scene.add(sun);
    const fill = new THREE.PointLight(0x4466aa, 0.8, 30);
    fill.position.set(-5, -5, -5);
    scene.add(fill);
    const gold = new THREE.PointLight(0xffaa22, 1.2, 20);
    gold.position.set(0, 5, 0);
    scene.add(gold);

    // Stars
    const sv = [];
    for (let i = 0; i < 1200; i++) {
      const t = Math.random()*Math.PI*2, p = Math.acos(2*Math.random()-1), r = 60+Math.random()*30;
      sv.push(r*Math.sin(p)*Math.cos(t), r*Math.sin(p)*Math.sin(t), r*Math.cos(p));
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.Float32BufferAttribute(sv, 3));
    scene.add(new THREE.Points(sg, new THREE.PointsMaterial({ color:0xfff8e0, size:0.18, transparent:true, opacity:0.7 })));

    // OrbitControls
    const controls = new THREE.OrbitControls(cam, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.minDistance = 2;
    controls.maxDistance = 28;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    const hotspots = [];
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function addHotspot(id, wd) {
      const geo = new THREE.SphereGeometry(0.14, 12, 8);
      const mat = new THREE.MeshBasicMaterial({ color: wd.col });
      const sphere = new THREE.Mesh(geo, mat);
      sphere.position.set(...wd.pos);
      sphere.userData = { id, wd };
      scene.add(sphere);

      // Ring halo
      const rg = new THREE.RingGeometry(0.18, 0.26, 24);
      const rm = new THREE.MeshBasicMaterial({ color: wd.col, transparent: true, opacity: 0.3, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(rg, rm);
      ring.position.set(...wd.pos);
      ring.userData.isHalo = true;
      scene.add(ring);

      // Label
      const lc = document.createElement('canvas');
      lc.width = 256; lc.height = 48;
      const lctx = lc.getContext('2d');
      lctx.font = '600 14px serif';
      lctx.fillStyle = '#e8c060';
      lctx.textAlign = 'center';
      lctx.textBaseline = 'middle';
      lctx.fillText(wd.n, 128, 24);
      const ltex = new THREE.CanvasTexture(lc);
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: ltex, transparent: true, depthTest: false }));
      sp.scale.set(1.5, 0.28, 1);
      sp.position.set(wd.pos[0], wd.pos[1] + 0.32, wd.pos[2]);
      sp.renderOrder = 5;
      scene.add(sp);

      hotspots.push(sphere);
    }

    // Load GLB
    setProgress(10);
    const dracoLoader = new THREE.DRACOLoader();
    dracoLoader.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/libs/draco/');

    const loader = new THREE.GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      'models/yggdrasil.glb',
      (gltf) => {
        const model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const scale = 6 / Math.max(size.x, size.y, size.z);
        model.scale.setScalar(scale);
        model.position.sub(center.multiplyScalar(scale));
        model.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } });
        scene.add(model);

        Object.entries(WORLDS_3D).forEach(([id, wd]) => addHotspot(id, wd));

        setProgress(100);
        setTimeout(() => {
          const l = document.getElementById('wm3d-loading');
          if (l) l.style.display = 'none';
        }, 400);
      },
      (xhr) => { if (xhr.total) setProgress(10 + (xhr.loaded / xhr.total) * 80); },
      (err) => {
        console.error('GLB error:', err);
        const l = document.getElementById('wm3d-loading');
        if (l) l.innerHTML = '<p style="color:#c04020;font-family:Cinzel,serif;font-size:.6rem;letter-spacing:.15em">Помилка завантаження моделі</p>';
      }
    );

    let hoveredHS = null, tick = 0;

    root.addEventListener('mousemove', e => {
      const rect = root.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / W) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / H) * 2 + 1;
      raycaster.setFromCamera(mouse, cam);
      const hits = raycaster.intersectObjects(hotspots);
      const tip = document.getElementById('wm3d-tip');
      if (hits.length) {
        const wd = hits[0].object.userData.wd;
        tip.textContent = wd.n + ' · ' + wd.no;
        tip.style.display = 'block';
        tip.style.left = (e.clientX - rect.left) + 'px';
        tip.style.top = (e.clientY - rect.top) + 'px';
        root.style.cursor = 'pointer';
        hoveredHS = hits[0].object;
      } else {
        tip.style.display = 'none';
        root.style.cursor = '';
        hoveredHS = null;
      }
    });

    root.addEventListener('click', e => {
      const rect = root.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / W) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / H) * 2 + 1;
      raycaster.setFromCamera(mouse, cam);
      const hits = raycaster.intersectObjects(hotspots);
      if (hits.length) {
        controls.autoRotate = false;
        wm3dOpenPanel(hits[0].object.userData.id, hits[0].object.userData.wd);
      }
    });

    root.addEventListener('mouseleave', () => {
      document.getElementById('wm3d-tip').style.display = 'none';
      hoveredHS = null;
    });
    root.addEventListener('wheel', () => { controls.autoRotate = false; });

    function animate() {
      requestAnimationFrame(animate);
      tick += 0.016;
      gold.intensity = 1.0 + Math.sin(tick * 1.1) * 0.3;
      controls.update();
      scene.children.forEach(c => { if (c.userData && c.userData.isHalo) c.lookAt(cam.position); });
      hotspots.forEach(h => {
        h.material.opacity = (h === hoveredHS) ? 0.5 + Math.sin(tick * 5) * 0.2 : 1.0;
        h.material.transparent = (h === hoveredHS);
      });
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
}

function wm3dOpenPanel(id, wd) {
  document.getElementById('w3p-eye').textContent = wd.inh + ' · ' + wd.no;
  document.getElementById('w3p-name').textContent = wd.n;
  document.getElementById('w3p-sub').textContent = wd.s;
  document.getElementById('w3p-desc').textContent = wd.desc;
  document.getElementById('w3p-list').innerHTML = (wd.det || []).map(d => `<li>${d}</li>`).join('');
  document.getElementById('w3p-more').classList.remove('on');
  document.getElementById('w3b-det').textContent = 'Детально →';
  const panel = document.getElementById('wm3d-panel');
  panel.style.display = 'block';
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function wm3dClose() {
  document.getElementById('wm3d-panel').style.display = 'none';
}

function wm3dToggleDet() {
  const m = document.getElementById('w3p-more');
  m.classList.toggle('on');
  document.getElementById('w3b-det').textContent = m.classList.contains('on') ? 'Згорнути ↑' : 'Детально →';
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWorldMap3D);
} else {
  initWorldMap3D();
}
