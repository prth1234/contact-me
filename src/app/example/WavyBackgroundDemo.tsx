"use client";
import { WavyBackground } from "@/components/ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto" containerClassName="relative">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
      Let's Build great products together 🤝
    </p>
      {/* <p className="text-base md:text-lg px-4 mt-4 text-white font-normal inter-var text-center">
        How I Can Improve 
      </p> */}
    </WavyBackground>
  );
}
