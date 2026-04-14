---
title: "Onder de Motorkap"
description: "Begrijp hoe AI-modellen werken: van tokens en neurale netwerken tot transformers en waarom AI soms hallucineert."
heroImage: /img/icons/informatie.png
heroImageAlt: "Informatie icoon"
---

{% metadata "Leerdoel: Begrijpen hoe AI-modellen werken: tokens, transformers, neurale netwerken en hallucinaties.", "Leestijd: 15-20 minuten" %}

{% info %}
## Inleiding: wat zit er onder de motorkap?

Je hebt inmiddels geleerd hoe je [chatbots](/artikelen/01-chatbots-introductie/) kunt gebruiken en misschien ook hoe [AI-agents](/artikelen/04-ai-agents/) werken. Je weet dat deze systemen draaien op AI-modellen, maar hoe werken die modellen eigenlijk?

In dit artikel gaan we "onder de motorkap" kijken. We onderzoeken hoe AI taal leest, hoe het patronen leert herkennen, welke doorbraak ervoor zorgde dat modellen zo krachtig werden, en waarom AI soms dingen verzint die niet kloppen.

Je hoeft geen wiskundige of programmeur te zijn om dit te begrijpen. We gebruiken vergelijkingen en voorbeelden om de belangrijkste concepten helder te maken.
{% endinfo %}

{% info %}
## Tokens: hoe AI taal leest

Wanneer jij een zin typt, lees je die woord voor woord. Een AI-model doet dat anders. Het breekt tekst op in kleine stukjes die **tokens** worden genoemd.

### Wat is een token?

Een token is een stukje tekst dat de AI als eenheid verwerkt. Dat kan een heel woord zijn, maar ook een deel van een woord, een leesteken, of zelfs een spatie. Hoe de tekst precies wordt opgedeeld, hangt af van de **tokenizer** die het model gebruikt.

**Voorbeeld:**

De zin *"Kunstmatige intelligentie is fascinerend"* wordt niet simpelweg in vier woorden opgedeeld. De tokenizer kan er zoiets van maken:

| Token | Betekenis |
|---|---|
| Kunst | deel van "Kunstmatige" |
| matige | deel van "Kunstmatige" |
| intelli | deel van "intelligentie" |
| gentie | deel van "intelligentie" |
| is | volledig woord |
| fascin | deel van "fascinerend" |
| erend | deel van "fascinerend" |

Korte, veelgebruikte woorden (zoals "is", "de", "het") zijn vaak een enkel token. Langere of minder gebruikelijke woorden worden in meerdere tokens opgesplitst.

### Waarom tokens belangrijk zijn

- **Contextvenster:** Het "werkgeheugen" van een AI-model wordt gemeten in tokens. Een model met een contextvenster van 128.000 tokens kan veel meer tekst tegelijk "onthouden" dan een model met 4.000 tokens.
- **Kosten:** Bij veel AI-diensten betaal je per token. Hoe meer tokens je prompt en het antwoord samen bevatten, hoe meer het kost.
- **Taalverschillen:** In het Engels is een token gemiddeld ongeveer 3/4 van een woord. In het Nederlands zijn tokens vaak iets korter omdat Nederlandse woorden langer zijn (denk aan samenstellingen zoals "arbeidsovereenkomst").
{% endinfo %}

