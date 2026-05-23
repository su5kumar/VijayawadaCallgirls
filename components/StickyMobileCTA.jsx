'use client';

import { MessageCircle, Phone } from 'lucide-react';
import { WHATSAPP_URL, PHONE } from '@/lib/constants';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0b0b0d]/95 backdrop-blur-md border-t border-white/10 p-3 safe-area-bottom">
      <div className="flex items-center gap-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book via WhatsApp"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm py-3 rounded-lg hover:bg-[#20bd5a] transition-colors"
        >
          <MessageCircle size={16} />
          WhatsApp Now
        </a>
        <a
          href={`tel:${PHONE}`}
          aria-label={`Call us at ${PHONE}`}
          className="flex items-center justify-center gap-2 bg-[#d4af37] text-[#0b0b0d] font-semibold text-sm py-3 px-5 rounded-lg hover:bg-[#f3cf58] transition-colors"
        >
          <Phone size={16} />
          Call
        </a>
      </div>
    </div>
  );
}
