"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Does the Pro Oche include a dartboard?",
    answer:
      "No, the dartboard is not included. The Pro Oche is designed to work with any standard-size dartboard, giving you the freedom to choose your preferred board.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Under a minute. Simply unfold the stand, place it against the wall, and roll out the mat. No tools required.",
  },
  {
    question: "What are the dimensions when folded?",
    answer:
      "The Pro Oche folds flat for easy storage. Exact dimensions will be provided soon — it's designed to fit behind a door or in a wardrobe.",
  },
  {
    question: "How does the LED lighting work?",
    answer:
      "The built-in LED strip runs along the edges and is powered via USB. It creates a blue ambient glow that gives your setup that professional stage feel.",
  },
  {
    question: "Where do you ship to?",
    answer:
      "Shipping details will be announced soon. Sign up for updates to be the first to know when we launch.",
  },
  {
    question: "What is your returns policy?",
    answer:
      "We want you to be completely satisfied. Full returns policy details will be available at launch.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-white font-medium text-lg group-hover:text-gold transition-colors pr-4">
          {question}
        </span>
        <motion.svg
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-5 text-gold shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </motion.svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-white/50 pb-6 leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl text-white mb-4">
            FAQ
          </h2>
          <p className="text-white/50 text-lg">Got questions? We got answers.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
