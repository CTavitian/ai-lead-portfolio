import type { WorkItem } from "@/lib/site";

export type WorkDetail = WorkItem & {
  problem: string[];
  approach: string[];
  shipped: string[];
  measured: string[];
  decided: string[];
  differently: string[];
  diagram?: string;
};

export const workDetails: Record<string, WorkDetail> = {
  "agent-eval-harness": {
    slug: "agent-eval-harness",
    title: "Agent evaluation harness",
    blurb:
      "A small CLI that runs YAML test cases against a mock or live agent and scores the answers.",
    problem: [
      "Most agent demos look fine in a chat window and fall apart on the second edge case.",
      "I needed a way to write expected behaviour as fixtures, run them often, and see pass or fail without hand-waving.",
    ],
    approach: [
      "Build a tiny TypeScript CLI that loads a YAML suite, calls a pluggable agent adapter, and scores each case with rubric checks.",
      "Default adapter is a deterministic mock so the suite runs with no API key. An optional OpenAI-compatible adapter reads env vars when you want a live model.",
      "Keep the rubric boring: required keywords, forbidden phrases, JSON shape, and simple length bounds.",
    ],
    shipped: [
      "In-repo tool at tools/agent-eval-harness with npm run eval, sample ops suites, and vitest coverage.",
      "JSON report writer plus a plain console summary.",
      "Optional MCP tool stub so a host can call the same scorer later.",
    ],
    measured: [
      // TODO Overlord: confirm any real suite size / pass-rate numbers before publishing as facts
      "Suite size and pass rate stay in the report file. I do not invent public metrics here.",
      "Locally, the mock suite is expected to pass end to end on a clean checkout.",
    ],
    decided: [
      "Prefer fixtures over vibes. If a case cannot be written down, it is not ready to automate.",
      "Mock-first so CI stays free and deterministic. Live models are opt-in.",
      "Score what operators care about: wrong triage category, missing urgency, unsafe advice.",
    ],
    differently: [
      "Add golden-file diffs for longer answers.",
      "Wire the scorer into a real ticket queue once a workplace environment is available.",
    ],
    diagram: "eval-harness.svg",
  },
  "ops-automation": {
    slug: "ops-automation",
    title: "Ops automation for field service",
    blurb:
      "How I pick AI work in regulated, schedule-heavy operations, and what I leave alone.",
    problem: [
      "Field-service work is full of repeating paperwork: job triage, scheduling notes, defect summaries, compliance evidence packs.",
      "People waste time on copy-paste. Models waste time when you point them at jobs that need a licence, a signature, or a site walk.",
    ],
    approach: [
      "Start from the operating rhythm I already know: intake, triage, schedule, execute, close out.",
      "Automate the steps that are high volume and low regret. Leave regulated sign-off with humans.",
      "Use agents for draft triage and report glue. Keep the system of record authoritative.",
    ],
    shipped: [
      "Practical reporting and LLM-assisted workflows in day-to-day ops work, wrapped into small Python and SQL tools where the pattern stuck.",
      "A public sample suite in the eval harness for job-scheduling and defect-triage prompts.",
      // TODO Overlord: name any public Venode/Fire OS artefacts only if Casper approves disclosure
    ],
    measured: [
      // TODO Overlord: confirm qualitative claims only; no invented cycle-time or cost numbers
      "I track whether a workflow removes a recurring manual step, not whether a demo looked clever.",
      "If a draft still needs a full rewrite every time, the prompt or the process is wrong.",
    ],
    decided: [
      "Do not put a model between a technician and a statutory obligation.",
      "Prefer checkable outputs: structured fields, enums, and short summaries over long prose.",
      "Ship the boring version first. Fancy multi-agent graphs come after the single-step win.",
    ],
    differently: [
      "Push more evaluation into the live queue, not just offline fixtures.",
      "Separate customer-facing copy from internal ops notes more cleanly.",
    ],
    diagram: "ops-loop.svg",
  },
  "secure-ai-mcp": {
    slug: "secure-ai-mcp",
    title: "Secure AI and MCP tooling",
    blurb:
      "Guardrails, tool boundaries, and why I treat agents like junior staff with limited access.",
    problem: [
      "Tool-using agents are useful and dangerous for the same reason: they can act.",
      "MCP and similar bridges make it easy to hand a model a filesystem, a ticket API, or a browser. That needs the same care as giving a new hire admin rights.",
    ],
    approach: [
      "Least privilege by default. Read before write. Dry-run before commit.",
      "Put policy in code and tests, not in a system prompt that someone will edit later.",
      "Study Microsoft Applied Skills secure-AI patterns and Hugging Face MCP coursework, then apply the boring controls: scopes, allow-lists, audit logs.",
    ],
    shipped: [
      "MCP Course Unit 1 completed. Secure AI Applied Skills assessment passed.",
      "An MCP tool stub in the eval harness that exposes scoring as a tool call surface without opening arbitrary shell access.",
    ],
    measured: [
      // TODO Overlord: confirm any internal audit findings or red-team notes before citing
      "I measure security work by what the agent cannot do, and by whether denials are logged.",
      "A green demo with open tools is not a pass.",
    ],
    decided: [
      "No silent write tools in early pilots.",
      "Secrets stay in the host environment, never in prompts or repo files.",
      "If a tool cannot be explained to an operations manager in one sentence, it is too wide.",
    ],
    differently: [
      "Add formal allow-list tests per tool schema.",
      "Separate human-approval channels for irreversible actions.",
    ],
    diagram: "secure-mcp.svg",
  },
};
