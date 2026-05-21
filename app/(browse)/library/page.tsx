import type { Metadata } from "next";

import { fetchPublicLibraryItems } from "@/app/lib/api/library";

import LibraryBookGrid from "./LibraryBookGrid";

export const metadata: Metadata = {
  title: "Library - Immigrants KnowHow",
  description: "Browse our digital library of ebooks and audiobooks.",
};

export default async function PublicLibraryPage() {
  const items = await fetchPublicLibraryItems();

  return (
    <section className="py-10">
      <div className="ikh-shell">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-black">Library</h1>
          <p className="mt-3 max-w-3xl text-lg text-[#333333]">
            Browse available titles. Sign in on the hub when you are ready to read or purchase.
          </p>
        </header>

        <LibraryBookGrid items={items} />
      </div>
    </section>
  );
}
