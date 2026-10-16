import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { illustrativeStoryLabel, stories } from "@/app/stories/stories";

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
    description: story.summary,
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
          <span>FIELD NOTE / {story.number}</span>
          <span>{story.category.toUpperCase()}</span>
        </div>
        <p className="eyebrow">Education · Digital empowerment</p>
        <h1>{story.title}</h1>
        <p className="stories-intro">{story.summary}</p>
        <p className="illustrative-label">{illustrativeStoryLabel}</p>
      </header>

      <article className="story-detail page-content" aria-label={story.title}>
        <div className="story-detail-copy">
          {story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <aside className="status-callout">
          {illustrativeStoryLabel} This narrative is an example, not a report of an actual student&apos;s
          experience, a verified outcome, or a testimonial.
        </aside>
        <div className="story-detail-nav">
          <Link className="arrow-link" href="/stories">Back to Field Notes <span aria-hidden="true">↗</span></Link>
          <Link className="arrow-link" href="/programs">Explore our initiatives <span aria-hidden="true">↗</span></Link>
        </div>
      </article>
    </main>
  );
}
