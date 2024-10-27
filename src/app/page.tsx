import AboutSection from "../app/components/About/AboutSection"
import HomeSection from "../app/components/Home/HomeSection"
import ProjectsSection from "../app/components/Project/ProjectsSection"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}
