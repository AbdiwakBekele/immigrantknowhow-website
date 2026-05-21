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
    <main className="ikh-site-page ikh-site-page--contact">
      <header className="relative flex min-h-56 w-full items-center justify-center overflow-hidden sm:min-h-64 lg:min-h-72">
        <Image
          src="/Contact-Immigrants-KnowHow.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden />
        <h1 className="relative z-10 text-center text-[42px] font-bold leading-none tracking-tight text-white sm:text-5xl">
          Contact
        </h1>
      </header>

      <section className="bg-white py-14 text-[#111] sm:py-16 lg:py-20">
        <div className="ikh-shell ikh-site-page__inner">
          <div className="text-center">
            <h2 className="text-[36px] font-extrabold leading-tight text-black sm:text-[42px]">
              We&apos;d Love to Hear From You
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[16px] font-normal leading-relaxed text-[#2d2d2d] sm:mt-4 sm:text-[17px]">
              Immigrant Knowhow is now live! If you have questions, feedback, or
              would like to partner with us, send us a message below – we&apos;d
              love to hear from you.
            </p>
          </div>

          <form
            className="mx-auto mt-10 max-w-3xl space-y-4 sm:mt-10 sm:space-y-4"
            action="#"
            method="post"
          >
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
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
                  className="h-11 w-full rounded-full border border-[#b8b8b8] bg-white py-2.5 pl-10 pr-5 text-[16px] text-[#111] placeholder:text-[#8f8f8f] outline-none transition-shadow focus:border-[#0f62fd] focus:ring-2 focus:ring-[#0f62fd]/20"
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
                  className="h-11 w-full rounded-full border border-[#b8b8b8] bg-white py-2.5 pl-10 pr-5 text-[16px] text-[#111] placeholder:text-[#8f8f8f] outline-none transition-shadow focus:border-[#0f62fd] focus:ring-2 focus:ring-[#0f62fd]/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
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
                  className="h-11 w-full rounded-full border border-[#b8b8b8] bg-white py-2.5 pl-10 pr-5 text-[16px] text-[#111] placeholder:text-[#8f8f8f] outline-none transition-shadow focus:border-[#0f62fd] focus:ring-2 focus:ring-[#0f62fd]/20"
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
                  className="h-11 w-full rounded-full border border-[#b8b8b8] bg-white py-2.5 pl-10 pr-5 text-[16px] text-[#111] placeholder:text-[#8f8f8f] outline-none transition-shadow focus:border-[#0f62fd] focus:ring-2 focus:ring-[#0f62fd]/20"
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
                className="min-h-[108px] w-full resize-y rounded-2xl border border-[#b8b8b8] bg-white px-4 py-3 text-[16px] text-[#111] placeholder:text-[#8f8f8f] outline-none transition-shadow focus:border-[#0f62fd] focus:ring-2 focus:ring-[#0f62fd]/20"
              />
            </div>

            <div className="flex justify-center pt-1">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#2f7cf7] to-[#2b70e8] px-7 py-2.5 text-[18px] font-bold text-white shadow-[0_5px_14px_rgba(47,124,247,0.45)] transition-[transform,box-shadow] duration-200 hover:shadow-[0_7px_18px_rgba(47,124,247,0.5)] active:scale-[0.99]"
              >
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="h-5 w-5 text-white"
                  aria-hidden
                />
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
