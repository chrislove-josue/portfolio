"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import { useMobile } from "@/hooks/use-mobile"

type Language = {
  code: string
  name: string
  flag: string
}

export function LanguageSelectorDropdown() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const isMobile = useMobile()

  // Liste des langues disponibles avec leurs drapeaux
  const languages: Language[] = [
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "fon", name: "Fon", flag: "🇧🇯" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
  ]

  // Trouver la langue actuelle
  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "transition-all duration-300 hover:border-primary",
            isMobile ? "w-[60px] px-2" : "w-[140px] justify-between",
          )}
        >
          <span className="flex items-center gap-2">
            <span>{currentLanguage.flag}</span>
            {!isMobile && <span className="hidden sm:inline">{currentLanguage.name}</span>}
            {!isMobile && <span className="inline sm:hidden">{currentLanguage.code.toUpperCase()}</span>}
          </span>
          <ChevronsUpDown className={cn("h-4 w-4 shrink-0 opacity-50", isMobile && "hidden")} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={isMobile ? "w-[200px] p-0" : "w-[180px] p-0"}>
        <Command>
          <CommandInput placeholder="Rechercher..." />
          <CommandList>
            <CommandEmpty>Aucune langue trouvée.</CommandEmpty>
            <CommandGroup>
              {languages.map((lang) => (
                <CommandItem
                  key={lang.code}
                  value={lang.code}
                  onSelect={() => {
                    setLanguage(lang.code as "fr" | "fon" | "en" | "es" | "pt")
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", language === lang.code ? "opacity-100" : "opacity-0")} />
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
