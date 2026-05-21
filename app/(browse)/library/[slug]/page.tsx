import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SitePage from "@/app/components/Layout/SitePage";
import { fetchPublicLibraryItem } from "@/app/lib/api/library";

import LibraryBookDetailView from "../LibraryBookDetailView";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = await fetchPublicLibraryItem(slug);

  if (!item) {
    return { title: "Book not found - Library" };
  }

  const description = item.description?.slice(0, 160) ?? undefined;

  return {
    title: `${item.title} | Library`,
    description,
  };
}

export default async function LibraryBookPage({ params }: Props) {
  const { slug } = await params;
  const item = await fetchPublicLibraryItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <SitePage narrow className="ikh-site-page--library-detail">
      <LibraryBookDetailView item={item} />
    </SitePage>
  );
}
