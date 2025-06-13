"use client"

import Link from "next/link"
import TechStack from "./components/tech-stack"
import ProjectCarousel from "./components/project-carousel"
import AboutSection from "./components/about-section"

export default function Page() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/10 dark:bg-black/20 shadow-md border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-purple-900">
            <Link href="#about" className="hover:text-pink-400 transition-colors duration-300">About</Link>
            <Link href="#projects" className="hover:text-purple-400 transition-colors duration-300">Projects</Link>
            <Link href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4">
        {/* About */}
        <AboutSection />
        {/* Projects */}
        <section id="projects" className="py-24 lg:py-32 relative z-10">
            <div className="container max-w-6xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-6">
                <span className="bg-gradient-to-r from-gray-700 via-blue-400 to-purple-800 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <ProjectCarousel />
            </div>
            </section>

        {/* Skills */}
        <section id="skills" className="py-24 lg:py-32 bg-transparent">
  <div className="container px-4 md:px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
      <span className="bg-gradient-to-r from-gray-700 via-blue-400 to-purple-800 bg-clip-text text-transparent">
        Skills & Tools
      </span>
    </h2>
    <TechStack />
  </div>
</section>

      </main>
    </div>
  )
}
