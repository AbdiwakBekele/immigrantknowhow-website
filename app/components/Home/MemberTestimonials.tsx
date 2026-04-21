"use client";

import { useEffect, useState } from "react";
import MemberCTABlock from "./MemberCTABlock";

export const testimonials = [
  {
    id: "dave-stoke",
    quote:
      "The guidance we received from Immigrant Knowhow exceeded our expectations. From forums to expert sessions, the team offered solid, caring support and clear next steps.",
    author: "Dave, Stoke-on-Trent",
    location: "England",
  },
  {
    id: "emily-johnson",
    quote:
      "The staffing agency provided exceptional service, ensuring our hotel had the right personnel at the right time. Their swift response to our staffing needs significantly boosted our operational efficiency. Highly recommended!",
    author: "Emily Johnson",
    location: "Elmira, NY",
  },
  {
    id: "lara-k",
    quote:
      "We've been consistently impressed by the quality of staff provided by this agency. Their professionalism and reliability have greatly contributed to the smooth running of our hotel.",
    author: "Lara K",
    location: "Norfolk, NE",
  },
  {
    id: "craig-regina",
    quote:
      "The staffing solutions offered by this agency surpassed our expectations. From front desk to housekeeping, their personnel demonstrated proficiency and a strong work ethic. They truly understand the demands of the hotel industry.",
    author: "Craig, Regina",
    location: "Canada",
  },
];

type Testimonial = {
  author: string;
  id: string;
  location: string;
  quote: string;
};

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

const splitQuote = (quote: string) => {
  const sentenceEnd = quote.indexOf(".");
  if (sentenceEnd === -1) return { body: "", headline: quote };

  return {
    body: quote.slice(sentenceEnd + 1).trim(),
    headline: quote.slice(0, sentenceEnd + 1),
  };
};

function TestimonialCarousel({
  testimonials: items,
}: TestimonialCarouselProps) {
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const canRotate = items.length > cardsPerPage;
  const slideCount = canRotate ? items.length : 1;
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
        return;
      }

      if (window.innerWidth < 1024) {
        setCardsPerPage(2);
        return;
      }

      setCardsPerPage(3);
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);

    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  useEffect(() => {
    if (slideCount <= 1) return;

    const timer = setInterval(() => {
      setActivePage((current) => (current + 1) % slideCount);
    }, 5000);

    return () => clearInterval(timer);
  }, [slideCount]);

  useEffect(() => {
    if (activePage >= slideCount) {
      setActivePage(0);
    }
  }, [activePage, slideCount]);

  const goToPrevious = () => {
    setActivePage((current) => (current === 0 ? slideCount - 1 : current - 1));
  };

  const goToNext = () => {
    setActivePage((current) => (current + 1) % slideCount);
  };

  return (
    <div className="relative mx-auto max-w-[1120px] px-4 sm:px-8 lg:px-10">
      <button
        onClick={goToPrevious}
        aria-label="Previous testimonials"
        disabled={slideCount <= 1}
        className="absolute left-0 top-1/2 z-20 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#2563eb] bg-white text-[#2563eb] transition hover:bg-[#2563eb] hover:text-white disabled:invisible sm:flex"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activePage * 100}%)` }}
        >
          {Array.from({ length: slideCount }, (_, pageIndex) => {
            const pageItems = canRotate
              ? Array.from({ length: cardsPerPage }, (_, k) => items[(pageIndex + k) % items.length])
              : items;

            return (
              <div
                key={pageIndex}
                className="flex h-full w-full shrink-0 justify-center gap-4 lg:gap-6"
              >
                {pageItems.map((item) => {
                  const quote = splitQuote(item.quote);

                  return (
                    <div
                      className="relative w-full max-w-[320px] shrink-0"
                      key={item.id}
                    >
                      {/* blue offset */}
                      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[20px] border border-[#2563eb]" />

                      {/* card */}
                      <figure className="relative flex h-full min-h-[320px] flex-col justify-between rounded-[20px] border border-[#e5e7eb] bg-white p-6 shadow-[0_3px_10px_rgba(0,0,0,0.06)] sm:min-h-[340px] sm:p-7 lg:min-h-[360px] lg:p-8">
                        <blockquote className="space-y-5">
                          <strong className="block text-[17px] font-extrabold leading-[1.35] text-[#111111] sm:text-[18px] lg:text-[19px]">
                            {quote.headline}
                          </strong>

                          {quote.body && (
                            <p className="text-[15px] leading-[1.55] text-[#1f2937] sm:text-[16px] lg:text-[17px]">
                              {quote.body}
                            </p>
                          )}
                        </blockquote>

                        <figcaption className="mt-8 sm:mt-9 lg:mt-10">
                          <div className="text-[17px] font-extrabold leading-[1.2] text-[#111111] sm:text-[18px] lg:text-[19px]">
                            {item.author}
                          </div>
                          <div className="mt-1 text-[15px] leading-none text-[#1f2937] sm:text-[16px] lg:text-[17px]">
                            {item.location}
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={goToNext}
        aria-label="Next testimonials"
        disabled={slideCount <= 1}
        className="absolute right-0 top-1/2 z-20 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#2563eb] bg-white text-[#2563eb] transition hover:bg-[#2563eb] hover:text-white disabled:invisible sm:flex"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      <div className="mt-8 flex items-center justify-center gap-2">
        {Array.from({ length: slideCount }, (_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActivePage(index)}
            aria-label={`Go to testimonial page ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === activePage ? "scale-110 bg-[#3b82f6]" : "bg-[#d1d5db]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function MemberTestimonials() {
  return (
    <section className="py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
          What Our <span className="text-blue-600">Members Say</span>
        </h2>

        <div className="mt-8 sm:mt-10 lg:mt-12">
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        <div className="mt-8 flex justify-center sm:mt-10 lg:mt-12">
          <MemberCTABlock align="center" />
        </div>
      </div>
    </section>
  );
}
