/**
 * Quality Auditor Agent
 *
 * Programmatic quality checks on content and site structure.
 * No LLM needed — pure code analysis.
 *
 * Checks:
 * - Broken internal links
 * - Missing alt text on images
 * - Heading hierarchy (h1→h2→h3, no jumps)
 * - Frontmatter validation
 * - Word count and estimated read time
 * - SEO basics (title/description lengths)
 */

import { existsSync, readFileSync, readdirSync } from 'fs';
import { join, resolve } from 'path';
import { PATHS, REQUIRED_FRONTMATTER, RECOMMENDED_FRONTMATTER, SEO_LIMITS } from './lib/config.mjs';
import { getAllContent, extractInternalLinks, extractImages, extractHeadings } from './lib/content.mjs';
import { writeReport, writeJsonReport, generateMarkdownReport } from './lib/report.mjs';

const AGENT_NAME = 'quality-auditor';

function checkFrontmatter(page) {
  const issues = [];
  const { frontmatter, relativePath } = page;

  for (const field of REQUIRED_FRONTMATTER) {
    if (!frontmatter[field]) {
      issues.push({ severity: 'error', file: relativePath, message: `Verplicht veld '${field}' ontbreekt` });
    }
  }

  for (const field of RECOMMENDED_FRONTMATTER) {
    if (!frontmatter[field]) {
      issues.push({ severity: 'warn', file: relativePath, message: `Aanbevolen veld '${field}' ontbreekt` });
    }
  }

  if (frontmatter.title) {
    if (frontmatter.title.length < SEO_LIMITS.titleMinLength) {
      issues.push({ severity: 'warn', file: relativePath, message: `Titel te kort (${frontmatter.title.length} tekens, min ${SEO_LIMITS.titleMinLength})` });
    }
    if (frontmatter.title.length > SEO_LIMITS.titleMaxLength) {
      issues.push({ severity: 'warn', file: relativePath, message: `Titel te lang (${frontmatter.title.length} tekens, max ${SEO_LIMITS.titleMaxLength})` });
    }
  }

  if (frontmatter.description) {
    if (frontmatter.description.length < SEO_LIMITS.descriptionMinLength) {
      issues.push({ severity: 'warn', file: relativePath, message: `Beschrijving te kort (${frontmatter.description.length} tekens, min ${SEO_LIMITS.descriptionMinLength})` });
    }
    if (frontmatter.description.length > SEO_LIMITS.descriptionMaxLength) {
      issues.push({ severity: 'warn', file: relativePath, message: `Beschrijving te lang (${frontmatter.description.length} tekens, max ${SEO_LIMITS.descriptionMaxLength})` });
    }
  }

  return issues;
}

function checkHeadingHierarchy(page) {
  const issues = [];
  const headings = extractHeadings(page.content);

  let prevLevel = 1; // Article layout already has h1
  for (const h of headings) {
    if (h.level === 1) {
      issues.push({
        severity: 'warn',
        file: page.relativePath,
        message: `H1 in content gevonden ("${h.text}") — layout voegt al h1 toe`,
      });
    }
    if (h.level > prevLevel + 1) {
      issues.push({
        severity: 'error',
        file: page.relativePath,
        message: `Heading springt van h${prevLevel} naar h${h.level} ("${h.text}")`,
      });
    }
    prevLevel = h.level;
  }

  return issues;
}

function checkImages(page) {
  const issues = [];
  const images = extractImages(page.content);

  for (const img of images) {
    if (!img.alt || img.alt.trim() === '') {
      issues.push({
        severity: 'error',
        file: page.relativePath,
        message: `Afbeelding zonder alt-tekst: ${img.src}`,
      });
    }

    // Check if local image exists
    if (img.src.startsWith('/')) {
      const imgPath = join(PATHS.root, PATHS.src, img.src);
      if (!existsSync(imgPath)) {
        issues.push({
          severity: 'error',
          file: page.relativePath,
          message: `Afbeelding niet gevonden: ${img.src}`,
        });
      }
    }
  }

  return issues;
}

