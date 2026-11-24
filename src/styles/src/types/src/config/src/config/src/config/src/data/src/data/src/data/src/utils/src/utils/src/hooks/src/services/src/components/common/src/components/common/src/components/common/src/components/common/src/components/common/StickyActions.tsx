import { ArrowUp, MessageCircle } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { formatPrice } from '../../utils/pricing';
import { buildWhatsAppOrderUrl, buildWhatsAppSupportUrl } from '../../utils/whatsapp';
import { ProductColorVariant } from '../../types/ecommerce';

interface StickyActionsProps {
  selectedVariant: ProductColorVariant;
  sellingPrice: number;
  currencySymbol: string;
}

export function StickyActions({
  selectedVariant,
  sellingPrice,
  currencySymbol,
}: StickyActionsProps) {
  const showScrollTop = useScrollPosition(400);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop / Tablet Floating Controls */}
      <div className="fixed bottom-6 right-5 z-40 hidden flex-col items-end gap-3 md:flex">
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="উপরে ফিরে যান"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-border bg-brand-surface text-brand-primary shadow-editorial transition hover:border-brand-secondary hover:text-brand-secondary"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </button>
        )}

        <a
          href={buildWhatsAppSupportUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp-এ যোগাযোগ করুন"
          className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-4 py-3 text-sm font-medium text-white shadow-editorial ring-1 ring-brand-secondary/50 transition hover:bg-[#222222]"
        >
          <MessageCircle className="h-5 w-5 text-brand-secondary" aria-hidden="true" />
          <span>WhatsApp সাপোর্ট</span>
        </a>
      </div>

      {/* Mobile Scroll-To-Top placed safely above mobile sticky bar */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="উপরে ফিরে যান"
          className="fixed bottom-24 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-surface text-brand-primary shadow-md md:hidden"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </button>
      )}

      {/* Mobile Sticky Bottom Order Bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-border bg-brand-surface/95 px-4 py-3 backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-xs text-brand-muted">
              রং: <span className="font-semibold text-brand-primary">{selectedVariant.name}</span>
            </p>
            <p className="text-lg font-bold text-brand-primary">
              {formatPrice(sellingPrice, currencySymbol)}
            </p>
          </div>
          <a
            href={buildWhatsAppOrderUrl(selectedVariant.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#262626]"
          >
            <MessageCircle className="h-4 w-4 text-brand-secondary" aria-hidden="true" />
            <span>এখনই অর্ডার করুন</span>
          </a>
        </div>
      </div>
    </>
  );
}
