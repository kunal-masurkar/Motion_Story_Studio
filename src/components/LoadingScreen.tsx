"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

type LoadingScreenProps = {
  visible: boolean;
  status: string;
};

export function LoadingScreen({ visible, status }: LoadingScreenProps) {
  const controls = useAnimationControls();

  useEffect(() => {
    if (visible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, visible]);

  return (
    <motion.div
      initial="visible"
      animate={controls}
      variants={{
        visible: { opacity: 1, pointerEvents: "auto" },
        hidden: {
          opacity: 0,
          pointerEvents: "none",
          transitionEnd: { display: "none" },
        },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#04040a]"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-[#6a7dff]/25 blur-3xl"
          animate={{ y: [0, -16, 0], x: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#4de0ff]/25 blur-3xl"
          animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.07),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.05),transparent_35%)] opacity-60" />
      </div>

      <div className="relative flex flex-col items-center gap-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-sm uppercase tracking-[0.2em] text-white/70"
        >
          Motion Studio
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-full border border-white/15 px-5 py-2 text-lg font-semibold text-white"
        >
          Loading experience
        </motion.div>
        <div className="flex w-64 flex-col gap-2">
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full w-full bg-gradient-to-r from-[#6a7dff] via-[#4de0ff] to-[#6a7dff]"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
            />
          </div>
          <motion.span
            key={status}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="text-xs uppercase tracking-[0.16em] text-white/70"
          >
            {status}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

