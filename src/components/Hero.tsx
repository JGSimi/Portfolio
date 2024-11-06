"use client"

import { animate } from "motion"
import { useEffect, useRef } from "react"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profileData } from '@/data/profile'

export default function Hero() {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (elementRef.current) {
      animate(
        elementRef.current,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.8, easing: "ease-out" }
      )
    }
  }, [])

  return (
      <section 
        className="min-h-[calc(100vh-5rem)] flex items-center justify-center"
      >
        <div className="text-center">
          <h1 
            className="text-6xl font-bold mb-4 animate-fade-in text-text-light dark:text-text-dark"
          >
            {profileData.name}
          </h1>
          <h2 className="text-2xl mb-6 text-text-light/90 dark:text-text-dark/90">
            {profileData.role}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-text-light/80 dark:text-text-dark/80">
            Transformando ideias em soluções digitais inovadoras
          </p>
          <div className="flex gap-6 justify-center items-center">
            <a 
              href="#projetos" 
              className="px-8 py-3 bg-primary-light text-white dark:bg-primary-dark font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              Ver Projetos
            </a>
            <div className="flex gap-4">
              <a 
                href="https://github.com/JGSimi" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-text-light/10 dark:bg-text-dark/10 rounded-full hover:bg-text-light/20 dark:hover:bg-text-dark/20 transition-all text-text-light dark:text-text-dark"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/joaosimi" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-text-light/10 dark:bg-text-dark/10 rounded-full hover:bg-text-light/20 dark:hover:bg-text-dark/20 transition-all text-text-light dark:text-text-dark"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}