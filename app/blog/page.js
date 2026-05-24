import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { SITE_URL } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog | Luxury Lifestyle & Premium Companionship Insights',
  description: 'Luxury lifestyle guides, premium hospitality insights, VIP nightlife tips, and privacy guides for discerning individuals.',
  keywords: ['escort blog Vijayawada', 'luxury lifestyle Vijayawada', 'companionship guides', 'VIP nightlife Vijayawada'],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Blog | Luxury Lifestyle & Premium Companionship Insights',
    description: 'Luxury lifestyle guides and premium companionship insights.',
    url: `${SITE_URL}/blog`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Blog - Vijayawada Escorts' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Luxury Lifestyle & Premium Companionship Insights',
    description: 'Luxury lifestyle guides and premium companionship insights.',
    images: ['/opengraph-image'],
  },
};

const blogPosts = [
  {
    slug: 'how-to-book-escort-service-vijayawada',
    title: 'How to Book Escort Service in Vijayawada — Complete Guide',
    excerpt: 'Step-by-step guide on booking premium escort service in Vijayawada. WhatsApp booking, safety tips, what to expect, and discreet coordination explained.',
    category: 'Booking Guide',
    date: '2026-05-20',
  },
  {
    slug: 'what-are-independent-escorts-vijayawada',
    title: 'What Are Independent Escorts in Vijayawada?',
    excerpt: 'Learn what independent escorts offer — personalized experiences, direct communication, flexibility, and authentic connections without intermediaries.',
    category: 'Service Guides',
    date: '2026-05-18',
  },
  {
    slug: 'vip-vs-independent-escorts',
    title: 'VIP vs Independent Escorts — Which Should You Choose?',
    excerpt: 'Compare VIP and independent escorts in Vijayawada. Understand differences in experience, personalization, and service style to make the right choice.',
    category: 'Comparison Guide',
    date: '2026-05-16',
  },
  {
    slug: 'luxury-lifestyle-vijayawada',
    title: 'The Ultimate Guide to Luxury Lifestyle in Vijayawada',
    excerpt: 'Discover the finest luxury experiences Vijayawada offers — from premium dining to exclusive entertainment venues and VIP hospitality services.',
    category: 'Luxury Lifestyle',
    date: '2026-05-15',
  },
  {
    slug: 'hotel-booking-guide-travelers-vijayawada',
    title: 'Hotel Booking Guide for Travelers in Vijayawada',
    excerpt: 'Complete hotel guide for travelers visiting Vijayawada. Best hotels, discreet booking tips, and premium accommodation recommendations.',
    category: 'Travel Guide',
    date: '2026-05-12',
  },
  {
    slug: 'premium-hospitality-experiences',
    title: 'Premium Hospitality: What Makes Vijayawada Special',
    excerpt: 'An insider look at Vijayawada\'s premium hospitality landscape — hotels, dining, and exclusive services that define luxury in Andhra Pradesh.',
    category: 'Premium Hospitality',
    date: '2026-05-10',
  },
  {
    slug: 'which-areas-vijayawada-escort-services',
    title: 'Which Areas in Vijayawada Have Escort Services?',
    excerpt: 'Complete guide to escort service areas — Benz Circle, MG Road, Governorpet, Railway Station, Gannavaram, and all premium locations.',
    category: 'Local SEO Guide',
    date: '2026-05-08',
  },
  {
    slug: 'vip-nightlife-guide-vijayawada',
    title: 'VIP Nightlife Guide: Best Evening Experiences in Vijayawada',
    excerpt: 'Your complete guide to Vijayawada\'s sophisticated nightlife scene. From rooftop lounges to exclusive private gatherings and fine dining.',
    category: 'VIP Nightlife',
    date: '2026-05-05',
  },
  {
    slug: 'executive-lifestyle-travel-tips',
    title: 'Executive Travel Tips: Making the Most of Your Vijayawada Visit',
    excerpt: 'Essential tips for business travelers visiting Vijayawada. Hotels, transportation, dining recommendations, and companionship services.',
    category: 'Executive Lifestyle',
    date: '2026-04-28',
  },
  {
    slug: 'privacy-booking-guide',
    title: 'Your Complete Privacy & Booking Guide',
    excerpt: 'Understanding our confidential booking process, privacy protections, and how we ensure complete discretion for every client interaction.',
    category: 'Privacy & Booking',
    date: '2026-04-20',
  },
  {
    slug: 'local-lifestyle-guide-vijayawada',
    title: 'Local Lifestyle Guide: Hidden Gems of Vijayawada',
    excerpt: 'Beyond the tourist spots — discover Vijayawada\'s hidden premium experiences, secret dining spots, and exclusive local attractions.',
    category: 'Local Guides',
    date: '2026-04-15',
  },
];

export default function BlogIndex() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Blog' },
        ]} />
      </div>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Insights & Guides</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            Luxury Lifestyle Blog
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto">
            Expert insights on luxury living, premium hospitality, VIP experiences, and executive lifestyle in Vijayawada.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass-card p-6 hover:border-[#d4af37]/25 transition-all duration-300 group block"
              >
                <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-wider mb-3">{post.category}</span>
                <h2 className="text-white font-semibold text-lg mb-3 group-hover:text-[#d4af37] transition-colors leading-snug">{post.title}</h2>
                <p className="text-[#a0a0b0] text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#a0a0b0]">{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  <span className="text-[#d4af37] text-xs flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ArrowRight size={12} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
