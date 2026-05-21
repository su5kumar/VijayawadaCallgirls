import Breadcrumb from '@/components/Breadcrumb';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Our privacy policy outlines how we collect, protect, and handle your personal information when using our premium escort service in Vijayawada.',
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Privacy Policy' },
        ]} />
      </div>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="space-y-6 text-[#a0a0b0] text-sm leading-relaxed">
            <p>Last updated: May 2026</p>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">Information We Collect</h2>
              <p>We collect minimal information necessary to provide our services. This may include contact details provided voluntarily through WhatsApp or email communications.</p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">How We Use Information</h2>
              <p>Information is used solely for booking coordination, service delivery, and customer support. We never sell, share, or disclose personal information to third parties.</p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">Data Security</h2>
              <p>All communications are encrypted. We employ industry-standard security measures to protect any information in our possession. Data is retained only as long as operationally necessary.</p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">Cookies & Analytics</h2>
              <p>Our website may use essential cookies for functionality. We do not use invasive tracking or share browsing data with advertising networks.</p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">Your Rights</h2>
              <p>You may request deletion of any personal information we hold. Contact us via WhatsApp or email to exercise your privacy rights.</p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">Contact</h2>
              <p>For privacy-related inquiries, please contact us through our secure WhatsApp channel or email.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
