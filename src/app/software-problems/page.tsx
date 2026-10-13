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
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-slate-700" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-slate-700" />;
      case "HardDrive":
        return <HardDrive className="w-5 h-5 text-slate-700" />;
      case "RefreshCw":
        return <RefreshCw className="w-5 h-5 text-slate-700" />;
      case "Volume2":
        return <Volume2 className="w-5 h-5 text-slate-700" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-slate-700" />;
      case "AlertTriangle":
        return <AlertTriangle className="w-5 h-5 text-slate-700" />;
      default:
        return <Clock className="w-5 h-5 text-slate-700" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfdfc] text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 sm:pt-28 sm:pb-24">
        <div className="max-w-8xl mx-auto px-10 sm:px-20 ">
          {/* Centered Editorial Header (Matching Reference Screenshot) */}
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50/90 border border-teal-200/90 shadow-2xs mb-5">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-xs font-semibold text-teal-900 tracking-wide">
                Operating System &amp; Kernel Recovery
              </span>
            </div> */}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-5">
              Blue screens &amp; fatal crashes.{" "}
              <span className="font-serif-accent text-teal-700 italic font-normal">
                Demystified &amp; recovered.
              </span>
            </h1>

            {/* <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Decipher cryptic Windows BSOD stop codes, resolve 100% disk usage bottlenecks, and restore corrupted system libraries with verified non-destructive terminal recovery.
            </p> */}
          </div>

          {/* Guide Count & Filters Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200/80">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Showing {filteredGuides.length} of {softwareGuidesData.length} guides
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              {/* Search Box */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search BSOD or OS issues..."
                  className="w-full pl-9 pr-3.5 py-2 bg-white border border-slate-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
                />
              </div>

              {/* Difficulty Filter Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-full self-start sm:self-auto">
                {["All", "Beginner", "Intermediate", "Advanced"].map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                      selectedDifficulty === diff
                        ? "bg-white text-slate-900 shadow-2xs font-semibold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-right text-xs text-slate-400 -mt-5 mb-6 hidden sm:block">
            Click any problem to view the complete solution
          </div>

          {/* Cards Grid */}
          {filteredGuides.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
              <Laptop className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-600 text-sm font-medium">No software guides matched your search.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDifficulty("All");
                }}
                className="mt-3 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold"
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
                  className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-blue-50 text-teal-700">
                        {guide.category}
                      </span>
                      <span
                        className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${
                          guide.difficulty === "Beginner"
                            ? "bg-emerald-50 text-emerald-700"
                            : guide.difficulty === "Intermediate"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {guide.difficulty}
                      </span>
                    </div>

                    {/* Icon Box */}
                    <div className="w-10 h-10 rounded-xl border border-slate-200/90 bg-slate-50 flex items-center justify-center my-4 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                      {getGuideIcon(guide.iconName)}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-700 transition">
                      {guide.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                      {guide.description}
                    </p>
                  </div>

                  {/* Card Bottom Row */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {guide.timeToFix}
                    </span>

                    <span className="flex items-center gap-1 font-semibold text-slate-900 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all">
                      <span>View Solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
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
        className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition z-40"
        title="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Interactive Solution Modal */}
      {activeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveGuide(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Badges */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-blue-50 text-blue-700">
                {activeGuide.category}
              </span>
              <span
                className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${
                  activeGuide.difficulty === "Beginner"
                    ? "bg-emerald-50 text-emerald-700"
                    : activeGuide.difficulty === "Intermediate"
                    ? "bg-blue-50 text-blue-700"
                    : "bg-amber-50 text-amber-700"
                }`}
              >
                {activeGuide.difficulty}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500 font-medium ml-auto mr-10 sm:mr-8">
                <Clock className="w-3.5 h-3.5" />
                {activeGuide.timeToFix}
              </span>
            </div>

            {/* Modal Title */}
            <h2 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
              {activeGuide.title}
            </h2>
            <p className="text-sm text-slate-600 mb-6">{activeGuide.description}</p>

            {/* Symptoms Alert */}
            <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 mb-6">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4 text-blue-600" />
                <span>Observed Crash Symptoms</span>
              </div>
              <ul className="space-y-1.5 text-xs text-blue-950">
                {activeGuide.symptoms.map((sym, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>{sym}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Root Cause Section */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Root Cause Analysis
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeGuide.rootCause}
              </p>
            </div>

            {/* Step-by-Step Verified Fix Protocol */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Step-by-Step OS Recovery Protocol
                </h3>
                <span className="text-[11px] text-blue-700 font-medium">Click step to mark done</span>
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
                          ? "bg-emerald-50/60 border-emerald-300 text-slate-500 line-through"
                          : "bg-white border-slate-200/80 hover:border-blue-300 text-slate-700"
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                          isDone
                            ? "bg-emerald-500 text-white"
                            : "bg-slate-100 text-slate-700 border border-slate-200"
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
              <div className="bg-slate-950 text-slate-100 p-4 rounded-2xl font-mono text-xs flex items-center justify-between mb-6">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    Terminal / PowerShell Command
                  </span>
                  <span className="text-blue-300 font-bold">{activeGuide.commandOrShortcut}</span>
                </div>
                <button
                  onClick={() => handleCopy(activeGuide.commandOrShortcut!)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-slate-300 hover:text-white shrink-0 ml-3"
                  title="Copy command"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            )}

            {/* Prevention Tip */}
            {activeGuide.preventionTip && (
              <p className="text-xs text-slate-500 italic mb-6">
                💡 <strong>Safety Tip:</strong> {activeGuide.preventionTip}
              </p>
            )}

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setActiveGuide(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Close Solution
              </button>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-slate-950 text-white text-xs font-semibold hover:bg-slate-800 transition"
              >
                <span>Request Remote Diagnostic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
