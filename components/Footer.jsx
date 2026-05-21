import Link from 'next/link';
import { ShieldCheck, ChevronRight, MessageSquare, Mail } from 'lucide-react';
import { NAV_LINKS, LOCATIONS, WHATSAPP_URL, EMAIL, SITE_NAME } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold font-[family-name:var(--font-heading)] inline-block mb-4">
              <span className="gold-gradient-text">Vijayawada</span> Escorts
            </Link>
            <p className="text-[#a0a0b0] text-sm leading-relaxed mb-5">
              Premium companionship, professional hospitality, and discreet support for discerning individuals visiting Vijayawada.
            </p>
            <div className="flex flex-col gap-2 text-xs text-[#a0a0b0]">
              <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#d4af37]" /> SSL Encrypted</span>
              <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#d4af37]" /> Verified Profiles</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Explore</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#a0a0b0] hover:text-[#d4af37] text-sm flex items-center gap-1.5 transition-colors">
                    <ChevronRight size={12} /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Pages */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Locations</h4>
            <ul className="space-y-2.5">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/${loc.slug}`} className="text-[#a0a0b0] hover:text-[#d4af37] text-sm flex items-center gap-1.5 transition-colors">
                    <ChevronRight size={12} /> {loc.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faq" className="text-[#a0a0b0] hover:text-[#d4af37] text-sm flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={12} /> FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <p className="text-[#a0a0b0] text-sm mb-4">Secure concierge desk for private verifications and bookings.</p>
            <div className="space-y-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-[#a0a0b0] hover:text-[#d4af37] transition-colors">
                <MessageSquare size={16} className="text-[#d4af37]" /> WhatsApp Support
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 text-sm text-[#a0a0b0] hover:text-[#d4af37] transition-colors">
                <Mail size={16} className="text-[#d4af37]" /> {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#a0a0b0]">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-[#d4af37] transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-[#d4af37] transition-colors">Terms</Link>
            <Link href="/disclaimer" className="hover:text-[#d4af37] transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
