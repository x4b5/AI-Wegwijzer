# 3. BEGRIJPEN – Machine learning

---

**Laatste wijziging:** 23 augustus 2025

---

**Leerdoel**  
In deze module krijg je een introductie over Machine Learning zonder in complexe wiskunde of diepgaande details te duiken. In de module _6. Verdiepen_ zal de theorie verder worden verdiept.

---
## Inleiding
In vorige module...



**Waarom Machine Learning?**
Om helder te krijgen waarom Machine Learning de tand des tijds heeft overleeft kun je de vraag stellen voor welk probleem dit een oplossing is. 
Hieronder een voorbeeld om dit helder te maken.

De inbox loopt vol met berichten — persoonlijke mails van vrienden, maar ook honderden ongewenste spamberichten (reclame, phishing, nepprijzen). Klassiek programmeren (met handgemaakte regels zoals “als het woord ‘lotto’ verschijnt, markeer dan als spam”) faalt, omdat spammers steeds van tactiek veranderen. Zo'n systeem is rigide en raakt al snel achterhaald.

Met machine learning kun je een model trainen op basis van voorbeelden van spam en niet-spam. Het model leert patronen herkennen die veel complexer zijn dan wat je met regels kunt formuleren — zoals tekststructuur, afzendergedrag of woordkeuze. Nieuwe mails worden daardoor automatisch én adaptief gefilterd.
En dat werkt: spamfilters bereiken vaak meer dan 90 % nauwkeurigheid
Bron: [Wikipedia, Applications of artificial intelligence](https://en.wikipedia.org/wiki/Applications_of_artificial_intelligence?utm_source=chatgpt.com)

**Wat is Machine Learning**


**Hoe werkt Machine Learning**
## Overzicht leeraanbod


Een goede eerste stap om Machine Learning te leren is de micro-learning [Introduction to Machine Learning van Google](https://developers.google.com/machine-learning/intro-to-ml). Deze micro-learning duur niet meer dan een half uur.


Machine Learning is.
In het geval van ML draait het om het maken van voorspellingen op basis van data en het genereren van resultaat .

Om deze voorspellingen te maken zijn er vier manieren om te leren:
- Supervised learning
- Unsupervised learning
- Reinforcement learning
- Generative AI

- Supervised learning
    - Regressie: numerieke voorspelling (de prijs van een huis)
        - lineaire regressie: de lijn die het beste past bij de gelablde waardes.
        - logistieke regressie; genereert een waarschijnlijkhid tussen 0.0 en 0.1 dat een systeem dan mapt aan een klasse voorspelling. 
    - Classificatie: voorspelkt in likelihood dat iets tot een bepaalde categorie hoort (bijv. spam of geen-spam)
        - binary classificatie: bijv, regen of geen regen.
        - multiclass classification: meer dan twee waardes: bij. regen, hagel, sneeuw of sleet. 

    - regressie -> nummers
    - classificatie -> labels


- Unsupervised learning
    - clustering

- Reinforcement learning

- Generative AI
    - content creeren vanuit input:
        - text to text
        - text-to-image
        - text-to-video
        - text-to-code
        - text-to-speech
        - image ande text-to-iamge

    - patronen in data worden geleerd met het doel om nieuwe met gelijkwaardige data te creeren.

Supervised Learning

gebaseerd io de volgende kernconcepten:
- data: gerelateerde data wordt opgelsagen in datasets
de features zijn de waardes dat een supervised moidel gebruikt om de label te voorspellen. De label is het antwoord dat we wikllen dat het model voorspelt
Labeled examples: voorbeelden die zowel de kenmerken als de labels bevatten
- datasets: size and diversity
- model; he complex collection of numbers that define the mathematical relationship from specific input feature patterns to specific output label values. 
- training: difference between predictes and actual value - defined as loss. Gradually update
- evalueren
- inferentie: using the model to make predictions on unlabeled examples.

**MIT OpenCourseWare Leerdoelen**  
Deze module volgt de bewezen structuur van MIT's Introduction to Deep Learning cursus:

-   **Stap 1**: Begrijpen hoe AI informatie verwerkt (input → verwerking → output)
-   **Stap 2**: Kennismaken met de drie pijlers: data, algoritmes en leren
-   **Stap 3**: Begrijpen hoe neurale netwerken patronen herkennen
-   **Stap 4**: Inzicht in hoe modellen leren via gradient descent
-   **Stap 5**: Praktische toepassingen en beperkingen

**Verwijzing naar MIT materiaal**: Voor verdere verdieping, zie [MIT OpenCourseWare - Introduction to Deep Learning](http://introtodeeplearning.com/)

---

**Inhoud**

-   [Inleiding](#inleiding)
-   [Hoe werkt AI op basisniveau?](#hoe-werkt-ai-op-basisniveau)
-   [De bouwstenen van AI](#de-bouwstenen-van-ai)
-   [Hoe leert een algoritme?](#hoe-leert-een-algoritme)
-   [Neurale netwerken in simpele taal](#neurale-netwerken-in-simpele-taal)
-   [Gradient Descent: hoe leert een neuraal netwerk?](#gradient-descent-hoe-leert-een-neuraal-netwerk)
-   [Data en training](#data-en-training)
-   [Generatieve AI: hoe werkt een taalmodel?](#generatieve-ai-hoe-werkt-een-taalmodel)
-   [Beperkingen en valkuilen van AI](#beperkingen-en-valkuilen-van-ai)
-   [Conclusie](#conclusie)

---

## Inleiding

In de vorige module heb je verschillende AI-tools verkend en ervaren hoe krachtig ze kunnen zijn. Maar hoe werken deze tools eigenlijk onder de motorkap? Wat gebeurt er wanneer je een vraag stelt aan ChatGPT of een afbeelding uploadt naar een beeldherkenningssysteem?

In deze module kijken we naar hoe algoritmes leren, hoe neurale netwerken werken en wat er gebeurt tijdens het trainen van een model. Dit helpt je om beter te begrijpen waarom AI soms verrassende resultaten geeft en waar je op moet letten bij het gebruik ervan.

---

## Hoe werkt AI op basisniveau?

AI volgt altijd hetzelfde basispatroon: **Input → Verwerking → Output**

> 🔄 **Het AI-proces**: Net zoals je hersenen informatie verwerken, verwerkt AI input om tot een output te komen.

**1. Input (Invoer)**

-   Dit is wat je aan de AI geeft: een vraag, een afbeelding, een geluidsfragment
-   **Voorbeeld**: Je typt "Wat is het weer in Amsterdam?" in ChatGPT

**2. Verwerking (Het "denken")**

-   De AI analyseert de input met behulp van zijn getrainde algoritme
-   Het herkent patronen en maakt voorspellingen
-   **Voorbeeld**: ChatGPT herkent dat dit een weersvraag is en zoekt naar relevante informatie

**3. Output (Uitvoer)**

-   De AI geeft een antwoord, voorspelling of resultaat
-   **Voorbeeld**: ChatGPT antwoordt: "Ik kan je niet vertellen wat het huidige weer in Amsterdam is, omdat ik geen toegang heb tot real-time weergegevens."

**Waarom dit belangrijk is:**

-   Je begrijpt dat AI niet "denkt" zoals mensen
-   Je ziet dat AI een proces doorloopt
-   Je begrijpt waarom de kwaliteit van input belangrijk is voor de output

---

## De bouwstenen van AI

Nu je begrijpt hoe AI werkt, kunnen we kijken naar de drie fundamentele bouwstenen die samen het systeem "intelligent" maken:

### 1. **Data - De brandstof van AI**

Data is de basis waarop AI leert. Zonder data kan AI niets leren, net zoals een mens zonder ervaring niets kan leren. Data kan van alles zijn:

-   **Tekst**: Boeken, artikelen, gesprekken
-   **Afbeeldingen**: Foto's, video's, tekeningen
-   **Geluiden**: Spraak, muziek, omgevingsgeluiden
-   **Getallen**: Verkoopcijfers, weergegevens, sensordata

> 💡 **Belangrijk**: De kwaliteit van de data bepaalt de kwaliteit van de AI. "Garbage in, garbage out" geldt zeker voor AI.

### 2. **Algoritme - De motor van AI**

Een algoritme is een reeks stappen of regels die een computer volgt om een probleem op te lossen. Het is als een recept: je volgt de stappen en krijgt een resultaat.

**Traditionele vs. AI-algoritmes:**

-   **Traditioneel**: Statisch, doet altijd hetzelfde (bijv. een rekenmachine)
-   **AI-algoritme**: Kan leren en aanpassen, ontdekt patronen in data

### 3. **Leren - Het proces van verbetering**

Leren is wat AI "intelligent" maakt. In plaats van vooraf vastgelegde regels, ontdekt AI patronen in data en verbetert het zijn prestaties door ervaring.

**Het cruciale verschil: Waarschijnlijkheid vs. Feiten**

> 🎯 **Belangrijk inzicht**: AI werkt niet als een bibliotheek waar je feiten opzoekt. AI werkt op basis van **waarschijnlijkheid** - het voorspelt wat het meest waarschijnlijk is, gebaseerd op patronen in de trainingsdata.

**De kracht en zwakte van AI:**

-   ✅ **Kracht**: AI is flexibel en kan nieuwe situaties aan
-   ❌ **Zwakte**: AI is niet altijd waarheidsgetrouw - het kan "hallucineren" of onjuiste informatie geven

---

## Hoe leert een algoritme?

AI-algoritmen leren door patronen te herkennen in data. Er zijn drie hoofdmethoden waarop een algoritme kan leren:

**MIT OpenCourseWare Inzicht**: Deze drie leermethoden zijn de fundamenten van alle moderne AI. MIT's cursus toont aan dat het begrijpen van deze methoden cruciaal is om te snappen hoe AI werkt.

1. **Supervised learning**

    - Bij deze methode wordt het algoritme getraind met gelabelde data. Dit betekent dat de inputdata al een bijbehorend correct antwoord heeft.
    - **Voorbeeld**: Een model leert afbeeldingen van katten en honden te onderscheiden door duizenden voorbeelden te zien met labels "kat" of "hond".
    - **MIT Uitleg**: Dit is als een leraar die een student corrigeert. De student krijgt feedback op elke poging en leert zo wat goed en fout is.

2. **Unsupervised learning**

    - Hier wordt het algoritme getraind met niet-gelabelde data. Het model moet zelf patronen en structuren ontdekken.
    - **Voorbeeld**: Een model groepeert klanten op basis van koopgedrag zonder vooraf te weten welke groepen er zijn.
    - **MIT Uitleg**: Dit is als een student die zelf een boek leest zonder uitleg. De student ontdekt zelf verbanden en patronen.

3. **Reinforcement learning**
    - Het algoritme leert door beloningen of straffen te ontvangen voor acties die het uitvoert in een omgeving.
    - **Voorbeeld**: Een AI leert een spel te spelen door punten te verdienen voor goede zetten en punten te verliezen voor slechte zetten.
    - **MIT Uitleg**: Dit is als een kind dat leert fietsen door vallen en opstaan. Het krijgt feedback door de gevolgen van zijn acties.

**Waarom deze drie methoden belangrijk zijn**: Volgens MIT's cursus zijn dit de enige manieren waarop AI kan leren. Alle moderne AI-toepassingen - van ChatGPT tot zelfrijdende auto's - gebruiken een combinatie van deze methoden.

---

## Neurale netwerken in simpele taal

Een neuraal netwerk is een systeem dat is geïnspireerd door het menselijk brein. Het bestaat uit lagen van "neuronen" die met elkaar verbonden zijn.

> 💡 **Vergelijking met het brein**: Net zoals je hersenen bestaan uit miljarden zenuwcellen die met elkaar communiceren, bestaat een neuraal netwerk uit kunstmatige neuronen die informatie doorgeven en verwerken.

**MIT OpenCourseWare Inzicht**: Volgens MIT's cursus zijn neurale netwerken eigenlijk wiskundige functies die leren door hun parameters (gewichten) aan te passen. Het is geen "klein brein" maar een slimme rekenmachine.

-   **Neuronen**: Elk neuron ontvangt input, verwerkt deze en stuurt een output naar het volgende neuron.
-   **Lagen**: Een neuraal netwerk heeft meestal drie soorten lagen:
    1. **Inputlaag**: Ontvangt de ruwe data (bijvoorbeeld een afbeelding).
    2. **Verborgen lagen**: Verwerken de data door patronen te herkennen.
    3. **Outputlaag**: Geeft het resultaat (bijvoorbeeld "kat" of "hond").
-   **Gewichten**: Elke verbinding tussen neuronen heeft een gewicht dat bepaalt hoe belangrijk de input is. Tijdens het trainen worden deze gewichten aangepast om betere voorspellingen te maken.

**MIT OpenCourseWare Uitleg van Gewichten**: Gewichten zijn als "volume-knoppen" - ze bepalen hoe hard of zacht een signaal wordt doorgegeven. Een gewicht van 0 betekent "geen signaal", een gewicht van 1 betekent "volledig signaal", en negatieve gewichten betekenen "tegenovergesteld signaal".

**Praktisch voorbeeld**: Stel je voor dat je een neuraal netwerk traint om handgeschreven cijfers te herkennen. De inputlaag ontvangt een afbeelding van 28x28 pixels (784 input-neuronen). De verborgen lagen leren patronen zoals "rondjes", "rechte lijnen" en "krommen". De outputlaag heeft 10 neuronen (één voor elk cijfer 0-9) en geeft de waarschijnlijkheid dat het een bepaald cijfer is.

---

## Gradient Descent: hoe leert een neuraal netwerk?

Nu je begrijpt hoe neurale netwerken zijn opgebouwd, is de volgende vraag: hoe leren ze eigenlijk? Het antwoord ligt in een krachtig algoritme genaamd **gradient descent**.

**MIT OpenCourseWare Uitleg**: Gradient descent is als het vinden van de weg naar beneden in een donkere kamer. Je voelt met je voeten welke richting "omlaag" is en stapt steeds in die richting, tot je de laagste plek bereikt.

**Hoe werkt het?**

1. **Fout meten**: Het netwerk maakt een voorspelling en vergelijkt deze met het juiste antwoord
2. **Fout berekenen**: Hoe groter het verschil, hoe groter de fout
3. **Richting bepalen**: Het algoritme berekent welke richting de gewichten op moeten om de fout te verkleinen
4. **Stapje zetten**: Alle gewichten worden een klein beetje aangepast in de juiste richting
5. **Herhalen**: Dit proces wordt duizenden keren herhaald tot de fout minimaal is

**Praktische analogie**: Stel je voor dat je een bal van een heuvel laat rollen. De bal rolt automatisch naar beneden (de richting van de steilste afdaling). Gradient descent werkt hetzelfde: het vindt altijd de weg naar beneden in de "foutlandschap".

**Waarom dit belangrijk is**: Zonder gradient descent zouden neurale netwerken niet kunnen leren. Het is het algoritme dat alle gewichten automatisch optimaliseert, zodat het netwerk steeds beter wordt in zijn taak.

---

## Data en training

De kwaliteit van een AI-model hangt sterk af van de data waarmee het wordt getraind. Het gezegde "garbage in, garbage out" geldt zeker voor AI: als je een model traint met slechte data, krijg je slechte resultaten.

1. **Bias in data**

    - Als de trainingsdata bevooroordeeld is, zal het model ook bevooroordeeld zijn.
    - **Voorbeeld**: Een gezichtsherkenningsmodel dat alleen met foto's van lichte huidtinten is getraind, presteert slecht op foto's van donkere huidtinten.
    - **Real-world impact**: Dit kan leiden tot discriminatie bij sollicitaties, leningen of beveiligingssystemen.

2. **Overfitting en underfitting**

    - **Overfitting**: Het model leert de trainingsdata te goed, inclusief ruis en uitzonderingen, en presteert slecht op nieuwe data.
        > 🎯 **Vergelijking**: Net zoals een student die alleen de exacte vragen uit een oefenboek leert, maar vastloopt bij een andere formulering van dezelfde stof.
    - **Underfitting**: Het model leert de trainingsdata niet goed genoeg en mist belangrijke patronen.
        > 🎯 **Vergelijking**: Net zoals een student die alleen de hoofdlijnen kent, maar de details mist om complexe vragen te beantwoorden.

3. **Training, validatie en testdata**
    - **Trainingdata** (70%): Wordt gebruikt om het model te trainen.
    - **Validatiedata** (15%): Wordt gebruikt om het model te evalueren tijdens het trainen en hyperparameters te tunen.
    - **Testdata** (15%): Wordt gebruikt om de prestaties van het model te meten na het trainen - deze data ziet het model nooit tijdens training.

---

## Generatieve AI: hoe werkt een taalmodel?

Generatieve AI-modellen, zoals GPT, werken door patronen in tekstdata te leren en deze te gebruiken om nieuwe tekst te genereren. Deze modellen zijn getraind op miljarden woorden en kunnen verrassend menselijke tekst produceren.

1. **Training**

    - Het model wordt getraind op enorme hoeveelheden tekstdata, zoals boeken, artikelen en websites.
    - Het leert welke woorden vaak samen voorkomen en in welke volgorde.
    - **Schaal**: GPT-3 werd getraind op ongeveer 45 terabyte aan tekst - dat zijn miljoenen boeken en artikelen!

2. **Transformer-architectuur**

    - Moderne taalmodellen gebruiken de Transformer-architectuur (geïntroduceerd door Google in 2017).
    - Deze architectuur maakt gebruik van "self-attention", waardoor het model kan bepalen welke woorden in een zin belangrijk zijn in relatie tot andere woorden.
    - **Voordeel**: Het model kan lange afstanden tussen woorden overbruggen en begrijpt context beter dan oudere modellen.

3. **Genereren van tekst**
    - Wanneer je een prompt invoert, voorspelt het model woord voor woord wat het meest waarschijnlijk volgt, gebaseerd op wat het heeft geleerd tijdens de training.
    - **Proces**: Het model berekent voor elk woord in zijn vocabulaire de waarschijnlijkheid dat dit het volgende woord is, en kiest dan het meest waarschijnlijke (of een willekeurige keuze uit de top-k opties voor variatie).

> 🔍 **Interessant feit**: Taalmodellen zoals GPT "begrijpen" de tekst niet echt zoals mensen doen. Ze herkennen statistische patronen en kunnen daardoor coherente tekst produceren, maar hebben geen bewustzijn of begrip van de betekenis.

**Waarom AI kan "hallucineren":**
Omdat AI werkt op basis van waarschijnlijkheid, kan het informatie produceren die logisch klinkt maar feitelijk onjuist is. Het model "weet" niet of iets waar is - het produceert alleen wat het meest waarschijnlijk lijkt, gebaseerd op de patronen in zijn trainingsdata. Dit verklaart waarom AI soms:

-   Feiten kan verzinnen die niet bestaan
-   Bronnen kan citeren die niet bestaan
-   Logisch klinkende maar onjuiste redeneringen kan maken

**Hoe wordt hallucinatie ingeperkt?**

Onderzoekers en ontwikkelaars gebruiken verschillende technieken om hallucinatie te verminderen:

1. **Retrieval-Augmented Generation (RAG)**

    - Het model krijgt toegang tot een database met betrouwbare informatie
    - In plaats van alleen uit geheugen te putten, kan het feiten opzoeken
    - **Voorbeeld**: Een chatbot die eerst Wikipedia-artikelen doorzoekt voordat het antwoordt

2. **Fine-tuning met betrouwbare data**

    - Het model wordt extra getraind op datasets waarvan bekend is dat ze accuraat zijn
    - Het leert om onzeker te zijn over informatie die het niet "weet"
    - **Voorbeeld**: Het model leert om "Ik weet het niet zeker" te zeggen in plaats van te gissen

3. **Human Feedback (RLHF)**

    - Mensen beoordelen antwoorden op accuraatheid
    - Het model leert om betrouwbaardere informatie te produceren
    - **Voorbeeld**: Het model krijgt beloningen voor correcte antwoorden en straf voor hallucinaties

4. **Confidence scoring**

    - Het model geeft aan hoe zeker het is van zijn antwoord
    - Gebruikers kunnen zien wanneer het model twijfelt
    - **Voorbeeld**: "Ik ben 85% zeker dat dit correct is" in plaats van een stellig antwoord

5. **Fact-checking en verificatie**
    - Automatische controles op feitelijke juistheid
    - Cross-referencing met meerdere bronnen
    - **Voorbeeld**: Het model controleert informatie tegen betrouwbare databases

---

## Beperkingen en valkuilen van AI

Hoewel AI krachtig is, heeft het ook beperkingen. Het is belangrijk om deze te kennen om AI verantwoord en effectief te gebruiken:

1. **Black box-probleem**

    - Veel AI-modellen, zoals neurale netwerken, zijn moeilijk te begrijpen. Het is vaak onduidelijk waarom een model een bepaalde beslissing neemt.
    - **Impact**: Dit maakt het moeilijk om AI te gebruiken in domeinen waar uitlegbaarheid cruciaal is, zoals medische diagnoses of juridische beslissingen.

2. **Bias en discriminatie**

    - Als de trainingsdata bevooroordeeld is, kan het model discriminerende resultaten opleveren.
    - **Voorbeeld**: Een AI-systeem dat sollicitaties beoordeelt kan onbewust vooroordelen over gender of etniciteit overnemen uit historische data.

3. **Overmatig vertrouwen**

    - Gebruikers kunnen te veel vertrouwen op AI, zelfs als het model fouten maakt.
    - **Risico**: Dit kan leiden tot het negeren van menselijke expertise of het accepteren van onjuiste resultaten.
    - **Waarom dit gebeurt**: AI produceert vaak zeer overtuigend klinkende antwoorden, waardoor gebruikers vergeten dat het op waarschijnlijkheid werkt, niet op feiten.

4. **Beperkte generalisatie**

    - AI-modellen presteren vaak goed op taken waarvoor ze zijn getraind, maar kunnen falen in nieuwe situaties.
    - **Voorbeeld**: Een model dat getraind is op foto's van katten in huizen, kan moeite hebben met katten in de natuur.

5. **Kosten en energieverbruik**
    - Het trainen van grote AI-modellen vereist veel rekenkracht en energie, wat kostbaar en milieubelastend is.
    - **Schaal**: Het trainen van GPT-3 kostte naar schatting $12 miljoen en produceerde 552 ton CO2-uitstoot.

> ⚠️ **Belangrijk**: Deze beperkingen betekenen niet dat AI nutteloos is, maar wel dat je bewust moet zijn van de grenzen en AI altijd moet controleren en valideren.

---

## Conclusie

In deze module hebben we een **introductie** gegeven in hoe AI-systemen werken, van de basisprincipes van leren tot de werking van neurale netwerken en generatieve AI. Je hebt nu een basisbegrip van:

-   **Hoe algoritmes leren** via supervised, unsupervised en reinforcement learning
-   **De werking van neurale netwerken** en hoe ze geïnspireerd zijn door het menselijk brein
-   **Gradient descent** en hoe dit algoritme neurale netwerken leert door fouten te minimaliseren
-   **Het belang van kwaliteitsdata** en de uitdagingen van bias en overfitting
-   **De werking van generatieve AI** zoals taalmodellen en de Transformer-architectuur
-   **De beperkingen van AI** en waarom bewust gebruik belangrijk is

**MIT OpenCourseWare Structuur Voltooid**: Je hebt nu alle vijf stappen doorlopen volgens MIT's bewezen methode:
✅ **Stap 1**: AI informatieverwerking begrepen  
✅ **Stap 2**: Drie pijlers van AI doorgenomen  
✅ **Stap 3**: Neurale netwerken begrepen  
✅ **Stap 4**: Gradient descent inzicht verworven  
✅ **Stap 5**: Praktische toepassingen en beperkingen geleerd

> 🔍 **Voor verdere verdieping**: Als je meer wilt weten over de wiskundige principes, verschillende neurale netwerk-architecturen, training algoritmes of andere technische details, verwijzen we je naar module 6 (Verdiepen) en de volledige [MIT OpenCourseWare - Introduction to Deep Learning](http://introtodeeplearning.com/).

> ⚠️ **Kerninzicht**: Onthoud dat AI werkt op basis van **waarschijnlijkheid**, niet op feiten. Dit maakt AI flexibel en krachtig, maar ook onbetrouwbaar voor feitelijke informatie. Altijd controleren en valideren!

**Praktische tips om hallucinatie te herkennen:**

-   **Controleer bronnen**: Als AI een bron citeert, zoek deze op
-   **Vraag om bevestiging**: "Kun je dit verifiëren?" of "Ben je zeker van deze informatie?"
-   **Vergelijk met andere bronnen**: Gebruik meerdere AI-tools of zoek zelf op
-   **Let op stelligheid**: AI die te stellig is over ongewone feiten kan hallucineren
-   **Gebruik RAG-gebaseerde tools**: Tools die toegang hebben tot actuele databases zijn betrouwbaarder

Hoewel AI veel mogelijkheden biedt, is het belangrijk om de beperkingen en valkuilen te begrijpen om het verantwoord en effectief te gebruiken. In de volgende module gaan we kijken hoe je deze kennis kunt toepassen in de praktijk door te leren hoe je effectief kunt prompten.

---

## Quizvraag: Neurale netwerken

Een neuraal netwerk heeft 3 lagen: een inputlaag met 100 neuronen, een verborgen laag met 50 neuronen, en een outputlaag met 10 neuronen. Hoeveel verbindingen (gewichten) heeft dit netwerk in totaal?

A) 150 verbindingen  
B) 5000 verbindingen  
C) 7500 verbindingen  
D) 10000 verbindingen

**[Klik hier voor het antwoord](referentie/antwoorden-quizvragen.md#antwoord-c-7500-verbindingen)**

---
