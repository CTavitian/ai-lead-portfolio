import { contact } from "./site.config";

export const site = {
  name: "Casper Tavitian",
  role: "Engineer/Operations/AI Enthusiast",
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

/** Shown first on the home page; everything else sits under smaller tools. */
export const featuredSlugs = [
  "ops-trajectory-rx",
  "agent-eval-harness",
  "side-effect-replay",
  "conformal-dispatch",
] as const;

export const work: WorkItem[] = [
  {
    slug: "ops-trajectory-rx",
    title: "Ops trajectory RX",
    blurb:
      "Checks an agent run step by step, finds where it went wrong and names the type of mistake. TypeScript demo plus a Python version.",
    tags: ["TypeScript", "Python", "Evals"],
    repo: "https://github.com/CTavitian/ops-trajectory-rx",
    caseStudy: true,
  },
  {
    slug: "conformal-dispatch",
    title: "Conformal dispatch",
    blurb:
      "Scores risk and returns commit, escalate or hold. On my sample data it holds every asset, which is the open problem. TypeScript demo plus a Python version.",
    tags: ["TypeScript", "Python", "Predictive"],
    repo: "https://github.com/CTavitian/conformal-dispatch",
    caseStudy: true,
  },
  {
    slug: "field-skill-forge",
    title: "Field skill forge",
    blurb:
      "Packages small field-service skills for an agent and tests them with pass or fail checks.",
    tags: ["TypeScript", "Skills"],
    repo: "https://github.com/CTavitian/field-skill-forge",
  },
  {
    slug: "side-effect-replay",
    title: "Side-effect replay",
    blurb:
      "Saves what an agent did in a run so a CI check can fail when it took an action nobody approved.",
    tags: ["TypeScript", "Governance"],
    repo: "https://github.com/CTavitian/side-effect-replay",
  },
  {
    slug: "judgment-panel",
    title: "Judgment panel",
    blurb:
      "Asks several judges to approve, hold or block an action and keeps a record of why.",
    tags: ["TypeScript", "Governance"],
    repo: "https://github.com/CTavitian/judgment-panel",
  },
  {
    slug: "agent-eval-harness",
    title: "Agent evaluation harness",
    blurb:
      "Command line tool that runs YAML test cases against a fake or real agent and scores the answers.",
    tags: ["TypeScript", "CLI"],
    repo: "https://github.com/CTavitian/agent-eval-harness",
    caseStudy: true,
  },
  {
    slug: "ops-decision-cli",
    title: "Ops decision CLI",
    blurb:
      "Scores which field-service jobs are sensible to automate. Plain logic, no model.",
    tags: ["TypeScript", "CLI"],
    repo: "https://github.com/CTavitian/ops-decision-cli",
  },
  {
    slug: "mcp-tool-boundary",
    title: "MCP tool boundary",
    blurb:
      "Lets an agent use only an approved list of tools, with tests that fail if it gets around the list.",
    tags: ["TypeScript", "MCP"],
    repo: "https://github.com/CTavitian/mcp-tool-boundary",
  },
  {
    slug: "field-service-agent",
    title: "Field-service agent",
    blurb:
      "A small triage agent held to a set of test cases.",
    tags: ["TypeScript", "Agents"],
    repo: "https://github.com/CTavitian/field-service-agent",
  },
  {
    slug: "secure-ai-checklist",
    title: "Secure AI checklist",
    blurb:
      "Checklist tool for tool permissions, logging, hiding personal data and approval steps.",
    tags: ["TypeScript", "CLI"],
    repo: "https://github.com/CTavitian/secure-ai-checklist",
  },
  {
    slug: "ops-automation",
    title: "Ops automation for field service",
    blurb:
      "How I decide which operations jobs are worth automating, and which I would leave to people.",
    tags: ["Write-up"],
    caseStudy: true,
  },
];
