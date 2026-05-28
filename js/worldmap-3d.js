// ═══════════════════════════════════════════════════════════
// WORLDMAP 3D — Three.js + GLB meshes
// tree.glb = Yggdrasil, + 9 world meshes positioned around it
// ═══════════════════════════════════════════════════════════

const WM_WORLDS = {
  asgard:       { n:'Асґард',         no:'Ásgarðr',        s:'Обитель Асів',          inh:'Боги-аси',             desc:'Небесна фортеця богів-асів на вершині Іґґдрасіля. З\'єднана з Мідґардом веселковим мостом Біфрост.', det:['Вальгалла — зала 540 дверей','Ґлідскьяльф — трон Одіна','Стіни зведені велетом-будівельником'] },
  alfheim:      { n:'Альфгейм',       no:'Álfheimr',       s:'Домівка Ельфів',        inh:'Світлі ельфи',         desc:'Світ світлих ельфів — прекрасніших за сонце. Подарований Фрейру як зубний подарунок.', det:['Ljósálfar — прекрасніші за сонце','Dökkálfar живуть під землею'] },
  vanaheim:     { n:'Ванагейм',       no:'Vanaheimr',      s:'Домівка Ванів',         inh:'Боги-вани',            desc:'Прадавній світ богів-ванів, пов\'язаних з морем, родючістю і магією.', det:['Вани — найстаріший пантеон','Принесли асам магію сейд через Фрейю'] },
  midgard:      { n:'Мідґард',        no:'Miðgarðr',       s:'Світ Людей',            inh:'Люди',                 desc:'Світ людей у центрі Всесвіту, створений з тіла першовелета Іміра.', det:['Земля = плоть Іміра','Перші люди Аскр і Ембля'] },
  jotunheim:    { n:'Йотунгейм',      no:'Jötunheimr',     s:'Домівка Велетів',       inh:'Йотуни',               desc:'Царство йотунів — первісних сил природи. Столиця Утґард.', det:['Утґард-Локі обдурив Тора','Мімірсбрунн — криниця мудрості'] },
  muspelheim:   { n:'Муспельгейм',    no:'Múspellsheimr',  s:'Світ Вогню',            inh:'Сурт і сини Муспелля', desc:'Первозданний світ вогню. Охороняється Суртом з мечем яскравішим за сонце.', det:['Іскри стали зірками','Сурт спалить весь світ у Раґнарьок'] },
  svartalfheim: { n:'Свартальфагейм', no:'Svartálfaheimr', s:'Домівка Гномів',        inh:'Дверги-ковалі',        desc:'Підземний світ гномів-двергів — найкращих ковалів всіх дев\'яти світів.', det:['Мйольнір і Ґунґнір виковані тут','Брісінґамен Фрейї'] },
  helheim:      { n:'Гельгейм',       no:'Helheimr',       s:'Царство Мертвих',       inh:'Мертві, Гель',         desc:'Царство для тих хто помер не в бою. Правителька Гель — донька Локі.', det:['Гель — наполовину жива','Бальдр потрапив сюди після загибелі'] },
  niflheim:     { n:'Ніфльгейм',      no:'Niflheimr',      s:'Світ Туману',           inh:'Нідгоґр, змії',        desc:'Найстаріший зі світів — первозданний світ льоду і темряви.', det:['Хвергельмір — джерело всіх рік','Нідгоґр гризе корінь Іґґдрасіля'] },
};

// World mesh configs: file, position (x,y,z), scale, label color
const WM_CONFIG = {
  asgard:       { file:'asgard.glb',       pos:[ 0,   6.5,  0],   scale:0.55, color:'#e8c060', labelY: 1.2 },
  alfheim:      { file:'alfheim.glb',      pos:[-5,   4,    3],   scale:0.45, color:'#ccbbff', labelY: 1.0 },
  vanaheim:     { file:'vanaheim.glb',     pos:[ 5,   4,    3],   scale:0.45, color:'#66cc44', labelY: 1.0 },
  midgard:      { file:'midgard.glb',      pos:[ 0,   1,    0],   scale:0.55, color:'#44cc44', labelY: 1.0 },
  jotunheim:    { file:'jotunheim.glb',    pos:[ 6,   1,   -2],   scale:0.45, color:'#4488cc', labelY: 1.0 },
  muspelheim:   { file:'muspelheim.glb',   pos:[-6,   1,   -2],   scale:0.45, color:'#cc4422', labelY: 1.0 },
  svartalfheim: { file:'svartalfheim.glb', pos:[-4,  -3.5,  2],   scale:0.42, color:'#cc7733', labelY: 1.0 },
  helheim:      { file:'helheim.glb',      pos:[ 0,  -5,    0],   scale:0.50, color:'#8844cc', labelY: 1.0 },
  niflheim:     { file:'niflheim.glb',     pos:[ 4,  -3.5,  2],   scale:0.42, color:'#4466aa', labelY: 1.0 },
};

