"use client"

import { ArrowDownIcon, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center ">
      <div
        className={`container px-4 transition-all duration-1000 md:px-6 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {t("hero.title")} <span className="text-primary">Nestor ATCHOUGO</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-base text-gray-500 dark:text-gray-400 sm:text-lg md:text-xl">
              {t("hero.subtitle")}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Button asChild variant="outline" size="icon">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="icon">
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="icon">
              <a href="mailto:Sounesatchougo@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Button variant="ghost" size="icon" className="animate-bounce rounded-full" onClick={scrollToAbout}>
          <ArrowDownIcon className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </div>
    </section>
  )
}
