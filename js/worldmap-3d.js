// ═══════════════════════════════════════════════════════════
// WORLDMAP 3D v3 — click on model geometry, mobile touch,
// bright lighting, no hotspot spheres
// ═══════════════════════════════════════════════════════════

const WORLDS_3D = {
  asgard:      { n:"Асґард",        no:"Ásgarðr",       s:"Обитель Асів",          inh:"Боги-аси",             col:"#d4a035", desc:"Небесна фортеця богів-асів на вершині Іґґдрасіля. З'єднана з Мідґардом веселковим мостом Біфрост. Тут Одін спостерігає всі дев'ять світів зі срібного трону Ґлідскьяльф.", det:["Вальгалла — зала 540 дверей, кожна для 800 воїнів","Ґлідскьяльф — трон з якого видно всі дев'ять світів","Стіни зведені велетом-будівельником і конем Свадільфарі","Після Раґнарьоку вижившi боги оселяться на Ідавьоллі"] },
  vanaheim:    { n:"Ванагейм",      no:"Vanaheimr",     s:"Домівка Ванів",         inh:"Боги-вани",            col:"#3a8828", desc:"Прадавній світ богів-ванів, пов'язаних з морем, родючістю і магією. Фрейр, Фрейя і Ньорд перейшли до Асґарда після мирної угоди.", det:["Вани — найстаріший пантеон, старший за асів","Принесли асам магію сейд через Фрейю","Ньорд, Фрейр і Фрейя — заложники в Асґарді"] },
  alfheim:     { n:"Альфгейм",      no:"Álfheimr",      s:"Домівка Ельфів",        inh:"Світлі ельфи",         col:"#e8cc40", desc:"Світ світлих ельфів — істот прекрасніших за сонце. Подарований Фрейру як зубний подарунок. Ельфи пов'язані зі світлом і родючістю.", det:["Ljósálfar — прекрасніші за сонце","Dökkálfar живуть під землею","Ельфи могли насилати кошмари людям"] },
  midgard:     { n:"Мідґард",       no:"Miðgarðr",      s:"Світ Людей",            inh:"Люди",                 col:"#28a030", desc:"Світ людей у центрі Всесвіту, створений з тіла першовелета Іміра. Оточений океаном де живе Йормунґанд.", det:["Земля = плоть Іміра, море = кров, гори = кості","Перші люди Аскр і Ембля — на морському березі","Йормунґанд оточує весь світ кусаючи хвіст","З'єднаний з Асґардом мостом Біфрост"] },
  jotunheim:   { n:"Йотунгейм",     no:"Jötunheimr",    s:"Домівка Велетів",       inh:"Йотуни",               col:"#2860a8", desc:"Царство йотунів — первісних сил природи. Столиця Утґард. Боги попри ворожнечу беруть у велетів дружин і мудрість.", det:["Утґард-Локі — король що обдурив Тора","Мімірсбрунн — криниця мудрості Одіна","Гірські, льодові та вогняні велети"] },
  svartalfheim:{ n:"Свартальфгейм", no:"Svartálfaheimr", s:"Домівка Гномів",        inh:"Дверги-ковалі",        col:"#a05820", desc:"Підземний світ гномів-двергів — найкращих ковалів всіх дев'яти світів. Тут виковані всі священні артефакти богів.", det:["Мйольнір, Ґунґнір, Скідбладнір — звідси","Брісінґамен Фрейї — робота чотирьох гномів","4 дверги тримають небосхил по сторонах"] },
  niflheim:    { n:"Ніфльгейм",     no:"Niflheimr",     s:"Світ Туману",           inh:"Нідгоґр, змії",        col:"#204880", desc:"Найстаріший зі світів — первозданний світ льоду і темряви. В центрі Хвергельмір — джерело 11 первісних рік.", det:["Хвергельмір — джерело всіх рік всесвіту","Нідгоґр гризе корінь Іґґдрасіля","Після Раґнарьоку дракон виживе"] },
  helheim:     { n:"Гельгейм",      no:"Helheimr",      s:"Царство Мертвих",       inh:"Мертві, Гель",         col:"#502870", desc:"Царство для тих хто помер не в бою. Правителька Гель — донька Локі. Вхід охороняє пес Ґармр.", det:["Гель — наполовину жива, наполовину мертва","Бальдр потрапив сюди після загибелі","У Раґнарьок мертві відпливуть на Нагльфарі"] },
  muspelheim:  { n:"Муспельгейм",   no:"Múspellsheimr", s:"Світ Вогню",            inh:"Сурт і сини Муспелля", col:"#c02810", desc:"Первозданний світ вогню. Охороняється Суртом з мечем яскравішим за сонце. У Раґнарьок спалить весь всесвіт.", det:["Іскри стали зірками при створенні","Сурт вб'є Фрейра і спалить землю","Сини Муспелля зламають міст Біфрост"] },
};

