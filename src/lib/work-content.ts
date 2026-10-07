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
  "ops-trajectory-rx": {
    slug: "ops-trajectory-rx",
    title: "Ops trajectory RX",
    blurb:
      "Trajectory IR for field-service agents. Finds the failing step and names the ops failure mode. TypeScript demo plus a Python core you can run with uv.",
    tags: ["TypeScript", "Python", "Evals"],
    repo: "https://github.com/CTavitian/ops-trajectory-rx",
    problem: [
      "A failed eval case tells you something broke. It rarely says which step broke, or which ops failure mode it was.",
      "In field service, skip-inspection, approval bypass, and wrong-asset actions need different fixes. One red checkmark conflates them.",
    ],
    approach: [
      "I defined a small trajectory.v1 IR: observe, tool, decide, approve, side_effect.",
      "Static and dynamic invariants live in YAML (inspect-before-close, deny tools, SLA before reschedule, asset match).",
      "The first critical violation is localised into an eight-class taxonomy by a deterministic mock judge. No API key needed for CI.",
    ],
    shipped: [
      "Public repo CTavitian/ops-trajectory-rx: checker CLI, field-service policy, six fixture traces (three pass / three fail).",
      "Vitest coverage that proves planted bugs localise to the expected step and class.",
    ],
    measured: [
      "Each run reports passed/failed, critical_step index, and taxonomy label in JSON.",
      "Planted skip-inspection and hallucinated-asset fixtures localise to the intended steps in tests.",
    ],
    decided: [
      "Deterministic judges first. LLM judges stay optional adapters.",
      "Domain vocabulary in the schema (job_id, crew, SLA) beats generic chat traces.",
      "Not a hosted observability product, and not a full AgentRx clone.",
    ],
    differently: [
      "Add dynamic invariant plugins per customer policy pack.",
      "Export JUnit for trajectory gates beside case-suite gates.",
    ],
  },
  "conformal-dispatch": {
    slug: "conformal-dispatch",
    title: "Conformal dispatch",
    blurb:
      "Risk scoring with conformal abstention: commit, escalate, or hold. Coverage is measured, not marketed. TypeScript demo plus a Python core you can run with uv.",
    tags: ["TypeScript", "Python", "Predictive"],
    repo: "https://github.com/CTavitian/conformal-dispatch",
    problem: [
      "Automation commit decisions based on a single risk score invite overconfidence.",
      "Regulated dispatch needs an explicit abstain path when the model is unsure.",
    ],
    approach: [
      "Failure risk is scored from simple telemetry features (runtime hours, alarm rate, PM age, criticality).",
      "Split conformal calibration wraps each score so every asset gets an interval and a prediction set.",
      "Sets map to commit / escalate / hold. Criticality-3 never auto-commits.",
    ],
    shipped: [
      "Public repo CTavitian/conformal-dispatch: CLI, synthetic fixtures, backtest summary with empirical coverage.",
      "Tests use a loose coverage band. Honest about finite-sample noise, not a fabricated 98% claim.",
    ],
    measured: [
      "Holdout empirical coverage is reported against target 1−α on every CLI run.",
      "Decision counts (commit/escalate/hold) land in the JSON report.",
    ],
    decided: [
      "Abstention is a first-class outcome, not an error.",
      "Synthetic fixtures must be labelled as synthetic in the README.",
      "Predictive work sits next to agents only when uncertainty can refuse the action.",
    ],
    differently: [
      "Swap the toy logistic score for a calibrated model once real CMMS extracts exist.",
      "Wire hold decisions into the judgment panel evidence ledger.",
    ],
  },
  "agent-eval-harness": {
    slug: "agent-eval-harness",
    title: "Agent evaluation harness",
    blurb:
      "CLI that runs YAML cases against a mock or live agent and scores the answers.",
    tags: ["TypeScript", "CLI"],
    problem: [
      "Most agent demos look fine in a chat window and fall apart on the second edge case.",
      "I needed expected behaviour as fixtures I can re-run, with a clear pass or fail and no hand-waving.",
    ],
    approach: [
      "A small TypeScript CLI loads a YAML suite, calls a pluggable agent adapter, and scores each case with rubric checks.",
      "The default adapter is a deterministic mock, so the suite runs with no API key. An optional OpenAI-compatible adapter reads env vars when you want a live model.",
      "The rubric stays boring: required keywords, forbidden phrases, JSON shape, and simple length bounds.",
    ],
    shipped: [
      "Public repo CTavitian/agent-eval-harness: CLI, sample ops suites, and vitest coverage.",
      "JSON report writer plus a plain console summary.",
      "Optional MCP tool stub so a host can call the same scorer later.",
    ],
    measured: [
      // TODO Overlord: confirm any real suite size / pass-rate numbers before publishing as facts
      "Each run writes pass or fail per case, with the exact rubric checks that failed, to a JSON report.",
      "The sample ops suite passes 4 of 4 against the mock adapter on a clean checkout.",
    ],
    decided: [
      "If a case cannot be written down as a fixture, it is not ready to automate.",
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
    tags: ["Write-up"],
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
      // TODO Overlord: name any public Fire OS artefacts only if Casper approves disclosure
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
    tags: ["Write-up"],
    problem: [
      "Tool-using agents are useful and dangerous for the same reason: they can act.",
      "MCP and similar bridges make it easy to hand a model a filesystem, a ticket API, or a browser. That needs the same care as giving a new hire admin rights.",
    ],
    approach: [
      "Least privilege by default. Read before write. Dry-run before commit.",
      "Put policy in code and tests, not in a system prompt that someone will edit later.",
      "I studied Microsoft Applied Skills secure-AI patterns and Hugging Face MCP coursework, then applied the boring controls: scopes, allow-lists, audit logs.",
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
