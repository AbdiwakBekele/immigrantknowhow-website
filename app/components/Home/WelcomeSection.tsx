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
      <div className="mx-auto grid min-h-130 max-w-292.5 items-center px-6 lg:min-h-[782px] lg:grid-cols-[1.05fr_1.15fr] lg:px-10">
        <div className="relative z-10 max-w-260">
          <p className="text-[30px] leading-none font-normal tracking-tight">
            <span className="text-[#0f62fd]">Welcome To</span>
          </p>

          <h1 className="mt-1 whitespace-nowrap text-[66px] leading-[0.88] font-extrabold capitalize sm:text-[88px] lg:text-[66px]">
            Immigrant Know
            <span className="outline bg-[linear-gradient(to_right,#ffffff_10%,transparent_80%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1.5px_#ffffff]">
              How
            </span>
          </h1>

          <p className="mt-5 text-[18px] leading-[1.35] font-normal text-white/95">
            Immigrant Knowhow is a global platform built to help immigrants find
            trusted services, expert guidance, and real community as they settle
            into life in a new country.
          </p>

          <p className="mt-4 text-[18px] leading-[1.35] font-normal text-white/95">
            Whether you`re enrolling your kids in school, looking for a tutor,
            or just hoping to connect with someone who understands, you`ll find
            real support here.
          </p>

          <p className="mt-4 text-[18px] leading-[1.35] font-normal text-white/95">
            It`s a hub for immigrant experiences, where users can:
          </p>

          <ul className="mt-6 space-y-2.5">
            {welcomePoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[18px]">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="mt-1 h-8 w-8 shrink-0 text-white"
                />
                <span className="leading-[1.35]">{point}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-[560px] text-[18px] leading-[1.35] font-normal text-white/95">
            From immigration and health to language, finance, and culture - this
            is your place to connect, grow, and thrive.
          </p>
        </div>

        <div className="pointer-events-none relative z-30 min-h-[420px] w-full lg:min-h-[702px]">
          <Image
            src="/Welcome.webp"
            alt="Immigrant KnowHow welcome visual"
            fill
            sizes="(min-width: 622px) 42vw, 90vw"
            className="object-contain object-top-right lg:translate-x-[190px] lg:-translate-y-[90px] lg:scale-[1.85] lg:origin-top-right"
            priority
          />
        </div>
      </div>
    </section>
  );
}
