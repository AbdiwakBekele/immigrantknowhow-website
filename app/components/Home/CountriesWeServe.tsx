import Image from "next/image";
import MemberCTABlock from "./MemberCTABlock";

const countries = [
  {
    image: "/USA-1.webp",
    title: "USA",
    description:
      "Find services, ask questions, and connect with others building a new life across the United States.",
  },
  {
    image: "/Canada-1-1.webp",
    title: "Canada",
    description:
      "Access Canada-specific support and immigrant-led resources for work, school, and community life.",
  },
  {
    image: "/Europe-2-1-1536x864.webp",
    title: "Europe",
    description:
      "Join a growing European community with services and insights tailored to your local country and culture.",
  },
  {
    image: "/Great-Britain.jpg",
    title: "Great Britain",
    description:
      "Join a growing Great Britain community with services and insights tailored to your local country and culture.",
  },
];

export default function CountriesWeServe() {
  return (
    <section className="text-[#111] mt-15">
      {/* Top Banner */}
      <div className="relative bg-[#1a1a1a] py-10 sm:py-12 lg:py-[75px]">
        {/* Background */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.42] z-0"
          style={{ backgroundImage: "url('/Immigration-Services-BG.webp')" }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-[1170px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-3 lg:gap-14 xl:gap-16">
            {/* Left Image (TOP layer) */}
            <div className="relative z-0 col-span-1 mx-auto -mt-4 w-full max-w-[320px] sm:max-w-[420px] lg:mx-0 lg:-mt-12 lg:w-[466px] lg:max-w-none">
              <Image
                src="/Immigration-services-by-following-Countries-we-serve-image.webp"
                alt="Family with luggage ready to build a new life abroad"
                width={666}
                height={1024}
                className="mx-auto block w-full max-w-[390px] max-h-[620px] object-contain object-bottom sm:max-w-[460px] sm:max-h-[680px] lg:max-w-none lg:w-full lg:max-h-[525px] lg:scale-[1.46] lg:origin-bottom-left lg:-translate-x-[170px] lg:translate-y-[148px]"
              />
            </div>

            {/* Right Content */}
            <div className="relative z-10 col-span-2 text-white lg:pl-10 xl:pl-14">
              <h2 className="text-balance text-[26px] font-extrabold leading-[1.1] tracking-tight sm:text-[34px] lg:text-[40px]">
                Available in These{" "}
                <span className="text-[#5eb0ff]">Countries</span>
              </h2>

              <p className="mt-4 text-[18px] font-medium leading-snug text-white/95 sm:text-[19px] lg:text-[20px]">
                Tailored services and community support for every region we
                serve.
              </p>

              <p className="mt-5 text-[16px] leading-relaxed text-white/80 sm:text-[18px] lg:max-w-[520px]">
                Your journey is different depending on where you land.
                That&apos;s why Immigrant Knowhow offers dedicated spaces for
                each region, with services, community, and expert support
                designed for your specific needs.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="inline-block h-9 w-1 shrink-0 rounded-full bg-[#2b6bf3]" />
                <p className="text-[18px] font-semibold tracking-tight text-white sm:text-[21px]">
                  Choose your country to begin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-white">
        <div className="relative z-30 mx-auto -mt-[110px] max-w-[1170px] px-4 sm:-mt-[140px] sm:px-6 lg:-mt-[214px] lg:px-8">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-4">
            {countries.map((c) => (
              <li
                key={c.title}
                className="flex w-full max-w-full justify-self-center flex-col overflow-hidden rounded-[15px] border border-[#e5e7eb] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="p-3">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[10px]">
                    <Image
                      src={c.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-4 py-5 text-center sm:px-5">
                  <h3 className="text-[17px] font-bold leading-tight text-black sm:text-lg">
                    {c.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-normal text-black sm:text-[15px]">
                    {c.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto flex justify-center px-6 pb-16 pt-14 sm:pt-16 lg:pb-20 lg:pt-16">
          <MemberCTABlock align="center" />
        </div>
      </div>
    </section>
  );
}
