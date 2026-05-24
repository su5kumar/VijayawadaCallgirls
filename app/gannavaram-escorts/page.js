import Breadcrumb from '@/components/Breadcrumb';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import InternalLinks from '@/components/InternalLinks';
import RelatedAreas from '@/components/RelatedAreas';
import { SITE_URL } from '@/lib/constants';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';

const areaFAQs = [
  { q: 'Are escorts available near Gannavaram Airport?', a: 'Yes, our premium companions are available for bookings near Vijayawada (Gannavaram) Airport with advance coordination via WhatsApp for seamless arrival experiences.' },
  { q: 'How quickly can a companion be arranged near Gannavaram?', a: 'With advance booking, companions can be coordinated within 30-45 minutes. Pre-arranged bookings ensure instant availability upon your arrival.' },
  { q: 'Do you serve hotels near Gannavaram Airport?', a: 'We serve all premium hotels and resorts in the Gannavaram-Vijayawada corridor, including properties on the airport road and those in central Vijayawada.' },
  { q: 'Is the Gannavaram area service available for corporate travelers?', a: 'Absolutely. Our service caters specifically to business executives and corporate travelers flying into Vijayawada for meetings, conferences, and business engagements.' },
];

export const metadata = {
  title: 'Gannavaram Escorts | Airport Area Companionship Vijayawada',
  description: 'Premium escorts near Gannavaram Airport, Vijayawada. Luxury companionship for air travelers, corporate executives, and business visitors with discreet airport-area coordination.',
  keywords: ['Gannavaram escorts', 'escorts near Gannavaram Airport', 'airport escorts Vijayawada', 'call girls Gannavaram'],
  alternates: { canonical: `${SITE_URL}/gannavaram-escorts` },
  openGraph: {
    title: 'Gannavaram Escorts | Airport Area Companionship',
    description: 'Premium escorts near Gannavaram Airport for air travelers and executives.',
    url: `${SITE_URL}/gannavaram-escorts`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Gannavaram Escorts - Airport Area Companionship' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gannavaram Escorts | Airport Area Companionship',
    description: 'Premium escorts near Gannavaram Airport for air travelers and executives.',
    images: ['/opengraph-image'],
  },
};

export default function GannavaramEscorts() {
  const serviceSchema = generateServiceSchema({
    name: 'Gannavaram Airport Area Escort Service',
    description: 'Premium companionship services near Gannavaram (Vijayawada) Airport for air travelers, corporate executives, and business visitors.',
    serviceType: 'Airport Companionship Service',
  });

  const faqSchema = generateFAQSchema(areaFAQs);

  return (
    <div className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Vijayawada Escorts', href: '/vijayawada-escorts' },
          { name: 'Gannavaram' },
        ]} />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Gannavaram Airport Area</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            Gannavaram Escorts — Airport Area Companionship
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto">
            Premium companionship service for air travelers arriving at Vijayawada&apos;s Gannavaram Airport. Experience luxury from the moment you land with our elite companion coordination.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-10">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Executive Airport Companionship
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Gannavaram Airport (Vijayawada International Airport) serves as the gateway for business travelers and executives visiting the commercial capital of Andhra Pradesh. Our Gannavaram escorts service is tailored specifically for air travelers who expect premium companionship without delays.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed">
              From corporate travelers on tight schedules to leisure visitors seeking sophisticated evening companionship, our dedicated concierge coordinates companions who understand the needs of discerning air travelers. Pre-book via WhatsApp for seamless arrival experiences.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Nearby Hotels & Venues We Serve
            </h2>
            <ul className="space-y-2">
              {[
                'Premium resorts along Gannavaram-Vijayawada highway',
                'Airport road business hotels and service apartments',
                'Five-star properties in central Vijayawada (20 min from airport)',
                'Executive stays near Benz Circle and MG Road',
                'Luxury resorts on the Krishna River bank',
                'Conference hotels and corporate event venues',
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
              Why Travelers Choose Our Gannavaram Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Pre-Flight Booking', desc: 'Book via WhatsApp before landing. Companion coordinated by the time you reach your hotel.' },
                { title: 'Corporate-Ready', desc: 'Companions experienced with business executives for dinners, events, and social engagements.' },
                { title: 'Airport Corridor Coverage', desc: 'Service extends from Gannavaram to central Vijayawada — all premium venues covered.' },
                { title: 'Flexible Scheduling', desc: 'Flight delays? No problem. Our scheduling adapts to your actual arrival time.' },
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-5">
                  <h3 className="text-white font-semibold mb-2 text-sm">{item.title}</h3>
                  <p className="text-[#a0a0b0] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Area FAQ */}
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-6">
              Gannavaram Area — Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {areaFAQs.map((faq, idx) => (
                <div key={idx} className="glass-card p-5">
                  <h3 className="text-white font-semibold text-sm mb-2">{faq.q}</h3>
                  <p className="text-[#a0a0b0] text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhatsAppCTA />
      <RelatedAreas currentSlug="gannavaram-escorts" />
      <InternalLinks />
    </div>
  );
}
