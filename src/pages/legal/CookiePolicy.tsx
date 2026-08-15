import LegalPage from "../../components/legal/LegalPage";

const sections = [
  {
    id: "what-are-cookies",
    title: "1. What Are Cookies?",
    paragraphs: [
      "Cookies are small pieces of data that websites may store on a visitor's device. Websites may also use browser storage and similar technologies for comparable purposes.",
      "These technologies may be used for essential functionality, remembering preferences, measuring website usage, or supporting integrations.",
    ],
  },
  {
    id: "current-use",
    title: "2. Desiglo's Current Use",
    paragraphs: [
      "Desiglo currently uses browser storage to remember the visitor's cookie preference selections.",
      "This Cookie Policy should be updated whenever additional cookie-based or tracking technologies are introduced.",
    ],
  },
  {
    id: "necessary",
    title: "3. Necessary Technologies",
    paragraphs: [
      "Necessary technologies support functionality required for the website to operate or remember essential choices.",
      "For example, Desiglo's cookie consent preference may be stored locally so the website can remember whether you accepted or rejected optional categories.",
    ],
  },
  {
    id: "preferences",
    title: "4. Preference Technologies",
    paragraphs: [
      "Preference technologies may remember optional choices made by visitors.",
      "Desiglo should only describe preference technologies that are actually implemented.",
    ],
  },
  {
    id: "analytics",
    title: "5. Analytics",
    paragraphs: [
      "Desiglo does not currently claim to use a specific analytics provider.",
      "If analytics services are introduced later, this policy should identify them and explain their purpose before analytics storage is activated where consent is required.",
    ],
  },
  {
    id: "marketing",
    title: "6. Marketing",
    paragraphs: [
      "Desiglo does not currently claim to use advertising pixels, behavioural advertising systems, or marketing tracking cookies.",
      "If marketing technologies are introduced later, this policy and the consent interface should be updated.",
    ],
  },
  {
    id: "third-party",
    title: "7. Third-Party Technologies",
    paragraphs: [
      "Third-party tools such as form services, embedded content, analytics, scheduling systems, payment services, or other integrations may use their own technologies.",
      "Desiglo should review each integration before introducing it and update this policy where appropriate.",
    ],
  },
  {
    id: "duration",
    title: "8. Duration",
    paragraphs: [
      "Some browser technologies remain only for a session, while others may remain until they expire or are deleted.",
      "Desiglo's cookie consent selection may remain in local browser storage until the visitor changes the selection or clears browser storage.",
    ],
  },
  {
    id: "consent",
    title: "9. Cookie Consent",
    paragraphs: [
      "Where consent is required for optional technologies, Desiglo's consent interface provides controls for accepting or rejecting non-essential categories.",
      "Necessary functionality remains available because it is required to operate the consent system and other essential parts of the website.",
    ],
  },
  {
    id: "changing-preferences",
    title: "10. Changing Your Preferences",
    paragraphs: [
      "Visitors can reopen Cookie Settings from the website footer and change their preference selections.",
      "Browser settings may also allow visitors to remove stored website data.",
    ],
  },
  {
    id: "browser-controls",
    title: "11. Browser Controls",
    paragraphs: [
      "Most browsers provide controls for viewing, deleting, or blocking website storage and cookies.",
      "Blocking necessary functionality may cause parts of a website to behave differently.",
    ],
  },
  {
    id: "updates",
    title: "12. Policy Updates",
    paragraphs: [
      "This policy may be updated when Desiglo introduces, removes, or changes website technologies.",
    ],
  },
  {
    id: "contact",
    title: "13. Contact",
    paragraphs: [
      "Questions regarding cookies or privacy may be submitted through the Desiglo Contact page.",
      "Privacy email: [ADD PRIVACY EMAIL].",
    ],
  },
];

export default function CookiePolicy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      description="This policy explains how Desiglo uses cookies, browser storage, and similar technologies and how you can control optional preferences."
      lastUpdated="August 15, 2026"
      sections={sections}
    />
  );
}