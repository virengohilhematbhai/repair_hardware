"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

export default function Home() {
  const scrollToTroubleshooting = () => {
    const el =
      document.getElementById("troubleshooting") ||
      document.getElementById("self-repair");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfdfc] dark:bg-[#060b11] text-slate-900 dark:text-[#f0fdfa] selection:bg-teal-500/30 selection:text-teal-200 transition-colors duration-200">
      {/* 1. Header / Navbar */}
      <Navbar onOpenBooking={scrollToTroubleshooting} />

      {/* Main Home Content */}
      <main className="flex-1">
        {/* 2. Hero Component */}
        <Hero
          onOpenBooking={scrollToTroubleshooting}
          onExploreDiagnostic={scrollToTroubleshooting}
          onSearchSelect={scrollToTroubleshooting}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
