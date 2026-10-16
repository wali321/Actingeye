import type { Metadata } from "next";
import Link from "next/link";
import { illustrativeStoryLabel, stories } from "@/app/stories/stories";

export const metadata: Metadata = {
  title: "Field Notes",
  description:
    "Field Notes explores education, digital learning, mentorship, and opportunity through illustrative stories.",
};

export default function StoriesPage() {
  return (
    <main id="main" className="page-main">
      <header className="stories-hero">
        <div className="section-kicker">
          <span>FIELD NOTES / OUR IMPACT</span>
          <span>LEARNING · OPPORTUNITY · COMMUNITY</span>
        </div>
        <p className="eyebrow">Education opens doors</p>
        <h1>Every learner deserves a chance to <em>grow.</em></h1>
        <p className="stories-intro">
          Behind every new skill is a new possibility. Explore stories of learners discovering their
          potential, educators opening doors, and communities building a future through education
          and digital empowerment.
        </p>
        <Link className="arrow-link" href="/programs">
          Explore our initiatives <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <section className="stories-list page-content" aria-label="Education and digital empowerment stories">
        {stories.map((story) => (
          <article className="story-entry" key={story.slug}>
            <div className="story-entry-meta">
              <p className="eyebrow">FIELD NOTE / {story.number} · {story.category.toUpperCase()}</p>
              <span className="story-entry-mark" aria-hidden="true">✳</span>
            </div>
            <div className="story-entry-body">
              <h2>{story.title}</h2>
              <p>{story.summary}</p>
              <p className="illustrative-label">{illustrativeStoryLabel}</p>
              <Link className="arrow-link" href={`/stories/${story.slug}`}>
                Read the story <span aria-hidden="true">↗</span>
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
