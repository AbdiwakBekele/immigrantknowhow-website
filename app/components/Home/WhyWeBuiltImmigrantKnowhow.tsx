import Image from "next/image";
import MemberCTABlock from "./MemberCTABlock";

export default function WhyWeBuiltImmigrantKnowhow() {
  return (
    <section className="bg-white  text-[#111] sm:py-15 py-15">
      <div className="mx-auto max-w-292.5 px-6 text-center lg:px-8">
        <h2 className="text-balance text-[32px] font-extrabold leading-tight tracking-tight text-black sm:text-[40px] lg:text-[44px]">
          Why We Built <span className="text-[#0f62fd]">Immigrant Knowhow</span>
        </h2>
        <p className="mx-auto mt-5 max-w-160 text-[17px] leading-relaxed  sm:mt-6 sm:text-[18px]">
          Because no one should have to start over alone. This platform exists
          to turn struggle into support, and isolation into connection.
        </p>

        <div className="mx-auto mt-5 max-w-[900px] sm:mt-12 lg:mt-5">
          <Image
            src="/Canada-1-1.webp"
            alt="Calgary skyline and city view"
            width={1200}
            height={675}
            className="h-auto w-full rounded-2xl object-cover shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
            sizes="(min-width: 1024px) 900px, 90vw"
          />
        </div>

        <div className="mx-auto mt-12 flex max-w-md flex-col items-center sm:mt-14 lg:mt-5">
          <MemberCTABlock align="center" />
        </div>
      </div>
    </section>
  );
}
