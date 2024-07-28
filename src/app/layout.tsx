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
      <body className={"bg-gray-100 " + inter.className}>
        <section className="py-10 md:py-16">
          <div className="container max-w-screen-xl mx-auto px-4">
            <nav className="flex items-center justify-between mb-40">
              <button className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-50">
                Get my CV
              </button>
            </nav>
          </div>
        </section>
        {children}
      </body>
    </html>
  );
}
