import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { HUB_REGISTER_URL } from "@/app/lib/hub-links";

const BRAND_BLUE = "#1D61E7";

export default function SupportMovesCTA() {
  return (
    <section className="relative overflow-x-hidden pt-16 pb-10 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/Call-to-action-BG-1.webp"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto max-w-292.5 px-3 sm:px-4 lg:px-5">
        <div className="overflow-visible rounded-[32px] border border-white/15 bg-black/50 px-4 py-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-[border-color,box-shadow] duration-300 ease-out hover:border-white/25 hover:shadow-[0_28px_90px_rgba(0,0,0,0.4)] sm:px-5 sm:py-6 lg:px-6 lg:py-7">
          <div className="grid items-end gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)_minmax(0,1.05fr)] lg:gap-5 xl:gap-7">
            <div className="order-2 max-w-xl text-left text-white lg:order-1 lg:pb-2">
              <h2 className="text-balance text-[26px] font-extrabold leading-[1.12] tracking-tight sm:text-[32px] lg:text-[36px] xl:text-[40px]">
                Support That <span style={{ color: BRAND_BLUE }}>Moves</span>{" "}
                With You
              </h2>
              <p className="mt-5 text-[15px] font-normal leading-[1.65] text-white/92 sm:mt-6 sm:text-[16px] lg:text-[17px]">
                Immigrant Knowhow brings together trusted services and real
                community, so wherever you land, you&apos;re never starting from
                zero. From local help to peer advice, we&apos;re here to make
                life easier, one connection at a time.
              </p>
            </div>

            <div className="relative order-1 flex min-h-0 w-full justify-center self-stretch lg:order-2 lg:-mx-1 lg:px-0 xl:-mx-2">
              <div className="relative flex w-full max-w-[789px] items-end justify-center lg:-mt-12 lg:-mb-2 xl:-mt-16 xl:-mb-3 2xl:-mt-20">
                <Image
                  src="/Call-to-action-Image-1.webp"
                  alt="Couple with passports and luggage"
                  width={789}
                  height={943}
                  className="h-auto w-full max-w-[789px] cursor-default object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                  sizes="(max-width: 789px) 100vw, 789px"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Right — subhead, copy, CTA, trust */}
            <div className="order-3 flex flex-col text-left text-white lg:pb-2">
              <h3 className="text-[18px] font-bold leading-snug text-white sm:text-[19px] lg:text-[20px]">
                Built for Real Connections
              </h3>
              <p className="mt-4 text-[15px] font-normal leading-[1.6] text-white/90 sm:text-[16px]">
                Find people who understand your story. Ask questions, offer
                help, and feel part of something bigger.
              </p>
              <Link
                href={HUB_REGISTER_URL}
                className="mt-7 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-[18px] font-semibold text-white shadow-[0_10px_28px_rgba(29,97,231,0.45)] transition-[transform,box-shadow,filter] duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_14px_36px_rgba(29,97,231,0.55)] active:scale-[0.98] sm:mt-8 sm:text-[20px]"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="h-6 w-6 shrink-0"
                />
                Join Now!
              </Link>
              <p className="mt-6 flex max-w-sm items-start gap-2 self-end text-left text-[13px] leading-snug text-white/85 sm:text-[14px]">
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="mt-0.5 h-4 w-4 shrink-0 text-white/90"
                />
                <span>
                  Trusted by over <b className="font-bold">10,000+</b>{" "}
                  immigrants in the U.S., Canada, and Europe
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
