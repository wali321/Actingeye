import Image from "next/image";
import Link from "next/link";
import { impactHighlights } from "@/components/impact-data";

const pathways = [
  { number: "01", title: "Learn", text: "Explore digital literacy, coding, and learning resources.", href: "/programs", action: "Explore our work" },
  { number: "02", title: "Volunteer", text: "Bring your time, knowledge, and perspective to the community.", href: "/get-involved", action: "Get involved" },
  { number: "03", title: "Partner", text: "Connect with Acting Eye about education and digital access.", href: "/contact", action: "Start a conversation" },
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
            <Link className="button button-light" href="/get-involved">Get involved <span aria-hidden="true">↗</span></Link>
            <Link className="text-link text-link-light" href="/programs">Discover the work <span aria-hidden="true">↓</span></Link>
          </div>
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
          <div className="art-caption"><span>LEARNING</span><span>OPPORTUNITY · COMMUNITY</span></div>
          <span className="hero-stamp" aria-hidden="true">PEOPLE<br />· PLACE<br />· POSSIBILITY</span>
        </div>
        <a className="scroll-cue" href="#mission"><span aria-hidden="true">↓</span> Scroll to explore</a>
      </section>

      <section className="mission section-pad" id="mission" aria-labelledby="mission-title">
        <div className="section-kicker">
          <span>01 / OUR PURPOSE</span>
          <span>EDUCATION · DIGITAL OPPORTUNITY</span>
        </div>
        <div className="mission-editorial">
          <p className="eyebrow">The starting point</p>
          <div className="mission-editorial-body">
            <h2 id="mission-title">
              <span>The best solutions</span>
              <span>begin with</span>
              <em>listening.</em>
            </h2>
            <div className="mission-support">
              <p>
                Acting Eye works to expand access to education and digital opportunity, so every
                learner can build the skills, confidence, and connections that open real doors.
              </p>
              <Link className="arrow-link" href="/about">Meet the organization <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="impact section-pad" aria-labelledby="impact-title">
        <div className="section-kicker section-kicker-light"><span>02 / IMPACT &amp; TRANSPARENCY</span><span>FY 2025–26</span></div>
        <div className="impact-heading">
          <div><p className="eyebrow">The difference we make</p><h2 id="impact-title">Every opportunity <em>opens a door.</em></h2></div>
          <p>A transparent look at our efforts to make education more accessible through book distribution, digital learning resources, and support for students who need them.</p>
        </div>
        <p className="impact-integrity-note">Impact figures are pending verification against organizational records.</p>
        <div className="impact-list">
          {impactHighlights.map((item, index) => (
            <article className="impact-item" key={item.label}>
              <div className="impact-measure">
                <span className="impact-index">0{index + 1} <span> / 03</span></span>
                <p className="impact-value">{item.value}</p>
                <h3>{item.label}</h3>
              </div>
              <div className="impact-item-content">
                <p className="impact-detail">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="impact-closing-line">
          Every number represents an effort, every resource creates an opportunity, and every
          contribution brings us closer to a future where access to education is not a barrier.
        </p>
        <Link className="arrow-link arrow-link-light" href="/impact">Explore the impact framework <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="programs section-pad" id="programs" aria-labelledby="programs-title">
        <div className="section-kicker"><span>03 / THE WORK</span><span>INITIATIVES SHARED SO FAR</span></div>
        <div className="split-heading">
          <div><p className="eyebrow">Where effort becomes action</p><h2 id="programs-title">Rooted in place.<br /><em>Built for change.</em></h2></div>
          <p>From a school computer laboratory in Africa to book distribution in India, each initiative opens another path to learning.</p>
        </div>
        <div className="program-grid">
          <article className="program-feature">
            <Link className="program-art program-art-feature" href="/programs/program-two" aria-label="Explore Computers for underserved learners">
              <Image
                src="/lab1.jpg"
                alt="Students learning at desktop computers in a school laboratory."
                width={1125}
                height={1120}
                sizes="(max-width: 680px) 100vw, (max-width: 900px) 70vw, 62vw"
                className="program-art-image"
              />
              <span className="program-image-caption">SCHOOL COMPUTER LABORATORY · AFRICA</span>
            </Link>
            <div className="program-feature-copy">
              <span className="program-label"><span>01</span> DIGITAL LEARNING</span>
              <div className="program-feature-heading">
                <h3><Link href="/programs/program-two">Computers for underserved learners</Link></h3>
                <Link className="program-text-link" href="/programs/program-two">Explore initiative <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
          </article>
          <article className="program-secondary">
            <span className="program-label"><span>02</span> LEARNING RESOURCES</span>
            <Link className="program-art program-art-secondary" href="/programs/book-distribution" aria-label="Explore Books for young learners">
              <Image
                src="/books.jpg"
                alt="Students holding books during a book distribution in India."
                width={1200}
                height={900}
                sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 33vw"
                className="program-art-image"
              />
              <span className="program-image-caption">BOOK DISTRIBUTION · INDIA</span>
            </Link>
            <div className="program-secondary-copy">
              <h3><Link href="/programs/book-distribution">Books for young learners</Link></h3>
              <Link className="program-text-link" href="/programs/book-distribution">Explore initiative <span aria-hidden="true">↗</span></Link>
            </div>
          </article>
        </div>
        <Link className="arrow-link" href="/programs">View all programs <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="story section-pad" aria-labelledby="story-title">
        <div className="section-kicker"><span>04 / FIELD NOTES</span><span>ILLUSTRATIVE STORIES</span></div>
        <div className="story-grid">
          <div className="story-art" aria-hidden="true"><Image src="/story.jpg" alt="" fill sizes="(max-width: 680px) 100vw, 50vw" className="story-art-image" /></div>
          <div className="story-copy"><p className="eyebrow">Narrative drafts</p><h2 id="story-title">Real change begins when opportunity reaches the people who need it most.</h2><p>Illustrative narratives explore how access to books and learning resources may affect families, schools, and communities.</p><Link className="arrow-link" href="/stories">Read the narratives <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="approach section-pad" aria-labelledby="approach-title">
        <div className="section-kicker"><span>05 / OUR APPROACH</span><span>LEARN · ACT · REFLECT</span></div>
        <div className="approach-heading"><p className="eyebrow">A practice, not a promise</p><h2 id="approach-title">Good work is <em>shared work.</em></h2></div>
        <div className="approach-steps">
          {[
            ["01", "Listen", "Begin with the priorities and experience of learners."],
            ["02", "Design together", "Shape learning opportunities with local educators."],
            ["03", "Learn openly", "Reflect on what is working and what can improve."],
            ["04", "Build for continuity", "Strengthen access to skills and learning resources."],
          ].map(([number, title, text]) => <article className="approach-step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="places section-pad" aria-labelledby="places-title">
        <div className="section-kicker"><span>06 / PLACE MATTERS</span><span>GEOGRAPHIC REFERENCE</span></div>
        <div className="places-inner">
          <div>
            <p className="eyebrow">A sense of place</p>
            <h2 id="places-title">Learning grows <em>locally.</em></h2>
            <p>
              We are planning to support schools around Nakawa, Kireka, and Kyambogo in Kampala,
              Uganda—where financial constraints can limit access to learning resources and digital
              tools. Our aim is to work with school communities to understand their priorities and
              explore practical ways to help.
            </p>
          </div>
          <figure className="place-map">
            <Image
              src="/map.png"
              alt="Street map showing Nakawa, Kireka, Kyambogo, and nearby areas."
              width={1350}
              height={813}
              sizes="(max-width: 680px) 100vw, (max-width: 900px) 90vw, 55vw"
            />
          </figure>
        </div>
        <Link className="arrow-link" href="/about">Learn about the organization <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="get-involved section-pad" aria-labelledby="involved-title">
        <div className="section-kicker section-kicker-light"><span>07 / TAKE PART</span><span>NO PRESSURE, JUST POSSIBILITY</span></div>
        <div className="involved-heading"><p className="eyebrow">There are many ways in</p><h2 id="involved-title">Make room for <em>more voices.</em></h2></div>
        <div className="pathway-list">{pathways.map((pathway) => <article className="pathway" key={pathway.number}><span className="pathway-number">{pathway.number}</span><h3>{pathway.title}</h3><p>{pathway.text}</p><Link href={pathway.href} aria-label={`${pathway.action}: ${pathway.title}`}>{pathway.action} <span aria-hidden="true">↗</span></Link></article>)}</div>
      </section>

      <section className="trust section-pad" aria-labelledby="trust-title">
        <div className="section-kicker"><span>08 / OPEN BY DEFAULT</span><span>TRANSPARENCY</span></div>
        <div className="trust-grid"><div><p className="eyebrow">Trust is earned in the open</p><h2 id="trust-title">Accountability is part of the <em>work.</em></h2></div><div><p>We believe in clear communication, responsible use of resources, and learning alongside the communities at the heart of our work.</p><Link className="arrow-link" href="/transparency">Our principles <span aria-hidden="true">↗</span></Link></div></div>
      </section>

      <section className="closing section-pad" aria-labelledby="closing-title">
        <Image
          className="closing-logo"
          src="/logo.png"
          alt="Acting Eye"
          width={72}
          height={72}
        />
        <p className="eyebrow">The next chapter is a shared one</p><h2 id="closing-title">Start with a <em>conversation.</em></h2><div className="closing-actions"><Link className="button button-dark" href="/get-involved">Find your way in <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link></div>
      </section>
    </main>
  );
}
