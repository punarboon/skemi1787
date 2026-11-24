import { PaymentMethodInfo } from '../types/ecommerce';

export const PAYMENT_METHODS: PaymentMethodInfo[] = [
  {
    id: 'cod',
    name: 'Cash on Delivery',
    typeLabel: 'হাতে পেয়ে মূল্য পরিশোধ',
    descriptionBn: 'পণ্য হাতে বুঝে পাওয়ার পর ডেলিভারি ম্যানের কাছে মূল্য পরিশোধের সুবিধা।',
    enabled: true,
  },
  {
    id: 'bkash',
    name: 'bKash (Personal)',
    typeLabel: 'পার্সোনাল নম্বর',
    accountNumber: '01638738247',
    descriptionBn: 'বিকাশ পার্সোনাল নম্বরের মাধ্যমে পেমেন্ট সুবিধা (প্রয়োজনে অর্ডার কনফার্মেশনের সময় জানুন)।',
    enabled: true,
  },
  {
    id: 'nagad',
    name: 'Nagad (Personal)',
    typeLabel: 'পার্সোনাল নম্বর',
    accountNumber: '01638738247',
    descriptionBn: 'নগদ পার্সোনাল নম্বরের মাধ্যমে পেমেন্ট সুবিধা (প্রয়োজনে অর্ডার কনফার্মেশনের সময় জানুন)।',
    enabled: true,
  },
];
