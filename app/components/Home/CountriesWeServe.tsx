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
      <div className="relative bg-[#1a1a1a] py-16 lg:py-20">
        {/* Background */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.42] z-0"
          style={{ backgroundImage: "url('/Immigration-Services-BG.webp')" }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-292.5 px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-3 lg:gap-14 xl:gap-16">
            {/* Left Image (TOP layer) */}
            <div className="relative z-30 mx-auto w-full max-w-xl lg:mx-0 col-span-1 -mt-16 lg:-mt-32">
              <Image
                src="/Immigration-services-by-following-Countries-we-serve-image.webp"
                alt="Family with luggage ready to build a new life abroad"
                width={666}
                height={1024}
                className="w-full max-h-[600px] object-cover object-bottom"
              />
            </div>

            {/* Right Content */}
            <div className="relative z-10 text-white col-span-2 lg:pl-10 xl:pl-14">
              <h2 className="text-balance text-[26px] font-extrabold leading-[1.1] tracking-tight sm:text-[34px] lg:text-[40px]">
                Available in These{" "}
                <span className="text-[#5eb0ff]">Countries</span>
              </h2>

              <p className="mt-4 text-[16px] font-medium leading-snug text-white/95 sm:text-[17px] lg:text-[18px]">
                Tailored services and community support for every region we
                serve.
              </p>

              <p className="mt-5 text-[15px] leading-relaxed text-white/80 sm:text-[16px] lg:max-w-[520px]">
                Your journey is different depending on where you land.
                That&apos;s why Immigrant Knowhow offers dedicated spaces for
                each region, with services, community, and expert support
                designed for your specific needs.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="inline-block h-9 w-1 shrink-0 rounded-full bg-[#2b6bf3]" />
                <p className="text-[15px] font-semibold tracking-tight text-white sm:text-[16px]">
                  Choose your country to begin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-white">
        <div className="relative z-20 mx-auto -mt-28 max-w-292.5 px-6 sm:-mt-32 lg:-mt-36 lg:px-8">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {countries.map((c) => (
              <li
                key={c.title}
                className="flex flex-col overflow-hidden rounded-[15px] border border-[#e5e7eb] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  />
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
