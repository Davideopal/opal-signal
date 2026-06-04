# ROADMAP — OPAL SIGNAL

Questa roadmap indica l'ordine consigliato delle fasi di Opal Signal.

La regola principale e': avanzare per blocchi piccoli, verificabili e approvati. Non costruire sistemi complessi prima che siano necessari.

## Stato sintetico

```text
Fase 0 = chiusa
Fase 1 = chiusa
Fase 2 = prossima priorita'
Fase 3 = prima di pubblicazione/campagne serie
Fase 4 = quando sito e base trust sono pronti
Fase 5 = dopo validazione sito Opal
Fase 6 = quando il processo cliente richiede ordine interno
Fase 7 = solo quando emergono bisogni ricorrenti da specializzare
```

## Fase 0 — Fondamenta tecniche e documentali

Stato: chiusa.

Scopo: trasformare Opal Signal da idea e chat a progetto tecnico reale.

Output prodotti:

- repository GitHub corretto;
- base Next.js;
- TypeScript;
- Tailwind;
- App Router;
- struttura `src/`;
- componenti UI base;
- documentazione iniziale;
- deploy Vercel funzionante;
- pipeline ChatGPT -> Codex -> GitHub -> Vercel;
- cartella `opal-os/` come memoria strategica e operativa.

Criterio di completamento: main popolato, PR #1 mergiata, deploy Vercel riuscito, base documentale iniziale disponibile.

## Fase 1 — Homepage reale Opal Signal

Stato: chiusa.

Scopo: trasformare la homepage placeholder in una homepage strategica, chiara e presentabile.

Output prodotti:

- homepage reale in italiano;
- hero con messaggio orientato alla scelta da parte dei clienti giusti;
- Signal Map nella hero;
- sezioni problema, servizi, metodo, differenza, CTA e FAQ;
- tema chiaro, premium tech e leggibile;
- logo Opal in navbar;
- mascotte Opal come elemento di sfondo sobrio;
- CTA anchor verso metodo e contatti;
- SEO metadata base;
- PR #4 mergiata su `main`;
- deploy Vercel verificato.

Cosa non e' stato fatto:

- pagina `/percorsi`;
- pricing pubblico;
- CRM;
- dashboard;
- blog dinamico;
- newsletter;
- database;
- automazioni;
- legal layer completo.

Criterio di completamento: homepage approvata, lint e build passati, preview Vercel verificata, PR #4 mergiata su `main`.

## Fase 2 — Conversione e acquisizione contatti

Stato: prossima priorita'.

Scopo: trasformare il sito da presenza online a punto di acquisizione contatti.

Cosa verra' fatto:

- scelta del percorso contatti minimo;
- valutazione tra Calendly, form semplice o soluzione ibrida;
- CTA piu' operative;
- messaggio di conferma;
- eventuale thank-you flow minimo;
- controllo base privacy prima di raccogliere dati personali.

Cosa avremo in mano:

- sito capace di ricevere richieste;
- percorso minimo da visitatore a contatto;
- base per capire se il messaggio genera interesse reale.

Cosa non fare in questa fase:

- CRM complesso;
- automazioni multilivello;
- funnel avanzati senza dati;
- tracciamenti o pixel senza informativa adeguata.

## Fase 3 — Legal e trust layer

Stato: futura.

Scopo: rendere il sito piu' solido, sicuro e presentabile.

Cosa verra' fatto:

- Privacy Policy;
- Cookie Policy;
- banner cookie se necessario;
- informativa contatti;
- eventuale disclosure Meta Pixel;
- revisione testi sensibili.

Cosa avremo in mano:

- base piu' sicura per pubblicazione, traffico e campagne.

Cosa non fare in questa fase:

- improvvisare testi legali delicati;
- attivare tracciamenti senza informativa adeguata.

## Fase 4 — Dominio e pubblicazione

Stato: futura.

Scopo: rendere Opal Signal accessibile e condivisibile con un indirizzo ufficiale.

Cosa verra' fatto:

- collegamento dominio;
- deploy stabile;
- verifica mobile e desktop;
- controllo performance base;
- controllo link e CTA;
- verifica finale pre-pubblicazione.

Cosa avremo in mano:

- sito online presentabile e condivisibile.

Cosa non fare in questa fase:

- pubblicare come definitivo un sito privo di percorso contatti e legal minimo;
- aggiungere feature non necessarie solo per "completare".

## Fase 5 — Template clienti

Stato: futura.

Scopo: trasformare l'esperienza del sito Opal in un sistema replicabile per clienti.

Cosa verra' fatto:

- OPAL-TEMPLATE;
- sezioni riutilizzabili;
- struttura base per siti cliente;
- checklist di personalizzazione;
- criteri minimi di qualita'.

Cosa avremo in mano:

- prima base della fabbrica di siti e funnel per professionisti.

Cosa non fare in questa fase:

- creare template prima di validare sito, messaggio e processo Opal;
- rendere il sistema troppo astratto.

## Fase 6 — Workflow agency

Stato: futura.

Scopo: rendere operativo il sistema interno dell'agenzia.

Cosa verra' fatto:

- processo cliente;
- brief;
- checklist operative;
- gestione minima dei task;
- eventuale Notion o CRM leggero;
- automazioni leggere solo dove riducono lavoro reale.

Cosa avremo in mano:

- sistema minimo per gestire clienti, richieste e produzione.

Cosa non fare in questa fase:

- costruire un CRM custom prima che serva;
- automatizzare processi non ancora stabili.

## Fase 7 — Skill specialistiche

Stato: futura.

Scopo: creare o attivare competenze AI specialistiche solo quando il progetto e' pronto.

Possibili output:

- Meta Ads Strategist;
- SEO Content Architect;
- Opal Strategist;
- specialisti per audit, copy, funnel o onboarding.

Cosa avremo in mano:

- team AI piu' specializzato;
- delega piu' precisa;
- migliore qualita' dei task ripetibili.

Cosa non fare in questa fase:

- creare skill per entusiasmo;
- aggiungere specialisti prima di sapere quali problemi si ripetono.

## Regola di aggiornamento roadmap

La roadmap va aggiornata quando:

- una fase viene chiusa;
- cambia la priorita' del progetto;
- viene aggiunta o rimossa una fase;
- una decisione strategica modifica l'ordine di esecuzione;
- emergono vincoli tecnici, legali o commerciali importanti.

Quando succede, L'Architetto deve proporre se aggiornare `ROADMAP.md`, `DECISION_LOG.md`, `STRATEGIC_MEMORY.md` o un altro file dentro `opal-os/`.
