import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <div className="max-w-screen-lg flex flex-col justify-center">
      <Navbar />
      <Hero />
      <TechStack />
      <Divider />
      <Experience />
    </div>
  );
}


function Divider() {
  return <hr className="border-t border-gray-400 my-20" />
}