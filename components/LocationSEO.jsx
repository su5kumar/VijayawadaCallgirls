import { MapPin } from 'lucide-react';
import Link from 'next/link';

const locations = [
  {
    name: 'Benz Circle',
    slug: 'benz-circle-escorts',
    description: 'Our busiest area — right in the middle of the best hotels and restaurants. Most evening bookings happen here.',
  },
  {
    name: 'MG Road',
    slug: 'mg-road-vijayawada',
    description: 'The commercial heartbeat of Vijayawada. Great for dinner dates, business events, or just a night out.',
  },
  {
    name: 'Governorpet',
    slug: 'governorpet-escorts',
    description: 'The old business district — quieter, more discreet. Popular with clients who prefer low-key arrangements.',
  },
  {
    name: 'Patamata',
    slug: 'patamata-companionship',
    description: 'Upscale residential area with nice hotels nearby. Good for longer bookings and relaxed evenings.',
  },
  {
    name: 'Railway Station',
    slug: 'railway-station-escorts-vijayawada',
    description: 'Just arrived by train? We coordinate companions within 30 minutes of the Junction. 24/7 availability here.',
  },
  {
    name: 'Gannavaram Airport',
    slug: 'gannavaram-escorts',
    description: 'Landing at the airport? Pre-book before you land and have someone ready by the time you check in.',
  },
];

export default function LocationSEO() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0c0c12] to-[#0b0b0d]" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Service Areas</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-4">
            We Cover All of Vijayawada
          </h2>
          <p className="max-w-2xl mx-auto text-[#a0a0b0] text-base">
            Wherever you are in the city, we&apos;re probably already nearby. Here&apos;s where most of our clients book from.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((loc, idx) => (
            <Link
              key={idx}
              href={`/${loc.slug}`}
              className="glass-card p-6 hover:border-[#d4af37]/25 transition-all duration-300 group block"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#d4af37]/10 flex items-center justify-center">
                  <MapPin size={16} className="text-[#d4af37]" />
                </div>
                <h3 className="text-white font-semibold group-hover:text-[#d4af37] transition-colors">{loc.name}</h3>
              </div>
              <p className="text-[#a0a0b0] text-sm leading-relaxed">{loc.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
