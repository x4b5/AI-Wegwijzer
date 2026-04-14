---
title: "Claude Code"
description: "Begrijp wat Claude Code is, hoe het werkt als AI-agent in de terminal en hoe het verschilt van andere AI-programmeertools."
heroImage: /img/icons/informatie.png
heroImageAlt: "Informatie icoon"
---

{% metadata "Leerdoel: Begrijpen wat Claude Code is, hoe het werkt als AI-agent in de terminal en wat het onderscheidt van andere tools.", "Leestijd: 15-20 minuten" %}

## Inleiding

{% info %}
**Een AI-agent in actie**

Dit is een wat technischer artikel. Je hoeft geen programmeur te zijn om het te begrijpen, maar het helpt als je de eerdere artikelen over [AI-agents](/artikelen/04-ai-agents/) en [de laatste ontwikkelingen](/artikelen/07-laatste-ontwikkelingen/) hebt gelezen.

In dit artikel gaan we kijken naar een **concreet voorbeeld** van een AI-agent: **Claude Code**. Waar we eerder het concept "agent" bespraken -- een AI die zelfstandig taken uitvoert -- zien we hier hoe dat er in de praktijk uitziet. Claude Code is niet alleen een interessant technologisch verhaal, het laat ook zien hoe de relatie tussen mens en AI aan het veranderen is.

**Waarom dit artikel?** Om AI-geletterd te zijn hoef je niet te kunnen programmeren, maar het helpt enorm om te begrijpen *hoe* AI-agents concreet werken. Claude Code is daar een uitstekend voorbeeld van: je kunt het proces van waarnemen, plannen, handelen en leren letterlijk zien gebeuren.
{% endinfo %}

## Wat is Claude Code?

{% info %}
**Een AI-agent die leeft in de terminal**

Claude Code is een CLI-tool (Command Line Interface) ontwikkeld door **Anthropic**, het bedrijf achter het Claude-taalmodel. Het is een AI-agent die draait in je **terminal** -- het zwarte scherm waar programmeurs commando's typen.

In tegenstelling tot chatbots met een visuele interface (denk aan ChatGPT of Claude.ai in je browser), werkt Claude Code **direct met je bestanden en je code**. Het heeft geen mooie knoppen of menu's nodig -- het praat via tekst en voert commando's uit.

**Wat kan Claude Code?**
- **Bestanden lezen en schrijven** -- Het opent je projectbestanden, begrijpt de inhoud en maakt wijzigingen
- **Code uitvoeren** -- Het draait programma's om te testen of iets werkt
- **Git-commando's draaien** -- Het beheert versies van je code, maakt commits en branches
- **Tests uitvoeren** -- Het controleert automatisch of code correct functioneert
- **Bugs opsporen en oplossen** -- Het vindt fouten, analyseert de oorzaak en repareert ze
- **Zoeken op het web** -- Het kan documentatie en informatie opzoeken om problemen op te lossen
- **Meerdere bestanden tegelijk wijzigen** -- Het kan een wijziging doorvoeren die tientallen bestanden raakt, in een keer

**Het cruciale verschil met een chatbot:** een chatbot *geeft antwoorden*, Claude Code *voert acties uit*. Waar je bij ChatGPT een stuk code kopieert en zelf moet plakken, leest Claude Code je project, schrijft de wijzigingen en controleert of alles nog werkt -- allemaal zonder dat je zelf code hoeft te knippen en plakken.

Vergelijk het met het verschil tussen een reisadviseur die je vertelt hoe je moet rijden, en een chauffeur die daadwerkelijk het stuur overneemt.

**Een concreet voorbeeld:**
Stel, je hebt een website met 50 pagina's en je wilt op elke pagina de voettekst aanpassen. Met een chatbot zou je vragen "hoe pas ik de voettekst aan?", een antwoord krijgen, en vervolgens zelf 50 bestanden openen en wijzigen. Met Claude Code zeg je: "Pas de voettekst aan op alle pagina's zodat het nieuwe telefoonnummer erin staat." Claude Code zoekt alle relevante bestanden, wijzigt ze allemaal, en controleert of de website nog correct werkt.
{% endinfo %}

