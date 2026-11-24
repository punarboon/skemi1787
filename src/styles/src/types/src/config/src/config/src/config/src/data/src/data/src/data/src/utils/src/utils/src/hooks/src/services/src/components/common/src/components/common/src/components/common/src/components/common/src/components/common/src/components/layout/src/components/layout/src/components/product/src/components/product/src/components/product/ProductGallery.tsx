import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { ProductGalleryImage } from '../../types/ecommerce';
import { AssetImage } from '../common/AssetImage';

interface ProductGalleryProps {
  images: ProductGalleryImage[];
  activeIndex: number;
  onSelectIndex: (index: number) => void;
  selectedVariantName: string;
}

export function ProductGallery({
  images,
  activeIndex,
  onSelectIndex,
  selectedVariantName,
}: ProductGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const safeIndex = activeIndex >= 0 && activeIndex < images.length ? activeIndex : 0;
  const activeImage = images[safeIndex];

  const handlePrev = () => {
    onSelectIndex((safeIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    onSelectIndex((safeIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxOpen(false);
      } else if (event.key === 'ArrowLeft') {
        onSelectIndex((safeIndex - 1 + images.length) % images.length);
      } else if (event.key === 'ArrowRight') {
        onSelectIndex((safeIndex + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, safeIndex, images.length, onSelectIndex]);

  return (
    <div className="space-y-4">
      {/* Main Image Frame */}
      <div className="group relative aspect-square overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-editorial">
        <AssetImage
          src={activeImage.src}
          alt={activeImage.alt}
          priority
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          fallbackTitle={`SKMEI 1787 — ${selectedVariantName}`}
          fallbackNote={`প্রোডাক্টের আসল ছবি যোগ করুন: public${activeImage.src}`}
        />

        {/* Subtle Variant Label */}
        <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-brand-primary/85 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {selectedVariantName}
        </div>

        {/* Zoom / Lightbox Trigger */}
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label="ছবি বড় করে দেখুন"
          className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-surface/90 text-brand-primary shadow-sm backdrop-blur-sm transition hover:border-brand-secondary hover:text-brand-secondary"
        >
          <ZoomIn className="h-4 w-4" aria-hidden="true" />
        </button>

        {/* Mobile & Desktop Prev/Next Carousel Controls */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="আগের ছবি"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-brand-border bg-brand-surface/85 text-brand-primary shadow-sm backdrop-blur-sm transition hover:bg-brand-surface"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="পরবর্তী ছবি"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-brand-border bg-brand-surface/85 text-brand-primary shadow-sm backdrop-blur-sm transition hover:bg-brand-surface"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Navigation */}
      <div
        className="flex gap-2.5 overflow-x-auto pb-1"
        role="region"
        aria-label="প্রোডাক্ট থাম্বনেইল গ্যালারি"
      >
        {images.map((img, idx) => {
          const isActive = idx === safeIndex;
          return (
            <button
              key={img.id}
              type="button"
              onClick={() => onSelectIndex(idx)}
              aria-label={`ছবি ${idx + 1}: ${img.alt}`}
              aria-current={isActive ? 'true' : undefined}
              className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border transition sm:h-20 sm:w-20 ${
                isActive
                  ? 'border-brand-primary ring-2 ring-brand-secondary'
                  : 'border-brand-border opacity-80 hover:opacity-100'
              }`}
            >
              <AssetImage
                src={img.src}
                alt={img.alt}
                compactFallback
                className="h-full w-full object-cover"
              />
            </button>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="প্রোডাক্ট ছবি জুম ভিউ"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="বন্ধ করুন"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <div
            className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-xl bg-brand-surface"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-square w-full">
              <AssetImage
                src={activeImage.src}
                alt={activeImage.alt}
                className="h-full w-full object-contain"
                fallbackTitle={`SKMEI 1787 — ${selectedVariantName}`}
                fallbackNote={`ছবি যোগ করুন: public${activeImage.src}`}
              />
            </div>

            {images.length > 1 && (
              <div className="flex items-center justify-between border-t border-brand-border bg-brand-surface px-4 py-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:text-brand-secondary"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  <span>আগের ছবি</span>
                </button>
                <span className="text-xs text-brand-muted">
                  {safeIndex + 1} / {images.length}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:text-brand-secondary"
                >
                  <span>পরবর্তী ছবি</span>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
