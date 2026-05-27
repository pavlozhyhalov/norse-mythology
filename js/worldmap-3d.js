// TEST VERSION
function initWorldMap3D() {
  var container = document.getElementById('worldmap-container');
  if (!container) {
    console.error('worldmap-container NOT FOUND');
    return;
  }
  container.style.background = 'red';
  container.style.height = '200px';
  container.innerHTML = '<p style="color:white;padding:20px;font-family:Cinzel,serif">СКРИПТ ПРАЦЮЄ</p>';
  console.log('initWorldMap3D called OK');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWorldMap3D);
} else {
  initWorldMap3D();
}
