import Breadcrumb from '@/components/Breadcrumb';
import InternalLinks from '@/components/InternalLinks';
import { SITE_URL, WHATSAPP_URL, EMAIL } from '@/lib/constants';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Premium Escort Service Vijayawada',
  description: 'Contact our premium escort service in Vijayawada. Reach us via WhatsApp for instant booking, email for inquiries, or visit our service areas across Vijayawada.',
  keywords: ['contact escorts Vijayawada', 'WhatsApp escort booking', 'escort service phone number Vijayawada'],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Contact Us | Premium Escort Service Vijayawada',
    description: 'Contact our premium escort service in Vijayawada.',
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Premium Escort Service Vijayawada',
    description: 'Contact our premium escort service in Vijayawada.',
  },
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <MessageCircle size={24} />,
      title: 'WhatsApp',
      description: 'Fastest way to connect. Instant response guaranteed.',
      action: 'Chat Now',
      href: WHATSAPP_URL,
      external: true,
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      description: 'For detailed inquiries and corporate arrangements.',
      action: 'Send Email',
      href: `mailto:${EMAIL}`,
      external: false,
    },
    {
      icon: <MapPin size={24} />,
      title: 'Service Areas',
      description: 'Available across all premium Vijayawada locations.',
      action: 'View Areas',
      href: '/vijayawada-escorts',
      external: false,
    },
    {
      icon: <Clock size={24} />,
      title: 'Availability',
      description: 'Our concierge operates 24/7 without interruption.',
      action: 'Book Now',
      href: '/whatsapp-booking',
      external: false,
    },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Contact' },
        ]} />
      </div>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0f0f14] to-[#0b0b0d]" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Get in Touch</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
            Contact Our Concierge
          </h1>
          <p className="text-[#a0a0b0] text-lg leading-relaxed max-w-3xl mx-auto">
            Our dedicated team is available around the clock to assist with bookings, profile matching, and any inquiries about our premium companionship service in Vijayawada.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                className="glass-card p-7 hover:border-[#d4af37]/25 transition-all duration-300 group block"
              >
                <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-4">
                  {method.icon}
                </div>
                <h2 className="text-white font-semibold text-lg mb-2">{method.title}</h2>
                <p className="text-[#a0a0b0] text-sm mb-4">{method.description}</p>
                <span className="text-[#d4af37] text-sm font-medium group-hover:text-[#f3cf58] transition-colors">{method.action} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="glass-card p-8 md:p-10">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">Important Information</h2>
            <div className="space-y-4 text-[#a0a0b0] text-sm leading-relaxed">
              <p>All communications are encrypted and handled with absolute confidentiality. We do not store personal data beyond what is operationally necessary.</p>
              <p>For corporate arrangements, bulk bookings, or special event coordination, please contact us via email with your requirements.</p>
              <p>WhatsApp remains the fastest channel for individual bookings. Typical response time is under 5 minutes during operational hours.</p>
            </div>
          </div>
        </div>
      </section>

      <InternalLinks />
    </div>
  );
}
