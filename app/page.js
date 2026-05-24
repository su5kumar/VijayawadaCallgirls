import Hero from '@/components/Hero';
import ServiceOverview from '@/components/ServiceOverview';
import ModelsGallery from '@/components/ModelsGallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import PremiumExperiences from '@/components/PremiumExperiences';
import LocationSEO from '@/components/LocationSEO';
import SemanticContent from '@/components/SemanticContent';
import Testimonials from '@/components/Testimonials';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import { FAQ_ITEMS, SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Vijayawada Escorts Service | Luxury VIP Companionship',
  description: 'Premium Vijayawada escorts with verified companions, luxury VIP hospitality, and discreet WhatsApp booking available 24/7.',
  keywords: ['Vijayawada escorts', 'call girls Vijayawada', 'escort service Vijayawada', 'VIP escorts', 'premium companionship Vijayawada', 'luxury escorts Vijayawada'],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Vijayawada Escorts Service | Luxury VIP Companionship',
    description: 'Premium Vijayawada escorts with verified companions, luxury VIP hospitality, and discreet WhatsApp booking available 24/7.',
    url: SITE_URL,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Vijayawada Escorts - Premium VIP Companionship' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijayawada Escorts Service | Luxury VIP Companionship',
    description: 'Premium Vijayawada escorts with verified companions and discreet booking 24/7.',
    images: ['/opengraph-image'],
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
      <ServiceOverview />
      <ModelsGallery />
      <WhyChooseUs />
      <PremiumExperiences />
      <LocationSEO />
      <SemanticContent />
      <Testimonials />
      <WhatsAppCTA />
      <FAQ />
      <InternalLinks />
    </>
  );
}
