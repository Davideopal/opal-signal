import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const links = ["Metodo", "Servizi", "Sistema", "Contatti"];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[rgba(11,13,16,0.88)] backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <a className="text-sm font-semibold text-[var(--text)]" href="/">
          Opal Signal
        </a>
        <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
          {links.map((link) => (
            <a className="transition hover:text-[var(--text)]" href="/" key={link}>
              {link}
            </a>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Button>Prenota una consulenza strategica</Button>
        </div>
      </Container>
    </header>
  );
}
