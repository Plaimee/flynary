import CreatorCard from "@/components/CreatorCard";
import { allProjects } from "@/lib/data";
import Link from "next/link";

const CreatorsPage = () => {
  return (
    <div className="default-layout">
      <div className="text-[32px] font-bold w-full text-center text-primary-800 pb-16">
        Creators
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-32 w-full">
        {allProjects.map((creator) => (
          <Link href={`/creators/${creator.studentId}`} key={creator.id}>
            <CreatorCard
              key={creator.id}
              creator={creator.nickName}
              title={creator.title}
              mainProfile={creator.mainProfile}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CreatorsPage;
