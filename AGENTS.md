# Regole del sito innovagroupservice.eu

Valgono per chiunque modifichi il sito: persone, Claude, l'agente di Netlify o altri strumenti.
Prima di aggiungere qualcosa si guarda come sono fatte le pagine che esistono già e si riusa lo stesso modello. Una pagina o una sezione nuova deve sembrare fatta dalla stessa mano delle altre.

## 1. Marchio

- Il logo è uno solo: quattro quadratini arrotondati ruotati di -7° (alto a sinistra e basso a destra arancioni `#e65329`, gli altri due bianchi), accanto la scritta **INNOVA** e sotto **GROUP SERVICE SRL** con SERVICE in arancione.
- Codice da copiare (pagine fotovoltaico):

```html
<a class="brand" href="/" aria-label="Innova Group Service Home"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span>INNOVA<small>GROUP <span class="brand-service" style="color:var(--orange)">SERVICE</span> SRL</small></span></a>
```

- Vietato usare altri simboli (▦, cerchi, icone) o scrivere il nome senza il simbolo.

## 2. Colori e caratteri

- Blu notte: `#111e2b`, `#0b1723`; sfondo scuro a gradiente `#0b1825 → #162b3d`.
- Arancione: `#f1663b` (al passaggio del mouse `#e5572d`).
- Chiari: crema `#f6f5f1` e `#f4f2ec`, beige `#edeae2`; bordi `#dfdfd9`.
- Testi: `#0d1721` / `#112434`, testo secondario `#66717b`.
- Titoli in **Manrope 800** con spaziatura stretta; testi in **DM Sans**. Si caricano da Google Fonts con lo stesso link delle altre pagine. Mai font di sistema (Arial, system-ui).

## 3. Testata, menu e piè di pagina

- Testata: logo a sinistra, menu a destra; sul telefono il menu si apre con ☰.
- Menu principale (home e pagine interne), sempre su **una riga**, massimo 8 voci:
  Azienda · Robotica · Progetti · AI per le aziende · Fotovoltaico · Energia & Terreni · Prodotti petroliferi · Partner.
- Una pagina nuova **non** si aggiunge al menu in alto: va nell'elenco dei pulsanti in fondo alla home (`nav#sezioni`) o dentro la sezione della home a cui appartiene.
- Pagine fotovoltaico (`fotovoltaico-aziende.html`, `fotovoltaico-casa.html`, `controllo-impianto.html`): il modello è `controllo-impianto.html`, con lo stesso blocco `<style>` e questo menu:
  Home · Azienda · Fotovoltaico aziende · Fotovoltaico casa · Controllo impianto · Energia & Terreni · Contatti.
- Piè di pagina sempre con i dati societari completi:
  `© 2026 Innova Group Service SRL · Sede legale: Via Bisalta 15, 12010 Cervasca (CN) · P.IVA e C.F. 04125520041 · REA CN-337691 · Sede operativa: Via del Pino 11, 12100 Cuneo · info@innovagroupservice.eu`

## 4. Come sono fatte le sezioni

- Etichetta piccola, arancione, maiuscola e numerata (`01 / LE SOLUZIONI`), poi titolo grande in Manrope con la seconda parte in arancione, poi un testo breve grigio.
- Si alternano sfondi scuri (blu notte) e chiari (crema). I moduli di richiesta stanno su sfondo arancione.
- Schede: bianche con bordo sottile, oppure blu notte; angoli 8px; il link è in basso, separato da una linea, con il quadratino al posto della freccia.
- Bottoni rettangolari: arancione pieno, oppure bordo bianco su fondo scuro. Testo 12px, grassetto.
- Niente frecce decorative (→ ← ‹ ›) né emoji nei testi e nei bottoni. Se serve un'icona si usa un SVG a linee.
- Disegni: illustrazioni a linee nello stile del sito (robot, pannelli, mappa). Foto di repertorio solo nella pagina dedicata, mai in home, e con la nota "fotografie illustrative".

## 5. La home

Ordine fisso: apertura con il robot → barra dei numeri → **Fotovoltaico** (tre schede: aziende con conto alla rovescia, casa, controllo impianto) → mappa "Dall'Italia, verso il mondo" → Progetti concreti → Metodo → Esperienza → Contatto → pulsanti delle sezioni → modulo → piè di pagina.

- La home mostra anteprime; i dettagli stanno nelle pagine dedicate.
- Niente fasce nuove tra l'apertura e la barra dei numeri.
- Un servizio nuovo diventa una scheda dentro una sezione esistente, non una fascia in più.
- Le correzioni di stile della home stanno nel blocco `<style id="home-ordine-2026-11">`: si aggiunge lì, non si crea un altro blocco.

## 6. Moduli

- Netlify Forms: `data-netlify="true"`, `netlify-honeypot="bot-field"`, `action="/grazie.html"`, campo nascosto `form-name`.
- Non cambiare il nome di un modulo esistente, altrimenti le richieste finiscono in un modulo nuovo su Netlify.
- Nei moduli fotovoltaico: casella del consenso obbligatoria e link a `privacy-fotovoltaico.html`.

## 7. Lingue

- Home e pagine principali hanno IT / FR (e in parte EN) con gli attributi `data-i18n`. Le pagine fotovoltaico sono solo in italiano.

## 8. Prima di pubblicare

1. Guardare la pagina sul computer (1366px) e sul telefono (390px).
2. Controllare: logo giusto, menu su una riga, nessun elemento sovrapposto a testi o bottoni, piè di pagina completo.
3. Lavorare su un ramo e pubblicare con una richiesta di unione (pull request), descrivendo cosa cambia.
