import Breadcrumb from '@/components/Breadcrumb';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import WhyChooseUs from '@/components/WhyChooseUs';
import InternalLinks from '@/components/InternalLinks';
import { SITE_URL } from '@/lib/constants';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';

const hotelFAQs = [
  { q: 'Are hotel escort services available in Vijayawada?', a: 'Yes, our premium companions are available for hotel visits across all major hotels in Vijayawada including five-star properties, business hotels, and luxury resorts.' },
  { q: 'How does discreet hotel booking work?', a: 'Our companions arrive discreetly at your hotel. We coordinate timing via WhatsApp to ensure privacy. Our companions are experienced in maintaining professional discretion at all premium venues.' },
  { q: 'Which hotels in Vijayawada do you serve?', a: 'We serve all premium hotels across Vijayawada including properties near Benz Circle, MG Road, Bandar Road, Governorpet, and the airport corridor. No venue is outside our service range.' },
  { q: 'Can I book a hotel companion for a business dinner?', a: 'Absolutely. Our companions are experienced with formal business settings, corporate dinners, and professional events at hotel venues. They bring elegance, conversation skills, and social grace.' },
  { q: 'Is advance booking required for hotel visits?', a: 'While advance booking is recommended for optimal companion matching, we also accommodate same-day requests based on availability. WhatsApp us for instant coordination.' },
];

export const metadata = {
  title: 'Hotel Escort Service Vijayawada | Discreet Hotel Companionship',
  description: 'Premium hotel escort service in Vijayawada. Discreet companionship at five-star hotels, business venues, and luxury resorts. Available 24/7 with fast WhatsApp booking.',
  keywords: ['hotel escort service Vijayawada', 'hotel call girls Vijayawada', 'discreet hotel companionship', 'escort hotel visit Vijayawada'],
  alternates: { canonical: `${SITE_URL}/hotel-escort-service-vijayawada` },
  openGraph: {
    title: 'Hotel Escort Service Vijayawada | Discreet Companionship',
    description: 'Premium hotel escort service in Vijayawada with discreet hotel visit companionship.',
    url: `${SITE_URL}/hotel-escort-service-vijayawada`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Hotel Escort Service Vijayawada' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Escort Service Vijayawada | Discreet Companionship',
    description: 'Premium hotel escort service in Vijayawada with discreet hotel visit companionship.',
    images: ['/opengraph-image'],
  },
};

export default function HotelEscortService() {
  const serviceSchema = generateServiceSchema({
    name: 'Hotel Escort Service Vijayawada',
    description: 'Premium hotel visit companionship service in Vijayawada for five-star hotels, business venues, and luxury resorts with complete discretion.',
    serviceType: 'Hotel Companionship Service',
  });

  const faqSchema = generateFAQSchema(hotelFAQs);

  return (
    <div className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Vijayawada Escorts', href: '/vijayawada-escorts' },
          { name: 'Hotel Escort Service' },
        ]} />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Hotel Companionship</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            Hotel Escort Service in Vijayawada
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto">
            Discreet, professional hotel visit companionship at Vijayawada&apos;s finest hotels and resorts. Premium companions experienced in upscale hospitality environments with complete privacy guaranteed.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-10">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Premium Hotel Visit Companionship
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Our hotel escort service in Vijayawada is designed for discerning travelers, business executives, and visitors staying at premium hotels who desire sophisticated companionship during their stay. Every companion understands the protocols of five-star hospitality environments.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed">
              From arrival coordination to discreet departure, our companions navigate hotel environments with natural grace. They&apos;re experienced with lobby meetings, restaurant accompaniment, rooftop lounge visits, and private in-room companionship — always maintaining the highest standards of discretion.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Hotels & Venues We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { area: 'Benz Circle Hotels', venues: 'Five-star properties, luxury resorts, and premium business hotels in the Ring Road area.' },
                { area: 'MG Road Hotels', venues: 'Business-class hotels, boutique stays, and executive accommodations along MG Road.' },
                { area: 'Bandar Road Hotels', venues: 'Premium railway-adjacent hotels serving travelers and corporate guests.' },
                { area: 'Airport Road Hotels', venues: 'Transit hotels and resorts along the Gannavaram-Vijayawada corridor.' },
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-5">
                  <h3 className="text-white font-semibold mb-2 text-sm">{item.area}</h3>
                  <p className="text-[#a0a0b0] text-sm leading-relaxed">{item.venues}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              How Hotel Booking Works
            </h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Contact via WhatsApp', desc: 'Message us with your hotel name, preferred timing, and any specific preferences for your companion.' },
                { step: '2', title: 'Profile Matching', desc: 'Our concierge suggests verified companion profiles matching your preferences and the venue type.' },
                { step: '3', title: 'Confirmation & Coordination', desc: 'Once confirmed, we coordinate arrival timing to ensure seamless, discreet meeting at your venue.' },
                { step: '4', title: 'Premium Experience', desc: 'Enjoy sophisticated companionship with complete privacy — from dinner to private moments.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-bold text-sm shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-[#a0a0b0] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Discreet Check-In & Privacy Protocols
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Privacy is paramount in hotel escort services. Our companions are trained in discreet hotel navigation — from lobby timing to elevator protocol. We never compromise your privacy or draw unnecessary attention.
            </p>
            <ul className="space-y-2">
              {[
                'Companions arrive in elegant, venue-appropriate attire',
                'Lobby meeting or direct-to-room coordination as preferred',
                'No identifying markers or branding on any communications',
                'End-to-end encrypted WhatsApp for all coordination',
                'Companions trained in five-star hospitality discretion',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#a0a0b0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-6">
              Hotel Escort Service — FAQ
            </h2>
            <div className="space-y-4">
              {hotelFAQs.map((faq, idx) => (
                <div key={idx} className="glass-card p-5">
                  <h3 className="text-white font-semibold text-sm mb-2">{faq.q}</h3>
                  <p className="text-[#a0a0b0] text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <WhatsAppCTA />
      <InternalLinks />
    </div>
  );
}
