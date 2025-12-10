"use client";

import { motion } from "framer-motion";

type SplitTextProps = {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  stagger?: number;
};

export function SplitText({
  text,
  as: Tag = "h1",
  className = "",
  delay = 0,
  stagger = 0.04,
}: SplitTextProps) {
  const letters = Array.from(text);

  return (
    <Tag className={`inline-flex flex-wrap ${className}`}>
      {letters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: "40%", rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: delay + index * stagger,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="inline-block will-change-transform"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Tag>
  );
}

