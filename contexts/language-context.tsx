"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Définir les langues disponibles
export type Language = "fr" | "en"

// Structure du contexte
type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}



// Créer le contexte
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Dictionnaire de traductions
const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.packs": "Packs",
    "nav.contact": "Contact",


    // Hero Section
    "hero.title": "Bonjour, je suis",
    "hero.subtitle": "Développeur Full Stack spécialisé dans la création d'expériences numériques exceptionnelles",

    // About Section
    "about.title": "À propos de moi",
    "about.p1":
      "Intégrateur de Solutions Open Source et Développeur Web full-stack autodidacte et engagé, avec plus de 2 ans d'expérience dans la conception de solutions sur mesure et l'intégration de plateformes open source (CMS, CRM, outils collaboratifs).",
    "about.p2":
      "Depuis que j\'ai découvert la programmation, un univers s\'est ouvert à moi. Le développement web, en particulier, est devenu bien plus qu\'un domaine technique : c\'est une véritable passion, un art mêlant créativité, logique et innovation. Depuis, je n\'ai cessé d'apprendre et de faire évoluer mes compétences pour rester à la pointe du développement web. Je crois en l\'écriture de code propre et maintenable et en la création d\'expériences utilisateur intuitives.",
    "about.p3":
      "Quand je ne code pas, vous pouvez me trouver en randonnée, en train de lire des romans de science-fiction ou d'écouter de la musique",
    "about.resume": "Télécharger CV",

    // Projects Section
    "projects.title": "Mes Projets",
    "projects.subtitle":
      "Voici quelques-uns des projets sur lesquels j'ai travaillé. Chacun représente un défi unique et une expérience d'apprentissage.",
    "projects.ecommerce.title": "Plateforme E-commerce",
    "projects.ecommerce.description":
      "Une plateforme e-commerce complète avec gestion des produits, fonctionnalité de panier et traitement des paiements.",
    "projects.taskapp.title": "Application de Gestion de Tâches",
    "projects.taskapp.description":
      "Une application collaborative de gestion de tâches avec mises à jour en temps réel et fonctionnalités de collaboration d'équipe.",
    "projects.weather.title": "Tableau de Bord Météo",
    "projects.weather.description":
      "Un tableau de bord météo qui affiche les données météorologiques actuelles et prévues pour plusieurs emplacements.",
    "projects.code": "Code source",
    "projects.demo": "Visiter",

    // Skills Section
    "skills.title": "Compétences & Expertise",
    "skills.subtitle":
      "J'ai développé un ensemble diversifié de compétences tout au long de ma carrière. Voici un aperçu de mon expertise technique.",

    // Packs Section
    "packs.badge": "Mes Offres",
    "packs.title": "Packs de Services",
    "packs.subtitle":
      "Trois offres pensées pour couvrir vos besoins : de la simple vitrine à la solution sur mesure avec intégration CMS/CRM.",
    "packs.delay": "Délai",
    "packs.price": "Tarif",
    "packs.cta": "Demander un devis",
    "packs.disclaimer": "Tarifs indicatifs — devis gratuit et personnalisé sur demande.",
    "packs.note": "Frais d'hébergement et de nom de domaine non inclus. Accompagnement à la mise en ligne inclus.",
    "packs.hosting.title": "Hors forfait",
    "packs.hosting.value": "Hébergement & nom de domaine non inclus",
    "packs.addon.label": "Option disponible",
    "packs.basique.badge": "Basique",
    "packs.basique.name": "Vitrine",
    "packs.basique.for": "Pour indépendants, associations et petites structures souhaitant une présence en ligne professionnelle.",
    "packs.basique.delay": "1 à 2 semaines",
    "packs.basique.price": "80 000 – 150 000 FCFA",
    "packs.basique.features.count": "7",
    "packs.basique.features.0": "Site vitrine 1 à 4 pages (Accueil, À propos, Services, Contact)",
    "packs.basique.features.1": "Design responsive (mobile, tablette, desktop)",
    "packs.basique.features.2": "Formulaire de contact fonctionnel",
    "packs.basique.features.3": "Optimisation SEO de base (balises, structure, vitesse)",
    "packs.basique.features.4": "Intégration réseaux sociaux & Google Maps",
    "packs.basique.features.5": "2 cycles de révisions inclus",
    "packs.basique.features.6": "Formation à l'utilisation (1 session)",
    "packs.basique.addon": "Accompagnement technique complet (déploiement, mise en production, serveur) — en option, sur devis",
    "packs.basique.argument": "Une vitrine professionnelle, rapide et prête à convaincre vos premiers visiteurs.",
    "packs.standard.badge": "Standard",
    "packs.standard.name": "Business",
    "packs.standard.for": "Pour PME, boutiques en ligne et organisations souhaitant un site évolutif avec gestion de contenu ou de vente autonome.",
    "packs.standard.delay": "2 à 4 semaines",
    "packs.standard.price": "200 000 – 400 000 FCFA",
    "packs.standard.features.count": "10",
    "packs.standard.features.0": "Tout le contenu du Pack Basique",
    "packs.standard.features.1": "Site jusqu'à 8 pages ou plateforme e-commerce (catalogue, panier, paiement)",
    "packs.standard.features.2": "Intégration CMS (gestion de contenu autonome)",
    "packs.standard.features.3": "Paiement mobile local (Mobile Money) en plus des cartes bancaires",
    "packs.standard.features.4": "Blog / actualités intégré",
    "packs.standard.features.5": "SEO avancé (structure sémantique, performance, indexation)",
    "packs.standard.features.6": "Suivi analytique (tableau de bord de trafic)",
    "packs.standard.features.7": "Accompagnement technique complet (déploiement, mise en production, serveur)",
    "packs.standard.features.8": "5 cycles de révisions inclus",
    "packs.standard.features.9": "Formation à l'utilisation (3 sessions)",
    "packs.standard.argument": "Votre activité, en ligne, avec les outils pour la piloter vous-même.",
    "packs.premium.badge": "Premium",
    "packs.premium.name": "Sur-mesure",
    "packs.premium.for": "Pour entreprises et projets à forte valeur ajoutée nécessitant une application web complète ou des intégrations complexes.",
    "packs.premium.delay": "4 à 12 semaines",
    "packs.premium.price": "À partir de 500 000 FCFA",
    "packs.premium.features.count": "10",
    "packs.premium.features.0": "Application web sur mesure, moderne et évolutive",
    "packs.premium.features.1": "Backend robuste et base de données adaptée à vos besoins",
    "packs.premium.features.2": "Intégration de plateformes open source (CMS, CRM, outils collaboratifs)",
    "packs.premium.features.3": "UI/UX Design personnalisé, pensé pour vos utilisateurs",
    "packs.premium.features.4": "Fonctionnalités avancées : authentification, paiements, tableaux de bord, automatisations",
    "packs.premium.features.5": "Architecture pensée pour la scalabilité et la performance",
    "packs.premium.features.6": "Tests automatisés pour garantir la fiabilité du code",
    "packs.premium.features.7": "Accompagnement technique complet (déploiement, mise en production, serveur)",
    "packs.premium.features.8": "Support prioritaire post-lancement (1 à 3 mois, réactivité garantie)",
    "packs.premium.features.9": "Révisions illimitées pendant le développement",
    "packs.premium.argument": "Une solution taillée pour vos process, pensée pour grandir avec votre activité.",

   // Contact Section
