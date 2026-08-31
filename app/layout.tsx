import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

const SITE_URL = "https://portfolio-chrislove-josue.vercel.app/"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nestor ATCHOUGO — Développeur Web Full-Stack & Intégrateur Open Source",
    template: "%s | Nestor ATCHOUGO",
  },
  description:
    "Portfolio de Nestor ATCHOUGO, développeur web full-stack autodidacte et intégrateur de solutions open source (CMS, CRM). Spécialisé dans la conception de solutions sur mesure et le développement de sites web et e-commerce performants.",
  keywords: [
    "Nestor ATCHOUGO",
    "développeur web full-stack",
    "intégrateur open source",
    "développeur Bénin",
    "CMS",
    "CRM",
    "création site web",
    "e-commerce",
    "solutions sur mesure",
  ],
  authors: [{ name: "Nestor ATCHOUGO" }],
  creator: "Nestor ATCHOUGO",
  publisher: "Nestor ATCHOUGO",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Portfolio Nestor ATCHOUGO",
    title: "Nestor ATCHOUGO — Développeur Web Full-Stack & Intégrateur Open Source",
    description:
      "Développeur web full-stack autodidacte et intégrateur de solutions open source. Conception de solutions sur mesure et intégration de plateformes open source (CMS, CRM, outils collaboratifs).",
    images: [
      {
        url: "/img/picture.jpg",
        width: 1920,
        height: 2560,
        alt: "Photo de profil de Nestor ATCHOUGO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nestor ATCHOUGO — Développeur Web Full-Stack",
    description:
      "Développeur web full-stack autodidacte et intégrateur de solutions open source (CMS, CRM, outils collaboratifs).",
    images: ["/img/picture.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  )
}
