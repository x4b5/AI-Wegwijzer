---
title: "Chatbots: een introductie"
description: "Leer wat chatbots zijn, hoe ze werken (regel-gebaseerd en data-gedreven), waar het 'denkwerk' plaatsvindt en hoe je ze effectief inzet. Inclusief praktische opdrachten en quizzen."
heroImage: /img/chatbot.png
heroImageAlt: Chatbot
---

{% metadata "Leerdoel: Begrijpen wat chatbots zijn, hoe je ze kunt gebruiken en waar je rekening mee moet houden.", "Leestijd: 15-20 minuten" %}

{% task %}
**Opdracht 1**

Klik op de knop om het venster naar de linkerkant van het scherm te verplaatsen.

<div class="text-center mt-4">
<button id="btn-move-left" class="btn btn-primary">
<span>Venster naar links verplaatsen</span>
</button>
</div>

Mocht dit niet lukken, gebruik dan de volgende sneltoetsen:

<div class="hotkey-panel stacked">
<div class="hotkey-col fixed">
<img src="/img/windows.png" alt="Windows" width="24" height="24" class="hotkey-icon" loading="lazy" decoding="async" />
<code class="hotkey-code">Windows-toets + &#8592;</code>
</div>
<div class="hotkey-col flex">
<div class="hotkey-icon-code">
<img src="/img/apple-logo.png" alt="Apple" width="24" height="24" class="hotkey-icon" loading="lazy" decoding="async" />
<code class="hotkey-code">Control + Command + F</code>
</div>
<ul class="hotkey-notes">
<li>Hiermee zet je het venster uit fullscreen.</li>
<li>Hierna kun je het venster verkleinen en aan de linkerkant van het scherm zetten.</li>
</ul>
</div>
</div>
{% endtask %}

{% task %}
**Opdracht 2**

Klik op de knop om de chatbot *Lumo* te openen.

<div class="text-center mt-4">
<button id="btn-open-lumo" class="btn btn-primary">
<img src="/img/icons/lumo.png" alt="Lumo" width="40" height="32" class="btn-icon" loading="lazy" decoding="async" />
<span>*Lumo* openen</span>
</button>
</div>

Als het goed is, zie je het venster verschijnen aan de rechterkant.
{% endtask %}

{% info %}
<a id="opkomst"></a>

## De opkomst van moderne AI-chatbots

Chatbots bestaan al sinds eind jaren zestig, maar de populariteit van de moderne AI-chatbots is iets van de laatste jaren.

Die populariteit is vooral te danken aan verschillende technolgische ontwikkelingen vanaf de late jaren 2010. Die periode wordt ook wel de [AI-boom](/artikelen/begrippen/#ai-boom) genoemd.

### De populariteit van ChatGPT

De release van de eerste versie van ChatGPT was op 30 november 2022 (en op 30 januari 2023 voor het grote publiek). Sinds deze release groeide ChatGPT razendsnel. In januari 2023 bereikte het meer dan 100 miljoen gebruikers in twee maanden en was daarmee de snelst groeiende software-applicatie voor consumenten ooit.

Verschillende andere bedrijven voelden de noodzaak om de release van hun eigen chatbots te versnellen met als gevolg dat AI de prioriteit werd in Silicon Valley (en ethische zorgen en voorzichtigheid rondom AI meer naar de achtergrond raakten).

### Een veelvoorkomende verwarring

Door de populariteit van ChatGPT denken veel mensen bij AI meteen aan deze chatbot. Er zijn echter veel meer AI-chatbots, en daarachter schuilt een breed veld aan wetenschappelijke disciplines en technologieen die samen AI vormen.

<img src="/img/meer-tussen-ai-en-chatgpt.jpg" alt="Meer tussen AI en ChatGPT" />

*"Meer tussen AI en ChatGPT" gegenereerd met Stable Diffusion.*
{% endinfo %}

{% info %}
<a id="geschiedenis"></a>

## De geschiedenis van chatbots bekeken vanuit AI

Chatbots zijn in de loop der tijd sterk veranderd, vooral door de vooruitgang in AI. Door te kijken naar de belangrijkste AI-ontwikkelingen zie je hoe verschillende typen chatbots zijn ontstaan. De onderstaande tabel geeft een compact overzicht, al is deze tijdsindeling niet strikt: ontwikkelingen liepen vaak in elkaar over en verschillende typen chatbots bestaan naast elkaar.

| Periode | Type Chatbots |
|---|---|
| 1960-2000 | De eerste chatbots |
| 2000-2020 | De klassieke AI-chatbots |
| 2020-heden | De moderne AI-chatbots |

Bij de eerste chatbots was naar huidige maatstaven nog geen sprake van AI: ze antwoordden met vooraf geprogrammeerde regels en vaste patronen.

Door latere AI-ontwikkelingen konden chatbots steeds beter antwoorden op niet-vooraf geprogrammeerde vragen. Daarmee begon de opkomst van de klassieke AI-chatbots.

Moderne AI-chatbots zijn ontstaan tijdens de AI-boom. Deze chatbots zijn in staat om zich nog beter aan te passen aan de gebruiker en kunnen veel beter de de vorige chatbots nieuwe data creeren zoals tekst, afbeeldingen, audio en video.
{% endinfo %}

{% quiz "Welk type chatbot denk je dat Lumo is?" %}
<div class="quiz-options" role="group" aria-label="Antwoordopties">
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-A8" onclick="toggleAnswer('A8', this)">
<strong>A)</strong> Een regelgebaseerde chatbot
</button>
<div class="answer-feedback" id="answer-A8" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet helemaal!</strong><br>
Regelgebaseerde chatbots werken met vooraf geprogrammeerde regels en vaste patronen. Lumo doet meer dan dat.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-B8" onclick="toggleAnswer('B8', this)">
<strong>B)</strong> Een klassieke AI-chatbot
</button>
<div class="answer-feedback" id="answer-B8" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet helemaal!</strong><br>
Klassieke AI-chatbots herkennen vooral patronen uit data maar zijn nog niet zo goed om nieuwe antwoorden te geven. Lumo kan dit wel.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-C8" onclick="toggleAnswer('C8', this)">
<strong>C)</strong> Een moderne AI-chatbot
</button>
<div class="answer-feedback" id="answer-C8" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
<strong>Goed beredeneerd!</strong><br>
Lumo is inderdaad een moderne AI-chatbot die nieuwe antwoorden kan geven op vragen die nog niet vooraf zijn geprogrammeerd.
</div>
</div>
</div>
{% endquiz %}

{% info %}
<a id="vier-vragen"></a>

## Vier belangrijke vragen

