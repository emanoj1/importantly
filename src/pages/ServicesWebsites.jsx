import { createElement } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Globe,
  LayoutDashboard,
  Mail,
  MessageSquareMore,
  MonitorCog,
  MonitorSmartphone,
  Phone,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  SquareMousePointer,
  UserRound,
  Users,
  Video,
  WandSparkles,
  Wrench,
} from "lucide-react";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";

const audienceCards = [
  {
    icon: Rocket,
    title: "Startups",
    text: "MVPs, landing pages, or full web apps to validate your idea quickly.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Small Businesses",
    text: "Professional websites that actually bring customers - not just sit online.",
  },
  {
    icon: UserRound,
    title: "Personal Websites",
    text: "Portfolios, personal brands, or simple pages that represent you well.",
  },
  {
    icon: WandSparkles,
    title: "Non-technical Founders",
    text: "If tech feels overwhelming, I simplify everything and guide you end-to-end.",
  },
];

const capabilityItems = [
  {
    icon: MonitorSmartphone,
    title: "Website Design & Development",
    text: "Clean, modern sites that feel polished and easy to use.",
  },
  {
    icon: LayoutDashboard,
    title: "Web App Development (MERN stack)",
    text: "Custom tools and dashboards built for real workflows.",
  },
  {
    icon: SquareMousePointer,
    title: "Landing Pages (high-conversion focus)",
    text: "Pages designed to explain clearly and drive action.",
  },
  {
    icon: Globe,
    title: "Domain Registration & Setup",
    text: "Help choosing, buying, and connecting the right domain.",
  },
  {
    icon: ServerCog,
    title: "Hosting & Deployment",
    text: "Reliable launches with the setup handled for you.",
  },
  {
    icon: Mail,
    title: "Email Setup (custom domains)",
    text: "Professional email addresses that match your brand.",
  },
  {
    icon: Sparkles,
    title: "CMS / No-code builds (Carrd, Squarespace)",
    text: "Faster builds when simplicity is the smartest option.",
  },
  {
    icon: Wrench,
    title: "Performance & cleanup of existing sites",
    text: "Speed, fixes, polish, and cleanup for sites that need attention.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "You tell me your idea",
    text: "Fill out a simple form with your project details, timeline, and goals.",
  },
  {
    number: "02",
    title: "I analyse & plan",
    text: "I review your requirements and send you a clear implementation plan.",
  },
  {
    number: "03",
    title: "You review & approve",
    text: "If everything looks good, I provide a quote and timeline.",
  },
  {
    number: "04",
    title: "I build (weekends)",
    text: "I work on your project over weekends with focused, distraction-free development.",
  },
  {
    number: "05",
    title: "Launch & handover",
    text: "You get a fully working site/app, plus guidance on how to manage it.",
  },
];

const communicationItems = [
  { icon: Mail, title: "Email", text: "Primary communication" },
  { icon: Phone, title: "Phone calls", text: "As needed" },
  { icon: Video, title: "Virtual meetings", text: "For walkthroughs and alignment" },
];

const pricingItems = [
  {
    title: "Personal / Profile Websites",
    audience: "Influencers, freelancers, creators, tradies",
    points: [
      "One-page or simple multi-section site",
      "Bio, services, links, contact",
      "Clean personal branding",
    ],
    price: "$500 - $1,500",
  },
  {
    title: "Business Websites",
    audience: "Small businesses, local services",
    points: [
      "Multiple sections/pages",
      "Services, contact, trust elements",
      "Lead-focused layout",
    ],
    price: "$1,500 - $3,500",
  },
  {
    title: "Custom Web Apps",
    audience: "Custom builds using the MERN stack",
    points: [
      "Tailored workflows and functionality",
      "More complex builds with planning and iteration",
      "Best for products, internal tools, or custom ideas",
    ],
    price: "$3,000+",
  },
];

