"use client"

import { useInView } from "react-intersection-observer"
import { Code2, Database, Globe, Layout, Layers, Settings } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function SkillsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { t } = useLanguage()

  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />,
      items: ["TypeScript", "React JS",  "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: <Code2 className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />,
      items: ["Laravel", "RESTful APIs"],
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />,
      items: ["MongoDB", "MySQL", "Firebase", "Prisma"],
    },
    {
      category: "DevOps",
      icon: <Settings className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />,
      items: ["Git", "GitHub Actions", "Vercel", "Netlify"],
    },
    {
      category: "Design",
      icon: <Layers className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />,
      items: ["Figma", "Adobe XD", "UI/UX Design", "Dribbble"],
    },
    {
      category: "Other",
      icon: <Globe className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />,
      items: ["SEO", "Performance Optimization", "Agile Methodology"],
    },
  ]

  return (
    <section id="skills" ref={ref} className="bg-muted/40 py-8 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div
          className={`space-y-6 transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              {t("skills.title")}
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg">
              {t("skills.subtitle")}
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card p-4 sm:p-6 text-card-foreground shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-primary/50 group"
              >
                <div className="mb-3 sm:mb-4 flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-1 sm:space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary transition-all duration-300 group-hover:scale-125" />
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 group-hover:text-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
