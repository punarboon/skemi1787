import { Check, MessageCircle, ShieldCheck, Truck } from 'lucide-react';
import { Product, ProductColorVariant } from '../../types/ecommerce';
import { buildWhatsAppOrderUrl } from '../../utils/whatsapp';
import { Button } from '../common/Button';
import { Container } from '../common/Container';
import { ColorSelector } from '../product/ColorSelector';
import { PriceDisplay } from '../product/PriceDisplay';
import { ProductGallery } from '../product/ProductGallery';

interface HeroSectionProps {
  product: Product;
  selectedVariant: ProductColorVariant;
  onSelectVariant: (variant: ProductColorVariant) => void;
  activeImageIndex: number;
  onSelectImageIndex: (index: number) => void;
}

export function HeroSection({
  product,
  selectedVariant,
  onSelectVariant,
  activeImageIndex,
  onSelectImageIndex,
}: HeroSectionProps) {
  return (
    <section id="product" className="pb-14 pt-8 md:pb-20 md:pt-12">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: Product Gallery */}
          <div className="lg:col-span-6">
            <ProductGallery
              images={product.gallery}
              activeIndex={activeImageIndex}
              onSelectIndex={onSelectImageIndex}
              selectedVariantName={selectedVariant.name}
            />
          </div>

          {/* Right: Editorial Details & Primary Conversion */}
          <div className="space-y-6 lg:col-span-6">
            <div>
              <span className="inline-flex items-center rounded-full border border-brand-secondary/50 bg-brand-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-secondary">
                {product.category}
              </span>
              <p className="mt-3 text-sm font-semibold tracking-wide text-brand-muted">
                {product.name}
              </p>
              <h1 className="mt-1.5 text-3xl font-bold leading-snug tracking-tight text-brand-primary sm:text-4xl">
                {product.headlineBn}
              </h1>
              <p className="mt-3 text-base leading-relaxed text-brand-muted sm:text-lg">
                {product.subtitleBn}
              </p>
            </div>

            <div className="border-y border-brand-border py-5">
              <PriceDisplay
                regularPrice={product.regularPrice}
                sellingPrice={product.sellingPrice}
                currencySymbol={product.currencySymbol}
              />

              {product.codAvailable && (
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm font-medium text-brand-text">
                  <span className="inline-flex items-center gap-1.5">
                    <Truck className="h-4 w-4 text-brand-secondary" aria-hidden="true" />
                    <span>Cash on Delivery সুবিধা</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-brand-secondary" aria-hidden="true" />
                    <span>সরাসরি WhatsApp অর্ডার সাপোর্ট</span>
                  </span>
                </div>
              )}
            </div>

            <ColorSelector
              variants={product.variants}
              selectedVariant={selectedVariant}
              onSelectVariant={onSelectVariant}
              stockNoticeBn={product.stockNoticeBn}
            />

            {/* Primary Order Action */}
            <div className="space-y-3 pt-2">
              <Button
                href={buildWhatsAppOrderUrl(selectedVariant.name)}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full py-4 text-base font-semibold shadow-editorial"
              >
                <MessageCircle className="h-5 w-5 text-brand-secondary" aria-hidden="true" />
                <span>এখনই অর্ডার করুন</span>
              </Button>

              <p className="flex items-center justify-center gap-1.5 text-center text-xs text-brand-muted sm:justify-start">
                <Check className="h-3.5 w-3.5 text-brand-secondary" aria-hidden="true" />
                <span>
                  ক্লিক করলে আপনার নির্বাচিত রং ({selectedVariant.name}) সহ WhatsApp অর্ডার মেসেজ ওপেন হবে।
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
