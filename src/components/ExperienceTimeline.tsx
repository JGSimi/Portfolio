interface Experience {
  title: string
  company: string
  period: string
  description: string[]
  skills: string[]
}

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <section className="w-full max-w-4xl mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8 dark:text-zinc-100 text-zinc-800">
        Experiência Profissional
      </h2>
      
      <div className="relative">
        {/* Linha vertical da timeline */}
        <div className="absolute left-4 top-5 bottom-5 w-0.5 
          dark:bg-zinc-800 bg-zinc-200" aria-hidden="true" />

        {experiences.map((experience, index) => (
          <div key={index} className="relative pl-12 pb-12 group">
            {/* Círculo indicador */}
            <div className="absolute left-2 w-4 h-4 rounded-full mt-2 
              dark:bg-zinc-800 bg-zinc-200 border-2 
              dark:border-zinc-700 border-zinc-300
              group-hover:border-primary-main transition-colors" 
              aria-hidden="true" />

            <div className="group-hover:translate-x-1 transition-transform">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
                <h3 className="text-lg font-semibold 
                  dark:text-zinc-100 text-zinc-800">{experience.title}</h3>
                <span className="text-sm dark:text-zinc-400 text-zinc-600">
                  {experience.company}
                </span>
                <span className="text-sm dark:text-zinc-500 text-zinc-500">
                  {experience.period}
                </span>
              </div>

              <div className="space-y-2">
                {experience.description.map((item, idx) => (
                  <p key={idx} className="dark:text-zinc-400 text-zinc-600">
                    {item}
                  </p>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 rounded-full
                      dark:bg-zinc-800 dark:text-zinc-300 
                      bg-zinc-100 text-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 