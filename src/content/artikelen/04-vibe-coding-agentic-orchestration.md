---
title: "Van Vibe-Coding naar Agentic Orchestration"
description: "De evolutie van AI-gestuurd programmeren: van autocomplete via vibe-coding naar multi-agent orchestration en de veranderende rol van de ontwikkelaar."
heroImage: /img/icons/informatie.png
---

{% metadata "Leerdoel: Begrijpen hoe AI-gestuurd programmeren evolueert en wanneer je welke aanpak gebruikt.", "Leestijd: 20-25 minuten" %}

## Inleiding

{% info %}
**Van "schrijf mijn code" naar "beheer mijn agent-team"**

In eerdere artikelen heb je geleerd over [chatbots](/artikelen/01-chatbots-introductie/) en [AI-assistenten](/artikelen/02-ai-assistenten/) die je helpen bij taken, en over [prompt engineering](/artikelen/03-prompt-engineering/) om betere resultaten te krijgen.

In dit artikel zoomen we uit en bekijken we de **volledige evolutie** van hoe mensen met AI samenwerken om software te maken -- van simpele suggesties tot complete teams van AI-agents die samen een project bouwen.

**Goed nieuws:** je hoeft geen programmeur te zijn om dit artikel te begrijpen. We leggen elk concept uit met alledaagse vergelijkingen en concrete voorbeelden.
{% endinfo %}

## De evolutie van AI-gestuurd programmeren

{% info %}
**Van autocomplete naar agent-teams: een tijdlijn**

De manier waarop AI helpt bij programmeren is in vijf jaar tijd radicaal veranderd. Vergelijk het met de evolutie van koken: van een receptenboek (handmatig) naar een slimme keukenassistent (autocomplete) naar een chef-kok die voor je kookt (vibe-coding) naar een compleet keukenpersoneel dat samenwerkt (orchestration).

**Tijdlijn:**

| Jaar | Ontwikkeling | Vergelijking |
|------|-------------|-------------|
| **2021** | GitHub Copilot -- AI voltooit regels code | Autocorrectie op je telefoon |
| **2023** | ChatGPT schrijft hele functies en legt code uit | Een leraar die je huiswerk nakijkt |
| **2025** | Vibe-coding -- beschrijf wat je wilt, AI bouwt het | Een chef-kok die kookt terwijl jij beschrijft wat je wilt eten |
| **2026** | Agentic coding -- AI plant, codeert, test en herstelt | Een persoonlijke aannemer die je huis bouwt |
| **2026+** | Multi-agent orchestration -- teams van gespecialiseerde agents | Een heel bouwbedrijf met architect, timmerman, loodgieter en opzichter |

Elke stap bouwt voort op de vorige, maar voegt een nieuw niveau van **autonomie** en **complexiteit** toe.
{% endinfo %}

{% trivia %}
<details>
<summary><strong>De oorsprong van "vibe-coding"</strong> <span style="color: #666; font-size: 0.9rem; font-weight: normal">(klik om te lezen)</span></summary>

De term "vibe-coding" werd populair gemaakt door **Andrej Karpathy**, voormalig AI-directeur bij Tesla en mede-oprichter van OpenAI. In februari 2025 tweette hij:

*"There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."*

Zijn punt: je beschrijft wat je wilt in gewone taal, accepteert wat de AI oplevert, en stuurt bij op basis van het resultaat -- zonder zelf de code te lezen. Dit resoneerde enorm en de term werd binnen weken een standaardbegrip in de tech-wereld.
</details>
{% endtrivia %}

## Wat is vibe-coding?

{% info %}
**Beschrijf het, en het bestaat**

Bij vibe-coding beschrijf je in gewone taal wat je wilt maken, en een AI-tool genereert de volledige code, het design en soms zelfs een werkende applicatie. Je hoeft niet te weten *hoe* iets gebouwd wordt -- alleen *wat* je wilt.

**Voorbeeld:**
Je typt: *"Maak een takenlijst-app met een modern design waar ik taken kan toevoegen, afvinken en verwijderen."*
De AI genereert: een complete webapp met HTML, CSS, JavaScript en zelfs een database -- klaar om te gebruiken.

**Wie gebruikt vibe-coding?**
- **Niet-programmeurs** die snel een prototype willen maken
- **Ondernemers** die een idee willen testen zonder een developer in te huren
- **Studenten** die leren door te experimenteren
- **Ervaren developers** die snel een basis willen leggen

