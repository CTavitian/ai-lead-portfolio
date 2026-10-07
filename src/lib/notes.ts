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
    title: "A failed test should say which step failed",
    date: "2026-10-07",
    summary:
      "Why I check each step of an agent run instead of looking at one pass or fail.",
    body: [
      "A failing test only tells you something broke. Knowing that step 2 closed a defect before the inspection was recorded tells you what to fix.",
      "In ops-trajectory-rx I describe a run as a list of steps: observe, tool call, decision, approval and side effect. Rules then check each step, for example that an inspection comes before a close.",
      "The checker is plain rules, not a model, so it gives the same answer every time and runs in CI without an API key. Each failure gets one of eight labels, because skipping an inspection and approving without permission need different fixes.",
      "I still keep simple YAML test cases for quick checks. The step-by-step view is for when I need to know where a run went wrong.",
    ],
  },
  {
    slug: "fixtures-not-demos",
    title: "Why I write test cases before trusting an agent demo",
    date: "2026-10-06",
    summary:
      "A chat window hides the second edge case. Written test cases show what you expected.",
    body: [
      "Most agent demos look fine until you change one detail. The case that works on stage is not the whole job.",
      "I write cases in YAML: an input, what the answer must contain, and what it must not contain. It is dull, but I can run it again and get the same result.",
      "The fake agent keeps CI free and repeatable, and a real model is something you switch on yourself. If I cannot write a case down, I am not ready to automate it.",
      "That is why I built the eval harness: to catch a wrong answer, like skipping an inspection, before it reaches a supervisor.",
    ],
  },
  {
    slug: "picking-ai-work-in-ops",
    title: "How I choose what to automate in field service",
    date: "2026-10-06",
    summary:
      "Start with frequent, low-risk jobs. Anything with a legal sign-off stays with a person.",
    body: [
      "Field service has a lot of repeated paperwork: triage notes, schedule suggestions and summaries. These are good first jobs when the data is structured and a bad draft is easy to throw away.",
      "I would not automate anything tied to a legal obligation, or let a model close compliance paperwork without a person. That is how regulated work is meant to run.",
      "The ops-decision-cli project turns this into a score: pilot, defer or reject. A team lead can argue with a score, but a reject on licensed work should be hard to argue with.",
      "Do the simple version first. Anything more complicated can wait until one small step is clearly saving time.",
    ],
  },
];

export function getNote(slug: string): Note | undefined {
  return notes.find((n) => n.slug === slug);
}
