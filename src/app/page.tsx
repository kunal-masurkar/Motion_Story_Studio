"use client";

import { useEffect, useState } from "react";
import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { Showcase } from "@/components/Showcase";
import { StoryChapters } from "@/components/StoryChapters";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState("Checking code");

  useEffect(() => {
    let isMounted = true;
    const steps = [
      "Checking code",
      "Compiling",
      "Deploying the website",
      "Entering the experience",
    ];

    let stepIndex = 0;
    const stepInterval = setInterval(() => {
      stepIndex = (stepIndex + 1) % steps.length;
      if (isMounted) setStatus(steps[stepIndex]);
    }, 900);

    const fontReady = document?.fonts?.ready ?? Promise.resolve();
    const pageLoaded =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            const onLoad = () => {
              resolve();
              window.removeEventListener("load", onLoad);
            };
            window.addEventListener("load", onLoad);
          });

    const timeout = setTimeout(() => {
      if (isMounted) setIsLoading(false);
    }, 4000);

    Promise.all([fontReady, pageLoaded]).then(() => {
      if (isMounted) {
        setStatus("Entering the experience");
        setTimeout(() => {
          if (isMounted) setIsLoading(false);
        }, 350);
        clearTimeout(timeout);
      }
    });

    return () => {
      isMounted = false;
      clearTimeout(timeout);
      clearInterval(stepInterval);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#050513] to-[#04040a] text-white">
      <LoadingScreen visible={isLoading} status={status} />
      <Navbar />
      <main className={`space-y-6 transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <Section id="hero" className="pt-28">
          <Hero />
        </Section>

        <Section id="story">
          <StoryChapters />
        </Section>

        <Section id="features">
          <Features />
        </Section>

        <Section id="showcase">
          <Showcase />
        </Section>

        <Section id="testimonials">
          <Testimonials />
        </Section>

        <Section id="cta" className="pb-24">
          <CTA />
        </Section>
      </main>
      <footer className="border-t border-white/10 bg-black/40 py-8 text-center text-sm text-white/60">
        Crafted for motion-first storytelling • Next.js + Tailwind + Framer Motion
      </footer>
    </div>
  );
}
