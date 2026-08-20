import { headers } from "next/headers";
import { getLandingConfig } from "@/config/landing";
import ClientForm from "./components/ClientForm";
import YouTubePlayer from "./components/YouTubePlayer";
import {
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Calendar,
  User,
  Video,
  MessageSquare,
  Sparkles,
  Award,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function Home() {
  const headersList = headers();
  const host = headersList.get("host");
  const config = getLandingConfig(host);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      {/* Dynamic Header & Navigation */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-emerald-500/50 transition-all duration-300">
              <img
                src="/assets/images/logo.png"
                alt="Logo"
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-base sm:text-lg tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                Darwin Lumampao
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
                Digital Strategist & Dev
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/60 border border-slate-800/80 p-1.5 rounded-2xl backdrop-blur-md">
            <a
              href="#about"
              className="px-4 py-2 text-xs lg:text-sm font-semibold text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 rounded-xl transition-all"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="px-4 py-2 text-xs lg:text-sm font-semibold text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 rounded-xl transition-all"
            >
              Testimonials
            </a>
            <a
              href="#conference"
              className="px-4 py-2 text-xs lg:text-sm font-semibold text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 rounded-xl transition-all"
            >
              Conference
            </a>
            <a
              href="#contacts"
              className="px-4 py-2 text-xs lg:text-sm font-semibold text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 rounded-xl transition-all"
            >
              Contacts
            </a>
          </nav>

          {/* Emphasized Appointment Action Button */}
          <a
            href="#appointment"
            className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 transform active:scale-95 flex items-center gap-2 shimmer-btn"
          >
            <Calendar className="w-4 h-4" />
            <span>Appointment</span>
          </a>
        </div>
      </header>

      <main className="flex-grow space-y-24 py-8 sm:py-16">
        {/* HERO BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Background Ambient Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

          <div className="text-center space-y-6 max-w-4xl mx-auto py-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest shadow-xl animate-fade-in">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Digital Marketing & High-Income Strategy</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight sm:leading-none">
              Transform Your Income with{" "}
              <span className="gradient-text-emerald">Proven Digital Ads</span> & E-Commerce Strategy
            </h1>

            <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
              Empowering professionals & entrepreneurs to scale their online presence, master Facebook Ads, and unlock high-converting digital ecosystems.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-medium text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Proven Marketing Results
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                ₱48K+ First Month Success
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                1-on-1 Mentorship & Community
              </span>
            </div>
          </div>
        </section>

        {/* 1. ABOUT SECTION */}
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl space-y-12 backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Section Heading */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/10">
                  <User className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">About Me</h2>
                  <p className="text-xs sm:text-sm text-slate-400">Software Developer turned Digital Strategist</p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                <Zap className="w-3.5 h-3.5 text-emerald-400" /> Bio & Journey
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Profile Image Container - Displayed in Full Uncropped aspect ratio */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950 p-2 sm:p-3 w-full max-w-md group/img hover:border-emerald-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10 pointer-events-none opacity-60 group-hover/img:opacity-30 transition-opacity" />
                  <img
                    src="/assets/images/image.png"
                    alt="Darwin Lumampao Profile"
                    className="w-full h-auto object-contain rounded-xl shadow-md transition-transform duration-500 group-hover/img:scale-[1.02]"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-800">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white">Darwin Lumampao</span>
                      <span className="text-[10px] text-emerald-400 font-semibold">Remote Software Developer & Marketer</span>
                    </div>
                    <Award className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Story & Description Text */}
              <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
                <div className="space-y-4">
                  <p className="bg-slate-950/50 p-5 rounded-2xl border border-slate-800/60 shadow-inner">
                    Balancing a full-time career as a remote software developer taught me the value of efficiency, but I always wanted to expand my skill set beyond code. That opportunity came when my friend Glenn Bobis invited me to join the <strong className="text-emerald-400 font-semibold">LEGACY INFIN8TY</strong> community.
                  </p>
                  <p className="bg-slate-950/50 p-5 rounded-2xl border border-slate-800/60 shadow-inner">
                    Stepping into this community was a game-changer. LEGACY INFIN8TY didn’t just help me grow personally—it gave me practical, high-income skills in digital marketing and Facebook Ads. In fact, doing this part-time alongside my developer job, I earned <span className="text-emerald-400 font-extrabold underline decoration-emerald-500/50 underline-offset-4">₱48,000</span> during my first month. Today, I’m living proof that with the right community, mentorship, and marketing strategies, you don't have to trade all your time to multiply your income.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <p className="text-xl font-extrabold text-emerald-400">₱48,000+</p>
                    <p className="text-[11px] text-slate-400 font-medium">1st Month Part-Time</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <p className="text-xl font-extrabold text-white">100%</p>
                    <p className="text-[11px] text-slate-400 font-medium">Remote & Flexible</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center col-span-2 sm:col-span-1">
                    <p className="text-xl font-extrabold text-teal-400">LEGACY</p>
                    <p className="text-[11px] text-slate-400 font-medium">INFIN8TY Ecosystem</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ecosystem Image Display */}
            <div className="pt-8 border-t border-slate-800/80 space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">Ecosystem & Community</h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
                  Our comprehensive digital business framework built to support digital marketers, store owners, and remote professionals.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-3 sm:p-4 shadow-2xl max-w-4xl mx-auto group/eco hover:border-emerald-500/40 transition-all duration-300">
                <img
                  src="/assets/images/ecosystem.png"
                  alt="LEGACY INFIN8TY Ecosystem"
                  className="w-full h-auto object-contain rounded-xl mx-auto transition-transform duration-500 group-hover/eco:scale-[1.01]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. TESTIMONIALS SECTION */}
        <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 backdrop-blur-xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/10">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Testimonials</h2>
                  <p className="text-xs sm:text-sm text-slate-400">Real stories from our active community members</p>
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base text-center max-w-2xl mx-auto">
              Hear directly from our community members and clients on their personal journeys, income transformations, and strategic growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <YouTubePlayer videoId="9HpOGHBYtwk" title="Client Success & Community Testimonial 1" />
              <YouTubePlayer videoId="Tz4x_O9I0VQ" title="Client Success & Community Testimonial 2" />
            </div>
          </div>
        </section>

        {/* 3. CONFERENCE SECTION */}
        <section id="conference" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 backdrop-blur-xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shadow-lg shadow-indigo-500/10">
                  <Video className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Conference Highlights</h2>
                  <p className="text-xs sm:text-sm text-slate-400">Exclusive training sessions & strategy breakdowns</p>
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base text-center max-w-2xl mx-auto">
              Watch our full conference highlight and learn how to multiply your income with Facebook Ads, automated lead capture, and digital marketing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <YouTubePlayer videoId="Tz4x_O9I0VQ" title="LEGACY INFIN8TY Conference Session 1" />
              <YouTubePlayer videoId="9HpOGHBYtwk" title="LEGACY INFIN8TY Conference Session 2" />
            </div>
          </div>
        </section>

        {/* 4. CONTACTS SECTION */}
        <section id="contacts" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="flex items-center gap-3 border-b border-slate-800/80 pb-6">
              <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-lg shadow-blue-500/10">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Get in Touch</h2>
                <p className="text-xs sm:text-sm text-slate-400">Direct contact channels & social profiles</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <a
                href="tel:09067705930"
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/60 hover:bg-emerald-500/5 transition-all duration-300 group shadow-lg"
              >
                <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mobile Phone</p>
                  <p className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">09067705930</p>
                </div>
              </a>

              <a
                href="mailto:darlumampao@gmail.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-blue-500/60 hover:bg-blue-500/5 transition-all duration-300 group shadow-lg"
              >
                <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</p>
                  <p className="text-base font-bold text-white truncate group-hover:text-blue-400 transition-colors">darlumampao@gmail.com</p>
                </div>
              </a>

              <a
                href="https://x.com/LumampaoDarwin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-teal-500/60 hover:bg-teal-500/5 transition-all duration-300 group shadow-lg"
              >
                <div className="p-3.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                  <Twitter className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">X (Twitter)</p>
                  <p className="text-base font-bold text-white group-hover:text-teal-400 transition-colors">@LumampaoDarwin</p>
                </div>
              </a>

              <a
                href="https://www.facebook.com/Darwinlumampao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-indigo-500/60 hover:bg-indigo-500/5 transition-all duration-300 group shadow-lg"
              >
                <div className="p-3.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Facebook className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Facebook Profile</p>
                  <p className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">Darwin Lumampao</p>
                </div>
              </a>

              <a
                href="https://sites.google.com/view/darwinlumampao/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/60 hover:bg-emerald-500/5 transition-all duration-300 group shadow-lg md:col-span-2 lg:col-span-2"
              >
                <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Personal Website</p>
                  <p className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors truncate">sites.google.com/view/darwinlumampao/</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* 5. APPOINTMENT SECTION */}
        <section id="appointment" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="bg-slate-900/90 border-2 border-emerald-500/60 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-emerald-500/10 space-y-8 relative overflow-hidden backdrop-blur-2xl">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-extrabold text-[11px] uppercase tracking-widest px-5 py-2 rounded-bl-2xl shadow-lg">
              ✨ Book Appointment
            </div>

            <div className="space-y-3 text-center">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Book An <span className="gradient-text-emerald">Appointment</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Fill out the secure form below to claim your seat for our upcoming conference and personalized marketing consultation.
              </p>
            </div>

            {/* Lead Capture Form */}
            <div className="pt-2">
              <ClientForm config={config} />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-10 text-center text-xs sm:text-sm text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <img src="/assets/images/logo.png" alt="Logo" className="h-6 w-auto opacity-80" />
            <span className="font-bold text-slate-300">Darwin Lumampao</span>
          </div>
          <p>© {new Date().getFullYear()} Darwin Lumampao. All rights reserved.</p>
          <p className="text-[11px] text-slate-500">
            Your data is handled securely and sent directly via Resend email integration.
          </p>
        </div>
      </footer>
    </div>
  );
}
