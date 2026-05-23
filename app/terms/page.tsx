import type { Metadata } from "next";
import { LegalDocumentBody } from "@/app/components/Legal/LegalDocument";
import LegalPageLayout from "@/app/components/Legal/LegalPageLayout";
import { parseTermsContent } from "@/app/lib/legal/parse-legal-content";
import {
  TERMS_LAST_UPDATED,
  TERMS_OF_USE_BODY,
} from "@/app/lib/legal/terms-of-use";

export const metadata: Metadata = {
  title: "Terms of Use | Immigrant Knowhow",
  description:
    "Terms governing your use of the Immigrant Knowhow website, community, library, and provider directory.",
};

const { nodes, headings } = parseTermsContent(TERMS_OF_USE_BODY);

const legalTabs = [
  { href: "/terms", label: "Terms of Use", active: true },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Use"
      description="Rules for using our website, community discussions, library content, and related services."
      lastUpdated={TERMS_LAST_UPDATED}
      tabs={legalTabs}
      headings={headings}
    >
      <LegalDocumentBody nodes={nodes} />
    </LegalPageLayout>
  );
}
