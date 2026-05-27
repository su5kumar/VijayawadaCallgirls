import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import RelatedAreas from '@/components/RelatedAreas';
import { SITE_URL, WHATSAPP_URL } from '@/lib/constants';
import { generateLocalBusinessSchema } from '@/lib/schema';

export const metadata = {
  title: 'Call Girls in Guntur | Verified Escorts Near Guntur 24/7',
  description: 'Verified call girls in Guntur with real photos & WhatsApp booking. Hotel visits, outcall near Guntur. Independent & VIP companions available 24/7.',
  keywords: ['call girls Guntur', 'Guntur call girls', 'escorts in Guntur', 'Guntur escorts service', 'call girls near Guntur', 'independent call girls Guntur'],
  alternates: { canonical: `${SITE_URL}/guntur-escorts` },
  openGraph: {
    title: 'Call Girls in Guntur | Verified Escorts Near Guntur',
    description: 'Verified call girls in Guntur with real photos, WhatsApp booking, and hotel visit service.',
    url: `${SITE_URL}/guntur-escorts`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Call Girls in Guntur - Verified Escorts Service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Call Girls in Guntur | Verified Escorts Service',
    description: 'Verified call girls in Guntur with real photos and instant WhatsApp booking.',
    images: ['/opengraph-image'],
  },
};

const gunturFAQ = [
  {
    question: 'Are call girls available in Guntur for hotel visits?',
    answer: 'Yes, our verified companions provide discreet hotel visit service across all major hotels in Guntur city including Brodipet, Arundelpet, and Lakshmipuram areas. Arrival within 30-45 minutes.',
  },
  {
    question: 'How do I book call girls in Guntur?',
    answer: 'Simply send a WhatsApp message with your preferences. We share verified photos, confirm rates, and arrange your companion. The entire process takes under 30 minutes.',
  },
  {
    question: 'Do Vijayawada call girls also serve Guntur?',
    answer: 'Yes, our companion network covers both Vijayawada and Guntur. Many of our premium companions travel between both cities, ensuring the same verified quality service.',
  },
  {
    question: 'What is the rate for escorts in Guntur?',
    answer: 'Rates vary by companion type and duration. Contact us on WhatsApp for current pricing. We offer competitive rates with transparent billing and no hidden charges.',
  },
  {
    question: 'Is the service in Guntur available 24/7?',
    answer: 'Yes, our Guntur service operates round the clock. Whether you need daytime companionship or late-night hotel visits, verified companions are available at all hours.',
  },
];

export default function GunturEscorts() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": gunturFAQ.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  };

  const locationSchema = generateLocalBusinessSchema({
    name: 'Call Girls in Guntur',
    street: 'Guntur',
    url: `${SITE_URL}/guntur-escorts`,
    postalCode: '522001',
    lat: 16.3067,
    lng: 80.4365,
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
          { name: 'Guntur Escorts' },
        ]} />
      </div>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Guntur City • 30 Min from Vijayawada</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            Call Girls in Guntur — Verified & Discreet
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Premium verified call girls in Guntur with real photos and instant WhatsApp booking. Hotel visits, independent companions, and VIP escorts available 24/7 across all Guntur areas.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#20bd5a] transition-colors"
          >
            Book in Guntur — WhatsApp
          </a>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-10">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Premium Escorts Service in Guntur
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Guntur, one of Andhra Pradesh&apos;s largest cities and just 30 minutes from Vijayawada, is fully served by our verified companion network. Whether you are a resident, business visitor, or student in Guntur — our premium call girls offer discreet, professional companionship tailored to your preferences.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Our Guntur escorts include independent call girls, college companions, and high-profile models who maintain the same verification standards as our Vijayawada service. Real photos, identity verification, and quality assurance are guaranteed for every booking.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed">
              The proximity between Guntur and <Link href="/vijayawada-call-girls" className="text-[#d4af37] hover:underline">Vijayawada</Link> means our companions seamlessly serve both cities, giving you access to a larger selection of verified profiles and faster availability.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Areas We Cover in Guntur
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Our call girls serve all major localities across Guntur city with hotel visit and private meeting options:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { area: 'Brodipet', desc: 'Central Guntur, main commercial area' },
                { area: 'Arundelpet', desc: 'Business district & shopping hub' },
                { area: 'Lakshmipuram', desc: 'Upscale residential locality' },
                { area: 'Naaz Center', desc: 'Hotels & entertainment zone' },
                { area: 'AT Agraharam', desc: 'Near railway station' },
                { area: 'Guntur-Vijayawada Highway', desc: 'Highway hotels & lodges' },
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
              Hotel Visit Service in Guntur
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Discreet hotel room visits are available at all major hotels across Guntur. Our companions arrive professionally dressed, on time, and with complete discretion. No extra travel charges within Guntur city limits.
            </p>
            <ul className="space-y-2">
              {[
                'Available at all 3-star, 4-star hotels in Guntur',
                'Companion arrives within 30-45 minutes',
                'Discreet entry protocols followed strictly',
                'Flexible duration — hourly to overnight',
                'Same-day booking available via WhatsApp',
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
              Why Clients in Guntur Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Verified Companions', desc: 'Every Guntur call girl is photo-verified and identity-checked before joining our network.' },
                { title: 'Quick Response', desc: 'WhatsApp replies within 5 minutes. Companion arrives within 30-45 minutes of confirmation.' },
                { title: 'No Advance Payment', desc: 'Pay only when you meet. No deposits, no online transfers required before the meeting.' },
                { title: 'Complete Privacy', desc: 'Encrypted communication, no records kept. Your visits remain completely confidential.' },
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
              Nearby Service Areas
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Beyond Guntur city, our companions also serve surrounding areas within the region:
            </p>
            <ul className="space-y-2 text-[#a0a0b0]">
              <li className="flex items-start gap-2"><span className="text-[#d4af37]">→</span> <Link href="/vijayawada-call-girls" className="hover:text-[#d4af37] transition-colors"><strong>Vijayawada</strong> — Main hub, 30 min drive</Link></li>
              <li className="flex items-start gap-2"><span className="text-[#d4af37]">→</span> <Link href="/mangalagiri-escorts" className="hover:text-[#d4af37] transition-colors"><strong>Mangalagiri</strong> — Between Guntur & Vijayawada</Link></li>
              <li className="flex items-start gap-2"><span className="text-[#d4af37]">→</span> <Link href="/amaravati-escorts" className="hover:text-[#d4af37] transition-colors"><strong>Amaravati</strong> — AP Capital Region nearby</Link></li>
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
          <p className="text-[#a0a0b0] text-center mb-10">Questions about call girls in Guntur</p>
          <div className="space-y-4">
            {gunturFAQ.map((item, idx) => (
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

      <RelatedAreas currentSlug="guntur-escorts" />
      <InternalLinks />
    </div>
  );
}
