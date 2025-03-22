import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Backgammon Heuristics - To Hit or Not to Hit",
  description: "A curated codex of backgammon heuristics from Dirk Schiemann's book",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
