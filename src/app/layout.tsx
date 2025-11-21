import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { TranslationsProvider } from "./context/TranslationsContext";
import { BodyWithDirection } from "./components/BodyWithDirection";
import { AntdProvider } from "./providers/AntdProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="portfolio-theme"
          value={{
            light: "light",
            dark: "dark",
          }}
        >
          <TranslationsProvider>
            <AntdProvider>
              <BodyWithDirection>{children}</BodyWithDirection>
            </AntdProvider>
          </TranslationsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
