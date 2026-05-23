import Link from "next/link";
import type { LegalBlockNode, LegalHeading } from "@/app/lib/legal/parse-legal-content";
import { CONTACT_PAGE_PATH } from "@/app/lib/site-links";

const linkClass =
  "font-medium text-[#0f62fd] underline decoration-[#0f62fd]/30 underline-offset-2 transition-colors hover:decoration-[#0f62fd]";

function LegalRichText({ text }: { text: string }) {
  const segments = text.split(
    /(https?:\/\/[^\s)]+|info@Immigrantknowhow\.com)/i
  );
  return (
    <>
      {segments.map((part, i) => {
        if (part.toLowerCase() === "info@immigrantknowhow.com") {
          return (
            <a key={i} href="mailto:info@Immigrantknowhow.com" className={linkClass}>
              {part}
            </a>
          );
        }
        if (/^https?:\/\//i.test(part)) {
          const href = part.replace(/[.,;:!?]+$/, "");
          return (
            <a
              key={i}
              href={href}
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              {part}
            </a>
          );
        }
        if (part.includes("Contact Us")) {
          const bits = part.split("Contact Us");
          return (
            <span key={i}>
              {bits[0]}
              <Link href={CONTACT_PAGE_PATH} className={linkClass}>
                Contact Us
              </Link>
              {bits.slice(1).join("Contact Us")}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="my-5 space-y-3 pl-0" role="list">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[16px] leading-relaxed text-[#2d2d2d]">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f62fd]"
            aria-hidden
          />
          <span>
            <LegalRichText text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function DefinitionBlock({ lines }: { lines: string[] }) {
  return (
    <div className="my-5 space-y-3 rounded-2xl border border-[#e5e7eb] bg-[#f5f8f8] p-5">
      {lines.map((line, i) => {
        const colon = line.indexOf(":");
        if (colon === -1) {
          return (
            <p key={i} className="text-[16px] leading-relaxed text-[#2d2d2d]">
              <LegalRichText text={line} />
            </p>
          );
        }
        const label = line.slice(0, colon + 1);
        const rest = line.slice(colon + 1).trim();
        return (
          <p key={i} className="text-[16px] leading-relaxed text-[#2d2d2d]">
            <span className="font-semibold text-[#111]">{label}</span>{" "}
            <LegalRichText text={rest} />
          </p>
        );
      })}
    </div>
  );
}

function LegalNode({ node }: { node: LegalBlockNode }) {
  switch (node.kind) {
    case "h2":
      return (
        <h2
          id={node.id}
          className="scroll-mt-28 border-t border-[#e5e7eb] pt-10 text-2xl font-extrabold tracking-tight text-[#111] first:border-t-0 first:pt-0 sm:text-[1.65rem]"
        >
          {node.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          id={node.id}
          className="scroll-mt-28 pt-8 text-xl font-bold tracking-tight text-[#111]"
        >
          {node.text}
        </h3>
      );
    case "p":
      return (
        <p className="mt-4 text-[16px] leading-[1.7] text-[#2d2d2d] whitespace-pre-line">
          <LegalRichText text={node.text} />
        </p>
      );
    case "list":
      return (
        <div>
          {node.before ? (
            <p className="mt-4 text-[16px] leading-[1.7] text-[#2d2d2d]">
              <LegalRichText text={node.before} />
            </p>
          ) : null}
          <LegalList items={node.items} />
        </div>
      );
    case "definitions":
      return <DefinitionBlock lines={node.lines} />;
    default:
      return null;
  }
}

type LegalDocumentProps = {
  nodes: LegalBlockNode[];
  headings: LegalHeading[];
};

export function LegalTableOfContents({ headings }: { headings: LegalHeading[] }) {
  const h2Headings = headings.filter((h) => h.level === 2);
  if (h2Headings.length === 0) return null;

  return (
    <nav aria-label="On this page" className="hidden lg:block">
      <p className="text-xs font-bold uppercase tracking-wider text-[#6b7280]">
        On this page
      </p>
      <ol className="mt-4 space-y-2 border-l border-[#e5e7eb] pl-4">
        {h2Headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="text-[14px] leading-snug text-[#555] transition-colors hover:text-[#0f62fd]"
            >
              {heading.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function LegalDocumentBody({ nodes }: Pick<LegalDocumentProps, "nodes">) {
  return (
    <article className="min-w-0">
      {nodes.map((node, idx) => (
        <LegalNode key={`${node.kind}-${idx}-${"text" in node ? node.text.slice(0, 24) : ""}`} node={node} />
      ))}
    </article>
  );
}
