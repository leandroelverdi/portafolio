import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { ThemeProvider } from "next-themes";

const vt323Font = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Soy un freelancer entusiasta en desarrollo web, listo para iniciar mi carrera profesional. Descubre mis primeros proyectos, mis ganas de aprender y crecer, y cómo puedo aportar soluciones creativas con mis conocimientos ",
  icons: {
    icon: "/logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${vt323Font.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}