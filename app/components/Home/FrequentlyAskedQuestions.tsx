"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Immigrant Knowhow and how does it work?",
    answer:
      "Immigrant Knowhow is a platform that connects immigrants with trusted services, local community support, and expert guidance, customized for your country. You choose your region, explore listings, join forums, and get help from others who've been in your shoes.",
  },
  {
    question: "Is Immigrant Knowhow free to use?",
    answer:
      "Yes! You can sign up for free to access community forums, browse services, and ask questions. Some premium content and provider services may include optional fees.",
  },
  {
    question: "How are service providers verified?",
    answer:
      "All providers go through an identity verification process and are manually approved by our team before they appear in the public directory.",
  },
  {
    question: "Is it safe to book services through Immigrant Knowhow?",
    answer:
      "Yes. Every service provider on our platform goes through identity verification and manual review before being approved. You can view their profiles, read reviews, and only release payment after a service is delivered.",
  },
  {
    question: "Which countries do you currently serve?",
    answer:
      "We currently support users in the United States, Canada, Great Britain and Europe, with country-specific services and forums in each.",
  },
];

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 text-[#111] sm:py-20 lg:py-15">
      <div className="mx-auto max-w-292.5 px-6 lg:px-8">
        <h2 className="text-center text-[28px] font-extrabold leading-tight text-black sm:text-3xl lg:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto mt-10  space-y-4 sm:mt-12">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`rounded-lg border bg-white px-5 py-4 transition-[border-color,box-shadow,background-color] duration-300 ease-out sm:px-6 sm:py-5 ${
                  isOpen
                    ? "border-[#0f62fd]/45 shadow-[0_0_0_1px_rgba(15,98,253,0.12)]"
                    : "border-[#e8eaed]  "
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-start justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[20px] font-bold leading-snug text-black sm:text-[17px]">
                    {item.question}
                  </span>
                  <span className="mt-0.5 shrink-0 text-[#0f62fd]" aria-hidden>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-5 w-5 transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                  aria-hidden={!isOpen}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="pt-4 text-left text-[15px] leading-relaxed text-[#4b5563] sm:text-[20px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