## Hoe werkt het?

{% info %}
**De agent-cyclus in de praktijk**

Zoals we in het artikel over [AI-agents](/artikelen/04-ai-agents/) bespraken, doorlopen agents een cyclus van waarnemen, plannen, handelen en leren. Claude Code is een perfect voorbeeld van deze cyclus in actie. Laten we elke stap bekijken en zien hoe deze zich vertaalt naar concrete acties.

In essentie werkt Claude Code als volgt: je typt een opdracht in gewoon Nederlands (of Engels), en de agent vertaalt die opdracht naar een reeks technische acties. De magie zit in het feit dat het niet slechts een vertaling is -- het is een intelligent proces waarbij de agent zelf beslissingen neemt over de beste aanpak.

**1. Waarnemen**
Claude Code begint met het lezen van je bestaande code. Het analyseert de projectstructuur, begrijpt welke bestanden er zijn, hoe ze samenhangen en wat de huidige staat is. Het zoekt naar configuratiebestanden, leest documentatie die in het project staat, en bouwt een mentaal model van hoe alles samenhangt. Het is alsof een nieuwe collega eerst een dag meekijkt en vragen stelt voordat die begint.

**2. Plannen**
Op basis van wat het heeft waargenomen, maakt Claude Code een plan. Als je vraagt "voeg een zoekfunctie toe", bedenkt het welke bestanden gewijzigd moeten worden, welke nieuwe bestanden nodig zijn, en in welke volgorde het werk moet gebeuren. Soms deelt het dit plan met je, zodat je kunt bijsturen voordat het begint.

**3. Handelen**
Nu voert Claude Code het plan uit: het schrijft code, maakt nieuwe bestanden aan, wijzigt bestaande bestanden en voert commando's uit. Het doet dit stap voor stap en vraagt toestemming voor riskante acties (zoals het verwijderen van bestanden). Je kunt live meekijken wat het doet -- elke actie wordt getoond in de terminal.

**4. Leren**
Na het handelen draait Claude Code tests om te controleren of alles werkt. Als een test faalt, analyseert het de foutmelding, past de aanpak aan en probeert opnieuw. Dit proces herhaalt zich totdat de taak geslaagd is -- of totdat het erkent dat het een probleem niet kan oplossen.

**Dit alles gebeurt in een loop.** Vergelijk het met een junior programmeur die een taak krijgt, het probeert, ziet dat het niet werkt, de fout analyseert en het opnieuw probeert. Het verschil is dat Claude Code dit in seconden doet in plaats van uren.

**Een concreet voorbeeld van de loop:**

Stel, je vraagt Claude Code: *"Voeg een donkere modus toe aan mijn website."*

1. **Waarnemen:** Claude Code leest je CSS-bestanden en HTML-templates om te begrijpen hoe je website er nu uitziet
2. **Plannen:** Het besluit dat het een CSS-bestand moet aanpassen, een toggle-knop moet toevoegen in de HTML, en JavaScript moet schrijven om de modus te wisselen
3. **Handelen:** Het schrijft de CSS voor donkere kleuren, voegt de knop toe aan de template, en schrijft het JavaScript
4. **Leren:** Het opent de website in een testomgeving, ziet dat de knop niet goed werkt, analyseert de fout, past het JavaScript aan, en test opnieuw -- nu werkt het

Deze hele cyclus kan meerdere keren rondgaan totdat het resultaat correct is.
{% endinfo %}

## Quiz: wat maakt Claude Code een agent?

