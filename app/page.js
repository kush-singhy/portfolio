import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import TechStack from '@/components/TechStack';

export default function Home() {
  return (
    <div className="max-w-screen-lg flex flex-col justify-center">
      <Navbar />
      <Hero />
      <TechStack />
    </div>
  );
}
