// -----------------------------------------------------------------------------
// SERVICES DATA
// -----------------------------------------------------------------------------
// Single source of truth for services. Used by:
//   • src/components/Services.astro  (homepage card grid)
//   • src/pages/services.astro       (full detail page)
// Edit copy here and both stay in sync.
// -----------------------------------------------------------------------------

export interface ServiceItem {
  /** URL-safe id, used for on-page anchors (e.g. #business-websites). */
  slug: string;
  title: string;
  /** Short one-liner shown on the homepage cards. */
  description: string;
  /** Inline SVG markup (32×32) rendered as the icon. */
  icon: string;
  accentColor?: 'green' | 'amber';
  // --- detail-page fields ---
  /** Longer intro shown on the detail page. */
  detail: string;
  /** "What you get" bullet list. */
  whatYouGet: string[];
  /** Short "who it's for" line. */
  whoFor: string;
  /** One-line outcome / payoff. */
  outcome: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'business-websites',
    title: 'Business Websites',
    description:
      'A fast, modern site that makes you look legit and turns visitors into calls, quotes, and bookings. Mobile-first and easy to update.',
    icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="3" y="5" width="26" height="22" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M10 13l-4 3 4 3M22 13l4 3-4 3M15 11l-3 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    accentColor: 'green',
    detail:
      'Your website is often the first impression a customer gets. I build fast, modern, mobile-first sites that load quickly, rank well, and make it effortless for people to reach you. No bloated page builders, no template you have to fight with.',
    whatYouGet: [
      'Custom, mobile-first design that fits your brand',
      'Fast load times and clean, on-page SEO',
      'Contact forms, click-to-call, and maps wired in',
      'Analytics so you can see what’s working',
      'Content you can actually update',
    ],
    whoFor: 'Local businesses that need a professional site that earns its keep.',
    outcome: 'Turn more visitors into calls, quotes, and booked jobs.',
  },
  {
    slug: 'booking-quotes-forms',
    title: 'Online Booking, Quotes & Forms',
    description:
      'Let customers request a quote, book a time, or reach you without phone tag. Fewer leads slipping through the cracks.',
    icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="8" y="8" width="16" height="16" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="11" y="11" width="10" height="10" rx="0.5" fill="currentColor" opacity="0.2"/><path d="M8 12H4M8 16H4M8 20H4M24 12h4M24 16h4M24 20h4M12 8V4M16 8V4M20 8V4M12 24v4M16 24v4M20 24v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    accentColor: 'green',
    detail:
      'Stop playing phone tag. I set up booking, quote requests, and intake forms that let customers reach you on their schedule. Route everything straight to your inbox or calendar so nothing slips through the cracks.',
    whatYouGet: [
      'Online scheduling and appointment booking',
      'Custom quote-request and intake forms',
      'Automatic email or text notifications',
      'Spam protection and data you can trust',
      'Connects to the tools you already use',
    ],
    whoFor: 'Service businesses tired of missed calls and back-and-forth.',
    outcome: 'Capture leads 24/7 without lifting a finger.',
  },
  {
    slug: 'custom-tools-dashboards',
    title: 'Custom Tools & Dashboards',
    description:
      'Owner/tenant portals, job trackers, inventory, internal tools. Software shaped around how you actually work.',
    icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="4" stroke="currentColor" stroke-width="1.5"/><circle cx="6" cy="8" r="3" stroke="currentColor" stroke-width="1.5"/><circle cx="26" cy="8" r="3" stroke="currentColor" stroke-width="1.5"/><circle cx="6" cy="24" r="3" stroke="currentColor" stroke-width="1.5"/><circle cx="26" cy="24" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M9 9.5l5 5M18 17.5l5 5M9 22.5l5-5M18 14.5l5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    accentColor: 'amber',
    detail:
      'When a spreadsheet stops cutting it, I build the tool you actually need. Owner and tenant portals, job trackers, inventory systems, internal dashboards. Software shaped around your real workflow instead of forcing you into someone else’s.',
    whatYouGet: [
      'Owner / tenant / customer portals',
      'Job, inventory, and workflow trackers',
      'Internal dashboards with the numbers that matter',
      'Role-based access and secure logins',
      'Built to grow with your business',
    ],
    whoFor: 'Operators outgrowing spreadsheets and off-the-shelf apps.',
    outcome: 'Run your business on software that fits like a glove.',
  },
  {
    slug: 'website-care-hosting',
    title: 'Website Care & Hosting',
    description:
      'Hosting, updates, backups, and "you call, I fix" changes for a flat monthly rate. Your site stays fast, secure, and current.',
    icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6 10h20M6 16h12M6 22h16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M22 19l4 3-4 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    accentColor: 'green',
    detail:
      'A website is not "set it and forget it." For a flat monthly rate I handle hosting, updates, backups, and the small changes you need. Your site stays fast, secure, and current while you focus on running the business.',
    whatYouGet: [
      'Reliable hosting with SSL and daily backups',
      'Software updates and security patches',
      'Uptime and performance monitoring',
      '“You call, I fix” content changes',
      'One flat monthly rate, cancel anytime',
    ],
    whoFor: 'Owners who’d rather not think about their website’s upkeep.',
    outcome: 'Peace of mind that your site is handled.',
  },
  {
    slug: 'it-ongoing-support',
    title: 'IT & Ongoing Support',
    description:
      'Already a client? I can help keep your whole setup running; email, accounts, backups, and support. Ask about ongoing IT plans.',
    icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6 10c0-2.2 4.5-4 10-4s10 1.8 10 4v12c0 2.2-4.5 4-10 4S6 24.2 6 22V10z" stroke="currentColor" stroke-width="1.5"/><path d="M6 16c0 2.2 4.5 4 10 4s10-1.8 10-4M6 10c0 2.2 4.5 4 10 4s10-1.8 10-4" stroke="currentColor" stroke-width="1.5"/></svg>',
    accentColor: 'amber',
    detail:
      'Once we’re working together, I can help keep your whole setup running, not just the website. Email, accounts, domains, backups, and a real person to call when something breaks. Straightforward IT support without the enterprise runaround.',
    whatYouGet: [
      'Email, domain, and account management',
      'Backups and data protection',
      'Priority support when things break',
      'Practical tech guidance as you grow',
      'A single point of contact who knows your setup',
    ],
    whoFor: 'Existing clients who want one trusted person for their tech.',
    outcome: 'Keep everything running without a big IT department.',
  },
  {
    slug: 'custom-software',
    title: 'Serious Custom Software',
    description:
      "Need something heavier, such as an app, a data integration, a real engineering problem? That's my background. Let's talk.",
    icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="10" r="5" stroke="currentColor" stroke-width="1.5"/><path d="M6 27c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M22 18l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    accentColor: 'green',
    detail:
      'Sometimes you need more than a website. An application, a data integration, a genuinely hard engineering problem; that’s my background. I take on serious custom software with the same directness and care as everything else: scoped clearly, built properly, supported by the person who wrote it.',
    whatYouGet: [
      'Full-stack web and application development',
      'Data pipelines and third-party integrations',
      'Architecture and technical consulting',
      'Clearly scoped, milestone-based delivery',
      'Built by a working software engineer',
    ],
    whoFor: 'Businesses with a real engineering problem to solve.',
    outcome: 'Ship the thing that actually moves your business forward.',
  },
];
