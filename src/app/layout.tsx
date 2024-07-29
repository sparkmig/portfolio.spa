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
      <body className={"bg-gray-100 mt-16 " + inter.className}>
        <section className="py-3 fixed top-0 w-screen shadow-sm bg-gray-50 z-10">
          <div className="container max-w-screen-xl mx-auto px-4">
            <nav className="flex items-center justify-between ">
              <img src="assets/image/navbar-logo.png" alt="Logo" />
              <div className="gap-x-2 flex">
                <a
                  className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-200 transition ease-linear duration-50"
                  href="#projekter"
                >
                  Projekter
                </a>
                <a
                  className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-200 transition ease-linear duration-50"
                  href="#projekter"
                >
                  Erfaring
                </a>
                <a
                  className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-200 transition ease-linear duration-50"
                  href="#projekter"
                >
                  Uddannelse
                </a>
                <a
                  className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-200 transition ease-linear duration-50"
                  href="#Kontakt mig"
                >
                  Kotakt mig
                </a>
                {/* <button className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-50">
                  Get my CV
                </button> */}
              </div>
            </nav>
          </div>
        </section>
        {children}
      </body>
    </html>
  );
}
