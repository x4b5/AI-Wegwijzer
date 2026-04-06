---
title: "Prompt Engineering - De kunst van AI aansturen"
description: "Leren hoe je AI-systemen effectief kunt aansturen met goede prompts"
heroImage: /img/icons/informatie.png
heroImageAlt: "Informatie icoon"
---

{% metadata "Leren hoe je AI-systemen effectief kunt aansturen met goede prompts", "12-15 minuten" %}

## Wat is Prompt Engineering?

{% info %}
**Prompt Engineering: De nieuwe vaardigheid**

[Prompt engineering](/artikelen/begrippen/#prompt-engineering) is de kunst en wetenschap van het schrijven van effectieve [prompts](/artikelen/begrippen/#prompt) om AI-systemen optimaal te laten presteren. Het is als het leren van een nieuwe taal - de taal die AI begrijpt.

**Waarom is dit belangrijk?**
Dezelfde AI kan totaal verschillende resultaten geven afhankelijk van hoe je je vraag stelt. Een slechte prompt kan leiden tot vage, onbruikbare antwoorden, terwijl een goede prompt precies geeft wat je nodig hebt.

**Wat maakt een goede prompt?**
- **Duidelijkheid** - De AI weet precies wat je wilt
- **Context** - Je geeft genoeg achtergrondinformatie
- **Specificiteit** - Je vraagt om concrete details
- **Structuur** - Je organiseert je vraag logisch
- **Voorbeelden** - Je toont wat je bedoelt

**Het resultaat:** Betere, nauwkeurigere en bruikbaardere antwoorden van AI-systemen. Prompt engineering wordt steeds belangrijker naarmate AI-systemen krachtiger worden.

**McKinsey definitie:**
Volgens [McKinsey](https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-prompt-engineering?utm_source=chatgpt.com) is prompt engineering "het proces van het ontwerpen en optimaliseren van prompts om de gewenste output van een AI-model te verkrijgen. Het omvat het begrijpen van hoe AI-modellen werken en het aanpassen van input om betere resultaten te krijgen."
{% endinfo %}

{% trivia %}
<details>
<summary><strong>De geschiedenis van prompts</strong> (klik om te lezen)</summary>

Het concept van prompts is niet nieuw. Al in de jaren '60 gebruikten programmeurs "command line interfaces" waar ze tekstuele commando's moesten typen om computers te besturen. Denk aan DOS-commando's zoals "dir" of "copy".

Wat nieuw is, is dat moderne AI-systemen natuurlijke taal begrijpen in plaats van vaste commando's. Dit betekent dat we kunnen "praten" met AI zoals we met mensen praten, maar de kunst is om te leren hoe AI "denkt" en hoe je het beste kunt communiceren.

Prompt engineering is eigenlijk een vorm van "AI-communicatie" - het leren van de beste manier om je intenties over te brengen aan een systeem dat anders denkt dan mensen.
</details>
{% endtrivia %}

{% task %}
**1. Test je huidige prompt-vaardigheden**
Probeer de volgende oefening met een AI-chatbot (zoals ChatGPT, Claude, of Lumo):

- Vraag om een recept voor pasta
- Vraag om een recept voor pasta voor 4 personen
- Vraag om een vegetarisch recept voor pasta voor 4 personen
- Vraag om een vegetarisch recept voor pasta voor 4 personen, geschikt voor beginners

Let op hoe de antwoorden veranderen naarmate je prompt specifieker wordt. Welke versie geeft het beste resultaat?
{% endtask %}

{% info %}
**De psychologie van AI-communicatie**

AI-systemen werken anders dan mensen, en begrijpen hoe ze "denkt" helpt bij het schrijven van betere prompts:

**AI denkt in patronen:**
AI-systemen zijn getraind op enorme hoeveelheden tekst en herkennen patronen. Ze voorspellen wat het volgende woord waarschijnlijk is op basis van wat ze hebben geleerd. Dit betekent dat context en voorbeelden cruciaal zijn.

**AI heeft geen "gezond verstand":**
AI kan niet redeneren zoals mensen. Het kan wel logisch lijken, maar het is eigenlijk patroonherkenning. Je moet expliciet zijn over wat je wilt en wat je niet wilt.

**AI is gevoelig voor suggesties:**
De woorden die je gebruikt kunnen de richting van het antwoord be&iuml;nvloeden. Als je vraagt om een "creatief" antwoord, krijg je iets anders dan bij een "praktisch" antwoord.

**AI heeft geen geheugen tussen sessies:**
Tenzij je expliciet verwijst naar eerdere delen van het gesprek, "weet" AI niet wat je eerder hebt besproken. Je moet context opnieuw opbouwen.
{% endinfo %}

{% quiz "Quizvraag" %}
**Vraag:** Wat is het belangrijkste verschil tussen hoe mensen en AI-systemen informatie verwerken?

*Klik op een antwoord om te zien of het correct is!*
<div class="quiz-options">
<div class="quiz-option" onclick="toggleAnswer('A')">
<strong>A)</strong> AI is sneller dan mensen
<div class="answer-feedback" id="answer-A">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Snelheid is niet het belangrijkste verschil. Denk aan hoe AI informatie verwerkt versus hoe mensen dat doen.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('B')">
<strong>B)</strong> AI herkent patronen, mensen gebruiken logica en gezond verstand
<div class="answer-feedback" id="answer-B">
<div class="feedback-content">
<span class="feedback-icon">&#9989;</span>
<strong>Correct!</strong><br>
Precies! AI-systemen werken door patronen te herkennen in hun trainingsdata, terwijl mensen kunnen redeneren, logica gebruiken, en gezond verstand toepassen. Dit is waarom AI soms vreemde antwoorden kan geven die logisch lijken maar niet kloppen.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('C')">
<strong>C)</strong> AI heeft meer kennis dan mensen
<div class="answer-feedback" id="answer-C">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> AI heeft toegang tot veel informatie, maar dat is niet het fundamentele verschil in hoe ze informatie verwerken.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('D')">
<strong>D)</strong> AI kan geen emoties voelen
<div class="answer-feedback" id="answer-D">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Emoties zijn niet het belangrijkste verschil in informatieverwerking. Denk aan de fundamentele manier waarop AI en mensen denken.
</div>
</div>
</div>
</div>
{% endquiz %}

