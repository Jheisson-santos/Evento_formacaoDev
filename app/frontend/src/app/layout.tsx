import type { Metadata } from "next";
import {Inter} from 'next/font/google'
import "./globals.css";

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Aplicação de evento",
  description: "aplicação fullstack de evento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
