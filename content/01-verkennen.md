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
- De geschiedenis van AI in vogelvlucht

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
Na het onderzoeken van bestaande AI-definities en zijn kritiek daarop, probeert Weitzel in [zijn artikel](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5154389&utm_source=chatgpt.co) een betere omschrijving te geven, al benadrukt hij dat AI nooit volledig in één perfecte definitie te vangen is. De volgende definitie ziet hij dan ook als een verbetering ten opzichte van de meeste: 
- **Een computerprogramma** dat gebruikmaakt van 
- **machine learning-technieken** om 
- **complexe doelen** te bereiken die normaal gesproken 
- **menselijke intelligentie** vereisen.

Weitzel legt vervolgens uit dat door het woord *computerprogramma* te gebruiken, bredere woorden als *systeem* kunnen worden uitgesloten.
Door te zeggen dat het om *machine-learning* gaat, worden minder krachtige logica-gebaseerde technieken/methoden uitgesloten.
Weitzel erkent dat het idee dat de doelen "menselijke intelligentie" vereisen, wat vaag blijft, maar het helpt om simpele programma's uit te sluiten.  

Nu zal niet iedere expert het eens zijn met de definitie van Weitzel want AI-systemen van vóór de jaren '90 (beter bekend als [*GOFAI*](https://en.wikipedia.org/wiki/GOFAI)) worden uitgesloten. Er was nog geen sprake van machine learning maar door het toepassen van de combinatie van regels (conditional statements), een kennisbank, een redeneermachine, een werkgeheugen en een gebruikersinterface lieten deze [regelgebaseerde modellen](https://www.geeksforgeeks.org/artificial-intelligence/rule-based-system-in-ai/) toch een bepaalde mate van intelligent gedrag zien.
  > [*MYCIN*](referentie/begrippenlijst.md) (begin jaren ’70, Stanford) was een regelgebaseerd expertsysteem dat artsen hielp bij het diagnosticeren van bacteriële infecties en het aanbevelen van antibiotica. Het werkte met een kennisbank van ~600 regels en redeneerde via backward chaining (terugredeneren vanuit een mogelijke conclusie). 
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

### De geschiedenis van AI in vogelvlucht. 

Het woord machine learning heeft nu al een aantal keer de revue gepasseerd. Maar wat houdt dat in? Dat gaan we in dit gedeelte verder uitleggen. Maar er zijn ook nog een aantal andere kernbegrippen die de aandacht verdienen. 

AI is eigenlijk te groot om in één verhaal te vangen. Toch helpt het om een reis door de tijd te maken. Door de begrippen in hun historische context te plaatsen, zie je beter wat ze betekenen, hoe ze zich tot elkaar verhouden en waarom sommige ideeën steeds opnieuw terugkomen.

Stap in de tijdmachine en laten we teruggaan naar de jaren '40 van de vorige eeuw. 

**De geboorte van het idee (1950–1970)**

De wortels van kunstmatige intelligentie liggen in de jaren ’50. Alan Turing stelde in 1950 de beroemde vraag: “Kunnen machines denken?” Hij bedacht de Turingtest als criterium: als een mens in een gesprek niet kan onderscheiden of hij met een machine of een mens praat, is de machine intelligent.

In 1956 kreeg het veld officieel een naam: tijdens de Dartmouth-conferentie werd de term Artificial Intelligence geïntroduceerd. Onderzoekers geloofden dat menselijke intelligentie in principe volledig te beschrijven was in regels en logica.

Dit leidde tot wat later GOFAI (Good Old-Fashioned AI) genoemd werd. Het draaide om symbolische systemen: kennis werd vastgelegd in regels (als A, dan B), en de computer volgde deze stap voor stap. In de jaren ’70 en ’80 werden deze systemen steeds groter en beter: zogenaamde expert systems konden bijvoorbeeld medische diagnoses stellen of technische problemen analyseren.

Maar GOFAI had duidelijke grenzen:

- Het was kwetsbaar: zodra een situatie buiten de regels viel, liep het systeem vast.

- Het was star: het leerde niet bij van ervaring, alles moest handmatig worden geprogrammeerd.

**De eerste golf van leren: Machine Learning (1980–2000)**

Onderzoekers beseften dat een systeem flexibeler zou moeten zijn: niet alles kan vooraf worden vastgelegd. Dit leidde tot de opkomst van Machine Learning (ML).

In plaats van regels te programmeren, wordt een systeem gevoed met data. Het model leert daaruit patronen herkennen: van simpele regressie en beslisbomen tot complexere statistische modellen.

