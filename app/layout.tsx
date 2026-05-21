import type { Metadata } from "next";
import "./globals.css";
import SiteChrome from "@/app/components/Layout/SiteChrome";
import GTranslateWidget from '@/components/GTranslateWidget';

export const metadata: Metadata = {
  title: "Home - Immigrants KnowHow",
  description:
    "Find trusted services, practical guidance, and community support for immigrants in the U.S., Canada, Great Britain, and Europe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">
        <SiteChrome>{children}</SiteChrome>
        <GTranslateWidget />
      </body>
    </html>
  );
}
