"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      blog: 'Blog & FAQ',
      contact: 'Contact'
    },
    hero: {
      title1: 'Impact Engineered.',
      title2: 'Advantage Secured.',
      subtitle: 'From strategic design to measurable outcomes, our solutions are built for definitive success.',
      exploreServices: 'Explore Services',
      getInTouch: 'Get in Touch'
    },
    services: {
      title: 'Proposed Services',
      subtitle: 'What We Do',
      description: 'We craft solutions that deliver measurable impact and sustainable advantage.',
      learnMore: 'Learn More',
      service1: {
        title: 'Strategic AI Integration',
        description: 'Integrating automation and AI to streamline workflows and deliver real-time insights.',
        tags: [
          'AI Chatbots & Assistants',
          'Predictive Analytics & Insights',
          'AI Product Enhancement',
          'Automation & Workflow Optimization'
        ]
      },
      service2: {
        title: 'Custom Development',
        description: 'Building scalable digital products—websites, apps, and systems—designed for performance and growth.',
        tags: [
          'Web, App & System Development',
          'Custom Web Applications',
          'IoT & Smart System Implementation',
          'Maintenance & Optimization'
        ]
      },
      service3: {
        title: 'Branding & Marketing',
        description: 'Crafting impactful brand identities and campaigns that connect with the right audience.',
        tags: [
          'Brand Strategy & Visual Identity',
          'UI/UX & Creative Direction',
          'Digital Campaigns & Social Media',
          'Content Creation & Storytelling'
        ]
      }
    },
    about: {
      subtitle: 'About Us',
      title: 'Who Is Metaseti Digital Indonesia',
      description1: 'Rooted in a commitment to accelerate Indonesia\'s digital transformation, Metaseti Digital Indonesia engineers modern solutions that drive precision, performance, and measurable growth.',
      description2: 'Our team blends strategic creativity with advanced technology, crafting digital products and brand experiences that deliver real competitive advantage. With a focus on scalability and lasting impact, we empower businesses to innovate, evolve, and lead in the digital era.',
      description3: 'From custom development to AI integration and brand marketing, we transform ambition into tangible results that shape the future.',
      learnMore: 'Learn More About Us',
      stats: {
        innovation: 'Innovation Mindset',
        pillars: 'Service Pillars',
        response: 'Response Time',
        commitment: 'Commitment to Quality'
      }
    },
    contact: {
      subtitle: 'Get in Touch',
      title: 'Let\'s Talk About Your Next Project',
      description: 'Engineering solutions that deliver impact and secure competitive advantage through technology and strategic innovation.',
      phone: 'Phone',
      email: 'Email',
      instagram: 'Instagram',
      location: 'Our Location',
      form: {
        name: 'Name',
        namePlaceholder: 'Your Name',
        phone: 'Phone',
        phonePlaceholder: 'Your Phone Number',
        email: 'Email',
        emailPlaceholder: 'Your Email Address',
        message: 'Message',
        messagePlaceholder: 'Write your message...',
        send: 'Send Message'
      }
    },
    footer: {
      copyright: '© 2025 Metaseti Digital Indonesia',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    blog: {
      title: 'Insights & Resources',
      subtitle: 'Our Blog',
      description: 'Explore educational content, industry insights, and practical guides to help you navigate digital transformation.',
      readMore: 'Read More',
      readingTime: 'min read',
      categories: {
        all: 'All',
        ai: 'AI & Automation',
        development: 'Development',
        branding: 'Branding & Marketing',
        business: 'Business Strategy'
      }
    },
    aboutPage: {
      subtitle: 'About Us',
      title: 'Engineering Digital Excellence',
      description: 'We are a digital transformation company dedicated to helping businesses thrive in the modern era through innovative technology and strategic design.',
      whoWeAre: 'Who We Are',
      whoWeAreDesc1: 'Metaseti Digital Indonesia is a forward-thinking digital agency specializing in AI integration, custom development, and strategic branding. Founded with a vision to accelerate Indonesia\'s digital transformation, we combine technical expertise with creative excellence.',
      whoWeAreDesc2: 'Our multidisciplinary team works at the intersection of technology, design, and business strategy to deliver solutions that don\'t just meet expectations—they redefine what\'s possible.',
      stats: {
        projects: 'Projects Delivered',
        satisfaction: 'Client Satisfaction',
        partners: 'Industry Partners',
        support: 'Support Available'
      },
      ourStory: 'Our Story',
      storyDesc1: 'Metaseti Digital Indonesia was born from a simple observation: businesses in Indonesia were struggling to keep pace with rapid digital transformation. Many had the ambition to innovate but lacked the technical expertise and strategic guidance to make it happen effectively.',
      storyDesc2: 'Founded by a team of technology enthusiasts and creative minds, we set out to bridge this gap. What started as a small consultancy has grown into a comprehensive digital agency, serving clients from startups to established enterprises across Southeast Asia.',
      storyDesc3: 'Our approach has always been different. We don\'t just build software or design websites—we become strategic partners in our clients\' digital journey. Every project is an opportunity to create something remarkable, something that makes a real difference.',
      vision: 'Our Vision',
      visionDesc: 'To be Southeast Asia\'s leading digital transformation partner, recognized for turning innovative ideas into impactful realities that drive business growth and shape the future of industries.',
      mission: 'Our Mission',
      missionDesc: 'To empower businesses with cutting-edge digital solutions that combine strategic thinking, technical excellence, and creative innovation—delivering measurable results that create lasting competitive advantage in an evolving digital landscape.',
      coreValues: 'Our Core Values',
      coreValuesDesc: 'These principles guide every decision we make and every solution we deliver.',
      values: {
        innovation: {
          title: 'Innovation First',
          desc: 'We embrace cutting-edge technology and creative solutions to solve complex business challenges.'
        },
        clientCentric: {
          title: 'Client-Centric',
          desc: 'Your success is our priority. We build lasting partnerships through exceptional service and results.'
        },
        excellence: {
          title: 'Excellence',
          desc: 'We maintain the highest standards in every project, delivering quality that exceeds expectations.'
        },
        collaboration: {
          title: 'Collaboration',
          desc: 'We believe in the power of teamwork, both internally and with our clients, to achieve remarkable outcomes.'
        },
        integrity: {
          title: 'Integrity',
          desc: 'Transparency, honesty, and ethical practices guide every decision we make.'
        },
        growth: {
          title: 'Continuous Growth',
          desc: 'We\'re committed to constant learning and improvement, staying ahead of industry trends.'
        }
      },
      leadership: 'Meet Our Leadership',
      leadershipDesc: 'The visionaries behind Metaseti Digital Indonesia.',
      whyChoose: 'Why Choose Metaseti',
      whyChooseDesc: 'We deliver results that matter, backed by expertise and commitment to your success.',
      reasons: {
        expertise: {
          title: 'Proven Expertise',
          desc: 'Years of experience delivering successful digital transformation projects across industries.'
        },
        endToEnd: {
          title: 'End-to-End Solutions',
          desc: 'From strategy to deployment, we handle every aspect of your digital journey.'
        },
        agile: {
          title: 'Agile Delivery',
          desc: 'Fast, iterative development process with regular updates and transparent communication.'
        },
        results: {
          title: 'Measurable Results',
          desc: 'We focus on delivering tangible business outcomes and ROI, not just deliverables.'
        }
      },
      cta: 'Ready to start your digital transformation journey?',
      getInTouch: 'Get in Touch'
    },
    aiService: {
      title: 'Strategic AI Integration',
      subtitle: 'AI & Automation',
      description: 'Transform your business with intelligent automation and predictive analytics that drive efficiency, reduce costs, and unlock new opportunities for growth.',
      capabilities: 'Our AI Capabilities',
      capabilitiesDesc: 'Comprehensive AI solutions tailored to your business needs',
      capability1: {
        title: 'AI Chatbots & Assistants',
        desc: 'Intelligent conversational AI that handles customer inquiries, provides 24/7 support, and automates routine tasks with natural language understanding.'
      },
      capability2: {
        title: 'Predictive Analytics',
        desc: 'Machine learning models that analyze historical data to forecast trends, identify patterns, and enable data-driven decision making for your business.'
      },
      capability3: {
        title: 'Workflow Automation',
        desc: 'Streamline repetitive tasks and complex processes with intelligent automation that learns and adapts to your business operations.'
      },
      capability4: {
        title: 'AI Product Enhancement',
        desc: 'Integrate AI capabilities into your existing products—from recommendation engines to smart features that enhance user experience and engagement.'
      },
      capability5: {
        title: 'Computer Vision',
        desc: 'Image and video analysis for quality control, object detection, facial recognition, and automated visual inspection systems.'
      },
      capability6: {
        title: 'Natural Language Processing',
        desc: 'Extract insights from text data, perform sentiment analysis, automate document processing, and enable semantic search capabilities.'
      },
      benefits: 'Key Benefits',
      benefit1: '24/7 AI-powered customer support',
      benefit2: 'Intelligent automation workflows',
      benefit3: 'Real-time predictive analytics',
      benefit4: 'Seamless system integration',
      benefit5: 'Custom-trained AI models',
      benefit6: 'Scalable cloud infrastructure',
      process: 'Our Process',
      processDesc: 'A proven methodology for successful AI implementation',
      step1: {
        number: '01',
        title: 'Discovery & Analysis',
        desc: 'We analyze your business processes and identify AI opportunities that deliver maximum ROI.'
      },
      step2: {
        number: '02',
        title: 'Strategy & Design',
        desc: 'Custom AI solution architecture tailored to your specific needs and infrastructure.'
      },
      step3: {
        number: '03',
        title: 'Development & Training',
        desc: 'Building and training AI models with your data, ensuring accuracy and relevance.'
      },
      step4: {
        number: '04',
        title: 'Integration & Deployment',
        desc: 'Seamless integration with your existing systems and comprehensive team training.'
      },
      demo: 'Try Our AI Assistant',
      demoDesc: 'Experience intelligent conversation powered by AI',
      portfolio: 'Our Work',
      portfolioDesc: 'AI solutions we\'ve delivered for our clients',
      cta: 'Ready to transform your business with AI?',
      ctaButton: 'Start Your AI Journey',
      aiGreeting: 'Hello! I\'m the Metaseti AI Assistant. I can help you learn about our services, pricing, and how we can help your business. What would you like to know?',
      messagePlaceholder: 'Type your message...',
      send: 'Send'
    },
    devService: {
      title: 'Custom Development',
      subtitle: 'Web, Mobile & Systems',
      hero: 'Building Digital Products That Drive Results',
      description: 'We craft custom software solutions—web applications, mobile apps, ERP systems, and IoT platforms—designed for scalability, performance, and long-term success.',
      capabilities: 'Our Development Capabilities',
      capabilitiesDesc: 'End-to-end development services for modern businesses',
      capability1: {
        title: 'Web Applications',
        desc: 'Responsive, scalable web apps built with modern frameworks like React, Next.js, and Vue.js for optimal performance and user experience.'
      },
      capability2: {
        title: 'Mobile Development',
        desc: 'Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences and performance.'
      },
      capability3: {
        title: 'ERP Systems',
        desc: 'Custom enterprise resource planning systems that streamline operations, manage inventory, and automate business processes.'
      },
      capability4: {
        title: 'E-Commerce Platforms',
        desc: 'Complete online stores with payment integration, inventory management, customer accounts, and seamless checkout experiences.'
      },
      capability5: {
        title: 'IoT Solutions',
        desc: 'Connected device ecosystems with real-time monitoring, data analytics, remote control, and intelligent automation.'
      },
      capability6: {
        title: 'API Development',
        desc: 'RESTful and GraphQL APIs that enable seamless integration between your systems and third-party services.'
      },
      benefits: 'Key Benefits',
      benefit1: 'Scalable & maintainable architecture',
      benefit2: 'Modern technology stack',
      benefit3: 'Responsive cross-platform design',
      benefit4: 'Cloud infrastructure & deployment',
      benefit5: 'Security best practices',
      benefit6: 'Ongoing support & maintenance',
      process: 'Our Development Process',
      processDesc: 'Agile methodology ensuring quality and timely delivery',
      step1: {
        number: '01',
        title: 'Requirements & Planning',
        desc: 'Deep dive into your business goals, user needs, technical requirements, and project timeline to create a comprehensive development roadmap.'
      },
      step2: {
        number: '02',
        title: 'Design & Architecture',
        desc: 'Crafting system architecture, database design, API specifications, and UI/UX mockups with your feedback and approval.'
      },
      step3: {
        number: '03',
        title: 'Development & Testing',
        desc: 'Agile development sprints with regular demos, automated testing, code reviews, and quality assurance throughout the process.'
      },
      step4: {
        number: '04',
        title: 'Deployment & Support',
        desc: 'Production deployment, team training, comprehensive documentation, and ongoing technical support and maintenance.'
      },
      demo: 'Interactive Demo',
      demoDesc: 'Explore a live demonstration of our development capabilities',
      techStack: 'Technology Stack',
      techStackDesc: 'Modern, proven technologies we use',
      portfolio: 'Featured Projects',
      portfolioDesc: 'Custom solutions we\'ve delivered',
      cta: 'Ready to build your custom solution?',
      ctaButton: 'Start Your Project'
    },
    brandService: {
      title: 'Branding & Marketing',
      subtitle: 'Strategy & Growth',
      hero: 'Building Brands That Resonate and Convert',
      description: 'We create powerful brand identities and execute data-driven marketing campaigns that connect with your audience and deliver measurable business growth.',
      capabilities: 'Our Services',
      capabilitiesDesc: 'Comprehensive branding and marketing solutions',
      capability1: {
        title: 'Brand Strategy & Positioning',
        desc: 'Develop compelling brand positioning, messaging frameworks, and value propositions that differentiate you from competitors.'
      },
      capability2: {
        title: 'Visual Identity Design',
        desc: 'Create memorable logos, color systems, typography, and comprehensive brand guidelines that embody your essence.'
      },
      capability3: {
        title: 'UI/UX Design',
        desc: 'Design intuitive, user-centered digital interfaces that deliver exceptional experiences and drive engagement.'
      },
      capability4: {
        title: 'Digital Marketing Campaigns',
        desc: 'Execute strategic campaigns across social media, search engines, email, and digital channels for maximum reach and ROI.'
      },
      capability5: {
        title: 'Content Creation',
        desc: 'Produce engaging content—copywriting, photography, video production—that tells your story and resonates with audiences.'
      },
      capability6: {
        title: 'Performance Analytics',
        desc: 'Track, measure, and optimize campaign performance with detailed analytics, A/B testing, and conversion optimization.'
      },
      benefits: 'Key Benefits',
      benefit1: 'Distinctive brand identity',
      benefit2: 'Increased brand awareness',
      benefit3: 'Higher engagement rates',
      benefit4: 'Improved conversion metrics',
      benefit5: 'Data-driven optimization',
      benefit6: 'Consistent brand messaging',
      process: 'Our Approach',
      processDesc: 'Strategic methodology for sustainable brand growth',
      step1: {
        number: '01',
        title: 'Brand Discovery',
        desc: 'Comprehensive analysis of your business, target audience, competitive landscape, and market positioning opportunities.'
      },
      step2: {
        number: '02',
        title: 'Strategy Development',
        desc: 'Creating brand positioning, messaging architecture, visual direction, and integrated marketing strategy framework.'
      },
      step3: {
        number: '03',
        title: 'Creative Execution',
        desc: 'Designing visual identity, developing content assets, and producing marketing materials across all brand touchpoints.'
      },
      step4: {
        number: '04',
        title: 'Launch & Optimization',
        desc: 'Executing campaign launches, monitoring performance metrics, and continuously optimizing for maximum impact and ROI.'
      },
      demo: 'Brand Portfolio',
      demoDesc: 'Explore our creative work and brand transformations',
      services: 'Service Packages',
      servicesDesc: 'Tailored solutions for different business needs',
      portfolio: 'Our Work',
      portfolioDesc: 'Brands we\'ve built and grown',
      cta: 'Ready to elevate your brand?',
      ctaButton: 'Let\'s Talk Strategy'
    }
  },
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      services: 'Layanan',
      blog: 'Blog & FAQ',
      contact: 'Kontak'
    },
    hero: {
      title1: 'Dampak yang Dirancang.',
      title2: 'Keunggulan yang Terjamin.',
      subtitle: 'Dari desain strategis hingga hasil terukur, solusi kami dibangun untuk kesuksesan yang pasti.',
      exploreServices: 'Jelajahi Layanan',
      getInTouch: 'Hubungi Kami'
    },
    services: {
      title: 'Layanan yang Ditawarkan',
      subtitle: 'Apa yang Kami Lakukan',
      description: 'Kami merancang solusi yang memberikan dampak terukur dan keunggulan berkelanjutan.',
      learnMore: 'Pelajari Lebih Lanjut',
      service1: {
        title: 'Integrasi AI Strategis',
        description: 'Mengintegrasikan otomasi dan AI untuk menyederhanakan alur kerja dan memberikan wawasan real-time.',
        tags: [
          'Chatbot & Asisten AI',
          'Analitik & Wawasan Prediktif',
          'Peningkatan Produk AI',
          'Otomasi & Optimasi Alur Kerja'
        ]
      },
      service2: {
        title: 'Pengembangan Khusus',
        description: 'Membangun produk digital yang skalabel—situs web, aplikasi, dan sistem—dirancang untuk kinerja dan pertumbuhan.',
        tags: [
          'Pengembangan Web, Aplikasi & Sistem',
          'Aplikasi Web Khusus',
          'Implementasi IoT & Sistem Pintar',
          'Pemeliharaan & Optimasi'
        ]
      },
      service3: {
        title: 'Branding & Pemasaran',
        description: 'Merancang identitas merek yang berdampak dan kampanye yang terhubung dengan audiens yang tepat.',
        tags: [
          'Strategi Merek & Identitas Visual',
          'UI/UX & Arahan Kreatif',
          'Kampanye Digital & Media Sosial',
          'Pembuatan Konten & Storytelling'
        ]
      }
    },
    about: {
      subtitle: 'Tentang Kami',
      title: 'Siapa Itu Metaseti Digital Indonesia',
      description1: 'Berakar pada komitmen untuk mempercepat transformasi digital Indonesia, Metaseti Digital Indonesia merancang solusi modern yang mendorong presisi, kinerja, dan pertumbuhan terukur.',
      description2: 'Tim kami memadukan kreativitas strategis dengan teknologi canggih, merancang produk digital dan pengalaman merek yang memberikan keunggulan kompetitif nyata. Dengan fokus pada skalabilitas dan dampak berkelanjutan, kami memberdayakan bisnis untuk berinovasi, berkembang, dan memimpin di era digital.',
      description3: 'Dari pengembangan khusus hingga integrasi AI dan pemasaran merek, kami mengubah ambisi menjadi hasil nyata yang membentuk masa depan.',
      learnMore: 'Pelajari Lebih Lanjut Tentang Kami',
      stats: {
        innovation: 'Pola Pikir Inovasi',
        pillars: 'Pilar Layanan',
        response: 'Waktu Respons',
        commitment: 'Komitmen pada Kualitas'
      }
    },
    contact: {
      subtitle: 'Hubungi Kami',
      title: 'Mari Bicara Tentang Proyek Anda Selanjutnya',
      description: 'Merancang solusi yang memberikan dampak dan mengamankan keunggulan kompetitif melalui teknologi dan inovasi strategis.',
      phone: 'Telepon',
      email: 'Email',
      instagram: 'Instagram',
      location: 'Lokasi Kami',
      form: {
        name: 'Nama',
        namePlaceholder: 'Nama Anda',
        phone: 'Telepon',
        phonePlaceholder: 'Nomor Telepon Anda',
        email: 'Email',
        emailPlaceholder: 'Alamat Email Anda',
        message: 'Pesan',
        messagePlaceholder: 'Tulis pesan Anda...',
        send: 'Kirim Pesan'
      }
    },
    footer: {
      copyright: '© 2025 Metaseti Digital Indonesia',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat Layanan'
    },
    blog: {
      title: 'Wawasan & Sumber Daya',
      subtitle: 'Blog Kami',
      description: 'Jelajahi konten edukatif, wawasan industri, dan panduan praktis untuk membantu Anda menavigasi transformasi digital.',
      readMore: 'Baca Selengkapnya',
      readingTime: 'menit baca',
      categories: {
        all: 'Semua',
        ai: 'AI & Otomasi',
        development: 'Pengembangan',
        branding: 'Branding & Pemasaran',
        business: 'Strategi Bisnis'
      }
    },
    aboutPage: {
      subtitle: 'Tentang Kami',
      title: 'Merekayasa Keunggulan Digital',
      description: 'Kami adalah perusahaan transformasi digital yang didedikasikan untuk membantu bisnis berkembang di era modern melalui teknologi inovatif dan desain strategis.',
      whoWeAre: 'Siapa Kami',
      whoWeAreDesc1: 'Metaseti Digital Indonesia adalah agensi digital yang berpikiran maju yang berspesialisasi dalam integrasi AI, pengembangan khusus, dan branding strategis. Didirikan dengan visi untuk mempercepat transformasi digital Indonesia, kami menggabungkan keahlian teknis dengan keunggulan kreatif.',
      whoWeAreDesc2: 'Tim multidisiplin kami bekerja di persimpangan teknologi, desain, dan strategi bisnis untuk memberikan solusi yang tidak hanya memenuhi ekspektasi—tetapi mendefinisikan ulang apa yang mungkin.',
      stats: {
        projects: 'Proyek Diselesaikan',
        satisfaction: 'Kepuasan Klien',
        partners: 'Mitra Industri',
        support: 'Dukungan Tersedia'
      },
      ourStory: 'Kisah Kami',
      storyDesc1: 'Metaseti Digital Indonesia lahir dari pengamatan sederhana: bisnis di Indonesia kesulitan mengikuti transformasi digital yang cepat. Banyak yang memiliki ambisi untuk berinovasi tetapi tidak memiliki keahlian teknis dan panduan strategis untuk mewujudkannya secara efektif.',
      storyDesc2: 'Didirikan oleh tim penggemar teknologi dan pemikir kreatif, kami berangkat untuk menjembatani kesenjangan ini. Apa yang dimulai sebagai konsultansi kecil telah berkembang menjadi agensi digital komprehensif, melayani klien dari startup hingga perusahaan mapan di seluruh Asia Tenggara.',
      storyDesc3: 'Pendekatan kami selalu berbeda. Kami tidak hanya membangun perangkat lunak atau mendesain situs web—kami menjadi mitra strategis dalam perjalanan digital klien kami. Setiap proyek adalah kesempatan untuk menciptakan sesuatu yang luar biasa, sesuatu yang membuat perbedaan nyata.',
      vision: 'Visi Kami',
      visionDesc: 'Menjadi mitra transformasi digital terkemuka di Asia Tenggara, diakui karena mengubah ide inovatif menjadi realitas berdampak yang mendorong pertumbuhan bisnis dan membentuk masa depan industri.',
      mission: 'Misi Kami',
      missionDesc: 'Memberdayakan bisnis dengan solusi digital mutakhir yang menggabungkan pemikiran strategis, keunggulan teknis, dan inovasi kreatif—memberikan hasil terukur yang menciptakan keunggulan kompetitif berkelanjutan dalam lanskap digital yang berkembang.',
      coreValues: 'Nilai Inti Kami',
      coreValuesDesc: 'Prinsip-prinsip ini memandu setiap keputusan yang kami buat dan setiap solusi yang kami berikan.',
      values: {
        innovation: {
          title: 'Inovasi Utama',
          desc: 'Kami merangkul teknologi mutakhir dan solusi kreatif untuk memecahkan tantangan bisnis yang kompleks.'
        },
        clientCentric: {
          title: 'Berfokus pada Klien',
          desc: 'Kesuksesan Anda adalah prioritas kami. Kami membangun kemitraan berkelanjutan melalui layanan dan hasil yang luar biasa.'
        },
        excellence: {
          title: 'Keunggulan',
          desc: 'Kami mempertahankan standar tertinggi dalam setiap proyek, memberikan kualitas yang melampaui ekspektasi.'
        },
        collaboration: {
          title: 'Kolaborasi',
          desc: 'Kami percaya pada kekuatan kerja tim, baik secara internal maupun dengan klien kami, untuk mencapai hasil yang luar biasa.'
        },
        integrity: {
          title: 'Integritas',
          desc: 'Transparansi, kejujuran, dan praktik etis memandu setiap keputusan yang kami buat.'
        },
        growth: {
          title: 'Pertumbuhan Berkelanjutan',
          desc: 'Kami berkomitmen untuk pembelajaran dan peningkatan konstan, tetap unggul dari tren industri.'
        }
      },
      leadership: 'Temui Kepemimpinan Kami',
      leadershipDesc: 'Para visioner di balik Metaseti Digital Indonesia.',
      whyChoose: 'Mengapa Memilih Metaseti',
      whyChooseDesc: 'Kami memberikan hasil yang penting, didukung oleh keahlian dan komitmen terhadap kesuksesan Anda.',
      reasons: {
        expertise: {
          title: 'Keahlian Terbukti',
          desc: 'Bertahun-tahun pengalaman memberikan proyek transformasi digital yang sukses di berbagai industri.'
        },
        endToEnd: {
          title: 'Solusi End-to-End',
          desc: 'Dari strategi hingga deployment, kami menangani setiap aspek perjalanan digital Anda.'
        },
        agile: {
          title: 'Pengiriman Agile',
          desc: 'Proses pengembangan cepat dan iteratif dengan pembaruan rutin dan komunikasi transparan.'
        },
        results: {
          title: 'Hasil Terukur',
          desc: 'Kami fokus memberikan hasil bisnis yang nyata dan ROI, bukan hanya deliverable.'
        }
      },
      cta: 'Siap memulai perjalanan transformasi digital Anda?',
      getInTouch: 'Hubungi Kami'
    },
    aiService: {
      title: 'Integrasi AI Strategis',
      subtitle: 'AI & Otomasi',
      hero: 'Integrasi AI Strategis',
      description: 'Transformasikan bisnis Anda dengan otomasi cerdas dan analitik prediktif yang mendorong efisiensi, mengurangi biaya, dan membuka peluang pertumbuhan baru.',
      capabilities: 'Kemampuan AI Kami',
      capabilitiesDesc: 'Solusi AI komprehensif yang disesuaikan dengan kebutuhan bisnis Anda',
      capability1: {
        title: 'Chatbot & Asisten AI',
        desc: 'AI percakapan cerdas yang menangani pertanyaan pelanggan, memberikan dukungan 24/7, dan mengotomasi tugas rutin dengan pemahaman bahasa alami.'
      },
      capability2: {
        title: 'Analitik Prediktif',
        desc: 'Model machine learning yang menganalisis data historis untuk memperkirakan tren, mengidentifikasi pola, dan memungkinkan pengambilan keputusan berbasis data.'
      },
      capability3: {
        title: 'Otomasi Alur Kerja',
        desc: 'Sederhanakan tugas berulang dan proses kompleks dengan otomasi cerdas yang belajar dan beradaptasi dengan operasi bisnis Anda.'
      },
      capability4: {
        title: 'Peningkatan Produk AI',
        desc: 'Integrasikan kemampuan AI ke produk yang ada—dari mesin rekomendasi hingga fitur pintar yang meningkatkan pengalaman dan keterlibatan pengguna.'
      },
      capability5: {
        title: 'Computer Vision',
        desc: 'Analisis gambar dan video untuk kontrol kualitas, deteksi objek, pengenalan wajah, dan sistem inspeksi visual otomatis.'
      },
      capability6: {
        title: 'Natural Language Processing',
        desc: 'Ekstrak wawasan dari data teks, lakukan analisis sentimen, otomasi pemrosesan dokumen, dan aktifkan kemampuan pencarian semantik.'
      },
      benefits: 'Manfaat Utama',
      benefit1: 'Dukungan pelanggan bertenaga AI 24/7',
      benefit2: 'Alur kerja otomasi cerdas',
      benefit3: 'Analitik prediktif real-time',
      benefit4: 'Integrasi sistem mulus',
      benefit5: 'Model AI terlatih khusus',
      benefit6: 'Infrastruktur cloud skalabel',
      process: 'Proses Kami',
      processDesc: 'Metodologi terbukti untuk implementasi AI yang sukses',
      step1: {
        number: '01',
        title: 'Penemuan & Analisis',
        desc: 'Kami menganalisis proses bisnis Anda dan mengidentifikasi peluang AI yang memberikan ROI maksimum.'
      },
      step2: {
        number: '02',
        title: 'Strategi & Desain',
        desc: 'Arsitektur solusi AI khusus yang disesuaikan dengan kebutuhan dan infrastruktur spesifik Anda.'
      },
      step3: {
        number: '03',
        title: 'Pengembangan & Pelatihan',
        desc: 'Membangun dan melatih model AI dengan data Anda, memastikan akurasi dan relevansi.'
      },
      step4: {
        number: '04',
        title: 'Integrasi & Deployment',
        desc: 'Integrasi mulus dengan sistem yang ada dan pelatihan tim yang komprehensif.'
      },
      demo: 'Coba Asisten AI Kami',
      demoDesc: 'Rasakan percakapan cerdas yang didukung AI',
      portfolio: 'Karya Kami',
      portfolioDesc: 'Solusi AI yang telah kami berikan untuk klien kami',
      cta: 'Siap mengubah bisnis Anda dengan AI?',
      ctaButton: 'Mulai Perjalanan AI Anda',
      aiGreeting: 'Halo! Saya Asisten AI Metaseti. Saya dapat membantu Anda mempelajari layanan, harga, dan bagaimana kami dapat membantu bisnis Anda. Apa yang ingin Anda ketahui?',
      messagePlaceholder: 'Ketik pesan Anda...',
      send: 'Kirim'
    },
    devService: {
      title: 'Pengembangan Khusus',
      subtitle: 'Web, Mobile & Sistem',
      hero: 'Membangun Produk Digital yang Menghasilkan',
      description: 'Kami merancang solusi perangkat lunak khusus—aplikasi web, aplikasi mobile, sistem ERP, dan platform IoT—yang dirancang untuk skalabilitas, kinerja, dan kesuksesan jangka panjang.',
      capabilities: 'Kemampuan Pengembangan Kami',
      capabilitiesDesc: 'Layanan pengembangan end-to-end untuk bisnis modern',
      capability1: {
        title: 'Aplikasi Web',
        desc: 'Aplikasi web responsif dan skalabel yang dibangun dengan framework modern seperti React, Next.js, dan Vue.js untuk kinerja dan pengalaman pengguna yang optimal.'
      },
      capability2: {
        title: 'Pengembangan Mobile',
        desc: 'Aplikasi mobile native dan cross-platform untuk iOS dan Android yang memberikan pengalaman pengguna dan kinerja luar biasa.'
      },
      capability3: {
        title: 'Sistem ERP',
        desc: 'Sistem perencanaan sumber daya perusahaan khusus yang menyederhanakan operasi, mengelola inventaris, dan mengotomasi proses bisnis.'
      },
      capability4: {
        title: 'Platform E-Commerce',
        desc: 'Toko online lengkap dengan integrasi pembayaran, manajemen inventaris, akun pelanggan, dan pengalaman checkout yang mulus.'
      },
      capability5: {
        title: 'Solusi IoT',
        desc: 'Ekosistem perangkat terhubung dengan pemantauan real-time, analitik data, kontrol jarak jauh, dan otomasi cerdas.'
      },
      capability6: {
        title: 'Pengembangan API',
        desc: 'API RESTful dan GraphQL yang memungkinkan integrasi mulus antara sistem Anda dan layanan pihak ketiga.'
      },
      benefits: 'Manfaat Utama',
      benefit1: 'Arsitektur skalabel & maintainable',
      benefit2: 'Tech stack modern',
      benefit3: 'Desain responsif cross-platform',
      benefit4: 'Infrastruktur & deployment cloud',
      benefit5: 'Praktik keamanan terbaik',
      benefit6: 'Dukungan & maintenance berkelanjutan',
      process: 'Proses Pengembangan Kami',
      processDesc: 'Metodologi Agile yang memastikan kualitas dan pengiriman tepat waktu',
      step1: {
        number: '01',
        title: 'Kebutuhan & Perencanaan',
        desc: 'Penyelaman mendalam ke tujuan bisnis, kebutuhan pengguna, persyaratan teknis, dan timeline proyek untuk membuat roadmap pengembangan komprehensif.'
      },
      step2: {
        number: '02',
        title: 'Desain & Arsitektur',
        desc: 'Membuat arsitektur sistem, desain database, spesifikasi API, dan mockup UI/UX dengan umpan balik dan persetujuan Anda.'
      },
      step3: {
        number: '03',
        title: 'Pengembangan & Testing',
        desc: 'Sprint pengembangan Agile dengan demo rutin, pengujian otomatis, code review, dan quality assurance sepanjang proses.'
      },
      step4: {
        number: '04',
        title: 'Deployment & Dukungan',
        desc: 'Deployment produksi, pelatihan tim, dokumentasi komprehensif, dan dukungan teknis serta maintenance berkelanjutan.'
      },
      demo: 'Demo Interaktif',
      demoDesc: 'Jelajahi demonstrasi langsung kemampuan pengembangan kami',
      techStack: 'Tech Stack',
      techStackDesc: 'Teknologi modern dan terbukti yang kami gunakan',
      portfolio: 'Proyek Unggulan',
      portfolioDesc: 'Solusi khusus yang telah kami berikan',
      cta: 'Siap membangun solusi khusus Anda?',
      ctaButton: 'Mulai Proyek Anda'
    },
    brandService: {
      title: 'Branding & Pemasaran',
      subtitle: 'Strategi & Pertumbuhan',
      hero: 'Membangun Merek yang Beresonansi dan Mengkonversi',
      description: 'Kami menciptakan identitas merek yang kuat dan menjalankan kampanye pemasaran berbasis data yang terhubung dengan audiens Anda dan memberikan pertumbuhan bisnis terukur.',
      capabilities: 'Layanan Kami',
      capabilitiesDesc: 'Solusi branding dan pemasaran komprehensif',
      capability1: {
        title: 'Strategi & Positioning Merek',
        desc: 'Kembangkan positioning merek, kerangka pesan, dan proposisi nilai yang menarik yang membedakan Anda dari kompetitor.'
      },
      capability2: {
        title: 'Desain Identitas Visual',
        desc: 'Buat logo yang berkesan, sistem warna, tipografi, dan pedoman merek komprehensif yang mewujudkan esensi Anda.'
      },
      capability3: {
        title: 'Desain UI/UX',
        desc: 'Rancang antarmuka digital intuitif yang berpusat pada pengguna yang memberikan pengalaman luar biasa dan mendorong keterlibatan.'
      },
      capability4: {
        title: 'Kampanye Pemasaran Digital',
        desc: 'Jalankan kampanye strategis di media sosial, mesin pencari, email, dan saluran digital untuk jangkauan dan ROI maksimum.'
      },
      capability5: {
        title: 'Pembuatan Konten',
        desc: 'Produksi konten yang menarik—copywriting, fotografi, produksi video—yang menceritakan kisah Anda dan beresonansi dengan audiens.'
      },
      capability6: {
        title: 'Analitik Kinerja',
        desc: 'Lacak, ukur, dan optimalkan kinerja kampanye dengan analitik detail, A/B testing, dan optimasi konversi.'
      },
      benefits: 'Manfaat Utama',
      benefit1: 'Identitas merek yang khas',
      benefit2: 'Peningkatan kesadaran merek',
      benefit3: 'Tingkat keterlibatan lebih tinggi',
      benefit4: 'Metrik konversi yang ditingkatkan',
      benefit5: 'Optimasi berbasis data',
      benefit6: 'Pesan merek yang konsisten',
      process: 'Pendekatan Kami',
      processDesc: 'Metodologi strategis untuk pertumbuhan merek berkelanjutan',
      step1: {
        number: '01',
        title: 'Penemuan Merek',
        desc: 'Analisis komprehensif bisnis Anda, target audiens, lanskap kompetitif, dan peluang positioning pasar.'
      },
      step2: {
        number: '02',
        title: 'Pengembangan Strategi',
        desc: 'Membuat positioning merek, arsitektur pesan, arahan visual, dan kerangka strategi pemasaran terintegrasi.'
      },
      step3: {
        number: '03',
        title: 'Eksekusi Kreatif',
        desc: 'Merancang identitas visual, mengembangkan aset konten, dan memproduksi materi pemasaran di semua touchpoint merek.'
      },
      step4: {
        number: '04',
        title: 'Peluncuran & Optimasi',
        desc: 'Menjalankan peluncuran kampanye, memantau metrik kinerja, dan terus mengoptimalkan untuk dampak dan ROI maksimum.'
      },
      demo: 'Portofolio Merek',
      demoDesc: 'Jelajahi karya kreatif dan transformasi merek kami',
      services: 'Paket Layanan',
      servicesDesc: 'Solusi yang disesuaikan untuk kebutuhan bisnis berbeda',
      portfolio: 'Karya Kami',
      portfolioDesc: 'Merek yang telah kami bangun dan kembangkan',
      cta: 'Siap mengangkat merek Anda?',
      ctaButton: 'Mari Bicara Strategi'
    }
  }
};
