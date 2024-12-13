import Image from 'next/image';

import Title from '@/components/Title.js';
import reactIcon from '@/assets/react.svg';
import tailwindIcon from '@/assets/tailwind.svg';
import javascriptIcon from '@/assets/javascript.svg';
import nodeIcon from '@/assets/nodejs.svg';
import postgresqlIcon from '@/assets/postgres.svg';
import figmaIcon from '@/assets/figma.svg';
import ec2Icon from '@/assets/ec2.svg';
import route53Icon from '@/assets/route53.svg';

export default function TechStack() {
  return (
    <div id="tech-stack" className="flex flex-col items-center justify-center">
      <Title text="Tech Stack" />
      <div id="tech-stack-icons" className="grid grid-cols-8 gap-4">
        <TechStackIcon src={javascriptIcon} text="Javascript" />
        <TechStackIcon src={reactIcon} text="React" />
        <TechStackIcon src={tailwindIcon} text="TailwindCSS" />
        <TechStackIcon src={nodeIcon} text="NodeJS" />
        <TechStackIcon src={postgresqlIcon} text="PostgreSQL" />
        <TechStackIcon src={figmaIcon} text="Figma" />
        <TechStackIcon src={ec2Icon} text="AWS EC2" />
        <TechStackIcon src={route53Icon} text="AWS Route 53" />
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
