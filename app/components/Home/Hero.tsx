import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleCheck,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  { title: "Tour Guides", text: "Discover your new home with local experts" },
  { title: "Pet Sitters", text: "Book trusted care when you need it" },
  { title: "Tutors", text: "Get academic help in your language" },
];

function CheckIcon() {
  return <FontAwesomeIcon icon={faCircleCheck} className="h-5 w-5 shrink-0" />;
}

function ShieldIcon() {
  return <FontAwesomeIcon icon={faShieldHalved} className="h-5 w-5 shrink-0" />;
}

export default function Hero() {
  return (
    <section
      className="relative  overflow-hidden bg-[#7f7f7f] text-white"
      style={{
        backgroundImage: "url('/Immigrant-Community-Bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center left",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 sm:py-12 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative z-10 max-w-155">
          <p className="text-[30px] leading-none font-semibold tracking-tight">
            Built for <span className="text-[#0f62fd]">Every</span>
          </p>

          <h1 className="mt-1 text-[72px] leading-[0.88] font-extrabold uppercase sm:text-[88px] lg:text-[140px]">
            Immigra
            <span className="outline bg-[linear-gradient(to_right,#ffffff_10%,transparent_80%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1.5px_#ffffff]">
              nt
            </span>
          </h1>

          <p className="mt-5 max-w-145 text-[20px] leading-[1.6] text-white font-normal">
            Find the support you need, or offer the services you have, with a
            community that understands your journey.
          </p>

          <ul className="mt-6 space-y-3">
            {features.map((feature) => (
              <li
                key={feature.title}
                className="flex items-center gap-2.5 text-[20px] leading-[1.6] font-normal"
              >
                <CheckIcon />
                <span className={feature.title === "Tour Guides" ? "whitespace-nowrap" : ""}>
                  <span className="font-semibold">{feature.title}:</span>{" "}
                  <span>{feature.text}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-row  items-center gap-4">
            <Link
              href="#"
              className="inline-flex items-center gap-2  rounded-full border border-[#0f62fd] px-6 py-3 text-[20px] font-normal  leading-none text-[#0f62fd] transition hover:bg-[#0f62fd] hover:text-white"
            >
              <FontAwesomeIcon icon={faCircleArrowRight} className="h-6 w-6" />
              Register As Provider
            </Link>

            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-[#0f62fd] px-6 py-3 text-[20px] font-normal text-white "
            >
              <FontAwesomeIcon icon={faCircleArrowRight} className="h-6 w-6" />
              Become A Member
            </Link>
          </div>

          <p className="mt-5 flex items-start gap-2 text-[14px] leading-tight text-white">
            <ShieldIcon />
            <span>
              Trusted by over <b>10,000+</b> immigrants
              <br />
              in the U.S., Canada, and Europe
            </span>
          </p>
        </div>

        <div className="relative min-h-90 w-full lg:min-h-130">
          <Image
            src="/strongest-immigrant.webp"
            alt="Strongest immigrant visual"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="absolute inset-0 h-full w-full object-contain object-right"
          />
        </div>
      </div>
    </section>
  );
}