**Populaire vibe-coding platforms:**
- **Bolt.new** -- Bouw complete webapplicaties vanuit een tekstbeschrijving
- **Replit Agent** -- Een AI die een volledig project opzet, inclusief database en hosting
- **v0 (Vercel)** -- Genereer gebruikersinterfaces door ze te beschrijven
- **Lovable** -- Maak werkende apps door in gesprek te gaan met een AI
{% endinfo %}

{% quiz "Wat is het belangrijkste kenmerk van vibe-coding?" %}
<div class="quiz-options" role="group" aria-label="Antwoordopties">
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-VC1A" onclick="toggleAnswer('VC1A', this)">
<strong>A)</strong> Je moet de code regel voor regel controleren
</button>
<div class="answer-feedback" id="answer-VC1A" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Bij vibe-coding is het juist de bedoeling dat je de code niet hoeft te lezen -- je stuurt bij op basis van het resultaat.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-VC1B" onclick="toggleAnswer('VC1B', this)">
<strong>B)</strong> Je beschrijft wat je wilt en de AI genereert alles
</button>
<div class="answer-feedback" id="answer-VC1B" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
<strong>Correct!</strong><br>
Bij vibe-coding beschrijf je in gewone taal wat je nodig hebt, en de AI bouwt de volledige applicatie. Je focust op het "wat", niet het "hoe".
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-VC1C" onclick="toggleAnswer('VC1C', this)">
<strong>C)</strong> Je schrijft de code zelf en de AI controleert op fouten
</button>
<div class="answer-feedback" id="answer-VC1C" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Wat je beschrijft lijkt meer op een traditionele code-linter of reviewer. Bij vibe-coding schrijf je juist geen code zelf.
</div>
</div>
</div>
{% endquiz %}

## Kracht en grenzen van vibe-coding

{% info %}
**Wanneer werkt vibe-coding goed -- en wanneer niet?**

Vibe-coding is krachtig, maar het heeft duidelijke grenzen. Net als een kant-en-klare maaltijd: handig voor doordeweeks, maar niet geschikt voor een galadiner.

**Sterktes:**
- **Toegankelijk** -- Iedereen kan een idee omzetten naar een werkend prototype, ongeacht technische kennis
- **Snel** -- In minuten heb je een werkende applicatie in plaats van weken
- **Laagdrempelig experimenteren** -- Probeer tien ideeën uit en kies de beste
- **Leerervaring** -- Bekijk gegenereerde code om te leren hoe dingen werken

**Grenzen:**
- **Complexiteit** -- Bij grotere projecten raakt de AI het overzicht kwijt en genereert inconsistente of dubbele code
- **Onderhoud** -- Code die je niet begrijpt is moeilijk te repareren als er iets kapot gaat
- **Veiligheid** -- AI-gegenereerde code kan beveiligingslekken bevatten die je niet herkent
- **Schaalbaarheid** -- Een prototype is geen productiesysteem; vibe-coded apps breken vaak bij groei
{% endinfo %}

{% task %}
**Opdracht 1: Probeer vibe-coding zelf**

Ga naar **bolt.new** (gratis account) en probeer het volgende:

1. Beschrijf in één zin een simpele app die je wilt maken (bijvoorbeeld: "Een app waarmee ik mijn dagelijkse waterinname kan bijhouden")
2. Bekijk wat de AI genereert
3. Vraag om aanpassingen door te beschrijven wat je anders wilt (bijvoorbeeld: "Maak het kleurenschema blauw")
4. Probeer iets complexer te vragen en merk waar het lastiger wordt

**Reflectievragen:**
- Hoe goed begreep de AI jouw beschrijving?
- Wat ging makkelijk? Wat was lastig?
- Zou je het resultaat durven gebruiken voor een echt project?
{% endtask %}

## Van vibe-coding naar agentic coding

{% info %}
**Waarom pure "vibes" niet genoeg zijn voor serieuze projecten**

Vibe-coding is fantastisch voor prototypes, maar voor software die echt gebruikt wordt -- door klanten, in bedrijven, met gevoelige data -- heb je meer nodig. Dat is waar **agentic coding** begint.

Bij agentic coding werkt de AI niet als een "code-generator" die in één keer alles uitspuugt, maar als een **agent** die een volledige cyclus doorloopt: waarnemen, plannen, handelen, en leren.

**Vergelijking:**

| Aspect | Vibe-coding | Agentic coding |
|--------|------------|----------------|
| **Aanpak** | Beschrijf &rarr; genereer &rarr; klaar | Analyseer &rarr; plan &rarr; bouw &rarr; test &rarr; verbeter |
| **Controle** | Resultaat bekijken | Elke stap controleerbaar |
| **Fouten** | Opnieuw genereren | Agent herstelt zelf |
| **Complexiteit** | Simpele projecten | Grotere, echte projecten |
| **Metafoor** | Chef-kok die kookt op gevoel | Aannemer met bouwplan |

