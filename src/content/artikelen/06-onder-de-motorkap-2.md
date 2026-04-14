---
title: "Onder de Motorkap (deel 2)"
description: "Leer hoe AI-modellen getraind worden: pre-training, fine-tuning, RLHF, en het verschil tussen open-source en gesloten modellen."
heroImage: /img/icons/informatie.png
heroImageAlt: "Informatie icoon"
---

{% metadata "Leerdoel: Begrijpen hoe AI-modellen getraind worden: pre-training, fine-tuning, soorten modellen, open-source vs. gesloten.", "Leestijd: 15-20 minuten" %}

## Hoe worden AI-modellen getraind?

{% info %}
**Terugblik en vooruitblik**

In [Onder de Motorkap (deel 1)](/artikelen/05-onder-de-motorkap/) hebben we gekeken naar hoe AI-modellen op woordniveau werken. Je leerde over tokens, neurale netwerken, de transformer-architectuur en waarom AI soms hallucineert.

In dit tweede deel gaan we een stap verder. We kijken naar het *grotere plaatje*: hoe wordt zo'n AI-model eigenlijk gebouwd? Hoe leert het alles wat het weet? En welke soorten modellen bestaan er? We behandelen:

- **Pre-training** -- hoe een model leert van het internet
- **Fine-tuning en RLHF** -- hoe een model wordt gespecialiseerd
- **Soorten modellen** -- van taalmodellen tot multimodale systemen
- **Open-source vs. gesloten modellen** -- de voor- en nadelen
- **Cloud vs. lokaal draaien** -- waar draait het model?
{% endinfo %}

## Pre-training: leren van het internet

{% info %}
**Het fundament leggen**

De eerste stap in het bouwen van een AI-model heet **pre-training**. Tijdens deze fase wordt het model getraind op enorme hoeveelheden tekst van het internet: boeken, wetenschappelijke artikelen, websites, forums, code-repositories en nog veel meer.

**Wat leert het model tijdens pre-training?**

Het model leert *patronen* herkennen in taal. Het leert:
- **Grammatica en zinsstructuur** -- hoe woorden en zinnen logisch op elkaar volgen
- **Feitelijke kennis** -- informatie over de wereld, geschiedenis, wetenschap, cultuur
- **Redeneervaardigheden** -- logische verbanden leggen tussen concepten
- **Stijl en toon** -- het verschil tussen formele en informele taal, humor, sarcasme

**Hoe werkt het technisch?**

Het model krijgt steeds een stuk tekst te zien waarin het laatste woord is weggelaten. Het moet voorspellen wat het volgende woord is. Door dit miljarden keren te doen met verschillende teksten, leert het de structuur en betekenis van taal.

**De schaal is enorm**

Pre-training kost enorm veel rekenkracht. Het trainen van een groot model zoals GPT-4 of Claude vereist:
- Duizenden krachtige GPU's (grafische processoren) die maandenlang draaien
- Miljoenen euro's aan elektriciteit en hardware
- Teams van honderden onderzoekers en ingenieurs

Het resultaat is een **basismodel** (ook wel *foundation model* genoemd): een model dat veel weet en taal goed begrijpt, maar nog niet geoptimaliseerd is voor specifieke taken.

**Vergelijking:** Stel je een student voor die jarenlang alles leest wat er te vinden is -- encyclopedieen, romans, wetenschappelijke papers, social media. Die student heeft enorm veel kennis, maar heeft nog niet geleerd hoe je een examenvraag beantwoordt of hoe je een klant te woord staat. Dat komt in de volgende stap.
{% endinfo %}

## Fine-tuning: specialiseren voor de praktijk

{% info %}
**Van basismodel naar bruikbare assistent**

Na pre-training is het model slim, maar nog niet *handig*. Het kan tekst aanvullen, maar het weet niet goed hoe het vragen moet beantwoorden, instructies moet opvolgen of veilig moet reageren. Daarvoor is **fine-tuning** nodig.

Fine-tuning gebeurt in meerdere stappen:

**1. Instructie-tuning**

Het model wordt getraind op voorbeelden van instructies en gewenste antwoorden. Denk aan duizenden voorbeelden zoals:
- *Instructie:* "Vat dit artikel samen in drie zinnen."
- *Gewenst antwoord:* Een goede samenvatting in drie zinnen.

Hierdoor leert het model om instructies op te volgen in plaats van alleen maar tekst aan te vullen.

