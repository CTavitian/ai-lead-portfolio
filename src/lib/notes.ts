export type Note = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  body: string[];
};

export const notes: Note[] = [
  {
    slug: "localize-the-failure-step",
    title: "Pass/fail is not enough: localise the failure step",
    date: "2026-10-07",
    summary:
      "Trajectory invariants and a field-service failure taxonomy beat a single red checkmark.",
    body: [
      "A failing case is useful. Knowing that step 2 closed a defect without an inspection stamp is actionable. That gap is the difference between a suite runner and a diagnostic lab.",
      "ops-trajectory-rx keeps a small trajectory IR: observe, tool, decide, approve, side effect. Static invariants catch deny-list tools and inspect-before-close. Dynamic ones catch SLA-before-reschedule and asset mismatches.",
      "The mock judge is deterministic on purpose. CI stays green without API keys. Taxonomy labels (skip-inspection, approval-bypass, hallucinated-asset, and the rest) map to different fixes, not one generic \"agent failed.\"",
      "I still run YAML case suites. Trajectories sit on top when the question is where the run went wrong, not only whether it did.",
    ],
  },
  {
    slug: "abstain-when-uncertain",
    title: "Abstain when the interval is wide",
    date: "2026-10-07",
    summary:
      "Conformal prediction turns a risk score into commit, escalate, or hold, with honest coverage limits.",
    body: [
      "Point estimates invite overconfidence. For dispatch I want an interval and a prediction set. If low and high both look plausible, the system holds.",
      "conformal-dispatch scores risk from synthetic telemetry features, then applies split conformal calibration. The gate is boring: narrow low risk can commit (except criticality-3), high lean escalates, ambiguous sets hold.",
      "Tests check coverage against a target, not a marketing number. Fixtures are synthetic and labelled as such. That honesty matters more than a polished demo.",
      "Predictive work only belongs next to agents when uncertainty can refuse the action.",
    ],
  },
  {
    slug: "fixtures-not-demos",
    title: "Why agent demos fail without fixtures",
    date: "2026-10-06",
    summary:
      "A chat window hides the second edge case. Fixtures make expected behaviour explicit.",
    body: [
      "Most agent demos look fine until you change one detail. The happy path is not the product.",
      "I write cases as YAML: an input, a rubric, and a pass or fail. Required phrases, forbidden phrases, JSON keys. Boring on purpose.",
      "The mock adapter keeps CI free and deterministic. Live models are opt-in. If a behaviour cannot be written down, it is not ready to automate.",
      "That is why the eval harness exists. Not to impress anyone. To catch the skip-inspection answer before it reaches a supervisor.",
    ],
  },
  {
    slug: "picking-ai-work-in-ops",
    title: "How I pick AI work in regulated ops",
    date: "2026-10-05",
    summary:
      "High volume, low regret first. Statutory sign-off stays with people who hold the licence.",
    body: [
      "Field service is full of repeating paperwork: triage notes, schedule suggestions, digests. Those are good first bets when the data is structured and a bad draft is easy to undo.",
      "I refuse work that sits on a statutory obligation, or that would let a model close compliance paperwork without a human. That is not caution theatre. It is how regulated service actually works.",
      "The ops-decision scorer encodes that judgment as bands: pilot, defer, reject. A lead can argue with a score. They should not argue with a reject on licence-gated dispatch.",
      "Ship the boring version first. Fancy multi-agent graphs come after a single step that removes a recurring manual chore.",
    ],
  },
  {
    slug: "agents-as-junior-staff",
    title: "Treat agents like junior staff with limited access",
    date: "2026-10-04",
    summary:
      "Least privilege, read before write, dry-run before commit. Policy in code and tests.",
    body: [
      "Tool-using agents are useful and dangerous for the same reason: they can act. Giving a model send_email or shell_exec is like giving a new hire admin rights on day one.",
      "I keep an allow list in code. Read schedule. List defects. Propose a reschedule that still needs human approval. Denied tools stay denied even if a prompt asks nicely.",
      "Secrets stay on the host. Irreversible actions need a person. Logging is not optional.",
      "If a tool cannot be explained to an operations manager in one sentence, the scope is too wide.",
    ],
  },
];

export function getNote(slug: string): Note | undefined {
  return notes.find((n) => n.slug === slug);
}
