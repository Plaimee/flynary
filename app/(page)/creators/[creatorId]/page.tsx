import Breadcrumbs from "@/components/Breadcrumbs";
import { WingBeatsIcon } from "@/components/Icon";
import InterviewList from "@/components/InterviewList";
import ToolRecommendSection from "@/components/ToolRecommendedSection";
import { allProjects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allProjects.map((creator) => ({
    creatorId: creator.studentId,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CreatorDetailPage = ({ params }: { params: any }) => {
  const creatorId = parseInt(params.creatorId, 10);
  const creator = allProjects.find(
    (creator) => creator.studentId === creatorId.toString()
  );

  if (!creator) {
    notFound();
  }

  const breadcrumbData = [
    { label: "Creators", href: "/creators" },
    { label: creator.nickName, href: `/creators/${creatorId}` },
  ];

  return (
    <div className="default-layout">
      <div className="flex w-full align-baseline">
        <Breadcrumbs crumbs={breadcrumbData} />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full">
        <div className="w-full lg:w-2/5 flex flex-col p-6 md:p-8s">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <Image
              src={creator.subProfile}
              alt={`${creator.creator}'s profile picture`}
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover  flex-shrink-0"
            />
            <div className="flex-grow">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-grey-scale-grey mb-1">
                <Image
                  src={creator.logoUrl}
                  alt="Project icon"
                  width={20}
                  height={20}
                  className="w-12 h-12 rounded-full"
                />
                <span>เจ้าของผลงาน {creator.title}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary-800">
                {creator.creator} ({creator.nickName})
              </h1>
              <h1 className="text-base md:text-base text-primary-300">
                {creator.creatorTh} ({creator.nickNameTh})
              </h1>
            </div>
          </div>

          {/* Quote Box */}
          <div className="relative bg-white my-6 md:my-8 p-6 rounded-2xl shadow-inner text-center">
            <span className="absolute top-2 left-4 text-5xl text-primary-500 opacity-80">
              “
            </span>
            <p className="text-lg font-semibold text-primary-500 z-10 relative px-4">
              {creator.quote}
            </p>
            <span className="absolute bottom-0 right-4 text-5xl text-primary-500 opacity-80">
              ”
            </span>
          </div>

          <div className="mt-auto pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-primary-300">Email</p>
              <p className="font-bold text-primary-800">{creator.email}</p>
            </div>
            <div className="sm:text-left">
              <p className="text-primary-300">LinkedIn</p>
              <Link
                href={creator.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary-800 hover:underline break-all"
              >
                {creator.linkedIn}
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/5 relative min-h-96 lg:min-h-0 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={creator.keyFunctionImageUrl}
            alt={`Work by ${creator.creator}`}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary-800 mb-4">
          After Release
        </h1>

        <div className="w-full aspect-video overflow-hidden rounded-lg flex items-center justify-center mb-6 sm:mb-8 shadow-lg">
          <Image
            src={creator.testImageUrl[0]}
            alt={`${creator.creator}'s profile picture`}
            width={1320}
            height={500}
            className="w-full h-[790px] object-cover  flex-shrink-0"
          />
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-primary-500 mb-4">
            ความรู้สึกหลังจากที่จัดงานเตรียมงานจุลนิพนธ์
          </h2>
          <p className="text-base sm:text-lg text-grey-scale-black leading-relaxed">
            {creator.afterExhibited}
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <header className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-full bg-primary-100/10">
            <WingBeatsIcon className="w-8 h-8 text-orange-500" />
          </div>

          <h1 className="text-2xl font-bold text-orange-500 tracking-wider">
            {creator.nickName.toUpperCase()}&apos;S WINGBEATS
          </h1>
        </header>

        <InterviewList creator={creator} />
      </div>

      <div className="flex flex-col w-full">
        <ToolRecommendSection creator={creator} />
      </div>
    </div>
  );
};
export default CreatorDetailPage;
