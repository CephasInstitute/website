"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Users,
  BookOpen,
  Lightbulb
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <span className="inline-block py-1 px-3 rounded-full bg-brand-stone/80 border border-brand-charcoal/20 text-sm font-semibold text-[var(--color-brand-sage)] mb-6 shadow-sm">
              Enrolling for Fall 2026
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-charcoal tracking-tight leading-tight mb-8">
              Foundations That <span className="text-[var(--color-brand-sage)]">Last.</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-brand-charcoal/70 mb-10 leading-relaxed font-light">
              A faith-centered, K-8 micro-school in Fort Myers, FL. <br className="hidden md:block" />
              Equipping students with strong academics, character, and purpose.
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
            <Image src="/hero_learning.png" alt="Students engaged in learning" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* EDUCATIONAL MODEL TEASER */}
      <section className="py-24 bg-brand-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-sage)] uppercase mb-3">Our Approach</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">Our Educational Model</h3>
            <p className="text-lg text-brand-charcoal/70 mb-8">
              We blend the best of classical wisdom with modern, dynamic project-based learning in an intimate environment. 
              Our focus is on deep mastery of core subjects and meaningful real-world application.
            </p>
            <Link href="/model" className="inline-flex items-center gap-2 bg-brand-charcoal text-brand-stone px-8 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Explore Our Model <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT US TEASER */}
      <section className="py-24 bg-[var(--color-brand-stone)] border-t border-brand-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-sage)] uppercase mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">Partnering with Families</h3>
            <p className="text-lg text-brand-charcoal/70 mb-8">
              Founded by educators and community leaders who saw the need for a more intentional approach to learning. 
              We are building a team dedicated to guiding your child's academic and spiritual journey.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 bg-brand-charcoal text-brand-stone px-8 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Meet the Team <ArrowRight className="h-5 w-5" />
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
                      <p className="text-brand-charcoal/70 mt-1">(Harvest Field Church)< br />6431 Arc Way<br />Fort Myers, FL 33966</p>
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

