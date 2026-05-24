import Breadcrumb from '@/components/Breadcrumb';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import InternalLinks from '@/components/InternalLinks';
import { SITE_URL } from '@/lib/constants';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { Clock, MessageCircle, Shield, Sparkles } from 'lucide-react';

const serviceFAQs = [
  { q: 'Are escort services available 24/7 in Vijayawada?', a: 'Yes, our premium companionship service operates around the clock — 24 hours a day, 7 days a week, including holidays. Late-night, early morning, and emergency bookings are all accommodated.' },
  { q: 'Can I book an escort late at night in Vijayawada?', a: 'Absolutely. Our nighttime service is one of our most popular options. Whether it\'s 11 PM or 3 AM, our concierge team is active and companions are available for coordination.' },
  { q: 'How quickly can a companion be arranged for urgent bookings?', a: 'For same-day urgent bookings, we typically coordinate within 30-60 minutes depending on location and companion availability. Pre-booking is recommended for guaranteed timing.' },
  { q: 'Is the WhatsApp support available at all hours?', a: 'Yes, our WhatsApp concierge is staffed 24/7 with dedicated team members for different shifts. You will always reach a real person regardless of the hour.' },
  { q: 'Are there extra charges for late-night or early morning bookings?', a: 'Premium timing availability is included in our service model. We believe luxury should be available whenever you need it, without punitive surcharges.' },
];

export const metadata = {
  title: '24/7 Escorts Service Vijayawada | Available Any Hour',
  description: '24 hour escorts service in Vijayawada available round the clock. Instant WhatsApp booking, late-night companionship, and emergency coordination at any hour across all areas.',
  keywords: ['24/7 escorts Vijayawada', '24 hour escort service', 'night escorts Vijayawada', 'late night call girls Vijayawada'],
  alternates: { canonical: `${SITE_URL}/24-7-escorts-vijayawada` },
  openGraph: {
    title: '24/7 Escorts Service Vijayawada | Available Any Hour',
    description: '24 hour escorts service in Vijayawada available round the clock with instant booking.',
    url: `${SITE_URL}/24-7-escorts-vijayawada`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: '24/7 Escorts Service Vijayawada' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '24/7 Escorts Service Vijayawada | Available Any Hour',
    description: '24 hour escorts service in Vijayawada available round the clock with instant booking.',
    images: ['/opengraph-image'],
  },
};

export default function TwentyFourSevenEscorts() {
  const serviceSchema = generateServiceSchema({
    name: '24/7 Escorts Service Vijayawada',
    description: 'Round-the-clock premium companionship service in Vijayawada with instant WhatsApp booking, late-night availability, and emergency coordination.',
    serviceType: '24/7 Companionship Service',
  });

  const faqSchema = generateFAQSchema(serviceFAQs);

  return (
    <div className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Vijayawada Escorts', href: '/vijayawada-escorts' },
          { name: '24/7 Service' },
        ]} />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.05)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Always Available</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            24/7 Escorts Service in Vijayawada
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto">
            Premium companionship that never sleeps. Our 24-hour escort service in Vijayawada ensures luxury is always within reach — day or night, weekday or weekend.
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Clock size={22} />, label: '24/7 Available', sub: 'Never closed' },
              { icon: <MessageCircle size={22} />, label: 'Instant WhatsApp', sub: '< 5 min reply' },
              { icon: <Shield size={22} />, label: '100% Discreet', sub: 'Always private' },
              { icon: <Sparkles size={22} />, label: 'Premium Quality', sub: 'Verified only' },
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-5 text-center">
                <div className="w-11 h-11 mx-auto mb-3 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                  {item.icon}
                </div>
                <p className="text-white font-semibold text-sm">{item.label}</p>
                <p className="text-[#a0a0b0] text-xs mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-10">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Round-the-Clock Premium Companionship
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Life doesn&apos;t follow a 9-to-5 schedule, and neither does premium companionship. Our 24/7 escort service in Vijayawada caters to late-night arrivals, early-morning business travelers, spontaneous evening plans, and everything in between.
            </p>
            <p className="text-[#a0a0b0] leading-relaxed">
              Whether you need a sophisticated dinner companion at 8 PM, nightlife company at midnight, or a morning social partner at 7 AM, our dedicated concierge team ensures verified companions are available to match your schedule perfectly.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              When Our Clients Book
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { time: 'Evening (6 PM - 10 PM)', desc: 'Corporate dinners, fine dining, social events, and elegant evening companionship.' },
                { time: 'Night (10 PM - 2 AM)', desc: 'VIP nightlife, private experiences, late-night companionship, and extended evenings.' },
                { time: 'Late Night (2 AM - 6 AM)', desc: 'Emergency bookings, late arrivals, post-event companionship, and overnight experiences.' },
                { time: 'Morning & Day (6 AM - 6 PM)', desc: 'Business companions, travel partners, brunch dates, and daytime social engagement.' },
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-5">
                  <h3 className="text-white font-semibold mb-2 text-sm">{item.time}</h3>
                  <p className="text-[#a0a0b0] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
              Instant Booking Process
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Our streamlined WhatsApp-based booking ensures you&apos;re never more than a few minutes away from confirming premium companionship. The process is simple, fast, and completely confidential.
            </p>
            <div className="space-y-4">
              {[
                { step: '1', title: 'WhatsApp Us Anytime', desc: 'Send a message at any hour — our team is always online and responds within 5 minutes.' },
                { step: '2', title: 'Share Your Preferences', desc: 'Tell us your timing, location, and companion preferences. We handle the rest.' },
                { step: '3', title: 'Instant Confirmation', desc: 'Receive companion profile, confirmation, and coordination details within minutes.' },
                { step: '4', title: 'Enjoy Premium Service', desc: 'Your verified companion arrives discreetly at the arranged time and location.' },
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
              All Areas Covered — Any Hour
            </h2>
            <p className="text-[#a0a0b0] leading-relaxed mb-4">
              Our 24/7 availability extends across all premium locations in Vijayawada. No matter where you are in the city, our companions can be coordinated to reach you.
            </p>
            <ul className="space-y-2">
              {[
                'Benz Circle — Hotels, restaurants, and business venues',
                'MG Road — Entertainment and hospitality hub',
                'Governorpet — Heritage business district',
                'Railway Station Area — Traveler coordination',
                'Gannavaram Airport — Air traveler service',
                'All premium hotels — Five-star and luxury resorts',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#a0a0b0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-6">
              24/7 Service — Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {serviceFAQs.map((faq, idx) => (
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
      <InternalLinks />
    </div>
  );
}