{% quiz "Wat maakt Claude Code een AI-agent, in plaats van 'gewoon' een chatbot?" %}
<div class="quiz-options" role="group" aria-label="Antwoordopties">
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-CC1A" onclick="toggleAnswer('CC1A', this)">
<strong>A)</strong> Het gebruikt een geavanceerder taalmodel dan chatbots
</button>
<div class="answer-feedback" id="answer-CC1A" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Het taalmodel is een belangrijk onderdeel, maar dat alleen maakt iets nog geen agent. Een chatbot kan hetzelfde model gebruiken. Het verschil zit in wat de tool ermee <em>doet</em>.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-CC1B" onclick="toggleAnswer('CC1B', this)">
<strong>B)</strong> Het doorloopt zelfstandig de agent-cyclus (waarnemen, plannen, handelen, leren) en kan meerdere stappen uitvoeren zonder tussenkomst
</button>
<div class="answer-feedback" id="answer-CC1B" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
<strong>Correct!</strong><br>
Precies! Wat Claude Code tot een agent maakt is dat het zelfstandig de volledige cyclus doorloopt: het observeert je code, maakt een plan, voert acties uit, controleert het resultaat en past aan. Een chatbot geeft alleen antwoorden en wacht op je volgende vraag.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-CC1C" onclick="toggleAnswer('CC1C', this)">
<strong>C)</strong> Het draait in de terminal in plaats van in een browser
</button>
<div class="answer-feedback" id="answer-CC1C" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
De terminal is de <em>interface</em> die Claude Code gebruikt, maar dat maakt het op zichzelf geen agent. Je kunt ook een gewone chatbot in een terminal draaien. Het gaat om het gedrag: de zelfstandige cyclus van waarnemen, plannen, handelen en leren.
</div>
</div>
</div>
{% endquiz %}

## Verschil met andere tools

{% info %}
**Claude Code versus GitHub Copilot versus Cursor**

Er zijn meerdere AI-tools die programmeurs helpen, maar ze werken fundamenteel anders. Denk aan het verschil tussen een spellingcontrole, een schrijfassistent en een ghostwriter.

| Aspect | GitHub Copilot | Cursor | Claude Code |
|--------|---------------|--------|-------------|
| **Type** | Autocomplete + chat | AI-editor | AI-agent in terminal |
| **Interface** | In je bestaande editor | Eigen editor-applicatie | Terminal (CLI) |
| **Aanpak** | Suggesties per regel of blok | Chat + bewerking in editor | Volledige agent-cyclus |
| **Autonomie** | Laag -- jij beslist per suggestie | Medium -- AI stelt voor, jij accepteert | Hoog -- AI plant en voert uit |
| **Geschikt voor** | Code aanvullen, kleine suggesties | Grotere wijzigingen, refactoring | Complete taken, multi-file wijzigingen |

**Uitleg per tool:**

- **GitHub Copilot** is als een slimme autocorrectie: terwijl je typt, stelt het de volgende regel of functie voor. Jij behoudt volledige controle en kiest of je de suggestie accepteert. Het werkt *binnen* je bestaande editor (zoals VS Code).

- **Cursor** is een complete editor die AI diep geintegreerd heeft. Je kunt chatten met de AI over je code en wijzigingen laten doorvoeren. Het is als een assistent die naast je zit en meekijkt -- maar jij houdt het stuur vast.

- **Claude Code** werkt anders: het neemt een taak aan en voert die zelfstandig uit. Het leest je hele project, maakt een plan, wijzigt meerdere bestanden tegelijk, draait tests en herstelt fouten. Het is als een collega-programmeur die je een opdracht geeft en die zelfstandig uitvoert.

**Een analogie om het verschil te begrijpen:**
Stel je voor dat je een huis renoveert.
- **GitHub Copilot** is als een handige buurman die over je schouder meekijkt en zegt: "Je zou hier beter een andere schroef kunnen gebruiken." Handig, maar jij doet al het werk.
- **Cursor** is als een aannemer die naast je werkt: je bespreekt samen wat er moet gebeuren, en hij pakt een deel van het werk op terwijl jij toekijkt en bijstuurt.
- **Claude Code** is als een aannemer die je de opdracht geeft: "Renoveer de badkamer." Hij inspecteert de ruimte, maakt een plan, koopt materialen, voert het werk uit, en laat je het resultaat zien -- met de vraag of je het goedkeurt.

