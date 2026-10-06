import { contact } from "./site.config";

export const site = {
  name: "Casper Tavitian",
  role: "AI Implementation Lead",
  location: "Sydney, Australia",
  github: contact.github,
  githubUser: contact.githubUser,
  linkedin: contact.linkedin,
  email: contact.email,
  repo: "https://github.com/CTavitian/ai-lead-portfolio",
  workRights: "Sydney-based, full Australian work rights",
} as const;

export type WorkItem = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
};

export const work: WorkItem[] = [
  {
    slug: "agent-eval-harness",
    title: "Agent evaluation harness",
    blurb:
      "A small CLI that runs YAML test cases against a mock or live agent and scores the answers.",
    tags: ["TypeScript", "CLI"],
  },
  {
    slug: "ops-automation",
    title: "Ops automation for field service",
    blurb:
      "How I pick AI work in regulated, schedule-heavy operations, and what I leave alone.",
    tags: ["Write-up"],
  },
  {
    slug: "secure-ai-mcp",
    title: "Secure AI and MCP tooling",
    blurb:
      "Guardrails, tool boundaries, and why I treat agents like junior staff with limited access.",
    tags: ["Write-up"],
  },
];