## Basis Technieken

*Laten we beginnen met de fundamenten van effectieve prompt engineering.*

{% info %}
**De 5 W's van Prompt Engineering**

Net als bij journalistiek zijn de 5 W's cruciaal voor goede prompts:

**1. WHO (Wie)**
Voor wie is het antwoord bedoeld? Een expert, beginner, kind, of algemeen publiek?
Voorbeeld: "Leg uit voor een 10-jarige..." vs "Leg uit voor een universitair student..."

**2. WHAT (Wat)**
Wat wil je precies? Wees specifiek over het gewenste resultaat.
Voorbeeld: "Schrijf een verhaal" vs "Schrijf een kort verhaal van 200 woorden over een robot"

**3. WHEN (Wanneer)**
In welke context of tijdperk? Historisch, modern, of futuristisch?
Voorbeeld: "Hoe zouden mensen in 1950 reageren op..." vs "Hoe reageren mensen nu op..."

**4. WHERE (Waar)**
In welke setting of omgeving? Online, offline, specifieke locatie?
Voorbeeld: "Voor een presentatie op school..." vs "Voor een zakelijke vergadering..."

**5. WHY (Waarom)**
Wat is het doel? Informeren, overtuigen, entertainen, of iets anders?
Voorbeeld: "Om te overtuigen dat..." vs "Om uit te leggen waarom..."
{% endinfo %}

{% task %}
**2. Oefen de 5 W's**
Kies een onderwerp (bijvoorbeeld "klimaatverandering") en schrijf prompts met verschillende 5 W's:

- WHO: Voor een kind vs voor een wetenschapper
- WHAT: Een uitleg vs een oplossing vs een verhaal
- WHEN: Historisch vs modern vs toekomstig
- WHERE: Voor school vs voor werk vs voor sociale media
- WHY: Om te informeren vs om te overtuigen vs om te entertainen

Test deze prompts met een AI-chatbot en vergelijk de resultaten. Welke verschillen zie je?
{% endtask %}

