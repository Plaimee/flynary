"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/public/logo_dark_purple_100.svg";
import InactiveLogo from "@/public/logo_dark_purple_500.svg";
import suLogo from "@/public/suLogo.svg";
import { HamburgerIcon } from "./Icon";

const navItems = [
  { href: "/keynote", label: "Keynote" },
  { href: "/bit-to-fly", label: "Bit to Fly" },
  { href: "/projects", label: "Projects" },
  { href: "/creators", label: "Creators" },
];

const HomePageNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomeActive = pathname === "/";

  return (
    <div className="relative">
      <nav className="w-full text-brand-lavender py-4">
        <div className="px-6 py-4 flex items-center justify-between">
          {/* ส่วนด้านซ้าย: โลโก้มหาวิทยาลัย (แสดงเสมอ) */}
          <div className="flex items-center gap-4">
            <Image
              src={Logo}
              alt="flynary Logo"
              width={28}
              height={28}
              className="flex lg:hidden"
            />
            <Image
              src={suLogo}
              alt="silpakorn university logo"
              width={28}
              height={28}
            />
            <div className="flex-col text-xs">
              <p className="text-[6px] sm:text-[8px] md:text-xs text-dark-purple-100">
                FACULTY OF INFORMATION AND COMMUNICATION TECHNOLOGY
              </p>
              <p className="text-[6px] sm:text-[8px] md:text-xs text-dark-purple-100">
                SILPAKORN UNIVERSITY | INTERACTIVE APPLICATION PROGRAMMES
              </p>
            </div>
          </div>

          {/* ส่วนด้านขวา: เนื้อหาสำหรับ Desktop และปุ่ม Hamburger */}
          <div className="flex items-center">
            <div className="hidden lg:flex items-center gap-6 md:gap-8">
              {/* Flynary Logo Link */}
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <div className="group flex items-center gap-x-3">
                  {isHomeActive ? (
                    <Image
                      src={Logo}
                      alt="Flynary Logo"
                      width={36}
                      height={36}
                    />
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
                  {/* ✨ จุดที่แก้ไข Flynary */}
                  <div className="relative grid place-items-center">
                    {/* Ghost Element สำหรับจองพื้นที่ */}
                    <span className="invisible font-bold text-sm md:text-base">
                      F[ynary
                    </span>
                    {/* Visible Element */}
                    <span
                      className={`absolute transition-colors duration-300 ${
                        isHomeActive
                          ? "font-bold text-dark-purple-100"
                          : "text-dark-purple-100 group-hover:font-bold"
                      }`}
                    >
                      F[ynary
                    </span>
                  </div>
                </div>
              </Link>

              {/* ✨ จุดที่แก้ไขเมนูลิงก์สำหรับ Desktop */}
              {navItems.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative grid place-items-center text-dark-purple-100 transition-colors duration-200"
                >
                  {/* Ghost Element: ตัวหนาที่มองไม่เห็น เพื่อจองความกว้าง */}
                  <span className="invisible font-bold">{link.label}</span>
                  {/* Visible Element: ข้อความจริงที่วางซ้อนทับ และเปลี่ยนเป็นตัวหนาเมื่อ hover */}
                  <span className="absolute hover:font-bold">{link.label}</span>
                </Link>
              ))}
            </div>

            {/* ปุ่ม Hamburger (จะแสดงเฉพาะในจอมือถือ/แท็บเล็ต) */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Open menu"
                className={`transition-colors duration-300 ${
                  isMenuOpen ? "text-dark-purple-500" : "text-dark-purple-100"
                }`}
              >
                <HamburgerIcon className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* เมนู Dropdown สำหรับ Mobile (โค้ดส่วนนี้เหมือนเดิม) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg p-4 z-50">
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
                      ? "text-dark-purple-100"
                      : "text-dark-purple-100 hover:text-dark-purple-100"
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

export default HomePageNavbar;
