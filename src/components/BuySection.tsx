"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BuySection() {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="buy" className="py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-glow/10 rounded-2xl blur-[40px] scale-90" />
            <Image
              src="/images/oche-not-deployed.jpg"
              alt="Pro Oche"
              width={500}
              height={600}
              className="relative rounded-2xl object-cover w-full"
            />
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl text-white mb-2">
              PRO OCHE
            </h2>
            <p className="text-white/50 mb-6">
              Complete dart oche setup with LED lighting
            </p>

            <div className="mb-8">
              <span className="text-5xl font-bold gold-gradient">£70</span>
              <span className="text-white/30 text-sm ml-2">+ shipping</span>
            </div>

            <div className="space-y-3 mb-8">
              {[
                "Foldable dartboard stand",
                "Built-in LED backlighting",
                "Full-length regulation mat",
                "Integrated dart holder",
                "Gold ProOche branding",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-gold shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white/70">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-gold hover:bg-gold-light text-black font-bold px-8 py-4 rounded-full text-lg transition-all hover:shadow-[0_0_30px_rgba(200,168,78,0.4)] disabled:opacity-50 disabled:cursor-wait"
            >
              {loading ? "Redirecting..." : "Buy Now — £70"}
            </button>

            <div className="flex items-center justify-center gap-6 mt-6 text-white/30 text-xs">
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Secure Payment
              </div>
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8"
                  />
                </svg>
                UK & Europe Shipping
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
