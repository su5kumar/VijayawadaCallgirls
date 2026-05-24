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
      { type: 'p', text: 'If you think Vijayawada is just another tier-2 city with nothing special going on after dark — you haven\'t been paying attention. Over the last few years, this place has quietly built up a luxury scene that genuinely surprises first-time visitors.' },
      { type: 'h2', text: 'Where to Eat When You Want to Impress' },
      { type: 'p', text: 'The area around Benz Circle and MG Road now has restaurants that would hold their own in Hyderabad or Bangalore. We\'re talking rooftop dining, private rooms you can book for the evening, and menus that go beyond biryani (though the biryani here is excellent too). If you\'re taking a companion to dinner, there are at least 6-7 spots we personally recommend.', links: [{ text: 'Benz Circle', href: '/benz-circle-escorts' }, { text: 'MG Road', href: '/mg-road-vijayawada' }] },
      { type: 'h2', text: 'Hotels That Actually Feel Luxurious' },
      { type: 'p', text: 'The hotel situation has changed completely. Five years ago, you\'d be lucky to find a decent business hotel. Now there are properties with actual spas, executive lounges, and rooms that don\'t feel like they were decorated in 2005. If you\'re visiting and want a place that matches the experience you\'re planning, we can point you in the right direction.' },
      { type: 'h2', text: 'Evening Entertainment That\'s Worth Your Time' },
      { type: 'p', text: 'Vijayawada isn\'t Goa — nobody\'s claiming that. But there are lounges, private spaces, and members-only spots that offer a genuinely good night out. The crowd is getting younger and more cosmopolitan, and the options keep improving every quarter.' },
      { type: 'h2', text: 'Making an Evening Actually Memorable' },
      { type: 'p', text: 'Here\'s what our regular clients have figured out: Vijayawada\'s luxury scene works best when you have someone who knows it. Our companions live here, they know which places are worth the hype and which are all Instagram and no substance. That local knowledge turns a good evening into a great one.', links: [{ text: 'Our companions', href: '/vijayawada-escorts' }] },
    ],
    relatedPosts: ['premium-hospitality-experiences', 'vip-nightlife-guide-vijayawada'],
  },
  'premium-hospitality-experiences': {
    title: 'Premium Hospitality: What Makes Vijayawada Special',
    metaDesc: 'An insider look at Vijayawada\'s premium hospitality landscape — hotels, dining, and exclusive services defining luxury in Andhra Pradesh.',
    category: 'Premium Hospitality',
    date: '2026-05-10',
    content: [
      { type: 'p', text: 'People used to fly through Vijayawada on their way somewhere else. Now they\'re booking an extra night just to enjoy what the city offers. The hospitality sector here has grown faster than most people realize, and if you haven\'t visited recently, you\'re in for a pleasant surprise.' },
      { type: 'h2', text: 'Hotels Worth Checking Into' },
      { type: 'p', text: 'Benz Circle and the highway corridor now have proper international-standard hotels. We\'re talking executive suites, actual business centers that work, and lounges where you can have a quiet drink without feeling like you\'re in an airport. Several Indian luxury brands have set up here too, and the competition has raised everyone\'s game.', links: [{ text: 'Benz Circle', href: '/benz-circle-escorts' }] },
      { type: 'h2', text: 'Service That Gets It Right' },
      { type: 'p', text: 'The staff at these newer properties understand discretion. They\'re trained well, they don\'t ask unnecessary questions, and they handle companion visits the way any professional hotel should — quietly and without fuss. That matters more than thread count, honestly.' },
      { type: 'h2', text: 'Hotels That Work for Companionship' },
      { type: 'p', text: 'Not every hotel handles things professionally — but the ones we work with do. We\'ve built relationships over time and know exactly which properties make the experience smooth for our clients. No awkward lobby situations, no phone calls to your room. Just seamless.', links: [{ text: 'the ones we work with do', href: '/hotel-escort-service-vijayawada' }] },
    ],
    relatedPosts: ['luxury-lifestyle-vijayawada', 'executive-lifestyle-travel-tips'],
  },
  'vip-nightlife-guide-vijayawada': {
    title: 'VIP Nightlife Guide: Best Evening Experiences in Vijayawada',
    metaDesc: 'Your complete guide to Vijayawada\'s sophisticated nightlife. Rooftop lounges, exclusive gatherings, fine dining, and premium evening experiences.',
    category: 'VIP Nightlife',
    date: '2026-05-05',
    content: [
      { type: 'p', text: 'After 8pm, Vijayawada puts on a different face. It\'s not Mumbai-level nightlife, but if you know where to look, there\'s plenty happening — and the crowd is way more relaxed than in bigger cities.' },
      { type: 'h2', text: 'Rooftop Bars That Don\'t Disappoint' },
      { type: 'p', text: 'A few rooftop spots have opened up over the last couple of years that actually nail the vibe. Good cocktails, decent music, views over the city — and not packed to the point where you can\'t have a conversation. Perfect for an evening out with a companion.' },
      { type: 'h2', text: 'Late Dinner Options' },
      { type: 'p', text: 'Some of the better restaurants stay open late for regulars. Private dining rooms, tasting menus if you book in advance, and the kind of service where they remember what you ordered last time. It\'s the small things that make a dinner feel special.' },
      { type: 'h2', text: 'Better Evenings with the Right Company' },
      { type: 'p', text: 'We say this from experience — having a companion who actually enjoys good food and conversation transforms an evening. Our nightlife-savvy escorts know the city after dark, can suggest places based on your mood, and bring the kind of energy that makes strangers think you\'ve known each other for years.', links: [{ text: 'nightlife-savvy escorts', href: '/vip-escorts-vijayawada' }] },
    ],
    relatedPosts: ['luxury-lifestyle-vijayawada', 'local-lifestyle-guide-vijayawada'],
  },
  'executive-lifestyle-travel-tips': {
    title: 'Executive Travel Tips: Making the Most of Your Vijayawada Visit',
    metaDesc: 'Essential tips for business travelers visiting Vijayawada. Hotels, transportation, dining, and premium companionship services for executives.',
    category: 'Executive Lifestyle',
    date: '2026-04-28',
    content: [
      { type: 'p', text: 'If your company is sending you to Vijayawada — or you\'re here scouting business opportunities — here\'s what you actually need to know. Not the tourist-board version, but practical stuff from people who coordinate visits here every week.' },
      { type: 'h2', text: 'Where to Stay (Honestly)' },
      { type: 'p', text: 'Benz Circle. That\'s the short answer. The best hotels, the best restaurants, and the easiest access to everywhere you\'d need to go. If Benz Circle is booked up, Patamata has some quieter boutique options that work well if you don\'t mind being 10 minutes from the action.', links: [{ text: 'Benz Circle', href: '/benz-circle-escorts' }, { text: 'Patamata', href: '/patamata-companionship' }] },
      { type: 'h2', text: 'Getting Around Without Headaches' },
      { type: 'p', text: 'Gannavaram Airport connects to all major cities. Once you land, hotel transfers or app-based cabs get you where you need to go in 20-30 minutes. If you\'re booking companionship with us, we can include transport coordination — one less thing to think about.', links: [{ text: 'Gannavaram Airport', href: '/gannavaram-escorts' }] },
      { type: 'h2', text: 'After the Meetings Are Done' },
      { type: 'p', text: 'Long day of meetings, hotel room feels empty, and you\'re in a city you don\'t know? That\'s literally our most common client scenario. Our companions understand the executive schedule — they\'re flexible with timing, don\'t need you to plan an elaborate evening, and are perfectly happy with dinner and conversation or something more private.', links: [{ text: 'Our companions', href: '/vijayawada-escorts' }] },
    ],
    relatedPosts: ['premium-hospitality-experiences', 'privacy-booking-guide'],
  },
  'privacy-booking-guide': {
    title: 'Your Complete Privacy & Booking Guide',
    metaDesc: 'Understanding our confidential booking process, privacy protections, and complete discretion for every client interaction.',
    category: 'Privacy & Booking',
    date: '2026-04-20',
    content: [
      { type: 'p', text: 'Look — we get it. The number one concern people have before their first booking isn\'t about the companion, it\'s about privacy. "Will anyone find out?" "Do you store my information?" "What if someone I know sees me?" We hear these questions every day, so let\'s address them directly.' },
      { type: 'h2', text: 'Your Messages Are Encrypted' },
      { type: 'p', text: 'We use WhatsApp specifically because it offers end-to-end encryption. That means even WhatsApp themselves can\'t read our conversations. On our end, we don\'t screenshot chats, don\'t keep conversation logs, and delete booking details once the service is complete.' },
      { type: 'h2', text: 'You Don\'t Need to Share Much' },
      { type: 'p', text: 'Here\'s what we need from you: a timing, a location, and your preferences. That\'s it. You don\'t need to give us your real name, your company name, or your life story. A first name (even a fake one) and a WhatsApp number is enough to get started.' },
      { type: 'h2', text: 'What We Promise' },
      { type: 'p', text: 'Zero data sharing — ever. No mailing lists, no follow-up calls unless you want them, no "feedback forms." Our team signs confidentiality agreements, and we don\'t discuss clients with other clients. Period. This isn\'t just policy — it\'s how we\'ve built trust over years of operating.', links: [{ text: 'built trust over years', href: '/about' }] },
    ],
    relatedPosts: ['executive-lifestyle-travel-tips', 'luxury-lifestyle-vijayawada'],
  },
  'local-lifestyle-guide-vijayawada': {
    title: 'Local Lifestyle Guide: Hidden Gems of Vijayawada',
    metaDesc: 'Beyond tourist spots — discover Vijayawada\'s hidden premium experiences, secret dining spots, and exclusive local attractions.',
    category: 'Local Guides',
    date: '2026-04-15',
    content: [
      { type: 'p', text: 'Google "things to do in Vijayawada" and you\'ll get the same five temples and Prakasam Barrage. That\'s fine for tourists, but if you want to experience the city the way people who actually live here do, you need someone to show you around.' },
      { type: 'h2', text: 'Food Spots the Guidebooks Miss' },
      { type: 'p', text: 'Some of the best food in Vijayawada comes from places with no English signboard and a maximum Google rating of 4.2. Family-run joints, small chef-owned places that seat 20 people, and street food spots that have been perfecting one dish for decades. Our local companions know these places by heart.' },
      { type: 'h2', text: 'Cultural Side of the City' },
      { type: 'p', text: 'Heritage walks through old Vijayawada, the occasional art exhibition or cultural performance — these aren\'t heavily advertised but they happen regularly. It\'s the kind of thing that makes an evening feel interesting rather than just another dinner-and-drinks routine.' },
      { type: 'h2', text: 'Scenic Spots for the Right Moment' },
      { type: 'p', text: 'The Krishna River at sunset, the view from Indrakeeladri hills, the barrage lit up at night — Vijayawada has genuinely beautiful spots that most visitors never see because they\'re stuck in the hotel-to-meeting-to-hotel loop. With the right companion, these become memorable moments rather than just locations on a map.' },
    ],
    relatedPosts: ['luxury-lifestyle-vijayawada', 'vip-nightlife-guide-vijayawada'],
  },
  'how-to-book-escort-service-vijayawada': {
    title: 'How to Book Escort Service in Vijayawada — Complete Guide',
    metaDesc: 'Step-by-step guide on how to book escort service in Vijayawada. WhatsApp booking, safety tips, what to expect, and discreet coordination explained.',
    category: 'Booking Guide',
    date: '2026-05-20',
    content: [
      { type: 'p', text: 'First time booking? No judgement here. Most of our clients were nervous before their first inquiry too. Here\'s exactly how the process works from start to finish — no vague corporate language, just straight answers.' },
      { type: 'h2', text: 'Step 1: Figure Out What You Want' },
      { type: 'p', text: 'Before messaging us, have a rough idea of what you\'re after. VIP companion for a corporate dinner? Someone fun for the evening? Hotel visit? Knowing this upfront means we can match you faster instead of going back and forth with questions.', links: [{ text: 'VIP companion', href: '/vip-escorts-vijayawada' }, { text: 'Hotel visit', href: '/hotel-escort-service-vijayawada' }] },
      { type: 'h2', text: 'Step 2: Hit Us Up on WhatsApp' },
      { type: 'p', text: 'We use WhatsApp because it\'s encrypted, instant, and you can see photos without downloading sketchy apps. Just tap our WhatsApp button or message the number on this site. Someone responds within 5 minutes — yes, even at 2am.' },
      { type: 'h2', text: 'Step 3: Tell Us Your Preferences' },
      { type: 'p', text: 'When, where, and what type. That\'s really all we need to get started. The more specific you are (e.g., "I\'m at XYZ Hotel, free after 9pm, prefer someone who speaks Hindi"), the faster we nail the match.' },
      { type: 'h2', text: 'Step 4: Browse Real Profiles' },
      { type: 'p', text: 'We\'ll send you 2-4 profiles that fit what you described. These are recent, verified photos — not stock images from 2019. Take your time picking. If none feel right, just say so and we\'ll suggest others.' },
      { type: 'h2', text: 'Step 5: Confirm and Relax' },
      { type: 'p', text: 'Once you pick someone, we lock in the details — time, place, any special requests. From here, we handle the coordination. Your companion shows up when and where agreed. You don\'t need to do anything else.' },
      { type: 'h2', text: 'Quick Safety Tips' },
      { type: 'p', text: 'Always book through our official WhatsApp (not random numbers you find elsewhere). Don\'t send advance payments to unknown accounts. And if something feels off at any point, message us immediately — we sort things out fast.' },
      { type: 'h2', text: 'What the Experience Is Actually Like' },
      { type: 'p', text: 'Our companions are real people who are genuinely good at social interaction. They won\'t make you feel awkward, they can hold a conversation over dinner, and they understand boundaries. Whether you\'re after a social evening or private time, the experience feels natural — not transactional.' },
    ],
    relatedPosts: ['privacy-booking-guide', 'what-are-independent-escorts-vijayawada'],
  },
  'what-are-independent-escorts-vijayawada': {
    title: 'What Are Independent Escorts in Vijayawada?',
    metaDesc: 'Learn what independent escorts in Vijayawada offer — personalized experiences, direct communication, flexibility, and authentic connections without intermediaries.',
    category: 'Service Guides',
    date: '2026-05-18',
    content: [
      { type: 'p', text: 'You\'ll see "independent escorts" mentioned a lot on companion platforms. But what does it actually mean, and should you care about the distinction? Short answer: yes, it matters — and here\'s why.' },
      { type: 'h2', text: 'What "Independent" Actually Means' },
      { type: 'p', text: 'An independent escort runs her own show. She decides her schedule, her rates, which clients she meets, and how she wants to present herself. She\'s not managed by an agency or told what to do. Think of it like the difference between a freelancer and a corporate employee — same work, very different energy.' },
      { type: 'h2', text: 'Why Clients Prefer Independent Companions' },
      { type: 'p', text: 'The biggest advantage? It feels more personal. You\'re not talking to a middleman reading from a script — you\'re communicating with (or about) the actual person you\'ll meet. That translates to better chemistry, more flexibility on timing, and experiences that feel genuine rather than rehearsed.' },
      { type: 'h2', text: 'How They\'re Different from Agency Models' },
      { type: 'p', text: 'Agency companions follow set procedures — fixed rates, standard time slots, predefined service packages. Independent escorts create their own approach. Some prefer dinner dates, others are fine with direct hotel visits. Some chat with you beforehand, others prefer minimal small talk. It varies because they\'re individuals, not products.' },
      { type: 'h2', text: 'Are They Safe and Verified?' },
      { type: 'p', text: 'On our platform, absolutely. Just because someone is independent doesn\'t mean they\'re unvetted. We verify identity, check photos for authenticity, and only list companions who consistently deliver good experiences. Independence + verification is the best of both worlds.' },
      { type: 'h2', text: 'Finding the Right One in Vijayawada' },
      { type: 'p', text: 'We feature several independent companions in Vijayawada at any given time. Each has a different personality, look, and style. Browse the profiles, read about who they are, and reach out on WhatsApp. You can usually tell within a few messages if the vibe is right.', links: [{ text: 'independent companions in Vijayawada', href: '/independent-escorts-vijayawada' }] },
    ],
    relatedPosts: ['vip-vs-independent-escorts', 'how-to-book-escort-service-vijayawada'],
  },
  'vip-vs-independent-escorts': {
    title: 'VIP vs Independent Escorts — Which Should You Choose?',
    metaDesc: 'Compare VIP and independent escorts in Vijayawada. Understand the differences in experience, pricing, personalization, and service style to make the right choice.',
    category: 'Comparison Guide',
    date: '2026-05-16',
    content: [
      { type: 'p', text: 'This is probably the most common question we get from new clients: "What\'s the difference between VIP and independent, and which one should I go with?" Honest answer — it depends on what you value. Let us break it down.' },
      { type: 'h2', text: 'VIP Escorts — When Presentation Matters' },
      { type: 'p', text: 'VIP companions are our top tier. Think: model-level looks, educated, possibly multilingual, experienced at high-end events. If you need someone at a corporate dinner who\'ll impress your clients, or a companion for a weekend at a five-star resort who fits the setting perfectly — VIP is what you want.', links: [{ text: 'VIP companions', href: '/vip-escorts-vijayawada' }] },
      { type: 'h2', text: 'Independent Escorts — When Connection Matters' },
      { type: 'p', text: 'Independent companions are about the personal touch. The vibe is less "polished performance" and more "someone you genuinely click with." They tend to be warmer, more spontaneous, and more willing to adapt the evening to whatever feels right in the moment.', links: [{ text: 'Independent companions', href: '/independent-escorts-vijayawada' }] },
      { type: 'h2', text: 'The Practical Differences' },
      { type: 'p', text: 'Communication: VIP bookings go through our concierge team. Independent companions often chat with you directly. Scheduling: VIP has more structured availability; independents are usually more flexible for last-minute plans. Pricing: VIP is higher tier; independent varies by individual.' },
      { type: 'h2', text: 'Go VIP When...' },
      { type: 'p', text: 'You need a plus-one for something public or professional. You want someone who looks like they belong at a luxury venue without effort. You prefer having our concierge handle everything so you don\'t have to think about logistics.' },
      { type: 'h2', text: 'Go Independent When...' },
      { type: 'p', text: 'You want something more personal and less formal. You value direct communication and building a real rapport. You have flexible plans and prefer someone who can roll with spontaneous ideas. You\'re looking to become a repeat client with one particular companion.' },
      { type: 'h2', text: 'Still Not Sure?' },
      { type: 'p', text: 'Message us on WhatsApp and describe what you\'re after. We\'ll recommend the right category — and the right person — based on your specific situation. No pressure either way.' },
    ],
    relatedPosts: ['what-are-independent-escorts-vijayawada', 'luxury-lifestyle-vijayawada'],
  },
  'hotel-booking-guide-travelers-vijayawada': {
    title: 'Hotel Booking Guide for Travelers in Vijayawada',
    metaDesc: 'Complete hotel booking guide for travelers visiting Vijayawada. Best hotels for escort services, discreet booking tips, and premium accommodation recommendations.',
    category: 'Travel Guide',
    date: '2026-05-12',
    content: [
      { type: 'p', text: 'Choosing the right hotel makes a bigger difference than most people realize. The wrong place can mean awkward front desk interactions, thin walls, or policies that create unnecessary hassle. Here\'s what we tell our clients based on years of experience.' },
      { type: 'h2', text: 'Best Areas to Book' },
      { type: 'p', text: 'Benz Circle is the safe bet — most five-star hotels, best restaurants within walking distance, and our fastest companion availability. MG Road works great if you want nightlife nearby. Near the railway station is fine for transit stays, and the airport corridor suits early-flight schedules.', links: [{ text: 'Benz Circle', href: '/benz-circle-escorts' }, { text: 'MG Road', href: '/mg-road-vijayawada' }, { text: 'railway station', href: '/railway-station-escorts-vijayawada' }, { text: 'airport corridor', href: '/gannavaram-escorts' }] },
      { type: 'h2', text: 'What Actually Matters in a Hotel' },
      { type: 'p', text: 'Forget the star rating for a second. What you want is: professional staff that minds their own business, 24-hour front desk (no locked doors after midnight), guest-friendly policies, and rooms with enough space to not feel cramped. Executive floors with private elevator access are ideal if available.' },
      { type: 'h2', text: 'Tips for a Smooth Experience' },
      { type: 'p', text: 'Book a suite or executive room — the extra space matters. Hotels with separate elevator access to upper floors mean less lobby interaction. If you\'re unsure about a specific property\'s policies, just ask us. We\'ve worked with most hotels in Vijayawada and know exactly which ones are hassle-free.' },
      { type: 'h2', text: 'Let Us Coordinate' },
      { type: 'p', text: 'Once you know where you\'re staying, share the hotel name on WhatsApp. We\'ll tell you the best way to handle companion arrival at that specific property — some are "walk right up" situations, others need a slight adjustment in approach. We\'ve figured all this out so you don\'t have to.' },
      { type: 'h2', text: 'Our Recommended Properties' },
      { type: 'p', text: 'We won\'t name them publicly (discretion works both ways), but reach out on WhatsApp and we\'ll share our personal recommendations based on your budget. These are places where our clients consistently have great experiences without any friction.' },
    ],
    relatedPosts: ['executive-lifestyle-travel-tips', 'privacy-booking-guide'],
  },
  'which-areas-vijayawada-escort-services': {
    title: 'Which Areas in Vijayawada Have Escort Services?',
    metaDesc: 'Complete guide to escort service areas in Vijayawada — Benz Circle, MG Road, Governorpet, Railway Station, Gannavaram, and all premium locations covered.',
    category: 'Local SEO Guide',
    date: '2026-05-08',
    content: [
      { type: 'p', text: 'Short answer: we cover all of Vijayawada. But some areas are definitely more popular for bookings than others, and knowing why can help you plan better. Here\'s the area-by-area breakdown from someone who coordinates dozens of bookings across this city every week.' },
      { type: 'h2', text: 'Benz Circle — Where Most Bookings Happen' },
      { type: 'p', text: 'No surprise here. Benz Circle has the best hotels, the best restaurants, and most of our companions are based nearby. If you\'re staying in this area, expect the fastest response times and widest selection. It\'s also where corporate clients tend to book because the venues just make everything easier.', links: [{ text: 'Benz Circle', href: '/benz-circle-escorts' }] },
      { type: 'h2', text: 'MG Road — The Evening Scene' },
      { type: 'p', text: 'MG Road is where people go when they want an evening out first, hotel later. Restaurants, lounges, and bars line this stretch, making it perfect for dinner-date style bookings. Good hotel options nearby too, though slightly more mid-range than Benz Circle.', links: [{ text: 'MG Road', href: '/mg-road-vijayawada' }] },
      { type: 'h2', text: 'Governorpet — Old City, Steady Demand' },
      { type: 'p', text: 'Governorpet is quieter, more traditional, but has a loyal client base — mostly local professionals and government officials. The hotels here are decent, and it\'s a good option if you want something low-key without the Benz Circle bustle.', links: [{ text: 'Governorpet', href: '/governorpet-escorts' }] },
      { type: 'h2', text: 'Railway Station Area — For Travelers in Transit' },
      { type: 'p', text: 'Vijayawada Junction handles massive traffic daily, and a lot of travelers have 4-8 hour layovers or overnight stops. We\'ve set up fast coordination specifically for this area — book on WhatsApp, and companionship can be arranged within 30-45 minutes of confirmation.', links: [{ text: 'Vijayawada Junction', href: '/railway-station-escorts-vijayawada' }] },
      { type: 'h2', text: 'Gannavaram — Airport Clients' },
      { type: 'p', text: 'Flying in and want companionship arranged before you even land? We do that. The airport corridor has good hotels, and we can have a companion ready by the time you\'ve checked in and freshened up. Popular with executives on overnight business trips.', links: [{ text: 'airport corridor', href: '/gannavaram-escorts' }] },
      { type: 'h2', text: 'Everywhere Else' },
      { type: 'p', text: 'Honestly, if you\'re at any hotel or private residence in Vijayawada, we can make it work. The areas above are just where most bookings concentrate. Message us your location and we\'ll tell you exactly what\'s possible and how quickly.' },
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
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDesc,
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
        "url": `${SITE_URL}/opengraph-image`
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
              if (block.links && block.links.length > 0) {
                let text = block.text;
                const parts = [];
                let lastIndex = 0;
                const sortedLinks = [...block.links].sort((a, b) => text.indexOf(a.text) - text.indexOf(b.text));
                for (const link of sortedLinks) {
                  const linkIndex = text.indexOf(link.text, lastIndex);
                  if (linkIndex === -1) continue;
                  if (linkIndex > lastIndex) {
                    parts.push(<span key={`t-${idx}-${lastIndex}`}>{text.slice(lastIndex, linkIndex)}</span>);
                  }
                  parts.push(<Link key={`l-${idx}-${linkIndex}`} href={link.href} className="text-[#d4af37] hover:underline">{link.text}</Link>);
                  lastIndex = linkIndex + link.text.length;
                }
                if (lastIndex < text.length) {
                  parts.push(<span key={`t-${idx}-end`}>{text.slice(lastIndex)}</span>);
                }
                return <p key={idx} className="text-[#a0a0b0] leading-relaxed">{parts}</p>;
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
