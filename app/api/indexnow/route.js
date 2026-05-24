import { NextResponse } from 'next/server';

const INDEXNOW_KEY = 'faa50516eb1b419b97ffc33030290cca';
const HOST = 'https://www.vijayawadacallgirls.online';

export async function POST(request) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: 'No URLs provided' }, { status: 400 });
    }

    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'www.vijayawadacallgirls.online',
        key: INDEXNOW_KEY,
        keyLocation: `${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls.map(url => url.startsWith('http') ? url : `${HOST}${url}`),
      }),
    });

    return NextResponse.json({
      success: true,
      status: response.status,
      submitted: urls.length,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}

// GET endpoint to submit all sitemap URLs at once
export async function GET() {
  const allUrls = [
    '/',
    '/vijayawada-escorts',
    '/vijayawada-call-girls',
    '/vip-escorts-vijayawada',
    '/independent-escorts-vijayawada',
    '/hotel-escort-service-vijayawada',
    '/24-7-escorts-vijayawada',
    '/luxury-companionship',
    '/premium-models',
    '/whatsapp-booking',
    '/benz-circle-escorts',
    '/mg-road-vijayawada',
    '/governorpet-escorts',
    '/patamata-companionship',
    '/railway-station-escorts-vijayawada',
    '/gannavaram-escorts',
    '/blog',
    '/blog/how-to-book-escort-service-vijayawada',
    '/blog/what-are-independent-escorts-vijayawada',
    '/blog/vip-vs-independent-escorts',
    '/blog/luxury-lifestyle-vijayawada',
    '/blog/hotel-booking-guide-travelers-vijayawada',
    '/blog/premium-hospitality-experiences',
    '/blog/which-areas-vijayawada-escort-services',
    '/blog/vip-nightlife-guide-vijayawada',
    '/blog/executive-lifestyle-travel-tips',
    '/blog/local-lifestyle-guide-vijayawada',
    '/blog/privacy-booking-guide',
    '/faq',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-conditions',
    '/disclaimer',
  ];

  try {
    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'www.vijayawadacallgirls.online',
        key: INDEXNOW_KEY,
        keyLocation: `${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: allUrls.map(url => `${HOST}${url}`),
      }),
    });

    return NextResponse.json({
      success: true,
      status: response.status,
      submitted: allUrls.length,
      message: 'All URLs submitted to IndexNow (Bing + Yandex)',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
