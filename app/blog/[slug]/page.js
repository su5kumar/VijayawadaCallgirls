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
  'how-to-book-escort-service-vijayawada': {
    title: 'How to Book Escort Service in Vijayawada — Complete Guide',
    metaDesc: 'Step-by-step guide on how to book escort service in Vijayawada. WhatsApp booking, safety tips, what to expect, and discreet coordination explained.',
    category: 'Booking Guide',
    date: '2026-05-20',
    content: [
      { type: 'p', text: 'Booking premium escort service in Vijayawada is straightforward, discreet, and designed to prioritize your comfort at every stage. This comprehensive guide covers everything from first contact to your premium experience.' },
      { type: 'h2', text: 'Step 1: Choose Your Preferred Service Type' },
      { type: 'p', text: 'Before reaching out, consider what type of companionship you seek. Options include VIP escorts for upscale events, independent companions for personalized experiences, hotel visit services for travelers, or luxury companionship for social occasions. Each service type offers different advantages.' },
      { type: 'h2', text: 'Step 2: Contact via WhatsApp' },
      { type: 'p', text: 'WhatsApp is our primary booking channel for a reason — it offers end-to-end encryption, instant messaging, and multimedia sharing for profile viewing. Simply click our WhatsApp button or message our dedicated concierge number. Our team responds within 5 minutes at any hour.' },
      { type: 'h2', text: 'Step 3: Share Your Preferences' },
      { type: 'p', text: 'Once connected, share your timing, preferred location (hotel, restaurant, or other venue), companion preferences, and any specific requirements. The more detail you provide, the better we can match you with the perfect companion.' },
      { type: 'h2', text: 'Step 4: Profile Review & Selection' },
      { type: 'p', text: 'Our concierge will share verified companion profiles matching your preferences. Review at your leisure and select your preferred companion. All profiles are authentic, recently verified, and accurately represent our companions.' },
      { type: 'h2', text: 'Step 5: Confirmation & Coordination' },
      { type: 'p', text: 'Once confirmed, we handle all logistics — timing coordination, venue details, and any special arrangements. Your companion will arrive discreetly at the agreed location and time.' },
      { type: 'h2', text: 'Safety & Privacy Tips' },
      { type: 'p', text: 'Always book through our official channels. Never share excessive personal information upfront. Trust the process and let our concierge handle coordination. All communications remain encrypted and confidential.' },
      { type: 'h2', text: 'What to Expect During Your Experience' },
      { type: 'p', text: 'Our companions are professionally trained in social etiquette, conversation, and discretion. Whether it is a dinner date, event companionship, or private time, expect elegance, warmth, and complete professionalism throughout your booking.' },
    ],
    relatedPosts: ['privacy-booking-guide', 'what-are-independent-escorts-vijayawada'],
  },
  'what-are-independent-escorts-vijayawada': {
    title: 'What Are Independent Escorts in Vijayawada?',
    metaDesc: 'Learn what independent escorts in Vijayawada offer — personalized experiences, direct communication, flexibility, and authentic connections without intermediaries.',
    category: 'Service Guides',
    date: '2026-05-18',
    content: [
      { type: 'p', text: 'Independent escorts represent a unique category within premium companionship services. Unlike agency-managed companions, independent escorts in Vijayawada are self-managed professionals who control every aspect of their service.' },
      { type: 'h2', text: 'Defining Independent Escorts' },
      { type: 'p', text: 'An independent escort is a self-employed companion who manages their own schedule, client selection, service offerings, and personal branding. They partner with platforms like ours for verification and visibility while maintaining complete professional autonomy.' },
      { type: 'h2', text: 'Benefits of Choosing Independent Companions' },
      { type: 'p', text: 'Independent escorts offer several distinct advantages: direct personal communication without intermediaries, genuinely personalized experiences tailored to individual clients, flexible scheduling that adapts to your needs, and authentic connections built on mutual respect rather than corporate protocols.' },
      { type: 'h2', text: 'How They Differ from Agency Escorts' },
      { type: 'p', text: 'Agency escorts follow standardized procedures set by their management. Independent companions craft their own approach — from conversation style to service boundaries. This results in more authentic, spontaneous, and personally meaningful encounters.' },
      { type: 'h2', text: 'Verification & Trust' },
      { type: 'p', text: 'While independent, our platform verifies every companion for authenticity, professionalism, and client satisfaction. This combines the personal touch of independent service with the trust signals of a verified platform.' },
      { type: 'h2', text: 'Finding Independent Escorts in Vijayawada' },
      { type: 'p', text: 'Our platform features a curated selection of verified independent escorts in Vijayawada. Browse profiles, read about their personalities, and connect via WhatsApp for direct communication. Each independent companion brings unique qualities to your experience.' },
    ],
    relatedPosts: ['vip-vs-independent-escorts', 'how-to-book-escort-service-vijayawada'],
  },
  'vip-vs-independent-escorts': {
    title: 'VIP vs Independent Escorts — Which Should You Choose?',
    metaDesc: 'Compare VIP and independent escorts in Vijayawada. Understand the differences in experience, pricing, personalization, and service style to make the right choice.',
    category: 'Comparison Guide',
    date: '2026-05-16',
    content: [
      { type: 'p', text: 'Choosing between VIP and independent escorts depends on your preferences, occasion, and desired experience. Both offer premium companionship but differ significantly in approach, presentation, and service philosophy.' },
      { type: 'h2', text: 'VIP Escorts — The Premium Tier' },
      { type: 'p', text: 'VIP escorts represent the highest tier of companionship. These are exceptionally curated individuals — often with advanced education, modeling backgrounds, multilingual abilities, and extensive experience at high-profile events. They excel in corporate settings, luxury venues, and situations demanding extraordinary presence.' },
      { type: 'h2', text: 'Independent Escorts — The Personal Touch' },
      { type: 'p', text: 'Independent escorts prioritize personal connection and authenticity. They control their own services, build genuine rapport with clients, and offer flexibility that structured VIP services may not. The experience feels more intimate, spontaneous, and personally tailored.' },
      { type: 'h2', text: 'Key Differences Compared' },
      { type: 'p', text: 'Communication: VIP escorts typically coordinate through our concierge, while independent companions often communicate directly. Scheduling: VIP escorts follow structured availability, independents offer more flexibility. Experience: VIP emphasizes prestige and polish, independent emphasizes authenticity and personal connection.' },
      { type: 'h2', text: 'When to Choose VIP' },
      { type: 'p', text: 'Choose VIP escorts for: corporate events requiring exceptional presentation, high-profile social gatherings, luxury travel companionship, situations where prestige and social standing matter, and when you want the concierge team to handle all coordination.' },
      { type: 'h2', text: 'When to Choose Independent' },
      { type: 'p', text: 'Choose independent escorts for: personal and intimate experiences, when you value direct communication, flexible or spontaneous scheduling, building ongoing genuine connections, and when you prefer a more relaxed and authentic encounter.' },
      { type: 'h2', text: 'Making Your Decision' },
      { type: 'p', text: 'Both options deliver premium experiences. Consider your occasion, personal style, and what matters most to you. Our WhatsApp concierge can also recommend the best fit based on your specific requirements.' },
    ],
    relatedPosts: ['what-are-independent-escorts-vijayawada', 'luxury-lifestyle-vijayawada'],
  },
  'hotel-booking-guide-travelers-vijayawada': {
    title: 'Hotel Booking Guide for Travelers in Vijayawada',
    metaDesc: 'Complete hotel booking guide for travelers visiting Vijayawada. Best hotels for escort services, discreet booking tips, and premium accommodation recommendations.',
    category: 'Travel Guide',
    date: '2026-05-12',
    content: [
      { type: 'p', text: 'For travelers visiting Vijayawada who seek premium companionship, choosing the right hotel significantly impacts your experience. This guide covers the best areas, hotel types, and booking strategies for a seamless visit.' },
      { type: 'h2', text: 'Best Hotel Areas for Travelers' },
      { type: 'p', text: 'Benz Circle area offers the highest concentration of five-star and premium business hotels. MG Road provides excellent mid-luxury options with vibrant surroundings. Bandar Road near the railway station suits transit travelers. The airport corridor serves those with early flights.' },
      { type: 'h2', text: 'What to Look For in a Hotel' },
      { type: 'p', text: 'Priority features for companionship-friendly stays include: professional reception staff, 24-hour front desk, no restrictive guest policies, executive floors with private access, and quality in-room amenities for comfortable hosting.' },
      { type: 'h2', text: 'Booking Tips for Discretion' },
      { type: 'p', text: 'Book executive or suite categories for more space and privacy. Choose hotels with separate elevators or executive floor access. Opt for check-in procedures that minimize lobby interaction. Our concierge can recommend specific properties known for professional discretion.' },
      { type: 'h2', text: 'Coordinating Companionship with Your Stay' },
      { type: 'p', text: 'Once your hotel is booked, share the property name with our WhatsApp concierge. We will coordinate companion arrival timing, suggest the best meeting approach for that specific venue, and ensure seamless logistics.' },
      { type: 'h2', text: 'Premium Hotels We Recommend' },
      { type: 'p', text: 'While we serve all premium hotels across Vijayawada, certain properties consistently deliver exceptional experiences for our clients. Contact our concierge for personalized hotel recommendations based on your budget and preferences.' },
    ],
    relatedPosts: ['executive-lifestyle-travel-tips', 'privacy-booking-guide'],
  },
  'which-areas-vijayawada-escort-services': {
    title: 'Which Areas in Vijayawada Have Escort Services?',
    metaDesc: 'Complete guide to escort service areas in Vijayawada — Benz Circle, MG Road, Governorpet, Railway Station, Gannavaram, and all premium locations covered.',
    category: 'Local SEO Guide',
    date: '2026-05-08',
    content: [
      { type: 'p', text: 'Vijayawada is a vibrant city with premium companionship services available across multiple key areas. Understanding which neighborhoods and zones offer the best accessibility helps you plan your experience effectively.' },
      { type: 'h2', text: 'Benz Circle — Premium Hub' },
      { type: 'p', text: 'Benz Circle is Vijayawada\'s most upscale commercial area with the highest concentration of five-star hotels, luxury restaurants, and corporate offices. It is the most popular area for premium escort services due to excellent venue options and rapid companion availability.' },
      { type: 'h2', text: 'MG Road — Entertainment District' },
      { type: 'p', text: 'MG Road serves as Vijayawada\'s entertainment and business corridor. Hotels, restaurants, lounges, and nightlife venues make it ideal for evening companionship bookings. The area is vibrant, well-connected, and offers diverse venue choices.' },
      { type: 'h2', text: 'Governorpet — Heritage Business Quarter' },
      { type: 'p', text: 'Governorpet combines heritage charm with modern business infrastructure. The area hosts government offices, traditional markets, and several established hotels. Escort services here cater to both local executives and visitors exploring Vijayawada\'s traditional side.' },
      { type: 'h2', text: 'Railway Station Area' },
      { type: 'p', text: 'Vijayawada Junction is one of India\'s busiest railway stations. The surrounding area has multiple hotels catering to travelers. Our escort service near the railway station specializes in swift coordination for arriving travelers with minimal wait times.' },
      { type: 'h2', text: 'Gannavaram — Airport Corridor' },
      { type: 'p', text: 'Gannavaram Airport serves as the gateway for air travelers. Hotels along the airport road and the Gannavaram-Vijayawada corridor offer premium stays. We coordinate companionship for executives flying in with pre-arrival booking options.' },
      { type: 'h2', text: 'Hotel & Resort Zones' },
      { type: 'p', text: 'Beyond specific neighborhoods, we serve all premium hotels, resorts, and service apartments across Vijayawada. Whether you are at a business hotel or luxury resort, our companions can be coordinated to any venue in the city.' },
    ],
    relatedPosts: ['hotel-booking-guide-travelers-vijayawada', 'how-to-book-escort-service-vijayawada'],
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
      publishedTime: post.date,
      authors: ['Vijayawada Escorts'],
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDesc,
      images: ['/opengraph-image'],
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
    "dateModified": post.date,
    "url": `${SITE_URL}/blog/${slug}`,
    "author": {
      "@type": "Organization",
      "name": "Vijayawada Escorts",
      "url": SITE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vijayawada Escorts",
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/og-image.jpg`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`
    },
    "inLanguage": "en-IN"
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
              <span className="text-[#a0a0b0]">•</span>
              <span>By <strong className="text-white/80">Vijayawada Escorts Team</strong></span>
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