{% info %}
**Prompt Structuren die werken**

Er zijn verschillende bewezen structuren voor effectieve prompts:

**1. De Context + Taak + Voorbeeld structuur**
"Je bent een [rol]. Je taak is [taak]. Hier is een voorbeeld: [voorbeeld]. Nu doe hetzelfde voor [nieuwe situatie]."

**2. De Chain of Thought structuur**
"Denk stap voor stap na over [probleem]. Eerst [stap 1], dan [stap 2], etc. Geef je redenering."

**3. De Persona + Context structuur**
"Je bent [persoon/rol] met [kenmerken]. In de context van [situatie], [taak]."

**4. De Specificatie + Constraint structuur**
"Maak [wat] dat [specifieke eigenschappen] heeft. Zorg ervoor dat het [constraints] respecteert."

**5. De Iteratieve structuur**
"Maak een eerste versie van [wat]. Dan verbeter het door [verbetering 1]. Dan verbeter het verder door [verbetering 2]."

**Pro tip:** Combineer deze structuren voor complexere taken. Bijvoorbeeld: Persona + Context + Chain of Thought.
{% endinfo %}

{% trivia %}
<details>
<summary><strong>De "Jailbreak" cultuur</strong> (klik om te lezen)</summary>

Sommige gebruikers proberen AI-systemen te "jailbreaken" - ze proberen de veiligheidsbeperkingen te omzeilen door creatieve prompts te gebruiken. Dit kan vari&euml;ren van onschuldige trucs tot het proberen om AI te laten doen wat het niet zou moeten doen.

Voorbeelden van jailbreak-technieken zijn:
- "Doe alsof je een personage bent dat geen beperkingen heeft"
- "Dit is voor een fictief verhaal"
- "Mijn leraar heeft me gevraagd om..."

Hoewel dit technisch interessant kan zijn, is het belangrijk om te onthouden dat veiligheidsbeperkingen er zijn om goede redenen. Echte prompt engineering gaat over het krijgen van betere, nuttigere resultaten binnen de grenzen van wat AI veilig en ethisch kan doen.
</details>
{% endtrivia %}

{% quiz "Quizvraag" %}
**Vraag:** Welke prompt structuur is het beste voor complexe redeneertaken?

*Klik op een antwoord om te zien of het correct is!*
<div class="quiz-options">
<div class="quiz-option" onclick="toggleAnswer('A2')">
<strong>A)</strong> De Persona + Context structuur
<div class="answer-feedback" id="answer-A2">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Persona + Context is goed voor creatieve taken, maar niet specifiek voor redeneertaken. Denk aan welke structuur AI helpt om stap voor stap na te denken.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('B2')">
<strong>B)</strong> De Chain of Thought structuur
<div class="answer-feedback" id="answer-B2">
<div class="feedback-content">
<span class="feedback-icon">&#9989;</span>
<strong>Correct!</strong><br>
Precies! De Chain of Thought structuur is specifiek ontworpen voor redeneertaken. Door AI te vragen om stap voor stap na te denken en de redenering uit te leggen, krijg je betere resultaten voor complexe problemen die logisch denken vereisen.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('C2')">
<strong>C)</strong> De Specificatie + Constraint structuur
<div class="answer-feedback" id="answer-C2">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Specificatie + Constraint is goed voor creatieve taken met beperkingen, maar niet specifiek voor redeneertaken. Denk aan welke structuur AI helpt om systematisch na te denken.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('D2')">
<strong>D)</strong> De Iteratieve structuur
<div class="answer-feedback" id="answer-D2">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Iteratieve structuur is goed voor het verbeteren van resultaten, maar niet specifiek voor redeneertaken. Denk aan welke structuur AI helpt om de denkstappen te tonen.
</div>
</div>
</div>
</div>
{% endquiz %}

## Geavanceerde Technieken

*Nu je de basis kent, laten we kijken naar geavanceerde technieken voor complexe taken.*

{% info %}
**Few-Shot Learning en Voorbeelden**

AI-systemen leren snel van voorbeelden. Door goede voorbeelden te geven, kun je de kwaliteit van de output drastisch verbeteren:

