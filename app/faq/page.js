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
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'FAQ - Vijayawada Escorts' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Frequently Asked Questions',
    description: 'Common questions about premium escort service in Vijayawada.',
    images: ['/opengraph-image'],
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

      <section className="py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-[#a0a0b0] text-lg">Everything you need to know about our premium Vijayawada escort service</p>
        </div>
      </section>

      <FAQ
        title="Common Questions"
        subtitle=""
      />
      <WhatsAppCTA />
      <InternalLinks />
    </div>
  );
}
