import Link from 'next/link';
import { Home, ArrowRight, Search } from 'lucide-react';

export const metadata = {
  title: '404 - Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-2xl mx-auto px-5 md:px-8 text-center py-20">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-[120px] md:text-[160px] font-bold font-[family-name:var(--font-heading)] gold-gradient-text leading-none opacity-80">
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
          This Page Doesn&apos;t Exist
        </h1>
        <p className="text-[#a0a0b0] text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto">
          Looks like you followed a broken link or typed the wrong URL. No worries — here are some places you might want to go instead.
        </p>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/" className="btn-gold px-8 py-4 text-sm inline-flex items-center gap-2">
            <Home size={16} /> Back to Homepage
          </Link>
          <Link href="/vijayawada-escorts" className="btn-outline px-8 py-4 text-sm inline-flex items-center gap-2">
            Browse Services <ArrowRight size={16} />
          </Link>
        </div>

        {/* Quick Links */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-xs text-[#a0a0b0] uppercase tracking-wider mb-4">Popular Pages</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/vip-escorts-vijayawada" className="text-sm text-[#a0a0b0] hover:text-[#d4af37] transition-colors px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
              VIP Escorts
            </Link>
            <Link href="/independent-escorts-vijayawada" className="text-sm text-[#a0a0b0] hover:text-[#d4af37] transition-colors px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
              Independent
            </Link>
            <Link href="/hotel-escort-service-vijayawada" className="text-sm text-[#a0a0b0] hover:text-[#d4af37] transition-colors px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
              Hotel Service
            </Link>
            <Link href="/blog" className="text-sm text-[#a0a0b0] hover:text-[#d4af37] transition-colors px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
              Blog
            </Link>
            <Link href="/contact" className="text-sm text-[#a0a0b0] hover:text-[#d4af37] transition-colors px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
