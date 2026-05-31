import MemberCTABlock from "./MemberCTABlock";
import { HOME_FEATURED_VIDEO_URL } from "@/app/home/shared/immigrant-resources-data";
import { youtubeVideoIdFromUrl } from "@/app/(browse)/community/community-utils";

const videoId = youtubeVideoIdFromUrl(HOME_FEATURED_VIDEO_URL);

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

        {videoId ? (
          <div className="ikh-video mx-auto mt-5 sm:mt-12 lg:mt-5">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Why We Built Immigrant Knowhow"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : null}

        <div className="mx-auto mt-12 flex max-w-md flex-col items-center sm:mt-14 lg:mt-5">
          <MemberCTABlock align="center" />
        </div>
      </div>
    </section>
  );
}
