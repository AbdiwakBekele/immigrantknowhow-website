"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function LibrarySearchField({ initialSearch }: { initialSearch: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  useEffect(() => {
    const normalizedSearch = searchTerm.trim();
    if (normalizedSearch === initialSearch.trim()) {
      return;
    }

    const timeout = window.setTimeout(() => {
      const params = new URLSearchParams();
      if (normalizedSearch) {
        params.set("search", normalizedSearch);
      }

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    }, 350);

    return () => window.clearTimeout(timeout);
  }, [initialSearch, pathname, router, searchTerm]);

  return (
    <div className="w-full md:max-w-md">
      <label htmlFor="library-search" className="sr-only">
        Search library
      </label>
      <input
        id="library-search"
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search by title, author, category, or topic"
        className="min-h-11 w-full rounded-full border border-[#d1d5db] bg-white px-4 py-2 text-sm text-[#111827] shadow-[0_8px_26px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
      />
    </div>
  );
}
