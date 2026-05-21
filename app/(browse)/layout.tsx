/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function BrowseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <header className="border-b border-[#e5e7eb] bg-white">
        <div className="ikh-shell flex h-16 items-center justify-between">
          <Link href="/" className="ikh-logo-link" aria-label="Immigrant Knowhow home">
            <img
              src="/images/home/2024/05/ImmigrantsKnowHow-Logo.svg"
              alt="ImmigrantsKnowHow Logo"
              className="ikh-logo"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-[#2563eb] transition hover:text-[#1d4ed8]"
          >
            Back to home
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
