# Casper Tavitian: applied AI portfolio

Live site: https://ctavitian.github.io/ai-lead-portfolio/

I build the checks that decide whether an AI agent is safe to put near real work. The projects are small, tested and runnable without an API key. The domain is field-service operations, where a wrong action has a real cost.

![Home at 1440px](shots/home-1440.png)

## Projects

| Project | What it does |
| --- | --- |
| [ops-trajectory-rx](https://github.com/CTavitian/ops-trajectory-rx) | Finds the step where an agent run went wrong and names the failure mode (8-class taxonomy) |
| [agent-eval-harness](https://github.com/CTavitian/agent-eval-harness) | CLI that runs YAML eval suites against mock or live agents |
| [side-effect-replay](https://github.com/CTavitian/side-effect-replay) | Freezes agent runs into traces and gates CI on approval digests |
| [conformal-dispatch](https://github.com/CTavitian/conformal-dispatch) | Risk scoring that abstains (commit, escalate, hold) with measured coverage |

Smaller tools: `field-skill-forge`, `judgment-panel`, `mcp-tool-boundary`, `field-service-agent`, `ops-decision-cli`, `secure-ai-checklist`.

## This site

Static Next.js (App Router, TypeScript) export, no trackers, IBM Plex and Newsreader served locally. The eval harness lives in `tools/agent-eval-harness` and runs in CI before every deploy.

```bash
npm install
npm run test:harness
BASE_PATH= npm run build && npx serve out
```

`BASE_PATH` defaults to `/ai-lead-portfolio` for GitHub Pages. Set it empty for Vercel or a local preview at `/`.

## Licence

MIT (code). Writing stays with the author.
