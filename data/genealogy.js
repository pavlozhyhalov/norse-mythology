// ============================================================
// ДАНІ: ГЕНЕАЛОГІЯ БОГІВ
// Джерела: Gylfaginning (Молодша Едда), Völuspá (Старша Едда)
// ============================================================

const GENEALOGY_DATA = {
  title: "Генеалогія нордичних богів",
  note: "Деякі зв'язки варіюються між різними текстами — тут подані найбільш усталені версії.",

  primordial: {
    label: "ПЕРШОНАЧАЛО",
    entities: [
      { id: "ginnungagap", name: "Ґіннунґаґап", type: "Порожнеча", desc: "Первісна порожнеча між вогнем і льодом" },
      { id: "niflheim_p", name: "Ніфльгейм", type: "Первісний світ льоду", desc: "" },
      { id: "muspelheim_p", name: "Муспельгейм", type: "Первісний світ вогню", desc: "" }
    ]
  },

  firstBeings: {
    label: "ПЕРШОІСТОТИ",
    entities: [
      { id: "ymir", name: "Імір", type: "Першовелет", desc: "З тіла якого створено світ", parents: [] },
      { id: "audhumla", name: "Аудумбла", type: "Первісна корова", desc: "Годувала Іміра, вилизала Бурі з льоду", parents: [] },
      { id: "buri", name: "Бурі", type: "Першобог", desc: "Вилизаний Аудумблою з льоду", parents: ["audhumla"] }
    ]
  },

  firstGeneration: {
    label: "ПЕРШЕ ПОКОЛІННЯ АСІВ",
    entities: [
      { id: "borr", name: "Бор", type: "Ас", parents: ["buri"] },
      { id: "bestla", name: "Бестла", type: "Велетка", desc: "Дочка велета Бьольторна", parents: [] }
    ]
  },

  secondGeneration: {
    label: "ДРУГЕ ПОКОЛІННЯ — ТВОРЦІ СВІТУ",
    entities: [
      { id: "odin", name: "Одін", type: "Ас", parents: ["borr", "bestla"] },
      { id: "ve", name: "Ве", type: "Ас", parents: ["borr", "bestla"] },
      { id: "vili", name: "Вілі", type: "Ас", parents: ["borr", "bestla"] }
    ]
  },

  odinLineage: {
    label: "РІД ОДІНА",
    marriages: [
      {
        parent1: "Одін",
        parent2: "Фріґґ",
        children: ["Бальдр", "Хьод", "Гермод"]
      },
      {
        parent1: "Одін",
        parent2: "Йорд (Земля)",
        children: ["Тор"]
      },
      {
        parent1: "Одін",
        parent2: "Рінд",
        children: ["Валі"]
      },
      {
        parent1: "Одін",
        parent2: "Ґрід (велетка)",
        children: ["Відар"]
      }
    ]
  },

  thorLineage: {
    label: "РІД ТОРА",
    marriages: [
      {
        parent1: "Тор",
        parent2: "Сів",
        children: ["Труд"]
      },
      {
        parent1: "Тор",
        parent2: "Ярнсакса (велетка)",
        children: ["Маґні", "Моді"]
      }
    ],
    note: "Улль — пасинок Тора (син Сів від невідомого батька)"
  },

  baldrLineage: {
    label: "РІД БАЛЬДРА",
    marriages: [
      {
        parent1: "Бальдр",
        parent2: "Нанна",
        children: ["Форсеті"]
      }
    ]
  },

  vanirLineage: {
    label: "РІД НЬОРДА (ВАНИ)",
    entities: [
      { id: "njord", name: "Ньорд", type: "Ван", parents: [] },
      { id: "freyr", name: "Фрейр", type: "Ван", parents: ["njord"] },
      { id: "freyja", name: "Фрейя", type: "Ван", parents: ["njord"] }
    ],
    marriages: [
      {
        parent1: "Фрейя",
        parent2: "Одур",
        children: ["Хносс", "Ґерсемі"]
      }
    ]
  },

  lokiLineage: {
    label: "РІД ЛОКІ",
    parents_of_loki: [
      { name: "Фарбауті", type: "Велет" },
      { name: "Лаувей/Наль", type: "Богиня або велетка" }
    ],
    marriages: [
      {
        parent1: "Локі",
        parent2: "Анґрбода (велетка)",
        children: ["Фенрір (вовк)", "Йормунґанд (змій)", "Гель"]
      },
      {
        parent1: "Локі",
        parent2: "Сіґюн",
        children: ["Нарві", "Валі (смертний)"]
      },
      {
        parent1: "Локі (як кобила)",
        parent2: "Свадільфарі",
        children: ["Слейпнір (кінь Одіна)"]
      }
    ]
  },

  firstHumans: {
    label: "ПЕРШІ ЛЮДИ",
    created_by: ["Одін (önd — дихання, душа)", "Ве (зовнішність, мова)", "Вілі (тепло, колір, розум)"],
    entities: [
      { id: "askr", name: "Аскр", type: "Перша людина (чоловік)", desc: "Створений з ясена (askr)" },
      { id: "embla", name: "Ембля", type: "Перша людина (жінка)", desc: "Створена з вільхи (embla)" }
    ]
  },

  ragnarokSurvivors: {
    label: "ВИЖИВУТЬ У РАҐНАРЬОК",
    gods: ["Відар", "Валі", "Маґні", "Моді", "Гьонір"],
    returning: ["Бальдр (з Гельгейму)", "Хьод (з Гельгейму)"],
    humans: ["Ліф", "Ліфтрасір"]
  }
};

