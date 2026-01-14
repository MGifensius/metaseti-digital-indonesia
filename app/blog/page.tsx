"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

interface BlogPost {
  id: number;
  titleEn: string;
  titleId: string;
  excerptEn: string;
  excerptId: string;
  category: string;
  categoryEn: string;
  categoryId: string;
  readTime: number;
  date: string;
  image: string;
}

interface FAQ {
  questionEn: string;
  questionId: string;
  answerEn: string;
  answerId: string;
}

export default function BlogPage() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { id: "all", labelEn: "All", labelId: "Semua" },
    { id: "ai", labelEn: "AI & Automation", labelId: "AI & Otomasi" },
    { id: "development", labelEn: "Development", labelId: "Pengembangan" },
    { id: "branding", labelEn: "Branding & Marketing", labelId: "Branding & Pemasaran" },
    { id: "business", labelEn: "Business Strategy", labelId: "Strategi Bisnis" },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      titleEn: "Claude Sonnet 4.5: The New Standard for Enterprise AI Integration",
      titleId: "Claude Sonnet 4.5: Standar Baru untuk Integrasi AI Perusahaan",
      excerptEn: "Explore how Anthropic's latest Claude Sonnet 4.5 is transforming business operations with enhanced reasoning capabilities, extended context windows, and superior performance across complex enterprise tasks.",
      excerptId: "Jelajahi bagaimana Claude Sonnet 4.5 terbaru dari Anthropic mengubah operasi bisnis dengan kemampuan penalaran yang ditingkatkan, jendela konteks yang diperluas, dan kinerja superior di seluruh tugas perusahaan yang kompleks.",
      category: "ai",
      categoryEn: "AI & Automation",
      categoryId: "AI & Otomasi",
      readTime: 9,
      date: "2025-01-12",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      titleEn: "Next.js 15 Best Practices: Building Production-Ready Applications in 2025",
      titleId: "Praktik Terbaik Next.js 15: Membangun Aplikasi Siap Produksi di 2025",
      excerptEn: "Master the latest features and architectural patterns in Next.js 15, including Turbopack, Server Components optimization, and advanced caching strategies for building lightning-fast web applications.",
      excerptId: "Kuasai fitur terbaru dan pola arsitektur di Next.js 15, termasuk Turbopack, optimasi Server Components, dan strategi caching lanjutan untuk membangun aplikasi web yang sangat cepat.",
      category: "development",
      categoryEn: "Development",
      categoryId: "Pengembangan",
      readTime: 11,
      date: "2025-01-10",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      titleEn: "AI-Generated Content in Brand Strategy: Authenticity Meets Automation",
      titleId: "Konten Buatan AI dalam Strategi Merek: Keaslian Bertemu Otomasi",
      excerptEn: "Discover how leading brands are leveraging AI tools like ChatGPT, Claude, and Midjourney to create compelling content while maintaining authentic brand voice and human connection.",
      excerptId: "Temukan bagaimana merek terkemuka memanfaatkan alat AI seperti ChatGPT, Claude, dan Midjourney untuk membuat konten yang menarik sambil mempertahankan suara merek yang autentik dan koneksi manusia.",
      category: "branding",
      categoryEn: "Branding & Marketing",
      categoryId: "Branding & Pemasaran",
      readTime: 8,
      date: "2025-01-08",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      titleEn: "Edge Computing and IoT: Real-Time Data Processing at Scale",
      titleId: "Edge Computing dan IoT: Pemrosesan Data Real-Time dalam Skala Besar",
      excerptEn: "Understanding how edge computing is revolutionizing IoT implementations, enabling millisecond-latency decisions, reducing bandwidth costs, and improving system reliability in industrial environments.",
      excerptId: "Memahami bagaimana edge computing merevolusi implementasi IoT, memungkinkan keputusan dengan latensi milidetik, mengurangi biaya bandwidth, dan meningkatkan keandalan sistem di lingkungan industri.",
      category: "development",
      categoryEn: "Development",
      categoryId: "Pengembangan",
      readTime: 10,
      date: "2025-01-06",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      titleEn: "Digital Transformation ROI: Measuring Success Beyond the Numbers",
      titleId: "ROI Transformasi Digital: Mengukur Kesuksesan di Luar Angka",
      excerptEn: "Learn comprehensive frameworks for calculating digital transformation ROI, including quantitative metrics, cultural impact assessment, and long-term competitive advantage evaluation.",
      excerptId: "Pelajari kerangka komprehensif untuk menghitung ROI transformasi digital, termasuk metrik kuantitatif, penilaian dampak budaya, dan evaluasi keunggulan kompetitif jangka panjang.",
      category: "business",
      categoryEn: "Business Strategy",
      categoryId: "Strategi Bisnis",
      readTime: 12,
      date: "2025-01-04",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      titleEn: "Micro-Frontends: Scalable Architecture for Enterprise Applications",
      titleId: "Micro-Frontend: Arsitektur Skalabel untuk Aplikasi Enterprise",
      excerptEn: "Deep dive into micro-frontend architecture patterns, implementation strategies, and best practices for building maintainable large-scale web applications with independent deployment capabilities.",
      excerptId: "Penyelaman mendalam ke dalam pola arsitektur micro-frontend, strategi implementasi, dan praktik terbaik untuk membangun aplikasi web skala besar yang maintainable dengan kemampuan deployment independen.",
      category: "development",
      categoryEn: "Development",
      categoryId: "Pengembangan",
      readTime: 14,
      date: "2025-01-02",
      image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&h=600&fit=crop",
    },
  ];

  const faqs: FAQ[] = [
    {
      questionEn: "What services does Metaseti Digital Indonesia offer?",
      questionId: "Layanan apa yang ditawarkan Metaseti Digital Indonesia?",
      answerEn: "We specialize in three core areas: AI Integration & Automation (implementing Claude AI, ChatGPT, and custom AI solutions), Custom Development (Next.js, React, full-stack applications, and IoT solutions), and Branding & Marketing (digital strategy, content creation, and social media management). Our team delivers end-to-end digital transformation solutions tailored to your business needs.",
      answerId: "Kami mengkhususkan diri dalam tiga bidang inti: Integrasi & Otomasi AI (mengimplementasikan Claude AI, ChatGPT, dan solusi AI kustom), Pengembangan Kustom (Next.js, React, aplikasi full-stack, dan solusi IoT), dan Branding & Pemasaran (strategi digital, pembuatan konten, dan manajemen media sosial). Tim kami memberikan solusi transformasi digital end-to-end yang disesuaikan dengan kebutuhan bisnis Anda."
    },
    {
      questionEn: "How long does a typical project take?",
      questionId: "Berapa lama waktu yang dibutuhkan untuk proyek biasa?",
      answerEn: "Project timelines vary based on scope and complexity. A simple website or AI integration typically takes 2-4 weeks. Medium complexity projects (custom applications, comprehensive branding packages) require 6-12 weeks. Large-scale enterprise solutions may take 3-6 months. We provide detailed timelines during initial consultation and maintain transparent communication throughout the project lifecycle.",
      answerId: "Timeline proyek bervariasi berdasarkan ruang lingkup dan kompleksitas. Website sederhana atau integrasi AI biasanya memakan waktu 2-4 minggu. Proyek dengan kompleksitas menengah (aplikasi kustom, paket branding komprehensif) memerlukan 6-12 minggu. Solusi enterprise skala besar dapat memakan waktu 3-6 bulan. Kami memberikan timeline terperinci selama konsultasi awal dan menjaga komunikasi transparan sepanjang siklus proyek."
    },
    {
      questionEn: "Do you provide ongoing support after project completion?",
      questionId: "Apakah Anda menyediakan dukungan berkelanjutan setelah proyek selesai?",
      answerEn: "Yes! We offer comprehensive post-launch support including: 30-day warranty period for bug fixes, monthly maintenance packages for updates and optimization, 24/7 emergency support for critical issues, training sessions for your team, and continuous improvement recommendations. Our goal is to ensure your digital solutions continue delivering value long after launch.",
      answerId: "Ya! Kami menawarkan dukungan pasca-peluncuran yang komprehensif termasuk: periode garansi 30 hari untuk perbaikan bug, paket pemeliharaan bulanan untuk update dan optimasi, dukungan darurat 24/7 untuk masalah kritis, sesi pelatihan untuk tim Anda, dan rekomendasi peningkatan berkelanjutan. Tujuan kami adalah memastikan solusi digital Anda terus memberikan nilai jauh setelah peluncuran."
    },
    {
      questionEn: "What is your pricing model?",
      questionId: "Bagaimana model harga Anda?",
      answerEn: "We offer flexible pricing models to suit different needs: Project-based pricing for defined scope work, Monthly retainers for ongoing services, Hourly rates for consultations and small tasks, and Custom enterprise packages for large organizations. Contact us for a free consultation and detailed quote tailored to your specific requirements. We're transparent about costs and never have hidden fees.",
      answerId: "Kami menawarkan model harga yang fleksibel untuk memenuhi kebutuhan yang berbeda: Harga berbasis proyek untuk pekerjaan dengan ruang lingkup yang ditentukan, Retainer bulanan untuk layanan berkelanjutan, Tarif per jam untuk konsultasi dan tugas kecil, dan Paket enterprise kustom untuk organisasi besar. Hubungi kami untuk konsultasi gratis dan penawaran terperinci yang disesuaikan dengan kebutuhan spesifik Anda. Kami transparan tentang biaya dan tidak pernah memiliki biaya tersembunyi."
    },
    {
      questionEn: "Can you work with our existing team and systems?",
      questionId: "Bisakah Anda bekerja dengan tim dan sistem kami yang ada?",
      answerEn: "Absolutely! We excel at integration and collaboration. Our team can seamlessly work alongside your internal developers, integrate with your existing tech stack (APIs, databases, legacy systems), adapt to your development workflows and methodologies (Agile, Scrum, Waterfall), provide documentation and knowledge transfer, and ensure smooth handoffs. We view ourselves as an extension of your team, not just an external vendor.",
      answerId: "Tentu saja! Kami unggul dalam integrasi dan kolaborasi. Tim kami dapat bekerja dengan mulus bersama developer internal Anda, berintegrasi dengan tech stack yang ada (API, database, sistem legacy), beradaptasi dengan workflow dan metodologi pengembangan Anda (Agile, Scrum, Waterfall), menyediakan dokumentasi dan transfer pengetahuan, dan memastikan handoff yang mulus. Kami memandang diri kami sebagai perpanjangan dari tim Anda, bukan hanya vendor eksternal."
    },
    {
      questionEn: "How do you ensure project quality and security?",
      questionId: "Bagaimana Anda memastikan kualitas dan keamanan proyek?",
      answerEn: "Quality and security are paramount in everything we do. We implement: Rigorous code reviews and testing protocols, Industry-standard security practices (encryption, authentication, authorization), Regular security audits and vulnerability assessments, Compliance with data protection regulations (GDPR, local laws), Automated testing and continuous integration, and Documentation of all systems and processes. We're committed to delivering secure, high-quality solutions that protect your business and users.",
      answerId: "Kualitas dan keamanan adalah yang terpenting dalam semua yang kami lakukan. Kami mengimplementasikan: Review kode dan protokol testing yang ketat, Praktik keamanan standar industri (enkripsi, autentikasi, otorisasi), Audit keamanan reguler dan penilaian kerentanan, Kepatuhan terhadap regulasi perlindungan data (GDPR, hukum lokal), Testing otomatis dan continuous integration, dan Dokumentasi semua sistem dan proses. Kami berkomitmen untuk memberikan solusi berkualitas tinggi dan aman yang melindungi bisnis dan pengguna Anda."
    },
    {
      questionEn: "What makes Metaseti different from other digital agencies?",
      questionId: "Apa yang membedakan Metaseti dari agensi digital lainnya?",
      answerEn: "Our unique value proposition includes: Deep expertise in cutting-edge AI technologies (Claude, GPT-4, custom ML models), Full-stack capabilities from strategy to implementation, Transparent communication and no hidden costs, Agile methodology for faster delivery and flexibility, Post-launch commitment to your success, and Local understanding combined with global best practices. We don't just build solutions—we partner with you to drive measurable business outcomes.",
      answerId: "Proposisi nilai unik kami mencakup: Keahlian mendalam dalam teknologi AI terkini (Claude, GPT-4, model ML kustom), Kemampuan full-stack dari strategi hingga implementasi, Komunikasi transparan dan tanpa biaya tersembunyi, Metodologi agile untuk delivery lebih cepat dan fleksibilitas, Komitmen pasca-peluncuran untuk kesuksesan Anda, dan Pemahaman lokal dikombinasikan dengan best practices global. Kami tidak hanya membangun solusi—kami bermitra dengan Anda untuk mendorong hasil bisnis yang terukur."
    },
    {
      questionEn: "How can I get started with a project?",
      questionId: "Bagaimana cara memulai proyek?",
      answerEn: "Getting started is simple: 1) Contact us via WhatsApp, email, or our contact form, 2) Schedule a free 30-minute consultation to discuss your needs, 3) Receive a detailed proposal with timeline and pricing, 4) Sign the agreement and make initial payment, 5) Kick off the project with our team. We'll guide you through every step and ensure you're comfortable with the process. Ready to begin your digital transformation? Reach out today!",
      answerId: "Memulai sangat sederhana: 1) Hubungi kami melalui WhatsApp, email, atau formulir kontak kami, 2) Jadwalkan konsultasi gratis 30 menit untuk mendiskusikan kebutuhan Anda, 3) Terima proposal terperinci dengan timeline dan harga, 4) Tanda tangani perjanjian dan lakukan pembayaran awal, 5) Mulai proyek dengan tim kami. Kami akan memandu Anda melalui setiap langkah dan memastikan Anda nyaman dengan prosesnya. Siap memulai transformasi digital Anda? Hubungi kami hari ini!"
    }
  ];

  const filteredPosts = activeCategory === "all"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="opacity-0 animate-fadeIn">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
              {language === 'en' ? 'INSIGHTS & KNOWLEDGE' : 'WAWASAN & PENGETAHUAN'}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
              {language === 'en' ? 'Blog & FAQ' : 'Blog & FAQ'}
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
              {language === 'en' 
                ? 'Explore our latest insights on AI, development, and digital transformation. Find answers to common questions about our services.'
                : 'Jelajahi wawasan terbaru kami tentang AI, pengembangan, dan transformasi digital. Temukan jawaban untuk pertanyaan umum tentang layanan kami.'}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  px-6 py-2.5 text-sm font-light rounded-full border transition-all duration-200
                  ${activeCategory === cat.id
                    ? "bg-white/10 border-white/30 text-white backdrop-blur-xl"
                    : "bg-transparent border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                  }
                `}
              >
                {language === 'en' ? cat.labelEn : cat.labelId}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group h-full"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${post.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-light bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white">
                          {language === 'en' ? post.categoryEn : post.categoryId}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Meta Info */}
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                        <span>{new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        <span>•</span>
                        <span>{post.readTime} {language === 'en' ? 'min read' : 'menit baca'}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-light text-white mb-3 group-hover:text-gray-200 transition-colors duration-200 line-clamp-2">
                        {language === 'en' ? post.titleEn : post.titleId}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                        {language === 'en' ? post.excerptEn : post.excerptId}
                      </p>

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 text-white text-sm group-hover:gap-3 transition-all duration-200 mt-auto">
                        <span className="font-light">{language === 'en' ? 'Read More' : 'Baca Selengkapnya'}</span>
                        <svg 
                          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                {language === 'en' 
                  ? 'No blog posts found in this category.' 
                  : 'Tidak ada posting blog di kategori ini.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative px-6 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
              {language === 'en' ? 'FREQUENTLY ASKED' : 'PERTANYAAN UMUM'}
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              {language === 'en' ? 'Questions & Answers' : 'Pertanyaan & Jawaban'}
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {language === 'en'
                ? 'Find answers to common questions about our services, processes, and pricing.'
                : 'Temukan jawaban untuk pertanyaan umum tentang layanan, proses, dan harga kami.'}
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-200 hover:border-white/20"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left transition-colors duration-200 hover:bg-white/5"
                >
                  <span className="text-white font-light text-lg">
                    {language === 'en' ? faq.questionEn : faq.questionId}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-200 overflow-hidden ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                    {language === 'en' ? faq.answerEn : faq.answerId}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center p-8 border border-white/10 bg-white/5 backdrop-blur-xl">
            <p className="text-gray-400 mb-4">
              {language === 'en'
                ? "Still have questions? We're here to help!"
                : 'Masih punya pertanyaan? Kami di sini untuk membantu!'}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-light transition-all duration-200 hover:bg-gray-200"
            >
              {language === 'en' ? 'Contact Us' : 'Hubungi Kami'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
