import { Cog, Droplets, Layers, Palette, Sparkles, Watch } from 'lucide-react';
import { THEME_CONFIG } from '../../config/theme';
import { ProductFeature } from '../../types/ecommerce';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

interface FeaturesSectionProps {
  features: ProductFeature[];
}

const FEATURE_ICONS = {
  watch: Watch,
  cog: Cog,
  layers: Layers,
  sparkles: Sparkles,
  palette: Palette,
  droplets: Droplets,
} as const;

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section id="features" className={`${THEME_CONFIG.spacing.sectionPadding} border-t border-brand-border`}>
      <Container>
        <SectionHeading
          eyebrow="Key Highlights"
          title="ঘড়িটির বিশেষ বৈশিষ্ট্যসমূহ"
          subtitle="প্রতিদিনের ক্যাজুয়াল ফ্যাশন ও স্টাইলের জন্য তৈরি স্বতন্ত্র ডিজাইন ও কাঠামো"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const IconComponent = FEATURE_ICONS[feature.iconName];
            return (
              <article
                key={feature.id}
                className="rounded-2xl border border-brand-border bg-brand-surface p-6 transition hover:border-brand-secondary/70 hover:shadow-editorial"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-secondary/30 bg-brand-background text-brand-secondary">
                  <IconComponent className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-brand-primary">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
