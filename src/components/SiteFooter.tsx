import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>
          <span>{year}</span>
          <span className="sep" aria-hidden="true">
            ·
          </span>
          <a href={site.repo} rel="noopener noreferrer">
            Source
          </a>
        </p>
      </div>
    </footer>
  );
}
