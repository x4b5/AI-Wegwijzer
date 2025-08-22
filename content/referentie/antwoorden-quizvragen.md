# Antwoorden Quizvragen - Module 01: Oriënteren

## Quizvraag: Connectionistische vs Symbolische AI

## **Antwoord:** B) Symbolische AI {#antwoord-b-symbolische-ai}

**Waarom?**

**Symbolische AI kenmerken:**
- ✅ **Gebruikt vooraf gedefinieerde regels** - de 500 medische regels
- ✅ **Logische redenering** - "ALS...DAN..." structuur
- ✅ **Kan uitleggen** - geeft reden voor diagnose
- ✅ **Leert niet bij** - blijft bij de oorspronkelijke regels

**Connectionistische AI zou anders werken:**
- ❌ **Zou leren van data** - patronen herkennen in duizenden patiëntdossiers
- ❌ **Geen expliciete regels** - zou zelf patronen ontdekken
- ❌ **Minder uitlegbaar** - moeilijker te verklaren waarom bepaalde diagnose

**Real-world voorbeeld:** Dit is gebaseerd op het MYCIN-systeem uit de jaren '70 dat we in de tekst bespraken - een klassiek voorbeeld van symbolische AI!

---

# Antwoorden Quizvragen - Module 03: Begrijpen

## Quizvraag: Neurale netwerken

## **Antwoord:** C) 7500 verbindingen {#antwoord-c-7500-verbindingen}

**Waarom?**

**Berekening:**
- **Inputlaag → Verborgen laag:** 100 × 50 = 5000 verbindingen
- **Verborgen laag → Outputlaag:** 50 × 10 = 500 verbindingen
- **Totaal:** 5000 + 500 = 7500 verbindingen

**Uitleg:**
In een neuraal netwerk is elke neuron in de ene laag verbonden met elke neuron in de volgende laag. Dit betekent:
- Alle 100 input-neuronen zijn verbonden met alle 50 verborgen neuronen
- Alle 50 verborgen neuronen zijn verbonden met alle 10 output-neuronen
- Elke verbinding heeft een gewicht dat tijdens training wordt aangepast

**Real-world context:** Dit is een relatief klein netwerk. Moderne AI-modellen zoals GPT-3 hebben miljarden verbindingen en gewichten!

