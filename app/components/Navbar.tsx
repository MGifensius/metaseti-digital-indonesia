"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

const services = [
  { 
    label: "Strategic AI Integration", 
    labelId: "Integrasi AI Strategis",
    href: "/services/ai-integration",
    description: "Intelligent automation & insights",
    descriptionId: "Otomasi cerdas & wawasan"
  },
  { 
    label: "Custom Development", 
    labelId: "Pengembangan Khusus",
    href: "/services/custom-development",
    description: "Tailored digital solutions",
    descriptionId: "Solusi digital yang disesuaikan"
  },
  { 
    label: "Branding & Marketing", 
    labelId: "Branding & Pemasaran",
    href: "/services/branding-marketing",
    description: "Identity & campaign creation",
    descriptionId: "Identitas & pembuatan kampanye"
  },
];

export default function Navbar() {
  const { t, language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 
          transition-all duration-500
          ${scrolled 
            ? "bg-black/80 backdrop-blur-2xl" 
            : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo - Responsive and positioned to the left */}
          <Link href="/" className="flex items-center gap-2.5 -ml-2 sm:-ml-4 md:-ml-6" onClick={closeMobileMenu}>
            <div className="relative w-40 h-7 sm:w-52 sm:h-8 md:w-64 md:h-9 lg:w-72 lg:h-10">
              <Image
                src="/Metaseti-Dark.png"
                alt="Metaseti"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#hero">
              <span className="text-sm font-light text-gray-400 hover:text-white transition-colors duration-300">
                {t('nav.home')}
              </span>
            </Link>
            
            <Link href="/about">
              <span className="text-sm font-light text-gray-400 hover:text-white transition-colors duration-300">
                {t('nav.about')}
              </span>
            </Link>

            {/* Desktop Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-sm font-light text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1">
                {t('nav.services')}
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Desktop Dropdown Menu */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-4 w-80 bg-black/95 backdrop-blur-xl border border-white/10 overflow-hidden"
                  >
                    {services.map((service, index) => (
                      <Link key={service.href} href={service.href}>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="px-6 py-4 hover:bg-white/5 transition-colors duration-300 border-b border-white/5 last:border-b-0"
                        >
                          <h3 className="text-sm font-light text-white mb-1">
                            {language === 'en' ? service.label : service.labelId}
                          </h3>
                          <p className="text-xs text-gray-500">
                            {language === 'en' ? service.description : service.descriptionId}
                          </p>
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/blog">
              <span className="text-sm font-light text-gray-400 hover:text-white transition-colors duration-300">
                {t('nav.blog')}
              </span>
            </Link>

            <Link href="/#contact">
              <span className="text-sm font-light text-gray-400 hover:text-white transition-colors duration-300">
                {t('nav.contact')}
              </span>
            </Link>

            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors z-50"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-black border-l border-white/10 z-50 md:hidden overflow-y-auto"
            >
              {/* Close Button - Inside Panel */}
              <div className="absolute top-6 right-6 z-10">
                <button
                  onClick={closeMobileMenu}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 pt-20">
                
                {/* Mobile Navigation Items */}
                <div className="space-y-1">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0 * 0.1 }}
                  >
                    <Link href="/#hero" onClick={closeMobileMenu}>
                      <div className="px-4 py-4 text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-lg">
                        <span className="text-base font-light">{t('nav.home')}</span>
                      </div>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 * 0.1 }}
                  >
                    <Link href="/about" onClick={closeMobileMenu}>
                      <div className="px-4 py-4 text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-lg">
                        <span className="text-base font-light">{t('nav.about')}</span>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Mobile Services Accordion */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full px-4 py-4 text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-lg flex items-center justify-between"
                    >
                      <span className="text-base font-light">{t('nav.services')}</span>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Mobile Services Submenu */}
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pt-2 space-y-1">
                            {services.map((service, index) => (
                              <motion.div
                                key={service.href}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link href={service.href} onClick={closeMobileMenu}>
                                  <div className="px-4 py-3 hover:bg-white/5 transition-all duration-300 rounded-lg border-l-2 border-white/10 hover:border-white/30">
                                    <h3 className="text-sm font-light text-white mb-1">
                                      {language === 'en' ? service.label : service.labelId}
                                    </h3>
                                    <p className="text-xs text-gray-500">
                                      {language === 'en' ? service.description : service.descriptionId}
                                    </p>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Blog Link */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link href="/blog" onClick={closeMobileMenu}>
                      <div className="px-4 py-4 text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-lg">
                        <span className="text-base font-light">{t('nav.blog')}</span>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Contact Link */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link href="/#contact" onClick={closeMobileMenu}>
                      <div className="px-4 py-4 text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-lg">
                        <span className="text-base font-light">{t('nav.contact')}</span>
                      </div>
                    </Link>
                  </motion.div>
                </div>

                {/* Language Switcher - Mobile */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 px-4"
                >
                  <LanguageSwitcher />
                </motion.div>

                {/* Mobile Menu Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-6 border-t border-white/10"
                >
                  <p className="text-xs text-gray-500 text-center">
                    © 2025 Metaseti Digital Indonesia
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}