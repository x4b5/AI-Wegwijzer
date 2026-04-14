---
title: "AI-Agents"
description: "Ontdek wat AI-agents zijn, hoe ze autonoom werken met de agent-cyclus en wat hen onderscheidt van chatbots en assistenten."
heroImage: /img/icons/informatie.png
heroImageAlt: "Informatie icoon"
---

{% metadata "Leerdoel: Begrijpen wat AI-agents zijn, hoe ze autonoom werken en wat ze onderscheidt van chatbots en assistenten.", "Leestijd: 15-20 minuten" %}

## AI-Agents

{% info %}
**Van chatbot naar autonome agent**

In de vorige artikelen heb je kennisgemaakt met [chatbots](/artikelen/01-chatbots-introductie/) en [AI-assistenten](/artikelen/02-ai-assistenten/). Je hebt geleerd hoe chatbots reageren op jouw vragen en hoe AI-assistenten je kunnen helpen bij complexere taken. Maar wat als een AI-systeem zelfstandig beslissingen kan nemen, meerdere stappen kan plannen en tools kan inzetten om een doel te bereiken -- zonder dat jij elke stap hoeft aan te geven?

Welkom in de wereld van **AI-agents**. Dit zijn AI-systemen die een stap verder gaan dan chatbots en assistenten. Waar een chatbot wacht op jouw input en een assistent je ondersteunt bij een taak, kan een agent **autonoom** handelen: hij stelt zelf doelen, maakt plannen, voert acties uit en leert van de resultaten.

In dit artikel ontdek je:
- Wat AI-agents precies zijn en hoe ze werken
- De agent-cyclus: waarnemen, plannen, handelen en leren
- Het verschil met chatbots en assistenten
- Verschillende soorten agents en waar je ze tegenkomt
- De ethische uitdagingen die autonome AI met zich meebrengt
{% endinfo %}

{% info %}
## Wat zijn AI-agents?

Een **AI-agent** is een AI-systeem dat zelfstandig kan handelen om een doel te bereiken. In tegenstelling tot een chatbot, die pas reageert wanneer jij een vraag stelt, kan een agent:

- **Zelfstandig beslissingen nemen** over welke stappen nodig zijn
- **Tools en hulpmiddelen gebruiken** zoals zoeken op het web, bestanden lezen, code uitvoeren of e-mails versturen
- **Meerdere stappen achter elkaar uitvoeren** zonder tussenkomst van de gebruiker
- **Zich aanpassen** wanneer iets niet werkt en een alternatief plan bedenken

### Een voorbeeld: een reis plannen

Stel je voor dat je aan een chatbot vraagt: "Plan een reis naar Barcelona." De chatbot geeft je waarschijnlijk een lijst met tips en bezienswaardigheden. Maar jij moet zelf de hotels zoeken, vluchten boeken en een dagplanning maken.

Een AI-agent zou dit anders aanpakken. Na jouw verzoek zou de agent:
1. Je voorkeuren en budget analyseren
2. Vluchten vergelijken en de beste optie selecteren
3. Hotels zoeken die passen bij je budget en locatievoorkeuren
4. Een dagplanning opstellen met bezienswaardigheden en reistijden
5. Reserveringen maken (als de agent daar toegang toe heeft)
6. Een compleet reisplan aan je presenteren

Het verschil is duidelijk: de chatbot **informeert**, de agent **handelt**.
{% endinfo %}

{% trivia %}
<details>
<summary><strong>Shakey de Robot: de eerste AI-agent</strong> (klik om te lezen)</summary>

In 1966 ontwikkelde het Stanford Research Institute (SRI) een robot genaamd **Shakey**. Shakey wordt beschouwd als de eerste robot die als een soort AI-agent functioneerde. Hij kon zelfstandig navigeren door een kamer, objecten herkennen en eenvoudige taken plannen.

Shakey combineerde drie belangrijke vaardigheden:
- **Waarnemen:** via een camera kon hij zijn omgeving zien
- **Plannen:** hij kon een reeks acties bedenken om een doel te bereiken
- **Handelen:** hij kon zich verplaatsen en objecten verschuiven

Hoewel Shakey naar huidige maatstaven primitief was (hij had uren nodig voor taken die een mens in seconden doet), legde hij de basis voor het vakgebied van autonome AI-agents. De principes die bij Shakey werden ontwikkeld, worden nog steeds gebruikt in moderne robotica en AI-systemen.

