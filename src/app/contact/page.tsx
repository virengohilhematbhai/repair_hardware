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
import { faqsData } from "@/data/repairData";

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
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedTicket = "HWN-" + Math.floor(100000 + Math.random() * 900000);
    setTicketId(generatedTicket);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfdfc] text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 ">
        {/* Ambient Top Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[340px] sm:w-[620px] h-[340px] sm:h-[450px] bg-teal-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-8xl mx-auto px-20">
          {/* Header Section (Motivo Style) */}
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-15">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 shadow-2xs mb-5">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-xs font-semibold text-teal-900">
                Support Lab &amp; Repair Booking
              </span>
            </div> */}

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-5">
              Get in touch with us.{" "}<br />
              <span className="font-serif-accent text-teal-700 italic font-normal">
                We&apos;re here to help.
              </span>
            </h1>

            {/* <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Have an issue that needs expert investigation? Submit a ticket below,
              reach out directly to our diagnostic lab, or explore our instant FAQs.
            </p> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Interactive Contact / Booking Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 relative">
              {submitted ? (
                <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-200 text-teal-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Repair Ticket Created Successfully!
                  </h3>
                  <div className="inline-block px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-700">
                    Ticket ID: <span className="text-teal-600 font-bold">{ticketId}</span>
                  </div>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. A diagnostic
                    engineer has received your system details and will contact you via{" "}
                    <strong className="text-slate-800">{formData.email}</strong> shortly.
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
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-950 text-white text-xs font-semibold hover:bg-slate-800 transition"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-1">
                      System Diagnostics Inquiry
                    </h2>
                    {/* <p className="text-xs text-slate-500">
                      Provide details about your hardware or software malfunction.
                    </p> */}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Operating System / Device
                      </label>
                      <select
                        value={formData.deviceType}
                        onChange={(e) => setFormData({ ...formData, deviceType: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition"
                      >
                        <option value="windows11">Windows 11 (64-bit)</option>
                        <option value="windows10">Windows 10 Pro/Home</option>
                        <option value="macos">macOS Apple Silicon (M1/M2/M3)</option>
                        <option value="linux">Linux (Ubuntu / Fedora / Arch)</option>
                        <option value="custom_pc">Custom Desktop PC Rig</option>
                        <option value="laptop">Gaming Laptop / Ultrabook</option>
                      </select>
                    </div>
                  </div>

      

                  {/* Problem Description */}
                  {/* <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Description
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="e.g. Appears during heavy gaming after 15 minutes."
                      className="w-full px-4 py-1 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition"
                    />
                  </div> */}

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full bg-slate-950 text-white text-sm font-semibold shadow-md hover:bg-slate-800 active:scale-95 transition"
                  >
                    <span>Submit Diagnostic Ticket</span>
                    <Send className="w-4 h-4" />
                  </button>

                  {/* <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    <span>Your device details are strictly confidential and encrypted.</span>
                  </div> */}
                </form>
              )}
            </div>

            {/* Right Column: Lab Info, Contacts & FAQs */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Channels Card */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-base font-bold text-slate-900">Lab Channels</h3>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Avg reply: 12 mins
                  </span>
                </div>

                <div className="space-y-8 text-xs sm:text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Diagnostic Desk</p>
                      <a href="mailto:support@hwnexus-diagnostics.com" className="text-slate-500 hover:text-teal-600 transition">
                        support@hwnexus-diagnostics.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Priority Hotline</p>
                      <p className="text-slate-500">+1 (800) 492-3849 (Toll Free 24/7)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Cleanroom Repair Facility</p>
                      <p className="text-slate-500">HW Nexus Diagnostic Hub, 742 Silicon Valley Pkwy, CA</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Operating Hours</p>
                      <p className="text-slate-500">Monday – Saturday: 08:00 AM – 10:00 PM EST</p>
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