// Дані для інтерактивного SVG-дерева
const FAMILY_TREE_NODES = [
  // Рівень 0 — першоістоти
  { id: "ginnungagap", label: "Ґіннунґаґап", level: 0, type: "primordial", x: 400, y: 0 },
  { id: "ymir", label: "Імір", level: 1, type: "giant", x: 200, y: 80 },
  { id: "audhumla", label: "Аудумбла", level: 1, type: "creature", x: 400, y: 80 },
  { id: "buri", label: "Бурі", level: 1, type: "god", x: 600, y: 80 },

  // Рівень 2
  { id: "borr", label: "Бор", level: 2, type: "god", x: 600, y: 180 },
  { id: "bestla", label: "Бестла", level: 2, type: "giantess", x: 750, y: 180 },

  // Рівень 3 — троє братів
  { id: "odin", label: "Одін", level: 3, type: "aesir_main", x: 400, y: 280 },
  { id: "ve", label: "Ве", level: 3, type: "aesir", x: 600, y: 280 },
  { id: "vili", label: "Вілі", level: 3, type: "aesir", x: 700, y: 280 },

  // Рівень 4 — діти Одіна
  { id: "thor", label: "Тор", level: 4, type: "aesir_main", x: 100, y: 380 },
  { id: "baldr", label: "Бальдр", level: 4, type: "aesir_main", x: 250, y: 380 },
  { id: "hodr", label: "Хьод", level: 4, type: "aesir", x: 350, y: 380 },
  { id: "tyr", label: "Тюр", level: 4, type: "aesir_main", x: 450, y: 380 },
  { id: "vali", label: "Валі", level: 4, type: "aesir", x: 550, y: 380 },
  { id: "vidar", label: "Відар", level: 4, type: "aesir", x: 650, y: 380 },

  // Рівень 5
  { id: "magni", label: "Маґні", level: 5, type: "aesir", x: 50, y: 480 },
  { id: "modi", label: "Моді", level: 5, type: "aesir", x: 150, y: 480 },
  { id: "forseti", label: "Форсеті", level: 5, type: "aesir", x: 250, y: 480 },

  // Вани
  { id: "njord", label: "Ньорд", level: 3, type: "vanir_main", x: 850, y: 280 },
  { id: "freyr", label: "Фрейр", level: 4, type: "vanir_main", x: 800, y: 380 },
  { id: "freyja", label: "Фрейя", level: 4, type: "vanir_main", x: 920, y: 380 },

  // Локі
  { id: "loki", label: "Локі", level: 3, type: "trickster", x: 150, y: 280 },
  { id: "fenrir", label: "Фенрір", level: 4, type: "monster", x: 50, y: 460 },
  { id: "jormungandr", label: "Йормунґанд", level: 4, type: "monster", x: -80, y: 460 },
  { id: "hel", label: "Гель", level: 4, type: "deity", x: -200, y: 460 },
  { id: "sleipnir", label: "Слейпнір", level: 4, type: "creature", x: -50, y: 380 },
];

const FAMILY_TREE_EDGES = [
  { from: "audhumla", to: "buri", type: "created" },
  { from: "buri", to: "borr", type: "parent" },
  { from: "borr", to: "odin", type: "parent" },
  { from: "borr", to: "ve", type: "parent" },
  { from: "borr", to: "vili", type: "parent" },
  { from: "odin", to: "thor", type: "parent" },
  { from: "odin", to: "baldr", type: "parent" },
  { from: "odin", to: "hodr", type: "parent" },
  { from: "odin", to: "vali", type: "parent" },
  { from: "odin", to: "vidar", type: "parent" },
  { from: "thor", to: "magni", type: "parent" },
  { from: "thor", to: "modi", type: "parent" },
  { from: "baldr", to: "forseti", type: "parent" },
  { from: "njord", to: "freyr", type: "parent" },
  { from: "njord", to: "freyja", type: "parent" },
  { from: "loki", to: "fenrir", type: "parent" },
  { from: "loki", to: "jormungandr", type: "parent" },
  { from: "loki", to: "hel", type: "parent" },
  { from: "loki", to: "sleipnir", type: "parent" },
];

if (typeof module !== 'undefined') module.exports = { GENEALOGY_DATA, FAMILY_TREE_NODES, FAMILY_TREE_EDGES };
