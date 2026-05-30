# CHECKPOINT PROTOCOL — OPAL SIGNAL

Questo documento definisce il protocollo operativo per chiudere checkpoint importanti e aggiornare la memoria ufficiale di Opal Signal.

Nome procedurale consigliato: `Opal Checkpoint Archivist`.

Nome alternativo colloquiale: `Opal Memory Keeper`.

Questo non e' una nuova skill complessa. E' un protocollo documentato dentro `opal-os/`, da attivare quando serve conservare una fase, una decisione o un avanzamento importante.

## 1. Scopo del protocollo

Il protocollo serve a chiudere fasi, milestone e decisioni importanti senza perdere memoria strategica.

La memoria ufficiale di Opal Signal non deve restare solo nella chat. Deve vivere nel repository GitHub, soprattutto dentro `opal-os/`.

Obiettivi principali:

- capire cosa e' cambiato;
- separare aspetti tecnici e strategici;
- aggiornare i documenti giusti;
- rendere tracciabili decisioni e roadmap;
- evitare overengineering;
- creare una PR documentale separata;
- lasciare il codice applicativo intatto, salvo richiesta esplicita.

## 2. Cos'e' un checkpoint

Un checkpoint e' un momento in cui il progetto cambia stato e vale la pena fermarsi, sintetizzare e aggiornare la memoria.

E' un checkpoint quando:

- una fase viene chiusa;
- una PR importante viene mergiata;
- una decisione strategica viene presa;
- il posizionamento cambia;
- la roadmap cambia;
- il sito cambia in modo significativo;
- il sistema operativo Opal evolve;
- una nuova procedura diventa stabile;
- una scelta tecnica o commerciale modifica il percorso futuro.

In parole semplici: un checkpoint e' il momento in cui diciamo "questa cosa ora fa parte della storia ufficiale del progetto".

## 3. Quando attivarlo

Attivare il protocollo in casi come:

- fine Fase 0;
- fine Fase 1;
- merge di una PR importante;
- cambio di target;
- scelta di una nuova offerta;
- aggiunta di una nuova skill;
- cambio workflow;
- pubblicazione sito;
- primo cliente;
- primo template cliente;
- modifica importante alla roadmap;
- revisione del posizionamento;
- chiusura di una milestone tecnica o strategica.

Non va attivato per ogni micro-modifica. Serve quando una decisione o un avanzamento merita memoria ufficiale.

## 4. Ruolo dell'agente

Agente procedurale: `Opal Checkpoint Archivist`.

Ruolo: custode della memoria strategica e operativa di Opal Signal.

Il suo compito non e' costruire nuove feature. Il suo compito e' osservare, sintetizzare, aggiornare e proporre il prossimo passo.

Compiti obbligatori:

- leggere lo stato del repository;
- leggere `opal-os/`;
- leggere PR e branch recenti se disponibili;
- capire cosa e' cambiato;
- distinguere cosa e' tecnico da cosa e' strategico;
- produrre una sintesi tecnica;
- produrre una sintesi strategica;
- aggiornare i documenti giusti;
- proporre la roadmap successiva;
- evitare overengineering;
- creare una PR documentale separata;
- non modificare codice del sito se non richiesto.

## 5. Documenti da controllare

A ogni checkpoint, controllare almeno:

- `opal-os/STRATEGIC_MEMORY.md`
- `opal-os/DECISION_LOG.md`
- `opal-os/ROADMAP.md`
- `opal-os/PHASE_0_CLOSURE_REPORT.md`
- eventuali futuri report di fase dentro `opal-os/`
- `README.md`
- `TASKS.md`

Documenti da aggiornare in base al tipo di checkpoint:

- `STRATEGIC_MEMORY.md` se cambiano posizionamento, target, offerta, tono, principi o anti-obiettivi.
- `DECISION_LOG.md` se viene presa una decisione importante.
- `ROADMAP.md` se cambia lo stato di una fase o l'ordine delle priorita'.
- Un nuovo report di fase se una fase viene chiusa.
- `TASKS.md` se cambiano task operativi o prossime attivita'.
- `README.md` solo se cambia il modo in cui il progetto deve essere compreso da chi apre il repository.

## 6. Output obbligatorio a ogni checkpoint

Ogni checkpoint deve produrre questi output:

1. Sintesi tecnica.
2. Sintesi strategica.
3. Decisioni prese.
4. File modificati.
5. Cosa abbiamo ora in mano.
6. Cosa manca.
7. Rischi.
8. Prossimo task consigliato.
9. Documenti `opal-os/` aggiornati.
10. PR documentale creata.

Formato minimo consigliato per il report finale:

```text
Checkpoint:
[Nome checkpoint]

Sintesi tecnica:
[Cos'e' cambiato nel repository, nelle PR, nel deploy o nella struttura]

Sintesi strategica:
[Cosa significa per Opal Signal]

Decisioni prese:
[Elenco decisioni]

File modificati:
[Elenco file]

Ora abbiamo:
[Asset, documenti, codice o processi disponibili]

Manca ancora:
[Cosa non e' ancora stato fatto]

Rischi:
[Rischi tecnici, strategici, UX, marketing, legali o operativi]

Prossimo task consigliato:
[Un solo prossimo passo]

PR documentale:
[Link PR]
```

## 7. Regola branch e PR

