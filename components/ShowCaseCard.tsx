import Image from "next/image";
import Logo from "@/public/logo_white.svg";

interface ShowCaseCardProps {
  title: string;
  profileUrl: string;
  mockupUrl: string;
  className?: string;
}

const ShowCaseCard = ({
  title,
  profileUrl,
  mockupUrl,
  className,
}: ShowCaseCardProps) => {
  // 1. กำหนดค่าเริ่มต้นสำหรับรูปภาพ ในกรณีที่ไม่มี URL ส่งมา
  const placeholderImage =
    "https://placehold.co/400x800/2A1E43/FFFFFF?text=Project";
  const placeholderProfile =
    "https://placehold.co/120x120/FFFFFF/2A1E43?text=User";

  return (
    <div className={`relative w-fit ${className}`}>
      {/* 1. ส่วนกรอบและรูป Mockup หลัก */}
      <div className="relative w-[208px] h-[240px] md:w-[208px] md:h-[240px] bg-white/5 backdrop-blur-sm p-3 rounded-[40px] border border-purple-400/30 shadow-2xl shadow-purple-500/20">
        <Image
          // 2. ใช้ค่าเริ่มต้นใน src ของ Mockup Image
          src={mockupUrl || placeholderImage}
          alt={title}
          fill
          className="object-contain rounded-[30px]"
          sizes="(max-width: 208px) 100vw, (max-width: 208px) 50vw, 33vw"
        />
        <div className="absolute top-6 left-6 bg-black/30 backdrop-blur-md px-4 py-1.5 rounded-full">
          <h3 className="text-white font-semibold text-sm">{title}</h3>
        </div>
      </div>

      {/* 2. ส่วนรูปโปรไฟล์ที่ซ้อนอยู่ */}
      <div className="absolute -bottom-10 -left-10 w-[120px] h-[120px]">
        <div className="relative w-full h-full">
          <Image
            // 3. ใช้ค่าเริ่มต้นใน src ของ Profile Image
            src={profileUrl || placeholderProfile}
            alt="Creator Profile"
            fill
            className="rounded-full object-cover border-4 border-purple-300 shadow-lg"
            sizes="120px"
          />
          <div className="absolute top-1/2 -left-5 -translate-y-1/2 z-10">
            <Image className="w-12 h-12" src={Logo} alt={"flynary logo"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseCard;
