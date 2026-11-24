import {
  Banknote,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  Truck,
  Wallet,
} from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brand';
import { PAYMENT_METHODS } from '../../config/payments';
import { THEME_CONFIG } from '../../config/theme';
import { buildWhatsAppSupportUrl } from '../../utils/whatsapp';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export function TrustSection() {
  return (
    <section className={`${THEME_CONFIG.spacing.sectionPadding} border-t border-brand-border`}>
      <Container>
        <SectionHeading
          eyebrow="Trust & Transparency"
          title="পেমেন্ট, ডেলিভারি ও নীতিমালা"
          subtitle="অর্ডার করার আগে আমাদের পেমেন্ট মাধ্যম, কাস্টমার সাপোর্ট এবং অফিশিয়াল পলিসি জেনে নিন"
        />

        {/* Payment Methods (Informational Trust Cards Only) */}
        <div className="grid gap-5 md:grid-cols-3">
          {PAYMENT_METHODS.map((method) => (
            <div
              key={method.id}
              className="rounded-2xl border border-brand-border bg-brand-surface p-6"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-background text-brand-secondary">
                  {method.id === 'cod' ? (
                    <Banknote className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Wallet className="h-5 w-5" aria-hidden="true" />
                  )}
                </div>
                <span className="rounded-full bg-brand-background px-2.5 py-1 text-xs font-medium text-brand-primary">
                  {method.typeLabel}
                </span>
              </div>

              <h3 className="text-lg font-bold text-brand-primary">{method.name}</h3>
              {method.accountNumber && (
                <p className="mt-1 font-mono text-sm font-semibold text-brand-secondary">
                  নম্বর: {method.accountNumber}
                </p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {method.descriptionBn}
              </p>
            </div>
          ))}
        </div>

        {/* Delivery Transparency & Policy Links */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-brand-border bg-brand-surface p-6">
            <div className="flex items-center gap-2.5">
              <Truck className="h-5 w-5 text-brand-secondary" aria-hidden="true" />
              <h3 className="text-lg font-bold text-brand-primary">ডেলিভারি সংক্রান্ত তথ্য</h3>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-brand-muted">
              আপনার এলাকার ডেলিভারি সুবিধা, সঠিক ডেলিভারি চার্জ ও সময় জানতে সরাসরি WhatsApp সাপোর্টে যোগাযোগ করুন অথবা আমাদের অফিসিয়াল পলিসি পেজ দেখুন।
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={buildWhatsAppSupportUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary underline decoration-brand-secondary underline-offset-4 hover:text-brand-secondary"
              >
                <MessageCircle className="h-4 w-4 text-brand-secondary" aria-hidden="true" />
                <span>WhatsApp সাপোর্ট ({BRAND_CONFIG.contact.whatsappDisplay})</span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-border bg-brand-surface p-6">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="h-5 w-5 text-brand-secondary" aria-hidden="true" />
              <h3 className="text-lg font-bold text-brand-primary">
                ডেলিভারি, রিটার্ন, এক্সচেঞ্জ ও রিফান্ড পলিসি
              </h3>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-brand-muted">
              ক্রেতার স্বচ্ছতার জন্য আমাদের ডেলিভারি, রিটার্ন, এক্সচেঞ্জ, রিফান্ড এবং প্রাইভেসি সংক্রান্ত সকল নিয়মাবলি আলাদা পলিসি পেজে সংরক্ষিত আছে।
            </p>
            <a
              href={BRAND_CONFIG.policiesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary underline decoration-brand-secondary underline-offset-4 hover:text-brand-secondary"
            >
              <span>সকল পলিসি পড়ুন</span>
              <ExternalLink className="h-4 w-4 text-brand-secondary" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
