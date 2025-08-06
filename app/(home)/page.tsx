"use client";

import { useState, useEffect, useCallback } from "react";
import FlynaryHero from "@/components/FlynaryHero";
import ShowCaseCard from "@/components/ShowCaseCard";
import { allProjects } from "@/lib/data";
import Link from "next/link";

// แก้ไข Type ให้มี keyFunctionImageUrl (เป็น optional)
type ProjectType = {
  id: number;
  title: string;
  mainProfile: string;
  keyFunctionImageUrl?: string; // เปลี่ยนจาก imageUrl และทำให้เป็น optional
};

const shuffleAndPick = (array: ProjectType[], count: number): ProjectType[] => {
  const shuffled = [...(array as ProjectType[])].sort(
    () => 0.5 - Math.random()
  );
  return shuffled.slice(0, count);
};

const HomePage = () => {
  const [displayedProjects, setDisplayedProjects] = useState<ProjectType[]>([]);
  const [isFading, setIsFading] = useState(false);

  // ค่าสำรองยังคงมีประโยชน์ ในกรณีที่ keyFunctionImageUrl ไม่มีค่า
  const placeholderImage =
    "https://placehold.co/400x800/2A1E43/FFFFFF?text=No+Image";

  const updateProjects = useCallback(() => {
    if (allProjects.length >= 3) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setDisplayedProjects(shuffleAndPick(allProjects as any, 3));
    }
  }, []);

  useEffect(() => {
    updateProjects();
    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        updateProjects();
        setIsFading(false);
      }, 500);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [updateProjects]);

  if (displayedProjects.length < 3) {
    return (
      <main className="relative w-full flex items-center justify-center" />
    );
  }

  return (
    <main className="relative w-full pb-5 flex items-center justify-center overflow-hidden">
      {/* ----- Desktop View ----- */}
      <div className="relative w-full max-w-7xl h-[80vh] hidden lg:flex items-center justify-center">
        <div className="relative z-10">
          <FlynaryHero />
        </div>

        <div
          className={`w-full h-full absolute inset-0 transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Card 1 */}
          <div className="absolute top-50 left-[5%] -translate-y-1/2 float-1">
            <Link href={`/projects/${displayedProjects[0].id}`}>
              <ShowCaseCard
                key={`desktop-${displayedProjects[0].id}`}
                title={displayedProjects[0].title}
                profileUrl={displayedProjects[0].mainProfile}
                // แก้ไขตรงนี้
                mockupUrl={
                  displayedProjects[0].keyFunctionImageUrl || placeholderImage
                }
                className={""}
              />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="absolute bottom-[5%] left-1/2 -translate-x-[225%] float-2">
            <Link href={`/projects/${displayedProjects[1].id}`}>
              <ShowCaseCard
                key={`desktop-${displayedProjects[1].id}`}
                title={displayedProjects[1].title}
                profileUrl={displayedProjects[1].mainProfile}
                // แก้ไขตรงนี้
                mockupUrl={
                  displayedProjects[1].keyFunctionImageUrl || placeholderImage
                }
                className={""}
              />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="absolute top-1/2 right-[10%] -translate-y-1/2 float-3">
            <Link href={`/projects/${displayedProjects[2].id}`}>
              <ShowCaseCard
                key={`desktop-${displayedProjects[2].id}`}
                title={displayedProjects[2].title}
                profileUrl={displayedProjects[2].mainProfile}
                // แก้ไขตรงนี้
                mockupUrl={
                  displayedProjects[2].keyFunctionImageUrl || placeholderImage
                }
                className={""}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* ----- Mobile View ----- */}
      <div className="w-full lg:hidden pb-5 flex flex-col items-center justify-center">
        <FlynaryHero />
        <div
          className={`my-8 transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <Link href={`/projects/${displayedProjects[0].id}`}>
            <ShowCaseCard
              key={`mobile-${displayedProjects[0].id}`}
              title={displayedProjects[0].title}
              profileUrl={displayedProjects[0].mainProfile}
              // แก้ไขตรงนี้
              mockupUrl={
                displayedProjects[0].keyFunctionImageUrl || placeholderImage
              }
              className={""}
            />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