{% quiz "Wat is een token in de context van AI-taalmodellen?" %}
<div class="quiz-options" role="group" aria-label="Antwoordopties">
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-MK1-A" onclick="toggleAnswer('MK1-A', this)">
<strong>A)</strong> Altijd precies een volledig woord
</button>
<div class="answer-feedback" id="answer-MK1-A" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Een token is niet altijd een volledig woord. Langere woorden worden vaak in meerdere tokens opgesplitst, en sommige tokens bevatten alleen een deel van een woord.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-MK1-B" onclick="toggleAnswer('MK1-B', this)">
<strong>B)</strong> Een stukje tekst (deel van een woord, een woord, of meerdere woorden) dat de AI als eenheid verwerkt
</button>
<div class="answer-feedback" id="answer-MK1-B" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
<strong>Correct!</strong><br>
Een token is inderdaad een stukje tekst dat de AI als kleinste eenheid verwerkt. Het kan een deel van een woord zijn, een heel woord, of soms zelfs meerdere korte woorden.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-MK1-C" onclick="toggleAnswer('MK1-C', this)">
<strong>C)</strong> Een digitale munt die je nodig hebt om AI te gebruiken
</button>
<div class="answer-feedback" id="answer-MK1-C" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Hoewel sommige AI-diensten per token afrekenen, is een token zelf geen betaalmiddel. Het is een stukje tekst dat het model verwerkt.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-MK1-D" onclick="toggleAnswer('MK1-D', this)">
<strong>D)</strong> Altijd een enkel karakter (letter, cijfer of leesteken)
</button>
<div class="answer-feedback" id="answer-MK1-D" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Tokens zijn meestal groter dan een enkel karakter. Een token bevat doorgaans meerdere karakters en vertegenwoordigt een deel van een woord of een heel woord.
</div>
</div>
</div>
{% endquiz %}

{% info %}
## Neurale netwerken: leren van patronen

Achter elk modern AI-model schuilt een **neuraal netwerk**. Maar wat is dat precies?

### De vergelijking met het brein

Het menselijk brein bestaat uit miljarden zenuwcellen (neuronen) die met elkaar verbonden zijn. Wanneer je iets leert, worden bepaalde verbindingen tussen neuronen sterker en andere zwakker. Zo ontstaan patronen die je helpen om dingen te herkennen en beslissingen te nemen.

Een kunstmatig neuraal netwerk werkt op een vergelijkbare manier, maar dan in software:

- **Neuronen** worden nagebootst door wiskundige functies (nodes).
- **Verbindingen** tussen die nodes hebben elk een **gewicht** (een getal dat bepaalt hoe belangrijk die verbinding is).
- Door **training** worden deze gewichten aangepast zodat het netwerk steeds beter wordt in zijn taak.

### De structuur: lagen

Een neuraal netwerk is opgebouwd uit lagen:

| Laag | Functie |
|---|---|
| **Input-laag** | Ontvangt de gegevens (bijvoorbeeld tokens van een zin) |
| **Verborgen lagen** | Verwerken de gegevens en herkennen patronen. Hoe meer lagen, hoe complexer de patronen die herkend kunnen worden |
| **Output-laag** | Geeft het resultaat (bijvoorbeeld het voorspelde volgende woord) |

### Hoe leert een neuraal netwerk?

Stel je voor dat je een kind leert om honden en katten te herkennen:

1. Je laat het kind een foto zien en vraagt: "Is dit een hond of een kat?"
2. Het kind gokt: "Hond!"
3. Jij zegt: "Nee, dat is een kat."
4. Het kind past zijn manier van kijken aan en let voortaan beter op de kenmerken die een kat onderscheiden van een hond.
5. Na duizenden foto's wordt het kind steeds beter.

Bij een neuraal netwerk werkt het vergelijkbaar: het netwerk krijgt enorme hoeveelheden data te zien, maakt voorspellingen, krijgt feedback over wat goed en fout was, en past zijn gewichten aan. Dit proces heet **training**.
{% endinfo %}

{% trivia %}
<details>
<summary><strong>Het menselijk brein vs. neurale netwerken</strong> (klik om te lezen)</summary>

De vergelijking tussen het menselijk brein en kunstmatige neurale netwerken levert fascinerende cijfers op:

| | Menselijk brein | GPT-4 (schatting) |
|---|---|---|
| **Neuronen / Parameters** | ~86 miljard neuronen | ~1,8 biljoen parameters (gewichten) |
| **Verbindingen** | ~100 biljoen synapsen | ~1,8 biljoen gewichten |
| **Energieverbruik** | ~20 watt | Miljoenen kilowattuur voor training |
| **Leersnelheid** | Leert van weinig voorbeelden | Heeft miljarden voorbeelden nodig |

