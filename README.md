# Emoji Translator ✦

A fun, lightweight **Text to Emoji Translator** web app built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies, no build step — just drop it in a browser.

---

## ✨ Features

- **Word Mode** — translates each word to its closest matching emoji. Unmatched words stay as plain text.
- **Vibe Mode** — reads the overall mood of your sentence and returns an emoji set that captures the feeling (Joyful, Romantic, Sad, Angry, Foodie, Adventurous, and 9 more moods).
- **150+ word-to-emoji mappings** across emotions, food, nature, animals, travel, sports, objects, and more.
- **15 mood categories** for vibe detection.
- **Copy to clipboard** button on every result.
- **Example phrases** to try instantly.
- **Stats bar** showing match count and emoji coverage percentage.
- Press **Enter** to translate (Shift+Enter for new line).

---

## 📁 Project Structure

```
Text2Emoji/
├── index.html   # Markup and layout
├── style.css    # All styling (retro-zine aesthetic)
└── script.js    # Emoji map, mood detection, and all logic
```

---

## 🚀 Getting Started

### Option 1 — VS Code Live Server *(recommended)*
1. Open the project folder in VS Code.
2. Right-click `index.html` → **Open with Live Server**.

### Option 2 — Python
```bash
cd Text2Emoji
python -m http.server 5500
```
Then visit `http://localhost:5500` in your browser.

### Option 3 — Node
```bash
npx serve .
```

> ⚠️ Do **not** open `index.html` directly via `file://` — browsers block cross-file loading as a security measure. Always use a local server.

---

## 🔤 How It Works

### Word Mode
Each word in your input is stripped of punctuation, lowercased, and looked up in a predefined `emojiMap` object. If a match is found, the word is replaced with its emoji. If not, the original word is kept.

```
"I love pizza and the sun"
→  I ❤️ 🍕 and ☀️
```

### Vibe Mode
Your sentence is scanned for keywords from 15 mood categories. The category with the most keyword matches wins and its emoji set is displayed along with a mood label.

```
"I'm so tired, I need sleep and rest"
→  😴 💤 🌙   Mood: Sleepy
```

---

## 🛠️ Customization

You can easily extend the app by editing `script.js`:

**Add new word mappings:**
```js
const emojiMap = {
  // add your own
  taco: "🌮",
  dragon: "🐉",
};
```

**Add a new vibe/mood:**
```js
const moodMap = [
  // add your own mood
  { keywords: ["beach", "waves", "surf", "tan"], emojis: "🏄🌊🌴", label: "Beach Bum" },
];
```

---

## 🎨 Design

Built with a **retro zine / risograph print** aesthetic:
- **Fonts:** Syne (display) + Instrument Sans (body)
- **Palette:** Warm paper, ink black, red accent, mustard yellow, muted teal
- **Style:** Flat colors, chunky borders, offset shadows, grain texture — no gradients or glassmorphism

---

## 📄 License

MIT — free to use, modify, and share.
