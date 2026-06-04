import Link from "next/link";
import { OpalLogo } from "@/components/brand/opal-logo";
import { Container } from "@/components/ui/container";

const links = [
  { href: "#metodo", label: "Metodo" },
  { href: "#servizi", label: "Servizi" },
  { href: "#contatti", label: "Contatti" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[rgba(255,255,255,0.84)] backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <Link className="rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]" href="/">
          <OpalLogo size={32} />
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
          {links.map((link) => (
            <a className="transition hover:text-[var(--text)]" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden sm:block">
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--accent)] px-5 text-sm font-semibold text-[#061014] transition hover:bg-[#9af1ff] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            href="#contatti"
          >
            Consulenza strategica
          </a>
        </div>
      </Container>
    </header>
  );
}
