'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/section/SectionHeader'
import { CORE_VALUES } from '@/constants'

export default function AboutPage() {
  return (
    <div className="animate-fade-in">

      {/* Editorial Hero */}
      <section className="section-padding bg-neutral-900 text-white min-h-[60vh] flex items-center relative overflow-hidden">
         <img
    src="/images/industry.jpg"
    alt="About Hero"
    className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
  />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red -z-0 opacity-10" />
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <SectionHeader tag="EXECUTIVE SUMMARY" title="Entertainment On" light />
            <h1 className="text-6xl md:text-9xl font-bold font-serif -mt-8 mb-12 opacity-5 select-none leading-none tracking-tighter hidden md:block">
              EST. 2026
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl leading-relaxed italic border-l-4 border-brand-red pl-8">
              "A forward-thinking media, digital, and technology-driven company built to operate at the intersection of creativity, innovation, and enterprise execution."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-neutral-100 border border-neutral-100">
            <div className="bg-white p-12 lg:p-20">
              <div className="w-12 h-1 bg-brand-red mb-8" />
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-neutral-500 leading-relaxed text-lg">
                To design and deliver transformative media and digital experiences that empower brands, inspire audiences, and create lasting impact across regional and global markets.
              </p>
            </div>
            <div className="bg-white p-12 lg:p-20 border-t md:border-t-0 md:border-l border-neutral-100">
              <div className="w-12 h-1 bg-brand-blue mb-8" />
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-neutral-500 leading-relaxed text-lg">
                To become a globally recognized media and digital solutions company, known for innovation, quality, and excellence in execution—delivering world-class solutions that meet international standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Strength */}
      <section className="section-padding bg-neutral-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-neutral-200 mt-12 overflow-hidden rounded-sm">
                <img src="/images/team-strength1.jpg" alt="Team 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[3/4] bg-neutral-200 overflow-hidden rounded-sm">
                <img src="/images/team-strength2.jpg" alt="Team 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>

            <div>
              <SectionHeader
                tag="ABOUT US"
                title="At Entertainment On Private Limited,"
                description="Our strength lies in a dynamic and multidisciplinary team of over 40 creative professionals who bring together extensive experience across the entire media and production spectrum. This wide-ranging exposure enables us to approach every project with a deep understanding of both creative storytelling and technical precision."
              />

              <div className="flex flex-wrap gap-3 mb-10">
                {['Directors', 'Producers', 'Sound Engineers', 'Editors', 'Graphic Designers', 'Creative Strategists', 'Digital Strategists', 'Technology Experts'].map(role => (
                  <span key={role} className="px-4 py-2 bg-white border border-neutral-200 text-[10px] font-bold uppercase tracking-widest text-neutral-600 rounded-sm">
                    {role}
                  </span>
                ))}
              </div>

              <div className="p-8 bg-white border-l-4 border-brand-red shadow-xl shadow-neutral-200/50">
                <p className="text-neutral-600 italic leading-relaxed">
                  "We have assembled a group of professionals with 15–20 years of experience in broadcasting, media production, and content development, ensuring every project meets international quality standards."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader centered tag="CORE VALUES" title="A standard embedded in every stage" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-neutral-100 hover:border-brand-red/20 hover:shadow-xl transition-all"
              >
                <div className="font-serif text-3xl text-neutral-100 mb-6 font-bold">{String(i + 1).padStart(2, '0')}</div>
                <h4 className="text-lg font-bold mb-4">{v.title}</h4>
                <p className="text-sm text-neutral-900 font-medium mb-4">{v.desc}</p>
                <p className="text-xs text-neutral-500 leading-relaxed">{v.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-wide">
          <SectionHeader tag="FUTURE OUTLOOK" title="Strategic Direction" light />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <ul className="space-y-6">
                {[
                  'Expansion into international markets',
                  'Development of OTT and digital platforms',
                  'Growth in large-scale content production',
                  'Strengthening technology integration'
                ].map(item => (
                  <li key={item} className="flex gap-4 items-start pb-4 border-b border-white/10">
                    <div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2" />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-red p-12 lg:p-16 rounded-sm">
              <h3 className="text-3xl font-bold mb-8">Long-Term Vision</h3>
              <p className="text-white/90 leading-relaxed mb-6 font-medium">
                We aim to position Entertainment On as a globally recognized brand known for excellence in media and digital innovation.
              </p>
              <p className="text-white/70 leading-relaxed mb-6 text-sm">
                Our focus is on delivering world-class solutions that meet international standards while adapting to evolving market needs.
              </p>
              <p className="text-white/70 leading-relaxed text-sm">
                Through continuous growth, strategic partnerships, and innovation, we strive to compete and collaborate on a global scale.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}