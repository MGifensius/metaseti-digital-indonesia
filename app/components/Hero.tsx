"use client";

import MotionWrapper from "./MotionWrapper";
import Button from "./Button";
import AnimatedSphere from "./AnimatedSphere";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section 
      id="hero"
      className="relative flex h-screen flex-col items-center justify-center px-6 text-center overflow-hidden bg-black"
    >
      {/* Animated Sphere Background */}
      <AnimatedSphere />
      
      {/* HEADINGS */}
      <div className="mb-8 relative z-10">
        <MotionWrapper staggerDelay={0}>
          <h1 className="mb-6 text-5xl font-light tracking-tight md:text-7xl lg:text-8xl text-white">
            {t('hero.title1')}
          </h1>
        </MotionWrapper>

        <MotionWrapper staggerDelay={0.2}>
          <h1 className="text-5xl font-light tracking-tight md:text-7xl lg:text-8xl text-white">
            {t('hero.title2')}
          </h1>
        </MotionWrapper>
      </div>

      {/* SUBTEXT */}
      <MotionWrapper className="mt-6 relative z-10" staggerDelay={0.4}>
        <p className="max-w-2xl text-lg text-gray-400 md:text-xl leading-relaxed">
          {t('hero.subtitle')}
        </p>
      </MotionWrapper>

      {/* BUTTONS */}
      <MotionWrapper className="mt-12 flex flex-col sm:flex-row gap-4 relative z-10" staggerDelay={0.6}>
        <Button href="#services" variant="primary">
          {t('hero.exploreServices')}
        </Button>
        <Button href="#contact" variant="secondary">
          {t('hero.getInTouch')}
        </Button>
      </MotionWrapper>
    </section>
  );
}