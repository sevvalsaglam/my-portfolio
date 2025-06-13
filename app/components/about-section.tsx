"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, GraduationCap, Award, Lightbulb, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-40 text-white">
      <div className="container max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Name, title, description, socials, accordion */}
        <div className="space-y-6 text-center lg:text-left">
          {/* Name & Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-gray-700 via-blue-400 to-purple-800 bg-clip-text text-transparent">
              Şevval Sağlam
            </span>
          </h1>
          <h2 className="text-lg sm:text-4xl text-purple-900">Full Stack Developer</h2>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start items-center gap-4 text-purple-900">
            <Link href="https://github.com/sevvalsaglam" target="_blank">
              <Button variant="ghost" className="bg-white/10 hover:bg-white/20 backdrop-blur-md from-blue-500 via-purple-500 to-blue-500">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/sevvalsaglam" target="_blank">
              <Button variant="ghost" className="bg-white/10 hover:bg-white/20 backdrop-blur-md from-blue-500 via-purple-500 to-blue-500">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </Link>
            <Link href="mailto:sevvallsaglam@gmail.com">
              <Button variant="ghost" className="bg-white/10 hover:bg-white/20 backdrop-blur-md from-blue-500 via-purple-500 to-blue-500">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
            </Link>
          </div>

          {/* Accordion: inside its own glassmorphism card */}
          <div className="mt-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl text-purple-800">
          <Accordion type="single" collapsible className="w-full text-left">
  <AccordionItem value="education">
    <AccordionTrigger>
      <GraduationCap className="w-4 h-4 mr-2 text-purple-400" />
      Education
    </AccordionTrigger>
    <AccordionContent className="text-sm text-purple-900 space-y-2">
      <div>
        <strong>Workintech</strong>, Full Stack Development Program  
        <br />
        <span className="text-xs text-purple-700">2024 – 2025</span>
        <p className="mt-1">
          6-month intensive software training (960 hours, 78 projects). Focused on real-world full stack projects using React, Node.js, JavaScript, and Tailwind CSS.
        </p>
      </div>
      <div>
        <strong>Arel University</strong>, Biomedical Engineering  
        <br />
        <span className="text-xs text-purple-700">2016 – 2020 (full scholarship)</span>
        <p className="mt-1">
           Developed analytical thinking and problem-solving skills with an engineering foundation.
        </p>
      </div>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="certificates">
    <AccordionTrigger>
      <Award className="w-4 h-4 mr-2 text-purple-400" />
      Certificates
    </AccordionTrigger>
    <AccordionContent className="text-sm text-purple-900 space-y-1 pl-5">
      <ul className="list-disc">
        <li>Full-Stack Development – Workintech</li>
        <li>Front-End Developer (React) – HackerRank</li>
        <li>Product Management Day – Coderspace & Garanti BBVA</li>
        <li>Generative AI 101 – Akbank & Workintech</li>
        <li>Freelancer Bootcamp – Coderspace & Cenoa</li>
      </ul>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="interests">
    <AccordionTrigger>
      <Lightbulb className="w-4 h-4 mr-2 text-purple-400" />
      Interests
    </AccordionTrigger>
    <AccordionContent className="text-sm text-purple-900">
    I enjoy building full-stack projects and continuously improving my development skills. I&apos;m eager to learn, open to innovation, and passionate about staying up-to-date with modern technologies.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="experience">
    <AccordionTrigger>
      <Briefcase className="w-4 h-4 mr-2 text-purple-400" />
      Experience
    </AccordionTrigger>
    <AccordionContent className="text-sm text-purple-900 space-y-1 pl-5">
      <ul className="list-disc">
        <li>Workintech – Full Stack Development Bootcamp (2024 – 2025)</li>
        <li>Worked on real-world projects using Java, SpringBoot, PostgreSQL, React, Node.js, JavaScript, and Tailwind CSS</li>
        <li>Completed 78+ projects in 960 hours of training</li>
      </ul>
    </AccordionContent>
  </AccordionItem>
</Accordion>

          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 sm:w-120 sm:h-120 rounded-full overflow-hidden border-4 border-blue-300 shadow-2xl">
            <Image
              src="/pp.jpg"
              alt="Şevval Sağlam"
              fill
              sizes="(max-width: 768px) 256px, 256px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