Een goed voorbeeld van agentic coding is **Claude Code** (Anthropic's CLI-tool): het leest je bestaande code, begrijpt de structuur, maakt een plan, schrijft wijzigingen, draait tests, en herstelt fouten -- allemaal in een loop totdat de taak af is.
{% endinfo %}

{% quiz "Wat is het belangrijkste verschil tussen vibe-coding en agentic coding?" %}
<div class="quiz-options" role="group" aria-label="Antwoordopties">
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-VC2A" onclick="toggleAnswer('VC2A', this)">
<strong>A)</strong> Agentic coding is sneller dan vibe-coding
</button>
<div class="answer-feedback" id="answer-VC2A" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Agentic coding is vaak juist langzamer omdat het grondiger te werk gaat. Het verschil zit in de aanpak, niet de snelheid.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-VC2B" onclick="toggleAnswer('VC2B', this)">
<strong>B)</strong> Agentic coding doorloopt een cyclus van plannen, bouwen, testen en verbeteren
</button>
<div class="answer-feedback" id="answer-VC2B" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
<strong>Correct!</strong><br>
Het kernverschil is dat een agentic tool de volledige agent-cyclus doorloopt: waarnemen, plannen, handelen en leren. Vibe-coding genereert code in één stap zonder deze structuur.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-VC2C" onclick="toggleAnswer('VC2C', this)">
<strong>C)</strong> Bij agentic coding heb je geen computer nodig
</button>
<div class="answer-feedback" id="answer-VC2C" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Beide aanpakken vereisen uiteraard een computer. Het verschil zit in hoe de AI te werk gaat, niet in de hardware.
</div>
</div>
</div>
{% endquiz %}

## Multi-agent orchestration

{% info %}
**Teams van gespecialiseerde AI-agents**

De volgende stap na agentic coding is **multi-agent orchestration**: in plaats van één AI-agent die alles doet, werk je met een **team** van gespecialiseerde agents die elk hun eigen rol hebben.

Vergelijk het met een bouwproject:
- **De Architect** -- Ontwerpt de structuur en maakt technische keuzes
- **De Bouwer** -- Schrijft de daadwerkelijke code
- **De Tester** -- Controleert of alles werkt en vindt fouten
- **De Reviewer** -- Beoordeelt de kwaliteit en veiligheid van de code
- **De Debugger** -- Lost problemen op wanneer iets niet werkt
- **De Manager** -- Coördineert het hele team en bewaakt de voortgang

**Hoe werkt dit in de praktijk?**

Je geeft een opdracht aan de "manager-agent", die het werk verdeelt over de specialisten. De architect maakt een plan, de bouwer voert het uit, de tester controleert, en als er fouten zijn springt de debugger in actie. Dit alles gebeurt automatisch, met de manager die het overzicht bewaakt.

De verbinding tussen al deze agents wordt mogelijk gemaakt door protocollen zoals **MCP (Model Context Protocol)** -- een standaard manier waarop AI-agents met tools en met elkaar communiceren.
{% endinfo %}

{% trivia %}
<details>
<summary><strong>Agent swarms: honderden agents tegelijk</strong> <span style="color: #666; font-size: 0.9rem; font-weight: normal">(klik om te lezen)</span></summary>

Onderzoekers experimenteren met zogenaamde "agent swarms" -- systemen waarbij **honderden AI-agents** tegelijk aan een project werken, elk met een klein, specifiek takenpakket. Denk aan een zwerm bijen: elke bij doet iets simpels, maar samen bouwen ze een complexe honingraat.

In de praktijk betekent dit dat een groot softwareproject opgedeeld kan worden in tientallen kleine taken die parallel uitgevoerd worden door gespecialiseerde agents. Eén agent refactort een module, een ander schrijft tests, een derde optimaliseert de database -- allemaal tegelijk.

Dit staat nog in de kinderschoenen, maar de eerste resultaten zijn indrukwekkend: projecten die normaal weken duren, worden in uren afgerond.
</details>
{% endtrivia %}

{% task %}
**Opdracht 2: Ontwerp je eigen multi-agent team**

Stel je voor dat je een webshop wilt bouwen met een team van AI-agents. Bedenk welke rollen je nodig hebt:

