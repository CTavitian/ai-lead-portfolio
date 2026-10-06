#!/usr/bin/env node
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { getAdapter } from "../adapters/index.js";
import { loadSuite } from "../loadSuite.js";
import { runSuite } from "../runSuite.js";

function usage(): never {
  console.log(`Usage: agent-eval --suite <file> [--adapter mock|openai] [--out <report.json>]

Defaults:
  --adapter mock
  --out reports/latest.json
`);
  process.exit(1);
}

function argValue(args: string[], flag: string): string | undefined {
  const i = args.indexOf(flag);
  if (i === -1) return undefined;
  return args[i + 1];
}

async function main() {
  const args = process.argv.slice(2);
  if (args.includes("--help") || args.includes("-h")) usage();

  const suitePath = argValue(args, "--suite");
  if (!suitePath) usage();

  const adapterName = argValue(args, "--adapter") ?? "mock";
  const outPath = argValue(args, "--out") ?? "reports/latest.json";

  const suite = await loadSuite(path.resolve(suitePath));
  const adapter = getAdapter(adapterName);
  const result = await runSuite(suite, adapter);

  await mkdir(path.dirname(path.resolve(outPath)), { recursive: true });
  await writeFile(path.resolve(outPath), JSON.stringify(result, null, 2) + "\n", "utf8");

  console.log(`Suite: ${result.suite}`);
  console.log(`Adapter: ${result.adapter}`);
  console.log(`Passed: ${result.passed}`);
  console.log(`Failed: ${result.failed}`);
  for (const c of result.cases) {
    const mark = c.pass ? "PASS" : "FAIL";
    console.log(`  [${mark}] ${c.id}`);
    if (!c.pass) {
      for (const f of c.failures) console.log(`         - ${f}`);
    }
  }
  console.log(`Report: ${path.resolve(outPath)}`);

  if (result.failed > 0) process.exit(2);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
