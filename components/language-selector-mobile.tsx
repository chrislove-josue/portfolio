"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

type Language = {
  code: string
  name: string
  flag: string
}

export function LanguageSelectorMobile() {
  const { language, setLanguage } = useLanguage()

  // Liste des langues disponibles avec leurs drapeaux
  const languages: Language[] = [
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "fon", name: "Fon", flag: "🇧🇯 (Bénin)" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ]

  const handleSelect = (code: string) => {
    setLanguage(code as "fr" | "fon" | "en" | "es")
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "default" : "outline"}
          className="flex items-center justify-center gap-2"
          onClick={() => handleSelect(lang.code)}
        >
          <span>{lang.flag}</span>
          <span>{lang.name}</span>
        </Button>
      ))}
    </div>
  )
}
