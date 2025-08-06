// components/ProjectCard.tsx
import Image from "next/image";
import React from "react";

// Props interface for reusability
interface ProjectCardProps {
  type: string;
  title: string;
  creator: string;
  thesisName: string;
  imageUrl: string;
  logoUrl: string;
}

const ProjectCard = ({
  type,
  title,
  creator,
  thesisName,
  imageUrl,
  logoUrl,
}: ProjectCardProps) => {
  return (
    <div className="relative w-full h-[700px] lg:h-[650px] rounded-2xl overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={title}
          width={420}
          height={400}
          className="w-full h-[400px] object-cover bg-[#110523]"
        />

        <div className="absolute top-4 left-4 border border-white bg-white/12 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full">
          {type}
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="bg-white w-16 h-16 rounded-full p-1 border-2 border-gray-300">
            <Image
              src={logoUrl}
              alt={`${title} Logo`}
              width={64}
              height={64}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="px-6 py-8 pt-12 text-center">
        <h2 className="text-xl font-bold text-primary-500">{title}</h2>
        <p className="text-sm text-grey-scale-grey mt-1">By {creator}</p>
        <p className="text-grey-scale-black mt-4 text-base leading-relaxed">
          {thesisName}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
