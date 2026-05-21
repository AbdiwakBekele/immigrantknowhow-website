import { apiEndpoints } from "./config";

export type PublicDvLotteryContent = {
  title: string;
  short_description: string;
  description: string;
  official_url: string;
  cta_label: string;
  warning_text: string | null;
  open_from: string | null;
  open_to: string | null;
  is_open: boolean;
  is_closed: boolean;
  is_closing_soon: boolean;
  show_in_menu: boolean;
  status_message: string | null;
};

const defaultContent: PublicDvLotteryContent = {
  title: "DV Lottery",
  short_description:
    "Official Diversity Visa information from the U.S. Department of State.",
  description:
    "Always submit applications through the official U.S. Department of State portal.",
  official_url: "https://dvprogram.state.gov/",
  cta_label: "Open Official DV Lottery Website",
  warning_text: null,
  open_from: null,
  open_to: null,
  is_open: false,
  is_closed: false,
  is_closing_soon: false,
  show_in_menu: true,
  status_message: null,
};

export async function fetchPublicDvLotteryContent(): Promise<PublicDvLotteryContent> {
  try {
    const response = await fetch(apiEndpoints.publicDvLottery, {
      method: "GET",
      headers: { Accept: "application/json" },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return defaultContent;
    }

    const payload = (await response.json()) as Partial<PublicDvLotteryContent>;

    return {
      ...defaultContent,
      ...payload,
    };
  } catch {
    return defaultContent;
  }
}
