# You Don't Have the Guts 🎯

_A party game of chaos, dares, questions, and shots._

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-7-646cff?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white" />
</p>

---

## 🚀 Overview

**You Don't Have the Guts** is a browser-based party game inspired by _truth or dare_ with an added twist —  
a shot-based penalty system that guarantees escalating chaos.

The app guides your group through randomized questions and challenges across multiple difficulty levels.

> All rules are flexible. Fun comes first.

---

## ✨ Features

### 🎮 Game Modes

- **Normal Mode** — “Completed” and “I Drink” just move forward.
- **Party Mode** — random first player; turn order loops automatically.

### 🧩 Question / Task Packs

Choose one or multiple:

- `normal`
- `hard`
- `hardcore`

### 🍻 Shot Penalty System

Each question/task has a `penalty` value — players drinking add that many shots to their score.

### 👥 Party Creator

- Add players
- Change order
- Remove players

### 📊 Scoreboard

End-game summary of:

- completed tasks
- total shots consumed

### 🎯 Target Substitution

Some tasks contain `{target}` — the game automatically replaces it with another random player.

### 🌓 Polished Dark UI

Optimized for mobile & party environments.

---

## 🛠 Tech Stack

| Technology         | Purpose                |
| ------------------ | ---------------------- |
| **React 19**       | UI logic               |
| **TypeScript**     | Type safety            |
| **Vite 7**         | Dev server & bundler   |
| **Tailwind CSS 4** | Styling                |
| **ESLint**         | Linting & code quality |

---

## 📦 Installation

```bash
# install dependencies
npm install

# start dev server
npm run dev

# production build
npm run build

# preview build output
npm run preview

# lint project
npm run lint
```

Dev server runs at: **http://localhost:5173/**

---

## 🗂 Project Structure

```
TruthOrDareFrontend/
├─ index.html
├─ vite.config.ts
├─ tsconfig*.json
├─ eslint.config.js
└─ src/
   ├─ main.tsx
   ├─ App.tsx
   ├─ index.css
   ├─ models/
   │  └─ models.ts
   ├─ resources/
   │  ├─ questions.ts
   │  └─ tasks.ts
   └─ components/
      ├─ CreateGame/
      ├─ DisplayQuestion/
      ├─ Scoreboard/
      └─ InfoBox/
```

---

## 🧠 How the Game Works

### 1️⃣ Game Setup

- Select mode (`normal` or `party`)
- Choose question packs
- Add players (party mode)
- Scoreboard initializes automatically

### 2️⃣ Drawing Questions

- All enabled packs merge into one pool
- Questions may dynamically replace `{target}` depending on mode

### 3️⃣ Player Actions

- **Completed** → adds 1 point (party mode)
- **I Drink** → adds `penalty` shots
- **Skip / reroll**
- **End Game** → shows scoreboard

### 4️⃣ Scoreboard

Displays final:

- completed tasks
- total shots drunk

---

## 🧱 Extending the Game

### Add new questions/tasks

```ts
{
  text: "Your question or task",
  penalty: 1
}
```

### Add new difficulty levels

Extend:

- `QuestionsPackage`
- UI pickers
- resources/question/task files

### Modify UI

Tailwind makes customizing colors, spacing, and layout trivial.

---

## 🚧 Roadmap (Ideas)

- Save game history (`localStorage`)
- Disable/edit questions in UI
- External question-pack loading (JSON / backend)

---

## 📄 License — MIT

```
MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<p align="center">
  Made for unforgettable nights. Drink responsibly.
</p>
