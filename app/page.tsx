import Image from "next/image";
import Link from "next/link";

const impactItems = [
  {
    value: "1,250",
    label: "People reached",
    detail: "Students and learners engaged through educational support, digital literacy activities, coding workshops, and learning resources.",
    period: "Example: April 2025 – March 2026",
    source: "Sample student participation register",
    lastVerified: "Pending review",
  },
  {
    value: "12",
    label: "Communities served",
    detail: "Communities or localities where educational programs or digital empowerment initiatives were delivered during the reporting period.",
    period: "Example: April 2025 – March 2026",
    source: "Sample program delivery and location register",
    lastVerified: "Pending review",
  },
  {
    value: "180",
    label: "Program outcome",
    detail: "Learners completing a defined digital literacy or introductory coding program, subject to documented completion criteria.",
    period: "Example: April 2025 – March 2026",
    source: "Sample program completion records",
    lastVerified: "Pending review",
  },
];

const pathways = [
  { number: "01", title: "Give", text: "Support the work once a secure payment provider is configured.", href: "/donate", action: "Explore giving" },
  { number: "02", title: "Volunteer", text: "Share your time and skills with the team.", href: "/get-involved", action: "Find out how" },
  { number: "03", title: "Partner", text: "Explore a thoughtful partnership or institutional collaboration.", href: "/get-involved", action: "Start a conversation" },
  { number: "04", title: "Stay connected", text: "Newsletter signup will be added when a privacy-reviewed service is chosen.", href: "/contact", action: "Contact the team" },
];

