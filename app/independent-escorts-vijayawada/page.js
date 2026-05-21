import Breadcrumb from '@/components/Breadcrumb';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Independent Escorts Vijayawada | Genuine Self-Managed Companions',
  description: 'Meet genuine independent escorts in Vijayawada. Self-managed, professional companions offering authentic and personalized companionship experiences with direct communication.',
  alternates: { canonical: `${SITE_URL}/independent-escorts-vijayawada` },
  openGraph: {
    title: 'Independent Escorts Vijayawada | Genuine Self-Managed Companions',
    description: 'Genuine independent escorts offering personalized experiences in Vijayawada.',
    url: `${SITE_URL}/independent-escorts-vijayawada`,
    type: 'website',
  },
};

export default function IndependentEscorts() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Independent Escorts Vijayawada' },
        ]} />
      </div>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Independent & Authentic</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            Independent Escorts in Vijayawada
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto">
            Connect with genuine, self-managed independent escorts in Vijayawada who offer authentic experiences with personal attention, flexibility, and direct communication.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-8">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              The Independent Advantage
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Independent escorts in Vijayawada offer a uniquely personal experience. These self-managed professionals control their schedules, choose their clients, and deliver individualized attention that larger services cannot replicate.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed">
              Each independent companion on our platform has chosen to partner with us for verification and trust signals while maintaining complete autonomy over their services, scheduling, and client interactions.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Why Choose Independent Companions
            </h2>
            <ul className="space-y-3">
              {[
                'Direct personal communication without intermediaries',
                'Flexible scheduling that adapts to your needs',
                'Genuinely personalized experiences',
                'Authentic connections built on mutual respect',
                'Self-curated style and personality',
                'Deeper engagement and attentiveness',
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
      <FAQ subtitle="Questions about independent escorts in Vijayawada" />
      <InternalLinks />
    </div>
  );
}
