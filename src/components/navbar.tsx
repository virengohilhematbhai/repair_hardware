"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Display Problems", href: "/display-problems" },
    { name: "Software Problems", href: "/software-problems" },
    { name: "Hardware Problems", href: "/hardware-problems" },

    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-2.5"
        : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3 sm:py-3.5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* HW Nexus Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-slate-900 border border-slate-200/80 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/logo.jpg"
                alt="HW Nexus Logo"
                width={36}
                height={36}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="shrink-0">
              <span className="text-base font-bold tracking-tight text-slate-900 block leading-tight whitespace-nowrap">
                HW Nexus
              </span>
              <span className="text-[9px] font-semibold tracking-wider text-slate-400 uppercase block whitespace-nowrap">
                FIX YOUR TECH
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Active Underline Indicator */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium transition-all duration-150 relative whitespace-nowrap ${active
                    ? "text-slate-900 font-bold border-b-2 border-teal-800"
                    : "text-slate-600 hover:text-slate-950"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls: Search & Book */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <div className="relative">
              <Link
                href="/display-problems"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs text-slate-400 transition"
              >
                <span>Search...</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-500 shadow-2xs">
                  /
                </kbd>
              </Link>
            </div>


          </div>

          {/* Mobile & Tablet Right Controls (<1024px) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <Link
              href="/contact"
              className="px-3 py-1.5 rounded-full bg-slate-950 text-white text-xs font-medium whitespace-nowrap"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-5 space-y-1.5 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2 text-sm font-medium rounded-xl transition ${active
                  ? "bg-teal-50 text-teal-800 font-semibold"
                  : "text-slate-700 hover:bg-slate-50"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-slate-950 text-white text-sm font-medium"
            >
              <span>Book a repair — it&apos;s free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
