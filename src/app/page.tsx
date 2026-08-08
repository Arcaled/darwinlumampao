import { headers } from "next/headers";
import { getLandingConfig } from "@/config/landing";
import ClientForm from "./components/ClientForm";
import Image from "next/image";
import { CheckCircle2, TrendingUp, Target, BarChart3, ShoppingBag } from "lucide-react";

export default function Home() {
  // Read request headers to dynamically resolve client hostname
  const headersList = headers();
  const host = headersList.get("host");
  const config = getLandingConfig(host);

  return (
    <div className={`min-h-screen bg-gradient-to-b ${config.themeColor.bgGradient} flex flex-col justify-between overflow-x-hidden`}>

      {/* Header */}
      <header className="border-b border-slate-200/80 backdrop-blur-md sticky top-0 z-50 bg-white/85">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="relative h-12 w-48 flex items-center">
            {/* Displaying Client Logo */}
            <img
              src={config.logoUrl}
              alt="Logo"
              className="max-h-full max-w-full object-contain filter brightness-90"
            />
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-600">
            <span className="hover:text-slate-900 transition-colors cursor-pointer">Dropshipping</span>
            <span className="hover:text-slate-900 transition-colors cursor-pointer">E-commerce</span>
            <span className="hover:text-slate-900 transition-colors cursor-pointer">Facebook Ads</span>
            <span className="hover:text-slate-900 transition-colors cursor-pointer">Digital Marketing</span>
          </div>
          <div>
            <a
              href="#capture-form"
              className={`text-xs sm:text-sm font-semibold text-white px-4 py-2.5 rounded-full ${config.themeColor.primary} ${config.themeColor.primaryHover} transition-all duration-300 shadow-md`}
            >
              Get Consultation
            </a>
          </div>
        </div>
      </header>

      {/* Main Hero & Lead Capture Section */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Side: Headline & Copy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs sm:text-sm text-blue-600 font-semibold">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>Scale to 7-Figures in 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {config.headline}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
            {config.tagline}
          </p>

          {/* Core Features list */}
          <div className="pt-4 space-y-3">
            {config.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-slate-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Supporting badges */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <ShoppingBag className="w-6 h-6 text-blue-600 mb-1" />
              <span className="text-xs text-slate-500 font-medium">Dropshipping</span>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <Target className="w-6 h-6 text-indigo-600 mb-1" />
              <span className="text-xs text-slate-500 font-medium">Facebook Ads</span>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <BarChart3 className="w-6 h-6 text-emerald-600 mb-1" />
              <span className="text-xs text-slate-500 font-medium">Marketing</span>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <CheckCircle2 className="w-6 h-6 text-amber-600 mb-1" />
              <span className="text-xs text-slate-500 font-medium">ROI-Focused</span>
            </div>
          </div>
        </div>

        {/* Right Side: Lead Capture Form & Interactive Client Showcase */}
        <div id="capture-form" className="lg:col-span-5">
          <div className="relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="absolute -top-4 -right-4 bg-emerald-600 text-white font-bold text-xs uppercase px-3 py-1 rounded-full shadow-lg">
              Limited Slots
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Let's Skyrocket Your Sales</h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Fill out the secure form below to claim your personalized marketing audit & scale plan.
              </p>
            </div>

            {/* Custom Interactive ClientForm Component */}
            <ClientForm config={config} />
          </div>
        </div>
      </main>

      {/* Trust & Image Showcase Section */}
      <section className="bg-slate-100/50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Data-Driven Marketing That Outperforms Competitors
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our strategies cover every phase of your customer acquisition funnel. We focus heavily on creative testing, audience targeting optimization, and maximum automation so you can focus on building your brand.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">4.8x</p>
                <p className="text-xs text-slate-500 font-medium">Average Facebook Ad ROAS</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600">$12M+</p>
                <p className="text-xs text-slate-500 font-medium">Client Revenue Generated</p>
              </div>
            </div>
          </div>

          {/* Main Visual Image (image.png) */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white flex items-center justify-center p-2">
            <img
              src={config.imageUrl}
              alt="E-commerce Analytics and Scaling Visual"
              className="w-full h-auto object-contain max-h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs sm:text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <p>© {new Date().getFullYear()} {config.domain !== 'default' ? config.domain : 'Ecommerce Marketing Scaling'}. All rights reserved.</p>
          <p className="text-[10px] text-slate-400">
            Results vary based on execution, budget, and niche. Your data is handled securely and sent directly to {config.emailRecipient}.
          </p>
        </div>
      </footer>
    </div>
  );
}
