"use client";

import React from "react";
import { Menu, X } from "lucide-react";
const facebookURL = `https://www.facebook.com/officialfatimastore`;
// const menuItems = [
//   {
//     name: "Home",
//     href: "#",
//   },
//   {
//     name: "About",
//     href: "#",
//   },
//   {
//     name: "Contact",
//     href: "#",
//   },
// ];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full shadow top-1">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img
              src="../../logo.png"
              className="border bg-white border-white w-12 h-12 p-1 rounded-full"
              alt="Fatima Crockery"
            />
          </span>
          {/* <span className="font-bold text-2xl">Fatima Crockery</span> */}
          <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#b9b9b9] bg-[200%_auto] bg-clip-text font-bold text-2xl text-transparent">
            Fatima Crockery
          </span>
        </div>
        {/* <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="hidden lg:block">
          <a href={facebookURL} target="_blank">
            {/* <button
              type="button"
              className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Facebook Page
            </button> */}
            {/* <button className="relative inline-flex h-12 w-full items-center justify-center rounded-md bg-white px-6 font-medium text-gray-950 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
              <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
              Facebook Page
            </button> */}

            <span className="relative inline-block overflow-hidden rounded-full p-[3px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-4 py-[5px] text-xl font-medium text-gray-50 p-2 backdrop-blur-3xl">
                Facebook Page
              </div>
            </span>
          </a>
        </div>
        <div className="lg:hidden ">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 bg-stone-300  divide-gray-50 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img
                        src="../../logo.png"
                        className="border bg-white border-white w-12 h-12 p-1 rounded-full"
                        alt="Fatima Crockery"
                      />
                    </span>
                    <span className="font-bold text-slate-900 text-2xl">
                      Fatima Crockery
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                {/* <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-100"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div> */}
                <a href={facebookURL}>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm  hover:bg-blue-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Facebook Page
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
