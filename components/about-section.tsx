"use client"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { t } = useLanguage()

  return (
    <section id="about" ref={ref} className="bg-muted/40 py-8 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div
          className={`grid items-center gap-6 transition-all duration-1000 md:grid-cols-2 md:gap-10 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col justify-center space-y-4 order-2 md:order-1">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                {t("about.title")}
              </h2>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg ">
                {t("about.p1")}
              </p>
            </div>
            <div className="space-y-2">
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 text-sm sm:text-base">{t("about.p2")}</p>
              {/* <p className="max-w-[600px] text-gray-500 dark:text-gray-400 text-sm sm:text-base">{t("about.p3")}</p> */}
            </div>
            {/* <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <a href="https://www.canva.com/design/DAF1usAlVF0/PrHzKumv_brxfSLAdYOYmg/edit?utm_content=DAF1usAlVF0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">
                  {t("about.resume")}
                </a>
              </Button>
            </div> */}
          </div>
          <div className="flex justify-center order-1 md:order-2 mb-6 md:mb-0">
            <div className="relative h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] overflow-hidden rounded-full border-4 border-primary">
              <Image
                src="/img/picture.jpg"
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