Ondanks het enorme aantal parameters is het menselijk brein nog steeds veel **efficienter**: het verbruikt slechts ongeveer 20 watt (vergelijkbaar met een spaarlamp), terwijl het trainen van een groot AI-model evenveel energie kan kosten als het jaarverbruik van duizenden huishoudens.

Bovendien kan een mens leren van slechts een paar voorbeelden ("few-shot learning" bij mensen is heel natuurlijk), terwijl AI-modellen doorgaans miljoenen of miljarden voorbeelden nodig hebben om patronen te herkennen.

Het brein blijft dus op veel vlakken superieur, al worden AI-modellen steeds beter in specifieke taken.
</details>
{% endtrivia %}

{% info %}
## Transformers: de doorbraak

De echte doorbraak in moderne AI kwam in **2017**, toen onderzoekers van Google het beroemde paper [*"Attention Is All You Need"*](https://arxiv.org/abs/1706.03762) publiceerden. Hierin introduceerden ze de **transformer-architectuur** die de basis vormt van vrijwel alle grote AI-modellen die we vandaag kennen.

### Wat is het attention-mechanisme?

Het kernidee van transformers is het **attention-mechanisme** (letterlijk: "aandacht-mechanisme"). Dit stelt het model in staat om bij het verwerken van een woord te "letten" op alle andere woorden in de tekst, ongeacht hoe ver ze van elkaar staan.

**Vergelijk het met hoe je een boek leest:**

Stel, je leest de volgende zin:

> *"Marie ging naar de bibliotheek. Ze leende drie boeken over biologie."*

Wanneer je "Ze" leest, weet je automatisch dat dit verwijst naar "Marie" - ook al staan die woorden niet direct naast elkaar. Je brein legt die verbinding door te "letten" op de context.

Het attention-mechanisme doet iets vergelijkbaars: het berekent voor elk woord hoe sterk de relatie is met alle andere woorden in de tekst. Zo kan het model begrijpen dat "Ze" verwijst naar "Marie" en niet naar "bibliotheek".

### Waarom was dit een doorbraak?

Voor transformers bestonden er al neurale netwerken die tekst konden verwerken, maar die werkten **woord voor woord** in volgorde. Dit had twee grote nadelen:

1. **Afstandsprobleem:** Verbanden tussen woorden die ver uit elkaar staan, gingen verloren.
2. **Snelheid:** Omdat woorden een voor een verwerkt moesten worden, was het trainen en gebruiken van deze modellen erg langzaam.

Transformers losten beide problemen op: ze kunnen alle woorden **tegelijkertijd** verwerken (parallellisatie) en leggen verbanden over de hele tekst heen.

### De "T" in GPT, BERT en meer

De transformer-architectuur is de basis van de bekendste AI-modellen:

| Model | Volledige naam | Bedrijf |
|---|---|---|
| **GPT** | Generative Pre-trained **Transformer** | OpenAI |
| **BERT** | Bidirectional Encoder Representations from **Transformers** | Google |
| **Claude** | Gebaseerd op transformer-architectuur | Anthropic |
| **Gemini** | Gebaseerd op transformer-architectuur | Google |

De letter "T" in GPT en BERT staat dus letterlijk voor "Transformer".
{% endinfo %}

{% task %}
**Opdracht 1: Tokenisatie zelf proberen**

Wil je zien hoe een AI-model tekst opbreekt in tokens? Dat kan!

**Stap 1:** Ga naar de OpenAI Tokenizer: [platform.openai.com/tokenizer](https://platform.openai.com/tokenizer)

**Stap 2:** Voer de volgende Nederlandse zinnen in en bekijk hoe ze worden opgebroken:

- Een korte zin: *"De kat zit op de mat."*
- Een lang samengesteld woord: *"Arbeidsongeschiktheidsverzekering"*
- Een zin met getallen: *"In 2017 publiceerden 8 onderzoekers het transformer-paper."*
- Een Engelse zin ter vergelijking: *"The cat sits on the mat."*

**Stap 3:** Beantwoord voor jezelf:
- Hoeveel tokens heeft de Nederlandse zin vergeleken met de Engelse?
- Wat gebeurt er met het lange samengestelde woord?
- Hoe worden getallen opgebroken?

*Tip: De kleuren in de tokenizer laten precies zien waar elk token begint en eindigt.*
{% endtask %}

{% info %}
## Waarom AI soms "hallucineert"

Een van de meest besproken fenomenen bij AI-modellen is **hallucinatie**: het model genereert informatie die plausibel klinkt, maar feitelijk onjuist is. Om te begrijpen waarom dit gebeurt, moeten we eerst begrijpen hoe een taalmodel een antwoord genereert.

### Hoe een taalmodel een antwoord genereert

Een groot taalmodel (LLM) werkt fundamenteel als een **voorspellingsmachine voor het volgende token**. Bij elke stap berekent het model de waarschijnlijkheid van alle mogelijke volgende tokens en kiest daaruit.

**Voorbeeld:**

Stel, het model heeft tot nu toe gegenereerd: *"De hoofdstad van Nederland is"*

Het model berekent dan de waarschijnlijkheid van elk mogelijk volgend token:

| Token | Waarschijnlijkheid |
|---|---|
| Amsterdam | 92% |
| Den | 3% |
| Rotterdam | 1% |
| een | 0,5% |
| ... | ... |

In dit geval is "Amsterdam" verreweg het meest waarschijnlijke volgende token, dus het model kiest dit. Het model "weet" dit niet echt - het heeft simpelweg geleerd dat in de trainingsdata het woord "Amsterdam" heel vaak volgde na "De hoofdstad van Nederland is".

### Waarom gaat het soms mis?

Het model werkt **probabilistisch**: het berekent waarschijnlijkheden, maar "begrijpt" de inhoud niet echt. Dit leidt tot hallucinaties in situaties zoals:

- **Onvoldoende trainingsdata:** Als een onderwerp weinig in de trainingsdata voorkomt, heeft het model onvoldoende patronen om op te bouwen en vult het de gaten zelf in.
- **Plausibele maar foute patronen:** Het model herkent patronen die "klinken" alsof ze kloppen, maar dat niet doen. Bijvoorbeeld: het kan een wetenschappelijk klinkende referentie genereren naar een paper dat nooit is geschreven.
- **Geen feitencontrole:** Het model heeft geen ingebouwde database met feiten. Het genereert tekst op basis van geleerde patronen, zonder te verifieren of die tekst klopt.

### Het verschil met deterministische systemen

In het artikel over [chatbots](/artikelen/01-chatbots-introductie/) heb je geleerd over het verschil tussen regelgebaseerde (deterministische) en data-gedreven (probabilistische) systemen:

| Eigenschap | Deterministisch | Probabilistisch (LLM) |
|---|---|---|
| **Antwoord** | Altijd hetzelfde bij dezelfde input | Kan varieren bij dezelfde input |
| **Fouten** | Voorspelbaar en reproduceerbaar | Onvoorspelbaar, soms subtiel |
| **Hallucinatie** | Niet mogelijk (geen generatie) | Wel mogelijk |
| **Flexibiliteit** | Beperkt tot voorgeprogrammeerde regels | Kan omgaan met nieuwe, onverwachte vragen |

Een rekenmachine (deterministisch) geeft altijd het juiste antwoord op 2 + 2. Een LLM (probabilistisch) kan in zeldzame gevallen een verkeerd antwoord geven op eenvoudige rekenvragen, simpelweg omdat het rekenen niet echt "begrijpt" maar patronen nabootst.
{% endinfo %}

{% quiz "Waarom hallucineert een AI-model soms?" %}
<div class="quiz-options" role="group" aria-label="Antwoordopties">
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-MK2-A" onclick="toggleAnswer('MK2-A', this)">
<strong>A)</strong> Omdat het model bewust liegt om de gebruiker tevreden te stellen
</button>
<div class="answer-feedback" id="answer-MK2-A" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Een AI-model heeft geen bewustzijn en kan daarom niet bewust liegen. Het genereert tekst op basis van statistische patronen, niet op basis van intenties.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-MK2-B" onclick="toggleAnswer('MK2-B', this)">
<strong>B)</strong> Omdat het model waarschijnlijkheden berekent en soms patronen genereert die plausibel klinken maar feitelijk onjuist zijn
</button>
<div class="answer-feedback" id="answer-MK2-B" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x2705;</span>
<strong>Correct!</strong><br>
Precies. Een AI-model werkt probabilistisch: het voorspelt het meest waarschijnlijke volgende token. Het "weet" niet echt of iets klopt, maar genereert tekst op basis van patronen uit de trainingsdata. Als die patronen onvolledig of misleidend zijn, ontstaan hallucinaties.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-MK2-C" onclick="toggleAnswer('MK2-C', this)">
<strong>C)</strong> Omdat het model niet genoeg rekenkracht heeft om het juiste antwoord te berekenen
</button>
<div class="answer-feedback" id="answer-MK2-C" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Hallucinatie is geen kwestie van onvoldoende rekenkracht. Het probleem zit in de fundamentele manier waarop het model werkt: het genereert tekst op basis van waarschijnlijkheden, niet op basis van feitenkennis.
</div>
</div>
<button class="quiz-option" type="button" aria-expanded="false" aria-controls="answer-MK2-D" onclick="toggleAnswer('MK2-D', this)">
<strong>D)</strong> Omdat het model verouderde software gebruikt die fouten bevat
</button>
<div class="answer-feedback" id="answer-MK2-D" hidden aria-hidden="true">
<div class="feedback-content">
<span class="feedback-icon">&#x274C;</span>
<strong>Nog niet goed!</strong><br>
Hallucinatie is geen softwarefout of bug. Het is een inherent kenmerk van hoe taalmodellen werken: ze voorspellen tekst op basis van waarschijnlijkheden, waardoor soms plausibel klinkende maar onjuiste informatie wordt gegenereerd.
</div>
</div>
</div>
{% endquiz %}

