import { ShieldCheck, MessageSquare, Crown, Sparkles, Clock, Lock } from 'lucide-react';

const features = [
  {
    icon: <Lock size={24} />,
    title: 'Your Privacy Comes First',
    description: 'WhatsApp encryption, no data stored, no follow-up calls. What happens between you and us stays between you and us.',
  },
  {
    icon: <MessageSquare size={24} />,
    title: '5-Minute Response Time',
    description: 'Message us on WhatsApp and get a real reply within minutes — not an automated bot, an actual person who can help.',
  },
  {
    icon: <Crown size={24} />,
    title: 'Companions Worth Your Time',
    description: 'Every profile is verified, photos are recent, and our companions know how to make you feel comfortable from the first minute.',
  },
  {
    icon: <Sparkles size={24} />,
    title: 'More Than Just a Booking',
    description: 'Dinner dates, event plus-ones, hotel visits, or just good company for the evening — we match you with someone who fits the occasion.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'We Handle the Logistics',
    description: 'Tell us when and where. We take care of matching, scheduling, and coordination so you don\'t have to manage anything.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Available Any Hour',
    description: 'Whether it\'s 10pm or 3am — our team is online and can arrange companionship within 30-60 minutes across Vijayawada.',
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
            Why Choose Our Premium Companionship Platform
          </h2>
          <p className="max-w-2xl mx-auto text-[#a0a0b0] text-base">
            Privacy, professionalism, and a smooth booking experience — verified profiles, responsive communication, and confidential support for discerning individuals.
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
