import Breadcrumb from '@/components/Breadcrumb';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import RelatedAreas from '@/components/RelatedAreas';
import { SITE_URL } from '@/lib/constants';
import { generateLocalBusinessSchema } from '@/lib/schema';

export const metadata = {
  title: 'Escorts Near Benz Circle Vijayawada | Premium Local Service',
  description: 'Find premium escorts near Benz Circle, Vijayawada. Luxury companionship available at top hotels, restaurants, and business venues around Benz Circle area.',
  keywords: ['escorts near Benz Circle', 'Benz Circle escorts Vijayawada', 'call girls Benz Circle', 'companionship Benz Circle'],
  alternates: { canonical: `${SITE_URL}/benz-circle-escorts` },
  openGraph: {
    title: 'Escorts Near Benz Circle Vijayawada',
    description: 'Premium escorts service near Benz Circle, Vijayawada.',
    url: `${SITE_URL}/benz-circle-escorts`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Escorts Near Benz Circle Vijayawada' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escorts Near Benz Circle Vijayawada',
    description: 'Premium escorts service near Benz Circle, Vijayawada.',
    images: ['/opengraph-image'],
  },
};

export default function BenzCircleEscorts() {
  const locationSchema = generateLocalBusinessSchema({
    name: 'Escorts Near Benz Circle, Vijayawada',
    street: 'Benz Circle, Ring Road',
    url: `${SITE_URL}/benz-circle-escorts`,
    lat: 16.5114,
    lng: 80.6348,
  });

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Vijayawada Escorts', href: '/vijayawada-escorts' },
          { name: 'Benz Circle' },
        ]} />
      </div>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Benz Circle Area</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            Escorts Near Benz Circle, Vijayawada
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto">
            Premium companionship in Vijayawada&apos;s most prestigious commercial district. Benz Circle is home to luxury hotels, fine dining restaurants, and corporate offices — the perfect setting for our elegant companions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-8">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Premium Service at Benz Circle
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Benz Circle represents the pinnacle of Vijayawada&apos;s commercial and hospitality landscape. With premium hotels, upscale restaurants, and corporate offices concentrated in this area, our escorts near Benz Circle are perfectly positioned to deliver seamless luxury companionship.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed">
              Whether you&apos;re staying at one of the area&apos;s five-star hotels, hosting a business dinner, or seeking refined evening companionship, our Benz Circle escorts offer prompt arrival, impeccable presentation, and professional discretion.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Nearby Venues We Serve
            </h2>
            <ul className="space-y-2">
              {[
                'Luxury hotels and resorts near Ring Road',
                'Fine dining restaurants along Benz Circle',
                'Corporate offices and conference centers',
                'Premium shopping and entertainment areas',
                'Executive lounges and private clubs',
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
      <RelatedAreas currentSlug="benz-circle-escorts" />
      <FAQ subtitle="Questions about escorts near Benz Circle" />
      <InternalLinks />
    </div>
  );
}
