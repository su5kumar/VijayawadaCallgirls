import Breadcrumb from '@/components/Breadcrumb';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Escorts Near Governorpet Vijayawada | Discreet Premium Service',
  description: 'Discreet premium escorts near Governorpet, Vijayawada. Elegant companions for business meetings, evening dinners, and private experiences in Governorpet area.',
  keywords: ['Governorpet escorts', 'escorts near Governorpet', 'call girls Governorpet Vijayawada'],
  alternates: { canonical: `${SITE_URL}/governorpet-escorts` },
  openGraph: {
    title: 'Escorts Near Governorpet Vijayawada',
    description: 'Discreet premium escorts near Governorpet, Vijayawada.',
    url: `${SITE_URL}/governorpet-escorts`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escorts Near Governorpet Vijayawada',
    description: 'Discreet premium escorts near Governorpet, Vijayawada.',
  },
};

export default function GovernorpetEscorts() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Vijayawada Escorts', href: '/vijayawada-escorts' },
          { name: 'Governorpet' },
        ]} />
      </div>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Governorpet Area</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            Escorts Near Governorpet, Vijayawada
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto">
            Premium escort service in Governorpet — Vijayawada&apos;s historic business center. Discreet, professional, and tailored to the executive clientele of this distinguished area.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-8">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Governorpet — Executive Companionship Hub
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Governorpet is the traditional business heart of Vijayawada, combining heritage architecture with modern commercial activity. Our escorts near Governorpet understand the professional atmosphere of this area and deliver companionship that complements the executive environment perfectly.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed">
              From after-hours business dinners to weekend social engagements, our Governorpet companions bring sophistication, warmth, and impeccable discretion to every interaction.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Service Highlights for Governorpet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Business District Ready', desc: 'Companions versed in corporate etiquette for professional settings.' },
                { title: 'Swift Arrival', desc: 'Prompt service for time-sensitive meetings and engagements.' },
                { title: 'Absolute Discretion', desc: 'Complete confidentiality in this close-knit business community.' },
                { title: 'Versatile Companions', desc: 'Adapt to formal dinners, casual outings, or private experiences.' },
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-5">
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-[#a0a0b0] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhatsAppCTA />
      <FAQ subtitle="Questions about escorts near Governorpet" />
      <InternalLinks />
    </div>
  );
}
