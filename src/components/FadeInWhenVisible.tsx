"use client";

import { motion, useAnimationControls, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
};

export function FadeInWhenVisible({ children, delay = 0, y = 40 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.25, once: true });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

