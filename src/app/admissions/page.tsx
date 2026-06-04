import { CheckCircle2, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TuitionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[var(--color-brand-sage)] text-[var(--color-brand-stone)] py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Tuition & Enrollment</h1>
          <p className="text-xl md:text-2xl font-light text-[var(--color-brand-stone)]/90">
            Investing in foundations that last.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-[var(--color-brand-stone)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
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
              
              <div className="space-y-4 mt-auto pt-4 border-t border-brand-charcoal/5">
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
                      <span className="text-brand-charcoal/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Individualized Support Enrollment Card */}
            <div className="bg-[#e9f2eb] rounded-3xl p-8 md:p-10 shadow-sm border-2 border-[#B66D52]/40 flex flex-col h-full transition-transform hover:-translate-y-1 duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#B66D52] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider shadow-sm">Specialized Tier</div>
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
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-[#fdfbf7] border-l-4 border-[#C6934A] rounded-2xl p-8 md:p-10 shadow-md mb-16 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 text-[#C6934A] opacity-5">
              <Lightbulb className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-brand-charcoal mb-4 flex items-center">
                <Lightbulb className="h-6 w-6 text-[#C6934A] mr-3" />
                Scholarships Accepted
              </h4>
              <p className="text-brand-charcoal/80 mb-4 font-medium">Cephas Institute currently accepts:</p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center bg-white px-4 py-3 rounded-lg border border-brand-charcoal/5 shadow-sm w-fit">
                  <div className="h-2 w-2 rounded-full bg-[#C6934A] mr-3"></div>
                  <span className="text-brand-charcoal/90 font-semibold">PEP Scholarships</span>
                </li>
                <li className="flex items-center bg-white px-4 py-3 rounded-lg border border-brand-charcoal/5 shadow-sm w-fit">
                  <div className="h-2 w-2 rounded-full bg-[#C6934A] mr-3"></div>
                  <span className="text-brand-charcoal/90 font-semibold">UA Scholarships through Step Up For Students</span>
                </li>
              </ul>
              <p className="text-brand-charcoal/70 italic text-sm mt-4 border-t border-brand-charcoal/5 pt-4">
                Families utilizing scholarship funding are encouraged to contact us regarding enrollment procedures and tuition guidance.
              </p>
            </div>
          </div>

          {/* Enrollment Note */}
          <div className="max-w-3xl mx-auto text-center border-t border-brand-charcoal/10 pt-12">
            <h4 className="text-lg font-bold text-brand-charcoal mb-4">Enrollment & Class Size</h4>
            <p className="text-brand-charcoal/70 leading-relaxed text-sm md:text-base">
              To preserve the quality, mentorship, and individualized nature of our program, enrollment is intentionally limited. We believe students learn best in environments where they are personally known, consistently supported, and meaningfully challenged both academically and spiritually.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-charcoal text-brand-stone py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Take the Next Step</h2>
          <p className="text-xl mb-8 text-brand-stone/80 font-light">
            We invite you to join our community and explore what Cephas Institute can offer your family.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/#apply" 
              className="bg-[var(--color-brand-sage)] hover:bg-[#5f6e5b] text-brand-stone px-8 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              Apply Now <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
