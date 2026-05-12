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
    keywords: ["love", "heart", "miss", "dear", "crush", "romance", "kiss", "marry", "date"],
    emojis: "❤️😍💕",
    label: "Romantic",
  },
  {
    keywords: ["happy", "joy", "fun", "laugh", "lol", "yay", "awesome", "great", "amazing", "best", "wonderful", "excited", "celebrate", "party"],
    emojis: "😄🎉✨",
    label: "Joyful",
  },
  {
    keywords: ["sad", "cry", "miss", "alone", "lonely", "broken", "hurt", "pain", "tears", "unfortunate"],
    emojis: "😢💔🌧️",
    label: "Sad",
  },
  {
    keywords: ["angry", "hate", "mad", "annoyed", "frustrated", "furious", "rage", "ugh", "seriously"],
    emojis: "😡🔥💢",
    label: "Angry",
  },
  {
    keywords: ["scared", "fear", "horror", "dark", "nightmare", "ghost", "spooky", "danger"],
    emojis: "😱👻🌑",
    label: "Spooky",
  },
  {
    keywords: ["hungry", "eat", "food", "pizza", "burger", "cake", "yum", "delicious", "restaurant", "dinner"],
    emojis: "🍕😋🍔",
    label: "Foodie",
  },
  {
    keywords: ["tired", "sleep", "bed", "rest", "dream", "night", "lazy", "exhausted", "yawn"],
    emojis: "😴💤🌙",
    label: "Sleepy",
  },
  {
    keywords: ["travel", "trip", "fly", "adventure", "explore", "journey", "vacation", "holiday", "plane", "car"],
    emojis: "✈️🌍🗺️",
    label: "Adventurous",
  },
  {
    keywords: ["work", "study", "school", "office", "project", "deadline", "meeting", "boss", "homework"],
    emojis: "💼📚😤",
    label: "Grind Mode",
  },
  {
    keywords: ["nature", "sun", "beach", "ocean", "mountain", "forest", "rain", "flower", "tree", "earth"],
    emojis: "🌿☀️🌊",
    label: "Nature Lover",
  },
  {
    keywords: ["music", "song", "dance", "concert", "guitar", "piano", "vibe", "beat", "rhythm"],
    emojis: "🎵🎶💃",
    label: "Musical",
  },
  {
    keywords: ["money", "rich", "buy", "shop", "deal", "invest", "earn", "expensive", "cheap"],
    emojis: "💰🛍️💸",
    label: "Money Moves",
  },
  {
    keywords: ["cool", "chill", "relax", "vibe", "hang", "friends", "weekend", "free", "easy"],
    emojis: "😎🧊🎮",
    label: "Chill",
  },
  {
    keywords: ["sport", "game", "win", "play", "team", "score", "goal", "champion", "compete"],
    emojis: "🏆⚽💪",
    label: "Sporty",
  },
  {
    keywords: ["think", "idea", "plan", "create", "build", "invent", "design", "learn", "smart", "genius"],
    emojis: "💡🧠🔮",
    label: "Big Brain",
  },
];

// ─── IRREGULAR WORD MAP ──────────────────────────────────────────────────────
const irregularWords = {
  ran: "run", ate: "eat", flew: "fly", swam: "swim", sang: "sing",
  wrote: "write", drove: "drive", rode: "ride", gave: "give",
  took: "take", broke: "break", spoke: "speak", wore: "wear",
  chose: "choose", froze: "freeze", woke: "wake", threw: "throw",
  grew: "grow", knew: "know", blew: "blow", drew: "draw",
  began: "begin", drank: "drink", rang: "ring", sank: "sink",
  sat: "sit", slept: "sleep", felt: "feel", kept: "keep",
  left: "leave", meant: "mean", sent: "send", spent: "spend",
  built: "build", lent: "lend", bent: "bend", lost: "lose",
  shot: "shoot", got: "get", forgot: "forget", bought: "buy",
  fought: "fight", thought: "think", brought: "bring", caught: "catch",
  taught: "teach", told: "tell", sold: "sell", held: "hold",
  found: "find", stood: "stand", understood: "understand", won: "win",
  hid: "hide", bit: "bite", hid: "hide", hit: "hit",
  hurt: "hurt", let: "let", put: "put", set: "set",
  shut: "shut", cut: "cut", cost: "cost", bet: "bet",
  men: "man", women: "woman", children: "child", people: "person",
  feet: "foot", teeth: "tooth", mice: "mouse", geese: "goose",
  lives: "life", knives: "knife", wolves: "wolf", wives: "wife",
  shelves: "shelf", leaves: "leaf", halves: "half",
  better: "good", best: "good", worse: "bad", worst: "bad",
  more: "many", most: "many",
};

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

// ─── DOM REFS ────────────────────────────────────────────────────────────────
const $ = (id) => document.getElementById(id);

