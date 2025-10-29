'use client'

import type React from "react"
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [formError, setFormError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(false)
    setSubmitError(null)
    setSubmitSuccess(false)

    // ✅ Validation de base
    if (!formData.name || !formData.email || !formData.message) {
      setFormError(true)
      setTimeout(() => setFormError(false), 5000)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("https://formsubmit.co/ajax/sounesatchougo@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nom: formData.name,
          Email: formData.email,
          Message: formData.message,
          _subject: "📨 Nouveau message du portfolio",
          _captcha: "true",
        }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.message || "Erreur d’envoi du message")

      // ✅ Si OK → Réinitialisation du formulaire
      setFormData({ name: "", email: "", message: "" })
      setSubmitSuccess(true)

      // 🔥 Envoi automatique sur WhatsApp
      const whatsappMessage =
        `👋 Bonjour, je suis ${formData.name}.\n\n` +
        `📧 Email : ${formData.email}\n\n` +
        `💬 Message : ${formData.message}\n\n` +
        `Envoyé depuis ton portfolio.`

      window.open(
        `https://wa.me/22998123353?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank"
      )

      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error("❌ Erreur:", error)
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue lors de l’envoi du message. Veuillez réessayer."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Email",
      value: "Sounesatchougo@gmail.com",
      link: "mailto:Sounesatchougo@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Téléphone",
      value: "+22998123353",
      link: "tel:+22998123353",
    },
    {
      icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Localisation",
      value: "Cotonou, Bénin",
      link: "https://maps.google.com/?q=9C4H%2BF4V%2C+Cotonou",
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-8 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div
          className={`grid gap-6 transition-all duration-1000 lg:grid-cols-2 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Bloc gauche : infos de contact */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                {t("contact.title")}
              </h2>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg">
                {t("contact.subtitle")}
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 sm:gap-4 transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 group"
                >
                  <div className="rounded-full bg-primary/10 p-2 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    {info.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-medium transition-colors duration-300 group-hover:text-primary">
                      {info.title}
                    </h3>
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors duration-300 group-hover:text-primary/80"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloc droit : formulaire */}
          <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs sm:text-sm font-medium">
                    {t("contact.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t("contact.name")}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs sm:text-sm font-medium">
                    {t("contact.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("contact.email")}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs sm:text-sm font-medium">
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={8}
                  placeholder={t("contact.message")}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {formError && (
                <p className="text-center text-red-600 text-sm font-medium">
                  Veuillez remplir tous les champs requis.
                </p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              >
                {isSubmitting ? t("contact.sending") : t("contact.send")}
              </Button>
            </form>

            {submitSuccess && (
              <div className="rounded-lg bg-green-100 p-3 sm:p-4 text-green-800 dark:bg-green-900/30 dark:text-green-400 transition-all duration-500 animate-in fade-in slide-in-from-bottom-5">
                <p className="text-sm sm:text-base font-medium">{t("contact.success.title")}</p>
                <p className="text-xs sm:text-sm">{t("contact.success.message")}</p>
              </div>
            )}

            {submitError && (
              <div className="rounded-lg bg-red-100 p-3 sm:p-4 text-red-800 dark:bg-red-900/30 dark:text-red-400 transition-all duration-500 animate-in fade-in slide-in-from-bottom-5">
                <p className="text-sm sm:text-base font-medium">{t("contact.error.title")}</p>
                <p className="text-xs sm:text-sm">{submitError}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
