# 🌟 QuizVerse

> **A modern, responsive, and interactive quiz application built with React, Vite, and React Router.**

<p align="center">
  <img src="./img/Screenshot%202026-09-04%20104024.png" alt="QuizVerse Preview" width="700" style="border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Deployment-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Deployed on Vercel" />
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

<p align="center">
  🌐 <strong>Live Demo:</strong> Hosted on <a href="https://vercel.com" target="_blank">Vercel</a>
</p>

---

## ✨ Features

- ⏱️ **Countdown Timer** – Dynamic timer per question with automatic advance upon timeout.
- 🔀 **Randomized Questions & Options** – Questions and multiple-choice options are shuffled for every fresh attempt.
- 📊 **Real-time Progress Bar** – Visual indicator showing completion status throughout the quiz.
- 🎯 **Instant Feedback & Scoring** – Real-time tracking of correct, wrong, and skipped questions.
- 📈 **Detailed Results Breakdown** – Final score percentage, pass/fail status, and key metrics.
- 📝 **Comprehensive Answer Review** – Step-by-step post-quiz review displaying your answers against correct solutions.
- 🎨 **Sleek & Responsive UI** – Designed with modern card layouts, smooth transitions, and mobile-friendly aesthetics.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Hosting & Deployment** | [Vercel](https://vercel.com/) |
| **Framework** | [React 19](https://react.dev/) |
| **Build Tool** | [Vite 7](https://vitejs.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) & JavaScript (ES6+) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **State Management** | React Context API (`QuizContext`) |
| **Styling** | Vanilla CSS with modern flex/grid layouts |

---

## 🌐 Deployment

QuizVerse is hosted on **[Vercel](https://vercel.com/)** for fast, high-performance edge delivery and zero-configuration continuous deployments synced with GitHub.

---

## 📁 Project Structure

```text
QuizVerse/
├── img/                  # Screenshots and media assets
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx       # Header navigation bar
│   │   ├── Option.jsx       # Quiz option button with states
│   │   ├── ProgressBar.jsx  # Animated progress bar
│   │   ├── QuestionCard.jsx # Question display card
│   │   └── Timer.jsx        # Circular/countdown timer
│   ├── context/          # Global application state
│   │   └── QuizContext.jsx  # Central quiz provider & game logic
│   ├── data/             # Quiz dataset
│   │   └── questions.js     # Curated question pool
│   ├── pages/            # Main route views
│   │   ├── Start.jsx        # Landing page & quiz instructions
│   │   ├── Quiz.jsx         # Live quiz session view
│   │   └── Result.jsx       # Score summary & answer review
│   ├── styles/           # Component & page stylesheets
│   ├── utils/            # Utility helpers (shuffle, classnames)
│   ├── App.tsx           # Application routing setup
│   └── main.tsx          # Root entry point
├── index.html            # Main HTML document
├── package.json          # Dependencies and scripts
└── vite.config.ts        # Vite configuration
```

---

## 🚀 Getting Started

Follow these steps to run QuizVerse locally on your machine.

### Prerequisites

Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed.

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ikash07/QuizVerse.git
   cd QuizVerse
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit `http://localhost:5173` (or the URL shown in your terminal).

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| **Dev** | `npm run dev` | Starts the Vite development server with HMR |
| **Build** | `npm run build` | Compiles and builds production-ready assets into `dist/` |
| **Preview** | `npm run preview` | Locally preview the production build |

---

## 👤 Author

**Bikash Sarkar**
- GitHub: [@ikash07](https://github.com/ikash07)
- Email: [ashimsarkar171@gmail.com](mailto:ashimsarkar171@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
