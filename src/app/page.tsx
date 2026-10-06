import Link from "next/link";
import { site, work } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="wrap">
      <section className="band hero">
        <p className="band-label" aria-hidden="true">
          About
        </p>
        <div className="band-body">
          <h1>{site.name}</h1>
          <p className="role">
            {site.role}
            <span className="sep" aria-hidden="true">
              ·
            </span>
            {site.location}
          </p>
          <p className="lede">
            I spent years running field-service and fire-protection operations.
            Crews, compliance, margins, and schedules. Now I take that judgment
            into AI implementation: picking work that pays off, building agents
            that stay inside clear bounds, and measuring whether the thing
            actually helps.
          </p>
          <p className="note">{site.workRights}.</p>
        </div>
      </section>

      <section className="band" id="work">
        <h2 className="band-label">Work</h2>
        <div className="band-body">
          <ul className="work-list">
            {work.map((item) => (
              <li key={item.slug}>
                <Link className="work-row" href={`/work/${item.slug}/`}>
                  <h3 className="work-title">{item.title}</h3>
                  <div className="work-meta">
                    <span className="tag">{item.tags.join(" · ")}</span>
                    <span className="work-arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                  <p className="work-blurb">{item.blurb}</p>
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
              <dt>AI / agents</dt>
              <dd>
                <ul className="cred-items">
                  <li className="cred-item">
                    <span>Harvard CS50&apos;s Introduction to AI with Python</span>
                  </li>
                  <li className="cred-item">
                    <span>Microsoft Applied Skills: Enhance agents with autonomous capabilities</span>
                  </li>
                  <li className="cred-item">
                    <span>
                      Microsoft Applied Skills: Create and manage automated
                      processes with Power Automate
                    </span>
                  </li>
                  <li className="cred-item">
                    <span>
                      Microsoft Applied Skills: Create and manage canvas apps
                      with Power Apps
                    </span>
                  </li>
                  <li className="cred-item">
                    <span>Microsoft Applied Skills: Secure AI solutions in the cloud</span>
                  </li>
                  <li className="cred-item">
                    <span>Hugging Face AI Agents Course</span>
                    <span className="tag tag-status">certificate</span>
                  </li>
                  <li className="cred-item">
                    <span>Hugging Face MCP Course Unit 1</span>
                  </li>
                  <li className="cred-item">
                    <span>Hugging Face Context course</span>
                  </li>
                  <li className="cred-item">
                    <span>Hugging Face LLM Course</span>
                    <span className="tag tag-status">in progress</span>
                  </li>
                </ul>
              </dd>
            </div>

            <div className="cred-row">
              <dt>Cloud &amp; data</dt>
              <dd>
                <ul className="cred-items">
                  <li className="cred-item">
                    <span>Snowflake Hands-On Essentials Badge 1</span>
                  </li>
                  <li className="cred-item">
                    <span>Google Cloud Skills Boost: generative AI learning</span>
                  </li>
                </ul>
              </dd>
            </div>

            <div className="cred-row">
              <dt>In progress</dt>
              <dd>
                <ul className="cred-items">
                  <li className="cred-item">
                    <span>AWS Skill Builder Agentic AI Demonstrated</span>
                    <span className="tag tag-status">in progress</span>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
          {/* TODO Overlord: Copilot Studio Applied Skills retake pending - do not list as earned */}
        </div>
      </section>

      <section className="band" id="contact">
        <h2 className="band-label">Contact</h2>
        <div className="band-body">
          <p className="contact-line">
            {site.email ? (
              <a href={`mailto:${site.email}`}>{site.email}</a>
            ) : null}
            {site.email ? (
              <span className="contact-sep" aria-hidden="true">
                ·
              </span>
            ) : null}
            <a href={site.github} rel="noopener noreferrer">
              GitHub
            </a>
            {site.linkedin ? (
              <>
                <span className="contact-sep" aria-hidden="true">
                  ·
                </span>
                <a href={site.linkedin} rel="noopener noreferrer">
                  LinkedIn
                </a>
              </>
            ) : null}
          </p>
        </div>
      </section>
    </div>
  );
}
