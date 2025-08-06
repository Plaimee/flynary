"use client";
import Image from "next/image";
import Link from "next/link";
import { GlobeIcon } from "./Icon";

// Interface สำหรับข้อมูล tool
interface ToolData {
  id: number;
  name: string;
  logo: string;
  url: string;
  description: string;
}

// 1. แก้ไข Interface ของ Props ให้ถูกต้อง
interface ToolCardProps {
  tool: ToolData;
}

// 2. แก้ไขวิธีการรับ props ให้เป็นการ destructuring ({ tool })
const ToolRecommended = ({ tool }: ToolCardProps) => {
  // 3. กำหนด URL รูปภาพสำรอง
  const placeholderLogo = "https://placehold.co/48x48/E5E7EB/A9A9A9?text=Logo";

  if (!tool) {
    return null;
  }

  return (
    <div className="bg-white text-zinc-800 p-6 rounded-3xl shadow-md shadow-primary-100 flex flex-col gap-4 h-full">
      <div className="flex items-center gap-4">
        <Image
          // 4. ใช้รูปภาพสำรอง ถ้า tool.logo เป็นค่าว่าง
          src={tool.logo || placeholderLogo}
          alt={`${tool.name} icon`}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full bg-gray-200 object-cover"
        />
        <h3 className="text-xl font-bold">{tool.name}</h3>
      </div>

      <div>
        <p className="text-primary-500 text-sm">Description:</p>
        <p className="text-primary-500 mt-1">{tool.description}</p>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-200 flex items-center gap-3">
        <GlobeIcon />
        <Link
          href={tool.url || "#"} // เพิ่ม fallback ให้กับ link ด้วย
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-primary-500 transition-colors break-all"
        >
          {tool.url}
        </Link>
      </div>
    </div>
  );
};

export default ToolRecommended;
