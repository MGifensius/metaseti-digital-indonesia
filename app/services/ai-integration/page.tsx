"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

// AI Assistant Component - DEMO STAYS IN ENGLISH
function AIAssistantDemo() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm the Metaseti AI Assistant. I can help you learn about our services, pricing, and how we can help your business. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Services related
    if (lowerMessage.includes("service") || lowerMessage.includes("what do you do")) {
      return "Metaseti Digital offers three core services: 1) Strategic AI Integration - implementing intelligent automation and AI solutions, 2) Custom Development - building web/mobile apps and ERP systems, and 3) Branding & Performance Marketing - creating brand identities and digital campaigns. Which service interests you?";
    }
    
    if (lowerMessage.includes("ai") && (lowerMessage.includes("integration") || lowerMessage.includes("artificial"))) {
      return "Our AI Integration service includes AI chatbots & assistants, predictive analytics, AI product enhancement, and workflow automation. We help businesses streamline operations and make data-driven decisions. Would you like to know more about implementation?";
    }
    
    if (lowerMessage.includes("custom development") || lowerMessage.includes("web") || lowerMessage.includes("app")) {
      return "We build custom web applications, mobile apps, ERP systems, and IoT solutions. All our developments are scalable, secure, and tailored to your specific business needs. We use modern tech stacks like React, Next.js, and cloud infrastructure.";
    }
    
    if (lowerMessage.includes("branding") || lowerMessage.includes("marketing")) {
      return "Our Branding & Marketing service covers brand strategy, visual identity design, UI/UX, digital campaigns, SEO/SEM, and content creation. We help you build a strong brand presence and drive measurable growth.";
    }

    // Pricing related
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("budget")) {
      return "Our pricing is customized based on project scope and requirements. We offer flexible engagement models. For AI Integration projects, we start from $5,000. Custom Development ranges from $8,000-$50,000+ depending on complexity. Branding packages start at $3,000. Would you like to schedule a consultation to discuss your specific needs?";
    }

    // Contact related
    if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("email") || lowerMessage.includes("phone")) {
      return "You can reach us at: Email: metaseti.digital@gmail.com, Phone: +62 813-8507-3901, Instagram: @metasetidigital. We're based in Jakarta, Indonesia. Our team typically responds within 24 hours!";
    }

    // Process related
    if (lowerMessage.includes("process") || lowerMessage.includes("how long") || lowerMessage.includes("timeline")) {
      return "Our typical process involves: 1) Discovery & Analysis (1-2 weeks), 2) Strategy & Design (2-3 weeks), 3) Development/Implementation (4-12 weeks depending on scope), and 4) Testing & Deployment (1-2 weeks). We follow agile methodology with regular updates.";
    }

    // Location related
    if (lowerMessage.includes("location") || lowerMessage.includes("where") || lowerMessage.includes("jakarta")) {
      return "We're based in Jakarta, Indonesia, but we serve clients globally. We work with businesses across Southeast Asia, and can accommodate remote collaboration for international projects.";
    }

    // General greetings
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! How can I help you today? Feel free to ask about our services, pricing, process, or anything else about Metaseti Digital.";
    }

    if (lowerMessage.includes("thank")) {
      return "You're welcome! Is there anything else you'd like to know about Metaseti Digital?";
    }

    // Default response
    return "I'm here to help you learn about Metaseti Digital! You can ask me about our services (AI Integration, Custom Development, Branding & Marketing), pricing, process, or how to get started. What would you like to know?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = getAIResponse(input);
      setMessages((prev) => [...prev, { role: "assistant", content: aiResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 h-64 md:h-80 lg:h-96 overflow-y-auto pr-2 md:pr-4">
          <AnimatePresence>
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-2 md:gap-3 ${msg.role === "user" ? "justify-end" : ""}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-xs">
                    AI
                  </div>
                )}
                <div
                  className={`rounded-lg p-3 md:p-4 max-w-[85%] md:max-w-md ${
                    msg.role === "user"
                      ? "bg-white text-black"
                      : "bg-white/5 text-gray-300"
                  }`}
                >
                  <p className="text-xs md:text-sm leading-relaxed">{msg.content}</p>
                </div>
                {msg.role === "user" && (
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex-shrink-0 flex items-center justify-center text-xs text-black">
                    U
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-2 md:gap-3"
            >
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-xs">
                AI
              </div>
              <div className="bg-white/5 rounded-lg p-3 md:p-4">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything about Metaseti..."
            className="flex-1 bg-white/5 border border-white/10 px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-full sm:w-auto px-6 py-2 md:py-3 bg-white text-black text-sm hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

// AI Booking Component
function AIBookingDemo() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [bookings, setBookings] = useState([
    { id: 1, name: "John Doe", date: "2025-01-20", time: "09:00", email: "john@example.com", status: "Confirmed" },
    { id: 2, name: "Jane Smith", date: "2025-01-22", time: "14:00", email: "jane@example.com", status: "Confirmed" },
    { id: 3, name: "Bob Wilson", date: "2025-01-25", time: "10:00", email: "bob@example.com", status: "Pending" },
  ]);
  const [showSuccess, setShowSuccess] = useState(false);

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

  const timeSlots = [
    "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"
  ];

  const isDateAvailable = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    return date > today;
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.phone) {
      alert("Please fill all fields");
      return;
    }

    const newBooking = {
      id: bookings.length + 1,
      name: formData.name,
      date: selectedDate.toISOString().split('T')[0],
      time: selectedTime,
      email: formData.email,
      status: "Confirmed",
    };

    setBookings([...bookings, newBooking]);
    setShowSuccess(true);
    
    // Reset form
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedDate(null);
      setSelectedTime("");
      setFormData({ name: "", email: "", phone: "" });
    }, 3000);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Calendar/Booking UI */}
          <div>
            <h3 className="text-base md:text-lg font-light text-white mb-4">Select Date & Time</h3>
            <div className="border border-white/10 p-3 md:p-4 mb-4">
              <div className="text-center mb-4">
                <p className="text-sm md:text-base text-white font-light">
                  {new Date(currentYear, currentMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
              </div>
              <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                  <div key={i} className="text-center text-xs text-gray-500 font-medium">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 md:gap-2">
                {Array.from({ length: firstDay }, (_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }, (_, i) => {
                  const day = i + 1;
                  const date = new Date(currentYear, currentMonth, day);
                  const available = isDateAvailable(day);
                  const isSelected = selectedDate?.getDate() === day;

                  return (
                    <button
                      key={day}
                      onClick={() => available && setSelectedDate(date)}
                      disabled={!available}
                      className={`text-center text-xs md:text-sm py-1.5 md:py-2 cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-white text-black"
                          : available
                          ? "text-gray-400 hover:bg-white/5"
                          : "text-gray-700 cursor-not-allowed"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-xs text-gray-400 mb-2">Available Time Slots</p>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 text-xs md:text-sm border transition-all ${
                        selectedTime === time
                          ? "border-white bg-white text-black"
                          : "border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Booking Form */}
          <div>
            <h3 className="text-base md:text-lg font-light text-white mb-4">Your Information</h3>
            <div className="space-y-3 md:space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-white/20"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-white/20"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-white/20"
              />

              {selectedDate && selectedTime && (
                <div className="p-3 md:p-4 bg-white/5 border border-white/10">
                  <p className="text-xs text-gray-400 mb-2">Selected Appointment</p>
                  <p className="text-sm md:text-base text-white">
                    {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                  <p className="text-sm md:text-base text-white">Time: {selectedTime}</p>
                </div>
              )}

              <button
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime || !formData.name || !formData.email}
                className="w-full py-2 md:py-3 bg-white text-black text-sm hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Booking
              </button>

              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3 md:p-4 bg-green-500/20 border border-green-500/50 text-green-400 text-xs md:text-sm"
                  >
                    ✓ Booking confirmed successfully!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bookings Database Table */}
        <div className="border border-white/10 overflow-hidden">
          <div className="bg-white/5 px-4 md:px-6 py-3 md:py-4 border-b border-white/10">
            <h3 className="text-base md:text-lg font-light text-white">Booking Database</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-3 md:px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider whitespace-nowrap">ID</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider whitespace-nowrap">Name</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider whitespace-nowrap">Email</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider whitespace-nowrap">Date</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider whitespace-nowrap">Time</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider whitespace-nowrap">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-400 whitespace-nowrap">#{booking.id}</td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-white whitespace-nowrap">{booking.name}</td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-400 whitespace-nowrap">{booking.email}</td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-400 whitespace-nowrap">{booking.date}</td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-400 whitespace-nowrap">{booking.time}</td>
                    <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded ${
                        booking.status === "Confirmed" 
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AIIntegration() {
  const { t } = useLanguage();
  const [activeDemo, setActiveDemo] = useState<"assistant" | "booking">("assistant");

  const capabilities = [
    {
      title: t('aiService.capability1.title'),
      description: t('aiService.capability1.desc'),
      icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
    },
    {
      title: t('aiService.capability2.title'),
      description: t('aiService.capability2.desc'),
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      title: t('aiService.capability3.title'),
      description: t('aiService.capability3.desc'),
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    },
    {
      title: t('aiService.capability4.title'),
      description: t('aiService.capability4.desc'),
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: t('aiService.capability5.title'),
      description: t('aiService.capability5.desc'),
      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    },
    {
      title: t('aiService.capability6.title'),
      description: t('aiService.capability6.desc'),
      icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    },
  ];

  const benefits = [
    t('aiService.benefit1'),
    t('aiService.benefit2'),
    t('aiService.benefit3'),
    t('aiService.benefit4'),
    t('aiService.benefit5'),
    t('aiService.benefit6'),
  ];

  const process = [
    {
      step: t('aiService.step1.number'),
      title: t('aiService.step1.title'),
      description: t('aiService.step1.desc'),
    },
    {
      step: t('aiService.step2.number'),
      title: t('aiService.step2.title'),
      description: t('aiService.step2.desc'),
    },
    {
      step: t('aiService.step3.number'),
      title: t('aiService.step3.title'),
      description: t('aiService.step3.desc'),
    },
    {
      step: t('aiService.step4.number'),
      title: t('aiService.step4.title'),
      description: t('aiService.step4.desc'),
    },
  ];

  const portfolioImages = [
    "/ai-integration/ai-portfolio-1.png",
    "/ai-integration/ai-portfolio-2.png",
    "/ai-integration/ai-portfolio-3.png",
    "/ai-integration/ai-portfolio-4.png",
  ];

  return (
    <main className="bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
            {t('aiService.subtitle')}
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
            {t('aiService.title')}
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            {t('aiService.description')}
          </p>

          <div className="flex gap-4">
            <Link 
              href="#demo"
              className="px-8 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all"
            >
              {t('aiService.demo')}
            </Link>
            <Link 
              href="#contact"
              className="px-8 py-3 border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-all"
            >
              {t('contact.title')}
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-6 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            {t('aiService.capabilities')}
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            {t('aiService.capabilitiesDesc')}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="mb-4">
                  <svg 
                    className="w-10 h-10 text-white/80 group-hover:text-white transition-colors" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={1}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={capability.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-12">
            {t('aiService.benefits')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-white/10 p-6 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-12">
            {t('aiService.process')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l border-white/20 pl-8"
              >
                <span className="text-5xl font-light text-gray-700 block mb-4">
                  {item.step}
                </span>
                <h3 className="text-xl font-light text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-20 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-12">
            {t('aiService.demo')}
          </h2>

          {/* Demo Tabs - STAYS IN ENGLISH */}
          <div className="flex justify-center gap-4 mb-8 border-b border-white/10 overflow-x-auto">
            <button
              onClick={() => setActiveDemo("assistant")}
              className={`pb-4 px-4 md:px-6 text-sm font-light transition-colors relative whitespace-nowrap ${
                activeDemo === "assistant" ? "text-white" : "text-gray-500"
              }`}
            >
              AI Assistant
              {activeDemo === "assistant" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-white"
                />
              )}
            </button>
            <button
              onClick={() => setActiveDemo("booking")}
              className={`pb-4 px-4 md:px-6 text-sm font-light transition-colors relative whitespace-nowrap ${
                activeDemo === "booking" ? "text-white" : "text-gray-500"
              }`}
            >
              AI Booking System
              {activeDemo === "booking" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-white"
                />
              )}
            </button>
          </div>

          {/* Demo Content - STAYS IN ENGLISH */}
          <div className="border border-white/10 bg-black/50 overflow-hidden">
            {activeDemo === "assistant" ? <AIAssistantDemo /> : <AIBookingDemo />}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              {t('aiService.portfolio')}
            </h2>
            <p className="text-gray-400 max-w-2xl">
              {t('aiService.portfolioDesc')}
            </p>
          </div>
          
          {/* Mixed Height Grid - Aligned top and bottom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: Tall Portrait Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              viewport={{ once: true }}
              className="relative md:row-span-2 aspect-[3/4] md:aspect-auto overflow-hidden bg-neutral-900"
            >
              {portfolioImages[0]?.includes('portfolio-1') ? (
                <img
                  src={portfolioImages[0]}
                  alt="AI Integration Project 1"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 border border-white/10 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">Project 1</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right Top: Wide Horizontal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="relative md:col-span-2 aspect-[16/9] overflow-hidden bg-neutral-900"
            >
              {portfolioImages[1]?.includes('portfolio-2') ? (
                <img
                  src={portfolioImages[1]}
                  alt="AI Integration Project 2"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 border border-white/10 flex items-center justify-center">
                      <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-600">Project 2</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right Bottom: Two Square Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden bg-neutral-900"
            >
              {portfolioImages[2]?.includes('portfolio-3') ? (
                <img
                  src={portfolioImages[2]}
                  alt="AI Integration Project 3"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 border border-white/10 flex items-center justify-center">
                      <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-600">Project 3</p>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden bg-neutral-900"
            >
              {portfolioImages[3]?.includes('portfolio-4') ? (
                <img
                  src={portfolioImages[3]}
                  alt="AI Integration Project 4"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 border border-white/10 flex items-center justify-center">
                      <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-600">Project 4</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-neutral-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            {t('aiService.ctaButton')}
          </h2>
          <p className="text-gray-400 mb-12">
            {t('aiService.cta')}
          </p>

          <form action="https://formspree.io/f/xdkwjyze" method="POST" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-gray-400 mb-2">{t('contact.form.name')}</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-all"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">{t('contact.form.email')}</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-all"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-2">{t('contact.form.phone')}</label>
              <input
                type="text"
                name="company"
                className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-all"
                placeholder={t('contact.form.phonePlaceholder')}
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-2">{t('contact.form.message')}</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-all resize-none"
                placeholder={t('contact.form.messagePlaceholder')}
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-12 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all"
            >
              {t('contact.form.send')}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}