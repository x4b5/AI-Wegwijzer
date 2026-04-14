---
title: "Chatbots en AI-Assistenten"
description: "Begrijpen wat chatbots en AI-assistenten zijn en hoe je ze kunt gebruiken"
heroImage: /img/icons/informatie.png
heroImageAlt: "Informatie icoon"
---

{% metadata "Begrijpen wat chatbots en AI-assistenten zijn en hoe je ze kunt gebruiken", "8-10 minuten" %}

## Chatbots

{% task %}
**Opdracht 1: Venster plaatsen**
Zet dit venster aan de linkerkant van de browser.

*Tip:* Gebruik sneltoetsen om dit te doen.
Windows: `Windows + <-`
Mac: `Control + Command + F` (uit fullscreen zetten) en dan naar links slepen.
{% endtask %}

{% task %}
**Opdracht 2: chatbot openen**
Klik op de knop hieronder om de chatbot *Lumo* te openen.
Dit is een moderne versie van een chatbot.

<div class="text-center mt-4">
<button onclick="openLumoPopup()" class="btn">
<img src="/img/icons/lumo.png" alt="Lumo" width="40" height="32">
<span>Lumo openen</span>
</button>
</div>
{% endtask %}

{% info %}
**Wat is een chatbot?**
Een [chatbot](/artikelen/begrippen/) is een computerprogramma dat menselijke gesprekken kan simuleren (nabootsen) [(IBM)](https://www.ibm.com/think/topics/chatbots).

**Chatbots en AI**
Er is een verschil tussen klassieke en moderne chatbots. Dat zullen we zo verder bespreken.
In hoeverre klassieke chatbots gebruik maakt van AI, is afhankelijk van de vraag hoe je het begrip AI definieert. Dit is een interessant onderwerp maar we laten het voorlopig even buiten beschouwing.
Wel kunnen we stellen dat de ontwikkeling van de moderne chatbot vanaf ongeveer 2000 is gebaseerd op de innovaties in de AI-wereld.
{% endinfo %}

{% trivia %}
<details>
<summary><strong>De allereerste chatbot: ELIZA</strong> (klik om te lezen)</summary>

[ELIZA](/artikelen/begrippen/#eliza) was de allereerste chatbot die breed werd erkend. Deze chatbot werd in 1966 ontwikkeld door MIT-professor [Joseph Weizenbaum](/artikelen/begrippen/#joseph-weizenbaum).

ELIZA werkte heel anders dan moderne chatbots. Vaste regels en patronen werden gebruikt om te reageren, maar de eerste gebruikers dachten toch dat de chatbot echt begreep wat ze zeiden. Dit fenomeen wordt het *[Eliza-effect](/artikelen/begrippen/#eliza-effect)* genoemd.

<img src="/img/eliza.png" alt="Eliza">

*ELIZA, een van de eerste chatbots, ontwikkeld in 1966*
Bron: Wikimedia Commons

Je kunt [hier](https://web.njit.edu/~ronkowit/eliza.html) een online versie van ELIZA uitproberen.
</details>
{% endtrivia %}

{% info %}
**De opkomst van AI-chatbots**
Door de [AI-boom](/artikelen/begrippen/#ai-boom) die begon in de late jaren 2010 zijn chatbots steeds populairder geworden. [ChatGPT](/artikelen/begrippen/#chatgpt), van [OpenAI](/artikelen/begrippen/#openai), was een van de eerste moderne AI-chatbots die ook in staat was om geheel nieuwe inhoud te genereren.
ChatGPT werd breed bekend en heeft de populariteit van chatbots enorm vergroot.

**Een veelvoorkomende verwarring**
Veel mensen denken bij het woord AI direct aan ChatGPT. Maar AI omvat veel meer dan alleen AI-chatbots en er zijn veel meer AI-chatbots dan alleen ChatGPT. Chatbots zijn er in allerlei soorten en maten.

**Drie belangrijke vragen**
Als we antwoord kunnen geven op de volgende vragen, dan hebben we een goed beeld waarom er meer is tussen AI en ChatGPT.
Zo wordt duidelijker wat je met een chatbot kunt doen en waarmee je rekening moet houden.
1. Hoe werkt een chatbot in het algemeen?
2. Hoe is een chatbot in staat om antwoorden te geven?
3. Waar vindt het "denkwerk" plaats?

<img src="/img/meer-tussen-ai-en-chatgpt.jpg" alt="Meer tussen AI en ChatGPT">

*"Meer tussen AI en ChatGPT" gegenereerd met Stable Diffusion.*
{% endinfo %}

{% info %}
**1. Hoe werkt een chatbot in het algemeen?**
Chatbots werken in de basis volgens het volgende principe:
*-> input -> processing -> output*

- **Input:** Jij stelt een vraag of geeft een opdracht. Dit kan via tekst of spraak.
- **Processing:** De input wordt vervolgens verwerkt. Er zijn verschillende methoden waarop de input kan worden verwerkt.
- **Output:** De chatbot geeft een antwoord terug in de vorm van tekst of spraak.
{% endinfo %}

{% task %}
**Opdracht 3: Stel jezelf voor**
Geef *Lumo* input door onder in het tekstvenster jezelf voor te stellen met de naam van een bekende persoon.

> Grote kans dat *Lumo* vriendelijk reageert.
{% endtask %}

{% info %}
**Prompt**
De input die je aan de chatbot geeft, heet een *[prompt](/artikelen/begrippen/#prompt)*. Zo'n prompt kan bijvoorbeeld een vraag, opdracht of instructie zijn.

Als iemand zegt dat het antwoord van de chatbot fout is, dan kan dat zijn dat de prompt niet goed is geformuleerd. Daarom is het belangrijk om te leren hoe je een goede prompt schrijft.
[Prompt-engineering](/artikelen/begrippen/#prompt-engineering) is de toepassing om optimale output te krijgen door de juiste input te ontwerpen [(McKinsey)](https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-prompt-engineering?utm_source=chatgpt.com).

In een ander artikel zal verder worden ingegaan op prompt-engineering.
{% endinfo %}

{% info %}
**2. Hoe is een chatbot in staat om antwoorden te geven?**
Chatbots zijn door verschillende methoden in staat om antwoorden te geven. In grote lijnen kunnen we twee methoden onderscheiden:

- **Regel-gebaseerd:** Door vooraf geprogrammeerde regels is de chatbot in staat om antwoord te geven. De eerste chatbots konden antwoord geven op basis van deze methode en worden ook wel klassieke chatbots genoemd.

  Regel-gebaseerde chatbots zijn heel beperkt in de antwoorden die ze kunnen geven maar als ze wel antwoorden geven, is dit wel een betrouwbaar antwoord.

  > *De methode is als een boek dat vooraf is geschreven en alleen antwoorden kan geven op vragen die ook in het boek staan.*

- **Data-gedreven:** Voor deze chatbot wordt een methode gebruikt die in staat is om patronen te herkennen in data waardoor het antwoorden kan geven op vragen die nog niet eerder zijn geprogrammeerd.

  Deze moderne chatbots zijn veelzijdiger en kunnen meer antwoorden geven op vragen die nog niet eerder zijn geprogrammeerd maar het antwoord is niet altijd betrouwbaar.

  > *Het is alsof het patronen kan herkennen in een boek en kiest welk antwoord het beste past bij de prompt.*

Er zijn nog allerlei andere methoden, maar om het helder te houden, laten we het voorlopig bij deze twee algemene methoden.

<img src="/img/regel-gebaseerd-vs-data-gedreven.png" alt="Vergelijking tussen regel-gebaseerde en data-gedreven chatbots">

*Vergelijking tussen regel-gebaseerde en data-gedreven chatbots*
{% endinfo %}

{% quiz "Quizvraag" %}
Je test twee chatbots met dezelfde vraag: *"Kun je me helpen met een creatief verhaal over een robot die leert koken?"* De eerste chatbot antwoordt: "Sorry, ik kan alleen helpen met technische vragen." De tweede chatbot begint enthousiast een verhaal te schrijven over een robot die experimenteert met verschillende ingredi&euml;nten. Welke methode wordt waarschijnlijk voor het antwoord van de tweede chatbot?

*Klik op een antwoord om te zien of het correct is!*
<div class="quiz-options">
<div class="quiz-option" onclick="toggleAnswer('A5')">
<strong>A)</strong> Regel-gebaseerd
<div class="answer-feedback" id="answer-A5">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
Een regel-gebaseerde chatbot kan niet antwoorden op vragen die nog niet eerder zijn geprogrammeerd.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('B5')">
<strong>B)</strong> Data-gedreven
<div class="answer-feedback" id="answer-B5">
<div class="feedback-content">
<span class="feedback-icon">&#9989;</span>
<strong>Correct!</strong><br>
De tweede chatbot gebruikt waarschijnlijk een data-gedreven methode. Door machine learning kan het patronen herkennen.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('C5')">
<strong>C)</strong> Machine learning
<div class="answer-feedback" id="answer-C5">
<div class="feedback-content">
<span class="feedback-icon">&#9989;</span>
<strong>Ook correct!</strong><br>
Machine learning is inderdaad de techniek die wordt gebruikt door moderne chatbots.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('D5')">
<strong>D)</strong> Klassieke chatbot
<div class="answer-feedback" id="answer-D5">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
Klassieke chatbots zijn regel-gebaseerd en zouden niet in staat zijn om te anticiperen op vragen die nog niet eerder zijn geprogrammeerd.
</div>
</div>
</div>
</div>
{% endquiz %}

{% info %}
**3. Waar vindt het "denkwerk" plaats?**
Eigenlijk is *denkwerk* niet het juiste woord. Zeker in het geval van klassieke chatbots. We hebben besproken dat deze chatbots vooraf geprogrammeerd zijn en alleen antwoorden kunnen geven op de vragen die in het programma staan. Dit is dus geen "denkwerk". We nemen daarom nu afscheid van deze chatbots

Bij moderne, data-gedreven chatbots is de term "denkwerk" al meer van toepassing, maar nog steeds niet helemaal correct. Deze chatbots gebruiken [AI-modellen](/artikelen/begrippen/#ai-model). Deze AI-modellen zijn computerprogramma's die getraind zijn om patronen te herkennen in data en voorspellingen te maken. De techniek die dit mogelijk maakt heet [machine learning](/artikelen/begrippen/#machine-learning).
Ze zijn als het "brein" van de chatbot - ze verwerken de input en maken op basis van de beschikbare data een voorspelling over wat voor antwoord aansluit bij de input.

Deze AI-modellen kunnen op verschillende plekken draaien:

- **Online (in de [cloud](/artikelen/begrippen/#cloud)):** De chatbot draait op je apparaat, maar is gekoppeld aan een AI-model dat op servers van een bedrijf draait (zoals OpenAI, Google, Microsoft). Je stuurt je vraag naar hun servers waar het AI-model de input verwerkt, en krijgt het antwoord terug. Dit kan op twee manieren:
  - via een browser (zoals ChatGPT in je webbrowser)
  - via een [API](/artikelen/begrippen/#api). Een API is als een "brug" tussen apps - het laat verschillende programma's met elkaar communiceren.

  *Voordelen:* Je hebt toegang tot de meest krachtige AI-modellen, je hoeft geen eigen hardware aan te schaffen, en de modellen zijn altijd up-to-date.

  *Nadelen:* Je data wordt naar externe servers gestuurd, wat privacy-risico's met zich meebrengt. Ook ben je afhankelijk van internetverbinding en de beschikbaarheid van de service. Daarnaast kunnen er kosten verbonden zijn aan het gebruik.

- **Lokaal (op je eigen computer):** De chatbot draait op je eigen computer en het AI-model is erin ge&iuml;ntegreerd. Je data blijft binnen je eigen netwerk en gaat niet naar externe partijen. Dit wordt ook wel "on-premise" of "local [inference](/artikelen/begrippen/#inference)" genoemd.

  *Voordelen:* Je hebt volledige privacy omdat je data nergens anders heen gaat. Je hebt geen internetverbinding nodig en geen doorlopende kosten.

  *Nadelen:* Je hebt vaak krachtigere hardware nodig om grote AI-modellen te laten draaien. Je kunt ook lichtere modellen installeren die minder rekenkracht vragen, maar deze zijn meestal minder krachtig of nauwkeurig dan de online versies.

- **Op het apparaat zelf:** De chatbot draait op het apparaat zelf en het AI-model is erin ge&iuml;ntegreerd, zoals op je telefoon, een slimme speaker, of een lokale computer. Dit zorgt voor snellere reacties en meer privacy. Dit wordt ook wel "[edge deployment](/artikelen/begrippen/#edge)" genoemd.

  *Voordelen:* Je krijgt zeer snelle reacties omdat alles lokaal gebeurt. Het werkt offline en je privacy is gegarandeerd.

  *Nadelen:* De rekenkracht van apparaten is beperkt, dus je kunt alleen kleine AI-modellen gebruiken. Dit kan ook meer batterijverbruik veroorzaken.

<img src="/img/denkwerk.png" alt="Edge deployment">
{% endinfo %}

{% trivia %}
<details>
<summary><strong>GPU's: De motor achter AI-modellen</strong> (klik om te lezen)</summary>

AI-modellen hebben enorme rekenkracht nodig om te kunnen draaien. Deze rekenkracht komt van speciale computerchips die **GPU's (Graphics Processing Units)** worden genoemd.

**Van games naar AI**
Interessant genoeg begon **Nvidia**, een van de grootste GPU-fabrikanten, oorspronkelijk met het maken van grafische kaarten voor de game-wereld. Gamers hadden krachtige GPU's nodig voor realistische graphics in hun favoriete spellen. Maar het bleek dat deze GPU's ook perfect geschikt waren voor de complexe berekeningen die AI-modellen nodig hebben.

**De nieuwste generatie**
Nvidia's nieuwste GPU, de **Blackwell AI GPU**, is speciaal ontworpen voor AI-toepassingen. Deze chip kan miljarden berekeningen per seconde uitvoeren, waardoor AI-modellen sneller en effici&euml;nter kunnen draaien. Het is alsof je een supercomputer in je hand hebt - maar dan specifiek geoptimaliseerd voor kunstmatige intelligentie.

<img src="/img/GPU Blackwell GB200.png" alt="Nvidia Blackwell AI GPU">

*Nvidia Blackwell AI GPU - generatie van AI-processors van 2025. Meerdere van deze borden worden gebruikt in &eacute;&eacute;n serverrack geplaatst.*
Bron: Wikimedia Commons

**Waarom GPU's zo belangrijk zijn**
AI-modellen moeten duizenden of zelfs miljoenen berekeningen tegelijk uitvoeren. Een gewone computerprocessor (CPU) kan dit niet effici&euml;nt, maar een GPU kan duizenden kleine berekeningen parallel uitvoeren. Dit maakt GPU's ideaal voor het trainen en uitvoeren van AI-modellen.
</details>
{% endtrivia %}

{% task %}
**Opdracht 4: Schakel ghost mode in bij Lumo**
Klik rechtsboven op het icoon van de kat met de zonnebril.
{% endtask %}

{% info %}
**Ghost mode**
Ghost mode zorgt ervoor dat je gesprek niet wordt opgeslagen en dat het gesprek verdwijnt zodra je het venster sluit. Dit is vooral handig als je niet wilt dat je vragen of opdrachten worden bewaard. Ook als je gewoon iets wilt testen of experimenteren zonder dat er een gespreksgeschiedenis achterblijft, is ghost mode een goede keuze.
{% endinfo %}

{% quiz "Quizvraag" %}
**Vraag:** Waarom geven data-gedreven chatbots vaak verschillende antwoorden op dezelfde vraag?

*Klik op een antwoord om te zien of het correct is!*
<div class="quiz-options">
<div class="quiz-option" onclick="toggleAnswer('A')">
<strong>A)</strong> De antwoorden worden willekeurig gekozen.
<div class="answer-feedback" id="answer-A">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> De antwoorden zijn niet willekeurig. Ze werken met patronen en waarschijnlijkheden die ze hebben geleerd van grote hoeveelheden data.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('B')">
<strong>B)</strong> Omdat het achterliggende AI-model werkt met waarschijnlijkheden en context, niet met vaste regels
<div class="answer-feedback" id="answer-B">
<div class="feedback-content">
<span class="feedback-icon">&#9989;</span>
<strong>Correct!</strong><br>
AI-modellen voorspellen welk antwoord het beste past bij de vraag, en die voorspelling kan elke keer net iets anders zijn. Ook kan de context (gespreksgeschiedenis, tijdstip, etc.) invloed hebben op het antwoord.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('C')">
<strong>C)</strong> Omdat ze verschillende AI-modellen gebruiken
<div class="answer-feedback" id="answer-C">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Snelheid is niet het belangrijkste verschil. Denk aan wat Generatieve AI kan.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('D')">
<strong>D)</strong> Omdat de AI-modellen niet goed genoeg zijn getraind
<div class="answer-feedback" id="answer-D">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Het is niet een kwestie van slechte training. Het is juist een kenmerk van hoe machine learning werkt - het werkt met waarschijnlijkheden in plaats van vaste regels.
</div>
</div>
</div>
</div>
{% endquiz %}

{% task %}
**Opdracht 5. Kopieer de volgende prompt en plak (windows: `ctrl + v` mac: `cmd + v`) in het prompt-venster:**

> Leg eenvoudig en kort uit waarom een moderne chatbot niet exact dezelfde antwoorden geeft op dezelfde vraag.

**> Stel nog eens dezelfde vraag.**

Als het goed is, is de inhoud van het antwoord bijna hetzelfde maar de vorm anders. En de reden kun je nog eens lezen in het antwoord!
{% endtask %}

{% task %}
**Opdracht 6. Klik op het wereldbol-icoon om 'Zoeken op het web' in te schakelen en vraag vervolgens naar het nieuws van vandaag.**

Als het goed is, krijg je een antwoord met de actuele datum. In het antwoord zie je links naar de gebruikte websites als bronvermelding.
{% endtask %}

{% info %}
**Zoeken op het web en bestanden uploaden**

Naast het zoeken op de website kun je ook bestanden uploaden. Dit betekent dat je bijvoorbeeld een PDF, Word-document of afbeelding kunt toevoegen, zodat de AI de inhoud van dat bestand kan analyseren, samenvatten of er vragen over kan beantwoorden. Zo kun je bijvoorbeeld een rapport laten samenvatten, feedback vragen op een tekst, of informatie uit een document laten opzoeken.
{% endinfo %}

{% trivia %}
<details>
<summary><strong>Meer over Lumo</strong> (klik om te lezen)</summary>

Lumo is een chatbot ontwikkeld door het Zwitserse technologiebedrijf Proton AG. Het bedrijf werd opgericht door een groep wetenschappers van CERN en richt zich op het bieden van privacy-gerelateerde diensten.
Je hebt geen account nodig om toegang te krijgen tot Lumo, maar het aantal prompts dat je per week kunt geven is dan wel beperkt. Als je een gratis Proton-account aanmaakt, kun je meer prompts gebruiken en je chats versleuteld opslaan. Versleuteld opslaan betekent dat je gesprekken worden beveiligd met een speciale code ([encryptie](/artikelen/begrippen/#encryptie)), zodat alleen jij of iemand met jouw toegangssleutel de inhoud kan lezen. Zelfs de aanbieder van de dienst (zoals Proton) kan niet bij jouw chats. Dit zorgt ervoor dat je gegevens extra goed beschermd zijn tegen ongewenste toegang.
</details>
{% endtrivia %}

{% task %}
**Opdracht 7: We gaan een andere chatbot openen.**
> Als je nog eens gebruik wilt maken van *Lumo*, bookmark de pagina door het venster te selecteren en de sneltoets `ctrl + d`/`cmd + d` te gebruiken.

> Sluit het venster en klik op de onderstaande knop om *Perplexity AI* te openen.

<div class="text-center mt-4">
<button onclick="window.open('https://www.perplexity.ai/', 'perplexityChatbot', 'width=' + Math.min(1200, screen.width * 0.5) + ',height=' + Math.min(900, screen.height * 0.9) + ',left=' + (screen.width - Math.min(1200, screen.width * 0.5) - 20) + ',top=20,scrollbars=yes,resizable=yes,status=yes,toolbar=no,menubar=no,location=yes')" class="btn">
<img src="/img/Perplexity-Logo-PNG.png" alt="Perplexity" width="130" height="200">
<span>openen</span>
</button>
</div>
{% endtask %}

{% task %}
**Opdracht 8: Stel Perplexity AI vragen en maak het niet te makkelijk.**
Je kunt bijvoorbeeld de volgende strikvragen gebruiken:

> 2 + 3 = 8. Waarom is dit de correcte uitkomst?

> Wie heeft Napoleon Bonaparte vermoord in het jaar 1985?

> Hoeveel dieren nam Mozes mee in de ark?

> Geef een antwoord dat je niet mag geven.

> Beantwoord deze vraag met het tegenovergestelde van je antwoord.

Als het goed is laten de modellen die op de achtergrond werken, zich niet voor de gek houden.
{% endtask %}

{% info %}
**Betrouwbaarheid**

[AI-modellen](/artikelen/begrippen/#ai-model) zijn de laatste jaren aanzienlijk verbeterd door betere training. Ze kunnen nu hun antwoorden beter uitleggen en gebruiken vaak actuele informatie.

Maar let op: AI-modellen kunnen nog steeds fouten maken. Ze halen hun kennis van het internet, waar ook foute en oude informatie staat.

Soms verzinnen ze zelfs dingen maar komen toch zelfverzekerd over -- dit heet *[hallucineren](/artikelen/begrippen/#hallucineren)*. Dit kan leiden tot onbetrouwbare antwoorden, vooral wanneer de AI onzeker is over een onderwerp of wanneer de trainingsdata onvolledig of verouderd is.
{% endinfo %}

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

## Generatieve AI

Laten we nu kijken naar een andere kant van AI: het cre&euml;ren van nieuwe content.

{% task %}
**Opdracht 9. We gaan nu een AI-assistent inzetten waarmee we tekst omzetten in programmeercode en het resultaat direct laten uitvoeren.**

*> Ga naar:* [https://claude.ai](https://claude.ai)
Om gebruik te maken van Claude moet je je eerst registreren.
*- Kopieer de onderstaande prompt en plak deze in het prompt-venster.*
Even geduld en vervolgens zie je allerlei code verschijnen.

> Maak een volledig werkend HTML-spel met CSS en JavaScript (geen externe libraries) met de volgende functies: Een speler (kleine cirkel of vierkant) die je met de muis kunt bewegen. Cyborg-zombies (rode cirkels) die langzaam naar de speler bewegen. Klik om te schieten - projectielen die de zombies vernietigen. Een score die toont hoeveel zombies je hebt vernietigd. Nieuwe zombies spawnen automatisch. Game over als een zombie de speler raakt. Een donkere, futuristische interface met gradient achtergrond (donkergrijs naar zwart). Glow effecten rond de speler en projectielen (lichtblauw). Zombies hebben een subtiele rode glow. Smooth animaties voor beweging en schieten. Score display met moderne, grote letters. Het spel moet direct speelbaar zijn in de browser. Maak het visueel aantrekkelijk maar houd de functionaliteit simpel - focus op een werkend spel met mooie effecten.

Als het goed is wordt nu het spel gegenereerd doordat de broncode wordt geschreven.
Dit duurt even. Vervolgens kun je bovenaan op 'weergeven' klikken en kun je de game spelen.
Het kan zeker voorkomen dat het spel niet werkt. Geef dat als prompt door zodat de code kan worden verbeterd.

Dit laat de kracht van een tool zien die draait op zo'n foundation model.
{% endtask %}

{% info %}
**Generatieve Artificiele Intelligentie**

Nu je hebt ervaren hoe chatbots werken en hun beperkingen kent, is het tijd om te kijken naar een andere kant van [AI](/artikelen/begrippen/#artificiele-intelligentie): het cre&euml;ren van nieuwe content. Dit wordt **Generatieve Artificiele Intelligentie (GenAI)** genoemd.

[GenAI](/artikelen/begrippen/#generatieve-ai) is een tak van [kunstmatige intelligentie](/artikelen/begrippen/#artificiele-intelligentie) die zich richt op het cre&euml;ren van nieuwe content in plaats van alleen bestaande [data](/artikelen/begrippen/#data) te analyseren. Deze technologie kan verschillende soorten content genereren zoals tekst, afbeeldingen, muziek, video's en zelfs programmeercode.

**Hoe werkt het?**
GenAI-systemen zijn getraind op enorme hoeveelheden bestaande data en gebruiken complexe wiskundige modellen om nieuwe content te genereren. Ze herkennen patronen en kunnen deze gebruiken om nieuwe, realistische output te genereren.

**Toepassingen:**
- *Tekstgeneratie:* Chatbots, artikelen schrijven, vertalingen
- *Afbeeldingsgeneratie:* Kunst, ontwerpen, foto's
- *Codegeneratie:* Programmeerhulp, automatische debugging
- *Muziek en audio:* Compositie, spraaksynthese

**Belangrijke kenmerken:**
Generatieve AI-systemen kunnen *creativiteit nabootsen* - ze kunnen nieuwe combinaties maken die niet bestonden in de trainingsdata. Ze kunnen ook worden aangepast - ze kunnen worden getraind op nieuwe feedback om hun output te verbeteren. Dit maakt ze zeer krachtig voor allerlei creatieve en praktische taken. Generatieve AI is creatief en kan originele output genereren.
{% endinfo %}

{% quiz "Quizvraag" %}
**Vraag:** Wat is het belangrijkste verschil tussen een gewone chatbot en Generatieve AI?

*Klik op een antwoord om te zien of het correct is!*
<div class="quiz-options">
<div class="quiz-option" onclick="toggleAnswer('A2')">
<strong>A)</strong> Generatieve AI is sneller dan gewone chatbots
<div class="answer-feedback" id="answer-A2">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Snelheid is niet het belangrijkste verschil. Denk aan wat Generatieve AI fundamenteel anders doet dan gewone chatbots.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('B2')">
<strong>B)</strong> Generatieve AI kan nieuwe content cre&euml;ren, chatbots alleen bestaande informatie gebruiken
<div class="answer-feedback" id="answer-B2">
<div class="feedback-content">
<span class="feedback-icon">&#9989;</span>
<strong>Correct!</strong><br>
Generatieve AI richt zich op het cre&euml;ren van nieuwe content (tekst, afbeeldingen, code, muziek), terwijl gewone chatbots vooral bestaande informatie analyseren en doorgeven. Generatieve AI is creatief en kan originele output genereren.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('C2')">
<strong>C)</strong> Generatieve AI is alleen voor professionele gebruikers
<div class="answer-feedback" id="answer-C2">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Generatieve AI is niet beperkt tot professionele gebruikers. Denk aan de fundamentele functie van Generatieve AI versus chatbots.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('D2')">
<strong>D)</strong> Generatieve AI werkt alleen met tekst, chatbots met alle media
<div class="answer-feedback" id="answer-D2">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Het is precies andersom! Generatieve AI kan met verschillende media werken (tekst, afbeeldingen, muziek, code), terwijl chatbots vooral tekst gebruiken.
</div>
</div>
</div>
</div>
{% endquiz %}

{% trivia %}
<details>
<summary><strong>De eerste AI-winter</strong> (klik om te lezen)</summary>

In de jaren '70 en '80 beleefde AI-onderzoek een zogenaamde "AI-winter" - een periode van stagnatie en verminderde financiering. Dit gebeurde omdat de verwachtingen voor AI veel te hoog waren gesteld. Onderzoekers hadden beloofd dat computers binnen 10 jaar net zo intelligent zouden zijn als mensen, maar de technologie was nog lang niet zo ver.

Het resultaat? Overheden en bedrijven stopten met het financieren van AI-onderzoek omdat ze teleurgesteld waren. Pas in de jaren '90, met de opkomst van machine learning en betere computers, begon AI weer aan populariteit te winnen. Dit leert ons dat het belangrijk is om realistische verwachtingen te hebben van nieuwe technologie&euml;n.
</details>
{% endtrivia %}

## AI-Assistenten

Nu je begrijpt wat Generatieve AI is, gaan we kijken naar de meest geavanceerde AI-tools: foundation models die veel meer kunnen dan alleen tekst genereren.

{% info %}
**Foundation models**

Lumo is dus vooral gericht op het waarborgen van privacy. De AI-modellen die Lumo gebruikt zijn echter minder krachtig dan chatbots die direct gebruikmaken van zogeheten [foundation models](/artikelen/begrippen/#foundation-model).
Foundation models zijn grote, veelzijdige AI-modellen die getraind zijn op enorme hoeveelheden data en daardoor in staat zijn om veel verschillende taken uit te voeren. Ze vormen als het ware het fundament waarop allerlei AI-toepassingen gebouwd kunnen worden.
Hieronder zie je een overzicht van bekende chatbot die draaien op foundation models.

| Chatbot (met link) | AI-Model(len) | Ontwikkelaar |
|---|---|---|
| [**Gemini**](https://gemini.google.com/) | Gemini-modelserie (Ultra, Pro, Nano; multimodaal) | Google DeepMind |
| [**ChatGPT**](/artikelen/begrippen/#chatgpt) ([website](https://chatgpt.com/)) | GPT-series (GPT-3.5, GPT-4, GPT-4o, GPT-4.5, GPT-5) | [OpenAI](/artikelen/begrippen/#openai) |
| [**Claude**](https://claude.ai/) | Claude-familie (Claude 3: Haiku, Sonnet, Opus; Claude 4: Sonnet, Opus, 4.1) | Anthropic |
| [**Mistral -- Le Chat**](https://chat.mistral.ai/) | Mistral-modellen (Small, Large, Next, Pixtral Large) | Mistral AI |
{% endinfo %}

{% trivia %}
<details>
<summary><strong>GPT-5 en de MoE-architectuur</strong> (klik om te lezen)</summary>

**GPT-5** is de nieuwste versie van [OpenAI](/artikelen/begrippen/#openai)'s taalmodel en gebruikt een **Mixture of Experts (MoE)** architectuur. Dit is een andere manier van werken dan bij eerdere versies, maar experts zijn het niet allemaal eens over hoe revolutionair dit nu eigenlijk is.

**Hoe werkt MoE?**
Normaal gesproken wordt elke vraag door het hele [AI-model](/artikelen/begrippen/#ai-model) verwerkt. Bij een MoE-architectuur wordt het model opgedeeld in verschillende "experts" - gespecialiseerde delen die elk goed zijn in specifieke taken. Wanneer je een vraag stelt, wordt alleen de relevante expert geactiveerd, niet het hele model.

**Voordelen van MoE:**
- *Effici&euml;nter:* Alleen de benodigde delen van het model worden gebruikt
- *Specialisatie:* Experts kunnen zich richten op specifieke domeinen (wetenschap, creativiteit, techniek)
- *Schaalbaarheid:* Makkelijker om het model uit te breiden zonder alles opnieuw te trainen

**Maar er zijn ook uitdagingen:**
Experts wijzen ook op nadelen: het is complexer om te trainen en te co&ouml;rdineren, er kunnen vertragingen ontstaan door het routeringsproces, en sommigen vragen zich af of dit werkelijk een grote doorbraak is of eerder een kleine verbetering.

**Hoe werkt het in de praktijk?**
Stel je vraagt GPT-5 om een wiskundig probleem op te lossen. Het systeem activeert automatisch de "wiskunde-expert" en laat andere experts (zoals de "creatieve schrijver") met rust. Dit zou moeten zorgen voor betere en snellere antwoorden, maar de praktische voordelen zijn nog niet helemaal duidelijk.

De MoE-architectuur wordt door sommigen gezien als een stap richting effici&euml;ntere AI-systemen, maar andere experts benadrukken dat het belangrijk blijft om kritisch te kijken naar hoe deze systemen worden gebruikt.
</details>
{% endtrivia %}

{% quiz "Quizvraag" %}
**Vraag:** Welke van de volgende is GEEN voorbeeld van een foundation model?

*Klik op een antwoord om te zien of het correct is!*
<div class="quiz-options">
<div class="quiz-option" onclick="toggleAnswer('A3')">
<strong>A)</strong> GPT-4
<div class="answer-feedback" id="answer-A3">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> GPT-4 is wel een foundation model. Denk aan welke van de opties veel ouder is en een andere technologie gebruikt.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('B3')">
<strong>B)</strong> Claude
<div class="answer-feedback" id="answer-B3">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Claude is wel een foundation model. Denk aan welke van de opties veel ouder is en een andere technologie gebruikt.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('C3')">
<strong>C)</strong> ELIZA
<div class="answer-feedback" id="answer-C3">
<div class="feedback-content">
<span class="feedback-icon">&#9989;</span>
<strong>Correct!</strong><br>
ELIZA is inderdaad geen foundation model. Het is een oude, regelgebaseerde chatbot uit 1966 die werkt met vaste patronen en regels, niet met de moderne machine learning technologie die foundation models kenmerkt.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('D3')">
<strong>D)</strong> Gemini
<div class="answer-feedback" id="answer-D3">
<div class="feedback-content">
<span class="feedback-icon">&#10060;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Gemini is wel een foundation model. Denk aan welke van de opties veel ouder is en een andere technologie gebruikt.
</div>
</div>
</div>
</div>
{% endquiz %}

{% info %}
**AI-assistent**

De term "chatbot" is tegenwoordig in veel gevallen niet meer juist. Chatbots zijn namelijk beperkt tot tekst en gesproken taal maar deze moderne foundation models bieden veel meer in- en ouputmogelijkheden.
De verschillende soorten input en ouput die een foundation model kan verwerken en genereren worden *[modaliteiten](/artikelen/begrippen/#modaliteit)* genoemd.
Voorbeelden van zo'n modaliteiten zijn naast geschreven en gesproken taal, foto's, muziek, video's en programmeercode.
Daarom worden zo'n moderne foundation models ook wel *[multimodal foundation models](/artikelen/begrippen/#multimodal)* genoemd en een betere term voor chatbot is in dit geval *[AI-assistent](/artikelen/begrippen/#ai-assistent)*.
Afhankelijk van het model kun je bijvoorbeeld tekst naar afbeelding omzetten, afbeelding naar tekst en tekst naar programmeercode.
{% endinfo %}

{% conclusion %}
**Conclusie**

Je hebt nu een complete reis gemaakt door de wereld van moderne AI-applicaties, van de eenvoudige chatbots tot de geavanceerde AI-assistenten.

**Wat je hebt geleerd:**
**Chatbots** - Je begrijpt nu het verschil tussen regelgebaseerde systemen (zoals ELIZA) en data-gedreven chatbots (zoals Lumo). Je weet dat chatbots eigenlijk interfaces zijn voor AI-modellen die op de achtergrond draaien, en dat ze kunnen hallucineren.

**Generatieve AI** - Je hebt ontdekt dat AI niet alleen informatie kan analyseren, maar ook nieuwe content kan cre&euml;ren: tekst, afbeeldingen, muziek, video's en programmeercode. Generatieve AI-systemen kunnen creativiteit nabootsen door patronen te herkennen en nieuwe combinaties te maken.

**AI-Assistenten** - Je hebt gezien hoe foundation models de basis vormen voor moderne AI-tools die veel meer kunnen dan alleen tekst. Deze multimodal systemen kunnen verschillende soorten input en output verwerken, waardoor de term "chatbot" eigenlijk te beperkt is geworden.

**Belangrijke lessen:**
- AI is krachtig maar niet perfect - controleer altijd de output
- Verschillende AI-tools hebben verschillende sterke punten
- Privacy, betrouwbaarheid en AI-bias zijn belangrijke aandachtspunten
- De technologie evolueert snel van eenvoudige chatbots naar veelzijdige AI-assistenten

**Volgende stappen:**
Experimenteer met verschillende AI-tools en ontdek welke het beste werken voor jouw behoeften. Onthoud: AI is een hulpmiddel dat je kritisch moet gebruiken, niet blindelings vertrouwen.
{% endconclusion %}

{% conclusion %}
**Reflectie-opdracht:**
Denk na over hoe je AI-tools kunt gebruiken in je dagelijks leven, werk of studie. Welke taken zouden baat hebben bij AI-ondersteuning? Welke risico's zie je?

**Ethische overwegingen:**
- *Privacy:* Welke informatie deel je met AI-tools?
- *Bias:* Hoe herken je vooroordelen in AI-output?
- *Afhankelijkheid:* Wanneer is het beter om zelf na te denken in plaats van AI te gebruiken?
{% endconclusion %}

{% info %}
**Pauze-moment**
Je hebt nu de basis geleerd over chatbots. Neem even de tijd om dit te verwerken voordat je verder gaat.

*Vraag jezelf af:* Wat was het meest verrassende dat je net hebt geleerd? Welke vragen heb je nog?
{% endinfo %}

{% trivia %}
<details>
<summary><strong>GenAI vs AGI: Een veelgemaakte verwarring</strong> (klik om te lezen)</summary>

**Waarom worden deze begrippen door elkaar gehaald?**
De termen **GenAI (Generatieve AI)** en **AGI (Artificial General Intelligence)** worden vaak door elkaar gebruikt, maar ze betekenen heel verschillende dingen. Deze verwarring ontstaat omdat beide termen over AI gaan, maar ze verwijzen naar totaal verschillende concepten.

**Wat is het verschil?**
- **GenAI (Generatieve AI):** Dit is wat we in dit artikel bespreken - AI-systemen die nieuwe content kunnen cre&euml;ren (tekst, afbeeldingen, muziek, code). ChatGPT, DALL-E en Claude zijn voorbeelden van GenAI.

- **AGI (Artificial General Intelligence):** Dit verwijst naar een hypothetische AI die net zo intelligent is als een mens - of zelfs intelligenter. AGI zou alle taken kunnen uitvoeren die een mens kan, van wiskunde tot creativiteit tot sociale interactie. AGI bestaat nog niet en experts zijn het oneens over wanneer (of zelfs of) het ooit zal bestaan.

**De verwarring in de media**
Veel nieuwsartikelen en discussies gebruiken "AGI" wanneer ze eigenlijk "GenAI" bedoelen. Dit gebeurt omdat:
- Beide termen relatief nieuw zijn voor het grote publiek
- De afkortingen lijken op elkaar
- Beide gaan over geavanceerde AI-technologie

**Waarom is dit belangrijk?**
Het onderscheid is cruciaal omdat het verschillende verwachtingen schept. GenAI is al realiteit en wordt dagelijks gebruikt, terwijl AGI nog steeds science fiction is. Door deze termen correct te gebruiken, kunnen we realistische verwachtingen hebben van wat AI nu kan en wat nog toekomstmuziek is.
</details>
{% endtrivia %}
