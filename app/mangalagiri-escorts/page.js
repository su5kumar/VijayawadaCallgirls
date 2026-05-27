import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import RelatedAreas from '@/components/RelatedAreas';
import { SITE_URL, WHATSAPP_URL } from '@/lib/constants';
import { generateLocalBusinessSchema } from '@/lib/schema';

export const metadata = {
  title: 'Call Girls in Mangalagiri | Escorts Near Mangalagiri 24/7',
  description: 'Verified call girls in Mangalagiri with real photos & WhatsApp booking. Hotel visits, independent escorts & VIP companions between Vijayawada and Guntur.',
  keywords: ['call girls Mangalagiri', 'Mangalagiri call girls', 'escorts Mangalagiri', 'escorts near Mangalagiri', 'Mangalagiri escorts service'],
  alternates: { canonical: `${SITE_URL}/mangalagiri-escorts` },
  openGraph: {
    title: 'Call Girls in Mangalagiri | Escorts Near Mangalagiri',
    description: 'Verified call girls in Mangalagiri with real photos and hotel visit service.',
    url: `${SITE_URL}/mangalagiri-escorts`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Call Girls in Mangalagiri - Verified Escorts Service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Call Girls in Mangalagiri | Verified Escorts',
    description: 'Verified call girls in Mangalagiri. Hotel visits, real photos, WhatsApp booking.',
    images: ['/opengraph-image'],
  },
};

const mangalagiriFAQ = [
  {
    question: 'Are call girls available in Mangalagiri?',
    answer: 'Yes, verified call girls serve Mangalagiri town and surrounding areas. Located between Vijayawada and Guntur, companions from both cities reach Mangalagiri within 15-20 minutes.',
  },
  {
    question: 'Which hotels in Mangalagiri do you cover?',
    answer: 'We provide hotel visit service at all accommodations in Mangalagiri including highway hotels, business stays, and lodges along the Vijayawada-Guntur corridor.',
  },
  {
    question: 'What types of companions are available in Mangalagiri?',
    answer: 'Independent call girls, college companions, and high-profile escorts are all available. Choose based on your preference and we share verified photos via WhatsApp.',
  },
  {
    question: 'Is there any extra charge for Mangalagiri service?',
    answer: 'No extra travel charges for Mangalagiri as it falls within our Vijayawada-Guntur service zone. Standard rates apply with transparent billing.',
  },
  {
    question: 'How quickly can a companion reach Mangalagiri?',
    answer: 'Companions typically arrive within 15-25 minutes depending on their current location. Mangalagiri being centrally located between our two hubs ensures quick availability.',
  },
];

export default function MangalagiriEscorts() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mangalagiriFAQ.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  };

  const locationSchema = generateLocalBusinessSchema({
    name: 'Call Girls in Mangalagiri',
    street: 'Mangalagiri',
    url: `${SITE_URL}/mangalagiri-escorts`,
    postalCode: '522503',
    lat: 16.4330,
    lng: 80.5660,
  });

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Vijayawada Escorts', href: '/vijayawada-escorts' },
          { name: 'Mangalagiri Escorts' },
        ]} />
      </div>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Between Vijayawada & Guntur</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            Call Girls in Mangalagiri — Fast & Discreet
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Verified escorts in Mangalagiri with real photos and WhatsApp booking. Strategically located between Vijayawada and Guntur, our companions reach you within 15-20 minutes for hotel visits and private meetings.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#20bd5a] transition-colors"
          >
            Book in Mangalagiri — WhatsApp
          </a>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-10">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Escorts Service in Mangalagiri
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Mangalagiri, the historic temple town located strategically between Vijayawada and Guntur, has seen rapid growth as part of the Amaravati capital region. Our verified call girls in Mangalagiri serve professionals, travelers, and visitors seeking premium companionship in this growing corridor.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              The town&apos;s location on the Vijayawada-Guntur highway makes it an ideal meeting point, with companions from both cities able to reach Mangalagiri quickly. Whether you are staying at a highway hotel, visiting for work, or living in one of the new residential developments — verified call girls are available 24/7.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed">
              All companions serving Mangalagiri undergo the same strict verification as our <Link href="/vijayawada-call-girls" className="text-[#d4af37] hover:underline">Vijayawada call girls</Link> — real photos, identity checks, and quality assurance. You get the same premium experience regardless of location.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Service Coverage in Mangalagiri Area
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { area: 'Mangalagiri Town', desc: 'Temple area, main market zone' },
                { area: 'NH-65 Highway', desc: 'Hotels & lodges along Vijayawada-Guntur road' },
                { area: 'Nambur', desc: 'Adjacent residential area' },
                { area: 'Tadepalli', desc: 'Nearby township, quick access' },
                { area: 'Amaravati Zone', desc: 'Capital region, government area' },
                { area: 'Nearby IT Parks', desc: 'Professional district' },
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-4">
                  <h3 className="text-white font-semibold text-sm">{item.area}</h3>
                  <p className="text-[#a0a0b0] text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Advantages of Mangalagiri Location
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Mangalagiri&apos;s central position offers unique advantages for clients seeking escorts in the Andhra Pradesh capital region:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Fastest Arrival Times', desc: 'Midway between our two hubs means companions reach you in 15-20 minutes — faster than anywhere else.' },
                { title: 'Widest Selection', desc: 'Access companions from both Vijayawada and Guntur networks for maximum choice and availability.' },
                { title: 'Highway Privacy', desc: 'Numerous discrete highway accommodations perfect for private, no-questions-asked meetings.' },
                { title: 'No Extra Charges', desc: 'Mangalagiri falls within our core service zone. No travel surcharges or additional fees.' },
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
              Connected Service Areas
            </h2>
            <ul className="space-y-2 text-[#a0a0b0]">
              <li className="flex items-start gap-2"><span className="text-[#d4af37]">→</span> <Link href="/vijayawada-call-girls" className="hover:text-[#d4af37] transition-colors"><strong>Vijayawada</strong> — 20 min north, primary hub</Link></li>
              <li className="flex items-start gap-2"><span className="text-[#d4af37]">→</span> <Link href="/guntur-escorts" className="hover:text-[#d4af37] transition-colors"><strong>Guntur</strong> — 15 min south, full coverage</Link></li>
              <li className="flex items-start gap-2"><span className="text-[#d4af37]">→</span> <Link href="/amaravati-escorts" className="hover:text-[#d4af37] transition-colors"><strong>Amaravati</strong> — Adjacent capital region</Link></li>
              <li className="flex items-start gap-2"><span className="text-[#d4af37]">→</span> <Link href="/benz-circle-escorts" className="hover:text-[#d4af37] transition-colors"><strong>Benz Circle</strong> — Premium hotels, 20 min drive</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <WhatsAppCTA />

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-[#a0a0b0] text-center mb-10">Questions about escorts in Mangalagiri</p>
          <div className="space-y-4">
            {mangalagiriFAQ.map((item, idx) => (
              <details key={idx} className="group glass-card p-5 cursor-pointer">
                <summary className="text-white font-medium text-sm md:text-base flex items-center justify-between">
                  {item.question}
                  <span className="text-[#d4af37] group-open:rotate-45 transition-transform text-xl ml-4">+</span>
                </summary>
                <p className="text-[#a0a0b0] text-sm mt-3 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedAreas currentSlug="mangalagiri-escorts" />
      <InternalLinks />
    </div>
  );
}
