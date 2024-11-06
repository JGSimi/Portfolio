"use client"

import { profileData } from '@/data/profile'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { 
  SiNextdotjs, SiNodedotjs, SiTailwindcss, SiTypescript, 
  SiReact, SiC, SiPython, SiJavascript, SiHtml5,
  SiGit, SiFigma, SiUnrealengine
} from 'react-icons/si'

const techIcons = {
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Tailwind": SiTailwindcss,
  "TypeScript": SiTypescript,
  "React": SiReact,
  "C": SiC,
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "HTML/CSS": SiHtml5,
  "Git": SiGit,
  "Figma": SiFigma,
  "Unreal Engine": SiUnrealengine
}

export default function Skills() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section id="habilidades" className="w-full py-20 px-4">
      <div 
        ref={elementRef}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-16">Tecnologias</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {profileData.skills.technical.map((skill) => {
            const Icon = techIcons[skill.name as keyof typeof techIcons]
            return (
              <a 
                key={skill.name}
                href={skill.docUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer"
              >
                <Icon className="w-12 h-12 mb-4 group-hover:text-blue-400 transition-colors" />
                <span className="text-lg font-medium">{skill.name}</span>
              </a>
            )
          })}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {profileData.skills.soft.map((skill) => (
              <span 
                key={skill}
                className="px-6 py-2 bg-white/5 rounded-full hover:bg-white/10 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 