"use client"

import { useInView } from "react-intersection-observer"
import { ExternalLink, GitPullRequest } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { t } = useLanguage()

  const projects = [
    {
      titleKey: "Nextmux Devis",
      descriptionKey: "Gestion des devis et factures",
      image: "/img/Nextmux-white.png?height=300&width=600",
      liveUrl: "https://nextmux.net/ecosystem/portfolio",
      githubUrl: "https://github.com/VarDumpMan/eazzylotto.git",

    },
    {
      titleKey: "Eazzy Lotto",
      descriptionKey: "Une plateforme de prédiction de combinaisons gagnantes de lotterie.",
      image: "/img/eazyloto.png?height=300&width=600",
      liveUrl: "https://www.eazzylotto.com",
      githubUrl: "https://github.com/VarDumpMan/eazzylotto.git",

    },
    {
      titleKey: "GPI GBEWA",
      descriptionKey: "Logiciel d'administration des activités internes du projet Gbewa",
      image: "/img/gbewa.png?height=300&width=600",
      liveUrl: "https://www.figma.com/proto/c7boN2bUS9OkXOF7rAmizA/PGI-Gbewa?node-id=743-21874&starting-point-node-id=743%3A21874",
    },
    {
      titleKey: "Asebat",
      descriptionKey: "Boutique de vente des matériaux de construction",
      image: "/img/asebat.png?height=300&width=600",
      liveUrl: "https://www.figma.com/proto/rtEBR7BVeKJrCegkqTQicp/ASEBAT?node-id=8-163&t=aEoQ0NSTPjBsiN2Q-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A163",
    },
    {
      titleKey: "The Glow Parlor",
      descriptionKey: "Plateforme spécialisée dans la vente des produits de soins de la peau haut de gamme, conçus pour révéler votre éclat naturel.",
      image: "/img/tgp.jpeg?height=300&width=600",
      githubUrl: "https://gitlab.com/sounesatchougo/the-glow-parlor.git",

    },

    {
      titleKey: "Solink",
      descriptionKey: "Une plateforme internationale de publications, d'annonces et d'échanges de service.",
      image: "/img/solink.png?height=300&width=600",
      liveUrl: "https://www.solink.fr",
    },

    {
      titleKey: "PREMIER CLASS SOCCER",
      descriptionKey: "Une plateforme d'organisation des événements sportifs",
      image: "/img/logo.svg?height=300&width=600",
      liveUrl: "https://www.figma.com/proto/yuygQQTPIW7p6tvzdMDdpq/PREMIER-CLASS-SOCCER?node-id=6533-21569&t=8A7zxoPjMNlzYgN2-0&scaling=min-zoom&content-scaling=fixed&page-id=429%3A8295&starting-point-node-id=6533%3A21569&show-proto-sidebar=1",
      githubUrl: "https://github.com/ProjetsNextmux/Front-Premier-Class-Soccer.git",

    },
    {
      titleKey: "Greatflix",
      descriptionKey: "Une plateforme offrant des services d'abonnement et de réabonnement à Netflix et Prime Video",
      image: "/img/greatflix.jpeg?height=300&width=600",
      liveUrl: "https://greatflixt.vercel.app/",
      githubUrl: "https://gitlab.com/sounesatchougo/great.git",
    },
    {
      titleKey: "SPA Mistinguett",
      descriptionKey: "Salon de soins et de mode",
      // image: "/img/greatflix.jpeg?height=300&width=600",
      liveUrl: "https://spa-mistinguett.vercel.app/",
      githubUrl: "https://gitlab.com/sounesatchougo/spa-mistinguett.git",
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-8 md:py-16 lg:py-24">
      <div className="container">
        <div
          className={`space-y-6 transition-all duration-1000 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
                    src={project.image || "/img/placeholder.svg"}
                    alt={t(project.titleKey)}
                    fill
                    className="p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                    {t(project.titleKey)}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">{t(project.descriptionKey)}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  {/* <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div> */}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 group-hover:border-primary group-hover:text-primary"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GitPullRequest className="mr-2 h-4 w-4" />
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
