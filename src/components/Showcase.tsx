"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

const states = [
  { label: "Live mockup", color: "from-[#6a7dff]/70 to-[#4de0ff]/70" },
  { label: "UI motion", color: "from-[#ff5fd8]/70 to-[#6a7dff]/70" },
  { label: "Scene change", color: "from-[#4de0ff]/70 to-[#ffb347]/70" },
];

export function Showcase() {
  const [active, setActive] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, 1], [12, -12]);
  const rotateY = useTransform(mouseX, [0, 1], [-12, 12]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 120, damping: 18 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 120, damping: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % states.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
      <div className="flex flex-col gap-6">
        <FadeInWhenVisible>
          <p className="text-sm uppercase tracking-[0.22em] text-white/60">Showcase</p>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
            Interactive demo, tuned for motion.
          </h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <p className="text-base text-white/70 md:text-lg">
            Pointer tilt, auto-rotating states, and gradients that pulse. Drop in video or 3D
            embeds later — the stage is ready.
          </p>
        </FadeInWhenVisible>
        <div className="flex gap-3">
          {states.map((state, idx) => (
            <button
              key={state.label}
              onClick={() => setActive(idx)}
              className={`rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                active === idx
                  ? "border-white/30 bg-white/10 text-white"
                  : "border-white/10 bg-white/5 text-white/65 hover:border-white/20 hover:text-white"
              }`}
            >
              {state.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
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
            rotateX: smoothRotateX,
            rotateY: smoothRotateY,
            transformPerspective: 1200,
          }}
          className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
        >
          <motion.div
            key={states[active].label}
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`absolute inset-0 bg-gradient-to-br ${states[active].color}`}
          />
          <motion.div
            className="absolute inset-6 rounded-2xl border border-white/20 bg-black/40 backdrop-blur-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <motion.div
                className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 30%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.08), transparent 35%), linear-gradient(120deg, rgba(255,255,255,0.06), transparent)",
                }}
                animate={{ backgroundPosition: ["0% 0%", "80% 60%"] }}
                transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
              />
            </div>
            <div className="relative flex h-full items-center justify-center p-8">
              <div className="glass flex max-w-md flex-col gap-3 rounded-2xl p-6 text-center">
                <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                  {states[active].label}
                </p>
                <p className="text-xl font-semibold text-white md:text-2xl">
                  High-engagement showpiece with tilt, parallax, and auto-play states.
                </p>
                <p className="text-sm text-white/65">
                  Swap this block for your video loop or interactive mockup. The motion frame stays.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

