import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <Container className="flex flex-col gap-3 py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-[var(--text)]">Opal Signal</p>
        <p>Strategia, sito e campagne per professionisti scelti online.</p>
      </Container>
    </footer>
  );
}
