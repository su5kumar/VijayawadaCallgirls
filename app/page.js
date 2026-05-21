import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import PremiumExperiences from '@/components/PremiumExperiences';
import LocationSEO from '@/components/LocationSEO';
import Testimonials from '@/components/Testimonials';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import { FAQ_ITEMS, SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Luxury Vijayawada Escorts Service | Premium VIP Companionship',
  description: 'Discover premium companionship experiences in Vijayawada with discreet booking, VIP hospitality, elegant lifestyle experiences, and confidential WhatsApp support available 24/7.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Luxury Vijayawada Escorts Service | Premium VIP Companionship',
    description: 'Discover premium companionship experiences in Vijayawada with discreet booking, VIP hospitality, and confidential WhatsApp support available 24/7.',
    url: SITE_URL,
    type: 'website',
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <WhyChooseUs />
      <PremiumExperiences />
      <LocationSEO />
      <Testimonials />
      <WhatsAppCTA />
      <FAQ />
      <InternalLinks />
    </>
  );
}
