import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Blog Article - Vijayawada Escorts';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const blogTitles = {
  'luxury-lifestyle-vijayawada': 'The Ultimate Guide to Luxury Lifestyle in Vijayawada',
  'premium-hospitality-experiences': 'Premium Hospitality: What Makes Vijayawada Special',
  'vip-nightlife-guide-vijayawada': 'VIP Nightlife Guide: Best Evening Experiences',
  'executive-lifestyle-travel-tips': 'Executive Travel Tips for Vijayawada',
  'local-lifestyle-guide-vijayawada': 'Local Lifestyle Guide: Best of Vijayawada',
  'privacy-booking-guide': 'Privacy & Booking: Your Complete Guide',
  'how-to-book-escort-service-vijayawada': 'How to Book Escort Service in Vijayawada',
  'what-are-independent-escorts-vijayawada': 'What Are Independent Escorts in Vijayawada?',
  'vip-vs-independent-escorts': 'VIP vs Independent Escorts — Which to Choose?',
  'hotel-booking-guide-travelers-vijayawada': 'Hotel Booking Guide for Travelers',
  'which-areas-vijayawada-escort-services': 'Which Areas in Vijayawada Have Escort Services?',
};

const blogCategories = {
  'luxury-lifestyle-vijayawada': 'Luxury Lifestyle',
  'premium-hospitality-experiences': 'Premium Hospitality',
  'vip-nightlife-guide-vijayawada': 'VIP Nightlife',
  'executive-lifestyle-travel-tips': 'Executive Travel',
  'local-lifestyle-guide-vijayawada': 'Local Guide',
  'privacy-booking-guide': 'Privacy Guide',
  'how-to-book-escort-service-vijayawada': 'Booking Guide',
  'what-are-independent-escorts-vijayawada': 'Service Guide',
  'vip-vs-independent-escorts': 'Comparison',
  'hotel-booking-guide-travelers-vijayawada': 'Travel Guide',
  'which-areas-vijayawada-escort-services': 'Local SEO',
};

export default function Image({ params }) {
  const title = blogTitles[params.slug] || 'Blog Article';
  const category = blogCategories[params.slug] || 'Article';

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0b0b0d 0%, #1a1a2e 50%, #0b0b0d 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Category badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #d4af37, #f3cf58)',
              color: '#0b0b0d',
              padding: '8px 20px',
              borderRadius: 6,
              fontSize: 16,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            {category}
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 'bold',
            color: '#ffffff',
            lineHeight: 1.2,
            maxWidth: '900px',
            marginBottom: 40,
          }}
        >
          {title}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #d4af37, #f3cf58)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: '#0b0b0d',
            }}
          >
            V
          </div>
          <span style={{ color: '#a0a0b0', fontSize: 20 }}>
            vijayawadacallgirls.online
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
