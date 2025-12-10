"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GlassCard } from "./GlassCard";

const testimonials = [
  {
    name: "Nova Launch",
    title: "Product Studio",
    quote:
      "The scroll-story flow feels like a film reel. Our demo jumps from scene to scene without losing pace.",
  },
  {
    name: "Horizon UX",
    title: "Design Lead",
    quote:
      "The glassmorphism and glows feel premium, but still performant. Hover micro-interactions sealed the vibe.",
  },
  {
    name: "Orbit Labs",
    title: "Engineering",
    quote:
      "Smooth scroll + Framer Motion = zero jank. The staggered text and pinned frames make the narrative clear.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm uppercase tracking-[0.22em] text-white/60">Testimonials</p>
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
        Voices from the launchpad.
      </h2>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <GlassCard className="relative overflow-hidden border border-white/10 p-8">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#6a7dff]/20 blur-3xl" />
              <div className="absolute -right-12 bottom-0 h-48 w-48 rounded-full bg-[#4de0ff]/20 blur-3xl" />
              <div className="relative flex flex-col gap-4">
                <p className="text-lg text-white/80 md:text-xl">“{current.quote}”</p>
                <div className="text-sm font-semibold text-white">
                  {current.name} <span className="text-white/60">— {current.title}</span>
                </div>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to testimonial ${i + 1}`}
                      onClick={() => setIndex(i)}
                      className={`h-2 w-8 rounded-full transition ${
                        i === index ? "bg-white" : "bg-white/30 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

