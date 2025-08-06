import Image from "next/image";
import FlynaryLogo from "@/public/logo_Typo_Full_Effect.svg";
import Link from "next/link";
import { RightArrowIcon } from "./Icon";

const FlynaryHero = () => {
  return (
    <div className="relative z-10 flex flex-col items-center text-center px-4">
      <Image
        src={FlynaryLogo}
        alt="Flynary Logo"
        width={400}
        height={150}
        priority
      />
      <p className="text-white text-lg mt-4 max-w-md">
        เว็บไซต์จัดแสดงผลงานออนไลน์ Flynary 2025
        ซึ่งเกิดจากการเริ่มต้นขยับปีกเล็ก ๆ น้อย ๆ จนเกิด 13 ผลงานจุลนิพนธ์
      </p>

      <Link
        href={`/projects`}
        className="mt-8 px-8 py-3 bg-white/10 border border-white rounded-full text-white font-semibold backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
      >
        View All Project
        <span className="bg-white text-primary-500 rounded-full p-1.5 flex items-center justify-center">
          <RightArrowIcon />
        </span>
      </Link>
    </div>
  );
};

export default FlynaryHero;
