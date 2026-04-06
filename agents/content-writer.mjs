/**
 * Content Writer Agent
 *
 * Writes and updates Markdown content based on research findings.
 * Uses Claude Code Task agents for actual writing.
 *
 * Tasks:
 * - Write new articles based on research/gap analysis
 * - Update existing articles with outdated content
 * - Generate quizzes, tasks, and summaries
 * - All drafts go to _drafts/ — never directly to src/content/
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { PATHS } from './lib/config.mjs';
import { getAllContent } from './lib/content.mjs';
import { writeDraft, readJsonReport, writeReport, generateMarkdownReport } from './lib/report.mjs';

const AGENT_NAME = 'content-writer';

/**
 * Get research data to inform writing priorities.
 */
function getResearchData() {
  const overview = readJsonReport('content-researcher', 'research-overview.json');
  const gaps = readJsonReport('content-researcher', 'gaps.json');
  return { overview, gaps };
}

/**
 * Generate a draft template for a new article.
 */
function generateDraftTemplate(topic, category) {
  return `---
title: "${topic}"
description: ""
heroImage: /img/icons/informatie.png
heroImageAlt: "${topic}"
---

{% metadata "", "10-15 minuten" %}

{% info %}
*Introductie van het onderwerp hier...*
{% endinfo %}

## Wat is ${topic}?

*Uitleg hier...*

## Hoe werkt het?

*Beschrijving hier...*

{% trivia %}
**Wist je dat...?**

*Interessant feit hier...*
{% endtrivia %}

## Praktische toepassingen

*Voorbeelden hier...*

{% task %}
**Opdracht**

*Praktische opdracht hier...*
{% endtask %}

{% quiz "Quizvraag over ${topic}" %}
<div class="quiz-options">
  <button class="quiz-option" onclick="toggleAnswer('${topic.toLowerCase().replace(/\s+/g, '-')}-a', this)">Optie A</button>
  <button class="quiz-option" onclick="toggleAnswer('${topic.toLowerCase().replace(/\s+/g, '-')}-b', this)">Optie B</button>
  <button class="quiz-option" onclick="toggleAnswer('${topic.toLowerCase().replace(/\s+/g, '-')}-c', this)">Optie C</button>
</div>
{% endquiz %}

{% conclusion %}
**Samenvatting**

*Samenvatting van het artikel hier...*
{% endconclusion %}
`;
}

export async function runWriter(options = {}) {
  console.log(`[${AGENT_NAME}] Content Writer starten...`);

  const allContent = getAllContent();
  const draftsCreated = [];

  // If specific topic provided, generate draft for that
  if (options.topic) {
    const category = options.category || 'artikelen';
    const slug = options.topic.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const draft = generateDraftTemplate(options.topic, category);
    const path = writeDraft(category, slug, draft);
    draftsCreated.push({ topic: options.topic, path, type: 'new' });
    console.log(`[${AGENT_NAME}] Draft aangemaakt: ${path}`);
  }

  // Generate summary report
  const report = generateMarkdownReport('Content Writer Rapport', [
    {
      title: 'Samenvatting',
      items: [
        `Bestaande pagina\'s: ${allContent.length}`,
        `Nieuwe drafts aangemaakt: ${draftsCreated.length}`,
      ],
    },
    ...(draftsCreated.length > 0 ? [{
      title: 'Aangemaakte drafts',
      table: {
        headers: ['Onderwerp', 'Type', 'Pad'],
        rows: draftsCreated.map(d => [d.topic, d.type, d.path]),
      },
    }] : []),
    {
      title: 'Instructies',
      text: `Drafts zijn opgeslagen in \`${PATHS.drafts}/\`.
Review de drafts en verplaats ze naar \`${PATHS.content}/\` wanneer ze klaar zijn.

**Gebruik**: \`node agents/content-writer.mjs --topic "Onderwerp" --category artikelen\``,
    },
  ]);
  writeReport(AGENT_NAME, 'writer-report.md', report);

  console.log(`[${AGENT_NAME}] Writer compleet: ${draftsCreated.length} drafts aangemaakt`);
  return { draftsCreated };
}

// Run if called directly
if (process.argv[1] && process.argv[1].endsWith('content-writer.mjs')) {
  const args = process.argv.slice(2);
  const options = {};

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--topic' && args[i + 1]) options.topic = args[++i];
    if (args[i] === '--category' && args[i + 1]) options.category = args[++i];
  }

  runWriter(options).catch(console.error);
}
