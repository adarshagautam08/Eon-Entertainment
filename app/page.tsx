'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react'
import Hero from '@/components/section/Hero'
import SectionHeader from '@/components/section/SectionHeader'
import { STATS, CORE_SERVICES, ADVANCED_CAPABILITIES } from '@/constants'

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Hero />

      {/* Executive Summary */}
      <section className="section-padding bg-neutral-50 overflow-hidden pb-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-full w-full">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full min-h-[500px] lg:min-h-[600px] bg-neutral-200 overflow-hidden relative z-10 shadow-2xl rounded-sm"
              >
                <img
                  src="/images/executive-summary.jpg"
                  alt="EON Studio"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <div>
              <SectionHeader
                tag="EXECUTIVE SUMMARY"
                title="A New-Generation Media & Digital Enterprise"
                description="Entertainment On Private Limited is a forward-thinking media, digital, and technology-driven company built to operate at the intersection of creativity, innovation, and enterprise execution."
              />

              <div className="grid grid-cols-3 gap-8 py-8 border-y border-neutral-200 mb-12">
                {STATS.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-brand-red mb-1">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="flex items-center gap-3 font-bold uppercase text-xs tracking-widest group hover:text-brand-red transition-all"
              >
                Learn More About Us <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader
            tag="DIGITAL MEDIA & CONTENT STRATEGY"
            title="Core Services"
            description="Our core offerings are designed to maximize relevance and audience engagement in the modern digital landscape."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CORE_SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-8 bg-neutral-50 rounded-sm border-l-4 border-brand-red"
              >
                <CheckCircle2 size={32} className="text-brand-red shrink-0" />
                <span className="text-lg font-bold text-neutral-900 leading-tight">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="section-padding bg-neutral-900 text-white overflow-hidden">
        <div className="container-wide">
          <SectionHeader
            tag="ADVANCED CAPABILITIES"
            title="We Leverage Emerging Technologies"
            description="We utilize cutting-edge tools to analyze trends and optimize content for maximum impact."
            light
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ADVANCED_CAPABILITIES.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 border border-neutral-800 hover:bg-neutral-800 transition-all group"
              >
                <Zap size={32} className="text-brand-red mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-4">{cap.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Brief */}
      <section className="bg-white section-padding overflow-hidden relative pb-20">
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeader
                tag="INDUSTRY LANDSCAPE & OPPORTUNITY"
                title="Nepal Digital Content Market Overview"
                description="Nepal's digital content market is experiencing rapid growth, driven by increasing internet penetration, widespread smartphone usage, and a young, digitally active population."
              />

              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="bg-neutral-50 p-8 rounded-sm">
                  <div className="text-3xl font-bold text-brand-red mb-2 italic">Rising</div>
                  <div className="text-xs font-medium text-neutral-400 uppercase tracking-widest">OTT Platforms</div>
                </div>
                <div className="bg-neutral-50 p-8 rounded-sm">
                  <div className="text-3xl font-bold text-brand-blue mb-2 italic">14-15M</div>
                  <div className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Active Social Users</div>
                </div>
              </div>

              <Link href="/industry" className="btn-outline">
                Explore Industry Landscape
              </Link>
            </div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="hidden lg:block relative h-full"
            >
              <div className="h-full min-h-[500px] rounded-sm overflow-hidden border border-neutral-200 shadow-2xl">
                <img
                  src="/images/industry.jpg"
                  alt="Market Data"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}