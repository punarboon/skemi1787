import { calculateDiscountPercentage, formatPrice } from '../../utils/pricing';

interface PriceDisplayProps {
  regularPrice: number;
  sellingPrice: number;
  currencySymbol?: string;
}

export function PriceDisplay({
  regularPrice,
  sellingPrice,
  currencySymbol = '৳',
}: PriceDisplayProps) {
  const discountPercent = calculateDiscountPercentage(regularPrice, sellingPrice);

  return (
    <div className="flex flex-wrap items-baseline gap-3">
      <span className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">
        {formatPrice(sellingPrice, currencySymbol)}
      </span>

      {regularPrice > sellingPrice && (
        <span className="text-lg text-brand-muted line-through">
          {formatPrice(regularPrice, currencySymbol)}
        </span>
      )}

      {discountPercent > 0 && (
        <span className="rounded-full border border-brand-secondary/50 bg-brand-secondary/15 px-3 py-0.5 text-xs font-bold text-brand-primary">
          {discountPercent}% ছাড়
        </span>
      )}
    </div>
  );
}
