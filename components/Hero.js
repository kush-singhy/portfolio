'use client';
import TechStack from '@/components/TechStack';
import Image from 'next/image';
import { motion } from 'motion/react';

import SocialIcon from '@/components/SocialIcon';
import heroImage from '@/assets/hero-image.jpg';
import { FiGithub } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';
import { FaMediumM } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { FiCalendar } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

export default function Hero() {
  return (
    <div id="hero" className="flex flex-col items-center mb-9 mt-36">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-5xl font-semibold leading-relaxed text-center"
      >
        Hi, I&apos;m Kush ✌🏼
      </motion.h1>
      <motion.p
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-2xl max-w-lg mb-5 text-center"
      >
        A software developer who likes making pretty apps and running really
        far.
      </motion.p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        id="social-icons"
        className="flex gap-3 mb-8"
      >
        <SocialIcon
          icon={<FiGithub className="w-5 h-5" />}
          text="Code"
          url="https://github.com/kush-singhy"
        />
        <SocialIcon
          icon={<FiYoutube className="w-5 h-5" />}
          text="Videos"
          url="https://www.youtube.com/@kushsinghy"
        />
        <SocialIcon
          icon={<FiLinkedin className="w-5 h-5" />}
          text="Work"
          url="https://www.linkedin.com/in/kush-singhy/"
        />
        <SocialIcon
          icon={<FaMediumM className="w-5 h-5" />}
          text="Writing"
          url="https://medium.com/@kushsinghy02"
        />
      </motion.div>
      <div id="hero-image" className="flex justify-evenly items-center gap-7">
        <motion.div
          id="age"
          initial={{ scale: 0, x: -100 }}
          animate={{ scale: 1, x: 0 }}
          className="flex gap-2 min-w-40 justify-end items-center"
        >
          <span className="font-bold">22-years old</span>
          <FiCalendar className="w-6 h-6" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-56 h-56 rounded-full mb-4 overflow-hidden shadow-[0px_4px_10px_rgba(0,0,0,0.2)]"
        >
          <Image src={heroImage} alt="Kush Singhy" layout="fit" />
        </motion.div>
        <motion.div
          id="location"
          initial={{ scale: 0, x: 100 }}
          animate={{ scale: 1, x: 0 }}
          className="flex gap-2 min-w-40 justify-start items-center"
        >
          <FiMapPin className="w-6 h-6" />
          <span className="font-bold">Sydney, Australia</span>
        </motion.div>
      </div>
    </div>
  );
}
