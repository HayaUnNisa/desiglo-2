import LegalPage from "../../components/legal/LegalPage";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    paragraphs: [
      "These Terms & Conditions govern access to and use of the Desiglo website.",
      "They apply to general use of this website and are separate from any agreement governing an individual client project.",
    ],
  },
  {
    id: "acceptance",
    title: "2. Acceptance of These Terms",
    paragraphs: [
      "By accessing or using this website, you agree to use it in accordance with these Terms and applicable law.",
      "If you do not agree with these Terms, you should discontinue use of the website.",
    ],
  },
  {
    id: "website-use",
    title: "3. Permitted Website Use",
    paragraphs: [
      "The Desiglo website is provided to explain services, display portfolio work or templates, provide general information, answer common questions, and allow visitors to contact Desiglo or submit project inquiries.",
    ],
  },
  {
    id: "eligibility",
    title: "4. Eligibility",
    paragraphs: [
      "Where legal capacity or age requirements apply to entering into contracts for services, prospective clients must satisfy those requirements before entering into a binding service agreement.",
    ],
  },
  {
    id: "intellectual-property",
    title: "5. Intellectual Property",
    paragraphs: [
      "Unless otherwise indicated, original Desiglo branding, website design, written content, graphics, interface elements, and other original materials are owned by or licensed to Desiglo and may be protected by applicable intellectual property laws.",
      "Third-party names, trademarks, software, icons, images, and other materials remain the property of their respective owners.",
    ],
  },
  {
    id: "restrictions",
    title: "6. Restrictions",
    items: [
      "Do not attempt unauthorized access to the website or related systems.",
      "Do not deliberately interfere with website operation or security.",
      "Do not submit malicious code, spam, or fraudulent information through website forms.",
      "Do not misuse Desiglo branding or represent yourself as Desiglo.",
      "Do not reproduce protected website material where doing so would violate applicable rights.",
      "Do not use automated methods to damage or overload the website.",
    ],
  },
  {
    id: "submissions",
    title: "7. Information You Submit",
    paragraphs: [
      "You are responsible for ensuring that information submitted through the website is accurate and that you have the right to provide it.",
      "Submitting confidential, sensitive, or proprietary information through a general inquiry form is discouraged unless it is reasonably necessary.",
    ],
  },
  {
    id: "project-inquiries",
    title: "8. Project Inquiries",
    paragraphs: [
      "Submitting a contact form or Start a Project questionnaire does not automatically create a client relationship, service agreement, or obligation for Desiglo to accept a project.",
      "A project begins only after any required proposal, scope, agreement, and payment arrangements have been accepted.",
    ],
  },
  {
    id: "pricing",
    title: "9. Website Pricing Information",
    paragraphs: [
      "Prices displayed on the Desiglo website are starting ranges or general estimates unless expressly stated otherwise.",
      "Actual pricing may vary based on page count, design complexity, content requirements, integrations, functionality, e-commerce requirements, timeline, revisions, and technical scope.",
    ],
  },
  {
    id: "quotes",
    title: "10. Quotes and Estimates",
    paragraphs: [
      "A quote or estimate may be based on the project information available when it is prepared.",
      "Changes to project requirements may affect pricing, delivery time, and scope.",
    ],
  },
  {
    id: "client-contracts",
    title: "11. Client Project Agreements",
    paragraphs: [
      "These website Terms do not replace the contract or agreement used for an individual Desiglo project.",
    ],
    items: [
      "Project proposals.",
      "Statements or scopes of work.",
      "Payment terms.",
      "Revision limits.",
      "Project timelines.",
      "Intellectual property ownership or licensing terms.",
      "Cancellation or termination terms.",
      "Client responsibilities.",
      "Delivery and acceptance terms.",
      "Maintenance agreements.",
    ],
  },
  {
    id: "portfolio",
    title: "12. Portfolio and Demonstration Work",
    paragraphs: [
      "Some portfolio content may consist of clearly identified demonstration projects, templates, or concepts rather than completed client work.",
      "Desiglo should not present fictional projects as real clients or fabricate business results.",
    ],
  },
  {
    id: "website-information",
    title: "13. Accuracy of Website Information",
    paragraphs: [
      "Desiglo may update or change website content from time to time.",
      "While reasonable efforts may be made to maintain accurate information, Desiglo does not guarantee that all website information will always be complete, current, or error-free.",
    ],
  },
  {
    id: "third-party",
    title: "14. Third-Party Links and Services",
    paragraphs: [
      "The website may link to or integrate with third-party services.",
      "Desiglo does not control third-party websites and their use may be subject to separate terms and privacy policies.",
    ],
  },
  {
    id: "availability",
    title: "15. Website Availability",
    paragraphs: [
      "The website may occasionally be unavailable due to maintenance, technical problems, hosting interruptions, updates, or circumstances outside Desiglo's reasonable control.",
    ],
  },
  {
    id: "disclaimer",
    title: "16. Disclaimer",
    paragraphs: [
      "Website information is provided for general informational and business inquiry purposes.",
      "Specific warranties relating to paid client services should be defined in the applicable project agreement rather than assumed from general website content.",
    ],
  },
  {
    id: "liability",
    title: "17. Limitation of Liability",
    paragraphs: [
      "Any limitation or exclusion of liability must operate only to the extent permitted by the law applicable to Desiglo and the relevant transaction.",
      "This section should be reviewed against Desiglo's actual jurisdiction before publication.",
    ],
  },
  {
    id: "indemnification",
    title: "18. Indemnification",
    paragraphs: [
      "Any indemnification obligations applicable to website use or client services should be drafted according to Desiglo's jurisdiction and actual contractual arrangements.",
      "[OBTAIN JURISDICTION-SPECIFIC LEGAL REVIEW BEFORE ADDING A BINDING INDEMNITY CLAUSE.]",
    ],
  },
  {
    id: "governing-law",
    title: "19. Governing Law",
    paragraphs: [
      "[ADD THE GOVERNING LAW AND JURISDICTION THAT ACTUALLY APPLY TO DESIGLO.]",
    ],
  },
  {
    id: "severability",
    title: "20. Severability",
    paragraphs: [
      "If a provision of these Terms is determined to be unenforceable, treatment of the remaining provisions will depend on applicable law.",
    ],
  },
  {
    id: "changes",
    title: "21. Changes to These Terms",
    paragraphs: [
      "Desiglo may revise these Terms when website functionality, services, business practices, or legal requirements change.",
      "The Last Updated date should be changed when revisions are published.",
    ],
  },
  {
    id: "contact",
    title: "22. Contact",
    paragraphs: [
      "Questions regarding these Terms may be submitted through the Desiglo Contact page.",
      "Business email: [ADD BUSINESS EMAIL].",
    ],
  },
];

export default function Terms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      description="These Terms govern use of the Desiglo website. Individual website projects are governed by separate project agreements."
      lastUpdated="August 15, 2026"
      notice={
        <div className="rounded-xl border border-[#168CFF]/20 bg-[#168CFF]/5 px-5 py-4 text-sm leading-7 text-[#C9CED3]/70">
          <strong className="text-white">Important:</strong> These website
          Terms do not replace the proposal, scope of work, service agreement,
          payment terms, or other contract used for an individual client
          project.
        </div>
      }
      sections={sections}
    />
  );
}