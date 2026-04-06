import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, relative, extname, basename } from 'path';
import { PATHS, REQUIRED_FRONTMATTER } from './config.mjs';

/**
 * Parse frontmatter from a markdown file.
 * Returns { data: {}, content: string }
 */
export function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data = {};
  for (const line of match[1].split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();
    // Strip surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }

  return { data, content: match[2] };
}

/**
 * Parse a markdown file by path.
 */
export function parseMarkdown(filePath) {
  const raw = readFileSync(filePath, 'utf-8');
  const { data, content } = parseFrontmatter(raw);
  const stats = statSync(filePath);

  return {
    filePath,
    relativePath: relative(PATHS.root, filePath),
    slug: basename(filePath, extname(filePath)),
    frontmatter: data,
    content,
    wordCount: content.split(/\s+/).filter(Boolean).length,
    lastModified: stats.mtime,
    fileSize: stats.size,
  };
}

/**
 * Recursively find all .md files in a directory.
 */
function findMarkdownFiles(dir) {
  const results = [];
  if (!existsSync(dir)) return results;

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findMarkdownFiles(fullPath));
    } else if (entry.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

/**
 * Get all content files parsed with frontmatter.
 */
export function getAllContent() {
  const contentDir = join(PATHS.root, PATHS.content);
  const files = findMarkdownFiles(contentDir);
  return files.map(parseMarkdown);
}

/**
 * Get a content inventory: summary of all content with metadata.
 */
export function getContentInventory() {
  const allContent = getAllContent();
  return allContent.map(({ relativePath, slug, frontmatter, wordCount, lastModified }) => {
    const missingFrontmatter = REQUIRED_FRONTMATTER.filter(f => !frontmatter[f]);
    const estimatedReadTime = Math.max(1, Math.round(wordCount / 200));

    return {
      path: relativePath,
      slug,
      title: frontmatter.title || '(geen titel)',
      description: frontmatter.description || '',
      wordCount,
      estimatedReadTime: `${estimatedReadTime} min`,
      lastModified: lastModified.toISOString().split('T')[0],
      missingFrontmatter,
      hasHeroImage: Boolean(frontmatter.heroImage),
    };
  });
}

/**
 * Extract all internal links from markdown content.
 */
export function extractInternalLinks(content) {
  const links = [];
  // Markdown links
  const mdLinks = content.matchAll(/\[([^\]]*)\]\(([^)]+)\)/g);
  for (const m of mdLinks) {
    if (!m[2].startsWith('http')) links.push(m[2]);
  }
  // HTML href links
  const htmlLinks = content.matchAll(/href="([^"]+)"/g);
  for (const m of htmlLinks) {
    if (!m[1].startsWith('http')) links.push(m[1]);
  }
  return links;
}

/**
 * Extract all image references from content.
 */
export function extractImages(content) {
  const images = [];
  // Markdown images
  const mdImgs = content.matchAll(/!\[([^\]]*)\]\(([^)]+)\)/g);
  for (const m of mdImgs) images.push({ alt: m[1], src: m[2] });
  // HTML images
  const htmlImgs = content.matchAll(/<img[^>]+src="([^"]+)"[^>]*>/g);
  for (const m of htmlImgs) {
    const altMatch = m[0].match(/alt="([^"]*)"/);
    images.push({ alt: altMatch ? altMatch[1] : '', src: m[1] });
  }
  return images;
}

/**
 * Extract headings from content to check hierarchy.
 */
export function extractHeadings(content) {
  const headings = [];
  const lines = content.split('\n');
  for (const line of lines) {
    const match = line.match(/^(#{1,6})\s+(.+)/);
    if (match) {
      headings.push({ level: match[1].length, text: match[2].trim() });
    }
  }
  // Also check HTML headings
  const htmlHeadings = content.matchAll(/<h([1-6])[^>]*>([^<]+)<\/h\1>/g);
  for (const m of htmlHeadings) {
    headings.push({ level: parseInt(m[1]), text: m[2].trim() });
  }
  return headings;
}