{/* Form Body */}
            {isSuccess ? (
              <div className="p-8 md:p-12 text-center space-y-4">
                <div className="w-20 h-20 bg-[var(--color-brand-sage)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <CheckCircle2 className="h-10 w-10 text-brand-stone" />
                </div>
                <h4 className="text-2xl font-bold text-brand-charcoal">Thank You!</h4>
                <p className="text-brand-charcoal/70 text-lg max-w-md mx-auto">
                  Your interest form has been submitted successfully. We will be in touch with you shortly regarding the next steps for enrollment.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setStudents([{ id: Date.now() }]); // reset student inputs too
                  }}
                  className="mt-8 text-[var(--color-brand-sage)] font-semibold hover:underline"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form className="p-8 md:p-12 space-y-10" onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                setErrorMessage("");

                const formData = new FormData(e.currentTarget as HTMLFormElement);
                formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

                try {
                  const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                  });

                  const data = await response.json();
                  if (data.success) {
                    setIsSuccess(true);
                    (e.target as HTMLFormElement).reset();
                  } else {
                    setErrorMessage("There was an issue submitting your form. Please try again.");
                  }
                } catch (error) {
                  setErrorMessage("Network error occurred. Please try again later.");
                } finally {
                  setIsSubmitting(false);
                }
              }}>

                {/* Parent Info */}
                <div>
                  <h4 className="text-xl font-bold text-brand-charcoal mb-6 flex items-center border-b pb-2">
                    <Users className="h-5 w-5 mr-2 text-[var(--color-brand-sage)]" />
                    Parent / Guardian Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-charcoal/80">Full Name</label>
                      <input type="text" name="Parent Name" className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 focus:ring-2 focus:ring-[var(--color-brand-sage)] focus:border-transparent outline-none transition-all" placeholder="Jane Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-charcoal/80">Phone Number</label>
                      <input type="tel" name="Phone Number" className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 focus:ring-2 focus:ring-[var(--color-brand-sage)] focus:border-transparent outline-none transition-all" placeholder="(555) 000-0000" required />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-brand-charcoal/80">Email Address</label>
                      <input type="email" name="Email Address" className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 focus:ring-2 focus:ring-[var(--color-brand-sage)] focus:border-transparent outline-none transition-all" placeholder="jane@example.com" required />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-brand-charcoal/80">Home Address</label>
                      <input type="text" name="Home Address" className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 focus:ring-2 focus:ring-[var(--color-brand-sage)] focus:border-transparent outline-none transition-all" placeholder="123 Main St, Apt 4B, Fort Myers, FL 33916" required />
                    </div>
                  </div>
                </div>

                {/* Student Info */}
                <div>
                  <h4 className="text-xl font-bold text-brand-charcoal mb-6 flex items-center border-b pb-2">
                    <BookOpen className="h-5 w-5 mr-2 text-[var(--color-brand-sage)]" />
                    Student Information
                  </h4>

                  {/* Single Student Block */}
                  <div className="bg-brand-stone/50 p-6 rounded-2xl border border-brand-charcoal/10 mb-4 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium text-brand-charcoal/80">Student Name</label>
                        <input type="text" name="Student Name" className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 focus:ring-2 focus:ring-[var(--color-brand-sage)] focus:border-transparent outline-none transition-all bg-brand-stone" placeholder="Student's Full Name" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-charcoal/80">Date of Birth</label>
                        <input type="date" name="Date of Birth" className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 focus:ring-2 focus:ring-[var(--color-brand-sage)] focus:border-transparent outline-none transition-all bg-brand-stone text-brand-charcoal/80" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-charcoal/80">Entering Grade</label>
                        <select name="Entering Grade" defaultValue="" className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 focus:ring-2 focus:ring-[var(--color-brand-sage)] focus:border-transparent outline-none transition-all bg-brand-stone text-brand-charcoal/80" required>
                          <option value="" disabled>Select Grade</option>
                          <option value="k">Kindergarten</option>
                          <option value="1">1st Grade</option>
                          <option value="2">2nd Grade</option>
                          <option value="3">3rd Grade</option>
                          <option value="4">4th Grade</option>
                          <option value="5">5th Grade</option>
                          <option value="6">6th Grade</option>
                          <option value="7">7th Grade</option>
                          <option value="8">8th Grade</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button type="button" className="text-[var(--color-brand-sage)] font-semibold text-sm hover:text-[#a05a41] flex items-center gap-1 bg-[var(--color-brand-sage)]/10 px-4 py-2 rounded-lg transition-colors">
                    + Add Student
                  </button>
                </div>

                {/* Funding Options */}
                <div>
                  <h4 className="text-xl font-bold text-brand-charcoal mb-6 flex items-center border-b pb-2">
                    <Lightbulb className="h-5 w-5 mr-2 text-[var(--color-brand-sage)]" />
                    Funding Options
                  </h4>
                  <div className="space-y-4">

                    <label className="flex items-start p-4 border border-brand-charcoal/20 rounded-xl cursor-pointer hover:border-[var(--color-brand-sage)] hover:bg-[var(--color-brand-sage)]/5 transition-all">
                      <div className="flex items-center h-6">
                        <input type="radio" name="funding" value="Step Up Scholarship (Current)" className="w-5 h-5 text-[var(--color-brand-sage)] border-gray-300 focus:ring-[var(--color-brand-sage)]" required />
                      </div>
                      <div className="ml-3">
                        <span className="block text-sm font-bold text-brand-charcoal">I already have Step Up Scholarship</span>
                        <span className="block text-sm text-brand-charcoal/60 mt-1">For the upcoming school year.</span>
                      </div>
                    </label>

                    <label className="flex items-start p-4 border border-brand-charcoal/20 rounded-xl cursor-pointer hover:border-[var(--color-brand-sage)] hover:bg-[var(--color-brand-sage)]/5 transition-all">
                      <div className="flex items-center h-6">
                        <input type="radio" name="funding" value="Step Up Scholarship (Applying)" className="w-5 h-5 text-[var(--color-brand-sage)] border-gray-300 focus:ring-[var(--color-brand-sage)]" required />
                      </div>
                      <div className="ml-3">
                        <span className="block text-sm font-bold text-brand-charcoal">I plan to apply for the Step Up Scholarship for 2027</span>
                        <span className="block text-sm text-brand-charcoal/60 mt-1">I need more information or am currently in the process.</span>
                      </div>
                    </label>

                    <label className="flex items-start p-4 border border-brand-charcoal/20 rounded-xl cursor-pointer hover:border-[var(--color-brand-sage)] hover:bg-[var(--color-brand-sage)]/5 transition-all">
                      <div className="flex items-center h-6">
                        <input type="radio" name="funding" value="Paying Out of Pocket" className="w-5 h-5 text-[var(--color-brand-sage)] border-gray-300 focus:ring-[var(--color-brand-sage)]" required />
                      </div>
                      <div className="ml-3">
                        <span className="block text-sm font-bold text-brand-charcoal">I will be paying out of pocket</span>
                        <span className="block text-sm text-brand-charcoal/60 mt-1">Self-funding for this first year.</span>
                      </div>
                    </label>

                  </div>
                </div>

                {/* Comments */}
                <div>
                  <label className="text-sm font-medium text-brand-charcoal/80 block mb-2">Additional Comments or Questions</label>
                  <textarea
                    name="Additional Comments"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 focus:ring-2 focus:ring-[var(--color-brand-sage)] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us a little bit about what you're looking for in a school..."
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="pt-4">
                  {errorMessage && (
                    <div className="mb-4 p-3 bg-red-50 text-red-700 border border-red-200 rounded-lg text-sm">
                      {errorMessage}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--color-brand-sage)] hover:bg-brand-sage/90 disabled:opacity-70 disabled:cursor-not-allowed text-brand-stone py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Interest Form"} {!isSubmitting && <ArrowRight className="h-5 w-5" />}
                  </button>
                  <p className="text-center text-xs text-brand-charcoal/60 mt-4">
                    By submitting this form, you agree to be contacted by Cephas Institute regarding enrollment.
                  </p>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
