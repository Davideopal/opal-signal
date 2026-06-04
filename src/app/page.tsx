import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const audiences = [
  "Psicologi e psicoterapeuti",
  "Coach e consulenti",
  "Nutrizionisti e fisioterapisti",
  "Professionisti del benessere e della relazione",
];

const problems = [
  "Presenza online frammentata o difficile da spiegare",
  "Sito generico che non guida verso il contatto",
  "Campagne improvvisate, scollegate dal messaggio",
  "Contenuti pubblicati senza una direzione chiara",
];

const services = [
  {
    title: "Consulenza strategica",
    text: "Capiamo cosa ti serve davvero, quali obiettivi vuoi raggiungere e quali risultati realistici si possono costruire.",
  },
  {
    title: "Posizionamento e offerta",
    text: "Chiarire messaggio, target, differenziazione, percorso cliente e struttura dell’offerta.",
  },
  {
    title: "Sito e landing page",
    text: "Costruire pagine chiare, credibili e orientate alla conversione, senza complicare il sistema prima del necessario.",
  },
  {
    title: "Campagne Meta Ads",
    text: "Progettare campagne coerenti con posizionamento, pagina e obiettivo di acquisizione.",
  },
  {
    title: "Ottimizzazione",
    text: "Leggere dati e risposte del mercato per migliorare progressivamente messaggio, pagina e campagne.",
  },
];

const method = [
  {
    title: "Consulenza",
    text: "Capiamo cosa ti serve, dove vuoi arrivare e quali risultati realistici si possono costruire.",
  },
  {
    title: "Strategia",
    text: "Definiamo posizionamento, messaggio, target e offerta.",
  },
  {
    title: "Architettura",
    text: "Organizziamo il percorso: pagina, CTA, contenuti essenziali e punto di conversione.",
  },
  {
    title: "Implementazione",
    text: "Costruiamo sito o landing e campagna pubblicitaria.",
  },
  {
    title: "Ottimizzazione",
    text: "Analizziamo dati e risposte del mercato per migliorare progressivamente.",
  },
];

const differences = [
  {
    title: "Non solo design",
    text: "Prima strategia, poi sito. La pagina deve rendere chiaro perché sceglierti.",
  },
  {
    title: "Non solo social",
    text: "Prima posizionamento, poi campagne. Non vendiamo gestione post come cuore del servizio.",
  },
  {
    title: "Non solo visibilità",
    text: "L’obiettivo è generare richieste più qualificate, non solo più traffico.",
  },
];

const faqs = [
  {
    question: "Lavorate solo con psicologi?",
    answer:
      "No. Il focus è sui professionisti del benessere, della relazione e della consulenza: psicologi, coach, nutrizionisti, fisioterapisti e profili affini.",
  },
  {
    question: "Devo già avere un sito?",
    answer:
      "No. Possiamo partire da una diagnosi della presenza attuale e capire se serve migliorare ciò che esiste o costruire una landing più chiara.",
  },
  {
    question: "Gestite anche i social?",
    answer:
      "Il cuore del lavoro non è pubblicare post al posto tuo. I contenuti possono supportare il percorso, ma il focus resta strategia, pagina e acquisizione.",
  },
  {
    question: "Promettete risultati garantiti?",
    answer:
      "No. Costruiamo una presenza più chiara, credibile e misurabile, pensata per aumentare la qualità delle richieste. Le garanzie assolute non sono serie.",
  },
];

const primaryCtaClass =
  "inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--accent)] px-5 text-sm font-semibold text-[#061014] transition hover:bg-[#9af1ff] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]";

