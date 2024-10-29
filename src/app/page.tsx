import HomeSection from '../app/components/Home/HomeSection';
import AboutSection from '../app/components/About/AboutSection';
import ExperienceSection from '../app/components/Experience';
import ProjectSection from '../app/components/Project/ProjectSection';

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl '>
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
    </main>
  );
}
