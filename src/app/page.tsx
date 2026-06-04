import { Badge } from "@/components/ui/badge";
import { OpalMascotBackground } from "@/components/brand/opal-mascot-background";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const primaryCtaClass =
  "inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--accent)] px-5 text-sm font-semibold text-[#061014] transition hover:bg-[#9af1ff] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]";

const secondaryCtaClass =
  "inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--line)] bg-transparent px-5 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]";

const heroJourney = [
  {
    label: "Segnale",
    title: "Presenza confusa",
    text: "Messaggio disperso, sito generico, contenuti e campagne non coordinati.",
  },
  {
    label: "Diagnosi",
    title: "Priorità chiare",
    text: "Capire cosa blocca fiducia, comprensione e richiesta di contatto.",
  },
  {
    label: "Sistema",
    title: "Pagina + campagna",
    text: "Posizionamento, landing, CTA e traffico lavorano nella stessa direzione.",
  },
  {
    label: "Output",
    title: "Richieste migliori",
    text: "Le persone giuste capiscono se sei adatto e arrivano al contatto con più contesto.",
  },
];

const diagnosisPoints = [
  "dove il messaggio è poco chiaro",
  "quale parte della pagina blocca la richiesta",
  "se ha senso attivare campagne Meta Ads",
  "quale sistema minimo costruire prima",
];

const specializations = [
  {
    title: "Analisi",
    text: "Presenza attuale, messaggio, competitor, percorso utente e attriti che riducono la qualità delle richieste.",
  },
  {
    title: "Strategia",
    text: "Target, offerta, posizionamento, promessa realistica, CTA e priorità operative.",
  },
  {
    title: "Implementazione",
    text: "Sito o landing, campagne, tracciamento leggero, lettura dati e ottimizzazione progressiva.",
  },
];

const services = [
  "Strategia e posizionamento",
  "Copy e messaggio",
  "Sito / landing page",
  "Funnel di richiesta contatto",
  "Meta Ads quando ha senso",
  "Ottimizzazione e lettura dati",
  "Automazioni leggere, solo se utili",
  "Documentazione del sistema",
];

const audiences = [
  "Psicologi e psicoterapeuti",
  "Coach e consulenti",
  "Professionisti del benessere",
  "Nutrizionisti, fisioterapisti e profili affini",
  "Professionisti che vogliono comunicare con etica e chiarezza",
];

const notFor = [
  "Chi cerca promesse di clienti garantiti",
  "Chi vuole solo post social",
  "Chi vuole accendere ads senza sistemare messaggio e pagina",
  "Chi vuole comunicazione aggressiva o ingannevole",
  "Chi non vuole partecipare alla fase strategica",
];

const transformation = [
  {
    title: "Prima",
    items: ["sito generico", "contenuti scollegati", "CTA debole", "campagne non coordinate"],
  },
  {
    title: "Dopo",
    items: ["messaggio chiaro", "landing orientata alla richiesta", "campagna coerente", "percorso misurabile"],
  },
];

