import Breadcrumbs from "@/components/Breadcrumbs";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PercentIcon,
} from "@/components/Icon";
import { allProjects } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allProjects.map((infographic) => ({
    infoId: infographic.id.toString(),
  }));
}

const InfographicDetailPage = ({
  params,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}) => {
  const infographicId = parseInt(params.infoId, 10);
  const infographic = allProjects.find(
    (infographic) => infographic.id === infographicId
  );

  if (!infographic) {
    notFound();
  }

  const breadcrumbData = [
    { label: "Bit to Fly", href: "/bit-to-fly" },
    { label: infographic.title, href: `/bit-to-fly/${infographicId}` },
  ];

  const currentIndex = allProjects.findIndex(
    (infographic) => infographic.id.toString() === params.infoId
  );

  const prevIndex =
    (currentIndex - 1 + allProjects.length) % allProjects.length;
  const nextIndex = (currentIndex + 1) % allProjects.length;

  const prevProject = allProjects[prevIndex];
  const nextProject = allProjects[nextIndex];

  return (
    <div className="default-layout">
      <div className="flex w-full align-baseline">
        <Breadcrumbs crumbs={breadcrumbData} />
      </div>

      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href={`/bit-to-fly/${prevProject.id}`}
          className="p-2 border border-orange-500/60 rounded-lg hover:bg-orange-500/20 transition-colors"
          aria-label={`Go to previous project: ${prevProject.title}`}
        >
          <ChevronLeftIcon className="h-6 w-6 text-orange-500" />
        </Link>

        <h2 className="text-lg md:text-2xl font-bold text-orange-500 text-center truncate px-4">
          {infographic.title}
        </h2>

        <Link
          href={`/bit-to-fly/${nextProject.id}`}
          className="p-2 border border-orange-500/60 rounded-lg hover:bg-orange-500/20 transition-colors"
          aria-label={`Go to next project: ${nextProject.title}`}
        >
          <ChevronRightIcon className="h-6 w-6 text-orange-500" />
        </Link>
      </div>

      <Image
        src={infographic.infographicUrl}
        alt={`${infographic.title} infographic`}
        width={1080}
        height={1530}
      />

      <div className="bg-white rounded-3xl p-6 sm:p-10">
        <header className="flex items-center gap-x-4 mb-5">
          <div className="flex-shrink-0 bg-primary-100/20 p-3 rounded-full">
            <PercentIcon className="w-6 h-6 text-orange-600" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary-500">
            Title Infographic
          </h1>
        </header>

        <p className="text-primary-300 leading-relaxed mb-10 text-base md:text-lg">
          ผลงานนี้ได้รับคำชมเรื่อง Idea concept
          ซึ่งกล่าวถึงความตระหนักถึงความตาย หลังจากที่ได้สัมภาษณ์หลายๆ คน
          ก็ยังมีความกังวลไม่อยากพูดถึงเรื่องนี้
          เพราะอาจจะติดในเรื่องศาสนาและความเชื่อ ทำให้รู้สึกกังวลหรือกลัว
          แต่ผลงานชิ้นนี้จะไม่ทำให้คุณรู้สึกแบบนั้นเลย?
        </p>

        <div className="flex flex-col items-center gap-6 p-4 text-center sm:flex-row sm:text-left sm:items-center">
          {/* ส่วนรูปภาพ (ซ้าย) */}
          <div className="relative h-28 w-28 flex-shrink-0 md:h-32 md:w-32">
            <Image
              src={infographic.mainProfile}
              alt={`Profile of ${infographic.creator}`}
              fill
              sizes="(max-width: 768px) 112px, 128px"
              className="rounded-full object-cover"
            />
          </div>

          {/* ส่วนข้อความและปุ่ม (ขวา) */}
          <div className="flex flex-col items-center gap-y-4 sm:items-start">
            {/* ข้อความ Created by */}
            <div>
              <p className="text-base text-primary-300">Created By</p>
              <p className="text-xl font-semibold text-primary-500 md:text-2xl">
                {infographic.creator} ({infographic.nickName})
              </p>
            </div>

            {/* ปุ่ม Link */}
            <Link
              href={`/creators/${infographic.studentId}`}
              className="inline-flex items-center justify-center gap-x-2 rounded-full bg-primary-300 px-6 py-3 font-bold text-white shadow-md transform transition-transform hover:scale-105 hover:bg-primary-500"
            >
              มารู้จักกับน้อง{infographic.nickNameTh}
              <ChevronRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfographicDetailPage;
