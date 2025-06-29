"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Rodin AI Generator</h1>
      <p className="text-lg max-w-xl text-center mb-8">
        Generate stunning 3D models with the power of AI. Customize options and download your creations.
      </p>
      <div className="flex space-x-4 mb-8">
        <a
          href="https://github.com/Prince8085/Hyper3D-Rodin-AI-Generator-"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:underline"
        >
          <Github className="w-6 h-6" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/prince-kachhwaha-/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:underline"
        >
          <Linkedin className="w-6 h-6" />
          <span>LinkedIn</span>
        </a>
      </div>
      <a href="/rodin">
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition">
          Get Started
        </button>
      </a>
      <footer className="mt-12 text-sm opacity-120">
        -- created by Prince Kachhwaha ❤️
      </footer>
    </main>
  )
}
