"use client";

import Image from "next/image";
import { allProjects, ArticleCodingData, ArticleGraphicData } from "@/lib/data";
// import { GraphicArticleData } from "@/lib/data";
import InfographicCard from "@/components/InfographicCard";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/Icon";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

const Bit_to_FlyPage = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      const scrollLeft = direction === "left" ? -scrollAmount : scrollAmount;
      scrollContainerRef.current.scrollBy({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="default-layout">
      <div className="text-center">
        <div className="text-[32px] font-bold text-primary-500">
          F[ynary (ฟลาย-แนร์-รี)
        </div>
        <div className="text-lg font-semibold text-primary-100">
          “ขยับนิดทวีวิทมหาศาล ต่อชุดรหัสฐาน เข้มข้นฝึกฝนทักษะ”
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center w-full">
        <div className="lg:w-1/2 flex flex-col">
          <h2 className="text-[24px] md:text-[32px] text-start font-bold text-primary-500">
            Infographic All of Project
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start p-8 gap-8">
            <p className="text-[16px] text-center md:text-start text-grey-scale-black flex-1">
              ผลงานทั้งหมดที่นำเสนอผ่านส่วนย่อยต่างๆโดยมีนักศึกษาปีที่ 4
              ที่เป็นผู้จัดทำจำนวน 13 คน
            </p>
            <p className="text-[32px] font-bold text-primary-500 border rounded-lg p-3">
              13+
            </p>
          </div>

          <p className="text-start text-[16px] text-grey-scale-grey">
            ชุดความรู้ที่เกิดจากการขยับปีกทีละเล็กน้อย จนเกิดเป็น..
          </p>
        </div>

        <div className="lg:w-1/2 overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1750544684965-873a86eba4b6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Infographic project showcase"
            width={635}
            height={235}
            className="h-[325px] rounded-2xl shadow-xl object-cover"
            priority
          />
        </div>
      </div>

      <div className="w-full space-y-6">
        <h2 className="text-[32px] font-bold text-primary-500 md:px-0 text-center md:text-start">
          Infographic
        </h2>

        <div className="flex items-center gap-x-4">
          <button
            onClick={() => handleScroll("left")}
            className="hidden md:block p-2 transition-colors"
            aria-label="Scroll Left"
          >
            <ChevronLeftIcon className="w-8 h-8 lg:w-16 lg:h-16 text-primary-300 cursor-pointer" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex-1 flex gap-x-4 overflow-x-auto pb-4 md:scrollbar-hide 
             snap-x snap-mandatory md:snap-none scroll-px-4"
          >
            {allProjects.map((infographic) => (
              <Link
                href={`/bit-to-fly/${infographic.studentId}`}
                key={infographic.id}
              >
                <InfographicCard
                  key={infographic.id}
                  title={infographic.title}
                  type={infographic.type}
                  imageUrl={infographic.infographicUrl}
                />
              </Link>
            ))}
          </div>

          <button
            onClick={() => handleScroll("right")}
            className="hidden md:block p-2 transition-colors"
            aria-label="Scroll Right"
          >
            <ChevronRightIcon className="w-8 h-8 lg:w-16 lg:h-16 text-primary-300 cursor-pointer" />
          </button>
        </div>
      </div>

      <div className="w-full space-y-6">
        <h2 className="flex flex-col lg:flex-row gap-x-2 text-[32px] font-bold text-primary-500 md:px-0 text-center md:text-start">
          <div className="text-grey-scale-placeholder">Knowledge about</div>
          Design
        </h2>

        <div className="flex items-center gap-x-4">
          <div
            ref={scrollContainerRef}
            className="flex-1 flex gap-x-4 overflow-x-auto pb-4 md:scrollbar-hide 
             snap-x snap-mandatory md:snap-none scroll-px-4"
          >
            {ArticleGraphicData.map((graphic, index) => (
              <ArticleCard
                key={index}
                title={graphic.title}
                date={graphic.date}
                description={graphic.description}
                imageUrl={graphic.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full space-y-6">
        <h2 className="flex flex-col lg:flex-row gap-x-2 text-[32px] font-bold text-primary-500 md:px-0 text-center md:text-start">
          <div className="text-grey-scale-placeholder">Knowledge about</div>
          Coding
        </h2>

        <div className="flex items-center gap-x-4">
          <div
            ref={scrollContainerRef}
            className="flex-1 flex gap-x-4 overflow-x-auto pb-4 md:scrollbar-hide 
             snap-x snap-mandatory md:snap-none scroll-px-4"
          >
            {ArticleCodingData.map((coding, index) => (
              <ArticleCard
                key={index}
                title={coding.title}
                date={coding.date}
                description={coding.description}
                imageUrl={coding.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bit_to_FlyPage;
