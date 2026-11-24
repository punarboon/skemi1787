export function calculateDiscountPercentage(
  regularPrice: number,
  sellingPrice: number
): number {
  if (regularPrice <= 0 || sellingPrice >= regularPrice) {
    return 0;
  }
  return Math.round(((regularPrice - sellingPrice) / regularPrice) * 100);
}

export function formatPrice(amount: number, currencySymbol = '৳'): string {
  return `${currencySymbol}${amount.toLocaleString('en-US')}`;
}
