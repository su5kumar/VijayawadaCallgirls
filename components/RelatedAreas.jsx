import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { LOCATIONS } from '@/lib/constants';

export default function RelatedAreas({ currentSlug }) {
  const related = LOCATIONS.filter((loc) => loc.slug !== currentSlug);

  return (
    <section className="py-14 md:py-18">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold text-white mb-6">
          Also Available Nearby
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {related.map((loc) => (
            <Link
              key={loc.slug}
              href={`/${loc.slug}`}
              className="flex items-center gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#d4af37]/25 transition-all group"
            >
              <MapPin size={16} className="text-[#d4af37] shrink-0" />
              <span className="text-sm text-[#a0a0b0] group-hover:text-white transition-colors">{loc.name}</span>
              <ArrowRight size={12} className="ml-auto text-[#a0a0b0] group-hover:text-[#d4af37] transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
