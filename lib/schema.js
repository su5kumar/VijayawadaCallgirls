import { SITE_URL, SITE_NAME } from './constants';

/**
 * Generates FAQPage schema markup
 * @param {Array<{q: string, a: string}>} items - FAQ items
 */
export function generateFAQSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };
}

/**
 * Generates BreadcrumbList schema markup
 * @param {Array<{name: string, href?: string}>} items - Breadcrumb items
 */
export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      ...(item.href ? { "item": `${SITE_URL}${item.href}` } : {})
    }))
  };
}

/**
 * Generates LocalBusiness schema markup
 * @param {object} options - Business details overrides
 */
export function generateLocalBusinessSchema(options = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": options.name || `${SITE_NAME} - Premium Companionship`,
    "image": `${SITE_URL}/opengraph-image`,
    "@id": `${SITE_URL}/#localbusiness`,
    "url": options.url || SITE_URL,
    "telephone": "+919892335464",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": options.street || "Benz Circle, Ring Road",
      "addressLocality": "Vijayawada",
      "postalCode": options.postalCode || "520010",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": options.lat || 16.5062,
      "longitude": options.lng || 80.6480
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
}

/**
 * Generates Service schema markup
 * @param {object} options - Service details
 */
export function generateServiceSchema(options) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": options.name,
    "description": options.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": `${SITE_NAME} - Premium Companionship`,
      "url": SITE_URL
    },
    "areaServed": {
      "@type": "City",
      "name": "Vijayawada",
      "containedIn": {
        "@type": "State",
        "name": "Andhra Pradesh"
      }
    },
    "serviceType": options.serviceType || "Companionship Service",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": SITE_URL,
      "servicePhone": "+919892335464",
      "availableLanguage": ["English", "Hindi", "Telugu"]
    }
  };
}

/**
 * Generates Review schema markup
 * @param {Array<{author: string, text: string, rating: number}>} reviews
 */
export function generateReviewSchema(reviews) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${SITE_NAME} - Premium Companionship`,
    "url": SITE_URL,
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      }
    }))
  };
}

/**
 * Generates page metadata for SEO
 * @param {object} options - Metadata options
 */
export function generateMetadata(options) {
  const url = options.path ? `${SITE_URL}${options.path}` : SITE_URL;
  return {
    title: options.title,
    description: options.description,
    alternates: { canonical: url },
    openGraph: {
      title: options.title,
      description: options.description,
      url,
      type: 'website',
      images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: options.title,
      description: options.description,
    },
  };
}
