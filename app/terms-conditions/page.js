import Breadcrumb from '@/components/Breadcrumb';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using our premium escort and companionship service in Vijayawada. Please read carefully before using our services.',
  keywords: ['terms and conditions', 'escort service terms', 'Vijayawada escorts policy'],
  alternates: { canonical: `${SITE_URL}/terms-conditions` },
  openGraph: {
    title: 'Terms & Conditions | Vijayawada Escorts',
    description: 'Terms and conditions for our premium companionship service.',
    url: `${SITE_URL}/terms-conditions`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Terms & Conditions - Vijayawada Escorts' }],
  },
  twitter: {
    card: 'summary',
    title: 'Terms & Conditions | Vijayawada Escorts',
    description: 'Terms and conditions for our premium companionship service.',
    images: ['/opengraph-image'],
  },
};

export default function TermsConditions() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Terms & Conditions' },
        ]} />
      </div>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-8">Terms & Conditions</h1>
          <div className="space-y-6 text-[#a0a0b0] text-sm leading-relaxed">
            <p>Last updated: May 2026</p>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">Service Description</h2>
              <p>We provide premium social companionship and hospitality coordination services. Our platform connects clients with professional companions for social events, dining, travel, and leisure activities.</p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">Eligibility</h2>
              <p>You must be 18 years or older to use our services. By engaging with our platform, you confirm that you meet this age requirement.</p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">Booking & Cancellation</h2>
              <p>Bookings are confirmed via WhatsApp communication. Cancellations should be communicated as early as possible. Last-minute cancellations may incur charges as communicated during booking.</p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">Conduct</h2>
              <p>Clients are expected to maintain respectful, professional conduct with companions at all times. Any form of harassment, aggression, or illegal activity will result in immediate service termination.</p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">Limitation of Liability</h2>
              <p>Our service facilitates social companionship arrangements only. We are not liable for any outcomes beyond our scope of service coordination.</p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">Modifications</h2>
              <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
