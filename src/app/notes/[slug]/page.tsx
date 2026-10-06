import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNote, notes } from "@/lib/notes";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return { title: "Notes" };
  return { title: note.title, description: note.summary };
}

export default async function NotePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  return (
    <div className="wrap">
      <article className="band">
        <p className="band-label">Notes</p>
        <div className="band-body reading prose">
          <Link className="back" href="/notes/">
            ← Notes
          </Link>
          <h1>{note.title}</h1>
          <p className="tag" style={{ marginBottom: "1.5rem" }}>
            {note.date}
          </p>
          {note.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
