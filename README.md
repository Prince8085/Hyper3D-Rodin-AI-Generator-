<div align="center">

# 🎨 Hyper3D Rodin AI Generator

### Text-to-3D Model Generation · Powered by Hyper3D Rodin API

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Hyper3D](https://img.shields.io/badge/Hyper3D-Rodin%20API-FF6B35?style=flat)](https://hyper3d.ai)
⭐ 4 Stars

</div>

---

## 🚀 What Is This?

A **production-ready web application** that converts text prompts and images into stunning 3D models using the Hyper3D Rodin AI API. Type a description → get a downloadable 3D model in seconds.

**Live Demo:** [hyper3d-rodin.vercel.app](https://hyper3d-rodin.vercel.app) *(if deployed)*

---

## ✨ Features

- 📝 **Text-to-3D** — Describe anything, get a 3D model
- 🖼️ **Image-to-3D** — Upload a reference image for guided generation
- ⚡ **Real-time Progress** — Live polling with generation status updates
- 📥 **Multi-format Export** — Download as GLB, OBJ, FBX, STL
- 🎮 **Interactive 3D Preview** — Rotate, zoom, inspect in-browser
- 🌙 **Dark Mode UI** — Modern, polished interface with Tailwind CSS
- 📱 **Fully Responsive** — Works on mobile, tablet, desktop

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS + shadcn/ui |
| 3D Rendering | Three.js / @react-three/fiber |
| AI API | Hyper3D Rodin REST API |
| State | React hooks + Context |
| Package Manager | pnpm |
| Deployment | Vercel |

---

## ⚡ Quick Start

```bash
# 1. Clone
git clone https://github.com/Prince8085/Hyper3D-Rodin-AI-Generator-.git
cd Hyper3D-Rodin-AI-Generator-

# 2. Install dependencies
pnpm install

# 3. Configure environment
cp .env.example .env.local
# Add your Hyper3D Rodin API key:
# NEXT_PUBLIC_RODIN_API_KEY=your_key_here

# 4. Run
pnpm dev
# Open http://localhost:3000
```

---

## 📁 Project Structure

```
├── app/
│   ├── page.tsx          # Main generation interface
│   ├── layout.tsx        # Root layout + metadata
│   └── globals.css       # Global styles
├── components/
│   ├── GeneratorForm     # Text/image input form
│   ├── ModelViewer       # Three.js 3D preview
│   ├── ProgressTracker   # Real-time generation status
│   └── DownloadPanel     # Multi-format export
├── hooks/
│   └── useRodinAPI       # API polling + state logic
└── lib/
    └── rodin.ts          # Hyper3D API client
```

---

## 🎯 How It Works

1. **Input** — User enters a text prompt or uploads a reference image
2. **Submit** — Request sent to Hyper3D Rodin API with generation params
3. **Poll** — App polls task status every 3s with real-time progress bar
4. **Preview** — Completed 3D model rendered interactively in browser
5. **Export** — Download in preferred format (GLB/OBJ/FBX/STL)

---

## 👨💻 Built By

**Prince Khatik** — Founder, Innovix Solutions  
[LinkedIn](https://linkedin.com/in/prince-kachhwaha-) · [Portfolio](https://princekachhwaha.tech) · [GitHub](https://github.com/Prince8085)
