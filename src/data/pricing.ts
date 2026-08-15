export type PricingPlan = {
  name: string;
  range: string;
  description: string;
  features: string[];
  recommended?: boolean;
  cta: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    range: "$200–$400",
    description:
      "A simple, professional website for individuals, startups, and small businesses that need a clean online presence.",
    features: [
      "Up to 3 pages",
      "Responsive design",
      "Basic contact form",
      "Mobile optimization",
      "Basic SEO structure",
      "Simple animations",
      "Launch support",
    ],
    cta: "Choose Basic",
  },
  {
    name: "Standard",
    range: "$500–$900",
    description:
      "A more complete business website with stronger structure, more pages, and greater flexibility.",
    features: [
      "Up to 6 pages",
      "Custom responsive design",
      "Contact or inquiry forms",
      "Basic CMS integration",
      "On-page SEO structure",
      "Performance optimization",
      "Custom sections",
      "Basic integrations",
      "Launch support",
    ],
    recommended: true,
    cta: "Choose Standard",
  },
  {
    name: "Premium",
    range: "$1,000–$2,000",
    description:
      "For businesses that need a larger, more customized website with advanced design and functionality.",
    features: [
      "Up to 10+ pages",
      "Custom UI/UX design",
      "Advanced responsive layouts",
      "CMS integration",
      "Advanced forms",
      "Custom animations",
      "Performance optimization",
      "SEO foundations",
      "Third-party integrations",
      "Priority launch support",
    ],
    cta: "Choose Premium",
  },
  {
    name: "Custom",
    range: "Custom Quote",
    description:
      "For projects with unique requirements, e-commerce, advanced integrations, or functionality outside the standard packages.",
    features: [
      "Custom project scope",
      "E-commerce development",
      "Custom functionality",
      "Advanced integrations",
      "Authentication",
      "Booking systems",
      "Payment integration",
      "Large-scale websites",
      "Ongoing development",
      "Custom support options",
    ],
    cta: "Request a Quote",
  },
];