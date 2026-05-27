'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0b0b0d]/95 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-1 text-xl font-bold font-[family-name:var(--font-heading)]">
          <span className="gold-gradient-text">Vijayawada</span>
          <span className="text-white"> Escorts</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-[#a0a0b0] hover:text-[#d4af37] transition-colors duration-200 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-gold text-xs px-5 py-2.5"
          >
            WhatsApp Booking
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — always in DOM, toggled via CSS for better INP */}
      <div className={`lg:hidden bg-[#0b0b0d]/98 backdrop-blur-xl border-t border-white/5 absolute top-full left-0 right-0 shadow-2xl transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <nav className="flex flex-col p-6 gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-[#a0a0b0] hover:text-[#d4af37] hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-4 text-center"
          >
            WhatsApp Booking
          </a>
        </nav>
      </div>
    </header>
  );
}
