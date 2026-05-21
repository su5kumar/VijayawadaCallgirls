import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import InternalLinks from '@/components/InternalLinks';
import { SITE_URL } from '@/lib/constants';
import { ArrowLeft, ArrowRight, Share2 } from 'lucide-react';

const blogData = {
  'luxury-lifestyle-vijayawada': {
    title: 'The Ultimate Guide to Luxury Lifestyle in Vijayawada',
    metaDesc: 'Discover the finest luxury experiences Vijayawada offers — premium dining, exclusive entertainment venues, and VIP hospitality services for discerning individuals.',
    category: 'Luxury Lifestyle',
    date: '2026-05-15',
    content: [
      { type: 'p', text: 'Vijayawada, the commercial capital of Andhra Pradesh, has rapidly evolved into a hub of luxury experiences. From world-class hotels to premium dining destinations and exclusive entertainment venues, the city now caters to the most discerning tastes.' },
      { type: 'h2', text: 'Premium Dining Destinations' },
      { type: 'p', text: 'The city boasts an impressive collection of fine dining restaurants, particularly concentrated around Benz Circle and MG Road. International cuisines, rooftop experiences, and private dining rooms offer the perfect backdrop for sophisticated social evenings.' },
      { type: 'h2', text: 'Luxury Hospitality Scene' },
      { type: 'p', text: 'Vijayawada\'s hotel landscape has transformed dramatically. Five-star properties now offer premium amenities, spa experiences, and executive lounges that rival metropolitan cities. These venues serve as ideal locations for premium companionship experiences.' },
      { type: 'h2', text: 'VIP Entertainment & Social Venues' },
      { type: 'p', text: 'From exclusive lounges to private member clubs, Vijayawada\'s entertainment scene caters to those who appreciate refined social environments. These spaces provide the perfect setting for elegant companionship and memorable evenings.' },
      { type: 'h2', text: 'Making the Most of Luxury Vijayawada' },
      { type: 'p', text: 'Whether you are visiting for business or pleasure, pairing your Vijayawada experience with premium companionship elevates every moment. Our curated companions are intimately familiar with the city\'s finest offerings and can guide you to unforgettable experiences.' },
    ],
    relatedPosts: ['premium-hospitality-experiences', 'vip-nightlife-guide-vijayawada'],
  },
  'premium-hospitality-experiences': {
    title: 'Premium Hospitality: What Makes Vijayawada Special',
    metaDesc: 'An insider look at Vijayawada\'s premium hospitality landscape — hotels, dining, and exclusive services defining luxury in Andhra Pradesh.',
    category: 'Premium Hospitality',
    date: '2026-05-10',
    content: [
      { type: 'p', text: 'Vijayawada\'s hospitality sector has undergone a remarkable transformation. What was once known primarily as a transit city has become a destination for premium experiences, executive retreats, and luxury tourism.' },
      { type: 'h2', text: 'World-Class Hotel Properties' },
      { type: 'p', text: 'International hotel chains and premium Indian hospitality brands have established significant presence in Vijayawada. Properties near Benz Circle and along the highway corridor offer executive suites, business centers, and exclusive lounges.' },
      { type: 'h2', text: 'Premium Service Standards' },
      { type: 'p', text: 'The commitment to service excellence in Vijayawada\'s premium hotels mirrors international standards. Personal butlers, concierge services, and bespoke arrangements create an environment where luxury companionship feels naturally at home.' },
      { type: 'h2', text: 'Companion-Friendly Venues' },
      { type: 'p', text: 'Many of Vijayawada\'s premium hotels maintain discreet, professional standards that accommodate premium companionship arrangements. Our team coordinates seamlessly with these properties to ensure smooth, confidential experiences.' },
    ],
    relatedPosts: ['luxury-lifestyle-vijayawada', 'executive-lifestyle-travel-tips'],
  },
  'vip-nightlife-guide-vijayawada': {
    title: 'VIP Nightlife Guide: Best Evening Experiences in Vijayawada',
    metaDesc: 'Your complete guide to Vijayawada\'s sophisticated nightlife. Rooftop lounges, exclusive gatherings, fine dining, and premium evening experiences.',
    category: 'VIP Nightlife',
    date: '2026-05-05',
    content: [
      { type: 'p', text: 'Vijayawada after dark reveals a different character — sophisticated, vibrant, and increasingly cosmopolitan. For those seeking premium evening experiences, the city offers more than meets the eye.' },
      { type: 'h2', text: 'Rooftop Lounges & Premium Bars' },
      { type: 'p', text: 'The city\'s skyline has become a backdrop for several upscale rooftop venues. These spaces offer craft cocktails, international wines, and intimate atmospheres perfect for evening companionship.' },
      { type: 'h2', text: 'Late-Night Fine Dining' },
      { type: 'p', text: 'Several premium restaurants in Vijayawada extend service hours for VIP guests. Private dining rooms, chef\'s table experiences, and exclusive tasting menus create memorable culinary evenings.' },
      { type: 'h2', text: 'Enhanced Evenings with Companionship' },
      { type: 'p', text: 'The right companion transforms a good evening into an extraordinary one. Our nightlife-experienced escorts understand venue etiquette, can recommend hidden gems, and bring charismatic energy to every social interaction.' },
    ],
    relatedPosts: ['luxury-lifestyle-vijayawada', 'local-lifestyle-guide-vijayawada'],
  },
  'executive-lifestyle-travel-tips': {
    title: 'Executive Travel Tips: Making the Most of Your Vijayawada Visit',
    metaDesc: 'Essential tips for business travelers visiting Vijayawada. Hotels, transportation, dining, and premium companionship services for executives.',
    category: 'Executive Lifestyle',
    date: '2026-04-28',
    content: [
      { type: 'p', text: 'Business travel to Vijayawada has increased significantly as the city\'s commercial importance grows. For executives seeking to combine productive meetings with refined leisure, here\'s your complete guide.' },
      { type: 'h2', text: 'Where to Stay' },
      { type: 'p', text: 'Benz Circle area offers the highest concentration of premium hotels with executive amenities. For those preferring quieter settings, Patamata\'s boutique properties provide excellent alternatives.' },
      { type: 'h2', text: 'Transportation & Logistics' },
      { type: 'p', text: 'Gannavaram Airport is well-connected to major Indian cities. Premium cab services and hotel transfers ensure comfortable travel. Our concierge team can also arrange transportation as part of companionship packages.' },
      { type: 'h2', text: 'Combining Business with Premium Companionship' },
      { type: 'p', text: 'After demanding business schedules, executive companionship provides the perfect way to unwind. Our companions understand the needs of business travelers and adapt to your schedule with professional flexibility.' },
    ],
    relatedPosts: ['premium-hospitality-experiences', 'privacy-booking-guide'],
  },
  'privacy-booking-guide': {
    title: 'Your Complete Privacy & Booking Guide',
    metaDesc: 'Understanding our confidential booking process, privacy protections, and complete discretion for every client interaction.',
    category: 'Privacy & Booking',
    date: '2026-04-20',
    content: [
      { type: 'p', text: 'Privacy is not just a feature — it\'s the foundation of our premium service. Understanding how we protect your confidentiality gives you peace of mind to fully enjoy your companionship experience.' },
      { type: 'h2', text: 'End-to-End Encryption' },
      { type: 'p', text: 'All WhatsApp communications are protected by end-to-end encryption. We never store conversation logs, personal details, or booking records beyond what\'s operationally necessary.' },
      { type: 'h2', text: 'Anonymous Booking Options' },
      { type: 'p', text: 'We offer discreet booking methods that require minimal personal information. Your identity is protected at every stage — from initial inquiry to post-service follow-up.' },
      { type: 'h2', text: 'Our Privacy Commitment' },
      { type: 'p', text: 'No client information is ever shared, sold, or disclosed. Our team operates under strict confidentiality agreements, and all digital systems are secured with enterprise-grade protections.' },
    ],
    relatedPosts: ['executive-lifestyle-travel-tips', 'luxury-lifestyle-vijayawada'],
  },
  'local-lifestyle-guide-vijayawada': {
    title: 'Local Lifestyle Guide: Hidden Gems of Vijayawada',
    metaDesc: 'Beyond tourist spots — discover Vijayawada\'s hidden premium experiences, secret dining spots, and exclusive local attractions.',
    category: 'Local Guides',
    date: '2026-04-15',
    content: [
      { type: 'p', text: 'Vijayawada has a rich tapestry of experiences beyond what guidebooks reveal. For those who explore with a local companion, the city opens up in extraordinary ways.' },
      { type: 'h2', text: 'Hidden Dining Treasures' },
      { type: 'p', text: 'Beyond the well-known restaurants lie family-run establishments and chef-owned ventures that deliver exceptional culinary experiences. Our local companions know these spots intimately.' },
      { type: 'h2', text: 'Cultural Experiences' },
      { type: 'p', text: 'From heritage walks through old Vijayawada to contemporary art spaces and cultural performances, the city offers refined cultural experiences that pair beautifully with elegant companionship.' },
      { type: 'h2', text: 'Nature & Scenic Spots' },
      { type: 'p', text: 'The Krishna River, Prakasam Barrage at sunset, and the Indrakeeladri hills offer stunning natural backdrops for memorable moments with your chosen companion.' },
    ],
    relatedPosts: ['luxury-lifestyle-vijayawada', 'vip-nightlife-guide-vijayawada'],
  },
};

