import type { Metadata } from "next";
import { VT323, Press_Start_2P } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  variable: "--font-press-start",
  subsets: ["latin"],
});

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcos Pacheco | Portfolio",
  description: "Portafolio de Marcos Pacheco, Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${pressStart2P.variable} ${vt323.variable} h-full`}
    >
      <body className="min-h-full bg-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
