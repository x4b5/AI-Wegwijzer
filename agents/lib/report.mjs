import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { PATHS } from './config.mjs';

/**
 * Write a report file to _reports/{agent}/{filename}
 */
export function writeReport(agent, filename, content) {
  const dir = join(PATHS.root, PATHS.reports, agent);
  mkdirSync(dir, { recursive: true });
  const filePath = join(dir, filename);
  writeFileSync(filePath, content, 'utf-8');
  return filePath;
}

/**
 * Write a JSON report.
 */
export function writeJsonReport(agent, filename, data) {
  return writeReport(agent, filename, JSON.stringify(data, null, 2));
}

/**
 * Write a draft to _drafts/{category}/{slug}.md
 */
export function writeDraft(category, slug, content) {
  const dir = join(PATHS.root, PATHS.drafts, category);
  mkdirSync(dir, { recursive: true });
  const filePath = join(dir, `${slug}.md`);
  writeFileSync(filePath, content, 'utf-8');
  return filePath;
}

/**
 * Read the last report for an agent.
 */
export function readLastReport(agent, filename) {
  const filePath = join(PATHS.root, PATHS.reports, agent, filename);
  if (!existsSync(filePath)) return null;
  return readFileSync(filePath, 'utf-8');
}

/**
 * Read a JSON report.
 */
export function readJsonReport(agent, filename) {
  const raw = readLastReport(agent, filename);
  if (!raw) return null;
  return JSON.parse(raw);
}

/**
 * Format a timestamp for reports.
 */
export function formatTimestamp() {
  return new Date().toISOString().replace('T', ' ').split('.')[0];
}

/**
 * Generate a markdown summary report from structured data.
 */
export function generateMarkdownReport(title, sections) {
  const lines = [`# ${title}`, '', `_Gegenereerd: ${formatTimestamp()}_`, ''];

  for (const section of sections) {
    lines.push(`## ${section.title}`, '');

    if (section.items) {
      for (const item of section.items) {
        if (typeof item === 'string') {
          lines.push(`- ${item}`);
        } else if (item.status) {
          const icon = item.status === 'ok' ? '✅' : item.status === 'warn' ? '⚠️' : '❌';
          lines.push(`- ${icon} ${item.message}`);
        }
      }
      lines.push('');
    }

    if (section.table) {
      const { headers, rows } = section.table;
      lines.push(`| ${headers.join(' | ')} |`);
      lines.push(`| ${headers.map(() => '---').join(' | ')} |`);
      for (const row of rows) {
        lines.push(`| ${row.join(' | ')} |`);
      }
      lines.push('');
    }

    if (section.text) {
      lines.push(section.text, '');
    }
  }

  return lines.join('\n');
}
