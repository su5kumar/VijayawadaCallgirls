import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck } from 'lucide-react';

const models = [
  { name: 'Aarika', src: '/images/profiles/vijayawada-premium-model-companion-01.jpg', alt: 'Verified premium model companion Aarika in Vijayawada' },
  { name: 'Mira', src: '/images/profiles/vijayawada-premium-model-companion-02.jpg', alt: 'Premium model companion Mira in Vijayawada' },
  { name: 'Saanvi', src: '/images/profiles/vijayawada-premium-model-companion-03.jpg', alt: 'Verified escort companion Saanvi in Vijayawada' },
  { name: 'Kiara', src: '/images/profiles/vijayawada-premium-model-companion-04.jpg', alt: 'Premium escort model Kiara in Vijayawada' },
  { name: 'Tara', src: '/images/profiles/vijayawada-premium-model-companion-05.jpg', alt: 'VIP companion Tara in Vijayawada' },
  { name: 'Kavya', src: '/images/profiles/vijayawada-premium-model-companion-06.jpg', alt: 'Executive model companion Kavya in Vijayawada' },
];

export default function ModelsGallery() {
  return (
    <section className="py-16 md:py-24 bg-[#0b0b0d]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Our <span className="gold-gradient-text">Premium Models</span>
          </h2>
          <p className="text-[#a0a0b0] max-w-2xl mx-auto">
            Handpicked, verified companions offering elegance, charm, and unforgettable experiences in Vijayawada.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {models.map((model, i) => (
            <div key={i} className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 hover:border-[#d4af37]/40 transition-all duration-300">
              <Image
                src={model.src}
                alt={model.alt}
                fill
                priority={i < 2}
                loading={i < 2 ? 'eager' : 'lazy'}
                quality={65}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 45vw, 30vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54teleA//9k="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-transparent to-transparent opacity-90" />
              {/* Name & Verified Badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-bold text-lg md:text-xl font-[family-name:var(--font-heading)]">
                    {model.name}
                  </h3>
                  <BadgeCheck size={18} className="shrink-0 fill-[#0095f6] text-white drop-shadow-[0_0_8px_rgba(0,149,246,0.5)]" />
                </div>
                <p className="text-[#d4af37] text-xs mt-1">Verified Profile</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/whatsapp-booking"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#d4af37] text-black font-semibold rounded-full hover:bg-[#e8c84b] transition-colors"
          >
            Book Your Companion
          </Link>
        </div>
      </div>
    </section>
  );
}
