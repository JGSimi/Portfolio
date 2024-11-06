interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl
}: ProjectCardProps) {
  const buttonBaseClasses = `
    flex items-center gap-2 px-4 py-2 rounded-md transition-colors
    dark:text-zinc-300 dark:hover:text-primary-light dark:hover:bg-zinc-700/50
    text-zinc-700 hover:text-primary-dark hover:bg-zinc-200/50
  `

  return (
    <article className="group relative rounded-lg p-6 transition-all duration-300
      dark:border-zinc-800 dark:bg-zinc-800/50 dark:hover:bg-zinc-700/30 dark:hover:border-zinc-700
      border-zinc-200 bg-zinc-50/50 hover:bg-zinc-100/80 hover:border-zinc-300
      hover:shadow-lg dark:hover:shadow-primary-main/20 hover:shadow-primary-main/10">
      <div className="absolute inset-0 bg-gradient-to-r rounded-lg transition-opacity duration-300
        dark:from-primary-main/20 dark:to-transparent from-primary-main/10 to-transparent
        opacity-0 group-hover:opacity-100" 
        aria-hidden="true" />

      <div className="relative">
        <h3 className="text-xl font-bold mb-3 transition-colors
          dark:text-zinc-100 dark:group-hover:text-primary-light
          text-zinc-800 group-hover:text-primary-dark">{title}</h3>
        
        <p className="mb-4 line-clamp-3
          dark:text-zinc-400 text-zinc-600">{description}</p>

        <ul className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Tecnologias utilizadas">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 rounded-full text-sm transition-all duration-200
                dark:bg-zinc-700/30 dark:text-zinc-300 dark:hover:bg-zinc-700/50 dark:hover:text-primary-light
                bg-zinc-200/50 text-zinc-700 hover:bg-zinc-200 hover:text-primary-dark"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 items-center">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonBaseClasses}
            aria-label="Ver código no GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonBaseClasses}
              aria-label="Ver demonstração do projeto"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
} 