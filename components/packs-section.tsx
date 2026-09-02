"use client"

import { useInView } from "react-intersection-observer"
import { Check, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

const packIds = ["basique", "standard", "premium"]

export function PacksSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { t } = useLanguage()

  const ctaUrl =
    "https://wa.me/22998123353?text=" +
    encodeURIComponent(
      "Bonjour, je suis intéressé par vos packs de services. Pourriez-vous m'en dire plus ?"
    )

  const badgeColor = (id: string) => {
    if (id === "basique") return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30"
    if (id === "standard") return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30"
    return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30"
  }

  const featureIcon = (id: string) => {
    if (id === "basique") return "bg-green-500/10 text-green-600 dark:text-green-400"
    if (id === "standard") return "bg-blue-500/10 text-blue-600 dark:text-blue-400"
    return "bg-purple-500/10 text-purple-600 dark:text-purple-400"
  }

  return (
    <section id="packs" ref={ref} className="py-8 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div
          className={`space-y-6 transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              {t("packs.title")}
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg">
              {t("packs.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {packIds.map((id) => (
              <div
                key={id}
                className={`flex flex-col rounded-lg border bg-card p-6 text-card-foreground shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group ${
                  id === "standard"
                    ? "border-primary lg:scale-105 border-2"
                    : "hover:border-primary/50"
                }`}
              >
                <div className="mb-4 space-y-2">
                  <span
                    className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${badgeColor(id)}`}
                  >
                    {t(`packs.${id}.badge`)}
                  </span>
                  <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                    {t(`packs.${id}.name`)}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t(`packs.${id}.for`)}</p>
                </div>

                <div className={`mb-4 space-y-1 ${featureIcon(id)} rounded-lg p-3`}>
                  <p className="text-xs font-medium uppercase tracking-wide">{t("packs.delay")}</p>
                  <p className="text-sm font-semibold">{t(`packs.${id}.delay`)}</p>
                  <p className="text-xs font-medium uppercase tracking-wide pt-2">{t("packs.price")}</p>
                  <p className="text-lg font-bold">{t(`packs.${id}.price`)}</p>
                </div>

                <ul className="mb-6 flex-1 space-y-2">
                  {Array.from({ length: Number(t(`packs.${id}.features.count`)) }).map((_, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${featureIcon(id)} rounded-full`} />
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 group-hover:text-foreground">
                        {t(`packs.${id}.features.${idx}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mb-4 text-xs italic text-gray-500 dark:text-gray-400">
                  &ldquo;{t(`packs.${id}.argument`)}&rdquo;
                </p>

                <Button asChild className="w-full">
                  <a
                    href={ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {t("packs.cta")}
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            {t("packs.disclaimer")}
          </p>
        </div>
      </div>
    </section>
  )
}
