import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Opal Signal",
  description: "Sistemi digitali AI-native per professionisti del benessere e della relazione.",
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
