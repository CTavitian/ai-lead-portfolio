# Casper Tavitian

Portfolio site: https://ctavitian.github.io/ai-lead-portfolio/

I have spent 14 years in construction and fire protection services, running estimating, service delivery and divisional budgets. I am now learning applied AI by building small tools: ways to test an agent, check what it did, and make it stop when it should not act alone. This repo is the site that collects that work.

![Home at 1440px](shots/home-1440.png)

## Projects

| Project | What it does |
| --- | --- |
| [ops-trajectory-rx](https://github.com/CTavitian/ops-trajectory-rx) | Checks an agent run step by step and names the type of mistake |
| [agent-eval-harness](https://github.com/CTavitian/agent-eval-harness) | Runs YAML test cases against a fake or real agent and scores the answers |
| [side-effect-replay](https://github.com/CTavitian/side-effect-replay) | Records what an agent did so CI can fail on an unapproved action |
| [conformal-dispatch](https://github.com/CTavitian/conformal-dispatch) | Scores risk and holds back when it is unsure |

The smaller projects are listed on the site. The sample data in all of them is made up and labelled as such.

## Running it

```bash
npm install
npm run test:harness
BASE_PATH= npm run build && npx serve out
```

`BASE_PATH` defaults to `/ai-lead-portfolio` for GitHub Pages. Leave it empty for a local preview.

Built with Next.js and TypeScript as a static export, with no trackers.

## Licence

MIT for the code. The writing is mine.
