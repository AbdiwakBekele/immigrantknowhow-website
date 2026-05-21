import Link from "next/link";

import type { PublicLibraryItem } from "@/app/lib/api/library";
import { libraryItemPagePath } from "@/app/lib/site-links";

function formatPrice(item: PublicLibraryItem): string {
  if (item.is_premium && item.price) {
    return `${item.price.toFixed(2)} ${item.currency ?? "USD"}`;
  }

  return "Free";
}

export default function LibraryBookGrid({ items }: { items: PublicLibraryItem[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 text-[#333333]">
        No library items are available right now.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={libraryItemPagePath(item.slug)}
          className="group flex h-full flex-col rounded-2xl border border-[#e8ecf4] bg-white p-4 shadow-[0_8px_26px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:border-[#2563eb] hover:shadow-[0_14px_30px_rgba(15,23,42,0.1)]"
        >
          <div className="mb-3 h-40 w-full overflow-hidden rounded-xl">
            {item.cover_image_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.cover_image_url}
                alt={item.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
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
          <h2 className="line-clamp-2 text-lg font-bold text-[#111827] group-hover:text-[#2563eb]">
            {item.title}
          </h2>
          <p className="mt-1 text-xs text-[#6b7280]">
            {item.author ? `By ${item.author}` : "Author not listed"}
          </p>
          {item.category ? (
            <p className="mt-0.5 text-xs text-[#6b7280]">Category: {item.category.name}</p>
          ) : null}
          {item.description ? (
            <p className="mt-2 line-clamp-3 text-xs leading-5 text-[#374151]">
              {item.description}
            </p>
          ) : null}
          <p className="mt-auto pt-3 text-xs font-semibold text-[#111827]">{formatPrice(item)}</p>
        </Link>
      ))}
    </div>
  );
}
