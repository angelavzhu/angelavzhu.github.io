import Navigation from "../components/Navigation";
import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Angela Zhu",
  description: "Angela's design portfolio",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <a className="sr-only focus:not-sr-only" href="#maincontent">
          Skip to main content
        </a>
        <Navigation />
        <main id="maincontent">
          {children}
        </main>
      </body>
    </html>
  );
}
