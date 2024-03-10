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
import {Footerr} from "./footer"
import { color } from "framer-motion";
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
      <div
        style={{
          minHeight: "auto",
        }}
      >
        {/* <Footer /> */}

        <TabsDemo />
        <Footerr/>
      </div>

    </>
  );
}

// const Footer = () => {
//   return (
//     <div
//       style={{
//         borderTop: "1px solid white",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "10px",
//         color: "white",
//         marginTop: 100,
//         // marginBottom: 10,
//       }}
//     >
//       <div style={{ marginLeft: "10", fontFamily: "Gotham, sans-serif" }}>
//         Created by <b>PARTH</b>
//       </div>
//       <div style={{ marginRight: "10" }}>👋</div>
//     </div>
//   );
// };
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
        background:
          "conic-gradient(at 50% 25%, #0000 75%, #47d3ff 0, #0000 75%) 60px 60px, conic-gradient(at 50% 25%, #0000 75%, #47d3ff 0) calc(2 * 60px) calc(2 * 60px), conic-gradient(at 50% 25%, #0000 75%, #47d3ff 0) calc(3 * 60px) calc(3 * 60px), repeating-linear-gradient(135deg, #adafff 0 12.5%, #474bff 0 25%)",
        // background: `url('https://i.ibb.co/jbxDKBn/Header-Footer-Placeholder.png')`
        
      }}
    >
      <div
        style={{
          marginLeft: "10",
          fontFamily: "Gotham, sans-serif",
          color: "white",
        }}
      >
        Created by <b>PARTH</b>
      </div>
      <div style={{ marginRight: "10" }}>👋</div>
    </div>
  );
};
