"use client";

import MotionWrapper from "./MotionWrapper";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { value: "∞", label: t('about.stats.innovation') },
    { value: "3", label: t('about.stats.pillars') },
    { value: "<24h", label: t('about.stats.response') },
    { value: "100%", label: t('about.stats.commitment') },
  ];

  return (
    <section
      id="about"
      className="relative bg-neutral-900 px-6 py-32 md:py-40 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-32">

          {/* LEFT: TEXT CONTENT */}
          <div>
            <MotionWrapper>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
                {t('about.subtitle')}
              </p>

              <h2 className="text-4xl font-light md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
                {t('about.title')}
              </h2>
            </MotionWrapper>

            <MotionWrapper staggerDelay={0.1}>
              <div className="space-y-6 text-gray-400 text-base leading-relaxed">
                <p>{t('about.description1')}</p>
                <p>{t('about.description2')}</p>
                <p>{t('about.description3')}</p>
              </div>
            </MotionWrapper>

            <MotionWrapper staggerDelay={0.2}>
              <Link
                href="/about"
                className="inline-block mt-10 px-8 py-3 text-sm border border-white/20 text-white 
                hover:bg-white hover:text-black transition-all duration-300"
              >
                {t('about.learnMore')}
              </Link>
            </MotionWrapper>
          </div>

          {/* RIGHT: STAT BLOCKS */}
          <div className="flex items-center">
            <div className="grid grid-cols-2 gap-10 w-full">
              {stats.map((stat, index) => (
                <MotionWrapper key={index} staggerDelay={0.1 + index * 0.07}>
                  <div className="border-l border-white/20 pl-6 py-4">
                    <div className="text-5xl md:text-6xl font-light text-white mb-3">
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}