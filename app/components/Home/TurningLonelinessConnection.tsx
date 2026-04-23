import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import MemberCTABlock from "./MemberCTABlock";

const bulletPoints = [
  "Find people who speak your language, and your experience",
  "Share your story and feel heard",
  "Ask questions, get answers, and offer support",
  "Join local events, forums, and interest groups",
  "Build a sense of belonging from day one",
];

export default function TurningLonelinessConnection() {
  return (
    <section className="relative h-[520px] overflow-hidden bg-white text-[#111] sm:h-[600px] lg:h-[680px]">
      <div
        className="pointer-events-none absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/We-Minimax-risk-of-chronic-loneliness.webp')",
          backgroundPosition: "100% calc(100% + 225px)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "calc(100% + 50px) auto",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-292.5 px-4 py-[23px] sm:px-6 sm:py-[46px] lg:px-10 lg:py-[56px] xl:px-12">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-x-10 xl:gap-x-16">
          {/* Left: headline, copy, CTA — fixed reading width like comp */}
          <div className="w-full max-w-135 lg:max-w-88">
            <h2 className="text-[28px] font-extrabold leading-[1.08] tracking-[-0.025em] text-black sm:text-[36px] lg:text-[38px] lg:leading-[1.06]">
              Turning Loneliness Into{" "}
              <span className="text-[#0f62fd]">Connection</span>
            </h2>
            <p className="mt-5 text-[16px] font-normal leading-[1.6] text-black sm:mt-7 sm:text-[17px] sm:leading-[1.65] lg:mt-8 lg:text-[18px] lg:leading-[1.62]">
              Because no one should have to navigate a new country alone.
            </p>
            <p className="mt-3 text-[16px] font-normal leading-[1.6] text-black sm:mt-4 sm:text-[17px] sm:leading-[1.65] lg:text-[18px] lg:leading-[1.62]">
              Starting over in a new place can feel isolating, but it
              doesn&apos;t have to.
            </p>
            <p className="mt-3 text-[16px] font-normal leading-[1.6] text-black sm:mt-4 sm:text-[17px] sm:leading-[1.65] lg:text-[18px] lg:leading-[1.62]">
              Immigrant Knowhow helps you connect with people who understand
              your story. From community forums to local support, we&apos;re
              building a space where immigrants can share, learn, and grow,
              together.
            </p>
            <div className="mt-7 sm:mt-9 lg:mt-10">
              <MemberCTABlock />
            </div>
          </div>

          <div className="relative min-h-75 w-full lg:min-h-95 lg:w-92">
            <div className="relative z-10 ml-0 w-full max-w-[348px] lg:ml-37.5 lg:w-[348px]">
              <p className="text-[16px] font-medium leading-[1.45] text-black sm:text-[17px] lg:text-[18px]">
                Whether you&apos;re looking for guidance or simply someone to
                talk to, you&apos;re not alone here.
              </p>
              <ul className="mt-6 space-y-3 sm:mt-7 sm:space-y-3.5 lg:mt-8 lg:space-y-4">
                {bulletPoints.map((line) => (
                  <li key={line} className="flex items-start gap-3 sm:gap-3.5">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="mt-0.5 h-[18px] w-[18px] shrink-0  lg:h-5 lg:w-5"
                    />
                    <span className="text-[15px] font-normal leading-[1.55] text-black sm:text-[16px] lg:text-[18px] lg:leading-[1.55]">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
