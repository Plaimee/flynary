"use client";
import Image from "next/image";

const CreatorCard = ({
  creator,
  title,
  mainProfile,
}: {
  creator: string;
  title: string;
  mainProfile: string;
}) => {
  return (
    <div className="relative w-full h-[200px] md:h-[250px] sm:h-[250px] rounded-3xl shadow-lg p-6 sm:pt-24 sm:p-8 text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl ring-1 ring-gray-200/50 bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4">
        <div className="relative w-32 h-32 md:w-44 md:h-44 sm:w-56 sm:h-56">
          <Image
            src={mainProfile}
            alt={`Profile picture of ${creator}`}
            width={218}
            height={218}
            className="rounded-full h-32 md:w-44 md:h-44 sm:w-56 sm:h-56 object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/128x128/E0E0E0/333?text=${creator.charAt(
                0
              )}`;
            }}
          />
        </div>
      </div>

      <h2 className="text-xl sm:text-3xl font-bold text-primary-500 truncate mt-24 md:mt-16 sm:mt-8">
        {creator}
      </h2>
      <p className="text-sm sm:text-base text-primary-100 mt-1">
        เจ้าของผลงาน {title}
      </p>
    </div>
  );
};
export default CreatorCard;