export default function Home() {
  return (
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> Acting Eye · learning and digital opportunity</p>
          <h1 id="hero-title">Change takes root when <em>communities</em> lead.</h1>
          <p className="hero-intro">
            Acting Eye works to expand access to education and digital opportunity, so learners can
            build skills, confidence, and connections that open real doors.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" href="/donate">Explore giving <span aria-hidden="true">↗</span></Link>
            <Link className="text-link text-link-light" href="/programs">Discover the work <span aria-hidden="true">↓</span></Link>
          </div>
          <p className="hero-note">PROPOSED MISSION LANGUAGE · Board approval pending.</p>
        </div>
        <div className="hero-art">
          <Image
            src="/main.jpg"
            alt="Students gathered around a laptop during a learning activity."
            width={2000}
            height={1333}
            priority
            sizes="(max-width: 760px) 100vw, 50vw"
            className="hero-image"
          />
          <div className="art-caption"><span>LEARNING TOGETHER</span><span>Photo permission and credit to confirm</span></div>
          <span className="hero-stamp" aria-hidden="true">PEOPLE<br />· PLACE<br />· POSSIBILITY</span>
        </div>
        <a className="scroll-cue" href="#mission"><span aria-hidden="true">↓</span> Scroll to explore</a>
      </section>

      <section className="mission section-pad" id="mission" aria-labelledby="mission-title">
        <div className="section-kicker"><span>01 / OUR PURPOSE</span><span>THE STARTING POINT</span></div>
        <div className="mission-grid">
          <p className="eyebrow">A mission shaped together</p>
          <div>
            <h2 id="mission-title">The best solutions begin with <em>listening.</em></h2>
            <p className="body-large">
              Use this space to describe the issue in plain language, name the community&apos;s
              strengths, and explain how the organization works alongside people—not on their behalf.
            </p>
            <Link className="arrow-link" href="/about">Meet the organization <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="impact section-pad" aria-labelledby="impact-title">
        <div className="section-kicker section-kicker-light"><span>02 / IMPACT &amp; TRANSPARENCY</span><span>A SAMPLE REPORTING VIEW</span></div>
        <div className="impact-heading">
          <div><p className="eyebrow">The work, made visible</p><h2 id="impact-title">Progress deserves <em>proof.</em></h2></div>
          <p>A considered account of who we reach, where we work, and what learners complete. These sample indicators show how Acting Eye intends to report its work.</p>
        </div>
        <p className="impact-integrity-note">PROTOTYPE DATA · Figures and reporting periods below are fictional examples, not verified results. Sources are placeholders pending review.</p>
        <div className="impact-list">
          {impactItems.map((item, index) => (
            <article className="impact-item" key={item.label}>
              <div className="impact-measure">
                <span className="impact-index">0{index + 1} <span> / 03</span></span>
                <p className="impact-value">{item.value}</p>
                <h3>{item.label}</h3>
              </div>
              <div className="impact-item-content">
                <p className="impact-detail">{item.detail}</p>
                <dl className="impact-provenance">
                  <div><dt>Reporting period</dt><dd>{item.period}</dd></div>
                  <div><dt>Evidence</dt><dd>{item.source}</dd></div>
                </dl>
                <p className="impact-verification">Verification: {item.lastVerified}</p>
              </div>
            </article>
          ))}
        </div>
        <Link className="arrow-link arrow-link-light" href="/impact">Explore the impact framework <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="programs section-pad" id="programs" aria-labelledby="programs-title">
        <div className="section-kicker"><span>03 / THE WORK</span><span>FOCUS AREAS TO CONFIRM</span></div>
        <div className="split-heading">
          <div><p className="eyebrow">Where effort becomes action</p><h2 id="programs-title">Rooted in place.<br /><em>Built for change.</em></h2></div>
          <p>Replace these starter entries with confirmed programs, locations, and outcomes. No activities or geographies have been assumed.</p>
        </div>
        <div className="program-grid">
          <Link className="program-feature" href="/programs">
            <span className="program-label">FOCUS AREA / 01</span>
            <span className="program-art program-art-one" aria-hidden="true"><span className="sun-disc" /><span className="field-line line-one" /><span className="field-line line-two" /><span className="field-line line-three" /></span>
            <span className="program-info"><span><strong>[Program name]</strong><small>[Geography · community to confirm]</small></span><span className="circle-arrow" aria-hidden="true">↗</span></span>
          </Link>
          <Link className="program-secondary" href="/programs">
            <span className="program-label">FOCUS AREA / 02</span>
            <span className="program-art program-art-two" aria-hidden="true"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orbit orbit-three" /><span className="orbit-center">01</span></span>
            <span className="program-info"><span><strong>[Program name]</strong><small>[Geography · community to confirm]</small></span><span className="circle-arrow" aria-hidden="true">↗</span></span>
          </Link>
        </div>
        <Link className="arrow-link" href="/programs">View all programs <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="story section-pad" aria-labelledby="story-title">
        <div className="section-kicker"><span>04 / FIELD NOTES</span><span>STORIES WITH CONSENT</span></div>
        <div className="story-grid">
          <div className="story-art" aria-hidden="true"><span className="story-sun" /><span className="story-shape story-shape-a" /><span className="story-shape story-shape-b" /><span className="story-art-label">IMAGE PLACEHOLDER<br />CONSENTED PHOTO TO COME</span></div>
          <div className="story-copy"><p className="eyebrow">Listen before you tell</p><h2 id="story-title">Stories belong to the people who <em>live them.</em></h2><p>Publish a first-hand story here only with informed consent, accurate attribution, and the person&apos;s own perspective at its center.</p><Link className="arrow-link" href="/stories">Visit field notes <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="approach section-pad" aria-labelledby="approach-title">
        <div className="section-kicker"><span>05 / OUR APPROACH</span><span>LEARN · ACT · REFLECT</span></div>
        <div className="approach-heading"><p className="eyebrow">A practice, not a promise</p><h2 id="approach-title">Good work is <em>shared work.</em></h2></div>
        <div className="approach-steps">
          {[
            ["01", "Listen", "Start with community priorities and lived expertise."],
            ["02", "Design together", "Shape a response with the people closest to the issue."],
            ["03", "Learn openly", "Track agreed outcomes, share what changes, and improve."],
            ["04", "Build for continuity", "Support local ownership and long-term resilience."],
          ].map(([number, title, text]) => <article className="approach-step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <p className="placeholder-note">STARTER FRAMEWORK · Confirm this approach with the organization before publishing as fact.</p>
      </section>

      <section className="places section-pad" aria-labelledby="places-title">
        <div className="section-kicker"><span>06 / PLACE MATTERS</span><span>GEOGRAPHIES TO CONFIRM</span></div>
        <div className="places-inner"><div><p className="eyebrow">Local knowledge, lasting change</p><h2 id="places-title">Every place has its own <em>story.</em></h2><p>List only the regions where the team is actively working, with communities named as they wish to be represented.</p></div><div className="place-map" role="img" aria-label="Abstract map placeholder; locations have not yet been provided."><span className="map-ring map-ring-a" /><span className="map-ring map-ring-b" /><span className="map-dot map-dot-a" /><span className="map-dot map-dot-b" /><span className="map-dot map-dot-c" /><span className="map-label">MAP / PLACEHOLDER</span></div></div>
        <Link className="arrow-link" href="/about">Learn about the organization <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="get-involved section-pad" aria-labelledby="involved-title">
        <div className="section-kicker section-kicker-light"><span>07 / TAKE PART</span><span>NO PRESSURE, JUST POSSIBILITY</span></div>
        <div className="involved-heading"><p className="eyebrow">There are many ways in</p><h2 id="involved-title">Make room for <em>more voices.</em></h2></div>
        <div className="pathway-list">{pathways.map((pathway) => <article className="pathway" key={pathway.number}><span className="pathway-number">{pathway.number}</span><h3>{pathway.title}</h3><p>{pathway.text}</p><Link href={pathway.href} aria-label={`${pathway.action}: ${pathway.title}`}>{pathway.action} <span aria-hidden="true">↗</span></Link></article>)}</div>
      </section>

      <section className="trust section-pad" aria-labelledby="trust-title">
        <div className="section-kicker"><span>08 / OPEN BY DEFAULT</span><span>TRANSPARENCY</span></div>
        <div className="trust-grid"><div><p className="eyebrow">Trust is earned in the open</p><h2 id="trust-title">Accountability is part of the <em>work.</em></h2></div><div><p>Registration details, audited accounts, policies, and annual reports will appear here when verified documents are supplied. No legal or tax claims are displayed by default.</p><Link className="arrow-link" href="/transparency">Visit transparency <span aria-hidden="true">↗</span></Link></div></div>
      </section>

      <section className="closing section-pad" aria-labelledby="closing-title">
        <p className="eyebrow">The next chapter is a shared one</p><h2 id="closing-title">Start with a <em>conversation.</em></h2><div className="closing-actions"><Link className="button button-dark" href="/get-involved">Find your way in <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link></div>
        <span className="closing-mark" aria-hidden="true">✳</span>
      </section>
    </main>
  );
}
