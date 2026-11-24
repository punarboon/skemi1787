export interface ProductColorVariant {
  id: string;
  name: string;
  nameBn: string;
  swatchHex: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ProductGalleryImage {
  id: string;
  src: string;
  alt: string;
  variantId?: string;
}

export interface ProductFeature {
  id: string;
  title: string;
  description: string;
  iconName: 'watch' | 'cog' | 'layers' | 'sparkles' | 'palette' | 'droplets';
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  headlineBn: string;
  subtitleBn: string;
  descriptionParagraphsBn: string[];
  regularPrice: number;
  sellingPrice: number;
  currencySymbol: string;
  variants: ProductColorVariant[];
  gallery: ProductGalleryImage[];
  features: ProductFeature[];
  specifications: ProductSpecification[];
  waterResistanceNoteBn: string;
  packageContentsBn: string[];
  stockNoticeBn: string;
  codAvailable: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  policyLinkLabel?: string;
}

export interface CustomerReview {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  createdAt: string;
  verified: boolean;
}

export interface PaymentMethodInfo {
  id: string;
  name: string;
  typeLabel: string;
  accountNumber?: string;
  descriptionBn: string;
  enabled: boolean;
}
