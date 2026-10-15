// src/data/portfolioBlueprints.ts
// Single source of truth for the 8 flagship industry specification blueprints.

export interface PortfolioBlueprint {
  slug: string;
  name: string;
  niche: string;
  category: 'Healthcare & Medical' | 'Home Services' | 'Legal & Financial' | 'Luxury & Automotive';
  specCode: string;
  headline: string;
  description: string;
  keyFeatures: string[];
  lighthouseScore: number;
  lcpSpeed: string;
  agencyCostQuote: string;
  webHarborCost: string;
  conversionTools: string[];
  ctaUrl: string;
}

export const PORTFOLIO_BLUEPRINTS: PortfolioBlueprint[] = [
  {
    slug: 'dental-clinic',
    name: 'Modern Dental & Orthodontics',
    niche: 'Dental & Orthodontics',
    category: 'Healthcare & Medical',
    specCode: 'Lumina Dental Spec',
    headline: 'High-Ticket Cosmetic & Family Dentistry Acquisition Architecture',
    description: 'Designed to turn anxious local searchers into booked cosmetic and implant patients with interactive transformation visuals and clear pricing.',
    keyFeatures: [
      'Interactive Smile Transformation Slider',
      'Insurance & Financing Estimator',
      '1-Click Mobile Appointment Intake',
      'Doctor Credibility & Patient Case Studies',
    ],
    lighthouseScore: 99,
    lcpSpeed: '0.4s',
    agencyCostQuote: '$5,500 + $200/mo',
    webHarborCost: '$100 Setup + $99/mo',
    conversionTools: ['Smile Before/After Slider', 'Treatment Cost Estimator', 'Direct Booking Webhook'],
    ctaUrl: '/contact?niche=dental-clinic',
  },
  {
    slug: 'hvac-plumbing',
    name: 'HVAC, Plumbing & Electrical',
    niche: 'Trades & Home Services',
    category: 'Home Services',
    specCode: 'Apex Climate Spec',
    headline: 'Emergency Dispatch & High-Intent Service Area Conversion Engine',
    description: 'Engineered for rapid 1-tap mobile dispatch when homeowners experience burst pipes, AC breakdowns, or electrical emergencies.',
    keyFeatures: [
      '24/7 Sticky Emergency Dispatch Header',
      'Interactive Repair Cost Estimator',
      'Service Area Zip Code Validator',
      'Real-Time Dispatch Availability Ticker',
    ],
    lighthouseScore: 99,
    lcpSpeed: '0.3s',
    agencyCostQuote: '$4,500 + $150/mo',
    webHarborCost: '$100 Setup + $99/mo',
    conversionTools: ['Instant Emergency Call Bar', 'Zip Range Checker', 'Repair Scope Calculator'],
    ctaUrl: '/contact?niche=hvac-plumbing',
  },
  {
    slug: 'law-firm',
    name: 'Personal Injury & Corporate Law',
    niche: 'Litigation & Legal Counsel',
    category: 'Legal & Financial',
    specCode: 'Vanguard Legal Spec',
    headline: 'High-Authority Case Qualification & Confidential Intake Architecture',
    description: 'Authoritative, friction-free intake for plaintiffs and corporate clients with zero database exposure and instant lead alerts.',
    keyFeatures: [
      'Interactive Case Qualification Wizard',
      'Verified Settlement Ticker ($45M+)',
      'Confidential Encrypted Intake Webhook',
      'Attorney Profile & Practice Area Deep Dives',
    ],
    lighthouseScore: 100,
    lcpSpeed: '0.3s',
    agencyCostQuote: '$7,500 + $250/mo',
    webHarborCost: '$100 Setup + $99/mo',
    conversionTools: ['Case Value Qualifier', 'Settlement Counter', 'Zero-Log Intake Webhook'],
    ctaUrl: '/contact?niche=law-firm',
  },
  {
    slug: 'luxury-real-estate',
    name: 'Real Estate & Property Development',
    niche: 'Luxury Estates & Brokerages',
    category: 'Luxury & Automotive',
    specCode: 'Aurelia Estates Spec',
    headline: 'Editorial Real Estate Showcase & Private Viewing Portal',
    description: 'Bespoke architectural layout showcasing luxury properties with zero page load lag and high-converting private viewing requests.',
    keyFeatures: [
      'Zero-Latency Dynamic Listing Filter Grid',
      'Interactive Mortgage Payment Calculator',
      'Private VIP Viewing Scheduler',
      'Neighborhood & Architectural Specs',
    ],
    lighthouseScore: 98,
    lcpSpeed: '0.5s',
    agencyCostQuote: '$6,000 + $200/mo',
    webHarborCost: '$100 Setup + $99/mo',
    conversionTools: ['Property Filter Grid', 'Jumbo Mortgage Tool', 'Private Tour Flow'],
    ctaUrl: '/contact?niche=luxury-real-estate',
  },
  {
    slug: 'medspa',
    name: 'MedSpa & Cosmetic Dermatology',
    niche: 'Medical Aesthetics & Skincare',
    category: 'Healthcare & Medical',
    specCode: 'Velvet Aesthetics Spec',
    headline: 'Luxury Cosmetic Aesthetics & Skin Treatment Recommender',
    description: 'Elegant, high-trust digital experience that guides prospective patients to the right laser, injectable, or facial treatment.',
    keyFeatures: [
      'Treatment Recommender Quiz Flow',
      'Transparent Per-Unit Pricing Menu',
      'VIP Consultation Booking Funnel',
      'Before & After Clinical Gallery',
    ],
    lighthouseScore: 99,
    lcpSpeed: '0.4s',
    agencyCostQuote: '$5,000 + $175/mo',
    webHarborCost: '$100 Setup + $99/mo',
    conversionTools: ['Skin Concern Quiz', 'Transparent Price Matrix', 'VIP Consultation Booking'],
    ctaUrl: '/contact?niche=medspa',
  },
  {
    slug: 'auto-detailing',
    name: 'Ceramic Coating, PPF & Auto Spa',
    niche: 'Exotic Detailing & Protection',
    category: 'Luxury & Automotive',
    specCode: 'Obsidian Auto Spec',
    headline: 'Precision Ceramic Coating & Paint Protection Film Configurator',
    description: 'High-gloss dark UI engineered to educate vehicle owners and close high-ticket ceramic coating and PPF packages.',
    keyFeatures: [
      'Vehicle Size & Ceramic Tier Configurator',
      'Package Comparison Matrix (3/5/9 Year)',
      'Instant Quote Calculation Engine',
      'Paint Correction Gloss Level Visualizer',
    ],
    lighthouseScore: 99,
    lcpSpeed: '0.4s',
    agencyCostQuote: '$4,000 + $150/mo',
    webHarborCost: '$100 Setup + $99/mo',
    conversionTools: ['Vehicle Size Configurator', 'Tier Comparison Matrix', 'Instant Quote Dispatch'],
    ctaUrl: '/contact?niche=auto-detailing',
  },
  {
    slug: 'accounting-cpa',
    name: 'CPA Firms & Tax Advisory',
    niche: 'Tax Planning & Fractional CFO',
    category: 'Legal & Financial',
    specCode: 'Meridian Financial Spec',
    headline: 'Corporate Tax Strategy & High-Net-Worth Advisory Intake',
    description: 'Professional, numbers-focused architecture establishing immediate trust with business owners seeking strategic tax savings.',
    keyFeatures: [
      'Business Entity Tax Savings Estimator',
      'Secure Client Portal Integration Links',
      'Consultation & Tax Audit Booking Flow',
      'Year-Round Compliance Roadmaps',
    ],
    lighthouseScore: 100,
    lcpSpeed: '0.3s',
    agencyCostQuote: '$5,000 + $175/mo',
    webHarborCost: '$100 Setup + $99/mo',
    conversionTools: ['Tax Savings Estimator', 'Client Portal Hub', 'Consultation Scheduler'],
    ctaUrl: '/contact?niche=accounting-cpa',
  },
  {
    slug: 'restaurants-hospitality',
    name: 'Fine Dining & Boutique Hospitality',
    niche: 'Culinary & Private Events',
    category: 'Luxury & Automotive',
    specCode: 'Saffron & Slate Spec',
    headline: 'Zero-PDF Mobile Dining Experience & Private Banquet Inquiries',
    description: 'Replaces frustrating zoomable PDFs with lightning-fast interactive seasonal menus and friction-free private dining inquiry forms.',
    keyFeatures: [
      'Zero-PDF Interactive Mobile Menu Engine',
      'Dietary & Allergen Instant Filter',
      'Private Banquet & Event Inquiry Flow',
      'Direct 1-Tap Table Reservation Integration',
    ],
    lighthouseScore: 99,
    lcpSpeed: '0.4s',
    agencyCostQuote: '$4,200 + $150/mo',
    webHarborCost: '$100 Setup + $99/mo',
    conversionTools: ['Live Mobile Menu', 'Event Inquiry Engine', 'Reservation CTA'],
    ctaUrl: '/contact?niche=restaurants-hospitality',
  },
];
