"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

// Rebranding Demo Component - STAYS IN ENGLISH
function RebrandingDemo() {
  const [showAfter, setShowAfter] = useState(false);

  const beforeData = {
    logo: {
      style: "Outdated",
      colors: ["#FF6B35", "#F7931E", "#FDC830"],
      font: "Times New Roman",
      tagline: "Your Trusted Partner Since 1995",
    },
    website: {
      design: "Cluttered, 2010s style",
      userExperience: "Confusing navigation",
      mobileOptimized: false,
      loadSpeed: "4.2s",
    },
    social: {
      followers: 1200,
      engagement: "1.2%",
      postsPerWeek: 2,
      brandConsistency: "Low",
    },
    performance: {
      brandRecognition: 35,
      customerTrust: 42,
      marketPosition: 28,
      customerSatisfaction: 58,
      brandLoyalty: 45,
      marketShare: 15,
    },
    revenue: {
      monthly: 45000,
      growth: 5,
    },
  };

  const afterData = {
    logo: {
      style: "Modern & Clean",
      colors: ["#2563EB", "#7C3AED", "#EC4899"],
      font: "Inter / Poppins",
      tagline: "Innovation. Trust. Excellence.",
    },
    website: {
      design: "Modern, minimalist UI",
      userExperience: "Intuitive & seamless",
      mobileOptimized: true,
      loadSpeed: "1.1s",
    },
    social: {
      followers: 8500,
      engagement: "8.7%",
      postsPerWeek: 5,
      brandConsistency: "High",
    },
    performance: {
      brandRecognition: 87,
      customerTrust: 92,
      marketPosition: 78,
      customerSatisfaction: 94,
      brandLoyalty: 88,
      marketShare: 42,
    },
    revenue: {
      monthly: 125000,
      growth: 45,
    },
  };

  const currentData = showAfter ? afterData : beforeData;

  return (
    <div className="p-8">
      {/* Toggle Control */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex border border-white/10 p-1 bg-black/50 rounded-lg">
          <button
            onClick={() => setShowAfter(false)}
            className={`px-8 py-3 text-sm font-light transition-all rounded-md ${
              !showAfter ? "bg-white text-black" : "text-gray-400 hover:text-white"
            }`}
          >
            Before Rebranding
          </button>
          <button
            onClick={() => setShowAfter(true)}
            className={`px-8 py-3 text-sm font-light transition-all rounded-md ${
              showAfter ? "bg-white text-black" : "text-gray-400 hover:text-white"
            }`}
          >
            After Rebranding
          </button>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        key={showAfter ? "after" : "before"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Visual Identity Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Logo & Brand Identity */}
          <div className="border border-white/10 p-6 bg-black/30">
            <h3 className="text-sm text-gray-400 mb-6 uppercase tracking-wider">Visual Identity</h3>
            
            <div className="space-y-6">
              {/* Logo Display */}
              <div className="flex items-center gap-4 p-6 bg-white/5 rounded-lg">
                <div 
                  className={`w-24 h-24 rounded-lg flex items-center justify-center text-3xl font-bold ${
                    showAfter 
                      ? "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" 
                      : "bg-gradient-to-br from-orange-500 to-yellow-500"
                  }`}
                >
                  {showAfter ? "MB" : "OB"}
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Logo Style</p>
                  <p className="text-sm text-white font-light">{currentData.logo.style}</p>
                  <p className="text-xs text-gray-400 mt-2">{currentData.logo.tagline}</p>
                </div>
              </div>

              {/* Color Palette */}
              <div>
                <p className="text-xs text-gray-500 mb-3">Brand Colors</p>
                <div className="flex gap-3">
                  {currentData.logo.colors.map((color, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex-1 h-16 rounded-lg border border-white/10"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Typography */}
              <div>
                <p className="text-xs text-gray-500 mb-2">Typography</p>
                <p className={`text-3xl text-white ${showAfter ? "font-light" : "font-serif"}`}>
                  {currentData.logo.font}
                </p>
              </div>
            </div>
          </div>

          {/* Website & Digital Presence */}
          <div className="border border-white/10 p-6 bg-black/30">
            <h3 className="text-sm text-gray-400 mb-6 uppercase tracking-wider">Digital Presence</h3>
            
            <div className="space-y-4">
              {/* Website Metrics */}
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500">Website Design</span>
                  <span className="text-xs text-white">{currentData.website.design}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500">User Experience</span>
                  <span className="text-xs text-white">{currentData.website.userExperience}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500">Load Speed</span>
                  <span className={`text-xs ${showAfter ? "text-green-400" : "text-red-400"}`}>
                    {currentData.website.loadSpeed}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Mobile Optimized</span>
                  <span className={`text-xs ${currentData.website.mobileOptimized ? "text-green-400" : "text-red-400"}`}>
                    {currentData.website.mobileOptimized ? "Yes" : "No"}
                  </span>
                </div>
              </div>

              {/* Social Media Stats */}
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="text-xs text-gray-500 mb-3">Social Media Performance</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-light text-white">
                      {currentData.social.followers.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">Followers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-white">{currentData.social.engagement}</p>
                    <p className="text-xs text-gray-500">Engagement Rate</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Posts per Week</span>
                    <span className="text-white">{currentData.social.postsPerWeek}</span>
                  </div>
                  <div className="flex justify-between text-xs mt-2">
                    <span className="text-gray-500">Brand Consistency</span>
                    <span className={showAfter ? "text-green-400" : "text-yellow-400"}>
                      {currentData.social.brandConsistency}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="border border-white/10 p-6 bg-black/30">
          <h3 className="text-sm text-gray-400 mb-6 uppercase tracking-wider">Brand Performance Metrics</h3>
          
          <div className="space-y-4">
            {Object.entries(currentData.performance).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className="text-sm text-white">{value}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${value}%` }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    className={`h-full ${
                      showAfter 
                        ? "bg-gradient-to-r from-green-500 to-emerald-500" 
                        : "bg-gradient-to-r from-orange-500 to-red-500"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Business Impact */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-white/10 p-6 bg-black/30">
            <h3 className="text-sm text-gray-400 mb-6 uppercase tracking-wider">Revenue Impact</h3>
            <div className="text-center">
              <p className="text-5xl font-light text-white mb-2">
                ${(currentData.revenue.monthly / 1000).toFixed(0)}K
              </p>
              <p className="text-xs text-gray-500 mb-4">Monthly Revenue</p>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                showAfter ? "bg-green-500/20 text-green-400" : "bg-orange-500/20 text-orange-400"
              }`}>
                <span className="text-lg">{showAfter ? "↑" : "→"}</span>
                <span className="text-sm">{currentData.revenue.growth}% Growth</span>
              </div>
            </div>
          </div>

          <div className="border border-white/10 p-6 bg-black/30">
            <h3 className="text-sm text-gray-400 mb-6 uppercase tracking-wider">Market Position</h3>
            <div className="text-center">
              <p className="text-5xl font-light text-white mb-2">
                #{showAfter ? "2" : "8"}
              </p>
              <p className="text-xs text-gray-500 mb-4">Industry Ranking</p>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                showAfter ? "bg-blue-500/20 text-blue-400" : "bg-gray-500/20 text-gray-400"
              }`}>
                <span className="text-sm">
                  {showAfter ? "Top Tier Competitor" : "Mid-Market Player"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Summary */}
        <div className="border border-white/10 p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
          <div className="text-center">
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">
              {showAfter ? "Total ROI After 12 Months" : "Starting Position"}
            </p>
            <p className="text-6xl font-light text-white mb-2">
              {showAfter ? "+178%" : "0%"}
            </p>
            <p className="text-sm text-gray-400">
              {showAfter 
                ? "Revenue increased by $960K annually through strategic rebranding" 
                : "Ready for transformation"}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// SEO/SEM Demo Component - Enhanced with Line Graphs
function SEOSEMDemo() {
  const [showAfter, setShowAfter] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // Before campaign data (6 months)
  const beforeData = {
    traffic: [2400, 2600, 2300, 2500, 2700, 2800],
    rankings: [45, 42, 44, 40, 38, 36],
    conversions: [28, 32, 30, 35, 38, 40],
    leads: [12, 15, 14, 16, 18, 20],
  };

  // After campaign data (6 months)
  const afterData = {
    traffic: [2800, 4200, 6500, 9200, 13500, 18700],
    rankings: [36, 28, 18, 12, 7, 3],
    conversions: [40, 85, 145, 220, 310, 425],
    leads: [20, 42, 68, 105, 148, 203],
  };

  const months = ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"];

  const getMaxValue = (data: number[]) => Math.max(...data);

  const LineGraph = ({ 
    data, 
    label, 
    color, 
    unit = "" 
  }: { 
    data: number[]; 
    label: string; 
    color: string; 
    unit?: string;
  }) => {
    const maxValue = getMaxValue(data);
    const points = data.map((value, i) => ({
      x: (i / (data.length - 1)) * 100,
      y: 100 - (value / maxValue) * 100,
      value,
    }));

    const pathData = points
      .map((point, i) => `${i === 0 ? "M" : "L"} ${point.x} ${point.y}`)
      .join(" ");

    return (
      <div className="border border-white/10 p-6 bg-black/30">
        <h3 className="text-sm text-gray-400 mb-4">{label}</h3>
        <div className="relative h-48">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="100"
                y2={y}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="0.5"
              />
            ))}

            {/* Area under curve */}
            <path
              d={`${pathData} L 100 100 L 0 100 Z`}
              fill={`url(#gradient-${label})`}
              opacity="0.2"
            />

            {/* Line */}
            <path
              d={pathData}
              fill="none"
              stroke={color}
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />

            {/* Points */}
            {points.map((point, i) => (
              <circle
                key={i}
                cx={point.x}
                cy={point.y}
                r="2"
                fill={color}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredPoint(i)}
                onMouseLeave={() => setHoveredPoint(null)}
              />
            ))}

            {/* Gradient definition */}
            <defs>
              <linearGradient id={`gradient-${label}`} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={color} />
                <stop offset="100%" stopColor={color} stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Hover tooltip */}
          {hoveredPoint !== null && (
            <div className="absolute top-0 left-0 bg-black/90 border border-white/20 px-3 py-2 rounded text-xs pointer-events-none">
              <p className="text-white">{months[hoveredPoint]}</p>
              <p className="text-gray-400">
                {data[hoveredPoint].toLocaleString()}{unit}
              </p>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="flex justify-between mt-4 text-xs">
          {months.map((month, i) => (
            <span key={i} className="text-gray-600">{month.split(" ")[1]}</span>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-gray-500">Start</p>
            <p className="text-lg text-white">{data[0].toLocaleString()}{unit}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Current</p>
            <p className="text-lg text-white">{data[data.length - 1].toLocaleString()}{unit}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Growth</p>
            <p className="text-lg text-green-400">
              +{(((data[data.length - 1] - data[0]) / data[0]) * 100).toFixed(0)}%
            </p>
          </div>
        </div>
      </div>
    );
  };

  const currentData = showAfter ? afterData : beforeData;

  return (
    <div className="p-8">
      {/* Toggle Control */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex border border-white/10 p-1 bg-black/50 rounded-lg">
          <button
            onClick={() => setShowAfter(false)}
            className={`px-8 py-3 text-sm font-light transition-all rounded-md ${
              !showAfter ? "bg-white text-black" : "text-gray-400 hover:text-white"
            }`}
          >
            Before Campaign
          </button>
          <button
            onClick={() => setShowAfter(true)}
            className={`px-8 py-3 text-sm font-light transition-all rounded-md ${
              showAfter ? "bg-white text-black" : "text-gray-400 hover:text-white"
            }`}
          >
            After Campaign
          </button>
        </div>
      </div>

      {/* Performance Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="border border-white/10 p-4 bg-black/30">
          <p className="text-xs text-gray-500 mb-1">Organic Traffic</p>
          <p className="text-2xl font-light text-white">
            {currentData.traffic[currentData.traffic.length - 1].toLocaleString()}
          </p>
          <p className="text-xs text-green-400 mt-1">
            {showAfter ? "+568% increase" : "Baseline"}
          </p>
        </div>

        <div className="border border-white/10 p-4 bg-black/30">
          <p className="text-xs text-gray-500 mb-1">Avg. Ranking</p>
          <p className="text-2xl font-light text-white">
            #{currentData.rankings[currentData.rankings.length - 1]}
          </p>
          <p className="text-xs text-green-400 mt-1">
            {showAfter ? "Top 3 position" : "Page 4"}
          </p>
        </div>

        <div className="border border-white/10 p-4 bg-black/30">
          <p className="text-xs text-gray-500 mb-1">Conversions</p>
          <p className="text-2xl font-light text-white">
            {currentData.conversions[currentData.conversions.length - 1]}
          </p>
          <p className="text-xs text-green-400 mt-1">
            {showAfter ? "+962% increase" : "Baseline"}
          </p>
        </div>

        <div className="border border-white/10 p-4 bg-black/30">
          <p className="text-xs text-gray-500 mb-1">Qualified Leads</p>
          <p className="text-2xl font-light text-white">
            {currentData.leads[currentData.leads.length - 1]}
          </p>
          <p className="text-xs text-green-400 mt-1">
            {showAfter ? "+915% increase" : "Baseline"}
          </p>
        </div>
      </div>

      {/* Line Graphs */}
      <motion.div
        key={showAfter ? "after" : "before"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <LineGraph 
            data={currentData.traffic} 
            label="Organic Traffic" 
            color="#3B82F6"
          />
          <LineGraph 
            data={currentData.rankings} 
            label="Average Keyword Ranking" 
            color="#8B5CF6"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <LineGraph 
            data={currentData.conversions} 
            label="Monthly Conversions" 
            color="#10B981"
          />
          <LineGraph 
            data={currentData.leads} 
            label="Qualified Leads" 
            color="#EC4899"
          />
        </div>
      </motion.div>

      {/* Campaign Details */}
      <div className="mt-8 border border-white/10 p-6 bg-black/30">
        <h3 className="text-sm text-gray-400 mb-4 uppercase tracking-wider">Campaign Strategy</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-xs text-gray-500 mb-2">SEO Optimization</p>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• On-page optimization</li>
              <li>• Technical SEO audit</li>
              <li>• Content strategy</li>
              <li>• Link building</li>
            </ul>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-2">SEM Campaigns</p>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• Google Ads optimization</li>
              <li>• Keyword targeting</li>
              <li>• A/B testing</li>
              <li>• Budget allocation</li>
            </ul>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-2">Results Achieved</p>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• {showAfter ? "568%" : "0%"} traffic increase</li>
              <li>• {showAfter ? "92%" : "0%"} ranking improvement</li>
              <li>• {showAfter ? "962%" : "0%"} conversion boost</li>
              <li>• {showAfter ? "$285K" : "$0"} additional revenue</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ROI Calculator */}
      {showAfter && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 border border-white/10 p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10"
        >
          <div className="text-center">
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">
              6-Month Campaign ROI
            </p>
            <p className="text-6xl font-light text-white mb-2">452%</p>
            <p className="text-sm text-gray-400 mb-6">
              Every $1 invested returned $4.52 in revenue
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="text-xs text-gray-500">Investment</p>
                <p className="text-xl text-white">$45K</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="text-xs text-gray-500">Revenue Generated</p>
                <p className="text-xl text-white">$285K</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="text-xs text-gray-500">Net Profit</p>
                <p className="text-xl text-green-400">$240K</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function BrandingMarketing() {
  const { t } = useLanguage();
  const [activeDemo, setActiveDemo] = useState<"rebrand" | "seo">("rebrand");

  const capabilities = [
    {
      title: t('brandService.capability1.title'),
      description: t('brandService.capability1.desc'),
      icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    },
    {
      title: t('brandService.capability2.title'),
      description: t('brandService.capability2.desc'),
      icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    },
    {
      title: t('brandService.capability3.title'),
      description: t('brandService.capability3.desc'),
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    },
    {
      title: t('brandService.capability4.title'),
      description: t('brandService.capability4.desc'),
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      title: t('brandService.capability5.title'),
      description: t('brandService.capability5.desc'),
      icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    },
    {
      title: t('brandService.capability6.title'),
      description: t('brandService.capability6.desc'),
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
  ];

  const benefits = [
    t('brandService.benefit1'),
    t('brandService.benefit2'),
    t('brandService.benefit3'),
    t('brandService.benefit4'),
    t('brandService.benefit5'),
    t('brandService.benefit6'),
  ];

  const process = [
    {
      step: t('brandService.step1.number'),
      title: t('brandService.step1.title'),
      description: t('brandService.step1.desc'),
    },
    {
      step: t('brandService.step2.number'),
      title: t('brandService.step2.title'),
      description: t('brandService.step2.desc'),
    },
    {
      step: t('brandService.step3.number'),
      title: t('brandService.step3.title'),
      description: t('brandService.step3.desc'),
    },
    {
      step: t('brandService.step4.number'),
      title: t('brandService.step4.title'),
      description: t('brandService.step4.desc'),
    },
  ];

  const portfolioImages = [
    "/brand-market/brand-portfolio-1.png",
    "/brand-market/brand-portfolio-2.png",
    "/brand-market/brand-portfolio-3.png",
    "/brand-market/brand-portfolio-4.png",
  ];

  return (
    <main className="bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
            {t('brandService.subtitle')}
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
            {t('brandService.title')}
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            {t('brandService.description')}
          </p>

          <div className="flex gap-4">
            <Link 
              href="#demo"
              className="px-8 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all"
            >
              {t('brandService.demo')}
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
            {t('brandService.capabilities')}
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            {t('brandService.capabilitiesDesc')}
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
            {t('brandService.benefits')}
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
            {t('brandService.process')}
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
            {t('brandService.demo')}
          </h2>

          {/* Demo Tabs - STAYS IN ENGLISH */}
          <div className="flex justify-center gap-4 mb-8 border-b border-white/10 overflow-x-auto">
            <button
              onClick={() => setActiveDemo("rebrand")}
              className={`pb-4 px-4 md:px-6 text-sm font-light transition-colors relative whitespace-nowrap ${
                activeDemo === "rebrand" ? "text-white" : "text-gray-500"
              }`}
            >
              Rebranding Progress
              {activeDemo === "rebrand" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-white"
                />
              )}
            </button>
            <button
              onClick={() => setActiveDemo("seo")}
              className={`pb-4 px-4 md:px-6 text-sm font-light transition-colors relative whitespace-nowrap ${
                activeDemo === "seo" ? "text-white" : "text-gray-500"
              }`}
            >
              SEO SEM Analytics
              {activeDemo === "seo" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-white"
                />
              )}
            </button>
          </div>

          {/* Demo Content */}
          <div className="border border-white/10 bg-black/50 overflow-hidden">
            {activeDemo === "rebrand" ? <RebrandingDemo /> : <SEOSEMDemo />}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              {t('brandService.portfolio')}
            </h2>
            <p className="text-gray-400 max-w-2xl">
              {t('brandService.portfolioDesc')}
            </p>
          </div>
          
          {/* Split Layout - 1 wide top + 3 columns bottom */}
          <div className="space-y-8">
            {/* Wide Feature Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[21/9] overflow-hidden bg-neutral-900"
            >
              {portfolioImages[0]?.includes('portfolio-1') ? (
                <img
                  src={portfolioImages[0]}
                  alt="Branding & Marketing Featured Project"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 border border-white/10 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">Featured Campaign</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Three Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioImages.slice(1, 4).map((img, index) => (
                <motion.div
                  key={index + 1}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 1) * 0.1 }}
                  viewport={{ once: true }}
                  className="relative aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/10"
                >
                  {/* Show Coming Soon for all since images 2-4 don't exist yet */}
                  <div className="w-full h-full flex items-center justify-center relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }} />
                    </div>
                    
                    {/* Content */}
                    <div className="text-center relative z-10">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 + (index * 0.1) }}
                        className="mb-6"
                      >
                        <div className="w-16 h-16 mx-auto mb-4 border border-white/20 flex items-center justify-center">
                          <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-500 uppercase tracking-[0.2em] mb-2">
                          Coming Soon
                        </p>
                        <p className="text-xs text-gray-600">
                          Project {index + 2}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-neutral-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            {t('brandService.ctaButton')}
          </h2>
          <p className="text-gray-400 mb-12">
            {t('brandService.cta')}
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
              <label className="block text-xs text-gray-400 mb-2">Company</label>
              <input
                type="text"
                name="company"
                className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-all"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-2">Service Interest</label>
              <select 
                name="service_interest"
                className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-all"
              >
                <option>Brand Strategy</option>
                <option>Visual Identity Design</option>
                <option>SEO & SEM</option>
                <option>Social Media Marketing</option>
                <option>Complete Rebranding</option>
              </select>
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