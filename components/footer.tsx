"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t py-4 sm:py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Link
            href="/"
            className="text-base sm:text-lg font-bold tracking-tighter transition-colors hover:text-primary"
          >
            Portfolio
          </Link>
          <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 md:text-left">
            &copy; {new Date().getFullYear()} Nestor ATCHOUGO. {t("footer.rights")}
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary dark:text-gray-400 transition-all duration-300 hover:scale-125"
          >
            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary dark:text-gray-400 transition-all duration-300 hover:scale-125"
          >
            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:your.email@example.com"
            className="text-gray-500 hover:text-primary dark:text-gray-400 transition-all duration-300 hover:scale-125"
          >
            <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
