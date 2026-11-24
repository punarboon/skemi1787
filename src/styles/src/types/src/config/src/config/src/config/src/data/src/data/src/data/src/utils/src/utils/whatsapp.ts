import { BRAND_CONFIG } from '../config/brand';

export function buildWhatsAppOrderUrl(selectedColorName: string): string {
  const message = [
    'আসসালামু আলাইকুম, আমি Punarboon থেকে SKMEI 1787 Rotation Wheel Watch অর্ডার করতে আগ্রহী।',
    '',
    'পণ্যের মূল্য: ৳১,৬৫০',
    `নির্বাচিত রং: ${selectedColorName}`,
    'পরিমাণ: ১টি',
    '',
    'অর্ডার ও ডেলিভারি সম্পর্কে বিস্তারিত জানতে চাই।',
  ].join('\n');

  return `https://wa.me/${BRAND_CONFIG.contact.whatsappInternational}?text=${encodeURIComponent(
    message
  )}`;
}

export function buildWhatsAppSupportUrl(): string {
  const message =
    'আসসালামু আলাইকুম, Punarboon থেকে SKMEI 1787 Rotation Wheel Watch সম্পর্কে বিস্তারিত জানতে চাই।';
  return `https://wa.me/${BRAND_CONFIG.contact.whatsappInternational}?text=${encodeURIComponent(
    message
  )}`;
}
