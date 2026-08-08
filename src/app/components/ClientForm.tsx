"use client";

import React, { useState } from "react";
import { DomainConfig } from "@/config/landing";
import { Loader2, CheckCircle, AlertTriangle } from "lucide-react";

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
      <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-6 text-center space-y-4 animate-fade-in">
        <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
        <h4 className="text-lg font-bold text-white">Application Received!</h4>
        <p className="text-sm text-slate-300 leading-relaxed">
          Thank you for applying. We have sent your details to <strong>{config.emailRecipient}</strong>. An advisor will contact you within the next 24 business hours to map out your custom-built marketing audit.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-xs text-emerald-400 hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "error" && (
        <div className="flex items-start gap-3 bg-rose-950/40 border border-rose-500/30 rounded-xl p-4 text-sm text-rose-300">
          <AlertTriangle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
          <p>{errorMessage}</p>
        </div>
      )}

      {/* Full Name Input Field */}
      <div>
        <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
          Full Name <span className="text-rose-500">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="E.g. John Doe"
          required
          className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
        />
      </div>

      {/* Mobile Number Input Field */}
      <div>
        <label htmlFor="mobileNumber" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
          Mobile Number <span className="text-rose-500">*</span>
        </label>
        <input
          id="mobileNumber"
          type="tel"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="E.g. +1 (555) 019-2834"
          required
          className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
        />
      </div>

      {/* Job / Business Input Field */}
      <div>
        <label htmlFor="jobBusiness" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
          Job or Business Name <span className="text-rose-500">*</span>
        </label>
        <input
          id="jobBusiness"
          type="text"
          value={jobBusiness}
          onChange={(e) => setJobBusiness(e.target.value)}
          placeholder="E.g. Dropshipping Store Owner / Marketing Director"
          required
          className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
        />
      </div>

      {/* Dynamic CTA Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className={`w-full flex items-center justify-center gap-2 ${config.themeColor.primary} ${config.themeColor.primaryHover} text-white font-bold text-sm uppercase tracking-wider py-4 rounded-xl transition-all duration-300 transform active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none shadow-lg shadow-blue-500/20`}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending Application...</span>
          </>
        ) : (
          <span>{config.ctaText}</span>
        )}
      </button>

      <p className="text-[11px] text-center text-slate-500 leading-relaxed pt-2">
        We respect your privacy. Safe & confidential. By clicking above, you agree to share this info directly with {config.emailRecipient}.
      </p>
    </form>
  );
}
