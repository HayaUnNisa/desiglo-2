import { Link } from "react-router-dom";

import LegalPage from "../../components/legal/LegalPage";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    paragraphs: [
      "This Privacy Policy explains how Desiglo may collect, use, store, and protect personal information when you visit this website, contact Desiglo, or submit information about a potential project.",
      "This policy should be updated whenever Desiglo changes the personal information it collects, the services it uses, or the way information is processed.",
    ],
  },
  {
    id: "business-information",
    title: "2. Business Information",
    paragraphs: [
      "Brand name: Desiglo.",
      "Legal business name: [ADD LEGAL BUSINESS NAME].",
      "Business address: [ADD BUSINESS ADDRESS IF APPLICABLE].",
      "Jurisdiction: [ADD JURISDICTION].",
      "Privacy contact email: [ADD PRIVACY EMAIL].",
    ],
  },
  {
    id: "information-collected",
    title: "3. Information Desiglo May Collect",
    items: [
      "Your name.",
      "Your email address.",
      "Your company or business name.",
      "Your telephone number when voluntarily provided.",
      "Your current website address.",
      "The services you are interested in.",
      "Your estimated project budget.",
      "Your desired project timeline.",
      "Information about your business and target audience.",
      "Project requirements and requested functionality.",
      "Any information you voluntarily include in a message or project inquiry.",
    ],
  },
  {
    id: "contact-forms",
    title: "4. Contact Forms",
    paragraphs: [
      "When you submit the Desiglo contact form, the information you provide may be used to understand and respond to your inquiry.",
      "Desiglo should only request information that is reasonably relevant to responding to an inquiry or evaluating a potential project.",
    ],
  },
  {
    id: "project-inquiries",
    title: "5. Project Inquiry Forms",
    paragraphs: [
      "The Start a Project form may request additional information about your business, website requirements, desired features, budget, timeline, existing branding, content, and other project details.",
      "This information may be used to evaluate the requested work, communicate with you, and prepare a potential project estimate or proposal.",
    ],
  },
  {
    id: "formspree",
    title: "6. Form Processing",
    paragraphs: [
      "Desiglo intends to use Formspree or another form-processing provider to process website form submissions.",
      "This section must be reviewed and updated when the form service is actually connected, including the applicable provider name and privacy information.",
    ],
  },
  {
    id: "automatic-information",
    title: "7. Automatically Collected Information",
    paragraphs: [
      "The website's hosting infrastructure and technical service providers may process basic technical information necessary to operate and secure the website.",
      "Depending on the services configured, this may include information such as IP address, browser type, device information, timestamps, requested URLs, and server logs.",
    ],
  },
  {
    id: "cookies",
    title: "8. Cookies and Similar Technologies",
    paragraphs: [
      "Desiglo may use browser storage, cookies, or similar technologies for functionality such as remembering cookie preferences.",
      "Optional analytics or marketing technologies should only be described here if they are actually configured.",
    ],
  },
  {
    id: "how-information-used",
    title: "9. How Information May Be Used",
    items: [
      "To respond to questions and inquiries.",
      "To evaluate potential website projects.",
      "To communicate about requested services.",
      "To prepare estimates, proposals, or project information.",
      "To operate, maintain, and secure the website.",
      "To investigate technical problems or misuse.",
      "To comply with applicable legal obligations where required.",
    ],
  },
  {
    id: "legal-bases",
    title: "10. Legal Basis",
    paragraphs: [
      "The lawful basis applicable to a particular processing activity depends on Desiglo's jurisdiction, the visitor's location, and the purpose of processing.",
      "Before launch, Desiglo should identify the lawful bases that actually apply to its processing activities rather than publishing assumptions.",
    ],
  },
  {
    id: "sharing",
    title: "11. Information Sharing",
    paragraphs: [
      "Desiglo does not state that personal information is sold.",
      "Information may be processed by service providers that are reasonably necessary to operate the website, process forms, host the website, provide technical infrastructure, or deliver requested services.",
      "Desiglo should update this policy when specific service providers are introduced.",
    ],
  },
  {
    id: "retention",
    title: "12. Data Retention",
    paragraphs: [
      "Personal information should be retained only for as long as reasonably necessary for the purposes for which it was collected, applicable business requirements, dispute resolution, or legal obligations.",
      "Specific retention periods should be documented once Desiglo establishes them.",
    ],
  },
  {
    id: "security",
    title: "13. Data Security",
    paragraphs: [
      "Desiglo should use reasonable technical and organizational safeguards appropriate to the nature of the information processed.",
      "No internet transmission, website, hosting platform, or electronic storage method can guarantee absolute security.",
    ],
  },
  {
    id: "international",
    title: "14. International Data Processing",
    paragraphs: [
      "Some website service providers may process information in countries different from the visitor or Desiglo.",
      "When international data transfer requirements apply, Desiglo should use appropriate safeguards required by applicable law.",
    ],
  },
  {
    id: "rights",
    title: "15. Your Privacy Rights",
    paragraphs: [
      "Depending on applicable law and your location, you may have rights relating to your personal information.",
    ],
    items: [
      "Requesting access to personal information.",
      "Requesting correction of inaccurate information.",
      "Requesting deletion in circumstances where the right applies.",
      "Requesting restriction of certain processing.",
      "Objecting to certain processing.",
      "Withdrawing consent where processing relies on consent.",
      "Requesting data portability where applicable.",
      "Submitting a complaint to an appropriate data protection authority where applicable.",
    ],
  },
  {
    id: "children",
    title: "16. Children's Privacy",
    paragraphs: [
      "Desiglo's web design and development services are not intentionally directed toward children for the purpose of collecting their personal information.",
    ],
  },
  {
    id: "third-party-links",
    title: "17. Third-Party Links",
    paragraphs: [
      "The website may contain links to third-party websites or services.",
      "Desiglo is not responsible for the privacy practices, security, or content of third-party websites. Visitors should review the policies of those services separately.",
    ],
  },
  {
    id: "changes",
    title: "18. Changes to This Privacy Policy",
    paragraphs: [
      "Desiglo may update this Privacy Policy when website functionality, service providers, business practices, or applicable legal requirements change.",
      "The Last Updated date at the top of the page should be changed whenever a material revision is published.",
    ],
  },
  {
    id: "contact",
    title: "19. Privacy Contact",
    paragraphs: [
      "Questions or requests relating to privacy may be submitted through the Desiglo Contact page.",
      "Privacy email: [ADD PRIVACY EMAIL].",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="This policy explains how personal information may be handled when you visit Desiglo, contact us, or submit information about a website project."
      lastUpdated="August 15, 2026"
      notice={
        <div className="rounded-xl border border-[#168CFF]/20 bg-[#168CFF]/5 px-5 py-4 text-sm leading-7 text-[#C9CED3]/70">
          For information about cookies and browser storage, see the{" "}
          <Link
            to="/cookie-policy"
            className="font-medium text-[#9FDCFF] hover:text-white"
          >
            Cookie Policy
          </Link>
          .
        </div>
      }
      sections={sections}
    />
  );
}