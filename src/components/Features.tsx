"use client";

import { motion } from "framer-motion";
import { FadeInWhenVisible } from "./FadeInWhenVisible";
import { TiltCard } from "./TiltCard";

const features = [
  {
    title: "Scroll storyboards",
    description: "Pin text while scenes change. Direct the narrative per scroll notch.",
  },
  {
    title: "Micro-interactions",
    description: "Hover lift, glassmorphism, responsive glow for CTA and cards.",
  },
  {
    title: "Cinematic gradients",
    description: "Layered mists, soft glows, and parallax background motion.",
  },
  {
    title: "Showcase ready",
    description: "Embed video loops, 3D mockups, or auto-rotating UI sequences.",
  },
  {
    title: "Performance-aware",
    description: "Lenis smooth scroll, consistent easings, mobile-tuned distances.",
  },
  {
    title: "Composable",
    description: "Animation helpers for staggered text, in-view fades, and tilt.",
  },
];

export function Features() {
  return (
    <div className="flex flex-col gap-6">
      <FadeInWhenVisible>
        <p className="text-sm uppercase tracking-[0.22em] text-white/60">Capabilities</p>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
          Feature grid with hover energy.
        </h2>
      </FadeInWhenVisible>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            <TiltCard>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#6a7dff] to-[#4de0ff]" />
                  {feature.title}
                </div>
                <p className="text-base text-white/80">{feature.description}</p>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

