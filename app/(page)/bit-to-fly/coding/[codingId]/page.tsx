import Breadcrumbs from "@/components/Breadcrumbs";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PercentIcon,
} from "@/components/Icon";
import { ArticleCodingData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return ArticleCodingData.map((infographic) => ({
    codingId: infographic.id.toString(),
  }));
}

const InfographicCodingPage = ({
  params,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}) => {
  const infographicId = parseInt(params.codingId, 10);
  const infographic = ArticleCodingData.find(
    (infographic) => infographic.id === infographicId
  );

  if (!infographic) {
    notFound();
  }

  const breadcrumbData = [
    { label: "Bit to Fly", href: "/bit-to-fly" },
    { label: infographic.title, href: `/bit-to-fly/coding/${infographicId}` },
  ];

  const currentIndex = ArticleCodingData.findIndex(
    (infographic) => infographic.id.toString() === params.codingId
  );

  const prevIndex =
    (currentIndex - 1 + ArticleCodingData.length) % ArticleCodingData.length;
  const nextIndex = (currentIndex + 1) % ArticleCodingData.length;

  const prevProject = ArticleCodingData[prevIndex];
  const nextProject = ArticleCodingData[nextIndex];

  return (
    <div className="default-layout">
      <div className="flex w-full align-baseline">
        <Breadcrumbs crumbs={breadcrumbData} />
      </div>

      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href={`/bit-to-fly/coding/${prevProject.id}`}
          className="p-2 border border-orange-500/60 rounded-lg hover:bg-orange-500/20 transition-colors"
          aria-label={`Go to previous project: ${prevProject.title}`}
        >
          <ChevronLeftIcon className="h-6 w-6 text-orange-500" />
        </Link>

        <h2 className="text-lg md:text-2xl font-bold text-orange-500 text-center truncate px-4">
          {infographic.title}
        </h2>

        <Link
          href={`/bit-to-fly/coding/${nextProject.id}`}
          className="p-2 border border-orange-500/60 rounded-lg hover:bg-orange-500/20 transition-colors"
          aria-label={`Go to next project: ${nextProject.title}`}
        >
          <ChevronRightIcon className="h-6 w-6 text-orange-500" />
        </Link>
      </div>

      <Image
        src={infographic.imageUrl}
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
            {infographic.title}
          </h1>
        </header>

        <p className="text-primary-300 leading-relaxed mb-10 text-base md:text-lg">
          ผลงานนี้ได้รับคำชมเรื่อง Idea concept
          ซึ่งกล่าวถึงความตระหนักถึงความตาย หลังจากที่ได้สัมภาษณ์หลายๆ คน
          ก็ยังมีความกังวลไม่อยากพูดถึงเรื่องนี้
          เพราะอาจจะติดในเรื่องศาสนาและความเชื่อ ทำให้รู้สึกกังวลหรือกลัว
          แต่ผลงานชิ้นนี้จะไม่ทำให้คุณรู้สึกแบบนั้นเลย?
        </p>
      </div>
    </div>
  );
};
export default InfographicCodingPage;
