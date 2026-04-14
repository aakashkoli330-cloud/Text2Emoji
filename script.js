// ─── EMOJI MAP ────────────────────────────────────────────────────────────────
const emojiMap = {
  // Feelings / emotions
  love: "❤️",
  like: "👍",
  hate: "😡",
  happy: "😊",
  sad: "😢",
  angry: "😠",
  excited: "🤩",
  scared: "😱",
  surprised: "😲",
  confused: "😕",
  tired: "😴",
  bored: "😑",
  lonely: "😔",
  proud: "🥹",
  nervous: "😬",
  worried: "😟",
  disgusted: "🤢",
  jealous: "😒",
  grateful: "🙏",
  sorry: "🙏",
  miss: "💔",
  cry: "😭",
  laugh: "😂",
  smile: "😊",
  fun: "🎉",
  cool: "😎",
  awesome: "🔥",
  great: "👌",
  good: "✅",
  bad: "❌",
  okay: "🆗",
  yes: "✅",
  no: "❌",
  wow: "🤯",
  oops: "😬",
  lol: "😂",
  yay: "🎉",
  // People & social
  friend: "👫",
  family: "👨‍👩‍👧",
  baby: "👶",
  boy: "👦",
  girl: "👧",
  man: "👨",
  woman: "👩",
  mom: "👩",
  dad: "👨",
  king: "👑",
  queen: "👑",
  hero: "🦸",
  alien: "👽",
  robot: "🤖",
  // Nature
  sun: "☀️",
  moon: "🌙",
  star: "⭐",
  rain: "🌧️",
  snow: "❄️",
  wind: "💨",
  cloud: "☁️",
  storm: "⛈️",
  rainbow: "🌈",
  flower: "🌸",
  tree: "🌳",
  leaf: "🍃",
  fire: "🔥",
  water: "💧",
  earth: "🌍",
  sky: "🌌",
  mountain: "⛰️",
  ocean: "🌊",
  beach: "🏖️",
  river: "🏞️",
  forest: "🌲",
  desert: "🏜️",
  island: "🏝️",
  night: "🌙",
  day: "☀️",
  // Animals
  dog: "🐶",
  cat: "🐱",
  fish: "🐟",
  bird: "🐦",
  rabbit: "🐰",
  bear: "🐻",
  lion: "🦁",
  tiger: "🐯",
  elephant: "🐘",
  horse: "🐴",
  cow: "🐄",
  pig: "🐷",
  snake: "🐍",
  frog: "🐸",
  turtle: "🐢",
  penguin: "🐧",
  monkey: "🐵",
  wolf: "🐺",
  fox: "🦊",
  bee: "🐝",
  butterfly: "🦋",
  ant: "🐜",
  spider: "🕷️",
  whale: "🐋",
  shark: "🦈",
  // Food & drink
  food: "🍽️",
  eat: "🍴",
  drink: "🥤",
  hungry: "🍽️",
  pizza: "🍕",
  burger: "🍔",
  cake: "🎂",
  sushi: "🍣",
  pasta: "🍝",
  bread: "🍞",
  rice: "🍚",
  noodles: "🍜",
  coffee: "☕",
  tea: "🍵",
  juice: "🧃",
  beer: "🍺",
  wine: "🍷",
  milk: "🥛",
  egg: "🥚",
  cheese: "🧀",
  chicken: "🍗",
  meat: "🥩",
  salad: "🥗",
  fruit: "🍎",
  apple: "🍎",
  banana: "🍌",
  grape: "🍇",
  strawberry: "🍓",
  mango: "🥭",
  lemon: "🍋",
  orange: "🍊",
  coconut: "🥥",
  pineapple: "🍍",
  ice: "🧊",
  chocolate: "🍫",
  candy: "🍬",
  cookie: "🍪",
  popcorn: "🍿",
  // Travel & places
  home: "🏠",
  house: "🏠",
  city: "🏙️",
  road: "🛣️",
  bridge: "🌉",
  school: "🏫",
  office: "🏢",
  hospital: "🏥",
  park: "🌳",
  shop: "🛍️",
  market: "🏪",
  hotel: "🏨",
  car: "🚗",
  bus: "🚌",
  train: "🚆",
  plane: "✈️",
  ship: "🚢",
  bike: "🚲",
  boat: "⛵",
  rocket: "🚀",
  taxi: "🚕",
  walk: "🚶",
  run: "🏃",
  trip: "✈️",
  // Activities & sports
  play: "🎮",
  game: "🎮",
  sport: "⚽",
  football: "🏈",
  soccer: "⚽",
  basketball: "🏀",
  tennis: "🎾",
  golf: "⛳",
  swim: "🏊",
  dance: "💃",
  sing: "🎤",
  music: "🎵",
  guitar: "🎸",
  piano: "🎹",
  art: "🎨",
  paint: "🎨",
  read: "📖",
  write: "✏️",
  cook: "👨‍🍳",
  sleep: "💤",
  dream: "💭",
  think: "🤔",
  work: "💼",
  study: "📚",
  gym: "🏋️",
  yoga: "🧘",
  hike: "🥾",
  camp: "⛺",
  hunt: "🏹",
  // Objects & tech
  phone: "📱",
  computer: "💻",
  laptop: "💻",
  camera: "📷",
  tv: "📺",
  book: "📚",
  money: "💰",
  gift: "🎁",
  ring: "💍",
  key: "🔑",
  lock: "🔒",
  light: "💡",
  battery: "🔋",
  clock: "⏰",
  calendar: "📅",
  map: "🗺️",
  bag: "👜",
  hat: "🎩",
  shirt: "👕",
  shoe: "👟",
  glasses: "👓",
  umbrella: "☂️",
  sword: "⚔️",
  gun: "🔫",
  bomb: "💣",
  diamond: "💎",
  crown: "👑",
  medal: "🏅",
  trophy: "🏆",
  flag: "🚩",
  letter: "📧",
  mail: "📬",
  newspaper: "📰",
  pencil: "✏️",
  scissors: "✂️",
  // Abstract & misc
  idea: "💡",
  hope: "🌟",
  future: "🔮",
  past: "⏪",
  time: "⏰",
  power: "⚡",
  magic: "✨",
  world: "🌍",
  life: "🌱",
  death: "💀",
  heart: "❤️",
  soul: "👻",
  mind: "🧠",
  peace: "☮️",
  war: "⚔️",
  victory: "🏆",
  freedom: "🕊️",
  change: "🔄",
  new: "🆕",
  old: "🕰️",
  big: "🐘",
  small: "🐜",
  fast: "⚡",
  slow: "🐢",
  hot: "🔥",
  cold: "🧊",
  loud: "📢",
  quiet: "🤫",
  bright: "☀️",
  dark: "🌑",
  beautiful: "🌸",
  ugly: "🤢",
  strong: "💪",
  weak: "😔",
};

