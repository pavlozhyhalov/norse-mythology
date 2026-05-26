// ═══════════════════════════════════════════════════════════
// PREMIUM 3D WORLD MAP — Three.js cinematic atlas
// No build step. GitHub Pages friendly. Uses CDN ESM modules.
// ═══════════════════════════════════════════════════════════

let __WM3D = null;

const WM_REALM_META = {
  asgard:       { rune:'ᚨ', color:0xd8b45d, accent:'#d8b45d', icon:'♜', terrain:'gold',  pos:[ 0.0, 4.95, 0.00], scale:1.18 },
  alfheim:      { rune:'ᛇ', color:0x8ceaff, accent:'#8ceaff', icon:'✦', terrain:'crystal',pos:[-3.25, 3.72,-0.35], scale:1.00 },
  muspelheim:   { rune:'ᚲ', color:0xff4d22, accent:'#ff4d22', icon:'△', terrain:'lava',  pos:[ 3.42, 3.55,-0.42], scale:1.06 },
  midgard:      { rune:'ᛗ', color:0x8ee86a, accent:'#8ee86a', icon:'⌂', terrain:'green', pos:[ 0.0, 2.12, 0.65], scale:1.23 },
  vanaheim:     { rune:'ᚠ', color:0xa0df70, accent:'#a0df70', icon:'☘', terrain:'forest',pos:[-3.35, 1.02, 0.18], scale:1.02 },
  jotunheim:    { rune:'ᚦ', color:0x9ed2ff, accent:'#9ed2ff', icon:'▲', terrain:'ice',   pos:[ 3.38, 0.92, 0.08], scale:1.06 },
  svartalfheim: { rune:'ᛒ', color:0xd6944c, accent:'#d6944c', icon:'⚒', terrain:'forge', pos:[-2.72,-1.68, 0.12], scale:1.02 },
  niflheim:     { rune:'ᛁ', color:0x75dcff, accent:'#75dcff', icon:'❄', terrain:'mist',  pos:[ 2.72,-1.78, 0.12], scale:1.02 },
  helheim:      { rune:'ᚺ', color:0xb06dff, accent:'#b06dff', icon:'☽', terrain:'dead',  pos:[ 0.0,-3.55, 0.36], scale:1.05 }
};

const WM_ORDER = ['asgard','alfheim','muspelheim','midgard','vanaheim','jotunheim','svartalfheim','niflheim','helheim'];

