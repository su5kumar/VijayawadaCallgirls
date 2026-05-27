'use client';

import { MessageCircle, Phone } from 'lucide-react';
import { PHONE, WHATSAPP_URL } from '@/lib/constants';

export default function FloatingWhatsApp() {
  const phoneHref = `tel:${PHONE.replace(/\s+/g, '')}`;

  return (
    <>
      {/* Desktop-only: Floating Call Button */}
      <a
        href={phoneHref}
        className="group fixed bottom-6 left-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#aa8010] shadow-lg shadow-[#d4af37]/25 transition-transform duration-300 hover:scale-110 md:flex"
        aria-label={`Call Support ${PHONE}`}
        title={`Call Support ${PHONE}`}
      >
        <Phone size={24} className="text-[#0b0b0d]" />
        <span className="pointer-events-none absolute left-16 hidden whitespace-nowrap rounded-xl border border-[#d4af37]/20 bg-[#0b0b0d]/95 px-4 py-2 text-xs font-medium text-white shadow-xl backdrop-blur-md group-hover:block">
          Call Support {PHONE}
        </span>
      </a>

      {/* Desktop-only: Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-transform duration-300 hover:scale-110 animate-[float_3s_ease-in-out_infinite] md:flex"
        aria-label="Chat on WhatsApp"
        title="WhatsApp Now"
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    </>
  );
}
