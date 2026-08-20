import { headers } from "next/headers";
import { getLandingConfig } from "@/config/landing";
import ClientForm from "./components/ClientForm";
import YouTubePlayer from "./components/YouTubePlayer";
import Image from "next/image";
import { Phone, Mail, Globe, Facebook, Twitter, Calendar, User, Video, MessageSquare, Menu, X } from "lucide-react";

export default function Home() {
  const headersList = headers();
  const host = headersList.get("host");
  const config = getLandingConfig(host);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between overflow-x-hidden scroll-smooth">
      {/* Dynamic Header & Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/images/logo.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="font-extrabold text-lg text-slate-900 hidden sm:inline-block">
              Darwin Lumampao
            </span>
          </div>

          {/* 5 Navigation Buttons */}
          <nav className="flex items-center gap-1 sm:gap-3">
            <a
              href="#about"
              className="px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#conference"
              className="px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Conference
            </a>
            <a
              href="#contacts"
              className="px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Contacts
            </a>
            {/* Emphasized Green Appointment Button */}
            <a
              href="#appointment"
              className="px-4 py-2 text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-md transition-all transform active:scale-95 flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Appointment</span>
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow space-y-20 py-12">
        {/* 1. ABOUT SECTION */}
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg space-y-10">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <User className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">About Me</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50 max-w-md w-full">
                  <img
                    src="/assets/images/image.png"
                    alt="Darwin Lumampao Profile"
                    className="w-full h-auto object-cover max-h-[400px]"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
                <p>
                  Balancing a full-time career as a remote software developer taught me the value of efficiency, but I always wanted to expand my skill set beyond code. That opportunity came when my friend Glenn Bobis invited me to join the LEGACY INFIN8TY community.
                </p>
                <p>
                  Stepping into this community was a game-changer. LEGACY INFIN8TY didn’t just help me grow personally—it gave me practical, high-income skills in digital marketing and Facebook Ads. In fact, doing this part-time alongside my developer job, I earned ₱48,000 during my first month. Today, I’m living proof that with the right community, mentorship, and marketing strategies, you don't have to trade all your time to multiply your income.
                </p>
              </div>
            </div>

            {/* Ecosystem Image */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 text-center">Ecosystem & Community</h3>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md max-w-4xl mx-auto bg-slate-50 p-2">
                <img
                  src="/assets/images/ecosystem.png"
                  alt="LEGACY INFIN8TY Ecosystem"
                  className="w-full h-auto object-contain max-h-[500px] rounded-xl mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. TESTIMONIALS SECTION */}
        <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <MessageSquare className="w-8 h-8 text-emerald-600" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Testimonials</h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base text-center max-w-2xl mx-auto">
              Hear directly from our community members and clients on their personal journeys and growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <YouTubePlayer videoId="9HpOGHBYtwk" title="Client Success & Community Testimonial 1" />
              <YouTubePlayer videoId="Tz4x_O9I0VQ" title="Client Success & Community Testimonial 2" />
            </div>
          </div>
        </section>

        {/* 3. CONFERENCE SECTION */}
        <section id="conference" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <Video className="w-8 h-8 text-indigo-600" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Conference</h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base text-center max-w-2xl mx-auto">
              Watch our full conference highlight and learn how to multiply your income with Facebook Ads and Digital Marketing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <YouTubePlayer videoId="Tz4x_O9I0VQ" title="LEGACY INFIN8TY Conference Session 1" />
              <YouTubePlayer videoId="9HpOGHBYtwk" title="LEGACY INFIN8TY Conference Session 2" />
            </div>
          </div>
        </section>

        {/* 4. CONTACTS SECTION */}
        <section id="contacts" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg space-y-8">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <Phone className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Contacts</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a
                href="tel:09067705930"
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all group"
              >
                <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mobile</p>
                  <p className="text-base font-bold text-slate-900">09067705930</p>
                </div>
              </a>

              <a
                href="mailto:darlumampao@gmail.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all group"
              >
                <div className="p-3 rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</p>
                  <p className="text-base font-bold text-slate-900 truncate">darlumampao@gmail.com</p>
                </div>
              </a>

              <a
                href="https://x.com/LumampaoDarwin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-800 hover:bg-slate-100 transition-all group"
              >
                <div className="p-3 rounded-xl bg-slate-200 text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">X (Twitter)</p>
                  <p className="text-base font-bold text-slate-900">@LumampaoDarwin</p>
                </div>
              </a>

              <a
                href="https://www.facebook.com/Darwinlumampao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-600 hover:bg-blue-50/50 transition-all group"
              >
                <div className="p-3 rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Facebook</p>
                  <p className="text-base font-bold text-slate-900">Darwin Lumampao</p>
                </div>
              </a>

              <a
                href="https://sites.google.com/view/darwinlumampao/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-600 hover:bg-indigo-50/50 transition-all group md:col-span-2 lg:col-span-2"
              >
                <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Personal Website</p>
                  <p className="text-base font-bold text-slate-900">sites.google.com/view/darwinlumampao/</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* 5. APPOINTMENT SECTION */}
        <section id="appointment" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <div className="bg-white border-2 border-emerald-500 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white font-bold text-xs uppercase px-4 py-1.5 rounded-bl-2xl shadow-md">
              Book Appointment
            </div>

            <div className="space-y-2 text-center">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                Book An Appointment
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
                Fill out the secure form below to claim your seat for our upcoming conference and personalized strategy consultation.
              </p>
            </div>

            {/* Lead Capture Form */}
            <div className="pt-4">
              <ClientForm config={config} />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs sm:text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <p>© {new Date().getFullYear()} Darwin Lumampao. All rights reserved.</p>
          <p className="text-[10px] text-slate-400">
            Your data is handled securely and sent directly via Resend email integration.
          </p>
        </div>
      </footer>
    </div>
  );
}
