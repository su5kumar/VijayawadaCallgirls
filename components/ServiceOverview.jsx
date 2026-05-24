import Link from 'next/link';
import { ArrowRight, Crown, Users, Building2, Clock } from 'lucide-react';

const services = [
  {
    icon: <Crown size={24} />,
    title: 'VIP Escorts',
    slug: 'vip-escorts-vijayawada',
    description: 'Exclusive elite companionship for high-net-worth individuals, corporate executives, and distinguished travelers seeking the finest.',
    keywords: 'VIP escorts Vijayawada, elite companions',
  },
  {
    icon: <Users size={24} />,
    title: 'Independent Escorts',
    slug: 'independent-escorts-vijayawada',
    description: 'Genuine, self-managed companions offering authentic personalized experiences with direct communication and flexibility.',
    keywords: 'independent escorts Vijayawada, verified escorts',
  },
  {
    icon: <Building2 size={24} />,
    title: 'Hotel Escort Service',
    slug: 'hotel-escort-service-vijayawada',
    description: 'Discreet hotel visit companionship at five-star hotels, business venues, and luxury resorts across Vijayawada.',
    keywords: 'hotel escort service Vijayawada, hotel visits',
  },
  {
    icon: <Clock size={24} />,
    title: '24/7 Availability',
    slug: '24-7-escorts-vijayawada',
    description: 'Round-the-clock premium companionship. Instant WhatsApp booking available any hour of day or night.',
    keywords: '24 hour escorts Vijayawada, night escorts',
  },
];

export default function ServiceOverview() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0e0e14] to-[#0b0b0d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.03)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Services</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-4">
            VIP Hospitality & Social Companion Services
          </h2>
          <p className="max-w-2xl mx-auto text-[#a0a0b0] text-base">
            From elite concierge experiences to independent companions and discreet hotel coordination — find the right social companionship for your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <Link
              key={idx}
              href={`/${service.slug}`}
              className="glass-card p-7 hover:border-[#d4af37]/30 transition-all duration-300 group block"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0 group-hover:bg-[#d4af37]/20 transition-colors">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#d4af37] transition-colors">{service.title}</h3>
                  <p className="text-[#a0a0b0] text-sm leading-relaxed mb-3">{service.description}</p>
                  <span className="text-[#d4af37] text-xs flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Explore Service <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
