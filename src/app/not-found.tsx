import Link from "next/link";

export default function NotFound() {
  return (
    <div className="narrow">
      <h1>Page not found</h1>
      <p>
        That URL is not on this site.{" "}
        <Link href="/">Back to the home page</Link>.
      </p>
    </div>
  );
}
