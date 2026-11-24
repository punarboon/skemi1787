import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brand';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { buildWhatsAppOrderUrl } from '../../utils/whatsapp';
import { Container } from '../common/Container';

interface HeaderProps {
  selectedColorName: string;
}

export function Header({ selectedColorName }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const isScrolled = useScrollPosition(12);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'border-b border-brand-border bg-brand-surface/95 shadow-sm backdrop-blur-md'
          : 'border-b border-brand-border/60 bg-brand-background/90 backdrop-blur-sm'
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 md:h-20">
          {/* Brand Identity */}
          <a
            href="#top"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
          >
            {!logoFailed ? (
              <img
                src={BRAND_CONFIG.logo.src}
                alt={BRAND_CONFIG.logo.alt}
                onError={() => setLogoFailed(true)}
                className="h-9 w-auto object-contain md:h-10"
              />
            ) : (
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-secondary/50 bg-brand-primary text-sm font-bold tracking-wider text-brand-secondary">
                P
              </span>
            )}
            <div className="leading-tight">
              <span className="block text-lg font-bold tracking-wide text-brand-primary">
                {BRAND_CONFIG.name}
              </span>
              <span className="hidden text-[11px] text-brand-muted sm:block">
                {BRAND_CONFIG.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary Navigation">
            {BRAND_CONFIG.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-text transition-colors hover:text-brand-secondary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Primary Order CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppOrderUrl(selectedColorName)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-lg bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#262626] sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4 text-brand-secondary" aria-hidden="true" />
              <span>এখনই অর্ডার করুন</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-border bg-brand-surface text-brand-primary lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-brand-border bg-brand-surface lg:hidden"
        >
          <Container className="py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
              {BRAND_CONFIG.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-brand-text transition hover:bg-brand-background hover:text-brand-secondary"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={buildWhatsAppOrderUrl(selectedColorName)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-4 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4 text-brand-secondary" aria-hidden="true" />
                <span>এখনই অর্ডার করুন</span>
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
