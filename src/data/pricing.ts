// -----------------------------------------------------------------------------
// PRICING DATA
// -----------------------------------------------------------------------------
// Edit the numbers below to publish your real prices.
// Anywhere you see `$X`, `$Y`, `$N`, etc. is a PLACEHOLDER — swap in a real
// amount (e.g. price: '$1,500') or a range (e.g. price: '$1,500–$3,000').
// Set `price` to 'Custom' / "Let's talk" for quote-only tiers.
// -----------------------------------------------------------------------------

export interface PricingTier {
  name: string;
  /** Short line under the tier name. */
  tagline: string;
  /** Headline price. Placeholder or real, e.g. '$X', '$1,500', 'Custom'. */
  price: string;
  /** Optional qualifier shown after the price, e.g. 'one-time', 'starting at'. */
  priceNote?: string;
  /** Highlight this tier as the recommended / most-popular one. */
  featured?: boolean;
  accentColor?: 'green' | 'amber';
  /** Bullet list of what's included. */
  features: string[];
  /** Button label. */
  ctaLabel: string;
  /** Button link. */
  ctaHref: string;
}

// -----------------------------------------------------------------------------
// PROJECT PACKAGES — one-time builds
// -----------------------------------------------------------------------------
export const projectPackages: PricingTier[] = [
  {
    name: 'Starter Site',
    tagline: 'Get online, look legit, start getting calls.',
    price: '$1500',
    priceNote: 'one-time',
    accentColor: 'green',
    features: [
      'Up to 5 pages (Home, About, Services, etc.)',
      'Mobile-first, fast-loading design',
      'Contact form + click-to-call',
      'Basic on-page SEO & Google setup',
      'Launched in ~2 weeks',
    ],
    ctaLabel: 'Start here',
    ctaHref: '/#contact',
  },
  {
    name: 'Growth Site',
    tagline: 'For businesses ready to turn traffic into booked work.',
    price: '$3,000',
    priceNote: 'one-time',
    featured: true,
    accentColor: 'green',
    features: [
      'Everything in Starter',
      'Online booking, quotes & custom forms',
      'Up to 10 pages + blog / gallery',
      'Reviews, maps & analytics wired in',
      'Content help & copy polish',
    ],
    ctaLabel: 'Most popular',
    ctaHref: '/#contact',
  },
  {
    name: 'Custom Software',
    tagline: 'Portals, dashboards, apps. Built around how you work.',
    price: "Let's talk",
    accentColor: 'amber',
    features: [
      'Owner / tenant portals & job trackers',
      'Internal tools, inventory & dashboards',
      'Data integrations & real engineering',
      'Scoped and quoted to your project',
      'Built by a working software engineer',
    ],
    ctaLabel: 'Book a call',
    ctaHref: '/#contact',
  },
];

// -----------------------------------------------------------------------------
// MONTHLY PLANS — recurring care & support
// -----------------------------------------------------------------------------
export const monthlyPlans: PricingTier[] = [
  {
    name: 'Website Care & Hosting',
    tagline: 'Your site stays fast, secure, and current.',
    price: '$150',
    priceNote: '/ month',
    accentColor: 'green',
    features: [
      'Hosting, SSL & daily backups',
      'Software updates & security patches',
      'Uptime & performance monitoring',
      '"You call, I fix" content changes',
      'Cancel anytime. No lock-in',
    ],
    ctaLabel: 'Get covered',
    ctaHref: '/#contact',
  },
  {
    name: 'IT & Ongoing Support',
    tagline: 'Keep your whole setup running, not just the website.',
    price: '$500',
    priceNote: '/ month',
    accentColor: 'amber',
    features: [
      'Email, accounts & domain management',
      'Backups & data protection',
      'Priority support when things break',
      'Tech guidance as you grow',
      'For existing website clients',
    ],
    ctaLabel: 'Ask about plans',
    ctaHref: '/#contact',
  },
];

// -----------------------------------------------------------------------------
// ADD-ONS — à la carte extras
// -----------------------------------------------------------------------------
export interface AddOn {
  label: string;
  price: string;
}

export const addOns: AddOn[] = [
  { label: 'Extra page', price: '$250' },
  { label: 'Online booking / scheduling', price: '$500' },
  { label: 'Custom quote or intake form', price: '$750' },
  { label: 'Logo & brand refresh', price: '$1,500' },
  { label: 'Copywriting (per page)', price: '$200' },
  { label: 'Rush delivery', price: '+25%' },
];

// -----------------------------------------------------------------------------
// FAQ
// -----------------------------------------------------------------------------
export interface FaqItem {
  q: string;
  a: string;
}

export const pricingFaqs: FaqItem[] = [
  {
    q: 'Why is pricing shown as a range?',
    a: 'Every business is different. The ranges cover most projects; after a quick, free conversation about what you actually need, you get one fixed quote with no surprises.',
  },
  {
    q: 'Do I pay everything up front?',
    a: 'No. Project work is typically split into a deposit to start and the balance at launch. Monthly plans are billed month-to-month.',
  },
  {
    q: 'What if I only need a small change or one page?',
    a: "That's what add-ons and care plans are for. If it's a tiny job, tell me and we'll keep it simple.",
  },
  {
    q: 'Do you really give a free mockup?',
    a: "Yes. I'll design a real preview of your site before you commit a dollar, so you can see the direction with zero obligation.",
  },
];
