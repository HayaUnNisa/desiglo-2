import LegalPage from "../../components/legal/LegalPage";

const sections = [
  {
    id: "commitment",
    title: "1. Our Commitment",
    paragraphs: [
      "Desiglo aims to make its website clear, usable, and accessible to as many visitors as reasonably possible.",
      "Accessibility is considered during design, development, content creation, forms, navigation, and ongoing website improvements.",
    ],
  },
  {
    id: "measures",
    title: "2. Accessibility Measures",
    items: [
      "Semantic HTML where appropriate.",
      "Logical heading hierarchy.",
      "Keyboard-accessible navigation and controls.",
      "Visible keyboard focus indicators.",
      "Descriptive labels for form controls.",
      "Helpful validation and error messages.",
      "Alternative text for meaningful images where appropriate.",
      "Responsive layouts across different screen sizes.",
      "Sufficient visual contrast as part of the design process.",
      "Reduced-motion support where appropriate.",
      "Accessible buttons, links, dialogs, and interactive controls.",
      "Avoidance of unnecessary motion or interaction barriers.",
    ],
  },
  {
    id: "keyboard",
    title: "3. Keyboard Navigation",
    paragraphs: [
      "Interactive website features should be usable without requiring a mouse wherever reasonably possible.",
      "Visitors should be able to identify keyboard focus while moving through interactive elements.",
    ],
  },
  {
    id: "forms",
    title: "4. Forms",
    paragraphs: [
      "Website forms should use associated labels, understandable instructions, validation messages, and meaningful field names.",
      "Required fields should be indicated clearly rather than relying only on color.",
    ],
  },
  {
    id: "responsive",
    title: "5. Responsive Design",
    paragraphs: [
      "Desiglo aims to provide layouts that remain usable across phones, tablets, laptops, desktops, and different viewport sizes.",
    ],
  },
  {
    id: "motion",
    title: "6. Motion and Animation",
    paragraphs: [
      "Animations should be restrained and should respect reduced-motion preferences where technically appropriate.",
    ],
  },
  {
    id: "standards",
    title: "7. Accessibility Standards",
    paragraphs: [
      "Desiglo uses established web accessibility guidance as a technical reference when designing and developing the website.",
      "This statement does not claim formal accessibility certification or full conformance with a specific accessibility standard unless an appropriate evaluation has actually established that level of conformance.",
    ],
  },
  {
    id: "limitations",
    title: "8. Known Limitations",
    paragraphs: [
      "Despite efforts to improve accessibility, some accessibility barriers may remain.",
      "New content, third-party integrations, browser differences, or future website changes may introduce additional issues that require review.",
    ],
  },
  {
    id: "improvements",
    title: "9. Ongoing Improvements",
    paragraphs: [
      "Desiglo intends to review accessibility as the website evolves and address identified problems where reasonably possible.",
    ],
  },
  {
    id: "feedback",
    title: "10. Accessibility Feedback",
    paragraphs: [
      "If you experience an accessibility issue, please contact Desiglo and explain the page or feature involved.",
      "Where useful, include information about your browser, device, or assistive technology so the issue can be investigated.",
      "Accessibility contact email: [ADD ACCESSIBILITY OR BUSINESS EMAIL].",
    ],
  },
];

export default function Accessibility() {
  return (
    <LegalPage
      eyebrow="Accessibility"
      title="Accessibility Statement"
      description="Desiglo aims to provide a website experience that is clear, usable, responsive, and accessible across different ways of interacting with the web."
      lastUpdated="August 15, 2026"
      sections={sections}
    />
  );
}