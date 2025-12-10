import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative min-h-screen w-full px-6 py-24 md:px-10 md:py-28 lg:px-14 lg:py-32 ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/0 opacity-50" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
        {children}
      </div>
    </section>
  );
}