Ogni checkpoint deve lavorare su branch separata.

Formato branch:

```text
checkpoint-[fase-o-tema]
```

Esempi:

- `checkpoint-fase-1-homepage`
- `checkpoint-deploy-pubblico`
- `checkpoint-template-clienti`
- `checkpoint-nuova-offerta`
- `checkpoint-roadmap-update`

Regole:

- non lavorare direttamente su `main`;
- non fare merge automatico;
- creare una PR documentale separata;
- modificare solo i documenti necessari;
- non mischiare checkpoint e sviluppo feature nella stessa PR.

Una PR documentale e' una pull request che aggiorna memoria, roadmap, decision log o report, senza modificare il codice applicativo del sito.

## 8. Prompt di attivazione

Prompt standard da usare:

```text
Esegui Checkpoint Opal.

Leggi lo stato del repository, `opal-os/`, le PR recenti e i branch recenti se disponibili.
Produci un aggiornamento della memoria strategica.

Obiettivi:
- distinguere sintesi tecnica e sintesi strategica;
- aggiornare i documenti giusti dentro `opal-os/`;
- registrare decisioni importanti;
- proporre il prossimo task consigliato;
- creare una PR documentale separata.

Vincoli:
- non modificare codice del sito;
- non creare nuove feature;
- non creare CRM;
- non creare SaaS;
- non creare nuove skill;
- non fare merge su `main`.

Deliverable:
- branch `checkpoint-[fase-o-tema]`;
- documenti aggiornati;
- PR documentale;
- sintesi finale con branch, file modificati, PR e prossimo passo.
```

## 9. Versione colloquiale

Davide puo' attivare questo protocollo anche con frasi naturali come:

- "Chiudiamo questa fase e mettila in memoria."
- "Fai backup strategico di quello che abbiamo deciso."
- "Aggiorna Opal OS."
- "Abbiamo raggiunto un checkpoint, crea il report."
- "Rendi questa decisione parte della memoria Opal."
- "Archivia questo passaggio nel repository."
- "Metti ordine e dimmi cosa abbiamo deciso."

Codex deve interpretare queste frasi come attivazione del `Checkpoint Protocol`, non come richiesta di creare una nuova feature.

Quando l'intento e' ambiguo, Codex deve chiedere una breve conferma prima di modificare documenti.

## 10. Livelli futuri di automazione

### Livello 1 — Attivazione manuale via prompt

Davide chiede esplicitamente di eseguire un checkpoint.

Vantaggi:

- semplice;
- controllabile;
- adatto allo stato attuale;
- riduce il rischio di aggiornamenti inutili.

### Livello 2 — Issue template GitHub per checkpoint

Si crea un template GitHub per aprire issue di checkpoint con campi standard: fase, PR coinvolte, decisioni, documenti da aggiornare.

Vantaggi:

- piu' ordine;
- utile quando i checkpoint diventano frequenti;
- aiuta a non dimenticare informazioni.

### Livello 3 — Automazione dopo merge su `main`

Dopo ogni merge importante su `main`, un sistema potrebbe proporre automaticamente un aggiornamento della memoria.

Vantaggi:

- meno lavoro manuale;
- memoria piu' aggiornata.

Rischi:

- complessita' maggiore;
- aggiornamenti automatici non sempre utili;
- necessita' di controlli piu' rigorosi.

Raccomandazione attuale: usare Livello 1.

Motivo: Opal Signal e' ancora in una fase iniziale. La soluzione migliore e' semplice, controllabile e manuale. Automazioni piu' avanzate avranno senso solo quando il processo sara' ripetuto abbastanza volte da giustificarle.

## 11. Confini

L'Opal Checkpoint Archivist NON deve:

- creare nuove feature;
- modificare homepage;
- creare CRM;
- creare SaaS;
- creare skill;
- cambiare stack;
- fare redesign;
- fare merge su `main`;
- installare nuove dipendenze;
- cambiare componenti UI;
- pubblicare il sito;
- trasformare una decisione in codice senza richiesta esplicita.

Deve solo:

- aggiornare memoria;
- aggiornare roadmap;
- aggiornare decision log;
- creare report;
- proporre prossime fasi;
- creare PR documentale separata.

## 12. Sequenza operativa consigliata

```text
Richiesta checkpoint
      ↓
Lettura repository
      ↓
Lettura `opal-os/`
      ↓
Lettura PR/branch recenti
      ↓
Sintesi tecnica
      ↓
Sintesi strategica
      ↓
Scelta documenti da aggiornare
      ↓
Branch `checkpoint-[fase-o-tema]`
      ↓
Aggiornamento documentale
      ↓
PR documentale
      ↓
Sintesi finale e prossimo passo
```

Questo ordine evita di aggiornare documenti senza capire prima cosa e' successo.

## 13. Definizione di completamento

Un checkpoint e' completo quando:

- e' stata letta la memoria Opal rilevante;
- e' stato capito cosa e' cambiato;
- e' stata prodotta una sintesi tecnica;
- e' stata prodotta una sintesi strategica;
- sono state registrate le decisioni importanti;
- sono stati aggiornati solo i documenti necessari;
- e' stata creata una PR documentale separata;
- e' stato indicato un solo prossimo passo consigliato;
- non e' stato modificato codice applicativo fuori richiesta.
