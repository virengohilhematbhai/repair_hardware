"use client";

import React, { useState, useEffect, useRef } from "react";
import { Users, Send, TrendingUp, Clock } from "lucide-react";
import { metricsData } from "@/data/repairData";

interface AnimatedNumberProps {
  rawValue: string;
  duration?: number;
}

function AnimatedMetricValue({ rawValue, duration = 1800 }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef<HTMLHeadingElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Parse prefix, target number, suffix, and decimals
  const parseResult = React.useMemo(() => {
    const match = rawValue.match(/^([^0-9.]*)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) {
      return { prefix: "", target: 0, suffix: rawValue, decimals: 0 };
    }
    const prefix = match[1] || "";
    const numStr = match[2];
    const target = parseFloat(numStr);
    const suffix = match[3] || "";
    const decimals = numStr.includes(".") ? (numStr.split(".")[1]?.length || 0) : 0;
    return { prefix, target, suffix, decimals };
  }, [rawValue]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    } else {
      setHasStarted(true);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const { prefix, target, suffix, decimals } = parseResult;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out cubic curve
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = ease * target;

      const formattedNum = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString();
      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        const finalNum = decimals > 0 ? target.toFixed(decimals) : target.toString();
        setDisplayValue(`${prefix}${finalNum}${suffix}`);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, duration, parseResult]);

  return (
    <h3
      ref={elementRef}
      className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900"
    >
      {displayValue}
    </h3>
  );
}

export default function MetricsBar({ className }: { className?: string }) {
  const icons = [Users, Send, TrendingUp, Clock];
  const styles = [
    { bg: "bg-emerald-50", text: "text-emerald-600" },
    { bg: "bg-teal-50", text: "text-teal-600" },
    { bg: "bg-cyan-50", text: "text-cyan-600" },
    { bg: "bg-teal-50", text: "text-teal-700" },
  ];

  return (
    <section
      id="metrics"
      className={className ?? "relative -mt-6 sm:mb-15 z-20 max-w-8xl px-5 sm:px-20 mx-auto"}
    >
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-200/50 p-6 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {metricsData.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            const style = styles[idx % styles.length];
            return (
              <div
                key={idx}
                className={`flex items-center gap-4 ${idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${style.bg} ${style.text} flex items-center justify-center shrink-0 transition-transform hover:scale-110 duration-200`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <AnimatedMetricValue rawValue={item.value} />
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
