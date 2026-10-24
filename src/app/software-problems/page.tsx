"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import {
  Laptop,
  Clock,
  ArrowRight,
  Search,
  X,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Check,
  ChevronUp,
  ShieldAlert,
  Cpu,
  HardDrive,
  RefreshCw,
  Volume2,
  Terminal,
  Play,
  ExternalLink,
} from "lucide-react";

import { softwareGuidesData, ProblemGuide } from "@/data/repairData";

export default function SoftwareProblemsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [activeGuide, setActiveGuide] = useState<ProblemGuide | null>(null);
  const [copied, setCopied] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<{ [key: string]: boolean }>({});

  const filteredGuides = softwareGuidesData.filter((guide) => {
    const matchesSearch =
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.rootCause.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty =
      selectedDifficulty === "All" || guide.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleStep = (stepIdx: number) => {
    if (!activeGuide) return;
    const key = `${activeGuide.id}-${stepIdx}`;
    setCompletedSteps((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getGuideIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-slate-700 dark:text-[#00F2B0]";
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className={iconClass} />;
      case "Cpu":
        return <Cpu className={iconClass} />;
      case "HardDrive":
        return <HardDrive className={iconClass} />;
      case "RefreshCw":
        return <RefreshCw className={iconClass} />;
      case "Volume2":
        return <Volume2 className={iconClass} />;
      case "Terminal":
        return <Terminal className={iconClass} />;
      case "AlertTriangle":
        return <AlertTriangle className={iconClass} />;
      default:
        return <Clock className={iconClass} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfdfc] dark:bg-[#060b11] text-slate-900 dark:text-[#f0fdfa] selection:bg-teal-500/30 selection:text-teal-200 transition-colors duration-200">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 sm:pt-28 sm:pb-24">
        <div className="max-w-8xl mx-auto px-5 sm:px-20">
          {/* Centered Editorial Header */}
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-5">
              Blue screens &amp; fatal crashes.{" "}
              <span className="font-serif-accent text-teal-700 dark:text-[#00F2B0] italic font-normal">
                Demystified &amp; recovered.
              </span>
            </h1>
          </div>

          {/* Guide Count & Filters Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200/80 dark:border-teal-950">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Showing {filteredGuides.length} of {softwareGuidesData.length} guides
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              {/* Search Box */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search BSOD or OS issues..."
                  className="w-full pl-9 pr-3.5 py-2 bg-white dark:bg-[#0c1622] border border-slate-200 dark:border-teal-900/50 rounded-full text-xs text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-[#00F2B0] dark:focus:border-[#00F2B0] shadow-2xs transition"
                />
              </div>

              {/* Difficulty Filter Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-[#080f18] border border-slate-200/60 dark:border-teal-950 rounded-full self-start sm:self-auto">
                {["All", "Beginner", "Intermediate", "Advanced"].map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                      selectedDifficulty === diff
                        ? "bg-white dark:bg-[#112030] text-slate-900 dark:text-[#00F2B0] shadow-2xs font-semibold border border-transparent dark:border-teal-500/30"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-right text-xs text-slate-400 dark:text-slate-500 -mt-5 mb-6 hidden sm:block">
            Click any problem to view the complete solution
          </div>

          {/* Cards Grid */}
          {filteredGuides.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-[#0c1622] rounded-3xl border border-slate-200 dark:border-teal-900/50 p-8">
              <Laptop className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
              <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">No software guides matched your search.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDifficulty("All");
                }}
                className="mt-3 px-4 py-1.5 rounded-full bg-slate-900 dark:bg-[#00F2B0] text-white dark:text-[#060b11] text-xs font-semibold dark:font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides.map((guide) => (
                <div
                  key={guide.id}
                  onClick={() => setActiveGuide(guide)}
                  className="bg-white dark:bg-[#0c1622] rounded-2xl border border-slate-200/90 dark:border-teal-900/50 p-6 shadow-2xs dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-md hover:dark:shadow-[0_0_25px_rgba(0,242,176,0.12)] hover:border-teal-300 dark:hover:border-[#00F2B0]/50 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-blue-50 dark:bg-teal-950/70 text-teal-700 dark:text-[#00F2B0] border border-transparent dark:border-teal-500/30">
                        {guide.category}
                      </span>
                      <span
                        className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${
                          guide.difficulty === "Beginner"
                            ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-500/30"
                            : guide.difficulty === "Intermediate"
                            ? "bg-blue-50 dark:bg-cyan-950/60 text-blue-700 dark:text-cyan-300 border-blue-100 dark:border-cyan-500/30"
                            : "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-500/30"
                        }`}
                      >
                        {guide.difficulty}
                      </span>
                    </div>

                    {/* Icon Box */}
                    <div className="w-10 h-10 rounded-xl border border-slate-200/90 dark:border-teal-900/60 bg-slate-50 dark:bg-[#080f18] flex items-center justify-center my-4 group-hover:bg-teal-50 dark:group-hover:bg-teal-950/70 group-hover:border-teal-200 dark:group-hover:border-[#00F2B0]/50 transition-colors">
                      {getGuideIcon(guide.iconName)}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-teal-700 dark:group-hover:text-[#00F2B0] transition">
                      {guide.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-6">
                      {guide.description}
                    </p>
                  </div>

                  {/* Card Bottom Row */}
                  <div className="pt-4 border-t border-slate-100 dark:border-teal-950 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {guide.timeToFix}
                    </span>

                    <div className="flex items-center gap-2">
                      {/* {guide.youtubeUrl && (
                        <a
                          href={guide.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-200/80 dark:border-red-500/30 text-[11px] font-semibold hover:bg-red-100 dark:hover:bg-red-900/50 hover:scale-105 active:scale-95 transition"
                          title="Watch video tutorial on YouTube"
                        >
                          <Play className="w-2.5 h-2.5 fill-current" />
                          <span>Video</span>
                        </a>
                      )} */}

                      <span className="flex items-center gap-1 font-semibold text-slate-900 dark:text-[#00F2B0] group-hover:text-teal-600 dark:group-hover:text-[#20f5be] group-hover:translate-x-0.5 transition-all">
                        <span>Solution</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Floating Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-white dark:bg-[#0c1622] border border-slate-200 dark:border-teal-900/60 shadow-md flex items-center justify-center text-slate-700 dark:text-[#00F2B0] hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-[#112030] transition z-40 hover:dark:border-[#00F2B0]/50"
        title="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Interactive Solution Modal */}
      {activeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="bg-white dark:bg-[#09121d] rounded-3xl border border-slate-200 dark:border-teal-800/60 shadow-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.9)] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveGuide(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#112030] transition"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Badges */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-blue-50 dark:bg-teal-950/70 text-teal-700 dark:text-[#00F2B0] border border-transparent dark:border-teal-500/30">
                {activeGuide.category}
              </span>
              <span
                className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${
                  activeGuide.difficulty === "Beginner"
                    ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-500/30"
                    : activeGuide.difficulty === "Intermediate"
                    ? "bg-blue-50 dark:bg-cyan-950/60 text-blue-700 dark:text-cyan-300 border-blue-100 dark:border-cyan-500/30"
                    : "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-500/30"
                }`}
              >
                {activeGuide.difficulty}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium ml-auto mr-10 sm:mr-8">
                <Clock className="w-3.5 h-3.5" />
                {activeGuide.timeToFix}
              </span>
            </div>

            {/* Modal Title */}
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
              {activeGuide.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">{activeGuide.description}</p>

            {/* Symptoms Alert */}
            <div className="bg-blue-50/70 dark:bg-teal-950/40 border border-blue-200/80 dark:border-teal-500/30 rounded-2xl p-4 mb-6">
              <div className="flex items-center gap-2 text-blue-900 dark:text-[#00F2B0] font-bold text-xs uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4 text-blue-600 dark:text-[#00F2B0]" />
                <span>Observed Crash Symptoms</span>
              </div>
              <ul className="space-y-1.5 text-xs text-blue-950 dark:text-slate-200">
                {activeGuide.symptoms.map((sym, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-teal-500 dark:text-[#00F2B0]">•</span>
                    <span>{sym}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Root Cause Section */}
            <div className="bg-slate-50 dark:bg-[#060b11] border border-slate-200/80 dark:border-teal-950 rounded-2xl p-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#00F2B0] block mb-1">
                Root Cause Analysis
              </span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {activeGuide.rootCause}
              </p>
            </div>

            {/* Verified Video Repair Walkthrough */}
           

         

            {/* Step-by-Step Verified Fix Protocol */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Step-by-Step OS Recovery Protocol
                </h3>
                <span className="text-[11px] text-teal-700 dark:text-[#00F2B0] font-medium">Click step to mark done</span>
              </div>

              <div className="space-y-2.5">
                {activeGuide.steps.map((step, idx) => {
                  const key = `${activeGuide.id}-${idx}`;
                  const isDone = completedSteps[key];

                  return (
                    <div
                      key={idx}
                      onClick={() => toggleStep(idx)}
                      className={`flex items-start gap-3 p-3.5 rounded-2xl border text-xs sm:text-sm cursor-pointer transition ${
                        isDone
                          ? "bg-emerald-50/60 dark:bg-teal-950/50 border-emerald-300 dark:border-[#00F2B0]/40 text-slate-500 dark:text-slate-400 line-through"
                          : "bg-white dark:bg-[#0c1622] border-slate-200/80 dark:border-teal-900/50 hover:border-teal-300 dark:hover:border-[#00F2B0]/50 text-slate-700 dark:text-slate-200"
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                          isDone
                            ? "bg-emerald-500 dark:bg-[#00F2B0] text-white dark:text-[#060b11]"
                            : "bg-slate-100 dark:bg-[#070d14] text-slate-700 dark:text-[#00F2B0] border border-slate-200 dark:border-teal-900/60"
                        }`}
                      >
                        {isDone ? <Check className="w-3 h-3" /> : idx + 1}
                      </span>
                      <span className="flex-1 leading-relaxed">{step}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Command / Script */}
            {activeGuide.commandOrShortcut && (
              <div className="bg-slate-950 dark:bg-[#050a10] border border-transparent dark:border-teal-900/60 text-slate-100 p-4 rounded-2xl font-mono text-xs flex items-center justify-between mb-6 shadow-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-1">
                    Terminal / PowerShell Command
                  </span>
                  <span className="text-teal-300 dark:text-[#00F2B0] font-bold">{activeGuide.commandOrShortcut}</span>
                </div>
                <button
                  onClick={() => handleCopy(activeGuide.commandOrShortcut!)}
                  className="p-2 rounded-lg bg-white/10 dark:bg-teal-950/60 hover:bg-white/20 dark:hover:bg-teal-900/60 transition text-slate-300 hover:text-white shrink-0 ml-3"
                  title="Copy command"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400 dark:text-[#00F2B0]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            )}

            {/* Prevention Tip */}
            {activeGuide.preventionTip && (
              <p className="text-xs text-slate-500 dark:text-slate-400 italic mb-6">
                💡 <strong>Safety Tip:</strong> {activeGuide.preventionTip}
              </p>
            )}

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-100 dark:border-teal-950 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setActiveGuide(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-slate-200 dark:border-teal-900/60 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#112030] transition"
              >
                Close Solution
              </button>

              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
                {/* The green pill button from user's screenshot: Now opens the exact related YouTube video */}
                <a
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent("how to fix " + activeGuide.title + " computer tutorial")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-slate-950 dark:bg-gradient-to-r dark:from-[#00F2B0] dark:to-[#00D2A0] text-white dark:text-[#060b11] text-xs font-semibold dark:font-bold hover:bg-slate-800 dark:hover:bg-[#20f5be] hover:dark:shadow-[0_0_20px_rgba(0,242,176,0.35)] active:scale-95 transition"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Youtube Video</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
