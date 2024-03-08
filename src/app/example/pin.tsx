"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer
        title="prth1234.github.io/my-website/"
        href="https://prth1234.github.io/my-website/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Currently I am Working in a Fintech Startup called{" "}
            <span
              style={{
                background: 'linear-gradient(45deg, #b2ff00, #00ff55)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
              }}
            >
              Finvolv.AI
            </span>
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              I am based out of Bangalore/Delhi
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
