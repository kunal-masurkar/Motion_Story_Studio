import { PropsWithChildren } from "react";

type GlassCardProps = PropsWithChildren<{
  className?: string;
}>;

export function GlassCard({ className = "", children }: GlassCardProps) {
  return (
    <div className={`glass rounded-3xl border border-white/10 p-6 ${className}`}>
      {children}
    </div>
  );
}

