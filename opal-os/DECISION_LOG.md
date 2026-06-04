# DECISION LOG — OPAL SIGNAL

Questo documento registra le decisioni importanti del progetto Opal Signal.

Serve a evitare che le scelte restino disperse nella chat. Ogni decisione dovrebbe chiarire: cosa e' stato deciso, perche', cosa implica e cosa non implica.

## Decisione 001 — GitHub come memoria ufficiale del progetto

Stato: presa.

Decisione: GitHub diventa la memoria ufficiale del progetto Opal Signal.

Motivo: il progetto non deve vivere solo in conversazioni o file sparsi. GitHub conserva codice, documenti, cronologia e versioni.

Implicazione: le decisioni operative rilevanti devono essere trasformate in documenti o modifiche tracciate nel repository.

Non implica: che ogni idea detta in chat debba diventare subito codice.

## Decisione 002 — `opal-os/` come memoria strategica e operativa

Stato: presa.

Decisione: viene creata la cartella `opal-os/` come sistema operativo documentale di Opal Signal.

Motivo: serve un punto stabile dove conservare strategia, roadmap, decisioni e regole operative.

Implicazione: L'Architetto deve proporre aggiornamenti a `opal-os/` quando cambiano priorita', posizionamento o roadmap.

Non implica: che `opal-os/` sostituisca il sito pubblico. E' documentazione interna di governo del progetto.

## Decisione 003 — Codex come esecutore operativo

Stato: presa.

Decisione: Codex viene usato come esecutore nel repository.

Motivo: Codex puo' leggere file, creare branch, modificare documenti/codice, proporre PR e mantenere il lavoro verificabile.

Implicazione: i task devono essere piccoli, chiari e validabili.

Non implica: che Codex decida da solo la strategia di business senza approvazione.

## Decisione 004 — Vercel come sistema di deploy

Stato: presa.

Decisione: Vercel viene usato per pubblicare e verificare il sito.

Motivo: Vercel e' adatto a progetti Next.js e permette preview/deploy automatici collegati a GitHub.

Implicazione: quando il codice viene integrato correttamente, Vercel puo' produrre una versione online o una preview.

Non implica: che ogni deploy sia automaticamente una versione definitiva da comunicare al pubblico.

## Decisione 005 — Stack tecnico iniziale: Next.js, TypeScript, Tailwind

Stato: presa.

Decisione: la base tecnica usa Next.js, TypeScript, Tailwind, App Router e struttura `src/`.

Motivo: e' uno stack moderno, adatto a siti performanti, componenti riutilizzabili e sviluppo progressivo.

Spiegazione semplice:

- Next.js: struttura per costruire siti web moderni.
- TypeScript: JavaScript con controlli piu' rigorosi, utile per ridurre errori.
- Tailwind: sistema per costruire interfacce con classi di stile rapide e coerenti.
- App Router: modo moderno di organizzare pagine e percorsi in Next.js.

Implicazione: le future modifiche al sito dovrebbero rispettare questa architettura.

Non implica: aggiungere librerie nuove senza motivo.

## Decisione 006 — Identita' visuale Opal Signal progressiva

Stato: aggiornata.

Decisione: l'identita' visuale di Opal Signal puo' evolvere in modo progressivo, senza bloccare il progetto su una sola direzione dark-first.

Motivo: durante la Fase 1 il tema chiaro si e' dimostrato piu' leggibile, premium e adatto alla prima homepage reale.

Implicazione: Opal Signal mantiene una direzione tech e premium, con accento cyan e mascotte astratta, ma puo' usare tema chiaro o scuro in base alla funzione della pagina.

Non implica: cambiare identita' a ogni iterazione o usare estetiche incoerenti.

## Decisione 007 — Non creare CRM o SaaS ora

Stato: presa.

Decisione: non si crea CRM e non si crea SaaS nella fase attuale.

Motivo: prima servono homepage reale, offerta chiara, percorso contatti e validazione. Creare un CRM o un SaaS adesso sarebbe overengineering.

Implicazione: eventuali sistemi interni saranno valutati dopo aver chiarito flusso cliente e bisogni reali.

Non implica: rinunciare per sempre a CRM o SaaS.

## Decisione 008 — Chiudere Fase 0 prima della homepage reale

Stato: presa.

Decisione: la Fase 0 viene chiusa come fase di fondamenta prima di costruire la homepage reale.

Motivo: servivano repository, permessi, base tecnica, documentazione, deploy e pipeline prima di lavorare seriamente sul sito.

Implicazione: la homepage reale parte in Fase 1, non viene confusa con la ricostruzione iniziale.

Non implica: che la homepage placeholder sia sufficiente per il mercato.

## Decisione 009 — Procedere per branch e PR

Stato: presa.

Decisione: ogni modifica importante deve passare da branch e pull request.

Motivo: branch e PR permettono controllo, revisione, rollback e memoria delle scelte.

Spiegazione semplice: una branch e' una copia di lavoro separata; una PR e' la richiesta di portare quel lavoro nella versione principale dopo controllo.

Implicazione: non si lavora direttamente su `main` per cambi rilevanti.

Non implica: creare processi pesanti per micro-correzioni banali.

## Decisione 010 — Priorita' successiva: Fase 1 homepage reale

Stato: completata.

Decisione: dopo la chiusura della Fase 0, la priorita' era progettare e costruire la homepage reale di Opal Signal.

Motivo: senza homepage reale non si poteva validare percezione, tono, posizionamento, CTA e chiarezza dell'offerta.

Implicazione: la Fase 1 e' stata completata con PR #4, `Phase 1 homepage`, mergiata su `main`.

Non implica: che il sito sia gia' completo di percorso contatti, legal, dominio o campagne.

## Decisione 011 — Fase 1 chiusa con homepage reale e snella

Stato: presa.

Decisione: la Fase 1 si chiude con una homepage chiara, corta, premium tech e orientata alla comprensione del servizio.

Motivo: la versione approvata comunica meglio il posizionamento e riduce complessita' non necessaria.

Implicazione: la base ora e' sufficiente per passare alla conversione contatti minima.

Non implica: implementare subito `/percorsi`, pricing, CRM, automazioni o blog.

## Decisione 012 — Pagina `/percorsi` rimandata

Stato: presa.

Decisione: la pagina `/percorsi` resta una direzione approvata, ma non viene inclusa nella chiusura Fase 1.

Motivo: la priorita' era completare una homepage reale e credibile senza allargare troppo il perimetro.

Implicazione: `/percorsi` potra' essere valutata in una Fase 1.1 o dopo aver chiarito meglio offerta, contatto e validazione.

Non implica: abbandonare Start, Growth, Enterprise come possibile struttura futura.

## Decisione 013 — Prossima priorita': Fase 2 conversione contatti

Stato: presa.

Decisione: dopo Fase 1 la prossima priorita' consigliata e' Fase 2 — Conversione e acquisizione contatti.

Motivo: ora il sito spiega cosa fa Opal Signal; il prossimo passo e' rendere semplice e misurabile il contatto.

Implicazione: il prossimo blocco deve progettare form, Calendly o soluzione minima equivalente, con attenzione a privacy e legal.

Non implica: attivare campagne, CRM o automazioni avanzate prima di validare il flusso base.
