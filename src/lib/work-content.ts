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
      "Checks an agent run step by step, finds where it went wrong and names the type of mistake. TypeScript demo plus a Python version.",
    tags: ["TypeScript", "Python", "Evals"],
    repo: "https://github.com/CTavitian/ops-trajectory-rx",
    problem: [
      "When an agent test fails, the report usually only says it failed. I wanted to know which step went wrong and why.",
      "On a field-service job, skipping an inspection and closing the wrong asset are different mistakes. They need different fixes.",
    ],
    approach: [
      "I wrote a simple format for a run: observe, tool call, decision, approval, side effect.",
      "Rules in YAML check each run, for example that an inspection happens before a defect is closed.",
      "The first serious rule break is matched to one of eight failure types. A plain rule-based checker does the matching, so it runs without an API key.",
    ],
    shipped: [
      "A command line checker with a field-service rule set and six sample runs, three that pass and three that fail.",
      "Tests that plant a mistake in a run and check the tool points at the right step.",
    ],
    measured: [
      "Each report says pass or fail, which step broke and which failure type it is.",
      "In the tests, the planted mistakes are found at the step where I put them.",
    ],
    decided: [
      "Rule-based checking first. An AI judge could be added later.",
      "I used job, crew and deadline terms in the format instead of generic chat terms.",
      "This is a learning project inspired by Microsoft's AgentRx research.",
    ],
    differently: [
      "Let each team plug in their own rule set.",
      "Export results in a format CI tools already read.",
    ],
  },
  "conformal-dispatch": {
    slug: "conformal-dispatch",
    title: "Conformal dispatch",
    blurb:
      "Scores risk, then decides to go ahead, escalate or hold, and holds back when it is unsure. Reports how often it was right. TypeScript demo plus a Python version.",
    tags: ["TypeScript", "Python", "Predictive"],
    repo: "https://github.com/CTavitian/conformal-dispatch",
    problem: [
      "A single risk score makes a system look more certain than it is.",
      "For dispatch decisions I wanted the system to be able to say it does not know and hand over to a person.",
    ],
    approach: [
      "Risk is scored from a few simple inputs: running hours, alarm rate, time since the last service and how critical the asset is.",
      "A method called split conformal prediction turns each score into a range and a set of likely outcomes.",
      "The set decides what happens: go ahead, escalate or hold. The most critical assets never go ahead on their own.",
    ],
    shipped: [
      "A command line tool, made-up sample data (labelled as made up in the README) and a backtest that reports how often the range was right.",
      "Tests allow a loose margin, because small samples are noisy.",
    ],
    measured: [
      "Every run reports the actual coverage against the target, and how many decisions of each kind it made.",
    ],
    decided: [
      "Holding back is a normal result, not an error.",
      "All the data is synthetic and the README says so.",
      "I only want a prediction next to an agent if it can stop the agent acting.",
    ],
    differently: [
      "Replace the simple scoring model with a properly calibrated one once real maintenance data is available.",
      "Feed hold decisions into the judgment panel project.",
    ],
  },
  "agent-eval-harness": {
    slug: "agent-eval-harness",
    title: "Agent evaluation harness",
    blurb:
      "Command line tool that runs YAML test cases against a fake or real agent and scores the answers.",
    tags: ["TypeScript", "CLI"],
    problem: [
      "Agent demos look fine in a chat window, then break on the second edge case.",
      "I wanted the expected behaviour written down as test cases I can run again and again.",
    ],
    approach: [
      "A small TypeScript tool reads a YAML file of cases, sends each one to an agent and scores the answer.",
      "The default agent is a fake one with fixed answers, so everything runs with no API key. You can point it at a real model that speaks the OpenAI API by setting environment variables.",
      "Scoring is simple: words that must appear, words that must not, the shape of the JSON and length limits.",
    ],
    shipped: [
      "The tool, a sample suite for field-service triage, and tests.",
      "A JSON report and a short summary in the terminal.",
      "A small MCP stub so another tool could call the scorer later.",
    ],
    measured: [
      "Each case passes or fails, and the report lists the checks that failed.",
      "The sample suite passes 4 of 4 against the fake agent on a fresh checkout.",
    ],
    decided: [
      "If I cannot write a case down, I am not ready to automate it.",
      "Fake agent by default, so tests are free and repeatable.",
      "Score what an operator cares about, like a wrong triage category or missing urgency.",
    ],
    differently: [
      "Compare longer answers against saved good ones.",
      "Try it on real tickets if I get access to a work environment.",
    ],
    diagram: "eval-harness.svg",
  },
  "ops-automation": {
    slug: "ops-automation",
    title: "Ops automation for field service",
    blurb:
      "How I decide which operations jobs are worth automating, and which I would leave to people.",
    tags: ["Write-up"],
    problem: [
      "Field-service work has a lot of repeated paperwork: job triage, scheduling notes, defect summaries and compliance records.",
      "People lose time copying and pasting. A model also wastes time if you point it at work that needs a licence, a signature or a site visit.",
    ],
    approach: [
      "I start from how the work already runs: intake, triage, schedule, do the job, close out.",
      "I automate the steps that happen often and are easy to undo. Regulated sign-off stays with people.",
      "A model drafts triage notes and report text. The system of record stays the source of truth.",
    ],
    shipped: [
      "Dashboards and an internal email risk-analysis tool for my own operations work.",
      "A sample suite in the eval harness for job scheduling and defect triage.",
    ],
    measured: [
      "I ask whether a workflow removes a manual step that keeps coming back, not whether a demo looked clever.",
      "If a draft needs a full rewrite every time, the prompt or the process is wrong.",
    ],
    decided: [
      "Never put a model between a technician and a legal obligation.",
      "Prefer outputs that can be checked: set fields, fixed options and short summaries.",
      "Do the simple version first. Multi-agent setups can wait until one step is clearly saving time.",
    ],
    differently: [
      "Test against the live queue, not only saved examples.",
      "Keep customer-facing text and internal notes separate.",
    ],
    diagram: "ops-loop.svg",
  },
  "secure-ai-mcp": {
    slug: "secure-ai-mcp",
    title: "Secure AI and MCP tooling",
    blurb:
      "Limiting what an agent can do, and why I treat it like a new starter with limited access.",
    tags: ["Write-up"],
    problem: [
      "An agent that can use tools is useful and risky for the same reason: it can act.",
      "MCP and similar connectors make it easy to give a model a filesystem, a ticket system or a browser. That deserves the same care as giving a new hire admin rights.",
    ],
    approach: [
      "Least access by default. Read before write. Dry run before commit.",
      "Put the rules in code and tests, not in a system prompt someone can edit later.",
      "I applied the basic controls from the courses I have done: scopes, allow-lists and audit logs.",
    ],
    shipped: [
      "Hugging Face agents and context courses completed.",
      "An MCP stub in the eval harness that offers scoring as a tool without opening up shell access.",
    ],
    measured: [
      "I judge security work by what the agent cannot do, and whether refusals are logged.",
      "A demo that works with every tool open is not a pass.",
    ],
    decided: [
      "No silent write tools in early trials.",
      "Secrets stay in the host environment, never in prompts or repo files.",
      "If I cannot explain a tool to an operations manager in one sentence, it has too much access.",
    ],
    differently: [
      "Add allow-list tests for each tool.",
      "Send irreversible actions through a separate human approval step.",
    ],
    diagram: "secure-mcp.svg",
  },
};
