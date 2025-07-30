import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}