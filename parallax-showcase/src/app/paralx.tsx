"use client";

import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-900 to-black">
      <Parallax speed={-20}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-white"
        >
          Parallax + Motion
        </motion.h1>
      </Parallax>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -200 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-lg text-gray-300 mt-4"
      >
        Smooth scroll-based animations ✨
      </motion.p>
    </section>
  );
}
