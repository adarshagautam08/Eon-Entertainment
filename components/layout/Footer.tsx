import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Mail, MapPin, Phone } from 'lucide-react'

const links = [
  { href: '/',            label: 'Home' },
  { href: '/about',       label: 'About Us' },
  { href: '/services',    label: 'Services' },
  { href: '/industry',    label: 'Industry' },
  { href: '/governance',  label: 'Governance' },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-24 pb-12">
      <div className="container-wide px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white ml-0.5" />
              </div>
              <div className="font-serif text-2xl font-bold leading-none tracking-tight">
                e<span className="text-brand-red">on</span>
              </div>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed mb-8 max-w-xs">
              A forward-thinking media, digital, and technology-driven company built to operate at the intersection of creativity, innovation, and enterprise execution.
            </p>
            <div className="flex items-center gap-4">
              {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-500 hover:bg-neutral-800 hover:text-white transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-8">Company</h4>
            <ul className="space-y-4">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-neutral-500 hover:text-white transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-neutral-500 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-8">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">Media Production</a></li>
              <li><a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">Digital Ecosystems</a></li>
              <li><a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">Event Management</a></li>
              <li><a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">Tech Solutions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-8">Contacts</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-brand-red shrink-0" />
                <div className="text-sm text-neutral-500 leading-relaxed">
                  Avenues 88 Building,<br />Kumaripati, Lalitpur, Nepal
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-brand-red shrink-0" />
                <div className="text-sm text-neutral-500">+977 982 222 1111</div>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-brand-red shrink-0" />
                <div className="text-sm text-neutral-500">info@eon.com.np</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[11px] font-medium text-neutral-600 uppercase tracking-widest">
            © 2026 Entertainment On Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-8 text-[11px] font-medium text-neutral-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}