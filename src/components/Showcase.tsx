"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const showcaseItems = [
  {
    image: "/images/oche-not-deployed.jpg",
    title: "Stage Presence",
    description:
      "The blue LED backlighting transforms your space into a professional darts arena. Every throw feels like you're on the big stage.",
    align: "right" as const,
  },
  {
    image: "/images/oche-half-deployed.jpg",
    title: "Designed to Disappear",
    description:
      "When the game's over, fold it flat and store it away. The sleek black finish means it looks great whether it's set up or tucked in a corner.",
    align: "left" as const,
  },
  {
    image: "/images/oche-deployed.jpg",
    title: "The Full Experience",
    description:
      "From dartboard mount to oche line — the full regulation length. Integrated dart holder keeps your arrows within reach.",
    align: "right" as const,
  },
];

export default function Showcase() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {showcaseItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
          >
            <div
              className={`relative ${
                item.align === "left" ? "lg:order-2" : ""
              }`}
            >
              <div className="absolute inset-0 bg-blue-glow/10 rounded-2xl blur-[40px] scale-95" />
              <Image
                src={item.image}
                alt={item.title}
                width={700}
                height={500}
                className="relative rounded-2xl shadow-xl object-cover w-full aspect-[3/4]"
              />
            </div>
            <div
              className={`${item.align === "left" ? "lg:order-1" : ""}`}
            >
              <h3 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-white mb-4">
                {item.title}
              </h3>
              <p className="text-white/50 text-lg leading-relaxed max-w-md">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
