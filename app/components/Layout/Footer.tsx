import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBuilding,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const quickLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "/contact" },
];

const socialItems: { label: string; href: string; icon: IconDefinition }[] = [
  { label: "Instagram", href: "#", icon: faInstagram },
  { label: "X", href: "#", icon: faXTwitter },
  { label: "LinkedIn", href: "#", icon: faLinkedinIn },
  { label: "YouTube", href: "#", icon: faYoutube },
  { label: "Facebook", href: "#", icon: faFacebookF },
  { label: "TikTok", href: "#", icon: faTiktok },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 px-6 py-16 lg:px-20 ">
      <div className="mx-auto max-w-292.5">
        <div className="grid gap-6 md:grid-cols-2  lg:grid-cols-[1.2fr_0.6fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <Link href="/">
              <Image
                src="/Logo.svg"
                alt="Immigrant Knowhow"
                width={160}
                height={53.3}
                priority
              />
            </Link>
            <p className="text-[16px] leading-[1.6] text-[#333] font-light max-w-[320px]">
              Immigrant Knowhow is where real support meets real community. We
              help immigrants navigate life in a new country through trusted
              services, expert guidance, and meaningful human connection,
              starting in the U.S., Canada, Great Britain and Europe.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-[22px] font-bold text-black">Links</h3>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[16px] text-[#333] transition-colors hover:text-[#0f62fd]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-[22px] font-bold text-black">Promise</h3>
            <p className="text-[16px] leading-[1.6] text-[#333] font-light max-w-[320px]">
              We&apos;re here to make immigration feel less isolating and more
              empowering. By combining practical tools, real human connection,
              and community-driven support, we help you take control of your
              journey, wherever it begins.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-[22px] font-bold text-black">Contact</h3>
            <div className="flex flex-col gap-5 text-[16px] text-[#333]">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faBuilding}
                  aria-hidden="true"
                  className="translate-y-1 text-[#0f62fd]"
                />
                <span className="font-bold text-black text-[18px]">
                  Immigrant Knowhow
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="translate-y-1 text-[#0f62fd]"
                  aria-hidden="true"
                />
                <span className="font-light">
                  767 Broadway #1627
                  <br />
                  Manhattan, NY 10003
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#0f62fd]"
                  aria-hidden="true"
                />
                <a href="tel:6464665505" className="hover:text-[#0f62fd]">
                  (646) 466 5505
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-[#0f62fd]"
                  aria-hidden="true"
                />
                <a
                  href="mailto:hi@immigrantknowhow.com"
                  className="hover:text-[#0f62fd]"
                >
                  hi@immigrantknowhow.com
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {socialItems.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-[#0f62fd] flex items-center justify-center text-white transition-opacity hover:opacity-80"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8 text-[16px] text-[#555]">
            <p>© Immigrant Knowhow</p>
            <Link href="/terms-of-use" className="hover:text-black transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-black transition-colors">
              Privacy
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Image
              src="/company.svg"
              alt="Designer Logo"
              width={32}
              height={32}
            />
            <div className="w-px h-8 bg-black" />
            <div className="text-[14px] leading-tight text-black font-medium  tracking-tight">
              Web Design
              <br />
              Company
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
