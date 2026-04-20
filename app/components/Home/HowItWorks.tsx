import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    number: "1",
    icon: "/signup.svg",
    title: "Sign Up",
    description:
      "Create your account as a member or provider, it only takes a minute to get started.",
  },
  {
    number: "2",
    icon: "/accesssupport.svg",
    title: "Access Support",
    description:
      "Explore expert content, regional resources, and personalized help based on your country and interests.",
  },
  {
    number: "3",
    icon: "/joincommunity.svg",
    title: "Join Community",
    description:
      "Ask questions, share experiences, and connect with others who understand your journey.",
  },
];

function ShieldIcon() {
  return (
    <FontAwesomeIcon
      icon={faShieldHalved}
      className="mt-1 h-5 w-5 shrink-0 text-black"
    />
  );
}

export default function HowItWorks() {
  return (
    <section className="bg-white my-15 text-[#111]">
      <div className="mx-auto max-w-330 px-6">
        <h2 className="mb-10 text-center text-[44px] font-extrabold leading-tight">
          How <span className="text-[#0f62fd]">Immigrant Knowhow</span> Works
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-4">
          {steps.map((step) => (
            <div key={step.number} className="relative flex min-h-70.5">
              <div className="absolute left-0 top-0 h-full w-28.75 overflow-hidden pointer-events-none">
                <span
                  className="absolute -left-2.75 -top-7.5 select-none text-[320px] font-bold leading-none text-transparent"
                  style={{
                    WebkitTextStroke: "1px #333",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {step.number}
                </span>
              </div>

              <div className="relative z-10 ml-[115px] border-l border-black/80 pl-8 pt-8">
                <div className="mb-4">
                  <Image
                    src={step.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <h3 className="text-[24px] font-extrabold leading-tight">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[320px] text-[18px] leading-[1.6] text-black">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex flex-col items-center gap-5">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-[#0f62fd] px-7.5 py-3 text-[20px] font-normal text-white transition-all duration-200 -translate-y-1 shadow-[0_10px_24px_rgba(15,98,253,0.42)] 
  hover:translate-y-0 hover:bg-[#0f62fd] hover:shadow-none"
          >
            <FontAwesomeIcon icon={faCircleArrowRight} className="h-6 w-6" />
            Become A Member
          </Link>
          <div className="flex items-start gap-2 text-[14px] text-gray-900">
            <ShieldIcon />
            <p className="leading-snug">
              Trusted by over <span className="font-bold">10,000+</span>{" "}
              immigrants
              <br />
              in the U.S., Canada, and Europe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
