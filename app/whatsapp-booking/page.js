import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import { SITE_URL, WHATSAPP_URL } from '@/lib/constants';
import { MessageCircle, Clock, Shield, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'WhatsApp Booking | Instant Escort Booking Vijayawada',
  description: 'Book premium escorts in Vijayawada instantly via WhatsApp. Fast, secure, and confidential booking process with dedicated concierge support available 24/7.',
  keywords: ['WhatsApp booking escort Vijayawada', 'book escort Vijayawada', 'instant booking escorts', 'escort booking online Vijayawada'],
  alternates: { canonical: `${SITE_URL}/whatsapp-booking` },
  openGraph: {
    title: 'WhatsApp Booking | Instant Escort Booking Vijayawada',
    description: 'Instant WhatsApp booking for premium escorts in Vijayawada.',
    url: `${SITE_URL}/whatsapp-booking`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'WhatsApp Booking - Instant Escort Booking Vijayawada' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Booking | Instant Escort Booking Vijayawada',
    description: 'Instant WhatsApp booking for premium escorts in Vijayawada.',
    images: ['/opengraph-image'],
  },
};

export default function WhatsAppBooking() {
  const steps = [
    { icon: <MessageCircle size={24} />, title: 'Send a Message', desc: 'Click our WhatsApp button and send a simple greeting to start the conversation.' },
    { icon: <CheckCircle size={24} />, title: 'Share Preferences', desc: 'Tell our concierge your occasion type, preferred companion style, and schedule.' },
    { icon: <Shield size={24} />, title: 'Get Matched', desc: 'Receive curated profile recommendations based on your preferences and requirements.' },
    { icon: <Clock size={24} />, title: 'Confirm & Enjoy', desc: 'Confirm your booking and enjoy a seamless, premium companionship experience.' },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'WhatsApp Booking' },
        ]} />
      </div>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Instant Booking</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            WhatsApp Booking — Fast & Secure
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Book your premium companion in Vijayawada within minutes. Our WhatsApp concierge provides instant responses, personalized recommendations, and secure confirmation — all through a channel you trust.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold px-8 py-4 text-sm">
            <MessageCircle size={16} /> Start WhatsApp Chat
          </a>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {steps.map((step, idx) => (
              <div key={idx} className="glass-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                  {step.icon}
                </div>
                <div>
                  <span className="text-[#d4af37] text-xs font-semibold">Step {idx + 1}</span>
                  <h3 className="text-white font-semibold mt-1 mb-1">{step.title}</h3>
                  <p className="text-[#a0a0b0] text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
            Why WhatsApp for Booking?
          </h2>
          <p className="text-[#a0a0b0] leading-relaxed mb-6">
            WhatsApp provides end-to-end encryption, ensuring all your conversations remain completely private. It&apos;s the fastest, most secure, and most convenient way to connect with our premium escort service in Vijayawada.
          </p>
          <ul className="space-y-3">
            {[
              'End-to-end encrypted conversations',
              'Instant response within minutes',
              'Photo verification of profiles',
              'No app downloads required',
              'Available 24/7 without interruption',
              'Direct concierge communication',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[#a0a0b0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQ subtitle="Questions about our WhatsApp booking process" />
      <InternalLinks />
    </div>
  );
}
