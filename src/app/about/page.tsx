"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Terminal,
  HeartHandshake,
  Wrench,
  Activity,
  Lock,
  ChevronDown,
  Monitor,
  HardDrive,
  Check,
  Clock,
  HelpCircle,
  FileCode,
  Gauge,
  Flame,
  XCircle,
  Binary,
  AlertTriangle,
} from "lucide-react";

import { valuesData } from "@/data/repairData";
import MetricsBar from "@/components/metricsBar";

export default function AboutPage() {
  const valueIcons = [Terminal, ShieldCheck, Layers, HeartHandshake];



  // Milestones timeline
  const milestones = [
    {
      year: "2022",
      title: "HW Nexus Lab Founded",
      desc: "Created in response to predatory repair shops charging hundreds for simple driver rollbacks. Began mapping universal Windows BSOD error signatures.",
    },
    {
      year: "2023",
      title: "Client-Side Diagnostic Engine",
      desc: "Launched our zero-telemetry client-side diagnostic system, allowing users to troubleshoot display and hardware faults completely in-browser.",
    },
    {
      year: "2024",
      title: "Interactive Hardware POST Matrix",
      desc: "Integrated AMI, Award, and Phoenix BIOS beep code decoders alongside comprehensive thermal operating threshold analyzers.",
    },
    {
      year: "2025 – 2026",
      title: "18,000+ Verified Systems Restored",
      desc: "Crossed 18,000 successful independent machine recoveries with a verified 99.2% first-pass diagnostic success rate.",
    },
  ];

  // Lab standards & certifications
  const labStandards = [
    {
      icon: Lock,
      title: "100% Client-Side Privacy",
      desc: "No machine serial numbers, IP logs, or crash telemetry are ever saved or transmitted to remote servers. All diagnostics execute locally.",
    },
    {
      icon: ShieldCheck,
      title: "Non-Destructive First Protocol",
      desc: "We strictly prioritize harmless software remediation (DISM, driver clean installs) before advising hardware disassembly.",
    },
    {
      icon: Terminal,
      title: "Cryptographically Verified Commands",
      desc: "Every PowerShell, Command Prompt, and Registry command is verified against Microsoft Technet documentation to prevent OS damage.",
    },
    {
      icon: Gauge,
      title: "Empirical Thermal Benchmarks",
      desc: "All temperature thresholds are calibrated against factory silicon tolerances provided by Intel, AMD, NVIDIA, and VESA standards.",
    },
  ];



  return (
    <div className="min-h-screen flex flex-col bg-[#fbfdfc] text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Ambient Top Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[340px] sm:w-[620px] h-[340px] sm:h-[450px] bg-teal-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section (Motivo Style) */}
          <div className="text-center max-w-5xl mx-auto mb-16 sm:mb-20">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 shadow-2xs mb-5">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-xs font-semibold text-teal-900">
                Our Mission &amp; Methodology
              </span>
            </div> */}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
              Empowering everyday users.{" "}
              <span className="font-serif-accent text-teal-700 italic font-normal">
                Engineered with precision.
              </span>
            </h1>
            {/* 
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              HW Nexus is the open computer diagnostic platform engineered to demystify
              malfunctions, eliminate costly guesswork, and empower users to restore systems with confidence.
            </p> */}
          </div>

          {/* Story & Philosophy Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
            <div className="lg:col-span-7 space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/80">
                  The Origin
                </span>
                <h2 className="text-2xl sm:text-3xl pt-5 font-bold text-slate-900 tracking-tight">
                  Why We Built HW Nexus
                </h2>
                <div className="space-y-4 pt-3 text-slate-600">
                  <p>
                    Every computer user has experienced the sudden dread of an unprompted black screen, a cryptic Blue Screen of Death (BSOD), or frantic motherboard beep codes right when critical work is due.
                  </p>
                  <p>
                    Historically, users were trapped between two frustrating extremes: commercial repair shops that charge exorbitant fees for a 2-minute driver reinstall, or cluttered internet forums full of outdated commands that risk breaking the OS completely.
                  </p>
                  <p>
                    We built HW Nexus to bring structured laboratory-grade troubleshooting into a clean, intuitive, and accessible interface that anyone can use safely for free.
                  </p>
                </div>
              </div>

              {/* Trust badges row
              <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>100% Free Public Access</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>No Telemetry or Tracking</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Non-Destructive Solutions</span>
                </div>
              </div> */}
            </div>

            {/* Platform Stats Panel */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0d5e56] to-[#134e4a] text-white rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-200">
                  PLATFORM STATS
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-teal-50 mt-2 mb-6">
                  Precision Recovery at Scale
                </h3>
                <div className="space-y-5">
                  <div className="border-b border-teal-700/60 pb-3">
                    <p className="text-3xl sm:text-4xl font-bold text-teal-200">18,000+</p>
                    <p className="text-xs text-teal-100/70 mt-1">Verified devices successfully restored</p>
                  </div>
                  <div className="border-b border-teal-700/60 pb-3">
                    <p className="text-3xl sm:text-4xl font-bold text-teal-200">99.2%</p>
                    <p className="text-xs text-teal-100/70 mt-1">First-pass diagnostic accuracy</p>
                  </div>
                  <div className="border-b border-teal-700/60 pb-3">
                    <p className="text-3xl sm:text-4xl font-bold text-teal-200">100%</p>
                    <p className="text-xs text-teal-100/70 mt-1">Client-side execution with zero data storage</p>
                  </div>
                  {/* <div>
                    <p className="text-3xl sm:text-4xl font-bold text-teal-200">36+</p>
                    <p className="text-xs text-teal-100/70 mt-1">Comprehensive step-by-step diagnostic trees</p>
                  </div> */}
                </div>
              </div>

              {/* <div className="pt-6 mt-6 border-t border-teal-700/60 flex items-center justify-between text-xs text-teal-200">
                <span>Verified Diagnostic Database</span>
                <span className="font-mono text-[11px] bg-teal-800/80 px-2 py-1 rounded">v2.4 LTS</span>
              </div> */}
            </div>
          </div>

          {/* Comparison Matrix: The Old Way vs The HW Nexus Way */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              {/* <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/80">
                The Contrast
              </span> */}
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-2">
                Traditional Repair vs. HW Nexus
              </h2>
              {/* <p className="text-sm text-slate-600">
                How our structured diagnostic engineering compares with traditional commercial shops.
              </p> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* The Old Way */}
              <div className="bg-white rounded-3xl border border-rose-100 p-8 shadow-xs relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-rose-50 text-rose-700 text-xs font-semibold px-4 py-1.5 rounded-bl-2xl border-l border-b border-rose-100">
                  Traditional Repair Shops
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-500" />
                  Common Industry Pitfalls
                </h3>
                <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✕</span>
                    <span><strong>High Diagnostic Fees:</strong> Upfront inspection charges regardless of whether the fault is identified or resolved.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✕</span>
                    <span><strong>Premature OS Reinstallation:</strong> Wiping storage drives without attempting non-destructive system repairs first.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✕</span>
                    <span><strong>Cryptic Technical Jargon:</strong> Vague explanations designed to justify unnecessary component replacements.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✕</span>
                    <span><strong>Days of Turnaround:</strong> Leaving systems in shop queues for days for simple 5-minute driver updates.</span>
                  </li>
                </ul>
              </div>

              {/* The HW Nexus Way */}
              <div className="bg-white rounded-3xl border border-teal-200 p-8 shadow-xs relative overflow-hidden ring-1 ring-teal-500/10">
                <div className="absolute top-0 right-0 bg-teal-50 text-teal-800 text-xs font-semibold px-4 py-1.5 rounded-bl-2xl border-l border-b border-teal-100">
                  The HW Nexus Standard
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  Disciplined Engineering
                </h3>
                <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <span><strong>100% Free &amp; Open:</strong> Complete access to all diagnostic trees, scripts, and calculators with zero paywalls.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <span><strong>Non-Destructive First:</strong> Always testing harmless software scans (DISM, SFC) before hardware is touched.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <span><strong>Transparent Hex Code Explanations:</strong> Plain English breakdowns of BSOD stop codes and motherboard beep sequences.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <span><strong>Instant Self-Repair Guidance:</strong> Step-by-step interactive workflows you can complete in minutes.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          {/* Core Values Section */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              {/* <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/80">
                Guiding Principles
              </span> */}
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-2">
                Our Engineering Philosophy
              </h2>
              {/* <p className="text-sm text-slate-600">
                Built on disciplined diagnostic methodologies that protect your computer and data integrity.
              </p> */}
            </div>

            {/* 4 Connected Cards Container with Horizontal Dashed Connector */}
            <div className="relative">
              {/* Horizontal dashed line connecting step badges */}
              <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-teal-200/90 z-0 pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {valuesData.map((val, idx) => {
                  const Icon = valueIcons[idx % valueIcons.length];
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition text-center group"
                    >
                      <div>
                        {/* Concentric Double-Circle Icon */}
                        <div className="relative w-16 h-16 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center mx-auto mb-2 shadow-2xs group-hover:scale-105 transition-transform">
                          <div className="w-10 h-10 rounded-full bg-white text-teal-600 border border-teal-200 flex items-center justify-center shadow-2xs">
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Step Number Pill 01, 02, 03, 04 */}
                        <div className="w-7 h-7 rounded-full font-bold text-[11px] flex items-center justify-center mx-auto -mt-5 mb-3 shadow-2xs relative z-10 bg-white border-2 border-teal-500 text-teal-900">
                          0{idx + 1}
                        </div>

                        {/* Title */}
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          {val.title}
                        </h3>

                        {/* Accent Underline */}
                        <div className="w-6 h-0.5 rounded-full mx-auto my-2 bg-teal-500" />

                        {/* Description */}
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {val.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>



          {/* Lab Quality Standards & Security Guarantees */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              {/* <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/80">
                Engineering Integrity
              </span> */}
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-2">
                Lab Standards &amp; Safety Guarantees
              </h2>
              {/* <p className="text-sm text-slate-600">
                How we protect your computer, operating system, and personal data from harm.
              </p> */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {labStandards.map((std, idx) => {
                const Icon = std.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs hover:shadow-sm transition"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">
                      {std.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {std.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>



          {/* Live Animated Metrics Counter */}
          <div className="mb-20">
            <MetricsBar className="relative z-20 max-w-7xl mx-auto px-0" />
          </div>

          {/* CTA Box (Motivo style) */}
          <div className="bg-[#f0fdfa] rounded-3xl p-8 sm:p-12 border border-teal-100 text-center max-w-5xl mx-auto shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-2">
              READY TO RESTORE YOUR PC?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Explore our diagnostic guides{" "}
              <span className="font-serif-accent text-teal-700 italic font-normal">
                or request lab support.
              </span>
            </h2>
            <p className="text-sm text-slate-600 max-w-lg mx-auto mb-8">
              Choose a specific problem domain to begin self-repair immediately, or reach out to our laboratory specialists.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/software-problems"
                className="px-6 py-3.5 rounded-full bg-slate-950 text-white text-xs sm:text-sm font-semibold shadow-md hover:bg-slate-800 transition"
              >
                Browse Software Guides
              </Link>
              <Link
                href="/hardware-problems"
                className="px-6 py-3.5 rounded-full bg-white text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200 hover:border-teal-300 shadow-2xs transition"
              >
                Hardware Diagnostic Suite
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full bg-teal-700 text-white text-xs sm:text-sm font-semibold shadow-md hover:bg-teal-800 transition"
              >
                Contact Diagnostic Lab
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
