"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaHome } from "react-icons/fa";
import { FaBurger, FaX } from "react-icons/fa6";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section className="py-3 fixed top-0 w-screen shadow-sm bg-gray-50 z-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <button
          className="visible md:hidden float-end p-2 rounded-md"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? (
            <FaX className="text-xl"></FaX>
          ) : (
            <FaBars className="text-xl"></FaBars>
          )}
        </button>
        <nav
          className={`flex items-center justify-between md:flex ${isVisible ? "visible" : "hidden"}`}
        >
          <Link
            className="hidden md:block px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold text-gray-700 text-md rounded-md hover:text-gray-500 transition ease-linear duration-50"
            href="#"
          >
            <FaHome className="text-xl"></FaHome>
          </Link>
          <div className="gap-x-2 flex flex-col md:flex-row">
            <Link
              className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-200 transition ease-linear duration-50"
              href="#projekter"
            >
              Projekter
            </Link>
            <Link
              className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-200 transition ease-linear duration-50"
              href="#projekter"
            >
              Erfaring
            </Link>
            <Link
              className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-200 transition ease-linear duration-50"
              href="#projekter"
            >
              Uddannelse
            </Link>
            <Link
              className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-200 transition ease-linear duration-50"
              href="#Kontakt mig"
            >
              Kotakt mig
            </Link>
            {/* <button className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-50">
            Get my CV
          </button> */}
          </div>
        </nav>
      </div>
    </section>
  );
}
