"use client";

import MotionWrapper from "./MotionWrapper";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative bg-neutral-900 px-6 py-40 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <MotionWrapper staggerDelay={0}>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
            {t('contact.subtitle')}
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            {t('contact.title')}
          </h2>
        </MotionWrapper>

        <MotionWrapper staggerDelay={0.1}>
          <p className="max-w-xl text-gray-400 text-base leading-relaxed">
            {t('contact.description')}
          </p>
        </MotionWrapper>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 gap-20 mt-20">

          {/* LEFT SIDE – CONTACT DETAILS */}
          <div className="space-y-12">
            <MotionWrapper staggerDelay={0.15}>
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                  {t('contact.phone')}
                </h3>
                <a
                  href="https://wa.me/6281385073901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-white hover:text-gray-300 transition-colors inline-block"
                >
                  +62 813-8507-3901
                </a>
              </div>
            </MotionWrapper>

            <MotionWrapper staggerDelay={0.20}>
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                  {t('contact.email')}
                </h3>
                <p className="text-lg text-white">
                  metaseti.digital@gmail.com
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper staggerDelay={0.25}>
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                  {t('contact.instagram')}
                </h3>
                <a
                  href="https://instagram.com/metasetidigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-white hover:text-gray-300 transition-colors inline-block"
                >
                  @metasetidigital
                </a>
              </div>
            </MotionWrapper>

            {/* MAP */}
            <MotionWrapper staggerDelay={0.30}>
              <div className="mt-10">
                <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                  {t('contact.location')}
                </h3>

                <div className="rounded-xl overflow-hidden border border-white/10">
                  <iframe
                    src="https://maps.google.com/maps?q=Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-64 grayscale"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* RIGHT SIDE – CONTACT FORM */}
          <MotionWrapper staggerDelay={0.35}>
            <form action="https://formspree.io/f/xdkwjyze" method="POST" className="space-y-8">

              <div>
                <label className="block text-xs text-gray-400 mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="
                    w-full bg-black/40 border border-white/10
                    px-4 py-3 text-white placeholder-gray-500
                    focus:outline-none focus:border-white/20
                    transition-all
                  "
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-2">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="
                    w-full bg-black/40 border border-white/10
                    px-4 py-3 text-white placeholder-gray-500
                    focus:outline-none focus:border-white/20
                    transition-all
                  "
                  placeholder={t('contact.form.phonePlaceholder')}
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="
                    w-full bg-black/40 border border-white/10
                    px-4 py-3 text-white placeholder-gray-500
                    focus:outline-none focus:border-white/20
                    transition-all
                  "
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="
                    w-full bg-black/40 border border-white/10
                    px-4 py-3 text-white placeholder-gray-500
                    focus:outline-none focus:border-white/20
                    transition-all resize-none
                  "
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                className="
                  mt-4 px-8 py-3 
                  bg-white text-black 
                  text-sm font-medium
                  hover:bg-gray-200 transition-all
                "
              >
                {t('contact.form.send')}
              </button>

            </form>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}