**2. RLHF: Reinforcement Learning from Human Feedback**

Dit is een van de belangrijkste doorbraken in moderne AI. Het werkt als volgt:

1. Het model genereert meerdere antwoorden op dezelfde vraag
2. **Menselijke beoordelaars** bekijken de antwoorden en rangschikken ze van best naar slechtst
3. Op basis van deze feedback leert het model welke soort antwoorden mensen het meest nuttig, eerlijk en veilig vinden
4. Het model past zijn gedrag aan om meer van zulke gewenste antwoorden te geven

**Waarom is RLHF zo belangrijk?**

Zonder RLHF kan een model technisch correcte maar ongewenste antwoorden geven. Het kan bijvoorbeeld:
- Schadelijke instructies geven als daar om gevraagd wordt
- Bevooroordeelde of beledigende content genereren
- Zeer zelfverzekerd verkeerde informatie presenteren

RLHF helpt het model om te leren wat *wenselijk* is, niet alleen wat *waar* is.

**Vergelijking:** De student uit ons voorbeeld gaat nu stage lopen. Een ervaren mentor geeft feedback op alles wat de student doet: "Dit antwoord was goed, maar je had het vriendelijker kunnen formuleren" of "Hier had je moeten zeggen dat je het niet zeker weet." Door deze feedback wordt de student niet alleen slim, maar ook *professioneel*.
{% endinfo %}

{% quiz "Wat is het verschil tussen pre-training en fine-tuning?" %}
<div class="quiz-options" role="group" aria-label="Antwoordopties">
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-MK3-A" onclick="toggleAnswer('MK3-A', this)">
<strong>A)</strong> Pre-training leert het model spelling, fine-tuning leert het model grammatica
</button>
<div class="answer-feedback" id="answer-MK3-A" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Zowel spelling als grammatica worden al tijdens pre-training geleerd. Het verschil zit in iets fundamentelers: het soort kennis versus het toepassen ervan.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-MK3-B" onclick="toggleAnswer('MK3-B', this)">
<strong>B)</strong> Pre-training leert het model algemene kennis van grote datasets, fine-tuning specialiseert het model voor specifieke taken met menselijke feedback
</button>
<div class="answer-feedback" id="answer-MK3-B" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
<strong>Correct!</strong><br>
Precies. Pre-training is de brede leerfase waarin het model patronen leert uit enorme hoeveelheden tekst. Fine-tuning (inclusief RLHF) is de specialisatiefase waarin het model leert om nuttig, veilig en behulpzaam te zijn op basis van menselijke feedback.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-MK3-C" onclick="toggleAnswer('MK3-C', this)">
<strong>C)</strong> Pre-training is goedkoop en snel, fine-tuning is duur en langzaam
</button>
<div class="answer-feedback" id="answer-MK3-C" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Het is eigenlijk andersom: pre-training is juist het duurste en meest tijdrovende onderdeel. Fine-tuning is relatief goedkoper en sneller, maar vereist wel gespecialiseerde menselijke beoordelaars.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-MK3-D" onclick="toggleAnswer('MK3-D', this)">
<strong>D)</strong> Pre-training en fine-tuning zijn hetzelfde proces met een andere naam
</button>
<div class="answer-feedback" id="answer-MK3-D" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Het zijn twee duidelijk verschillende fases. Pre-training is de eerste, brede leerfase op grote datasets. Fine-tuning is de tweede fase waarin het model wordt gespecialiseerd en verfijnd met gerichte feedback.
</div>
</div>
</div>
{% endquiz %}

## Soorten AI-modellen

{% info %}
**Niet elk model is hetzelfde**

Er bestaan verschillende soorten AI-modellen, elk met hun eigen specialiteit. Hieronder een overzicht van de belangrijkste typen:

| Type model | Input | Output | Voorbeelden |
|---|---|---|---|
| **LLM** (Large Language Model) | Tekst | Tekst | GPT-4, Claude, Llama, Mistral |
| **Multimodaal model** | Tekst + beeld + audio | Tekst + beeld | GPT-4o, Gemini, Claude (met vision) |
| **Vision model** | Beeld | Beschrijving / analyse | CLIP, Florence |
| **Beeldgeneratiemodel** | Tekst (prompt) | Afbeelding | DALL-E, Midjourney, Stable Diffusion |
| **Embedding model** | Tekst | Numerieke vector | OpenAI Embeddings, Sentence-BERT |
| **Spraakmodel** | Audio | Tekst (of andersom) | Whisper, ElevenLabs |

