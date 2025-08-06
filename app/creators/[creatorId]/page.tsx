import Breadcrumbs from "@/components/Breadcrumbs";
import { allProjects } from "@/lib/data";
import Image from "next/image";
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
      <div className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden shadow-lg mb-8">
        <Image
          src={creator.mainProfile}
          alt={creator.creator}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* ส่วนเนื้อหา */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-600 mb-6">By {creator.creator}</p>
        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-800 text-base leading-relaxed">
            {creator.thesisTh}
          </p>
        </div>
      </div>
    </div>
  );
};
export default CreatorDetailPage;