// ─── MOOD MAP (vibe mode) ────────────────────────────────────────────────────
const moodMap = [
  {
    keywords: [
      "love",
      "heart",
      "miss",
      "dear",
      "crush",
      "romance",
      "kiss",
      "marry",
      "date",
    ],
    emojis: "❤️😍💕",
    label: "Romantic",
  },
  {
    keywords: [
      "happy",
      "joy",
      "fun",
      "laugh",
      "lol",
      "yay",
      "awesome",
      "great",
      "amazing",
      "best",
      "wonderful",
      "excited",
      "celebrate",
      "party",
    ],
    emojis: "😄🎉✨",
    label: "Joyful",
  },
  {
    keywords: [
      "sad",
      "cry",
      "miss",
      "alone",
      "lonely",
      "broken",
      "hurt",
      "pain",
      "tears",
      "unfortunate",
    ],
    emojis: "😢💔🌧️",
    label: "Sad",
  },
  {
    keywords: [
      "angry",
      "hate",
      "mad",
      "annoyed",
      "frustrated",
      "furious",
      "rage",
      "ugh",
      "seriously",
    ],
    emojis: "😡🔥💢",
    label: "Angry",
  },
  {
    keywords: [
      "scared",
      "fear",
      "horror",
      "dark",
      "nightmare",
      "ghost",
      "spooky",
      "danger",
    ],
    emojis: "😱👻🌑",
    label: "Spooky",
  },
  {
    keywords: [
      "hungry",
      "eat",
      "food",
      "pizza",
      "burger",
      "cake",
      "yum",
      "delicious",
      "restaurant",
      "dinner",
    ],
    emojis: "🍕😋🍔",
    label: "Foodie",
  },
  {
    keywords: [
      "tired",
      "sleep",
      "bed",
      "rest",
      "dream",
      "night",
      "lazy",
      "exhausted",
      "yawn",
    ],
    emojis: "😴💤🌙",
    label: "Sleepy",
  },
  {
    keywords: [
      "travel",
      "trip",
      "fly",
      "adventure",
      "explore",
      "journey",
      "vacation",
      "holiday",
      "plane",
      "car",
    ],
    emojis: "✈️🌍🗺️",
    label: "Adventurous",
  },
  {
    keywords: [
      "work",
      "study",
      "school",
      "office",
      "project",
      "deadline",
      "meeting",
      "boss",
      "homework",
    ],
    emojis: "💼📚😤",
    label: "Grind Mode",
  },
  {
    keywords: [
      "nature",
      "sun",
      "beach",
      "ocean",
      "mountain",
      "forest",
      "rain",
      "flower",
      "tree",
      "earth",
    ],
    emojis: "🌿☀️🌊",
    label: "Nature Lover",
  },
  {
    keywords: [
      "music",
      "song",
      "dance",
      "concert",
      "guitar",
      "piano",
      "vibe",
      "beat",
      "rhythm",
    ],
    emojis: "🎵🎶💃",
    label: "Musical",
  },
  {
    keywords: [
      "money",
      "rich",
      "buy",
      "shop",
      "deal",
      "invest",
      "earn",
      "expensive",
      "cheap",
    ],
    emojis: "💰🛍️💸",
    label: "Money Moves",
  },
  {
    keywords: [
      "cool",
      "chill",
      "relax",
      "vibe",
      "hang",
      "friends",
      "weekend",
      "free",
      "easy",
    ],
    emojis: "😎🧊🎮",
    label: "Chill",
  },
  {
    keywords: [
      "sport",
      "game",
      "win",
      "play",
      "team",
      "score",
      "goal",
      "champion",
      "compete",
    ],
    emojis: "🏆⚽💪",
    label: "Sporty",
  },
  {
    keywords: [
      "think",
      "idea",
      "plan",
      "create",
      "build",
      "invent",
      "design",
      "learn",
      "smart",
      "genius",
    ],
    emojis: "💡🧠🔮",
    label: "Big Brain",
  },
];