function ArrowButton({ href, children, secondary = false, tally = false }) {
  const className = secondary
    ? "service-button service-button-secondary"
    : "service-button";

  if (tally) {
    return (
      <button
        className={className}
        data-tally-open="RGRROP"
        data-tally-emoji-text="👋"
        data-tally-emoji-animation="wave"
        type="button"
      >
        {children}
      </button>
    );
  }

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

export default function ServicesWebsites() {
  return (
    <main className="service-page service-page-websites">
      <Container as="section" className="service-hero">
        <div className="service-hero-copy">
          <p className="service-page-eyebrow">Sydney-based solo builder</p>
          <h1>Websites & Web Apps, Built Simply</h1>
          <p className="service-page-text">
            I help startups, small businesses, and individuals turn ideas into
            real, working websites - without the usual complexity.
          </p>
          <p className="service-hero-support">
            From idea to launch, I handle everything - design, development,
            hosting, domains, and setup.
          </p>

          <div className="service-hero-actions">
            <ArrowButton href="#project-form">Start a Project</ArrowButton>
            <ArrowButton href="#how-it-works" secondary>
              See How It Works
            </ArrowButton>
          </div>

          <p className="service-hero-note">
            Based in Sydney. Working with clients locally and remotely.
          </p>
        </div>

        <Card className="service-hero-aside">
          <div className="service-mini-stat">
            <ShieldCheck size={18} />
            <span>Direct builder communication</span>
          </div>
          <div className="service-mini-stat">
            <MonitorCog size={18} />
            <span>Design, code, hosting, and launch handled</span>
          </div>
          <div className="service-mini-stat">
            <MessageSquareMore size={18} />
            <span>Clear, practical process with no agency overhead</span>
          </div>
        </Card>
      </Container>

      <Section
        eyebrow="Who this is for"
        title="A good fit when you want something real, useful, and manageable"
        description="Whether you need a simple business website or a more custom product, the goal is the same: make progress without getting buried in tech decisions."
      >
        <div className="service-grid service-grid-audience">
          {audienceCards.map(({ icon: Icon, title, text }) => (
            <Card key={title}>
              <div className="service-icon-wrap">
                {createElement(Icon, { size: 20 })}
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What I can help with"
        title="Support across the full build"
        description="You can come in with a rough idea, an existing site that needs help, or a project that needs end-to-end delivery."
      >
        <div className="service-grid service-grid-capabilities">
          {capabilityItems.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="service-capability-card">
              <div className="service-capability-heading">
                <div className="service-icon-wrap service-icon-wrap-soft">
                  {createElement(Icon, { size: 18 })}
                </div>
                <h3>{title}</h3>
              </div>
              <p>{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="how-it-works"
        eyebrow="How I work"
        title="A simple process from idea to launch"
        description="The aim is to keep things easy to follow, so you always know what happens next."
      >
        <div className="service-steps">
          {processSteps.map(({ number, title, text }) => (
            <Card key={number} className="service-step-card">
              <span className="service-step-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Card>
          ))}
        </div>
        <p className="service-section-note">
          Source code provided for custom builds (GitHub or ZIP).
        </p>
      </Section>

      <Section
        eyebrow="Flexible build approach"
        title="The right tool for the job"
        description="I recommend the best approach based on your situation - not what benefits me."
      >
        <div className="service-split-grid">
          <Card>
            <div className="service-icon-wrap">
              <LayoutDashboard size={20} />
            </div>
            <h3>Built from Scratch</h3>
            <p>
              Custom-built using modern tech (React, Node, MongoDB). Best for
              flexibility and long-term growth.
            </p>
          </Card>

          <Card>
            <div className="service-icon-wrap">
              <Sparkles size={20} />
            </div>
            <h3>No-Code / Fast Builds</h3>
            <p>
              Using tools like Carrd or Squarespace when speed and simplicity
              matter.
            </p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Ongoing support" title="Ongoing Website Support">
        <Card className="service-support-card">
          <div>
            <p className="service-support-text">
              If you don&apos;t want to manage updates yourself, I can handle
              everything for a simple monthly fee.
            </p>
            <div className="service-support-points">
              <div>Content updates</div>
              <div>Small design changes</div>
              <div>Performance improvements</div>
              <div>General maintenance</div>
            </div>
          </div>
        </Card>
      </Section>

      <Section eyebrow="How we communicate" title="Simple, direct, and efficient">
        <div className="service-communication">
          {communicationItems.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="service-communication-card">
              <div className="service-icon-wrap service-icon-wrap-soft">
                {createElement(Icon, { size: 18 })}
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Card>
          ))}
        </div>
        <p className="service-section-note">
          No unnecessary meetings, no bloated process.
        </p>
      </Section>

      <Section
        className="service-pricing-section"
        eyebrow="Typical project ranges"
        title="A general guide to scope and budget"
        description="Every project is different, but here’s a general idea to help you understand scope and budget."
      >
        <div className="service-pricing-grid">
          {pricingItems.map(({ title, audience, points, price }) => (
            <Card key={title} className="service-pricing-card">
              <p className="service-pricing-audience">{audience}</p>
              <h3>{title}</h3>
              <ul className="service-pricing-points">
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="service-pricing-amount">
                <span>Pricing</span>
                <strong>{price}</strong>
              </div>
            </Card>
          ))}
        </div>
        <p className="service-pricing-note">
          If this looks like a fit, tell me about your project below.
        </p>
      </Section>

      <Section
        id="project-form"
        eyebrow="Start a project"
        title="Tell me what you&apos;re building"
        description="Send through your idea, goals, and rough timeline. I&apos;ll review it and come back with the next steps."
      >
        <Card className="service-form-card">
          <div className="service-form-copy">
            <h3>Project enquiry</h3>
            <p>
              Use the quick form to share what you need. It&apos;s the
              easiest way to get the conversation started.
            </p>
          </div>
          <div className="service-form-actions">
            <ArrowButton tally>Open the Form</ArrowButton>
            <a
              className="service-text-link"
              href="https://tally.so/r/RGRROP"
              target="_blank"
              rel="noreferrer"
            >
              Prefer a direct link? Open the form in a new tab <ArrowRight size={16} />
            </a>
          </div>
        </Card>
      </Section>

      <Container as="section" className="service-trust">
        <Users size={22} />
        <p className="service-trust-title">
          This is not a large agency. You&apos;ll be working directly with the
          builder.
        </p>
        <p className="service-trust-text">
          Clear communication. Honest timelines. No fluff.
        </p>
        <p className="service-trust-note">
          Part of Importantly.dev - independent web products & tools.
        </p>
      </Container>
    </main>
  );
}