// ─── STEMMER ─────────────────────────────────────────────────────────────────
function stem(word) {
  if (word.length < 3) return word;

  let w = word;

  if (w.endsWith("ing")) {
    w = w.slice(0, -3);
    if (w.length >= 2 && w[w.length - 1] === w[w.length - 2]) w = w.slice(0, -1);
    return w;
  }

  if (w.endsWith("tion") && w.length > 5) return w.slice(0, -4);

  if (w.endsWith("ment") && w.length > 5) return w.slice(0, -4);

  if (w.endsWith("ness") && w.length > 5) {
    w = w.slice(0, -4);
    if (w.endsWith("i")) w = w.slice(0, -1) + "y";
    return w;
  }

  if ((w.endsWith("able") || w.endsWith("ible")) && w.length > 6) return w.slice(0, -4);

  if (w.endsWith("ed") && w.length > 3) {
    w = w.slice(0, -2);
    if (w.endsWith("i")) w = w.slice(0, -1) + "y";
    if (w.length >= 2 && w[w.length - 1] === w[w.length - 2]) w = w.slice(0, -1);
    return w;
  }

  if (w.endsWith("es") && w.length > 3) {
    w = w.slice(0, -2);
    if (w.endsWith("i")) w = w.slice(0, -1) + "y";
    return w;
  }

  if (w.endsWith("s") && !w.endsWith("ss") && w.length > 3) {
    w = w.slice(0, -1);
    if (w.endsWith("i")) w = w.slice(0, -1) + "y";
    return w;
  }

  if (w.endsWith("ly") && w.length > 4) {
    w = w.slice(0, -2);
    if (w.endsWith("i")) w = w.slice(0, -1) + "y";
    return w;
  }

  if (w.endsWith("er") && w.length > 4) {
    w = w.slice(0, -2);
    if (w.endsWith("i")) w = w.slice(0, -1) + "y";
    if (w.length >= 2 && w[w.length - 1] === w[w.length - 2]) w = w.slice(0, -1);
    return w;
  }

  if (w.endsWith("est") && w.length > 5) {
    w = w.slice(0, -3);
    if (w.endsWith("i")) w = w.slice(0, -1) + "y";
    if (w.length >= 2 && w[w.length - 1] === w[w.length - 2]) w = w.slice(0, -1);
    return w;
  }

  return w;
}

// ─── EMOJI LOOKUP (with fuzzy matching) ─────────────────────────────────────
function lookupEmoji(word) {
  const clean = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
  if (!clean) return null;

  // Collect candidate forms to try
  const candidates = [clean];

  if (irregularWords[clean]) candidates.push(irregularWords[clean]);

  const stemmed = stem(clean);
  if (stemmed !== clean) {
    candidates.push(stemmed);
    if (!stemmed.endsWith("e")) candidates.push(stemmed + "e");
  }

  for (const c of candidates) {
    if (emojiMap[c]) return emojiMap[c];
  }

  return null;
}

// ─── TOAST ───────────────────────────────────────────────────────────────────
function showToast(message, icon = "✅") {
  const container = $("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${icon}</span> ${escapeHtml(message)}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("removing");
    toast.addEventListener("animationend", () => toast.remove());
  }, 2500);
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ─── CLIPBOARD ───────────────────────────────────────────────────────────────
function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  ta.style.pointerEvents = "none";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch {}
  document.body.removeChild(ta);
}

// ─── PREPARE MOOD KEYWORDS ───────────────────────────────────────────────────
const preparedMoods = moodMap.map((mood) => ({
  ...mood,
  stemmed: mood.keywords.map((k) => stem(k.toLowerCase())),
}));

// ─── THEME ───────────────────────────────────────────────────────────────────
function getPreferredTheme() {
  try {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
  } catch {}
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem("theme", theme); } catch {}
  const icon = $("themeIcon");
  icon.textContent = theme === "dark" ? "☀️" : "🌙";
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  setTheme(next);
  showToast(next === "dark" ? "Dark mode activated" : "Light mode activated", next === "dark" ? "🌙" : "☀️");
}

// ─── MODE ────────────────────────────────────────────────────────────────────
function switchMode(vibe) {
  isVibe = vibe;
  const wordBtn = $("modeWord");
  const vibeBtn = $("modeVibe");

  wordBtn.classList.toggle("active", !vibe);
  wordBtn.setAttribute("aria-checked", !vibe);
  vibeBtn.classList.toggle("active", vibe);
  vibeBtn.setAttribute("aria-checked", vibe);

  $("modeHint").textContent = vibe
    ? "Reads the overall mood of your sentence and returns emojis that capture the feeling."
    : "Each word is matched to its closest emoji. Unmatched words stay as text.";

  if (lastResult) runTranslate();
}

