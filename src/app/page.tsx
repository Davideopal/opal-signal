import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const foundations = [
  "Posizionamento",
  "Sito professionale",
  "Funnel",
  "Contenuti",
  "Meta Ads",
  "Workflow AI-native",
];

export default function Home() {
  return (
    <main>
      <Section className="min-h-[72vh] items-center">
        <Container className="grid gap-10 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="max-w-3xl">
            <Badge>Fase 0 - base operativa</Badge>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-[var(--text)] md:text-6xl">
              Opal Signal costruisce sistemi digitali per professionisti.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Questa e' una homepage placeholder: serve a verificare struttura, design system e componenti
              prima di costruire la versione definitiva.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button>Prenota una consulenza strategica</Button>
              <Button variant="secondary">Scopri il metodo</Button>
            </div>
          </div>

          <Card className="p-6">
            <p className="text-sm font-medium uppercase text-[var(--accent)]">Sistema in costruzione</p>
            <div className="mt-5 grid gap-3">
              {foundations.map((item) => (
                <div
                  className="flex items-center justify-between border-b border-[var(--line)] py-3 text-sm text-[var(--text)] last:border-b-0"
                  key={item}
                >
                  <span>{item}</span>
                  <span className="text-[var(--muted)]">base</span>
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