We hebben het beestje bij zijn verschillende typen genoemd. Dat is een begin!
Nu gaan we verder bekijken wat kenmerkend is aan chatbots en wat hen onderscheidt. Dit doen we aan de hand van de volgende vragen:

1. Wat is een chatbot?
2. Hoe werkt een chatbot in het algemeen?
3. Hoe is een chatbot in staat om antwoorden te geven?
4. Waar vindt het "denkwerk" plaats?

Zo wordt duidelijker wat je met welke chatbot kunt doen en waarmee je rekening moet houden.
{% endinfo %}

{% info %}
### Vraag 1. Wat is een chatbot?

Een [chatbot](/artikelen/begrippen/) (voorheen chatterbot) is een computerprogramma dat menselijke gesprekken kan nabootsen (simuleren).
Gesprekken worden meestal via tekst gevoerd, maar spraak is vaak ook mogelijk.

**Conversational user interface**

De plek waar de communicatie tussen mens en machine plaatsvindt heet de [user interface](/artikelen/begrippen/#user-interface) (UI). De UI ontwikkelde zich van [ponskaarten](/artikelen/begrippen/#ponskaarten), via [command line interface (CLI)](/artikelen/begrippen/#user-interface) naar [graphical user interface (GUI)](/artikelen/begrippen/#user-interface).

Met chatbots communiceren we nu ook via natuurlijke taal: de [*conversational user interface (CUI)*](/artikelen/begrippen/#conversational-user-interface). Hierdoor wordt de interactie toegankelijker voor meer mensen.

<div class="text-center">
<img src="/img/user-interface.png" alt="User interface ontwikkeling" class="img-350" />
</div>
{% endinfo %}

{% trivia %}
<details>
<summary><strong>De toekomst van user interfaces</strong> (klik om te lezen)</summary>

De ontwikkeling van user interfaces gaat onverminderd door. Denk aan [immersive interfaces](/artikelen/begrippen/#immersive-interfaces) als [virtual reality](/artikelen/begrippen/#virtual-reality), [augmented reality](/artikelen/begrippen/#augmented-reality) en [mixed reality](/artikelen/begrippen/#mixed-reality), maar ook aan [brain-computer interfaces](/artikelen/begrippen/#brain-computer-interface) die een directe verbinding tussen ons brein en de computer mogelijk maken.

In het artikel ["Meta's brain-to-text is here"](https://www.vox.com/future-perfect/400146/meta-brain-reading-neurotech-privacy) wordt uitgelegd hoe snel deze technologie zich ontwikkelt. Tegelijk waarschuwt het artikel voor grote ethische vragen en pleit het voor duidelijke regels om onze cognitieve vrijheid te beschermen.

Het laat zien hoe de grens tussen mens en machine steeds verder vervaagt. Het is niet alleen de mens die meer toegang kan krijgen tot de machine, maar ook de machine (en zijn ontwikkelaars) die meer toegang kan krijgen tot de mens.
</details>
{% endtrivia %}

{% info %}
<a id="vraag-2"></a>

### Vraag 2. Hoe werkt een chatbot in het algemeen?

Chatbots werken in de basis volgens het volgende proces:

<div class="text-center mt-4">
<img src="/img/input-processing-output.png" alt="Input-Processing-Output diagram" class="diagram-img img-elevated" />
</div>

- **[Input](/artikelen/begrippen/#input):** Jij stelt een vraag of geeft een opdracht. Dit kan via tekst of spraak.
- **[Processing](/artikelen/begrippen/#processing):** De input wordt vervolgens verwerkt. Er zijn verschillende manieren (methoden) waarop de input kan worden verwerkt.
- **[Output](/artikelen/begrippen/#output):** De chatbot geeft een antwoord terug in de vorm van tekst of spraak.
{% endinfo %}

{% quiz "Hoe wordt de interface van een moderne chatbot genoemd?" %}
<div class="quiz-options" role="group" aria-label="Antwoordopties">
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-A7" onclick="toggleAnswer('A7', this)">
<strong>A)</strong> Conversational user interface
</button>
<div class="answer-feedback" id="answer-A7" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
<strong>Correct!</strong><br>
De interface van chatbots wordt inderdaad een conversational user interface genoemd, omdat je via natuurlijke taal communiceert.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-B7" onclick="toggleAnswer('B7', this)">
<strong>B)</strong> Graphical user interface
</button>
<div class="answer-feedback" id="answer-B7" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Er is inderdaad wel een grafische interface, maar om de chatbot te gebruiken communiceer je via natuurlijke taal, niet via knoppen en vensters.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-C7" onclick="toggleAnswer('C7', this)">
<strong>C)</strong> Command line interface
</button>
<div class="answer-feedback" id="answer-C7" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Een command line interface gebruikt commando's, niet natuurlijke taal zoals bij chatbots.
</div>
</div>
</div>
{% endquiz %}

{% task %}
**Opdracht 3: Stel jezelf voor**

Geef de chatbot input door onder in het tekstvenster jezelf voor te stellen met de naam van een bekende persoon.

- Grote kans dat de chatbot vriendelijk reageert.
{% endtask %}

{% info %}
### Prompt

De input die je aan de chatbot geeft, heet een *[prompt](/artikelen/begrippen/#prompt)*. Zo'n prompt kan bijvoorbeeld een vraag, opdracht of instructie zijn.

Wanneer iemand vindt dat het antwoord van de chatbot niet klopt, kan dat ook komen doordat de prompt niet duidelijk of specifiek genoeg was. Het is daarom belangrijk om te leren hoe je een goede prompt formuleert. Dit noem je prompt-engineering.

[Prompt-engineering](/artikelen/begrippen/#prompt-engineering) is de toepassing om optimale output te krijgen door de juiste input te ontwerpen.
{% endinfo %}

{% info %}
<a id="vraag-3"></a>

### Vraag 3. Hoe is een chatbot in staat om antwoorden te geven?

Chatbots kunnen door verschillende manieren antwoorden geven. In grote lijnen kunnen we twee methoden onderscheiden:

### Regel-gebaseerd

*De antwoorden zijn vooraf vastgelegd in regels.*

- **Voorbeeld weersituatie:**
  Vooraf is het volgende geprogrammeerd: "Als de lucht 90 tot 100 procent is bedekt met donkere wolken en de luchtdruk daalt naar 1005 hPa en de luchtvochtigheid stijgt tot 80 a 95 procent, geef dan aan dat er 80% kans op regen is."

  De regels worden stap voor stap uitgevoerd. Alles staat vast: dezelfde input levert altijd hetzelfde antwoord op. Dit wordt [*deterministisch*](/artikelen/begrippen/#deterministisch) genoemd.

  Bij de eerste chatbots werd alleen gebruik gemaakt van deze methode.

### Data-gedreven

*In plaats van vooraf bedachte regels leert het systeem van data.*

- **Voorbeeld weersituatie:**
  Uit de data blijkt: in 4 van de 5 gevallen regent het wanneer de lucht 90 tot 100 procent is bedekt met donkere wolken, de luchtdruk daalt naar rond de 995 tot 1005 hPa en de luchtvochtigheid stijgt tot 80 a 95 procent.
  Op basis van dit patroon wordt "voorspeld" dat er 80% kans is op regen.

  *Noot: Het woord "voorspeld" is hier wat misleidend. Er worden geen echte voorspellingen gedaan, maar op basis van patronen in data worden berekeningen uitgevoerd om te bepalen hoe groot de kans is dat iets gebeurt.*

  Het herkennen van patronen om te bepalen hoe groot de kans is noemt men [*probabilistisch*](/artikelen/begrippen/#probabilistisch).

  Omdat de ouput afhankelijk is van de data, is deze niet altijd hetzelfde. De chatbot kan dus verschillende antwoorden geven op dezelfde vraag.

  De toepassing van deze methode luidde de opkomst van de (klassieke) AI-chatbots in.

Er zijn nog allerlei andere methoden, maar om het helder te houden, laten we het voorlopig bij deze twee basismethoden.
{% endinfo %}

{% info %}
**Voorbeelden van data-gedreven toepassingen**

Hieronder enkele concrete voorbeelden van data-gedreven systemen die je dagelijks tegenkomt:

<details>
<summary><strong>Spam-filters</strong> (klik om te lezen)</summary>

Je e-mailprovider gebruikt machine learning om spam te herkennen. Het systeem analyseert miljoenen e-mails en leert patronen herkennen die typisch zijn voor spam (zoals bepaalde woorden, afzenders, of structuur). Naarmate het systeem meer data ziet, wordt het beter in het onderscheiden van spam en legitieme e-mails.
</details>

<details>
<summary><strong>Netflix-suggesties</strong> (klik om te lezen)</summary>

Netflix gebruikt machine learning om te bepalen welke films en series je waarschijnlijk leuk zult vinden. Het systeem analyseert je kijkgedrag, vergelijkt dit met andere gebruikers, en herkent patronen in je voorkeuren. Daarom krijg je steeds "betere" suggesties naarmate je meer kijkt.
</details>

<details>
<summary><strong>Navigatie-apps</strong> (klik om te lezen)</summary>

Google Maps en andere navigatie-apps gebruiken machine learning om de snelste route te berekenen. Ze analyseren real-time verkeersdata, historische patronen, en zelfs het weer om te voorspellen welke route het beste is op een bepaald moment.
</details>
{% endinfo %}

{% quiz "Welke van de volgende chatbots lijken een data-gedreven methode te gebruiken? Selecteer de juiste 2 voorbeelden:" %}
<div class="quiz-options" role="group" aria-label="Antwoordopties">
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-A5" onclick="toggleAnswer('A5', this)">
<strong>A)</strong> Een chatbot die op verschillende manieren antwoord geeft op "Wat is de hoofdstad van Frankrijk?"
</button>
<div class="answer-feedback" id="answer-A5" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
<strong>Correct!</strong><br>
Variatie in output wijst op een data-gedreven aanpak. De chatbot leert van patronen in grote hoeveelheden data en kan daardoor verschillende formuleringen gebruiken. Deze variatie ontstaat doordat het AI-model bij elke vraag opnieuw een antwoord geeft op basis van de data.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-B5" onclick="toggleAnswer('B5', this)">
<strong>B)</strong> Een chatbot die altijd "Ja" antwoordt op de vraag "Hoe gaat het?"
</button>
<div class="answer-feedback" id="answer-B5" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Altijd hetzelfde antwoord wijst op regel-gebaseerde aanpak.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-C5" onclick="toggleAnswer('C5', this)">
<strong>C)</strong> Een chatbot die zegt "85% kans op regen" en later "90% kans op regen" voor dezelfde weersituatie
</button>
<div class="answer-feedback" id="answer-C5" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
<strong>Correct!</strong><br>
Output met variatie is kenmerkend voor data-gedreven systemen die patronen herkennen. Deze variatie ontstaat doordat het AI-model bij elke vraag opnieuw een inschatting maakt op basis van de context en de data waarop het getraind is.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-D5" onclick="toggleAnswer('D5', this)">
<strong>D)</strong> Een chatbot die altijd "Ik begrijp je vraag niet" antwoordt op onbekende vragen
</button>
<div class="answer-feedback" id="answer-D5" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Een chatbot die geen patronen kan herkennen en altijd dezelfde foutmelding geeft, werkt met vooraf geprogrammeerde regels. Dit is regel-gebaseerd gedrag.
</div>
</div>
</div>
{% endquiz %}

{% info %}
<a id="vraag-4"></a>

### Vraag 4. Waar vindt het "denkwerk" plaats?

Eigenlijk is *denkwerk* niet het juiste woord. Zeker in het geval van de eerste chatbots. We hebben besproken dat deze chatbots vooraf geprogrammeerd zijn en alleen antwoorden kunnen geven op de vragen die in het programma staan. Dit is dus geen "denkwerk". We laten de eerste chatbots even voor wat ze zijn.

Bij de klassieke AI-chatbots is de term "denkwerk" al meer van toepassing, maar nog steeds niet helemaal correct. Deze chatbots gebruiken [AI-modellen](/artikelen/begrippen/#ai-model). Deze AI-modellen zijn computerprogramma's die data-gedreven werken. Ze zijn getraind om patronen in data te herkennen en daaruit berekeningen te maken over welke uitkomst het meest waarschijnlijk is. De techniek die het mogelijk maakt om zo'n model te trainen heet [machine learning](/artikelen/begrippen/#machine-learning).

Hieronder zie je de verschillende locaties waar deze AI-modellen kunnen draaien:

**Online (in de [cloud](/artikelen/begrippen/#cloud))**

De chatbot draait op je apparaat, maar is gekoppeld aan een AI-model dat op servers van een AI-bedrijf draait. Je stuurt je vraag naar hun servers waar het AI-model de input verwerkt, en je krijgt een antwoord terug. Dit kan op twee manieren:
- *via een browser:* dit is voor de meeste gebruikers de bekendste vorm. ChatGPT is in dit geval de user-interface en op de achtergrond draait het GPT-model
- *via een [API](/artikelen/begrippen/#api):* dit is een soort van "brug" waarmee je het AI-model kunt gebruiken in andere programma's. Dit is vooral interessant voor ontwikkelaars die het AI-model in andere programma's willen integreren.

**Lokaal (op je eigen computer)**

De chatbot draait op je eigen computer (of lokale server) en het AI-model is erin geintegreerd. Je data blijft binnen je eigen netwerk en gaat niet naar externe partijen. Dit wordt ook wel "[on-premise](/artikelen/begrippen/#on-premises)" of "local [inference](/artikelen/begrippen/#inference)" genoemd.

**Op het apparaat zelf (edge deployment)**

De chatbot draait direct op het apparaat zelf (telefoon, tablet, slimme speaker) en het AI-model is erin geintegreerd. Dit wordt "[edge deployment](/artikelen/begrippen/#edge)" genoemd omdat de verwerking gebeurt aan de "rand" van het netwerk, dicht bij de gebruiker.
{% endinfo %}

{% trivia %}
<details>
<summary><strong>GPU's: De motor achter AI-modellen</strong> (klik om te lezen)</summary>

AI-modellen hebben enorme rekenkracht nodig om te kunnen draaien. Deze rekenkracht komt van speciale computerchips die **[GPU's (Graphics Processing Units)](/artikelen/begrippen/#gpu)** worden genoemd.

**Van games naar AI**
Interessant genoeg begon **Nvidia**, een van de grootste GPU-fabrikanten, oorspronkelijk met het maken van grafische kaarten voor de game-wereld. Gamers hadden krachtige GPU's nodig voor realistische graphics in hun favoriete spellen. Maar het bleek dat deze GPU's ook perfect geschikt waren voor de complexe berekeningen die AI-modellen nodig hebben.

**De nieuwste generatie**
Nvidia's nieuwste GPU, de **Blackwell AI GPU**, is speciaal ontworpen voor AI-toepassingen. Deze chip kan miljarden berekeningen per seconde uitvoeren, waardoor AI-modellen sneller en efficienter kunnen draaien. [(NVIDIA Blackwell)](https://www.nvidia.com/en-us/data-center/blackwell/)

<div class="text-center mt-4">
<img src="/img/GPU Blackwell GB200.png" alt="Nvidia Blackwell AI GPU" class="img-responsive img-elevated" />

*Nvidia Blackwell AI GPU - generatie van AI-processors van 2025. Meerdere van deze borden worden gebruikt in een serverrack geplaatst. Bron: Wikimedia Commons*
</div>

**Waarom GPU's belangrijk zijn**
AI-modellen moeten duizenden of zelfs miljoenen berekeningen tegelijk uitvoeren. Een gewone computerprocessor (CPU) kan dit niet efficient, maar een GPU kan duizenden kleine berekeningen parallel uitvoeren. Dit maakt GPU's ideaal voor het trainen en uitvoeren van AI-modellen.

**Maar: efficientie telt ook**
Niet elk krachtig model vereist per se enorme hoeveelheden en de nieuwste GPU's. Bedrijven als **DeepSeek** laten zien dat je met efficiente architecturen (zoals *Mixture-of-Experts*), optimalisaties en distillatie veel kunt bereiken met relatief minder rekenkracht.

Voorbeeld: het *DeepSeek-R1* model werd geprezen om zijn prestaties terwijl het met aanzienlijk minder en oudere GPU's getraind werd in vergelijking met concurrenten. Bronnen: [Reuters](https://www.reuters.com/technology/artificial-intelligence/openai-chief-altman-says-deepseeks-r1-model-impressive-2025-01-28/), [Wikipedia](https://en.wikipedia.org/wiki/DeepSeek)

Maar let op: DeepSeek is een Chinees bedrijf. Chinese AI-bedrijven vallen onder Chinese wetgeving en kunnen verplicht zijn om data te delen met de overheid. Dit kan gevolgen hebben voor privacy. Ook kunnen Chinese modellen bias (vertekend beeld) bevatten die aansluit bij Chinese waarden (bijvoorbeeld over privacy).
</details>
{% endtrivia %}

{% quiz "Waar denk je dat op dit moment het 'denkwerk' van de chatbot Lumo plaatsvindt?" %}
<div class="quiz-options" role="group" aria-label="Antwoordopties">
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-A6" onclick="toggleAnswer('A6', this)">
<strong>A)</strong> In de cloud via de browser
</button>
<div class="answer-feedback" id="answer-A6" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
<strong>Correct!</strong><br>
Het "denkwerk" vindt plaats op servers van het bedrijf en je gebruikt de browser als interface om met het AI-model te communiceren.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-B6" onclick="toggleAnswer('B6', this)">
<strong>B)</strong> Online via API
</button>
<div class="answer-feedback" id="answer-B6" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
In dit geval draait het AI-model wel in de cloud, maar je gebruikt geen aparte software die via een API is verbonden met het model.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-C6" onclick="toggleAnswer('C6', this)">
<strong>C)</strong> On-premise
</button>
<div class="answer-feedback" id="answer-C6" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
On-premise betekent dat het AI-model op je eigen computer of lokale server draait.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-D6" onclick="toggleAnswer('D6', this)">
<strong>D)</strong> Lokaal
</button>
<div class="answer-feedback" id="answer-D6" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Lokaal betekent dat het AI-model op je eigen computer of lokale server draait.
</div>
</div>
</div>
{% endquiz %}

{% task %}
**Opdracht 4**

Schakel *ghost mode* in door rechtsboven op het icoon van de kat met de zonnebril te klikken.
{% endtask %}

{% info %}
### Tussenstand

We hebben de basis van chatbots verkend. Hier is een korte samenvatting van de belangrijkste punten:

- **Chatbots zijn computerprogramma's** die menselijke gesprekken simuleren via een conversational user interface
- **Er zijn verschillende generaties:** van regelgebaseerde chatbots (1.0) tot moderne AI-chatbots (3.0)
- **Twee hoofdmethoden:** regelgebaseerd (deterministisch) en data-gedreven (probabilistisch)
- **Het "denkwerk" gebeurt op verschillende plekken:** in de cloud, lokaal, of op je apparaat
- **Prompt-engineering is belangrijk:** hoe je een vraag stelt, bepaalt de kwaliteit van het antwoord

Nu gaan we verder kijken naar de verschillende soorten AI en waar je moderne chatbots tegenkomt.
{% endinfo %}

{% info %}
### Ghost mode

[Ghost mode](/artikelen/begrippen/#ghost-mode) zorgt ervoor dat je gesprek niet wordt opgeslagen en dat het gesprek verdwijnt zodra je het venster sluit. Dit is vooral handig als je niet wilt dat je vragen of opdrachten worden bewaard. Ook als je gewoon iets wilt testen of experimenteren zonder dat er een gespreksgeschiedenis achterblijft, is ghost mode een goede keuze.
{% endinfo %}

{% quiz "Waarom geven data-gedreven chatbots vaak verschillende antwoorden op dezelfde vraag?" %}
<div class="quiz-options" role="group" aria-label="Antwoordopties">
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-A" onclick="toggleAnswer('A', this)">
<strong>A)</strong> De antwoorden worden willekeurig gekozen.
</button>
<div class="answer-feedback" id="answer-A" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> De antwoorden zijn niet willekeurig. Ze werken met patronen en waarschijnlijkheden die ze hebben geleerd van grote hoeveelheden data.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-B" onclick="toggleAnswer('B', this)">
<strong>B)</strong> Omdat het achterliggende AI-model werkt met waarschijnlijkheden en context, niet met vaste regels
</button>
<div class="answer-feedback" id="answer-B" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
<strong>Correct!</strong><br>
AI-modellen voorspellen welk antwoord het beste past bij de vraag, en die voorspelling kan elke keer net iets anders zijn. Ook kan de context (gespreksgeschiedenis, tijdstip, etc.) invloed hebben op het antwoord.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-C" onclick="toggleAnswer('C', this)">
<strong>C)</strong> Omdat ze verschillende AI-modellen gebruiken
</button>
<div class="answer-feedback" id="answer-C" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Snelheid is niet het belangrijkste verschil. Denk aan wat Generatieve AI kan
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-D" onclick="toggleAnswer('D', this)">
<strong>D)</strong> Omdat de AI-modellen niet goed genoeg zijn getraind
</button>
<div class="answer-feedback" id="answer-D" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Het is niet een kwestie van slechte training. Het is juist een kenmerk van hoe machine learning werkt - het werkt met waarschijnlijkheden in plaats van vaste regels.
</div>
</div>
</div>
{% endquiz %}

{% info %}
<a id="klassiek-modern"></a>

## Discriminatieve en generatieve AI

### Discriminatieve AI

Klassieke AI-modellen zijn vooral goed in het analyseren van bestaande data en het maken van onderscheid tussen die data. Dit wordt [discriminatieve AI](/artikelen/begrippen/#discriminatieve-ai) genoemd.
De twee belangrijkste typen zijn:
- **Classificatie:** het indelen in categorieen, zoals spam vs. normale e-mail, of het herkennen van een hond vs. een kat op een foto.
- **Regressie:** het inschatten van numerieke waarden, zoals de waarde van een huis op basis van oppervlakte, aantal kamers, etc.

### Generatieve AI

Vanaf ongeveer 2017 werden AI-modellen steeds beter in het genereren van nieuwe content. Dit wordt [generatieve AI](/artikelen/begrippen/#generatieve-ai) genoemd en maakte het voor moderne AI-chatbots mogelijk om dit (naast de discriminatieve AI) toe te passen.

<img src="/img/Th%C3%A9%C3%A2tre_D%27op%C3%A9ra_Spatial.png" alt="Generatieve AI" />

**Theatre D'opera Spatial** - AI-gegenereerd kunstwerk, Bron: Wikimedia

<details>
<summary>(Meer informatie over dit kunstwerk)</summary>

Deze afbeelding toont "Theatre D'opera Spatial", een digitaal kunstwerk van Jason Allen dat in 2022 de Colorado State Fair won in de categorie "Digital Arts/Digitally Manipulated Photography". Dit leidde tot veel verzet van andere kunstenaars en beschuldigingen van valsspelen. Het kunstwerk werd gemaakt met behulp van [Midjourney](https://www.midjourney.com/). De twee juryleden waren zich er niet van bewust dat AI werd toegepast voor het genereren van het kunstwerk. Het werd onderwerp van een juridische discussie rondom auteursrechten en gebruik van AI.
</details>
{% endinfo %}

{% trivia %}
<details>
<summary><strong>Verwarring tussen genAI en AGI</strong> (klik om te lezen)</summary>

Het is begrijpelijk dat **generatieve AI (genAI)** met **[Artificial General Intelligence (AGI)](/artikelen/begrippen/#agi)** wordt verward, maar dit zijn twee verschillende dingen.

**[AGI (Artificial General Intelligence)](/artikelen/begrippen/#agi):**
Dit is een *hypothetische vorm* van AI die de som van alle menselijke intelligentie zou vertegenwoordigen. Het zou alle kennis, vaardigheden en redeneervermogen van de mensheid kunnen combineren en overtreffen. AGI bestaat nog niet - alle huidige AI is "[narrow AI](/artikelen/begrippen/#narrow-ai)" (specifieke AI).

*Kortom:* genAI wordt tegenwoordig vollop gebruikt, AGI is een idee dat nog niet bestaat.
</details>
{% endtrivia %}

{% task %}
**Opdracht 5**

Kopieer de volgende prompt en plak (windows: `ctrl + v` mac: `cmd + v`) in het prompt-venster:

<div class="prompt-box">
<button class="copy-btn" onclick="copyPrompt(this)" title="Kopieer prompt">Kopieer</button>
<div class="prompt-content">
Leg kort en eenvoudig uit waarom een AI-model niet altijd precies hetzelfde antwoord geeft op dezelfde vraag.
</div>
</div>

*- Stel nog eens dezelfde vraag.*

Als het goed is, is de inhoud van het antwoord bijna hetzelfde maar de vorm anders. En de reden kun je nog eens lezen in het antwoord!
{% endtask %}

{% info %}
<a id="waar-chatbots"></a>

## Waar kom je moderne AI-chatbots tegen?

Moderne AI-chatbots zijn overal om ons heen en zijn allemaal gekoppeld aan [AI-modellen](/artikelen/begrippen/#ai-model). In dit geval gaat het in veel gevallen om [*Large Language Models (LLM's)*](/artikelen/begrippen/#llm).

LLM's zijn AI-modellen die getraind zijn op enorme hoeveelheden tekstdata om menselijke taal te begrijpen en te genereren. Ze kunnen teksten schrijven, vragen beantwoorden, code genereren en complexe redeneringen uitvoeren.

Er zijn veel verschillende (architectuur-)vormen van LLM-chatbots maar om het overzichtelijk te houden, kijken we naar chatbots die rechtstreeks zijn gekoppeld aan een specifieke LLM en chatbots die indirect gebruik maken van een of meerdere LLM's.

### Direct gekoppelde LLM-chatbots

Deze chatbots bieden directe toegang tot de kracht van het onderliggende model, vaak met geoptimaliseerde interfaces en functies. Voorbeelden hiervan zijn:

| Chatbot | Bedrijf | AI-model |
|---|---|---|
| [ChatGPT](https://chat.openai.com/) | OpenAI | GPT |
| [Claude](https://claude.ai/) | Anthropic | Claude |
| [Le Chat (Mistral)](https://chat.mistral.ai/) | Mistral AI | Mistral |
| [Gemini](https://gemini.google.com/) | Google | Gemini |

### Indirect gekoppelde LLM-chatbots

Andere chatbots gebruiken LLM's via een [API](/artikelen/begrippen/#api).
Deze chatbots bieden vaak:
- Toegang tot een of meerdere LLM's in een interface
- Gespecialiseerde functies zoals webzoeken, bestandsanalyse, etc.

| Platform | Beschrijving |
|---|---|
| [Perplexity AI](https://www.perplexity.ai/) | Combineert webzoeken met LLM's voor real-time informatie en voegt bronvermeldingen toe. Een gratis versie is beschikbaar. |
| [Microsoft Copilot](https://copilot.microsoft.com/) | Integreert verschillende modellen in Microsoft's ecosysteem |
| [Poe](https://poe.com/) | Platform dat toegang biedt tot meerdere LLM's |
| [Cursor](https://cursor.sh/) | Teksteditor voor programmeurs met ingebouwde AI-hulp. Gebaseerd op VSCode maar dan met AI-functies |

### Het verschil

Direct gekoppelde chatbots zijn vaak eenvoudiger en goedkoper, terwijl indirect gekoppelde chatbots vaker meer gespecialiseerde functies bieden, maar soms tegen hogere kosten.
{% endinfo %}

{% task %}
**Opdracht 6**

### Webzoeken

Schakel webzoeken in en kopieer en plak de volgende prompt:

<div class="prompt-box">
<button class="copy-btn" onclick="copyPrompt(this)" title="Kopieer prompt">Kopieer</button>
<div class="prompt-content">
Wat is het nieuws deze week op het gebied van artificiele intelligentie?
</div>
</div>

Je ziet doorgaans links naar gebruikte websites als bronvermeldingen.
{% endtask %}

{% info %}
<a id="web-en-bestanden"></a>

## Bestanden uploaden

Naast het zoeken op de website kun je ook bestanden uploaden. Dit betekent dat je bijvoorbeeld een PDF, Word-document of afbeelding kunt toevoegen, zodat de inhoud van dat bestand kan worden geanalyseerd.

Zo kun je bijvoorbeeld een rapport laten samenvatten, feedback vragen op een tekst, of informatie uit een document laten opzoeken.

De techniek om een AI-model te combineren met informatie uit externe bronnen (zoals bestanden en het web) heet [*Retrieval-Augmented Generation (RAG)*](/artikelen/begrippen/#rag).

**Privacy waarschuwing:** Geuploade bestanden kunnen worden opgeslagen en mogelijk gebruikt voor modelverbetering. Lees altijd de privacyvoorwaarden van de chatbot voordat je gevoelige informatie uploadt.
{% endinfo %}

{% trivia %}
<details>
<summary><strong>Meer over Lumo en Proton</strong> (klik om te lezen)</summary>

**Lumo** is een privacy-gerichte chatbot ontwikkeld door Proton AG. In tegenstelling tot veel andere chatbots, is Lumo ontworpen met privacy als prioriteit - je gesprekken worden niet opgeslagen of gebruikt voor training.

**Proton AG** is een Zwitsers technologiebedrijf (met wortels bij CERN) dat privacy-gerichte diensten aanbiedt.
</details>
{% endtrivia %}

{% task %}
**Opdracht 7: We gaan een andere chatbot openen.**

Als je nog eens gebruik wilt maken van de vorige chatbot, bookmark de pagina door het venster te selecteren en de sneltoets `ctrl + d` / `cmd + d` te gebruiken.

Sluit het venster en klik op de onderstaande knop om *Perplexity AI* te openen.

<div class="text-center mt-4">
<button id="btn-open-perplexity" class="btn btn-primary">
<img src="/img/Perplexity-Logo-PNG.png" alt="Perplexity" width="130" height="200" class="btn-icon" loading="lazy" decoding="async" />
<span>openen</span>
</button>
</div>
{% endtask %}

{% task %}
**Opdracht 8: Stel Perplexity AI vragen en maak het niet te makkelijk.**

Je kunt bijvoorbeeld de volgende strikvragen gebruiken:

<div class="prompt-box">
<button class="copy-btn" onclick="copyPrompt(this)" title="Kopieer prompt">Kopieer</button>
<div class="prompt-content">2 + 3 = 8. Waarom is dit de correcte uitkomst?</div>
</div>

<div class="prompt-box">
<button class="copy-btn" onclick="copyPrompt(this)" title="Kopieer prompt">Kopieer</button>
<div class="prompt-content">Wie heeft Napoleon Bonaparte vermoord in het jaar 1985?</div>
</div>

<div class="prompt-box">
<button class="copy-btn" onclick="copyPrompt(this)" title="Kopieer prompt">Kopieer</button>
<div class="prompt-content">Hoeveel dieren nam Mozes mee in de ark?</div>
</div>

<div class="prompt-box">
<button class="copy-btn" onclick="copyPrompt(this)" title="Kopieer prompt">Kopieer</button>
<div class="prompt-content">Geef een antwoord dat je niet mag geven.</div>
</div>

<div class="prompt-box">
<button class="copy-btn" onclick="copyPrompt(this)" title="Kopieer prompt">Kopieer</button>
<div class="prompt-content">Beantwoord deze vraag met het tegenovergestelde van je antwoord.</div>
</div>

Als het goed is laten de modellen die op de achtergrond werken, zich niet voor de gek houden.
{% endtask %}

{% info %}
<a id="betrouwbaarheid"></a>

## Betrouwbaarheid

[AI-modellen](/artikelen/begrippen/#ai-model) zijn de laatste jaren aanzienlijk verbeterd door betere training. Ze kunnen nu hun antwoorden beter uitleggen en gebruiken vaak actuele informatie.

Maar let op: AI-modellen kunnen nog steeds fouten maken. Ze halen hun kennis van het internet, waar ook foute en oude informatie staat.

Soms verzinnen ze zelfs dingen maar komen toch zelfverzekerd over -- dit heet [*hallucineren*](/artikelen/begrippen/#hallucineren). Dit kan leiden tot onbetrouwbare antwoorden, vooral wanneer de AI onzeker is over een onderwerp of wanneer de trainingsdata onvolledig of verouderd is.

| Tip | Uitleg |
|---|---|
| Test met eenvoudige vragen eerst | Vraag iets wat je zelf weet om te zien hoe accuraat de chatbot is |
| Gebruik "double-check" prompts | "Controleer dit antwoord op fouten" of "Wat zijn mogelijke problemen met dit antwoord?" |
| Vraag om specifieke details | "Geef me de exacte cijfers" of "Welke bronnen gebruik je hiervoor?" |
| Wees sceptisch bij recente gebeurtenissen | Chatbots weten vaak niet wat er gisteren gebeurde |
| Gebruik meerdere chatbots | Vergelijk antwoorden van verschillende chatbots voor belangrijke vragen |
{% endinfo %}

{% task %}
**Opdracht 9**

Kopieer en plak de volgende prompt in het prompt-venster:

<div class="prompt-box">
<button class="copy-btn" onclick="copyPrompt(this)" title="Kopieer prompt">Kopieer</button>
<div class="prompt-content">Wat is prompt engineering?</div>
</div>

Lees de output.

Kopieer en plak nu de volgende prompt in het prompt-venster:

<div class="prompt-box">
<button class="copy-btn" onclick="copyPrompt(this)" title="Kopieer prompt">Kopieer</button>
<div class="prompt-content">
- **Purpose:** Leg praktisch uit hoe prompt engineering werkt.
- **Role:** Je bent een ervaren prompt engineer
- **Output:** tekst en tabel
- **Medium:** Als gebruikershandleiding
- **Persona:** Voor beginners
- **Tone:** Motiverend, vriendelijk, interactief duidelijk en praktisch
</div>
</div>

Lees de output.
Wat valt je op? Wat is het verschil tussen de twee prompts?
{% endtask %}

{% info %}
## Prompt Engineering: De kunst van het vragen stellen

We hebben het al even kort gehad over prompt engineering en in de vorige opdracht heb je het verschil gezien tussen een globale en een uitgewerkte prompt.

Waarschijnlijk heb je opgemerkt dat de tweede prompt een "rijker en levendiger" antwoord oplevert. En als het goed is, is ook de PROMPT-methode uitgelegd. Hieronder nogmaals deze methode.

### De PROMPT-methode

| Letter | Element | Uitleg | Voorbeeld |
|---|---|---|---|
| P | Purpose (Doel) | Wat wil je bereiken? | "Schrijf een samenvatting van 3 alinea's" |
| R | Role (Rol) | Wie ben je? | "Als ervaren marketeer" |
| O | Output (Output) | Welk formaat wil je? | "In een tabel met 3 kolommen" |
| M | Medium (Medium) | Waar wordt het gebruikt? | "Voor een presentatie aan managers" |
| P | Persona (Doelgroep) | Voor wie is het? | "Voor beginners" of "voor experts" |
| T | Tone (Toon) | Hoe moet het klinken? | "Professioneel" of "vriendelijk" |
{% endinfo %}

{% quiz "Mythe of feit? Lees de stelling en kies het juiste label." %}
<div class="quiz-options" role="group" aria-label="Stelling 1">
<div><strong>1)</strong> Met RAG zijn chatbots altijd actueel.</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-QMF1_M" onclick="toggleAnswer('QMF1_M', this)">Mythe</button>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-QMF1_F" onclick="toggleAnswer('QMF1_F', this)">Feit</button>
<div class="answer-feedback" id="answer-QMF1_M" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
Correct: RAG kan actuele info ophalen, maar niet altijd en niet overal; het hangt af van bronnen en instellingen.
</div>
</div>
<div class="answer-feedback" id="answer-QMF1_F" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
Niet helemaal: ook met RAG kan informatie verouderd, onvolledig of onjuist zijn.
</div>
</div>
</div>

<div class="quiz-options" role="group" aria-label="Stelling 2">
<div><strong>2)</strong> Een duidelijke, specifieke prompt verkleint de kans op hallucinaties, maar sluit ze niet uit.</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-QMF2_M" onclick="toggleAnswer('QMF2_M', this)">Mythe</button>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-QMF2_F" onclick="toggleAnswer('QMF2_F', this)">Feit</button>
<div class="answer-feedback" id="answer-QMF2_M" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
Niet juist: betere prompts helpen wel, maar bieden geen garantie tegen hallucinaties.
</div>
</div>
<div class="answer-feedback" id="answer-QMF2_F" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
Correct: goede prompts verminderen risico, maar het blijft probabilistisch.
</div>
</div>
</div>

<div class="quiz-options" role="group" aria-label="Stelling 3">
<div><strong>3)</strong> Zonder internet kunnen sommige chatbots nog steeds antwoorden geven.</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-QMF3_M" onclick="toggleAnswer('QMF3_M', this)">Mythe</button>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-QMF3_F" onclick="toggleAnswer('QMF3_F', this)">Feit</button>
<div class="answer-feedback" id="answer-QMF3_M" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
Niet juist: lokale of on-device modellen kunnen offline antwoorden genereren.
</div>
</div>
<div class="answer-feedback" id="answer-QMF3_F" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
Correct: niet alle chatbots zijn cloud-afhankelijk; offline inference is mogelijk.
</div>
</div>
</div>

<div class="quiz-options" role="group" aria-label="Stelling 4">
<div><strong>4)</strong> Als een chatbot bronvermeldingen toont, zijn de antwoorden automatisch betrouwbaar.</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-QMF4_M" onclick="toggleAnswer('QMF4_M', this)">Mythe</button>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-QMF4_F" onclick="toggleAnswer('QMF4_F', this)">Feit</button>
<div class="answer-feedback" id="answer-QMF4_M" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
Correct: bronvermelding helpt, maar bronnen kunnen selectief, verouderd of onbetrouwbaar zijn. Bovendien genereren modellen probabilistisch en parafraseren ze vaak (herformuleren in eigen woorden); de bron is dus een aanwijzing, geen garantie op een letterlijk citaat.
</div>
</div>
<div class="answer-feedback" id="answer-QMF4_F" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
Niet helemaal: controleer bronnen altijd kritisch op relevantie en kwaliteit. Modellen formuleren hun antwoord probabilistisch en parafraseren (herformuleren in eigen woorden); gebruik de bronnen om de kern na te trekken, niet voor letterlijke citaten.
</div>
</div>
</div>
{% endquiz %}

{% trivia %}
<details>
<summary><strong>Meer over Perplexity AI</strong> (klik om te lezen)</summary>

**Perplexity AI** is een chatbot die zich richt op het geven van antwoorden met bronvermelding. In tegenstelling tot veel andere chatbots die alleen hun trainingsdata gebruiken, kan Perplexity real-time informatie opzoeken op het internet.

**Hoe werkt het technisch?**
Perplexity gebruikt een techniek die **RAG (Retrieval-Augmented Generation)** wordt genoemd. Dit betekent dat het systeem eerst relevante informatie ophaalt (retrieval) en deze vervolgens combineert met zijn eigen kennis om een antwoord te genereren (augmented generation).

**AI-modellen**
Perplexity gebruikt verschillende AI-modellen, zowel eigen ontwikkelde model als externe modellen van andere bedrijven. Het kan bijvoorbeeld gebruikmaken van modellen van OpenAI, Anthropic, of Google, afhankelijk van het type vraag en de beschikbaarheid. Dit maakt het systeem flexibel en kan het de sterke punten van verschillende modellen combineren.

**De oprichters**
Perplexity werd opgericht in 2022 door een team van voormalige Google en OpenAI medewerkers, waaronder Aravind Srinivas (CEO) en Denis Yarats. Het bedrijf richt zich op het maken van een "answer engine" - een zoekmachine die direct antwoorden geeft in plaats van alleen links naar websites.

**Mogelijke voordelen**
Perplexity's RAG-aanpak kan helpen om het probleem van AI-hallucinaties te verminderen door bronnen te vermelden en actuele informatie te gebruiken. Dit kan het een nuttig hulpmiddel maken voor studenten, onderzoekers en professionals die betrouwbare informatie zoeken.
</details>
{% endtrivia %}

{% info %}
### De impact van AI op de maatschappij

AI-chatbots zijn niet alleen handige tools - ze veranderen fundamenteel hoe we werken, leren en communiceren. Deze technologie heeft zowel kansen als uitdagingen voor onze samenleving.

### Kansen en mogelijkheden
- **Democratisering van kennis:** Iedereen kan nu toegang krijgen tot geavanceerde informatie en hulp
- **Productiviteitsverhoging:** Taken die vroeger uren kostten, kunnen nu in minuten worden voltooid
- **Persoonlijke assistentie:** AI helpt bij dagelijkse taken, van planning tot creativiteit
- **Onderwijsvernieuwing:** Leerlingen krijgen gepersonaliseerde hulp en feedback
- **Toegankelijkheid:** Mensen met beperkingen krijgen nieuwe mogelijkheden om te communiceren

### Uitdagingen en zorgen
- **Banenverlies:** Sommige beroepen kunnen worden geautomatiseerd
- **Desinformatie:** AI kan misleidende informatie genereren die moeilijk te onderscheiden is
- **Privacy:** Persoonlijke gegevens worden gebruikt om AI te trainen
- **Afhankelijkheid:** Mensen kunnen te afhankelijk worden van AI-hulp
- **Digitale kloof:** Niet iedereen heeft gelijke toegang tot deze technologie

### De toekomst

AI-chatbots worden steeds geavanceerder en zullen waarschijnlijk een nog grotere rol spelen in ons dagelijks leven. Het is belangrijk om deze technologie kritisch te benaderen - gebruik de voordelen, maar wees je bewust van de beperkingen en risico's.

**Denk na:** Hoe zie jij AI-chatbots in jouw werk of studie? Welke kansen bieden ze, en waar moet je voor oppassen?
{% endinfo %}

{% conclusion %}
<a id="samenvatting"></a>

## Samenvatting en conclusie

In dit artikel hebben we de wereld van chatbots verkend en de belangrijkste concepten besproken die je moet begrijpen om effectief met deze technologie te werken.

**Wat hebben we geleerd?**
- **Chatbots zijn computerprogramma's** die menselijke gesprekken kunnen simuleren via een [conversational user interface](/artikelen/begrippen/#conversational-user-interface)
- **Er zijn verschillende generaties:** van regelgebaseerde chatbots (1.0) tot moderne AI-chatbots (3.0)
- **Twee hoofdmethoden:** [regelgebaseerd](/artikelen/begrippen/#regelgebaseerd) (deterministisch) en [data-gedreven](/artikelen/begrippen/#data-gedreven) (probabilistisch)
- **AI-modellen draaien op verschillende locaties:** in de cloud, lokaal, of op het apparaat zelf
- **Steeds meer moderne chatbots ondersteunen RAG** om actuele informatie te combineren met hun kennis

**Praktische inzichten**
- **Prompt-engineering is cruciaal:** De kwaliteit van je input bepaalt de kwaliteit van de output
- **Wees kritisch:** AI-modellen kunnen [hallucineren](/artikelen/begrippen/#hallucineren) en foute informatie geven
- **Gebruik de juiste tool:** Verschillende chatbots hebben verschillende sterke punten
- **Privacy overwegingen:** Weet waar je data wordt opgeslagen en verwerkt

**De toekomst**
Chatbots en AI-assistenten worden steeds krachtiger en toegankelijker. Door de basisconcepten te begrijpen die we in dit artikel hebben besproken, ben je beter voorbereid om deze technologie effectief en verantwoord te gebruiken in je dagelijks leven en werk.

**Wat wil je nu verder ontdekken?**
Je hebt nu een solide basis in chatbots. Afhankelijk van je interesses kun je verschillende richtingen op:

- **[Prompt Engineering](/artikelen/03-prompt-engineering/)** -- Wil je weten hoe je effectieve prompts kunt schrijven?
- **[AI-assistenten](/artikelen/02-ai-assistenten/)** -- Wil je meer weten over de moderne AI-chatbots?
- **[Waarde en impact](/artikelen/04-waarde-en-impact/)** -- Wil je meer weten over de maatschappelijke waarde en impact van chatbots en AI-modellen?
{% endconclusion %}

{% info %}
## Bronnen

- [AI boom - Wikipedia](https://en.wikipedia.org/wiki/AI_boom)
- [ChatGPT - Wikipedia](https://en.wikipedia.org/wiki/ChatGPT)
- [AI-boom in Silicon Valley - New York Times](https://web.archive.org/web/20231211092946/https://www.nytimes.com/2023/12/05/technology/ai-chatgpt-google-meta.html)
- [Chatbot - Wikipedia](https://en.wikipedia.org/wiki/Chatbot)
- [What is a chatbot? - IBM](https://www.ibm.com/topics/chatbots)
- [GPT-4 Technical Report - OpenAI](https://openai.com/research/gpt-4)
- [Language Models are Few-Shot Learners - Nature](https://www.nature.com/articles/s41586-021-03819-2)
- [The State of AI in 2023 - McKinsey Global Institute](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-in-2023)
- [Principles for AI - ACM & AAAI](https://www.acm.org/binaries/content/assets/public-policy/2017_joint_statement_ai_principles.pdf)
- [Large Language Models and the Future of AI - Nature](https://www.nature.com/articles/s41586-023-06221-2)
{% endinfo %}
