"use client";

import { motion } from "framer-motion";

const specs = [
  { label: "Setup Type", value: "Foldable dartboard stand + throwing mat" },
  { label: "Lighting", value: "Built-in blue LED strip" },
  { label: "Material", value: "Premium textured composite" },
  { label: "Finish", value: "Matte black with gold branding" },
  { label: "Throwing Distance", value: "Regulation oche distance (7ft 9¼in)" },
  { label: "Dart Holder", value: "Integrated shelf for 2 sets" },
  { label: "Storage", value: "Folds flat for compact storage" },
  { label: "Dartboard", value: "Not included — fits standard boards" },
];

export default function Specs() {
  return (
    <section id="specs" className="py-32 relative grid-pattern">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl text-white mb-4">
            SPECIFICATIONS
          </h2>
          <p className="text-white/50 text-lg">
            Built to professional standards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden"
        >
          {specs.map((spec, i) => (
            <div
              key={spec.label}
              className={`flex justify-between items-center px-8 py-5 ${
                i !== specs.length - 1 ? "border-b border-white/[0.06]" : ""
              }`}
            >
              <span className="text-white/40 text-sm font-medium uppercase tracking-wider">
                {spec.label}
              </span>
              <span className="text-white font-medium text-right">
                {spec.value}
              </span>
            </div>
          ))}
        </motion.div>

        <p className="text-center text-white/30 text-sm mt-6">
          Exact dimensions and weight to be confirmed. Contact us for details.
        </p>
      </div>
    </section>
  );
}
