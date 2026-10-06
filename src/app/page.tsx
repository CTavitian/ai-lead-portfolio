import Link from "next/link";
import { WorkRow } from "@/components/WorkRow";
import { notes } from "@/lib/notes";
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
                <WorkRow item={item} />
              </li>
            ))}
          </ul>
          <p className="work-foot-note">
            The tooling and write-ups live in this portfolio repo and related
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
                  <span>CS50&apos;s Introduction to AI with Python</span>
                  <span className="tag tag-status">completed</span>
                </div>
              </dd>
            </div>
            <div className="cred-row">
              <dt>Microsoft</dt>
              <dd>
                <ul className="cred-items">
                  <li className="cred-item">
                    <span>
                      Applied Skills: Enhance agents with autonomous capabilities
                    </span>
                  </li>
                  <li className="cred-item">
                    <span>
                      Applied Skills: Create and manage automated processes with
                      Power Automate
                    </span>
                  </li>
                  <li className="cred-item">
                    <span>
                      Applied Skills: Create and manage canvas apps with Power
                      Apps
                    </span>
                  </li>
                  <li className="cred-item">
                    <span>Applied Skills: Secure AI solutions in the cloud</span>
                  </li>
                </ul>
              </dd>
            </div>
            <div className="cred-row">
              <dt>Hugging Face</dt>
              <dd>
                <ul className="cred-items">
                  <li className="cred-item">
                    <span>AI Agents Course</span>
                    <span className="tag tag-status">certificate</span>
                  </li>
                  <li className="cred-item">
                    <span>MCP Course Unit 1</span>
                  </li>
                  <li className="cred-item">
                    <span>Context course</span>
                  </li>
                  <li className="cred-item">
                    <span>LLM Course</span>
                    <span className="tag tag-status">in progress</span>
                  </li>
                </ul>
              </dd>
            </div>
            <div className="cred-row">
              <dt>Snowflake</dt>
              <dd>
                <div className="cred-item">
                  <span>Hands-On Essentials Badge 1</span>
                </div>
              </dd>
            </div>
            {/* TODO Overlord: confirm exact IBM SkillsBuild badge name */}
            <div className="cred-row">
              <dt>IBM</dt>
              <dd>
                <div className="cred-item">
                  <span>SkillsBuild</span>
                </div>
              </dd>
            </div>
            <div className="cred-row">
              <dt>Google Cloud</dt>
              <dd>
                <div className="cred-item">
                  <span>Skills Boost: generative AI learning</span>
                </div>
              </dd>
            </div>
            <div className="cred-row">
              <dt>AWS</dt>
              <dd>
                <div className="cred-item">
                  <span>Skill Builder Agentic AI Demonstrated</span>
                  <span className="tag tag-status">in progress</span>
                </div>
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
