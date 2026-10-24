"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#070d14]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-teal-900/40 shadow-xs dark:shadow-[0_4px_25px_rgba(0,0,0,0.6)] py-2.5"
          : "bg-white/90 dark:bg-[#070d14]/85 backdrop-blur-sm border-b border-slate-100 dark:border-teal-950/60 py-3 sm:py-3.5"
      }`}
    >
      <div className="max-w-8xl mx-auto px-5 sm:px-20">
        <div className="flex items-center justify-between">
          {/* HW Nexus Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-slate-900 border border-slate-200/80 dark:border-teal-500/30 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
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
              <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white block leading-tight whitespace-nowrap">
                HW Nexus
              </span>
              <span className="text-[9px] font-semibold tracking-wider text-slate-400 dark:text-teal-400/90 uppercase block whitespace-nowrap">
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
                  className={`px-3 py-1.5 text-xs font-medium transition-all duration-150 relative whitespace-nowrap ${
                    active
                      ? "text-slate-900 dark:text-[#00F2B0] font-bold border-b-2 border-teal-800 dark:border-[#00F2B0]"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-[#00F2B0]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls: Search, Theme Toggle & Book */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
           
            
            {/* Dark / Light Mode Toggle Pill */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark and Light Mode"
              title={theme === "dark" ? "Dark Mode is ON. Click to switch to Light Mode." : "Light Mode is ON. Click to switch to Dark Mode."}
              className="flex items-center gap-1 p-1 rounded-full bg-slate-100 dark:bg-[#0c1622] border border-slate-200 dark:border-teal-900/60 hover:border-slate-300 dark:hover:border-teal-500/50 transition shadow-2xs group"
            >
              <span
                className={`p-1 rounded-full transition flex items-center justify-center ${
                  mounted && theme === "dark"
                    ? "bg-[#070e17] text-[#00F2B0] shadow-[0_0_8px_rgba(0,242,176,0.35)]"
                    : "text-slate-400 dark:text-slate-600"
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
              </span>
              <span
                className={`p-1 rounded-full transition flex items-center justify-center ${
                  mounted && theme === "light"
                    ? "bg-white text-amber-500 shadow-2xs"
                    : "text-slate-400 dark:text-slate-600"
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
              </span>
            </button>

          
          </div>

          {/* Mobile & Tablet Right Controls (<1024px) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            {/* Dark / Light Toggle Mobile */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark and Light Mode"
              className="flex items-center gap-1 p-1 rounded-full bg-slate-100 dark:bg-[#0c1622] border border-slate-200 dark:border-teal-900/60"
            >
              <span
                className={`p-1 rounded-full transition flex items-center justify-center ${
                  mounted && theme === "dark"
                    ? "bg-[#070e17] text-[#00F2B0] shadow-[0_0_8px_rgba(0,242,176,0.35)]"
                    : "text-slate-400 dark:text-slate-600"
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
              </span>
              <span
                className={`p-1 rounded-full transition flex items-center justify-center ${
                  mounted && theme === "light"
                    ? "bg-white text-amber-500 shadow-2xs"
                    : "text-slate-400 dark:text-slate-600"
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#0c1622]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-teal-900/40 bg-white/95 dark:bg-[#080f18]/95 backdrop-blur-md px-4 pt-3 pb-5 space-y-1.5 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2 text-sm font-medium rounded-xl transition ${
                  active
                    ? "bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-[#00F2B0] font-semibold"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#0c1622]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
         
        </div>
      )}
    </header>
  );
}
