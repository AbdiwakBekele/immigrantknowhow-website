import Link from "next/link";

import SitePage from "@/app/components/Layout/SitePage";
import { LIBRARY_PAGE_PATH } from "@/app/lib/site-links";

export default function NotFound() {
  return (
    <SitePage narrow>
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-2 text-sm text-slate-600">
          This page does not exist or the content is no longer available.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href={LIBRARY_PAGE_PATH}
            className="inline-flex rounded-full bg-[#1d4ed8] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1e40af]"
          >
            Back to Library
          </Link>
          <Link
            href="/"
            className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Go home
          </Link>
        </div>
      </div>
    </SitePage>
  );
}
