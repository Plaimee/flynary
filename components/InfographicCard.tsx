// src/components/InfographicCard.tsx

import Image from "next/image";

interface InfographicCardProps {
  title: string;
  type: string;
  imageUrl: string;
}

const InfographicCard = ({ title, type, imageUrl }: InfographicCardProps) => {
  return (
    <div className="relative flex-shrink-0 w-[200px] sm:w-64 h-80 overflow-hidden rounded-2xl group cursor-pointer snap-center">
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="(max-width: 640px) 85vw, (max-width: 768px) 50vw, 33vw"
        className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      <div className="absolute bottom-4 left-4 right-4 text-center">
        <h3 className="text-white text-base font-semibold">{title}</h3>
        <span className="mt-2 inline-block bg-white/20 text-white border border-white text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
          {type}
        </span>
      </div>
    </div>
  );
};

export default InfographicCard;
