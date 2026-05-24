import './globals.css';
import Script from 'next/script';
import { Manrope, Playfair_Display } from 'next/font/google';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StickyMobileCTA from '@/components/StickyMobileCTA';

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
    default: 'Vijayawada Escorts Service | Premium VIP Companionship',
    template: '%s | Vijayawada Escorts',
  },
  description: 'Discover premium companionship and VIP escort services in Vijayawada with discreet booking, verified profiles, and luxury hospitality experiences available 24/7.',
  keywords: ['Vijayawada escorts', 'premium companionship Vijayawada', 'luxury hospitality Vijayawada', 'VIP companionship', 'social companion Vijayawada'],
  authors: [{ name: SITE_NAME }],
  robots: { index: true, follow: true },
  verification: {
    google: 'VD-2ptuidTWVk9ZW-FRnBPlRsTiPFHcazYbXXbxVVCo',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Vijayawada Escorts Service | Luxury VIP Companionship',
    description: 'Premium Vijayawada escorts with verified companions, luxury VIP hospitality, and discreet WhatsApp booking available 24/7.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Premium VIP Companionship Vijayawada' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijayawada Escorts Service | Luxury VIP Companionship',
    description: 'Premium Vijayawada escorts with verified companions and discreet WhatsApp booking 24/7.',
    images: ['/opengraph-image'],
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
    "image": `${SITE_URL}/opengraph-image`,
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
    "logo": `${SITE_URL}/opengraph-image`,
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
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            function loadGA() {
              if (window._gaLoaded) return;
              window._gaLoaded = true;
              var s = document.createElement('script');
              s.src = 'https://www.googletagmanager.com/gtag/js?id=G-PV7LDJP0WL';
              s.async = true;
              document.head.appendChild(s);
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-PV7LDJP0WL');
            }
            var t = setTimeout(loadGA, 5000);
            ['scroll','click','touchstart','keydown'].forEach(function(e){
              document.addEventListener(e, function(){clearTimeout(t);loadGA();}, {once:true,passive:true});
            });
          `}
        </Script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
