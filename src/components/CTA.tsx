"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-10 shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
      <motion.div
        className="absolute -left-10 top-0 h-52 w-52 rounded-full bg-[#6a7dff]/30 blur-3xl"
        animate={{ y: [0, -14, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-8 bottom-0 h-60 w-60 rounded-full bg-[#4de0ff]/25 blur-3xl"
        animate={{ y: [0, 18, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <div className="relative flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.22em] text-white/60">Final call</p>
        <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
          Ready to build a motion-first story?
        </h2>
        <p className="max-w-3xl text-base text-white/70 md:text-lg">
          Ship the cinematic flow: split-text hero, scroll-pinned story, glowing grid, and a
          high-engagement showcase. Everything here is ready to customize.
        </p>
        <div className="mt-2 flex flex-wrap gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6a7dff] to-[#4de0ff] px-6 py-3 text-base font-semibold text-black shadow-[0_12px_40px_rgba(80,130,255,0.35)] transition hover:scale-[1.02]"
          >
            Launch the build
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-base font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
          >
            Review the flow
          </a>
        </div>
      </div>
    </div>
  );
}

