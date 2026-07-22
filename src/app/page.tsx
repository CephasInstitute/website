"use client";

import { useEffect, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Calendar,
  DollarSign,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Ref to target exactly where the Cognito Form should be injected
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Inject the script safely on the client side to avoid hydration errors
    // The length check prevents double-injection during React Strict Mode
    if (formRef.current && formRef.current.children.length === 0) {
      const script = document.createElement("script");
      script.src = "https://www.cognitoforms.com/f/seamless.js";
      script.setAttribute("data-key", "boQK7ss7KkCLvkCAge4c0w");
      script.setAttribute("data-form", "10");
      script.async = true;
      formRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section id="home" className="relative bg-[var(--color-brand-stone)] pt-20 pb-28 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-stone to-transparent opacity-80 z-10"></div>
          {/* Subtle abstract shapes for premium feel */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-brand-sage)] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[var(--color-brand-sage)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-[#e9d5c5] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight leading-tight mb-6 mt-4">
              Structured Academics.<br className="hidden md:block" />
              Meaningful Relationships.<br className="hidden md:block" />
              Purposeful Learning.
            </h1>
            <p className="text-xl md:text-2xl text-brand-charcoal/70 mb-6 leading-relaxed font-light">
              A faith-based learning community partnering with families to provide rigorous academics, individualized support, and character formation for students in grades 5–8.
            </p>
            <p className="text-lg md:text-xl text-brand-charcoal/80 mb-10 italic font-medium">
              Now Enrolling for 2026–2027 <br />
              PEP & UA Scholarships Accepted
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => scrollToSection('apply')}
                className="px-8 py-4 bg-[var(--color-brand-sage)] hover:bg-brand-sage/90 text-brand-stone rounded-xl font-semibold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Complete Interest Form <ArrowRight className="h-5 w-5" />
              </button>
              <Link
                href="/model"
                className="px-8 py-4 bg-brand-stone hover:bg-brand-stone/50 text-brand-charcoal border border-brand-charcoal/20 rounded-xl font-semibold text-lg transition-all shadow-sm flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 md:mt-24 relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-brand-charcoal/10 aspect-[16/9] md:aspect-[21/9] bg-brand-stone">
            <Image src="/gabriella_founder.jpg" alt="Gabriella De Oliveira" fill className="object-cover object-[50%_30%]" priority />
          </div>

          {/* Calendar CTA Banner */}
          <div className="mt-12 max-w-4xl mx-auto p-6 rounded-3xl bg-white/50 backdrop-blur-sm border border-brand-charcoal/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-all hover:scale-[1.01] duration-300">
            <div className="flex items-center gap-4 text-left">
              <div className="bg-[var(--color-brand-sage)] text-brand-stone p-3 rounded-2xl shrink-0">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand-charcoal mb-0.5 uppercase tracking-wide">Looking for our academic schedule?</h3>
                <p className="text-sm text-brand-charcoal/70">View or download the 2026-2027 Academic Calendar directly on our website.</p>
              </div>
            </div>
            <Link
              href="/model#calendar"
              className="w-full md:w-auto px-6 py-3.5 bg-brand-charcoal text-brand-stone hover:bg-black text-xs font-bold rounded-full shadow-sm hover:shadow transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap uppercase tracking-wider cursor-pointer"
            >
              View Academic Calendar <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Tuition CTA Banner */}
          <div className="mt-4 max-w-4xl mx-auto p-6 rounded-3xl bg-white/50 backdrop-blur-sm border border-brand-charcoal/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-all hover:scale-[1.01] duration-300">
            <div className="flex items-center gap-4 text-left">
              <div className="bg-[var(--color-brand-sage)] text-brand-stone p-3 rounded-2xl shrink-0">
                <DollarSign className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand-charcoal mb-0.5 uppercase tracking-wide">Want to review tuition & fees?</h3>
                <p className="text-sm text-brand-charcoal/70">Find detailed tuition tiers, flexible payment options, and scholarship guides.</p>
              </div>
            </div>
            <Link
              href="/admissions#tuition"
              className="w-full md:w-auto px-6 py-3.5 bg-brand-charcoal text-brand-stone hover:bg-black text-xs font-bold rounded-full shadow-sm hover:shadow transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap uppercase tracking-wider cursor-pointer"
            >
              View Tuition & Costs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* EDUCATIONAL MODEL TEASER */}
      <section className="py-24 bg-brand-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-sage)] uppercase mb-3">Our Approach</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">Foundations That Last</h3>
            <p className="text-lg text-brand-charcoal/70 mb-8">
              We believe education should do more than prepare students for the next test. Through strong academics, biblical truth, and meaningful mentorship, we help students develop the knowledge, wisdom, and character to live with purpose.
            </p>
            <Link href="/model" className="inline-flex items-center gap-2 bg-brand-charcoal text-brand-stone px-8 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Discover Our Approach <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT US TEASER */}
      <section className="py-24 bg-[var(--color-brand-stone)] border-t border-brand-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-sage)] uppercase mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">Partnering With Families</h3>
            <p className="text-lg text-brand-charcoal/70 mb-8">
              Many families are looking for an educational environment where students are known, challenged, and supported. Cephas was created to provide structured academics, individualized attention, and character development within a close-knit learning community.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 bg-brand-charcoal text-brand-stone px-8 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Learn More About Cephas <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-brand-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--color-brand-sage)] rounded-3xl p-8 md:p-16 border border-brand-sage/30 shadow-sm">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">Visit Our Campus</h2>
                  <p className="text-lg text-brand-charcoal/80">We would love to connect with you and share more about our vision for Cephas Institute.</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-brand-stone p-3 rounded-full text-brand-sage shadow-sm mr-4 shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-charcoal text-lg">Location</h4>
                      <p className="text-brand-charcoal/70 mt-1">(Harvest Field Church)<br />6431 Arc Way<br />Fort Myers, FL 33966</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-brand-stone p-3 rounded-full text-brand-sage shadow-sm mr-4 shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-charcoal text-lg">Email Us</h4>
                      <a href="mailto:info@cephasinstitute.com" className="text-brand-charcoal/80 hover:text-brand-charcoal hover:underline mt-1 inline-block">info@cephasinstitute.com</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-brand-stone p-3 rounded-full text-brand-sage shadow-sm mr-4 shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-charcoal text-lg">Call Us</h4>
                      <p className="text-brand-charcoal/70 mt-1">(555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 w-full h-[400px] bg-brand-stone/90 rounded-2xl overflow-hidden relative shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.342380918633!2d-81.85069232434891!3d26.57338637685108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db6ab714617c9b%3A0x6bc6a76e846bd5f4!2s6431%20Arc%20Way%2C%20Fort%20Myers%2C%20FL%2033966!5e0!3m2!1sen!2sus!4v1778644538754!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="apply" className="py-24 bg-[var(--color-brand-stone)] relative">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-brand-stone z-0"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="bg-brand-stone rounded-3xl shadow-xl overflow-hidden border border-brand-charcoal/10">
            {/* Form Header */}
            <div className="bg-[var(--color-brand-sage)] px-8 py-10 text-brand-stone text-center relative overflow-hidden">
              <div className="relative z-10">
                <Image src="/logo.png" alt="Cephas Institute" width={240} height={60} className="h-16 w-auto mx-auto mb-6 brightness-0 invert opacity-90 object-contain" />
                <h2 className="text-sm font-bold tracking-widest text-brand-stone/80 uppercase mb-2">Foundations That Last</h2>
                <h3 className="text-3xl md:text-4xl font-bold">Family Interest Form</h3>
                <p className="mt-3 text-brand-stone/90 max-w-lg mx-auto">
                  Take the first step toward joining our community. Fill out the form below to receive more information and secure your spot on our waitlist.
                </p>
              </div>
            </div>

            {/* Form Body - Cognito Form Injection Point */}
            <div className="p-8 md:p-12 min-h-[500px]">
              <div ref={formRef}></div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
