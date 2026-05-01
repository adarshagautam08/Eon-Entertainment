"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 lg:pb-20 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-50 -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-24 left-1/4 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -z-10" />

      <div className="container-wide px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-brand-red" />
            <span className="font-display text-xs font-bold text-brand-red tracking-[0.3em] uppercase">
              Established 2026 · Nepal
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-[1.05] tracking-tight">
            Powered by{" "}
            <span className="text-brand-red italic">Creativity.</span>
            <br></br>
            Driven by Digital.
          </h1>

          <p className="text-lg md:text-xl text-neutral-500 mb-12 max-w-xl leading-relaxed">
            A forward-thinking media, digital, and technology-driven company
            built to operate at the intersection of creativity, innovation, and
            enterprise execution.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/services" className="btn-primary">
              Our Solutions
            </Link>
            <Link href="/about" className="btn-outline">
              About EON
            </Link>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="relative h-full flex flex-col justify-center"
        >
          <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[600px] rounded-sm overflow-hidden shadow-2xl group">
            <img
              src="/images/hero-image.jpg"
              alt="Creative Studio"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div className="text-white">
                <div className="font-display text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-brand-red">
                  Showreel 2026
                </div>
                <div className="text-2xl font-serif font-bold">
                  Bringing Stories to Life
                </div>
              </div>
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-red hover:scale-110 active:scale-95 transition-all shadow-xl">
                <Play fill="currentColor" size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