**LLM's (Large Language Models)**

Dit zijn de modellen die je kent als ChatGPT of Claude. Ze verwerken tekst en genereren tekst. Ze zijn getraind om taal te begrijpen en te produceren, en kunnen worden ingezet voor schrijven, samenvatten, vertalen, programmeren en meer.

**Multimodale modellen**

Deze modellen begrijpen meerdere soorten input tegelijk. Je kunt bijvoorbeeld een foto uploaden en vragen: "Wat zie je op deze afbeelding?" Het model combineert dan zijn kennis van taal en beeld om een antwoord te geven. GPT-4o en Gemini kunnen zelfs audio verwerken.

**Embedding modellen**

Een minder bekend maar zeer belangrijk type. Deze modellen zetten tekst om in numerieke representaties (vectoren). Dit maakt het mogelijk om teksten te vergelijken op betekenis. Ze worden gebruikt voor zoekmachines, aanbevelingssystemen en RAG (Retrieval-Augmented Generation).
{% endinfo %}

{% trivia %}
<details>
<summary><strong>Hoeveel data gebruikt een groot model?</strong> (klik om te lezen)</summary>

De hoeveelheid trainingsdata voor grote AI-modellen is moeilijk voor te stellen:

- **GPT-4** is naar schatting getraind op biljoenen tokens aan tekst. Dat komt overeen met miljoenen boeken -- meer dan je in duizend levens zou kunnen lezen.
- **Llama 3** van Meta is getraind op **15 biljoen tokens**. Ter vergelijking: de volledige Engelse Wikipedia bevat ongeveer 4 miljard tokens. Llama 3 heeft dus het equivalent van bijna 4.000 keer Wikipedia verwerkt.
- **De hoeveelheid trainingsdata verdubbelt ruwweg elk jaar.** Onderzoekers maken zich zorgen dat we op een gegeven moment door de beschikbare tekst op het internet heen raken. Dit wordt wel het "data wall"-probleem genoemd.

En het gaat niet alleen om tekst. Moderne multimodale modellen worden ook getraind op miljarden afbeeldingen, video's en audiofragmenten. De totale hoeveelheid data die nodig is om een topmodel te trainen wordt geschat op meerdere petabytes -- dat zijn miljoenen gigabytes.
</details>
{% endtrivia %}

## Open-source vs. gesloten modellen

{% info %}
**Twee verschillende werelden**

In de AI-wereld bestaan er twee hoofdstromingen: **open-source modellen** waarvan de code publiek beschikbaar is, en **gesloten modellen** die alleen toegankelijk zijn via de diensten van het bedrijf dat ze maakt.

| Aspect | Open-source | Gesloten |
|---|---|---|
| **Code** | Publiek beschikbaar | Niet beschikbaar |
| **Voorbeelden** | Llama (Meta), Mistral, DeepSeek | GPT (OpenAI), Claude (Anthropic), Gemini (Google) |
| **Kosten** | Gratis te downloaden | Betaald via API of abonnement |
| **Aanpasbaarheid** | Zelf fine-tunen mogelijk | Beperkt tot wat de aanbieder toestaat |
| **Privacy** | Data blijft lokaal bij eigen hosting | Data gaat naar de provider |
| **Kwaliteit** | Steeds beter, soms vergelijkbaar | Vaak (nog) het beste voor complexe taken |
| **Ondersteuning** | Community-gedreven | Professionele support |
| **Transparantie** | Inzicht in hoe het model werkt | Beperkt inzicht ("black box") |

**Voordelen van open-source modellen:**
- Je kunt het model aanpassen aan je eigen behoeften
- Je data verlaat je eigen systemen niet
- Je bent niet afhankelijk van een externe partij
- De community kan fouten vinden en oplossen

**Voordelen van gesloten modellen:**
- Vaak de beste prestaties op complexe taken
- Gebruiksvriendelijke interfaces en API's
- Professionele ondersteuning en documentatie
- Regelmatige updates en verbeteringen

**De trend:** Open-source modellen worden steeds beter. Modellen zoals Llama 3 en DeepSeek presteren in sommige taken vergelijkbaar met gesloten modellen. Dit drijft de hele industrie vooruit en zorgt ervoor dat AI-technologie voor iedereen toegankelijker wordt.
{% endinfo %}

## Cloud vs. lokaal draaien

{% info %}
**Waar draait het model?**

