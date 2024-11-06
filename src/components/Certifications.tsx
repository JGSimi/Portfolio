"use client"

import { profileData } from '@/data/profile'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { FaMedal, FaExternalLinkAlt } from 'react-icons/fa'

export default function Certifications() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section id="certificacoes" className="w-full py-20 px-4">
      <div 
        ref={elementRef}
        className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Certificações e Conquistas
        </h2>

        <div className="grid gap-8">
          {profileData.certifications.map((cert, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-xl transition-all
                dark:bg-zinc-800/50 bg-zinc-50
                hover:shadow-lg dark:hover:shadow-primary-main/20"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full 
                  dark:bg-primary-main/20 bg-primary-main/10">
                  <FaMedal className="w-6 h-6 text-primary-main" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <span className="text-sm opacity-70">{cert.date}</span>
                  </div>
                  
                  <p className="text-lg mb-3 opacity-80">
                    {cert.organization}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full
                          dark:bg-zinc-700 bg-zinc-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-main hover:underline"
                  >
                    Ver Credencial <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 