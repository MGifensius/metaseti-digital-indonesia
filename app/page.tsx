"use client";

import { useEffect } from "react";
import Hero from "./components/Hero";
import AboutSection from "./components/About";
import ServicesSection from "./components/Services";
import ContactSection from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

export default function Home() {
  useEffect(() => {
    // Handle hash navigation
    const hash = window.location.hash;
    if (hash) {
      // Remove the # from hash
      const id = hash.replace('#', '');
      // Wait for page to load
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <main>
      {/* TOP NAVIGATION */}
      <Navbar />

      {/* MAIN CONTENT */}
      <div>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}