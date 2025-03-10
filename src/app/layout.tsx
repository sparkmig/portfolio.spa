import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mikkel Gundersen",
  description: "Mikkel Gundersen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="body" className={inter.className}>
        <main className="mt-16">{children}</main>
      </body>
    </html>
  );
}
