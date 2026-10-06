import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap">
      <section className="band">
        <p className="band-label">404</p>
        <div className="band-body">
          <h1>Page not found</h1>
          <p>
            That URL is not on this site.{" "}
            <Link href="/">Back to the home page</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
