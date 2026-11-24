import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brand';
import { THEME_CONFIG } from '../../config/theme';
import { FaqItem } from '../../types/ecommerce';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

interface FaqSectionProps {
  items: FaqItem[];
}

export function FaqSection({ items }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className={`${THEME_CONFIG.spacing.sectionPadding} border-t border-brand-border`}>
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="সাধারণ জিজ্ঞাসা ও উত্তর"
          subtitle="অর্ডার, পেমেন্ট, কালার অপশন ও ব্যবহারবিধি সম্পর্কে প্রয়োজনীয় তথ্য"
        />

        <div className="mx-auto max-w-3xl space-y-3">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl border border-brand-border bg-brand-surface"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-brand-primary transition hover:bg-brand-background/60"
                >
                  <span className="text-base">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-secondary transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="border-t border-brand-border/70 px-5 py-4 text-sm leading-relaxed text-brand-muted"
                  >
                    <p>{item.answer}</p>
                    {item.policyLinkLabel && (
                      <a
                        href={BRAND_CONFIG.policiesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary underline decoration-brand-secondary underline-offset-4 hover:text-brand-secondary"
                      >
                        <span>{item.policyLinkLabel}</span>
                        <ExternalLink className="h-3.5 w-3.5 text-brand-secondary" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
