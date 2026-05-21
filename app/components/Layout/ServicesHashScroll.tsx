"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import {
  scrollToServicesWhenReady,
  servicesHashIsActive,
} from "@/app/lib/services-scroll";

export default function ServicesHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const scrollIfNeeded = () => {
      if (!servicesHashIsActive()) {
        return;
      }

      scrollToServicesWhenReady();
    };

    scrollIfNeeded();
    window.addEventListener("hashchange", scrollIfNeeded);

    return () => window.removeEventListener("hashchange", scrollIfNeeded);
  }, [pathname]);

  return null;
}
