export type ServiceFAQItem = {
  question: string;
  answer: string;
};

export type ServiceDetail = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;

  problems: {
    title: string;
    description: string;
  }[];

  included: {
    title: string;
    description: string;
  }[];

  benefits: {
    title: string;
    description: string;
  }[];

  process: {
    number: string;
    title: string;
    description: string;
  }[];

  faqs: ServiceFAQItem[];

  ctaTitle: string;
  ctaDescription: string;
};

export const websiteDesignService: ServiceDetail = {
  slug: "website-design",

  eyebrow: "Website Design",

  title: "Website design built around clarity, usability, and your brand.",

  description:
    "Desiglo creates modern website designs that help businesses communicate clearly, look professional, and guide visitors toward the right actions.",

  intro:
    "Good website design is not just about decoration. It is about organizing information, creating a clear visual hierarchy, making navigation intuitive, and ensuring the experience works across every screen size.",

  problems: [
    {
      title: "Outdated Visual Design",
      description:
        "An outdated website can make a business feel less credible even when the products or services are strong.",
    },
    {
      title: "Confusing Layouts",
      description:
        "Visitors should be able to understand what you offer and where to go without having to search through cluttered pages.",
    },
    {
      title: "Weak Mobile Experience",
      description:
        "Layouts that work only on desktop can create frustrating experiences for visitors using phones and tablets.",
    },
    {
      title: "Inconsistent Branding",
      description:
        "Typography, colors, spacing, imagery, and components should work together as one consistent visual system.",
    },
    {
      title: "Poor Content Hierarchy",
      description:
        "Important information can easily get lost when every section competes for the same level of attention.",
    },
    {
      title: "Unclear Calls to Action",
      description:
        "Visitors need clear next steps, whether that means contacting you, requesting a quote, viewing services, or making a purchase.",
    },
  ],

  included: [
    {
      title: "Website Strategy",
      description:
        "Define the audience, goals, page priorities, and overall direction before moving into visual design.",
    },
    {
      title: "UI Design",
      description:
        "Create polished interfaces with clear layouts, consistent spacing, and purposeful visual hierarchy.",
    },
    {
      title: "UX Structure",
      description:
        "Organize navigation, sections, content, and user flows so the website is easier to understand and use.",
    },
    {
      title: "Wireframes",
      description:
        "Plan important page structures and content placement before detailed visual styling where appropriate.",
    },
    {
      title: "Responsive Layouts",
      description:
        "Design pages intentionally for mobile, tablet, laptop, and desktop rather than simply shrinking a desktop layout.",
    },
    {
      title: "Typography System",
      description:
        "Define heading, body, label, and supporting text styles to keep content readable and consistent.",
    },
    {
      title: "Color System",
      description:
        "Use brand colors strategically for backgrounds, text, actions, borders, and important visual states.",
    },
    {
      title: "Component Design",
      description:
        "Create reusable buttons, cards, forms, navigation elements, and other interface components.",
    },
    {
      title: "Design Consistency",
      description:
        "Ensure pages feel connected through consistent spacing, alignment, visual treatment, and interaction patterns.",
    },
    {
      title: "Prototyping",
      description:
        "Where useful, key interactions and flows can be demonstrated before development begins.",
    },
  ],

  benefits: [
    {
      title: "Stronger First Impression",
      description:
        "A professional visual system helps visitors feel more confident in the business behind the website.",
    },
    {
      title: "Clearer Communication",
      description:
        "Structured layouts make it easier for visitors to understand services, products, and important information.",
    },
    {
      title: "Better Usability",
      description:
        "Thoughtful navigation and page structure reduce friction and make the website easier to use.",
    },
    {
      title: "Consistent Brand Experience",
      description:
        "A unified visual language strengthens recognition and keeps the experience professional across every page.",
    },
    {
      title: "Improved Mobile Experience",
      description:
        "Responsive design ensures the interface remains usable and visually balanced across smaller screens.",
    },
    {
      title: "Better Foundation for Development",
      description:
        "Clear design systems and reusable components make development more organized and maintainable.",
    },
  ],

  process: [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understand your business, audience, goals, content, brand, and website requirements.",
    },
    {
      number: "02",
      title: "Planning",
      description:
        "Define the site structure, page priorities, user journeys, content requirements, and project scope.",
    },
    {
      number: "03",
      title: "Wireframes",
      description:
        "Organize the core layout and hierarchy of important pages before detailed visual styling.",
    },
    {
      number: "04",
      title: "Visual Design",
      description:
        "Develop the typography, colors, components, layouts, imagery direction, and overall visual system.",
    },
    {
      number: "05",
      title: "Responsive Design",
      description:
        "Adapt and refine the layouts for mobile, tablet, laptop, and desktop experiences.",
    },
    {
      number: "06",
      title: "Review & Refinement",
      description:
        "Review the design, address feedback, improve details, and prepare the final approved direction for development.",
    },
  ],

  faqs: [
    {
      question: "What is included in website design?",
      answer:
        "Depending on the project, website design can include strategy, page structure, wireframes, UI design, responsive layouts, typography, colors, reusable components, and prototypes.",
    },
    {
      question: "Does website design include development?",
      answer:
        "Website design and development can be booked together as one project. Design-only work can also be discussed when development is being handled separately.",
    },
    {
      question: "Can Desiglo redesign my existing website?",
      answer:
        "Yes. Existing websites can be reviewed and redesigned to improve visual quality, hierarchy, usability, responsiveness, and overall consistency.",
    },
    {
      question: "Will the design work on mobile?",
      answer:
        "Yes. Responsive layouts are part of the design process so the website is planned intentionally for phones, tablets, laptops, and desktops.",
    },
    {
      question: "Can I provide websites I like as inspiration?",
      answer:
        "Yes. References can help communicate preferences, but the final direction should be designed specifically for your business and should not copy another website.",
    },
    {
      question: "How many revisions are included?",
      answer:
        "Revision rounds should be defined in the final project proposal because the amount can vary depending on the project scope.",
    },
  ],

  ctaTitle: "Need a website designed around your business?",

  ctaDescription:
    "Tell Desiglo about your goals, audience, content, and website requirements, and we can explore the right design direction for your project.",
};