import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar/nav-bar.component";
import { FaHome } from "react-icons/fa";
import Providers from "@/components/providers/providers.component";

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
      <body id="body" className={"bg-gray-100 " + inter.className}>
        <Providers>
          <NavBar></NavBar>
          <main className="mt-16">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