Belangrijke verschuivingen:

- AI werd empirischer: niet meer alleen logica, maar ook wiskunde en kansberekening.

- Er kwamen neurale netwerken (geïnspireerd door de werking van hersenen), maar deze bleven beperkt door rekenkracht en gebrek aan data.

In deze periode ontstonden ook de eerste AI-winters. Verwachtingen waren hoog, maar de techniek leverde niet wat men hoopte. Toch werden in stilte de fundamenten gelegd voor de doorbraken van later.

**Neurale netwerken en de terugkeer van een oud idee (2000–2010)**

Neurale netwerken zijn eigenlijk een oud idee (al uit de jaren ’50), maar kregen rond de eeuwwisseling een tweede leven. Met snellere computers en grotere datasets bleek dat deze netwerken krachtiger waren dan gedacht.

Ze bestaan uit lagen van neuronen die signalen doorgeven en versterken of verzwakken.

Door training met data passen ze zich automatisch aan.

In tegenstelling tot GOFAI konden ze leren van ervaring.

Nog was hun schaal beperkt – tot rond 2010 een nieuwe doorbraak kwam: Deep Learning.

**Deep Learning en de grote doorbraak (2010–2018)**

Deep Learning is een vorm van machine learning die gebruikmaakt van neurale netwerken met veel lagen (deep neural networks). Dankzij GPU’s (grafische processors) en enorme hoeveelheden data werden ze ineens extreem krachtig.

Doorbraken volgden elkaar snel op:

- Beeldherkenning werd spectaculair beter (ImageNet-competitie, 2012).

- Spraakassistenten als Siri en Google Assistant kwamen op de markt.

- Vertaalmachines werden betrouwbaarder.

- Voor het eerst begon AI door te dringen in het dagelijks leven. Dit was de start van de huidige revolutie.

**Foundation Models, LLM’s en Generatieve AI (2018–nu)**

Een echte gamechanger kwam met de introductie van transformers (2017). Deze architectuur maakte het mogelijk om modellen op ongekende schaal te trainen.

Zo ontstonden de Foundation Models: enorme AI-systemen die op gigantische hoeveelheden tekst, beeld of code werden getraind. Voorbeelden: GPT (OpenAI), BERT (Google) en Stable Diffusion.

Binnen deze categorie vallen de Large Language Models (LLM’s), die specifiek met tekst werken.

Wat zijn LLM’s? Gigantische neurale netwerken die getraind zijn op enorme hoeveelheden tekst.

Hoe werken ze? Ze voorspellen steeds het volgende woord in een zin en leren zo vloeiende, coherente taal produceren.

Waarom belangrijk? Ze maken generatieve AI breed toegankelijk: van ChatGPT tot Gemini en Claude.

Kenmerken van foundation models en LLM’s:

- Ze zijn generiek: breed toepasbaar op allerlei taken.

- Ze zijn generatief: ze kunnen zelf nieuwe tekst, beelden of muziek produceren.

- Ze zijn fijn-afstelbaar: met beperkte extra training inzetbaar in specifieke domeinen.

Dit maakte de weg vrij voor AI die voor iedereen toegankelijk is, niet alleen voor onderzoekers of techbedrijven.

**Naar de toekomst: agents en AGI**

Vandaag werken onderzoekers aan AI-agents: systemen die niet alleen antwoorden geven, maar ook zelfstandig acties ondernemen, tools gebruiken en informatiebronnen raadplegen. Een voorbeeld is RAG (Retrieval-Augmented Generation): een techniek waarbij AI actuele informatie ophaalt en combineert met eigen kennis.

Toch bevinden we ons nog steeds in het tijdperk van narrow AI: systemen die uitblinken in specifieke taken, maar geen menselijk bewustzijn of algemene intelligentie hebben. De term AGI (Artificial General Intelligence) verwijst naar een toekomstig systeem dat wél over zulke brede capaciteiten beschikt.
En de overtreffende trap is ASI (Artificial Super Intelligence). In dit geval kan het systeem zichzelf verbeteren, zelfstandig beslissingen maken en valt het denken buiten het begrip van de mens.  

> "Superintelligentie kan onze grootste prestatie zijn, maar ook de laatste." – Stephen Hawking








AAN HET EINDE EEN AANTAL DEFINITIES VAN VERORDENINGEN GEVEN EN VRAGEN WAT DE DEFINITIE ONJUIST MAAKT. 

