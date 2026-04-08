"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Pro Oche"
            width={140}
            height={50}
            className="h-10 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#gallery" className="hover:text-white transition-colors">
            Gallery
          </a>
          <a href="#specs" className="hover:text-white transition-colors">
            Specs
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </div>

        <a
          href="#buy"
          className="bg-gold hover:bg-gold-light text-black font-semibold px-6 py-2.5 rounded-full text-sm transition-all hover:shadow-[0_0_20px_rgba(200,168,78,0.3)]"
        >
          Order Now
        </a>
      </div>
    </motion.nav>
  );
}
