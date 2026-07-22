"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Lightbulb,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FileText,
  ClipboardList,
  Compass,
  DollarSign,
  HelpCircle,
  Clock,
  Sparkles
} from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

export default function AdmissionsPage() {
  // State for interactive FAQ accordion
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: "What grades does Cephas serve?",
      answer: "Cephas currently serves students in grades 5–8."
    },
    {
      question: "Is Cephas a private school?",
      answer: "Cephas partners with homeschool families through Florida's scholarship programs and homeschool options. Students enrolled at Cephas are educated as homeschool students rather than as students of a private school. We provide structured academic instruction, guidance, and support while working alongside families throughout their educational journey."
    },
    {
      question: "Do you accept scholarships?",
      answer: "Yes. Cephas accepts both PEP and UA scholarships."
    },
    {
      question: "What does a typical day look like?",
      answer: "Students participate in a structured schedule that includes Bible, literacy, mathematics, science, social studies, enrichment, outdoor time, and opportunities for individualized support."
    },
    {
      question: "What curriculum do you use?",
      answer: "Cephas utilizes a variety of curriculum resources selected to support strong academic growth, critical thinking, and skill development. Students receive a blend of whole-group instruction, individualized learning, and one-on-one teacher support throughout the school day."
    },
    {
      question: "Is Cephas a good fit for struggling learners?",
      answer: "One of the advantages of a small learning environment is that students don't get lost in the crowd. Teachers meet regularly with students one-on-one to check for understanding, address misconceptions, and provide targeted support. While Cephas may not be the right fit for every learning need, we work closely with families to determine whether our program can effectively support their student."
    },
    {
      question: "Is Cephas a good fit for advanced learners?",
      answer: "Yes. Small-group learning allows students to move deeper into concepts, work at an appropriate pace, and engage in meaningful academic challenges."
    },
    {
      question: "Are parents involved?",
      answer: "Yes. We view education as a partnership between families and educators. Regular communication and collaboration help support each student's growth."
    },
    {
      question: "What is your statement of faith?",
      answer: "Cephas is rooted in a biblical worldview and seeks to cultivate both academic excellence and Christlike character. Families do not need to belong to a specific denomination to enroll."
    },
    {
      question: "Can my child visit before enrolling?",
      answer: "In many cases, yes. Families may have the opportunity to participate in a tour of the facilities or shadow experience as part of the enrollment process."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[var(--color-brand-sage)] text-[var(--color-brand-stone)] py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Admissions</h1>
          <p className="text-xl md:text-2xl font-light text-[var(--color-brand-stone)]/95">
            Partnering with families to invest in foundations that last.
          </p>
        </div>
      </section>

      {/* Is Cephas a Good Fit Section */}
      <section className="py-24 bg-[var(--color-brand-stone)] border-b border-brand-charcoal/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-brand-charcoal/5">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-6 flex items-center justify-center gap-3">
                <Compass className="h-8 w-8 text-[var(--color-brand-sage)]" />
                Is Cephas a Good Fit?
              </h2>
              <p className="text-lg text-brand-charcoal/80 leading-relaxed">
                Families come to Cephas from a variety of educational backgrounds. Some have homeschooled for years, while others are transitioning from public or private school in search of a more personalized educational experience.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-brand-stone/40 rounded-2xl p-6 md:p-8 border border-brand-charcoal/5 mb-10">
              <p className="font-bold text-brand-charcoal text-lg mb-6">Families who enroll at Cephas are often looking for:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "More academic structure than they can realistically provide on their own",
                  "Consistent support in subjects such as math and writing",
                  "A smaller learning environment where students are known personally",
                  "Positive peer relationships and community",
                  "An educational approach that integrates faith, character, and academics"
                ].map((item, i) => (
                  <li key={i} className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-brand-charcoal/5">
                    <CheckCircle2 className="h-5 w-5 text-[var(--color-brand-sage)] mr-3 shrink-0 mt-0.5" />
                    <span className="text-brand-charcoal/80 text-sm font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center max-w-3xl mx-auto border-t border-brand-charcoal/10 pt-8">
              <p className="text-brand-charcoal/70 italic text-md leading-relaxed">
                Rather than trying to replicate a traditional school, Cephas seeks to provide a thoughtful balance of academic rigor, flexibility, mentorship, and community for families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition / Scholarship Section */}
      <section id="tuition" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-sage)] uppercase mb-3">Tuition & Scholarships</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">Tuition Tiers</h3>
            <p className="text-lg text-brand-charcoal/80 leading-relaxed">
              At Cephas Institute, we are committed to providing thoughtful, academically rigorous, and relationship-driven education within a structured small-group learning environment. Tuition supports strong academic instruction, individualized support, enrichment opportunities, and the intentional rhythms that shape student life at Cephas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Standard Enrollment Card */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-charcoal/5 flex flex-col h-full transition-transform hover:-translate-y-1 duration-300">
              <h3 className="text-2xl font-bold text-brand-charcoal mb-2">Standard Enrollment</h3>
              <div className="text-[var(--color-brand-sage)] font-bold text-3xl mb-4">$8,050 <span className="text-lg text-brand-charcoal/50 font-normal">Annual Tuition</span></div>
              <p className="text-brand-charcoal/70 mb-8 leading-relaxed flex-grow">
                Designed for students and scholarship-funded homeschool families seeking strong academics, biblical discipleship, and individualized support within a structured learning environment.
              </p>

              <div className="space-y-4 mt-auto pt-6 border-t border-brand-charcoal/5">
                <p className="font-bold text-brand-charcoal">Includes:</p>
                <ul className="space-y-3">
                  {[
                    "Core academic instruction",
                    "Small-group learning environment",
                    "Literacy & composition instruction",
                    "Mathematics, science, and social studies",
                    "Bible study & discipleship",
                    "Friday enrichment opportunities",
                    "Academic support & mentorship",
                    "Curriculum and instructional materials"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[var(--color-brand-sage)] mr-3 shrink-0 mt-0.5" />
                      <span className="text-brand-charcoal/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Individualized Support Enrollment Card */}
            <div className="bg-[#e9f2eb] rounded-3xl p-8 md:p-10 shadow-sm border-2 border-[var(--color-brand-sage)]/20 flex flex-col h-full transition-transform hover:-translate-y-1 duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[var(--color-brand-sage)] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider shadow-sm">Specialized Tier</div>
              <h3 className="text-2xl font-bold text-brand-charcoal mb-2 pr-20">Individualized Support Enrollment</h3>
              <div className="text-[var(--color-brand-sage)] font-bold text-3xl mb-4">$10,000 <span className="text-lg text-brand-charcoal/50 font-normal">Annual Tuition</span></div>
              <p className="text-brand-charcoal/70 mb-8 leading-relaxed flex-grow">
                Designed for students who may benefit from additional individualized support, accommodations, and intentional academic guidance within a structured and relationship-driven environment.
              </p>

              <div className="bg-white/70 rounded-xl p-5 border border-[var(--color-brand-sage)]/20 mt-auto shadow-sm">
                <p className="text-sm text-brand-charcoal/80 italic">
                  <span className="font-bold not-italic">Note:</span> Enrollment and placement are determined through an application and family meeting process to ensure program fit and appropriate support.
                </p>
              </div>
            </div>
          </div>

          {/* Scholarship Callout Box */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-[var(--color-brand-stone)]/20 border-l-4 border-[var(--color-brand-sage)] rounded-2xl p-8 md:p-10 shadow-md mb-16 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 text-[var(--color-brand-sage)] opacity-5">
              <Lightbulb className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-brand-charcoal mb-4 flex items-center">
                <Lightbulb className="h-6 w-6 text-[var(--color-brand-sage)] mr-3" />
                Scholarships Accepted
              </h4>
              <p className="text-brand-charcoal/80 mb-4 font-medium">Cephas Institute currently accepts:</p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center bg-white px-4 py-3 rounded-lg border border-brand-charcoal/5 shadow-sm w-fit">
                  <div className="h-2 w-2 rounded-full bg-[var(--color-brand-sage)] mr-3"></div>
                  <span className="text-brand-charcoal/90 font-semibold">PEP Scholarships</span>
                </li>
                <li className="flex items-center bg-white px-4 py-3 rounded-lg border border-brand-charcoal/5 shadow-sm w-fit">
                  <div className="h-2 w-2 rounded-full bg-[var(--color-brand-sage)] mr-3"></div>
                  <span className="text-brand-charcoal/90 font-semibold">UA Scholarships through Step Up For Students</span>
                </li>
              </ul>
              <p className="text-brand-charcoal/70 italic text-sm mt-4 border-t border-brand-charcoal/5 pt-4">
                Families utilizing scholarship funding are encouraged to contact us regarding enrollment procedures and tuition guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment & Registration Fees Section */}
      <section className="py-24 bg-[var(--color-brand-stone)] border-t border-b border-brand-charcoal/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-sage)] uppercase mb-3">Fee Structure</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal">Enrollment & Registration Fees</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 border border-brand-charcoal/5 shadow-sm flex flex-col justify-between">
              <div>
                <div className="bg-[var(--color-brand-sage)]/10 text-[var(--color-brand-sage)] w-fit px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Per Family</div>
                <h4 className="text-2xl font-bold text-brand-charcoal mb-2">Application Fee</h4>
                <div className="text-3xl font-extrabold text-[var(--color-brand-sage)] mb-4">$50</div>
                <p className="text-brand-charcoal/70 text-sm leading-relaxed">
                  After the welcome call, families who would like to move forward may submit an application. This fee helps cover the application review process and is non-refundable.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-brand-charcoal/5 shadow-sm flex flex-col justify-between">
              <div>
                <div className="bg-[var(--color-brand-sage)]/10 text-[var(--color-brand-sage)] w-fit px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Per Student</div>
                <h4 className="text-2xl font-bold text-brand-charcoal mb-2">Enrollment Fee</h4>
                <div className="text-3xl font-extrabold text-[var(--color-brand-sage)] mb-4">$200</div>
                <p className="text-brand-charcoal/70 text-sm leading-relaxed">
                  Upon acceptance, families complete enrollment and submit the enrollment fee to reserve their student's place for the upcoming school year. Because enrollment is intentionally limited, this fee is non-refundable.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-brand-charcoal/5 shadow-sm max-w-3xl mx-auto">
            <h4 className="text-xl font-bold text-brand-charcoal mb-4 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-[var(--color-brand-sage)]" />
              Tuition Payments
            </h4>
            <p className="text-brand-charcoal/70 text-sm mb-6 leading-relaxed">
              We offer flexible tuition payment structures to accommodate the specific needs of families:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start bg-[var(--color-brand-stone)]/30 p-4 rounded-xl border border-brand-charcoal/5">
                <CheckCircle2 className="h-5 w-5 text-[var(--color-brand-sage)] mr-3 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-brand-charcoal text-sm">4 Quarterly Payments</span>
                  <span className="block text-brand-charcoal/60 text-xs mt-1">Structured specifically for PEP / UA Scholarship cycles.</span>
                </div>
              </li>
              <li className="flex items-start bg-[var(--color-brand-stone)]/30 p-4 rounded-xl border border-brand-charcoal/5">
                <CheckCircle2 className="h-5 w-5 text-[var(--color-brand-sage)] mr-3 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-brand-charcoal text-sm">10-Month Installment Plan</span>
                  <span className="block text-brand-charcoal/60 text-xs mt-1">Convenient monthly installments throughout the academic year.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Enrollment Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-sage)] uppercase mb-3">Step-by-Step</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">Enrollment Process</h3>
            <p className="text-lg text-brand-charcoal/80 leading-relaxed mb-6">
              Our enrollment process is designed to help both your family and our team determine whether Cephas is the right fit for your student.
            </p>
            <div className="bg-[#faebe4] rounded-2xl p-4 md:p-6 border border-[#c27a5d]/30 text-left flex items-start gap-4">
              <Clock className="h-6 w-6 text-[#c27a5d] shrink-0 mt-0.5" />
              <p className="text-sm text-[#8c462b] font-medium leading-relaxed">
                <span className="font-bold">Please Note:</span> Because we intentionally maintain small class sizes, enrollment is limited and spaces may fill before the start of the school year.
              </p>
            </div>
          </div>

          {/* Steps Timeline */}
          <div className="relative border-l-2 border-[var(--color-brand-sage)]/30 ml-4 md:ml-8 space-y-12 pb-4">
            {[
              {
                step: "Step 1",
                title: "Submit an Interest Form",
                desc: "Tell us a little about your family and student. Once we receive your form, we'll reach out to schedule a conversation."
              },
              {
                step: "Step 2",
                title: "Family Welcome Call",
                desc: "This informal conversation gives us an opportunity to learn more about your student, answer questions, and share more about the Cephas learning model, expectations, and culture."
              },
              {
                step: "Step 3",
                title: "Complete an Application",
                desc: "Families who wish to move forward will be invited to submit an application and any requested records.",
                extra: "Application Fee: $50 per family (non-refundable)"
              },
              {
                step: "Step 4",
                title: "Enrollment Decision",
                desc: "Our team carefully reviews each application to determine whether Cephas is a strong fit for the student's academic, social, and developmental needs."
              },
              {
                step: "Step 5",
                title: "Enrollment & Seat Reservation",
                desc: "Accepted families will receive enrollment paperwork and instructions to finalize registration.",
                extra: "Enrollment Fee: $200 per student (non-refundable) - Once enrollment is complete, your student's place is reserved for the upcoming school year."
              }
            ].map((stepObj, idx) => (
              <div key={idx} className="relative pl-8 md:pl-10">
                {/* Timeline Dot */}
                <div className="absolute -left-[11px] top-1.5 bg-white border-4 border-[var(--color-brand-sage)] rounded-full w-5 h-5 flex items-center justify-center shadow-sm"></div>

                <div className="bg-[var(--color-brand-stone)]/30 border border-brand-charcoal/5 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-[var(--color-brand-sage)] font-bold text-xs uppercase tracking-widest">{stepObj.step}</span>
                  <h4 className="text-xl font-bold text-brand-charcoal mt-1 mb-3">{stepObj.title}</h4>
                  <p className="text-brand-charcoal/70 text-sm leading-relaxed">{stepObj.desc}</p>

                  {stepObj.extra && (
                    <div className="mt-4 p-3 bg-white border border-brand-charcoal/5 rounded-xl text-xs font-semibold text-brand-charcoal/80 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[var(--color-brand-sage)] shrink-0" />
                      <span>{stepObj.extra}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-24 bg-[var(--color-brand-stone)] border-t border-brand-charcoal/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-sage)] uppercase mb-3">Got Questions?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = openFAQIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-brand-charcoal/5 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-brand-charcoal text-base md:text-lg">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-[var(--color-brand-sage)] shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-brand-charcoal/40 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 border-t border-brand-charcoal/5 pt-4 bg-brand-stone/10">
                      <p className="text-brand-charcoal/80 text-sm md:text-base leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA / Ready to Get Started Section */}
      <section className="bg-brand-charcoal text-brand-stone py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-brand-stone/85 font-light">
            We would love to learn more about your family and answer any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#apply"
              className="bg-[var(--color-brand-sage)] hover:bg-[#5f6e5b] text-brand-stone px-8 py-4 rounded-full font-bold text-lg transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              Submit an Interest Form <ArrowRight className="h-5 w-5" />
            </Link>
            {/*          LINK FOR REGISTRATION ONLINE

<Link 
              href="/enroll" 
              className="bg-brand-stone hover:bg-brand-stone/80 text-brand-charcoal px-8 py-4 rounded-full font-bold text-lg transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 border border-brand-charcoal/15"
            >
              Online Registration Portal <ArrowRight className="h-5 w-5" />
            </Link> */}
          </div>

        </div>
      </section>
    </div>
  );
}
