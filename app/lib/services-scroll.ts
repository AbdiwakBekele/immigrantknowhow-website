import { SERVICES_SECTION_PATH } from "@/app/lib/site-links";

export const SERVICES_SECTION_ID = "services";

export function scrollToServicesSection() {
  requestAnimationFrame(() => {
    document.getElementById(SERVICES_SECTION_ID)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

export function hasServicesSectionOnPage(): boolean {
  return Boolean(document.getElementById(SERVICES_SECTION_ID));
}

export function scrollToServicesWhenReady(maxAttempts = 24, delayMs = 50) {
  let attempts = 0;

  const tryScroll = () => {
    if (hasServicesSectionOnPage()) {
      scrollToServicesSection();
      return;
    }

    if (attempts < maxAttempts) {
      attempts += 1;
      window.setTimeout(tryScroll, delayMs);
    }
  };

  tryScroll();
}

export function servicesHashIsActive(): boolean {
  return typeof window !== "undefined" && window.location.hash === "#services";
}

export { SERVICES_SECTION_PATH };
