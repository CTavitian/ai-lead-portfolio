import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p>
          {site.name} · {site.location}
        </p>
      </div>
    </footer>
  );
}
