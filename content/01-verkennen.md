# 1. VERKENNEN - Introductie en kernbegrippen
---
**Datum:** 2025-08-18
**Laatste wijziging:**

---
**Leerdoel**  
In deze module raak je vertrouwd met het begrip AI en de kernbegrippen rondom AI.  

---
**Inhoud**
- Definitie van AI
- De ontwikkeling van AI - de drijvende krachten

---
### Definitie van AI

**AI... niet te beschrijven!**
Als je iets wilt begrijpen, begin je vaak met de vraag: *Wat is het?*  
Je probeert het in te kaderen, te definiëren.  

Bij artificiële intelligentie (AI), oftewel kunstmatige intelligentie, lopen we daar meteen tegen problemen aan. Het is om meerdere redenen lastig om tot één heldere definitie te komen:  

- Het is al lastig om **menselijke intelligentie** te definiëren  
  > Psycholoog Robert J. Sternberg legt in het artikel ['What is intelligence, really? The futile search for a Holy Grail' (2024)](https://www.sciencedirect.com/science/article/abs/pii/S1041608024001614) uit waarom het zoeken naar een allesomvattende definitie van intelligentie onbegonnen werk is. Hij stelt dat onze energie beter besteed kan worden aan het onderzoeken **hoe** intelligentie wordt ingezet. Intelligent gedrag hangt namelijk niet alleen af van de persoon, maar ook van de taak en de situatie.   
  *"Velen van ons die zichzelf als intelligent beschouwen, zouden in een andere tijd waarschijnlijk het middagmaal van een prehistorisch dier zijn geweest."*, aldus Sternberg. 

- De **voorwaarden** om iets ‘intelligent’ te noemen verschuiven voortdurend.  
  > In 1997 versloeg IBM’s Deep Blue de wereldkampioen schaken Garry Kasparov — destijds een baanbrekende AI-doorbraak. Tegenwoordig zien we schaakcomputers als gewone software. Wat toen gold als AI, voldoet nu niet meer aan de huidige criteria.

- Beleidsmakers hebben over het algemeen onvoldoende basiskennis over AI waardoor hun definities vaak **vaag, onjuist of te breed** worden geformuleerd.
  > In het artikel ['Defining Artificial Intelligence' (Weitzel, 2025)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5154389&utm_source=chatgpt.com) wordt opgemerkt dat "een kwart van de onderzochte verordeningen ook een zonnewijzer zou aanmerken als AI". Een ander derde deel bevat helemaal geen definitie, wat leidt tot onduidelijk beleid.

- **AI Washing**: Bedrijven overdrijven of zijn misleidend over het gebruik van AI in hun producten om aantrekkelijker of innovatiever over te komen dan het werkelijk is. Dit staat ook wel bekend als [AI washing](https://en.wikipedia.org/wiki/AI_washing?utm_source=chatgpt.com). Hierdoor vervaagt de technische betekenis van AI, wordt AI zowel onder- als overhyped, verandert het in een leeg buzzword en daalt uiteindelijk het vertrouwen in echte toepassingen.
  > In september 2023 lanceerde Coca‑Cola de “Y3000”, een drankje dat volgens de marketing “co‑created with human and artificial intelligence” zou zijn. Kritiek kwam omdat Coca‑Cola nooit duidelijk maakte wat de rol van AI precies was—de bewering lijkt vooral bedoeld om de innovatiegerichte aantrekkingskracht te verhogen. Bron: [CTO Magazine](https://ctomagazine.com/what-is-ai-washing-why-it-is-a-problem/?utm_source=chatgpt.com)


Geen gemakkelijke start, dat zeker. Maar toch is een duidelijke definitie nodig – of in ieder geval een poging daartoe.

Waarom? Zonder gedeeld begrip van wat AI precies is, kunnen we er niet helder over praten. En zonder die helderheid wordt het bijna onmogelijk om AI goed te reguleren. Dat kan leiden tot maatschappelijke problemen, of juist innovatie in de weg zitten.
> Volgens de huidige EU AI Act is de definitie van AI bewust breed. Zo’n veelomvattende omschrijving betekent dat zelfs software die in feite heel simpel is—bijvoorbeeld puur gebaseerd op vaste regels—onder de noemer ‘AI-systeem’ kan vallen. Dat kan duiden op extra verplichtingen: meer documentatie, risicobeheer, audits, toezicht… en dus extra kosten. Kosten die uiteindelijk vaak bij de consument terechtkomen.

**Een poging tot een definitie**
Na het onderzoeken van bestaande AI-definities en zijn kritiek daarop, probeert Weitzel in zijn artikel ['Defining Artificial Intelligence'](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5154389&utm_source=chatgpt.co) een betere omschrijving te geven, al benadrukt hij dat AI nooit volledig in één perfecte definitie te vangen is. De volgende definitie ziet hij dan ook als een verbetering ten opzichte van de definities die hij heeft geanalyseerd: 
- **Een computerprogramma** dat gebruikmaakt van 
- **machine learning-technieken** om 
- **complexe doelen** te bereiken die normaal gesproken 
- **menselijke intelligentie** vereisen.

Weitzel legt vervolgens uit dat door het woord *computerprogramma* te gebruiken, bredere woorden als *systeem* kunnen worden uitgesloten.
Door te zeggen dat het om *machine-learning* gaat, worden minder krachtige logica-gebaseerde technieken/methoden uitgesloten.
Weitzel erkent dat het idee dat de doelen "menselijke intelligentie" vereisen, wat vaag blijft, maar het helpt om simpele programma's uit te sluiten.  

Nu zal niet iedere expert het eens zijn met de definitie van Weitzel want AI-systemen van vóór de jaren '90 (beter bekend als [*GOFAI*](https://en.wikipedia.org/wiki/GOFAI)) worden uitgesloten. Er was nog geen sprake van machine learning maar door het toepassen van de combinatie van regels (conditional statements), een kennisbank, een redeneermachine, een werkgeheugen en een gebruikersinterface lieten deze [regelgebaseerde modellen](https://www.geeksforgeeks.org/artificial-intelligence/rule-based-system-in-ai/) toch een bepaalde mate van intelligent gedrag zien.
  > [*MYCIN*](referentie/begrippenlijst.md) (begin jaren ’70, Stanford) was een regelgebaseerd expertsysteem dat artsen hielp bij het diagnosticeren van bacteriële infecties en het aanbevelen van antibiotica. Het werkte met een kennisbank van ongeveer 600 regels en redeneerde via [backward chaining](referentie/begrippenlijst.md#backward-chaining) (terugredeneren vanuit een mogelijke conclusie). 
  Het gebruikte geen machine learning: alle kennis kwam rechtstreeks van menselijke experts en werd vastgelegd als regels. Toch gold het destijds als kunstmatige intelligentie, omdat het beslissingen nam, zijn redenering kon uitleggen en vaak even goed presteerde als menselijke artsen.

Aan de andere kant zijn AI-modellen die alleen regelgebaseerde technieken gebruiken, tegenwoordig zeldzaam. In dat geval is het meestal een combinatie van regelgebaseerde technieken en machine learning ook wel bekend als hybride AI.

Het is dus onbegonnen werk om AI helder te definieren. Zouden we dan op een andere, meer praktische manier naar AI kunnen kijken? 

**Mate van AI**
In de introductiecursus [*Elements of AI*](https://www.elementsofai.nl/) wordt benoemd dat je AI niet als een zelfstandig naamwoord kunt gebruiken (één AI, twee AI's) maar beter kunt spreken over "mate van AI" met aan de ene kant van het spectrum GOFAI en aan de andere kant moderne cutting-edge AI. 
  > In de jaren 1980 introduceerde de filosoof John Searle, de termen *Weak AI* en *Strong AI*
  Weak AI betekent hier niet dat AI “primitief” of “zwak” is, maar dat het alleen intelligent gedrag simuleert zonder echt bewustzijn of begrip.
  Strong AI verwijst naar het idee dat een AI in principe een echte geest of bewustzijn zou kunnen hebben.
  In de praktijk zijn deze termen verwarrend, omdat weak AI vaak ten onrechte wordt gelijkgesteld aan regelgebaseerde systemen of “simpele AI”. Ook moderne geavanceerde modellen zoals ChatGPT vallen nog steeds onder Searle’s weak AI, zolang ze geen bewustzijn hebben.
  Daarom gebruiken veel onderzoekers tegenwoordig liever de termen narrow AI (AI die specifieke taken kan uitvoeren) en general AI (AI die taken kan uitvoeren zoals een mens).

---

### De ontwikkeling van AI - de drijvende krachten. 

Het woord machine learning is nu al een aantal keer de revue gepasseerd en misschien heb je jezelf afgevraagd wat dat betekent. Dat gaan we in dit gedeelte verder uitleggen. Maar er zijn ook nog een aantal andere kernbegrippen die de aandacht verdienen. 

AI is eigenlijk te groot om in één verhaal te vangen. Toch helpt het om een reis door de tijd te maken in de ontwikkeling van AI en de drijvende krachten die dit mogelijk hebben gemaakt. Door de begrippen in deze ontwikkeling te plaatsen, zie je beter wat ze betekenen, hoe ze zich tot elkaar verhouden en waarom sommige ideeën steeds opnieuw terugkomen. Let op: dit is geen beschrijving van de geschiedenis van AI maar hierin wordt gefocust op belangrijke drijvende krachten die de ontwikkeling van AI heeft mogelijk gemaakt tot wat het vandaag de dag is. 

**1950–1970**

- **Symbolische logica**
In deze periode werd AI vooral gezien als symbolische logica. In symbolische logica (ook wel formele logica genoemd) worden redeneringen weergegeven met symbolen en formele regels. Computers konden hierdoor 'redeneren' met regels die door mensen waren ingevoerd. Grofweg gezegd: als je genoeg regels opschrijft, kan een machine intelligent gedrag vertonen.
  > AI dat gebseerd is op symbolische logica noemen we symbolische AI (ook wel klassieke AI of logisch-gebaseerde AI). In die tijd werkten AI-modellen alleen op basis van deze manier. Later werden deze modellen GOFAI ("Good Old-Fashioned AI") genoemd.  

- **Het idee van neurale netwerken**
In die tijd was er de wens om het menselijk brein na te bootsen. Ons brein bestaat uit miljarden neuronen (zenuwcellen) die signalen doorgeven via verbindingen (synapsen). Elk neuron "vuurt" alleen wanneer het voldoende input krijgt van andere neuronen. Dit simpele principe inspireerde onderzoekers: als je dit in een computer kon nabouwen, zou de machine misschien ook kunnen leren. Later werd dit idee neurale netwerk genoemd. 
Een neuraal netwerk in de AI-context is daarom een systeem van “kunstmatige neuronen” die onderling verbonden zijn. Elke verbinding heeft een gewicht: een getal dat aangeeft hoe sterk een input meetelt. Door de gewichten aan te passen op basis van voorbeelden, kan een netwerk patronen herkennen – zoals letters, geluiden of afbeeldingen.
<br/>

- **De (single-layer) perceptron (1958)**
  In 1958 ontwierp Frank Rosenblatt de (single-layer) perceptron, het eerste werkende neurale netwerk. Het bestond uit één laag artificiele neuronen en kon simpele patronen herkennen. Rosenblatt was optimistisch en voorspelde dat zulke netwerken in de toekomst zouden kunnen leren, beslissingen nemen en zelfs talen vertalen. 

**1970–1980**

- **Expert Systems**
In de jaren ’80 kwamen de eerste Expert Systems: programma’s die kennisbanken met logische regels gebruikten om beslissingen te nemen. Ze werden zelfs gebruikt in de medische wereld, bijvoorbeeld om diagnoses te ondersteunen. Dit leek veelbelovend, maar de beperkingen werden snel duidelijk: systemen waren moeilijk te onderhouden en leerden niet zelf bij. 
<br/>

- **AI-winter**
 Verwachtingen  werden niet waargemaakt. Er brak een periode aan waarin investeringen en enthousiasme voor AI sterk afnam. Zo'n periode wordt ook wel AI-winter genoemd. 

**1980–2010** 

- **De opkomst van Machine Learning**
  De symbolische AI liep vast op problemen zoals waarneming, leren en gezond verstand. Dit maakte duidelijk dat andere benaderingen nodig waren. Er waren een aantal doorbraken die leidden tot de heropleving van neurale netwerken en de bloei van Machine Learning: algoritmen die patronen leren uit data.  


**2010–2017**

- **Doorbraak van Deep Learning**
De grote doorbraak kwam met Deep Learning. Dankzij krachtige GPU’s en enorme hoeveelheden data konden veel diepere neurale netwerken worden getraind. Dit maakte plotseling toepassingen zoals spraakherkenning, beeldherkenning en vertaling bruikbaar in de praktijk.

**2017–nu** 

- **Generatieve AI en Foundation Models**
Met de introductie van de Transformer-architectuur in 2017 werd een nieuwe stap gezet. Dit maakte het mogelijk om modellen te trainen op ongekende schaal, met miljarden parameters en gigantische hoeveelheden tekst en beeld. Dit leidde tot Large Language Models (LLM’s) zoals GPT-4, Claude en Gemini, en tot generatieve AI die tekst, beeld, audio en code kan maken.

📌 Begrippen

Transformer – Neurale netwerk-architectuur (2017) die de basis vormt van moderne AI.

Large Language Model (LLM) – AI-model dat getraind is op enorme hoeveelheden tekst en in staat is om mensachtige taal te begrijpen en te genereren.

Generatieve AI – AI die nieuwe inhoud kan creëren (tekst, beeld, muziek, code) in plaats van alleen herkennen.

Foundation Model – Groot basismodel dat kan worden aangepast (gefine-tuned) voor allerlei specifieke taken.







AAN HET EINDE EEN AANTAL DEFINITIES VAN VERORDENINGEN GEVEN EN VRAGEN WAT DE DEFINITIE ONJUIST MAAKT. 

