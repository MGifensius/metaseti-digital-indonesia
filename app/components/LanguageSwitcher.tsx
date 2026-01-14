"use client";

import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 backdrop-blur-sm border border-white/10">
      <button
        onClick={() => setLanguage('en')}
        className={`
          relative px-3 py-1.5 text-xs font-light rounded-full transition-all duration-300
          ${language === 'en' 
            ? 'text-white' 
            : 'text-gray-400 hover:text-gray-300'
          }
        `}
      >
        {language === 'en' && (
          <motion.div
            layoutId="language-indicator"
            className="absolute inset-0 bg-white/10 rounded-full"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
      <button
        onClick={() => setLanguage('id')}
        className={`
          relative px-3 py-1.5 text-xs font-light rounded-full transition-all duration-300
          ${language === 'id' 
            ? 'text-white' 
            : 'text-gray-400 hover:text-gray-300'
          }
        `}
      >
        {language === 'id' && (
          <motion.div
            layoutId="language-indicator"
            className="absolute inset-0 bg-white/10 rounded-full"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">ID</span>
      </button>
    </div>
  );
}
