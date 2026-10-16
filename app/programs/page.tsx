import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Our work", description: "Explore Acting Eye's education and digital empowerment initiatives." };

const programs = [
  {
    href: "/programs/program-two",
    title: "Computers for underserved learners",
    place: "School community · Africa",
    text: "Acting Eye established a computer laboratory at a school in Africa, creating a dedicated space for students to use computers and explore digital learning.",
    image: "/lab1.jpg",
    imageAlt: "Students working at desktop computers in a school computer laboratory.",
  },
  {
    href: "/programs/book-distribution",
    title: "Books for Young Learners",
    place: "India",
    text: "Acting Eye distributed books to students in India, helping put learning materials directly into young readers' hands.",
    image: "/books.jpg",
    imageAlt: "Students holding books during a book distribution in India.",
  },
];

export default function ProgramsPage() {
  return (
    <main id="main" className="page-main">
      <PageHeading
        index="02"
        section="OUR WORK"
        eyebrow="Learning, made possible"
        title={<>Education opens <em>doors.</em></>}
        intro="Acting Eye works to expand access to education and digital opportunity. Our initiatives are shaped with learners, educators, and communities."
        statusLabel="EDUCATION & DIGITAL EMPOWERMENT"
      />
      <div className="page-content">
        <div className="programs-list">
          {programs.map((program, index) => (
            <article className="content-panel program-panel" key={program.href}>
              {program.image ? (
                <div className="program-card-image-frame">
                  <Image
                    className="program-card-image"
                    src={program.image}
                    alt={program.imageAlt}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 600px"
                  />
                </div>
              ) : null}
              <span className="eyebrow">FOCUS AREA / 0{index + 1}</span>
              <h2>{program.title}</h2>
              <p className="program-place">{program.place}</p>
              <p>{program.text}</p>
              <Link className="arrow-link" href={program.href}>Explore this initiative <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
