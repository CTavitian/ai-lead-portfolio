import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, work } from "@/lib/site";
import { workDetails } from "@/lib/work-content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return Object.keys(workDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = workDetails[slug];
  if (!item) return { title: "Work" };
  return { title: item.title, description: item.blurb };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = workDetails[slug];
  if (!item) notFound();

  const listing = work.find((w) => w.slug === slug);

  return (
    <div className="wrap">
      <article className="band">
        <p className="band-label">Projects</p>
        <div className="band-body reading prose">
          <Link className="back" href="/#work">
            ← Work
          </Link>
          <h1>{item.title}</h1>
          {listing ? (
            <div className="work-hero-meta">
              <span className="tag">{listing.tags.join(" · ")}</span>
            </div>
          ) : null}
          <p className="lede" style={{ fontSize: "1.125rem" }}>
            {item.blurb}
          </p>
          {item.repo ? (
            <p className="note">
              Source:{" "}
              <a href={item.repo} rel="noopener noreferrer">
                {item.repo.replace("https://", "")}
              </a>
            </p>
          ) : slug === "agent-eval-harness" ? (
            <p className="note">
              Source:{" "}
              <a href={site.harnessRepo} rel="noopener noreferrer">
                github.com/CTavitian/agent-eval-harness
              </a>
            </p>
          ) : null}

          <h2>Problem</h2>
          {item.problem.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <h2>Approach</h2>
          {item.approach.map((p) => (
            <p key={p}>{p}</p>
          ))}

          {item.diagram ? (
            <div className="diagram">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/diagrams/${item.diagram}`}
                alt={`Architecture diagram for ${item.title}`}
                width={720}
                height={320}
              />
            </div>
          ) : null}

          <h2>What I built</h2>
          <ul>
            {item.shipped.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          <h2>How I checked it</h2>
          <ul>
            {item.measured.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          <h2>Choices I made</h2>
          <ul>
            {item.decided.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          <h2>What I would change</h2>
          <ul>
            {item.differently.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
