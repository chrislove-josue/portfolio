"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Définir les langues disponibles
export type Language = "fr" | "fon" | "en" | "es" | "pt"

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
    "packs.basique.badge": "Basique",
    "packs.basique.name": "Vitrine",
    "packs.basique.for": "Pour indépendants, associations et petites structures souhaitant une présence en ligne professionnelle.",
    "packs.basique.delay": "1 à 2 semaines",
    "packs.basique.price": "80 000 – 150 000 FCFA",
    "packs.basique.features.count": "5",
    "packs.basique.features.0": "Site vitrine 1 à 4 pages (Accueil, À propos, Services, Contact)",
    "packs.basique.features.1": "Design responsive (mobile, tablette, desktop)",
    "packs.basique.features.2": "Formulaire de contact fonctionnel",
    "packs.basique.features.3": "Optimisation SEO de base (balises, structure, vitesse)",
    "packs.basique.features.4": "1 cycle de révisions inclus",
    "packs.basique.argument": "Une vitrine professionnelle, rapide et prête à convaincre vos premiers visiteurs.",
    "packs.standard.badge": "Standard",
    "packs.standard.name": "Business",
    "packs.standard.for": "Pour PME, boutiques en ligne et organisations souhaitant un site évolutif avec gestion de contenu ou de vente autonome.",
    "packs.standard.delay": "2 à 4 semaines",
    "packs.standard.price": "200 000 – 400 000 FCFA",
    "packs.standard.features.count": "7",
    "packs.standard.features.0": "Tout le contenu du Pack Basique",
    "packs.standard.features.1": "Site jusqu'à 8 pages ou plateforme e-commerce (catalogue, panier, paiement)",
    "packs.standard.features.2": "Intégration CMS (gestion de contenu autonome)",
    "packs.standard.features.3": "Intégration CRM léger ou formulaire avancé (gestion des leads/clients)",
    "packs.standard.features.4": "SEO avancé (structure sémantique, performance, indexation)",
    "packs.standard.features.5": "2 cycles de révisions inclus",
    "packs.standard.features.6": "Formation à l'utilisation (1 session)",
    "packs.standard.argument": "Votre activité, en ligne, avec les outils pour la piloter vous-même.",
    "packs.premium.badge": "Premium",
    "packs.premium.name": "Sur-mesure",
    "packs.premium.for": "Pour entreprises et projets à forte valeur ajoutée nécessitant une application web complète ou des intégrations complexes.",
    "packs.premium.delay": "4 à 12 semaines",
    "packs.premium.price": "À partir de 500 000 FCFA",
    "packs.premium.features.count": "8",
    "packs.premium.features.0": "Application web sur mesure (React/Next.js, TypeScript, Tailwind)",
    "packs.premium.features.1": "Backend robuste (Laravel, API RESTful) et base de données adaptée",
    "packs.premium.features.2": "Intégration de plateformes open source (CMS, CRM, outils collaboratifs)",
    "packs.premium.features.3": "UI/UX Design personnalisé (maquettes Figma / Adobe XD)",
    "packs.premium.features.4": "Fonctionnalités avancées : authentification, paiements, tableaux de bord, automatisations",
    "packs.premium.features.5": "Architecture pensée pour la scalabilité et la performance",
    "packs.premium.features.6": "Accompagnement DevOps (déploiement, CI/CD, serveur)",
    "packs.premium.features.7": "Révisions illimitées pendant le développement",
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

  fon: {
    // Navigation
    "nav.about": "Mɛ̌ un ka nyí",
    "nav.projects": "Azɔ̌ ce lɛ",
    "nav.skills": "Nǔwukpikpé ce lɛ",
    "nav.packs": "Azɔ̌ kplé",
    "nav.contact": "Ylɔ̌ mi",

    // Hero Section
    "hero.title": "Un do gbe nu mi, nye wɛ nyí",
    "hero.subtitle": "Mɛ e nɔ blo azɔ̌ internet tɔn ganji",

    // About Section
    "about.title": "Mɛ̌ un ka nyí?",
    "about.p1":
      "Intégrateur de Solutions Open Source kpo Développeur Web full-stack autodidacte bo ɖò azɔ̌ ɖò xwè 2+ mɛ é, ɖò agbesunya sín nǔɖiɖó e mɛ́ lɛ kpo platforme open source (CMS, CRM, nuwiki azɔ̌ tɔn) kplé kpo.",
    "about.p2": "Sín hwenu e un mɔ tutoblonunu ɔ é ɔ, gbɛ̀ ɔ bǐ wɛ hun nú mì. Web developpement, ɖò taji ɔ, ko huzu nǔ hú nǔnywɛ xwitixwiti sín azɔ̌ ɖé: é nyí wanyiyi nǔgbo ɖé, nǔnywɛ xwitixwiti sín nǔ e nɔ xò nǔɖiɖó, linlin kpo nǔ yɔyɔ̌wiwa kpo kplé é. Sín hwenɛnu ɔ, un kpó ɖò nǔ kplɔ́n wɛ bo ɖò nǔwukpikpé ce lɛ jlaɖó wɛ bo na dó sixu nɔ nukɔn ɖò tɛn ɛntɛnɛti tɔn lɛ ɖiɖó ɖ’ayǐ mɛ. Un ɖi nǔ nú azɔ̌ e mɛ́, bɔ è sixu hɛn ɖ’ayǐ é kpo nǔ e mɛ e nɔ zán lɛ é nɔ mɔ nǔ jɛ wu lɛ é ɖiɖó kpo.",
    "about.p3": "Hwenu e un ma nɔ blo azɔ̌ internet tɔn ǎ, un nɔ yi zɔn, un nɔ xa wema alǒ un nɔ ɖa nǔ.",
    "about.resume": "Wema azɔ̌ ce tɔn",

    // Projects Section
    "projects.title": "azɔ̌ ce lɛ",
    "projects.subtitle": "azɔ̌ ɖé lɛ e un ko wa. azɔ̌ ɖokpó ɖokpó ɖo nǔ e un plɔn sín.",
    "projects.ecommerce.title": "Sinsɛn sɔ nǔ tɔn",
    "projects.ecommerce.description": "Sinsɛn sɔ nǔ tɔn e ɖo nǔ susu.",
    "projects.taskapp.title": "Sinsɛn azɔ̌ tɔn",
    "projects.taskapp.description": "Sinsɛn azɔ̌ tɔn e nɔ ná mɛ lɛ blo azɔ̌ kplé.",
    "projects.weather.title": "Sinsɛn jijɛ tɔn",
    "projects.weather.description": "Sinsɛn e nɔ ná mɛ lɛ mɔ jijɛ tɛnmɛ tɛnmɛ tɔn.",
    "projects.code": "Wěma",
    "projects.demo": "Kpɔn",

    // Skills Section
    "skills.title": "Nǔwukpikpé ce lɛ",
    "skills.subtitle": "Un ko plɔn nǔ susu. Nukunnumɔ jɛ nu mɛ ce lɛ ɖíe.",

    // Packs Section
    "packs.title": "Azɔ̌ kplé lɛ",
    "packs.subtitle": "Azɔ̌ kplé ɖokpó ɖokpó e na na mɛ lɛ mi, sín tɛn ɛntɛnɛti tɔn kpɛví kaka jɛ nǔɖiɖó e è bló sín agbesunya mɛ lɛ é.",
    "packs.delay": "Hwenu e na ɖo",
    "packs.price": "Azɔ̌ na",
    "packs.cta": "Bɔ azɔ̌ na ɖé",
    "packs.disclaimer": "Azɔ̌ ɔ na sixu klokan yi, è na ɖo azɔ̌ tɔn e è ka na bló é mɛ.",
    "packs.basique.badge": "Azɔ̌ kplé Basique",
    "packs.basique.name": "Vitrine",
    "packs.basique.for": "Nú mɛ e mɛ mɔ azɔ̌ kpɛví ɖé lɛ kpo asɛkpa lɛ kpo e jlo na ɖó tɛn ɛntɛnɛti tɔn ɖé lɛ.",
    "packs.basique.delay": "Kí 5 kaka jɛ 10",
    "packs.basique.price": "75 000 – 150 000 FCFA",
    "packs.basique.features.count": "6",
    "packs.basique.features.0": "Tɛn ɛntɛnɛti tɔn 1 kaka jɛ 5",
    "packs.basique.features.1": "Design e nɔ na nǔ loto lɛ jɛ",
    "packs.basique.features.2": "Wɛn na ɖó nǔ e na zán",
    "packs.basique.features.3": "SEO na sɔ ganji",
    "packs.basique.features.4": "Hébergement kpo nyíkɔ tɔn kpo",
    "packs.basique.features.5": "Révision 1",
    "packs.basique.argument": "Tɛn ɛntɛnɛti tɔn ɖagbe, e blo wɛ bo ɖo kɔngɔmɛ.",
    "packs.standard.badge": "Azɔ̌ kplé Standard",
    "packs.standard.name": "Business",
    "packs.standard.for": "Nú PME lɛ, sɔ nǔ tɔn lɛ kpo asɛkpa lɛ kpo e jlo na ɖó tɛn e sixu ma xwlɛn kpo nǔwukpikpé ɖagbe kpo.",
    "packs.standard.delay": "Semɛ̀ 2 kaka jɛ 4",
    "packs.standard.price": "250 000 – 500 000 FCFA",
    "packs.standard.features.count": "8",
    "packs.standard.features.0": "Nǔbi e ɖo azɔ̌ kplé Basique mɛ é",
    "packs.standard.features.1": "Tɛn ɛntɛnɛti tɔn kaka jɛ 10 alo e-commerce",
    "packs.standard.features.2": "Intégration CMS (gestion de contenu autonome)",
    "packs.standard.features.3": "Intégration CRM alo wɛn ɖagbe tɔn",
    "packs.standard.features.4": "Tableau de bord e na nɔ ɖo nǔ lɛ",
    "packs.standard.features.5": "SEO avancé",
    "packs.standard.features.6": "Révision 2",
    "packs.standard.features.7": "Formation (session 1)",
    "packs.standard.argument": "Azɔ̌ towe ɖò Ɛntɛnɛti jí, kpo nǔ e na na we sixu ɖo nǔ lɛ kpo.",
    "packs.premium.badge": "Azɔ̌ kplé Premium",
    "packs.premium.name": "Sur-mesure",
    "packs.premium.for": "Nú azɔ̌xwé lɛ kpo azɔ̌ e ɖo àxù jí lɛ kpo e jlo na ɖó application web sín agbesunya.",
    "packs.premium.delay": "Semɛ̀ 4 kaka jɛ 10",
    "packs.premium.price": "Gbɛ̀ sín 700 000 FCFA",
    "packs.premium.features.count": "9",
    "packs.premium.features.0": "Application web sur-mesure (React/Next.js, TypeScript, Tailwind)",
    "packs.premium.features.1": "Backend ganji (Laravel, API RESTful) kpo base de données",
    "packs.premium.features.2": "Intégration plateformes open source (CMS, CRM, nuwiki azɔ̌ tɔn)",
    "packs.premium.features.3": "UI/UX Design e è bló na we ɖokpo (Figma / Adobe XD)",
    "packs.premium.features.4": "Nǔ e na ɖo taji: authentification, paiements, tableaux de bord",
    "packs.premium.features.5": "Architecture e na sixu ma xwlɛn",
    "packs.premium.features.6": "Accompagnement DevOps (déploiement, CI/CD, serveur)",
    "packs.premium.features.7": "Support post-lancement (1 kaka jɛ 3 xwè)",
    "packs.premium.features.8": "Révisions é ma na wa nu hweɖeɖe",
    "packs.premium.argument": "Agbesunya e è bló na azɔ̌ towe, e na sixu gba kpo azɔ̌ towe kpo.",

    // Contact Section
    "contact.title": "Ylɔ̌ mi",
    "contact.subtitle": "A ɖo azɔ̌ ɖé a jlo na wa a? Ylɔ̌ mi!",
    "contact.name": "Nyíkɔ",
    "contact.email": "Email",
    "contact.message": "Wɛn",
    "contact.send": "Sɛ wɛn ɔ do",
    "contact.sending": "E ɖo wɛn ɔ sɛ do wɛ...",
    "contact.success.title": "Akpé!",
    "contact.success.message": "Un ko mɔ wɛn towe. Un na yí gbe na we kpɛɖé.",
    "contact.error.title": "Nǔ ɖé jɛ",
"contact.send.message": "Nu bi ɖo dandan mɛ",


    // Footer
    "footer.rights": "Acɛ lɛ bí.",
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
    "packs.basique.badge": "Basic",
    "packs.basique.name": "Showcase",
    "packs.basique.for": "For freelancers, associations and small structures wanting a professional online presence.",
    "packs.basique.delay": "1 to 2 weeks",
    "packs.basique.price": "80,000 – 150,000 FCFA",
    "packs.basique.features.count": "5",
    "packs.basique.features.0": "Showcase site with 1 to 4 pages (Home, About, Services, Contact)",
    "packs.basique.features.1": "Responsive design (mobile, tablet, desktop)",
    "packs.basique.features.2": "Working contact form",
    "packs.basique.features.3": "Basic SEO optimization (tags, structure, speed)",
    "packs.basique.features.4": "1 revision cycle included",
    "packs.basique.argument": "A professional, fast showcase ready to convince your first visitors.",
    "packs.standard.badge": "Standard",
    "packs.standard.name": "Business",
    "packs.standard.for": "For SMEs, online shops and organizations wanting an evolutive site with autonomous content or sales management.",
    "packs.standard.delay": "2 to 4 weeks",
    "packs.standard.price": "200,000 – 400,000 FCFA",
    "packs.standard.features.count": "7",
    "packs.standard.features.0": "Everything in the Basic Pack",
    "packs.standard.features.1": "Site up to 8 pages or e-commerce platform (catalog, cart, payment)",
    "packs.standard.features.2": "CMS integration (autonomous content management)",
    "packs.standard.features.3": "Light CRM integration or advanced form (lead/client management)",
    "packs.standard.features.4": "Advanced SEO (semantic structure, performance, indexing)",
    "packs.standard.features.5": "2 revision cycles included",
    "packs.standard.features.6": "Usage training (1 session)",
    "packs.standard.argument": "Your business online, with the tools to run it yourself.",
    "packs.premium.badge": "Premium",
    "packs.premium.name": "Bespoke",
    "packs.premium.for": "For businesses and high-value projects needing a complete web application or complex integrations.",
    "packs.premium.delay": "4 to 12 weeks",
    "packs.premium.price": "From 500,000 FCFA",
    "packs.premium.features.count": "8",
    "packs.premium.features.0": "Bespoke web application (React/Next.js, TypeScript, Tailwind)",
    "packs.premium.features.1": "Robust backend (Laravel, RESTful API) and adapted database",
    "packs.premium.features.2": "Open source platform integration (CMS, CRM, collaboration tools)",
    "packs.premium.features.3": "Custom UI/UX design (Figma / Adobe XD mockups)",
    "packs.premium.features.4": "Advanced features: authentication, payments, dashboards, automations",
    "packs.premium.features.5": "Architecture built for scalability and performance",
    "packs.premium.features.6": "DevOps support (deployment, CI/CD, server)",
    "packs.premium.features.7": "Unlimited revisions during development",
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

  es: {
    // Navigation
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.packs": "Paquetes",
    "nav.contact": "Contacto",

      // Hero Section
    "hero.title": "Hola, soy",
    "hero.subtitle": "Desarrollador Full Stack especializado en crear experiencias digitales excepcionales",

    // About Section
    "about.title": "Sobre Mí",
    "about.p1":
      "Integrador de Soluciones Open Source y Desarrollador Web full-stack autodidacta y dedicado, con más de 2 años de experiencia en el diseño de soluciones a medida y la integración de plataformas open source (CMS, CRM, herramientas colaborativas).",
    "about.p2":
      "Desde que descubrí la programación, se abrió un mundo completamente nuevo para mí. El desarrollo web, en particular, se convirtió en algo más que un campo técnico: se convirtió en una verdadera pasión, un arte que combina creatividad, lógica e innovación. Desde entonces, nunca he dejado de aprender y evolucionar mis habilidades para mantenerme a la vanguardia del desarrollo web. Creo en escribir código limpio y mantenible y en crear experiencias de usuario intuitivas.",
    "about.p3":
      "Cuando no estoy programando, me encontrarás haciendo senderismo, leyendo novelas de ciencia ficción o escuchando música.",
    "about.resume": "Descargar CV",

    // Projects Section
    "projects.title": "Mis Proyectos",
    "projects.subtitle":
      "Aquí hay algunos de los proyectos en los que he trabajado. Cada uno representa un desafío único y una experiencia de aprendizaje.",
    "projects.ecommerce.title": "Plataforma de Comercio Electrónico",
    "projects.ecommerce.description":
      "Una plataforma de comercio electrónico completa con gestión de productos, funcionalidad de carrito y procesamiento de pagos.",
    "projects.taskapp.title": "Aplicación de Gestión de Tareas",
    "projects.taskapp.description":
      "Una aplicación colaborativa de gestión de tareas con actualizaciones en tiempo real y funciones de colaboración en equipo.",
    "projects.weather.title": "Panel de Control del Clima",
    "projects.weather.description":
      "Un panel de control del clima que muestra datos meteorológicos actuales y pronosticados para múltiples ubicaciones.",
    "projects.code": "Código",
    "projects.demo": "Demo",

    // Skills Section
    "skills.title": "Habilidades y Experiencia",
    "skills.subtitle":
      "He desarrollado un conjunto diverso de habilidades a lo largo de mi carrera. Aquí hay una instantánea de mi experiencia técnica.",

    // Packs Section
    "packs.badge": "Mis Ofertas",
    "packs.title": "Paquetes de Servicios",
    "packs.subtitle":
      "Tres ofertas diseñadas para cubrir tus necesidades: desde una simple vitrina hasta una solución a medida con integración CMS/CRM.",
    "packs.delay": "Plazo",
    "packs.price": "Tarifa",
    "packs.cta": "Solicitar presupuesto",
    "packs.disclaimer": "Tarifas indicativas — presupuesto gratuito y personalizado a petición.",
    "packs.note": "Gastos de alojamiento y dominio no incluidos. Acompañamiento para el lanzamiento incluido.",
    "packs.hosting.title": "No incluido",
    "packs.hosting.value": "Alojamiento y dominio no incluidos",
    "packs.basique.badge": "Básico",
    "packs.basique.name": "Vitrina",
    "packs.basique.for": "Para autónomos, asociaciones y pequeñas estructuras que quieren una presencia online profesional.",
    "packs.basique.delay": "1 a 2 semanas",
    "packs.basique.price": "80 000 – 150 000 FCFA",
    "packs.basique.features.count": "5",
    "packs.basique.features.0": "Sitio vitrina de 1 a 4 páginas (Inicio, Sobre mí, Servicios, Contacto)",
    "packs.basique.features.1": "Diseño responsivo (móvil, tableta, escritorio)",
    "packs.basique.features.2": "Formulario de contacto funcional",
    "packs.basique.features.3": "Optimización SEO básica (etiquetas, estructura, velocidad)",
    "packs.basique.features.4": "1 ciclo de revisiones incluido",
    "packs.basique.argument": "Una vitrina profesional, rápida y lista para convencer a tus primeros visitantes.",
    "packs.standard.badge": "Estándar",
    "packs.standard.name": "Negocio",
    "packs.standard.for": "Para pymes, tiendas online y organizaciones que quieren un sitio evolutivo con gestión de contenido o ventas autónoma.",
    "packs.standard.delay": "2 a 4 semanas",
    "packs.standard.price": "200 000 – 400 000 FCFA",
    "packs.standard.features.count": "7",
    "packs.standard.features.0": "Todo el contenido del Paquete Básico",
    "packs.standard.features.1": "Sitio hasta 8 páginas o plataforma e-commerce (catálogo, carrito, pago)",
    "packs.standard.features.2": "Integración CMS (gestión de contenido autónoma)",
    "packs.standard.features.3": "Integración CRM ligera o formulario avanzado (gestión de leads/clientes)",
    "packs.standard.features.4": "SEO avanzado (estructura semántica, rendimiento, indexación)",
    "packs.standard.features.5": "2 ciclos de revisiones incluidos",
    "packs.standard.features.6": "Formación de uso (1 sesión)",
    "packs.standard.argument": "Tu actividad en línea, con las herramientas para dirigirla tú mismo.",
    "packs.premium.badge": "Premium",
    "packs.premium.name": "A medida",
    "packs.premium.for": "Para empresas y proyectos de alto valor que necesitan una aplicación web completa o integraciones complejas.",
    "packs.premium.delay": "4 a 12 semanas",
    "packs.premium.price": "Desde 500 000 FCFA",
    "packs.premium.features.count": "8",
    "packs.premium.features.0": "Aplicación web a medida (React/Next.js, TypeScript, Tailwind)",
    "packs.premium.features.1": "Backend robusto (Laravel, API RESTful) y base de datos adaptada",
    "packs.premium.features.2": "Integración de plataformas open source (CMS, CRM, herramientas colaborativas)",
    "packs.premium.features.3": "Diseño UI/UX personalizado (maquetas Figma / Adobe XD)",
    "packs.premium.features.4": "Funciones avanzadas: autenticación, pagos, paneles, automatizaciones",
    "packs.premium.features.5": "Arquitectura pensada para escalabilidad y rendimiento",
    "packs.premium.features.6": "Acompañamiento DevOps (despliegue, CI/CD, servidor)",
    "packs.premium.features.7": "Revisiones ilimitadas durante el desarrollo",
    "packs.premium.argument": "Una solución hecha a medida para tus procesos, pensada para crecer con tu negocio.",

    // Contact Section
    "contact.title": "Ponte en Contacto",
    "contact.subtitle":
      "¿Tienes un proyecto en mente o quieres discutir oportunidades potenciales? ¡No dudes en contactarme!",
    "contact.name": "Nombre",
    "contact.email": "Correo electrónico",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",
    "contact.sending": "Enviando...",
    "contact.success.title": "¡Gracias por tu mensaje!",
    "contact.success.message": "Tu mensaje ha sido enviado con éxito. Te responderé lo antes posible.",
    "contact.error.title": "Error",
"contact.send.message": "Todos los campos son obligatorios.",


    // Footer
    "footer.rights": "Todos los derechos reservados.",
  },

  pt: {
    // Navigation
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.skills": "Habilidades",
    "nav.packs": "Pacotes",
    "nav.contact": "Contato",

        // Hero Section
        "hero.title": "Olá, eu sou",
        "hero.subtitle": "Desenvolvedor Full Stack especializado na criação de experiências digitais excepcionais",
    
        // About Section
        "about.title": "Sobre Mim",
        "about.p1":
          "Integrador de Soluções Open Source e Desenvolvedor Web full-stack autodidata e dedicado, com mais de 2 anos de experiência na concepção de soluções personalizadas e na integração de plataformas open source (CMS, CRM, ferramentas colaborativas).",
        "about.p2":
          "Desde que descobri a programação, um mundo completamente novo se abriu para mim. O desenvolvimento web, em particular, se tornou mais do que apenas uma área técnica: se tornou uma verdadeira paixão, uma arte que mistura criatividade, lógica e inovação. Desde então, nunca parei de aprender e evoluir minhas habilidades para me manter na vanguarda do desenvolvimento web. Acredito em escrever código limpo e sustentável e em criar experiências de usuário intuitivas.",
        "about.p3":
          "Quando não estou programando, você pode me encontrar fazendo trilhas, lendo romances de ficção científica ou ouvindo música.",
        "about.resume": "Baixar CV",
    

    // Projects Section
    "projects.title": "Meus Projetos",
    "projects.subtitle":
      "Aqui estão alguns dos projetos em que trabalhei. Cada um representa um desafio único e uma experiência de aprendizado.",
    "projects.ecommerce.title": "Plataforma de E-commerce",
    "projects.ecommerce.description":
      "Uma plataforma de e-commerce completa com gerenciamento de produtos, funcionalidade de carrinho e processamento de pagamentos.",
    "projects.taskapp.title": "Aplicativo de Gerenciamento de Tarefas",
    "projects.taskapp.description":
      "Um aplicativo colaborativo de gerenciamento de tarefas com atualizações em tempo real e recursos de colaboração em equipe.",
    "projects.weather.title": "Painel de Controle do Clima",
    "projects.weather.description":
      "Um painel de controle do clima que exibe dados meteorológicos atuais e previstos para vários locais.",
    "projects.code": "Código",
    "projects.demo": "Demo",

    // Skills Section
    "skills.title": "Habilidades e Experiência",
    "skills.subtitle":
      "Desenvolvi um conjunto diversificado de habilidades ao longo da minha carreira. Aqui está um panorama da minha experiência técnica.",

    // Packs Section
    "packs.badge": "Minhas Ofertas",
    "packs.title": "Pacotes de Serviços",
    "packs.subtitle":
      "Três ofertas pensadas para cobrir suas necessidades: de uma simples vitrine a uma solução personalizada com integração CMS/CRM.",
    "packs.delay": "Prazo",
    "packs.price": "Tarifa",
    "packs.cta": "Solicitar orçamento",
    "packs.disclaimer": "Tarifas indicativas — orçamento gratuito e personalizado sob consulta.",
    "packs.note": "Gastos de hospedagem e domínio não incluídos. Acompanhamento para o lançamento incluído.",
    "packs.hosting.title": "Não incluído",
    "packs.hosting.value": "Hospedagem e domínio não incluídos",
    "packs.basique.badge": "Básico",
    "packs.basique.name": "Vitrine",
    "packs.basique.for": "Para autônomos, associações e pequenas estruturas que querem uma presença online profissional.",
    "packs.basique.delay": "1 a 2 semanas",
    "packs.basique.price": "80 000 – 150 000 FCFA",
    "packs.basique.features.count": "5",
    "packs.basique.features.0": "Site vitrine de 1 a 4 páginas (Início, Sobre, Serviços, Contato)",
    "packs.basique.features.1": "Design responsivo (mobile, tablet, desktop)",
    "packs.basique.features.2": "Formulário de contato funcional",
    "packs.basique.features.3": "Otimização SEO básica (tags, estrutura, velocidade)",
    "packs.basique.features.4": "1 ciclo de revisões incluído",
    "packs.basique.argument": "Uma vitrine profissional, rápida e pronta para convencer seus primeiros visitantes.",
    "packs.standard.badge": "Padrão",
    "packs.standard.name": "Negócio",
    "packs.standard.for": "Para PMEs, lojas online e organizações que querem um site evolutivo com gestão autônoma de conteúdo ou vendas.",
    "packs.standard.delay": "2 a 4 semanas",
    "packs.standard.price": "200 000 – 400 000 FCFA",
    "packs.standard.features.count": "7",
    "packs.standard.features.0": "Todo o conteúdo do Pacote Básico",
    "packs.standard.features.1": "Site até 8 páginas ou plataforma e-commerce (catálogo, carrinho, pagamento)",
    "packs.standard.features.2": "Integração CMS (gestão de conteúdo autônoma)",
    "packs.standard.features.3": "Integração CRM leve ou formulário avançado (gestão de leads/clientes)",
    "packs.standard.features.4": "SEO avançado (estrutura semântica, desempenho, indexação)",
    "packs.standard.features.5": "2 ciclos de revisões incluídos",
    "packs.standard.features.6": "Treinamento de uso (1 sessão)",
    "packs.standard.argument": "Sua atividade online, com as ferramentas para gerenciá-la você mesmo.",
    "packs.premium.badge": "Premium",
    "packs.premium.name": "Sob medida",
    "packs.premium.for": "Para empresas e projetos de alto valor que precisam de uma aplicação web completa ou integrações complexas.",
    "packs.premium.delay": "4 a 12 semanas",
    "packs.premium.price": "A partir de 500 000 FCFA",
    "packs.premium.features.count": "8",
    "packs.premium.features.0": "Aplicação web sob medida (React/Next.js, TypeScript, Tailwind)",
    "packs.premium.features.1": "Backend robusto (Laravel, API RESTful) e banco de dados adaptado",
    "packs.premium.features.2": "Integração de plataformas open source (CMS, CRM, ferramentas colaborativas)",
    "packs.premium.features.3": "Design UI/UX personalizado (mockups Figma / Adobe XD)",
    "packs.premium.features.4": "Recursos avançados: autenticação, pagamentos, painéis, automações",
    "packs.premium.features.5": "Arquitetura pensada para escalabilidade e desempenho",
    "packs.premium.features.6": "Acompanhamento DevOps (deploy, CI/CD, servidor)",
    "packs.premium.features.7": "Revisões ilimitadas durante o desenvolvimento",
    "packs.premium.argument": "Uma solução sob medida para seus processos, pensada para crescer com seu negócio.",

    // Contact Section
    "contact.title": "Entre em Contato",
    "contact.subtitle":
      "Tem um projeto em mente ou quer discutir oportunidades potenciais? Não hesite em entrar em contato!",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.message": "Mensagem",
    "contact.send": "Enviar Mensagem",
    "contact.sending": "Enviando...",
    "contact.success.title": "Obrigado pela sua mensagem!",
    "contact.success.message": "Sua mensagem foi enviada com sucesso. Entrarei em contato o mais breve possível.",
    "contact.error.title": "Erro",
"contact.send.message": "Todos os campos são obrigatórios.",


    // Footer
    "footer.rights": "Todos os direitos reservados.",
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
      if (savedLanguage && ["fr", "fon", "en", "es", "pt"].includes(savedLanguage)) {
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
