import './globals.css';
import { Manrope, Playfair_Display } from 'next/font/google';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
  fallback: ['Segoe UI', 'Arial', 'sans-serif'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Luxury Vijayawada Escorts Service | Premium VIP Companionship',
    template: '%s | Vijayawada Escorts',
  },
  description: 'Discover premium companionship experiences in Vijayawada with discreet booking, VIP hospitality, elegant lifestyle experiences, and confidential WhatsApp support available 24/7.',
  keywords: ['Vijayawada escorts', 'Vijayawada escorts service', 'Vijayawada call girls', 'call girls in Vijayawada', 'escort service Vijayawada', 'VIP escorts Vijayawada', 'luxury escorts Vijayawada'],
  authors: [{ name: SITE_NAME }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Luxury Vijayawada Escorts Service | Premium VIP Companionship',
    description: 'Discover premium companionship experiences in Vijayawada with discreet booking, VIP hospitality, and confidential WhatsApp support available 24/7.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Premium VIP Companionship Vijayawada' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Vijayawada Escorts Service | Premium VIP Companionship',
    description: 'Premium companionship and VIP hospitality in Vijayawada.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vijayawada Escorts - Premium Companionship",
    "image": `${SITE_URL}/og-image.jpg`,
    "@id": `${SITE_URL}/#localbusiness`,
    "url": SITE_URL,
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
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 16.5062,
      "longitude": 80.6480
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "186"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": SITE_URL,
    "logo": `${SITE_URL}/og-image.jpg`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919892335464",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Telugu"]
    },
    "sameAs": []
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_NAME,
    "url": SITE_URL,
    "inLanguage": "en-IN",
    "description": "Premium companionship, VIP hospitality, local lifestyle guidance, and confidential booking assistance in Vijayawada."
  };

  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-[#0b0b0d] text-[#f5f5f7] font-[family-name:var(--font-body)] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
