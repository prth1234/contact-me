"use client";

import { useEffect, useState } from "react";
import { HeroParallaxDemo } from "./HeroParallaxDemo";
import { ParallaxScrollDemo } from "./ParallaxScrollDemo";
import { SparklesPreview } from "./SparklesPreview";
import { TextRevealCardPreview } from "./TextRevealCardPreview";
import { WavyBackgroundDemo } from "./WavyBackgroundDemo";
import { GoogleGeminiEffectDemo } from "./gemini-effect";
import { BackgroundGradientAnimationDemo } from "./gradientX";
import { TabsDemo } from "./tabs-preview";
// import { SparklesPreview2 } from './SparklesPreview2';
import { LampDemo } from "./lamps-view";
import { FloatingNavDemo } from "./navbar";
import { GridBackgroundDemo } from "./gradientDemo";
import { AnimatedPinDemo } from "./pin";
import { MeteorsDemo } from "./BackgroundGradientDemo";
import { TypewriterEffectSmoothDemo } from "./TypewriterEffectSmoothDemo";
import { SignupFormDemo } from "./SignupFormDemo";
import { MyComponent } from "./MyHTML";
import { SparklesPreview1 } from "./sparkle_text";
import { FormsXXX } from "./forms";
export default function Page() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <>
      <FloatingNavDemo />
      <HeroParallaxDemo />

      <LampDemo />

      <BackgroundGradientAnimationDemo />
      {/* <GridBackgroundDemo/> */}
      <AnimatedPinDemo />
      {/* <TypewriterEffectSmoothDemo/> */}
      {/* <MeteorsDemo/> */}
      {/* <SignupFormDemo/> */}
      <MyComponent />
      <SparklesPreview1 />
      <FormsXXX />

      <SparklesPreview />
      <Footer />

      <TabsDemo />
    </>
  );
}

const Footer = () => {
  return (
    <div
      style={{
        borderTop: "1px solid white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        color: "white",
        marginTop: 100,
        // marginBottom: 10,
      }}
    >
      <div style={{ marginLeft: "auto" }}>Created by Parth</div>
    </div>
  );
};
