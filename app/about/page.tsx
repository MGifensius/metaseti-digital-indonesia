"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Lightbulb, 
  TrendingUp,
  Award,
  Clock,
  Shield,
  Zap,
  CheckCircle2
} from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  const coreValues = [
    {
      icon: Lightbulb,
      title: t('aboutPage.values.innovation.title'),
      description: t('aboutPage.values.innovation.desc'),
    },
    {
      icon: Heart,
      title: t('aboutPage.values.clientCentric.title'),
      description: t('aboutPage.values.clientCentric.desc'),
    },
    {
      icon: Award,
      title: t('aboutPage.values.excellence.title'),
      description: t('aboutPage.values.excellence.desc'),
    },
    {
      icon: Users,
      title: t('aboutPage.values.collaboration.title'),
      description: t('aboutPage.values.collaboration.desc'),
    },
    {
      icon: Shield,
      title: t('aboutPage.values.integrity.title'),
      description: t('aboutPage.values.integrity.desc'),
    },
    {
      icon: TrendingUp,
      title: t('aboutPage.values.growth.title'),
      description: t('aboutPage.values.growth.desc'),
    },
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: t('aboutPage.reasons.expertise.title'),
      description: t('aboutPage.reasons.expertise.desc'),
    },
    {
      icon: CheckCircle2,
      title: t('aboutPage.reasons.endToEnd.title'),
      description: t('aboutPage.reasons.endToEnd.desc'),
    },
    {
      icon: Clock,
      title: t('aboutPage.reasons.agile.title'),
      description: t('aboutPage.reasons.agile.desc'),
    },
    {
      icon: TrendingUp,
      title: t('aboutPage.reasons.results.title'),
      description: t('aboutPage.reasons.results.desc'),
    },
  ];

  const team = [
    {
      name: "Marchelino Gifensius",
      role: "President Director",
      image: "/team-1.jpg",
    },
    {
      name: "Joshua Christian",
      role: "President Commissioner",
      image: "/team-2.jpg",
    },
  ];

  return (
    <main className="bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
              {t('aboutPage.subtitle')}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              {t('aboutPage.title')}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              {t('aboutPage.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brief Description */}
      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                {t('aboutPage.whoWeAre')}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                {t('aboutPage.whoWeAreDesc1')}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {t('aboutPage.whoWeAreDesc2')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="border border-white/10 p-6 bg-black/50">
                <p className="text-4xl font-light text-white mb-2">50+</p>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {t('aboutPage.stats.projects')}
                </p>
              </div>
              <div className="border border-white/10 p-6 bg-black/50">
                <p className="text-4xl font-light text-white mb-2">98%</p>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {t('aboutPage.stats.satisfaction')}
                </p>
              </div>
              <div className="border border-white/10 p-6 bg-black/50">
                <p className="text-4xl font-light text-white mb-2">15+</p>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {t('aboutPage.stats.partners')}
                </p>
              </div>
              <div className="border border-white/10 p-6 bg-black/50">
                <p className="text-4xl font-light text-white mb-2">24/7</p>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {t('aboutPage.stats.support')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 text-center">
              {t('aboutPage.ourStory')}
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>{t('aboutPage.storyDesc1')}</p>
              <p>{t('aboutPage.storyDesc2')}</p>
              <p>{t('aboutPage.storyDesc3')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-white/10 p-8 bg-black/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-light text-white">{t('aboutPage.vision')}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {t('aboutPage.visionDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-white/10 p-8 bg-black/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-light text-white">{t('aboutPage.mission')}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {t('aboutPage.missionDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              {t('aboutPage.coreValues')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('aboutPage.coreValuesDesc')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-white/10 p-6 hover:border-white/20 transition-all bg-neutral-900/50"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              {t('aboutPage.leadership')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('aboutPage.leadershipDesc')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="border border-white/10 bg-black/30 overflow-hidden group"
              >
                {/* Image */}
                <div className="aspect-[4/3] bg-neutral-800 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    <Users className="w-24 h-24" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-light text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              {t('aboutPage.whyChoose')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('aboutPage.whyChooseDesc')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4 border-l border-white/20 pl-6 py-4"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6">
              {t('aboutPage.cta')}
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all"
            >
              {t('aboutPage.getInTouch')}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
