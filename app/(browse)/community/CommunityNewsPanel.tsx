"use client";

import type { PublicNewsItem } from "@/app/lib/api/community";

import { newsCountries } from "./community-config";

type Props = {
  country: string;
  items: PublicNewsItem[];
  loading: boolean;
  error: string;
  search: string;
  onCountryChange: (country: string) => void;
  onReload: () => void;
};

export default function CommunityNewsPanel({
  country,
  items,
  loading,
  error,
  search,
  onCountryChange,
  onReload,
}: Props) {
  const query = search.trim().toLowerCase();
  const filtered = items.filter((item) => {
    if (!query) return true;
    return (
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.source.toLowerCase().includes(query)
    );
  });

  return (
    <div className="mt-4">
      <div className="mb-3 flex flex-wrap items-center gap-1.5">
        <span className="text-sm font-semibold text-[#1f2937]">Country:</span>
        {newsCountries.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onCountryChange(option)}
            className={`rounded-full border px-2.5 py-1.5 text-sm ${
              country === option
                ? "border-[#1d4ed8] bg-[#1d4ed8] text-white"
                : "border-[#cdd9ea] bg-white text-[#1f2937]"
            }`}
          >
            {option}
          </button>
        ))}
        <button
          type="button"
          onClick={onReload}
          className="rounded-full bg-[#0f766e] px-2.5 py-1.5 text-sm font-semibold text-white"
        >
          Load Latest News
        </button>
      </div>

      {loading ? (
        <p className="text-sm text-[#475569]">Loading latest news...</p>
      ) : null}
      {error ? <p className="text-sm text-[#b91c1c]">{error}</p> : null}

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            {item.image ? (
              <div className="relative mb-2 h-36 overflow-hidden rounded-lg bg-[#e5e7eb]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt="" className="h-full w-full object-cover" />
              </div>
            ) : null}
            <p className="text-xs font-semibold uppercase text-[#334155]">
              {item.source || "Google News"}
            </p>
            <h3 className="mt-1 text-base font-bold text-[#111827]">{item.title}</h3>
            <p className="mt-1.5 text-sm text-[#4b5563]">{item.summary}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Read full story →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
