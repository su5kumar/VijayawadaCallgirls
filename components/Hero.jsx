import { Crown, Shield, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { WHATSAPP_URL } from '@/lib/constants';

const MotionReveal = dynamic(() => import('@/components/MotionReveal'), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05)_0%,transparent_60%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] animate-float" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-32 text-center">
        {/* Badge */}
        <MotionReveal delay={0.05} y={14}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 mb-8 shadow-[0_0_40px_rgba(212,175,55,0.08)]">
            <Crown size={14} className="text-[#d4af37]" />
            <span className="text-xs font-medium tracking-wider text-[#d4af37] uppercase">Premium Luxury Companionship</span>
          </div>
        </MotionReveal>

        {/* H1 */}
        <MotionReveal delay={0.14} y={28}>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Vijayawada Escorts Service
          </h1>
        </MotionReveal>

        {/* Subtitle — no animation wrapper to avoid LCP render delay */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#a0a0b0] leading-relaxed mb-10">
          Vijayawada&apos;s most trusted escort service. Verified companions, instant WhatsApp booking, and complete privacy — whether you&apos;re here on business or just want a great evening with someone worth your time.
        </p>

        {/* CTAs */}
        <MotionReveal delay={0.32} y={18}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold px-8 py-4 text-sm">
              <Sparkles size={16} /> WhatsApp Booking
            </a>
            <Link href="/vip-escorts-vijayawada" className="btn-outline px-8 py-4 text-sm">
              VIP Experiences <ArrowRight size={16} />
            </Link>
          </div>
        </MotionReveal>

        {/* Trust Badges */}
        <MotionReveal delay={0.41} y={14}>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/5">
              <Shield size={14} className="text-[#d4af37]" />
              <span className="text-xs text-[#a0a0b0]">Discreet & Confidential</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/5">
              <Crown size={14} className="text-[#d4af37]" />
              <span className="text-xs text-[#a0a0b0]">Verified Companions</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/5">
              <Sparkles size={14} className="text-[#d4af37]" />
              <span className="text-xs text-[#a0a0b0]">24/7 Availability</span>
            </div>
          </div>
        </MotionReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-[#d4af37] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
