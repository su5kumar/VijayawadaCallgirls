import Breadcrumb from '@/components/Breadcrumb';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import RelatedAreas from '@/components/RelatedAreas';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Escorts Near MG Road Vijayawada | Premium Companions',
  description: 'Premium escorts near MG Road, Vijayawada. Luxury companionship for entertainment districts, shopping areas, and nightlife venues along MG Road.',
  keywords: ['MG Road escorts Vijayawada', 'escorts near MG Road', 'call girls MG Road Vijayawada'],
  alternates: { canonical: `${SITE_URL}/mg-road-vijayawada` },
  openGraph: {
    title: 'Escorts Near MG Road Vijayawada',
    description: 'Premium escorts near MG Road, Vijayawada.',
    url: `${SITE_URL}/mg-road-vijayawada`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Escorts Near MG Road Vijayawada' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escorts Near MG Road Vijayawada',
    description: 'Premium escorts near MG Road, Vijayawada.',
    images: ['/opengraph-image'],
  },
};

export default function MGRoadEscorts() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Vijayawada Escorts', href: '/vijayawada-escorts' },
          { name: 'MG Road' },
        ]} />
      </div>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">MG Road Area</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            Escorts Near MG Road, Vijayawada
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto">
            Experience premium companionship along Vijayawada&apos;s vibrant MG Road. From entertainment venues to luxury dining, our companions enhance every moment in this dynamic corridor.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-8">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              MG Road — Vijayawada&apos;s Lifestyle Hub
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              MG Road is Vijayawada&apos;s premier entertainment and lifestyle corridor. With its concentration of restaurants, entertainment venues, shopping centers, and hotels, it represents the ideal setting for our premium escort service.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed">
              Our MG Road escorts are familiar with the best venues, can recommend outstanding dining experiences, and blend seamlessly into the vibrant social atmosphere of this iconic Vijayawada destination.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Perfect for Every Occasion
            </h2>
            <ul className="space-y-2">
              {[
                'Dinner dates at premium MG Road restaurants',
                'Evening entertainment and nightlife experiences',
                'Shopping companion for luxury retail therapy',
                'Hotel companionship at MG Road properties',
                'Weekend leisure and social outings',
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
      <RelatedAreas currentSlug="mg-road-vijayawada" />
      <FAQ subtitle="Questions about escorts near MG Road, Vijayawada" />
      <InternalLinks />
    </div>
  );
}
