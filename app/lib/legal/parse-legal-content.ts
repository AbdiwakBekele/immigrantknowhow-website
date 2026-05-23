export type LegalHeading = {
  id: string;
  title: string;
  level: 2 | 3;
};

const PRIVACY_SECTION_TITLES = new Set([
  "Personal and Non-Personal Information",
  "What is Non-Personal Information and how is it collected and used?",
  "What is personal information and how is it collected?",
  "Are cookies or other technologies used to collect personal information?",
  "How does Immigrant Knowhow use personal information?",
  "Does Immigrant Knowhow share personal information with others?",
  "How is personal information used for communication?",
  "How is personal information secured?",
  "Links",
  "How can a user access, change, and/or delete personal information?",
  "Children's Privacy",
  "Change",
  "Data Protection Policy",
  "Why This Policy Exists",
  "EU General Data Protection Regulation (GDPR) Protection Law",
  "Contact",
]);

const TERMS_SECTION_TITLES = new Set([
  "Intellectual property rights",
  "Acceptable Use",
  "Restricted Access",
  "Use of Testimonials",
  "Public Discussions",
  "Contact",
]);

const SUBHEADING_TITLES = new Set([
  "Collection of Information",
  "Information we collect automatically:",
  "This information includes:",
  "Our Security Procedures:",
]);

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 64);
}

function isNumberedSectionTitle(line: string) {
  return /^\d{1,2}\.\s/.test(line);
}

function isH2Line(line: string, sectionTitles: Set<string>) {
  return sectionTitles.has(line) || isNumberedSectionTitle(line);
}

function isH3Line(line: string) {
  return (
    SUBHEADING_TITLES.has(line) ||
    line === "Transferring Personal Data Outside of the EEA:"
  );
}

function parseBodyLinesForList(lines: string[]) {
  const listStart = lines.findIndex((l) => l.trim().startsWith("- "));
  if (listStart === -1) return null;
  const listLines = lines.slice(listStart);
  if (!listLines.every((l) => l.trim().startsWith("- "))) return null;
  return {
    before: lines.slice(0, listStart).join("\n").trim(),
    items: listLines.map((l) => l.replace(/^-+\s*/, "").trim()),
  };
}

function isConfidentialityDefinitionBlock(block: string) {
  const lines = block
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  return (
    lines.length === 3 &&
    lines[0].startsWith("Confidentiality:") &&
    lines[1].startsWith("Integrity:") &&
    lines[2].startsWith("Availability:")
  );
}

export type LegalBlockNode =
  | { kind: "h2"; id: string; text: string }
  | { kind: "h3"; id: string; text: string }
  | { kind: "p"; text: string }
  | { kind: "list"; before?: string; items: string[] }
  | { kind: "definitions"; lines: string[] };

export function parseLegalBody(
  body: string,
  sectionTitles: Set<string>
): { nodes: LegalBlockNode[]; headings: LegalHeading[] } {
  const blocks = body
    .trim()
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  const nodes: LegalBlockNode[] = [];
  const headings: LegalHeading[] = [];

  for (const block of blocks) {
    const lines = block.split("\n").map((l) => l.trimEnd());
    const first = lines[0]?.trim() ?? "";
    const singleLine = lines.length === 1;

    if (singleLine) {
      if (isH2Line(first, sectionTitles)) {
        const id = slugify(first);
        nodes.push({ kind: "h2", id, text: first });
        headings.push({ id, title: first, level: 2 });
        continue;
      }
      if (isH3Line(first)) {
        const id = slugify(first);
        nodes.push({ kind: "h3", id, text: first });
        headings.push({ id, title: first, level: 3 });
        continue;
      }
      nodes.push({ kind: "p", text: first });
      continue;
    }

    if (isH3Line(first) || first === "Transferring Personal Data Outside of the EEA:") {
      const id = slugify(first);
      nodes.push({ kind: "h3", id, text: first });
      headings.push({ id, title: first, level: 3 });
      const rest = lines.slice(1);
      const subParsed = parseBodyLinesForList(rest);
      if (subParsed) {
        if (subParsed.before) nodes.push({ kind: "p", text: subParsed.before });
        nodes.push({ kind: "list", items: subParsed.items });
      } else {
        nodes.push({ kind: "p", text: rest.join("\n").trim() });
      }
      continue;
    }

    if (isConfidentialityDefinitionBlock(block)) {
      nodes.push({
        kind: "definitions",
        lines: block.split("\n").map((l) => l.trim()).filter(Boolean),
      });
      continue;
    }

    const listParsed = parseBodyLinesForList(lines);
    if (listParsed) {
      if (listParsed.before) nodes.push({ kind: "p", text: listParsed.before });
      nodes.push({ kind: "list", items: listParsed.items });
      continue;
    }

    nodes.push({ kind: "p", text: block.trim() });
  }

  return { nodes, headings };
}

export function parsePrivacyContent(body: string) {
  return parseLegalBody(body, PRIVACY_SECTION_TITLES);
}

export function parseTermsContent(body: string) {
  return parseLegalBody(body, TERMS_SECTION_TITLES);
}
