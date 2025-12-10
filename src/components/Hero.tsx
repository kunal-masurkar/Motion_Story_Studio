"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { FadeInWhenVisible } from "./FadeInWhenVisible";
import { SplitText } from "./SplitText";

const badges = ["Motion-first", "Cinematic scroll", "Immersive product"];

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const tiltX = useTransform(mouseY, [0, 1], [8, -8]);
  const tiltY = useTransform(mouseX, [0, 1], [-8, 8]);

  return (
    <div className="relative flex flex-col gap-10 pt-16">
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5">
        <motion.div
          className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#6a7dff]/30 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-[#4de0ff]/25 blur-3xl"
          animate={{ y: [0, 16, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {badges.map((badge, idx) => (
          <motion.span
            key={badge}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * idx, duration: 0.5 }}
            className="glass rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/70"
          >
            {badge}
          </motion.span>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <SplitText
          text="Move people with motion-first web stories."
          className="text-4xl leading-[1.05] text-white md:text-5xl lg:text-6xl"
        />
        <FadeInWhenVisible delay={0.4} y={20}>
          <p className="max-w-3xl text-lg text-white/70 md:text-xl">
            Build immersive, cinematic sites where every scroll is a scene change. Crafted for
            launches, demos, and premium digital experiences.
          </p>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.55} y={14}>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6a7dff] to-[#4de0ff] px-6 py-3 text-base font-semibold text-black shadow-[0_12px_40px_rgba(80,130,255,0.35)] transition hover:scale-[1.02]"
            >
              Start a project
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#story"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-base font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
            >
              See the flow
            </a>
          </div>
        </FadeInWhenVisible>
      </div>

      <FadeInWhenVisible delay={0.2}>
        <motion.div
          onPointerMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            mouseX.set((e.clientX - rect.left) / rect.width);
            mouseY.set((e.clientY - rect.top) / rect.height);
          }}
          onPointerLeave={() => {
            mouseX.set(0.5);
            mouseY.set(0.5);
          }}
          style={{
            rotateX: tiltX,
            rotateY: tiltY,
            transformPerspective: 1200,
          }}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.55)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(106,125,255,0.28),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(77,224,255,0.22),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,95,216,0.2),transparent_35%)]" />
          <div className="absolute inset-0 opacity-70 mix-blend-screen">
            <div className="absolute left-10 top-10 h-10 w-10 rounded-full border border-white/30 bg-white/10 blur-xl" />
            <div className="absolute right-12 bottom-16 h-24 w-24 rounded-full border border-white/20 bg-white/5 blur-2xl" />
          </div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="glass relative mx-auto flex max-w-xl flex-col items-center gap-4 rounded-2xl p-8 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">Hero Motion</p>
              <p className="text-2xl font-semibold leading-snug text-white md:text-3xl">
                Split-text reveals, parallax glow, and a responsive tilt spotlight.
              </p>
              <p className="text-sm text-white/60">
                Crafted for narrative launches, premium demos, and scroll-driven stories.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </FadeInWhenVisible>
    </div>
  );
}

