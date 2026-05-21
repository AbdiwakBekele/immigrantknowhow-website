import type { ReactNode } from "react";

type SitePageProps = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
  wide?: boolean;
  flush?: boolean;
};

export default function SitePage({
  children,
  className = "",
  narrow = false,
  wide = false,
  flush = false,
}: SitePageProps) {
  const innerClass = [
    "ikh-site-page__inner",
    narrow ? "ikh-site-page__inner--narrow" : "",
    wide ? "ikh-site-page__inner--wide" : "",
    flush ? "ikh-site-page__inner--flush" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <main className={`ikh-site-page ${className}`.trim()}>
      <div className={`ikh-shell ${innerClass}`}>{children}</div>
    </main>
  );
}
