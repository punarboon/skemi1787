import { useState } from 'react';
import { ExternalLink, Facebook, MapPin, MessageCircle, Phone } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brand';
import { buildWhatsAppSupportUrl } from '../../utils/whatsapp';
import { Container } from '../common/Container';

export function Footer() {
  const [logoFailed, setLogoFailed] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border bg-brand-primary pb-24 pt-14 text-white md:pb-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Summary */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              {!logoFailed ? (
                <img
                  src={BRAND_CONFIG.logo.src}
                  alt={BRAND_CONFIG.logo.alt}
                  onError={() => setLogoFailed(true)}
                  className="h-10 w-auto rounded bg-white/95 p-1 object-contain"
                />
              ) : (
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-secondary/60 bg-white/10 text-base font-bold text-brand-secondary">
                  P
                </span>
              )}
              <span className="text-xl font-bold tracking-wide text-white">
                {BRAND_CONFIG.name}
              </span>
            </div>
            <p className="mt-3 text-sm font-medium text-brand-secondary">
              {BRAND_CONFIG.tagline}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-300">
              সঠিক পণ্যের তথ্য, স্বচ্ছ মূল্য এবং সরাসরি কাস্টমার সাপোর্টের মাধ্যমে বিশ্বস্ত অনলাইন শপিং অভিজ্ঞতা।
            </p>
          </div>

          {/* Navigation & Policies */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              লিংকসমূহ
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-neutral-300">
              {BRAND_CONFIG.navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BRAND_CONFIG.policiesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-secondary transition hover:underline"
                >
                  <span>ডেলিভারি, রিটার্ন ও রিফান্ড পলিসি</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              যোগাযোগ ও সাপোর্ট
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-300">
              <li>
                <a
                  href={BRAND_CONFIG.contact.phoneHref}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 text-brand-secondary" aria-hidden="true" />
                  <span>{BRAND_CONFIG.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppSupportUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-brand-secondary" aria-hidden="true" />
                  <span>WhatsApp: {BRAND_CONFIG.contact.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND_CONFIG.contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Facebook className="h-4 w-4 text-brand-secondary" aria-hidden="true" />
                  <span>Facebook Page</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" aria-hidden="true" />
                <span>{BRAND_CONFIG.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-neutral-400 sm:flex-row">
          <p>
            &copy; {currentYear} {BRAND_CONFIG.name}. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p>{BRAND_CONFIG.contact.address}</p>
        </div>
      </Container>
    </footer>
  );
}
