import type { Metadata } from "next";
import Link from "next/link";

import { fetchPublicLibraryItems } from "@/app/lib/api/library";
import { apiConfig } from "@/app/lib/api/config";

export const metadata: Metadata = {
  title: "Library - Immigrants KnowHow",
  description:
    "Browse publicly available library titles. Sign in to unlock reading and purchase access.",
};

export default async function PublicLibraryPage() {
  const items = await fetchPublicLibraryItems();

  return (
    <section className="bg-white py-12">
      <div className="ikh-shell">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-black">Library</h1>
          <p className="mt-3 max-w-3xl text-lg text-[#333333]">
            Browse our digital library. To read full content or purchase access,
            please sign in or create an account.
          </p>
        </header>

        {items.length === 0 ? (
          <div className="rounded-xl border border-[#e5e7eb] bg-[#f8fafc] p-6 text-[#333333]">
            No library items are available right now.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <article
                key={item.slug}
                className="group flex h-full flex-col rounded-2xl border border-[#e8ecf4] bg-white p-4 shadow-[0_8px_26px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.1)]"
              >
                <div className="mb-3 h-32 w-full overflow-hidden rounded-xl">
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

                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#2563eb]">
                  {item.type}
                </p>
                <h2 className="line-clamp-2 text-lg font-bold text-[#111827]">
                  {item.title}
                </h2>
                <p className="mt-1 text-xs text-[#6b7280]">
                  {item.author ? `By ${item.author}` : "Author not listed"}
                </p>
                {item.category ? (
                  <p className="mt-0.5 text-xs text-[#6b7280]">
                    Category: {item.category.name}
                  </p>
                ) : null}
                {item.description ? (
                  <p className="mt-2 line-clamp-3 text-xs leading-5 text-[#374151]">
                    {item.description}
                  </p>
                ) : null}

                <div className="mt-auto flex items-center justify-between pt-3">
                  <div className="text-xs font-semibold text-[#111827]">
                    {item.is_premium && item.price
                      ? `${item.price.toFixed(2)} ${item.currency ?? "USD"}`
                      : "Free / login required"}
                  </div>

                  <Link
                    href={apiConfig.auth.signInUrl}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#2563eb] text-white transition hover:bg-[#1d4ed8]"
                    aria-label={`Add ${item.title} to cart`}
                    title="Add to cart"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="20" r="1" />
                      <circle cx="17" cy="20" r="1" />
                      <path d="M3 4h2l2.4 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H7.1" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
