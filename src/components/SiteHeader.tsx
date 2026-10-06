import Link from "next/link";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <Link href="/" className="mark">
          {site.name}
        </Link>
        <nav className="nav" aria-label="Primary">
          <Link href="/#work">Work</Link>
          <Link href="/notes/">Notes</Link>
          <Link href="/#credentials">Credentials</Link>
          <Link href="/#contact">Contact</Link>
          <a href={site.github} rel="noopener noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