Bron: [SRI International - Shakey the Robot](https://www.sri.com/hoi/shakey-the-robot/)
</details>
{% endtrivia %}

{% info %}
## De agent-cyclus: waarnemen, plannen, handelen, leren

Elke AI-agent werkt volgens een cyclus van vier fasen die zich steeds herhaalt. Dit wordt de **agent-cyclus** (of *agent loop*) genoemd:

### 1. Waarnemen (Observe)
De agent verzamelt informatie uit zijn omgeving. Dit kan data zijn van sensoren, API's, databases, websites of gebruikersinput.

### 2. Plannen (Plan)
Op basis van de verzamelde informatie maakt de agent een plan. Welke stappen zijn nodig om het doel te bereiken? Welke tools moet hij gebruiken? Wat als een stap mislukt?

### 3. Handelen (Act)
De agent voert het plan uit: hij stuurt commando's, roept tools aan, schrijft bestanden, verstuurt berichten of neemt andere acties.

### 4. Leren (Learn)
Na het handelen evalueert de agent het resultaat. Is het doel bereikt? Wat ging goed en wat kan beter? Deze informatie wordt gebruikt om de volgende cyclus te verbeteren.

### Een alledaags voorbeeld: de slimme thermostaat

Een slimme thermostaat zoals de Nest is eigenlijk een eenvoudige AI-agent:

| Fase | Wat de thermostaat doet |
|---|---|
| **Waarnemen** | Meet de huidige temperatuur, luchtvochtigheid en detecteert of er iemand thuis is |
| **Plannen** | Vergelijkt de meetwaarden met je voorkeuren en het tijdschema. Beslist of de verwarming aan of uit moet |
| **Handelen** | Stuurt een signaal naar de cv-ketel om de verwarming aan te zetten of uit te schakelen |
| **Leren** | Onthoudt je patronen: je houdt van 20 graden overdag maar 17 graden 's nachts, en je komt meestal om 18:00 thuis |

Na verloop van tijd "kent" de thermostaat je routine en zet de verwarming automatisch eerder aan, zodat het precies warm is wanneer je thuiskomt. Dit is de agent-cyclus in actie.
{% endinfo %}

{% quiz "Wat is het belangrijkste verschil tussen een chatbot en een AI-agent?" %}
<div class="quiz-options" role="group" aria-label="Antwoordopties">
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-AG1-A" onclick="toggleAnswer('AG1-A', this)">
<strong>A)</strong> Een agent kan sneller antwoorden genereren dan een chatbot
</button>
<div class="answer-feedback" id="answer-AG1-A" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Snelheid is niet het belangrijkste verschil. Het gaat om de mate van zelfstandigheid. Een chatbot kan zelfs sneller zijn dan een agent, omdat een agent meer stappen doorloopt.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-AG1-B" onclick="toggleAnswer('AG1-B', this)">
<strong>B)</strong> Een agent kan zelfstandig meerdere stappen uitvoeren zonder tussenkomst van de gebruiker
</button>
<div class="answer-feedback" id="answer-AG1-B" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
<strong>Correct!</strong><br>
Het kernverschil is autonomie. Een chatbot reageert op jouw input en wacht dan op je volgende vraag. Een agent kan zelfstandig een plan maken en meerdere stappen achter elkaar uitvoeren om een doel te bereiken, zonder dat je elke stap hoeft aan te geven.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-AG1-C" onclick="toggleAnswer('AG1-C', this)">
<strong>C)</strong> Een agent gebruikt altijd meer rekenkracht dan een chatbot
</button>
<div class="answer-feedback" id="answer-AG1-C" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Hoewel agents vaak complexer zijn, is rekenkracht niet het onderscheidende kenmerk. Een eenvoudige reactieve agent kan minder rekenkracht nodig hebben dan een groot taalmodel in een chatbot.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-AG1-D" onclick="toggleAnswer('AG1-D', this)">
<strong>D)</strong> Een agent is altijd verbonden met het internet, een chatbot niet
</button>
<div class="answer-feedback" id="answer-AG1-D" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Internetverbinding is geen bepalend verschil. Zowel chatbots als agents kunnen online of offline werken. Het verschil zit in de mate van zelfstandig handelen.
</div>
</div>
</div>
{% endquiz %}

{% info %}
## Soorten AI-agents

Niet alle agents zijn gelijk. Ze varieren in complexiteit en kunnen worden ingedeeld in drie hoofdcategorieen:

