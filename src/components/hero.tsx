"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  Sparkles,
  ShieldCheck,
  Cpu,
  Monitor,
  Laptop,
  CheckCircle2,
  Clock,
  Activity,
  Layers,
  ChevronRight,
  Star,
  Zap,
} from "lucide-react";
import MetricsBar from "@/components/metricsBar";

interface HeroProps {
  onOpenBooking?: () => void;
  onExploreDiagnostic?: () => void;
  onSearchSelect?: (issueQuery: string) => void;
}

export default function Hero({
  onOpenBooking,
}: HeroProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "diagnostics">("overview");

  return (
    <div className="w-full">
      {/* ======================================================== */}
      {/* 1. TOP HERO SECTION */}
      {/* ======================================================== */}
      <section
        id="home"
        className="relative pt-25 pb-16 overflow-hidden"
      >
        {/* Subtle ambient lighting glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[580px] lg:w-[760px] h-[340px] sm:h-[450px] lg:h-[520px] bg-teal-100/35 dark:bg-teal-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-16 right-0 sm:right-10 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-cyan-100/30 dark:bg-cyan-500/10 rounded-full blur-2xl -z-10 pointer-events-none" />

        <div className="max-w-8xl mx-auto px-5 sm:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
              {/* Main Headline with Editorial Serif Italic Accent */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-5 sm:mb-6">
                Diagnose smarter,
                <br />
                together.{" "}
                <span className="font-serif-accent text-teal-700 dark:text-[#00F2B0] italic font-normal">
                  Repair faster.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mb-8">
                HW Nexus is the all-in-one workspace that helps users diagnose,
                troubleshoot display glitches, software bottlenecks, and hardware faults
                with step-by-step verified recovery.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <Link
                  href="/display-problems"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-slate-950 dark:bg-gradient-to-r dark:from-[#00F2B0] dark:to-[#00D2A0] text-white dark:text-[#060b11] text-sm font-semibold dark:font-bold shadow-md hover:bg-slate-800 dark:hover:bg-[#20f5be] hover:dark:shadow-[0_0_25px_rgba(0,242,176,0.45)] active:scale-95 transition-all group"
                >
                  <span>Get started — it&apos;s free</span>
                  <span className="w-5 h-5 rounded-full bg-white/20 dark:bg-black/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5 text-white dark:text-[#060b11]" />
                  </span>
                </Link>

                <a
                  href="/about"
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-full bg-white/90 dark:bg-[#0c1622]/90 hover:bg-white dark:hover:bg-[#112030] text-slate-700 dark:text-slate-200 text-sm font-medium border border-slate-200 dark:border-teal-900/60 shadow-2xs hover:border-teal-300 dark:hover:border-teal-500/50 hover:dark:shadow-[0_0_15px_rgba(0,242,176,0.15)] transition"
                >
                  <div className="w-6 h-6 rounded-full bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-[#00F2B0]">
                    <Play className="w-3 h-3 fill-teal-600 dark:fill-[#00F2B0] ml-0.5" />
                  </div>
                  <span>Watch overview</span>
                </a>
              </div>

              {/* Proof badges */}
              <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-3 sm:gap-x-4 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-[#00F2B0] shrink-0" />
                  Zero Data Collection
                </span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span>100% Free &amp; Browser-Based</span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span>Verified Step-by-Step Guides</span>
              </div>
            </div>

            {/* Right Column: 3D Glass Composition */}
            <div className="lg:col-span-5 relative flex items-center justify-center w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none mx-auto min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] mt-4 lg:mt-0">
              {/* Circular Translucent Mint Glass Disc */}
              <div className="absolute w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border border-teal-200/50 dark:border-teal-500/30 bg-gradient-to-tr from-teal-100/40 via-white/50 to-cyan-50/60 dark:from-teal-950/40 dark:via-[#091522]/60 dark:to-cyan-950/40 backdrop-blur-md shadow-lg transform -translate-y-4 sm:-translate-y-6 translate-x-2 sm:translate-x-4" />

              {/* Vertical Ribbed Fluted Glass Panel */}
              <div className="absolute right-2 sm:right-0 top-0 w-20 sm:w-28 lg:w-36 h-64 sm:h-80 rounded-2xl border border-white/60 dark:border-teal-500/30 bg-gradient-to-b from-white/60 via-slate-100/40 to-teal-50/30 dark:from-[#0c1622]/80 dark:via-[#08101a]/70 dark:to-teal-950/50 backdrop-blur-lg shadow-md flex divide-x divide-white/30 dark:divide-teal-500/20 overflow-hidden opacity-90">
                <div className="flex-1 bg-white/10 dark:bg-teal-500/5" />
                <div className="flex-1 bg-white/20 dark:bg-teal-500/10" />
                <div className="flex-1 bg-white/10 dark:bg-teal-500/5" />
                <div className="flex-1 bg-white/20 dark:bg-teal-500/10" />
                <div className="flex-1 bg-white/10 dark:bg-teal-500/5" />
              </div>

              {/* Luminous Mint Floating Glass Sphere */}
              <div className="relative z-10 w-32 h-32 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),rgba(45,212,191,0.45)_60%,rgba(13,148,136,0.8)_100%)] dark:bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.85),rgba(0,242,176,0.5)_45%,rgba(13,148,136,0.9)_85%,#042f2e_100%)] shadow-[inset_-10px_-10px_25px_rgba(15,118,110,0.4),0_20px_35px_rgba(20,184,166,0.25)] dark:shadow-[inset_-8px_-8px_25px_rgba(0,242,176,0.4),0_0_35px_rgba(0,242,176,0.4)] transform -translate-x-6 sm:-translate-x-12 translate-y-4 sm:translate-y-8 flex items-center justify-center transition-transform hover:scale-105 duration-500">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-white/40 dark:border-teal-200/40 flex items-center justify-center text-teal-900/60 dark:text-[#00F2B0]">
                  <Sparkles className="w-7 h-7 sm:w-10 sm:h-10 text-white/80 dark:text-[#00F2B0] animate-pulse" />
                </div>
              </div>

              {/* Translucent Sapphire/Cyan Curved Glass Arch */}
              <div className="absolute right-4 sm:right-6 bottom-2 z-20 w-28 sm:w-36 lg:w-44 h-24 sm:h-32 rounded-t-full bg-gradient-to-br from-sky-400/40 via-sky-500/60 to-sky-700/80 dark:from-[#00F2B0]/25 dark:via-cyan-500/50 dark:to-sky-800/75 border border-white/50 dark:border-[#00F2B0]/40 shadow-xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(0,242,176,0.2)] flex items-end justify-center pb-3 sm:pb-4">
                <div className="w-12 sm:w-16 h-10 sm:h-14 rounded-t-full bg-white/20 dark:bg-teal-400/20 border-t border-l border-r border-white/40 dark:border-teal-300/40" />
              </div>

              {/* Floating Info Pill Tag */}
              <div className="absolute top-4 right-0 sm:top-8 sm:right-0 z-30 max-w-[170px] bg-white/95 dark:bg-[#0c1622]/95 backdrop-blur-md p-3 rounded-2xl border border-slate-200/80 dark:border-teal-900/60 shadow-md">
                <div className="flex items-start justify-between">
                  <p className="text-[10px] sm:text-[11px] leading-tight text-slate-700 dark:text-slate-200 font-medium">
                    Everything your device needs, in perfect sync.
                  </p>
                  <span className="text-[10px] text-teal-600 dark:text-[#00F2B0] font-mono ml-1 font-bold">↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. FLOATING METRICS BAR */}
      {/* ======================================================== */}
      <MetricsBar />

      {/* ======================================================== */}
      {/* 3. MOTIVO FEATURE SECTION: DASHBOARD PREVIEW + FEATURES LIST */}
      {/* ======================================================== */}
      <section id="features" className="py-10 max-w-8xl mx-auto px-5 sm:px-20">
        <div className="text-center mx-auto mb-14 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-5">
            All the tools &amp; diagnostics you need,{" "}
            <span className="font-serif-accent text-teal-700 dark:text-[#00F2B0] italic font-normal">
              beautifully connected.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Interactive Dashboard Preview Card */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0c1622] rounded-3xl border border-slate-200/90 dark:border-teal-900/50 shadow-lg dark:shadow-[0_12px_45px_rgba(0,0,0,0.8)] p-5 sm:p-7 overflow-hidden transition-colors duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-teal-950 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400 dark:bg-[#00F2B0]" />
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 ml-2">HW Nexus Workspace</span>
              </div>
              <span className="text-[11px] font-medium text-emerald-700 dark:text-[#00F2B0] bg-emerald-50 dark:bg-teal-950/70 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-teal-500/30">
                System Health: 98%
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
              {/* Mini Sidebar */}
              <div className="sm:col-span-4 bg-slate-50/70 dark:bg-[#080f18] rounded-2xl p-3 space-y-1.5 border border-slate-100 dark:border-teal-950">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-teal-400/80 px-2 py-1">
                  Diagnostics
                </div>
                <div className="px-2.5 py-1.5 rounded-xl bg-white dark:bg-[#112030] text-xs font-semibold text-slate-900 dark:text-[#00F2B0] border border-transparent dark:border-teal-500/20 shadow-2xs flex items-center justify-between">
                  <span>Overview</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-[#00F2B0] shadow-[0_0_8px_#00F2B0]" />
                </div>
                <Link
                  href="/display-problems"
                  className="px-2.5 py-1.5 rounded-xl text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-[#112030] flex items-center justify-between transition"
                >
                  <span>Display GPU</span>
                  <ChevronRight className="w-3 h-3 text-slate-400" />
                </Link>
                <Link
                  href="/software-problems"
                  className="px-2.5 py-1.5 rounded-xl text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-[#112030] flex items-center justify-between transition"
                >
                  <span>Software BSOD</span>
                  <ChevronRight className="w-3 h-3 text-slate-400" />
                </Link>
                <Link
                  href="/hardware-problems"
                  className="px-2.5 py-1.5 rounded-xl text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-[#112030] flex items-center justify-between transition"
                >
                  <span>Hardware POST</span>
                  <ChevronRight className="w-3 h-3 text-slate-400" />
                </Link>

                <div className="pt-3 mt-3 border-t border-slate-200/60 dark:border-teal-950 flex items-center gap-2 px-2">
                  <div className="w-6 h-6 rounded-lg overflow-hidden bg-slate-900 border border-slate-700 dark:border-teal-500/30 flex items-center justify-center shrink-0">
                    <Image
                      src="/logo.jpg"
                      alt="HW Nexus"
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">Technician Mode</p>
                    <p className="text-[9px] text-slate-400 dark:text-teal-400/80">Live Telemetry</p>
                  </div>
                </div>
              </div>

              {/* Main Preview Cards */}
              <div className="sm:col-span-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Good morning, Technician 👋</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Here is your live diagnostic status today.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Progress Ring Card */}
                  <div className="bg-slate-50/80 dark:bg-[#080f18] rounded-2xl p-3 border border-slate-100 dark:border-teal-950 flex flex-col justify-between">
                    <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400">RAM Integrity</span>
                    <div className="flex items-center gap-3 my-2">
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="text-slate-200 dark:text-slate-800"
                            strokeWidth="3.5"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="text-teal-500 dark:text-[#00F2B0]"
                            strokeDasharray="75, 100"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <span className="absolute text-[11px] font-bold text-slate-800 dark:text-white">75%</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">Stable</p>
                        <p className="text-[10px] text-emerald-600 dark:text-[#00F2B0] font-medium">+18% baseline</p>
                      </div>
                    </div>
                  </div>

                  {/* Activity Bar Chart Card */}
                  <div className="bg-slate-50/80 dark:bg-[#080f18] rounded-2xl p-3 border border-slate-100 dark:border-teal-950 flex flex-col justify-between">
                    <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400">Thermal Index</span>
                    <div className="flex items-end justify-between h-10 mt-2 px-1">
                      <div className="w-2 bg-teal-200 dark:bg-teal-800 rounded-t h-4" />
                      <div className="w-2 bg-teal-300 dark:bg-teal-600 rounded-t h-6" />
                      <div className="w-2 bg-teal-400 dark:bg-teal-500 rounded-t h-8" />
                      <div className="w-2 bg-teal-500 dark:bg-teal-400 rounded-t h-5" />
                      <div className="w-2 bg-teal-600 dark:bg-[#00F2B0] rounded-t h-9 shadow-[0_0_8px_#00F2B0]" />
                      <div className="w-2 bg-teal-400 dark:bg-teal-500 rounded-t h-6" />
                      <div className="w-2 bg-teal-300 dark:bg-teal-600 rounded-t h-4" />
                    </div>
                    <p className="text-[10px] text-slate-400 dark:text-slate-400 text-center mt-1">42°C Optimal</p>
                  </div>
                </div>

                {/* Active Issue Status */}
                <div className="bg-teal-50/60 dark:bg-teal-950/40 rounded-2xl p-3 border border-teal-100/80 dark:border-teal-900/40 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-[#00F2B0] flex items-center justify-center">
                      <Activity className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900 dark:text-white">GPU Driver Refresh</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">HDMI Handshake Verified</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-teal-700 dark:text-[#00F2B0] bg-teal-100/80 dark:bg-teal-900/60 px-2 py-0.5 rounded-full">
                    Resolved
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features List */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-10">
              The Smarter Way to{" "}
              <span className="font-serif-accent text-teal-700 dark:text-[#00F2B0] italic font-normal">
                Repair
              </span>
            </h2>

            <div className="w-full space-y-4">
              {/* Feature 1: Display */}
              <Link
                href="/display-problems"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-[#0c1622] border border-slate-200/90 dark:border-teal-900/50 shadow-2xs hover:border-teal-300 dark:hover:border-[#00F2B0]/50 hover:shadow-sm hover:dark:shadow-[0_0_20px_rgba(0,242,176,0.1)] transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-[#00F2B0] group-hover:scale-105 transition-transform">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Display Diagnostics</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Flickering, black screen, GPU handshake fixes.</p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-50 dark:bg-[#070e17] border border-slate-200 dark:border-teal-900/50 flex items-center justify-center text-slate-400 dark:text-teal-400 group-hover:bg-slate-950 dark:group-hover:bg-[#00F2B0] group-hover:text-white dark:group-hover:text-[#060b11] transition">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              {/* Feature 2: Software */}
              <Link
                href="/software-problems"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-[#0c1622] border border-slate-200/90 dark:border-teal-900/50 shadow-2xs hover:border-teal-300 dark:hover:border-[#00F2B0]/50 hover:shadow-sm hover:dark:shadow-[0_0_20px_rgba(0,242,176,0.1)] transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-teal-950/60 border border-blue-100 dark:border-teal-500/30 flex items-center justify-center text-blue-600 dark:text-[#00F2B0] group-hover:scale-105 transition-transform">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Software &amp; BSOD Engine</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Stop codes, corrupted OS files, driver rollbacks.</p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-50 dark:bg-[#070e17] border border-slate-200 dark:border-teal-900/50 flex items-center justify-center text-slate-400 dark:text-teal-400 group-hover:bg-slate-950 dark:group-hover:bg-[#00F2B0] group-hover:text-white dark:group-hover:text-[#060b11] transition">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              {/* Feature 3: Hardware */}
              <Link
                href="/hardware-problems"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-[#0c1622] border border-slate-200/90 dark:border-teal-900/50 shadow-2xs hover:border-teal-300 dark:hover:border-[#00F2B0]/50 hover:shadow-sm hover:dark:shadow-[0_0_20px_rgba(0,242,176,0.1)] transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-teal-950/60 border border-amber-100 dark:border-teal-500/30 flex items-center justify-center text-amber-600 dark:text-[#00F2B0] group-hover:scale-105 transition-transform">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Hardware &amp; Thermal Guard</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">RAM POST beep codes, thermal paste degradation.</p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-50 dark:bg-[#070e17] border border-slate-200 dark:border-teal-900/50 flex items-center justify-center text-slate-400 dark:text-teal-400 group-hover:bg-slate-950 dark:group-hover:bg-[#00F2B0] group-hover:text-white dark:group-hover:text-[#060b11] transition">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. GUIDED DIAGNOSTICS / DOMAIN CARDS (01, 02, 03) */}
      {/* ======================================================== */}
      <section id="troubleshooting" className="py-10 max-w-8xl px-5 sm:px-20 mx-auto">
        <div className="text-center px-10 sm:px-20 mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mt-3 mb-3">
            Simple Steps,{" "}
            <span className="font-serif-accent text-teal-700 dark:text-[#00F2B0] italic font-normal">
              Flawless Recovery
            </span>
          </h2>
        </div>

        {/* 3 Connected Cards Container */}
        <div className="relative max-w-8xl mx-auto">
          {/* Subtle Horizontal Dashed Connector Line */}
          <div className="hidden md:block absolute top-[52px] left-[16.6%] right-[16.6%] h-[2px] border-t-2 border-dashed border-teal-200/90 dark:border-teal-900/60 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {/* Box 01: Display Problems */}
            <div className="bg-white dark:bg-[#0c1622] rounded-3xl border border-slate-200/90 dark:border-teal-900/50 p-6 sm:p-7 shadow-sm hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(0,242,176,0.15)] hover:border-teal-300 dark:hover:border-[#00F2B0]/50 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between text-center group">
              <div>
                {/* Concentric Double-Circle Icon */}
                <div className="relative w-20 h-20 rounded-full bg-teal-50/90 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-500/30 flex items-center justify-center mx-auto mb-3 shadow-2xs group-hover:scale-105 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-[#080f18] shadow-2xs border border-teal-200 dark:border-teal-500/40 flex items-center justify-center text-teal-600 dark:text-[#00F2B0]">
                    <Monitor className="w-6 h-6" />
                  </div>
                </div>

                {/* Step Badge aligned with connecting line */}
                <div className="w-8 h-8 rounded-full bg-white dark:bg-[#070d14] border-2 border-teal-500 dark:border-[#00F2B0] text-teal-900 dark:text-[#00F2B0] font-bold text-xs flex items-center justify-center mx-auto -mt-6 mb-3 shadow-xs relative z-10">
                  01
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Display Problems</h3>
                {/* Accent Underline */}
                <div className="w-8 h-0.5 bg-teal-500 dark:bg-[#00F2B0] rounded-full mx-auto my-2.5 shadow-[0_0_8px_#00F2B0]" />

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Black screen on boot, rapid flickering, GPU artifacting, and cable bandwidth faults.
                </p>

                {/* Key Sub-Links */}
                <div className="pt-5 mt-4 border-t border-slate-100 dark:border-teal-950">
                  <Link
                    href="/display-problems"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-slate-950 dark:bg-gradient-to-r dark:from-[#00F2B0] dark:to-[#00D2A0] hover:bg-slate-800 dark:hover:bg-[#20f5be] text-white dark:text-[#060b11] text-xs font-semibold dark:font-bold shadow-2xs hover:dark:shadow-[0_0_15px_rgba(0,242,176,0.35)] transition active:scale-95"
                  >
                    <span>Open Display Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Box 02: Software Problems */}
            <div className="bg-white dark:bg-[#0c1622] rounded-3xl border border-slate-200/90 dark:border-teal-900/50 p-6 sm:p-7 shadow-sm hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(0,242,176,0.15)] hover:border-teal-300 dark:hover:border-[#00F2B0]/50 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between text-center group">
              <div>
                {/* Concentric Double-Circle Icon */}
                <div className="relative w-20 h-20 rounded-full bg-blue-50/90 dark:bg-teal-950/60 border border-blue-100 dark:border-teal-500/30 flex items-center justify-center mx-auto mb-3 shadow-2xs group-hover:scale-105 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-[#080f18] shadow-2xs border border-blue-200 dark:border-teal-500/40 flex items-center justify-center text-blue-600 dark:text-[#00F2B0]">
                    <Laptop className="w-6 h-6" />
                  </div>
                </div>

                {/* Step Badge aligned with connecting line */}
                <div className="w-8 h-8 rounded-full bg-white dark:bg-[#070d14] border-2 border-teal-500 dark:border-[#00F2B0] text-teal-900 dark:text-[#00F2B0] font-bold text-xs flex items-center justify-center mx-auto -mt-6 mb-3 shadow-xs relative z-10">
                  02
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Software Problems</h3>
                {/* Accent Underline */}
                <div className="w-8 h-0.5 bg-teal-500 dark:bg-[#00F2B0] rounded-full mx-auto my-2.5 shadow-[0_0_8px_#00F2B0]" />

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Blue Screen (BSOD) stop codes, 100% disk usage, and corrupted OS system libraries.
                </p>

                <div className="pt-5 mt-4 border-t border-slate-100 dark:border-teal-950">
                  <Link
                    href="/software-problems"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-slate-950 dark:bg-gradient-to-r dark:from-[#00F2B0] dark:to-[#00D2A0] hover:bg-slate-800 dark:hover:bg-[#20f5be] text-white dark:text-[#060b11] text-xs font-semibold dark:font-bold shadow-2xs hover:dark:shadow-[0_0_15px_rgba(0,242,176,0.35)] transition active:scale-95"
                  >
                    <span>Open Software Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Box 03: Hardware Problems */}
            <div className="bg-white dark:bg-[#0c1622] rounded-3xl border border-slate-200/90 dark:border-teal-900/50 p-6 sm:p-7 shadow-sm hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(0,242,176,0.15)] hover:border-teal-300 dark:hover:border-[#00F2B0]/50 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between text-center group">
              <div>
                {/* Concentric Double-Circle Icon */}
                <div className="relative w-20 h-20 rounded-full bg-amber-50/90 dark:bg-teal-950/60 border border-amber-100 dark:border-teal-500/30 flex items-center justify-center mx-auto mb-3 shadow-2xs group-hover:scale-105 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-[#080f18] shadow-2xs border border-amber-200 dark:border-teal-500/40 flex items-center justify-center text-amber-600 dark:text-[#00F2B0]">
                    <Cpu className="w-6 h-6" />
                  </div>
                </div>

                {/* Step Badge aligned with connecting line */}
                <div className="w-8 h-8 rounded-full bg-white dark:bg-[#070d14] border-2 border-teal-500 dark:border-[#00F2B0] text-teal-900 dark:text-[#00F2B0] font-bold text-xs flex items-center justify-center mx-auto -mt-6 mb-3 shadow-xs relative z-10">
                  03
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Hardware Problems</h3>
                {/* Accent Underline */}
                <div className="w-8 h-0.5 bg-teal-500 dark:bg-[#00F2B0] rounded-full mx-auto my-2.5 shadow-[0_0_8px_#00F2B0]" />

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Motherboard POST beep codes, RAM gold pin oxidation, and CPU thermal throttling.
                </p>

                <div className="pt-5 mt-4 border-t border-slate-100 dark:border-teal-950">
                  <Link
                    href="/hardware-problems"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-slate-950 dark:bg-gradient-to-r dark:from-[#00F2B0] dark:to-[#00D2A0] hover:bg-slate-800 dark:hover:bg-[#20f5be] text-white dark:text-[#060b11] text-xs font-semibold dark:font-bold shadow-2xs hover:dark:shadow-[0_0_15px_rgba(0,242,176,0.35)] transition active:scale-95"
                  >
                    <span>Open Hardware Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. SPLIT TESTIMONIAL + CTA BANNER */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16 max-w-8xl mx-auto px-5 sm:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Split: Dark Forest Teal Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0d5e56] via-[#115e59] to-[#134e4a] dark:from-[#052924] dark:via-[#093c37] dark:to-[#05221e] dark:border dark:border-teal-500/30 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-lg dark:shadow-[0_10px_35px_rgba(0,0,0,0.7)]">
            {/* Soft decorative glow */}
            <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-teal-400/20 dark:bg-[#00F2B0]/20 blur-2xl pointer-events-none" />

            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-teal-200/90 dark:text-[#00F2B0] block mb-4">
                TRUSTED BY TEAMS &amp; GAMERS
              </span>
              <span className="text-5xl font-serif text-teal-200/40 dark:text-teal-400/40 block -mb-3 leading-none">“</span>
              <p className="text-base sm:text-lg font-medium text-teal-50 dark:text-slate-100 leading-relaxed mb-8">
                HW Nexus has completely changed the way our technicians identify and repair computer faults. It&apos;s intuitive, fast, and makes a real impact.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                {/* Stacked User Avatars */}
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-teal-800 dark:border-teal-600 bg-teal-200 text-teal-900 font-bold text-xs flex items-center justify-center">
                    JD
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-teal-800 dark:border-teal-600 bg-teal-300 text-teal-950 font-bold text-xs flex items-center justify-center">
                    SK
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-teal-800 dark:border-teal-600 bg-emerald-200 text-emerald-950 font-bold text-xs flex items-center justify-center">
                    AR
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-teal-800 dark:border-teal-600 bg-teal-900 text-teal-200 font-semibold text-[10px] flex items-center justify-center">
                    +2k
                  </div>
                </div>

                <div className="flex items-center gap-1 text-amber-300">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-xs font-semibold text-teal-100 ml-1">4.9/5</span>
                </div>
              </div>
              <p className="text-[11px] text-teal-200/70 dark:text-teal-300/70">based on 2,000+ verified repairs</p>
            </div>
          </div>

          {/* Right Split: Light Mint CTA Card with 3D Glass Artwork */}
          <div className="lg:col-span-7 bg-[#f0fdfa] dark:bg-[#0a1520] rounded-3xl p-8 sm:p-10 border border-teal-100/90 dark:border-teal-900/50 relative overflow-hidden flex flex-col justify-between shadow-sm dark:shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
            {/* Background 3D Glass Artwork */}
            <div className="absolute right-0 bottom-0 w-64 h-64 sm:w-80 sm:h-80 pointer-events-none opacity-85">
              {/* Disc */}
              <div className="absolute right-6 bottom-4 w-44 h-44 rounded-full border border-teal-200/60 dark:border-teal-500/30 bg-gradient-to-tr from-teal-200/40 via-white/70 to-emerald-100/50 dark:from-teal-950/40 dark:via-[#091522]/60 dark:to-cyan-950/40 backdrop-blur-md shadow-md" />
              {/* Sphere */}
              <div className="absolute right-24 bottom-12 w-16 h-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),rgba(45,212,191,0.45)_60%,rgba(13,148,136,0.8)_100%)] dark:bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.85),rgba(0,242,176,0.5)_45%,rgba(13,148,136,0.9)_85%,#042f2e_100%)] shadow-md" />
              {/* Blue mini sphere */}
              <div className="absolute right-12 bottom-6 w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-300 shadow-md" />
            </div>

            <div className="relative z-10 max-w-md">
              <span className="text-[10px] font-bold tracking-widest uppercase text-teal-700 dark:text-[#00F2B0] block mb-3">
                READY TO GET STARTED?
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
                Let&apos;s restore
                <br />
                your system{" "}
                <span className="font-serif-accent text-teal-700 dark:text-[#00F2B0] italic font-normal">
                  together.
                </span>
              </h2>

              <Link
                href="/software-problems"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-slate-950 dark:bg-gradient-to-r dark:from-[#00F2B0] dark:to-[#00D2A0] text-white dark:text-[#060b11] text-xs sm:text-sm font-semibold dark:font-bold shadow-md hover:bg-slate-800 dark:hover:bg-[#20f5be] hover:dark:shadow-[0_0_20px_rgba(0,242,176,0.4)] active:scale-95 transition-all group"
              >
                <span>Get started </span>
                <span className="w-5 h-5 rounded-full bg-white/20 dark:bg-black/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-white dark:text-[#060b11]" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
