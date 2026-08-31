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
    "nav.contact": "Contact",

    
    // Hero Section
    "hero.title": "Bonjour, je suis",
    "hero.subtitle": "Développeur Full Stack spécialisé dans la création d'expériences numériques exceptionnelles",

    // About Section
    "about.title": "À propos de moi",
    "about.p1":
      "Je suis un développeur passionné avec une solide formation en technologies web et un œil attentif pour le design. Fort de plus de 2 ans d\'expérience, j\'ai travaillé sur une variété de projets, allant de sites web pour petites entreprises à des applications d'entreprise complexes. Je me spécialise également dans la création de sites e-commerce performants et attrayants, pensés pour optimiser l\'expérience utilisateur et augmenter les ventes en ligne.",
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
    "nav.contact": "Ylɔ̌ mi",

    // Hero Section
    "hero.title": "Un do gbe nu mi, nye wɛ nyí",
    "hero.subtitle": "Mɛ e nɔ blo azɔ̌ internet tɔn ganji",

    // About Section
    "about.title": "Mɛ̌ un ka nyí?",
    "about.p1":
      "Un nyí nǔɖíɖótɔ́ ɖé bo ɖó nǔnywɛ syɛnsyɛn ɖò nǔnywɛ xwitixwiti sín nǔ lɛ mɛ, bo lɛ́ ɖó nukún ɖagbe dó nǔɖiɖó lɛ wu. Un ko w’azɔ̌ nú xwè 2 jɛji, bo ko w’azɔ̌ ɖò azɔ̌ vovo lɛ jí, bɛ́sín tɛn ɛntɛnɛti tɔn ajɔ̌wiwa tɔn kpɛví kpɛví lɛ jí kaka jɛ nǔ e è nɔ zán ɖò azɔ̌xwé lɛ é jí. Un lɛ́ tuùn azɔ̌ tawun bo nɔ bló tɛn ɛntɛnɛti tɔn e jí è nɔ sà nǔ ɖè bɔ ye nɔ w’azɔ̌ ganji bo nɔ lɛ́ dɔn mɛ lɛ é, bɔ è bló ye bonu mɛ e nɔ zán lɛ é na mɔ nǔ jɛ nǔ mɛ ganji, lobo na lɛ́ bló bɔ nǔ e è nɔ sà ɖò Ɛntɛnɛti jí lɛ é na jɛji.",
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
    "nav.contact": "Contact",

   // Hero Section
   "hero.title": "Hi, I'm",
   "hero.subtitle": "Full Stack Developer specializing in building exceptional digital experiences",

   // About Section
   "about.title": "About Me",
   "about.p1":
     "I'm a passionate developer with a solid background in web technologies and a keen eye for design. With over 2 years of experience, I've worked on a variety of projects, ranging from small business websites to complex enterprise applications. I also specialize in creating high-performing and attractive e-commerce websites designed to optimize the user experience and boost online sales.",
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
    "nav.contact": "Contacto",

      // Hero Section
    "hero.title": "Hola, soy",
    "hero.subtitle": "Desarrollador Full Stack especializado en crear experiencias digitales excepcionales",

    // About Section
    "about.title": "Sobre Mí",
    "about.p1":
      "Soy un desarrollador apasionado con una sólida formación en tecnologías web y un buen ojo para el diseño. Con más de 2 años de experiencia, he trabajado en una variedad de proyectos, desde sitios web para pequeñas empresas hasta aplicaciones empresariales complejas. También me especializo en crear sitios web de comercio electrónico atractivos y de alto rendimiento, diseñados para optimizar la experiencia del usuario y aumentar las ventas en línea.",
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
    "nav.contact": "Contato",

        // Hero Section
        "hero.title": "Olá, eu sou",
        "hero.subtitle": "Desenvolvedor Full Stack especializado na criação de experiências digitais excepcionais",
    
        // About Section
        "about.title": "Sobre Mim",
        "about.p1":
          "Sou um desenvolvedor apaixonado com uma sólida formação em tecnologias web e um olhar atento para o design. Com mais de 2 anos de experiência, trabalhei em uma variedade de projetos, desde sites para pequenas empresas até aplicações empresariais complexas. Também me especializo na criação de sites de comércio eletrônico atrativos e de alto desempenho, projetados para otimizar a experiência do usuário e aumentar as vendas online.",
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
