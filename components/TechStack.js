import Image from 'next/image';

import reactIcon from '@/assets/react.svg';
import tailwindIcon from '@/assets/tailwind.svg';
import javascriptIcon from '@/assets/javascript.svg';
import nodeIcon from '@/assets/nodejs.svg';
import postgresqlIcon from '@/assets/postgres.svg';
import figmaIcon from '@/assets/figma.svg';

export default function TechStack() {
  return (
    <div
      id="tech-stack"
      className="flex flex-col items-center justify-center mb-32"
    >
      <h2 className="text-base font-bold mb-3">Current Technologies</h2>
      <div id="tech-stack-icons" className="grid grid-cols-6 gap-3">
        <TechStackIcon src={javascriptIcon} text="Javascript" />
        <TechStackIcon src={reactIcon} text="React" />
        <TechStackIcon src={tailwindIcon} text="TailwindCSS" />
        <TechStackIcon src={nodeIcon} text="NodeJS" />
        <TechStackIcon src={postgresqlIcon} text="PostgreSQL" />
        <TechStackIcon src={figmaIcon} text="Figma" />
      </div>
    </div>
  );
}

function TechStackIcon({ src, text }) {
  return (
    <div className="tech-stack-icon group">
      <Image src={src} alt={text} className="w-9 h-9" />

      <span className="tech-stack-text group-hover:scale-100">{text}</span>
    </div>
  );
}
