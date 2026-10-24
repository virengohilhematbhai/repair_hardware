"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  Monitor,
  Laptop,
  Cpu,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "software",
    deviceType: "windows11",
    urgency: "standard",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedTicket = "HWN-" + Math.floor(100000 + Math.random() * 900000);
    setTicketId(generatedTicket);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfdfc] dark:bg-[#060b11] text-slate-900 dark:text-[#f0fdfa] selection:bg-teal-500/30 selection:text-teal-200 transition-colors duration-200">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Ambient Top Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[340px] sm:w-[620px] h-[340px] sm:h-[450px] bg-teal-100/30 dark:bg-teal-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-8xl mx-auto px-5 sm:px-20">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-15">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-5">
              Get in touch with us.{" "}<br />
              <span className="font-serif-accent text-teal-700 dark:text-[#00F2B0] italic font-normal">
                We&apos;re here to help.
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Interactive Contact / Booking Form */}
            <div className="lg:col-span-7 bg-white dark:bg-[#0c1622] rounded-3xl border border-slate-200/90 dark:border-teal-900/50 shadow-md dark:shadow-[0_12px_45px_rgba(0,0,0,0.8)] p-6 sm:p-10 relative transition-colors duration-200">
              {submitted ? (
                <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-500/30 text-teal-600 dark:text-[#00F2B0] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Repair Ticket Created Successfully!
                  </h3>
                  <div className="inline-block px-4 py-2 rounded-2xl bg-slate-50 dark:bg-[#070e17] border border-slate-200 dark:border-teal-900/60 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                    Ticket ID: <span className="text-teal-600 dark:text-[#00F2B0] font-bold">{ticketId}</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-800 dark:text-white">{formData.name}</strong>. A diagnostic
                    engineer has received your system details and will contact you via{" "}
                    <strong className="text-slate-800 dark:text-white">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        category: "software",
                        deviceType: "windows11",
                        urgency: "standard",
                        description: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-950 dark:bg-[#00F2B0] text-white dark:text-[#060b11] text-xs font-semibold dark:font-bold hover:bg-slate-800 dark:hover:bg-[#20f5be] transition shadow-xs hover:dark:shadow-[0_0_15px_rgba(0,242,176,0.4)]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      System Diagnostics Inquiry
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-[#070e17] border border-slate-200 dark:border-teal-900/60 rounded-2xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-[#00F2B0] dark:focus:border-[#00F2B0] focus:bg-white dark:focus:bg-[#0c1622] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-[#070e17] border border-slate-200 dark:border-teal-900/60 rounded-2xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-[#00F2B0] dark:focus:border-[#00F2B0] focus:bg-white dark:focus:bg-[#0c1622] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-[#070e17] border border-slate-200 dark:border-teal-900/60 rounded-2xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-[#00F2B0] dark:focus:border-[#00F2B0] focus:bg-white dark:focus:bg-[#0c1622] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                        Operating System / Device
                      </label>
                      <select
                        value={formData.deviceType}
                        onChange={(e) => setFormData({ ...formData, deviceType: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-[#070e17] border border-slate-200 dark:border-teal-900/60 rounded-2xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-[#00F2B0] dark:focus:border-[#00F2B0] focus:bg-white dark:focus:bg-[#0c1622] transition"
                      >
                        <option value="windows11" className="dark:bg-[#0c1622]">Windows 11 (64-bit)</option>
                        <option value="windows10" className="dark:bg-[#0c1622]">Windows 10 Pro/Home</option>
                        <option value="macos" className="dark:bg-[#0c1622]">macOS Apple Silicon (M1/M2/M3)</option>
                        <option value="linux" className="dark:bg-[#0c1622]">Linux (Ubuntu / Fedora / Arch)</option>
                        <option value="custom_pc" className="dark:bg-[#0c1622]">Custom Desktop PC Rig</option>
                        <option value="laptop" className="dark:bg-[#0c1622]">Gaming Laptop / Ultrabook</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full bg-slate-950 dark:bg-gradient-to-r dark:from-[#00F2B0] dark:to-[#00D2A0] text-white dark:text-[#060b11] text-sm font-semibold dark:font-bold shadow-md hover:bg-slate-800 dark:hover:bg-[#20f5be] hover:dark:shadow-[0_0_20px_rgba(0,242,176,0.35)] active:scale-95 transition"
                  >
                    <span>Submit Diagnostic Ticket</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Lab Info & Contacts */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Channels Card */}
              <div className="bg-white dark:bg-[#0c1622] rounded-3xl border border-slate-200/90 dark:border-teal-900/50 shadow-sm dark:shadow-[0_10px_35px_rgba(0,0,0,0.6)] p-6 sm:p-8 space-y-5 transition-colors duration-200">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-teal-950">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Lab Channels</h3>
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-[#00F2B0] bg-emerald-50 dark:bg-teal-950/70 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-teal-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#00F2B0]" />
                    Avg reply: 12 mins
                  </span>
                </div>

                <div className="space-y-8 text-xs sm:text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-500/30 text-teal-600 dark:text-[#00F2B0] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Diagnostic Desk</p>
                      <a href="mailto:support@hwnexus-diagnostics.com" className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-[#00F2B0] transition">
                        support@hwnexus-diagnostics.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-500/30 text-teal-600 dark:text-[#00F2B0] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Priority Hotline</p>
                      <p className="text-slate-500 dark:text-slate-400">+1 (800) 492-3849 (Toll Free 24/7)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-500/30 text-teal-600 dark:text-[#00F2B0] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Cleanroom Repair Facility</p>
                      <p className="text-slate-500 dark:text-slate-400">HW Nexus Diagnostic Hub, 742 Silicon Valley Pkwy, CA</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-500/30 text-teal-600 dark:text-[#00F2B0] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Operating Hours</p>
                      <p className="text-slate-500 dark:text-slate-400">Monday – Saturday: 08:00 AM – 10:00 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
