'use client';

import { useState } from 'react';
import { generateFAQSchema } from '@/lib/schema';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = 'Frequently Asked Questions' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const schemaData = generateFAQSchema(items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="mb-12">
            <h2 className="section-heading text-forest mb-4">{title}</h2>
            <p className="text-text-mid text-lg">Get answers to common questions about our services.</p>
          </div>

          <div className="max-w-2xl">
            {items.map((item, index) => (
              <div key={index} className="border-b border-stone-warm last:border-b-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:bg-stone-warm transition"
                >
                  <h3 className="font-600 text-forest text-lg pr-4">{item.question}</h3>
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-mint rounded-full text-white font-bold text-lg transition-transform duration-300" style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    ↓
                  </span>
                </button>
                {openIndex === index && (
                  <div className="pb-6 animate-slide-down">
                    <p className="text-text-mid leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
