import Breadcrumb from '@/components/Breadcrumb';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import RelatedAreas from '@/components/RelatedAreas';
import { SITE_URL } from '@/lib/constants';
import { generateServiceSchema, generateFAQSchema, generateLocalBusinessSchema } from '@/lib/schema';

const areaFAQs = [
  { q: 'Are escorts available near Vijayawada Railway Station?', a: 'Yes, our premium companions are available for swift coordination near Vijayawada Junction railway station, with response times under 30 minutes for confirmed bookings.' },
  { q: 'Is the service available for travelers arriving by train?', a: 'Absolutely. We specialize in welcoming business travelers and executives arriving at Vijayawada Junction with seamless companion coordination and hotel logistics support.' },
  { q: 'Which hotels near the railway station do you serve?', a: 'We serve all premium hotels within the railway station vicinity including those on MG Road, Governorpet, and Bandar Road — all within 5-10 minutes of the junction.' },
  { q: 'Is booking discreet for railway station area services?', a: 'Complete discretion is guaranteed. All communications are encrypted, and our companions maintain professional privacy protocols at every stage.' },
];

export const metadata = {
  title: 'Escorts Near Vijayawada Railway Station | Discreet',
  description: 'Premium escorts near Vijayawada Railway Station. Fast coordination for travelers, discreet hotel companionship, and 24/7 availability near Vijayawada Junction.',
  keywords: ['railway station escorts Vijayawada', 'escorts near Vijayawada Junction', 'call girls railway station Vijayawada'],
  alternates: { canonical: `${SITE_URL}/railway-station-escorts-vijayawada` },
  openGraph: {
    title: 'Escorts Near Vijayawada Railway Station | Quick & Discreet',
    description: 'Premium escorts near Vijayawada Railway Station with fast coordination for travelers.',
    url: `${SITE_URL}/railway-station-escorts-vijayawada`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Escorts Near Vijayawada Railway Station' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escorts Near Vijayawada Railway Station | Quick & Discreet',
    description: 'Premium escorts near Vijayawada Railway Station with fast coordination for travelers.',
    images: ['/opengraph-image'],
  },
};

export default function RailwayStationEscorts() {
  const serviceSchema = generateServiceSchema({
    name: 'Escorts Near Vijayawada Railway Station',
    description: 'Premium companionship services near Vijayawada Junction for travelers and business executives with swift coordination.',
    serviceType: 'Travel Companionship Service',
  });

  const faqSchema = generateFAQSchema(areaFAQs);

  const locationSchema = generateLocalBusinessSchema({
    name: 'Escorts Near Vijayawada Railway Station',
    street: 'Railway Station Road, Vijayawada Junction',
    url: `${SITE_URL}/railway-station-escorts-vijayawada`,
    lat: 16.5175,
    lng: 80.6198,
  });

  return (
    <div className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Vijayawada Escorts', href: '/vijayawada-escorts' },
          { name: 'Railway Station' },
        ]} />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Railway Station Area</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            Escorts Near Vijayawada Railway Station
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto">
            Swift, discreet premium companionship for travelers arriving at Vijayawada Junction. Our dedicated concierge ensures seamless coordination from the moment you arrive.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-10">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Premium Companionship for Travelers
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Vijayawada Junction is one of South India&apos;s busiest railway stations, connecting travelers from Hyderabad, Chennai, Bangalore, and beyond. Our escort service near Vijayawada Railway Station is specifically designed for business travelers, executives, and visitors who seek premium companionship upon arrival.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed">
              With advance WhatsApp booking, our companions can be coordinated to meet you at nearby premium hotels within minutes of your arrival. We handle all logistics so you can focus on enjoying sophisticated companionship during your Vijayawada visit.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Nearby Landmarks & Hotels We Serve
            </h2>
            <ul className="space-y-2">
              {[
                'Premium hotels on Bandar Road and MG Road',
                'Business hotels near Vijayawada Junction',
                'Executive accommodations in Governorpet area',
                'Luxury stays near Krishna River waterfront',
                'Hotels on Eluru Road corridor',
                'Service apartments in central Vijayawada',
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
              Why Choose Our Railway Station Area Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Rapid Response', desc: 'Under 30-minute coordination for pre-booked companions near the station.' },
                { title: 'Traveler-Friendly', desc: 'Experienced with out-of-town guests and flexible scheduling for arrivals.' },
                { title: 'Hotel Coordination', desc: 'We assist with nearby hotel recommendations for discreet meetings.' },
                { title: '24/7 Availability', desc: 'Train arrivals don\'t follow schedules — neither do we. Available any hour.' },
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
              Railway Station Area — FAQ
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
      <RelatedAreas currentSlug="railway-station-escorts-vijayawada" />
      <InternalLinks />
    </div>
  );
}
