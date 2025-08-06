"use client";

import Link from "next/link";
import Image from "next/image"; // อย่าลืม import Image component

const ReelCard = ({
  title,
  thesisName,
  cover,
  youtubeVideoId,
  timestamp,
}: {
  title: string;
  thesisName: string;
  cover: string;
  youtubeVideoId: string;
  timestamp: number;
}) => {
  // URL สำหรับลิงก์ไปยัง YouTube พร้อม timestamp
  const youtubeLink = `https://www.youtube.com/watch?v=${youtubeVideoId}&t=${timestamp}s`;

  return (
    <Link href={youtubeLink} target="_blank" rel="noopener noreferrer">
      <div className="group w-full h-[420px] bg-white rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl ring-1 ring-gray-200/50">
        <div className="relative w-full aspect-video">
          <Image
            src={cover}
            alt={`Thumbnail for ${title}`}
            fill
            className="object-cover px-5 pt-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-grey-scale-black tracking-wider">
            {title}
          </h3>
          <p className="text-grey-scale-placeholder mt-2 text-base leading-relaxed text-clip">
            {thesisName}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default ReelCard;
