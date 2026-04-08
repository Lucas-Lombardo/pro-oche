"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <div className="mb-8">
          <Image
            src="/images/logo.png"
            alt="Pro Oche"
            width={160}
            height={60}
            className="mx-auto h-12 w-auto"
          />
        </div>

        <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-white mb-4">
          ORDER CONFIRMED
        </h1>
        <p className="text-white/50 text-lg mb-8 leading-relaxed">
          Thank you for your purchase! You&apos;ll receive a confirmation email
          shortly with your order details and tracking information.
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
        >
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
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Back to home
        </a>
      </motion.div>
    </div>
  );
}
