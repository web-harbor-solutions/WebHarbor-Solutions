// src/config/siteConfig.ts
// Single source of truth for brand, SLA, pricing, and domain configurations.

export const SITE_CONFIG = {
  name: 'Web Harbor Solutions',
  legalName: 'Web Harbor Solutions',
  domain: 'https://webharborsolutions.com',
  officialEmail: 'webharborsolutions@gmail.com',
  guaranteedSla: 'Within 12 business hours',
  tagline: 'See Your New Website Live Before You Pay a Single Dollar.',
  description: 'The Zero-Risk Web Engineering Agency. We research and code your complete, high-speed custom website first. If you love it, launch for $100 setup + $99/mo. If you don\'t, you pay $0.',
  founder: {
    name: 'Abdul Mateen',
    role: 'Founder',
  },
  pricing: {
    specDemo: '$0 Upfront',
    setupFee: '$100',
    monthlyPlan: '$99/mo',
    setupFeeRaw: 100,
    monthlyPlanRaw: 99,
    firstYearTotal: 1288, // 100 + (99 * 12)
    turnaroundTime: '48–72 Hours',
    launchWindow: '5–7 Days',
    includedEditsPerMonth: 3,
    uptimeSla: '99.9%',
  },
  social: {
    github: 'https://github.com/WebHarbor-Solutions',
  },
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  footerCoreBlueprints: [
    { label: 'Modern Dental & Orthodontics', href: '/portfolio#dental-clinic' },
    { label: 'HVAC, Plumbing & Electrical', href: '/portfolio#hvac-plumbing' },
    { label: 'Personal Injury & Law Firms', href: '/portfolio#law-firm' },
    { label: 'Luxury Real Estate & Brokerages', href: '/portfolio#luxury-real-estate' },
    { label: 'MedSpa & Aesthetic Clinics', href: '/portfolio#medspa' },
    { label: 'Auto Detailing & Ceramic Coatings', href: '/portfolio#auto-detailing' },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service & SLA', href: '/terms' },
    { label: 'Client Content & Liability', href: '/liability' },
  ],
};
