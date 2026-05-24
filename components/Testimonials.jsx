import { Star } from 'lucide-react';

const reviews = [
  {
    stars: 5,
    text: 'The premium companion service exceeded every expectation. Perfectly matched for my corporate dinner — elegant, discreet, and professionally coordinated.',
    author: 'Rajesh N.',
    title: 'Corporate Executive',
  },
  {
    stars: 5,
    text: 'Absolutely world-class service. The WhatsApp booking was instant, and the companion was sophisticated and charming throughout our evening.',
    author: 'Vikram S.',
    title: 'Business Traveler',
  },
  {
    stars: 5,
    text: 'Discreet, professional, and truly premium. The best companionship service in Vijayawada for anyone who values privacy and quality.',
    author: 'Arjun M.',
    title: 'VIP Client',
  },
];

export default function Testimonials() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vijayawada Escorts",
    "image": "https://www.vijayawadacallgirls.online/opengraph-image",
    "telephone": "+919892335464",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Benz Circle, Ring Road",
      "addressLocality": "Vijayawada",
      "postalCode": "520010",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "186",
      "ratingCount": "186"
    },
    "review": reviews.map(r => ({
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": r.stars, "bestRating": "5" },
      "author": { "@type": "Person", "name": r.author },
      "reviewBody": r.text
    }))
  };

  return (
    <section className="py-20 md:py-28 relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#0b0b0d]" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Client Testimonials</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Discerning Clients
          </h2>
          <p className="max-w-2xl mx-auto text-[#a0a0b0] text-base">
            Real experiences from VIP travelers, entrepreneurs, and executives who trust our premium companion service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="glass-card p-7 hover:border-[#d4af37]/20 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>
              <p className="text-[#a0a0b0] text-sm leading-relaxed mb-5 italic">&ldquo;{review.text}&rdquo;</p>
              <div>
                <p className="text-white font-medium text-sm">{review.author}</p>
                <p className="text-[#a0a0b0] text-xs">{review.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