Wanneer je een AI-model gebruikt, draait het ergens op een computer. Maar waar precies? Er zijn twee mogelijkheden:

**Cloud (op servers van het bedrijf)**

Wanneer je ChatGPT, Claude of Gemini gebruikt, stuur je je vraag via internet naar krachtige servers in een datacenter. Het model draait daar, genereert een antwoord, en stuurt dat terug naar jou.

*Voordelen:*
- Toegang tot de krachtigste modellen
- Altijd de nieuwste versie
- Geen krachtige hardware nodig
- Eenvoudig te gebruiken

*Nadelen:*
- Je data gaat naar het bedrijf (privacy-risico)
- Afhankelijk van internetverbinding
- Kosten bij intensief gebruik
- Geen controle over het model

**Lokaal (op je eigen computer)**

Je kunt ook AI-modellen downloaden en op je eigen computer draaien. Dit is mogelijk dankzij open-source modellen en speciale software.

*Voordelen:*
- Volledige privacy -- data verlaat je computer niet
- Offline beschikbaar
- Geen terugkerende kosten
- Volledige controle over het model

*Nadelen:*
- Vereist krachtige hardware (vooral veel RAM en een goede GPU)
- Modellen zijn kleiner en minder krachtig dan cloud-varianten
- Zelf verantwoordelijk voor updates en onderhoud
- Technische kennis nodig voor installatie

**Tools voor lokaal draaien:**
- **Ollama** -- De populairste tool om open-source modellen lokaal te draaien. Eenvoudig te installeren en te gebruiken via de terminal.
- **LM Studio** -- Een gebruiksvriendelijke desktop-applicatie met een grafische interface om lokale modellen te downloaden en te gebruiken.
- **llama.cpp** -- Een technische tool voor geavanceerde gebruikers die maximale controle willen over hoe het model draait.

**In de praktijk** combineren veel professionals beide aanpakken: ze gebruiken cloud-modellen voor complexe taken waar de beste kwaliteit nodig is, en lokale modellen voor gevoelige data of dagelijks gebruik.
{% endinfo %}

{% quiz "Wat is een belangrijk voordeel van het lokaal draaien van een AI-model?" %}
<div class="quiz-options" role="group" aria-label="Antwoordopties">
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-MK4-A" onclick="toggleAnswer('MK4-A', this)">
<strong>A)</strong> Lokale modellen zijn altijd slimmer dan cloud-modellen
</button>
<div class="answer-feedback" id="answer-MK4-A" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Lokale modellen zijn juist vaak minder krachtig dan de grote cloud-modellen, omdat ze kleiner moeten zijn om op een gewone computer te draaien.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-MK4-B" onclick="toggleAnswer('MK4-B', this)">
<strong>B)</strong> Je data blijft op je eigen computer en wordt niet naar een extern bedrijf gestuurd
</button>
<div class="answer-feedback" id="answer-MK4-B" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
<strong>Correct!</strong><br>
Privacy is inderdaad het grootste voordeel van lokaal draaien. Je data verlaat je eigen systeem niet, wat vooral belangrijk is voor gevoelige informatie zoals bedrijfsgeheimen, persoonsgegevens of medische data.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-MK4-C" onclick="toggleAnswer('MK4-C', this)">
<strong>C)</strong> Lokale modellen zijn gratis en cloud-modellen zijn altijd duur
</button>
<div class="answer-feedback" id="answer-MK4-C" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Hoewel lokale modellen gratis te downloaden zijn, heb je wel krachtige hardware nodig die ook geld kost. Bovendien bieden veel cloud-diensten gratis basisversies aan.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-MK4-D" onclick="toggleAnswer('MK4-D', this)">
<strong>D)</strong> Lokale modellen hebben geen internetverbinding nodig en werken overal
</button>
<div class="answer-feedback" id="answer-MK4-D" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Het klopt dat lokale modellen offline werken, maar dit is niet het <em>belangrijkste</em> voordeel. Privacy en databescherming worden over het algemeen gezien als de hoofdreden om modellen lokaal te draaien.
</div>
</div>
</div>
{% endquiz %}

{% task %}
**Opdracht 1: Vergelijk een open-source en een gesloten model**

In deze opdracht ga je zelf ervaren wat het verschil is tussen een gesloten en een open-source AI-model.

