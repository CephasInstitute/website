import Link from "next/link";
import { ArrowRight, BookOpen, Heart, Activity, Users, Star, Target, CheckCircle, Calculator, FlaskConical, Globe, BookHeart, Mic, Wrench, Award, Palette, Hand, CalendarDays, Leaf } from "lucide-react";

export default function ModelPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-charcoal text-[var(--color-brand-stone)] py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--color-brand-sage)] to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our School Model & Academic Approach</h1>
          <p className="text-xl md:text-2xl font-light text-[var(--color-brand-stone)]/80">
            A deep foundation in core disciplines designed to form wisdom, character, and purpose.
          </p>
        </div>
      </section>

      {/* The Core Academic Program */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-brand-stone)]">
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
          <p className="text-brand-charcoal/80 text-center mb-12 text-lg max-w-3xl mx-auto">
            Our structured weekly rhythm provides students with strong academics, meaningful relationships, and opportunities to apply learning, build confidence, and grow in wisdom.
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
