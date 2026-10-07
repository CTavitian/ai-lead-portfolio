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
      "Trajectory IR for field-service agents. Finds the failing step and names the ops failure mode. TypeScript demo plus a Python core you can run with uv.",
    tags: ["TypeScript", "Python", "Evals"],
    repo: "https://github.com/CTavitian/ops-trajectory-rx",
    caseStudy: true,
  },
  {
    slug: "conformal-dispatch",
    title: "Conformal dispatch",
    blurb:
      "Risk scoring with conformal abstention: commit, escalate, or hold. Coverage is measured, not marketed. TypeScript demo plus a Python core you can run with uv.",
    tags: ["TypeScript", "Python", "Predictive"],
    repo: "https://github.com/CTavitian/conformal-dispatch",
    caseStudy: true,
  },
  {
    slug: "field-skill-forge",
    title: "Field skill forge",
    blurb:
      "Packages ops Agent Skills and binary-evals them behind fail-closed layers.",
    tags: ["TypeScript", "Skills"],
    repo: "https://github.com/CTavitian/field-skill-forge",
  },
  {
    slug: "side-effect-replay",
    title: "Side-effect replay",
    blurb:
      "Turns a bad agent run into an approval digest that CI can gate on.",
    tags: ["TypeScript", "Governance"],
    repo: "https://github.com/CTavitian/side-effect-replay",
  },
  {
    slug: "judgment-panel",
    title: "Judgment panel",
    blurb:
      "Routes commit, hold, or block across several judges and keeps an evidence ledger.",
    tags: ["TypeScript", "Governance"],
    repo: "https://github.com/CTavitian/judgment-panel",
  },
  {
    slug: "agent-eval-harness",
    title: "Agent evaluation harness",
    blurb:
      "CLI that runs YAML cases against a mock or live agent and scores the answers.",
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
      "Allow-listed tools plus a red-team suite that fails when something escapes.",
    tags: ["TypeScript", "MCP"],
    repo: "https://github.com/CTavitian/mcp-tool-boundary",
  },
  {
    slug: "field-service-agent",
    title: "Field-service agent",
    blurb:
      "Constrained triage agent over fixtures, held to eval cases.",
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
