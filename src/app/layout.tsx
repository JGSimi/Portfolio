import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from '../components/ThemeProvider'
import ThemeToggle from '../components/ThemeToggle'
import { JetBrains_Mono } from 'next/font/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const mono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'João Simi | Web Developer',
  description: 'Portfolio profissional com projetos e experiências em desenvolvimento web',
  keywords: ['desenvolvedor', 'full stack', 'react', 'next.js', 'web development']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mono.variable} font-mono antialiased bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors`}
      >
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