function checkInternalLinks(page, allSlugs) {
  const issues = [];
  const links = extractInternalLinks(page.content);

  for (const link of links) {
    // Skip anchor-only links and external
    if (link.startsWith('#') || link.startsWith('http')) continue;

    // Normalize path for checking
    const normalized = link.replace(/\/$/, '').replace(/^\//, '');

    // Check if it's an image path
    if (normalized.startsWith('img/')) {
      const imgPath = join(PATHS.root, PATHS.src, normalized);
      if (!existsSync(imgPath)) {
        issues.push({
          severity: 'error',
          file: page.relativePath,
          message: `Broken link naar afbeelding: ${link}`,
        });
      }
      continue;
    }

    // For content links, check against known slugs (simplified check)
    // A full check would require building the site and checking output URLs
  }

  return issues;
}

function checkContentQuality(page) {
  const issues = [];
  const { wordCount, relativePath } = page;

  if (wordCount < 100) {
    issues.push({
      severity: 'warn',
      file: relativePath,
      message: `Weinig content (${wordCount} woorden)`,
    });
  }

  return issues;
}

export async function runAudit() {
  console.log(`[${AGENT_NAME}] Kwaliteitsaudit starten...`);

  const allContent = getAllContent();
  const allSlugs = allContent.map(p => p.slug);

  const allIssues = [];
  const pageStats = [];

  for (const page of allContent) {
    const pageIssues = [
      ...checkFrontmatter(page),
      ...checkHeadingHierarchy(page),
      ...checkImages(page),
      ...checkInternalLinks(page, allSlugs),
      ...checkContentQuality(page),
    ];

    allIssues.push(...pageIssues);

    pageStats.push({
      path: page.relativePath,
      title: page.frontmatter.title || '(geen titel)',
      wordCount: page.wordCount,
      readTime: `${Math.max(1, Math.round(page.wordCount / 200))} min`,
      issues: pageIssues.length,
      errors: pageIssues.filter(i => i.severity === 'error').length,
      warnings: pageIssues.filter(i => i.severity === 'warn').length,
    });
  }

  const errors = allIssues.filter(i => i.severity === 'error');
  const warnings = allIssues.filter(i => i.severity === 'warn');

  // Generate JSON report
  const jsonReport = {
    timestamp: new Date().toISOString(),
    summary: {
      totalPages: allContent.length,
      totalIssues: allIssues.length,
      errors: errors.length,
      warnings: warnings.length,
    },
    pages: pageStats,
    issues: allIssues,
  };
  const jsonPath = writeJsonReport(AGENT_NAME, 'quality-audit.json', jsonReport);

  // Generate Markdown report
  const mdReport = generateMarkdownReport('Kwaliteitsaudit Rapport', [
    {
      title: 'Samenvatting',
      items: [
        `Totaal pagina\'s: ${allContent.length}`,
        `Totaal problemen: ${allIssues.length}`,
        { status: errors.length > 0 ? 'error' : 'ok', message: `Fouten: ${errors.length}` },
        { status: warnings.length > 0 ? 'warn' : 'ok', message: `Waarschuwingen: ${warnings.length}` },
      ],
    },
    {
      title: 'Pagina Overzicht',
      table: {
        headers: ['Pagina', 'Woorden', 'Leestijd', 'Fouten', 'Waarschuwingen'],
        rows: pageStats.map(p => [p.title, String(p.wordCount), p.readTime, String(p.errors), String(p.warnings)]),
      },
    },
    ...(errors.length > 0 ? [{
      title: 'Fouten',
      items: errors.map(e => ({ status: 'error', message: `**${e.file}**: ${e.message}` })),
    }] : []),
    ...(warnings.length > 0 ? [{
      title: 'Waarschuwingen',
      items: warnings.map(w => ({ status: 'warn', message: `**${w.file}**: ${w.message}` })),
    }] : []),
  ]);
  const mdPath = writeReport(AGENT_NAME, 'quality-audit.md', mdReport);

  console.log(`[${AGENT_NAME}] Audit compleet: ${errors.length} fouten, ${warnings.length} waarschuwingen`);
  console.log(`[${AGENT_NAME}] Rapporten: ${jsonPath}, ${mdPath}`);

  return jsonReport;
}

// Run if called directly
if (process.argv[1] && process.argv[1].endsWith('quality-auditor.mjs')) {
  runAudit().catch(console.error);
}
