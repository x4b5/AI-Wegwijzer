# 3. BEGRIJPEN – Onder de motorkap

---
**Datum:** 2025-08-18  
**Laatste wijziging:** 2025-08-19  

---
**Leerdoel**  
In deze module leer je hoe AI-systemen werken en welke technieken en principes de basis vormen van kunstmatige intelligentie.  

---
**Inhoud**  
- [Hoe leert een algoritme?](#hoe-leert-een-algoritme)  
- [Neurale netwerken in simpele taal](#neurale-netwerken-in-simpele-taal)  
- [Data en training](#data-en-training)  
- [Generatieve AI: hoe werkt een taalmodel?](#generatieve-ai-hoe-werkt-een-taalmodel)  
- [Beperkingen en valkuilen van AI](#beperkingen-en-valkuilen-van-ai)  

---
### Hoe leert een algoritme?  
AI-algoritmen leren door patronen te herkennen in data. Er zijn drie hoofdmethoden waarop een algoritme kan leren:  

1. **Supervised learning**  
   - Bij deze methode wordt het algoritme getraind met gelabelde data. Dit betekent dat de inputdata al een bijbehorend correct antwoord heeft.  
   - **Voorbeeld**: Een model leert afbeeldingen van katten en honden te onderscheiden door duizenden voorbeelden te zien met labels "kat" of "hond".  

2. **Unsupervised learning**  
   - Hier wordt het algoritme getraind met niet-gelabelde data. Het model moet zelf patronen en structuren ontdekken.  
   - **Voorbeeld**: Een model groepeert klanten op basis van koopgedrag zonder vooraf te weten welke groepen er zijn.  

3. **Reinforcement learning**  
   - Het algoritme leert door beloningen of straffen te ontvangen voor acties die het uitvoert in een omgeving.  
   - **Voorbeeld**: Een AI leert een spel te spelen door punten te verdienen voor goede zetten en punten te verliezen voor slechte zetten.  

---
### Neurale netwerken in simpele taal  
Een neuraal netwerk is een systeem dat is geïnspireerd door het menselijk brein. Het bestaat uit lagen van "neuronen" die met elkaar verbonden zijn.  

- **Neuronen**: Elk neuron ontvangt input, verwerkt deze en stuurt een output naar het volgende neuron.  
- **Lagen**: Een neuraal netwerk heeft meestal drie soorten lagen:  
  1. **Inputlaag**: Ontvangt de ruwe data (bijvoorbeeld een afbeelding).  
  2. **Verborgen lagen**: Verwerken de data door patronen te herkennen.  
  3. **Outputlaag**: Geeft het resultaat (bijvoorbeeld "kat" of "hond").  
- **Gewichten**: Elke verbinding tussen neuronen heeft een gewicht dat bepaalt hoe belangrijk de input is. Tijdens het trainen worden deze gewichten aangepast om betere voorspellingen te maken.  

---
### Data en training  
De kwaliteit van een AI-model hangt sterk af van de data waarmee het wordt getraind.  

1. **Bias in data**  
   - Als de trainingsdata bevooroordeeld is, zal het model ook bevooroordeeld zijn.  
   - **Voorbeeld**: Een gezichtsherkenningsmodel dat alleen met foto's van lichte huidtinten is getraind, presteert slecht op foto's van donkere huidtinten.  

2. **Overfitting en underfitting**  
   - **Overfitting**: Het model leert de trainingsdata te goed, inclusief ruis en uitzonderingen, en presteert slecht op nieuwe data.  
   - **Underfitting**: Het model leert de trainingsdata niet goed genoeg en mist belangrijke patronen.  

3. **Training, validatie en testdata**  
   - **Trainingdata**: Wordt gebruikt om het model te trainen.  
   - **Validatiedata**: Wordt gebruikt om het model te evalueren tijdens het trainen.  
   - **Testdata**: Wordt gebruikt om de prestaties van het model te meten na het trainen.  

---
### Generatieve AI: hoe werkt een taalmodel?  
Generatieve AI-modellen, zoals GPT, werken door patronen in tekstdata te leren en deze te gebruiken om nieuwe tekst te genereren.  

1. **Training**  
   - Het model wordt getraind op enorme hoeveelheden tekstdata, zoals boeken, artikelen en websites.  
   - Het leert welke woorden vaak samen voorkomen en in welke volgorde.  

2. **Transformer-architectuur**  
   - Moderne taalmodellen gebruiken de [Transformer](referentie/begrippenlijst.md#transformer)-architectuur.  
   - Deze architectuur maakt gebruik van "self-attention", waardoor het model kan bepalen welke woorden in een zin belangrijk zijn in relatie tot andere woorden.  

3. **Genereren van tekst**  
   - Wanneer je een prompt invoert, voorspelt het model woord voor woord wat het meest waarschijnlijk volgt, gebaseerd op wat het heeft geleerd tijdens de training.  

---
### Beperkingen en valkuilen van AI  
Hoewel AI krachtig is, heeft het ook beperkingen:  

1. **Black box-probleem**  
   - Veel AI-modellen, zoals neurale netwerken, zijn moeilijk te begrijpen. Het is vaak onduidelijk waarom een model een bepaalde beslissing neemt.  

2. **Bias en discriminatie**  
   - Als de trainingsdata bevooroordeeld is, kan het model discriminerende resultaten opleveren.  

3. **Overmatig vertrouwen**  
   - Gebruikers kunnen te veel vertrouwen op AI, zelfs als het model fouten maakt.  

4. **Beperkte generalisatie**  
   - AI-modellen presteren vaak goed op taken waarvoor ze zijn getraind, maar kunnen falen in nieuwe situaties.  

5. **Kosten en energieverbruik**  
   - Het trainen van grote AI-modellen vereist veel rekenkracht en energie, wat kostbaar en milieubelastend is.  

---
### Conclusie  
In deze module hebben we geleerd hoe AI-systemen werken, van de basisprincipes van leren tot de werking van neurale netwerken en generatieve AI. Hoewel AI veel mogelijkheden biedt, is het belangrijk om de beperkingen en valkuilen te begrijpen om het verantwoord en effectief te gebruiken.