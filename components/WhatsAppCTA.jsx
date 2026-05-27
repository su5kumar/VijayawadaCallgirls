import { MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

export default function WhatsAppCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0d] via-[#12101a] to-[#0b0b0d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
        <div className="glass-card p-6 sm:p-10 md:p-14 border-[#d4af37]/15">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#25D366]/10 flex items-center justify-center">
            <MessageCircle size={30} className="text-[#25D366]" />
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-4">
            Instant WhatsApp Booking
          </h2>
          <p className="max-w-xl mx-auto text-[#a0a0b0] text-base mb-8 leading-relaxed">
            Connect instantly with our dedicated concierge via WhatsApp for fast, discreet booking confirmations. Available 24/7 for premium companionship in Vijayawada.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-8 py-4 text-sm"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
            <a href="/whatsapp-booking" className="btn-outline px-8 py-4 text-sm">
              WhatsApp Booking Details <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
