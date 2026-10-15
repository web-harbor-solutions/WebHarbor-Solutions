// src/data/faqs.ts
// Frequently Asked Questions for Pricing and General Inquiries

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const PRICING_FAQS: FAQItem[] = [
  {
    question: 'Do I really pay $0 upfront?',
    answer: 'Yes, 100%. We do not ask for a credit card, deposit, or retainer to get started. Our engineering team conducts local market research and builds a custom, working specification website on a private Cloudflare staging URL within 48 to 72 hours. You test it on your smartphone and desktop. If you love it, you pay a one-time $100 setup fee and launch on our $99/mo plan. If you don\'t love it, you walk away and owe us exactly $0.',
  },
  {
    question: 'What counts as one of my 3 monthly edits?',
    answer: 'Each month, your $99 subscription includes up to 3 on-demand content or design edits. This covers adding or updating team members, changing prices or services, swapping photos or promotional banners, updating contact info or business hours, and adding new customer reviews or blog announcements. Edits are handled directly by our engineering team and completed within 24 to 48 business hours at $0 extra hourly charge.',
  },
  {
    question: 'What if I already own a domain name?',
    answer: 'You retain 100% ownership of your domain. We will provide 2 simple DNS records (CNAME and TXT) or handle the DNS cutover with your registrar (GoDaddy, Namecheap, Google Domains/Squarespace, etc.) at no extra charge. If you don\'t have a domain yet, we will register and configure a brand-new custom .com domain for your business as part of your $99/mo plan.',
  },
  {
    question: 'Are there any long-term contracts?',
    answer: 'None whatsoever. Web Harbor Solutions operates strictly month-to-month. You can cancel your subscription at any time with a single email notice. There are no cancellation penalties, exit fees, or hidden lock-ins. We earn your business every month through flawless uptime, sub-second speed, and reliable support.',
  },
  {
    question: 'Why is your setup only $100 when agencies charge $5,000?',
    answer: 'Traditional digital agencies carry massive administrative overhead: account executives, project managers, layers of meetings, and expensive commercial offices. They charge $5,000 to cover their overhead while delivering slow, template-based WordPress sites. We are an agile, modern engineering team. By utilizing edge-static architecture (Astro + Cloudflare) and automated tooling, we eliminate 90% of agency waste and pass the savings directly to you.',
  },
  {
    question: 'How fast will my website load?',
    answer: 'Your website will achieve a 95–100 Google PageSpeed score and typically load in under 0.5 seconds on mobile devices. Traditional WordPress sites take 4 to 8 seconds because they execute heavy database queries and load 30+ plugins on every page load. We compile your website into pre-rendered static HTML and CSS distributed across 300+ global Cloudflare edge data centers right next to your visitors.',
  },
];
