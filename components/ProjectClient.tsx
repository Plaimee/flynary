"use client";

import FilterTabs from "@/components/FilterTabs";
import ProjectCard from "@/components/ProjectCard";
import { useState } from "react";
import Link from "next/link";
import { allProjects } from "@/lib/data";

const ProjectClient = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((project) => project.type === activeFilter);

  const filterCategories = [
    { name: "All", count: allProjects.length },
    {
      name: "Interactive Media",
      count: allProjects.filter((p) => p.type === "Interactive Media").length,
    },
    {
      name: "Web Application",
      count: allProjects.filter((p) => p.type === "Web Application").length,
    },
    {
      name: "Mobile Application",
      count: allProjects.filter((p) => p.type === "Mobile Application").length,
    },
  ];

  return (
    <>
      <div className="default-layout">
        <div className="text-primary-500 font-bold text-[32px]">
          All Project
        </div>

        <div className="flex justify-center mb-8 sm:mb-12">
          <FilterTabs
            categories={filterCategories}
            activeTab={activeFilter}
            onTabClick={setActiveFilter}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {filteredProjects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <ProjectCard
                key={project.id}
                type={project.type}
                title={project.title}
                creator={project.creator}
                thesisName={project.thesisTh}
                imageUrl={project.keyFunctionImageUrl}
                logoUrl={project.logoUrl}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProjectClient;
