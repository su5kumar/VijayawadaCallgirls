import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Premium VIP Companionship Vijayawada';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0b0b0d 0%, #1a1a2e 50%, #0b0b0d 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30,
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #d4af37, #f3cf58)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              fontWeight: 'bold',
              color: '#0b0b0d',
            }}
          >
            V
          </div>
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 'bold',
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          Vijayawada Escorts
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#d4af37',
            textAlign: 'center',
            marginBottom: 24,
          }}
        >
          Premium VIP Companionship
        </div>
        <div
          style={{
            fontSize: 18,
            color: '#a0a0b0',
            textAlign: 'center',
            maxWidth: 600,
          }}
        >
          Luxury companionship, discreet booking, 24/7 availability
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 14,
            color: '#666',
          }}
        >
          www.vijayawadacallgirls.online
        </div>
      </div>
    ),
    { ...size }
  );
}
