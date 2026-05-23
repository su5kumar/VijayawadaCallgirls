import Breadcrumb from '@/components/Breadcrumb';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Disclaimer',
  description: 'Important disclaimer regarding our premium companionship services in Vijayawada. Please read before using our platform.',
  keywords: ['disclaimer', 'escort service disclaimer', 'terms Vijayawada escorts'],
  alternates: { canonical: `${SITE_URL}/disclaimer` },
  openGraph: {
    title: 'Disclaimer | Vijayawada Escorts',
    description: 'Important disclaimer regarding our premium companionship services.',
    url: `${SITE_URL}/disclaimer`,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Disclaimer | Vijayawada Escorts',
    description: 'Important disclaimer regarding our premium companionship services.',
  },
};

export default function Disclaimer() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Disclaimer' },
        ]} />
      </div>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-8">Disclaimer</h1>
          <div className="space-y-6 text-[#a0a0b0] text-sm leading-relaxed">
            <div>
              <h2 className="text-white font-semibold text-lg mb-2">Nature of Services</h2>
              <p>This website promotes premium social companionship and hospitality coordination services. All arrangements are for legal social companionship purposes including corporate events, dining, travel, and leisure activities.</p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">No Illegal Activities</h2>
              <p>We do not support, facilitate, or condone any illegal activities. Our services are strictly limited to professional social companionship within the boundaries of applicable laws.</p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">Age Restriction</h2>
              <p>All companions and clients must be 18 years of age or older. Access to this website and our services is restricted to adults only.</p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">Content Accuracy</h2>
              <p>While we strive to maintain accurate information, content on this website is for informational purposes. Service availability and details may change without notice.</p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">Third-Party Links</h2>
              <p>Any external links on this website are provided for convenience. We are not responsible for the content or practices of external websites.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
