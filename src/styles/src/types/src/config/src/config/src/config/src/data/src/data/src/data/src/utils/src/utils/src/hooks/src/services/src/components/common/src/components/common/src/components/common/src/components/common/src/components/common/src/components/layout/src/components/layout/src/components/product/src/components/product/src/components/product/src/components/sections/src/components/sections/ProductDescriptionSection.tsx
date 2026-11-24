import { Check, Package } from 'lucide-react';
import { THEME_CONFIG } from '../../config/theme';
import { Product } from '../../types/ecommerce';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

interface ProductDescriptionSectionProps {
  product: Product;
}

export function ProductDescriptionSection({ product }: ProductDescriptionSectionProps) {
  return (
    <section className={`${THEME_CONFIG.spacing.sectionPadding} border-t border-brand-border bg-brand-surface`}>
      <Container>
        <SectionHeading
          eyebrow="Product Story"
          title="প্রতিদিনের ফ্যাশনে ব্যতিক্রমী উপস্থিতি"
          subtitle="SKMEI 1787 Rotation Wheel Watch-এর ডিজাইন, ব্যবহার উপযোগিতা এবং প্যাকেজ তথ্য"
        />

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            <div className="rounded-2xl border border-brand-border bg-brand-background p-6 sm:p-8">
              <h3 className="text-xl font-bold text-brand-primary">
                ডিজাইন ও ব্যবহার অভিজ্ঞতা
              </h3>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-brand-text">
                {product.descriptionParagraphsBn.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-5">
            {/* Quick Spec Highlights */}
            <div className="rounded-2xl border border-brand-border bg-brand-background p-6">
              <h3 className="text-lg font-bold text-brand-primary">মূল বিবরণ একনজরে</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-brand-text">
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" aria-hidden="true" />
                  <span>আকর্ষণীয় Rotating Wheel-inspired ডায়াল ডিজাইন</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" aria-hidden="true" />
                  <span>Quartz movement, Alloy কেস ও Stainless Steel স্ট্র্যাপ</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" aria-hidden="true" />
                  <span>৪৩ মিমি ডায়াল ও ১১ মিমি কেস প্রোফাইল (আনুমানিক ১২৩ গ্রাম)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" aria-hidden="true" />
                  <span>৪টি কালার ভ্যারিয়েন্ট: Red, Yellow, Green এবং Black</span>
                </li>
              </ul>
            </div>

            {/* Verified Package Contents Only */}
            <div className="rounded-2xl border border-brand-border bg-brand-background p-6">
              <div className="flex items-center gap-2.5">
                <Package className="h-5 w-5 text-brand-secondary" aria-hidden="true" />
                <h3 className="text-lg font-bold text-brand-primary">প্যাকেজে যা থাকছে</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-brand-text">
                {product.packageContentsBn.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
