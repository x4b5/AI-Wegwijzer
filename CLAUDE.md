# AI-Wegwijzer v2

Nederlandstalige educatieve website over AI-geletterdheid. Gebouwd met Eleventy (11ty) v3, ESM modules, en een geïntegreerd agent-systeem.

## Tech Stack

- **SSG**: Eleventy 3.1.5 (ESM config)
- **Templates**: Nunjucks (.njk) voor layouts en components
- **Content**: Markdown (.md) met Nunjucks shortcodes
- **CSS**: Vanilla CSS met modulaire @import architectuur
- **JS**: Vanilla JavaScript
- **Taal**: Nederlands (lang="nl")

## Commands

```bash
npm start                # Dev server met live reload
npm run build            # Productie build → _site/

# Agent systeem
npm run agents           # Default: audit mode
npm run agents:audit     # Kwaliteitsaudit (programmatisch)
npm run agents:research  # Content analyse en gap-identificatie
npm run agents:write     # Content generatie naar _drafts/
npm run agents:build     # Build validatie en output analyse
npm run agents:full      # Alle agents in volgorde
```

## Project Structure

```
src/
├── _data/                  # Global data (site.json, navigation.json, legend.json)
├── _includes/
│   ├── layouts/            # base.njk → article.njk / home.njk
│   └── components/         # head, article-header, sidebar-legend, sidebar-actions
├── content/                # Markdown content (met directory data defaults)
│   ├── content.json        # Default layout voor alle content
│   ├── artikelen/          # Hoofdartikelen (welkom, kennisbank, begrippen, 01-04)
│   │   └── artikelen.json  # Default layout + tags voor artikelen
│   └── perspectieven/
│       ├── basis/          # B-reeks: AI beschrijven, basisbegrippen
│       ├── werking/        # D-reeks: machine learning, deep learning
│       ├── toepassen/      # D-reeks: chatbots, agents, prompt engineering
│       └── impact/         # D-reeks: toekomst van AI
├── css/                    # Modulaire CSS (passthrough copy)
├── js/script.js            # Vanilla JS (passthrough copy)
├── img/                    # Afbeeldingen (passthrough copy)
└── index.njk               # Homepage

agents/                     # Agent systeem
├── orchestrator.mjs        # Hoofdcoördinator
├── quality-auditor.mjs     # Programmatische kwaliteitscontrole
├── content-researcher.mjs  # Content analyse en gap-identificatie
├── content-writer.mjs      # Content creatie (schrijft naar _drafts/)
├── site-builder.mjs        # Build validatie en output analyse
└── lib/
    ├── config.mjs          # Gedeelde configuratie en paden
    ├── content.mjs         # Content parsing (frontmatter, MD, inventaris)
    └── report.mjs          # Rapport generatie (MD en JSON)

_reports/                   # Agent output rapporten (gitignored)
_drafts/                    # Content drafts (gitignored)
```

## Content Conventies

### Nieuw artikel toevoegen

1. Maak `src/content/artikelen/<slug>.md` of `src/content/perspectieven/<categorie>/<code>.md`
2. Voeg frontmatter toe:
   ```yaml
   ---
   title: "Titel"
   description: "Korte beschrijving"
   heroImage: /img/icons/informatie.png
   heroImageAlt: "Alt tekst"
   ---
   ```
3. Layout wordt automatisch toegepast via directory data (`content.json` / `artikelen.json`)
4. Gebruik shortcodes voor content blocks (zie hieronder)

### Shortcodes

Paired shortcodes voor content blocks:

```markdown
{% info %}
Informatieblok content hier...
{% endinfo %}

{% trivia %}
Verder lezen / weetjes content...
{% endtrivia %}

{% task %}
**Opdracht**: Praktische opdracht beschrijving...
{% endtask %}

{% conclusion %}
**Samenvatting**: Conclusie content...
{% endconclusion %}

{% quiz "Vraag tekst hier" %}
<div class="quiz-options">
  <button class="quiz-option" onclick="toggleAnswer('id-a', this)">Optie A</button>
  <div class="answer-feedback" id="answer-id-a" hidden>Feedback A</div>
  <button class="quiz-option" onclick="toggleAnswer('id-b', this)">Optie B</button>
  <div class="answer-feedback" id="answer-id-b" hidden>Feedback B</div>
</div>
{% endquiz %}
```

Inline shortcodes:

```markdown
{% metadata "Leerdoel tekst", "15-20 minuten" %}

{% linkcard "info", "Titel", "Beschrijving", "/url/", "Link tekst →" %}
```

### Interne links

- Artikelen: `/content/artikelen/<slug>/`
- Perspectieven: `/content/perspectieven/<categorie>/<code>/`
- Begrippen: `/content/artikelen/begrippen/#<term>`
- Afbeeldingen: `/img/...` (altijd absoluut pad)

## Layout Chain

`base.njk` → `article.njk` / `home.njk`

- `base.njk`: HTML shell, head component, sidebars, script tag
- `article.njk`: Skip link, main container, article-header component, content
- `home.njk`: Homepage layout (geen sidebar legend)

## CSS Architecture

Via `@import` in `src/css/style.css`. Custom properties in `_variables.css`. Dark mode in `_dark.css`. Geen build step — Eleventy kopieert via passthrough.

## Agent Systeem

### Architectuur

De orchestrator (`agents/orchestrator.mjs`) coördineert 4 gespecialiseerde agents:

| Agent | Type | Functie |
|-------|------|---------|
| Quality Auditor | Programmatisch | Broken links, frontmatter, headings, SEO |
| Content Researcher | Analyse | Content veroudering, gap-analyse, prioriteiten |
| Content Writer | Generatie | Nieuwe content, updates, drafts naar `_drafts/` |
| Site Builder | Validatie | Build check, HTML kwaliteit, bestandsgroottes |

### Workflow

1. `npm run agents:audit` — Identificeer problemen
2. `npm run agents:research` — Analyseer content en gaps
3. `npm run agents:write` — Genereer drafts op basis van research
4. `npm run agents:build` — Valideer de gebouwde site
5. `npm run agents:full` — Alle stappen in volgorde

### Rapporten

Alle rapporten worden geschreven naar `_reports/<agent-naam>/`:
- JSON formaat voor programmatische verwerking
- Markdown formaat voor menselijke review

## Belangrijke Regels

- Alle content is in het **Nederlands**
- Geen npm dependencies buiten Eleventy
- Geen JS frameworks — vanilla JS only
- Content drafts gaan ALTIJD naar `_drafts/`, nooit direct naar `src/content/`
- Afbeeldingen in `src/img/`, icons in `src/img/icons/`
- Output directory: `_site/` (in .gitignore)
