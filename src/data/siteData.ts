import { asset } from '../utils/assetPath';

/* Navigation */
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Spray Foam', path: '/spray-foam' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
] as const;

export const companyInfo = {
  name: 'BrinJoe Construction',
  phone: '(405) 664-1141',
  email: 'info@brinjoeconstruction.com',
  tagline: 'The standard of excellence for insulation and finish work in Oklahoma. Built to last, designed to impress.',
  serviceArea: 'Serving OKC, Edmond, Norman, Moore, and surrounding metro areas.',
  year: '2024',
} as const;

/* Trust badges */
export const trustBadges = [
  { icon: 'verified', label: 'BBB ACCREDITED' },
  { icon: 'star', label: 'GOOGLE REVIEWS', stars: 5 },
  { icon: 'shield', label: 'LICENSED & INSURED' },
] as const;

/* Services */
export const services = [
  {
    title: 'Spray Foam Insulation',
    description: 'High-performance energy efficiency for your home or business with cutting-edge spray foam technology.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7EzSsEtFa4mxRtk5wxpADc9r9FDab1CSvmzDQTRaEHHDHJHum79xZU48EcEK5vvQsYYPZg1ebTpt5CBlglRBSHWHL9ha_lzfaogIR2v9Wc4sGiUe1e9PR5l-2P-L5y2OIu4Z629Ee6Buxc2b9m_mluh5B-II2VCmdVDQjUU-NSbdKZg_an5JcAgRte7SOynXikGYaeebLzEiSCCZfsFtV1QkxD0mLvFwoFiELO-LKIHfFphozdaQdnmPDhn-9vbGFDxNyI8AnKXM',
    linkText: 'Request Spray Foam Quote',
    linkPath: '/spray-foam',
    badge: 'Premium Service',
  },
  {
    title: 'Drywall Installation',
    description: 'Seamless installation and repair services ensuring smooth, structurally sound walls ready for any finish.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5Jd4z2CsZQNwWC-Bxfl2DvhhInhHwatoGKFmGkGC72kK67sb81pA7PdWldOwoZHlvYhQ4UFzYJpYGPIJDsvRCkMySYK6h5o4ABqXymk7PbMbOXNIJt-q2-FodcbHAYtUixkYeWCY4IjTOc2iJrJf6fYffIwyntJWvxpDOm610lk9uqb_qhH2U2pMotRQWC2U7xWQJAnYhRJRyZvQtgpR1s6EyU5_PKGs9omFnfn3a2jp-t4pXed3ycyN1NPIWXMgTYL_o6XJGRSE',
    linkText: 'View Drywall Portfolio',
    linkPath: '/portfolio',
  },
  {
    title: 'Professional Painting',
    description: 'High-end residential and commercial painting with meticulous preparation and premium color application.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbgNa1LOYduA6VqZ5f6rA2WkwJE32itH7zHHjp3GfVUvG10m_ODUGCHvO4W6fw5OndW9hFGQZXLbUOdLCNUP3kzVKpDCb3hVK-rZZvefU9TPmG2Axd-m51FqsRQjnzDE2Mw_6VTODZu-_KtxJEEBQUQbT_ZpYcRXUdkU8r5cTcqKSIBTyQwLsPZu72jgXGDz6uQrNeCUCRNi4XmE7LvL_PLVykBa0ebvaBEpYd75oQvEafbmxo9ZCWbpbywgnPozpye4RqfRXct28',
    linkText: 'See Painting Packages',
    linkPath: '/services',
  },
] as const;

/* Value props */
export const valueProps = [
  {
    icon: 'verified_user',
    title: 'Licensed & Insured',
    description: 'Complete peace of mind with full liability coverage and professional certifications on every job site.',
  },
  {
    icon: 'location_on',
    title: 'Locally Owned',
    description: 'Deeply rooted in the OKC community, providing personalized service that national chains can\'t match.',
  },
  {
    icon: 'thumb_up',
    title: 'Satisfaction Guaranteed',
    description: 'Our job isn\'t done until you\'re completely satisfied. We stand by our craftsmanship and materials.',
  },
] as const;

/* Project showcase images */
export const showcaseImages = [
  { src: asset('/images/kitchen.png'), alt: 'Modern kitchen renovation', label: 'Kitchen Remodel' },
  { src: asset('/images/bathroom.png'), alt: 'Luxury bathroom renovation', label: 'Bathroom Renovation' },
  { src: asset('/images/pergola.png'), alt: 'Custom outdoor pergola', label: 'Outdoor Living' },
];

/* Hero */
export const heroData = {
  headline: 'Building Trust & Quality in OKC.',
  subheadline: 'Expert spray foam insulation, drywall, and painting services for residential and commercial projects. Serving Oklahoma City with precision and integrity.',
  bgImage: asset('/images/hero.png'),
  ctaPrimary: 'Request a Free Quote',
  ctaSecondary: 'View Our Services',
};

/* Service options for contact form */
export const serviceOptions = [
  'Spray Foam Insulation',
  'Drywall Installation/Repair',
  'Professional Painting',
  'General Construction',
] as const;
