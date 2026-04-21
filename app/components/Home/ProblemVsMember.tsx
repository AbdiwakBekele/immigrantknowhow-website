import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import MemberCTABlock from "./MemberCTABlock";

const problemPoints = [
  "Financial stress with no one to ask",
  "Chronic loneliness in a new place",
  "No access to reliable legal advice",
  "Struggling to feel like you belong",
];

const solutionPoints = [
  "Learn how to manage finances in your new country",
  "Connect with people going through the same journey",
  "Get verified legal and immigration help",
  "Access real community, not just information",
];

export default function ProblemVsMember() {
  return (
    <section className="bg-white py-14 text-[#111]">
      <div className="mx-auto max-w-292.5 max-h-102.5 px-10 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-0">
          {/* Left column */}
          <div className="flex-1 ">
            <h2 className="text-[20px] font-extrabold leading-tight text-black sm:text-[24px]">
              The Problem Without Support
            </h2>
            <p className="mt-3 text-[20px] leading-relaxed  sm:text-[17px]">
              New immigrants often face overwhelming challenges, alone.
            </p>
            <ul className="mt-6 space-y-4">
              {problemPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    className="mt-0.5 h-5 w-5 shrink-0 "
                  />
                  <span className="text-[20px] leading-snug font-normal sm:text-[17px]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile divider */}
          <div className="relative flex items-center justify-center lg:hidden">
            <div className="h-px w-full bg-[#e5e7eb]" />
            <div className="absolute flex h-12.5 w-12.5 items-center justify-center rounded-full bg-black text-[22px] font-bold tracking-wide text-white">
              VS
            </div>
          </div>

          <div className="relative hidden w-px shrink-0 self-stretch bg-[#000000] lg:block">
            <div className="absolute top-1/2 left-1/2 flex h-12.5 w-12.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black text-[22px] font-bold tracking-wide text-white">
              VS
            </div>
          </div>

          {/* Right column */}
          <div className="flex-1 lg:pl-10">
            <h2 className="text-[20px] font-extrabold leading-tight text-black sm:text-[24px]">
              With <span className="text-[#0f62fd]">Immigrant KnowHow</span>{" "}
              Member
            </h2>
            <p className="mt-3 text-[20px] leading-relaxed  sm:text-[17px]">
              Get the support you need, from people who understand.
            </p>
            <ul className="mt-6 space-y-4">
              {solutionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="mt-0.5 h-5 w-5 shrink-0 "
                  />
                  <span className="text-[20px] font-normal  sm:text-[17px]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <MemberCTABlock />
          </div>
        </div>
      </div>
    </section>
  );
}
