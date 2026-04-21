"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

export type ContactTopicOption = { value: string; label: string };

const PLACEHOLDER = "I'd like to chat about...";

type ContactTopicSelectProps = {
  name: string;
  options: ContactTopicOption[];
  required?: boolean;
};

export default function ContactTopicSelect({
  name,
  options,
  required = true,
}: ContactTopicSelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  const selected = options.find((o) => o.value === value);
  const displayText = selected ? selected.label : PLACEHOLDER;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) {
      return;
    }
    function onPointerDown(e: MouseEvent) {
      if (
        rootRef.current &&
        !rootRef.current.contains(e.target as Node)
      ) {
        close();
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <div ref={rootRef} className="relative w-full">
      <input type="hidden" name={name} value={value} required={required} />

      <button
        type="button"
        className={
          open
            ? "relative z-10 w-full cursor-pointer rounded-full border-2 border-[#0f62fd] bg-white py-3.5 pl-5 pr-12 text-left text-[16px] text-[#111] outline-none"
            : "relative w-full cursor-pointer rounded-full border border-[#d1d5db] bg-white py-3.5 pl-5 pr-12 text-left text-[16px] outline-none transition-shadow focus:border-[#0f62fd] focus:ring-2 focus:ring-[#0f62fd]/25"
        }
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={open ? listId : undefined}
        aria-label="Topic: choose what you would like to chat about"
        onClick={() => setOpen((o) => !o)}
      >
        <span className={value ? "text-[#111]" : "text-[#4b5563]"}>
          {displayText}
        </span>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9ca3af]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={open ? "h-5 w-5 -rotate-180" : "h-5 w-5"}
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          className="-mt-px max-h-[min(20rem,70vh)] w-full list-none overflow-y-auto overflow-x-hidden rounded-none border border-t-0 border-[#6b7280] bg-white py-0 shadow-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Chat topic"
        >
          <li
            role="presentation"
            className="select-none border-b border-[#e5e7eb] px-5 py-2.5 text-left text-[16px] text-[#4b5563]"
          >
            {PLACEHOLDER}
          </li>
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={value === opt.value}
            >
              <button
                type="button"
                className={
                  value === opt.value
                    ? "w-full bg-[#2563eb] px-5 py-2.5 text-left text-[16px] text-white outline-none"
                    : "w-full bg-white px-5 py-2.5 text-left text-[16px] text-[#111] outline-none transition-colors hover:bg-[#2563eb] hover:text-white focus-visible:bg-[#2563eb] focus-visible:text-white"
                }
                onClick={() => {
                  setValue(opt.value);
                  setOpen(false);
                }}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
