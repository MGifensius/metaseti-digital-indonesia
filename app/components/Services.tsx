"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t, language } = useLanguage();

  // Define services with proper typing
  const servicesData = {
    en: [
      {
        number: "01",
        title: "Strategic AI Integration",
        description: "Integrating automation and AI to streamline workflows and deliver real-time insights.",
        tags: [
          "AI Chatbots & Assistants",
          "Predictive Analytics & Insights",
          "AI Product Enhancement",
          "Automation & Workflow Optimization"
        ],
        image: "/Artificial-Intelligence.png",
        href: "/services/ai-integration",
      },
      {
        number: "02",
        title: "Custom Development",
        description: "Building scalable digital products—websites, apps, and systems—designed for performance and growth.",
        tags: [
          "Web, App & System Development",
          "Custom Web Applications",
          "IoT & Smart System Implementation",
          "Maintenance & Optimization"
        ],
        image: "/Custom-Development.png",
        href: "/services/custom-development",
      },
      {
        number: "03",
        title: "Branding & Marketing",
        description: "Crafting impactful brand identities and campaigns that connect with the right audience.",
        tags: [
          "Brand Strategy & Visual Identity",
          "UI/UX & Creative Direction",
          "Digital Campaigns & Social Media",
          "Content Creation & Storytelling"
        ],
        image: "/Branding-Marketing.png",
        href: "/services/branding-marketing",
      },
    ],
    id: [
      {
        number: "01",
        title: "Integrasi AI Strategis",
        description: "Mengintegrasikan otomasi dan AI untuk menyederhanakan alur kerja dan memberikan wawasan real-time.",
        tags: [
          "Chatbot & Asisten AI",
          "Analitik Prediktif & Wawasan",
          "Peningkatan Produk AI",
          "Otomasi & Optimasi Alur Kerja"
        ],
        image: "/Artificial-Intelligence.png",
        href: "/services/ai-integration",
      },
      {
        number: "02",
        title: "Pengembangan Khusus",
        description: "Membangun produk digital yang dapat diskalakan—situs web, aplikasi, dan sistem—dirancang untuk kinerja dan pertumbuhan.",
        tags: [
          "Pengembangan Web, Aplikasi & Sistem",
          "Aplikasi Web Khusus",
          "Implementasi IoT & Sistem Pintar",
          "Pemeliharaan & Optimasi"
        ],
        image: "/Custom-Development.png",
        href: "/services/custom-development",
      },
      {
        number: "03",
        title: "Branding & Pemasaran",
        description: "Menciptakan identitas merek dan kampanye yang berdampak yang terhubung dengan audiens yang tepat.",
        tags: [
          "Strategi Merek & Identitas Visual",
          "UI/UX & Arahan Kreatif",
          "Kampanye Digital & Media Sosial",
          "Pembuatan Konten & Storytelling"
        ],
        image: "/Branding-Marketing.png",
        href: "/services/branding-marketing",
      },
    ],
  };

  const services = servicesData[language];

  return (
    <section
      id="services"
      className="relative bg-black px-6 pt-20 pb-32 md:pb-40 scroll-mt-20 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl relative z-10">

        {/* Header */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                {t('services.subtitle')}
              </p>
              <h2 className="text-4xl font-light md:text-5xl lg:text-6xl text-white">
                {t('services.title')}
              </h2>
            </div>
            <p className="text-gray-400 max-w-md text-sm leading-relaxed">
              {t('services.description')}
            </p>
          </div>
        </div>

        {/* Desktop: Expanding Horizontal Cards */}
        <div className="hidden lg:block relative border border-white/10 h-[500px] overflow-hidden">
          <div className="absolute inset-0 flex">
            {services.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  initial={false}
                  animate={{
                    flexGrow: isActive ? 2 : 0.4,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="relative overflow-hidden cursor-pointer border-r border-white/10 last:border-r-0 bg-black"
                  style={{ flexBasis: 0 }}
                >
                  {/* Background Image (only visible when expanded) */}
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60" />
                  </motion.div>

                  {/* Number */}
                  <div className="absolute top-12 left-12 z-10">
                    <span
                      className={`text-8xl font-light transition-colors duration-500 ${
                        isActive ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Learn More - Bottom Right Corner */}
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-12 right-12 z-10"
                  >
                    <Link href={service.href}>
                      <div className="group flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-300">
                        <span className="text-sm font-light">{t('services.learnMore')}</span>
                        <svg 
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Details - Glassmorphism Container */}
                  <div
                    className="absolute bottom-12 left-12 z-10 w-[550px]"
                    style={{ pointerEvents: "none" }}
                  >
                    <motion.div
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
                    >
                      <h3 className="text-4xl font-light mb-4 text-white">
                        {service.title}
                      </h3>

                      <p className="text-gray-300 mb-6 leading-relaxed text-base">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs border border-white/20 rounded-full text-gray-300 bg-black/40 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Accordion */}
        <div className="lg:hidden space-y-0 border border-white/10">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className="border-b border-white/10 last:border-b-0 cursor-pointer relative overflow-hidden bg-black"
              >
                {/* Background image for mobile */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90" />
                  </motion.div>
                )}

                <motion.div
                  animate={{ height: isActive ? "auto" : "120px" }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden relative"
                >
                  <div className="p-6 md:p-8 relative z-10">
                    <span
                      className={`text-5xl font-light block mb-4 ${
                        isActive ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {service.number}
                    </span>

                    <motion.div animate={{ opacity: isActive ? 1 : 0 }}>
                      <h3 className="text-xl md:text-2xl font-light mb-3 text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs border border-white/20 rounded-full text-gray-300 bg-black/90"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Learn More - Mobile */}
                      <Link href={service.href}>
                        <div className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-300 group">
                          <span className="text-sm font-light">{t('services.learnMore')}</span>
                          <svg 
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}