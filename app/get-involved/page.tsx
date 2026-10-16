import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Get involved", description: "Ways to contribute time, skills, partnership, and support." };

const involvementOptions = [
  {
    number: "01",
    label: "LEARN",
    title: "Explore the work",
    text: "Discover education and digital learning initiatives from Acting Eye.",
    href: "/programs",
    linkText: "Explore initiatives",
  },
  {
    number: "02",
    label: "VOLUNTEER · PARTNER",
    title: "Share your skills. Build together.",
    text: "Bring your experience in teaching, technology, mentoring, or community work—or connect with Acting Eye about expanding access to learning.",
    href: "/contact",
    linkText: "Contact the team",
  },
  {
    number: "03",
    label: "SUPPORT",
    title: "Support learning",
    text: "Online giving is not available in this demo. Contact Acting Eye to learn more about supporting education and digital opportunity.",
    href: "/donate",
    linkText: "Explore support options",
  },
] as const;

export default function GetInvolvedPage() {
  return (
    <main id="main" className="page-main">
      <PageHeading
        index="05"
        section="GET INVOLVED"
        eyebrow="Learning is shared work"
        title={<>Make room for <em>possibility.</em></>}
        intro="Education grows stronger when learners, educators, mentors, and communities shape it together."
      />
      <div className="page-content">
        <div className="involvement-list">
          {involvementOptions.map((option) => (
            <article className="involvement-row" key={option.number}>
              <span className="involvement-number">{option.number}</span>
              <div className="involvement-copy">
                <p className="eyebrow">{option.label}</p>
                <h2>{option.title}</h2>
                <p>{option.text}</p>
              </div>
              <Link className="arrow-link" href={option.href}>
                {option.linkText} <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
