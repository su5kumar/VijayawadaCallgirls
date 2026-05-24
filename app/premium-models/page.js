import Breadcrumb from '@/components/Breadcrumb';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import ProfileShowcase from '@/components/ProfileShowcase';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Premium Models Vijayawada | Elite Model Companions',
  description: 'Connect with premium model companions in Vijayawada. Professional models offering sophisticated companionship for high-profile events, photoshoots, and executive gatherings.',
  keywords: ['premium models Vijayawada', 'model escorts Vijayawada', 'elite model companions', 'professional model companionship Vijayawada'],
  alternates: { canonical: `${SITE_URL}/premium-models` },
  openGraph: {
    title: 'Premium Models Vijayawada | Elite Model Companions',
    description: 'Elite model companions for high-profile events in Vijayawada.',
    url: `${SITE_URL}/premium-models`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Premium Models Vijayawada' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Models Vijayawada | Elite Model Companions',
    description: 'Elite model companions for high-profile events in Vijayawada.',
    images: ['/opengraph-image'],
  },
};

export default function PremiumModels() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Premium Models' },
        ]} />
      </div>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Elite Models</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            Premium Models in Vijayawada
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto">
            Access our exclusive roster of professional model companions. Stunning, articulate, and polished — perfect for high-visibility occasions that demand extraordinary presence.
          </p>
        </div>
      </section>

      <ProfileShowcase />

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-8">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Professional Model Companionship
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Our premium models in Vijayawada represent the intersection of beauty, intelligence, and professional grace. These are individuals with modeling experience, media exposure, and the natural charisma that commands attention at any gathering.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed">
              Whether you need a striking companion for a product launch, a sophisticated partner for an awards ceremony, or an elegant presence at a private celebration — our model companions deliver unforgettable impressions.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Ideal Occasions for Model Companions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Corporate Events', desc: 'Product launches, galas, and executive networking.' },
                { title: 'Social Gatherings', desc: 'Art exhibitions, fashion events, and private parties.' },
                { title: 'Travel & Leisure', desc: 'Luxury vacations, weekend escapes, and resort stays.' },
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-5 text-center">
                  <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-[#a0a0b0] text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhatsAppCTA />
      <FAQ subtitle="Questions about premium model companions" />
      <InternalLinks />
    </div>
  );
}
