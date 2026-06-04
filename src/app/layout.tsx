import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Opal Signal | Strategia, sito e campagne per professionisti del benessere",
  description:
    "Opal Signal aiuta psicologi, coach e professionisti del benessere a costruire una presenza online chiara, credibile e orientata a richieste qualificate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
