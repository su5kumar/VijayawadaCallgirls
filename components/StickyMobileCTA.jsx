'use client';

import { MessageCircle, Phone } from 'lucide-react';
import { WHATSAPP_URL, PHONE } from '@/lib/constants';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0b0b0d]/95 backdrop-blur-md border-t border-[#d4af37]/20 safe-area-bottom">
      <div className="flex items-center gap-2 p-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book via WhatsApp"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm py-3.5 rounded-lg active:scale-95 transition-transform"
        >
          <MessageCircle size={18} />
          WhatsApp Now
        </a>
        <a
          href={`tel:${PHONE.replace(/\s+/g, '')}`}
          aria-label={`Call us at ${PHONE}`}
          className="flex items-center justify-center gap-2 bg-[#d4af37] text-[#0b0b0d] font-semibold text-sm py-3.5 px-5 rounded-lg active:scale-95 transition-transform"
        >
          <Phone size={18} />
          Call
        </a>
      </div>
    </div>
  );
}
