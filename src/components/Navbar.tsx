"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-brand-stone/90 backdrop-blur-md border-b border-brand-charcoal/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center cursor-pointer">
              <Link href="/">
                <Image src="/logo.png" alt="Cephas Institute" width={240} height={60} className="h-14 w-auto object-contain" priority />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-brand-charcoal/70 hover:text-[var(--color-brand-sage)] font-medium transition-colors">Home</Link>
              <Link href="/model" className="text-brand-charcoal/70 hover:text-[var(--color-brand-sage)] font-medium transition-colors">Our Model</Link>
              <Link href="/about" className="text-brand-charcoal/70 hover:text-[var(--color-brand-sage)] font-medium transition-colors">About Us</Link>
              <Link href="/admissions" className="text-brand-charcoal/70 hover:text-[var(--color-brand-sage)] font-medium transition-colors">Admissions</Link>
              <Link href="/#contact" className="text-brand-charcoal/70 hover:text-[var(--color-brand-sage)] font-medium transition-colors">Contact</Link>
              <Link
                href="/#apply"
                className="bg-[var(--color-brand-sage)] hover:bg-[#5f6e5b] text-brand-stone px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Join Waitlist <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-brand-charcoal/70 hover:text-brand-charcoal focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-brand-stone border-b border-brand-charcoal/10 absolute w-full left-0 shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className="block w-full text-left px-3 py-3 text-base font-medium text-brand-charcoal/80 hover:text-[var(--color-brand-sage)] hover:bg-brand-stone/50 rounded-md">Home</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/model" className="block w-full text-left px-3 py-3 text-base font-medium text-brand-charcoal/80 hover:text-[var(--color-brand-sage)] hover:bg-brand-stone/50 rounded-md">Our Model</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/about" className="block w-full text-left px-3 py-3 text-base font-medium text-brand-charcoal/80 hover:text-[var(--color-brand-sage)] hover:bg-brand-stone/50 rounded-md">About Us</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/admissions" className="block w-full text-left px-3 py-3 text-base font-medium text-brand-charcoal/80 hover:text-[var(--color-brand-sage)] hover:bg-brand-stone/50 rounded-md">Admissions</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/#contact" className="block w-full text-left px-3 py-3 text-base font-medium text-brand-charcoal/80 hover:text-[var(--color-brand-sage)] hover:bg-brand-stone/50 rounded-md">Contact</Link>


              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                href="/#apply"
                className="block w-full text-center mt-4 bg-[var(--color-brand-sage)] text-brand-stone px-3 py-3 rounded-lg font-medium shadow-sm"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
