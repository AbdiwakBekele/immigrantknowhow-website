import type { Metadata } from "next";
import { LegalDocumentBody } from "@/app/components/Legal/LegalDocument";
import LegalPageLayout from "@/app/components/Legal/LegalPageLayout";
import { parsePrivacyContent } from "@/app/lib/legal/parse-legal-content";
import {
  PRIVACY_LAST_UPDATED,
  PRIVACY_POLICY_BODY,
} from "@/app/lib/legal/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy | Immigrant Knowhow",
  description:
    "How Immigrant Knowhow collects, uses, and protects your personal information, including GDPR-related practices.",
};

const { nodes, headings } = parsePrivacyContent(PRIVACY_POLICY_BODY);

const legalTabs = [
  { href: "/terms", label: "Terms of Use" },
  { href: "/privacy", label: "Privacy Policy", active: true },
];

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="How we collect, use, store, and protect information when you use Immigrant Knowhow."
      lastUpdated={PRIVACY_LAST_UPDATED}
      tabs={legalTabs}
      headings={headings}
    >
      <LegalDocumentBody nodes={nodes} />
    </LegalPageLayout>
  );
}
