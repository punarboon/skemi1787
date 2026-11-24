import { Product } from '../types/ecommerce';

export const FEATURED_PRODUCT: Product = {
  id: 'skmei-1787',
  slug: 'skmei-1787-rotation-wheel-watch',
  name: 'SKMEI 1787 Rotation Wheel Watch',
  category: "Men's Fashion Watch",
  headlineBn: 'সময় দেখুন নিজের স্টাইলে, আলাদা হয়ে উঠুন সবার মাঝে।',
  subtitleBn:
    'আকর্ষণীয় Wheel-inspired ডিজাইন আর আধুনিক মেটালিক লুকে SKMEI 1787 — প্রতিদিনের স্টাইলে যোগ করুন নতুন মাত্রা।',
  descriptionParagraphsBn: [
    'সাধারণ ঘড়ির ভিড়ে নিজের স্টাইলকে একটু আলাদা করে তুলুন SKMEI 1787 Rotation Wheel Watch দিয়ে। এর আকর্ষণীয় Wheel-inspired ডায়াল ডিজাইন, মেটালিক ফিনিশ এবং আধুনিক লুক আপনার প্রতিদিনের ফ্যাশনে যোগ করবে ভিন্ন মাত্রা।',
    'ক্যাজুয়াল আউটিং, বন্ধুদের সঙ্গে আড্ডা কিংবা প্রতিদিনের ব্যবহারে স্টাইল ও ব্যক্তিত্ব প্রকাশের জন্য এটি একটি আকর্ষণীয় পছন্দ।',
  ],
  regularPrice: 1990,
  sellingPrice: 1650,
  currencySymbol: '৳',
  codAvailable: true,
  stockNoticeBn: 'অর্ডারের আগে স্টক নিশ্চিত করুন',
  variants: [
    {
      id: 'red',
      name: 'Red',
      nameBn: 'Red (লাল)',
      swatchHex: '#B91C1C',
      imageSrc: '/assets/products/skmei-1787/red.jpg',
      imageAlt: 'SKMEI 1787 Rotation Wheel Watch - Red Variant',
    },
    {
      id: 'yellow',
      name: 'Yellow',
      nameBn: 'Yellow (হলুদ)',
      swatchHex: '#D97706',
      imageSrc: '/assets/products/skmei-1787/yellow.jpg',
      imageAlt: 'SKMEI 1787 Rotation Wheel Watch - Yellow Variant',
    },
    {
      id: 'green',
      name: 'Green',
      nameBn: 'Green (সবুজ)',
      swatchHex: '#15803D',
      imageSrc: '/assets/products/skmei-1787/green.jpg',
      imageAlt: 'SKMEI 1787 Rotation Wheel Watch - Green Variant',
    },
    {
      id: 'black',
      name: 'Black',
      nameBn: 'Black (কালো)',
      swatchHex: '#171717',
      imageSrc: '/assets/products/skmei-1787/black.jpg',
      imageAlt: 'SKMEI 1787 Rotation Wheel Watch - Black Variant',
    },
  ],
  gallery: [
    {
      id: 'main',
      src: '/assets/products/skmei-1787/main.jpg',
      alt: 'SKMEI 1787 Rotation Wheel Watch Main View',
    },
    {
      id: 'red',
      src: '/assets/products/skmei-1787/red.jpg',
      alt: 'SKMEI 1787 Rotation Wheel Watch - Red',
      variantId: 'red',
    },
    {
      id: 'yellow',
      src: '/assets/products/skmei-1787/yellow.jpg',
      alt: 'SKMEI 1787 Rotation Wheel Watch - Yellow',
      variantId: 'yellow',
    },
    {
      id: 'green',
      src: '/assets/products/skmei-1787/green.jpg',
      alt: 'SKMEI 1787 Rotation Wheel Watch - Green',
      variantId: 'green',
    },
    {
      id: 'black',
      src: '/assets/products/skmei-1787/black.jpg',
      alt: 'SKMEI 1787 Rotation Wheel Watch - Black',
      variantId: 'black',
    },
    {
      id: 'detail-1',
      src: '/assets/products/skmei-1787/detail-1.jpg',
      alt: 'SKMEI 1787 Dial and Metallic Finish Close-up',
    },
    {
      id: 'detail-2',
      src: '/assets/products/skmei-1787/detail-2.jpg',
      alt: 'SKMEI 1787 Stainless Steel Strap Detail',
    },
  ],
  features: [
    {
      id: 'wheel-dial',
      title: 'রোটেটিং হুইল-ইন্সপায়ার্ড ডায়াল',
      description:
        'আকর্ষণীয় Wheel-inspired ডায়াল ডিজাইন যা ঘড়িটিকে সাধারণ ঘড়ির চেয়ে স্বতন্ত্র ও আধুনিক লুক দেয়।',
      iconName: 'watch',
    },
    {
      id: 'quartz-movement',
      title: 'কোয়ার্টজ মুভমেন্ট (Quartz)',
      description:
        'প্রতিদিনের ব্যবহারে সময় দেখার জন্য নির্ভরযোগ্য Quartz movement ব্যবহৃত হয়েছে।',
      iconName: 'cog',
    },
    {
      id: 'stainless-strap',
      title: 'স্টেইনলেস স্টিল স্ট্র্যাপ ও অ্যালয় কেস',
      description:
        '৪৩ মিমি ডায়াল, ১১ মিমি কেস থিকনেস এবং আনুমানিক ১২৩ গ্রাম ওজনের সাথে মজবুত মেটালিক ফিনিশ।',
      iconName: 'layers',
    },
    {
      id: 'modern-styling',
      title: 'আধুনিক ও ব্যতিক্রমী ফ্যাশন লুক',
      description:
        'ক্যাজুয়াল আউটিং, বন্ধুদের আড্ডা বা প্রতিদিনের পোশাকে মানানসই স্টাইলিশ উপস্থিতি।',
      iconName: 'sparkles',
    },
    {
      id: 'four-colors',
      title: 'চারটি আকর্ষণীয় কালার অপশন',
      description:
        'আপনার পছন্দ ও রুচি অনুযায়ী Red, Yellow, Green এবং Black—এই চারটি কালার থেকে বেছে নেওয়ার সুযোগ।',
      iconName: 'palette',
    },
    {
      id: 'water-resistance',
      title: '3 ATM ওয়াটার রেজিস্ট্যান্স',
      description:
        'দৈনন্দিন হালকা পানির ছিটা বা বৃষ্টির ঝাপটা সহনীয়; তবে গোসল, সাঁতার বা ডাইভিংয়ের জন্য প্রযোজ্য নয়।',
      iconName: 'droplets',
    },
  ],
  specifications: [
    { label: 'Brand', value: 'SKMEI' },
    { label: 'Model', value: '1787' },
    { label: 'Movement', value: 'Quartz' },
    { label: 'Case Material', value: 'Alloy' },
    { label: 'Strap Material', value: 'Stainless Steel' },
    { label: 'Dial Diameter', value: '43mm' },
    { label: 'Case Thickness', value: '11mm' },
    { label: 'Weight', value: 'Approximately 123g' },
    { label: 'Water Resistance', value: '3 ATM' },
  ],
  waterResistanceNoteBn:
    'সতর্কতা: 3 ATM ওয়াটার রেজিস্ট্যান্স বলতে হাত ধোয়া বা হালকা বৃষ্টির ছিটা থেকে সাধারণ সুরক্ষা বোঝায়। এই ঘড়িটি সাঁতার কাটা, গোসল করা বা ডাইভিংয়ের জন্য উপযোগী নয়।',
  packageContentsBn: ['১টি SKMEI 1787 Rotation Wheel Watch'],
};
