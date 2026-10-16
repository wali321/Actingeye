import type { Metadata } from "next";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  BalanceScaleIcon,
  BookOpen01Icon,
  Target01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: "About Acting Eye",
  description:
    "Learn about Acting Eye's mission, community-led approach, people, and principles for accountability.",
};

const aboutSections = [
  {
    number: "01",
    label: "OUR MISSION",
    icon: Target01Icon,
    eyebrow: "Education · Digital opportunity",
    heading: <>Learning that belongs to the <em>learner.</em></>,
    paragraphs: [
      "Acting Eye exists to expand access to education and digital opportunity, so that every learner, wherever they start, can build the skills, confidence, and connections that open real doors.",
      "Our work centers on four things: digital literacy and coding, scholarships and mentorship, free learning resources, and the community infrastructure that makes learning possible. We begin by listening to what communities say they need, and we continue with them as partners.",
    ],
    link: { href: "/programs", label: "See our focus areas" },
  },
  {
    number: "02",
    label: "OUR STORY",
    icon: BookOpen01Icon,
    eyebrow: "Built from questions, not assumptions",
    heading: <>Talent is everywhere. Opportunity is <em>not.</em></>,
    paragraphs: [
      "Acting Eye starts from a simple conviction: talent is everywhere, but opportunity is not. Closing that gap is the work.",
      "We learn from local realities first: what learners need, what educators are already doing, and what is missing. Our programs aim to strengthen what already exists, not replace it.",
    ],
    link: { href: "/get-involved", label: "Get involved" },
  },
  {
    number: "03",
    label: "OUR PEOPLE",
    icon: UserGroupIcon,
    eyebrow: "Shared effort · local knowledge",
    heading: <>The work is carried by <em>people.</em></>,
    paragraphs: [
      "Education happens through educators, technologists, coordinators, and volunteers, alongside the mentors, teachers, and community leaders who know their communities best. We believe local knowledge should shape every program, and that credit for the work is shared.",
    ],
    link: { href: "/contact", label: "Contact our team" },
  },
  {
    number: "04",
    label: "OUR PRINCIPLES",
    icon: BalanceScaleIcon,
    eyebrow: "Trust through accountability",
    heading: <>Accountability is a practice, not a <em>promise.</em></>,
    paragraphs: [
      "We believe trust is earned through clear roles, documented decisions, and openness about how we work. We hold ourselves accountable to the communities we serve as much as to the people who support us.",
    ],
    link: { href: "/transparency", label: "Read how we work" },
  },
] as const;

export default function AboutPage() {
  return (
    <main id="main" className="page-main">
      <header className="page-heading about-heading">
        <div className="section-kicker">
          <span>03 / OUR STORY</span>
          <span>ACTING EYE · EDUCATION &amp; OPPORTUNITY</span>
        </div>
        <div className="about-hero-grid">
          <div className="about-hero-title">
            <p className="eyebrow">Start with the people</p>
            <h1>The story starts with <em>listening.</em></h1>
          </div>
          <div className="about-hero-aside">
            <span className="about-hero-index" aria-hidden="true">03</span>
            <p className="page-intro">
              Before we build programs, we ask questions. Before we measure outcomes, we hear from the
              people living them. This section explains why Acting Eye exists, what it believes, and how
              communities are meant to shape its work—not as beneficiaries of charity, but as authors of
              their own futures.
            </p>
          </div>
        </div>
        <a className="about-scroll-link" href="#about-sections">
          Explore our story <span aria-hidden="true">↓</span>
        </a>
      </header>

      <div className="about-sections" id="about-sections">
        {aboutSections.map((section) => (
          <section
            className="about-section"
            aria-labelledby={`about-${section.number}-title`}
            key={section.number}
          >
            <div className="about-section-meta">
              <span className="about-section-icon" aria-hidden="true">
                <HugeiconsIcon icon={section.icon} size={22} strokeWidth={1.5} />
              </span>
              <span className="about-section-number">{section.number}</span>
            </div>
            <div className="about-section-content">
              <p className="about-section-label">{section.label}</p>
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 id={`about-${section.number}-title`}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <Link className="arrow-link" href={section.link.href}>
                {section.link.label} <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