"contact.title": "Contactez-moi",
"contact.subtitle": "Vous avez un projet en tête ou souhaitez discuter d'opportunités potentielles ? N'hésitez pas à me contacter !",
"contact.name": "Nom",
"contact.email": "Email",
"contact.message": "Message",
"contact.send": "Envoyer le message",
"contact.sending": "Envoi en cours...",
"contact.success.title": "Merci pour votre message !",
"contact.success.message": "Votre message a été envoyé avec succès. Je vous répondrai dès que possible.",
"contact.error.title": "Erreur",
"contact.send.message": "Tous les champs sont obligatoires.",


    // Footer
    "footer.rights": "Tous droits réservés.",
  },

  en: {
    // Navigation
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.packs": "Packs",
    "nav.contact": "Contact",

   // Hero Section
   "hero.title": "Hi, I'm",
   "hero.subtitle": "Full Stack Developer specializing in building exceptional digital experiences",

   // About Section
   "about.title": "About Me",
    "about.p1":
      "Open Source Solutions Integrator and self-taught Full-Stack Web Developer with over 2 years of experience in designing custom solutions and integrating open source platforms (CMS, CRM, collaboration tools).",
   "about.p2":
     "Since I discovered programming, a whole new world opened up to me. Web development, in particular, became more than just a technical field: it became a real passion, an art combining creativity, logic, and innovation. Since then, I've never stopped learning and evolving my skills to stay at the forefront of web development. I believe in writing clean, maintainable code and creating intuitive user experiences.",
   "about.p3":
     "When I'm not coding, you can find me hiking, reading sci-fi novels, or listening to music.",
   "about.resume": "Download Resume",

    // Projects Section
    "projects.title": "My Projects",
    "projects.subtitle":
      "Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.",
    "projects.ecommerce.title": "E-commerce Platform",
    "projects.ecommerce.description":
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    "projects.taskapp.title": "Task Management App",
    "projects.taskapp.description":
      "A collaborative task management application with real-time updates and team collaboration features.",
    "projects.weather.title": "Weather Dashboard",
    "projects.weather.description":
      "A weather dashboard that displays current and forecasted weather data for multiple locations.",
    "projects.code": "Code",
    "projects.demo": "Live Demo",

    // Skills Section
    "skills.title": "Skills & Expertise",
    "skills.subtitle":
      "I've developed a diverse set of skills throughout my career. Here's a snapshot of my technical expertise.",

    // Packs Section
    "packs.title": "Service Packs",
    "packs.subtitle":
      "Three offers designed to cover your needs: from a simple showcase site to a custom solution with CMS/CRM integration.",
    "packs.badge": "My Offers",
    "packs.delay": "Timeline",
    "packs.price": "Price",
    "packs.cta": "Request a quote",
    "packs.disclaimer": "Indicative prices — free and custom quote on request.",
    "packs.note": "Hosting and domain name costs are not included. Go-live assistance included.",
    "packs.hosting.title": "Not included",
    "packs.hosting.value": "Hosting & domain name not included",
    "packs.addon.label": "Available option",
    "packs.basique.badge": "Basic",
    "packs.basique.name": "Showcase",
    "packs.basique.for": "For freelancers, associations and small structures wanting a professional online presence.",
    "packs.basique.delay": "1 to 2 weeks",
    "packs.basique.price": "80,000 – 150,000 FCFA",
    "packs.basique.features.count": "7",
    "packs.basique.features.0": "Showcase site with 1 to 4 pages (Home, About, Services, Contact)",
    "packs.basique.features.1": "Responsive design (mobile, tablet, desktop)",
    "packs.basique.features.2": "Working contact form",
    "packs.basique.features.3": "Basic SEO optimization (tags, structure, speed)",
    "packs.basique.features.4": "Social media & Google Maps integration",
    "packs.basique.features.5": "2 revision cycles included",
    "packs.basique.features.6": "Usage training (1 session)",
    "packs.basique.addon": "Full technical support (deployment, production release, server) — optional, quoted separately",
    "packs.basique.argument": "A professional, fast showcase ready to convince your first visitors.",
    "packs.standard.badge": "Standard",
    "packs.standard.name": "Business",
    "packs.standard.for": "For SMEs, online shops and organizations wanting an evolutive site with autonomous content or sales management.",
    "packs.standard.delay": "2 to 4 weeks",
    "packs.standard.price": "200,000 – 400,000 FCFA",
    "packs.standard.features.count": "10",
    "packs.standard.features.0": "Everything in the Basic Pack",
    "packs.standard.features.1": "Site up to 8 pages or e-commerce platform (catalog, cart, payment)",
    "packs.standard.features.2": "CMS integration (autonomous content management)",
    "packs.standard.features.3": "Local mobile payment (Mobile Money) in addition to card payments",
    "packs.standard.features.4": "Integrated blog / news section",
    "packs.standard.features.5": "Advanced SEO (semantic structure, performance, indexing)",
    "packs.standard.features.6": "Traffic analytics dashboard",
    "packs.standard.features.7": "Full technical support (deployment, production release, server)",
    "packs.standard.features.8": "5 revision cycles included",
    "packs.standard.features.9": "Usage training (3 sessions)",
    "packs.standard.argument": "Your business online, with the tools to run it yourself.",
    "packs.premium.badge": "Premium",
    "packs.premium.name": "Bespoke",
    "packs.premium.for": "For businesses and high-value projects needing a complete web application or complex integrations.",
    "packs.premium.delay": "4 to 12 weeks",
    "packs.premium.price": "From 500,000 FCFA",
    "packs.premium.features.count": "10",
    "packs.premium.features.0": "Custom, modern and scalable web application",
    "packs.premium.features.1": "Robust backend and database tailored to your needs",
    "packs.premium.features.2": "Open source platform integration (CMS, CRM, collaboration tools)",
    "packs.premium.features.3": "Custom UI/UX design, built around your users",
    "packs.premium.features.4": "Advanced features: authentication, payments, dashboards, automations",
    "packs.premium.features.5": "Architecture built for scalability and performance",
    "packs.premium.features.6": "Automated testing for reliable code",
    "packs.premium.features.7": "Full technical support (deployment, production release, server)",
    "packs.premium.features.8": "Priority post-launch support (1 to 3 months, guaranteed responsiveness)",
    "packs.premium.features.9": "Unlimited revisions during development",
    "packs.premium.argument": "A solution tailored to your processes, built to grow with your business.",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle": "Have a project in mind or want to discuss potential opportunities? Feel free to reach out!",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success.title": "Thank you for your message!",
    "contact.success.message": "Your message has been sent successfully. I'll get back to you as soon as possible.",
    "contact.error.title": "Error",
"contact.send.message": "All fields are required.",


    // Footer
    "footer.rights": "All rights reserved.",
  },
}

// Fournisseur de contexte
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // État pour stocker la langue actuelle
  const [language, setLanguage] = useState<Language>("fr")

  // Fonction pour obtenir une traduction
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  // Sauvegarder la langue dans localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language)
    }
  }, [language])

  // Récupérer la langue depuis localStorage au chargement
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && ["fr", "en"].includes(savedLanguage)) {
        setLanguage(savedLanguage)
      }
    }
  }, [])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Hook personnalisé pour utiliser le contexte
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}