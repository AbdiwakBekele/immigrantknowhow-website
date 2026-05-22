import HomeFooter from "@/app/home/shared/HomeFooter";
import HomeHeader from "@/app/home/shared/HomeHeader";
import { joinUrl, loginUrl } from "@/app/home/shared/data";

import HomeHashScroll from "./HomeHashScroll";

const SITE_LOGO_SRC = "/images/home/2024/05/ImmigrantsKnowHow-Logo.svg";

export default function SiteChrome({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HomeHeader
        joinUrl={joinUrl}
        loginUrl={loginUrl}
        logoSrc={SITE_LOGO_SRC}
      />
      <HomeHashScroll />
      {children}
      <HomeFooter />
    </>
  );
}
