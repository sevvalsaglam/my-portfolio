import Image from "next/image"
import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", logo: "/logos/html5.svg" },
      { name: "JavaScript", logo: "/logos/javascript.svg" },
      { name: "React", logo: "/logos/react.svg" },
      { name: "Redux", logo: "/logos/redux.svg" },
      { name: "Next.js", logo: "/logos/nextdotjs.svg" },
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "TailwindCSS", logo: "/logos/tailwindcss.svg" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Java", logo: "/logos/java.png" },
      { name: "Spring", logo: "/logos/spring.svg" },
      { name: "SpringBoot", logo: "/logos/springboot.svg" },
      { name: "Spring Security", logo: "/logos/springsecurity.svg" },
      { name: "JWT", logo: "/logos/jsonwebtokens.svg" },
      { name: "Node.js", logo: "/logos/nodedotjs.svg" },
    ],
  },
  {
    category: "Database",
    skills: [{ name: "PostgreSQL", logo: "/logos/postgresql.svg" }],
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", logo: "/logos/vscode.png" },
      { name: "IntelliJ IDEA", logo: "/logos/intellijidea.svg" },
      { name: "Postman", logo: "/logos/postman.svg" },
      { name: "Figma", logo: "/logos/figma.svg" },
      { name: "GitHub", logo: "/logos/github.svg" },
      { name: "Vercel", logo: "/logos/vercel.svg" },
      { name: "CodePen", logo: "/logos/codepen.svg" },
      { name: "v0", logo: "/logos/v0.svg" },
      { name: "Canva", logo: "/logos/canva.svg" },
    ],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card
          key={tech.category}
          className="p-6 bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/10 shadow-lg"
        >
          <h3 className="text-xl font-bold text-black mb-6 border-b border-white/10 pb-2">
            {tech.category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {tech.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center text-center group transition duration-300 hover:scale-105"
              >
                <div className="relative w-14 h-14 mb-2 rounded-lg shadow-inner group-hover:shadow-pink-500/50">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    fill
                    sizes="(max-width: 768px) 48px, 56px"

                    className="object-contain rounded-md"
                  />
                </div>
                <span className="text-sm text-black">{skill.name}</span>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

