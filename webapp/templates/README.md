# 🧱 Template Tekstblokken - AI-Wegwijzer

## 📖 Overzicht

Dit template bevat alle herbruikbare content blokken voor AI-Wegwijzer. Elk blok is ontworpen als een herbruikbaar tekstblok dat je kunt kopiëren en aanpassen voor nieuwe content.

## 🎯 Beschikbare Blokken

### 1. 📋 Opdracht Blok (`.task`)
- **Gebruik**: Voor praktische opdrachten en stappen
- **Kleur**: Groen met groene linkerborder
- **Icoon**: Opdracht (`opdracht.png`)
- **Inhoud**: Titel, instructie, uitleg, optionele knop

### 2. ❓ Quiz Blok (`.quiz`)
- **Gebruik**: Voor quizvragen en kennisvragen
- **Kleur**: Rood met rode linkerborder
- **Icoon**: Quizvraag (`quizvraag.png`)
- **Inhoud**: Vraag, 4 antwoord opties, denk-opdracht

### 3. 📚 Trivia/Weetjes Blok (`.trivia`)
- **Gebruik**: Voor interessante feiten en achtergrondinformatie
- **Kleur**: Oranje met oranje linkerborder
- **Icoon**: Boekenwurm (`boekenwurm.png`)
- **Inhoud**: Klikbare titel, verborgen content

### 4. 💡 Belangrijke Informatie Blok (`.important`)
- **Gebruik**: Voor essentiële informatie en waarschuwingen
- **Kleur**: Blauw met blauwe linkerborder
- **Icoon**: Vinkje in cirkel (SVG)
- **Inhoud**: Titel, uitgebreide uitleg

### 5. ℹ️ Informatie Blok (`.info`)
- **Gebruik**: Voor algemene informatie en definities
- **Kleur**: Paars met paarse linkerborder
- **Icoon**: Informatie i in cirkel (SVG)
- **Inhoud**: Titel, uitleg van concepten

## 🔧 Hoe te Gebruiken

### Stap 1: Blok Kopiëren
1. Open `template-tekstblokken.html`
2. Zoek het gewenste blok type
3. Kopieer de HTML code

### Stap 2: Inhoud Aanpassen
1. Vervang `[Titel]` met je eigen titel
2. Vervang `[Beschrijving]` met je eigen tekst
3. Pas de iconen aan indien nodig
4. Voeg eventuele extra elementen toe

### Stap 3: CSS Classes
Zorg ervoor dat je de juiste CSS classes gebruikt:
- `.content-block` - Basis styling
- `.task`, `.quiz`, `.trivia`, `.important`, `.info` - Specifieke styling

## 📁 Benodigde Bestanden

### Iconen
- `../img/icons/opdracht.png` - Voor opdrachten
- `../img/icons/quizvraag.png` - Voor quizvragen
- `../img/icons/boekenwurm.png` - Voor trivia
- `../img/icons/lumo.png` - Voor Lumo knoppen
- `../img/icons/uitroepteken.png` - Voor belangrijke info (optioneel)

### CSS
Alle CSS is al inbegrepen in het template bestand.

### JavaScript
Voor trivia blokken heb je de `toggleTrivia()` functie nodig.

## ✨ Voorbeelden van Gebruik

### Opdracht Blok
```html
<div class="content-block task">
    <div class="icon">
        <img src="../img/icons/opdracht.png" alt="Opdracht" width="50" height="40">
    </div>
    <div class="content-text">
        <strong>1. Maak een account aan</strong><br>
        Ga naar de website en klik op "Registreren"
        
        <div class="prompt-box">
            <strong>Account:</strong> Een account geeft je toegang tot alle functies
        </div>
    </div>
</div>
```

### Quiz Blok
```html
<div class="content-block quiz">
    <div class="icon">
        <!-- Quiz icoon SVG -->
    </div>
    <div class="content-text">
        <strong>Quizvraag</strong><br><br>
        <strong>Vraag:</strong> Wat is machine learning?<br><br>
        <strong>A)</strong> Een soort computer<br>
        <strong>B)</strong> Een algoritme dat leert van data<br>
        <strong>C)</strong> Een programmeertaal<br>
        <strong>D)</strong> Een database<br><br>
        <em>Denk na over je antwoord!</em>
    </div>
</div>
```

## 🎨 Aanpassingen

### Nieuwe Blok Types Toevoegen
1. Voeg nieuwe CSS class toe (bijv. `.warning`)
2. Kies een kleur en border
3. Maak een voorbeeld in het template
4. Documenteer in deze README

### Iconen Aanpassen
- Vervang `<img>` tags met nieuwe iconen
- Pas SVG iconen aan in de code
- Behoud de afmetingen (50x40 voor PNG, 24x24 voor SVG)

## 📝 Best Practices

1. **Consistentie**: Gebruik altijd dezelfde structuur
2. **Toegankelijkheid**: Zorg voor goede alt-teksten bij iconen
3. **Responsiviteit**: Test op verschillende schermformaten
4. **Performance**: Optimaliseer afbeeldingen
5. **Onderhoud**: Houd het template up-to-date

## 🚀 Volgende Stappen

1. **Test het template** op verschillende pagina's
2. **Verzamel feedback** van gebruikers
3. **Voeg nieuwe blok types toe** indien nodig
4. **Maak een icon library** met alle beschikbare iconen
5. **Documenteer use cases** voor elk blok type

---

**Gemaakt voor AI-Wegwijzer** - Een modulaire aanpak voor consistente, herbruikbare content!
