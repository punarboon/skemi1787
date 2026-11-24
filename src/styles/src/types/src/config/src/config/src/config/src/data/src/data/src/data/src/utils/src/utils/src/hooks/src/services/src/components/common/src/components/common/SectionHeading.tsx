interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignment} mb-10 md:mb-12`}>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-brand-primary sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-brand-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}
