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
  title: 'Vijayawada Escorts & Call Girls | Verified Companions 24/7',
  description: 'Vijayawada\'s most trusted escorts & call girls service. Verified companions, real photos, WhatsApp booking, hotel visits & 24/7 availability.',
  keywords: ['Vijayawada escorts', 'Vijayawada call girls', 'call girls in Vijayawada', 'Vijayawada escorts service', 'VIP call girls Vijayawada', 'Vijayawada call girls whatsapp number'],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Vijayawada Escorts & Call Girls | Verified Companions 24/7',
    description: 'Vijayawada\'s most trusted escorts & call girls service. Verified companions, real photos, WhatsApp booking, hotel visits 24/7.',
    url: SITE_URL,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Vijayawada Escorts - Premium VIP Companionship' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijayawada Escorts Service | Premium VIP Companionship',
    description: 'Premium companionship and VIP hospitality in Vijayawada. Discreet booking 24/7.',
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
      <div className="content-below-fold">
        <ServiceOverview />
      </div>
      <div className="content-below-fold">
        <ModelsGallery />
      </div>
      <div className="content-below-fold">
        <WhyChooseUs />
      </div>
      <div className="content-below-fold">
        <PremiumExperiences />
      </div>
      <div className="content-below-fold">
        <LocationSEO />
      </div>
      <div className="content-below-fold">
        <SemanticContent />
      </div>
      <div className="content-below-fold">
        <Testimonials />
      </div>
      <div className="content-below-fold">
        <WhatsAppCTA />
      </div>
      <div className="content-below-fold">
        <FAQ />
      </div>
      <div className="content-below-fold">
        <InternalLinks />
      </div>
    </>
  );
}
