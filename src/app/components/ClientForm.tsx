"use client";

import React, { useState } from "react";
import { DomainConfig } from "@/config/landing";
import { Loader2, CheckCircle, AlertTriangle, Send } from "lucide-react";

interface ClientFormProps {
  config: DomainConfig;
}

export default function ClientForm({ config }: ClientFormProps) {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [jobBusiness, setJobBusiness] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mobileNumber || !jobBusiness) {
      setStatus("error");
      setErrorMessage("Please fill out all fields before submitting.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          mobileNumber,
          jobBusiness,
          recipientEmail: config.emailRecipient,
          domain: config.domain,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFullName("");
        setMobileNumber("");
        setJobBusiness("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "An unexpected error occurred. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please verify your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-4 animate-fade-in backdrop-blur-md">
        <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
          <CheckCircle className="w-10 h-10 animate-bounce" />
        </div>
        <h4 className="text-xl font-extrabold text-white">Application Received!</h4>
        <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
          Thank you for applying. We have sent your details to <strong className="text-emerald-400">{config.emailRecipient}</strong>. An advisor will contact you within 24 business hours to confirm your schedule.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="inline-block mt-2 px-4 py-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-lg border border-emerald-500/20 transition-all"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="flex items-start gap-3 bg-rose-500/10 border border-rose-500/30 rounded-xl p-4 text-sm text-rose-300 animate-fade-in">
          <AlertTriangle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
          <p>{errorMessage}</p>
        </div>
      )}

      {/* Full Name Input Field */}
      <div>
        <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
          Full Name <span className="text-emerald-400">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="e.g. Juan Dela Cruz"
          required
          className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200 shadow-inner"
        />
      </div>

      {/* Mobile Number Input Field */}
      <div>
        <label htmlFor="mobileNumber" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
          Mobile Number <span className="text-emerald-400">*</span>
        </label>
        <input
          id="mobileNumber"
          type="tel"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="e.g. 09987654321"
          required
          className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200 shadow-inner"
        />
      </div>

      {/* Job / Business Input Field */}
      <div>
        <label htmlFor="jobBusiness" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
          Job or Business Name <span className="text-emerald-400">*</span>
        </label>
        <input
          id="jobBusiness"
          type="text"
          value={jobBusiness}
          onChange={(e) => setJobBusiness(e.target.value)}
          placeholder="e.g. Store Owner, Software Engineer, Freelancer"
          required
          className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200 shadow-inner"
        />
      </div>

      {/* Dynamic CTA Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full relative overflow-hidden group flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-sm uppercase tracking-wider py-4 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transform active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none shimmer-btn"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending Application...</span>
          </>
        ) : (
          <>
            <span>{config.ctaText}</span>
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-slate-400 leading-relaxed pt-1">
        🔒 We respect your privacy. Safe & confidential. Details sent directly to {config.emailRecipient}.
      </p>
    </form>
  );
}
