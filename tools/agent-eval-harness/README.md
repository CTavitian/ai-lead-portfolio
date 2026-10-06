# Agent evaluation harness

Small TypeScript CLI. Load a YAML or JSON suite, call a mock or live agent adapter, score each case with a rubric, print a report, and write JSON.

## Why

Agent demos in a chat window hide failures. Fixtures make expected behaviour explicit.

## Quick start

```bash
npm install
npm test
npm run eval -- --suite suites/ops-triage.yaml --adapter mock
```

Optional live model (OpenAI-compatible):

```bash
export AGENT_API_KEY=...
# optional: AGENT_API_BASE=https://api.openai.com/v1
# optional: AGENT_MODEL=gpt-4o-mini
npm run eval -- --suite suites/ops-triage.yaml --adapter openai
```

## Suite format

Each case has `id`, `input`, and `rubric`:

- `mustInclude` / `mustNotInclude`
- `minLength` / `maxLength`
- `jsonKeys` for structured answers

See `suites/ops-triage.yaml` for a field-service sample (scheduling, defect triage, refuse-unsafe).

## MCP stub

`src/mcp/stub.ts` defines a read-only `score_agent_output` tool shape. It is not a full MCP server.

## Licence

MIT
