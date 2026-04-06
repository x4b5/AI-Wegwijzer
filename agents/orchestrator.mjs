#!/usr/bin/env node

/**
 * Agent Orchestrator
 *
 * Coordinates the 4 specialized agents:
 * 1. Quality Auditor — programmatic quality checks
 * 2. Content Researcher — content analysis and gap identification
 * 3. Content Writer — content creation and updates
 * 4. Site Builder — build validation and output analysis
 *
 * Modes:
 * - audit:    only Quality Auditor
 * - research: Content Researcher
 * - write:    Content Writer
 * - build:    Site Builder
 * - full:     all agents in sequence: audit → research → write → build → audit
 */

import { runAudit } from './quality-auditor.mjs';
import { runResearch } from './content-researcher.mjs';
import { runWriter } from './content-writer.mjs';
import { runBuilder } from './site-builder.mjs';
import { writeReport, generateMarkdownReport, formatTimestamp } from './lib/report.mjs';

const AGENT_NAME = 'orchestrator';

function parseArgs() {
  const args = process.argv.slice(2);
  const options = { mode: 'audit' };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--mode' && args[i + 1]) {
      options.mode = args[++i];
    }
    if (args[i] === '--topic' && args[i + 1]) {
      options.topic = args[++i];
    }
    if (args[i] === '--category' && args[i + 1]) {
      options.category = args[++i];
    }
  }

  return options;
}

async function runMode(mode, options = {}) {
  const startTime = Date.now();
  const results = {};

  console.log(`\n${'='.repeat(60)}`);
  console.log(`  AI-Wegwijzer Agent Orchestrator`);
  console.log(`  Mode: ${mode}`);
  console.log(`  Tijd: ${formatTimestamp()}`);
  console.log(`${'='.repeat(60)}\n`);

  switch (mode) {
    case 'audit':
      console.log('--- Fase: Quality Audit ---');
      results.audit = await runAudit();
      break;

    case 'research':
      console.log('--- Fase: Content Research ---');
      results.research = await runResearch();
      break;

    case 'write':
      console.log('--- Fase: Content Writing ---');
      results.write = await runWriter(options);
      break;

    case 'build':
      console.log('--- Fase: Site Build ---');
      results.build = await runBuilder();
      break;

    case 'full':
      console.log('--- Fase 1/5: Initial Audit ---');
      results.auditBefore = await runAudit();

      console.log('\n--- Fase 2/5: Research ---');
      results.research = await runResearch();

      console.log('\n--- Fase 3/5: Writing ---');
      results.write = await runWriter(options);

      console.log('\n--- Fase 4/5: Build ---');
      results.build = await runBuilder();

      console.log('\n--- Fase 5/5: Final Audit ---');
      results.auditAfter = await runAudit();
      break;

    default:
      console.error(`Onbekende mode: ${mode}`);
      console.error('Beschikbare modes: audit, research, write, build, full');
      process.exit(1);
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

  // Generate summary
  const summaryItems = [`Mode: ${mode}`, `Duur: ${elapsed}s`];

  if (results.audit || results.auditBefore) {
    const audit = results.audit || results.auditBefore;
    summaryItems.push(`Audit: ${audit.summary.errors} fouten, ${audit.summary.warnings} waarschuwingen`);
  }
  if (results.research) {
    summaryItems.push(`Research: ${results.research.gaps.missing.length} ontbrekende onderwerpen`);
  }
  if (results.write) {
    summaryItems.push(`Writer: ${results.write.draftsCreated.length} drafts`);
  }
  if (results.build) {
    summaryItems.push(`Build: ${results.build.buildSuccess ? 'geslaagd' : 'MISLUKT'}`);
  }

  const summary = generateMarkdownReport('Orchestrator Samenvatting', [
    { title: 'Resultaten', items: summaryItems },
  ]);
  writeReport(AGENT_NAME, 'summary.md', summary);

  console.log(`\n${'='.repeat(60)}`);
  console.log(`  Orchestrator compleet (${elapsed}s)`);
  for (const item of summaryItems) {
    console.log(`  ${item}`);
  }
  console.log(`${'='.repeat(60)}\n`);

  return results;
}

// Main
const options = parseArgs();
runMode(options.mode, options).catch(err => {
  console.error('Orchestrator fout:', err);
  process.exit(1);
});
