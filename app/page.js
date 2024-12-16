import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="mx-auto antialiased">
      <Navbar />
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
    </div>
  );
}

function Divider() {
  return <hr className="border-t border-gray-400 my-20" />;
}
