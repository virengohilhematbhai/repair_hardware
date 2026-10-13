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
    <div className="min-h-screen flex flex-col bg-[#fbfdfc] text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      {/* 1. Header / Navbar */}
      <Navbar onOpenBooking={scrollToTroubleshooting} />

      {/* Main Home Content */}
      <main className="flex-1">
        {/* 2. Hero Component (Houses complete troubleshooting platform details) */}
        <Hero
          onOpenBooking={scrollToTroubleshooting}
          onExploreDiagnostic={scrollToTroubleshooting}
          onSearchSelect={scrollToTroubleshooting}
        />

      </main>

      {/* 5. Clean Footer */}
      <Footer />
    </div>
  );
}
