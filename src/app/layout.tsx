import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Orgil's website",
  description: "",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200"],
  display: "block",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
