"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/public/logo_primary_500.svg";
import InactiveLogo from "@/public/logo_primary_100.svg";
import Image from "next/image";
import { HamburgerIcon } from "./Icon";

const navItems = [
  { href: "/keynote", label: "Keynote" },
  { href: "/bit-to-fly", label: "Bit to Fly" },
  { href: "/projects", label: "Projects" },
  { href: "/creators", label: "Creators" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomeActive = pathname === "/";

  return (
    <div className="relative m-4 md:m-8 rounded-full shadow-md shadow-primary-500/25">
      <nav className="bg-white rounded-full flex items-center justify-between md:justify-center md:gap-x-16 px-6 md:px-8 py-3 font-bold">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <div className="group flex items-center gap-x-3">
            {isHomeActive ? (
              <Image src={Logo} alt="Flynary Logo" width={36} height={36} />
            ) : (
              <>
                <Image
                  src={InactiveLogo}
                  alt="Flynary Logo Inactive"
                  width={36}
                  height={36}
                  className="block group-hover:hidden"
                />
                <Image
                  src={Logo}
                  alt="Flynary Logo Active"
                  width={36}
                  height={36}
                  className="hidden group-hover:block"
                />
              </>
            )}

            <span
              className={`hidden md:inline text-sm md:text-base transition-colors duration-300 ${
                isHomeActive
                  ? "text-primary-500"
                  : "text-primary-100 group-hover:text-primary-500"
              }`}
            >
              F[ynary
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-16">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm md:text-base transition-colors duration-300 ${
                  isActive
                    ? "text-primary-500"
                    : "text-primary-100 hover:text-primary-500"
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
            className={`transition-colors duration-300 ${
              isMenuOpen ? "text-primary-500" : "text-primary-100"
            }`}
          >
            <HamburgerIcon className="h-8 w-8" />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg p-4 z-50">
          <div className="flex flex-col items-center gap-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full text-center py-2 text-base font-bold transition-colors duration-300 ${
                    isActive
                      ? "text-primary-500"
                      : "text-primary-100 hover:text-primary-500"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
