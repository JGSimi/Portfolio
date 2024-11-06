"use client"

import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { profileData } from '@/data/profile'
import { animate } from 'motion'
import { useEffect, useRef } from 'react'

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.contact-card')
      cards.forEach((card, index) => {
        animate(
          card,
          { opacity: [0, 1], y: [20, 0] },
          { delay: index * 0.1, duration: 0.5, easing: 'ease-out' }
        )
      })
    }
  }, [])

  const contactMethods = [
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: profileData.contact.phone,
      href: `https://wa.me/${profileData.contact.phone.replace(/\D/g, '')}`,
      color: "hover:text-green-500"
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: profileData.contact.email,
      href: `mailto:${profileData.contact.email}`,
      color: "hover:text-red-500"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "JGSimi",
      href: "https://github.com/JGSimi",
      color: "hover:text-purple-500"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "joaosimi",
      href: "https://linkedin.com/in/joao-simi",
      color: "hover:text-blue-500"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Localização",
      value: profileData.location,
      href: `https://earth.google.com/web/search/${profileData.location}`,
      color: "hover:text-yellow-500"
    }
  ]

  return (
    <section id="contato" className="w-full py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-text-light dark:text-text-dark">
          Vamos Conversar?
        </h2>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactMethods.map((method) => (
            <div
              key={method.label}
              className="contact-card relative"
              style={{ opacity: 0 }}
            >
              {method.href ? (
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-6 bg-text-light/5 dark:bg-text-dark/5 rounded-xl 
                    border border-text-light/10 dark:border-text-dark/10 
                    transition-all hover:scale-105 ${method.color}`}
                >
                  <ContactMethodContent method={method} />
                </a>
              ) : (
                <div className={`p-6 bg-text-light/5 dark:bg-text-dark/5 rounded-xl 
                  border border-text-light/10 dark:border-text-dark/10 
                  transition-all hover:scale-105 ${method.color}`}
                >
                  <ContactMethodContent method={method} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-text-light/80 dark:text-text-dark/80">
          <p className="text-lg">
            Estou sempre aberto a novas oportunidades e parcerias.
            <br />
            Não hesite em entrar em contato!
          </p>
        </div>
      </div>
    </section>
  )
}

function ContactMethodContent({ method }: { method: any }) {
  return (
    <>
      <method.icon className="w-8 h-8 mb-4" />
      <h3 className="font-medium text-lg mb-2 text-text-light dark:text-text-dark">
        {method.label}
      </h3>
      <p className="text-text-light/80 dark:text-text-dark/80">
        {method.value}
      </p>
    </>
  )
} 