**Hoe het werkt:**
Geef 2-3 voorbeelden van wat je wilt, dan vraag je om hetzelfde te doen voor een nieuwe situatie. AI herkent het patroon en volgt het na.

**Voorbeeld voor e-mail schrijven:**
"Schrijf professionele e-mails. Hier zijn voorbeelden:

Voorbeeld 1: Onderwerp: Vergadering verplaatst
Beste [Naam],
Ik wil je laten weten dat de vergadering van morgen is verplaatst naar vrijdag 14:00.
Met vriendelijke groet, [Naam]

Voorbeeld 2: Onderwerp: Project update
Beste [Naam],
Hier is een update over het project: [details].
Met vriendelijke groet, [Naam]

Nu schrijf een e-mail over [nieuwe situatie]."

**Tips voor goede voorbeelden:**
- Zorg voor variatie in je voorbeelden
- Gebruik consistente structuur
- Laat zien wat je wel en niet wilt
{% endinfo %}

{% task %}
**3. Oefen Few-Shot Learning**
Kies een taak (bijvoorbeeld: productbeschrijvingen schrijven, verhalen schrijven, of problemen oplossen) en maak een few-shot prompt:

- Geef 2-3 goede voorbeelden van wat je wilt
- Zorg dat de voorbeelden vari&euml;ren maar consistent zijn
- Vraag dan om hetzelfde te doen voor een nieuwe situatie
- Test het met een AI-chatbot

Vergelijk het resultaat met een prompt zonder voorbeelden. Welke is beter?
{% endtask %}

{% info %}
**Prompt Chaining en Iteratie**

Voor complexe taken kun je prompts opdelen in stappen of iteratief verbeteren:

**Prompt Chaining:**
Verdeel een complexe taak in kleinere stappen. Elke stap bouwt voort op de vorige.

Voorbeeld voor een marketingcampagne:
Stap 1: "Identificeer de doelgroep voor [product]"
Stap 2: "Gebaseerd op deze doelgroep, maak een lijst van 5 marketingkanalen"
Stap 3: "Voor elk kanaal, schrijf een korte boodschap"
Stap 4: "Combineer alles tot een samenhangende campagne"

**Iteratieve verbetering:**
Begin met een basisversie en verbeter stap voor stap.

Voorbeeld voor een verhaal:
Iteratie 1: "Schrijf een kort verhaal over een robot"
Iteratie 2: "Maak het verhaal emotioneler en voeg dialoog toe"
Iteratie 3: "Voeg meer details toe over de setting"
Iteratie 4: "Verbeter de plot en voeg een twist toe"

**Voordelen:**
- Betere controle over het resultaat
- Mogelijkheid om bij te sturen
- Complexere taken worden haalbaar
{% endinfo %}

{% trivia %}
<details>
<summary><strong>De "Temperature" van AI</strong> (klik om te lezen)</summary>

AI-systemen hebben een "temperature" parameter die bepaalt hoe creatief of voorspelbaar ze zijn. Een lage temperature (0.1-0.3) maakt AI conservatief en voorspelbaar, terwijl een hoge temperature (0.7-1.0) het creatiever en verrassender maakt.

Dit is waarom dezelfde prompt verschillende resultaten kan geven. Sommige AI-tools laten je de temperature aanpassen, maar de meeste gebruiken een vaste waarde.

Als je merkt dat AI te saai of te wild is, kun je dit compenseren in je prompt door woorden te gebruiken zoals "creatief", "verrassend", "conservatief", of "voorspelbaar" om de gewenste stijl te be&iuml;nvloeden.
</details>
{% endtrivia %}

{% info %}
**Geavanceerde Prompt Patronen**

Er zijn verschillende geavanceerde patronen die experts gebruiken:

**1. De "Act as" patroon**
"Act as a [expert/rol]. Your task is to [taak]. Consider [context]. Provide [specifieke output]."

**2. De "Before you answer" patroon**
"Before you answer, think about [overwegingen]. Then provide your response."

**3. De "Critique and improve" patroon**
"First, provide [basis antwoord]. Then critique it and suggest improvements. Finally, provide the improved version."

