import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { HUB_REGISTER_URL, MEMBER_CTA_LABEL } from "@/app/lib/hub-links";

function ShieldIcon() {
  return <FontAwesomeIcon icon={faShieldHalved} className="h-5 w-5 shrink-0" />;
}

type MemberCTABlockProps = {
  align?: "start" | "center";
  showTrustText?: boolean;
};

export default function MemberCTABlock({
  align = "start",
  showTrustText = true,
}: MemberCTABlockProps) {
  const centered = align === "center";

  return (
    <div
      className={
        centered ? "flex flex-col items-center text-center" : undefined
      }
    >
      <Link
        href={HUB_REGISTER_URL}
        className={
          centered
            ? "inline-flex items-center gap-2 rounded-full bg-[#0f62fd] px-6 py-3 text-[20px] font-normal text-white !text-white"
            : "mt-8 inline-flex items-center gap-2 rounded-full bg-[#0f62fd] px-6 py-3 text-[20px] font-normal text-white !text-white"
        }
      >
        <FontAwesomeIcon icon={faCircleArrowRight} className="h-6 w-6" />
        {MEMBER_CTA_LABEL}
      </Link>

      {showTrustText && (
        <p
          className={
            centered
              ? "mt-5 flex max-w-md items-start justify-center gap-2 text-[14px] leading-tight text-[#111]"
              : "mt-5 flex items-start gap-2 text-[14px] leading-tight text-[#111]"
          }
        >
          <ShieldIcon />
          <span className={centered ? "text-left" : undefined}>
            Trusted by over <b>10,000+</b> immigrants
            <br />
            in the U.S., Canada, and Europe
          </span>
        </p>
      )}
    </div>
  );
}
