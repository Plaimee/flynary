import Image from "next/image";
import Link from "next/link";
import deemmiLogo from "@/public/deemmi_purple_logo.svg";
import duckLabLogo from "@/public/ducklab_purple_logo.svg";

import { socialLinks } from "@/lib/data";

const HomePageFooter = () => {
  return (
    <footer className="w-full px-6 py-4 text-dark-purple-100">
      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-10">
        {/* ส่วน Supported By (แสดงเสมอ) */}
        <div className="text-start">
          <h3 className="text-sm mb-4">Supported By</h3>
          <div className="flex items-center justify-start gap-6">
            <Link href={`https://deemmi.com/?ref=flynary2025`} target="_blank">
              <Image
                src={deemmiLogo}
                alt="Deemmi Logo"
                width={100}
                height={48}
              />
            </Link>

            <Link
              href={`https://ducklab.co.th/?ref=flynary2025`}
              target="_blank"
            >
              <Image
                src={duckLabLogo}
                alt="Duck Lab Logo"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>

        {/* ส่วน Follow us (จะซ่อนในจอที่เล็กกว่า md) */}
        <div className="hidden md:block text-center md:text-left">
          <h3 className="text-sm mb-4">Follow us</h3>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-dark-purple-300 hover:text-dark-purple-100 transition-colors duration-200"
                >
                  <IconComponent className="w-6 h-6" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomePageFooter;
