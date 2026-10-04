import { useParams, Link } from "react-router-dom";
import { Check, ArrowUpRight } from "lucide-react";
import Button from "../components/common/Button";
import NotFound from "./NotFound";
const services: Record<
  string,
  { title: string; description: string; items: string[] }
> = {
  "website-design": {
    title: "A website that feels like you.",
    description:
      "A clear, distinctive visual identity for your digital home. We combine your brand with an intuitive experience that helps visitors find their next step.",
    items: [
      "Structure & user journeys",
      "Responsive page design",
      "Typography & color systems",
      "Reusable components",
      "Interactive prototypes",
      "Developer-ready design",
    ],
  },
  "website-development": {
    title: "Built to work beautifully.",
    description:
      "From approved designs to a responsive website. We focus on clear interactions, maintainable code, and a reliable experience across screen sizes.",
    items: [
      "Responsive development",
      "Content management",
      "Forms & integrations",
      "Accessible interactions",
      "Performance checks",
      "Launch preparation",
    ],
  },
  "business-websites": {
    title: "Your business, beautifully online.",
    description:
      "A professional home for your services, your story, and your next customer conversation.",
    items: [
      "Website planning",
      "Service pages",
      "Company story",
      "Inquiry forms",
      "Responsive layouts",
      "Launch support",
    ],
  },
  "landing-pages": {
    title: "One page. A clear purpose.",
    description:
      "A focused experience for your campaign, service, or launch. Give visitors the information and confidence to take the next step.",
    items: [
      "Campaign structure",
      "Focused messaging",
      "Responsive design",
      "Lead capture",
      "Clear calls to action",
      "Integration planning",
    ],
  },
  "ecommerce-development": {
    title: "A better way to shop your brand.",
    description:
      "Bring your products into focus with a storefront designed around discovery, useful information, and a considered path to purchase.",
    items: [
      "Storefront design",
      "Product presentation",
      "Collection navigation",
      "Cart & checkout setup",
      "Responsive shopping",
      "Platform integration",
    ],
  },
  "website-redesign": {
    title: "Make your next impression better.",
    description:
      "Keep what works. Rethink what gets in the way. We help bring your existing website closer to the business you are today.",
    items: [
      "Current site review",
      "Content structure",
      "Visual refresh",
      "Mobile improvements",
      "Navigation improvements",
      "Launch planning",
    ],
  },
  "website-maintenance": {
    title: "Keep your website moving forward.",
    description:
      "Practical updates and ongoing care for a website that needs to evolve with your business. Support is scoped around your needs.",
    items: [
      "Content updates",
      "Layout improvements",
      "Bug fixes",
      "Dependency reviews",
      "Performance review",
      "Ongoing development",
    ],
  },
};
const descriptions: Record<string, string> = {
  "Structure & user journeys":
    "Organize your pages around the questions visitors need answered and the actions you want them to take.",
  "Responsive page design":
    "Adapt the hierarchy and layout so your content works naturally on phones, tablets, and desktops.",
  "Typography & color systems":
    "Create a consistent set of type styles and colors that expresses your brand and supports readability.",
  "Reusable components":
    "Define repeatable patterns for cards, navigation, buttons, and forms to keep your website consistent.",
  "Interactive prototypes":
    "Review key interactions before development, with prototypes included where the project needs them.",
  "Developer-ready design":
    "Prepare layouts, assets, and component guidance for a clear handoff into development.",
  "Responsive development":
    "Build flexible layouts that respond to screen size and real content, rather than fixed screenshots.",
  "Content management":
    "Connect an appropriate CMS so your team can update agreed areas without changing the code.",
  "Forms & integrations":
    "Connect inquiry forms and agreed third-party tools to support your day-to-day workflow.",
  "Accessible interactions":
    "Consider keyboard navigation, focus visibility, form labels, and reduced-motion preferences.",
  "Performance checks":
    "Review asset sizes, loading behavior, and unnecessary work before your website goes live.",
  "Launch preparation":
    "Check the production build, essential links, and deployment settings before launch.",
  "Website planning":
    "Agree on your audience, required pages, and the purpose of each section before design begins.",
  "Service pages":
    "Give each service a clear explanation, supporting details, and an appropriate next step.",
  "Company story":
    "Introduce your business with a clear narrative that helps visitors understand what makes you different.",
  "Inquiry forms":
    "Collect the details you need to begin useful conversations with potential customers.",
  "Responsive layouts":
    "Adapt your content for the devices your visitors use, from small phones to wide screens.",
  "Launch support":
    "Complete agreed launch checks and help prepare the website for its production environment.",
  "Campaign structure":
    "Build a focused path from the campaign promise to the action you want visitors to take.",
  "Focused messaging":
    "Arrange your offer, supporting details, and objections into a concise, readable page.",
  "Responsive design":
    "Keep the message, imagery, and calls to action clear across screen sizes.",
  "Lead capture":
    "Design inquiry or signup forms around the information needed for your campaign.",
  "Clear calls to action":
    "Make the next step easy to find with meaningful labels and deliberate placement.",
  "Integration planning":
    "Agree on the email, CRM, or analytics connections needed for your project.",
  "Storefront design":
    "Create a cohesive shopping experience that reflects your brand and product range.",
  "Product presentation":
    "Bring imagery, specifications, options, and useful purchasing information together.",
  "Collection navigation":
    "Help shoppers browse product groups and find the items relevant to them.",
  "Cart & checkout setup":
    "Configure the agreed commerce platform’s purchase flow and payment options.",
  "Responsive shopping":
    "Keep product discovery and purchasing usable on smaller screens.",
  "Platform integration":
    "Connect your storefront with the selected commerce platform and agreed business tools.",
  "Current site review":
    "Identify useful content, friction points, and opportunities in your existing website.",
  "Content structure":
    "Reorganize pages and sections so visitors can understand your offer more easily.",
  "Visual refresh":
    "Update typography, spacing, imagery, and components with a coherent design direction.",
  "Mobile improvements":
    "Address layouts and interactions that make the current site difficult to use on phones.",
  "Navigation improvements":
    "Simplify menus and page relationships to make the site easier to explore.",
  "Launch planning":
    "Plan the transition, including relevant content migration and URL changes within scope.",
  "Content updates":
    "Update agreed text, images, and page content as your business changes.",
  "Layout improvements":
    "Refine existing sections and components to accommodate new requirements.",
  "Bug fixes":
    "Investigate and resolve agreed functional or visual issues in the website.",
  "Dependency reviews":
    "Review relevant software dependencies and plan appropriate maintenance updates.",
  "Performance review":
    "Identify loading and rendering issues and recommend practical improvements.",
  "Ongoing development":
    "Scope new features and improvements as a planned extension of your website.",
};
export default function ServiceDetail() {
  const { slug = "" } = useParams();
  const service = services[slug];
  if (!service) return <NotFound />;
  return (
    <>
      <section className="dg-container project-form-page">
        <p className="eyebrow">
          DESIGLO / {slug.replaceAll("-", " ").toUpperCase()}
        </p>
        <div className="project-form-header">
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
        <Button to="/start-a-project">
          Discuss your project <ArrowUpRight size={17} />
        </Button>
        <div className="section-heading mt-24">
          <h2>
            Considered from
            <br />
            <span>every angle.</span>
          </h2>
          <p className="section-description">
            We agree on the deliverables and timeline before the work begins.
            Every engagement is shaped around your goals.
          </p>
        </div>
        <div className="service-detail-grid">
          {service.items.map((item, i) => (
            <article key={item}>
              <Check size={20} />
              <h3>{item}</h3>
              <p>{descriptions[item]}</p>
              <span className="eyebrow mt-6">0{i + 1}</span>
            </article>
          ))}
        </div>
        <Link className="text-link mt-12" to="/services">
          Explore all services <ArrowUpRight size={16} />
        </Link>
      </section>
    </>
  );
}
