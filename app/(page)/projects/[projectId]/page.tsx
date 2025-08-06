import { allProjects } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import {
  AdvisorIcon,
  CategoryIcon,
  ChevronRightIcon,
  CodingLanguageIcon,
  CodingToolIcon,
  CreatorBackgroundBlob,
  CreatorIcon,
  DatabaseIcon,
  DesignToolIcon,
  GlobalSearchIcon,
  KeyFunctionIcon,
  ProjectInfoIcon,
  StackIcon,
  StarIcon,
  TechnologyIcon,
  TestingIcon,
} from "@/components/Icon";
import StackCard from "@/components/StackCard";
import ScreenshotCard from "@/components/ScreenshotCard";
import DetailItem from "@/components/DetailItem";
import FunctionCard from "@/components/FunctionCard";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    projectId: project.id.toString(),
  }));
}

const navItems = [
  {
    text: "Project Info",
    href: "#project-info",
    icon: <ProjectInfoIcon className="w-6 h-6" />,
  },
  { text: "STACK", href: "#stack", icon: <StackIcon className="w-6 h-6" /> },
  {
    text: "TESTING & FEEDBACK",
    href: "#testing",
    icon: <TestingIcon className="w-6 h-6" />,
  },
  {
    text: "KEY FUNCTION",
    href: "#key-function",
    icon: <KeyFunctionIcon className="w-6 h-6" />,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectDetailPage = ({ params }: { params: any }) => {
  const projectId = parseInt(params.projectId, 10);
  const project = allProjects.find((project) => project.id === projectId);

  const breadcrumbData = [
    { label: "All Project", href: "/projects" },
    { label: project?.title ?? "undefined", href: `/projects/${projectId}` },
  ];

  if (!project) {
    notFound();
  }

  const stackData = [
    {
      icon: <CodingLanguageIcon />,
      title: "CODING LANGUAGE",
      stacks: project.codingLanguage,
    },
    {
      icon: <DatabaseIcon />,
      title: "DATABASE SYSTEM",
      stacks: project.databaseSystem,
    },
    {
      icon: <CodingToolIcon />,
      title: "CODING TOOL",
      stacks: project.codingTool,
    },
    {
      icon: <DesignToolIcon />,
      title: "DESIGN TOOL",
      stacks: project.designTool,
    },
  ];
  return (
    <div className="default-layout">
      <div className="flex w-full align-baseline">
        <Breadcrumbs crumbs={breadcrumbData} />
      </div>

      <div className="text-[32px] font-bold text-wrap text-center text-primary-800">
        {project.thesis}
      </div>

      <div className="text-base text-grey-scale-grey text-center text-wrap">
        {project.thesisTh}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {navItems.map((item) => (
          <a
            key={item.text}
            href={item.href}
            className="
              flex items-center justify-center w-full md:w-auto
              gap-x-3 px-6 py-3
              border-2 border-primary-500 rounded-full
              text-primary-500 font-bold uppercase
              transition-colors duration-300
              hover:bg-primary-500 hover:text-white
            "
          >
            {item.icon}
            <span>{item.text}</span>
          </a>
        ))}
      </div>

      <section className="relative w-full flex items-center justify-center overflow-hidden">
        <div className="grid [grid-area:1/1]">
          <div
            className="
              [grid-area:1/1] w-[90vw] max-w-sm md:max-w-xl lg:max-w-3xl h-auto aspect-[4/3]
              bg-black/30 rounded-3xl blur-3xl opacity-50 z-10
            "
          />

          <div className="[grid-area:1/1] flex items-center z-20 pointer-events-none">
            <div className="flex animate-[marquee_30s_linear_infinite]">
              <span className="mx-8 text-[18vw] md:text-[15vw] font-black text-primary-500/80 text-shadow-glow">
                {project.title.toUpperCase()}
              </span>
              <span className="mx-8 text-[18vw] md:text-[15vw] font-black text-primary-500/80 text-shadow-glow">
                {project.title.toUpperCase()}
              </span>
              <span className="mx-8 text-[18vw] md:text-[15vw] font-black text-primary-500/80 text-shadow-glow">
                {project.title.toUpperCase()}
              </span>
              <span className="mx-8 text-[18vw] md:text-[15vw] font-black text-primary-500/80 text-shadow-glow">
                {project.title.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="[grid-area:1/1] relative flex items-center justify-center z-30">
            <div
              className="
              relative w-fit max-w-sm md:max-w-xl lg:max-w-3xl
              p-3 md:p-4 bg-gradient-to-b from-white to-primary-100 rounded-3xl shadow-2xl shadow-primary-100/50
            "
            >
              <div className="w-full h-full rounded-xl">
                <Image
                  src={project.keyFunctionImageUrl}
                  alt="App Screenshot"
                  width={1200}
                  height={800}
                  className="w-full h-auto md:h-[480px] object-cover rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="project-info"
        className="w-full bg-white rounded-3xl p-4 sm:p-8"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex flex-col gap-y-6">
              <div className="flex items-center gap-x-4">
                <div className="p-4 bg-primary-100/50 rounded-full">
                  <ProjectInfoIcon className="w-8 h-8 text-primary-500" />
                </div>

                <h1 className="text-2xl font-bold uppercase text-primary-500">
                  Project Info
                </h1>
              </div>

              <div className="space-y-4">
                <div className="flex gap-x-4">
                  <div className="w-16 h-16">
                    <Image
                      src={project.logoUrl}
                      alt={`${project.title} Logo`}
                      width={64}
                      height={64}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  <h2 className="text-[32px] font-black text-primary-500">
                    {project.title}
                  </h2>
                </div>

                <p className="mt-2 text-lg text-primary-300">
                  {project.thesisTh}
                </p>
                <p className="mt-2 text-base text-grey-scale-placeholder">
                  {project.thesis}
                </p>
              </div>

              <div className="flex flex-col gap-y-4 text-base text-gray-700">
                <DetailItem
                  icon={<TechnologyIcon className="w-5 h-5" />}
                  label="Technology"
                  value={project.type}
                />
                <DetailItem
                  icon={<CategoryIcon className="w-5 h-5" />}
                  label="Category"
                  value={project.category}
                />
                <DetailItem
                  icon={<AdvisorIcon className="w-5 h-5" />}
                  label="Advisor"
                  value={project.advisor}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-full h-auto aspect-[16/9] rounded-lg bg-gray-200 overflow-hidden">
                <Image
                  src={project.projectInfoImageUrl[0]}
                  alt="Main project visual"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="w-full h-auto aspect-[4/3] rounded-lg bg-gray-200 overflow-hidden">
                  <Image
                    src={project.projectInfoImageUrl[1]}
                    alt="Sub project visual 1"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-auto aspect-[4/3] rounded-lg bg-gray-200 overflow-hidden">
                  <Image
                    src={project.projectInfoImageUrl[2]}
                    alt="Sub project visual 2"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-12">
            <section>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                ขอบเขต (SCOPE)
              </h3>
              <p className="text-primary-300 leading-relaxed">
                {project.scopeTh}
              </p>
              <p className="text-grey-scale-placeholder leading-relaxed">
                {project.scope}
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                รายละเอียดของโครงการ (IDEA CONCEPT)
              </h3>
              <p className="text-primary-300 leading-relaxed">
                {project.ideaConceptTh}
              </p>
              <p className="text-grey-scale-placeholder leading-relaxed">
                {project.ideaConcept}
              </p>
            </section>
          </div>
        </div>
      </section>

      <section id="stack" className="w-full bg-white rounded-3xl p-4 sm:p-8">
        <div className="container mx-auto">
          {/* === ส่วนหัวข้อ === */}
          <div className="flex items-center gap-x-4 mb-8">
            <div className="flex items-center justify-center w-14 h-14 bg-primary-100/50 rounded-full">
              <StackIcon className="w-8 h-8 text-primary-500" />
            </div>
            <h2 className="text-3xl font-bold text-primary-500">STACK</h2>
          </div>

          {/* === Grid ที่ปรับเปลี่ยนตามขนาดจอ === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stackData.map((stackItem) => (
              <StackCard
                key={stackItem.title}
                icon={stackItem.icon}
                title={stackItem.title}
                stacks={stackItem.stacks}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="testing"
        className="w-full bg-white rounded-3xl p-4 sm:p-8 lg:p-12"
      >
        <div className="flex items-center gap-x-4 mb-8">
          <div className="flex items-center justify-center w-14 h-14 bg-primary-100/50 rounded-full">
            <TestingIcon className="w-8 h-8 text-primary-500" />
          </div>
          <h2 className="text-3xl font-bold text-primary-500">
            TESTING & FEEDBACK
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="relative w-full max-w-md mx-auto aspect-square">
            <div className="grid grid-cols-2 gap-2 w-full h-full">
              {project.testImageUrl.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-full overflow-hidden bg-gray-200"
                >
                  <Image
                    src={image}
                    alt={`Feedback image ${index}`}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <StarIcon className="w-2/5 h-2/5 text-primary-500/90 drop-shadow-lg" />
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary-800 mb-2">
                กลุ่มเป้าหมาย (Target Group)
              </h3>
              <p className="text-primary-300 leading-relaxed">
                {project.targetGroupTh}
              </p>
              <p className="text-grey-scale-placeholder leading-relaxed">
                {project.targetGroup}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex-1 border border-grey-scale-stroke rounded-2xl p-4 flex items-center justify-center gap-x-4">
                <span className="text-5xl font-bold text-white px-8 pb-3 bg-primary-300 rounded-full">
                  {project.designTestScore}
                </span>
                <span className="text-base text-primary-800 font-semibold">
                  ค่าเฉลี่ยด้านการออกแบบ
                </span>
              </div>
              <div className="flex-1 border border-grey-scale-stroke rounded-2xl p-4 flex items-center justify-center gap-x-4">
                <span className="text-5xl font-bold text-white px-8 pb-3 bg-primary-300 rounded-full">
                  {project.usefulTestScore}
                </span>
                <span className="text-base text-primary-800 font-semibold">
                  ค่าเฉลี่ยด้านการใช้งาน
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-grey-scale-stroke my-8" />

        <h3 className="text-xl font-bold text-primary-800 mb-4">
          ความคิดเห็นจากผู้ใช้งาน
        </h3>
        <ul className="space-y-2 list-disc list-inside text-primary-500">
          {project.comments.map((comment, index) => (
            <li key={index}>
              <span className="text-primary-500">{comment}</span>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="key-function"
        className="w-full bg-white rounded-3xl p-4 sm:p-8 lg:p-12"
      >
        <div className="container mx-auto">
          <div className="flex items-center gap-x-4 mb-8">
            <div className="flex items-center justify-center w-14 h-14 bg-primary-100/50 rounded-full">
              <KeyFunctionIcon className="w-8 h-8 text-primary-500" />
            </div>
            <h2 className="text-3xl font-bold text-primary-500">
              KEY FUNCTION
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="w-full h-[auto] aspect-[4/5] rounded-lg bg-gray-200 overflow-hidden">
              <Image
                src={project.keyFunctionImageUrl}
                alt="Key function visual"
                width={500}
                height={360}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-y-4">
              {project.functions.map((func) => (
                <FunctionCard
                  key={func.id}
                  number={String(func.id)}
                  title_en={func.title_en}
                  title_th={func.title_th}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="screenshot"
        className="w-full bg-white rounded-3xl p-4 sm:p-8"
      >
        <div className="container mx-auto">
          <div className="flex items-center gap-x-4 mb-6">
            <div className="flex items-center justify-center w-14 h-14 bg-primary-100/50 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M4.66667 8.1665C4.66667 7.52484 5.19167 6.99984 5.83333 6.99984H24.5C25.1417 6.99984 25.6667 6.47484 25.6667 5.83317C25.6667 5.1915 25.1417 4.6665 24.5 4.6665H4.66667C3.38333 4.6665 2.33333 5.7165 2.33333 6.99984V19.8332H1.75C0.781667 19.8332 0 20.6148 0 21.5832C0 22.5515 0.781667 23.3332 1.75 23.3332H14.5833C15.5517 23.3332 16.3333 22.5515 16.3333 21.5832C16.3333 20.6148 15.5517 19.8332 14.5833 19.8332H4.66667V8.1665ZM26.8333 9.33317H19.8333C19.1917 9.33317 18.6667 9.85817 18.6667 10.4998V22.1665C18.6667 22.8082 19.1917 23.3332 19.8333 23.3332H26.8333C27.475 23.3332 28 22.8082 28 22.1665V10.4998C28 9.85817 27.475 9.33317 26.8333 9.33317ZM25.6667 19.8332H21V11.6665H25.6667V19.8332Z"
                  fill="#FE481C"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-primary-500">SCREENSHOTS</h2>
          </div>

          <div className="flex gap-x-6 overflow-x-auto pb-4">
            {project.screenShots.map((screenShot, index) => (
              <ScreenshotCard
                key={index}
                imageUrl={screenShot}
                title={project.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="creator"
        className="relative w-full rounded-3xl overflow-hidden py-16 sm:py-24"
      >
        <CreatorBackgroundBlob
          className="
      absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 
      w-[50rem] h-auto text-primary-100/20 z-0
      pointer-events-none
    "
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="flex flex-col gap-y-3 text-center lg:text-left items-center lg:items-start order-last lg:order-first">
              <div className="flex items-center gap-x-3 mb-2">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100/80 rounded-full">
                  <CreatorIcon className="w-7 h-7 text-primary-500" />
                </div>
                <h2 className="text-2xl font-bold text-primary-500">CREATOR</h2>
              </div>

              <p className="text-primary-700">เจ้าของผลงาน {project.title}</p>
              <h3 className="text-[32px] md:text-4xl font-bold text-primary-700">
                {project.creator} ({project.nickName})
              </h3>
              <p className="text-2xl font-bold text-primary-700">
                {project.creatorTh} ({project.nickNameTh})
              </p>

              <Link
                href={`/creators/${project.studentId}`}
                className="
                mt-4 inline-flex items-center justify-center gap-x-2 
                px-6 py-3 bg-primary-200 text-white font-semibold rounded-full
                shadow-lg shadow-primary-500/30
                transition-transform hover:scale-105 hover:bg-primary-500
              "
              >
                มาทำความรู้จักกับน้อง{project.nickNameTh}
                <ChevronRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative w-full max-w-lg mx-auto aspect-[4/3]">
              <div className="absolute top-0 right-0 w-[70%] h-[90%] bg-gray-200 rounded-2xl shadow-lg">
                <Image
                  src={project.mainProfile}
                  alt="Creator main photo"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 1024px) 70vw, 35vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[55%] h-auto aspect-square bg-gray-300 rounded-2xl shadow-xl border-4 border-grey-scale-white">
                <Image
                  src={project.subProfile}
                  alt="Creator sub photo"
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 1024px) 55vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="otherProjects"
        className="w-full bg-white rounded-3xl p-4 sm:p-8"
      >
        <div className="container mx-auto">
          <div className="flex items-center gap-x-4 mb-6">
            <div className="flex items-center gap-x-3 mb-2">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-100/80 rounded-full">
                <GlobalSearchIcon className="w-7 h-7 text-primary-500" />
              </div>
              <h2 className="text-2xl font-bold text-primary-500">
                OTHER PROJECTS
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
            {allProjects
              .filter((p) => p.id !== projectId)
              .slice(0, 4)
              .map((project) => (
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
      </section>
    </div>
  );
};
export default ProjectDetailPage;
