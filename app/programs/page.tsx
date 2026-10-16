import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Our work", description: "Explore Acting Eye's education and digital empowerment initiatives." };

const programs = [
  { href: "/programs/program-one", title: "[Program name]", place: "[Geography and community to confirm]", text: "Add a verified description of the challenge, community priorities, activities, and intended outcomes." },
  {
    href: "/programs/program-two",
    title: "A Computer Laboratory for a School",
    place: "School community · Africa",
    text: "Acting Eye established a computer laboratory at a school in Africa, creating a dedicated space for students to use computers and explore digital learning.",
    image: "/lab.jpg",
  },
];

export default function ProgramsPage() {
  return (
    <main id="main" className="page-main">
      <PageHeading
        index="02"
        eyebrow="Learning, made possible"
        title={<>Education opens <em>doors.</em></>}
        intro="Acting Eye works to expand access to education and digital opportunity. Our initiatives are shaped with learners, educators, and communities."
        statusLabel="EDUCATION & DIGITAL EMPOWERMENT"
      />
      <div className="page-content">
        <div className="content-grid">
          {programs.map((program, index) => (
            <article className="content-panel program-panel" key={program.href}>
              {program.image ? (
                <Image
                  className="program-card-image"
                  src={program.image}
                  alt="Students working at desktop computers in a school computer laboratory."
                  width={736}
                  height={491}
                  sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 600px"
                />
              ) : null}
              <span className="eyebrow">FOCUS AREA / 0{index + 1}</span>
              <h2>{program.title}</h2>
              <p className="program-place">{program.place}</p>
              <p>{program.text}</p>
              <Link className="arrow-link" href={program.href}>Explore this initiative <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
        <div className="status-callout">The computer laboratory initiative is described using the information currently available. School name, country, delivery date, equipment details, and any learner outcomes should be added only when confirmed.</div>
      </div>
    </main>
  );
}
