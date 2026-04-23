import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const welcomePoints = [
  "Join region-specific forums",
  "Ask questions and get honest answers",
  "Learn from peers and professionals",
  "Find verified service providers nearby",
];

export default function WelcomeSection() {
  return (
    <section
      className="relative mt-[25px] overflow-visible text-white"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.74) 42%, rgba(0,0,0,0.45) 67%, rgba(0,0,0,0.2) 100%), url('/Welcome-BG.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto grid w-full max-w-[1170px] items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 md:gap-10 lg:min-h-[782px] lg:grid-cols-[1.05fr_1.15fr] lg:px-10 lg:py-0">
        <div className="order-2 relative z-10 max-w-full lg:order-1 lg:max-w-[680px]">
          <p className="text-[24px] leading-none font-normal tracking-tight sm:text-[30px]">
            <span className="text-[#0f62fd]">Welcome To</span>
          </p>

          <h1 className="mt-1 text-[44px] leading-[0.95] font-extrabold capitalize sm:text-[64px] lg:text-[66px] lg:leading-[0.88] lg:whitespace-nowrap">
            Immigrant Know
            <span className="outline bg-[linear-gradient(to_right,#ffffff_10%,transparent_80%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1.5px_#ffffff]">
              How
            </span>
          </h1>

          <p className="mt-5 text-[16px] leading-[1.45] font-normal text-white/95 sm:text-[18px] sm:leading-[1.35]">
            Immigrant Knowhow is a global platform built to help immigrants find
            trusted services, expert guidance, and real community as they settle
            into life in a new country.
          </p>

          <p className="mt-4 text-[16px] leading-[1.45] font-normal text-white/95 sm:text-[18px] sm:leading-[1.35]">
            Whether you`re enrolling your kids in school, looking for a tutor,
            or just hoping to connect with someone who understands, you`ll find
            real support here.
          </p>

          <p className="mt-4 text-[16px] leading-[1.45] font-normal text-white/95 sm:text-[18px] sm:leading-[1.35]">
            It`s a hub for immigrant experiences, where users can:
          </p>

          <ul className="mt-6 space-y-2.5 sm:space-y-3">
            {welcomePoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[16px] sm:text-[18px]">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="mt-0.5 h-6 w-6 shrink-0 text-white sm:mt-1 sm:h-8 sm:w-8"
                />
                <span className="leading-[1.35]">{point}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.45] font-normal text-white/95 sm:text-[18px] sm:leading-[1.35]">
            From immigration and health to language, finance, and culture - this
            is your place to connect, grow, and thrive.
          </p>
        </div>

        <div className="pointer-events-none order-1 relative z-30 min-h-[280px] w-full sm:min-h-[360px] lg:order-2 lg:min-h-[702px]">
          <Image
            src="/Welcome.webp"
            alt="Immigrant KnowHow welcome visual"
            fill
            sizes="(min-width: 1024px) 42vw, (min-width: 640px) 70vw, 92vw"
            className="object-contain object-top md:object-top-right lg:translate-x-[190px] lg:-translate-y-[90px] lg:scale-[1.85] lg:origin-top-right"
            priority
          />
        </div>
      </div>
    </section>
  );
}
