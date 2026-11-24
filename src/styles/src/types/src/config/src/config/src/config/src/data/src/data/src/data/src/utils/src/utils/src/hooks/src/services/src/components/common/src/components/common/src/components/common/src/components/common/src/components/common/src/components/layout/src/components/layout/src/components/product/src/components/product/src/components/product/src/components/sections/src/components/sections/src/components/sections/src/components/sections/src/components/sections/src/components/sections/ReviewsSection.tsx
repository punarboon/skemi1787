import { Facebook, MessageSquare } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brand';
import { THEME_CONFIG } from '../../config/theme';
import { CustomerReview } from '../../types/ecommerce';
import { buildWhatsAppSupportUrl } from '../../utils/whatsapp';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

interface ReviewsSectionProps {
  reviews: CustomerReview[];
}

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  const approvedReviews = reviews.filter((review) => review.verified);

  return (
    <section
      id="reviews"
      className={`${THEME_CONFIG.spacing.sectionPadding} border-t border-brand-border bg-brand-surface`}
    >
      <Container>
        <SectionHeading
          eyebrow="Customer Feedback"
          title="ক্রেতাদের অভিজ্ঞতা ও মতামত"
        />

        {approvedReviews.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-3">
            {approvedReviews.map((review) => (
              <article
                key={review.id}
                className="rounded-2xl border border-brand-border bg-brand-background p-6"
              >
                <p className="text-sm leading-relaxed text-brand-text">{review.comment}</p>
                <div className="mt-4 border-t border-brand-border pt-3 text-xs font-semibold text-brand-primary">
                  {review.customerName}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-2xl rounded-2xl border border-brand-border bg-brand-background p-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-brand-secondary/40 bg-brand-surface text-brand-secondary">
              <MessageSquare className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-brand-primary">
              আপনার অভিজ্ঞতা শেয়ার করুন
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
              আমাদের যাচাইকৃত ক্রেতাদের রিভিউ এখানে যুক্ত করা হবে। ঘড়িটি সংগ্রহ ও ব্যবহারের পর আপনার মূল্যবান মতামত WhatsApp বা Facebook পেজে শেয়ার করার জন্য আন্তরিক আমন্ত্রণ রইল।
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href={buildWhatsAppSupportUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-brand-primary px-4 py-2 text-xs font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
              >
                WhatsApp-এ মতামত দিন
              </a>
              <a
                href={BRAND_CONFIG.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-brand-border bg-brand-surface px-4 py-2 text-xs font-semibold text-brand-primary transition hover:border-brand-secondary"
              >
                <Facebook className="h-3.5 w-3.5 text-brand-secondary" aria-hidden="true" />
                <span>Facebook পেজ</span>
              </a>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