**4. De "Multiple perspectives" patroon**
"Consider this from multiple perspectives: [perspectief 1], [perspectief 2], [perspectief 3]. Then provide a balanced view."

**5. De "Step-by-step breakdown" patroon**
"Break this down into steps: 1) [stap 1], 2) [stap 2], etc. For each step, explain your reasoning."

**6. De "Constraints and requirements" patroon**
"Create [wat] that meets these requirements: [lijst]. Ensure it doesn't [verboden]. Make sure it includes [verplicht]."
{% endinfo %}

{% quiz "Quizvraag" %}
**Vraag:** Wat is het voordeel van prompt chaining voor complexe taken?

*Klik op een antwoord om te zien of het correct is!*
<div class="quiz-options">
<div class="quiz-option" onclick="toggleAnswer('A3')">
<strong>A)</strong> Het maakt prompts korter
<div class="answer-feedback" id="answer-A3">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Prompt chaining maakt prompts niet korter - het verdeelt ze juist in meerdere stappen. Denk aan de voordelen van het opdelen van complexe taken.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('B3')">
<strong>B)</strong> Het geeft betere controle en mogelijkheid om bij te sturen
<div class="answer-feedback" id="answer-B3">
<div class="feedback-content">
<span class="feedback-icon">&#9989;</span>
<strong>Correct!</strong><br>
Precies! Prompt chaining geeft je betere controle over het resultaat omdat je elke stap kunt beoordelen en bijsturen. Het maakt complexe taken ook haalbaarder door ze op te delen in kleinere, beheersbare stappen.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('C3')">
<strong>C)</strong> Het werkt sneller dan &eacute;&eacute;n grote prompt
<div class="answer-feedback" id="answer-C3">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Prompt chaining is niet per se sneller - het kan zelfs langer duren omdat je meerdere stappen moet doorlopen. Denk aan de kwaliteitsvoordelen.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('D3')">
<strong>D)</strong> Het gebruikt minder AI-rekenkracht
<div class="answer-feedback" id="answer-D3">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Prompt chaining gebruikt niet minder rekenkracht - het verdeelt de taak juist over meerdere AI-berekeningen. Denk aan de controle- en kwaliteitsvoordelen.
</div>
</div>
</div>
</div>
{% endquiz %}

{% conclusion %}
**Conclusie**

Je hebt nu een solide basis in prompt engineering - een vaardigheid die steeds belangrijker wordt naarmate AI-systemen krachtiger worden.

**Wat je hebt geleerd:**
**Prompt Engineering basis** - Je begrijpt nu dat prompt engineering de kunst is van het effectief communiceren met AI-systemen. Je weet dat AI anders denkt dan mensen en hoe je daar rekening mee kunt houden.

**Basis technieken** - Je kent de 5 W's van prompt engineering en verschillende bewezen prompt structuren. Je weet hoe je prompts kunt structureren voor verschillende soorten taken.

**Geavanceerde technieken** - Je hebt geleerd over few-shot learning, prompt chaining, en geavanceerde prompt patronen. Je kunt complexe taken opdelen en iteratief verbeteren.

**Belangrijke inzichten:**
- De kwaliteit van je prompt bepaalt de kwaliteit van het AI-antwoord
- AI denkt in patronen, niet in logica zoals mensen
- Context, specificiteit en voorbeelden zijn cruciaal
- Complexe taken kun je opdelen in kleinere stappen
- Iteratie en verbetering leiden tot betere resultaten

**Praktische tips:**
- Begin altijd met de 5 W's
- Gebruik voorbeelden om patronen te tonen
- Verdeel complexe taken in stappen
- Test en verbeter je prompts
- Leer van wat wel en niet werkt

**Volgende stappen:**
Oefen regelmatig met verschillende AI-systemen. Experimenteer met verschillende prompt structuren en technieken. Houd bij wat werkt en wat niet. Prompt engineering is een vaardigheid die je ontwikkelt door te doen, niet door te lezen.

**Onthoud:** De beste prompt is de prompt die jou geeft wat je nodig hebt. Er is geen "perfecte" prompt - alleen prompts die goed werken voor jouw specifieke situatie.
{% endconclusion %}
