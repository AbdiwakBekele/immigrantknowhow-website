import Image from "next/image";
import MemberCTABlock from "./MemberCTABlock";

const services = [
  {
    image: "/Tutors.webp",
    imageAlt: "Tutoring and learning support",
    icon: "/Tutors-Inside-Circle.png",
    title: "Tutors",
    description:
      "Personalized academic support for your children or yourself, from language learning to schoolwork help. Find tutors who speak your language and understand your goals.",
  },
  {
    image: "/TourGuides.webp",
    imageAlt: "City and cultural tours",
    icon: "/Tour-Guide-Inside-Circle.png",
    title: "Tour Guides",
    description:
      "Explore your new city with guides who understand both the culture you come from and the one you're entering. Great for orientation, sightseeing, or settling in.",
  },
  {
    image: "/PetSitters.webp",
    imageAlt: "Trusted pet care",
    icon: "/Pet-Sitters-Inside-Circle.png",
    title: "Pet Sitters",
    description:
      "Need someone you can trust with your pet? Find reliable local sitters, often fellow immigrants, who treat your pet like family.",
  },
];

export default function ServicesWeOffer() {
  return (
    <section className="bg-white mt-[60px] text-[#111]">
      <div className="mx-auto max-w-292.5 px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-[22px] font-extrabold leading-tight text-black sm:text-[28px] lg:text-[44px]">
            Services <span className="text-[#0f62fd]">We Offer</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[20px] leading-relaxed text-[#4a4a4a] sm:text-[17px]">
            Real help. Trusted people. Right when you need them.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((item) => (
            <li
              key={item.title}
              className="flex flex-col rounded-[20px] border border-[#3b82f6] bg-white p-3 sm:p-4"
            >
              <div className="relative shrink-0">
                <div className="overflow-hidden rounded-[14px]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={640}
                    height={360}
                    className="aspect-16/10 w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 left-1/2 z-10 flex h-[76px] w-[76px] -translate-x-1/2 items-center justify-center">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0066ff] p-2 shadow-sm ">
                    <Image
                      src={item.icon}
                      alt=""
                      width={52}
                      height={52}
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col px-2 pt-14 pb-6 text-center sm:px-3">
                <h3 className="text-2xl font-bold leading-tight text-black">
                  {item.title}
                </h3>
                <p className="mt-3 text-[18px] font-normal text-left leading-normal text-black sm:text-base">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <MemberCTABlock align="center" />
        </div>
      </div>
    </section>
  );
}
