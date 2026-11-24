export const THEME_CONFIG = {
  colors: {
    primary: '#111111',
    secondary: '#B69A63',
    background: '#FAF9F6',
    surface: '#FFFFFF',
    text: '#171717',
    mutedText: '#777777',
    border: '#E6E2DA',
  },
  typography: {
    primaryFont: 'Hind Siliguri',
  },
  spacing: {
    sectionPadding: 'py-14 md:py-20',
    containerMaxWidth: 'max-w-6xl',
  },
  buttons: {
    radius: 'rounded-lg',
    primaryClass:
      'bg-brand-primary text-white hover:bg-[#262626] active:scale-[0.99] transition-all duration-200',
    secondaryClass:
      'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-200',
    goldAccentClass:
      'bg-brand-secondary text-brand-primary hover:bg-[#a68a53] font-semibold transition-all duration-200',
  },
} as const;
