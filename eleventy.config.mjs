import { readFileSync } from 'fs';

export default function (eleventyConfig) {
  // Passthrough copies
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/css');

  // --- Content block shortcodes ---

  const BLOCK_ICONS = {
    info: { src: '/img/icons/informatie.png', alt: 'Informatie' },
    trivia: { src: '/img/icons/boekenwurm.png', alt: 'Trivia' },
    task: { src: '/img/icons/opdracht.png', alt: 'Opdracht' },
    conclusion: { src: '/img/icons/conclusie.png', alt: 'Conclusie' },
    quiz: { src: '/img/icons/quizvraag.png', alt: 'Quizvraag' },
  };

  for (const [type, icon] of Object.entries(BLOCK_ICONS)) {
    if (type === 'quiz') continue; // quiz has its own shortcode
    eleventyConfig.addPairedShortcode(type, (content) => {
      const rendered = eleventyConfig.javascriptFunctions?.renderTemplate
        ? content
        : content;
      return `<div class="content-block ${type}">
  <div class="icon">
    <img src="${icon.src}" alt="${icon.alt}" width="80" height="80" loading="lazy" decoding="async" />
  </div>
  <div class="content-text">
${rendered}
  </div>
</div>`;
    });
  }

  // Quiz shortcode with question parameter
  eleventyConfig.addPairedShortcode('quiz', (content, question) => {
    const icon = BLOCK_ICONS.quiz;
    return `<div class="content-block quiz">
  <div class="icon">
    <img src="${icon.src}" alt="${icon.alt}" width="80" height="80" loading="lazy" decoding="async" />
  </div>
  <div class="content-text">
    <strong>${question || 'Quizvraag'}</strong>
${content}
  </div>
</div>`;
  });

  // Metadata shortcode for article headers
  eleventyConfig.addShortcode('metadata', (leerdoel, leestijd) => {
    return `<div class="metadata metadata-header">
  <div class="metadata-content">
    <div class="metadata-item">
      <strong>Laatste wijziging:</strong>
      <time id="last-updated" datetime="">[Automatisch bijgewerkt]</time>
    </div>
    ${leerdoel ? `<div class="metadata-item"><strong>Leerdoel:</strong> ${leerdoel}</div>` : ''}
    ${leestijd ? `<div class="metadata-item"><strong>Leestijd:</strong> ${leestijd}</div>` : ''}
  </div>
</div>`;
  });

  // Link card shortcode for homepage navigation
  eleventyConfig.addShortcode('linkcard', (type, title, description, url, linkText) => {
    const icon = BLOCK_ICONS[type] || BLOCK_ICONS.info;
    return `<div class="content-block ${type || 'info'}">
  <div class="icon">
    <img src="${icon.src}" alt="${icon.alt}" width="80" height="80" loading="lazy" decoding="async" />
  </div>
  <div class="content-text">
    <h2><a href="${url}" style="color: inherit; text-decoration: none;">${title}</a></h2>
    <p>${description}</p>
    <p><a href="${url}" class="button-link">${linkText || 'Lees meer →'}</a></p>
  </div>
</div>`;
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data',
    },
    templateFormats: ['njk', 'html', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
}
