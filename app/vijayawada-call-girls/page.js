import Breadcrumb from '@/components/Breadcrumb';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Vijayawada Call Girls | Verified Premium Companions',
  description: 'Connect with verified Vijayawada call girls for premium companionship experiences. Professional, discreet, and elegant service with instant WhatsApp booking available 24/7.',
  keywords: ['Vijayawada call girls', 'call girls in Vijayawada', 'call girl Vijayawada', 'verified call girls', 'premium companions Vijayawada'],
  alternates: { canonical: `${SITE_URL}/vijayawada-call-girls` },
  openGraph: {
    title: 'Vijayawada Call Girls | Verified Premium Companions',
    description: 'Connect with verified call girls in Vijayawada for premium companionship.',
    url: `${SITE_URL}/vijayawada-call-girls`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijayawada Call Girls | Verified Premium Companions',
    description: 'Connect with verified call girls in Vijayawada for premium companionship.',
  },
};

export default function VijayawadaCallGirls() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Vijayawada Call Girls' },
        ]} />
      </div>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Verified Companions</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            Vijayawada Call Girls — Verified & Premium
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto">
            Find the most trusted and verified call girls in Vijayawada. Every companion is personally vetted for professionalism, elegance, and social sophistication to deliver exceptional experiences.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-8">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Trusted Call Girls Service in Vijayawada
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              When searching for call girls in Vijayawada, trust and verification matter most. Our platform maintains the highest standards of companion verification, ensuring every profile represents a genuine, professional, and sophisticated individual ready to provide premium social companionship.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed">
              Unlike generic services, our Vijayawada call girls are selected for their education, communication skills, elegance, and ability to navigate diverse social settings with confidence. From intimate dinners to corporate gatherings, our companions adapt seamlessly.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              How Our Verification Process Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Identity Verification', desc: 'Every companion undergoes thorough identity checks for your complete peace of mind.' },
                { title: 'Profile Authenticity', desc: 'All photos and descriptions are verified to ensure genuine representation.' },
                { title: 'Social Etiquette Check', desc: 'Companions are evaluated on communication skills and social grace.' },
                { title: 'Ongoing Quality Assurance', desc: 'Regular feedback reviews maintain our premium service standards.' },
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-5">
                  <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-[#a0a0b0] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Available Across Vijayawada
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed">
              Our verified call girls in Vijayawada serve all major areas — Benz Circle, MG Road, Governorpet, Patamata, near hotels, and the railway station area. Fast WhatsApp booking ensures you connect with the right companion within minutes.
            </p>
          </div>
        </div>
      </section>

      <WhatsAppCTA />
      <FAQ subtitle="Common questions about call girls in Vijayawada" />
      <InternalLinks />
    </div>
  );
}