// ─── TRANSLATE ───────────────────────────────────────────────────────────────
function runTranslate() {
  const raw = $("inputText").value.trim();
  if (!raw) {
    showToast("Enter some text to translate", "✏️");
    return;
  }

  const outputBox = $("outputBox");
  const statsBar = $("statsBar");
  const badge = $("outputBadge");

  if (!isVibe) {
    badge.textContent = "Word Mode";
    const tokens = raw.split(/(\s+)/);
    let matched = 0;
    let total = 0;
    let html = "";

    tokens.forEach((tok, i) => {
      if (/^\s+$/.test(tok)) {
        html += " ";
        return;
      }
      const clean = tok.replace(/[^a-zA-Z]/g, "").toLowerCase();
      const punct = tok.replace(/[a-zA-Z]/g, "");
      total++;

      const emoji = lookupEmoji(clean);
      if (emoji) {
        matched++;
        html += `<span class="token-emoji" style="animation-delay:${(i * 0.04).toFixed(2)}s">${emoji}${escapeHtml(punct)}</span>`;
      } else {
        html += `<span class="token-word">${escapeHtml(tok)}</span>`;
      }
    });

    outputBox.className = "output-box";
    outputBox.innerHTML = html || escapeHtml(raw);

    statsBar.innerHTML = `
      <span class="stat"><strong>${matched}</strong> / ${total} words matched</span>
      <span class="stat"><strong>${Math.round((matched / total) * 100) || 0}%</strong> coverage</span>
    `;
  } else {
    badge.textContent = "Vibe Mode";
    const words = raw
      .toLowerCase()
      .replace(/[^a-z\s]/g, "")
      .split(/\s+/)
      .filter(Boolean);

    const wordStems = words.map((w) => stem(w));
    let bestMood = null;
    let bestScore = 0;
    let secondMood = null;
    let secondScore = 0;

    for (const mood of preparedMoods) {
      let score = 0;
      for (let i = 0; i < words.length; i++) {
        if (mood.keywords.includes(words[i])) {
          score += 3;
        } else if (mood.stemmed.includes(wordStems[i])) {
          score += 2;
        } else if (mood.keywords.some((k) => words[i].startsWith(k) || k.startsWith(words[i]))) {
          score += 1;
        }
      }

      if (score > bestScore) {
        secondScore = bestScore;
        secondMood = bestMood;
        bestScore = score;
        bestMood = mood;
      } else if (score > secondScore) {
        secondScore = score;
        secondMood = mood;
      }
    }

    outputBox.className = "output-box vibe-output";

    if (!bestMood || bestScore === 0) {
      const found = [];
      words.forEach((w) => {
        const e = lookupEmoji(w);
        if (e && !found.includes(e)) found.push(e);
      });
      outputBox.innerHTML =
        (found.length
          ? found.slice(0, 6).map((e, i) => `<span class="vibe-emoji" style="animation-delay:${(i * 0.1).toFixed(2)}s">${e}</span>`).join(" ")
          : "🤷") +
        `<div class="vibe-mood-label">Mixed vibes</div>`;
      statsBar.innerHTML = `<span class="stat"><strong>${found.length}</strong> emojis found</span>`;
    } else {
      const emojiChars = bestMood.emojis.split("");
      outputBox.innerHTML =
        emojiChars
          .map((e, i) => `<span class="vibe-emoji" style="animation-delay:${(i * 0.12).toFixed(2)}s">${e}</span>`)
          .join(" ") +
        `<div class="vibe-mood-label">Feeling <strong>${escapeHtml(bestMood.label)}</strong>${secondMood && secondScore >= bestScore * 0.6 ? ` · also <strong>${escapeHtml(secondMood.label)}</strong>` : ""}</div>`;
      statsBar.innerHTML = `<span class="stat">Mood score: <strong>${bestScore}</strong></span>`;
    }
  }

  lastResult = raw;
  $("outputSection").classList.add("visible");
  const copyBtn = $("copyBtn");
  copyBtn.classList.remove("copied");
  copyBtn.innerHTML = "📋 Copy";
}

// ─── COPY ────────────────────────────────────────────────────────────────────
function copyResult() {
  const text = $("outputBox").innerText;
  copyToClipboard(text);
  const btn = $("copyBtn");
  btn.innerHTML = "✅ Copied!";
  btn.classList.add("copied");
  showToast("Copied to clipboard", "📋");
}

// ─── CLEAR ───────────────────────────────────────────────────────────────────
function clearAll() {
  $("inputText").value = "";
  $("outputSection").classList.remove("visible");
  $("charCount").textContent = "0";
  lastResult = "";
  showToast("Cleared", "🗑️");
}

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  setTheme(getPreferredTheme());

  // Populate example chips
  const chips = $("exampleChips");
  examples.forEach((ex) => {
    const c = document.createElement("button");
    c.className = "chip";
    c.textContent = ex;
    c.type = "button";
    c.addEventListener("click", () => {
      $("inputText").value = ex;
      $("charCount").textContent = ex.length;
      runTranslate();
    });
    chips.appendChild(c);
  });

  // Events
  $("themeToggle").addEventListener("click", toggleTheme);

  $("modeWord").addEventListener("click", () => switchMode(false));
  $("modeVibe").addEventListener("click", () => switchMode(true));

  $("translateBtn").addEventListener("click", runTranslate);

  $("inputText").addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      runTranslate();
    }
  });

  $("inputText").addEventListener("input", () => {
    $("charCount").textContent = $("inputText").value.length;
  });

  $("copyBtn").addEventListener("click", copyResult);
  $("clearBtn").addEventListener("click", clearAll);
});
