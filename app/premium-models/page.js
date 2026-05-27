import Breadcrumb from '@/components/Breadcrumb';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import ProfileShowcase from '@/components/ProfileShowcase';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Vijayawada Call Girls Photos | Real & Verified',
  description: 'View real Vijayawada call girls photos — verified college girls & model companions with genuine pictures. WhatsApp for live photos & instant booking.',
  keywords: ['Vijayawada call girls photo', 'call girls photos Vijayawada', 'real photos call girls', 'college call girls Vijayawada', 'model companions Vijayawada', 'Vijayawada call girls real'],
  alternates: { canonical: `${SITE_URL}/premium-models` },
  openGraph: {
    title: 'Vijayawada Call Girls Photos | Real & Verified',
    description: 'Real Vijayawada call girls photos — verified college girls and model companions.',
    url: `${SITE_URL}/premium-models`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Vijayawada Call Girls Real Photos' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijayawada Call Girls Photo | Real & Verified',
    description: 'Real Vijayawada call girls photos — verified college girls and model companions.',
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
            Vijayawada Call Girls Photos — Real & Verified
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto">
            Browse real Vijayawada call girls photos with verified college companions and professional models. Every photo is genuine, recently taken, and identity-verified through video calls before publishing.
          </p>
        </div>
      </section>

      <ProfileShowcase />

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-8">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Real Call Girls Photos in Vijayawada
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Every Vijayawada call girls photo on our platform goes through a strict verification process. We confirm identity via video call, take recent photos in controlled settings, and update galleries regularly. What you see is exactly who you meet — no catfishing, no old pictures, no filters.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed">
              Our collection includes college call girls, independent companions, and professional models available for hotel visits and private meetings. Request live photos on WhatsApp anytime for additional verification before booking.
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