{% trivia %}
<details>
<summary><strong>Bekende voorbeelden van AI-hallucinaties</strong> (klik om te lezen)</summary>

AI-hallucinaties zijn niet alleen een theoretisch probleem. Er zijn inmiddels verschillende spraakmakende gevallen geweest:

**De advocaat en de verzonnen rechtszaken (2023)**
Een advocaat in New York gebruikte ChatGPT om juridisch onderzoek te doen en diende een document in bij de rechtbank met verwijzingen naar zes rechtszaken. Het probleem? Geen van die rechtszaken bestond. ChatGPT had overtuigend klinkende maar volledig fictieve namen van rechters, rechtbanken en uitspraken gegenereerd. De advocaat werd beboet.

**Verzonnen wetenschappelijke referenties**
AI-modellen genereren regelmatig referenties naar wetenschappelijke papers die niet bestaan, compleet met auteursnamen, tijdschriften en publicatiejaren. Ze volgen het *patroon* van een correcte referentie, maar de inhoud is verzonnen.

**Foutieve biografische gegevens**
Taalmodellen genereren soms onjuiste informatie over bekende personen, zoals verkeerde geboortedata, niet-bestaande prijzen, of verzonnen uitspraken.

Deze voorbeelden onderstrepen het belang van **altijd controleren** wat een AI genereert, vooral bij feitelijke claims.
</details>
{% endtrivia %}

