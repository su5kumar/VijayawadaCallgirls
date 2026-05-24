import Breadcrumb from '@/components/Breadcrumb';
import PremiumExperiences from '@/components/PremiumExperiences';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'VIP Escorts Vijayawada | Exclusive Elite Companionship',
  description: 'Exclusive VIP escorts in Vijayawada. Ultra-premium companionship for executives and distinguished travelers seeking the finest.',
  keywords: ['VIP escorts Vijayawada', 'elite escorts Vijayawada', 'premium VIP companionship', 'luxury escorts Vijayawada'],
  alternates: { canonical: `${SITE_URL}/vip-escorts-vijayawada` },
  openGraph: {
    title: 'VIP Escorts Vijayawada | Exclusive Elite Companionship',
    description: 'Exclusive VIP escorts for distinguished individuals in Vijayawada.',
    url: `${SITE_URL}/vip-escorts-vijayawada`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'VIP Escorts Vijayawada - Exclusive Elite Companionship' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIP Escorts Vijayawada | Exclusive Elite Companionship',
    description: 'Exclusive VIP escorts for distinguished individuals in Vijayawada.',
    images: ['/opengraph-image'],
  },
};

export default function VIPEscorts() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'VIP Escorts Vijayawada' },
        ]} />
      </div>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.05)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Exclusive VIP Service</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            VIP Escorts Vijayawada — Exclusive & Elite
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto">
            Reserved for those who demand nothing but the finest. Our VIP escorts in Vijayawada represent the pinnacle of luxury companionship — intelligent, glamorous, and impeccably presented.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-8">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              The VIP Difference
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Our VIP escorts in Vijayawada are handpicked from an exclusive roster of exceptional individuals. These companions possess advanced degrees, multilingual abilities, extensive travel experience, and the social acumen required for the most distinguished occasions.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed">
              From black-tie corporate events at Vijayawada&apos;s finest venues to private yacht-style experiences and executive travel companionship, VIP escorts deliver a transformative experience that transcends ordinary social interaction.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              VIP Membership Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Priority booking and instant confirmations',
                'Access to elite-tier companion profiles',
                'Dedicated personal concierge service',
                'Extended engagement options',
                'Multi-city companion coordination',
                'Bespoke experience planning',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 glass-card">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] shrink-0" />
                  <span className="text-[#a0a0b0] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PremiumExperiences />
      <WhatsAppCTA />
      <FAQ subtitle="Questions about our VIP escort service in Vijayawada" />
      <InternalLinks />
    </div>
  );
}
