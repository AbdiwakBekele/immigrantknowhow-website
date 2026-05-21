import Link from "next/link";

import type { PublicLibraryItem } from "@/app/lib/api/library";
import { HUB_REGISTER_URL } from "@/app/lib/hub-links";
import { LIBRARY_PAGE_PATH } from "@/app/lib/site-links";

function formatPrice(item: PublicLibraryItem): string {
  if (item.is_premium && item.price) {
    return `${item.price.toFixed(2)} ${item.currency ?? "USD"}`;
  }

  return "Free";
}

function formatDuration(seconds: number | null | undefined): string | null {
  if (!seconds || seconds <= 0) {
    return null;
  }

  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);

  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }

  return `${mins} min`;
}

function formatReadingTime(minutes: number | null | undefined): string | null {
  const value = Number(minutes);
  if (!Number.isFinite(value) || value <= 0) {
    return null;
  }

  if (value < 60) {
    return `${Math.round(value)} min`;
  }

  const hours = value / 60;

  return `${Number.isInteger(hours) ? hours : hours.toFixed(1)} hr`;
}

function formatPublished(item: PublicLibraryItem): string | null {
  if (item.published_at) {
    const date = new Date(item.published_at);
    if (!Number.isNaN(date.getTime())) {
      return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
  }

  if (item.publication_year) {
    return String(item.publication_year);
  }

  return null;
}

type MetadataFact = { label: string; value: string };

function collectMetadataFacts(item: PublicLibraryItem): MetadataFact[] {
  const facts: MetadataFact[] = [];

  if (item.author) {
    facts.push({ label: "Author", value: item.author });
  }
  if (item.narrator) {
    facts.push({ label: "Narrator", value: item.narrator });
  }
  if (item.publisher) {
    facts.push({ label: "Publisher", value: item.publisher });
  }
  const published = formatPublished(item);
  if (published) {
    facts.push({ label: "Published", value: published });
  }
  if (item.page_count) {
    facts.push({ label: "Pages", value: String(item.page_count) });
  }
  if (item.isbn) {
    facts.push({ label: "ISBN", value: item.isbn });
  }
  if (item.language) {
    facts.push({ label: "Language", value: item.language });
  }

  const readingTime = formatReadingTime(item.estimated_reading_minutes);
  if (readingTime) {
    facts.push({ label: "Estimated reading time", value: readingTime });
  }

  const duration = formatDuration(item.duration_seconds);
  if (duration) {
    facts.push({ label: "Duration", value: duration });
  }

  if (item.difficulty_level) {
    facts.push({ label: "Difficulty", value: item.difficulty_level });
  }
  if (item.recommended_age_group) {
    facts.push({ label: "Age group", value: item.recommended_age_group });
  }

  return facts;
}

type Props = {
  item: PublicLibraryItem;
};

export default function LibraryBookDetailView({ item }: Props) {
  const metadataFacts = collectMetadataFacts(item);
  const isPaid = item.is_premium && item.price && item.price > 0;

  return (
    <section className="py-2 md:py-4">
      <nav className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Link
          href={LIBRARY_PAGE_PATH}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
        >
          <span aria-hidden>←</span>
          <span>Back to Library</span>
        </Link>
        <Link
          href="/"
          className="text-sm font-semibold text-slate-600 transition hover:text-blue-700"
        >
          Home
        </Link>
      </nav>

      <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-gradient-to-r from-blue-50 via-white to-indigo-50 p-4 md:p-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="mx-auto h-56 w-40 shrink-0 overflow-hidden rounded-2xl shadow-md md:mx-0 md:h-64 md:w-44">
              {item.cover_image_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.cover_image_url}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#60a5fa]">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/90">
                    No Cover
                  </span>
                </div>
              )}
            </div>

            <div className="min-w-0 flex-1 text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-blue-700">
                {item.type}
              </p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                {item.title}
              </h1>
              {item.author ? (
                <p className="mt-2 text-sm text-slate-600">By {item.author}</p>
              ) : null}
              {item.category ? (
                <p className="mt-1 text-sm text-slate-500">Category: {item.category.name}</p>
              ) : null}
              <p className="mt-3 text-lg font-bold text-slate-900">{formatPrice(item)}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-4 md:p-6">
          {item.description ? (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                About this title
              </h2>
              <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-700 md:text-base">
                {item.description}
              </p>
            </div>
          ) : null}

          {metadataFacts.length > 0 ? (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                Details
              </h2>
              <dl className="mt-3 grid gap-3 sm:grid-cols-2">
                {metadataFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {fact.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-slate-900">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}

          <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 md:p-5">
            <p className="text-sm text-slate-700">
              {isPaid
                ? "Create a free hub account to purchase this title or add it to your cart."
                : "Create a free hub account to add this title to your library and start reading or listening."}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {isPaid ? (
                <>
                  <a
                    href={HUB_REGISTER_URL}
                    className="inline-flex rounded-full bg-[#1d4ed8] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1e40af]"
                  >
                    Purchase
                  </a>
                  <a
                    href={HUB_REGISTER_URL}
                    className="inline-flex rounded-full border border-[#1d4ed8] bg-white px-5 py-2.5 text-sm font-semibold text-[#1d4ed8] transition hover:bg-blue-50"
                  >
                    Add to cart
                  </a>
                </>
              ) : (
                <a
                  href={HUB_REGISTER_URL}
                  className="inline-flex rounded-full bg-[#1d4ed8] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1e40af]"
                >
                  Get access on the hub
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