**Stap 1:** Open een gesloten AI-chatbot, bijvoorbeeld [ChatGPT](https://chatgpt.com/) of [Claude](https://claude.ai/).

**Stap 2:** Open een open-source AI-chatbot, bijvoorbeeld [HuggingChat](https://huggingchat.co/) (gratis, draait op open-source modellen zoals Llama of Mistral). Of, als je avontuurlijk bent, installeer [Ollama](https://ollama.com/) en draai een model lokaal.

**Stap 3:** Stel aan beide chatbots exact dezelfde vraag. Kies een van deze suggesties:
- "Leg in eenvoudige taal uit hoe een zonnepaneel werkt."
- "Schrijf een kort verhaal over een robot die leert koken."
- "Wat zijn de voor- en nadelen van thuiswerken?"

**Stap 4:** Vergelijk de antwoorden en beantwoord deze vragen:
- Welk antwoord vind je beter? Waarom?
- Is er een verschil in snelheid?
- Welk antwoord is vollediger?
- Welk model geeft het meest natuurlijke antwoord?

*Tip: Probeer dezelfde vraag ook eens in het Engels te stellen. Open-source modellen presteren soms beter in het Engels dan in het Nederlands.*
{% endtask %}

{% task %}
**Opdracht 2: Ontdek de trainingsdata**

AI-modellen weten niet alles -- ze weten alleen wat in hun trainingsdata zat.

**Stap 1:** Vraag een AI-chatbot: "Wat is het laatste nieuws van vandaag?"

**Stap 2:** Vraag vervolgens: "Wat is je kennisgrens? Tot wanneer heb je informatie?"

**Stap 3:** Vraag nu iets over een zeer recent gebeurtenis (van de afgelopen week). Kan het model hier iets over zeggen?

**Stap 4:** Denk na over wat dit betekent:
- Waarom weet het model sommige dingen niet?
- Hoe verhoudt de kennisgrens zich tot het moment van pre-training?
- Wat betekent dit voor hoe je AI-informatie moet beoordelen?
{% endtask %}

{% trivia %}
<details>
<summary><strong>De kosten van het trainen van een AI-model</strong> (klik om te lezen)</summary>

Het trainen van een groot AI-model is een van de duurste ondernemingen in de technologiewereld:

- **GPT-4** heeft naar schatting meer dan **100 miljoen dollar** gekost om te trainen.
- **Gemini Ultra** van Google zou vergelijkbare kosten hebben gehad.
- De elektriciteitsrekening alleen al voor het trainen van een groot model kan oplopen tot **miljoenen euro's**.

Maar de kosten gaan verder dan alleen de training:
- **Hardware:** Duizenden NVIDIA A100 of H100 GPU's die elk tienduizenden euro's kosten
- **Koeling:** Datacenters verbruiken enorme hoeveelheden energie om de hardware koel te houden
- **Personeel:** Teams van honderden AI-onderzoekers, ingenieurs en data-specialisten
- **Data:** Het verzamelen, opschonen en verwerken van trainingsdata

Dit verklaart waarom alleen de grootste technologiebedrijven de middelen hebben om de allergrootste modellen te trainen. Het is ook een van de redenen waarom open-source initiatieven zo belangrijk zijn: ze maken AI-technologie toegankelijk voor organisaties die niet over zulke budgetten beschikken.
</details>
{% endtrivia %}

{% conclusion %}
**Samenvatting**

In dit artikel heb je geleerd hoe AI-modellen van ruwe data tot bruikbare assistent worden gevormd:

- **Pre-training** legt het fundament: het model leert patronen, kennis en taal uit enorme hoeveelheden tekst. Dit is de duurste en meest tijdrovende fase.
- **Fine-tuning en RLHF** maken het model bruikbaar: door menselijke feedback leert het model om nuttige, eerlijke en veilige antwoorden te geven.
- Er bestaan **verschillende soorten modellen** -- van taalmodellen (LLM's) tot multimodale systemen die tekst, beeld en audio combineren.
- **Open-source modellen** bieden transparantie, aanpasbaarheid en privacy, terwijl **gesloten modellen** vaak de beste prestaties leveren.
- Je kunt modellen in de **cloud** gebruiken voor maximale kracht, of **lokaal** draaien voor maximale privacy.

**Verder lezen:**

- [Onder de Motorkap (deel 1)](/artikelen/05-onder-de-motorkap/) -- Tokens, neurale netwerken, transformers en hallucinaties
- [Laatste ontwikkelingen](/artikelen/07-laatste-ontwikkelingen/) -- Wat is er recent gebeurd in de AI-wereld?
{% endconclusion %}