// ─── STATE ───────────────────────────────────────────────────────────────────
let isVibe = false;
let lastResult = "";

const examples = [
  "I love pizza and the sun",
  "Today was a sad and lonely day",
  "Let's travel to the beach this summer",
  "I am tired and need sleep",
  "Music makes me so happy",
  "I hate Mondays but love coffee",
];

// ─── INIT ────────────────────────────────────────────────────────────────────
window.onload = () => {
  const chips = document.getElementById("exampleChips");
  examples.forEach((ex) => {
    const c = document.createElement("div");
    c.className = "chip";
    c.textContent = ex;
    c.onclick = () => {
      document.getElementById("inputText").value = ex;
      runTranslate();
    };
    chips.appendChild(c);
  });

  document.getElementById("inputText").addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      runTranslate();
    }
  });
};

// ─── MODE TOGGLE ─────────────────────────────────────────────────────────────
function toggleMode() {
  isVibe = !isVibe;
  const track = document.getElementById("toggleTrack");
  const btn = document.getElementById("translateBtn");
  const desc = document.getElementById("modeDesc");

  track.classList.toggle("vibe", isVibe);
  btn.classList.toggle("vibe-btn", isVibe);

  desc.innerHTML = isVibe
    ? `<span>Vibe Mode:</span> Reads the overall mood of your sentence and returns a feeling in emojis.`
    : `<span>Word Mode:</span> Each word is matched to its closest emoji. Unmatched words stay as text.`;

  if (lastResult) runTranslate();
}

