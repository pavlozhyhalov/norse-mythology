// ============================================================
// ДАНІ: 24 РУНИ СТАРШОГО ФУТАРКУ
// Джерела: Older Futhark inscriptions, Rune Poems (Anglo-Saxon,
//          Norwegian, Icelandic), Hávamál (Старша Едда ст. 138-163)
// Примітка: Значення рун — тема дискусій; тут подані найбільш
//           усталені інтерпретації на основі рунічних поем і написів.
// ============================================================

const RUNES_DATA = [
  // ═══ ФРЕЙР'С ЕТТ (Frey's Ætt) ═══
  {
    id: "fehu",
    symbol: "ᚠ",
    name: "Фехуз / Феху",
    oldnorse: "Fé",
    proto_germanic: "*Fehu",
    transliteration: "F",
    meaning: "Худоба, майно, рухоме багатство",
    description: "Перша руна Футарку. Символізує рухоме майно, достаток, що здобувається і тримається в русі. У давні часи худоба була головною одиницею багатства. Руна Феху — це не просто гроші, а живий статок, що потребує догляду.",
    norwegian_poem: "Fé vældr frænda róge; / föðesk ulfr í skóge. (Майно є причиною чвар між родичами; вовк годується в лісі.)",
    icelandic_poem: "Fé er frænda róg / ok flæðar viti / ok grafseiðs gata. (Майно — чвари родичів і вогонь прибою і шлях могильного змія.)",
    aett: "Фрейра",
    position: 1
  },
  {
    id: "uruz",
    symbol: "ᚢ",
    name: "Уруз",
    oldnorse: "Úr",
    proto_germanic: "*Ūruz",
    transliteration: "U",
    meaning: "Тур (дикий бик), первісна сила, здоров'я",
    description: "Руна первісної сили і витривалості. Тур (aurochs) — вимерлий дикий бик, символ нестримної природної міці. Також пов'язується зі шлаком від ковки (davньоангл. ur = шлак, залізо).",
    norwegian_poem: "Úr er af illu jarne; / opt løypr ræinn á hjarne. (Тур — з поганого заліза; олень часто скаче по твердому снігу.)",
    aett: "Фрейра",
    position: 2
  },
  {
    id: "thurisaz",
    symbol: "ᚦ",
    name: "Туріcаз / Торн",
    oldnorse: "Þurs",
    proto_germanic: "*Þurisaz",
    transliteration: "Þ (Th)",
    meaning: "Велет (Þurs), шип, сила Тора",
    description: "Руна велетів і колючок. Þurs — давньоісландське слово для велетів-йотунів. Руна амбівалентна: це і захисна сила (шип захищає рослину), і небезпека (велети — сили хаосу).",
    norwegian_poem: "Þurs vældr kvinna kvillu; / kátr værðr fár af illu. (Велет — мука для жінок; небагато радіє злу.)",
    aett: "Фрейра",
    position: 3
  },
  {
    id: "ansuz",
    symbol: "ᚨ",
    name: "Ансуз",
    oldnorse: "Óss / Áss",
    proto_germanic: "*Ansuz",
    transliteration: "A",
    meaning: "Ас (бог), Одін, дихання, мова, натхнення",
    description: "Руна богів і Одіна. Пов'язана з даром мови, поезії і магічного слова. Асy — аси, боги нордичного пантеону. Руна натхнення, красномовства і зв'язку з вищими силами.",
    icelandic_poem: "Óss er algingautr / ok ásgarðs jöfurr, / ok valhallar vísi. (Ас — вічний мандрівник і правитель Асґарду і вождь Вальгалли.)",
    god_connection: "Одін",
    aett: "Фрейра",
    position: 4
  },
  {
    id: "raidho",
    symbol: "ᚱ",
    name: "Райдо",
    oldnorse: "Reið",
    proto_germanic: "*Raidō",
    transliteration: "R",
    meaning: "Подорож, їзда верхи, ритм, порядок",
    description: "Руна подорожі і руху. Reið — поїздка, їзда верхи. Також пов'язана з небесними колісницями богів (Сонце і Місяць) і циклічним ритмом природи.",
    norwegian_poem: "Reið kveðr vera rossom væsta; / Reginn sló sværðet bæzta. (Говорять, верхова їзда погана для коней; Реґін викував найкращий меч.)",
    aett: "Фрейра",
    position: 5
  },
  {
    id: "kenaz",
    symbol: "ᚲ",
    name: "Кеназ",
    oldnorse: "Kaun",
    proto_germanic: "*Kaunan / *Kēnaz",
    transliteration: "K / C",
    meaning: "Смолоскип, вогонь, знання, мистецтво",
    description: "Руна вогню і знань. Kén — давньоанглійська для смолоскипа. Символізує освітлення темряви, майстерність ковалів і художників, передачу знань.",
    anglo_saxon_poem: "Cén byþ cwicera gehwam, / cuþ on fyre / blác ond beorhtlic, / byrneþ oftust. (Смолоскип — відомий всьому живому, ясний і яскравий, часто горить.)",
    aett: "Фрейра",
    position: 6
  },
  {
    id: "gebo",
    symbol: "ᚷ",
    name: "Ґебо",
    oldnorse: "Gjöf",
    proto_germanic: "*Gebō",
    transliteration: "G",
    meaning: "Подарунок, обмін, щедрість, союз",
    description: "Руна дарування і рівноваги обміну. В нордичній культурі дарунок зобов'язував отримувача до відповідного дарунку — це підтримувало соціальні зв'язки. Форма руни — хрест — символ рівноваги.",
    anglo_saxon_poem: "Gyfu gumena byþ gleng and herenys, / wraþu and wyrþscype. (Щедрість людей — краса і слава, підтримка і гідність.)",
    aett: "Фрейра",
    position: 7
  },
  {
    id: "wunjo",
    symbol: "ᚹ",
    name: "Вуньо",
    oldnorse: "Vend / Vin",
    proto_germanic: "*Wunjō",
    transliteration: "W / V",
    meaning: "Радість, гармонія, достаток, вітер",
    description: "Руна радості і благополуччя. Символізує стан, коли всі потреби задоволені і людина в гармонії зі своїм кланом і природою. Руна успіху і щастя.",
    anglo_saxon_poem: "Wenne bruceþ, ðe can weana lyt / sáres and sorge. (Радість насолоджується той, хто знає мало горя і болю.)",
    aett: "Фрейра",
    position: 8
  },
  // ═══ ГАҐАЛЬ'С ЕТТ (Hagal's Ætt) ═══
  {
    id: "hagalaz",
    symbol: "ᚺ",
    name: "Хаґалаз",
    oldnorse: "Hagall",
    proto_germanic: "*Haglaz",
    transliteration: "H",
    meaning: "Град, руйнівні природні сили, очищення",
    description: "Руна граду і стихії. Символізує руйнівні природні сили, що неможливо контролювати. Водночас — руна очищення: після граду земля родить краще. Фімбулвінтер (три зими Раґнарьоку) пов'язаний з цією руною.",
    norwegian_poem: "Hagall er kaldastr korna; / Kristr skóp hæimenn forna. (Град — найхолодніше з зерен; Христос створив давній світ.)",
    aett: "Гаґалля",
    position: 9
  },
  {
    id: "nauthiz",
    symbol: "ᚾ",
    name: "Наутіз",
    oldnorse: "Nauðr",
    proto_germanic: "*Naudiz",
    transliteration: "N",
    meaning: "Потреба, нужда, обмеження, вимушене зусилля",
    description: "Руна нужди і необхідності. Nauðr — давньоісл. 'потреба, нужда'. Символізує труднощі, що спонукають до дії, обмеження, що формують характер. Тертя для розпалювання вогню.",
    norwegian_poem: "Nauðr gerer næppa koste; / naktan kælr í froste. (Нужда дає малий вибір; голий мерзне на морозі.)",
    aett: "Гаґалля",
    position: 10
  },
  {
    id: "isa",
    symbol: "ᛁ",
    name: "Іса",
    oldnorse: "Íss",
    proto_germanic: "*Isaz",
    transliteration: "I",
    meaning: "Лід, стаз, зупинка, концентрація",
    description: "Руна льоду. Íss — давньоісл. 'лід'. Символізує зупинку, нерухомість, концентрацію. Лід може бути небезпечним (ковзання) але й корисним (консервація, переправа). Руна терпіння.",
    icelandic_poem: "Íss er árbörkr / ok unnar þak / ok feigra manna fár. (Лід — кора ріки і покрівля хвилі і небезпека приречених людей.)",
    aett: "Гаґалля",
    position: 11
  },
  {
    id: "jera",
    symbol: "ᛃ",
    name: "Єра",
    oldnorse: "Ár",
    proto_germanic: "*Jēran",
    transliteration: "J / Y",
    meaning: "Рік, врожай, цикл, плід праці",
    description: "Руна врожаю і циклів часу. Jēran — 'рік'. Символізує плоди довготривалої праці, природні цикли зростання і збору. Нагадує, що правильні дії у правильний час дають правильні результати.",
    norwegian_poem: "Ár er gumna góðe; / get ek at örr var Fróðe. (Врожай — благо людей; думаю, Фроді був щедрим.)",
    aett: "Гаґалля",
    position: 12
  },
  {
    id: "eihwaz",
    symbol: "ᛇ",
    name: "Ейваз",
    oldnorse: "Ýr",
    proto_germanic: "*Eihwaz",
    transliteration: "Ei / Y",
    meaning: "Тис, Іґґдрасіль, смерть і відродження, зв'язок між світами",
    description: "Руна тиса — дерева безсмертя і смерті. Тис росте дуже довго і отруйний. Пов'язується з Іґґдрасілем і шаманськими подорожами між світами. Одін їздив на Слейпнірі між світами — ейваз символізує цю вісь.",
    aett: "Гаґалля",
    position: 13
  },
  {
    id: "perthro",
    symbol: "ᛈ",
    name: "Перт / Пертро",
    oldnorse: "Неясно",
    proto_germanic: "*Perþō",
    transliteration: "P",
    meaning: "Доля, лотерея, таємниця, vulva (жіноче лоно)",
    description: "Одна з найбільш загадкових рун. Можливо пов'язана з ворожбою і жеребкуванням (руни кидали як кістки долі). Деякі дослідники бачать у ній символ народження і жіночої сили. Значення лишається дискусійним.",
    aett: "Гаґалля",
    position: 14
  },
  {
    id: "algiz",
    symbol: "ᛉ",
    name: "Алґіз / Ельхаз",
    oldnorse: "Ýr (інша рунічна поема) / Algiz",
    proto_germanic: "*Algiz",
    transliteration: "Z / R",
    meaning: "Лось, захист, обережність, зв'язок з богами",
    description: "Руна захисту. Форма нагадує лося з рогами або людину з піднятими руками. Символізує захист, зв'язок з вищими силами і обережність при взаємодії з небезпечним.",
    aett: "Гаґалля",
    position: 15
  },
  {
    id: "sowilo",
    symbol: "ᛋ",
    name: "Совіло / Соль",
    oldnorse: "Sól",
    proto_germanic: "*Sōwilō",
    transliteration: "S",
    meaning: "Сонце, перемога, енергія, путівник",
    description: "Руна Сонця. Sól — давньоісл. 'сонце'. Символізує сонячну енергію, перемогу, ясність. Вітікінги різали цю руну на щитах і зброї для перемоги. Подвоєна — символ СС в 20 ст. (неправомірне використання).",
    icelandic_poem: "Sól er skjöldr skýja / ok skínandi röðull / ok ísa aldrtregi. (Сонце — щит хмар і сяючий промінь і руйнівник льодів на все життя.)",
    aett: "Гаґалля",
    position: 16
  },
  // ═══ ТЮР'С ЕТТ (Tyr's Ætt) ═══
  {
    id: "tiwaz",
    symbol: "ᛏ",
    name: "Тейваз / Тіваз",
    oldnorse: "Týr",
    proto_germanic: "*Tīwaz",
    transliteration: "T",
    meaning: "Тюр, справедливість, самопожертва, перемога",
    description: "Руна Тюра. Форма — стрілка вгору. Символізує справедливість, чесний бій, самопожертву заради вищої мети (Тюр пожертвував рукою). Різалась на клинках для перемоги у бою.",
    icelandic_poem: "Týr er einhendr áss / ok ulfs leifar / ok hofa hilmir. (Тюр — однорукий ас і залишок вовка і правитель храмів.)",
    god_connection: "Тюр",
    aett: "Тюра",
    position: 17
  },
  {
    id: "berkano",
    symbol: "ᛒ",
    name: "Беркано / Берк",
    oldnorse: "Bjarkan",
    proto_germanic: "*Berkanan",
    transliteration: "B",
    meaning: "Береза, народження, ріст, відновлення",
    description: "Руна берези і жіночого начала. Береза — перше дерево, що зеленіє навесні. Символізує народження, нове начало, ріст і материнське начало. Руна Фрейї і Іґґдрасіля.",
    icelandic_poem: "Bjarkan er laufgat lim / ok lítit tré / ok ungsamligr viðr. (Береза — гілляста гілка і маленьке дерево і молодняк.)",
    aett: "Тюра",
    position: 18
  },
  {
    id: "ehwaz",
    symbol: "ᛖ",
    name: "Ехваз",
    oldnorse: "Ehol / Eoh",
    proto_germanic: "*Ehwaz",
    transliteration: "E",
    meaning: "Кінь, партнерство, рух, довіра",
    description: "Руна коня і партнерства. Кінь — не просто транспорт, а товариш і помічник. Символізує гармонійне партнерство між двома: вершником і конем, людиною і богом.",
    anglo_saxon_poem: "Eh byþ for eorlum æþelinga wyn, / hors hofum wlanc. (Кінь — радість ерлів і знаті, гордий кінь копитами.)",
    aett: "Тюра",
    position: 19
  },
  {
    id: "mannaz",
    symbol: "ᛗ",
    name: "Маназ",
    oldnorse: "Maðr",
    proto_germanic: "*Mannaz",
    transliteration: "M",
    meaning: "Людина, людство, соціальний порядок",
    description: "Руна людини. Maðr — давньоісл. 'людина, чоловік'. Символізує людину в соціальному контексті, взаємозалежність людей, інтелект і свідомість. Аскр і Ембля — перші люди.",
    icelandic_poem: "Maðr er manns gaman / ok moldar auki / ok skipa skreytir. (Людина — радість людини і прирощення землі і прикраса кораблів.)",
    aett: "Тюра",
    position: 20
  },
  {
    id: "laguz",
    symbol: "ᛚ",
    name: "Лаґуз",
    oldnorse: "Lögr",
    proto_germanic: "*Laguz",
    transliteration: "L",
    meaning: "Вода, море, плинність, несвідоме",
    description: "Руна води і підсвідомого. Lögr — давньоісл. 'вода, озеро'. Символізує плинність, адаптацію, глибини несвідомого. Скандинави — морський народ, вода — і небезпека, і шлях.",
    icelandic_poem: "Lögr er vellanda vatn / ok víðr ketill / ok glömmungr grund. (Вода — кипляча вода і широкий казан і земля риб.)",
    aett: "Тюра",
    position: 21
  },
  {
    id: "ingwaz",
    symbol: "ᛜ",
    name: "Інґваз",
    oldnorse: "Ing",
    proto_germanic: "*Ingwaz",
    transliteration: "Ng",
    meaning: "Інґ (Фрейр), родючість, потенційна енергія, завершення",
    description: "Руна бога Інґа (Фрейра) — покровителя родючості і достатку. Символізує внутрішню силу, готову вивільнитися, завершення одного циклу і початок наступного.",
    aett: "Тюра",
    position: 22,
    god_connection: "Фрейр (Інґ)"
  },
  {
    id: "dagaz",
    symbol: "ᛞ",
    name: "Даґаз",
    oldnorse: "Dagr",
    proto_germanic: "*Dagaz",
    transliteration: "D",
    meaning: "День, прорив, трансформація, баланс протилежностей",
    description: "Руна дня і прориву. Dagr — 'день'. Форма нагадує метелика або знак нескінченності — рівновага між ніччю і вдень, між протилежностями. Символізує трансформацію і момент прориву.",
    aett: "Тюра",
    position: 23
  },
  {
    id: "othalan",
    symbol: "ᛟ",
    name: "Отала / Оталаз",
    oldnorse: "Óðal",
    proto_germanic: "*Ōþalan",
    transliteration: "O",
    meaning: "Спадщина, батьківщина, клан, успадкований маєток",
    description: "Остання руна Футарку. Óðal — 'спадковий маєток, батьківщина'. Символізує спадщину у всіх сенсах: землю, кровні зв'язки, традиції. Те, що отримано від предків і передається нащадкам.",
    icelandic_poem: "Óðal er alls upphaf / ok Ásgarðs jörð / ok valhallar vísi. (Спадщина — початок всього і земля Асґарда і вождь Вальгалли.)",
    aett: "Тюра",
    position: 24
  }
];

