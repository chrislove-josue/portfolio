"use client"

import { useInView } from "react-intersection-observer"
import { Check, ArrowRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

const packIds = ["basique", "standard", "premium"] as const

const packConfig = {
  basique: {
    gradient: "from-emerald-500 to-emerald-600",
    lightBg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-800",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/50",
    iconText: "text-emerald-600 dark:text-emerald-400",
    checkBg: "bg-emerald-100 dark:bg-emerald-900/50",
    checkText: "text-emerald-600 dark:text-emerald-400",
    hoverBorder: "hover:border-emerald-300 dark:hover:border-emerald-700",
  },
  standard: {
    gradient: "from-blue-500 to-blue-600",
    lightBg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
    iconBg: "bg-blue-100 dark:bg-blue-900/50",
    iconText: "text-blue-600 dark:text-blue-400",
    checkBg: "bg-blue-100 dark:bg-blue-900/50",
    checkText: "text-blue-600 dark:text-blue-400",
    hoverBorder: "hover:border-blue-300 dark:hover:border-blue-700",
  },
  premium: {
    gradient: "from-violet-500 to-violet-600",
    lightBg: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-200 dark:border-violet-800",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300",
    iconBg: "bg-violet-100 dark:bg-violet-900/50",
    iconText: "text-violet-600 dark:text-violet-400",
    checkBg: "bg-violet-100 dark:bg-violet-900/50",
    checkText: "text-violet-600 dark:text-violet-400",
    hoverBorder: "hover:border-violet-300 dark:hover:border-violet-700",
  },
} as const

const packIcons = {
  basique: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  standard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  premium: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
}

export function PacksSection() {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  })
  const { t } = useLanguage()

  const ctaUrl =
    "https://wa.me/22998123353?text=" +
    encodeURIComponent(
      "Bonjour, je suis intéressé par vos packs de services. Pourriez-vous m'en dire plus ?"
    )

  return (
    <section id="packs" ref={ref} className="py-8 md:py-16 lg:py-24 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div
          className={`space-y-10 transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="space-y-3 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              {t("packs.badge")}
            </p>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              {t("packs.title")}
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg">
              {t("packs.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 items-stretch">
            {packIds.map((id) => {
              const config = packConfig[id]
              const isPremium = id === "standard"

              // La clé addon est optionnelle : si elle n'existe pas dans le
              // dictionnaire de traductions, t() renvoie la clé brute telle
              // quelle. On ne l'affiche donc que si une vraie traduction existe.
              const addonKey = `packs.${id}.addon`
              const addonText = t(addonKey)
              const hasAddon = addonText !== addonKey && addonText.trim().length > 0

              return (
                <div
                  key={id}
                  className={`relative flex flex-col rounded-2xl border bg-card text-card-foreground transition-all duration-300 hover:-translate-y-1 group overflow-hidden ${
                    isPremium
                      ? `${config.border} border-2 shadow-lg ring-1 ring-primary/10`
                      : `${config.border} shadow-sm ${config.hoverBorder} hover:shadow-md`
                  }`}
                >
                  {isPremium && (
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${config.gradient}`} />
                  )}

                  <div className="p-6 pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`rounded-xl ${config.iconBg} p-2.5 ${config.iconText} transition-transform duration-300 group-hover:scale-110`}>
                        {packIcons[id]}
                      </div>
                      <div>
                        <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${config.badge}`}>
                          {t(`packs.${id}.badge`)}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-1">
                      {t(`packs.${id}.name`)}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{t(`packs.${id}.for`)}</p>
                  </div>

                  <div className={`mx-4 rounded-xl ${config.lightBg} p-4 mb-4`}>
                    <div className="flex items-baseline justify-between">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-0.5">
                          {t("packs.delay")}
                        </p>
                        <p className="text-sm font-semibold">{t(`packs.${id}.delay`)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-0.5">
                          {t("packs.price")}
                        </p>
                        <p className={`text-base font-bold ${config.iconText}`}>{t(`packs.${id}.price`)}</p>
                      </div>
                    </div>
                  </div>

                  <ul className="px-6 mb-4 flex-1 space-y-2.5">
                    {Array.from({ length: Number(t(`packs.${id}.features.count`)) }).map((_, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className={`mt-0.5 rounded-full ${config.checkBg} p-0.5 shrink-0`}>
                          <Check className={`h-3 w-3 ${config.checkText}`} />
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-300 leading-snug">
                          {t(`packs.${id}.features.${idx}`)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {hasAddon && (
                    <div className="px-6 mb-4">
                      <div className="flex items-start gap-2.5 rounded-xl border border-dashed border-amber-300 dark:border-amber-800 bg-amber-50/60 dark:bg-amber-950/20 px-4 py-3">
                        <div className="mt-0.5 rounded-full bg-amber-100 dark:bg-amber-900/50 p-0.5 shrink-0">
                          <Plus className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-0.5">
                            {t("packs.addon.label")}
                          </p>
                          <span className="text-sm text-gray-600 dark:text-gray-300 leading-snug">
                            {addonText}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="px-6 pb-2 mb-2">
                    <div className="rounded-xl border border-dashed border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20 px-4 py-3 text-center">
                      <p className="text-xs font-bold uppercase tracking-wider text-red-500 dark:text-red-400 mb-1">
                        {t("packs.hosting.title")}
                      </p>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        {t("packs.hosting.value")}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 mb-4">
                    <p className="text-xs italic text-gray-500 dark:text-gray-400 text-center">
                      &ldquo;{t(`packs.${id}.argument`)}&rdquo;
                    </p>
                  </div>

                  <div className="p-6 pt-0">
                    <Button asChild variant={isPremium ? "default" : "outline"} className="w-full group/btn">
                      <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                        {t("packs.cta")}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("packs.disclaimer")}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 max-w-[600px]">
              {t("packs.note")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}