| Type agent | Hoe het werkt | Voorbeeld |
|---|---|---|
| **Reactieve agent** | Reageert direct op input volgens vaste patronen. Heeft geen geheugen en maakt geen plannen voor de toekomst. | Spamfilter: ziet een e-mail binnenkomen en classificeert deze onmiddellijk als spam of niet-spam |
| **Planmatige agent** | Maakt een plan om een complex doel te bereiken. Kan meerdere stappen vooruit denken en alternatieven overwegen. | Routeplanner: analyseert verkeersinformatie, berekent meerdere routes en kiest de snelste optie |
| **Lerende agent** | Verbetert zichzelf over tijd door te leren van eerdere ervaringen en feedback. Past zijn gedrag aan op basis van resultaten. | Netflix-aanbevelingen: leert van je kijkgedrag en wordt steeds beter in het voorspellen wat je leuk vindt |

### Reactieve agents
Dit is de eenvoudigste vorm. Een reactieve agent heeft geen geheugen van eerdere acties en reageert puur op de huidige situatie. Denk aan een rookmelder: hij detecteert rook (waarnemen) en slaat alarm (handelen). Er is geen planning of leerproces.

### Planmatige agents
Deze agents kunnen verder vooruit kijken. Ze analyseren een situatie, bedenken een strategie en voeren die stap voor stap uit. Een schaakcomputer is een goed voorbeeld: hij analyseert het bord, berekent mogelijke zetten meerdere beurten vooruit, en kiest de beste strategie.

### Lerende agents
De meest geavanceerde agents leren van hun ervaringen. Ze worden beter naarmate ze meer data verzamelen en meer situaties meemaken. Moderne AI-agents zoals die in zelfrijdende auto's combineren alle drie de typen: ze reageren op directe gevaren (reactief), plannen routes (planmatig) en leren van miljoenen kilometers aan rijervaring (lerend).
{% endinfo %}

{% quiz "Een spamfilter die binnenkomende e-mails automatisch als spam of niet-spam classificeert, is een voorbeeld van welk type agent?" %}
<div class="quiz-options" role="group" aria-label="Antwoordopties">
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-AG2-A" onclick="toggleAnswer('AG2-A', this)">
<strong>A)</strong> Een reactieve agent
</button>
<div class="answer-feedback" id="answer-AG2-A" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
<strong>Correct!</strong><br>
Een spamfilter is een reactieve agent. Hij reageert direct op binnenkomende input (de e-mail) en neemt onmiddellijk een beslissing (spam of niet-spam) zonder een plan te maken of van eerdere beslissingen te leren tijdens het filteren zelf.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-AG2-B" onclick="toggleAnswer('AG2-B', this)">
<strong>B)</strong> Een planmatige agent
</button>
<div class="answer-feedback" id="answer-AG2-B" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Een planmatige agent maakt een plan met meerdere stappen om een doel te bereiken. Een spamfilter maakt geen plan -- hij classificeert elke e-mail afzonderlijk op het moment dat deze binnenkomt.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-AG2-C" onclick="toggleAnswer('AG2-C', this)">
<strong>C)</strong> Een lerende agent
</button>
<div class="answer-feedback" id="answer-AG2-C" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Hoewel een spamfilter tijdens de trainingsperiode wel leert van data, functioneert hij bij het filteren zelf als een reactieve agent: hij reageert direct op elke e-mail zonder tussentijds bij te leren. Het kenmerk van een lerende agent is dat hij zich actief verbetert tijdens het gebruik.
</div>
</div>
</div>
{% endquiz %}

{% task %}
**Opdracht 1: Analyseer een bestaande AI-agent**

Kies een AI-gestuurd systeem dat je kent uit het dagelijks leven. Dit kan een van de volgende zijn, of iets anders:
- Een spraakassistent (Siri, Google Assistant, Alexa)
- Een robotstofzuiger (Roomba, Roborock)
- Een navigatie-app (Google Maps, Waze)
- Een muziekaanbevelingssysteem (Spotify)

Analyseer dit systeem aan de hand van de agent-cyclus:

1. **Waarnemen:** Welke informatie verzamelt het systeem? Welke sensoren of databronnen gebruikt het?
2. **Plannen:** Hoe bepaalt het systeem wat het gaat doen? Maakt het een plan met meerdere stappen?
3. **Handelen:** Welke acties voert het systeem uit? Gebruikt het tools of externe diensten?
4. **Leren:** Verbetert het systeem zichzelf over tijd? Hoe merk je dat?

