"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useLanguage } from "@/app/context/LanguageContext";
import Image from "next/image";

interface Reference {
  title: string;
  url: string;
  source: string;
}

interface BlogPost {
  id: number;
  titleEn: string;
  titleId: string;
  excerptEn: string;
  excerptId: string;
  sectionsEn: Section[];
  sectionsId: Section[];
  referencesEn: Reference[];
  referencesId: Reference[];
  category: string;
  categoryEn: string;
  categoryId: string;
  readTime: number;
  date: string;
  heroImage: string;
  author: string;
  authorBio: string;
}

interface Section {
  type: 'heading' | 'paragraph' | 'list' | 'image' | 'quote';
  content: string | string[];
  imageUrl?: string;
  imageAlt?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    titleEn: "Claude Sonnet 4.5: The New Standard for Enterprise AI Integration",
    titleId: "Claude Sonnet 4.5: Standar Baru untuk Integrasi AI Perusahaan",
    excerptEn: "Explore how Anthropic's latest Claude Sonnet 4.5 is transforming business operations with enhanced reasoning capabilities, extended context windows, and superior performance.",
    excerptId: "Jelajahi bagaimana Claude Sonnet 4.5 terbaru dari Anthropic mengubah operasi bisnis dengan kemampuan penalaran yang ditingkatkan, jendela konteks yang diperluas, dan kinerja superior.",
    sectionsEn: [
      { type: 'heading', content: 'The Evolution of Enterprise AI' },
      { type: 'paragraph', content: "Anthropic's Claude Sonnet 4.5 represents a significant leap forward in enterprise AI capabilities. Released in late 2024, this model has quickly become the go-to solution for businesses looking to implement sophisticated AI systems that can handle complex, multi-step reasoning tasks." },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop', imageAlt: 'AI Neural Network Visualization' },
      { type: 'heading', content: 'Key Enhancements' },
      { type: 'paragraph', content: 'One of the most impressive features of Claude Sonnet 4.5 is its 200,000 token context window. This allows the model to process and analyze entire codebases, lengthy documents, and complex business reports in a single conversation.' },
      { type: 'list', content: ['Legal document analysis and contract review', 'Technical documentation and API reference processing', 'Code repository analysis and optimization', 'Multi-document research synthesis'] },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1655635949384-f737c5133dfe?w=1200&h=675&fit=crop', imageAlt: 'AI Processing Data Streams' },
      { type: 'heading', content: 'Superior Reasoning Capabilities' },
      { type: 'paragraph', content: 'The model demonstrates exceptional performance in complex problem-solving, breaking down intricate business challenges into actionable steps. It excels at data analysis, interpreting large datasets and identifying key insights that drive business value.' },
      { type: 'quote', content: 'Claude Sonnet 4.5 has reduced our analysis time by 60% while improving accuracy by 40%. It\'s revolutionizing how we approach data-driven decision making.' },
      { type: 'heading', content: 'Real-World Applications' },
      { type: 'paragraph', content: 'Companies implementing Claude Sonnet 4.5 for customer support have reported 60% reduction in response times and 40% improvement in customer satisfaction scores. The model\'s ability to understand context and maintain conversation coherence makes it ideal for handling complex customer inquiries.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=675&fit=crop', imageAlt: 'Global Digital Connectivity' },
      { type: 'heading', content: 'Implementation Best Practices' },
      { type: 'paragraph', content: 'To maximize the value of Claude Sonnet 4.5, start with clear use cases and well-defined objectives. Invest in prompt engineering to leverage the model\'s reasoning capabilities. Establish proper evaluation metrics including task completion accuracy, response quality, and user satisfaction. Implement robust security measures with data encryption and access controls.' },
      { type: 'heading', content: 'Getting Started' },
      { type: 'paragraph', content: 'Begin your Claude Sonnet 4.5 integration journey by assessing current business processes, identifying high-value automation opportunities, starting with a focused pilot project, measuring results rigorously, and scaling successful implementations across your organization.' },
    ],
    sectionsId: [
      { type: 'heading', content: 'Evolusi AI Perusahaan' },
      { type: 'paragraph', content: "Claude Sonnet 4.5 dari Anthropic merupakan lompatan signifikan dalam kemampuan AI perusahaan. Dirilis pada akhir 2024, model ini dengan cepat menjadi solusi pilihan bagi bisnis yang ingin mengimplementasikan sistem AI canggih yang dapat menangani tugas penalaran kompleks multi-langkah." },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop', imageAlt: 'Visualisasi Neural Network AI' },
      { type: 'heading', content: 'Peningkatan Utama' },
      { type: 'paragraph', content: 'Salah satu fitur paling mengesankan dari Claude Sonnet 4.5 adalah jendela konteks 200.000 token. Ini memungkinkan model untuk memproses dan menganalisis seluruh codebase, dokumen panjang, dan laporan bisnis kompleks dalam satu percakapan.' },
      { type: 'list', content: ['Analisis dokumen hukum dan tinjauan kontrak', 'Dokumentasi teknis dan pemrosesan referensi API', 'Analisis dan optimasi repositori kode', 'Sintesis penelitian multi-dokumen'] },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1655635949384-f737c5133dfe?w=1200&h=675&fit=crop', imageAlt: 'AI Memproses Aliran Data' },
      { type: 'heading', content: 'Kemampuan Penalaran Superior' },
      { type: 'paragraph', content: 'Model ini menunjukkan kinerja luar biasa dalam pemecahan masalah kompleks, menguraikan tantangan bisnis rumit menjadi langkah-langkah yang dapat ditindaklanjuti. Model ini unggul dalam analisis data, menginterpretasi dataset besar dan mengidentifikasi wawasan kunci yang mendorong nilai bisnis.' },
      { type: 'quote', content: 'Claude Sonnet 4.5 telah mengurangi waktu analisis kami sebesar 60% sambil meningkatkan akurasi sebesar 40%. Ini merevolusi cara kami mendekati pengambilan keputusan berbasis data.' },
      { type: 'heading', content: 'Aplikasi Dunia Nyata' },
      { type: 'paragraph', content: 'Perusahaan yang mengimplementasikan Claude Sonnet 4.5 untuk dukungan pelanggan melaporkan pengurangan 60% dalam waktu respons dan peningkatan 40% dalam skor kepuasan pelanggan. Kemampuan model untuk memahami konteks dan mempertahankan koherensi percakapan menjadikannya ideal untuk menangani pertanyaan pelanggan yang kompleks.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=675&fit=crop', imageAlt: 'Konektivitas Digital Global' },
      { type: 'heading', content: 'Praktik Terbaik Implementasi' },
      { type: 'paragraph', content: 'Untuk memaksimalkan nilai Claude Sonnet 4.5, mulai dengan use case yang jelas dan tujuan yang terdefinisi dengan baik. Investasi dalam prompt engineering untuk memanfaatkan kemampuan penalaran model. Tetapkan metrik evaluasi yang tepat termasuk akurasi penyelesaian tugas, kualitas respons, dan kepuasan pengguna. Implementasikan langkah keamanan yang kuat dengan enkripsi data dan kontrol akses.' },
      { type: 'heading', content: 'Memulai' },
      { type: 'paragraph', content: 'Mulai perjalanan integrasi Claude Sonnet 4.5 Anda dengan menilai proses bisnis saat ini, mengidentifikasi peluang otomasi bernilai tinggi, memulai dengan proyek pilot yang terfokus, mengukur hasil secara ketat, dan scaling implementasi yang berhasil di seluruh organisasi Anda.' },
    ],
    referencesEn: [
      { title: "Anthropic's Claude Model Documentation", url: "https://docs.anthropic.com", source: "Anthropic" },
      { title: "Enterprise AI Implementation Guide", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights", source: "McKinsey & Company" },
      { title: "Large Language Models in Business", url: "https://www.gartner.com/en/topics/artificial-intelligence", source: "Gartner Research" },
      { title: "AI Ethics and Best Practices", url: "https://www.oecd.org/digital/artificial-intelligence/", source: "OECD AI Policy Observatory" }
    ],
    referencesId: [
      { title: "Dokumentasi Model Claude Anthropic", url: "https://docs.anthropic.com", source: "Anthropic" },
      { title: "Panduan Implementasi AI Enterprise", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights", source: "McKinsey & Company" },
      { title: "Large Language Model dalam Bisnis", url: "https://www.gartner.com/en/topics/artificial-intelligence", source: "Gartner Research" },
      { title: "Etika AI dan Praktik Terbaik", url: "https://www.oecd.org/digital/artificial-intelligence/", source: "OECD AI Policy Observatory" }
    ],
    category: "ai",
    categoryEn: "AI & Automation",
    categoryId: "AI & Otomasi",
    readTime: 9,
    date: "2025-01-12",
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&h=900&fit=crop",
    author: "Metaseti Digital Team",
    authorBio: "AI Integration Specialists"
  },
  {
    id: 2,
    titleEn: "Next.js 15 Best Practices: Building Production-Ready Applications in 2025",
    titleId: "Praktik Terbaik Next.js 15: Membangun Aplikasi Siap Produksi di 2025",
    excerptEn: "Master the latest features and architectural patterns in Next.js 15, including Turbopack, Server Components optimization, and advanced caching strategies.",
    excerptId: "Kuasai fitur terbaru dan pola arsitektur di Next.js 15, termasuk Turbopack, optimasi Server Components, dan strategi caching lanjutan.",
    sectionsEn: [
      { type: 'heading', content: 'Next.js 15: A Game Changer' },
      { type: 'paragraph', content: 'Next.js 15 introduces groundbreaking features that significantly improve developer experience and application performance. From Turbopack\'s blazing-fast builds to enhanced Server Components, this release sets new standards for React frameworks.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=675&fit=crop', imageAlt: 'Modern Web Development Code' },
      { type: 'heading', content: 'Turbopack: The Future of Bundling' },
      { type: 'paragraph', content: 'Turbopack replaces Webpack with incredible performance improvements. It offers 700x faster updates than Webpack, native TypeScript support without transpilation, incremental computation for instant feedback, and built-in CSS and image optimization.' },
      { type: 'list', content: ['700x faster hot module replacement', 'Zero-config TypeScript support', 'Automatic code splitting', 'Built-in asset optimization', 'Incremental compilation'] },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=675&fit=crop', imageAlt: 'Programming Workspace' },
      { type: 'heading', content: 'Server Components Evolution' },
      { type: 'paragraph', content: 'Server Components in Next.js 15 offer zero JavaScript shipped to client by default, direct database queries from components, automatic code splitting at component boundaries, and dramatically improved SEO performance through faster initial page loads.' },
      { type: 'quote', content: 'Next.js 15 reduced our initial load time by 60% and increased our Lighthouse score from 78 to 98. The performance gains are remarkable.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=675&fit=crop', imageAlt: 'Developer Coding Environment' },
      { type: 'heading', content: 'Performance Optimization Strategies' },
      { type: 'paragraph', content: 'Implement effective caching with time-based revalidation and on-demand revalidation patterns. Leverage Next.js Image component for automatic optimization. Use font optimization for better Core Web Vitals. Implement proper code splitting and lazy loading strategies.' },
      { type: 'heading', content: 'Production Deployment Best Practices' },
      { type: 'paragraph', content: 'Configure proper environment variables separating development and production settings. Implement comprehensive monitoring with real user metrics and error tracking. Set up automated testing pipelines. Use edge functions for improved global performance. Implement proper security headers and CSP policies.' },
    ],
    sectionsId: [
      { type: 'heading', content: 'Next.js 15: Pengubah Permainan' },
      { type: 'paragraph', content: 'Next.js 15 memperkenalkan fitur revolusioner yang secara signifikan meningkatkan pengalaman developer dan kinerja aplikasi. Dari build super cepat Turbopack hingga Server Components yang ditingkatkan, rilis ini menetapkan standar baru untuk framework React.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=675&fit=crop', imageAlt: 'Kode Pengembangan Web Modern' },
      { type: 'heading', content: 'Turbopack: Masa Depan Bundling' },
      { type: 'paragraph', content: 'Turbopack menggantikan Webpack dengan peningkatan kinerja yang luar biasa. Ia menawarkan update 700x lebih cepat daripada Webpack, dukungan TypeScript native tanpa transpilasi, komputasi inkremental untuk feedback instan, dan optimasi CSS dan gambar built-in.' },
      { type: 'list', content: ['Hot module replacement 700x lebih cepat', 'Dukungan TypeScript tanpa konfigurasi', 'Code splitting otomatis', 'Optimasi asset built-in', 'Kompilasi inkremental'] },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=675&fit=crop', imageAlt: 'Workspace Pemrograman' },
      { type: 'heading', content: 'Evolusi Server Components' },
      { type: 'paragraph', content: 'Server Components di Next.js 15 menawarkan zero JavaScript dikirim ke client secara default, query database langsung dari components, code splitting otomatis di batas component, dan kinerja SEO yang ditingkatkan secara dramatis melalui loading halaman awal yang lebih cepat.' },
      { type: 'quote', content: 'Next.js 15 mengurangi waktu loading awal kami sebesar 60% dan meningkatkan skor Lighthouse kami dari 78 menjadi 98. Peningkatan kinerjanya luar biasa.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=675&fit=crop', imageAlt: 'Lingkungan Coding Developer' },
      { type: 'heading', content: 'Strategi Optimasi Kinerja' },
      { type: 'paragraph', content: 'Implementasikan caching yang efektif dengan pola revalidation berbasis waktu dan revalidation on-demand. Manfaatkan komponen Image Next.js untuk optimasi otomatis. Gunakan optimasi font untuk Core Web Vitals yang lebih baik. Implementasikan strategi code splitting dan lazy loading yang tepat.' },
      { type: 'heading', content: 'Praktik Terbaik Deployment Produksi' },
      { type: 'paragraph', content: 'Konfigurasi environment variable yang tepat memisahkan setting development dan production. Implementasikan monitoring komprehensif dengan metrik pengguna real dan error tracking. Setup pipeline testing otomatis. Gunakan edge function untuk kinerja global yang lebih baik. Implementasikan security header dan kebijakan CSP yang tepat.' },
    ],
    referencesEn: [
      { title: "Next.js 15 Official Documentation", url: "https://nextjs.org/docs", source: "Vercel" },
      { title: "React Server Components Explained", url: "https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023", source: "React Team" },
      { title: "Web Performance Optimization Guide", url: "https://web.dev/performance/", source: "Google Chrome Developers" },
      { title: "Turbopack Performance Benchmarks", url: "https://turbo.build/pack/docs", source: "Turbo" }
    ],
    referencesId: [
      { title: "Dokumentasi Resmi Next.js 15", url: "https://nextjs.org/docs", source: "Vercel" },
      { title: "Penjelasan React Server Components", url: "https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023", source: "Tim React" },
      { title: "Panduan Optimasi Kinerja Web", url: "https://web.dev/performance/", source: "Google Chrome Developers" },
      { title: "Benchmark Kinerja Turbopack", url: "https://turbo.build/pack/docs", source: "Turbo" }
    ],
    category: "development",
    categoryEn: "Development",
    categoryId: "Pengembangan",
    readTime: 11,
    date: "2025-01-10",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&h=900&fit=crop",
    author: "Metaseti Digital Team",
    authorBio: "Full-Stack Development Experts"
  },
  {
    id: 3,
    titleEn: "AI-Generated Content in Brand Strategy: Authenticity Meets Automation",
    titleId: "Konten Buatan AI dalam Strategi Merek: Keaslian Bertemu Otomasi",
    excerptEn: "Discover how leading brands are leveraging AI tools like ChatGPT, Claude, and Midjourney to create compelling content while maintaining authentic brand voice.",
    excerptId: "Temukan bagaimana merek terkemuka memanfaatkan alat AI seperti ChatGPT, Claude, dan Midjourney untuk membuat konten yang menarik sambil mempertahankan suara merek yang autentik.",
    sectionsEn: [
      { type: 'heading', content: 'The AI Content Revolution' },
      { type: 'paragraph', content: 'AI-generated content has evolved from a novelty to a powerful tool in modern brand strategy. Leading companies are discovering that the key isn\'t choosing between authenticity and automation—it\'s finding the sweet spot where both thrive together.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=675&fit=crop', imageAlt: 'Creative Marketing Strategy' },
      { type: 'heading', content: 'AI Tools Transforming Content Creation' },
      { type: 'list', content: ['Text Generation: ChatGPT, Claude, Jasper for copywriting', 'Image Creation: Midjourney, DALL-E 3, Stable Diffusion for visuals', 'Video Production: Runway ML, Synthesia for video content', 'Audio and Voice: ElevenLabs, Descript for voiceovers'] },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=675&fit=crop', imageAlt: 'Digital Marketing Team Collaboration' },
      { type: 'heading', content: 'Maintaining Brand Authenticity' },
      { type: 'paragraph', content: 'Ensure AI-generated content reflects your brand by creating comprehensive brand guidelines with tone, voice, and style examples. Train AI models with your existing high-quality content. Establish rigorous review processes with human oversight at every stage. The goal is augmentation, not replacement of human creativity.' },
      { type: 'quote', content: 'We use AI to draft 80% of our content, but human editors ensure every piece maintains our unique brand voice. It\'s the perfect balance of efficiency and authenticity.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=675&fit=crop', imageAlt: 'Brand Strategy Planning' },
      { type: 'heading', content: 'Proven Success Stories' },
      { type: 'paragraph', content: 'An e-commerce brand needed 500 product descriptions monthly. Using Claude for initial drafts combined with human refinement, they achieved 80% time savings, maintained consistent quality across their entire catalog, saw a 25% increase in conversion rates, and preserved their distinctive brand personality throughout.' },
      { type: 'heading', content: 'Implementation Roadmap' },
      { type: 'paragraph', content: 'Start with low-stakes content like social media posts. Develop comprehensive AI training guidelines. Create editorial workflows with clear approval stages. Monitor performance metrics continuously. Scale successful approaches while maintaining quality standards. Invest in ongoing prompt engineering training for your team.' },
    ],
    sectionsId: [
      { type: 'heading', content: 'Revolusi Konten AI' },
      { type: 'paragraph', content: 'Konten yang dihasilkan AI telah berkembang dari kebaruan menjadi alat yang kuat dalam strategi merek modern. Perusahaan terkemuka menemukan bahwa kuncinya bukan memilih antara keaslian dan otomasi—tetapi menemukan titik manis di mana keduanya berkembang bersama.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=675&fit=crop', imageAlt: 'Strategi Pemasaran Kreatif' },
      { type: 'heading', content: 'Alat AI yang Mengubah Pembuatan Konten' },
      { type: 'list', content: ['Generasi Teks: ChatGPT, Claude, Jasper untuk copywriting', 'Pembuatan Gambar: Midjourney, DALL-E 3, Stable Diffusion untuk visual', 'Produksi Video: Runway ML, Synthesia untuk konten video', 'Audio dan Suara: ElevenLabs, Descript untuk voiceover'] },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=675&fit=crop', imageAlt: 'Kolaborasi Tim Pemasaran Digital' },
      { type: 'heading', content: 'Mempertahankan Keaslian Merek' },
      { type: 'paragraph', content: 'Pastikan konten yang dihasilkan AI mencerminkan merek Anda dengan membuat pedoman merek komprehensif dengan contoh tone, voice, dan style. Latih model AI dengan konten berkualitas tinggi yang ada. Tetapkan proses tinjauan yang ketat dengan pengawasan manusia di setiap tahap. Tujuannya adalah augmentasi, bukan penggantian kreativitas manusia.' },
      { type: 'quote', content: 'Kami menggunakan AI untuk draft 80% konten kami, tetapi editor manusia memastikan setiap karya mempertahankan suara merek unik kami. Ini keseimbangan sempurna antara efisiensi dan keaslian.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=675&fit=crop', imageAlt: 'Perencanaan Strategi Merek' },
      { type: 'heading', content: 'Kisah Sukses yang Terbukti' },
      { type: 'paragraph', content: 'Sebuah merek e-commerce membutuhkan 500 deskripsi produk bulanan. Menggunakan Claude untuk draft awal dikombinasikan dengan penyempurnaan manusia, mereka mencapai penghematan waktu 80%, mempertahankan kualitas konsisten di seluruh katalog, melihat peningkatan 25% dalam tingkat konversi, dan mempertahankan kepribadian merek yang khas.' },
      { type: 'heading', content: 'Roadmap Implementasi' },
      { type: 'paragraph', content: 'Mulai dengan konten low-stakes seperti posting media sosial. Kembangkan pedoman pelatihan AI yang komprehensif. Buat workflow editorial dengan tahap persetujuan yang jelas. Monitor metrik kinerja secara berkelanjutan. Scale pendekatan yang berhasil sambil mempertahankan standar kualitas. Investasi dalam pelatihan prompt engineering berkelanjutan untuk tim Anda.' },
    ],
    referencesEn: [
      { title: "Content Marketing Institute AI Guide", url: "https://contentmarketinginstitute.com/", source: "Content Marketing Institute" },
      { title: "HubSpot AI Marketing Report 2024", url: "https://www.hubspot.com/marketing-statistics", source: "HubSpot Research" },
      { title: "The State of AI in Marketing", url: "https://www.marketingaiinstitute.com/", source: "Marketing AI Institute" },
      { title: "Brand Voice Guidelines", url: "https://www.nngroup.com/articles/brand-voice-and-ux/", source: "Nielsen Norman Group" }
    ],
    referencesId: [
      { title: "Panduan AI Content Marketing Institute", url: "https://contentmarketinginstitute.com/", source: "Content Marketing Institute" },
      { title: "Laporan AI Marketing HubSpot 2024", url: "https://www.hubspot.com/marketing-statistics", source: "HubSpot Research" },
      { title: "Keadaan AI dalam Marketing", url: "https://www.marketingaiinstitute.com/", source: "Marketing AI Institute" },
      { title: "Pedoman Suara Merek", url: "https://www.nngroup.com/articles/brand-voice-and-ux/", source: "Nielsen Norman Group" }
    ],
    category: "branding",
    categoryEn: "Branding & Marketing",
    categoryId: "Branding & Pemasaran",
    readTime: 8,
    date: "2025-01-08",
    heroImage: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1600&h=900&fit=crop",
    author: "Metaseti Digital Team",
    authorBio: "Brand Strategy & Content Specialists"
  },
  {
    id: 4,
    titleEn: "Edge Computing and IoT: Real-Time Data Processing at Scale",
    titleId: "Edge Computing dan IoT: Pemrosesan Data Real-Time dalam Skala Besar",
    excerptEn: "Understanding how edge computing is revolutionizing IoT implementations, enabling millisecond-latency decisions and improving system reliability.",
    excerptId: "Memahami bagaimana edge computing merevolusi implementasi IoT, memungkinkan keputusan dengan latensi milidetik dan meningkatkan keandalan sistem.",
    sectionsEn: [
      { type: 'heading', content: 'The Edge Revolution' },
      { type: 'paragraph', content: 'Edge computing is transforming how IoT systems process and respond to data. By moving computation closer to data sources, organizations achieve real-time responsiveness, reduced costs, and improved reliability—critical factors for modern IoT deployments.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=675&fit=crop', imageAlt: 'IoT Network Infrastructure' },
      { type: 'heading', content: 'Understanding Edge Computing Architecture' },
      { type: 'paragraph', content: 'Edge computing processes data near its source rather than sending it to centralized cloud servers. This architectural shift enables ultra-low latency with sub-10ms response times, dramatically reduced bandwidth consumption, improved data privacy through local processing, and enhanced system reliability that operates even with intermittent connectivity.' },
      { type: 'list', content: ['Manufacturing: Real-time quality control and predictive maintenance', 'Retail: Instant inventory management and customer analytics', 'Healthcare: Patient monitoring and emergency response systems', 'Transportation: Autonomous vehicles and traffic optimization'] },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=675&fit=crop', imageAlt: 'Smart Factory Automation' },
      { type: 'heading', content: 'Real-World Implementation' },
      { type: 'paragraph', content: 'Smart factories use edge computing for quality control with AI-powered defect detection at millisecond speeds. Production lines make instant adjustments without cloud latency. Predictive maintenance algorithms run locally, preventing costly equipment failures. The result: 15% to 3% reduction in downtime and 8% to 1.5% decrease in defect rates.' },
      { type: 'quote', content: 'Edge computing reduced our production line response time from 300ms to 8ms. This improvement alone increased our output by 12% and virtually eliminated quality issues.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=675&fit=crop', imageAlt: 'Advanced Technology Systems' },
      { type: 'heading', content: 'Implementation Guide' },
      { type: 'paragraph', content: 'Begin with thorough network analysis: map all data sources and sinks, identify latency-critical applications, calculate bandwidth requirements, and assess connectivity reliability. Design your edge architecture with strategic node placement, clear processing distribution rules, robust data synchronization strategies, and comprehensive security measures. Deploy in phases starting with a focused pilot, measuring results rigorously, then scaling gradually.' },
      { type: 'heading', content: 'Future Outlook' },
      { type: 'paragraph', content: 'The convergence of edge computing with 5G networks and AI capabilities is creating unprecedented opportunities. Expect to see edge-native applications, on-device AI training, federated learning systems, and autonomous decision-making at the edge becoming standard practice across industries.' },
    ],
    sectionsId: [
      { type: 'heading', content: 'Revolusi Edge' },
      { type: 'paragraph', content: 'Edge computing mengubah cara sistem IoT memproses dan merespons data. Dengan memindahkan komputasi lebih dekat ke sumber data, organisasi mencapai responsivitas real-time, pengurangan biaya, dan peningkatan keandalan—faktor kritis untuk deployment IoT modern.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=675&fit=crop', imageAlt: 'Infrastruktur Jaringan IoT' },
      { type: 'heading', content: 'Memahami Arsitektur Edge Computing' },
      { type: 'paragraph', content: 'Edge computing memproses data dekat dengan sumbernya daripada mengirimnya ke server cloud terpusat. Pergeseran arsitektur ini memungkinkan latensi ultra-rendah dengan waktu respons sub-10ms, pengurangan bandwidth yang dramatis, privasi data yang ditingkatkan melalui pemrosesan lokal, dan keandalan sistem yang ditingkatkan yang beroperasi bahkan dengan konektivitas intermiten.' },
      { type: 'list', content: ['Manufaktur: Kontrol kualitas real-time dan pemeliharaan prediktif', 'Retail: Manajemen inventaris instan dan analitik pelanggan', 'Kesehatan: Monitoring pasien dan sistem respons darurat', 'Transportasi: Kendaraan otonom dan optimasi lalu lintas'] },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=675&fit=crop', imageAlt: 'Otomasi Pabrik Pintar' },
      { type: 'heading', content: 'Implementasi Dunia Nyata' },
      { type: 'paragraph', content: 'Pabrik pintar menggunakan edge computing untuk kontrol kualitas dengan deteksi cacat bertenaga AI pada kecepatan milidetik. Lini produksi membuat penyesuaian instan tanpa latensi cloud. Algoritma pemeliharaan prediktif berjalan secara lokal, mencegah kegagalan peralatan yang mahal. Hasilnya: pengurangan downtime dari 15% menjadi 3% dan penurunan tingkat cacat dari 8% menjadi 1,5%.' },
      { type: 'quote', content: 'Edge computing mengurangi waktu respons lini produksi kami dari 300ms menjadi 8ms. Peningkatan ini saja meningkatkan output kami sebesar 12% dan praktis menghilangkan masalah kualitas.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=675&fit=crop', imageAlt: 'Sistem Teknologi Canggih' },
      { type: 'heading', content: 'Panduan Implementasi' },
      { type: 'paragraph', content: 'Mulai dengan analisis jaringan menyeluruh: petakan semua sumber dan sink data, identifikasi aplikasi latency-critical, hitung persyaratan bandwidth, dan nilai keandalan konektivitas. Desain arsitektur edge Anda dengan penempatan node strategis, aturan distribusi pemrosesan yang jelas, strategi sinkronisasi data yang kuat, dan langkah keamanan komprehensif. Deploy secara bertahap dimulai dengan pilot terfokus, mengukur hasil secara ketat, kemudian scaling secara bertahap.' },
      { type: 'heading', content: 'Pandangan Masa Depan' },
      { type: 'paragraph', content: 'Konvergensi edge computing dengan jaringan 5G dan kemampuan AI menciptakan peluang yang belum pernah terjadi sebelumnya. Harapkan untuk melihat aplikasi edge-native, pelatihan AI on-device, sistem federated learning, dan pengambilan keputusan otonom di edge menjadi praktik standar di seluruh industri.' },
    ],
    referencesEn: [
      { title: "Edge Computing Consortium Research", url: "https://www.edgecomputingworld.com/", source: "Edge Computing World" },
      { title: "IoT Architecture Best Practices", url: "https://www.iotforall.com/", source: "IoT For All" },
      { title: "5G and Edge Computing Integration", url: "https://www.gsma.com/futurenetworks/", source: "GSMA" },
      { title: "Industrial IoT Implementation Guide", url: "https://www.iiconsortium.org/", source: "Industrial Internet Consortium" }
    ],
    referencesId: [
      { title: "Riset Edge Computing Consortium", url: "https://www.edgecomputingworld.com/", source: "Edge Computing World" },
      { title: "Praktik Terbaik Arsitektur IoT", url: "https://www.iotforall.com/", source: "IoT For All" },
      { title: "Integrasi 5G dan Edge Computing", url: "https://www.gsma.com/futurenetworks/", source: "GSMA" },
      { title: "Panduan Implementasi Industrial IoT", url: "https://www.iiconsortium.org/", source: "Industrial Internet Consortium" }
    ],
    category: "development",
    categoryEn: "Development",
    categoryId: "Pengembangan",
    readTime: 10,
    date: "2025-01-06",
    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1600&h=900&fit=crop",
    author: "Metaseti Digital Team",
    authorBio: "IoT & Edge Computing Specialists"
  },
  {
    id: 5,
    titleEn: "Digital Transformation ROI: Measuring Success Beyond the Numbers",
    titleId: "ROI Transformasi Digital: Mengukur Kesuksesan di Luar Angka",
    excerptEn: "Learn comprehensive frameworks for calculating digital transformation ROI, including quantitative metrics and cultural impact assessment.",
    excerptId: "Pelajari kerangka komprehensif untuk menghitung ROI transformasi digital, termasuk metrik kuantitatif dan penilaian dampak budaya.",
    sectionsEn: [
      { type: 'heading', content: 'Beyond Traditional ROI' },
      { type: 'paragraph', content: 'Digital transformation success can\'t be measured by financial metrics alone. While cost savings and revenue growth are important, the true value lies in organizational agility, customer satisfaction, competitive positioning, and cultural transformation—factors that don\'t always show up on quarterly reports but determine long-term success.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop', imageAlt: 'Business Analytics Dashboard' },
      { type: 'heading', content: 'The Complete ROI Framework' },
      { type: 'paragraph', content: 'Comprehensive ROI measurement requires tracking five dimensions: Financial metrics including direct cost savings and revenue growth. Operational efficiency through process improvements and productivity gains. Customer experience via satisfaction indicators and engagement metrics. Employee impact through satisfaction and capability building. Strategic value encompassing competitive positioning and future optionality.' },
      { type: 'list', content: ['Financial: Cost reduction, revenue growth, profit margins', 'Operational: Cycle time, error rates, throughput', 'Customer: NPS, CSAT, retention rates, lifetime value', 'Employee: Satisfaction scores, skills development, turnover', 'Strategic: Market position, innovation rate, agility'] },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop', imageAlt: 'Digital Transformation Strategy' },
      { type: 'heading', content: 'Real-World Case Study' },
      { type: 'paragraph', content: 'A mid-size manufacturing company invested 5 million dollars over 2 years in digital transformation. Year 3 results: 2.5 million in annual cost savings, 3 million in revenue increase, traditional ROI of 110%. But the deeper story: Production downtime fell from 15% to 3%. Product defects dropped from 8% to 1.5%. Time to market decreased from 9 months to 4 months. Employee satisfaction increased by 35%. Customer retention improved by 25%.' },
      { type: 'quote', content: 'The financial ROI was impressive at 110%, but the real transformation was in our culture. Teams became more agile, innovation accelerated, and we can now respond to market changes in days instead of months.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=675&fit=crop', imageAlt: 'Business Growth Metrics' },
      { type: 'heading', content: 'Measurement Best Practices' },
      { type: 'paragraph', content: 'Establish clear baselines before starting your transformation. Document current state across all five dimensions. Use balanced scorecards to track multiple metrics simultaneously. Implement real-time dashboards for continuous monitoring. Conduct quarterly reviews with stakeholders. Tell the complete value story combining quantitative results with qualitative insights.' },
      { type: 'heading', content: 'Common Pitfalls to Avoid' },
      { type: 'paragraph', content: 'Don\'t focus solely on hard financial ROI—you\'ll miss significant intangible benefits. Avoid short-term thinking that undervalues long-term strategic advantages. Don\'t skip baseline establishment or you won\'t be able to prove improvement. Resist measuring too much—focus on meaningful KPIs. Never forget change management costs in your calculations.' },
    ],
    sectionsId: [
      { type: 'heading', content: 'Di Luar ROI Tradisional' },
      { type: 'paragraph', content: 'Kesuksesan transformasi digital tidak dapat diukur hanya dengan metrik finansial. Meskipun penghematan biaya dan pertumbuhan pendapatan penting, nilai sebenarnya terletak pada kelincahan organisasi, kepuasan pelanggan, positioning kompetitif, dan transformasi budaya—faktor yang tidak selalu muncul dalam laporan kuartalan tetapi menentukan kesuksesan jangka panjang.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop', imageAlt: 'Dashboard Analitik Bisnis' },
      { type: 'heading', content: 'Kerangka ROI Lengkap' },
      { type: 'paragraph', content: 'Pengukuran ROI komprehensif memerlukan pelacakan lima dimensi: Metrik finansial termasuk penghematan biaya langsung dan pertumbuhan pendapatan. Efisiensi operasional melalui peningkatan proses dan peningkatan produktivitas. Pengalaman pelanggan via indikator kepuasan dan metrik keterlibatan. Dampak karyawan melalui kepuasan dan pembangunan kapabilitas. Nilai strategis mencakup positioning kompetitif dan optionalitas masa depan.' },
      { type: 'list', content: ['Finansial: Pengurangan biaya, pertumbuhan pendapatan, margin laba', 'Operasional: Waktu siklus, tingkat kesalahan, throughput', 'Pelanggan: NPS, CSAT, tingkat retensi, lifetime value', 'Karyawan: Skor kepuasan, pengembangan keterampilan, turnover', 'Strategis: Posisi pasar, tingkat inovasi, kelincahan'] },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop', imageAlt: 'Strategi Transformasi Digital' },
      { type: 'heading', content: 'Studi Kasus Dunia Nyata' },
      { type: 'paragraph', content: 'Sebuah perusahaan manufaktur menengah menginvestasikan 5 juta dolar selama 2 tahun dalam transformasi digital. Hasil tahun 3: 2,5 juta dalam penghematan biaya tahunan, 3 juta dalam peningkatan pendapatan, ROI tradisional 110%. Tetapi cerita yang lebih dalam: Downtime produksi turun dari 15% menjadi 3%. Cacat produk turun dari 8% menjadi 1,5%. Time to market berkurang dari 9 bulan menjadi 4 bulan. Kepuasan karyawan meningkat 35%. Retensi pelanggan meningkat 25%.' },
      { type: 'quote', content: 'ROI finansialnya mengesankan pada 110%, tetapi transformasi sebenarnya adalah dalam budaya kami. Tim menjadi lebih lincah, inovasi dipercepat, dan kami sekarang dapat merespons perubahan pasar dalam hitungan hari daripada bulan.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=675&fit=crop', imageAlt: 'Metrik Pertumbuhan Bisnis' },
      { type: 'heading', content: 'Praktik Terbaik Pengukuran' },
      { type: 'paragraph', content: 'Tetapkan baseline yang jelas sebelum memulai transformasi Anda. Dokumentasikan kondisi saat ini di semua lima dimensi. Gunakan balanced scorecard untuk melacak metrik multipel secara bersamaan. Implementasikan dashboard real-time untuk monitoring berkelanjutan. Lakukan tinjauan kuartalan dengan stakeholder. Ceritakan kisah nilai lengkap yang menggabungkan hasil kuantitatif dengan wawasan kualitatif.' },
      { type: 'heading', content: 'Kesalahan Umum yang Harus Dihindari' },
      { type: 'paragraph', content: 'Jangan fokus hanya pada ROI finansial keras—Anda akan kehilangan manfaat intangible yang signifikan. Hindari pemikiran jangka pendek yang meremehkan keunggulan strategis jangka panjang. Jangan skip penetapan baseline atau Anda tidak akan bisa membuktikan peningkatan. Tahan godaan mengukur terlalu banyak—fokus pada KPI bermakna. Jangan pernah lupa biaya change management dalam perhitungan Anda.' },
    ],
    referencesEn: [
      { title: "McKinsey Digital Transformation Research", url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights", source: "McKinsey & Company" },
      { title: "Harvard Business Review on ROI", url: "https://hbr.org/topic/return-on-investment", source: "Harvard Business Review" },
      { title: "Gartner Digital Business Value", url: "https://www.gartner.com/en/digital-business", source: "Gartner" },
      { title: "MIT Sloan Digital Economy Initiative", url: "https://ide.mit.edu/", source: "MIT" }
    ],
    referencesId: [
      { title: "Riset Transformasi Digital McKinsey", url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights", source: "McKinsey & Company" },
      { title: "Harvard Business Review tentang ROI", url: "https://hbr.org/topic/return-on-investment", source: "Harvard Business Review" },
      { title: "Nilai Bisnis Digital Gartner", url: "https://www.gartner.com/en/digital-business", source: "Gartner" },
      { title: "Inisiatif Ekonomi Digital MIT Sloan", url: "https://ide.mit.edu/", source: "MIT" }
    ],
    category: "business",
    categoryEn: "Business Strategy",
    categoryId: "Strategi Bisnis",
    readTime: 12,
    date: "2025-01-04",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop",
    author: "Metaseti Digital Team",
    authorBio: "Digital Transformation Consultants"
  },
  {
    id: 6,
    titleEn: "Micro-Frontends: Scalable Architecture for Enterprise Applications",
    titleId: "Micro-Frontend: Arsitektur Skalabel untuk Aplikasi Enterprise",
    excerptEn: "Deep dive into micro-frontend architecture patterns, implementation strategies, and best practices for building maintainable large-scale web applications.",
    excerptId: "Penyelaman mendalam ke dalam pola arsitektur micro-frontend, strategi implementasi, dan praktik terbaik untuk membangun aplikasi web skala besar yang maintainable.",
    sectionsEn: [
      { type: 'heading', content: 'The Micro-Frontend Revolution' },
      { type: 'paragraph', content: 'As web applications grow in complexity, traditional monolithic frontend architectures become increasingly difficult to maintain and scale. Micro-frontends extend the microservices concept to the frontend, enabling independent teams to work on different features while building a cohesive user experience. This architectural approach is transforming how large organizations build and deploy web applications.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=675&fit=crop', imageAlt: 'Software Architecture Planning' },
      { type: 'heading', content: 'Core Concepts' },
      { type: 'paragraph', content: 'Micro-frontends decompose a frontend application into smaller, semi-independent applications that work together seamlessly. Each micro-frontend can be developed independently using potentially different technology stacks, owns its own deployment pipeline, manages its own state, and communicates through well-defined APIs and event systems.' },
      { type: 'list', content: ['Independent development and deployment cycles', 'Technology flexibility across different teams', 'Improved fault isolation and system resilience', 'Scalable team organization', 'Incremental upgrades and migrations'] },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=675&fit=crop', imageAlt: 'Team Collaboration on Architecture' },
      { type: 'heading', content: 'Architecture Patterns' },
      { type: 'paragraph', content: 'Module Federation using Webpack 5 enables runtime sharing of code between independently built applications. This modern approach offers optimal bundle sharing, independent deployment capabilities, type safety across boundaries, and the flexibility to use different framework versions while sharing common dependencies efficiently.' },
      { type: 'quote', content: 'Implementing micro-frontends reduced our deployment time from 4 hours to 20 minutes per team. We can now release features independently without coordinating with 6 other teams.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=675&fit=crop', imageAlt: 'Modern Development Workspace' },
      { type: 'heading', content: 'Implementation Strategy' },
      { type: 'paragraph', content: 'Start by defining clear boundaries based on business domains, not technical layers. Create a shell application to orchestrate micro-frontends. Implement a shared design system for consistent UX. Establish communication patterns using events and shared state stores. Set up proper error boundaries and fallback UIs. Develop comprehensive testing strategies covering unit, integration, and end-to-end scenarios.' },
      { type: 'heading', content: 'Best Practices' },
      { type: 'paragraph', content: 'Keep micro-frontends as independent as possible. Share only what\'s necessary through your design system and common utilities. Implement proper monitoring and observability from day one. Create clear documentation for APIs and integration points. Use feature flags for gradual rollouts. Maintain consistent development practices across teams while allowing flexibility in implementation details.' },
    ],
    sectionsId: [
      { type: 'heading', content: 'Revolusi Micro-Frontend' },
      { type: 'paragraph', content: 'Seiring aplikasi web tumbuh dalam kompleksitas, arsitektur frontend monolitik tradisional menjadi semakin sulit untuk dipelihara dan di-scale. Micro-frontend memperluas konsep microservices ke frontend, memungkinkan tim independen bekerja pada fitur berbeda sambil membangun pengalaman pengguna yang kohesif. Pendekatan arsitektur ini mengubah cara organisasi besar membangun dan men-deploy aplikasi web.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=675&fit=crop', imageAlt: 'Perencanaan Arsitektur Software' },
      { type: 'heading', content: 'Konsep Inti' },
      { type: 'paragraph', content: 'Micro-frontend menguraikan aplikasi frontend menjadi aplikasi yang lebih kecil dan semi-independen yang bekerja bersama dengan mulus. Setiap micro-frontend dapat dikembangkan secara independen menggunakan tech stack yang berpotensi berbeda, memiliki pipeline deployment sendiri, mengelola state sendiri, dan berkomunikasi melalui API dan event system yang terdefinisi dengan baik.' },
      { type: 'list', content: ['Siklus pengembangan dan deployment independen', 'Fleksibilitas teknologi di berbagai tim', 'Isolasi fault dan resiliensi sistem yang ditingkatkan', 'Organisasi tim yang skalabel', 'Upgrade dan migrasi inkremental'] },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=675&fit=crop', imageAlt: 'Kolaborasi Tim pada Arsitektur' },
      { type: 'heading', content: 'Pola Arsitektur' },
      { type: 'paragraph', content: 'Module Federation menggunakan Webpack 5 memungkinkan sharing kode runtime antara aplikasi yang dibangun secara independen. Pendekatan modern ini menawarkan bundle sharing optimal, kemampuan deployment independen, type safety melintasi boundaries, dan fleksibilitas untuk menggunakan versi framework berbeda sambil sharing dependensi umum secara efisien.' },
      { type: 'quote', content: 'Mengimplementasikan micro-frontend mengurangi waktu deployment kami dari 4 jam menjadi 20 menit per tim. Kami sekarang dapat merilis fitur secara independen tanpa berkoordinasi dengan 6 tim lainnya.' },
      { type: 'image', content: '', imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=675&fit=crop', imageAlt: 'Workspace Pengembangan Modern' },
      { type: 'heading', content: 'Strategi Implementasi' },
      { type: 'paragraph', content: 'Mulai dengan mendefinisikan boundaries yang jelas berdasarkan domain bisnis, bukan layer teknis. Buat shell application untuk orchestrate micro-frontend. Implementasikan shared design system untuk UX yang konsisten. Tetapkan pola komunikasi menggunakan event dan shared state store. Setup error boundary dan fallback UI yang tepat. Kembangkan strategi testing komprehensif yang mencakup skenario unit, integration, dan end-to-end.' },
      { type: 'heading', content: 'Praktik Terbaik' },
      { type: 'paragraph', content: 'Jaga micro-frontend se-independen mungkin. Share hanya yang diperlukan melalui design system dan utility umum Anda. Implementasikan monitoring dan observability yang tepat dari hari pertama. Buat dokumentasi yang jelas untuk API dan integration point. Gunakan feature flag untuk rollout bertahap. Pertahankan praktik pengembangan yang konsisten di seluruh tim sambil memungkinkan fleksibilitas dalam detail implementasi.' },
    ],
    referencesEn: [
      { title: "Martin Fowler on Micro Frontends", url: "https://martinfowler.com/articles/micro-frontends.html", source: "Martin Fowler" },
      { title: "Webpack Module Federation Documentation", url: "https://webpack.js.org/concepts/module-federation/", source: "Webpack" },
      { title: "Micro Frontend Architecture", url: "https://www.thoughtworks.com/insights/blog/microservices", source: "ThoughtWorks" },
      { title: "Building Scalable Frontend Applications", url: "https://www.infoq.com/microservices/", source: "InfoQ" }
    ],
    referencesId: [
      { title: "Martin Fowler tentang Micro Frontend", url: "https://martinfowler.com/articles/micro-frontends.html", source: "Martin Fowler" },
      { title: "Dokumentasi Webpack Module Federation", url: "https://webpack.js.org/concepts/module-federation/", source: "Webpack" },
      { title: "Arsitektur Micro Frontend", url: "https://www.thoughtworks.com/insights/blog/microservices", source: "ThoughtWorks" },
      { title: "Membangun Aplikasi Frontend Skalabel", url: "https://www.infoq.com/microservices/", source: "InfoQ" }
    ],
    category: "development",
    categoryEn: "Development",
    categoryId: "Pengembangan",
    readTime: 14,
    date: "2025-01-02",
    heroImage: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=1600&h=900&fit=crop",
    author: "Metaseti Digital Team",
    authorBio: "Frontend Architecture Specialists"
  }
];

export default function BlogPostPage() {
  const params = useParams();
  const { language } = useLanguage();
  const postId = parseInt(params.id as string);
  
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    notFound();
  }

  const sections = language === 'en' ? post.sectionsEn : post.sectionsId;
  const references = language === 'en' ? post.referencesEn : post.referencesId;
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero Image */}
          <div className="relative aspect-[21/9] mb-10 overflow-hidden rounded-lg border border-white/10">
            <Image
              src={post.heroImage}
              alt={language === 'en' ? post.titleEn : post.titleId}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>

          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1.5 text-xs font-light bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full">
              {language === 'en' ? post.categoryEn : post.categoryId}
            </span>
            <span className="text-gray-400 text-sm">
              {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400 text-sm">{post.readTime} {language === 'en' ? 'min read' : 'menit baca'}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-[1.1]">
            {language === 'en' ? post.titleEn : post.titleId}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-400 leading-relaxed mb-8 font-light">
            {language === 'en' ? post.excerptEn : post.excerptId}
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 pt-6 border-t border-white/10">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-light text-sm">{post.author}</p>
              <p className="text-gray-500 text-sm">{post.authorBio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 pb-12">
        <div className="max-w-3xl mx-auto">
          {sections.map((section, index) => {
            if (section.type === 'heading') {
              return (
                <h2 
                  key={index} 
                  className="text-3xl font-light text-white mt-12 mb-6 first:mt-0"
                >
                  {section.content}
                </h2>
              );
            }

            if (section.type === 'paragraph') {
              return (
                <p 
                  key={index} 
                  className="text-gray-300 text-lg leading-relaxed mb-6 font-light"
                >
                  {section.content}
                </p>
              );
            }

            if (section.type === 'list') {
              return (
                <ul key={index} className="space-y-3 mb-8 ml-6">
                  {(section.content as string[]).map((item, i) => (
                    <li key={i} className="text-gray-300 text-lg leading-relaxed font-light flex items-start gap-3">
                      <span className="text-white mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            if (section.type === 'image') {
              return (
                <div key={index} className="my-12 relative aspect-video overflow-hidden rounded-lg border border-white/10">
                  <Image
                    src={section.imageUrl || ''}
                    alt={section.imageAlt || ''}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              );
            }

            if (section.type === 'quote') {
              return (
                <blockquote 
                  key={index} 
                  className="border-l-2 border-white/20 pl-6 my-10 italic text-xl text-gray-200 font-light leading-relaxed"
                >
                  "{section.content}"
                </blockquote>
              );
            }

            return null;
          })}
        </div>
      </article>

      {/* References Section */}
      <section className="px-6 pb-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto pt-12">
          <h2 className="text-3xl font-light text-white mb-8">
            {language === 'en' ? 'References & Further Reading' : 'Referensi & Bacaan Lebih Lanjut'}
          </h2>
          <div className="space-y-4">
            {references.map((ref, index) => (
              <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/[0.07] transition-colors">
                <a 
                  href={ref.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  <div className="flex-1">
                    <p className="text-white font-light group-hover:text-gray-200 transition-colors">{ref.title}</p>
                    <p className="text-gray-500 text-sm mt-1">{ref.source}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-6 pb-32 border-t border-white/10">
          <div className="max-w-6xl mx-auto pt-16">
            <h2 className="text-3xl font-light text-white mb-10">
              {language === 'en' ? 'Related Articles' : 'Artikel Terkait'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-lg bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.heroImage}
                        alt={language === 'en' ? relatedPost.titleEn : relatedPost.titleId}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-light text-white mb-2 line-clamp-2 group-hover:text-gray-200 transition-colors">
                        {language === 'en' ? relatedPost.titleEn : relatedPost.titleId}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2 font-light">
                        {language === 'en' ? relatedPost.excerptEn : relatedPost.excerptId}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
