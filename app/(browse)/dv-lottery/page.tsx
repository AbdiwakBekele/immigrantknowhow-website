import type { Metadata } from "next";

import { fetchPublicDvLotteryContent } from "@/app/lib/api/dv-lottery";

export const metadata: Metadata = {
  title: "DV Lottery - Immigrants KnowHow",
  description: "Official Diversity Visa program information and entry dates.",
};

export default async function PublicDvLotteryPage() {
  const content = await fetchPublicDvLotteryContent();

  const statusClass = content.is_closed
    ? "border-rose-200 bg-rose-50 text-rose-900"
    : content.is_closing_soon
      ? "border-amber-200 bg-amber-50 text-amber-900"
      : "border-[#e5e7eb] bg-white text-[#374151]";

  return (
    <section className="py-10">
      <div className="ikh-shell max-w-4xl">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b7280]">
            Immigration resource
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-black">
            {content.title || "DV Lottery"}
          </h1>
          <p className="mt-3 text-lg text-[#333333]">
            {content.short_description ||
              "Official Diversity Visa information from the U.S. Department of State."}
          </p>
        </header>

        <section className="rounded-2xl border border-[#e8ecf4] bg-white p-6 shadow-[0_8px_26px_rgba(15,23,42,0.06)]">
          <h2 className="text-lg font-semibold text-[#111827]">Official website</h2>
          <p className="mt-2 text-sm leading-6 text-[#374151]">
            {content.description ||
              "Always submit applications through the official U.S. Department of State portal."}
          </p>
          <p className="mt-3 text-sm font-medium text-[#111827]">
            DV entry period:{" "}
            <span className="font-semibold">{content.open_from || "Not set"}</span>
            {" – "}
            <span className="font-semibold">{content.open_to || "Not set"}</span>
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={content.official_url || "https://dvprogram.state.gov/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-[#2563eb] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]"
            >
              {content.cta_label || "Open Official DV Lottery Website"}
            </a>
            <span className="text-xs text-[#6b7280]">
              {content.official_url || "https://dvprogram.state.gov/"}
            </span>
          </div>
        </section>

        {content.warning_text ? (
          <p className="mt-4 text-sm text-[#6b7280]">{content.warning_text}</p>
        ) : null}

        <section className={`mt-4 rounded-xl border p-4 text-sm ${statusClass}`}>
          {content.status_message ||
            (content.is_open
              ? "The DV Lottery is currently open."
              : "Check the official site for the latest registration status.")}
        </section>
      </div>
    </section>
  );
}
