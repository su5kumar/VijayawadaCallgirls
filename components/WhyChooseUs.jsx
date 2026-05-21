import { ShieldCheck, MessageSquare, Crown, Sparkles, Clock, Lock } from 'lucide-react';

const features = [
  {
    icon: <Lock size={24} />,
    title: 'Discreet Booking Process',
    description: 'End-to-end encrypted communication ensures your privacy is maintained throughout the booking experience.',
  },
  {
    icon: <MessageSquare size={24} />,
    title: 'Fast WhatsApp Support',
    description: 'Instant response via our dedicated WhatsApp concierge for seamless coordination and quick confirmations.',
  },
  {
    icon: <Crown size={24} />,
    title: 'Premium Hospitality',
    description: 'Five-star hospitality standards with vetted companions who embody elegance, grace, and sophistication.',
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Luxury Experiences',
    description: 'Curated experiences for fine dining, corporate events, travel companionship, and exclusive social gatherings.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Professional Coordination',
    description: 'Dedicated concierge team handles every detail from profile matching to logistics with absolute precision.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Private VIP Assistance',
    description: 'Round-the-clock availability with personalized attention for high-profile clients and executive travelers.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0e0e14] to-[#0b0b0d]" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Why Choose Us</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-4">
            Most Trusted Escort Service in Vijayawada
          </h2>
          <p className="max-w-2xl mx-auto text-[#a0a0b0] text-base">
            We redefine premium companionship with unmatched discretion, verified profiles, and luxury-focused experiences tailored for discerning individuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="glass-card p-7 hover:border-[#d4af37]/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-5 group-hover:bg-[#d4af37]/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-[#a0a0b0] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
