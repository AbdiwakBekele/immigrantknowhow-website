import { redirect } from "next/navigation";
import { APPLE_STANDARD_EULA_URL } from "@/app/lib/site-links";

export default function TermsPage() {
  redirect(APPLE_STANDARD_EULA_URL);
}