// ─── TRANSLATE ───────────────────────────────────────────────────────────────
function runTranslate() {
  const raw = document.getElementById("inputText").value.trim();
  if (!raw) return;

  const outputBox = document.getElementById("outputBox");
  const statsBar = document.getElementById("statsBar");

  if (!isVibe) {
    // ── Word-by-word mode ──
    const tokens = raw.split(/(\s+)/);
    let matched = 0,
      total = 0;

    const parts = tokens.map((tok) => {
      if (/^\s+$/.test(tok)) return `<span class="token-space"> </span>`;
      const clean = tok.replace(/[^a-zA-Z]/g, "").toLowerCase();
      const punct = tok.replace(/[a-zA-Z]/g, "");
      total++;
      if (emojiMap[clean]) {
        matched++;
        return `<span class="token-emoji">${emojiMap[clean]}${punct}</span>`;
      }
      return `<span class="token-word">${tok}</span>`;
    });

    outputBox.className = "output-box";
    outputBox.innerHTML = parts.join("");
    statsBar.innerHTML = `<span class="stat"><b>${matched}</b> / ${total} words matched</span>
                           <span class="stat"><b>${Math.round((matched / total) * 100) || 0}%</b> emoji coverage</span>`;
  } else {
    // ── Vibe mode ──
    const words = raw
      .toLowerCase()
      .replace(/[^a-z\s]/g, "")
      .split(/\s+/);
    let bestMood = null,
      bestScore = 0;

    for (const mood of moodMap) {
      const score = mood.keywords.filter((k) => words.includes(k)).length;
      if (score > bestScore) {
        bestScore = score;
        bestMood = mood;
      }
    }

    outputBox.className = "output-box vibe-output";

    if (!bestMood || bestScore === 0) {
      // Fallback: collect unique emojis from word map
      const found = [];
      words.forEach((w) => {
        if (emojiMap[w] && !found.includes(emojiMap[w]))
          found.push(emojiMap[w]);
      });
      outputBox.innerHTML =
        (found.length ? found.slice(0, 6).join(" ") : "🤷") +
        `<div class="vibe-mood-label">Mixed / Neutral vibes</div>`;
    } else {
      outputBox.innerHTML =
        bestMood.emojis
          .split("")
          .map((e) => `<span>${e}</span>`)
          .join(" ") +
        `<div class="vibe-mood-label">Mood detected: <strong>${bestMood.label}</strong></div>`;
    }

    statsBar.innerHTML = `<span class="stat">Keyword matches: <b>${bestScore}</b></span>`;
  }

  lastResult = raw;
  document.getElementById("outputSection").classList.add("visible");
  document.getElementById("copyBtn").classList.remove("copied");
  document.getElementById("copyBtn").textContent = "📋 Copy";
}

// ─── COPY ────────────────────────────────────────────────────────────────────
function copyResult() {
  const text = document.getElementById("outputBox").innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById("copyBtn");
    btn.textContent = "✅ Copied!";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = "📋 Copy";
      btn.classList.remove("copied");
    }, 2000);
  });
}

// ─── CLEAR ───────────────────────────────────────────────────────────────────
function clearAll() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputSection").classList.remove("visible");
  lastResult = "";
}
