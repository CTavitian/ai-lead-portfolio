import Link from "next/link";
import type { WorkItem } from "@/lib/site";

export function WorkRow({ item }: { item: WorkItem }) {
  const meta = (
    <>
      <h3 className="work-title">{item.title}</h3>
      <div className="work-meta">
        <span className="tag">{item.tags.join(" · ")}</span>
        <span className="work-arrow" aria-hidden="true">
          →
        </span>
      </div>
      <p className="work-blurb">{item.blurb}</p>
    </>
  );

  if (item.caseStudy) {
    return (
      <Link className="work-row" href={`/work/${item.slug}/`}>
        {meta}
      </Link>
    );
  }

  if (item.repo) {
    return (
      <a className="work-row" href={item.repo} rel="noopener noreferrer">
        {meta}
      </a>
    );
  }

  return (
    <Link className="work-row" href={`/work/${item.slug}/`}>
      {meta}
    </Link>
  );
}
