import Breadcrumb from '@/components/Breadcrumb';
import InternalLinks from '@/components/InternalLinks';
import { SITE_URL, PHONE, EMAIL } from '@/lib/constants';
import { Shield, Users, Clock, Award } from 'lucide-react';

export const metadata = {
  title: 'About Us | Premium Companionship Platform Vijayawada',
  description: 'Learn about our trusted premium companionship platform in Vijayawada. Our mission, values, team standards, and commitment to privacy and professionalism.',
  keywords: ['about Vijayawada escorts', 'companionship platform', 'trusted escort service'],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About Us | Premium Companionship Platform Vijayawada',
    description: 'Learn about our trusted premium companionship platform in Vijayawada.',
    url: `${SITE_URL}/about`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'About Us - Vijayawada Escorts' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Premium Companionship Platform Vijayawada',
    description: 'Learn about our trusted premium companionship platform in Vijayawada.',
    images: ['/opengraph-image'],
  },
};

const values = [
  {
    icon: <Shield size={24} />,
    title: 'Privacy First',
    description: 'End-to-end encrypted communication. No personal data stored beyond operational necessity. Complete discretion guaranteed.',
  },
  {
    icon: <Users size={24} />,
    title: 'Verified Profiles',
    description: 'Every companion is personally vetted for professionalism, social etiquette, and authenticity before joining our platform.',
  },
  {
    icon: <Clock size={24} />,
    title: '24/7 Availability',
    description: 'Round-the-clock concierge support with dedicated team members for different shifts. Real human assistance anytime.',
  },
  {
    icon: <Award size={24} />,
    title: 'Premium Standards',
    description: 'Luxury hospitality standards maintained across every interaction — from first inquiry to final coordination.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'About Us', href: '/about' },
        ]} />
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">About Us</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            Premium Companionship Platform in Vijayawada
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto">
            We are a trusted platform connecting discerning individuals with verified, professional companions for social events, business travel, private gatherings, and luxury hospitality experiences across Vijayawada and Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="space-y-8 text-[#a0a0b0] text-[15px] leading-relaxed">
            <div>
              <h2 className="text-white font-semibold text-2xl mb-4 font-[family-name:var(--font-heading)]">
                Our Mission
              </h2>
              <p>
                Our platform was built to address the growing demand for professional, discreet, and high-quality social companionship in Vijayawada. As the city evolved into a major business and tourism hub in South India, we recognized the need for a trusted service that prioritizes client privacy, companion safety, and premium experiences.
              </p>
              <p className="mt-3">
                We operate with transparency and integrity, ensuring every interaction meets the highest standards of professionalism. Our team includes dedicated concierge coordinators, profile verification specialists, and client support professionals working 24/7.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-2xl mb-4 font-[family-name:var(--font-heading)]">
                How We Operate
              </h2>
              <p>
                Unlike generic listing platforms, we maintain direct relationships with every companion on our roster. Each profile undergoes a multi-step verification process including identity confirmation, professional background assessment, and in-person evaluation for social skills and etiquette.
              </p>
              <p className="mt-3">
                Our concierge team personally coordinates every booking to ensure compatibility, timing, and logistical perfection. This hands-on approach is what separates us from automated services.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-2xl mb-4 font-[family-name:var(--font-heading)]">
                Editorial Standards
              </h2>
              <p>
                All content on our platform is written and reviewed by our editorial team. Blog articles are researched for accuracy and updated regularly to reflect current information. We do not publish auto-generated or misleading content. Our guides aim to help visitors make informed decisions about hospitality and companionship in Vijayawada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="text-white font-semibold text-2xl mb-8 font-[family-name:var(--font-heading)] text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="glass-card p-7">
                <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-[#a0a0b0] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-white font-semibold text-2xl mb-4 font-[family-name:var(--font-heading)]">
            Get in Touch
          </h2>
          <p className="text-[#a0a0b0] mb-6">
            For inquiries, partnership opportunities, or feedback, reach us through:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[#a0a0b0] text-sm">
            <span>Phone: {PHONE}</span>
            <span className="hidden sm:inline">•</span>
            <span>Email: {EMAIL}</span>
          </div>
          <p className="text-[#666] text-xs mt-6">
            Last updated: May 2026
          </p>
        </div>
      </section>

      <InternalLinks />
    </div>
  );
}
