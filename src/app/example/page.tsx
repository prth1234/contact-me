'use client';

import { useEffect, useState } from 'react';
import { HeroParallaxDemo } from './HeroParallaxDemo';
import { ParallaxScrollDemo } from './ParallaxScrollDemo';
import { SparklesPreview } from './SparklesPreview';
import { TextRevealCardPreview } from './TextRevealCardPreview';
import { WavyBackgroundDemo } from './WavyBackgroundDemo';
import { GoogleGeminiEffectDemo } from './gemini-effect';
import { BackgroundGradientAnimationDemo } from './gradientX';
import { TabsDemo } from './tabs-preview';
// import { SparklesPreview2 } from './SparklesPreview2';
import{LampDemo} from './lamps-view'
import {FloatingNavDemo} from './navbar'
export default function Page() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);


  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <>
    {/* <FloatingNavDemo/> */}
      <HeroParallaxDemo />
    

      <LampDemo/>



      <TabsDemo />
      <BackgroundGradientAnimationDemo />
      <SparklesPreview />



      
    </>
  );
}
