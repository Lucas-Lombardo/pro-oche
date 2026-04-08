"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/oche-not-deployed.jpg", alt: "Pro Oche front view with dartboard and LED glow" },
  { src: "/images/oche-half-deployed.jpg", alt: "Pro Oche folded for storage" },
  { src: "/images/oche-deployed.jpg", alt: "Pro Oche fully deployed with throwing mat" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl text-white mb-4">
            SEE IT IN ACTION
          </h2>
          <p className="text-white/50 text-lg">
            Fits right into your home setup.
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative rounded-2xl overflow-hidden max-w-3xl mx-auto blue-glow">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-2xl"
            >
              <source src="/images/promo-video.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Images grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative overflow-hidden rounded-2xl group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={500}
                className="object-cover w-full aspect-[3/4] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
