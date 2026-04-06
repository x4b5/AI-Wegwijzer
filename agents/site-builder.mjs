/**
 * Site Builder Agent
 *
 * Technical quality checks on the built site.
 *
 * Tasks:
 * - Build validation (npm run build runs without errors)
 * - HTML output quality check
 * - File size analysis
 * - CSS usage analysis
 */

import { execSync } from 'child_process';
import { existsSync, readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import { PATHS } from './lib/config.mjs';
import { writeReport, writeJsonReport, generateMarkdownReport } from './lib/report.mjs';

const AGENT_NAME = 'site-builder';

/**
 * Run the Eleventy build and capture output.
 */
function runBuild() {
  try {
    const output = execSync('npm run build 2>&1', {
      cwd: PATHS.root,
      encoding: 'utf-8',
      timeout: 60000,
    });
    return { success: true, output };
  } catch (error) {
    return { success: false, output: error.stdout || error.message };
  }
}

/**
 * Recursively get all files in a directory with stats.
 */
function getAllFiles(dir, results = []) {
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllFiles(fullPath, results);
    } else {
      const stats = statSync(fullPath);
      results.push({
        path: fullPath.replace(PATHS.root + '/', ''),
        ext: extname(entry.name),
        size: stats.size,
      });
    }
  }
  return results;
}

/**
 * Analyze the built output.
 */
function analyzeOutput() {
  const outputDir = join(PATHS.root, '_site');
  if (!existsSync(outputDir)) {
    return { exists: false, files: [], totalSize: 0 };
  }

  const files = getAllFiles(outputDir);
  const totalSize = files.reduce((sum, f) => sum + f.size, 0);

  const byType = {};
  for (const file of files) {
    const type = file.ext || 'other';
    if (!byType[type]) byType[type] = { count: 0, size: 0 };
    byType[type].count++;
    byType[type].size += file.size;
  }

  // Find large files (>100KB)
  const largeFiles = files
    .filter(f => f.size > 100 * 1024)
    .sort((a, b) => b.size - a.size);

  // Count HTML pages
  const htmlPages = files.filter(f => f.ext === '.html');

  return {
    exists: true,
    totalFiles: files.length,
    totalSize,
    htmlPages: htmlPages.length,
    byType,
    largeFiles,
  };
}

/**
 * Check HTML files for basic quality issues.
 */
function checkHtmlQuality() {
  const outputDir = join(PATHS.root, '_site');
  const issues = [];

  if (!existsSync(outputDir)) return issues;

  const htmlFiles = getAllFiles(outputDir).filter(f => f.ext === '.html');

  for (const file of htmlFiles) {
    const content = readFileSync(join(PATHS.root, file.path), 'utf-8');

    // Check for inline styles
    const inlineStyles = (content.match(/style="/g) || []).length;
    if (inlineStyles > 3) {
      issues.push({
        severity: 'warn',
        file: file.path,
        message: `${inlineStyles} inline styles gevonden — overweeg CSS classes`,
      });
    }

    // Check for missing lang attribute
    if (content.includes('<html') && !content.includes('lang=')) {
      issues.push({
        severity: 'error',
        file: file.path,
        message: 'HTML element mist lang attribuut',
      });
    }

    // Check for viewport meta
    if (content.includes('<head') && !content.includes('viewport')) {
      issues.push({
        severity: 'error',
        file: file.path,
        message: 'Viewport meta tag ontbreekt',
      });
    }
  }

  return issues;
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export async function runBuilder() {
  console.log(`[${AGENT_NAME}] Site Builder starten...`);

  // Step 1: Run build
  console.log(`[${AGENT_NAME}] Eleventy build uitvoeren...`);
  const buildResult = runBuild();

  // Step 2: Analyze output
  const analysis = analyzeOutput();

  // Step 3: Check HTML quality
  const htmlIssues = checkHtmlQuality();

  // Generate report
  const sections = [
    {
      title: 'Build Status',
      items: [
        { status: buildResult.success ? 'ok' : 'error', message: buildResult.success ? 'Build geslaagd' : 'Build mislukt' },
      ],
      text: buildResult.success ? undefined : `\`\`\`\n${buildResult.output}\n\`\`\``,
    },
  ];

  if (analysis.exists) {
    sections.push({
      title: 'Output Analyse',
      items: [
        `Totaal bestanden: ${analysis.totalFiles}`,
        `HTML pagina\'s: ${analysis.htmlPages}`,
        `Totale grootte: ${formatSize(analysis.totalSize)}`,
      ],
    });

    if (Object.keys(analysis.byType).length > 0) {
      sections.push({
        title: 'Bestanden per type',
        table: {
          headers: ['Type', 'Aantal', 'Grootte'],
          rows: Object.entries(analysis.byType)
            .sort((a, b) => b[1].size - a[1].size)
            .map(([type, data]) => [type, String(data.count), formatSize(data.size)]),
        },
      });
    }

    if (analysis.largeFiles.length > 0) {
      sections.push({
        title: 'Grote bestanden (>100KB)',
        table: {
          headers: ['Bestand', 'Grootte'],
          rows: analysis.largeFiles.map(f => [f.path, formatSize(f.size)]),
        },
      });
    }
  }

  if (htmlIssues.length > 0) {
    sections.push({
      title: 'HTML Kwaliteitsproblemen',
      items: htmlIssues.map(i => ({
        status: i.severity === 'error' ? 'error' : 'warn',
        message: `**${i.file}**: ${i.message}`,
      })),
    });
  }

  const mdReport = generateMarkdownReport('Site Builder Rapport', sections);
  const reportPath = writeReport(AGENT_NAME, 'build-report.md', mdReport);

  // JSON report
  writeJsonReport(AGENT_NAME, 'build-report.json', {
    timestamp: new Date().toISOString(),
    buildSuccess: buildResult.success,
    analysis,
    htmlIssues,
  });

  console.log(`[${AGENT_NAME}] Build rapport: ${reportPath}`);
  return { buildSuccess: buildResult.success, analysis, htmlIssues };
}

// Run if called directly
if (process.argv[1] && process.argv[1].endsWith('site-builder.mjs')) {
  runBuilder().catch(console.error);
}
