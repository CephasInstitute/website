import Link from "next/link";
import { ArrowRight, BookOpen, Heart, Activity, Users, Star, Target, Calculator, FlaskConical, Globe, BookHeart, Mic, Wrench, Award, Palette, Hand, CalendarDays, Leaf, Check } from "lucide-react";
import AcademicCalendar from "@/components/AcademicCalendar";

export default function ModelPage() {
  return (
    <div className="flex flex-col min-h-screen print-only-calendar-wrapper">
      {/* Hero Section */}
      <section className="bg-brand-charcoal text-[var(--color-brand-stone)] py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--color-brand-sage)] to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Academic Approach</h1>
          <p className="text-xl md:text-2xl font-light text-[var(--color-brand-stone)]/80">
            A deep foundation in core disciplines designed to form wisdom, character, and purpose.
          </p>
        </div>
      </section>

      {/* Choose Your Cephas Pathway Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-brand-stone)] border-b border-brand-charcoal/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-sage)] uppercase mb-3">Pathways</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal mb-6">Choose Your Cephas Pathway</h3>
            <p className="text-lg text-brand-charcoal/80 leading-relaxed font-medium">
              Every Cephas pathway is Christ-centered, academically rigorous, and personalized. The difference is how we partner with your family.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Cephas Complete (Green) */}
            <div className="bg-white rounded-3xl shadow-md hover:shadow-lg border-t-8 border-[var(--color-brand-sage)] border-x border-b border-brand-charcoal/5 overflow-hidden flex flex-col h-full transition-all duration-300">
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-4 h-4 rounded-full bg-[var(--color-brand-sage)]" />
                  <h4 className="text-2xl font-extrabold text-brand-charcoal">Cephas Complete</h4>
                </div>
                <p className="text-sm text-brand-charcoal/70 font-semibold mb-6">Our comprehensive academic partnership.</p>
                
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 mb-3">Best for families who...</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5 text-sm text-brand-charcoal/80">
                      <span className="text-[var(--color-brand-sage)] text-base font-bold select-none">•</span>
                      <span>Want a complete academic program</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-brand-charcoal/80">
                      <span className="text-[var(--color-brand-sage)] text-base font-bold select-none">•</span>
                      <span>Desire four full days of instruction</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-brand-charcoal/80">
                      <span className="text-[var(--color-brand-sage)] text-base font-bold select-none">•</span>
                      <span>Prefer the greatest amount of teacher-led learning</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-brand-charcoal/10 pt-6 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 mb-3">Includes</p>
                  <ul className="space-y-2.5">
                    {[
                      "Four full days (Mon–Thurs)",
                      "Bible",
                      "Literacy",
                      "Math",
                      "Science",
                      "Social Studies",
                      "Personalized instruction",
                      "Teacher guidance & assessment",
                      "Optional enrichment Fridays"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-brand-charcoal/85">
                        <Check className="h-4 w-4 text-[var(--color-brand-sage)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-8 bg-brand-stone/20 border-t border-brand-charcoal/5">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 mb-2">Ideal for</p>
                <p className="text-sm text-brand-charcoal/85 leading-relaxed italic">
                  Families seeking the closest alternative to a full-time Christian microschool while remaining homeschool students.
                </p>
              </div>
            </div>

            {/* Cephas Core (Blue) */}
            <div className="bg-white rounded-3xl shadow-md hover:shadow-lg border-t-8 border-[#2b4c7e] border-x border-b border-brand-charcoal/5 overflow-hidden flex flex-col h-full transition-all duration-300">
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-4 h-4 rounded-full bg-[#2b4c7e]" />
                  <h4 className="text-2xl font-extrabold text-brand-charcoal">Cephas Core</h4>
                </div>
                <p className="text-sm text-brand-charcoal/70 font-semibold mb-6">Four mornings focused on building strong academic foundations.</p>
                
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 mb-3">Best for families who...</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5 text-sm text-brand-charcoal/80">
                      <span className="text-[#2b4c7e] text-base font-bold select-none">•</span>
                      <span>Want support in literacy and math</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-brand-charcoal/80">
                      <span className="text-[#2b4c7e] text-base font-bold select-none">•</span>
                      <span>Enjoy teaching science and history at home</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-brand-charcoal/80">
                      <span className="text-[#2b4c7e] text-base font-bold select-none">•</span>
                      <span>Want structure without a full-day commitment</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-brand-charcoal/10 pt-6 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 mb-3">Includes</p>
                  <ul className="space-y-2.5">
                    {[
                      "Four mornings (Mon–Thurs)",
                      "Bible",
                      "Literacy",
                      "Math",
                      "Personalized instruction",
                      "Progress monitoring"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-brand-charcoal/85">
                        <Check className="h-4 w-4 text-[#2b4c7e] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-8 bg-[#eef2f7] border-t border-brand-charcoal/5">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 mb-2">Parent provides</p>
                <ul className="space-y-1.5">
                  {["Science", "Social Studies", "Afternoon learning"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-brand-charcoal/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2b4c7e] shrink-0 animate-pulse" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cephas Flex (Orange) */}
            <div className="bg-white rounded-3xl shadow-md hover:shadow-lg border-t-8 border-[#c27a5d] border-x border-b border-brand-charcoal/5 overflow-hidden flex flex-col h-full transition-all duration-300">
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-4 h-4 rounded-full bg-[#c27a5d]" />
                  <h4 className="text-2xl font-extrabold text-brand-charcoal">Cephas Flex</h4>
                </div>
                <p className="text-sm text-brand-charcoal/70 font-semibold mb-6">A teacher-guided hybrid homeschool model.</p>
                
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 mb-3">Best for families who...</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5 text-sm text-brand-charcoal/80">
                      <span className="text-[#c27a5d] text-base font-bold select-none">•</span>
                      <span>Want a flexible schedule while remaining on track</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-brand-charcoal/80">
                      <span className="text-[#c27a5d] text-base font-bold select-none">•</span>
                      <span>Thrive with a hybrid learning environment</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-brand-charcoal/80">
                      <span className="text-[#c27a5d] text-base font-bold select-none">•</span>
                      <span>Want meaningful connection with teacher guidance</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-brand-charcoal/10 pt-6 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 mb-3">Includes</p>
                  <ul className="space-y-2.5">
                    {[
                      "Two full days (Tues & Wed)",
                      "Bible, Literacy, and Math instruction",
                      "Weekly teacher-prepared lesson plans",
                      "Guided at-home learning",
                      "Academic pacing & assignment planning",
                      "Progress monitoring & personalized support",
                      "Teacher oversight"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-brand-charcoal/85">
                        <Check className="h-4 w-4 text-[#c27a5d] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-8 bg-[#fdf5f2] border-t border-brand-charcoal/5">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 mb-2">Parents provide</p>
                <ul className="space-y-1.5">
                  {["Instruction on home learning days using Cephas plans", "At-home learning on Mon, Thurs"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-charcoal/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c27a5d] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Visual Comparison Table */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-brand-charcoal/5">
            <h4 className="text-2xl font-extrabold text-brand-charcoal mb-8 text-center tracking-tight">Visual Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-brand-charcoal/10 text-brand-charcoal/60 uppercase font-bold text-xs tracking-wider">
                    <th className="py-4 px-6">Feature / Subject</th>
                    <th className="py-4 px-6 text-center">Complete</th>
                    <th className="py-4 px-6 text-center">Core</th>
                    <th className="py-4 px-6 text-center">Flex</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-charcoal/5 text-brand-charcoal font-semibold">
                  <tr>
                    <td className="py-4 px-6 font-bold text-brand-charcoal">Bible Study</td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-[var(--color-brand-sage)] mx-auto font-bold" /></td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-[#2b4c7e] mx-auto font-bold" /></td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-[#c27a5d] mx-auto font-bold" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-brand-charcoal">Literacy & Composition</td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-[var(--color-brand-sage)] mx-auto font-bold" /></td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-[#2b4c7e] mx-auto font-bold" /></td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-[#c27a5d] mx-auto font-bold" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-brand-charcoal">Mathematics</td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-[var(--color-brand-sage)] mx-auto font-bold" /></td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-[#2b4c7e] mx-auto font-bold" /></td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-[#c27a5d] mx-auto font-bold" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-brand-charcoal">Science</td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-[var(--color-brand-sage)] mx-auto font-bold" /></td>
                    <td className="py-4 px-6 text-center"><span className="inline-block bg-[#eef2f7] text-[#2b4c7e] text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">Parent-Led</span></td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-[#c27a5d] mx-auto font-bold" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-brand-charcoal">Social Studies</td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-[var(--color-brand-sage)] mx-auto font-bold" /></td>
                    <td className="py-4 px-6 text-center"><span className="inline-block bg-[#eef2f7] text-[#2b4c7e] text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">Parent-Led</span></td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-[#c27a5d] mx-auto font-bold" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-brand-charcoal">Campus Schedule</td>
                    <td className="py-4 px-6 text-center text-xs font-extrabold text-[var(--color-brand-sage)] uppercase tracking-wide">4 Full Days (Mon–Thurs)</td>
                    <td className="py-4 px-6 text-center text-xs font-extrabold text-[#2b4c7e] uppercase tracking-wide">Morning Only (Mon–Thurs)</td>
                    <td className="py-4 px-6 text-center text-xs font-extrabold text-[#c27a5d] uppercase tracking-wide">2 Full Days (Tues & Wed)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-brand-charcoal">Home Learning Support</td>
                    <td className="py-4 px-6 text-center text-brand-charcoal/40 font-bold">—</td>
                    <td className="py-4 px-6 text-center text-brand-charcoal/40 font-bold">—</td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-[#c27a5d] mx-auto font-bold" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-brand-charcoal">Personalized Instruction</td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-[var(--color-brand-sage)] mx-auto font-bold" /></td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-[#2b4c7e] mx-auto font-bold" /></td>
                    <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-[#c27a5d] mx-auto font-bold" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-brand-charcoal">Friday Enrichment</td>
                    <td className="py-4 px-6 text-center"><span className="inline-block bg-[#e9f2eb] text-[var(--color-brand-sage)] text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">Included</span></td>
                    <td className="py-4 px-6 text-center text-brand-charcoal/40 font-bold">—</td>
                    <td className="py-4 px-6 text-center text-brand-charcoal/40 font-bold">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Academic Program */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-brand-charcoal/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-brand-charcoal mb-6">The Core Academic Program</h2>
            <p className="text-lg text-brand-charcoal/80">
              At Cephas Institute, we emphasize deep foundations in core disciplines. Rather than rushing through a wide curriculum, we focus on mastery, ensuring students truly understand and retain what they learn.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mathematics",
                desc: "We focus on conceptual understanding, procedural fluency, and real-world application. Our goal is for students to not just memorize formulas, but to truly understand why mathematical concepts work.",
                icon: <Activity className="h-8 w-8 text-[var(--color-brand-sage)]" />
              },
              {
                title: "Literacy & Composition",
                desc: "Strong communication is vital. Our literacy program is built on deep reading comprehension, rich vocabulary, explicit grammar instruction, and written communication using meaningful, classic literature.",
                icon: <BookOpen className="h-8 w-8 text-[var(--color-brand-sage)]" />
              },
              {
                title: "Science",
                desc: "We encourage curiosity and analytical thinking across life, earth, and physical sciences. Students learn through structured instruction paired with engaging, hands-on experiences.",
                icon: <Target className="h-8 w-8 text-[var(--color-brand-sage)]" />
              },
              {
                title: "Social Studies",
                desc: "Through exploring history, geography, government, and culture, we help students critically analyze historical events and understand their meaningful role in the world today.",
                icon: <Users className="h-8 w-8 text-[var(--color-brand-sage)]" />
              },
              {
                title: "Bible Study",
                desc: "Everything we do is centered on scripture. We focus on developing a biblical worldview, character formation, and learning exactly how biblical truth shapes our daily lives and relationships.",
                icon: <Heart className="h-8 w-8 text-[var(--color-brand-sage)]" />
              }
            ].map((subject, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-charcoal/5 hover:shadow-md transition-shadow">
                <div className="mb-4">{subject.icon}</div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-3">{subject.title}</h3>
                <p className="text-brand-charcoal/70 leading-relaxed">{subject.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Educational Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-charcoal mb-12 text-center">Our Educational Pillars</h2>
          <p className="text-center text-brand-charcoal/80 max-w-2xl mx-auto mb-16 text-lg">
            Our approach is built securely on four foundational pillars designed to nurture the whole student:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start p-6 rounded-xl bg-[var(--color-brand-stone)]/40 border border-[var(--color-brand-sage)]/20">
              <div className="bg-[var(--color-brand-sage)] p-3 rounded-lg text-white shrink-0">
                <Star className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-2">Foundations First</h3>
                <p className="text-brand-charcoal/80">A heavy, uncompromising focus on literacy, math, communication, and critical thinking to build lasting capabilities.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-6 rounded-xl bg-[var(--color-brand-stone)]/40 border border-[var(--color-brand-sage)]/20">
              <div className="bg-[var(--color-brand-sage)] p-3 rounded-lg text-white shrink-0">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-2">Whole-Child Formation</h3>
                <p className="text-brand-charcoal/80">We intentionally balance academic rigor with healthy rhythms, active mentorship, outdoor time, and spiritual, social, and emotional growth.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-xl bg-[var(--color-brand-stone)]/40 border border-[var(--color-brand-sage)]/20">
              <div className="bg-[var(--color-brand-sage)] p-3 rounded-lg text-white shrink-0">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-2">Applied Learning</h3>
                <p className="text-brand-charcoal/80">We pair strong academic instruction with practical projects, rich discussions, and hands-on experiences that bring learning to life.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-xl bg-[var(--color-brand-stone)]/40 border border-[var(--color-brand-sage)]/20">
              <div className="bg-[var(--color-brand-sage)] p-3 rounded-lg text-white shrink-0">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-2">Individualized Support</h3>
                <p className="text-brand-charcoal/80">Our small-group learning environments ensure that every single student is personally known, closely mentored, and fully supported.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Weekly Rhythm */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-brand-stone)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-charcoal mb-4 text-center tracking-tight">THE CEPHAS WEEKLY RHYTHM</h2>
          <p className="text-brand-charcoal/80 text-center mb-12 text-lg max-w-3xl mx-auto font-medium">
            Our campus operates on a structured Monday&ndash;Thursday schedule with optional Friday enrichment. While each pathway utilizes this schedule in different ways (Full Days, Mornings, or Select Days), our weekly rhythm is built around these core structured days:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Monday - Thursday */}
            <div className="bg-[#f9f9f7] rounded-3xl shadow-md border border-brand-charcoal/10 overflow-hidden flex flex-col">
              <div className="bg-[var(--color-brand-sage)] text-white p-6 flex items-center gap-4">
                <div className="border-2 border-white/30 p-3 rounded-full shrink-0 bg-transparent">
                  <CalendarDays className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold leading-tight uppercase">Monday&ndash;Thursday</h3>
                  <p className="font-semibold text-white/90 tracking-wide text-sm uppercase">Structured Academic Learning</p>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-brand-charcoal/80 mb-6 font-medium">Students build strong foundations through intentional instruction in:</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-4 text-brand-charcoal border-b border-brand-charcoal/10 pb-3">
                    <div className="bg-brand-charcoal text-white p-2 rounded-full"><BookOpen className="h-5 w-5" /></div>
                    <span className="font-semibold">Literacy & Writing</span>
                  </li>
                  <li className="flex items-center gap-4 text-brand-charcoal border-b border-brand-charcoal/10 pb-3">
                    <div className="bg-brand-charcoal text-white p-2 rounded-full"><Calculator className="h-5 w-5" /></div>
                    <span className="font-semibold">Mathematics</span>
                  </li>
                  <li className="flex items-center gap-4 text-brand-charcoal border-b border-brand-charcoal/10 pb-3">
                    <div className="bg-brand-charcoal text-white p-2 rounded-full"><FlaskConical className="h-5 w-5" /></div>
                    <span className="font-semibold">Science</span>
                  </li>
                  <li className="flex items-center gap-4 text-brand-charcoal border-b border-brand-charcoal/10 pb-3">
                    <div className="bg-brand-charcoal text-white p-2 rounded-full"><Globe className="h-5 w-5" /></div>
                    <span className="font-semibold">Social Studies</span>
                  </li>
                  <li className="flex items-center gap-4 text-brand-charcoal border-b border-brand-charcoal/10 pb-3">
                    <div className="bg-brand-charcoal text-white p-2 rounded-full"><BookHeart className="h-5 w-5" /></div>
                    <span className="font-semibold">Bible & Character Development</span>
                  </li>
                </ul>

                <div className="relative text-center mb-6">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-[var(--color-brand-sage)]/30"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-[#f9f9f7] px-3 text-[var(--color-brand-sage)]">
                      <Leaf className="h-5 w-5" />
                    </span>
                  </div>
                </div>

                <p className="text-brand-charcoal font-bold mb-3">Instruction includes:</p>
                <ul className="list-disc pl-5 space-y-2 text-brand-charcoal/80 text-sm font-medium">
                  <li>Discussion-based learning and guided practice</li>
                  <li>Small-group instruction and individualized support</li>
                  <li>Embedded targeted support within literacy and mathematics instruction</li>
                  <li>Calm, structured routines that promote focus</li>
                  <li>Meaningful relationships and mentorship</li>
                  <li>Outdoor breaks and healthy rhythms</li>
                </ul>
              </div>
            </div>

            {/* Fridays */}
            <div className="bg-[#faebe4] rounded-3xl shadow-md border border-[#c27a5d]/30 overflow-hidden flex flex-col">
              <div className="bg-[#c27a5d] text-white p-6 flex items-center gap-4">
                <div className="border-2 border-white/30 p-3 rounded-full shrink-0 bg-transparent">
                  <Leaf className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold leading-tight uppercase">Select Fridays</h3>
                  <p className="font-semibold text-white/90 tracking-wide text-sm uppercase">Enrichment & Application</p>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-brand-charcoal/80 mb-6 font-medium">Fridays provide students with opportunities to apply learning and build practical skills through experiences that may include:</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-4 text-brand-charcoal border-b border-[#c27a5d]/30 pb-3">
                    <div className="bg-[#c27a5d] text-white p-2 rounded-full"><Mic className="h-5 w-5" /></div>
                    <span className="font-semibold">Public Speaking</span>
                  </li>
                  <li className="flex items-center gap-4 text-brand-charcoal border-b border-[#c27a5d]/30 pb-3">
                    <div className="bg-[#c27a5d] text-white p-2 rounded-full"><Users className="h-5 w-5" /></div>
                    <span className="font-semibold">Collaborative Projects</span>
                  </li>
                  <li className="flex items-center gap-4 text-brand-charcoal border-b border-[#c27a5d]/30 pb-3">
                    <div className="bg-[#c27a5d] text-white p-2 rounded-full"><Wrench className="h-5 w-5" /></div>
                    <span className="font-semibold">Practical Life Skills</span>
                  </li>
                  <li className="flex items-center gap-4 text-brand-charcoal border-b border-[#c27a5d]/30 pb-3">
                    <div className="bg-[#c27a5d] text-white p-2 rounded-full"><Award className="h-5 w-5" /></div>
                    <span className="font-semibold">Leadership Development</span>
                  </li>
                  <li className="flex items-center gap-4 text-brand-charcoal border-b border-[#c27a5d]/30 pb-3">
                    <div className="bg-[#c27a5d] text-white p-2 rounded-full"><Palette className="h-5 w-5" /></div>
                    <span className="font-semibold">Creative Enrichment</span>
                  </li>
                  <li className="flex items-center gap-4 text-brand-charcoal border-b border-[#c27a5d]/30 pb-3">
                    <div className="bg-[#c27a5d] text-white p-2 rounded-full"><Hand className="h-5 w-5" /></div>
                    <span className="font-semibold">Hands-On Activities</span>
                  </li>
                </ul>

                <div className="mt-auto">
                  <div className="relative text-center mb-6">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="w-full border-t border-[#c27a5d]/40"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-[#faebe4] px-3 text-[#c27a5d]">
                        <Leaf className="h-5 w-5" />
                      </span>
                    </div>
                  </div>

                  <p className="text-brand-charcoal/80 font-medium text-center">
                    These experiences help students apply learning, build confidence, and strengthen community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <AcademicCalendar />

      {/* C.E.P.H.A.S. Core Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-charcoal text-brand-stone">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">The C.E.P.H.A.S. Core Values</h2>
          
          <div className="space-y-6">
            {[
              { l: "C", t: "Christ-Centered Foundation", d: "Rooting all learning and character formation in biblical truth." },
              { l: "E", t: "Excellence in Academics", d: "Maintaining rigor and absolute consistency in core disciplines." },
              { l: "P", t: "Purposeful Learning", d: "Connecting academic lessons to real-life meaning and personal calling." },
              { l: "H", t: "Holistic Development", d: "Educating the whole child—academically, socially, emotionally, and spiritually." },
              { l: "A", t: "ADVOCACY", d: "Cultivating students who lead with compassion, serve with humility, and positively impact their communities." },
              { l: "S", t: "Stable Rhythms", d: "Providing the structure and consistent routines that promote confidence and a healthy balance." }
            ].map((value, idx) => (
              <div key={idx} className="flex gap-6 items-start p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-5xl font-black text-[var(--color-brand-sage)] leading-none">{value.l}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{value.t}</h3>
                  <p className="text-brand-stone/70">{value.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-brand-sage)] text-brand-stone py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Take the Next Step</h2>
          <p className="text-xl mb-8 text-brand-stone/90 font-light">
            Discover an education that forms wisdom, character, and purpose. We welcome families utilizing state scholarships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/#apply" 
              className="bg-brand-charcoal hover:bg-black text-brand-stone px-8 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              Schedule a Tour / Request Info <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
