import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stories } from "@/app/stories/stories";

type StoryParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: StoryParams): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);

  if (!story) return { title: "Story not found" };

  return {
    title: story.title,
    description: `Prototype narrative, not a verified testimonial. ${story.summary}`,
  };
}

export default async function StoryPage({ params }: StoryParams) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);

  if (!story) notFound();

  return (
    <main id="main" className="page-main">
      <header className="stories-hero story-detail-hero">
        <div className="section-kicker">
          <span>{story.number} / {story.category.toUpperCase()}</span>
          <span>ACTING EYE · STORIES OF CHANGE</span>
        </div>
        <p className="eyebrow">Narrative draft · not a verified testimonial</p>
        <h1>{story.title}</h1>
      </header>

      <article className="story-detail page-content" aria-label={story.title}>
        <p className="story-disclosure" role="note">
          This is a prototype narrative and quotation, not a verified testimonial or confirmed
          account of an individual experience.
        </p>
        <div className="story-detail-copy">
          {story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <aside className="story-impact">
            <p className="eyebrow">The impact</p>
            <p>{story.impact}</p>
          </aside>
        </div>
        <div className="story-detail-nav">
          <Link className="arrow-link" href="/stories">Back to Field Notes <span aria-hidden="true">↗</span></Link>
          <Link className="arrow-link" href="/programs">Explore our initiatives <span aria-hidden="true">↗</span></Link>
        </div>
      </article>
    </main>
  );
}
