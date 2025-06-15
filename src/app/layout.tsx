import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const vt323Font = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portafolio App",
  description: "Soy un freelancer entusiasta en desarrollo web, listo para iniciar mi carrera profesional. Descubre mis primeros proyectos, mis ganas de aprender y crecer, y cómo puedo aportar soluciones creativas con mis conocimientos ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${vt323Font.variable} antialiased`}
      >
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
