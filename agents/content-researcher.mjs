/**
 * Content Researcher Agent
 *
 * Analyzes existing content and identifies areas for improvement.
 * Uses Claude Code Task agents for deep research.
 *
 * Tasks:
 * - Analyze content for outdated claims, statistics, dates
 * - Gap analysis: which AI topics are missing?
 * - Identify priority updates
 */

import { getAllContent, getContentInventory } from './lib/content.mjs';
import { writeReport, generateMarkdownReport, formatTimestamp } from './lib/report.mjs';

const AGENT_NAME = 'content-researcher';

/**
 * Analyze a single content page for potential issues.
 * Returns analysis metadata (no LLM needed for this part).
 */
function analyzeContentAge(page) {
  const daysSinceModified = Math.floor(
    (Date.now() - page.lastModified.getTime()) / (1000 * 60 * 60 * 24)
  );

  return {
    slug: page.slug,
    title: page.frontmatter.title || page.slug,
    path: page.relativePath,
    wordCount: page.wordCount,
    daysSinceModified,
    needsReview: daysSinceModified > 90,
    priority: daysSinceModified > 180 ? 'high' : daysSinceModified > 90 ? 'medium' : 'low',
  };
}

/**
 * Identify content gaps based on existing topics.
 */
function identifyGaps(allContent) {
  const existingTopics = allContent.map(p => (p.frontmatter.title || '').toLowerCase());

  const expectedTopics = [
    'chatbots', 'ai-assistenten', 'prompt engineering', 'machine learning',
    'deep learning', 'ai agents', 'toekomst', 'basisbegrippen',
    'ethiek', 'privacy', 'bias', 'generatieve ai', 'beeldherkenning',
    'natuurlijke taalverwerking', 'robotica', 'autonome systemen',
  ];

  const covered = [];
  const missing = [];

  for (const topic of expectedTopics) {
    if (existingTopics.some(t => t.includes(topic))) {
      covered.push(topic);
    } else {
      missing.push(topic);
    }
  }

  return { covered, missing };
}

export async function runResearch() {
  console.log(`[${AGENT_NAME}] Content research starten...`);

  const allContent = getAllContent();
  const inventory = getContentInventory();

  // Analyze content age
  const ageAnalysis = allContent.map(analyzeContentAge);
  const needsReview = ageAnalysis.filter(a => a.needsReview);

  // Gap analysis
  const gaps = identifyGaps(allContent);

  // Generate per-article research stubs
  const articleSummaries = ageAnalysis.map(a => ({
    ...a,
    recommendation: a.priority === 'high'
      ? 'Dringend herzien — content mogelijk verouderd'
      : a.priority === 'medium'
        ? 'Binnenkort herzien — check op actualiteit'
        : 'Content recent — geen actie nodig',
  }));

  // Write gaps report
  const gapsReport = generateMarkdownReport('Content Gap-analyse', [
    {
      title: 'Gedekte onderwerpen',
      items: gaps.covered.map(t => `${t}`),
    },
    {
      title: 'Ontbrekende onderwerpen',
      items: gaps.missing.length > 0
        ? gaps.missing.map(t => ({ status: 'warn', message: t }))
        : [{ status: 'ok', message: 'Alle verwachte onderwerpen zijn gedekt' }],
    },
  ]);
  writeReport(AGENT_NAME, 'gaps.md', gapsReport);

  // Write overview report
  const overviewReport = generateMarkdownReport('Content Research Overzicht', [
    {
      title: 'Samenvatting',
      items: [
        `Totaal pagina\'s geanalyseerd: ${allContent.length}`,
        `Pagina\'s die review nodig hebben: ${needsReview.length}`,
        `Ontbrekende onderwerpen: ${gaps.missing.length}`,
      ],
    },
    {
      title: 'Prioriteiten voor herziening',
      table: {
        headers: ['Pagina', 'Woorden', 'Dagen sinds update', 'Prioriteit', 'Aanbeveling'],
        rows: articleSummaries
          .sort((a, b) => b.daysSinceModified - a.daysSinceModified)
          .map(a => [
            a.title,
            String(a.wordCount),
            String(a.daysSinceModified),
            a.priority,
            a.recommendation,
          ]),
      },
    },
  ]);
  const reportPath = writeReport(AGENT_NAME, 'research-overview.md', overviewReport);

  console.log(`[${AGENT_NAME}] Research compleet: ${needsReview.length} pagina's hebben review nodig`);
  console.log(`[${AGENT_NAME}] Rapport: ${reportPath}`);

  return { ageAnalysis: articleSummaries, gaps };
}

// Run if called directly
if (process.argv[1] && process.argv[1].endsWith('content-researcher.mjs')) {
  runResearch().catch(console.error);
}
