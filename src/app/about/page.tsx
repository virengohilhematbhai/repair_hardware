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
    <div className="min-h-screen flex flex-col bg-[#fbfdfc] dark:bg-[#060b11] text-slate-900 dark:text-[#f0fdfa] selection:bg-teal-500/30 selection:text-teal-200 transition-colors duration-200">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Ambient Top Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[340px] sm:w-[620px] h-[340px] sm:h-[450px] bg-teal-100/30 dark:bg-teal-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-8xl mx-auto px-5 sm:px-20">
          {/* Header Section */}
          <div className="text-center max-w-5xl mx-auto mb-16 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
              Empowering everyday users.{" "}
              <span className="font-serif-accent text-teal-700 dark:text-[#00F2B0] italic font-normal">
                Engineered with precision.
              </span>
            </h1>
          </div>

          {/* Story & Philosophy Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
            <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed bg-white dark:bg-[#0c1622] rounded-3xl border border-slate-200/90 dark:border-teal-900/50 p-8 sm:p-12 shadow-sm dark:shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-[#00F2B0] bg-teal-50 dark:bg-teal-950/70 px-3 py-1 rounded-full border border-teal-200/80 dark:border-teal-500/30">
                  The Origin
                </span>
                <h2 className="text-2xl sm:text-3xl pt-5 font-bold text-slate-900 dark:text-white tracking-tight">
                  Why We Built HW Nexus
                </h2>
                <div className="space-y-4 pt-3 text-slate-600 dark:text-slate-300">
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
            </div>

            {/* Platform Stats Panel */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0d5e56] to-[#134e4a] dark:from-[#052924] dark:to-[#093d38] dark:border dark:border-teal-500/30 text-white rounded-3xl p-8 sm:p-10 shadow-lg dark:shadow-[0_10px_35px_rgba(0,0,0,0.7)] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-200 dark:text-[#00F2B0]">
                  PLATFORM STATS
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-teal-50 dark:text-white mt-2 mb-6">
                  Precision Recovery at Scale
                </h3>
                <div className="space-y-5">
                  <div className="border-b border-teal-700/60 dark:border-teal-800/60 pb-3">
                    <p className="text-3xl sm:text-4xl font-bold text-teal-200 dark:text-[#00F2B0]">18,000+</p>
                    <p className="text-xs text-teal-100/70 dark:text-teal-200/80 mt-1">Verified devices successfully restored</p>
                  </div>
                  <div className="border-b border-teal-700/60 dark:border-teal-800/60 pb-3">
                    <p className="text-3xl sm:text-4xl font-bold text-teal-200 dark:text-[#00F2B0]">99.2%</p>
                    <p className="text-xs text-teal-100/70 dark:text-teal-200/80 mt-1">First-pass diagnostic accuracy</p>
                  </div>
                  <div className="border-b border-teal-700/60 dark:border-teal-800/60 pb-3">
                    <p className="text-3xl sm:text-4xl font-bold text-teal-200 dark:text-[#00F2B0]">100%</p>
                    <p className="text-xs text-teal-100/70 dark:text-teal-200/80 mt-1">Client-side execution with zero data storage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Matrix: The Old Way vs The HW Nexus Way */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-3 mb-2">
                Traditional Repair vs. HW Nexus
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* The Old Way */}
              <div className="bg-white dark:bg-[#0c1622] rounded-3xl border border-rose-100 dark:border-rose-950/60 p-8 shadow-xs dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-rose-50 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 text-xs font-semibold px-4 py-1.5 rounded-bl-2xl border-l border-b border-rose-100 dark:border-rose-900/40">
                  Traditional Repair Shops
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-500" />
                  Common Industry Pitfalls
                </h3>
                <ul className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-50 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✕</span>
                    <span><strong className="text-slate-800 dark:text-white">High Diagnostic Fees:</strong> Upfront inspection charges regardless of whether the fault is identified or resolved.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-50 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✕</span>
                    <span><strong className="text-slate-800 dark:text-white">Premature OS Reinstallation:</strong> Wiping storage drives without attempting non-destructive system repairs first.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-50 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✕</span>
                    <span><strong className="text-slate-800 dark:text-white">Cryptic Technical Jargon:</strong> Vague explanations designed to justify unnecessary component replacements.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-50 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✕</span>
                    <span><strong className="text-slate-800 dark:text-white">Days of Turnaround:</strong> Leaving systems in shop queues for days for simple 5-minute driver updates.</span>
                  </li>
                </ul>
              </div>

              {/* The HW Nexus Way */}
              <div className="bg-white dark:bg-[#0c1622] rounded-3xl border border-teal-200 dark:border-teal-500/30 p-8 shadow-xs dark:shadow-[0_0_30px_rgba(0,242,176,0.1)] relative overflow-hidden ring-1 ring-teal-500/10 dark:ring-teal-500/30">
                <div className="absolute top-0 right-0 bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-[#00F2B0] text-xs font-semibold px-4 py-1.5 rounded-bl-2xl border-l border-b border-teal-100 dark:border-teal-500/30">
                  The HW Nexus Standard
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-[#00F2B0]" />
                  Disciplined Engineering
                </h3>
                <ul className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-[#00F2B0] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <span><strong className="text-teal-900 dark:text-[#00F2B0]">100% Free &amp; Open:</strong> Complete access to all diagnostic trees, scripts, and calculators with zero paywalls.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-[#00F2B0] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <span><strong className="text-teal-900 dark:text-[#00F2B0]">Non-Destructive First:</strong> Always testing harmless software scans (DISM, SFC) before hardware is touched.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-[#00F2B0] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <span><strong className="text-teal-900 dark:text-[#00F2B0]">Transparent Hex Code Explanations:</strong> Plain English breakdowns of BSOD stop codes and motherboard beep sequences.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-[#00F2B0] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <span><strong className="text-teal-900 dark:text-[#00F2B0]">Instant Self-Repair Guidance:</strong> Step-by-step interactive workflows you can complete in minutes.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-3 mb-2">
                Our Engineering Philosophy
              </h2>
            </div>

            {/* 4 Connected Cards Container */}
            <div className="relative">
              {/* Horizontal dashed line connecting step badges */}
              <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-teal-200/90 dark:border-teal-900/60 z-0 pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {valuesData.map((val, idx) => {
                  const Icon = valueIcons[idx % valueIcons.length];
                  return (
                    <div
                      key={idx}
                      className="bg-white dark:bg-[#0c1622] rounded-3xl border border-slate-200/90 dark:border-teal-900/50 p-6 shadow-xs dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:shadow-md hover:dark:shadow-[0_0_20px_rgba(0,242,176,0.12)] hover:border-teal-300 dark:hover:border-[#00F2B0]/40 hover:-translate-y-1 transition text-center group"
                    >
                      <div>
                        {/* Concentric Double-Circle Icon */}
                        <div className="relative w-16 h-16 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-500/30 flex items-center justify-center mx-auto mb-2 shadow-2xs group-hover:scale-105 transition-transform">
                          <div className="w-10 h-10 rounded-full bg-white dark:bg-[#080f18] text-teal-600 dark:text-[#00F2B0] border border-teal-200 dark:border-teal-500/40 flex items-center justify-center shadow-2xs">
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Step Number Pill 01, 02, 03, 04 */}
                        <div className="w-7 h-7 rounded-full font-bold text-[11px] flex items-center justify-center mx-auto -mt-5 mb-3 shadow-2xs relative z-10 bg-white dark:bg-[#070d14] border-2 border-teal-500 dark:border-[#00F2B0] text-teal-900 dark:text-[#00F2B0]">
                          0{idx + 1}
                        </div>

                        {/* Title */}
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                          {val.title}
                        </h3>

                        {/* Accent Underline */}
                        <div className="w-6 h-0.5 rounded-full mx-auto my-2 bg-teal-500 dark:bg-[#00F2B0] shadow-[0_0_6px_#00F2B0]" />

                        {/* Description */}
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
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
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-3 mb-2">
                Lab Standards &amp; Safety Guarantees
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {labStandards.map((std, idx) => {
                const Icon = std.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white dark:bg-[#0c1622] rounded-3xl border border-slate-200/90 dark:border-teal-900/50 p-6 shadow-xs hover:shadow-sm dark:hover:border-teal-500/40 transition"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-500/30 text-teal-700 dark:text-[#00F2B0] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                      {std.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {std.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Live Animated Metrics Counter */}
          <div className="mb-20">
            <MetricsBar className="relative z-20 max-w-8xl mx-auto px-0" />
          </div>

          {/* CTA Box */}
          <div className="bg-[#f0fdfa] dark:bg-[#0a1520] rounded-3xl p-8 sm:p-12 border border-teal-100 dark:border-teal-900/50 text-center max-w-5xl mx-auto shadow-sm dark:shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-[#00F2B0] block mb-2">
              READY TO RESTORE YOUR PC?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Explore our diagnostic guides{" "}
              <span className="font-serif-accent text-teal-700 dark:text-[#00F2B0] italic font-normal">
                or request lab support.
              </span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto mb-8">
              Choose a specific problem domain to begin self-repair immediately, or reach out to our laboratory specialists.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/software-problems"
                className="px-6 py-3.5 rounded-full bg-slate-950 dark:bg-gradient-to-r dark:from-[#00F2B0] dark:to-[#00D2A0] text-white dark:text-[#060b11] text-xs sm:text-sm font-semibold dark:font-bold shadow-md hover:bg-slate-800 dark:hover:bg-[#20f5be] hover:dark:shadow-[0_0_20px_rgba(0,242,176,0.35)] transition"
              >
                Browse Software Guides
              </Link>
              <Link
                href="/hardware-problems"
                className="px-6 py-3.5 rounded-full bg-white dark:bg-[#0c1622] text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold border border-slate-200 dark:border-teal-900/60 hover:border-teal-300 dark:hover:border-teal-500/50 shadow-2xs transition"
              >
                Hardware Diagnostic Suite
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full bg-teal-700 dark:bg-teal-600 text-white text-xs sm:text-sm font-semibold shadow-md hover:bg-teal-800 dark:hover:bg-teal-500 transition"
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
