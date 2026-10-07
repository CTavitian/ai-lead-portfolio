import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>{site.name}</p>
        <p>
          <a href={site.repo} rel="noopener noreferrer">
            Source
          </a>
        </p>
      </div>
    </footer>
  );
}
