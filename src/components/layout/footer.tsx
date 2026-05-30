import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <Container className="flex flex-col gap-3 py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>Opal Signal</p>
        <p>Base tecnica e documentale in ricostruzione.</p>
      </Container>
    </footer>
  );
}
