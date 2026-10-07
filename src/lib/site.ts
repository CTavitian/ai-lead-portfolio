import { contact } from "./site.config";

export const site = {
  name: "Casper Tavitian",
  role: "Engineer, AI Enthusiast, Developer",
  github: contact.github,
  githubUser: contact.githubUser,
  linkedin: contact.linkedin,
  email: contact.email,
  repo: "https://github.com/CTavitian/ai-lead-portfolio",
  harnessRepo: "https://github.com/CTavitian/agent-eval-harness",
} as const;

export type WorkItem = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  /** Public GitHub repo when this work maps to a shipped project */
  repo?: string;
  /** Internal case-study page under /work/[slug] */
  caseStudy?: boolean;
};

export const work: WorkItem[] = [
  {
    slug: "ops-trajectory-rx",
    title: "Ops trajectory RX",
    blurb:
      "Trajectory IR for field-service agents: invariants, critical-step localization, failure taxonomy. TypeScript demo + Python core (runnable via uv).",
    tags: ["TypeScript", "Python", "Evals"],
    repo: "https://github.com/CTavitian/ops-trajectory-rx",
    caseStudy: true,
  },
  {
    slug: "conformal-dispatch",
    title: "Conformal dispatch",
    blurb:
      "Predictive risk with conformal abstention — commit, escalate, or hold. No fake accuracy claims. TypeScript demo + Python core (runnable via uv).",
    tags: ["TypeScript", "Python", "Predictive"],
    repo: "https://github.com/CTavitian/conformal-dispatch",
    caseStudy: true,
  },
  {
    slug: "field-skill-forge",
    title: "Field skill forge",
    blurb:
      "Package and binary-eval ops Agent Skills with fail-closed layers.",
    tags: ["TypeScript", "Skills"],
    repo: "https://github.com/CTavitian/field-skill-forge",
  },
  {
    slug: "side-effect-replay",
    title: "Side-effect replay",
    blurb:
      "Freeze bad agent runs into approval-digest CI gates.",
    tags: ["TypeScript", "Governance"],
    repo: "https://github.com/CTavitian/side-effect-replay",
  },
  {
    slug: "judgment-panel",
    title: "Judgment panel",
    blurb:
      "Multi-judge commit/hold/block router with an evidence ledger.",
    tags: ["TypeScript", "Governance"],
    repo: "https://github.com/CTavitian/judgment-panel",
  },
  {
    slug: "agent-eval-harness",
    title: "Agent evaluation harness",
    blurb:
      "CLI that runs YAML test cases against a mock or live agent and scores the answers.",
    tags: ["TypeScript", "CLI"],
    repo: "https://github.com/CTavitian/agent-eval-harness",
    caseStudy: true,
  },
  {
    slug: "ops-decision-cli",
    title: "Ops decision CLI",
    blurb:
      "Scores candidate automation jobs for regulated field-service work. Pure logic, no model.",
    tags: ["TypeScript", "CLI"],
    repo: "https://github.com/CTavitian/ops-decision-cli",
  },
  {
    slug: "mcp-tool-boundary",
    title: "MCP tool boundary",
    blurb:
      "Allow-listed tools with a red-team suite that fails on escapes.",
    tags: ["TypeScript", "MCP"],
    repo: "https://github.com/CTavitian/mcp-tool-boundary",
  },
  {
    slug: "field-service-agent",
    title: "Field-service agent",
    blurb:
      "Constrained triage agent over fixtures, gated by eval cases.",
    tags: ["TypeScript", "Agents"],
    repo: "https://github.com/CTavitian/field-service-agent",
  },
  {
    slug: "secure-ai-checklist",
    title: "Secure AI checklist",
    blurb:
      "Checklist CLI for tool authZ, logging, PII redaction, and approval gates.",
    tags: ["TypeScript", "CLI"],
    repo: "https://github.com/CTavitian/secure-ai-checklist",
  },
  {
    slug: "ops-automation",
    title: "Ops automation for field service",
    blurb:
      "How I pick AI work in regulated, schedule-heavy operations, and what I leave alone.",
    tags: ["Write-up"],
    caseStudy: true,
  },
];
