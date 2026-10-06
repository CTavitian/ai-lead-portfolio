import Link from "next/link";
import { site, work } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="narrow">
      <section className="hero">
        <h1>{site.name}</h1>
        <p className="role">
          {site.role} · {site.location}
        </p>
        <p>
          I spent years running field-service and fire-protection operations.
          Crews, compliance, margins, and schedules. Now I take that judgment into
          AI implementation: picking work that pays off, building agents that stay
          inside clear bounds, and measuring whether the thing actually helps.
        </p>
        <p className="note">{site.workRights}.</p>
      </section>

      <section className="section" id="work">
        <h2>Selected work</h2>
        <ul className="work-list">
          {work.map((item) => (
            <li key={item.slug}>
              <Link className="title" href={`/work/${item.slug}/`}>
                {item.title}
              </Link>
              <p className="blurb">{item.blurb}</p>
            </li>
          ))}
        </ul>
        <p className="note" style={{ marginTop: "1.25rem" }}>
          Venode Labs is where I build and test agent and ops-automation work.
          Site:{" "}
          <a href={site.venode} rel="noopener noreferrer">
            venode.ai
          </a>
          .
        </p>
      </section>

      <section className="section" id="credentials">
        <h2>Credentials</h2>
        <ul className="cred-list">
          <li>
            Harvard CS50&apos;s Introduction to AI with Python{" "}
            <span className="meta">completed</span>
          </li>
          <li>
            Microsoft Applied Skills
            <ul className="cred-sub">
              <li>Enhance agents with autonomous capabilities</li>
              <li>Create and manage automated processes with Power Automate</li>
              <li>Create and manage canvas apps with Power Apps</li>
              <li>Secure AI solutions in the cloud</li>
            </ul>
          </li>
          <li>
            Hugging Face
            <ul className="cred-sub">
              <li>
                AI Agents Course <span className="meta">certificate</span>
              </li>
              <li>MCP Course Unit 1</li>
              <li>Context course</li>
              <li>
                LLM Course <span className="meta">in progress</span>
              </li>
            </ul>
          </li>
          <li>Snowflake Hands-On Essentials Badge 1</li>
          {/* TODO Overlord: confirm exact IBM SkillsBuild badge name */}
          <li>IBM SkillsBuild</li>
          <li>Google Cloud Skills Boost: generative AI learning</li>
          <li>
            AWS Skill Builder Agentic AI Demonstrated{" "}
            <span className="meta">in progress</span>
          </li>
        </ul>
        {/* TODO Overlord: Copilot Studio Applied Skills retake pending - do not list as earned */}
      </section>

      <section className="section" id="contact">
        <h2>Contact</h2>
        <ul className="contact-list">
          <li>
            GitHub:{" "}
            <a href={site.github} rel="noopener noreferrer">
              github.com/{site.githubUser}
            </a>
          </li>
          {/* TODO Overlord: set contact.linkedin in src/lib/site.config.ts to render LinkedIn */}
          {site.linkedin ? (
            <li>
              LinkedIn:{" "}
              <a href={site.linkedin} rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          ) : null}
          {/* TODO Overlord: set contact.email in src/lib/site.config.ts to render email */}
          {site.email ? (
            <li>
              Email: <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          ) : null}
        </ul>
      </section>
    </div>
  );
}
