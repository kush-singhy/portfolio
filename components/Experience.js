'use client';

import { motion } from 'motion/react';
import Title from '@/components/Title';
import ExperienceItem from '@/components/ExperienceItem';
import unswLogo from '@/assets/unsw.svg';
import westpacLogo from '@/assets/westpac.svg';

export default function Experience() {
  return (
    <div id="experience" className="flex flex-col items-center gap-8 mb-32">
      <Title text="Experience" />
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-tl before:from-transparent before:via-slate-300 before:to-transparent"
      >
        <ExperienceItem
          title="Westpac"
          role="UI Developer"
          description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Duis
          vehicula consequat purus, nec venenatis ligula."
          logo={westpacLogo}
        />

        <ExperienceItem
          title="UNSW"
          role="B. Computer Science & B. Actuarial Studies"
          description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Duis
                    vehicula consequat purus, nec venenatis ligula."
          logo={unswLogo}
        />
      </motion.div>
    </div>
  );
}