*Tip: Probeer ook te bepalen welk type agent het is: reactief, planmatig, lerend, of een combinatie.*
{% endtask %}

{% info %}
## Agents in het dagelijks leven en het bedrijfsleven

AI-agents zijn al veel aanweziger in ons leven dan je misschien denkt. Hier zijn voorbeelden uit verschillende domeinen:

### Dagelijks leven

- **Slimme thermostaat (Nest, Tado):** Leert je temperatuurvoorkeuren en past de verwarming automatisch aan op basis van je routine, het weer en of je thuis bent.
- **Robotstofzuiger (Roomba, Roborock):** Brengt je huis in kaart, plant een efficiente schoonmaakroute, ontwijkt obstakels en leert waar de meeste vervuiling is.
- **Navigatie-apps (Google Maps, Waze):** Analyseren real-time verkeersdata, berekenen alternatieve routes en passen je route aan terwijl je rijdt.
- **Muziekaanbevelingen (Spotify, Apple Music):** Analyseren je luistergedrag, herkennen patronen in je smaak en stellen gepersonaliseerde afspeellijsten samen.

### Bedrijfsleven

- **Klantenservice-agents:** Beantwoorden veelgestelde vragen, zoeken in databases, maken tickets aan en escaleren complexe problemen naar menselijke medewerkers.
- **Handelsalgoritmen:** Analyseren financiele markten, herkennen patronen in koersgegevens en voeren automatisch koop- en verkooptransacties uit.
- **Supply chain optimalisatie:** Voorspellen de vraag naar producten, beheren voorraden en bestellen automatisch nieuwe voorraad wanneer nodig.
- **AI-codeeragents:** Helpen programmeurs door code te schrijven, te testen en te verbeteren. Ze kunnen hele functionaliteiten opleveren op basis van een beschrijving.

### De nieuwe generatie: LLM-agents