**De juiste tool voor de juiste taak:**
Geen van deze tools is "de beste" -- ze vullen elkaar aan. Veel programmeurs gebruiken Copilot voor dagelijkse suggesties, Cursor voor grotere bewerkingen, en Claude Code voor complexe taken die meerdere bestanden raken. Het kiezen van de juiste tool is zelf een vaardigheid die steeds belangrijker wordt.
{% endinfo %}

{% trivia %}
<details>
<summary><strong>De terminal als interface</strong> <span style="color: #666; font-size: 0.9rem; font-weight: normal">(klik om te lezen)</span></summary>

De terminal (of command line) bestaat al sinds de jaren '60. Het is de oudste manier om met een computer te communiceren -- nog van voor het bestaan van muizen, vensters en iconen. Programmeurs gebruiken het nog steeds dagelijks omdat het **snel en krachtig** is: je typt een commando en het wordt direct uitgevoerd, zonder door menu's te hoeven klikken.

Claude Code kiest bewust voor de terminal als interface. Waarom? Omdat het de AI **directe toegang** geeft tot dezelfde gereedschappen die programmeurs dagelijks gebruiken: git (voor versiebeheer), npm (voor het beheren van softwarepakketten), python (voor het uitvoeren van scripts), en tientallen andere tools.

Het is vergelijkbaar met het verschil tussen een keuken met een touchscreen-paneel en een professionele keuken met losse apparaten: het ziet er minder mooi uit, maar een chef-kok kan er veel meer mee.

Ironisch genoeg is de terminal daarmee een perfecte interface voor AI: geen visuele elementen om te interpreteren, alleen tekst in en tekst uit -- precies wat een taalmodel het beste kan.
</details>
{% endtrivia %}

## Een bredere blik: het landschap van AI-programmeertools

{% info %}
**Claude Code staat niet alleen**

Het is belangrijk om te beseffen dat Claude Code onderdeel is van een **breder landschap** van AI-programmeertools dat snel groeit. Waar een paar jaar geleden alleen GitHub Copilot bestond, zijn er nu tientallen tools met elk hun eigen benadering. Naast de eerder genoemde tools (Copilot, Cursor) zijn er ook:

- **Aider** -- Een open-source AI-programmeertool die, net als Claude Code, in de terminal draait. Het ondersteunt meerdere taalmodellen en laat je kiezen welk "brein" je wilt gebruiken. Open-source betekent dat iedereen de broncode kan bekijken en verbeteren.
- **Devin** -- Gepresenteerd als "de eerste AI-software-engineer". Devin kan zelfstandig hele projecten opzetten, inclusief het aanmaken van accounts en het deployen (live zetten) van websites. Het is een van de meest autonome tools op de markt.
- **OpenAI Codex CLI** -- OpenAI's eigen CLI-tool, vergelijkbaar met Claude Code maar aangedreven door hun GPT-modellen. Het laat zien dat meerdere AI-bedrijven dezelfde richting op bewegen.
- **Windsurf** -- Een AI-editor (vergelijkbaar met Cursor) die zich richt op een naadloze samenwerking tussen mens en AI, met de nadruk op een prettige gebruikerservaring.

**Waarom zijn er zoveel tools?**
Elk bedrijf en elke community heeft een andere visie op hoe mens en AI het beste kunnen samenwerken. Sommigen geloven in maximale autonomie (laat de AI het uitzoeken), anderen in maximale controle (de mens beslist alles). De variatie aan tools weerspiegelt dit spectrum.