export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogData[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDesc,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDesc,
      url: `${SITE_URL}/blog/${slug}`,
      type: 'article',
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogData[slug];

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl text-white">Post not found</h1>
        <Link href="/blog" className="text-[#d4af37] mt-4 inline-block">Back to Blog</Link>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDesc,
    "datePublished": post.date,
    "author": { "@type": "Organization", "name": "Vijayawada Escorts" },
    "publisher": { "@type": "Organization", "name": "Vijayawada Escorts" },
  };

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: post.title },
        ]} />
      </div>

      <article className="py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          {/* Header */}
          <div className="mb-10">
            <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-wider mb-3">{post.category}</span>
            <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">{post.title}</h1>
            <div className="flex items-center gap-4 text-xs text-[#a0a0b0]">
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-5">
            {post.content.map((block, idx) => {
              if (block.type === 'h2') {
                return <h2 key={idx} className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold text-white mt-8 mb-3">{block.text}</h2>;
              }
              return <p key={idx} className="text-[#a0a0b0] leading-relaxed">{block.text}</p>;
            })}
          </div>

          {/* Share */}
          <div className="mt-10 pt-8 border-t border-white/5 flex items-center gap-3">
            <Share2 size={14} className="text-[#a0a0b0]" />
            <span className="text-xs text-[#a0a0b0]">Share this article</span>
          </div>

          {/* Related */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mt-12">
              <h3 className="text-white font-semibold mb-4">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {post.relatedPosts.map((relSlug) => {
                  const relPost = blogData[relSlug];
                  if (!relPost) return null;
                  return (
                    <Link key={relSlug} href={`/blog/${relSlug}`} className="glass-card p-5 hover:border-[#d4af37]/20 transition-all group block">
                      <span className="text-[#d4af37] text-xs font-semibold">{relPost.category}</span>
                      <h4 className="text-white text-sm font-medium mt-1 group-hover:text-[#d4af37] transition-colors">{relPost.title}</h4>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-between">
            <Link href="/blog" className="flex items-center gap-2 text-sm text-[#a0a0b0] hover:text-[#d4af37] transition-colors">
              <ArrowLeft size={14} /> All Articles
            </Link>
            <Link href="/whatsapp-booking" className="flex items-center gap-2 text-sm text-[#d4af37] hover:text-[#f3cf58] transition-colors">
              Book Now <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </article>

      <WhatsAppCTA />
      <InternalLinks />
    </div>
  );
}
