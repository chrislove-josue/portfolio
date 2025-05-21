"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSelectorDropdown } from "@/components/language-selector-dropdown"
import { useMobile } from "@/hooks/use-mobile"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()
  const headerRef = useRef<HTMLElement>(null)

  const navItems = [
    { id: "about", label: t("nav.about") },
    { id: "projects", label: t("nav.projects") },
    { id: "skills", label: t("nav.skills") },
    { id: "contact", label: t("nav.contact") },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Initialiser l'état de scroll au chargement
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Effet pour s'assurer que le header reste visible après un changement de thème
  useEffect(() => {
    // Cette fonction ne fait rien mais force un re-rendu
    const forceUpdate = () => {}

    // Observer les changements d'attribut sur le document HTML (comme data-theme)
    const observer = new MutationObserver(forceUpdate)
    observer.observe(document.documentElement, { attributes: true })

    return () => observer.disconnect()
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => closeMenu(), 300) // laisse le dropdown finir
    }
  }

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200  max-w-6xl mx-auto ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between  text-left px-4">
        <Link href="/" className="text-xl font-bold tracking-tighter transition-colors hover:text-primary">
           Nestor ATCHOUGO
        </Link>

        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <LanguageSelectorDropdown />
              <div onClick={(e) => e.stopPropagation()}>
                <ModeToggle />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleMenu()
                }}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>

            {isOpen && (
              <div className="fixed inset-0 z-50 flex h-screen w-full flex-col bg-background p-6">
                <div className="flex items-center justify-between">
                  <Link href="/" className="text-xl font-bold" onClick={closeMenu}>
                    Portfolio
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation()
                      closeMenu()
                    }}
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="mt-8 flex flex-col gap-6">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-lg font-medium hover:text-primary"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="hidden gap-6 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <LanguageSelectorDropdown />
              <div onClick={(e) => e.stopPropagation()}>
                <ModeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
