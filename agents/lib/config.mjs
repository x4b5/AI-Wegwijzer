import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const PATHS = {
  root: resolve(__dirname, '../..'),
  src: 'src',
  content: 'src/content',
  reports: '_reports',
  drafts: '_drafts',
  css: 'src/css',
  js: 'src/js',
  img: 'src/img',
  includes: 'src/_includes',
  data: 'src/_data',
};

export const AGENT_CONFIG = {
  maxParallel: 3,
  reportFormat: 'markdown',
};

export const CONTENT_BLOCK_TYPES = ['info', 'trivia', 'quiz', 'task', 'conclusion'];

export const REQUIRED_FRONTMATTER = ['title', 'description'];

export const RECOMMENDED_FRONTMATTER = ['heroImage', 'heroImageAlt', 'leerdoel', 'leestijd'];

export const SEO_LIMITS = {
  titleMinLength: 10,
  titleMaxLength: 60,
  descriptionMinLength: 50,
  descriptionMaxLength: 160,
};

export const CONTENT_CATEGORIES = {
  artikelen: 'src/content/artikelen',
  'perspectieven/basis': 'src/content/perspectieven/basis',
  'perspectieven/werking': 'src/content/perspectieven/werking',
  'perspectieven/toepassen': 'src/content/perspectieven/toepassen',
  'perspectieven/impact': 'src/content/perspectieven/impact',
};
