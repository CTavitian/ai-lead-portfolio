import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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

  return (
    <article className="narrow prose">
      <Link className="back" href="/#work">
        ← Work
      </Link>
      <h1>{item.title}</h1>
      <p className="note">{item.blurb}</p>

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
            src={`/diagrams/${item.diagram}`}
            alt={`Architecture diagram for ${item.title}`}
            width={720}
            height={320}
          />
        </div>
      ) : null}

      <h2>What I shipped</h2>
      <ul>
        {item.shipped.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <h2>What I measured</h2>
      <ul>
        {item.measured.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <h2>What I decided</h2>
      <ul>
        {item.decided.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <h2>What I would do differently</h2>
      <ul>
        {item.differently.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </article>
  );
}
