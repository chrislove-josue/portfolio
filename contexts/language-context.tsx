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
      "Je suis un développeur passionné avec une solide formation en technologies web et un œil attentif pour le design. Avec plus de 5 ans d'expérience, j'ai travaillé sur une variété de projets, des sites web pour petites entreprises aux applications d'entreprise complexes.",
    "about.p2":
      "Mon parcours dans la technologie a commencé lorsque j'ai construit mon premier site web à 15 ans. Depuis, je n'ai cessé d'apprendre et de faire évoluer mes compétences pour rester à la pointe du développement web. Je crois en l'écriture de code propre et maintenable et en la création d'expériences utilisateur intuitives.",
    "about.p3":
      "Quand je ne code pas, vous pouvez me trouver en randonnée, en train de lire des romans de science-fiction ou d'expérimenter de nouvelles recettes en cuisine.",
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
    "projects.code": "Code",
    "projects.demo": "Démo",

    // Skills Section
    "skills.title": "Compétences & Expertise",
    "skills.subtitle":
      "J'ai développé un ensemble diversifié de compétences tout au long de ma carrière. Voici un aperçu de mon expertise technique.",

    // Contact Section
    "contact.title": "Contactez-moi",
    "contact.subtitle":
      "Vous avez un projet en tête ou souhaitez discuter d'opportunités potentielles ? N'hésitez pas à me contacter !",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Envoyer le message",
    "contact.sending": "Envoi en cours...",
    "contact.success.title": "Merci pour votre message !",
    "contact.success.message": "Votre message a été envoyé avec succès. Je vous répondrai dès que possible.",
    "contact.error.title": "Erreur",

    // Footer
    "footer.rights": "Tous droits réservés.",
  },

  fon: {
    // Navigation
    "nav.about": "Xo ɖo ku",
    "nav.projects": "Azɔn ce lɛ",
    "nav.skills": "Nukunnumɔ jɛ nu mɛ lɛ",
    "nav.contact": "Ylɔ mi",

    // Hero Section
    "hero.title": "Kudo, nye wɛ nyí",
    "hero.subtitle": "Mɛ e nɔ blo azɔn internet tɔn ganji",

    // About Section
    "about.title": "Xo ɖo ku ce",
    "about.p1":
      "Un nyí mɛ e nɔ blo azɔn internet tɔn bo nɔ jlo na mɔ nǔ e nyɔ. Un ko wa azɔn na xwe atɔn bo ko blo azɔn susu.",
    "about.p2": "Un jɛ azɔn internet tɔn jí hwenu e un ɖo xwe wuatɔn. Sín hwenu enɛ, un nɔ plɔn nǔ yɔyɔ lɛ.",
    "about.p3": "Hwenu e un ma nɔ blo azɔn internet tɔn ǎ, un nɔ yi zɔn, un nɔ xa wema alǒ un nɔ ɖa nǔ.",
    "about.resume": "Wema azɔn ce tɔn",

    // Projects Section
    "projects.title": "Azɔn ce lɛ",
    "projects.subtitle": "Azɔn ɖé lɛ e un ko wa. Azɔn ɖokpó ɖokpó ɖo nǔ e un plɔn sín.",
    "projects.ecommerce.title": "Sinsɛn sɔ nǔ tɔn",
    "projects.ecommerce.description": "Sinsɛn sɔ nǔ tɔn e ɖo nǔ susu.",
    "projects.taskapp.title": "Sinsɛn azɔn tɔn",
    "projects.taskapp.description": "Sinsɛn azɔn tɔn e nɔ ná mɛ lɛ blo azɔn kplé.",
    "projects.weather.title": "Sinsɛn jijɛ tɔn",
    "projects.weather.description": "Sinsɛn e nɔ ná mɛ lɛ mɔ jijɛ tɛnmɛ tɛnmɛ tɔn.",
    "projects.code": "Wěma",
    "projects.demo": "Kpɔn",

    // Skills Section
    "skills.title": "Nukunnumɔ jɛ nu mɛ lɛ",
    "skills.subtitle": "Un ko plɔn nǔ susu. Nukunnumɔ jɛ nu mɛ ce lɛ ɖíe.",

    // Contact Section
    "contact.title": "Ylɔ mi",
    "contact.subtitle": "A ɖo azɔn ɖé a jlo na wa a? Ylɔ mi!",
    "contact.name": "Nyíkɔ",
    "contact.email": "Email",
    "contact.message": "Wɛn",
    "contact.send": "Sɛ wɛn ɔ do",
    "contact.sending": "E ɖo wɛn ɔ sɛ do wɛ...",
    "contact.success.title": "Akpé!",
    "contact.success.message": "Un ko mɔ wɛn towe. Un na yí gbe na we kpɛɖé.",
    "contact.error.title": "Nǔ ɖé jɛ",

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
      "I'm a passionate developer with a strong foundation in web technologies and a keen eye for design. With over 5 years of experience, I've worked on a variety of projects from small business websites to complex enterprise applications.",
    "about.p2":
      "My journey in tech began when I built my first website at 15. Since then, I've been constantly learning and evolving my skills to stay at the forefront of web development. I believe in writing clean, maintainable code and creating intuitive user experiences.",
    "about.p3":
      "When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen.",
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
      "Soy un desarrollador apasionado con una sólida formación en tecnologías web y un buen ojo para el diseño. Con más de 5 años de experiencia, he trabajado en una variedad de proyectos, desde sitios web para pequeñas empresas hasta aplicaciones empresariales complejas.",
    "about.p2":
      "Mi viaje en la tecnología comenzó cuando construí mi primer sitio web a los 15 años. Desde entonces, he estado constantemente aprendiendo y evolucionando mis habilidades para mantenerme a la vanguardia del desarrollo web. Creo en escribir código limpio y mantenible y en crear experiencias de usuario intuitivas.",
    "about.p3":
      "Cuando no estoy programando, puedes encontrarme haciendo senderismo, leyendo novelas de ciencia ficción o experimentando con nuevas recetas en la cocina.",
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
      "Sou um desenvolvedor apaixonado com uma base sólida em tecnologias web e um olhar atento para o design. Com mais de 5 anos de experiência, trabalhei em uma variedade de projetos, desde sites para pequenas empresas até aplicações empresariais complexas.",
    "about.p2":
      "Minha jornada na tecnologia começou quando construí meu primeiro site aos 15 anos. Desde então, tenho aprendido constantemente e evoluído minhas habilidades para me manter na vanguarda do desenvolvimento web. Acredito em escrever código limpo e sustentável e criar experiências de usuário intuitivas.",
    "about.p3":
      "Quando não estou programando, você pode me encontrar fazendo trilhas, lendo romances de ficção científica ou experimentando novas receitas na cozinha.",
    "about.resume": "Baixar Currículo",

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
