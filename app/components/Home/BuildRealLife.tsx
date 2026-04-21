import Image from "next/image";
import MemberCTABlock from "./MemberCTABlock";

const features = [
  {
    icon: "/engagement-1.webp",
    title: "Community",
    description:
      "Join local forums, share experiences, ask questions, and connect with others who truly understand your journey and challenges.",
  },
  {
    icon: "/pet-care-2.webp",
    title: "Pet Services",
    description:
      "Find reliable pet sitters who respect your culture, lifestyle, and language, ensuring your animals are cared for with love.",
  },
  {
    icon: "/tour-guide-2.png",
    title: "Tour Guide",
    description:
      "Book trusted local experts to explore your surroundings, learn hidden gems, and feel at home in your new community.",
  },
  {
    icon: "/tutoring-2.png",
    title: "Tutors",
    description:
      "Get personalized academic support for you or your children, always available in multiple languages to meet your learning goals.",
  },
  {
    icon: "/church.webp",
    title: "Faith & Culture",
    description:
      "Stay rooted and connected with local faith groups and cultural communities that celebrate traditions and belonging.",
  },
];

export default function BuildRealLife() {
  return (
    <section className="bg-white text-[#111]">
      <div className="mx-auto max-w-292.5 px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-[22px] font-extrabold leading-[1.2] text-black sm:text-[30px] lg:text-[44px]">
            We Help Immigrants Build{" "}
            <span className="text-[#1D61E7]">Real Life</span> in a New Country
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-relaxed  sm:mt-5 sm:text-[17px]">
            From everyday services to meaningful connections, you don&apos;t
            have to do it alone.
          </p>
        </div>

        <ul className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-5">
          {features.map((item) => (
            <li
              key={item.title}
              className="flex flex-col rounded-2xl border border-[#0F62FD4D] bg-white px-6 py-6 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:px-6 sm:py-7"
            >
              <div className="relative mx-auto mb-5 flex h-[88px] w-[88px] shrink-0 items-center justify-center sm:mb-6">
                <span
                  className="absolute right-1 top-2 h-[52px] w-[52px] rounded-full bg-[#1D61E7]/18"
                  aria-hidden
                />
                <Image
                  src={item.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="relative z-10 h-14 w-14 object-contain sm:h-16 sm:w-16"
                />
              </div>
              <h3 className="text-[17px] font-bold leading-tight text-black sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-3 text-[14px] leading-normal text-[#4b5563] sm:text-[15px]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex justify-center sm:mt-16 lg:mt-6">
          <MemberCTABlock align="center" />
        </div>
      </div>
    </section>
  );
}
