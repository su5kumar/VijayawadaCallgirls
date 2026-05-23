import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import InternalLinks from '@/components/InternalLinks';
import { SITE_URL, FAQ_ITEMS } from '@/lib/constants';

export const metadata = {
  title: 'FAQ | Frequently Asked Questions About Our Service',
  description: 'Find answers to common questions about our premium escort service in Vijayawada. Booking process, privacy, locations, availability, and more.',
  keywords: ['FAQ escorts Vijayawada', 'escort booking questions', 'how to book escort Vijayawada', 'escort service FAQ'],
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: 'FAQ | Frequently Asked Questions',
    description: 'Common questions about premium escort service in Vijayawada.',
    url: `${SITE_URL}/faq`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Frequently Asked Questions',
    description: 'Common questions about premium escort service in Vijayawada.',
  },
};

export default function FAQPage() {
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
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'FAQ' },
        ]} />
      </div>

      <FAQ
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our premium Vijayawada escort service"
      />
      <WhatsAppCTA />
      <InternalLinks />
    </div>
  );
}
