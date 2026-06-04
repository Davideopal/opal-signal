import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const primaryCtaClass =
  "inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--accent)] px-5 text-sm font-semibold text-[#061014] transition hover:bg-[#9af1ff] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]";

const secondaryCtaClass =
  "inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--line)] bg-transparent px-5 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]";

const signalMap = [
  {
    label: "Input",
    title: "Segnale debole",
    text: "Messaggio poco chiaro, sito generico, campagne scollegate.",
  },
  {
    label: "Metodo",
    title: "Segnale da chiarire",
    text: "Per chi sei adatto, perché sceglierti, quale percorso proponi.",
  },
  {
    label: "Output",
    title: "Segnale forte",
    text: "Pagina chiara, campagna coerente, richiesta più qualificata.",
  },
];

const problems = [
  "Presenza online frammentata",
  "Sito che non guida al contatto",
  "Campagne scollegate dal messaggio",
  "Contenuti senza direzione",
];

const services = [
  {
    title: "Strategia e posizionamento",
    text: "Chiarire target, messaggio, offerta e differenza percepita.",
  },
  {
    title: "Sito o landing page",
    text: "Costruire una pagina semplice, credibile e orientata alla richiesta.",
  },
  {
    title: "Campagne Meta Ads",
    text: "Attivare traffico solo quando messaggio e pagina sono pronti.",
  },
  {
    title: "Ottimizzazione",
    text: "Leggere risposte e dati per migliorare il sistema nel tempo.",
  },
];

const method = [
  "Diagnosi della presenza attuale",
  "Architettura del percorso e delle CTA",
  "Implementazione di pagina, campagna e lettura dati",
];

const faqs = [
  {
    question: "Promettete risultati garantiti?",
    answer: "No. Lavoriamo su chiarezza, fiducia e qualità delle richieste, non su promesse assolute.",
  },
  {
    question: "Serve già avere un sito?",
    answer: "No. Possiamo partire da ciò che esiste e capire se migliorarlo o costruire una landing più adatta.",
  },
  {
    question: "Gestite anche i social?",
    answer: "Non come cuore del servizio. Il focus resta posizionamento, pagina, campagne e richiesta qualificata.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Section className="min-h-[76vh] items-center">
        <Container className="grid gap-12 py-20 md:grid-cols-[1.08fr_0.92fr] md:items-center lg:py-28">
          <div>
            <Badge>Dal messaggio confuso a un percorso chiaro</Badge>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-[var(--text)] md:text-6xl">
              Costruiamo la tua presenza online per farti scegliere dai clienti giusti.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Opal Signal aiuta professionisti del benessere, della relazione e della consulenza a chiarire
              posizionamento, pagina e campagne, senza diventare creator e senza comunicazione aggressiva.
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
              Per psicologi, coach e professionisti che vogliono essere capiti, scelti e contattati online.
            </p>
          </div>

          <Card className="relative overflow-hidden p-6 shadow-[0_24px_80px_rgba(16,20,24,0.08)]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(55,201,223,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(55,201,223,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[rgba(55,201,223,0.24)] blur-2xl" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase text-[var(--accent-strong)]">Signal Map</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Da correggere → da chiarire → da attivare</p>
                </div>
                <span className="h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_0_8px_rgba(55,201,223,0.12)]" />
              </div>
              <div className="relative mt-7 grid gap-4">
                <div className="absolute bottom-5 left-[1.2rem] top-5 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--line)] to-transparent" />
                {signalMap.map((item) => (
                  <div
                    className="relative grid grid-cols-[2.5rem_1fr] gap-4 rounded-md border border-[var(--line)] bg-white/86 p-4 backdrop-blur"
                    key={item.title}
                  >
                    <div className="flex justify-center">
                      <span className="mt-1 h-3 w-3 rounded-full border-2 border-white bg-[var(--accent)] shadow-[0_0_0_5px_rgba(55,201,223,0.14)]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-normal text-[var(--accent-strong)]">
                        {item.label}
                      </p>
                      <p className="mt-1 font-semibold text-[var(--text)]">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
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
              La maggior parte dei sistemi non perde richieste perché manca uno strumento. Le perde perché messaggio,
              pagina e campagne non lavorano insieme.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {problems.map((problem) => (
                <Card className="p-5" key={problem}>
                  <p className="text-sm leading-6 text-[var(--muted)]">{problem}</p>
                </Card>
              ))}
            </div>
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
              Una struttura minima: messaggio coerente, pagina chiara, campagna e ottimizzazione.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
        <Container className="grid gap-10 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-start lg:py-24">
          <div>
            <Badge>Metodo</Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-[var(--text)] md:text-5xl">
              Meno passaggi, più chiarezza.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              Prima capiamo cosa blocca la richiesta. Poi costruiamo solo ciò che serve per rendere il percorso più
              comprensibile e misurabile.
            </p>
          </div>
          <div className="grid gap-4">
            {method.map((item, index) => (
              <Card className="grid gap-5 p-6 md:grid-cols-[0.16fr_0.84fr] md:items-start" key={item}>
                <p className="text-sm font-semibold text-[var(--accent-strong)]">0{index + 1}</p>
                <p className="text-lg font-semibold leading-7 text-[var(--text)]">{item}</p>
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
            <div className="rounded-lg border border-[var(--line)] bg-[var(--surface-soft)] p-6">
              <p className="text-base leading-8 text-[var(--text)]">
                Il cuore del lavoro è rendere più chiaro perché sceglierti: strategia prima del design, pagina prima
                delle campagne, richieste qualificate prima della semplice visibilità.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="contatti">
        <Container className="py-16 lg:py-24">
          <div className="rounded-xl border border-[var(--line)] bg-[var(--text)] p-8 text-white md:p-12">
            <Badge className="border-white/15 bg-white/10 text-[var(--accent)]">Primo passo</Badge>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-normal md:text-5xl">
              Vuoi capire se il tuo progetto può diventare più chiaro?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
              Partiamo da una consulenza strategica: presenza attuale, messaggio, obiettivi e prossimi passi realistici.
            </p>
            <div className="mt-8">
              <a className={primaryCtaClass} href="#contatti">
                Prenota una consulenza strategica
              </a>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
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
