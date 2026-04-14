---
title: "AI-Assistenten"
description: "Leer over AI-assistenten, generatieve AI en foundation models."
---

{% metadata "Leerdoel: Begrijpen wat chatbots zijn, hoe je ze kunt gebruiken en waar je rekening mee moet houden.", "Leestijd: nader te bepalen" %}

## Generatieve AI

*Laten we nu kijken naar een andere kant van AI: het creeren van nieuwe content.*

{% task %}
**Opdracht 9. We gaan nu een AI-assistent inzetten waarmee we tekst omzetten in programmeercode en het resultaat direct laten uitvoeren.**

*> Ga naar:* [https://claude.ai](https://claude.ai)

Om gebruik te maken van Claude moet je je eerst registreren.
*- Kopieer de onderstaande prompt en plak deze in het prompt-venster.*
Even geduld en vervolgens zie je allerlei code verschijnen.

<div class="prompt-box">
<button class="copy-btn" onclick="copyPrompt(this)" title="Kopieer prompt">Kopieer</button>
<div class="prompt-content">
Maak een volledig werkend HTML-spel met CSS en JavaScript (geen externe libraries) met de volgende functies:

- Een speler (kleine cirkel of vierkant) die je met de muis kunt bewegen
- Cyborg-zombies (rode cirkels) die langzaam naar de speler bewegen
- Klik om te schieten - projectielen die de zombies vernietigen
- Een score die toont hoeveel zombies je hebt vernietigd
- Nieuwe zombies spawnen automatisch
- Game over als een zombie de speler raakt
- Een donkere, futuristische interface met gradient achtergrond (donkergrijs naar zwart)
- Glow effecten rond de speler en projectielen (lichtblauw)
- Zombies hebben een subtiele rode glow
- Smooth animaties voor beweging en schieten
- Score display met moderne, grote letters
- Het spel moet direct speelbaar zijn in de browser

Maak het visueel aantrekkelijk maar houd de functionaliteit simpel - focus op een werkend spel met mooie effecten.
</div>
</div>

Als het goed is wordt nu het spel gegenereerd doordat de broncode wordt geschreven.
Dit duurt even. Vervolgens kun je bovenaan op 'weergeven' klikken en kun je de game spelen.
Het kan zeker voorkomen dat het spel niet werkt. Geef dat als prompt door zodat de code kan worden verbeterd.

Dit laat de kracht van een tool zien die draait op zo'n foundation model.
{% endtask %}

{% info %}
**Generatieve Artificiele Intelligentie**

Nu je hebt ervaren hoe chatbots werken en hun beperkingen kent, is het tijd om te kijken naar een andere kant van [AI](/artikelen/begrippen/#artificiele-intelligentie): het creeren van nieuwe content. Dit wordt **Generatieve Artificiele Intelligentie (GenAI)** genoemd.

[GenAI](/artikelen/begrippen/#generatieve-ai) is een tak van [kunstmatige intelligentie](/artikelen/begrippen/#artificiele-intelligentie) die zich richt op het creeren van nieuwe content in plaats van alleen bestaande [data](/artikelen/begrippen/#data) te analyseren. Deze technologie kan verschillende soorten content genereren zoals tekst, afbeeldingen, muziek, video's en zelfs programmeercode.

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

{% quiz "Wat is het belangrijkste verschil tussen een gewone chatbot en Generatieve AI?" %}
<div class="quiz-options">
<div class="quiz-option" onclick="toggleAnswer('A2')">
<strong>A)</strong> Generatieve AI is sneller dan gewone chatbots
<div class="answer-feedback" id="answer-A2">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Snelheid is niet het belangrijkste verschil. Denk aan wat Generatieve AI fundamenteel anders doet dan gewone chatbots.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('B2')">
<strong>B)</strong> Generatieve AI kan nieuwe content creeren, chatbots alleen bestaande informatie gebruiken
<div class="answer-feedback" id="answer-B2">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
<strong>Correct!</strong><br>
Generatieve AI richt zich op het creeren van nieuwe content (tekst, afbeeldingen, code, muziek), terwijl gewone chatbots vooral bestaande informatie analyseren en doorgeven. Generatieve AI is creatief en kan originele output genereren.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('C2')">
<strong>C)</strong> Generatieve AI is alleen voor professionele gebruikers
<div class="answer-feedback" id="answer-C2">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Generatieve AI is niet beperkt tot professionele gebruikers. Denk aan de fundamentele functie van Generatieve AI versus chatbots.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('D2')">
<strong>D)</strong> Generatieve AI werkt alleen met tekst, chatbots met alle media
<div class="answer-feedback" id="answer-D2">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
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

