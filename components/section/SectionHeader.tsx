'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  tag?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({ tag, title, description, centered, light }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-6 font-display text-[10px] uppercase font-bold tracking-[0.2em]"
        >
          <div className="h-[1px] w-8 bg-brand-red" />
          <span className={light ? 'text-neutral-400' : 'text-brand-red'}>{tag}</span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1] ${light ? 'text-white' : 'text-neutral-900'}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-neutral-400' : 'text-neutral-600'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}