function wmById(id) { return (window.WORLDS_DATA || []).find(w => w.id === id); }
function wmShort(world) {
  if (!world) return 'Світ Іґґдрасіля.';
  return world.description || world.translation || world.location || 'Світ Іґґдрасіля.';
}
function wmTrim(s, n=245) { s = String(s || ''); return s.length > n ? s.slice(0,n).trim() + '…' : s; }
function wmEscape(s) { return String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

function renderWorldMap() {
  const container = document.getElementById('worldmap-container');
  if (!container) return;
  if (__WM3D) { __WM3D.dispose?.(); __WM3D = null; }

  container.innerHTML = `
    <div class="wm-loading" id="wm-loading">Пробудження Іґґдрасіля…</div>
    <div class="wm-map-topbar">
      <div class="wm-atlas-title">World Tree Atlas</div>
      <div class="wm-runes">ᚨ ᚱ ᚦ ᛗ</div>
      <div class="wm-controls-hint">Drag · Zoom · Select</div>
    </div>
    <aside class="wm-side-list" id="wm-side-list"><div class="wm-side-list-title">9 Світів</div></aside>
    <section class="wm-info-card" id="wm-info-card"></section>
  `;

  const desc = document.getElementById('worldmap-description') || document.createElement('section');
  desc.id = 'worldmap-description';
  desc.className = 'wm-description-panel';
  desc.innerHTML = `<h2>Оберіть світ</h2><p>Натисни на будь-який світ у 3D-карті. Повний опис зʼявиться тут, під картою, окремо від 3D-сцени.</p>`;
  if (!desc.parentNode) container.insertAdjacentElement('afterend', desc);

  const side = container.querySelector('#wm-side-list');
  WM_ORDER.forEach(id => {
    const world = wmById(id); if (!world) return;
    const m = WM_REALM_META[id];
    const b = document.createElement('button');
    b.className = 'wm-realm-row';
    b.dataset.id = id;
    b.innerHTML = `<span class="wm-sigil" style="color:${m.accent}">${m.rune}</span><span><span class="wm-row-title">${wmEscape(world.name)}</span><span class="wm-row-sub">${wmEscape(world.translation || world.inhabitants || '')}</span></span>`;
    b.onclick = () => __WM3D?.selectRealm(id, true);
    side.appendChild(b);
  });

  initWorldMap3D(container).catch(err => {
    console.error(err);
    container.innerHTML += `<div class="wm-fallback">3D-модуль не завантажився. Перевір інтернет-зʼєднання або CDN Three.js.</div>`;
  });
}

async function initWorldMap3D(container) {
  const THREE = await import('https://unpkg.com/three@0.160.0/build/three.module.js');
  const { OrbitControls } = await import('https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js');
  const { CSS2DRenderer, CSS2DObject } = await import('https://unpkg.com/three@0.160.0/examples/jsm/renderers/CSS2DRenderer.js');

  const canvasWrap = document.createElement('div');
  canvasWrap.className = 'wm-3d-canvas';
  container.prepend(canvasWrap);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05070b, 0.055);

  const rect = container.getBoundingClientRect();
  const camera = new THREE.PerspectiveCamera(46, rect.width / rect.height, 0.1, 120);
  camera.position.set(0, 2.2, 10.8);

  const renderer = new THREE.WebGLRenderer({ antialias:true, alpha:false, powerPreference:'high-performance' });
  renderer.setSize(rect.width, rect.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  canvasWrap.appendChild(renderer.domElement);

  const labelRenderer = new CSS2DRenderer();
  labelRenderer.setSize(rect.width, rect.height);
  labelRenderer.domElement.className = 'wm-3d-labels';
  container.appendChild(labelRenderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.055;
  controls.minDistance = 5.2;
  controls.maxDistance = 15.5;
  controls.maxPolarAngle = Math.PI * .74;
  controls.target.set(0, .9, 0);

  const root = new THREE.Group();
  scene.add(root);

  const mat = (color, rough=.78, metal=.05, emissive=0x000000, intensity=0) => new THREE.MeshStandardMaterial({
    color, roughness:rough, metalness:metal, emissive, emissiveIntensity:intensity
  });

  // Lights: cinematic warm/cold split + divine core
  scene.add(new THREE.HemisphereLight(0x9bbcff, 0x180d05, 1.28));
  const key = new THREE.DirectionalLight(0xffdf9e, 4.2); key.position.set(-5,8,6); key.castShadow=true; key.shadow.mapSize.set(2048,2048); scene.add(key);
  const rim = new THREE.DirectionalLight(0x7ec9ff, 2.1); rim.position.set(5,4,-4); scene.add(rim);
  const under = new THREE.PointLight(0x56dfff, 6.8, 16); under.position.set(0,-2.5,3.2); scene.add(under);

  // Nebula backdrop
  makeStars(THREE, scene);
  makeNebula(THREE, scene);

  // Yggdrasil: layered trunk + branches + roots
  const barkMat = mat(0x6a4827,.92,.02,0x241304,.12);
  const darkBark = mat(0x21160f,.96,.02,0x160b04,.05);
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(.34,.82,8.9,36,10), barkMat);
  trunk.position.y = .95; trunk.castShadow=true; trunk.receiveShadow=true; root.add(trunk);
  const trunk2 = new THREE.Mesh(new THREE.CylinderGeometry(.18,.36,9.3,20,8), mat(0x9f7139,.88,.02,0x5f3511,.18));
  trunk2.position.set(.08,1.05,.08); trunk2.castShadow=true; root.add(trunk2);

  for (let i=0;i<54;i++) {
    const a = Math.random()*Math.PI*2;
    const y = -2.75 + Math.random()*7.2;
    const len = .9 + Math.random()*3.4;
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(Math.cos(a)*.28,y,Math.sin(a)*.28),
      new THREE.Vector3(Math.cos(a)*(.8+Math.random()*.8),y+(Math.random()-.3)*.6,Math.sin(a)*(.8+Math.random()*.8)),
      new THREE.Vector3(Math.cos(a)*len,y+(Math.random()-.5)*1.15,Math.sin(a)*len)
    ]);
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 18, .024+Math.random()*.045, 8, false), i%3 ? barkMat : darkBark);
    tube.castShadow=true; root.add(tube);
  }

  for (let i=0;i<28;i++) {
    const a = i/28*Math.PI*2;
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0,-2.65,0),
      new THREE.Vector3(Math.cos(a)*1.1,-3.05,Math.sin(a)*1.1),
      new THREE.Vector3(Math.cos(a)*3.0,-3.65,Math.sin(a)*3.0),
      new THREE.Vector3(Math.cos(a)*4.4,-3.78,Math.sin(a)*4.4)
    ]);
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 32, .025+Math.random()*.045, 8, false), barkMat);
    tube.castShadow=true; root.add(tube);
  }

  const core = new THREE.Mesh(new THREE.SphereGeometry(.25,32,16), new THREE.MeshStandardMaterial({color:0x9eeeff,emissive:0x55dfff,emissiveIntensity:3.8,roughness:.25}));
  core.position.set(0,-2.65,.08); root.add(core);
  const coreGlow = new THREE.PointLight(0x72e9ff, 8, 7); coreGlow.position.copy(core.position); root.add(coreGlow);

  // Realm islands
  const realmObjects = new Map();
  const clickable = [];
  const islandGroup = new THREE.Group(); root.add(islandGroup);
  WM_ORDER.forEach(id => {
    const w = wmById(id); if (!w) return;
    const g = makeRealmIsland(THREE, mat, CSS2DObject, id, w);
    islandGroup.add(g);
    realmObjects.set(id, g);
    clickable.push(g.userData.hit);
  });

  makeConnectionArcs(THREE, root, WM_REALM_META, mat);
  const motes = makeParticles(THREE, root);
  const dust = makeGoldenDust(THREE, root);

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let hovered = null;
  let selected = null;

  function selectRealm(id, focus=false) {
    const world = wmById(id); if (!world) return;
    selected = id;
    document.querySelectorAll('.wm-realm-row').forEach(b => b.classList.toggle('active', b.dataset.id === id));
    const m = WM_REALM_META[id];
    const card = container.querySelector('#wm-info-card');
    card.innerHTML = `
      <div class="wm-info-kicker">${wmEscape(world.oldnorse || world.location || 'Níu Heimar')}</div>
      <h2 class="wm-info-title">${wmEscape(world.name)}</h2>
      <div class="wm-info-sub">${wmEscape(world.translation || world.inhabitants || '')}</div>
      <p class="wm-info-text">${wmEscape(wmTrim(wmShort(world), 310))}</p>
      <button class="wm-detail-button" type="button">Детально</button>`;
    card.querySelector('.wm-detail-button').onclick = () => showDescription(world, m);
    showDescription(world, m);

    if (focus) {
      const obj = realmObjects.get(id);
      const target = new THREE.Vector3(); obj.getWorldPosition(target);
      controls.target.lerp(target, .72);
    }
  }

  function showDescription(world, m) {
    const desc = document.getElementById('worldmap-description');
    const details = Array.isArray(world.details) ? world.details.slice(0,5) : [];
    const halls = Array.isArray(world.halls) ? world.halls.slice(0,4) : [];
    desc.innerHTML = `
      <h2 style="border-color:${m.accent}">${wmEscape(world.name)} <span style="color:${m.accent}">${wmEscape(world.oldnorse || '')}</span></h2>
      <div class="wm-description-grid">
        <div>
          <p>${wmEscape(world.description || world.translation || '')}</p>
          ${details.length ? `<ul class="wm-detail-list">${details.map(d => `<li>${wmEscape(d)}</li>`).join('')}</ul>` : ''}
        </div>
        <div class="wm-meta-list">
          <div><strong>Мешканці</strong>${wmEscape(world.inhabitants || '—')}</div>
          <div><strong>Положення</strong>${wmEscape(world.location || '—')}</div>
          <div><strong>Джерело</strong>${wmEscape(world.source || 'Старша / Молодша Едда')}</div>
          ${halls.length ? `<div><strong>Ключові місця</strong>${halls.map(h => wmEscape(h.name)).join(' · ')}</div>` : ''}
        </div>
      </div>`;
    desc.scrollIntoView({ behavior:'smooth', block:'nearest' });
  }

  renderer.domElement.addEventListener('pointermove', (e) => {
    const r = renderer.domElement.getBoundingClientRect();
    pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    pointer.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(clickable, false)[0];
    hovered = hit ? hit.object.userData.realmId : null;
    renderer.domElement.style.cursor = hovered ? 'pointer' : 'grab';
  });
  renderer.domElement.addEventListener('click', () => { if (hovered) selectRealm(hovered, true); });

  function resize() {
    const r = container.getBoundingClientRect();
    camera.aspect = r.width / r.height; camera.updateProjectionMatrix();
    renderer.setSize(r.width, r.height); labelRenderer.setSize(r.width, r.height);
  }
  window.addEventListener('resize', resize);

  let disposed = false;
  let t = 0;
  function animate() {
    if (disposed) return;
    t += .01;
    controls.update();
    root.rotation.y = Math.sin(t*.17) * .026;
    islandGroup.children.forEach(g => {
      const id = g.userData.realmId;
      const isHot = id === hovered || id === selected;
      const s = (WM_REALM_META[id].scale || 1) * (isHot ? 1.065 : 1);
      g.scale.lerp(new THREE.Vector3(s,s,s), .06);
      g.rotation.y += .0018 + (isHot ? .0014 : 0);
      g.position.y = g.userData.baseY + Math.sin(t*1.25 + g.userData.phase) * .035;
      const light = g.userData.light; if (light) light.intensity = isHot ? 4.2 : 2.2 + Math.sin(t*2+g.userData.phase)*.28;
    });
    core.scale.setScalar(1 + Math.sin(t*4)*.08);
    coreGlow.intensity = 7.2 + Math.sin(t*4)*1.4;
    motes.rotation.y -= .00042; dust.rotation.y += .0007;
    renderer.render(scene, camera); labelRenderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  __WM3D = {
    selectRealm,
    dispose() { disposed = true; window.removeEventListener('resize', resize); renderer.dispose(); container.querySelector('.wm-3d-labels')?.remove(); }
  };

  selectRealm('asgard');
  setTimeout(() => container.querySelector('#wm-loading')?.classList.add('hidden'), 850);
  animate();

  function makeRealmIsland(THREE, mat, CSS2DObject, id, world) {
    const meta = WM_REALM_META[id];
    const g = new THREE.Group();
    g.userData.realmId = id;
    g.userData.phase = Math.random()*Math.PI*2;
    g.position.set(...meta.pos); g.userData.baseY = meta.pos[1];
    g.scale.setScalar(meta.scale || 1);

    const islandMat = mat(0x2b2117,.92,.03,meta.color,.05);
    const topMat = mat(meta.color,.8,.05,meta.color,.08);
    const top = new THREE.Mesh(new THREE.CylinderGeometry(.88,1.22,.28,72,1), topMat);
    top.castShadow=true; top.receiveShadow=true; g.add(top);
    const under = new THREE.Mesh(new THREE.ConeGeometry(1.15,.92,64,1), islandMat);
    under.position.y=-.59; under.rotation.x=Math.PI; under.castShadow=true; g.add(under);
    const rimRing = new THREE.Mesh(new THREE.TorusGeometry(1.22,.012,8,112), new THREE.MeshBasicMaterial({color:meta.color,transparent:true,opacity:.44}));
    rimRing.rotation.x=Math.PI/2; g.add(rimRing);

    // landmark density
    const terrain = meta.terrain;
    addTerrain(THREE, mat, g, terrain, meta.color, id);

    // click hit sphere
    const hit = new THREE.Mesh(new THREE.SphereGeometry(1.25,32,16), new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false}));
    hit.userData.realmId = id; hit.userData.realm = world; g.add(hit); g.userData.hit = hit;

    const light = new THREE.PointLight(meta.color, 2.3, 5.2); light.position.y=.65; g.add(light); g.userData.light=light;

    const labelDiv = document.createElement('div'); labelDiv.className='wm-world-label'; labelDiv.innerHTML = `${meta.rune} ${wmEscape(world.name)}`;
    const label = new CSS2DObject(labelDiv); label.position.set(0,.74,0); g.add(label);
    return g;
  }

  function addTerrain(THREE, mat, group, terrain, color, id) {
    const count = id === 'asgard' ? 42 : id === 'midgard' ? 38 : 26;
    for (let i=0;i<count;i++) {
      const px = (Math.random()-.5)*1.64, pz = (Math.random()-.5)*1.12;
      const r = Math.hypot(px/1.64, pz/1.12); if (r>.62 && Math.random()<.55) continue;
      let mesh;
      if (terrain === 'gold') {
        const h=.25+Math.random()*.82;
        mesh = new THREE.Mesh(new THREE.CylinderGeometry(.025+Math.random()*.035,.045+Math.random()*.045,h,6), mat(0xd7bc77,.58,.14,0xffcd64,.25));
        mesh.position.y=.18+h/2;
        if (i%7===0) { const spire=new THREE.Mesh(new THREE.ConeGeometry(.07,h*.55,6), mat(0xf4dd9a,.5,.16,0xffcf66,.45)); spire.position.set(px, mesh.position.y+h*.46, pz); group.add(spire); }
      } else if (terrain === 'lava') {
        mesh = new THREE.Mesh(new THREE.ConeGeometry(.07+Math.random()*.16,.28+Math.random()*.68,7), mat(0x37140d,.84,.05,0xff2a0c,.9));
        mesh.position.y=.28;
        if (i%5===0) { const lava=new THREE.Mesh(new THREE.SphereGeometry(.035+Math.random()*.04,12,8), new THREE.MeshStandardMaterial({color:0xff8b2a,emissive:0xff3c10,emissiveIntensity:2.5})); lava.position.set(px,.2,pz); group.add(lava); }
      } else if (terrain === 'ice' || terrain === 'mist' || terrain === 'crystal') {
        mesh = new THREE.Mesh(new THREE.ConeGeometry(.055+Math.random()*.14,.28+Math.random()*.72,7), mat(terrain==='crystal'?0xb9ffff:0xc9eaff,.52,.04,color,.18));
        mesh.position.y=.24;
      } else if (terrain === 'forge') {
        mesh = new THREE.Mesh(new THREE.CylinderGeometry(.04+Math.random()*.05,.07+Math.random()*.08,.18+Math.random()*.45,6), mat(0x3a2a1e,.85,.08,0xff9b37,.24));
        mesh.position.y=.26;
      } else if (terrain === 'dead') {
        mesh = new THREE.Mesh(new THREE.ConeGeometry(.04+Math.random()*.09,.20+Math.random()*.55,6), mat(0x20152b,.85,.04,color,.24));
        mesh.position.y=.22;
      } else {
        mesh = new THREE.Mesh(new THREE.ConeGeometry(.035+Math.random()*.08,.18+Math.random()*.42,7), mat(0x20331c,.82,.02,color,.09));
        mesh.position.y=.22;
      }
      mesh.position.x=px; mesh.position.z=pz; mesh.rotation.y=Math.random()*Math.PI; mesh.castShadow=true; group.add(mesh);
    }
  }

  function makeConnectionArcs(THREE, root, meta, mat) {
    const ids = Object.keys(meta);
    ids.forEach(id => {
      if (id==='midgard') return;
      const from = new THREE.Vector3(...meta.midgard.pos);
      const to = new THREE.Vector3(...meta[id].pos);
      const mid = from.clone().lerp(to,.5); mid.y += .25 + Math.random()*.35;
      const curve = new THREE.CatmullRomCurve3([from, mid, to]);
      const tube = new THREE.Mesh(new THREE.TubeGeometry(curve,32,.012,6,false), new THREE.MeshBasicMaterial({color:meta[id].color,transparent:true,opacity:.28}));
      root.add(tube);
    });
    for(let i=0;i<7;i++){
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.4+i*.42,.004,8,170), new THREE.MeshBasicMaterial({color:0xc7a45c,transparent:true,opacity:.10}));
      ring.rotation.x=Math.PI/2+(i-3)*.045; ring.rotation.z=i*.37; root.add(ring);
    }
  }

  function makeStars(THREE, scene) {
    const geo = new THREE.BufferGeometry(); const n=1800; const arr=new Float32Array(n*3);
    for(let i=0;i<n;i++){ const R=22+Math.random()*30,a=Math.random()*Math.PI*2,y=(Math.random()-.5)*22; arr[i*3]=Math.cos(a)*R; arr[i*3+1]=y; arr[i*3+2]=Math.sin(a)*R; }
    geo.setAttribute('position', new THREE.BufferAttribute(arr,3));
    scene.add(new THREE.Points(geo,new THREE.PointsMaterial({color:0xb9c9ff,size:.026,transparent:true,opacity:.72})));
  }
  function makeNebula(THREE, scene) {
    const geo = new THREE.SphereGeometry(34,32,16);
    const neb = new THREE.Mesh(geo,new THREE.MeshBasicMaterial({color:0x243042,transparent:true,opacity:.18,side:THREE.BackSide})); scene.add(neb);
  }
  function makeParticles(THREE, root) {
    const geo = new THREE.BufferGeometry(); const n=700; const arr=new Float32Array(n*3);
    for(let i=0;i<n;i++){ arr[i*3]=(Math.random()-.5)*10; arr[i*3+1]=(Math.random()-.5)*9; arr[i*3+2]=(Math.random()-.5)*5; }
    geo.setAttribute('position', new THREE.BufferAttribute(arr,3));
    const p=new THREE.Points(geo,new THREE.PointsMaterial({color:0xa9dfff,size:.018,transparent:true,opacity:.45})); root.add(p); return p;
  }
  function makeGoldenDust(THREE, root) {
    const geo = new THREE.BufferGeometry(); const n=360; const arr=new Float32Array(n*3);
    for(let i=0;i<n;i++){ const r=1.5+Math.random()*4.4,a=Math.random()*Math.PI*2; arr[i*3]=Math.cos(a)*r; arr[i*3+1]=-3+Math.random()*8.5; arr[i*3+2]=Math.sin(a)*r*.55; }
    geo.setAttribute('position', new THREE.BufferAttribute(arr,3));
    const p=new THREE.Points(geo,new THREE.PointsMaterial({color:0xffd46d,size:.022,transparent:true,opacity:.52})); root.add(p); return p;
  }
}
