import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="max-w-screen-lg flex flex-col justify-center">
      <Navbar />
      <Hero />

      <div id="tech-stack">
        <h2>Tech Stack</h2>
        <div id="tech-stack-icon"></div>
        <div id="tech-stack-icon"></div>
        <div id="tech-stack-icon"></div>
      </div>
    </div>
  );
}
