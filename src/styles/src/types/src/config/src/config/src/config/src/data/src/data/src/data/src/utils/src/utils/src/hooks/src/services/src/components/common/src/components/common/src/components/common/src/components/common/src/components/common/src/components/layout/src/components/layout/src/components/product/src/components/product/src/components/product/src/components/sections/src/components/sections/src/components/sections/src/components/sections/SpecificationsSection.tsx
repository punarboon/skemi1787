import { Info } from 'lucide-react';
import { THEME_CONFIG } from '../../config/theme';
import { ProductSpecification } from '../../types/ecommerce';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

interface SpecificationsSectionProps {
  specifications: ProductSpecification[];
  waterResistanceNoteBn: string;
}

export function SpecificationsSection({
  specifications,
  waterResistanceNoteBn,
}: SpecificationsSectionProps) {
  return (
    <section
      id="specifications"
      className={`${THEME_CONFIG.spacing.sectionPadding} border-t border-brand-border bg-brand-surface`}
    >
      <Container>
        <SectionHeading
          eyebrow="Specifications"
          title="টেকনিক্যাল স্পেসিফিকেশন"
          subtitle="SKMEI 1787 Rotation Wheel Watch-এর যাচাইকৃত কারিগরি তথ্য"
        />

        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-background">
            <table className="w-full text-left text-sm sm:text-base">
              <tbody className="divide-y divide-brand-border">
                {specifications.map((spec) => (
                  <tr key={spec.label} className="transition hover:bg-brand-surface/70">
                    <th
                      scope="row"
                      className="w-1/2 px-4 py-3.5 font-semibold text-brand-primary sm:px-6"
                    >
                      {spec.label}
                    </th>
                    <td className="w-1/2 px-4 py-3.5 text-brand-text sm:px-6">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Honest 3 ATM Water Resistance Disclaimer */}
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-brand-secondary/40 bg-brand-background p-4 sm:p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-secondary" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-brand-text">{waterResistanceNoteBn}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
