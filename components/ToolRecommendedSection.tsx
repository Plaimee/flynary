"use client";
import { ToolRecommendedIcon } from "./Icon";
import ToolRecommended from "./ToolRecommended";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ToolRecommendSection = ({ creator }: { creator: any }) => {
  if (!creator.ToolRecommended || creator.ToolRecommended.length === 0) {
    return null;
  }

  return (
    <>
      <header className="flex items-center gap-4 mb-8">
        <div className="bg-primary-100/10 rounded-full p-2">
          <ToolRecommendedIcon className="w-6 h-6 text-orange-500" />
        </div>
        <h2 className="text-2xl font-bold text-orange-500 tracking-wider">
          TOOL RECOMMEND
        </h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {creator.ToolRecommended.map((rec: any) => (
          <ToolRecommended key={rec.id} tool={rec.tool} />
        ))}
      </div>
    </>
  );
};

export default ToolRecommendSection;
