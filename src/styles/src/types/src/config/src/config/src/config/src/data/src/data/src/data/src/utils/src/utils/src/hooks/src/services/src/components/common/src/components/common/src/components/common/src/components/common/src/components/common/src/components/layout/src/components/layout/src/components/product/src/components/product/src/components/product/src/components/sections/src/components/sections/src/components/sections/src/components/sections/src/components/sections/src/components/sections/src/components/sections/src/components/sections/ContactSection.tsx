import { Facebook, MapPin, MessageCircle, Phone } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brand';
import { THEME_CONFIG } from '../../config/theme';
import { buildWhatsAppSupportUrl } from '../../utils/whatsapp';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export function ContactSection() {
  return (
    <section
      id="contact"
      className={`${THEME_CONFIG.spacing.sectionPadding} border-t border-brand-border bg-brand-surface`}
    >
      <Container>
        <SectionHeading
          eyebrow="Customer Support"
          title="আমাদের সাথে যোগাযোগ করুন"
          subtitle="অর্ডার, পণ্যের তথ্য বা যেকোনো সহায়তার জন্য সরাসরি যোগাযোগ করুন"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={buildWhatsAppSupportUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-brand-border bg-brand-background p-6 transition hover:border-brand-secondary"
          >
            <MessageCircle className="h-6 w-6 text-brand-secondary" aria-hidden="true" />
            <h3 className="mt-3 text-base font-bold text-brand-primary">WhatsApp সাপোর্ট</h3>
            <p className="mt-1 text-sm font-medium text-brand-text">
              {BRAND_CONFIG.contact.whatsappDisplay}
            </p>
            <p className="mt-2 text-xs text-brand-muted">সরাসরি চ্যাট করতে ক্লিক করুন</p>
          </a>

          <a
            href={BRAND_CONFIG.contact.phoneHref}
            className="rounded-2xl border border-brand-border bg-brand-background p-6 transition hover:border-brand-secondary"
          >
            <Phone className="h-6 w-6 text-brand-secondary" aria-hidden="true" />
            <h3 className="mt-3 text-base font-bold text-brand-primary">ফোন নম্বর</h3>
            <p className="mt-1 text-sm font-medium text-brand-text">
              {BRAND_CONFIG.contact.phoneDisplay}
            </p>
            <p className="mt-2 text-xs text-brand-muted">সরাসরি কল করতে ক্লিক করুন</p>
          </a>

          <a
            href={BRAND_CONFIG.contact.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-brand-border bg-brand-background p-6 transition hover:border-brand-secondary"
          >
            <Facebook className="h-6 w-6 text-brand-secondary" aria-hidden="true" />
            <h3 className="mt-3 text-base font-bold text-brand-primary">Facebook পেজ</h3>
            <p className="mt-1 text-sm font-medium text-brand-text">facebook.com/Punarboon</p>
            <p className="mt-2 text-xs text-brand-muted">পেজ ভিজিট করতে ক্লিক করুন</p>
          </a>

          <div className="rounded-2xl border border-brand-border bg-brand-background p-6">
            <MapPin className="h-6 w-6 text-brand-secondary" aria-hidden="true" />
            <h3 className="mt-3 text-base font-bold text-brand-primary">ব্যবসায়িক ঠিকানা</h3>
            <p className="mt-1 text-sm leading-relaxed text-brand-text">
              {BRAND_CONFIG.contact.address}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
