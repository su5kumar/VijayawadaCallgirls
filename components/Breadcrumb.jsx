import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumb({ items }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      "item": item.href ? `https://www.vijayawadacallgirls.online${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 sm:py-4 overflow-x-auto scrollbar-hide">
        <ol className="flex items-center gap-1 sm:gap-1.5 text-xs text-[#a0a0b0] whitespace-nowrap sm:whitespace-normal sm:flex-wrap">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-1 sm:gap-1.5 min-w-0">
              {idx > 0 && <ChevronRight size={10} className="text-[#a0a0b0]/50 shrink-0" />}
              {item.href ? (
                <Link href={item.href} className="hover:text-[#d4af37] transition-colors truncate max-w-[120px] sm:max-w-none py-1">{item.name}</Link>
              ) : (
                <span className="text-[#d4af37] truncate max-w-[140px] sm:max-w-none">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
