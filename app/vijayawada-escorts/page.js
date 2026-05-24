import Breadcrumb from '@/components/Breadcrumb';
import WhyChooseUs from '@/components/WhyChooseUs';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import { SITE_URL, FAQ_ITEMS } from '@/lib/constants';

export const metadata = {
  title: 'Vijayawada Escorts | Elite Companionship & Discreet Service',
  description: 'Elite Vijayawada escorts with verified companions, luxury hospitality, and confidential WhatsApp booking. Available 24/7.',
  keywords: ['Vijayawada escorts', 'escorts in Vijayawada', 'escort service Vijayawada', 'premium escorts Vijayawada', 'Vijayawada companionship'],
  alternates: { canonical: `${SITE_URL}/vijayawada-escorts` },
  openGraph: {
    title: 'Vijayawada Escorts | Elite Companionship & Discreet Service',
    description: 'Experience elite Vijayawada escorts with verified companions and luxury hospitality.',
    url: `${SITE_URL}/vijayawada-escorts`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijayawada Escorts | Elite Companionship & Discreet Service',
    description: 'Experience elite Vijayawada escorts with verified companions and luxury hospitality.',
  },
};

export default function VijayawadaEscorts() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.slice(0, 5).map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  };

  return (
    <div className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Vijayawada Escorts' },
        ]} />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Premium Escort Service</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            Vijayawada Escorts — Premium Companionship Redefined
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto">
            Discover the finest escort service in Vijayawada. Our curated selection of elegant, educated, and sophisticated companions deliver unmatched experiences for corporate events, social gatherings, fine dining, and private engagements.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
                Why Vijayawada Escorts Service is Your Best Choice
              </h2>
              <p className="text-[#a0a0b0] leading-relaxed mb-4">
                In the vibrant city of Vijayawada, finding genuine premium companionship requires a trusted platform that prioritizes quality, discretion, and professionalism. Our Vijayawada escorts service stands apart by offering meticulously vetted companions who combine beauty with intellect, social grace, and impeccable etiquette.
              </p>
              <p className="text-[#a0a0b0] leading-relaxed">
                Whether you are a business executive seeking a sophisticated partner for a corporate gala, a tourist wanting an articulate local guide, or a professional seeking refined social companionship — our escort service in Vijayawada delivers tailored experiences that exceed expectations.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
                Premium Experiences We Offer
              </h2>
              <ul className="space-y-3">
                {[
                  'Corporate dinner and business event companionship',
                  'Fine dining and luxury restaurant partners',
                  'Travel and leisure companions for city exploration',
                  'VIP nightlife and exclusive social gathering escorts',
                  'Private and confidential personal companionship',
                  'Executive hotel and resort companionship',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#a0a0b0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
                Serving All Premium Locations
              </h2>
              <p className="text-[#a0a0b0] leading-relaxed">
                Our Vijayawada escorts are available across all premium areas including Benz Circle, MG Road, Governorpet, Patamata, near the railway station, and all major hotel zones. With rapid WhatsApp coordination, we ensure seamless service delivery regardless of your location in the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <WhatsAppCTA />
      <FAQ subtitle="Common questions about our Vijayawada escorts service" />
      <InternalLinks />
    </div>
  );
}
