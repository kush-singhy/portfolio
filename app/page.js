import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Runs from '@/components/Runs';

export default function Home() {
  return (
    <div className="mx-auto px-6">
      <Navbar />
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Runs />
    </div>
  );
}
