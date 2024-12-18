'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import houseIcon from '@/assets/houseIcon.svg';
import treeIcon from '@/assets/treeIcon.svg';

export default function Navbar() {
  return (
    <div className="flex justify-center">
      <div className="fixed mt-10 z-10">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{}}
          className="flex gap-8 px-6 py-2 rounded-full font-bold bg-black text-white shadow-md shadow-gray-400"
        >
          <Image src={houseIcon} alt="house-icon" />
          <Link href="#hero">Home</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#runs">Runs</Link>
          <Image src={treeIcon} alt="tree-icon" />
        </motion.nav>
      </div>
    </div>
  );
}
