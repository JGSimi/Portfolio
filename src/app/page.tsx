import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import ExperienceTimeline from "@/components/ExperienceTimeline"
import Certifications from '@/components/Certifications'
import { profileData } from "@/data/profile"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <ExperienceTimeline experiences={profileData.experiences} />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  )
}
