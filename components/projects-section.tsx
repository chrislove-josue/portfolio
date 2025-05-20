"use client"

import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { t } = useLanguage()

  const projects = [
    {
      titleKey: "projects.ecommerce.title",
      descriptionKey: "projects.ecommerce.description",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project1",
    },
    {
      titleKey: "projects.taskapp.title",
      descriptionKey: "projects.taskapp.description",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project2",
    },
    {
      titleKey: "projects.weather.title",
      descriptionKey: "projects.weather.description",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Redux", "Weather API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project3",
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-8 md:py-16 lg:py-24">
      <div className="container">
        <div
          className={`space-y-6 transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              {t("projects.title")}
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg">
              {t("projects.subtitle")}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={t(project.titleKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                    {t(project.titleKey)}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">{t(project.descriptionKey)}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 group-hover:border-primary group-hover:text-primary"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      {t("projects.code")}
                    </a>
                  </Button>
                  <Button asChild size="sm" className="transition-all duration-300 group-hover:bg-primary/90">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t("projects.demo")}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
