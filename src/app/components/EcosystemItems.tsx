"use client";

import React, { useState } from "react";
import {
  Building2,
  ShoppingBag,
  ShoppingCart,
  Briefcase,
  Users,
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";

interface EcosystemCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  stats: string;
  positionClass: string;
  mobileOrder: number;
}

const categories: EcosystemCategory[] = [
  {
    id: "conventional",
    title: "CONVENTIONAL BUSINESS",
    subtitle: "Traditional & Brick-and-Mortar Digitalization",
    icon: Building2,
    description:
      "Transition traditional businesses into modern digital powerhouses with automated lead generation and online sales funnels.",
    stats: "High Growth Potential",
    positionClass: "md:top-0 md:left-1/2 md:-translate-x-1/2",
    mobileOrder: 1,
  },
  {
    id: "forex",
    title: "FOREX TRADING",
    subtitle: "Financial Markets & Currency Exchange",
    icon: TrendingUp,
    description:
      "Leverage strategic analysis, risk management, and algorithmic tools to tap into global market opportunities.",
    stats: "24/7 Market Access",
    positionClass: "md:top-1/4 md:right-4 lg:right-12 md:-translate-y-1/2",
    mobileOrder: 2,
  },
  {
    id: "directselling",
    title: "DIRECT SELLING",
    subtitle: "Peer-to-Peer & Relationship Marketing",
    icon: Users,
    description:
      "Build high-performing distributor networks and earn passive income through direct consumer sales.",
    stats: "Scalable Team Model",
    positionClass: "md:bottom-1/4 md:right-4 lg:right-12 md:translate-y-1/2",
    mobileOrder: 3,
  },
  {
    id: "services",
    title: "SERVICES",
    subtitle: "Professional & Agency Solutions",
    icon: Briefcase,
    description:
      "Package specialized expertise, consulting, and client service models for recurring monthly revenue.",
    stats: "High Margin Potential",
    positionClass: "md:bottom-0 md:left-1/2 md:-translate-x-1/2",
    mobileOrder: 4,
  },
  {
    id: "ecommerce",
    title: "ECOMMERCE",
    subtitle: "Digital Storefronts & Brand Stores",
    icon: ShoppingCart,
    description:
      "Build scalable direct-to-consumer digital storefronts with optimized checkout paths and customer retention strategies.",
    stats: "Global Reach",
    positionClass: "md:bottom-1/4 md:left-4 lg:left-12 md:translate-y-1/2",
    mobileOrder: 5,
  },
  {
    id: "dropshipping",
    title: "DROPSHIPPING",
    subtitle: "Low-Inventory E-Commerce Fulfillment",
    icon: ShoppingBag,
    description:
      "Sell premium products directly to end consumers with zero upfront inventory costs and automated supplier fulfillment.",
    stats: "Zero Capital Inventory",
    positionClass: "md:top-1/4 md:left-4 lg:left-12 md:-translate-y-1/2",
    mobileOrder: 6,
  },
];

export default function EcosystemItems() {
  const [selectedCategory, setSelectedCategory] = useState<EcosystemCategory | null>(null);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  const handleSelect = (category: EcosystemCategory) => {
    setSelectedCategory(category);
  };

  const handleBookCategory = (title: string) => {
    setSelectedCategory(null);
    const appointmentSection = document.getElementById("appointment");
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative mt-12 pt-8 pb-12 px-4 sm:px-6 bg-slate-50/80 rounded-3xl border border-slate-200 overflow-hidden">
      {/* Background SVG Grid pattern matching screenshot aesthetic */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ecosystem-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#CBD5E1" strokeWidth="0.8" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ecosystem-grid)" />
        </svg>
      </div>

      {/* Decorative center ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-10 space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Interactive Business Models
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Explore Our <span className="gradient-text">Ecosystem Verticals</span>
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm">
          Click any model below to explore how LEGACY INFIN8TY powers each sector.
        </p>
      </div>

      {/* Main Interactive Circle Ring Container for Desktop & Tablet */}
      <div className="relative z-10 max-w-4xl mx-auto hidden md:block h-[580px]">
        {/* Subtle SVG Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-emerald-300/60" strokeDasharray="4 4">
          <circle cx="50%" cy="50%" r="200" fill="none" strokeWidth="1.5" className="animate-pulse" />
        </svg>

        {/* Center Node / Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
          <div className="p-6 rounded-full bg-white/90 backdrop-blur-md border-2 border-emerald-300 shadow-xl shadow-emerald-500/10 flex flex-col items-center justify-center w-40 h-40 group hover:scale-105 transition-transform duration-300">
            <span className="text-2xl font-black gradient-text">INFIN8TY</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">Ecosystem Core</span>
          </div>
        </div>

        {/* 6 Circle Nodes */}
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isHovered = activeHover === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => handleSelect(cat)}
              onMouseEnter={() => setActiveHover(cat.id)}
              onMouseLeave={() => setActiveHover(null)}
              className={`absolute z-30 ${cat.positionClass} group focus:outline-none transition-all duration-300 transform active:scale-95`}
              aria-label={`Select ${cat.title}`}
            >
              {/* Mint Green Ring as in Screenshot */}
              <div
                className={`relative w-44 h-44 sm:w-48 sm:h-48 rounded-full p-2.5 transition-all duration-300 shadow-md ${
                  isHovered
                    ? "bg-[#81F4BE] shadow-xl shadow-emerald-400/40 scale-105"
                    : "bg-[#A2F4C7] hover:bg-[#81F4BE]"
                }`}
              >
                {/* White Inner Circle */}
                <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center p-4 text-center border border-slate-100 shadow-inner group-hover:border-emerald-200 transition-colors">
                  <div className={`p-2 rounded-xl mb-1 transition-colors ${isHovered ? "bg-emerald-50 text-emerald-600" : "text-slate-600"}`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="font-extrabold text-xs sm:text-sm text-slate-900 leading-tight uppercase tracking-wide max-w-[120px]">
                    {cat.title}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex items-center gap-0.5">
                    View Info <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile Grid Layout (1 or 2 columns with mint ring styling) */}
      <div className="relative z-10 md:hidden grid grid-cols-2 gap-4 max-w-md mx-auto">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => handleSelect(cat)}
              className="flex flex-col items-center text-center p-3 focus:outline-none group"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#A2F4C7] p-2 shadow-md active:scale-95 transition-transform group-hover:bg-[#81F4BE]">
                <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center p-2 text-center border border-slate-100">
                  <Icon className="w-5 h-5 text-emerald-600 mb-1" />
                  <span className="font-extrabold text-[11px] sm:text-xs text-slate-900 leading-tight uppercase tracking-tight">
                    {cat.title}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Modal Popup Details when item is clicked */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-200 shadow-2xl relative space-y-5 animate-fade-up">
            <button
              onClick={() => setSelectedCategory(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-700">
                {React.createElement(selectedCategory.icon, { className: "w-7 h-7" })}
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  {selectedCategory.stats}
                </span>
                <h4 className="text-xl font-black text-slate-900 leading-tight">
                  {selectedCategory.title}
                </h4>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedCategory.description}
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Mentorship &amp; Setup Strategy Included</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Tailored Digital Ad Strategies</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => handleBookCategory(selectedCategory.title)}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl shadow-lg shadow-emerald-500/25 transition-all active:scale-95"
              >
                Book Call for {selectedCategory.title} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