// Assign worlds to mesh parts by vertical position
// Top = asgard/alfheim/vanaheim, Mid = midgard/jotunheim/svartalfheim, Bottom = niflheim/helheim/muspelheim
function guessWorldByPosition(pos) {
  const y = pos.y;
  const x = pos.x;
  if (y > 1.5) {
    if (x < -0.5) return 'vanaheim';
    if (x > 0.5) return 'alfheim';
    return 'asgard';
  } else if (y > -1.0) {
    if (x < -0.8) return 'svartalfheim';
    if (x > 0.8) return 'jotunheim';
    return 'midgard';
  } else {
    if (x < -0.5) return 'niflheim';
    if (x > 0.5) return 'muspelheim';
    return 'helheim';
  }
}

function initWorldMap3D() {
  const container = document.getElementById('worldmap-container');
  if (!container) return;
  container.innerHTML = '';

  const style = document.createElement('style');
  style.textContent = `
    #wm3d-root{position:relative;width:100%;height:560px;background:#08050f;overflow:hidden;border:1px solid #2a2010;touch-action:none}
    #wm3d-canvas{display:block;width:100%!important;height:100%!important}
    #wm3d-loading{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#08050f;z-index:10;pointer-events:none}
    #wm3d-loading p{font-family:Cinzel,serif;font-size:.62rem;letter-spacing:.22em;color:#c89030;text-transform:uppercase;margin-bottom:14px;text-align:center;padding:0 20px}
    #wm3d-bar{width:180px;height:2px;background:#1a1208}
    #wm3d-bar-fill{height:100%;background:#c89030;width:0%;transition:width .3s}
    #wm3d-hint{position:absolute;bottom:12px;left:50%;transform:translateX(-50%);font-family:Cinzel,serif;font-size:.5rem;letter-spacing:.18em;color:#3a2a0a;text-transform:uppercase;white-space:nowrap;pointer-events:none}
    #wm3d-tip{position:absolute;display:none;background:rgba(4,2,10,.95);border:1px solid rgba(200,160,60,.6);padding:5px 14px;font-family:Cinzel,serif;font-size:.58rem;letter-spacing:.1em;color:#e8c060;text-transform:uppercase;white-space:nowrap;pointer-events:none;transform:translate(-50%,-140%);border-radius:1px}
    #wm3d-panel{background:rgba(5,3,10,.97);border-top:1px solid rgba(200,160,60,.2);padding:14px 16px 18px;display:none}
    .w3p-eye{font-family:Cinzel,serif;font-size:.5rem;letter-spacing:.25em;color:#5a4a18;text-transform:uppercase;margin-bottom:5px}
    .w3p-row{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:8px;flex-wrap:wrap}
    .w3p-name{font-family:Cinzel,serif;font-size:1.15rem;letter-spacing:.07em;color:#e0b850;font-weight:600}
    .w3p-sub{font-family:Georgia,serif;font-style:italic;font-size:.82rem;color:#6a5020;margin-top:2px}
    .w3p-btns{display:flex;gap:6px;flex-shrink:0;margin-top:2px}
    .w3b{background:none;border:1px solid rgba(180,140,40,.3);color:#7a5a20;font-family:Cinzel,serif;font-size:.5rem;letter-spacing:.14em;text-transform:uppercase;padding:5px 12px;cursor:pointer;transition:all .18s;white-space:nowrap}
    .w3b:hover,.w3b:active{border-color:rgba(180,140,40,.8);color:#e0b850}
    .w3p-desc{font-family:Georgia,serif;font-size:.92rem;color:#7a6535;line-height:1.7;margin-bottom:6px}
    .w3p-more{display:none;border-top:1px solid rgba(200,160,60,.1);padding-top:8px;margin-top:4px}
    .w3p-more.on{display:block}
    .w3p-more ul{list-style:none;padding:0}
    .w3p-more li{font-family:Georgia,serif;font-size:.86rem;color:#5a4a28;line-height:1.6;padding:3px 0 3px 16px;position:relative}
    .w3p-more li::before{content:'ᚱ';position:absolute;left:0;color:#3a2a10;font-size:.62rem;top:4px}
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
      <div id="wm3d-hint">Тягни · Скролл/пінч · Тап на світи</div>
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
    s.src = src; s.onload = cb;
    s.onerror = () => { console.error('Failed:', src); cb && cb(); };
    document.head.appendChild(s);
  }

  loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js', () => {
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

    const W = root.clientWidth || 680;
    const H = Math.min(560, window.innerHeight * 0.65);
    root.style.height = H + 'px';
    canvas.width = W; canvas.height = H;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x08050f, 1);
    renderer.shadowMap.enabled = false; // off for performance on mobile
    renderer.physicallyCorrectLights = true;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x08050f, 18, 45);

    const cam = new THREE.PerspectiveCamera(50, W / H, 0.01, 100);
    cam.position.set(0, 1, 9);

    // BRIGHT lighting so model is clearly visible
    scene.add(new THREE.AmbientLight(0xffffff, 2.5));
    const top = new THREE.DirectionalLight(0xfff8e0, 2.0);
    top.position.set(2, 8, 4);
    scene.add(top);
    const front = new THREE.DirectionalLight(0xffeedd, 1.5);
    front.position.set(0, 2, 8);
    scene.add(front);
    const back = new THREE.DirectionalLight(0xddeeff, 0.8);
    back.position.set(-3, -2, -5);
    scene.add(back);
    const gold = new THREE.PointLight(0xffcc44, 1.5, 25);
    gold.position.set(0, 6, 2);
    scene.add(gold);

    // Stars
    const sv = [];
    for (let i = 0; i < 800; i++) {
      const t = Math.random()*Math.PI*2, p = Math.acos(2*Math.random()-1), r = 40+Math.random()*20;
      sv.push(r*Math.sin(p)*Math.cos(t), r*Math.sin(p)*Math.sin(t), r*Math.cos(p));
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.Float32BufferAttribute(sv, 3));
    scene.add(new THREE.Points(sg, new THREE.PointsMaterial({ color:0xfff0cc, size:0.15, transparent:true, opacity:0.6 })));

    // OrbitControls
    const controls = new THREE.OrbitControls(cam, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.07;
    controls.minDistance = 3;
    controls.maxDistance = 22;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;
    controls.enablePan = false;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let modelMeshes = [];
    let lastTap = 0;

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

        // Center + scale
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const scale = 6.5 / Math.max(size.x, size.y, size.z);
        model.scale.setScalar(scale);
        model.position.sub(center.multiplyScalar(scale));

        // Collect meshes + enhance materials
        model.traverse(c => {
          if (c.isMesh) {
            modelMeshes.push(c);
            // Store original emissive
            if (c.material) {
              c.material = c.material.clone();
              c.userData.origEmissive = c.material.emissive ? c.material.emissive.clone() : new THREE.Color(0);
              c.userData.origEmissiveIntensity = c.material.emissiveIntensity || 0;
            }
          }
        });

        scene.add(model);
        setProgress(100);
        setTimeout(() => {
          const l = document.getElementById('wm3d-loading');
          if (l) l.style.display = 'none';
        }, 400);
      },
      (xhr) => { if (xhr.total) setProgress(10 + (xhr.loaded / xhr.total) * 82); },
      (err) => {
        console.error('GLB:', err);
        const l = document.getElementById('wm3d-loading');
        if (l) l.innerHTML = '<p style="color:#c04020;font-family:Cinzel,serif;font-size:.6rem;letter-spacing:.12em;text-align:center;padding:0 20px">Помилка завантаження моделі</p>';
      }
    );

    // Highlight mesh on hover/tap
    let highlightedMesh = null;
    function highlightMesh(mesh) {
      if (highlightedMesh && highlightedMesh !== mesh) {
        restoreMesh(highlightedMesh);
      }
      if (mesh && mesh.material) {
        mesh.material.emissive = new THREE.Color(0xffaa22);
        mesh.material.emissiveIntensity = 0.25;
        highlightedMesh = mesh;
      }
    }
    function restoreMesh(mesh) {
      if (mesh && mesh.material && mesh.userData.origEmissive) {
        mesh.material.emissive.copy(mesh.userData.origEmissive);
        mesh.material.emissiveIntensity = mesh.userData.origEmissiveIntensity;
      }
      highlightedMesh = null;
    }

    function getHit(clientX, clientY) {
      const rect = root.getBoundingClientRect();
      mouse.x = ((clientX - rect.left) / root.clientWidth) * 2 - 1;
      mouse.y = -((clientY - rect.top) / H) * 2 + 1;
      raycaster.setFromCamera(mouse, cam);
      const hits = raycaster.intersectObjects(modelMeshes, true);
      return hits.length ? hits[0] : null;
    }

    function handleClick(clientX, clientY) {
      const hit = getHit(clientX, clientY);
      if (!hit) return;
      controls.autoRotate = false;
      highlightMesh(hit.object);
      // Determine world by hit point position in model space
      const worldPos = hit.point.clone();
      const id = guessWorldByPosition(worldPos);
      wm3dOpenPanel(id, WORLDS_3D[id]);
    }

    // Mouse events
    let mouseDown = { x: 0, y: 0 };
    root.addEventListener('mousedown', e => { mouseDown = { x: e.clientX, y: e.clientY }; });
    root.addEventListener('mouseup', e => {
      const dx = Math.abs(e.clientX - mouseDown.x);
      const dy = Math.abs(e.clientY - mouseDown.y);
      if (dx < 5 && dy < 5) handleClick(e.clientX, e.clientY);
    });
    root.addEventListener('mousemove', e => {
      const hit = getHit(e.clientX, e.clientY);
      const tip = document.getElementById('wm3d-tip');
      if (hit) {
        const id = guessWorldByPosition(hit.point);
        const wd = WORLDS_3D[id];
        tip.textContent = wd.n + ' · ' + wd.no;
        tip.style.display = 'block';
        const rect = root.getBoundingClientRect();
        tip.style.left = (e.clientX - rect.left) + 'px';
        tip.style.top = (e.clientY - rect.top) + 'px';
        root.style.cursor = 'pointer';
      } else {
        tip.style.display = 'none';
        root.style.cursor = '';
      }
    });
    root.addEventListener('mouseleave', () => {
      document.getElementById('wm3d-tip').style.display = 'none';
    });

    // Touch events
    let touchStart = null;
    root.addEventListener('touchstart', e => {
      if (e.touches.length === 1) {
        touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY, t: Date.now() };
      }
    }, { passive: true });

    root.addEventListener('touchend', e => {
      if (!touchStart || e.changedTouches.length !== 1) return;
      const t = e.changedTouches[0];
      const dx = Math.abs(t.clientX - touchStart.x);
      const dy = Math.abs(t.clientY - touchStart.y);
      const dt = Date.now() - touchStart.t;
      if (dx < 10 && dy < 10 && dt < 300) {
        handleClick(t.clientX, t.clientY);
      }
      touchStart = null;
    }, { passive: true });

    root.addEventListener('wheel', () => { controls.autoRotate = false; });

    // Animate
    let tick = 0;
    function animate() {
      requestAnimationFrame(animate);
      tick += 0.016;
      gold.intensity = 1.4 + Math.sin(tick * 1.2) * 0.3;
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
}

function wm3dOpenPanel(id, wd) {
  if (!wd) return;
  document.getElementById('w3p-eye').textContent = wd.inh + ' · ' + wd.no;
  document.getElementById('w3p-name').textContent = wd.n;
  document.getElementById('w3p-sub').textContent = wd.s;
  document.getElementById('w3p-desc').textContent = wd.desc;
  document.getElementById('w3p-list').innerHTML = (wd.det || []).map(d => `<li>${d}</li>`).join('');
  document.getElementById('w3p-more').classList.remove('on');
  document.getElementById('w3b-det').textContent = 'Детально →';
  const panel = document.getElementById('wm3d-panel');
  panel.style.display = 'block';
  setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
}
function wm3dClose() { document.getElementById('wm3d-panel').style.display = 'none'; }
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
