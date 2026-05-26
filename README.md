# Scandia Mythos — 3D World Map Integration

## Структура файлів

```
├── index.html              ← НОВИЙ (з 3D картою)
├── index_original.html     ← оригінальний (резервна копія)
├── models/
│   ├── yggdrasil.glb       ← 3D модель стиснута (64MB) ← ВИКОРИСТОВУЄТЬСЯ
│   └── yggdrasil_original.glb ← оригінал (367MB)
├── js/
│   ├── worldmap-3d.js      ← НОВИЙ файл 3D карти
│   ├── worldmap_old.js     ← старий worldmap.js (резервна копія)
│   ├── main.js
│   ├── art.js
│   ├── worlds.js
│   ├── aesir.js
│   ├── vanir.js
│   ├── creatures.js
│   ├── artifacts.js
│   ├── runes.js
│   ├── events.js
│   ├── genealogy.js
│   └── genealogy_render.js
└── css/
    ├── style.css
    ├── worldmap.css
    └── genealogy.css
```

## Що завантажити на GitHub

1. `index.html` → замінює старий
2. `models/yggdrasil.glb` → нова папка models/
3. `js/worldmap-3d.js` → нова папка js/

## Важливо для GitHub Pages

GitHub Pages має ліміт файлів ~100MB.
Файл yggdrasil.glb = 64MB — має пройти.

Якщо проблема з розміром — використай Git LFS:
```
git lfs install
git lfs track "*.glb"
git add .gitattributes
```
