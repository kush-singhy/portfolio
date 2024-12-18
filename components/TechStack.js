'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import reactIcon from '@/assets/react.svg';
import tailwindIcon from '@/assets/tailwind.svg';
import javascriptIcon from '@/assets/javascript.svg';
import nodeIcon from '@/assets/nodejs.svg';
import postgresqlIcon from '@/assets/postgres.svg';
import figmaIcon from '@/assets/figma.svg';

const containerVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0, y: 20 },
  visible: { scale: 1, y: 0 },
};

export default function TechStack() {
  return (
    <div
      id="tech-stack"
      className="flex flex-col items-center justify-center mb-32"
    >
      <motion.h2
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-base font-bold mb-3"
      >
        Current Technologies
      </motion.h2>
      <motion.div
        id="tech-stack-icons"
        className="grid grid-cols-6 gap-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TechStackIcon src={javascriptIcon} text="Javascript" />
        <TechStackIcon src={reactIcon} text="React" />
        <TechStackIcon src={tailwindIcon} text="TailwindCSS" />
        <TechStackIcon src={nodeIcon} text="NodeJS" />
        <TechStackIcon src={postgresqlIcon} text="PostgreSQL" />
        <TechStackIcon src={figmaIcon} text="Figma" />
      </motion.div>
    </div>
  );
}

function TechStackIcon({ src, text }) {
  return (
    <motion.div variants={itemVariants} className="tech-stack-icon group">
      <Image src={src} alt={text} className="w-9 h-9" />

      <span className="tech-stack-text group-hover:scale-100">{text}</span>
    </motion.div>
  );
}
