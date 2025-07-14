
import React, { useState } from 'react';
import { ChevronDown, Clock, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  isNew?: boolean;
  isUpdated?: boolean;
  lastUpdated?: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  categoryTitle: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs, categoryTitle }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-light text-[#121212] mb-2">{categoryTitle}</h2>
        <p className="text-[#121212]/70">Find detailed answers to common questions</p>
      </div>

      <div className="space-y-2">
        {faqs.map((faq) => {
          const isOpen = openItems.includes(faq.id);
          
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#f9fafa] transition-colors duration-200"
                aria-expanded={isOpen}
                aria-controls={`faq-content-${faq.id}`}
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-medium text-[#121212] leading-relaxed">
                      {faq.question}
                    </h3>
                    {faq.isNew && (
                      <Badge className="bg-[#3367d6] text-white text-xs px-2 py-0.5">
                        NEW
                      </Badge>
                    )}
                    {faq.isUpdated && (
                      <Badge variant="outline" className="text-xs px-2 py-0.5 border-[#3367d6] text-[#3367d6]">
                        UPDATED
                      </Badge>
                    )}
                  </div>
                  {faq.lastUpdated && (
                    <div className="flex items-center text-xs text-[#121212]/50">
                      <Clock className="w-3 h-3 mr-1" />
                      Updated {faq.lastUpdated}
                    </div>
                  )}
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-[#121212]/50 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {isOpen && (
                <div
                  id={`faq-content-${faq.id}`}
                  className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300"
                >
                  <div className="prose prose-lg max-w-none">
                    <div 
                      className="text-[#121212]/80 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQAccordion;