**Het tempo van ontwikkeling:**
Dit landschap verandert razendsnel. Elke paar maanden verschijnen er nieuwe tools of worden bestaande tools fundamenteel verbeterd. Wat vandaag de meest geavanceerde tool is, kan over zes maanden alweer ingehaald zijn. Dit maakt het belangrijk om niet te veel te hechten aan een specifieke tool, maar de **onderliggende principes** te begrijpen -- zoals de agent-cyclus, het verschil tussen suggesties en autonome acties, en het belang van menselijke controle.

**Wat ze delen:**
Ondanks de verschillen delen al deze tools een gemeenschappelijke ambitie: **het toegankelijker maken van softwareontwikkeling**. Of je nu een ervaren programmeur bent of iemand met een goed idee maar zonder technische achtergrond -- AI-programmeertools verlagen de drempel om software te bouwen.
{% endinfo %}

## MCP: de universele stekker voor AI-agents

{% info %}
**Claude Code en het Model Context Protocol**

In het artikel over [de laatste ontwikkelingen](/artikelen/07-laatste-ontwikkelingen/) bespraken we het **MCP (Model Context Protocol)** -- een open standaard die het mogelijk maakt om AI-agents te verbinden met externe tools en databronnen.

Claude Code ondersteunt MCP volledig. Dit betekent dat het niet beperkt is tot het lezen en schrijven van bestanden. Via MCP kan Claude Code verbinden met:
- **Databases** -- Data opvragen en analyseren
- **API's** -- Communiceren met externe diensten
- **Bestandssystemen** -- Werken met bestanden op afstand
- **Communicatietools** -- Berichten versturen via Slack of andere platforms
- **Webservices** -- Informatie ophalen van het internet
- **Monitoring-systemen** -- Prestaties en fouten van applicaties in de gaten houden
- **Projectmanagement-tools** -- Taken en issues beheren in systemen als Jira of Linear

**Een praktijkvoorbeeld:**
Stel je voor dat je een website beheert en er is een probleem met de database. Zonder MCP zou je Claude Code alleen kunnen vragen om de code te bekijken -- het zou geen toegang hebben tot de daadwerkelijke database. Met MCP verandert dat:

Claude Code leest je code, begrijpt hoe de database is opgezet, verbindt via MCP met de database, analyseert de data, ontdekt dat een bepaalde tabel te vol raakt, en stelt een oplossing voor -- inclusief het schrijven van de code om het probleem op te lossen. Dit alles zonder dat je zelf SQL-queries hoeft te schrijven of handmatig de database hoeft te inspecteren.

Een ander voorbeeld: Claude Code kan via MCP een bericht sturen naar het Slack-kanaal van je team om te melden dat een taak is afgerond, of het kan een issue aanmaken in je projectmanagement-tool als het een probleem tegenkomt dat het niet zelf kan oplossen.

**MCP als ecosysteem:**
Dankzij MCP groeit het aantal tools waarmee Claude Code kan samenwerken voortdurend. Ontwikkelaars wereldwijd bouwen MCP-servers voor hun eigen tools en diensten, waardoor Claude Code steeds meer kan zonder dat Anthropic zelf elke integratie hoeft te bouwen.

**Waarom is MCP belangrijk?**
Zonder MCP zou elke AI-tool zijn eigen manier moeten bedenken om met externe diensten te praten. Dat zou chaos opleveren -- vergelijk het met een wereld waarin elk apparaat zijn eigen unieke stekker heeft. MCP biedt een **universele standaard**, zodat tools en diensten van verschillende makers naadloos kunnen samenwerken. Dit maakt het hele ecosysteem krachtiger en toegankelijker.
{% endinfo %}

