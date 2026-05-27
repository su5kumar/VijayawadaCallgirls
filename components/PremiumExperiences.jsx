import { Wine, Plane, Star, Users } from 'lucide-react';

const experiences = [
  {
    icon: <Wine size={28} />,
    title: 'Corporate & Social Events',
    description: 'Need a plus-one for a gala, awards night, or networking event? Our companions are sharp, well-dressed, and know how to work a room without making it weird.',
    features: ['Business etiquette vetted', 'Wardrobe-appropriate', 'Hindi, English & Telugu'],
  },
  {
    icon: <Plane size={28} />,
    title: 'Travel & Leisure',
    description: 'Whether you\'re here for a weekend or a work trip, having someone who actually knows the city makes everything better. Think local guide meets great company.',
    features: ['Local knowledge', 'Flexible schedules', 'Custom itineraries'],
  },
  {
    icon: <Star size={28} />,
    title: 'Nightlife & Fine Dining',
    description: 'Going out alone isn\'t everyone\'s thing. Our companions join you for great restaurants, rooftop lounges, or wherever the night takes you — no awkwardness, just good energy.',
    features: ['WhatsApp coordination', 'Know the best spots', 'Evening-ready'],
  },
  {
    icon: <Users size={28} />,
    title: 'Executive Companionship',
    description: 'For business travelers who want intelligent, polished company during dinners or downtime. Someone you\'d actually enjoy talking to — not just a pretty face.',
    features: ['Corporate-event ready', 'Completely confidential', 'Matched to your vibe'],
  },
];

export default function PremiumExperiences() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,175,55,0.03)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Premium Experiences</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-4">
            How Clients Actually Use Our Service
          </h2>
          <p className="max-w-2xl mx-auto text-[#a0a0b0] text-base">
            Different people, different occasions. Here&apos;s how most of our clients book — and what kind of experience works for each situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card p-5 sm:p-8 hover:border-[#d4af37]/25 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center text-[#d4af37] shrink-0">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{exp.title}</h3>
                  <p className="text-[#a0a0b0] text-sm leading-relaxed mb-4">{exp.description}</p>
                  <ul className="space-y-1.5">
                    {exp.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-[#a0a0b0] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
