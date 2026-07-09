"use client";

import { useEffect, useState } from "react";

import { apiEndpoints } from "@/app/lib/api/config";

type Props = {
  slug: string;
  initialSummary: string | null | undefined;
};

export default function LibraryAiSummarySection({ slug, initialSummary }: Props) {
  const [summary, setSummary] = useState(initialSummary?.trim() || "");

  useEffect(() => {
    setSummary(initialSummary?.trim() || "");
  }, [initialSummary]);

  useEffect(() => {
    if (summary) {
      return;
    }

    let attempts = 0;
    const interval = window.setInterval(async () => {
      attempts += 1;
      if (attempts > 36) {
        window.clearInterval(interval);
        return;
      }

      try {
        const response = await fetch(apiEndpoints.publicLibraryItem(slug), {
          method: "GET",
          headers: { Accept: "application/json" },
          cache: "no-store",
        });

        if (!response.ok) {
          return;
        }

        const payload = (await response.json()) as {
          item?: { ai_summary?: string | null };
        };
        const nextSummary = payload.item?.ai_summary?.trim() || "";

        if (nextSummary) {
          setSummary(nextSummary);
          window.clearInterval(interval);
        }
      } catch {
        // Keep polling quietly until attempts are exhausted.
      }
    }, 5000);

    return () => window.clearInterval(interval);
  }, [slug, summary]);

  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-wide text-slate-700">AI Summary</h2>
      {summary ? (
        <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-700 md:text-base">
          {summary}
        </p>
      ) : (
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Summary will appear here when ready.
        </p>
      )}
    </div>
  );
}