{% quiz "Wat is de rol van MCP bij Claude Code?" %}
<div class="quiz-options" role="group" aria-label="Antwoordopties">
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-CC2A" onclick="toggleAnswer('CC2A', this)">
<strong>A)</strong> MCP is het taalmodel dat Claude Code aandrijft
</button>
<div class="answer-feedback" id="answer-CC2A" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
MCP is geen taalmodel. Het taalmodel achter Claude Code heet Claude (ontwikkeld door Anthropic). MCP is iets anders -- denk aan een <em>verbinding</em> in plaats van een <em>brein</em>.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-CC2B" onclick="toggleAnswer('CC2B', this)">
<strong>B)</strong> MCP is een protocol dat Claude Code verbindt met externe tools zoals databases, API's en communicatieplatforms
</button>
<div class="answer-feedback" id="answer-CC2B" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
<strong>Correct!</strong><br>
MCP (Model Context Protocol) is een open standaard die AI-agents zoals Claude Code in staat stelt om te communiceren met externe tools en databronnen. Het is als een universele stekker die de AI verbindt met de buitenwereld.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-CC2C" onclick="toggleAnswer('CC2C', this)">
<strong>C)</strong> MCP is de programmeertaal waarin Claude Code geschreven is
</button>
<div class="answer-feedback" id="answer-CC2C" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
MCP is geen programmeertaal. Het is een <em>protocol</em> -- een set afspraken over hoe AI-agents en externe tools met elkaar communiceren. Vergelijk het met USB: dat is ook geen programmeertaal, maar een standaard voor hoe apparaten met elkaar verbinden.
</div>
</div>
</div>
{% endquiz %}

## Opdrachten

{% task %}
**Opdracht 1: Bekijk een Claude Code demo**

