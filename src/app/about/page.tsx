import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[var(--color-brand-sage)] text-[var(--color-brand-stone)] py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl font-light text-[var(--color-brand-stone)]/90">
            Shaping both the intellect and character of every student.
          </p>
        </div>
      </section>

      {/* Our Story & Foundation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-brand-stone)]">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-bold prose-headings:text-brand-charcoal text-brand-charcoal/80">
          <h2 className="text-3xl font-bold mb-6 text-brand-charcoal">Our Story & Foundation</h2>
          <p className="mb-4">
            Welcome to Cephas Institute. We believe that true education goes far beyond academic performance alone—it is about shaping both the intellect and character of every student.
          </p>
          <p className="mb-4">
            Founded in 2026 by Gabriella and John De Oliveira, Cephas Institute was born out of a long-standing, shared passion for education, intentional discipleship, and building a meaningful community. We recognized a growing need for an educational environment that does more than just pass along information.
          </p>
          <p>
            At Cephas Institute, we provide strong academics, intentional mentorship, and real-world responsibility, all built securely on a foundation rooted in biblical truth.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Mission */}
          <div className="bg-[var(--color-brand-stone)]/30 p-8 md:p-10 rounded-2xl border border-[var(--color-brand-sage)]/20 shadow-sm">
            <h3 className="text-2xl font-bold text-brand-charcoal mb-4">Our Mission</h3>
            <p className="text-lg text-brand-charcoal/80 mb-6 font-medium">
              To cultivate academically prepared, spiritually grounded, and purpose-driven students who lead with wisdom, compassion, and integrity.
            </p>
            <p className="text-brand-charcoal/80 mb-4">We are dedicated to developing young people who:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[var(--color-brand-sage)] shrink-0 mr-3" />
                <span className="text-brand-charcoal/80"><strong>Think critically</strong> and approach complex problems with confidence.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[var(--color-brand-sage)] shrink-0 mr-3" />
                <span className="text-brand-charcoal/80"><strong>Communicate clearly</strong> in both written and spoken word.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[var(--color-brand-sage)] shrink-0 mr-3" />
                <span className="text-brand-charcoal/80"><strong>Serve others well</strong>, recognizing their unique calling in the world.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[var(--color-brand-sage)] shrink-0 mr-3" />
                <span className="text-brand-charcoal/80"><strong>Pursue excellence</strong> in both their learning and their character.</span>
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-[var(--color-brand-stone)]/30 p-8 md:p-10 rounded-2xl border border-[var(--color-brand-sage)]/20 shadow-sm">
            <h3 className="text-2xl font-bold text-brand-charcoal mb-4">Our Vision</h3>
            <p className="text-lg text-brand-charcoal/80 mb-6 font-medium">
              We strive to provide a thoughtful, relationship-driven alternative to conventional schooling.
            </p>
            <p className="text-brand-charcoal/80 mb-4">
              At a time when many students feel disconnected or overwhelmed, Cephas Institute stands apart. We envision a vibrant learning community where students are:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[var(--color-brand-sage)] shrink-0 mr-3" />
                <span className="text-brand-charcoal/80"><strong>Personally known</strong> and valued by their guides and peers.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[var(--color-brand-sage)] shrink-0 mr-3" />
                <span className="text-brand-charcoal/80"><strong>Challenged to grow</strong> academically, socially, and spiritually.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[var(--color-brand-sage)] shrink-0 mr-3" />
                <span className="text-brand-charcoal/80"><strong>Equipped with wisdom, resilience, and leadership skills</strong> to positively impact their families and communities for Christ.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Meet Our Founders */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-brand-stone)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-charcoal">Meet Our Founders</h2>
          
          <div className="space-y-16">
            {/* Gabriella */}
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/3 aspect-square relative rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
                {/* Fallback image placeholder or actual photo if available */}
                <Image src="/about_us_team_1778644316981.png" alt="Gabriella De Oliveira" fill className="object-cover" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-brand-charcoal">Gabriella De Oliveira</h3>
                <p className="text-[var(--color-brand-sage)] font-semibold mb-4 uppercase tracking-wide text-sm">Founder & Primary Middle School Guide</p>
                <p className="text-brand-charcoal/80 mb-4">
                  Having been raised in a structured homeschool environment alongside five siblings, Gabriella developed an early appreciation for individualized learning and the power of active family involvement. Her deep passion for teaching was sparked in 2022 through a local elementary school service project, confirming her calling to education.
                </p>
                <h4 className="font-bold text-brand-charcoal mt-6 mb-2">Experience & Credentials:</h4>
                <ul className="list-disc pl-5 space-y-2 text-brand-charcoal/80">
                  <li>Graduated from Florida Gulf Coast University with a Bachelor’s degree in Biology and a minor in Education.</li>
                  <li>Taught middle school at a charter school in Bonita Springs, experiencing firsthand the vital need for smaller, more personalized learning environments.</li>
                  <li>Brings extensive expertise from working in microschool settings and as a private K-12 tutor.</li>
                  <li>Has worked with students ranging from preschool through high school, both locally and internationally.</li>
                </ul>
              </div>
            </div>

            {/* John */}
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="w-full md:w-1/3 aspect-square relative rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0 bg-brand-charcoal/5 flex items-center justify-center">
                {/* Placeholder for John's image. Can use the same style or logo for now. */}
                <Image src="/logo.png" alt="John De Oliveira" width={120} height={120} className="object-contain opacity-20" />
              </div>
              <div className="w-full md:w-2/3 md:text-right">
                <h3 className="text-2xl font-bold text-brand-charcoal">John De Oliveira</h3>
                <p className="text-[var(--color-brand-sage)] font-semibold mb-4 uppercase tracking-wide text-sm">Founder & Operational Manager</p>
                <p className="text-brand-charcoal/80 mb-4">
                  John oversees the business operations, safety structures, and organizational systems at Cephas Institute, ensuring the school's daily rhythms run with clarity and excellence. He co-founded the school in 2026 to help build an intentional, distraction-free environment for holistic student growth.
                </p>
                <h4 className="font-bold text-brand-charcoal mt-6 mb-2">Experience & Credentials:</h4>
                <ul className="space-y-3 text-brand-charcoal/80 text-left md:text-right">
                  <li><strong className="text-brand-charcoal">Corporate Financial Control:</strong> Managed corporate financial structures and oversight within the finance sector of Tupy S/A, a global multinational corporation.</li>
                  <li><strong className="text-brand-charcoal">Software Development & Client Relations:</strong> Worked as an independent full-stack developer and Account Manager, balancing technical execution with client success.</li>
                  <li><strong className="text-brand-charcoal">Startup & Tech Infrastructure:</strong> Provided core Technical Support at Prisma Box, a fast-paced software house and tech startup.</li>
                  <li><strong className="text-brand-charcoal">Systems & Procedures Expert:</strong> Possesses a deep knowledge of operational workflows, data systems, and optimization strategies.</li>
                  <li><strong className="text-brand-charcoal">Community & Ministry:</strong> Serves actively alongside his wife, Gabriella, in their church's middle school ministry.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-charcoal text-brand-stone py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 text-brand-stone/80 font-light">
            Are you looking for a faith-centered, structured alternative for your child's education? We would love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/#apply" 
              className="bg-[var(--color-brand-sage)] hover:bg-[#5f6e5b] text-brand-stone px-8 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              Apply Now <ArrowRight className="h-5 w-5" />
            </Link>
            <a 
              href="mailto:info@cephasinstitute.com" 
              className="bg-transparent border border-brand-stone/30 hover:border-brand-stone text-brand-stone px-8 py-3 rounded-full font-medium transition-colors"
            >
              info@cephasinstitute.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
