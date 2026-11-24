export const BRAND_CONFIG = {
  name: 'Punarboon',
  tagline: 'বিশ্বাস আপনার, পৌঁছে দেওয়ার দায়িত্ব আমাদের।',
  logo: {
    src: '/assets/brand/punarboon-logo.png',
    alt: 'Punarboon Official Logo',
  },
  contact: {
    phoneDisplay: '01810-328075',
    phoneHref: 'tel:+8801810328075',
    whatsappDisplay: '01810-328075',
    whatsappInternational: '8801810328075',
    facebookUrl: 'https://www.facebook.com/Punarboon',
    address: 'Jamalpur Sadar, Mymensingh, Bangladesh',
  },
  policiesUrl: 'https://punarboon.github.io/policys',
  navigation: [
    { label: 'প্রোডাক্ট', href: '#product' },
    { label: 'বৈশিষ্ট্য', href: '#features' },
    { label: 'স্পেসিফিকেশন', href: '#specifications' },
    { label: 'জিজ্ঞাসা (FAQ)', href: '#faq' },
    { label: 'যোগাযোগ', href: '#contact' },
  ],
} as const;
