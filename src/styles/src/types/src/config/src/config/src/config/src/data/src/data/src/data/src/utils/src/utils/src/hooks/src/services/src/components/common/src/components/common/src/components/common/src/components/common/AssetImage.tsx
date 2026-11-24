import { useEffect, useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface AssetImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackNote?: string;
  priority?: boolean;
  compactFallback?: boolean;
}

export function AssetImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Asset Slot Ready',
  fallbackNote,
  priority = false,
  compactFallback = false,
}: AssetImageProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError || !src) {
    if (compactFallback) {
      return (
        <div
          className={`flex h-full w-full flex-col items-center justify-center bg-[#F3F0EA] p-2 text-center text-brand-muted ${className}`}
          aria-label={alt}
        >
          <ImageIcon className="h-4 w-4 text-brand-secondary" aria-hidden="true" />
        </div>
      );
    }

    return (
      <div
        className={`flex h-full w-full flex-col items-center justify-center bg-[#F3F0EA] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-brand-secondary/40 bg-brand-surface text-brand-secondary">
          <ImageIcon className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="text-sm font-semibold text-brand-primary">{fallbackTitle}</p>
        <p className="mt-1 max-w-xs text-xs text-brand-muted">
          {fallbackNote || `ফাইল আপলোড করুন: public${src}`}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
