"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PropsWithChildren } from "react";

type TiltCardProps = PropsWithChildren<{
  className?: string;
}>;

export function TiltCard({ className = "", children }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const dampedX = useSpring(x, { stiffness: 150, damping: 12 });
  const dampedY = useSpring(y, { stiffness: 150, damping: 12 });

  const rotateX = useTransform(dampedY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(dampedX, [-0.5, 0.5], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(offsetX);
    y.set(offsetY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className={`glow-border relative rounded-3xl border border-white/10 bg-white/5 p-[1px] shadow-[0_18px_80px_rgba(0,0,0,0.4)] ${className}`}
    >
      <div className="glass relative h-full w-full rounded-3xl p-6">{children}</div>
    </motion.div>
  );
}

