import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { Header } from "@/components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Pokémon Search",
  description:
    "Search, discover, and learn about your favorite Pokémon. Find detailed information, including stats, abilities, types, and evolutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${roboto_mono.variable} min-h-screen font-roboto dark:bg-neutral-950 dark:text-neutral-50`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
