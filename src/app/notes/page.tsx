import Link from "next/link";
import { notes } from "@/lib/notes";

export const metadata = {
  title: "Notes",
  description: "Short write-ups on building and gating AI work in operations.",
};

export default function NotesIndexPage() {
  return (
    <div className="wrap">
      <section className="band">
        <h1 className="band-label">Notes</h1>
        <div className="band-body">
          <p className="lede" style={{ fontSize: "1.125rem" }}>
            How I build and gate AI work in operations.
          </p>
          <ul className="work-list">
            {notes.map((n) => (
              <li key={n.slug}>
                <Link className="work-row" href={`/notes/${n.slug}/`}>
                  <h2 className="work-title">{n.title}</h2>
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
    </div>
  );
}
