"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
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
  CheckCircle2,
  Linkedin,
  Mail
} from "lucide-react";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We embrace cutting-edge technology and creative solutions to solve complex business challenges.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our priority. We build lasting partnerships through exceptional service and results.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in every project, delivering quality that exceeds expectations.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork, both internally and with our clients, to achieve remarkable outcomes.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparency, honesty, and ethical practices guide every decision we make.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "We're committed to constant learning and improvement, staying ahead of industry trends.",
  },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "Proven Expertise",
    description: "Years of experience delivering successful digital transformation projects across industries.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Solutions",
    description: "From strategy to deployment, we handle every aspect of your digital journey.",
  },
  {
    icon: Clock,
    title: "Agile Delivery",
    description: "Fast, iterative development process with regular updates and transparent communication.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description: "We focus on delivering tangible business outcomes and ROI, not just deliverables.",
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

export default function AboutPage() {
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
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Engineering Digital Excellence
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              We are a digital transformation company dedicated to helping businesses 
              thrive in the modern era through innovative technology and strategic design.
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
                Who We Are
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Metaseti Digital Indonesia is a forward-thinking digital agency specializing 
                in AI integration, custom development, and strategic branding. Founded with a 
                vision to accelerate Indonesia's digital transformation, we combine technical 
                expertise with creative excellence.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our multidisciplinary team works at the intersection of technology, design, 
                and business strategy to deliver solutions that don't just meet expectations—they 
                redefine what's possible.
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
                  Projects Delivered
                </p>
              </div>
              <div className="border border-white/10 p-6 bg-black/50">
                <p className="text-4xl font-light text-white mb-2">98%</p>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Client Satisfaction
                </p>
              </div>
              <div className="border border-white/10 p-6 bg-black/50">
                <p className="text-4xl font-light text-white mb-2">15+</p>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Industry Partners
                </p>
              </div>
              <div className="border border-white/10 p-6 bg-black/50">
                <p className="text-4xl font-light text-white mb-2">24/7</p>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Support Available
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
              Our Story
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Metaseti Digital Indonesia was born from a simple observation: businesses in 
                Indonesia were struggling to keep pace with rapid digital transformation. Many 
                had the ambition to innovate but lacked the technical expertise and strategic 
                guidance to make it happen effectively.
              </p>
              <p>
                Founded by a team of technology enthusiasts and creative minds, we set out to 
                bridge this gap. What started as a small consultancy has grown into a 
                comprehensive digital agency, serving clients from startups to established 
                enterprises across Southeast Asia.
              </p>
              <p>
                Our approach has always been different. We don't just build software or design 
                websites—we become strategic partners in our clients' digital journey. Every 
                project is an opportunity to push boundaries, explore new technologies, and 
                deliver measurable business impact.
              </p>
              <p className="text-white">
                Today, we're proud to be at the forefront of Indonesia's digital revolution, 
                helping businesses harness the power of AI, custom development, and strategic 
                branding to achieve their goals and secure lasting competitive advantage.
              </p>
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
                <h3 className="text-2xl font-light text-white">Our Vision</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                To be Southeast Asia's leading digital transformation partner, recognized for 
                turning innovative ideas into impactful realities that drive business growth 
                and shape the future of industries.
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
                <h3 className="text-2xl font-light text-white">Our Mission</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                To empower businesses with cutting-edge digital solutions that combine strategic 
                thinking, technical excellence, and creative innovation—delivering measurable 
                results that create lasting competitive advantage in an evolving digital landscape.
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
              Our Core Values
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we deliver.
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
              Meet Our Leadership
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The visionaries behind Metaseti Digital Indonesia.
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
              Why Choose Metaseti
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We deliver results that matter, backed by expertise and commitment to your success.
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
              Ready to start your digital transformation journey?
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}