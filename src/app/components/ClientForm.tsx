"use client";

import React, { useState } from "react";
import { DomainConfig } from "@/config/landing";
import { Loader2, CheckCircle, AlertTriangle, Send, User, Phone, Briefcase, Target, ChevronDown } from "lucide-react";

interface ClientFormProps {
  config: DomainConfig;
}

const fields = [
  { id: "fullName",     label: "Full Name",           placeholder: "e.g. Juan Dela Cruz",                    type: "text", icon: User },
  { id: "mobileNumber", label: "Mobile Number",        placeholder: "e.g. 09987654321",                       type: "tel",  icon: Phone },
  { id: "jobBusiness",  label: "Job or Business",      placeholder: "e.g. Store Owner, Software Engineer",    type: "text", icon: Briefcase },
] as const;

const INTEREST_OPTIONS = [
  "Conventional Business",
  "Dropshipping",
  "ECommerce",
  "Services",
  "Digital Marketing",
  "Forex Trading",
];

export default function ClientForm({ config }: ClientFormProps) {
  const [values, setValues] = useState({ fullName: "", mobileNumber: "", jobBusiness: "", interestedIn: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.fullName || !values.mobileNumber || !values.jobBusiness || !values.interestedIn) {
      setStatus("error");
      setErrorMessage("Please fill out all fields before submitting.");
      return;
    }
    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, recipientEmail: config.emailRecipient, domain: config.domain }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setValues({ fullName: "", mobileNumber: "", jobBusiness: "", interestedIn: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "An unexpected error occurred. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center space-y-4 py-6">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-9 h-9 text-emerald-500" />
        </div>
        <h4 className="text-xl font-bold text-slate-900">Application Received!</h4>
        <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
          Thank you! We've sent your details to <strong className="text-emerald-600">{config.emailRecipient}</strong>. An advisor will contact you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "error" && (
        <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-xl p-3.5 text-sm text-red-700">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
          <p>{errorMessage}</p>
        </div>
      )}

      {fields.map(({ id, label, placeholder, type, icon: Icon }) => (
        <div key={id}>
          <label htmlFor={id} className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            {label} <span className="text-emerald-500">*</span>
          </label>
          <div className="relative">
            <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id={id}
              type={type}
              value={values[id]}
              onChange={(e) => setValues((v) => ({ ...v, [id]: e.target.value }))}
              placeholder={placeholder}
              required
              className="w-full pl-10 pr-4 py-3 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 placeholder-slate-400 transition-all"
            />
          </div>
        </div>
      ))}

      <div>
        <label htmlFor="interestedIn" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
          IM INTERESTED IN <span className="text-emerald-500">*</span>
        </label>
        <div className="relative">
          <Target className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <select
            id="interestedIn"
            value={values.interestedIn}
            onChange={(e) => setValues((v) => ({ ...v, interestedIn: e.target.value }))}
            required
            className={`w-full pl-10 pr-10 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all appearance-none cursor-pointer ${
              values.interestedIn ? "text-slate-900" : "text-slate-400"
            }`}
          >
            <option value="" disabled hidden>
              Select your interest...
            </option>
            {INTEREST_OPTIONS.map((option) => (
              <option key={option} value={option} className="text-slate-900">
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl shadow-lg shadow-emerald-500/25 transition-all active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none mt-2"
      >
        {status === "submitting" ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
        ) : (
          <><span>{config.ctaText}</span><Send className="w-4 h-4" /></>
        )}
      </button>

      <p className="text-[11px] text-center text-slate-400 pt-1">
        🔒 Your data is safe & confidential. Sent directly to {config.emailRecipient}.
      </p>
    </form>
  );
}