{% task %}
**Opdracht 2: Hallucinatie opsporen**

Test zelf hoe goed een AI-model omgaat met vragen waarbij hallucinatie kan optreden.

**Stap 1:** Open een AI-chatbot naar keuze (ChatGPT, Claude, Perplexity, etc.)

**Stap 2:** Stel de volgende vragen en controleer de antwoorden:

1. *"Wie schreef het boek 'De Ontdekking van de Hemel'?"* (Controleer: dit boek bestaat echt, geschreven door Harry Mulisch)
2. *"Wie schreef het boek 'De Verborgen Tuin van Amsterdam'?"* (Controleer: bestaat dit boek echt?)
3. *"Noem drie wetenschappelijke papers over tokenisatie in het Nederlands."* (Controleer: bestaan de genoemde papers echt?)

**Stap 3:** Beantwoord voor jezelf:
- Hoe zelfverzekerd klonken de antwoorden?
- Waren alle antwoorden feitelijk correct?
- Kon je het verschil merken tussen betrouwbare en onbetrouwbare antwoorden?
{% endtask %}

{% info %}
## Alles komt samen

Laten we samenvatten hoe alle onderdelen die we besproken hebben samenwerken wanneer je een vraag stelt aan een AI-chatbot:

**Stap 1 - Tokenisatie:** Je typt een vraag, bijvoorbeeld *"Wat is fotosynthese?"*. De tokenizer breekt deze tekst op in tokens.

