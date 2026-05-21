import HomeFooter from "@/app/home/shared/HomeFooter";
import HomeHeader from "@/app/home/shared/HomeHeader";
import { joinUrl, loginUrl } from "@/app/home/shared/data";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HomeHeader
        joinUrl={joinUrl}
        loginUrl={loginUrl}
        logoSrc="/images/home/2024/05/ImmigrantsKnowHow-Logo.svg"
      />
      <main>{children}</main>
      <HomeFooter />
    </>
  );
}
