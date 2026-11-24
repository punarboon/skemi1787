import { useState } from 'react';
import { StickyActions } from '../components/common/StickyActions';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { ContactSection } from '../components/sections/ContactSection';
import { FaqSection } from '../components/sections/FaqSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { HeroSection } from '../components/sections/HeroSection';
import { ProductDescriptionSection } from '../components/sections/ProductDescriptionSection';
import { ReviewsSection } from '../components/sections/ReviewsSection';
import { SpecificationsSection } from '../components/sections/SpecificationsSection';
import { TrustSection } from '../components/sections/TrustSection';
import { FAQ_ITEMS } from '../data/faqs';
import { FEATURED_PRODUCT } from '../data/product';
import { APPROVED_REVIEWS } from '../data/reviews';
import { ProductColorVariant } from '../types/ecommerce';

export function LandingPage() {
  const [selectedVariant, setSelectedVariant] = useState<ProductColorVariant>(
    FEATURED_PRODUCT.variants[0]
  );
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const handleSelectVariant = (variant: ProductColorVariant) => {
    setSelectedVariant(variant);
    const matchingGalleryIndex = FEATURED_PRODUCT.gallery.findIndex(
      (img) => img.variantId === variant.id
    );
    if (matchingGalleryIndex !== -1) {
      setActiveImageIndex(matchingGalleryIndex);
    }
  };

  return (
    <div id="top" className="flex min-h-screen flex-col bg-brand-background text-brand-text">
      <Header selectedColorName={selectedVariant.name} />

      <main className="flex-1">
        <HeroSection
          product={FEATURED_PRODUCT}
          selectedVariant={selectedVariant}
          onSelectVariant={handleSelectVariant}
          activeImageIndex={activeImageIndex}
          onSelectImageIndex={setActiveImageIndex}
        />

        <ProductDescriptionSection product={FEATURED_PRODUCT} />

        <FeaturesSection features={FEATURED_PRODUCT.features} />

        <SpecificationsSection
          specifications={FEATURED_PRODUCT.specifications}
          waterResistanceNoteBn={FEATURED_PRODUCT.waterResistanceNoteBn}
        />

        <TrustSection />

        <ReviewsSection reviews={APPROVED_REVIEWS} />

        <FaqSection items={FAQ_ITEMS} />

        <ContactSection />
      </main>

      <Footer />

      <StickyActions
        selectedVariant={selectedVariant}
        sellingPrice={FEATURED_PRODUCT.sellingPrice}
        currencySymbol={FEATURED_PRODUCT.currencySymbol}
      />
    </div>
  );
}
