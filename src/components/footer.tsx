"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-14 pb-10 mt-auto">
      <div className="max-w-8xl px-5 sm:px-20 mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group shrink-0">
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-slate-900 border border-slate-200/80 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="HW Nexus Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="shrink-0">
                <span className="text-base font-bold tracking-tight text-slate-900 block leading-tight">
                  HW Nexus
                </span>
                <span className="text-[9px] font-semibold tracking-wider text-slate-400 uppercase block">
                  FIX YOUR TECH
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm mb-6">
              The modern workspace for computer troubleshooting, telemetry diagnostics, and precision hardware &amp; software recovery.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 text-slate-400">
              <a
                href="#"
                aria-label="X Twitter"
                className="w-8 h-8 rounded-full border border-slate-200 hover:text-slate-900 hover:border-slate-400 flex items-center justify-center transition"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-slate-200 hover:text-slate-900 hover:border-slate-400 flex items-center justify-center transition"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.76v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 0 0-1.63 1.62c0 .9.73 1.62 1.63 1.62a1.62 1.62 0 1 0 0-3.24z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="w-8 h-8 rounded-full border border-slate-200 hover:text-slate-900 hover:border-slate-400 flex items-center justify-center transition"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li>
                <Link href="/display-problems" className="hover:text-slate-900 transition">
                  Display &amp; GPU Issues
                </Link>
              </li>
              <li>
                <Link href="/software-problems" className="hover:text-slate-900 transition">
                  Software &amp; BSOD Crashes
                </Link>
              </li>
              <li>
                <Link href="/hardware-problems" className="hover:text-slate-900 transition">
                  Hardware &amp; Thermal Faults
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900 transition">
                  Custom Diagnostics
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li>
                <Link href="/about" className="hover:text-slate-900 transition">
                  About Platform
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900 transition">
                  Contact &amp; Support
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-slate-900 transition">
                  Diagnostics Method
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column - exactly matching Motivo screenshot */}
          <div className="sm:col-span-2 lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Stay in the loop
            </h4>
            <p className="text-xs text-slate-500 mb-4">
              Get the latest updates, diagnostic scripts, and insights straight to your inbox.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-2.5 rounded-full border border-emerald-200">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Subscribed! Thank you.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center max-w-sm">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-4 pr-11 py-2.5 bg-slate-50/90 border border-slate-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition"
                />
                <button
                  type="submit"
                  className="absolute right-1 w-8 h-8 rounded-full bg-slate-950 hover:bg-slate-800 text-white flex items-center justify-center transition active:scale-95"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center sm:text-left">
          <p>© 2026 HW Nexus. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/about" className="hover:text-slate-600 transition">
              Terms of Service
            </Link>
            <Link href="/about" className="hover:text-slate-600 transition">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-slate-600 transition">
              Support Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
