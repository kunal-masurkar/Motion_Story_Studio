"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

const chapters = [
  {
    title: "Set the scene",
    body: "Open with a cinematic hero. Layered gradients, parallax glow, and a confident headline.",
  },
  {
    title: "Guide the narrative",
    body: "Pin text while visuals change. Each scroll notch swaps the frame like a storyboard.",
  },
  {
    title: "Zoom into detail",
    body: "Reveal components with depth: glass, glows, subtle tilt and hover energy.",
  },
  {
    title: "Seal with emotion",
    body: "Pair testimonials with soft blur and ambient gradients. Land on a bold CTA.",
  },
];

export function StoryChapters() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, chapters.length - 1]);

  useMotionValueEvent(progress, "change", (value) => {
    const idx = Math.round(value);
    if (idx !== active) setActive(idx);
  });

  const frames = useMemo(
    () =>
      chapters.map((chapter, index) => ({
        ...chapter,
        offset: index,
      })),
    []
  );

  return (
    <div ref={containerRef} className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div className="flex flex-col gap-6">
        <FadeInWhenVisible>
          <p className="text-sm uppercase tracking-[0.22em] text-white/60">Scroll story</p>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
            Chapters that guide the scroll.
          </h2>
        </FadeInWhenVisible>
        <div className="mt-4 flex flex-col gap-4">
      {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className={`rounded-2xl border px-4 py-4 ${
                active === index
                  ? "border-white/30 bg-white/10 shadow-[0_15px_50px_rgba(0,0,0,0.35)]"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${
                    active === index
                      ? "bg-gradient-to-br from-[#6a7dff] to-[#4de0ff] text-black"
                      : "bg-white/5 text-white/70"
                  }`}
                >
                  {index + 1}
                </span>
                <div>
                  <p className="text-lg font-semibold text-white">{chapter.title}</p>
                  <p className="text-sm text-white/70">{chapter.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="sticky top-24">
          <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.5)]">
            <motion.div
              className="absolute inset-0"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(106,125,255,0.25), transparent 35%), radial-gradient(circle at 80% 20%, rgba(77,224,255,0.22), transparent 40%), radial-gradient(circle at 50% 80%, rgba(255,95,216,0.18), transparent 40%)",
                backgroundSize: "160% 160%",
                opacity: 0.7,
              }}
            />
            <div className="relative h-full min-h-[380px] overflow-hidden">
              {frames.map((frame, index) => (
                <motion.div
                  key={frame.title}
                  className="absolute inset-0 flex items-center justify-center p-8"
                  initial={{ opacity: 0, scale: 0.96, y: 14 }}
                  animate={{
                    opacity: active === index ? 1 : 0,
                    y: active === index ? 0 : -30,
                    scale: active === index ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="glass w-full max-w-md rounded-2xl p-6 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">Scene</p>
                    <p className="mt-3 text-2xl font-semibold text-white">{frame.title}</p>
                    <p className="mt-2 text-sm text-white/70">{frame.body}</p>
                    <div className="mt-6 h-36 rounded-xl border border-white/10 bg-white/5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

