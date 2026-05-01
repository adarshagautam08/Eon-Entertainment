'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/',            label: 'Home' },
  { href: '/about',       label: 'About Us' },
  { href: '/services',    label: 'Services' },
  { href: '/industry',    label: 'Industry' },
  { href: '/governance',  label: 'Governance' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md py-4'
        : 'bg-white shadow-sm border-b border-neutral-200/50 py-5'
    }`}>
      <div className="container-wide flex items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center shadow-lg shadow-brand-red/20 group-hover:scale-110 transition-transform">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-white ml-1" />
          </div>
          <div className="text-left">
            <div className="font-serif text-xl font-bold leading-none tracking-tight">
              e<span className="text-brand-red group-hover:text-brand-blue transition-colors">on</span>
            </div>
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 mt-0.5">
              Entertainment On
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium tracking-wide transition-all relative py-1 hover:text-brand-red ${
                  isActive ? 'text-neutral-900 border-b-2 border-brand-red ' : 'text-neutral-500'
                }`}
              >
                {label}
              </Link>
            )
          })}
          <Link href="/contact" className="btn-primary py-2 px-6 text-sm">
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-neutral-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-neutral-100 shadow-2xl p-6 md:hidden flex flex-col gap-4"
          >
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium ${
                  pathname === href ? 'text-brand-red' : 'text-neutral-600'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary mt-2 w-full text-center"
            >
              Get in Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}