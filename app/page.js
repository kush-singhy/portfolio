import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="mx-auto antialiased relative">
      <Navbar />
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
    </div>
  );
}