const secondaryCtaClass =
  "inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--line)] bg-transparent px-5 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Section className="min-h-[78vh] items-center">
        <Container className="grid gap-12 py-20 md:grid-cols-[1.08fr_0.92fr] md:items-center lg:py-28">
          <div>
            <Badge>Studio strategico per professionisti del benessere</Badge>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-[var(--text)] md:text-6xl">
              Costruiamo la tua presenza online per farti scegliere dai clienti giusti.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Opal Signal aiuta psicologi, coach e professionisti del benessere a chiarire il posizionamento,
              costruire una presenza digitale credibile e attivare campagne pubblicitarie orientate a richieste
              qualificate, senza comunicazione generica e senza dover diventare influencer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className={primaryCtaClass} href="#contatti">
                Prenota una consulenza strategica
              </a>
              <a className={secondaryCtaClass} href="#metodo">
                Scopri il metodo
              </a>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[var(--muted)]">
              Per professionisti competenti che vogliono essere trovati, capiti e scelti online senza imparare tutto
              il marketing da soli.
            </p>
          </div>

          <Card className="relative p-6 shadow-[0_24px_80px_rgba(16,20,24,0.08)]">
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[rgba(55,201,223,0.22)] blur-2xl" />
            <div className="relative">
              <p className="text-sm font-medium uppercase text-[var(--accent-strong)]">Percorso essenziale</p>
              <div className="mt-6 grid gap-4">
                {["Strategia", "Pagina chiara", "Campagna coerente", "Richiesta qualificata"].map((item, index) => (
                  <div className="flex items-start gap-4 rounded-md border border-[var(--line)] bg-white p-4" key={item}>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--surface-soft)] text-sm font-semibold text-[var(--accent-strong)]">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-[var(--text)]">{item}</p>
                      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                        Un passaggio ordinato verso una presenza più comprensibile e misurabile.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 py-16 md:grid-cols-[0.85fr_1.15fr] md:items-start lg:py-24">
          <div>
            <Badge>Il punto di partenza</Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-[var(--text)] md:text-5xl">
              Non ti serve solo più visibilità. Ti serve un percorso chiaro.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-[var(--muted)]">
              Molti professionisti hanno competenze solide, ma online comunicano in modo frammentato: un sito
              generico, contenuti scollegati, campagne improvvisate o nessun percorso reale verso il contatto.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {problems.map((problem) => (
                <Card className="p-5" key={problem}>
                  <p className="text-sm leading-6 text-[var(--muted)]">{problem}</p>
                </Card>
              ))}
            </div>
            <p className="mt-8 rounded-lg border border-[var(--line)] bg-[var(--surface-soft)] p-5 text-base font-medium leading-7 text-[var(--text)]">
              Ti aiutiamo a trasformare una presenza online confusa in un percorso chiaro che porta le persone
              giuste a capirti, fidarsi e contattarti.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-16 lg:py-24">
          <div className="max-w-2xl">
            <Badge>Per chi</Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-[var(--text)] md:text-5xl">
              Per professionisti che vogliono crescere senza diventare creator.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              Non parliamo ai pazienti. Parliamo a professionisti che vogliono comunicare meglio il proprio valore.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {audiences.map((audience) => (
              <Card className="p-5" key={audience}>
                <p className="text-sm font-medium leading-6 text-[var(--text)]">{audience}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="servizi">
        <Container className="py-16 lg:py-24">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Badge>Servizi</Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-normal text-[var(--text)] md:text-5xl">
                Dal posizionamento alla richiesta di contatto.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[var(--muted)]">
              Una struttura semplice: messaggio coerente, pagina chiara, campagna pubblicitaria e ottimizzazione.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card className="p-6" key={service.title}>
                <h3 className="text-lg font-semibold text-[var(--text)]">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{service.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="metodo">
        <Container className="py-16 lg:py-24">
          <div className="max-w-3xl">
            <Badge>Metodo</Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-[var(--text)] md:text-5xl">
              Un metodo semplice, dalla chiarezza alla richiesta qualificata.
            </h2>
          </div>
          <div className="mt-10 grid gap-4">
            {method.map((step, index) => (
              <Card className="grid gap-5 p-6 md:grid-cols-[0.2fr_0.8fr] md:items-start" key={step.title}>
                <p className="text-sm font-semibold text-[var(--accent-strong)]">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text)]">{step.title}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">{step.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-16 lg:py-24">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <Badge>Differenza</Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-normal text-[var(--text)] md:text-5xl">
                Non siamo qui per gestirti i post.
              </h2>
            </div>
            <div className="grid gap-4">
              {differences.map((item) => (
                <Card className="p-6" key={item.title}>
                  <h3 className="text-lg font-semibold text-[var(--text)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-16 lg:py-24">
          <div className="max-w-2xl">
            <Badge>FAQ</Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-[var(--text)] md:text-5xl">
              Domande prima di iniziare.
            </h2>
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

      <Section id="contatti" className="border-b-0">
        <Container className="py-16 lg:py-24">
          <div className="rounded-xl border border-[var(--line)] bg-[var(--text)] p-8 text-white md:p-12">
            <Badge className="border-white/15 bg-white/10 text-[var(--accent)]">Primo passo</Badge>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-normal md:text-5xl">
              Vuoi capire se il tuo progetto può diventare più chiaro e acquisire richieste migliori?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
              Partiamo da una consulenza strategica: analizziamo presenza attuale, messaggio, obiettivi e prossimi
              passi realistici.
            </p>
            <div className="mt-8">
              <a className={primaryCtaClass} href="#contatti">
                Prenota una consulenza strategica
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