function initWorldMap3D() {
  var container = document.getElementById('worldmap-container');
  if (!container || container.dataset.rendered) return;
  container.dataset.rendered = '1';

  // Detect models path
  var base = '';
  var scripts = document.querySelectorAll('script[src]');
  scripts.forEach(function(s) {
    if (s.src.includes('worldmap-3d')) {
      base = s.src.replace(/js\/worldmap-3d\.js.*/, '');
    }
  });
  var modelsPath = base + 'models/';

  // Container styles
  container.style.cssText = 'position:relative;width:100%;background:#06040e;border:1px solid #2a1a3a;overflow:hidden';
  var h = Math.min(Math.max(window.innerWidth * 0.75, 340), 600);
  container.style.height = h + 'px';

  // Canvas
  var canvas = document.createElement('canvas');
  canvas.style.cssText = 'width:100%;height:100%;display:block;touch-action:none';
  container.appendChild(canvas);

  // Info panel
  var panel = document.createElement('div');
  panel.id = 'wm-info-panel';
  panel.style.cssText = 'display:none;position:absolute;bottom:0;left:0;right:0;background:rgba(4,2,10,.96);border-top:1px solid rgba(200,160,60,.25);padding:12px 16px 14px;z-index:10;max-height:45%;overflow-y:auto';
  container.appendChild(panel);

  // Loading overlay
  var loader = document.createElement('div');
  loader.id = 'wm-loader';
  loader.style.cssText = 'position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#06040e;z-index:20;pointer-events:none';
  loader.innerHTML = '<div style="font-family:Cinzel,serif;font-size:.65rem;letter-spacing:.3em;color:#4a3a6a;text-transform:uppercase;margin-bottom:12px">Завантаження світів</div>' +
    '<div id="wm-progress" style="width:140px;height:1px;background:#1a1228"><div id="wm-bar" style="height:1px;background:#6a4a9a;width:0%;transition:width .3s"></div></div>';
  container.appendChild(loader);

  // Load Three.js + GLTFLoader dynamically
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js', function() {
    loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js', function() {
      initScene(container, canvas, panel, loader, modelsPath);
    });
  });
}

function loadScript(url, cb) {
  var s = document.createElement('script');
  s.src = url;
  s.onload = cb;
  s.onerror = function() { console.error('Failed to load: ' + url); cb(); };
  document.head.appendChild(s);
}

