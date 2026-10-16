import type { Metadata } from "next";
import Link from "next/link";
import { stories } from "@/app/stories/stories";

export const metadata: Metadata = {
  title: "Field Notes",
  description:
    "Editorial narrative drafts about education, families, schools, and communities.",
};

export default function StoriesPage() {
  return (
    <main id="main" className="page-main">
      <header className="stories-hero">
        <div className="section-kicker">
          <span>FIELD NOTES / OUR IMPACT</span>
          <span>LEARNING · OPPORTUNITY · COMMUNITY</span>
        </div>
        <p className="eyebrow">Acting Eye · Stories of change</p>
        <h1>Real change begins when opportunity reaches the people who need it most.</h1>
        <p className="stories-intro">
          Four narrative drafts explore what educational access can mean for families, schools, and
          communities.
        </p>
        <Link className="arrow-link" href="/programs">
          Explore our initiatives <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <section className="stories-list page-content" aria-label="Stories of change">
        <p className="stories-disclosure" role="note">
          These are prototype narratives and quotations, not verified testimonials or confirmed
          accounts of individual experiences.
        </p>
        {stories.map((story, index) => (
          <article className={`story-entry story-entry-${index + 1}`} key={story.slug}>
            <div className="story-entry-meta">
              <p className="eyebrow">{story.number} / {story.category.toUpperCase()}</p>
            </div>
            <div className="story-entry-body">
              <h2>{story.title}</h2>
              <p>{story.summary}</p>
              <Link className="arrow-link" href={`/stories/${story.slug}`}>
                Read this narrative <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}

      </section>

      <section className="stories-cta" aria-labelledby="stories-cta-title">
        <p className="eyebrow">Learning grows through shared effort</p>
        <h2 id="stories-cta-title">Help create more opportunities to learn <span aria-hidden="true">↗</span></h2>
        <p>
          Whether you are a student, educator, mentor, or supporter, your involvement can help make
          education and digital skills more accessible.
        </p>
        <div className="stories-cta-links">
          <Link className="button button-dark" href="/get-involved">Volunteer or mentor <span aria-hidden="true">↗</span></Link>
          <Link className="text-link" href="/impact">Explore the impact dashboard <span aria-hidden="true">↗</span></Link>
          <Link className="text-link" href="/contact">Contact us <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
