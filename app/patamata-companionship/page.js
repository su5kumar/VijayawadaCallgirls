import Breadcrumb from '@/components/Breadcrumb';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import RelatedAreas from '@/components/RelatedAreas';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Patamata Companionship | Premium Escorts Patamata Vijayawada',
  description: 'Premium companionship in Patamata, Vijayawada. Luxury escorts for residential zones, upscale communities, and private experiences in the Patamata area.',
  keywords: ['Patamata escorts', 'escorts near Patamata', 'call girls Patamata Vijayawada', 'companionship Patamata'],
  alternates: { canonical: `${SITE_URL}/patamata-companionship` },
  openGraph: {
    title: 'Patamata Companionship | Premium Escorts Vijayawada',
    description: 'Premium companionship in Patamata, Vijayawada.',
    url: `${SITE_URL}/patamata-companionship`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Patamata Companionship - Premium Escorts Vijayawada' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patamata Companionship | Premium Escorts Vijayawada',
    description: 'Premium companionship in Patamata, Vijayawada.',
    images: ['/opengraph-image'],
  },
};

export default function PatamataCompanionship() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Vijayawada Escorts', href: '/vijayawada-escorts' },
          { name: 'Patamata' },
        ]} />
      </div>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Patamata Area</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            Premium Companionship in Patamata
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto">
            Refined companionship experiences in Vijayawada&apos;s upscale residential area. Patamata&apos;s tranquil environment paired with our elegant companions creates the perfect setting for private luxury experiences.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-8">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Patamata — Upscale Private Experiences
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Patamata is known for its upscale residential communities, modern amenities, and peaceful atmosphere. This premium neighbourhood attracts professionals, executives, and discerning individuals who appreciate privacy and quality — making it an ideal location for our refined companionship services.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed">
              Our companions serving the Patamata area specialize in private, intimate experiences. Whether you prefer a quiet evening at your residence, a dinner at nearby premium restaurants, or a leisurely weekend outing, our escorts deliver warmth and sophistication.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Why Patamata Clients Choose Us
            </h2>
            <ul className="space-y-3">
              {[
                'Absolute privacy in residential settings',
                'Companions familiar with the upscale Patamata lifestyle',
                'Quick arrival times for the Patamata area',
                'Perfect for private at-home companionship',
                'Discreet coordination that respects your community',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#a0a0b0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <WhatsAppCTA />
      <RelatedAreas currentSlug="patamata-companionship" />
      <FAQ subtitle="Questions about companionship in Patamata" />
      <InternalLinks />
    </div>
  );
}