function initScene(container, canvas, panel, loader, modelsPath) {
  if (!window.THREE) {
    loader.innerHTML = '<div style="font-family:Cinzel,serif;font-size:.65rem;letter-spacing:.2em;color:#6a3a2a;text-transform:uppercase">Three.js не завантажився — перевір з\'єднання</div>';
    return;
  }

  var THREE = window.THREE;
  var W = container.clientWidth, H = container.clientHeight;

  // Renderer
  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setSize(W, H);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.outputEncoding = THREE.sRGBEncoding;

  // Scene
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x06040e);
  scene.fog = new THREE.FogExp2(0x06040e, 0.04);

  // Camera
  var camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 200);
  camera.position.set(0, 4, 18);
  camera.lookAt(0, 1, 0);

  // Lights
  var ambient = new THREE.AmbientLight(0x9988cc, 0.6);
  scene.add(ambient);
  var dirLight = new THREE.DirectionalLight(0xffeedd, 1.2);
  dirLight.position.set(5, 10, 5);
  dirLight.castShadow = true;
  scene.add(dirLight);
  var fillLight = new THREE.DirectionalLight(0x3322aa, 0.4);
  fillLight.position.set(-5, -2, -5);
  scene.add(fillLight);
  // Warm glow from below (Muspelheim)
  var pointFire = new THREE.PointLight(0xff4400, 0.8, 15);
  pointFire.position.set(-6, -2, -2);
  scene.add(pointFire);

  // Stars
  var starGeo = new THREE.BufferGeometry();
  var starVerts = [];
  for (var i = 0; i < 1200; i++) {
    starVerts.push((Math.random() - 0.5) * 120, (Math.random() - 0.5) * 120, (Math.random() - 0.5) * 120);
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starVerts, 3));
  var starMat = new THREE.PointsMaterial({ color: 0xfff8e8, size: 0.08, sizeAttenuation: true });
  scene.add(new THREE.Points(starGeo, starMat));

  // Raycaster for click
  var raycaster = new THREE.Raycaster();
  var mouse = new THREE.Vector2();
  var clickables = []; // { mesh, worldId }
  var hoveredId = null;

  // Load meshes
  var gltfLoader = new THREE.GLTFLoader();
  var totalMeshes = 10; // tree + 9 worlds
  var loadedCount = 0;
  var bar = document.getElementById('wm-bar');

  function onMeshLoaded() {
    loadedCount++;
    if (bar) bar.style.width = (loadedCount / totalMeshes * 100) + '%';
    if (loadedCount >= totalMeshes) {
      setTimeout(function() {
        if (loader) loader.style.opacity = '0';
        setTimeout(function() { if (loader) loader.style.display = 'none'; }, 400);
      }, 200);
    }
  }

  // Load tree (Yggdrasil)
  gltfLoader.load(
    modelsPath + 'tree.glb',
    function(gltf) {
      var tree = gltf.scene;
      // Center and scale tree
      var box = new THREE.Box3().setFromObject(tree);
      var size = box.getSize(new THREE.Vector3());
      var maxDim = Math.max(size.x, size.y, size.z);
      var treeScale = 14 / maxDim;
      tree.scale.setScalar(treeScale);
      // Center at origin
      box.setFromObject(tree);
      var center = box.getCenter(new THREE.Vector3());
      tree.position.sub(center);
      tree.position.y += 1;
      scene.add(tree);
      onMeshLoaded();
    },
    null,
    function(e) { console.warn('tree.glb failed:', e); onMeshLoaded(); }
  );

  // Load world meshes
  Object.keys(WM_CONFIG).forEach(function(worldId) {
    var cfg = WM_CONFIG[worldId];
    gltfLoader.load(
      modelsPath + cfg.file,
      function(gltf) {
        var mesh = gltf.scene;
        // Normalize size
        var box = new THREE.Box3().setFromObject(mesh);
        var size = box.getSize(new THREE.Vector3());
        var maxDim = Math.max(size.x, size.y, size.z);
        var s = (cfg.scale * 3) / maxDim;
        mesh.scale.setScalar(s);
        // Center mesh pivot
        box.setFromObject(mesh);
        var center = box.getCenter(new THREE.Vector3());
        mesh.position.sub(center);
        // Position in scene
        var group = new THREE.Group();
        group.add(mesh);
        group.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
        group.userData.worldId = worldId;
        scene.add(group);
        clickables.push(group);

        // Subtle highlight material on hover
        mesh.traverse(function(child) {
          if (child.isMesh) {
            child.userData.origMat = child.material;
            child.userData.worldId = worldId;
          }
        });

        onMeshLoaded();
      },
      null,
      function(e) { console.warn(cfg.file + ' failed:', e); onMeshLoaded(); }
    );
  });

  // Orbit controls (manual — no OrbitControls in r128 CDN)
  var isDragging = false, prevMouse = { x: 0, y: 0 };
  var spherical = { theta: 0, phi: Math.PI / 3, radius: 18 };
  var target = new THREE.Vector3(0, 1, 0);

  function updateCamera() {
    camera.position.x = target.x + spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);
    camera.position.y = target.y + spherical.radius * Math.cos(spherical.phi);
    camera.position.z = target.z + spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
    camera.lookAt(target);
  }
  updateCamera();

  canvas.addEventListener('mousedown', function(e) { isDragging = true; prevMouse = { x: e.clientX, y: e.clientY }; });
  window.addEventListener('mouseup', function() { isDragging = false; });
  canvas.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    var dx = e.clientX - prevMouse.x, dy = e.clientY - prevMouse.y;
    spherical.theta -= dx * 0.008;
    spherical.phi = Math.max(0.3, Math.min(Math.PI * 0.8, spherical.phi - dy * 0.008));
    prevMouse = { x: e.clientX, y: e.clientY };
    updateCamera();
  });
  canvas.addEventListener('wheel', function(e) {
    spherical.radius = Math.max(6, Math.min(35, spherical.radius + e.deltaY * 0.02));
    updateCamera();
    e.preventDefault();
  }, { passive: false });

  // Touch
  var lastTouch = null, lastPinchDist = 0;
  canvas.addEventListener('touchstart', function(e) {
    if (e.touches.length === 1) lastTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    if (e.touches.length === 2) lastPinchDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
    e.preventDefault();
  }, { passive: false });
  canvas.addEventListener('touchmove', function(e) {
    if (e.touches.length === 1 && lastTouch) {
      var dx = e.touches[0].clientX - lastTouch.x, dy = e.touches[0].clientY - lastTouch.y;
      spherical.theta -= dx * 0.01;
      spherical.phi = Math.max(0.3, Math.min(Math.PI * 0.8, spherical.phi - dy * 0.01));
      lastTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      updateCamera();
    }
    if (e.touches.length === 2) {
      var d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      spherical.radius = Math.max(6, Math.min(35, spherical.radius - (d - lastPinchDist) * 0.05));
      lastPinchDist = d;
      updateCamera();
    }
    e.preventDefault();
  }, { passive: false });

  // Click to select world
  canvas.addEventListener('click', function(e) {
    if (isDragging) return;
    var rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    var allMeshes = [];
    clickables.forEach(function(g) { g.traverse(function(c) { if (c.isMesh) allMeshes.push(c); }); });
    var hits = raycaster.intersectObjects(allMeshes);
    if (hits.length > 0) {
      var obj = hits[0].object;
      var wid = obj.userData.worldId;
      if (!wid) { var p = obj.parent; while (p) { if (p.userData.worldId) { wid = p.userData.worldId; break; } p = p.parent; } }
      if (wid) wmShowPanel(wid);
    }
  });

  // Resize
  window.addEventListener('resize', function() {
    var W2 = container.clientWidth, H2 = container.clientHeight;
    camera.aspect = W2 / H2;
    camera.updateProjectionMatrix();
    renderer.setSize(W2, H2);
  });

  // Animate
  var clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    var t = clock.getElapsedTime();
    // Slow auto-rotate when not interacting
    if (!isDragging) {
      spherical.theta += 0.001;
      updateCamera();
    }
    // Pulse fire light
    pointFire.intensity = 0.6 + Math.sin(t * 2.5) * 0.2;
    renderer.render(scene, camera);
  }
  animate();
}

