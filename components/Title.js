'use client';
import { motion } from 'motion/react';

export default function Title({ text }) {
  return (
    <motion.h2
      initial={{ scale: 0, y: 200 }}
      animate={{ scale: 1, y: 0 }}
      className="text-2xl font-semibold mb-6"
    >
      {text}
    </motion.h2>
  );
}
