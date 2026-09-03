import { headers } from "next/headers";
import { getLandingConfig } from "@/config/landing";
import ClientForm from "./components/ClientForm";
import YouTubePlayer from "./components/YouTubePlayer";
import Gallery from "./components/Gallery";
import EcosystemItems from "./components/EcosystemItems";
import {
  Phone, Mail, Globe, Facebook, Twitter, Calendar,
  TrendingUp, ShieldCheck, CheckCircle2, Sparkles,
  ArrowRight, Users, Zap, Star,
} from "lucide-react";

export default function Home() {
  const headersList = headers();
  const host = headersList.get("host");
  const config = getLandingConfig(host);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* ── NAVBAR ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <img src="/assets/images/logo.png" alt="Logo" className="h-8 w-auto" />
            <span className="font-bold text-sm sm:text-base text-slate-900 leading-tight">
              Darwin<br className="hidden sm:block" /><span className="text-emerald-500">Lumampao</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {["About","Testimonials","Conference","Gallery","Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#appointment"
            className="shrink-0 flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl shadow-lg shadow-emerald-500/25 transition-all active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Book a Call</span>
            <span className="sm:hidden">Book</span>
          </a>
        </div>
      </header>

      <main>

        {/* ── HERO ── */}
        <section className="hero-bg pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Digital Marketing & High-Income Strategy
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Transform Your Income with{" "}
              <span className="gradient-text">Proven Digital Ads</span>
              {" "}&amp; E-Commerce Strategy
            </h1>

            <p className="text-slate-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Empowering professionals &amp; entrepreneurs to scale their online presence, master Facebook Ads, and unlock high-converting digital ecosystems.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {[
                { icon: CheckCircle2, label: "Proven Marketing Results" },
                { icon: TrendingUp,   label: "₱48K+ First Month" },
                { icon: ShieldCheck,  label: "1-on-1 Mentorship" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm font-medium shadow-sm">
                  <Icon className="w-4 h-4 text-emerald-500" />
                  {label}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href="#appointment"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-emerald-500 hover:bg-emerald-600 rounded-2xl shadow-xl shadow-emerald-500/30 transition-all active:scale-95"
              >
                Get Your Free Seat <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:border-emerald-300 hover:text-emerald-600 rounded-2xl transition-all"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div className="max-w-3xl mx-auto mt-16 grid grid-cols-3 gap-4 sm:gap-8">
            {[
              { value: "₱48K+", label: "1st Month Earnings" },
              { value: "100%", label: "Remote & Flexible" },
              { value: "LEGACY", label: "INFIN8TY Community" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl sm:text-3xl font-black gradient-text">{value}</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 bg-slate-50 scroll-mt-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold">About Me</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Software Developer turned{" "}
                <span className="gradient-text-violet">Digital Strategist</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <div className="relative flex justify-center">
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400/20 to-violet-400/20 rounded-3xl blur-2xl" />
                <div className="relative w-64 sm:w-72 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
                  <img
                    src="/assets/images/image.png"
                    alt="Darwin Lumampao"
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 to-transparent p-5">
                    <p className="text-white font-bold text-sm">Darwin Lumampao</p>
                    <p className="text-emerald-400 text-xs font-medium">Remote Developer & Digital Marketer</p>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="space-y-5">
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Balancing a full-time career as a remote software developer taught me the value of efficiency, but I always wanted to expand my skill set beyond code. That opportunity came when my friend Glenn Bobis invited me to join the{" "}
                  <strong className="text-emerald-600">LEGACY INFIN8TY</strong> community.
                </p>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  LEGACY INFIN8TY gave me practical, high-income skills in digital marketing and Facebook Ads. Doing this part-time alongside my developer job, I earned{" "}
                  <span className="font-black text-emerald-600 text-xl">₱48,000</span>{" "}
                  during my first month. Today, I'm living proof that with the right community and strategies, you don't have to trade all your time to multiply your income.
                </p>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  {[
                    { v: "₱48K+", l: "1st Month Part-Time", c: "text-emerald-600" },
                    { v: "100%",  l: "Remote & Flexible",   c: "text-violet-600" },
                    { v: "∞",     l: "INFIN8TY Ecosystem",  c: "text-cyan-600" },
                  ].map(({ v, l, c }) => (
                    <div key={l} className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm card-hover">
                      <p className={`text-xl font-black ${c}`}>{v}</p>
                      <p className="text-[11px] text-slate-400 mt-1 font-medium leading-tight">{l}</p>
                    </div>
                  ))}
                </div>

                <a href="#appointment" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl shadow-lg shadow-emerald-500/25 transition-all active:scale-95">
                  Join the Community <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Ecosystem */}
            <div className="mt-16 text-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800">The Ecosystem</h3>
              <p className="text-slate-500 text-sm max-w-xl mx-auto">
                A comprehensive digital business framework built to support marketers, store owners, and remote professionals.
              </p>
              <div className="mt-6 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white p-3 max-w-4xl mx-auto card-hover">
                <img src="/assets/images/ecosystem.jpeg" alt="LEGACY INFIN8TY Ecosystem" className="w-full h-auto rounded-2xl" />
              </div>
              <EcosystemItems />
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section id="testimonials" className="py-20 sm:py-28 px-4 sm:px-6 scroll-mt-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> Real Stories
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                What Our <span className="gradient-text">Community Says</span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                Hear directly from members on their income transformations and strategic growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <YouTubePlayer videoId="9HpOGHBYtwk" title="Community Testimonial — Success Story 1" />
              <YouTubePlayer videoId="Tz4x_O9I0VQ" title="Community Testimonial — Success Story 2" />
            </div>
          </div>
        </section>

        {/* ── CONFERENCE ── */}
        <section id="conference" className="py-20 sm:py-28 px-4 sm:px-6 bg-slate-50 scroll-mt-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold">Conference Highlights</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Exclusive <span className="gradient-text-violet">Training Sessions</span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                Watch our conference highlights and learn how to multiply your income with Facebook Ads and digital marketing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <YouTubePlayer videoId="Tz4x_O9I0VQ" title="LEGACY INFIN8TY Conference — Session 1" />
              <YouTubePlayer videoId="9HpOGHBYtwk" title="LEGACY INFIN8TY Conference — Session 2" />
            </div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section id="gallery" className="py-20 sm:py-28 px-4 sm:px-6 scroll-mt-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">Gallery</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Moments &amp; <span className="gradient-text">Highlights</span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                A glimpse into our community events, conferences, and milestones.
              </p>
            </div>
            <Gallery />
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 scroll-mt-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold border border-cyan-200">
                <Users className="w-3.5 h-3.5" /> Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Let's <span className="gradient-text">Connect</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="tel:09067705930" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10 transition-all card-hover">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mobile</p>
                  <p className="text-sm font-semibold text-slate-800 truncate group-hover:text-emerald-600 transition-colors">09067705930</p>
                </div>
              </a>

              <a href="mailto:darlumampao@gmail.com" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all card-hover">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="text-sm font-semibold text-slate-800 truncate group-hover:text-blue-600 transition-colors">darlumampao@gmail.com</p>
                </div>
              </a>

              <a href="https://x.com/LumampaoDarwin" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 transition-all card-hover">
                <div className="p-3 rounded-xl bg-sky-50 text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">X (Twitter)</p>
                  <p className="text-sm font-semibold text-slate-800 truncate group-hover:text-sky-600 transition-colors">@LumampaoDarwin</p>
                </div>
              </a>

              <a href="https://www.facebook.com/Darwinlumampao" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10 transition-all card-hover">
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Facebook</p>
                  <p className="text-sm font-semibold text-slate-800 truncate group-hover:text-indigo-600 transition-colors">Darwin Lumampao</p>
                </div>
              </a>

              <a href="https://sites.google.com/view/darwinlumampao/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/10 transition-all card-hover sm:col-span-2 lg:col-span-2">
                <div className="p-3 rounded-xl bg-violet-50 text-violet-600 group-hover:bg-violet-500 group-hover:text-white transition-all shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Website</p>
                  <p className="text-sm font-semibold text-slate-800 truncate group-hover:text-violet-600 transition-colors">sites.google.com/view/darwinlumampao/</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── APPOINTMENT ── */}
        <section id="appointment" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 scroll-mt-16">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">
                <Zap className="w-3.5 h-3.5" /> Limited Seats Available
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Book Your Free Appointment
              </h2>
              <p className="text-white/80 text-sm sm:text-base max-w-md mx-auto">
                Claim your seat for our upcoming conference and personalized marketing consultation.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
              <ClientForm config={config} />
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2.5">
            <img src="/assets/images/logo.png" alt="Logo" className="h-7 w-auto brightness-0 invert opacity-70" />
            <span className="font-semibold text-slate-300">Darwin Lumampao</span>
          </div>
          <p className="text-xs text-center">© {new Date().getFullYear()} Darwin Lumampao. All rights reserved.</p>
          <p className="text-xs text-slate-500 text-center">Data handled securely via Resend.</p>
        </div>
      </footer>

    </div>
  );
}
