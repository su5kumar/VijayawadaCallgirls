import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function InternalLinks({ title = 'Explore More', links }) {
  const defaultLinks = [
    { label: 'Vijayawada call girls', href: '/vijayawada-call-girls' },
    { label: 'Escort service Vijayawada', href: '/vijayawada-escorts' },
    { label: 'VIP & high profile call girls', href: '/vip-escorts-vijayawada' },
    { label: 'Independent call girls Vijayawada', href: '/independent-escorts-vijayawada' },
    { label: 'Hotel call girls Vijayawada', href: '/hotel-escort-service-vijayawada' },
    { label: 'Night call girls 24/7', href: '/24-7-escorts-vijayawada' },
    { label: 'Call girls photos & profiles', href: '/premium-models' },
    { label: 'WhatsApp number booking', href: '/whatsapp-booking' },
    { label: 'Benz Circle escorts', href: '/benz-circle-escorts' },
    { label: 'MG Road Vijayawada', href: '/mg-road-vijayawada' },
    { label: 'Governorpet escorts', href: '/governorpet-escorts' },
    { label: 'Patamata companionship', href: '/patamata-companionship' },
    { label: 'Railway Station area', href: '/railway-station-escorts-vijayawada' },
    { label: 'Gannavaram airport escorts', href: '/gannavaram-escorts' },
    { label: 'Call girls Guntur', href: '/guntur-escorts' },
    { label: 'Escorts Amaravati', href: '/amaravati-escorts' },
    { label: 'Mangalagiri call girls', href: '/mangalagiri-escorts' },
    { label: 'Luxury companionship', href: '/luxury-companionship' },
    { label: 'Blog & guides', href: '/blog' },
    { label: 'About us', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact us', href: '/contact' },
  ];

  const displayLinks = links || defaultLinks;

  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h3 className="text-white font-semibold text-lg mb-6 font-[family-name:var(--font-heading)]">{title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {displayLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#d4af37]/20 hover:bg-white/[0.04] transition-all duration-200 text-sm text-[#a0a0b0] hover:text-[#d4af37]"
            >
              <ArrowRight size={12} className="text-[#d4af37]" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
