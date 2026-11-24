import { AlertCircle, Check } from 'lucide-react';
import { ProductColorVariant } from '../../types/ecommerce';

interface ColorSelectorProps {
  variants: ProductColorVariant[];
  selectedVariant: ProductColorVariant;
  onSelectVariant: (variant: ProductColorVariant) => void;
  stockNoticeBn: string;
}

export function ColorSelector({
  variants,
  selectedVariant,
  onSelectVariant,
  stockNoticeBn,
}: ColorSelectorProps) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-sm font-semibold text-brand-primary">
          রং নির্বাচন করুন:{' '}
          <span className="font-bold text-brand-secondary">{selectedVariant.nameBn}</span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-muted">
          <AlertCircle className="h-3.5 w-3.5 text-brand-secondary" aria-hidden="true" />
          <span>{stockNoticeBn}</span>
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4" role="radiogroup" aria-label="ঘড়ির রং নির্বাচন">
        {variants.map((variant) => {
          const isSelected = variant.id === selectedVariant.id;
          return (
            <button
              key={variant.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelectVariant(variant)}
              className={`flex items-center gap-2.5 rounded-lg border px-3 py-2.5 text-left transition-all ${
                isSelected
                  ? 'border-brand-primary bg-brand-surface ring-2 ring-brand-secondary/70 shadow-sm'
                  : 'border-brand-border bg-brand-surface hover:border-brand-secondary/60'
              }`}
            >
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black/15"
                style={{ backgroundColor: variant.swatchHex }}
                aria-hidden="true"
              >
                {isSelected && <Check className="h-3.5 w-3.5 text-white" />}
              </span>
              <span className="truncate text-sm font-medium text-brand-primary">
                {variant.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
