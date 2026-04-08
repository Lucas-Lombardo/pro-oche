"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#0f1a2a]" />

      {/* Subtle blue ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-glow/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <h1 className="font-[family-name:var(--font-display)] text-6xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-6">
            <span className="text-white">YOUR HOME.</span>
            <br />
            <span className="gold-gradient">YOUR STAGE.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed">
            The premium all-in-one dart oche. LED-lit, foldable, and
            competition-ready. Transform any room into a pro darts stage in
            seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#buy"
              className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-4 rounded-full text-base transition-all hover:shadow-[0_0_30px_rgba(200,168,78,0.4)] inline-flex items-center justify-center gap-2"
            >
              Order Now
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#features"
              className="border border-white/20 hover:border-white/40 text-white font-medium px-8 py-4 rounded-full text-base transition-all inline-flex items-center justify-center"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-glow/20 rounded-2xl blur-[60px] scale-90" />
            <Image
              src="/images/oche-not-deployed.jpg"
              alt="Pro Oche dart setup with LED backlighting"
              width={600}
              height={800}
              className="relative rounded-2xl shadow-2xl object-cover max-h-[70vh] w-auto"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
