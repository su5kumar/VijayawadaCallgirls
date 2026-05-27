'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/constants';

export default function FAQ({ items = FAQ_ITEMS, title = 'Frequently Asked Questions', subtitle }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 md:py-28 relative" id="faq">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Knowledge Base</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          {subtitle && <p className="text-[#a0a0b0] text-base">{subtitle}</p>}
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div key={idx} className={`glass-card overflow-hidden transition-all duration-300 ${isActive ? 'border-[#d4af37]/30' : ''}`}>
                <button
                  onClick={() => setActiveIndex(isActive ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={isActive}
                >
                  <span className="text-white font-medium text-sm pr-4">{item.q}</span>
                  <ChevronDown size={18} className={`text-[#d4af37] shrink-0 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-[500px] pb-5 px-5' : 'max-h-0'}`}>
                  <p className="text-[#a0a0b0] text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
