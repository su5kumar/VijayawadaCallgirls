import Breadcrumb from '@/components/Breadcrumb';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Luxury Companionship Vijayawada | Executive Lifestyle Experiences',
  description: 'Indulge in luxury companionship in Vijayawada. Refined partners for high-society events, premium travel, executive dining, and exclusive private experiences.',
  alternates: { canonical: `${SITE_URL}/luxury-companionship` },
  openGraph: {
    title: 'Luxury Companionship Vijayawada | Executive Lifestyle Experiences',
    description: 'Refined luxury companionship for executive lifestyles in Vijayawada.',
    url: `${SITE_URL}/luxury-companionship`,
    type: 'website',
  },
};

export default function LuxuryCompanionship() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Luxury Companionship' },
        ]} />
      </div>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Luxury Lifestyle</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            Luxury Companionship in Vijayawada
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto">
            Where sophistication meets exclusivity. Our luxury companionship service crafts bespoke experiences for those who appreciate the finer things in life.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-8">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Crafted for the Discerning
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Luxury companionship in Vijayawada transcends conventional escort services. We curate bespoke social experiences where every detail — from attire coordination to conversation topics — is thoughtfully arranged to complement your lifestyle and occasion.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed">
              Our luxury companions are cultural connoisseurs, articulate conversationalists, and naturally elegant individuals who enhance every setting they grace. They bring warmth, intelligence, and refined social energy to corporate dinners, art gallery openings, luxury travel, and intimate private evenings.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Luxury Experience Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: 'Five-Star Dining', desc: 'Elegant companions for Vijayawada\'s finest restaurants and private dining experiences.' },
                { title: 'Executive Travel', desc: 'Sophisticated travel partners for business trips, weekend getaways, and luxury vacations.' },
                { title: 'Social Events', desc: 'Charming plus-ones for weddings, galas, art exhibitions, and high-society gatherings.' },
                { title: 'Private Experiences', desc: 'Intimate, confidential companionship tailored to your personal preferences and schedule.' },
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-6">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-[#a0a0b0] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhatsAppCTA />
      <FAQ subtitle="Questions about luxury companionship services" />
      <InternalLinks />
    </div>
  );
}
