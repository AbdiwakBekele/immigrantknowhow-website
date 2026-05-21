"use client";

import {
  categoryLabels,
  immigrantResourceSections,
  type CommunitySection,
} from "./community-config";

type Props = {
  activeSection: CommunitySection;
  onSectionChange: (section: CommunitySection) => void;
};

function navButtonClass(active: boolean, indented = false): string {
  const base = indented
    ? "ml-3 w-[calc(100%-12px)] rounded-xl px-2.5 py-2 text-left text-[15px] font-medium transition-all duration-200"
    : "mb-2 w-full rounded-xl px-2.5 py-2 text-left text-[15px] font-semibold transition-all duration-200";

  return active
    ? `${base} bg-blue-600 text-white shadow-sm ring-1 ring-blue-500/50`
    : `${base} text-slate-700 hover:bg-slate-100 hover:text-slate-900`;
}

export default function CommunitySidebar({ activeSection, onSectionChange }: Props) {
  return (
    <aside className="w-full shrink-0 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm md:sticky md:top-6 md:h-fit md:w-72">
      <h1 className="text-[1.65rem] font-black tracking-tight text-slate-900">
        Community Feed
      </h1>

      <div className="mt-3 border-t border-slate-200/80 pt-3">
        <button
          type="button"
          className={navButtonClass(activeSection === "feed")}
          onClick={() => onSectionChange("feed")}
        >
          Feed
        </button>

        <h2 className="mb-1 text-[13px] font-bold uppercase tracking-[0.12em] text-slate-500">
          Ask Community
        </h2>
        <button
          type="button"
          className={navButtonClass(activeSection === "ask-intro", true)}
          onClick={() => onSectionChange("ask-intro")}
        >
          Intro
        </button>
        <button
          type="button"
          className={`${navButtonClass(activeSection === "ask-announcement", true)} mb-2`}
          onClick={() => onSectionChange("ask-announcement")}
        >
          Announcement
        </button>

        <h2 className="mb-2 text-[13px] font-bold uppercase tracking-[0.12em] text-slate-500">
          Immigrant Resources
        </h2>
        {immigrantResourceSections.map((section) => (
          <button
            key={section}
            type="button"
            className={`${navButtonClass(activeSection === section, true)} mb-1`}
            onClick={() => onSectionChange(section)}
          >
            {categoryLabels[section]}
          </button>
        ))}

        <h2 className="mb-1.5 mt-3 text-[13px] font-bold uppercase tracking-[0.12em] text-slate-500">
          Immigration News
        </h2>
        <button
          type="button"
          className={navButtonClass(activeSection === "immigration-news", true)}
          onClick={() => onSectionChange("immigration-news")}
        >
          {categoryLabels["immigration-news"]}
        </button>
      </div>
    </aside>
  );
}
