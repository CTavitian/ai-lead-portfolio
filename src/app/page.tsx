import Link from "next/link";
import { WorkRow } from "@/components/WorkRow";
import { notes } from "@/lib/notes";
import { featuredSlugs, site, work } from "@/lib/site";

const featured = featuredSlugs
  .map((slug) => work.find((w) => w.slug === slug))
  .filter((w): w is NonNullable<typeof w> => Boolean(w));
const more = work.filter((w) => !(featuredSlugs as readonly string[]).includes(w.slug));

export default function HomePage() {
  return (
    <div className="wrap">
      <section className="band hero">
        <p className="band-label" aria-hidden="true">
          About
        </p>
        <div className="band-body">
          <h1>{site.name}</h1>
          <p className="role">{site.role}</p>
          <p className="lede">
            I have spent 14 years running service and project delivery in
            construction and fire protection, from estimating and tenders to
            profit and loss for a division. Lately I have been working out
            where AI actually helps in that kind of business: which jobs are
            worth automating, which need a person to sign off, and how to
            test an agent before anyone relies on it. The projects below are
            small tools I built to learn that properly. I am looking for a
            role where I can do this at work.
          </p>
        </div>
      </section>

      <section className="band" id="work">
        <h2 className="band-label">Projects</h2>
        <div className="band-body">
          <ul className="work-list">
            {featured.map((item) => (
              <li key={item.slug}>
                <WorkRow item={item} />
              </li>
            ))}
          </ul>
          <h3 className="work-subhead">Smaller projects and write-ups</h3>
          <ul className="work-list">
            {more.map((item) => (
              <li key={item.slug}>
                <WorkRow item={item} />
              </li>
            ))}
          </ul>
          <p className="work-foot-note">
            Tooling and write-ups live in this portfolio repo and related
            public repos under{" "}
            <a href={site.github} rel="noopener noreferrer">
              CTavitian
            </a>
            .
          </p>
        </div>
      </section>

      <section className="band" id="notes">
        <h2 className="band-label">Notes</h2>
        <div className="band-body">
          <ul className="work-list">
            {notes.map((n) => (
              <li key={n.slug}>
                <Link className="work-row" href={`/notes/${n.slug}/`}>
                  <h3 className="work-title">{n.title}</h3>
                  <div className="work-meta">
                    <span className="tag">{n.date}</span>
                    <span className="work-arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                  <p className="work-blurb">{n.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band" id="credentials">
        <h2 className="band-label">Credentials</h2>
        <div className="band-body">
          <dl className="cred-grid">
            <div className="cred-row">
              <dt>Harvard</dt>
              <dd>
                <div className="cred-item">
                  <span>
                    CS50&apos;s Introduction to Artificial Intelligence with
                    Python,{" "}
                    <a
                      href="https://cs50.harvard.edu/certificates/80ee8678-3b7c-4cd9-bb8f-5bcd2162564c"
                      rel="noopener noreferrer"
                    >
                      verify certificate
                    </a>
                  </span>
                </div>
              </dd>
            </div>
            <div className="cred-row">
              <dt>Hugging Face</dt>
              <dd>
                <ul className="cred-items">
                  <li className="cred-item">
                    <span>AI Agents Course, with certificate of excellence</span>
                  </li>
                  <li className="cred-item">
                    <span>Agents Fundamentals</span>
                  </li>
                  <li className="cred-item">
                    <span>Smol Course</span>
                  </li>
                  <li className="cred-item">
                    <span>Context course</span>
                  </li>
                </ul>
              </dd>
            </div>
            <div className="cred-row">
              <dt>Google Skills</dt>
              <dd>
                <ul className="cred-items">
                  <li className="cred-item">
                    <span>Build Agents with Agent Development Kit</span>
                  </li>
                  <li className="cred-item">
                    <span>Responsible AI: Applying AI Principles</span>
                  </li>
                  <li className="cred-item">
                    <span>Deploy and Scale AI Models with Cloud Run</span>
                  </li>
                </ul>
              </dd>
            </div>
            <div className="cred-row">
              <dt>IBM SkillsBuild</dt>
              <dd>
                <ul className="cred-items">
                  <li className="cred-item">
                    <span>Getting Started with Generative AI</span>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="band" id="contact">
        <h2 className="band-label">Contact</h2>
        <div className="band-body">
          <ul className="contact-rows">
            <li>
              <span className="contact-label">GitHub</span>
              <a href={site.github} rel="noopener noreferrer">
                github.com/{site.githubUser}
              </a>
            </li>
            {site.linkedin ? (
              <li>
                <span className="contact-label">LinkedIn</span>
                <a href={site.linkedin} rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            ) : null}
            {site.email ? (
              <li>
                <span className="contact-label">Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            ) : null}
          </ul>
        </div>
      </section>
    </div>
  );
}
