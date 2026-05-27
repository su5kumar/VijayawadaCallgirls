import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import RelatedAreas from '@/components/RelatedAreas';
import { SITE_URL, WHATSAPP_URL } from '@/lib/constants';
import { generateLocalBusinessSchema } from '@/lib/schema';

export const metadata = {
  title: 'Call Girls Amaravati | Escorts AP Capital Region',
  description: 'Verified call girls in Amaravati, AP capital region. Real photos, WhatsApp booking, hotel visits. Independent & VIP escorts near Amaravati 24/7.',
  keywords: ['call girls Amaravati', 'Amaravati call girls', 'escorts Amaravati', 'escorts near Amaravati', 'call girls AP capital', 'Amaravati escorts service'],
  alternates: { canonical: `${SITE_URL}/amaravati-escorts` },
  openGraph: {
    title: 'Call Girls in Amaravati | Escorts Near AP Capital Region',
    description: 'Verified call girls in Amaravati with real photos and instant WhatsApp booking.',
    url: `${SITE_URL}/amaravati-escorts`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Call Girls in Amaravati - AP Capital Region Escorts' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Call Girls in Amaravati | AP Capital Region',
    description: 'Verified call girls in Amaravati with real photos and hotel visit service.',
    images: ['/opengraph-image'],
  },
};

const amaravatiFAQ = [
  {
    question: 'Are call girls available in Amaravati area?',
    answer: 'Yes, verified call girls serve the entire Amaravati capital region including Thullur, Mangalagiri, and surrounding areas. Our companions from Vijayawada reach Amaravati within 20-30 minutes.',
  },
  {
    question: 'Which areas near Amaravati do you cover?',
    answer: 'We cover all areas in the Amaravati region — Thullur, Undavalli, Tadepalli, Mangalagiri, and all government/residential zones. Hotel visits available at accommodations across the capital region.',
  },
  {
    question: 'How far is the service from Vijayawada to Amaravati?',
    answer: 'Amaravati is just 20-25 minutes from Vijayawada city center. Our companions travel seamlessly between both locations with no extra travel charges within the capital region.',
  },
  {
    question: 'Is the Amaravati escort service discreet?',
    answer: 'Absolutely. Given the government and professional nature of the capital region, our service maintains the highest discretion standards. All communication is encrypted and no records are maintained.',
  },
  {
    question: 'Can I book for government guest houses in Amaravati?',
    answer: 'We provide companion services to private hotels and accommodations in the Amaravati region. Contact us on WhatsApp to discuss your specific location and we will confirm availability.',
  },
];

export default function AmaravatiEscorts() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": amaravatiFAQ.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  };

  const locationSchema = generateLocalBusinessSchema({
    name: 'Call Girls in Amaravati',
    street: 'Amaravati, AP Capital Region',
    url: `${SITE_URL}/amaravati-escorts`,
    postalCode: '522020',
    lat: 16.5425,
    lng: 80.5150,
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
          { name: 'Amaravati Escorts' },
        ]} />
      </div>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">AP Capital Region • Near Vijayawada</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            Call Girls in Amaravati — AP Capital Region
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Verified escorts in Amaravati, Andhra Pradesh&apos;s capital region. Premium companions for professionals, business visitors, and officials with complete discretion, real photos, and instant WhatsApp booking.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#20bd5a] transition-colors"
          >
            Book in Amaravati — WhatsApp
          </a>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-10">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Escorts Service in Amaravati Capital Region
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Amaravati, the capital of Andhra Pradesh, is a rapidly developing region attracting government officials, professionals, consultants, and business visitors. Our verified escorts in Amaravati cater specifically to this sophisticated clientele who demand discretion, quality, and professionalism.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Located just 20 minutes from <Link href="/vijayawada-call-girls" className="text-[#d4af37] hover:underline">Vijayawada</Link>, the Amaravati region is served by our full companion network. Whether you are staying near the Secretariat complex, visiting for government work, or based in the residential zones — verified call girls are available around the clock.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed">
              Our Amaravati companions understand the professional environment of the capital region and maintain the utmost discretion. These are educated, well-spoken individuals suited for dinner companionship, private meetings, and refined social interactions.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Areas Covered in Amaravati Region
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { area: 'Thullur', desc: 'Core capital area, government zone' },
                { area: 'Undavalli', desc: 'Heritage locality near caves' },
                { area: 'Tadepalli', desc: 'Residential & business zone' },
                { area: 'Mangalagiri', desc: 'Temple town, growing commercial area' },
                { area: 'Guntur Side', desc: 'Southern Amaravati region' },
                { area: 'Vijayawada Side', desc: 'Northern approach, hotels available' },
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
              Why Professionals Choose Our Amaravati Service
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              The capital region demands a higher standard of service. Here is what makes our Amaravati escorts preferred by discerning clients:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Maximum Discretion', desc: 'Capital-grade privacy protocols. No trails, no records, fully encrypted communication.' },
                { title: 'Educated Companions', desc: 'Graduates and professionals who match the intellectual caliber of capital visitors.' },
                { title: 'Quick Availability', desc: '20-30 minutes from Vijayawada hub. Companions reach anywhere in the capital region fast.' },
                { title: 'Professional Presentation', desc: 'Impeccably groomed companions suitable for upscale venues and official environments.' },
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
              Connect to Nearby Areas
            </h2>
            <ul className="space-y-2 text-[#a0a0b0]">
              <li className="flex items-start gap-2"><span className="text-[#d4af37]">→</span> <Link href="/vijayawada-call-girls" className="hover:text-[#d4af37] transition-colors"><strong>Vijayawada</strong> — 20 min, full service hub</Link></li>
              <li className="flex items-start gap-2"><span className="text-[#d4af37]">→</span> <Link href="/guntur-escorts" className="hover:text-[#d4af37] transition-colors"><strong>Guntur</strong> — 25 min, complete coverage</Link></li>
              <li className="flex items-start gap-2"><span className="text-[#d4af37]">→</span> <Link href="/mangalagiri-escorts" className="hover:text-[#d4af37] transition-colors"><strong>Mangalagiri</strong> — Adjacent town, part of capital region</Link></li>
              <li className="flex items-start gap-2"><span className="text-[#d4af37]">→</span> <Link href="/gannavaram-escorts" className="hover:text-[#d4af37] transition-colors"><strong>Gannavaram</strong> — Airport area, travelers welcome</Link></li>
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
          <p className="text-[#a0a0b0] text-center mb-10">Questions about escorts in Amaravati region</p>
          <div className="space-y-4">
            {amaravatiFAQ.map((item, idx) => (
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

      <RelatedAreas currentSlug="amaravati-escorts" />
      <InternalLinks />
    </div>
  );
}
