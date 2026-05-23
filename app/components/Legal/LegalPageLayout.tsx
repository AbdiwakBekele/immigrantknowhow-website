import Link from "next/link";
import type { ReactNode } from "react";
import type { LegalHeading } from "@/app/lib/legal/parse-legal-content";
import { CONTACT_PAGE_PATH } from "@/app/lib/site-links";
import { LegalTableOfContents } from "@/app/components/Legal/LegalDocument";

type LegalTab = {
  href: string;
  label: string;
  active?: boolean;
};

type LegalPageLayoutProps = {
  title: string;
  description: string;
  lastUpdated: string;
  tabs: LegalTab[];
  headings: LegalHeading[];
  children: ReactNode;
};

export default function LegalPageLayout({
  title,
  description,
  lastUpdated,
  tabs,
  headings,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="ikh-site-page">
      <header className="border-b border-[#e5e7eb] bg-linear-to-b from-[#f5f8f8] to-white">
        <div className="ikh-shell max-w-4xl py-12 sm:py-14 lg:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0f62fd]">
            Legal
          </p>
          <h1 className="mt-3 text-[36px] font-extrabold leading-tight tracking-tight text-[#111] sm:text-[42px]">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-[#555] sm:text-[17px]">
            {description}
          </p>
          <p className="mt-4 inline-flex items-center rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-[13px] font-medium text-[#555]">
            Last updated {lastUpdated}
          </p>

          <nav
            aria-label="Legal documents"
            className="mt-8 flex flex-wrap gap-2"
          >
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                aria-current={tab.active ? "page" : undefined}
                className={[
                  "rounded-full px-4 py-2 text-[14px] font-semibold transition-colors",
                  tab.active
                    ? "bg-[#0f62fd] text-white shadow-[0_4px_12px_rgba(15,98,253,0.35)]"
                    : "border border-[#d1d5db] bg-white text-[#333] hover:border-[#0f62fd] hover:text-[#0f62fd]",
                ].join(" ")}
              >
                {tab.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="ikh-shell">
          <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[240px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <LegalTableOfContents headings={headings} />
            </aside>
            <div className="min-w-0 max-w-3xl">
              {children}

              <div className="mt-14 rounded-2xl border border-[#e5e7eb] bg-[#f5f8f8] p-6 sm:p-8">
                <h2 className="text-xl font-extrabold text-[#111]">Questions?</h2>
                <p className="mt-2 text-[16px] leading-relaxed text-[#555]">
                  If anything in this document is unclear, or you want to exercise
                  your privacy rights, reach out and we will help.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={CONTACT_PAGE_PATH}
                    className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#2f7cf7] to-[#2b70e8] px-6 py-2.5 text-[15px] font-bold text-white shadow-[0_5px_14px_rgba(47,124,247,0.4)] transition-shadow hover:shadow-[0_7px_18px_rgba(47,124,247,0.45)]"
                  >
                    Contact us
                  </Link>
                  <a
                    href="mailto:info@Immigrantknowhow.com"
                    className="inline-flex items-center justify-center rounded-full border border-[#b8b8b8] bg-white px-6 py-2.5 text-[15px] font-semibold text-[#111] transition-colors hover:border-[#0f62fd] hover:text-[#0f62fd]"
                  >
                    info@Immigrantknowhow.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
