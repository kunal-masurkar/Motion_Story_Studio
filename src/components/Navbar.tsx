"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Story", href: "#story" },
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-30 flex justify-center px-4 py-5">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 px-4 py-3 backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#6a7dff] to-[#4de0ff]" />
          Motion Studio
        </div>
        <div className="hidden items-center gap-2 text-sm text-white/70 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-3 py-1 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#cta"
          className="rounded-full bg-gradient-to-r from-[#6a7dff] to-[#4de0ff] px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_40px_rgba(80,130,255,0.35)] transition hover:scale-[1.02]"
        >
          Get Started
        </a>
      </motion.nav>
    </div>
  );
}