const faqs = [
  {
    question: "Promettete risultati garantiti?",
    answer:
      "No. Sarebbe poco serio. Lavoriamo per rendere messaggio, pagina e campagne più chiari, misurabili e coerenti con il tuo posizionamento.",
  },
  {
    question: "Fate campagne Meta Ads?",
    answer:
      "Sì, ma solo quando messaggio, pagina e obiettivo sono abbastanza chiari. Non accendiamo campagne per coprire un sistema fragile.",
  },
  {
    question: "Devo già avere un sito?",
    answer:
      "No. Possiamo partire da una diagnosi della presenza attuale e decidere se migliorare ciò che esiste o costruire una landing più adatta.",
  },
  {
    question: "Gestite anche i social?",
    answer:
      "Non vendiamo gestione post come cuore del servizio. I contenuti possono supportare il percorso, ma il focus resta acquisizione qualificata.",
  },
  {
    question: "Lavorate solo con psicologi?",
    answer:
      "No. Il focus è su professionisti del benessere, della relazione e della consulenza che vogliono comunicare con autorevolezza.",
  },
  {
    question: "Quanto tempo serve?",
    answer:
      "Dipende dallo stato di partenza. La diagnosi serve proprio a capire il primo sistema minimo da costruire senza fare troppo.",
  },
  {
    question: "Serve un budget pubblicitario?",
    answer:
      "Per le campagne sì: il budget media è separato dal lavoro strategico e tecnico. Prima, però, verifichiamo se ha senso investirlo.",
  },
  {
    question: "Il metodo è adatto a settori sensibili?",
    answer:
      "Sì, con prudenza. Evitiamo claim sanitari, promesse assolute e comunicazione suggestiva: chiarezza e fiducia prima di pressione commerciale.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Section className="relative min-h-[82vh] items-center overflow-hidden">
        <OpalMascotBackground variant="hero" />
        <Container className="relative z-10 grid gap-12 py-20 md:grid-cols-[1.05fr_0.95fr] md:items-center lg:py-28">
          <div className="relative z-10">
            <Badge>Strategia, sito e campagne per professionisti del benessere</Badge>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-[var(--text)] md:text-6xl">
              Costruisci un sistema digitale che ti rende chiaro, credibile e scelto dai clienti giusti.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Opal Signal chiarisce il posizionamento, costruisce pagine orientate alla richiesta e attiva campagne
              solo quando il sistema è pronto. Più percorso, meno improvvisazione.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className={primaryCtaClass} href="#contatti">
                Richiedi una diagnosi strategica
              </a>
              <a className={secondaryCtaClass} href="#metodo">
                Scopri il metodo
              </a>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[var(--muted)]">
              Per professionisti competenti che vogliono acquisire richieste più qualificate senza diventare creator o
              delegare tutto a post scollegati.
            </p>
          </div>

          <Card className="relative overflow-hidden bg-[rgba(17,20,24,0.82)] p-6 shadow-[0_28px_100px_rgba(94,231,255,0.10)] backdrop-blur">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(94,231,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(94,231,255,0.07)_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[rgba(94,231,255,0.18)] blur-2xl" />
            <div className="absolute -bottom-20 left-8 h-52 w-52 rounded-full bg-[rgba(185,167,255,0.08)] blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase text-[var(--accent-strong)]">Opal Path</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Dal segnale debole al contatto qualificato</p>
                </div>
                <span className="h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_0_8px_rgba(55,201,223,0.14)]" />
              </div>
              <div className="relative mt-7 grid gap-4">
                <div className="absolute bottom-7 left-[1.05rem] top-7 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--line)] to-transparent" />
                {heroJourney.map((item, index) => (
                  <div
                    className="relative grid grid-cols-[2.1rem_1fr] gap-4 rounded-md border border-[var(--line)] bg-white/[0.035] p-4 backdrop-blur"
                    key={item.title}
                  >
                    <div className="flex justify-center">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(94,231,255,0.34)] bg-[var(--surface-soft)] text-xs font-semibold text-[var(--accent-strong)] shadow-[0_0_0_5px_rgba(94,231,255,0.10)]">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase text-[var(--accent-strong)]">{item.label}</p>
                      <p className="mt-1 text-base font-semibold text-[var(--text)]">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-md border border-[rgba(94,231,255,0.24)] bg-[rgba(94,231,255,0.08)] p-4">
                <p className="text-sm font-semibold text-[var(--text)]">Potenzialità del percorso</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Non aggiunge rumore: ordina messaggio, pagina e campagne per rendere più semplice capire perché
                  contattarti.
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 py-16 md:grid-cols-[1fr_0.9fr] md:items-center lg:py-24">
          <div>
            <Badge>Diagnosi strategica</Badge>
            <h2 className="mt-5 text-3xl font-semibold text-[var(--text)] md:text-5xl">
              Scopri dove il tuo sistema digitale perde richieste qualificate.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
              Non serve aggiungere altri strumenti se il percorso non è chiaro. La diagnosi serve a capire cosa blocca
              fiducia, comprensione e contatto.
            </p>
          </div>
          <Card className="p-6">
            <div className="grid gap-3">
              {diagnosisPoints.map((point) => (
                <p className="rounded-md border border-[var(--line)] bg-white/[0.03] p-4 text-sm text-[var(--muted)]" key={point}>
                  {point}
                </p>
              ))}
            </div>
            <a className={`${primaryCtaClass} mt-6 w-full`} href="#contatti">
              Richiedi una diagnosi strategica
            </a>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 py-16 md:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div>
            <Badge>Partner giusti</Badge>
            <h2 className="mt-5 text-3xl font-semibold text-[var(--text)] md:text-5xl">
              Selezioniamo professionisti con cui costruire valore reale.
            </h2>
          </div>
          <div className="grid gap-4">
            <p className="text-lg leading-8 text-[var(--muted)]">
              Lavoriamo meglio con professionisti competenti, etici e disponibili a chiarire posizionamento, offerta e
              processo prima di investire in traffico.
            </p>
            <Card className="p-6">
              <p className="text-sm leading-7 text-[var(--muted)]">
                Non promettiamo risultati garantiti, non lavoriamo su comunicazione ingannevole e non usiamo campagne
                per coprire un messaggio debole.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-16 lg:py-24">
          <div className="max-w-3xl">
            <Badge>Problema competitivo</Badge>
            <h2 className="mt-5 text-3xl font-semibold text-[var(--text)] md:text-5xl">
              La tua competenza è chiara offline, ma online viene capita?
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              Molti professionisti perdono richieste perché sito, messaggio, contenuti e campagne non lavorano insieme.
              Il risultato è una presenza visibile ma poco convincente.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden" id="metodo">
        <OpalMascotBackground variant="method" />
        <Container className="relative z-10 py-16 lg:py-24">
          <div className="max-w-3xl">
            <Badge>Specializzazione Opal</Badge>
            <h2 className="mt-5 text-3xl font-semibold text-[var(--text)] md:text-5xl">
              Siamo specializzati in sistemi digitali chiari.
            </h2>
          </div>
          <div className="relative mt-10 grid gap-4 md:grid-cols-3">
            {specializations.map((item) => (
              <Card className="bg-[rgba(17,20,24,0.88)] p-6 backdrop-blur" key={item.title}>
                <h3 className="text-xl font-semibold text-[var(--text)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden" id="servizi">
        <OpalMascotBackground variant="system" />
        <Container className="relative z-10 py-16 lg:py-24">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Badge>Sistema</Badge>
              <h2 className="mt-5 text-3xl font-semibold text-[var(--text)] md:text-5xl">
                Dal posizionamento alla richiesta di contatto.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[var(--muted)]">
              Non pezzi separati, ma un percorso minimo che rende più semplice capire, fidarsi e contattarti.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card className="bg-[rgba(17,20,24,0.88)] p-5 backdrop-blur" key={service}>
                <p className="text-sm font-medium leading-6 text-[var(--text)]">{service}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <Badge>Con chi collaboriamo</Badge>
            <h2 className="mt-5 text-3xl font-semibold text-[var(--text)] md:text-5xl">
              Professionisti che vogliono comunicare con etica e chiarezza.
            </h2>
            <div className="mt-8 grid gap-3">
              {audiences.map((audience) => (
                <p className="rounded-md border border-[var(--line)] bg-white/[0.03] p-4 text-sm text-[var(--muted)]" key={audience}>
                  {audience}
                </p>
              ))}
            </div>
          </div>
          <div>
            <Badge>Per chi non è Opal</Badge>
            <h2 className="mt-5 text-3xl font-semibold text-[var(--text)] md:text-5xl">
              Non siamo adatti a ogni progetto.
            </h2>
            <div className="mt-8 grid gap-3">
              {notFor.map((item) => (
                <p className="rounded-md border border-[var(--line)] bg-white/[0.03] p-4 text-sm text-[var(--muted)]" key={item}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-16 lg:py-24">
          <div className="max-w-3xl">
            <Badge>Esempio, non case study</Badge>
            <h2 className="mt-5 text-3xl font-semibold text-[var(--text)] md:text-5xl">
              Esempio di trasformazione strategica.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              Non inventiamo risultati o clienti. Questo è un esempio di come cambia il sistema quando messaggio,
              pagina e campagna iniziano a lavorare insieme.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {transformation.map((block) => (
              <Card className="p-6" key={block.title}>
                <h3 className="text-xl font-semibold text-[var(--text)]">{block.title}</h3>
                <div className="mt-5 grid gap-3">
                  {block.items.map((item) => (
                    <p className="rounded-md border border-[var(--line)] bg-white/[0.03] p-3 text-sm text-[var(--muted)]" key={item}>
                      {item}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="contatti">
        <Container className="py-16 lg:py-24">
          <div className="relative overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] p-8 md:p-12">
            <OpalMascotBackground variant="cta" />
            <div className="relative z-10">
              <Badge>Primo passo</Badge>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold text-[var(--text)] md:text-5xl">
                Prenota 30 minuti di diagnosi strategica.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
                Nella call capiamo dove il messaggio è poco chiaro, quale parte del sito blocca la conversione, se ha
                senso attivare campagne e qual è il primo sistema minimo da costruire.
              </p>
              <a className={`${primaryCtaClass} mt-8`} href="#contatti">
                Richiedi una diagnosi strategica
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-b-0">
        <Container className="py-16 lg:py-24">
          <div className="max-w-2xl">
            <Badge>FAQ</Badge>
            <h2 className="mt-5 text-3xl font-semibold text-[var(--text)] md:text-5xl">Domande frequenti.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <Card className="p-6" key={faq.question}>
                <h3 className="text-base font-semibold text-[var(--text)]">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