**Vragen om over na te denken:**
1. Welke specialisten heb je nodig? (Denk aan: designer, developer, tester, beveiligingsexpert, copywriter...)
2. Welke agent is de "manager" die het werk verdeelt?
3. In welke volgorde moeten de agents werken? Wat kan tegelijkertijd (parallel)?
4. Wat gebeurt er als de tester een fout vindt -- wie moet er dan in actie komen?
5. Hoe weet de manager dat het project klaar is?

*Tip: Teken een schema met de agents en pijlen die laten zien hoe ze samenwerken. Vergelijk je ontwerp met hoe een echt softwareteam werkt.*
{% endtask %}

## Wanneer gebruik je welke aanpak?

{% info %}
**Een beslisframework**

Elke aanpak heeft zijn plek. Het hangt af van wat je wilt bereiken, hoeveel risico je kunt nemen, en hoeveel controle je nodig hebt.

| Situatie | Aanpak | Waarom? |
|----------|--------|---------|
| Snel een idee testen | **Vibe-coding** | Snelheid boven alles; perfectie is niet nodig |
| Persoonlijk project of hobby-app | **Vibe-coding** | Laag risico; je bent de enige gebruiker |
| Feature toevoegen aan bestaand project | **Agentic coding** | AI begrijpt de context en test de integratie |
| Professionele software met gebruikers | **Agentic coding** | Betrouwbaarheid en veiligheid zijn essentieel |
| Groot project met meerdere systemen | **Orchestration** | Te complex voor één agent; specialisatie nodig |
| Bedrijfskritische applicatie | **Orchestration** | Maximale controle, kwaliteit en veiligheid |

**Risico's om in gedachten te houden:**
- **Vibe-coding:** Technische schuld -- code die moeilijk te onderhouden is; beveiligingsrisico's door onbegrepen code
- **Agentic coding:** Overmatig vertrouwen -- de agent kan fouten maken die je pas laat ontdekt; kosten van AI-gebruik
- **Orchestration:** Complexiteit van het systeem zelf -- meer agents betekent meer coördinatie en meer faalscenario's
{% endinfo %}

## De toekomst

{% info %}
**2027 en verder: wat staat ons te wachten?**

De ontwikkelingen in AI-gestuurd programmeren gaan razendsnel. Hier zijn de trends die de komende jaren waarschijnlijk dominant worden:

**Hybrid workflows**
De grenzen tussen vibe-coding, agentic coding en orchestration vervagen. Tools worden slimmer in het kiezen van de juiste aanpak voor elke taak: vibe-coding voor de eerste schets, agentic voor de uitwerking, orchestration voor de afronding.

**Standaardisatie**
Protocollen zoals MCP zorgen ervoor dat agents van verschillende makers kunnen samenwerken. Net zoals USB een standaard werd voor apparaten, wordt MCP de standaard voor AI-agent communicatie.

**AI-native development**
Nieuwe programmeertalen en frameworks worden ontworpen *voor* AI-agents, niet voor menselijke programmeurs. Code wordt meer een tussenproduct -- iets dat AI genereert en beheert, terwijl mensen zich richten op het ontwerp en de richting.

**De veranderende rol van de ontwikkelaar**
De focus verschuift van *code schrijven* naar *systemen ontwerpen* en *agents aansturen*. Developers worden steeds meer **architecten** en **orchestrators** -- mensen die weten wat er gebouwd moet worden en hoe ze AI-teams effectief aansturen.
{% endinfo %}

{% conclusion %}
## Samenvatting

De manier waarop we software maken verandert fundamenteel. Van het handmatig typen van elke regel code, naar het beschrijven van wat je wilt, naar complete AI-teams die autonoom samenwerken.

**Wat je hebt geleerd:**
- **Vibe-coding** maakt programmeren toegankelijk voor iedereen door code te genereren vanuit natuurlijke taal
- **Agentic coding** voegt structuur toe met de agent-cyclus: waarnemen, plannen, handelen, leren
- **Multi-agent orchestration** schaalt dit op naar teams van gespecialiseerde agents
- Elke aanpak heeft zijn **sterktes en grenzen** -- de kunst is de juiste te kiezen voor jouw situatie
- De rol van de mens verschuift van **coder** naar **architect en orchestrator**

**Wat wil je nu verder ontdekken?**

- **[Prompt Engineering](/artikelen/03-prompt-engineering/)** -- Leer betere instructies geven aan AI-tools
- **[Chatbots](/artikelen/01-chatbots-introductie/)** -- Terug naar de basis: wat zijn chatbots en hoe werken ze?
- **[Waarde en Impact](/artikelen/05-waarde-en-impact/)** -- Verdiep je in de maatschappelijke impact van AI
{% endconclusion %}
