"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Community", href: "#" },
  { label: "Services", href: "#" },
];

const countries = ["United States", "Canada", "Europe", "Great Britain"];

export default function Header() {
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const countryMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (
        countryMenuRef.current &&
        !countryMenuRef.current.contains(event.target as Node)
      ) {
        setIsCountryOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsCountryOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="w-full border-b border-black/10 bg-white">
      <div className="mx-auto flex h-16 max-w-300 items-center justify-between px-6 lg:px-8 py-10">
        <Link href="/" aria-label="Immigrant Knowhow home" className="shrink-0">
          <Image
            src="/Logo.svg"
            alt="Immigrant Knowhow"
            width={140}
            height={36}
            priority
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-10 md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[18px]  font-normal text-[#1e1e1e] transition-colors hover:text-[#0f62fd]"
            >
              <span className="inline-flex items-center gap-1">
                {item.label}
              </span>
            </Link>
          ))}

          <div className="relative" ref={countryMenuRef}>
            <button
              type="button"
              onClick={() => setIsCountryOpen((prev) => !prev)}
              className="inline-flex items-center gap-1 text-[18px] font-normal text-[#0f62fd]"
              aria-haspopup="menu"
              aria-expanded={isCountryOpen}
            >
              Country
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`h-4 w-4 transition-transform ${isCountryOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isCountryOpen ? (
              <div
                role="menu"
                className="absolute left-0 top-full z-40 mt-4 min-w-48 rounded-md bg-white py-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
              >
                {countries.map((country) => (
                  <Link
                    key={country}
                    href="#"
                    role="menuitem"
                    onClick={() => setIsCountryOpen(false)}
                    className="block px-5 py-4 text-[18px] leading-none text-black transition-colors hover:text-[#0f62fd]"
                  >
                    {country}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <Link
            href="#"
            className="text-[18px]  font-normal text-[#1e1e1e] transition-colors hover:text-[#0f62fd]"
          >
            <span className="inline-flex items-center gap-1">Contact</span>
          </Link>
        </nav>

        <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-[#0f62fd] px-7.5 py-3 text-[20px] font-normal text-white transition-all duration-200 -translate-y-1 shadow-[0_10px_24px_rgba(15,98,253,0.42)] 
  hover:translate-y-0 hover:bg-[#0f62fd] hover:shadow-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M10 8.5 13.5 12 10 15.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 12h5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          Become A Member
        </Link>
      </div>
    </header>
  );
}