De nieuwste ontwikkeling zijn agents die gebouwd zijn op [grote taalmodellen (LLM's)](/artikelen/begrippen/#llm). Deze agents combineren de taalbegrip- en redeneercapaciteiten van LLM's met de mogelijkheid om tools te gebruiken en acties uit te voeren.

Voorbeelden:
- **Computer-use agents:** Agents die een computer kunnen bedienen zoals een mens dat doet -- klikken op knoppen, typen in formulieren en navigeren door websites.
- **Codeeragents:** Agents die softwareprojecten kunnen analyseren, bugs opsporen en code schrijven om problemen op te lossen.
- **Onderzoeksagents:** Agents die bronnen doorzoeken, informatie samenvatten en rapporten schrijven.
{% endinfo %}

{% info %}
## Toekomst en ethische uitdagingen

AI-agents worden steeds autonomer en capabeler. Dit brengt niet alleen kansen maar ook serieuze ethische vragen met zich mee.

### Verantwoordelijkheid
Als een AI-agent een fout maakt, wie is dan verantwoordelijk? Stel dat een zelfrijdende auto (een complexe AI-agent) een verkeerde beslissing neemt in het verkeer. Is de fabrikant verantwoordelijk? De softwareontwikkelaar? De eigenaar van de auto? Dit is een van de lastigste juridische vragen van onze tijd.

### Menselijke controle
Hoe zorgen we ervoor dat mensen de controle behouden over steeds autonomere systemen? Het concept van **human-in-the-loop** (mens in de lus) is hierbij essentieel: bij kritieke beslissingen moet een mens altijd de mogelijkheid hebben om in te grijpen en de uiteindelijke beslissing te nemen.

### Transparantie
Agents nemen complexe beslissingen, maar het is niet altijd duidelijk *waarom* ze een bepaalde keuze maken. Dit gebrek aan transparantie (ook wel het "black box"-probleem genoemd) maakt het moeilijk om agents te vertrouwen bij belangrijke beslissingen.

### Veiligheid en misbruik
Autonome agents kunnen ook worden misbruikt. Denk aan deepfake-agents die automatisch misleidende content genereren, of agents die kwetsbaarheden in systemen opsporen voor kwaadaardige doeleinden.

### Regelgeving: de EU AI Act
De Europese Unie heeft met de **EU AI Act** (2024) als eerste ter wereld uitgebreide wetgeving opgesteld voor AI-systemen. Deze wet classificeert AI-systemen op basis van risico:

| Risiconiveau | Voorbeeld | Vereisten |
|---|---|---|
| **Onaanvaardbaar** | Sociaal kredietsysteem | Verboden |
| **Hoog risico** | AI in gezondheidszorg, rechtspraak | Strenge eisen aan transparantie en toezicht |
| **Beperkt risico** | Chatbots | Transparantieverplichting (gebruiker moet weten dat het AI is) |
| **Minimaal risico** | Spamfilter, spellingscontrole | Geen specifieke eisen |

Veel AI-agents vallen in de categorie "hoog risico" of "beperkt risico", wat betekent dat er strenge eisen worden gesteld aan hun ontwikkeling en gebruik.
{% endinfo %}

{% task %}
**Opdracht 2: Ontwerp je eigen AI-agent**

Bedenk een AI-agent die een probleem uit je dagelijks leven oplost. Dit kan iets zijn dat je frustreert, veel tijd kost, of waar je baat bij zou hebben als het geautomatiseerd was.

Beschrijf je agent aan de hand van de volgende vragen:

1. **Naam:** Hoe noem je je agent?
2. **Doel:** Welk probleem lost je agent op?
3. **Waarnemen:** Welke informatie heeft je agent nodig? Waar haalt hij die vandaan?
4. **Plannen:** Hoe bepaalt je agent de beste aanpak? Welke afwegingen maakt hij?
5. **Handelen:** Welke acties kan je agent uitvoeren? Welke tools gebruikt hij?
6. **Leren:** Hoe wordt je agent beter over tijd? Welke feedback gebruikt hij?
7. **Risico's:** Wat kan er misgaan? Hoe zorg je voor menselijke controle?

**Voorbeelden ter inspiratie:**
- Een agent die je koelkast scant en een weekmenu samenstelt op basis van wat er beschikbaar is
- Een agent die je e-mails leest en automatisch afspraken inplant in je agenda
- Een agent die je studiegedrag analyseert en een gepersonaliseerd studie-schema maakt

*Tip: Denk ook na over welk type agent (reactief, planmatig, lerend) het beste bij je ontwerp past.*
{% endtask %}

{% conclusion %}
## Samenvatting

In dit artikel heb je geleerd wat AI-agents zijn en hoe ze zich onderscheiden van chatbots en AI-assistenten.

**De belangrijkste concepten:**
- **AI-agents** zijn systemen die autonoom kunnen handelen om een doel te bereiken, in tegenstelling tot chatbots die alleen reageren op directe input
- **De agent-cyclus** bestaat uit vier fasen: waarnemen, plannen, handelen en leren
- **Er zijn drie hoofdtypen agents:** reactief (directe reactie), planmatig (strategie bedenken) en lerend (verbeteren over tijd)
- **Agents zijn overal:** van slimme thermostaten en robotstofzuigers tot handelsalgoritmen en AI-codeeragents
- **Ethische uitdagingen** zoals verantwoordelijkheid, menselijke controle en transparantie worden steeds belangrijker naarmate agents autonomer worden
- **De EU AI Act** biedt een raamwerk voor de regulering van AI-systemen op basis van risico

**Van chatbot naar agent -- het spectrum:**

| | Chatbot | AI-assistent | AI-agent |
|---|---|---|---|
| **Initiatief** | Reageert op jouw input | Ondersteunt jouw taken | Handelt zelfstandig |
| **Stappen** | Een vraag, een antwoord | Meerdere stappen met jouw sturing | Meerdere stappen zonder sturing |
| **Tools** | Geen of beperkt | Gebruikt tools op jouw verzoek | Kiest en gebruikt tools zelf |
| **Leren** | Niet of nauwelijks | Beperkt, binnen een sessie | Verbetert over tijd |

**Wat wil je nu verder ontdekken?**
Je hebt nu inzicht in hoe AI-agents werken. Afhankelijk van je interesses kun je verschillende richtingen op:

- **[Chatbots](/artikelen/01-chatbots-introductie/)** -- Wil je terug naar de basis van chatbots?
- **[Prompt Engineering](/artikelen/03-prompt-engineering/)** -- Wil je leren hoe je effectief communiceert met AI-systemen?
- **[Onder de motorkap](/artikelen/05-onder-de-motorkap/)** -- Wil je weten hoe de modellen achter agents werken?
{% endconclusion %}
