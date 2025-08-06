import Breadcrumbs from "@/components/Breadcrumbs";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PercentIcon,
} from "@/components/Icon";
import { ArticleGraphicData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return ArticleGraphicData.map((infographic) => ({
    designId: infographic.id.toString(),
  }));
}

const InfographicDesignPage = ({
  params,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}) => {
  const infographicId = parseInt(params.designId, 10);
  const infographic = ArticleGraphicData.find(
    (infographic) => infographic.id === infographicId
  );

  if (!infographic) {
    notFound();
  }

  const breadcrumbData = [
    { label: "Bit to Fly", href: "/bit-to-fly" },
    { label: infographic.title, href: `/bit-to-fly/design/${infographicId}` },
  ];

  const currentIndex = ArticleGraphicData.findIndex(
    (infographic) => infographic.id.toString() === params.designId
  );

  const prevIndex =
    (currentIndex - 1 + ArticleGraphicData.length) % ArticleGraphicData.length;
  const nextIndex = (currentIndex + 1) % ArticleGraphicData.length;

  const prevProject = ArticleGraphicData[prevIndex];
  const nextProject = ArticleGraphicData[nextIndex];

  return (
    <div className="default-layout">
      <div className="flex w-full align-baseline">
        <Breadcrumbs crumbs={breadcrumbData} />
      </div>

      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href={`/bit-to-fly/design/${prevProject.id}`}
          className="p-2 border border-orange-500/60 rounded-lg hover:bg-orange-500/20 transition-colors"
          aria-label={`Go to previous project: ${prevProject.title}`}
        >
          <ChevronLeftIcon className="h-6 w-6 text-orange-500" />
        </Link>

        <h2 className="text-lg md:text-2xl font-bold text-orange-500 text-center truncate px-4">
          {infographic.title}
        </h2>

        <Link
          href={`/bit-to-fly/design/${nextProject.id}`}
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
          {infographic.description}
        </p>
      </div>
    </div>
  );
};
export default InfographicDesignPage;
