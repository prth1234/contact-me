"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Do",
      className: "text-white", // Added text-white class
    },
    {
      text: "you",
      className: "text-white", // Added text-white class
    },
    {
      text: "want",
      className: "text-white", // Added text-white class
    },
    {
      text: "to",
      className: "text-white", // Added text-white class
    },
    
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        ...
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl gradientButton text-sm">
          Give Feedback
        </button>
        <button className="w-40 h-10 rounded-xl gradientButton text-sm">
          Contact Me
        </button>
      </div>
    </div>
  );
}