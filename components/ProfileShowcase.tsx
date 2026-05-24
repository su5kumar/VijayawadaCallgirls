'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { BadgeCheck, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

const MotionReveal = dynamic(() => import('@/components/MotionReveal'), {
  ssr: false,
  loading: ({ children }) => <div>{children}</div>,
});

const filters = ['Featured', 'VIP', 'Fashion', 'Executive'];

const profiles = [
  {
    name: 'Aarika',
    tagline: 'Elegant social presence for premium hospitality evenings.',
    location: 'Benz Circle',
    age: 24,
    category: 'VIP',
    badge: 'Verified VIP',
    image: '/images/profiles/vijayawada-premium-model-companion-01.jpg',
    alt: 'Verified premium model companion in Vijayawada near Benz Circle',
  },
  {
    name: 'Mira',
    tagline: 'Polished model companion for luxury events and private dining.',
    location: 'MG Road',
    age: 25,
    category: 'Fashion',
    badge: 'Premium Model',
    image: '/images/profiles/vijayawada-premium-model-companion-02.jpg',
    alt: 'Premium model companion for luxury hospitality experiences in Vijayawada',
  },
  {
    name: 'Saanvi',
    tagline: 'Sophisticated conversation, graceful style, and discreet booking.',
    location: 'Governorpet',
    age: 23,
    category: 'Executive',
    badge: 'Verified',
    image: '/images/profiles/vijayawada-premium-model-companion-03.jpg',
    alt: 'Executive companionship profile in Vijayawada with verified booking support',
  },
  {
    name: 'Kiara',
    tagline: 'Modern fashion-forward companion for upscale social occasions.',
    location: 'Patamata',
    age: 24,
    category: 'Fashion',
    badge: 'New Arrival',
    image: '/images/profiles/vijayawada-premium-model-companion-04.jpg',
    alt: 'Fashion model companion profile for premium companionship services Vijayawada',
  },
  {
    name: 'Tara',
    tagline: 'Refined VIP companion for quiet, confidential lifestyle plans.',
    location: 'Hotel Zones',
    age: 26,
    category: 'VIP',
    badge: 'VIP Select',
    image: '/images/profiles/vijayawada-premium-model-companion-05.jpg',
    alt: 'VIP companion profile with discreet booking in Vijayawada hotel zones',
  },
  {
    name: 'Kavya',
    tagline: 'Executive-ready presence for business travel and private events.',
    location: 'Railway Area',
    age: 25,
    category: 'Executive',
    badge: 'Concierge Pick',
    image: '/images/profiles/vijayawada-premium-model-companion-06.png',
    alt: 'Executive model companion near Vijayawada railway station',
  },
];

export default function ProfileShowcase() {
  const [activeFilter, setActiveFilter] = useState('Featured');

  const visibleProfiles = useMemo(() => {
    if (activeFilter === 'Featured') {
      return profiles;
    }

    return profiles.filter((profile) => profile.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(212,175,55,0.08),transparent_28%),radial-gradient(circle_at_90%_30%,rgba(183,110,121,0.07),transparent_24%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37]">
              <Sparkles size={14} /> Curated Profiles
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-5xl">
              Premium Model Profiles
            </h2>
            <p className="mt-4 text-base leading-7 text-[#a0a0b0] md:text-lg">
              Browse a refined selection of verified model companions in Vijayawada, presented with discreet details, elegant photography, and fast WhatsApp booking support.
            </p>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="mt-8 flex snap-x gap-3 overflow-x-auto pb-2 md:justify-center md:overflow-visible">
            {filters.map((filter) => {
              const isActive = filter === activeFilter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`min-h-11 shrink-0 snap-start rounded-xl border px-5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'border-[#d4af37]/60 bg-[#d4af37] text-[#0b0b0d] shadow-[0_12px_34px_rgba(212,175,55,0.18)]'
                      : 'border-white/10 bg-white/[0.04] text-[#d8d8df] hover:border-[#d4af37]/40 hover:text-[#d4af37]'
                  }`}
                  aria-pressed={isActive}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </MotionReveal>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {visibleProfiles.map((profile, index) => (
            <MotionReveal key={`${profile.name}-${profile.category}`} delay={index * 0.04}>
              <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#121217]/80 shadow-xl shadow-black/30 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/30 hover:shadow-[0_24px_70px_rgba(0,0,0,0.38)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#0b0b0d]">
                  <Image
                    src={profile.image}
                    alt={profile.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 250px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    quality={75}
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-transparent to-transparent opacity-95" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    {profile.badge}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-3xl font-semibold leading-none text-white">
                        {profile.name}
                      </h3>
                      <p className="mt-2 flex items-center gap-1.5 text-sm text-[#d4af37]">
                        <MapPin size={14} /> {profile.location}
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-center backdrop-blur-md">
                      <span className="block text-xs uppercase tracking-[0.16em] text-white/60">Age</span>
                      <strong className="text-base font-semibold text-white">{profile.age}</strong>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 p-5 md:p-6">
                  <p className="text-[15px] leading-7 text-[#c8c8d2]">{profile.tagline}</p>
                  <div className="flex items-center gap-2 text-sm text-[#a0a0b0]">
                    <BadgeCheck size={20} className="shrink-0 fill-[#0095f6] text-white drop-shadow-[0_0_10px_rgba(0,149,246,0.45)]" /> Verified profile with private booking assistance
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/whatsapp-booking" className="btn-outline min-h-12 rounded-xl px-4 py-3 text-xs">
                      View Profile
                    </Link>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold min-h-12 rounded-xl px-4 py-3 text-xs">
                      <MessageCircle size={15} /> WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}