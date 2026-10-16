import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeading } from "@/components/page-heading";

const programSlugs = ["program-two", "book-distribution"];

export function generateStaticParams() {
  return programSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!programSlugs.includes(slug)) return { title: "Program not found" };
  if (slug === "program-two") {
    return {
      title: "Computers for underprivileged learners",
      description: "Acting Eye established a computer laboratory at a school in Africa to support access to computers and digital learning.",
    };
  }
  if (slug === "book-distribution") {
    return {
      title: "Books for Young Learners",
      description: "Acting Eye distributed books to students in India to support access to learning materials.",
    };
  }
  return { title: "Program not found" };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!programSlugs.includes(slug)) notFound();
  if (slug === "program-two") {
    return (
      <main id="main" className="page-main">
        <PageHeading
          index="02"
          section="OUR WORK"
          eyebrow="Digital learning · school partnership"
          title={<>Computers for underprivileged <em>learners.</em></>}
          intro="Acting Eye established a computer laboratory at a school in Africa, creating a dedicated space for students to access computers and explore digital learning."
          statusLabel="SCHOOL INITIATIVE"
        />
        <article className="page-content program-detail">
          <figure className="program-detail-figure">
            <Image
              src="/lab1.jpg"
              alt="Students seated at desktop computers in a school computer laboratory."
              width={1125}
              height={1120}
              sizes="(max-width: 900px) 100vw, 900px"
            />
            <figcaption>School computer laboratory · Africa</figcaption>
          </figure>
          <div className="program-detail-copy">
            <p className="eyebrow">Access to technology is a starting point</p>
            <h2>A place to explore, practise, and learn.</h2>
            <p>
              The computer laboratory gives students a place to work directly with technology and
              explore digital learning.
            </p>
            <p>
              Hands-on access makes it possible to practise digital skills, experiment with new
              ideas, and bring classroom learning onto a screen.
            </p>
          </div>
          <ul className="document-list">
            <li><span>Initiative</span><span>School computer laboratory</span></li>
            <li><span>Location</span><span>A school in Africa</span></li>
            <li><span>Focus</span><span>Computer access and digital learning</span></li>
          </ul>
          <div className="route-actions">
            <Link className="route-action" href="/programs">All initiatives ↗</Link>
            <Link className="route-action route-action-secondary" href="/get-involved">Get involved ↗</Link>
          </div>
        </article>
      </main>
    );
  }

  if (slug === "book-distribution") {
    return (
      <main id="main" className="page-main">
        <PageHeading
          index="02"
          section="OUR WORK"
          eyebrow="Learning resources · book distribution"
          title={<>Books for young <em>learners.</em></>}
          intro="Acting Eye distributed books to students in India, helping put learning materials directly into young readers&apos; hands."
          statusLabel="BOOK DISTRIBUTION · INDIA"
        />
        <article className="page-content program-detail">
          <figure className="program-detail-figure">
            <Image
              src="/books.jpg"
              alt="Students holding books during a book distribution in India."
              width={1200}
              height={900}
              sizes="(max-width: 900px) 100vw, 900px"
            />
            <figcaption>Book distribution · India</figcaption>
          </figure>
          <div className="program-detail-copy">
            <p className="eyebrow">Learning resources in learners&apos; hands</p>
            <h2>Making room for reading and discovery.</h2>
            <p>
              Acting Eye distributed books to students in India, giving young readers learning
              materials to explore at school and beyond.
            </p>
          </div>
          <ul className="document-list">
            <li><span>Initiative</span><span>Book distribution</span></li>
            <li><span>Location</span><span>India</span></li>
            <li><span>Focus</span><span>Access to books and learning resources</span></li>
          </ul>
          <div className="route-actions">
            <Link className="route-action" href="/programs">All initiatives ↗</Link>
            <Link className="route-action route-action-secondary" href="/get-involved">Get involved ↗</Link>
          </div>
        </article>
      </main>
    );
  }

  notFound();
}
