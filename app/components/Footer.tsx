"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          
          {/* Copyright */}
          <p>{t('footer.copyright')}</p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}