**Stap 2 - Verwerking door het neurale netwerk:** De tokens worden door het transformer-netwerk verwerkt. Het attention-mechanisme analyseert de relaties tussen alle tokens.

**Stap 3 - Generatie:** Het model voorspelt token voor token het meest waarschijnlijke antwoord, op basis van de patronen die het tijdens de training heeft geleerd.

**Stap 4 - Output:** De gegenereerde tokens worden samengevoegd tot leesbare tekst en aan jou gepresenteerd als antwoord.

Dit hele proces gebeurt in enkele seconden, maar daarachter schuilen miljarden berekeningen in een neuraal netwerk met miljarden of zelfs biljoenen parameters.
{% endinfo %}

{% conclusion %}
## Samenvatting

In dit artikel hebben we onder de motorkap van AI-modellen gekeken en de belangrijkste bouwstenen besproken:

**Wat hebben we geleerd?**
- **Tokens** zijn de basiseenheden waarmee AI taal leest. Ze kunnen korter of langer zijn dan een woord, en het contextvenster bepaalt hoeveel tokens een model tegelijk kan verwerken.
- **Neurale netwerken** zijn opgebouwd uit lagen van kunstmatige neuronen met verbindingen (gewichten) die door training worden aangepast om patronen te herkennen.
- **Transformers** en hun attention-mechanisme vormden de doorbraak die moderne AI mogelijk maakte: ze kunnen alle woorden tegelijkertijd verwerken en verbanden leggen over de hele tekst.
- **Hallucinatie** ontstaat omdat AI-modellen probabilistisch werken: ze voorspellen het meest waarschijnlijke volgende token, maar "begrijpen" de inhoud niet echt.

**Praktische inzichten**
- Wees je bewust van het contextvenster: als je te veel tekst invoert, kan het model eerdere informatie "vergeten".
- Controleer altijd feitelijke claims van AI-modellen, vooral bij onderwerpen die minder vaak in trainingsdata voorkomen.
- De zelfverzekerde toon van een AI-antwoord zegt niets over de juistheid ervan.

**Wat wil je nu verder ontdekken?**

- **[Onder de motorkap deel 2](/artikelen/06-onder-de-motorkap-2/)** -- Hoe worden AI-modellen getraind? Van pre-training tot fine-tuning.
- **[Chatbots: een introductie](/artikelen/01-chatbots-introductie/)** -- Terug naar de basis: wat zijn chatbots en hoe werken ze?
{% endconclusion %}

{% info %}
## Bronnen

- [Attention Is All You Need - Vaswani et al. (2017)](https://arxiv.org/abs/1706.03762)
- [What are tokens? - OpenAI](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them)
- [OpenAI Tokenizer](https://platform.openai.com/tokenizer)
- [Neural Networks - 3Blue1Brown (YouTube)](https://www.youtube.com/watch?v=aircAruvnKk)
- [On the Dangers of Stochastic Parrots - Bender et al. (2021)](https://dl.acm.org/doi/10.1145/3442188.3445922)
- [GPT-4 Technical Report - OpenAI](https://openai.com/research/gpt-4)
{% endinfo %}
