"use client";

import Image from "next/image";
import {
  allProjects,
  ArticleCodingData,
  ArticleGraphicData,
  insightCoding,
  insightDesign,
} from "@/lib/data";
import InfographicCard from "@/components/InfographicCard";
import pageCover from "@/public/bit _to _fly_cover.png";
import { useRef, RefObject } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleChevronIcon,
  DrawIcon,
  InfographicIcon,
} from "@/components/Icon";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import ReelCard from "@/components/ReelCard";

const BitToFlyClient = () => {
  const infographicRef = useRef<HTMLDivElement>(null);
  const designReelRef = useRef<HTMLDivElement>(null);
  const codingReelRef = useRef<HTMLDivElement>(null);

  const handleScroll = (
    direction: "left" | "right",
    ref: RefObject<HTMLDivElement | null>
  ) => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth * 0.8;
      const scrollLeft = direction === "left" ? -scrollAmount : scrollAmount;
      ref.current.scrollBy({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="default-layout">
      {/* --- ส่วนบนคงเดิม --- */}
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
            src={pageCover}
            alt="Infographic project showcase"
            width={635}
            height={235}
            className="h-[300px] rounded-2xl shadow-xl object-cover"
            priority
          />
        </div>
      </div>

      {/* --- Infographic Section (คงเดิม มีปุ่มและ scroll) --- */}
      <div className="w-full space-y-6">
        <div className="flex items-center gap-x-4">
          <div className="p-4 bg-primary-100/10 rounded-full">
            <InfographicIcon className="w-8 h-8 text-primary-500" />
          </div>

          <h1 className="text-2xl font-bold uppercase text-primary-500">
            Project Info
          </h1>
        </div>
        <div className="flex items-center gap-x-4">
          <button
            onClick={() => handleScroll("left", infographicRef)}
            className="hidden md:block p-2 rounded-full bg-white/50 hover:bg-white cursor-pointer"
          >
            <ChevronLeftIcon className="w-8 h-8 lg:w-16 lg:h-16 text-primary-300" />
          </button>
          <div
            ref={infographicRef}
            className="flex-1 flex gap-x-4 overflow-x-auto pb-4 md:scrollbar-hide snap-x"
          >
            {allProjects.map((infographic) => (
              <Link
                href={`/bit-to-fly/infographic/${infographic.id}`}
                key={infographic.id}
              >
                <InfographicCard
                  title={infographic.title}
                  type={infographic.type}
                  imageUrl={infographic.infographicUrl}
                />
              </Link>
            ))}
          </div>
          <button
            onClick={() => handleScroll("right", infographicRef)}
            className="hidden md:block p-2 rounded-full bg-white/50 hover:bg-white cursor-pointer"
          >
            <ChevronRightIcon className="w-8 h-8 lg:w-16 lg:h-16 text-primary-300" />
          </button>
        </div>
      </div>

      <div className="w-full space-y-6">
        <div className="flex items-center gap-x-4">
          <div className="p-4 bg-primary-100/10 rounded-full">
            <DrawIcon className="w-8 h-8 text-primary-500" />
          </div>

          <h2 className="flex flex-col lg:flex-row gap-x-2 text-[32px] font-bold text-primary-500 md:px-0 text-center md:text-start">
            <div className="text-grey-scale-placeholder">Sharing Insights</div>
            On Design
          </h2>
        </div>
        <div className="flex items-center gap-x-4">
          <button
            onClick={() => handleScroll("left", designReelRef)}
            className="hidden md:block p-2 rounded-full bg-white/50 hover:bg-white cursor-pointer"
          >
            <ChevronLeftIcon className="w-8 h-8 lg:w-16 lg:h-16 text-primary-300" />
          </button>
          <div
            ref={designReelRef}
            className="flex w-full gap-x-4 overflow-hidden pb-4 md:scrollbar-hide snap-x"
          >
            {insightDesign.map((graphic) => (
              <div
                key={graphic.id}
                className="flex-shrink-0 w-4/5 md:w-2/5 lg:w-[400px]"
              >
                <ReelCard
                  key={graphic.id}
                  title={graphic.title}
                  thesisName={graphic.description}
                  youtubeVideoId={graphic.videoUrl}
                  timestamp={0}
                  cover={graphic.cover}
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => handleScroll("right", designReelRef)}
            className="hidden md:block p-2 rounded-full bg-white/50 hover:bg-white cursor-pointer"
          >
            <ChevronRightIcon className="w-8 h-8 lg:w-16 lg:h-16 text-primary-300" />
          </button>
        </div>
      </div>

      <div className="w-full space-y-6">
        <div className="flex items-center gap-x-4">
          <div className="p-4 bg-primary-100/10 rounded-full">
            <DoubleChevronIcon className="w-8 h-8 text-primary-500" />
          </div>

          <h2 className="flex flex-col lg:flex-row gap-x-2 text-[32px] font-bold text-primary-500 md:px-0 text-center md:text-start">
            <div className="text-grey-scale-placeholder">Sharing Insights</div>
            On Coding
          </h2>
        </div>
        <div className="flex items-center gap-x-4">
          <button
            onClick={() => handleScroll("left", codingReelRef)}
            className="hidden md:block p-2 rounded-full bg-white/50 hover:bg-white cursor-pointer"
          >
            <ChevronLeftIcon className="w-8 h-8 lg:w-16 lg:h-16 text-primary-300" />
          </button>
          <div
            ref={codingReelRef}
            className="flex-1 flex gap-x-4 overflow-x-auto pb-4 md:scrollbar-hide snap-x"
          >
            {insightCoding.map((dev) => (
              <div
                key={dev.id}
                className="flex-shrink-0 w-4/5 md:w-2/5 lg:w-[400px]"
              >
                <ReelCard
                  key={dev.id}
                  title={dev.title}
                  thesisName={dev.description}
                  youtubeVideoId={dev.videoUrl}
                  timestamp={0}
                  cover={dev.cover}
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => handleScroll("right", codingReelRef)}
            className="hidden md:block p-2 rounded-full bg-white/50 hover:bg-white cursor-pointer"
          >
            <ChevronRightIcon className="w-8 h-8 lg:w-16 lg:h-16 text-primary-300" />
          </button>
        </div>
      </div>

      {/* --- Design Section (แก้ไขเป็น Grid Layout) --- */}
      <div className="w-full space-y-6">
        <h2 className="flex flex-col lg:flex-row gap-x-2 text-[32px] font-bold text-primary-500 md:px-0 text-center md:text-start">
          <div className="text-grey-scale-placeholder">Knowledge about</div>
          Design
        </h2>
        {/* 3. เปลี่ยนจาก flex เป็น grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ArticleGraphicData.map((graphic) => (
            <Link href={`/bit-to-fly/design/${graphic.id}`} key={graphic.id}>
              <ArticleCard key={graphic.id} {...graphic} />
            </Link>
          ))}
        </div>
      </div>

      {/* --- Coding Section (แก้ไขเป็น Grid Layout) --- */}
      <div className="w-full space-y-6">
        <h2 className="flex flex-col lg:flex-row gap-x-2 text-[32px] font-bold text-primary-500 md:px-0 text-center md:text-start">
          <div className="text-grey-scale-placeholder">Knowledge about</div>
          Coding
        </h2>
        {/* 4. เปลี่ยนจาก flex เป็น grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ArticleCodingData.map((coding) => (
            <Link href={`/bit-to-fly/coding/${coding.id}`} key={coding.id}>
              <ArticleCard
                key={coding.id}
                imageUrl={coding.coverUrl}
                title={coding.title}
                description={coding.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BitToFlyClient;