// Загальна інформація про рунічну магію
const RUNE_MAGIC_DATA = {
  title: "Магія рун: Ґальдр і рунічні написи",
  odin_discovery: {
    text: "Одін відкрив руни після 9-денного самопожертвування: повісив себе на Іґґдрасілі, пронизаний списом, без їжі і пиття. На дев'ятий день побачив руни — підняв їх. (Hávamál 138-139, Старша Едда)",
    source: "Hávamál ст. 138-139"
  },
  types_of_rune_magic: [
    { type: "Ґальдр (Galdrar)", description: "Магічний спів і вимовляння рун вголос. Активує магічну дію через звук." },
    { type: "Різьблення (Rísta)", description: "Вирізання рун на зброї, кораблях, надгробках, деревах." },
    { type: "Фарбування (Fáa)", description: "Заповнення вирізаних рун кров'ю або фарбою для активації." },
    { type: "Галузування (Hrista)", description: "Замішування або встряхування рун перед ворожбою." }
  ],
  uses: [
    "Захист (алу — захисна формула на ранніх написах)",
    "Перемога у бою (Тейваз на клинках)",
    "Лікування і здоров'я",
    "Прокляття ворогів (нідстанґ — 'стовп злоби')",
    "Ворожба і передбачення майбутнього",
    "Пам'ять про померлих (рунічні камені)"
  ],
  odins_18_runes: {
    description: "У Hávamál (ст. 147-165) Одін перераховує 18 заклинань, які він знає — але не всі їх описи збереглися. Вони захищають від вогню, хвороби, отрути, прокляття.",
    source: "Hávamál ст. 147-165 (Старша Едда)"
  },
  note: "Рунічна магія НЕ є системою з фіксованими значеннями для кожної руни — це сучасна (20 ст.) систематизація. Давні скандинави використовували руни ситуативно і комбінаційно. Значення в цій таблиці — усталені інтерпретації на основі рунічних поем і досліджень (Dumézil, McKinnell, Flowers та ін.)."
};

if (typeof module !== 'undefined') module.exports = { RUNES_DATA, RUNE_MAGIC_DATA };
