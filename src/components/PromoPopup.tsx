"use client";

import { useState, useEffect } from "react";
import { X, Gift, ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * =========================================================================
 * PROMO CONFIGURATION TEMPLATE
 * Edit the values below to easily change the sale details in the future!
 * =========================================================================
 */
const PROMO_CONFIG = {
  // 1. Enable or disable this popup entirely
  isEnabled: true,

  // 2. The title of the promotion (keep it punchy)
  title: "🇺🇸 America's 250th Special",

  // 3. Small badge text to display above the title
  badgeText: "Limited Time Offer",

  // 4. Detailed description of the discount/sale
  description: "Get $250 off our Cephas Flex tuition when enrolling during July and August!",

  // 5. Text for the Call-To-Action button
  ctaText: "View Discounted Tuition",

  // 6. Link target for the CTA button (e.g. hash link or relative path)
  ctaLink: "#tuition",

  // 7. Unique key for localStorage to track dismissal (change this for new sales so it reappears)
  localStorageKey: "cephas_250th_birthday_promo_popup",

  // 8. Custom function to decide if the promotion should show based on current date
  shouldShow: () => {
    const month = new Date().getMonth();
    return month === 6 || month === 7; // July (6) or August (7)
  },

  // 9. Scroll threshold in pixels before the popup slides into view
  scrollThreshold: 300,
};

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(true); // default true to avoid hydration mismatch

  useEffect(() => {
    // Only check localStorage on the client side
    const dismissed = localStorage.getItem(PROMO_CONFIG.localStorageKey) === "true";
    setHasDismissed(dismissed);

    // Initial check for promo active
    const isPromoActive = PROMO_CONFIG.isEnabled && PROMO_CONFIG.shouldShow();
    if (!isPromoActive || dismissed) return;

    const handleScroll = () => {
      if (window.scrollY > PROMO_CONFIG.scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on load in case page is already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(PROMO_CONFIG.localStorageKey, "true");
    setHasDismissed(true);
    setIsVisible(false);
  };

  if (hasDismissed) return null;

  return (
    <div
      className={`fixed inset-0 bg-brand-charcoal/45 backdrop-blur-xs z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleDismiss}
    >
      <div
        className={`bg-white/98 rounded-3xl p-8 max-w-md w-full shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] relative border border-[#c27a5d]/25 transition-all duration-300 transform ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-brand-charcoal/40 hover:text-brand-charcoal transition-colors p-1.5 rounded-full hover:bg-brand-charcoal/5"
          aria-label="Close promotion"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Decorative Icon */}
          <div className="bg-[#fdf5f2] border border-[#c27a5d]/10 text-[#c27a5d] p-4 rounded-full w-fit mx-auto mb-4">
            <Gift className="h-8 w-8" />
          </div>

          {/* Text */}
          <span className="text-xs uppercase font-extrabold tracking-wider text-[#c27a5d] block mb-1">
            {PROMO_CONFIG.badgeText}
          </span>
          <h4 className="text-2xl font-bold text-brand-charcoal mb-3">
            {PROMO_CONFIG.title}
          </h4>
          <p className="text-brand-charcoal/70 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
            {PROMO_CONFIG.description}
          </p>

          {/* Action button */}
          <Link
            href={PROMO_CONFIG.ctaLink}
            onClick={(e) => {
              // Smooth scroll to element if it's a hash link on the same page
              if (PROMO_CONFIG.ctaLink.startsWith("#")) {
                e.preventDefault();
                handleDismiss();
                setTimeout(() => {
                  const element = document.getElementById(PROMO_CONFIG.ctaLink.substring(1));
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }, 300); // Wait for modal close transition
              }
            }}
            className="w-full justify-center bg-[#c27a5d] hover:bg-[#8c462b] text-white px-6 py-3.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 hover:scale-[1.02]"
          >
            {PROMO_CONFIG.ctaText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
