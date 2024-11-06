"use client"

import { profileData } from '@/data/profile'
import ProjectCard from './ProjectCard'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Projects() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section id="projetos">
      <div 
        ref={elementRef}
        className={`transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profileData.projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 