Het resultaat? Overheden en bedrijven stopten met het financieren van AI-onderzoek omdat ze teleurgesteld waren. Pas in de jaren '90, met de opkomst van machine learning en betere computers, begon AI weer aan populariteit te winnen. Dit leert ons dat het belangrijk is om realistische verwachtingen te hebben van nieuwe technologieen.
</details>
{% endtrivia %}

## AI-Assistenten

*Nu je begrijpt wat Generatieve AI is, gaan we kijken naar de meest geavanceerde AI-tools: foundation models die veel meer kunnen dan alleen tekst genereren.*

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
- *Efficienter:* Alleen de benodigde delen van het model worden gebruikt
- *Specialisatie:* Experts kunnen zich richten op specifieke domeinen (wetenschap, creativiteit, techniek)
- *Schaalbaarheid:* Makkelijker om het model uit te breiden zonder alles opnieuw te trainen

**Maar er zijn ook uitdagingen:**
Experts wijzen ook op nadelen: het is complexer om te trainen en te coordineren, er kunnen vertragingen ontstaan door het routeringsproces, en sommigen vragen zich af of dit werkelijk een grote doorbraak is of eerder een kleine verbetering.

**Hoe werkt het in de praktijk?**
Stel je vraagt GPT-5 om een wiskundig probleem op te lossen. Het systeem activeert automatisch de "wiskunde-expert" en laat andere experts (zoals de "creatieve schrijver") met rust. Dit zou moeten zorgen voor betere en snellere antwoorden, maar de praktische voordelen zijn nog niet helemaal duidelijk.

De MoE-architectuur wordt door sommigen gezien als een stap richting efficientere AI-systemen, maar andere experts benadrukken dat het belangrijk blijft om kritisch te kijken naar hoe deze systemen worden gebruikt.
</details>
{% endtrivia %}

{% quiz "Welke van de volgende is GEEN voorbeeld van een foundation model?" %}
<div class="quiz-options">
<div class="quiz-option" onclick="toggleAnswer('A3')">
<strong>A)</strong> GPT-4
<div class="answer-feedback" id="answer-A3">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> GPT-4 is wel een foundation model. Denk aan welke van de opties veel ouder is en een andere technologie gebruikt.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('B3')">
<strong>B)</strong> Claude
<div class="answer-feedback" id="answer-B3">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
<em>Hint:</em> Claude is wel een foundation model. Denk aan welke van de opties veel ouder is en een andere technologie gebruikt.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('C3')">
<strong>C)</strong> ELIZA
<div class="answer-feedback" id="answer-C3">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
<strong>Correct!</strong><br>
ELIZA is inderdaad geen foundation model. Het is een oude, regelgebaseerde chatbot uit 1966 die werkt met vaste patronen en regels, niet met de moderne machine learning technologie die foundation models kenmerkt.
</div>
</div>
</div>
<div class="quiz-option" onclick="toggleAnswer('D3')">
<strong>D)</strong> Gemini
<div class="answer-feedback" id="answer-D3">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
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

De verschillende soorten input en ouput die een foundation model kan verwerken en genereren worden [*modaliteiten*](/artikelen/begrippen/#modaliteit) genoemd.

Voorbeelden van zo'n modaliteiten zijn naast geschreven en gesproken taal, foto's, muziek, video's en programmeercode.

Daarom worden zo'n moderne foundation models ook wel [*multimodal foundation models*](/artikelen/begrippen/#multimodal) genoemd en een betere term voor chatbot is in dit geval [*AI-assistent*](/artikelen/begrippen/#ai-assistent).

Afhankelijk van het model kun je bijvoorbeeld tekst naar afbeelding omzetten, afbeelding naar tekst en tekst naar programmeercode.
{% endinfo %}

{% conclusion %}
**Conclusie**

Je hebt nu een complete reis gemaakt door de wereld van moderne AI-applicaties, van de eenvoudige chatbots tot de geavanceerde AI-assistenten.

**Wat je hebt geleerd:**

**Chatbots** - Je begrijpt nu het verschil tussen regelgebaseerde systemen (zoals ELIZA) en data-gedreven chatbots (zoals Lumo). Je weet dat chatbots eigenlijk interfaces zijn voor AI-modellen die op de achtergrond draaien, en dat ze kunnen hallucineren.

**Generatieve AI** - Je hebt ontdekt dat AI niet alleen informatie kan analyseren, maar ook nieuwe content kan creeren: tekst, afbeeldingen, muziek, video's en programmeercode. Generatieve AI-systemen kunnen creativiteit nabootsen door patronen te herkennen en nieuwe combinaties te maken.

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
- **GenAI (Generatieve AI):** Dit is wat we in dit artikel bespreken - AI-systemen die nieuwe content kunnen creeren (tekst, afbeeldingen, muziek, code). ChatGPT, DALL-E en Claude zijn voorbeelden van GenAI.

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
