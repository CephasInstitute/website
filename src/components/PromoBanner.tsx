"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if current month is July (6) or August (7)
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const isPromoMonth = month === 6 || month === 7;

    // Check if user has previously dismissed the banner
    const isDismissed = localStorage.getItem("cephas_promo_dismissed") === "true";

    if (isPromoMonth && !isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("cephas_promo_dismissed", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a] text-white border-b border-[#e0a96d]/25 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-2.5">
          <span className="bg-[#e0a96d]/15 text-[#e0a96d] border border-[#e0a96d]/30 text-[10px] tracking-wider uppercase font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shrink-0 animate-pulse">
            <Sparkles className="h-3 w-3" /> Special Offer
          </span>
          <p className="text-xs sm:text-sm font-medium text-brand-stone/90">
            Celebrate America&apos;s 250th Birthday with us! Get <strong className="text-[#e0a96d] font-bold">$250 off</strong> our <strong className="font-semibold">Cephas Flex</strong> tuition during July and August.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/admissions#tuition"
            className="bg-[#e0a96d] hover:bg-[#d0995d] text-brand-charcoal px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm hover:shadow inline-flex items-center gap-1 shrink-0 hover:scale-[1.03]"
          >
            View Tuition <ArrowRight className="h-3 w-3" />
          </Link>
          <button
            onClick={handleDismiss}
            className="text-brand-stone/40 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