function wmShowPanel(id) {
  var w = WM_WORLDS[id];
  if (!w) return;
  var panel = document.getElementById('wm-info-panel');
  if (!panel) return;
  panel.innerHTML =
    '<div style="font-family:Cinzel,serif;font-size:.48rem;letter-spacing:.28em;color:#6a5a3a;text-transform:uppercase;margin-bottom:4px">' + w.inh + ' · ' + w.no + '</div>' +
    '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:6px;flex-wrap:wrap">' +
      '<div><div style="font-family:Cinzel,serif;font-size:1.1rem;color:#e0b850;font-weight:600">' + w.n + '</div>' +
      '<div style="font-family:Georgia,serif;font-style:italic;font-size:.8rem;color:#7a6030;margin-top:1px">' + w.s + '</div></div>' +
      '<button onclick="document.getElementById(\'wm-info-panel\').style.display=\'none\'" style="background:none;border:1px solid rgba(180,140,40,.3);color:#7a5a20;font-family:Cinzel,serif;font-size:.48rem;letter-spacing:.1em;text-transform:uppercase;padding:4px 10px;cursor:pointer;flex-shrink:0">✕</button>' +
    '</div>' +
    '<p style="font-family:Georgia,serif;font-size:.9rem;color:#8a7040;line-height:1.65;margin-bottom:5px">' + w.desc + '</p>' +
    '<ul style="list-style:none;padding:0;border-top:1px solid rgba(200,160,60,.12);padding-top:6px">' +
    w.det.map(function(d) { return '<li style="font-family:Georgia,serif;font-size:.85rem;color:#6a5530;line-height:1.55;padding:2px 0 2px 14px;position:relative"><span style="position:absolute;left:0;color:#5a4a28;font-size:.6rem">ᚱ</span>' + d + '</li>'; }).join('') +
    '</ul>';
  panel.style.display = 'block';
}

// Aliases
var renderWorldMap = initWorldMap3D;
var wmOpenPanel = wmShowPanel;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWorldMap3D);
} else {
  initWorldMap3D();
}
