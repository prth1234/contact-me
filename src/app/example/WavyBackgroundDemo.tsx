"use client";
import { WavyBackground } from "@/components/ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="mx-auto max-w-4xl" containerClassName="relative">
      <p className="inter-var text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl">
        Let's Build great tech together 🤝
      </p>
    </WavyBackground>
  );
}
