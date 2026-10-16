import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn about Acting Eye's proposed mission in education, digital opportunity, community-led learning, and its commitment to transparent storytelling.",
};

export default function AboutPage() {
  return (
    <main id="main" className="page-main">
      <header className="page-heading about-heading">
        <div className="section-kicker">
          <span>03 / OUR STORY</span>
          <span>CONTENT STATUS · DRAFT FOR PROTOTYPE</span>
        </div>
        <p className="eyebrow">Start with the people</p>
        <h1>The story starts with <em>listening.</em></h1>
        <p className="page-intro">
          Before we build programs, we ask questions. Before we measure outcomes, we hear from the
          people living them. This section explains why Acting Eye exists, what it believes, and how
          communities are meant to shape its work—not as beneficiaries of charity, but as authors of
          their own futures.
        </p>
        <p className="about-draft-note">
          The language on this page is proposed draft content. Verified organizational details are
          clearly marked; we would rather show an honest placeholder than a polished guess.
        </p>
      </header>

      <div className="about-sections">
        <section className="about-section" aria-labelledby="about-mission-title">
          <div className="about-section-meta"><span>01</span><span>OUR MISSION</span></div>
          <div className="about-section-content">
            <p className="eyebrow">Education · Digital opportunity</p>
            <h2 id="about-mission-title">Learning that belongs to the <em>learner.</em></h2>
            <p>
              Acting Eye exists to expand access to education and digital opportunity—so that every
              learner, regardless of where they start, can build the skills, confidence, and
              connections that open real doors.
            </p>
            <p>
              We focus on digital literacy and coding, scholarships and mentorship, free learning
              resources, and the community infrastructure that makes all of it possible. Our work
              begins with listening to what communities say they need, and continues with them as
              partners in delivering it.
            </p>
            <p className="about-verification">
              PROPOSED MISSION LANGUAGE · Replace with the board-approved mission statement when
              available: [Approved mission statement].
            </p>
            <Link className="arrow-link" href="/programs">
              Read our focus areas <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="about-section" aria-labelledby="about-story-title">
          <div className="about-section-meta"><span>02</span><span>OUR STORY</span></div>
          <div className="about-section-content">
            <p className="eyebrow">Built from questions, not assumptions</p>
            <h2 id="about-story-title">Talent is everywhere. Opportunity is <em>not.</em></h2>
            <p>
              Acting Eye is guided by a simple conviction: talent is everywhere, but opportunity is
              not. The gap between the two is what this initiative seeks to close.
            </p>
            <p>
              The proposed approach is to learn from local realities—what learners need, what
              educators are already doing, and what infrastructure is missing. Programs should
              strengthen what already exists, not replace it.
            </p>
            <div className="about-placeholder-list">
              <p className="eyebrow">Details to verify before publication</p>
              <ul>
                <li>Founding year: [Verified founding year]</li>
                <li>Founder or founding group: [Name(s) or group]</li>
                <li>Origin location and first community partnership: [Verified details]</li>
                <li>Key milestones: [Verified milestones]</li>
                <li>Founding or early community photograph: [Approved image and credit]</li>
              </ul>
            </div>
            <p className="about-verification">
              DRAFT ACCOUNT · Founding dates, people, places, partnerships, and milestones have not
              been verified or supplied.
            </p>
            <Link className="arrow-link" href="/get-involved">
              Get involved with our work <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="about-section" aria-labelledby="about-people-title">
          <div className="about-section-meta"><span>03</span><span>OUR PEOPLE</span></div>
          <div className="about-section-content">
            <p className="eyebrow">Shared effort, local knowledge</p>
            <h2 id="about-people-title">The work is carried by <em>people.</em></h2>
            <p>
              Behind an education initiative are educators, technologists, coordinators, and
              volunteers—and beside them, the mentors, teachers, and community leaders who can make
              the work possible. This section will introduce Acting Eye&apos;s contributors with
              verified names, roles, approved biographies, and photographs as they become available.
            </p>
            <p>
              The intention is to represent the full range of roles and shared responsibility, and
              to recognize the local knowledge that should shape the work.
            </p>
            <div className="about-placeholder-list">
              <p className="eyebrow">People to add with permission</p>
              <ul>
                <li>[Team member name] · [Role] · [Approved biography] · [Approved photograph]</li>
                <li>[Board member name] · [Role] · [Approved biography] · [Approved photograph]</li>
                <li>[Advisor or community partner name] · [Role] · [Approved biography] · [Approved photograph]</li>
              </ul>
              <p className="about-verification">
                No names, roles, or biographies have been supplied. These are prompts, not real
                people or placeholder personas.
              </p>
            </div>
            <Link className="arrow-link" href="/contact">
              Contact our team <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="about-section" aria-labelledby="about-governance-title">
          <div className="about-section-meta"><span>04</span><span>GOVERNANCE</span></div>
          <div className="about-section-content">
            <p className="eyebrow">Trust through accountability</p>
            <h2 id="about-governance-title">Accountability is a practice, not a <em>promise.</em></h2>
            <p>
              Acting Eye&apos;s draft principles recognize responsible decision-making and
              transparent governance as important to earning and keeping trust. Strong governance
              can include clear roles, documented decisions, independent oversight, and a willingness
              to be accountable to communities as well as funders.
            </p>
            <p>
              This describes intended values only. It does not confirm that specific policies,
              oversight arrangements, audits, or registrations are currently in place.
            </p>
            <div className="about-placeholder-list">
              <p className="eyebrow">Governance details to verify</p>
              <ul>
                <li>Legal registration status and jurisdiction: [Verified details]</li>
                <li>Board composition and governance structure: [Approved details]</li>
                <li>Approved governance policies: [Policy names and links]</li>
                <li>Financial oversight and audit practices: [Verified details]</li>
                <li>Conflict-of-interest and ethics policies: [Approved details]</li>
              </ul>
            </div>
            <Link className="arrow-link" href="/transparency">
              View transparency commitments <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </div>

      <section className="about-verification-notice" aria-labelledby="about-status-title">
        <p className="eyebrow">Content status &amp; verification</p>
        <h2 id="about-status-title">Draft content for <em>prototype use.</em></h2>
        <p>
          The organization name Acting Eye was provided. The mission and values above are proposed
          language from the project brief, not an officially approved statement. Founding history,
          people, locations, partnerships, and governance details remain unverified.
        </p>
        <ul>
          <li>Board-approved mission statement</li>
          <li>Founding year, founder(s), and origin story</li>
          <li>Verified locations and community partnerships</li>
          <li>Team and board members with approved biographies</li>
          <li>Legal registration status and governance practices</li>
          <li>Photographs with publication permission and accurate credits</li>
        </ul>
      </section>
    </main>
  );
}