Zoek op YouTube naar **"Claude Code demo"** of bezoek de [Anthropic-website](https://www.anthropic.com) om te zien hoe Claude Code in de praktijk werkt. Er zijn veel video's beschikbaar van enkele minuten tot uitgebreide tutorials.

**Let tijdens het bekijken op de volgende punten:**

1. **De agent-cyclus** -- Welke stappen zie je de agent nemen? Herken je de fasen waarnemen, plannen, handelen en leren?
2. **Autonomie** -- Hoe zelfstandig werkt Claude Code? Waar vraagt het om toestemming?
3. **Het verschil met een chatbot** -- Hoe verschilt wat je ziet van een gesprek met ChatGPT of Claude.ai?
4. **Toepassingen** -- Waar zou je dit zelf willen gebruiken, zelfs als je geen programmeur bent?

**Reflectie:**
Bespreek met een medestudent of schrijf op: vind je het geruststellend of juist ongemakkelijk dat een AI zelfstandig bestanden kan aanpassen op je computer? Waarom?
{% endtask %}

{% task %}
**Opdracht 2: Vergelijk AI-programmeertools**

Bekijk de websites van twee of meer van de volgende tools:
- **GitHub Copilot** (github.com/features/copilot)
- **Cursor** (cursor.com)
- **Claude Code** (docs.anthropic.com)

Maak een vergelijking op basis van:
1. Hoe presenteert de tool zichzelf? Welke woorden gebruiken ze?
2. Voor wie lijkt de tool bedoeld te zijn?
3. Hoeveel controle heeft de gebruiker volgens de beschrijving?
4. Welke tool zou je zelf het liefst proberen, en waarom?

*Tip: Let op het taalgebruik. Woorden als "suggesties", "assistent" en "copiloot" wijzen op een ander autonomieniveau dan "agent", "automatisch" en "zelfstandig".*
{% endtask %}

## Beperkingen en verantwoord gebruik

{% info %}
**Krachtig, maar niet perfect**

Claude Code is een indrukwekkende tool, maar het is belangrijk om de beperkingen te kennen. Blindelings vertrouwen op een AI-agent is net zo onverstandig als een huis bouwen zonder de constructie te controleren.

**Beperkingen:**
- **Het kan fouten maken in code** -- AI genereert soms code die er correct uitziet maar subtiele bugs bevat. Menselijke controle blijft essentieel.
- **Onverwachte acties** -- In theorie kan het bestanden verwijderen of verkeerde commando's uitvoeren. Daarom vraagt Claude Code toestemming voor riskante acties.
- **Geen echte begrip** -- Het "begrijpt" code op basis van patronen, niet op de manier waarop een mens begrijpt wat code doet. Dit kan leiden tot oplossingen die technisch werken maar conceptueel verkeerd zijn.
- **Kosten** -- Claude Code werkt via een API met kosten per gebruik. Complexe taken kunnen oplopen in kosten.
- **Geen vervanging voor een programmeur** -- Het is een krachtige assistent, geen autonome ontwikkelaar. Je hebt nog steeds iemand nodig die begrijpt wat er gebouwd moet worden en of het resultaat klopt.
- **Context-limiet** -- Claude Code kan niet oneindig veel informatie tegelijk verwerken. Bij hele grote projecten met duizenden bestanden kan het moeite hebben om het volledige overzicht te bewaren.

**Verantwoord gebruik:**
- **Altijd controleren** -- Review de code die Claude Code schrijft, net zoals je het werk van een collega zou nakijken
- **Geen gevoelige data onbeschermd delen** -- Wees bewust van welke informatie je deelt met de AI
- **Begrijpen wat de agent doet** -- Accepteer geen wijzigingen die je niet begrijpt
- **Toestemming serieus nemen** -- Als Claude Code vraagt of het een actie mag uitvoeren, lees dan wat het wil doen voordat je "ja" zegt
- **Backup bewaren** -- Zorg dat je een back-up hebt van je project voordat je grote wijzigingen laat uitvoeren

**De gouden regel:**
Behandel een AI-agent zoals je een nieuwe medewerker zou behandelen: geef duidelijke instructies, controleer het werk, geef feedback en bouw geleidelijk vertrouwen op. Laat een nieuwe medewerker ook niet op dag een de hele productieomgeving beheren.
{% endinfo %}

{% trivia %}
<details>
<summary><strong>Waarom vraagt Claude Code toestemming?</strong> <span style="color: #666; font-size: 0.9rem; font-weight: normal">(klik om te lezen)</span></summary>

Anthropic heeft Claude Code bewust ontworpen met een **toestemmingssysteem**. Voordat de agent een potentieel riskante actie uitvoert -- zoals het verwijderen van een bestand, het uitvoeren van een onbekend commando of het wijzigen van systeeminstellingen -- vraagt het expliciet om jouw goedkeuring.

Dit is een voorbeeld van het principe van **"human in the loop"**: de mens blijft altijd de eindverantwoordelijke. De AI mag voorstellen doen en uitvoeren, maar bij belangrijke beslissingen moet een mens bevestigen.

Dit principe zie je terug in veel AI-toepassingen: zelfrijdende auto's die de bestuurder waarschuwen, medische AI die een diagnose voorstelt maar de dokter laat beslissen, en financiele AI die transacties signaleert maar een mens laat goedkeuren.

Bij Claude Code werkt dit concreet zo: als je de agent vraagt iets te doen, toont het eerst wat het *van plan is* voordat het actie onderneemt. Je ziet bijvoorbeeld: "Ik wil het bestand `config.js` verwijderen en een nieuw bestand `config.ts` aanmaken. Mag ik doorgaan?" Je kunt dan "ja" zeggen, "nee" zeggen, of de opdracht aanpassen.

Het is een bewuste ontwerpkeuze die laat zien dat verantwoorde AI niet alleen gaat over wat de technologie *kan*, maar ook over wat we de technologie *laten* doen.
</details>
{% endtrivia %}

## Wat betekent dit voor de toekomst?

{% info %}
**Van hulpmiddel naar samenwerkingspartner**

Claude Code en vergelijkbare tools markeren een verschuiving in hoe we over AI-tools nadenken. We gaan van AI als **hulpmiddel** (het geeft antwoorden als je een vraag stelt) naar AI als **samenwerkingspartner** (het neemt taken op zich en voert ze zelfstandig uit).

Dit heeft gevolgen die verder reiken dan programmeren:

- **Onderwijs**: Studenten kunnen complexere projecten realiseren omdat AI het technische zware werk overneemt. De nadruk verschuift van *hoe* je iets bouwt naar *wat* je wilt bouwen en *waarom*.
- **Werk**: De rol van programmeur verandert van "code schrijven" naar "AI-agents aansturen en controleren". Nieuwe vaardigheden worden belangrijk: goed kunnen uitleggen wat je wilt (denk aan [prompt engineering](/artikelen/03-prompt-engineering/)), resultaten beoordelen, en risico's inschatten.
- **Toegankelijkheid**: Mensen zonder programmeerervaring krijgen steeds meer mogelijkheden om hun ideeen technisch te realiseren.
- **Kwaliteitscontrole**: AI-agents worden steeds beter in het zelf controleren van hun werk, maar menselijk toezicht blijft cruciaal -- vooral bij gevoelige toepassingen.

De kernvraag is niet *of* AI-agents deel zullen uitmaken van onze werkdag, maar *hoe* we er verantwoord mee omgaan. En dat begint met begrijpen hoe ze werken -- precies wat dit artikel probeert te doen.

**De parallel met andere technologische verschuivingen:**
Net zoals de rekenmachine wiskundigen niet overbodig maakte (maar hun werk veranderde), en de tekstverwerker schrijvers niet verving (maar hun proces transformeerde), zo zullen AI-agents programmeurs niet vervangen. Maar de aard van het werk verandert fundamenteel: van code *typen* naar resultaten *sturen*.

Wie vandaag leert begrijpen hoe AI-agents werken, bereidt zich voor op een toekomst waarin deze tools overal aanwezig zijn -- niet alleen in programmeren, maar in elk kenniswerk.
{% endinfo %}

{% conclusion %}
## Samenvatting

Claude Code is een concreet voorbeeld van hoe AI-agents in de praktijk werken. Het is geen chatbot die antwoorden geeft, maar een agent die zelfstandig de cyclus van waarnemen, plannen, handelen en leren doorloopt -- direct in de terminal van een programmeur. Het laat zien hoe de grens tussen "tool" en "samenwerkingspartner" aan het vervagen is.

**Wat je hebt geleerd:**
- Claude Code is een CLI-tool van Anthropic die als AI-agent in de terminal werkt
- Het doorloopt zelfstandig de agent-cyclus: waarnemen, plannen, handelen en leren
- Het verschilt van tools als Copilot en Cursor door zijn hogere autonomie en volledige agent-cyclus
- Via MCP kan het verbinden met externe tools, databases en diensten
- Het maakt deel uit van een breder en snel groeiend landschap van AI-programmeertools
- Het is krachtig maar niet perfect -- menselijke controle en verantwoord gebruik blijven essentieel
- De terminal is een bewuste keuze: directe toegang tot de gereedschappen die programmeurs gebruiken
- Het principe van "human in the loop" zorgt ervoor dat de mens de eindverantwoordelijkheid behoudt

**Kernbegrippen uit dit artikel:**
- **CLI (Command Line Interface)** -- Een tekstgebaseerde interface om met een computer te communiceren
- **Agent-cyclus** -- De loop van waarnemen, plannen, handelen en leren die een AI-agent doorloopt
- **MCP (Model Context Protocol)** -- Een open standaard die AI-agents verbindt met externe tools
- **Human in the loop** -- Het principe dat een mens de eindverantwoordelijkheid houdt over AI-acties

**Verder lezen:**
- [AI-Agents](/artikelen/04-ai-agents/) -- Terug naar de basis van agents
- [Laatste Ontwikkelingen](/artikelen/07-laatste-ontwikkelingen/) -- Meer over MCP en recente ontwikkelingen
- [Van Vibe-Coding naar Agentic Orchestration](/artikelen/09-vibe-coding-agentic-orchestration/) -- De grotere evolutie van AI-gestuurd programmeren
{% endconclusion %}
