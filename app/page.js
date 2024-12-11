import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-screen-lg flex flex-col justify-center">
      <nav className="flex items-center justify-center p-11">
        <div
          id="nav"
          className="flex gap-10 px-6 py-3 border border-slate-400 rounded-full"
        >
          <Link href="#">Home</Link>
          <Link href="#">Experience</Link>
          <Link href="#">Projects</Link>
          <Link href="#">Runs</Link>
        </div>
      </nav>
      <div id="hero" className="flex justify-between py-20 max-w-4xl">
        <div
          id="hero-text"
          className="flex-initial w-7/12 flex flex-col justify-center"
        >
          <h1 className="text-5xl leading-relaxed">Hi, Kush here ✌🏼</h1>
          <p className="text-2xl">
            I&apos;m obsessed with understanding user needs, focusing on
            what&apos;s important, and presenting my work beautifully.
          </p>
          <div id="social-icons">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div
          id="hero-image"
          className="flex-initial w-5/12 flex flex-col justify-center items-center"
        >
          <div className="w-44 h-44 border border-slate-400 rounded-full mb-5"></div>
          <div id="location">Sydney, Australia</div>
        </div>
      </div>

      <div id="tech-stack">
        <h2>Tech Stack</h2>
        <div id="tech-stack-icon"></div>
        <div id="tech-stack-icon"></div>
        <div id="tech-stack-icon"></div>
      </div>
    </div>
  );
}
