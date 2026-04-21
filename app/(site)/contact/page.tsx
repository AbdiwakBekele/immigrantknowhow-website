import type { Metadata } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faEnvelope,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ContactTopicSelect from "@/app/components/Contact/ContactTopicSelect";

export const metadata: Metadata = {
  title: "Contact | Immigrant Knowhow",
  description:
    "Get in touch with Immigrant Knowhow — we’re here to help with questions, partnerships, and support.",
};

const chatTopicOptions = [
  { value: "general-question", label: "General Question" },
  { value: "partnership-opportunity", label: "Partnership Opportunity" },
  { value: "media-press-inquiry", label: "Media or Press Inquiry" },
  { value: "feedback-suggestions", label: "Feedback or Suggestions" },
  { value: "technical-issue", label: "Technical Issue" },
  { value: "volunteering-contributing", label: "Volunteering or Contributing" },
  { value: "content-submission", label: "Content Submission" },
  { value: "marketing-promotion", label: "Marketing or Promotion" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  return (
    <>
      <header className="relative flex min-h-55 w-full items-center justify-center overflow-hidden sm:min-h-60 lg:min-h-100">
        <Image
          src="/Contact-Immigrants-KnowHow.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" aria-hidden />
        <h1 className="relative z-10 text-center text-[40px] font-bold leading-none tracking-tight text-white sm:text-5xl lg:text-[44px]">
          Contact
        </h1>
      </header>

      <section className="bg-white py-14 text-[#111] sm:py-20 lg:py-15">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[28px] font-extrabold leading-tight text-black sm:text-[32px] lg:text-[40px]">
              We&apos;d Love to Hear From You
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-[20px] font-normal leading-relaxed text-black sm:mt-5 sm:text-[17px]">
              Immigrant Knowhow is now live! If you have questions, feedback, or
              would like to partner with us, send us a message below – we&apos;d
              love to hear from you.
            </p>
          </div>

          <form
            className="mt-10 space-y-5 sm:mt-12 sm:space-y-6"
            action="#"
            method="post"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#9ca3af]">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="h-4 w-4"
                    aria-hidden
                  />
                </span>
                <input
                  id="contact-first-name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="First Name"
                  className="w-full rounded-full border border-[#d1d5db] bg-white py-3.5 pl-11 pr-5 text-[16px] text-[#111] placeholder:text-[#9ca3af] outline-none transition-shadow focus:border-[#0f62fd] focus:ring-2 focus:ring-[#0f62fd]/25"
                />
              </div>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#9ca3af]">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="h-4 w-4"
                    aria-hidden
                  />
                </span>
                <input
                  id="contact-last-name"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Last Name"
                  className="w-full rounded-full border border-[#d1d5db] bg-white py-3.5 pl-11 pr-5 text-[16px] text-[#111] placeholder:text-[#9ca3af] outline-none transition-shadow focus:border-[#0f62fd] focus:ring-2 focus:ring-[#0f62fd]/25"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#9ca3af]">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="h-4 w-4"
                    aria-hidden
                  />
                </span>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your Email"
                  className="w-full rounded-full border border-[#d1d5db] bg-white py-3.5 pl-11 pr-5 text-[16px] text-[#111] placeholder:text-[#9ca3af] outline-none transition-shadow focus:border-[#0f62fd] focus:ring-2 focus:ring-[#0f62fd]/25"
                />
              </div>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#9ca3af]">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="h-4 w-4"
                    aria-hidden
                  />
                </span>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Your Phone"
                  className="w-full rounded-full border border-[#d1d5db] bg-white py-3.5 pl-11 pr-5 text-[16px] text-[#111] placeholder:text-[#9ca3af] outline-none transition-shadow focus:border-[#0f62fd] focus:ring-2 focus:ring-[#0f62fd]/25"
                />
              </div>
            </div>

            <ContactTopicSelect
              name="topic"
              options={chatTopicOptions}
              required
            />

            <div>
              <label htmlFor="contact-message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Your Message"
                className="min-h-[160px] w-full resize-y rounded-2xl border border-[#d1d5db] bg-white px-5 py-4 text-[16px] text-[#111] placeholder:text-[#9ca3af] outline-none transition-shadow focus:border-[#0f62fd] focus:ring-2 focus:ring-[#0f62fd]/25"
              />
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-[#0f62fd] to-[#1e6bfa] px-8 py-3.5 text-[18px] font-bold text-white shadow-[0_8px_24px_rgba(15,98,253,0.4)] transition-[transform,box-shadow] duration-200 hover:shadow-[0_10px_28px_rgba(15,98,253,0.5)] active:scale-[0.99] sm:px-10 sm:text-[20px]"
              >
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="h-6 w-6 text-white"
                  aria-hidden
                />
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
