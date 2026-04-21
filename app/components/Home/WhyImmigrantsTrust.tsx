import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import MemberCTABlock from "./MemberCTABlock";

const trustPoints = [
  "Communicates clearly across cultures and languages",
  "Reduces isolation through real human connection",
  "Offers trusted services like pet sitters, tutors, and tour guides",
];

export default function WhyImmigrantsTrust() {
  return (
    <section className="bg-white text-[#111]">
      <div className="mx-auto max-w-292.5 px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-[22px] font-extrabold leading-[1.15] text-black sm:text-[30px] lg:text-[44px]">
            <span className="block">Why Immigrants Trust</span>
            <span className="mt-1 block text-[#1D61E7] sm:mt-1.5">
              Immigrant Knowhow
            </span>
          </h2>
        </div>
        <div className="mt-12 grid items-start gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
          <div className="relative mx-auto w-full max-w-xl justify-self-center lg:mx-0 lg:max-w-none lg:justify-self-start">
            <Image
              src="/Some-Reasons-People-like-our-immigation-1.webp"
              alt="Family traveling with luggage beside U.S. and Canada map graphics"
              width={720}
              height={600}
              className="h-auto w-full object-contain drop-shadow-[0_16px_40px_rgba(0,0,0,0.12)]"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          </div>

          <div className="max-w-xl text-left lg:max-w-none lg:pt-1">
            <p className="text-[18px] leading-[1.65] text-[#374151] sm:text-[17px]">
              From real support to real connection, people across the U.S.,
              Canada, and Europe rely on Immigrant Knowhow to feel safe,
              informed, and never alone.
            </p>
            <p className="mt-5 text-[18px] leading-[1.65] text-[#374151] sm:mt-6 sm:text-[17px]">
              Immigrant Knowhow gives people more than just resources, it gives
              them clarity, confidence, and community. Whether they&apos;re
              looking for a trusted service, helpful advice, or someone who
              understands what they&apos;re going through, members know this is
              a platform built for them.
            </p>

            <ul className="mt-4 space-y-3 sm:mt-9 sm:space-y-6">
              {trustPoints.map((line) => (
                <li key={line} className="flex items-start gap-3.5">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#0f62fd]"
                  />
                  <span className="text-[18px] font-bold leading-snug text-black sm:text-[17px]">
                    {line}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-[18px] leading-[1.65] text-[#374151] sm:mt-9 sm:text-[17px]">
              People trust Immigrant Knowhow because it&apos;s designed with
              their real-world challenges in mind. Everything we build, from
              forums to services, is shaped by feedback from immigrants just
              like them, in the U.S., Canada, and Europe.
            </p>

            <div className="mt-0">
              <MemberCTABlock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
