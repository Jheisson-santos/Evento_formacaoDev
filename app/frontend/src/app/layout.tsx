import type { Metadata } from "next";
import {Inter} from 'next/font/google'
import "./globals.css";

const font = Inter({ subsets: ['latin'], variable: '--font-geist-sans' })

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
    <html lang="pt-br">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
